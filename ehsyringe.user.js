// ==UserScript==
// @name        EhSyringe
// @version     2.4.0
// @author      EhTagTranslation
// @description E 站注射器，将中文翻译注入到 E 站体内。包含全站 UI 翻译和超过 10000 条标签翻译，标签数据库持续更新中。
// @homepage    https://github.com/EhTagTranslation/EhSyringe
// @supportURL  https://github.com/EhTagTranslation/EhSyringe/issues
// @match       *://exhentai.org/*
// @match       *://e-hentai.org/*
// @match       *://*.exhentai.org/*
// @match       *://*.e-hentai.org/*
// @namespace   https://github.com/EhTagTranslation/EhSyringe
// @license     MIT
// @compatible  firefox >= 60
// @compatible  edge >= 16
// @compatible  chrome >= 61
// @compatible  safari >= 11
// @compatible  opera >= 48
// @exclude     *://forums.e-hentai.org/*
// @icon        https://cdn.jsdelivr.net/gh/EhTagTranslation/EhSyringe@42c27ebc4871a2f9d28e0bb321032eeb5962f2c7/src/assets/logo.svg
// @updateURL   https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.meta.js
// @downloadURL https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.user.js
// @run-at      document-start
// @grant       unsafeWindow
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addValueChangeListener
// @grant       GM_removeValueChangeListener
// @grant       GM_openInTab
// @grant       GM_notification
// ==/UserScript==

/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5666);


/***/ }),

/***/ 2959:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

;// CONCATENATED MODULE: ./node_modules/typedi/esm5/token.class.js
/**
 * Used to create unique typed service identifier.
 * Useful when service has only interface, but don't have a class.
 */
var Token = /** @class */ (function () {
    /**
     * @param name Token name, optional and only used for debugging purposes.
     */
    function Token(name) {
        this.name = name;
    }
    return Token;
}());

//# sourceMappingURL=token.class.js.map
;// CONCATENATED MODULE: ./node_modules/typedi/esm5/error/service-not-found.error.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Thrown when requested service was not found.
 */
var ServiceNotFoundError = /** @class */ (function (_super) {
    __extends(ServiceNotFoundError, _super);
    function ServiceNotFoundError(identifier) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.name = 'ServiceNotFoundError';
        /** Normalized identifier name used in the error message. */
        _this.normalizedIdentifier = '<UNKNOWN_IDENTIFIER>';
        if (typeof identifier === 'string') {
            _this.normalizedIdentifier = identifier;
        }
        else if (identifier instanceof Token) {
            _this.normalizedIdentifier = "Token<" + (identifier.name || 'UNSET_NAME') + ">";
        }
        else if (identifier && (identifier.name || ((_a = identifier.prototype) === null || _a === void 0 ? void 0 : _a.name))) {
            _this.normalizedIdentifier =
                "MaybeConstructable<" + identifier.name + ">" ||
                    0;
        }
        return _this;
    }
    Object.defineProperty(ServiceNotFoundError.prototype, "message", {
        get: function () {
            return ("Service with \"" + this.normalizedIdentifier + "\" identifier was not found in the container. " +
                "Register it before usage via explicitly calling the \"Container.set\" function or using the \"@Service()\" decorator.");
        },
        enumerable: false,
        configurable: true
    });
    return ServiceNotFoundError;
}(Error));

//# sourceMappingURL=service-not-found.error.js.map
;// CONCATENATED MODULE: ./node_modules/typedi/esm5/error/cannot-instantiate-value.error.js
var cannot_instantiate_value_error_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Thrown when DI cannot inject value into property decorated by @Inject decorator.
 */
var CannotInstantiateValueError = /** @class */ (function (_super) {
    cannot_instantiate_value_error_extends(CannotInstantiateValueError, _super);
    function CannotInstantiateValueError(identifier) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.name = 'CannotInstantiateValueError';
        /** Normalized identifier name used in the error message. */
        _this.normalizedIdentifier = '<UNKNOWN_IDENTIFIER>';
        // TODO: Extract this to a helper function and share between this and NotFoundError.
        if (typeof identifier === 'string') {
            _this.normalizedIdentifier = identifier;
        }
        else if (identifier instanceof Token) {
            _this.normalizedIdentifier = "Token<" + (identifier.name || 'UNSET_NAME') + ">";
        }
        else if (identifier && (identifier.name || ((_a = identifier.prototype) === null || _a === void 0 ? void 0 : _a.name))) {
            _this.normalizedIdentifier =
                "MaybeConstructable<" + identifier.name + ">" ||
                    0;
        }
        return _this;
    }
    Object.defineProperty(CannotInstantiateValueError.prototype, "message", {
        get: function () {
            return ("Cannot instantiate the requested value for the \"" + this.normalizedIdentifier + "\" identifier. " +
                "The related metadata doesn't contain a factory or a type to instantiate.");
        },
        enumerable: false,
        configurable: true
    });
    return CannotInstantiateValueError;
}(Error));

//# sourceMappingURL=cannot-instantiate-value.error.js.map
;// CONCATENATED MODULE: ./node_modules/typedi/esm5/empty.const.js
var EMPTY_VALUE = Symbol('EMPTY_VALUE');
//# sourceMappingURL=empty.const.js.map
;// CONCATENATED MODULE: ./node_modules/typedi/esm5/container-instance.class.js
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





/**
 * TypeDI can have multiple containers.
 * One container is ContainerInstance.
 */
var ContainerInstance = /** @class */ (function () {
    function ContainerInstance(id) {
        /** All registered services in the container. */
        this.services = [];
        this.id = id;
    }
    ContainerInstance.prototype.has = function (identifier) {
        return !!this.findService(identifier);
    };
    ContainerInstance.prototype.get = function (identifier) {
        var globalContainer = Container.of(undefined);
        var globalService = globalContainer.findService(identifier);
        var scopedService = this.findService(identifier);
        if (globalService && globalService.global === true)
            return this.getServiceValue(globalService);
        if (scopedService)
            return this.getServiceValue(scopedService);
        /** If it's the first time requested in the child container we load it from parent and set it. */
        if (globalService && this !== globalContainer) {
            var clonedService = __assign({}, globalService);
            clonedService.value = EMPTY_VALUE;
            /**
             * We need to immediately set the empty value from the root container
             * to prevent infinite lookup in cyclic dependencies.
             */
            this.set(clonedService);
            var value = this.getServiceValue(clonedService);
            this.set(__assign(__assign({}, clonedService), { value: value }));
            return value;
        }
        if (globalService)
            return this.getServiceValue(globalService);
        throw new ServiceNotFoundError(identifier);
    };
    ContainerInstance.prototype.getMany = function (identifier) {
        var _this = this;
        return this.findAllServices(identifier).map(function (service) { return _this.getServiceValue(service); });
    };
    ContainerInstance.prototype.set = function (identifierOrServiceMetadata, value) {
        var _this = this;
        if (identifierOrServiceMetadata instanceof Array) {
            identifierOrServiceMetadata.forEach(function (data) { return _this.set(data); });
            return this;
        }
        if (typeof identifierOrServiceMetadata === 'string' || identifierOrServiceMetadata instanceof Token) {
            return this.set({
                id: identifierOrServiceMetadata,
                type: null,
                value: value,
                factory: undefined,
                global: false,
                multiple: false,
                eager: false,
                transient: false,
            });
        }
        if (typeof identifierOrServiceMetadata === 'function') {
            return this.set({
                id: identifierOrServiceMetadata,
                // TODO: remove explicit casting
                type: identifierOrServiceMetadata,
                value: value,
                factory: undefined,
                global: false,
                multiple: false,
                eager: false,
                transient: false,
            });
        }
        var newService = __assign({ id: new Token('UNREACHABLE'), type: null, factory: undefined, value: EMPTY_VALUE, global: false, multiple: false, eager: false, transient: false }, identifierOrServiceMetadata);
        var service = this.findService(newService.id);
        if (service && service.multiple !== true) {
            Object.assign(service, newService);
        }
        else {
            this.services.push(newService);
        }
        if (newService.eager) {
            this.get(newService.id);
        }
        return this;
    };
    /**
     * Removes services with a given service identifiers.
     */
    ContainerInstance.prototype.remove = function (identifierOrIdentifierArray) {
        var _this = this;
        if (Array.isArray(identifierOrIdentifierArray)) {
            identifierOrIdentifierArray.forEach(function (id) { return _this.remove(id); });
        }
        else {
            this.services = this.services.filter(function (service) {
                if (service.id === identifierOrIdentifierArray) {
                    _this.destroyServiceInstance(service);
                    return false;
                }
                return true;
            });
        }
        return this;
    };
    /**
     * Completely resets the container by removing all previously registered services from it.
     */
    ContainerInstance.prototype.reset = function (options) {
        var _this = this;
        if (options === void 0) { options = { strategy: 'resetValue' }; }
        switch (options.strategy) {
            case 'resetValue':
                this.services.forEach(function (service) { return _this.destroyServiceInstance(service); });
                break;
            case 'resetServices':
                this.services.forEach(function (service) { return _this.destroyServiceInstance(service); });
                this.services = [];
                break;
            default:
                throw new Error('Received invalid reset strategy.');
        }
        return this;
    };
    /**
     * Returns all services registered with the given identifier.
     */
    ContainerInstance.prototype.findAllServices = function (identifier) {
        return this.services.filter(function (service) { return service.id === identifier; });
    };
    /**
     * Finds registered service in the with a given service identifier.
     */
    ContainerInstance.prototype.findService = function (identifier) {
        return this.services.find(function (service) { return service.id === identifier; });
    };
    /**
     * Gets the value belonging to `serviceMetadata.id`.
     *
     * - if `serviceMetadata.value` is already set it is immediately returned
     * - otherwise the requested type is resolved to the value saved to `serviceMetadata.value` and returned
     */
    ContainerInstance.prototype.getServiceValue = function (serviceMetadata) {
        var _a;
        var value = EMPTY_VALUE;
        /**
         * If the service value has been set to anything prior to this call we return that value.
         * NOTE: This part builds on the assumption that transient dependencies has no value set ever.
         */
        if (serviceMetadata.value !== EMPTY_VALUE) {
            return serviceMetadata.value;
        }
        /** If both factory and type is missing, we cannot resolve the requested ID. */
        if (!serviceMetadata.factory && !serviceMetadata.type) {
            throw new CannotInstantiateValueError(serviceMetadata.id);
        }
        /**
         * If a factory is defined it takes priority over creating an instance via `new`.
         * The return value of the factory is not checked, we believe by design that the user knows what he/she is doing.
         */
        if (serviceMetadata.factory) {
            /**
             * If we received the factory in the [Constructable<Factory>, "functionName"] format, we need to create the
             * factory first and then call the specified function on it.
             */
            if (serviceMetadata.factory instanceof Array) {
                var factoryInstance = void 0;
                try {
                    /** Try to get the factory from TypeDI first, if failed, fall back to simply initiating the class. */
                    factoryInstance = this.get(serviceMetadata.factory[0]);
                }
                catch (error) {
                    if (error instanceof ServiceNotFoundError) {
                        factoryInstance = new serviceMetadata.factory[0]();
                    }
                    else {
                        throw error;
                    }
                }
                value = factoryInstance[serviceMetadata.factory[1]](this, serviceMetadata.id);
            }
            else {
                /** If only a simple function was provided we simply call it. */
                value = serviceMetadata.factory(this, serviceMetadata.id);
            }
        }
        /**
         * If no factory was provided and only then, we create the instance from the type if it was set.
         */
        if (!serviceMetadata.factory && serviceMetadata.type) {
            var constructableTargetType = serviceMetadata.type;
            // setup constructor parameters for a newly initialized service
            var paramTypes = ((_a = Reflect) === null || _a === void 0 ? void 0 : _a.getMetadata('design:paramtypes', constructableTargetType)) || [];
            var params = this.initializeParams(constructableTargetType, paramTypes);
            // "extra feature" - always pass container instance as the last argument to the service function
            // this allows us to support javascript where we don't have decorators and emitted metadata about dependencies
            // need to be injected, and user can use provided container to get instances he needs
            params.push(this);
            value = new (constructableTargetType.bind.apply(constructableTargetType, __spreadArrays([void 0], params)))();
            // TODO: Calling this here, leads to infinite loop, because @Inject decorator registerds a handler
            // TODO: which calls Container.get, which will check if the requested type has a value set and if not
            // TODO: it will start the instantiation process over. So this is currently called outside of the if branch
            // TODO: after the current value has been assigned to the serviceMetadata.
            // this.applyPropertyHandlers(constructableTargetType, value as Constructable<unknown>);
        }
        /** If this is not a transient service, and we resolved something, then we set it as the value. */
        if (!serviceMetadata.transient && value !== EMPTY_VALUE) {
            serviceMetadata.value = value;
        }
        if (value === EMPTY_VALUE) {
            /** This branch should never execute, but better to be safe than sorry. */
            throw new CannotInstantiateValueError(serviceMetadata.id);
        }
        if (serviceMetadata.type) {
            this.applyPropertyHandlers(serviceMetadata.type, value);
        }
        return value;
    };
    /**
     * Initializes all parameter types for a given target service class.
     */
    ContainerInstance.prototype.initializeParams = function (target, paramTypes) {
        var _this = this;
        return paramTypes.map(function (paramType, index) {
            var paramHandler = Container.handlers.find(function (handler) {
                /**
                 * @Inject()-ed values are stored as parameter handlers and they reference their target
                 * when created. So when a class is extended the @Inject()-ed values are not inherited
                 * because the handler still points to the old object only.
                 *
                 * As a quick fix a single level parent lookup is added via `Object.getPrototypeOf(target)`,
                 * however this should be updated to a more robust solution.
                 *
                 * TODO: Add proper inheritance handling: either copy the handlers when a class is registered what
                 * TODO: has it's parent already registered as dependency or make the lookup search up to the base Object.
                 */
                return ((handler.object === target || handler.object === Object.getPrototypeOf(target)) && handler.index === index);
            });
            if (paramHandler)
                return paramHandler.value(_this);
            if (paramType && paramType.name && !_this.isPrimitiveParamType(paramType.name)) {
                return _this.get(paramType);
            }
            return undefined;
        });
    };
    /**
     * Checks if given parameter type is primitive type or not.
     */
    ContainerInstance.prototype.isPrimitiveParamType = function (paramTypeName) {
        return ['string', 'boolean', 'number', 'object'].includes(paramTypeName.toLowerCase());
    };
    /**
     * Applies all registered handlers on a given target class.
     */
    ContainerInstance.prototype.applyPropertyHandlers = function (target, instance) {
        var _this = this;
        Container.handlers.forEach(function (handler) {
            if (typeof handler.index === 'number')
                return;
            if (handler.object.constructor !== target && !(target.prototype instanceof handler.object.constructor))
                return;
            if (handler.propertyName) {
                instance[handler.propertyName] = handler.value(_this);
            }
        });
    };
    /**
     * Checks if the given service metadata contains a destroyable service instance and destroys it in place. If the service
     * contains a callable function named `destroy` it is called but not awaited and the return value is ignored..
     *
     * @param serviceMetadata the service metadata containing the instance to destroy
     * @param force when true the service will be always destroyed even if it's cannot be re-created
     */
    ContainerInstance.prototype.destroyServiceInstance = function (serviceMetadata, force) {
        if (force === void 0) { force = false; }
        /** We reset value only if we can re-create it (aka type or factory exists). */
        var shouldResetValue = force || !!serviceMetadata.type || !!serviceMetadata.factory;
        if (shouldResetValue) {
            /** If we wound a function named destroy we call it without any params. */
            if (typeof (serviceMetadata === null || serviceMetadata === void 0 ? void 0 : serviceMetadata.value)['destroy'] === 'function') {
                try {
                    serviceMetadata.value.destroy();
                }
                catch (error) {
                    /** We simply ignore the errors from the destroy function. */
                }
            }
            serviceMetadata.value = EMPTY_VALUE;
        }
    };
    return ContainerInstance;
}());

//# sourceMappingURL=container-instance.class.js.map
;// CONCATENATED MODULE: ./node_modules/typedi/esm5/container.class.js

/**
 * Service container.
 */
var Container = /** @class */ (function () {
    function Container() {
    }
    /**
     * Gets a separate container instance for the given instance id.
     */
    Container.of = function (containerId) {
        if (containerId === void 0) { containerId = 'default'; }
        if (containerId === 'default')
            return this.globalInstance;
        var container = this.instances.find(function (instance) { return instance.id === containerId; });
        if (!container) {
            container = new ContainerInstance(containerId);
            this.instances.push(container);
            // TODO: Why we are not reseting here? Let's reset here. (I have added the commented code.)
            // container.reset();
        }
        return container;
    };
    Container.has = function (identifier) {
        return this.globalInstance.has(identifier);
    };
    Container.get = function (identifier) {
        return this.globalInstance.get(identifier);
    };
    Container.getMany = function (id) {
        return this.globalInstance.getMany(id);
    };
    Container.set = function (identifierOrServiceMetadata, value) {
        this.globalInstance.set(identifierOrServiceMetadata, value);
        return this;
    };
    /**
     * Removes services with a given service identifiers.
     */
    Container.remove = function (identifierOrIdentifierArray) {
        this.globalInstance.remove(identifierOrIdentifierArray);
        return this;
    };
    /**
     * Completely resets the container by removing all previously registered services and handlers from it.
     */
    Container.reset = function (containerId) {
        if (containerId === void 0) { containerId = 'default'; }
        if (containerId == 'default') {
            this.globalInstance.reset();
            this.instances.forEach(function (instance) { return instance.reset(); });
        }
        else {
            var instance = this.instances.find(function (instance) { return instance.id === containerId; });
            if (instance) {
                instance.reset();
                this.instances.splice(this.instances.indexOf(instance), 1);
            }
        }
        return this;
    };
    /**
     * Registers a new handler.
     */
    Container.registerHandler = function (handler) {
        this.handlers.push(handler);
        return this;
    };
    /**
     * Helper method that imports given services.
     */
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    Container.import = function (services) {
        return this;
    };
    /**
     * All registered handlers. The @Inject() decorator uses handlers internally to mark a property for injection.
     **/
    Container.handlers = [];
    /**  Global container instance. */
    Container.globalInstance = new ContainerInstance('default');
    /** Other containers created using Container.of method. */
    Container.instances = [];
    return Container;
}());

//# sourceMappingURL=container.class.js.map
;// CONCATENATED MODULE: ./node_modules/typedi/esm5/decorators/service.decorator.js



function Service(optionsOrServiceIdentifier) {
    return function (targetConstructor) {
        var serviceMetadata = {
            id: targetConstructor,
            // TODO: Let's investigate why we receive Function type instead of a constructable.
            type: targetConstructor,
            factory: undefined,
            multiple: false,
            global: false,
            eager: false,
            transient: false,
            value: EMPTY_VALUE,
        };
        if (optionsOrServiceIdentifier instanceof Token || typeof optionsOrServiceIdentifier === 'string') {
            /** We received a Token or string ID. */
            serviceMetadata.id = optionsOrServiceIdentifier;
        }
        else if (optionsOrServiceIdentifier) {
            /** We received a ServiceOptions object. */
            serviceMetadata.id = optionsOrServiceIdentifier.id || targetConstructor;
            serviceMetadata.factory = optionsOrServiceIdentifier.factory || undefined;
            serviceMetadata.multiple = optionsOrServiceIdentifier.multiple || false;
            serviceMetadata.global = optionsOrServiceIdentifier.global || false;
            serviceMetadata.eager = optionsOrServiceIdentifier.eager || false;
            serviceMetadata.transient = optionsOrServiceIdentifier.transient || false;
        }
        Container.set(serviceMetadata);
    };
}
//# sourceMappingURL=service.decorator.js.map
;// CONCATENATED MODULE: ./src/services/index.ts


var services_Container = Container.of('default');
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function tslib_es6_extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_es6_assign = function() {
    tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_es6_assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

;// CONCATENATED MODULE: ./src/services/logger.ts




var Logger = function Logger() {
  var _this = this;

  _classCallCheck(this, Logger);

  this.prefix =  true ? '💉 脚本 ' : 0;
  this.log = console.log.bind(console, this.prefix);
  this.info = console.info.bind(console, this.prefix);
  this.warn = console.warn.bind(console, this.prefix);
  this.error = console.error.bind(console, this.prefix);
  this.debug = console.debug.bind(console, this.prefix);

  this.time = function (label) {
    var pLabel = "".concat(_this.prefix, " ").concat(label);
    console.time(pLabel);
    return {
      label: label,
      log: (console.timeLog || console.log).bind(console, pLabel),
      end: console.timeEnd.bind(console, pLabel)
    };
  };
};

Logger = __decorate([Service()], Logger);

;// CONCATENATED MODULE: ./node_modules/idb-keyval/dist/esm/index.js
function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = () => resolve(request.result);
        // @ts-ignore - file size hacks
        request.onabort = request.onerror = () => reject(request.error);
    });
}
function createStore(dbName, storeName) {
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    const dbp = promisifyRequest(request);
    return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) {
        defaultGetStoreFunc = createStore('keyval-store', 'keyval');
    }
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function esm_get(key, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function esm_set(key, value, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function setMany(entries, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        entries.forEach((entry) => store.put(entry[1], entry[0]));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function getMany(keys, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => Promise.all(keys.map((key) => promisifyRequest(store.get(key)))));
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function update(key, updater, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => 
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((resolve, reject) => {
        store.get(key).onsuccess = function () {
            try {
                store.put(updater(this.result), key);
                resolve(promisifyRequest(store.transaction));
            }
            catch (err) {
                reject(err);
            }
        };
    }));
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function del(key, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function clear(customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(customStore, callback) {
    return customStore('readonly', (store) => {
        // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
        // And openKeyCursor isn't supported by Safari.
        store.openCursor().onsuccess = function () {
            if (!this.result)
                return;
            callback(this.result);
            this.result.continue();
        };
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function esm_keys(customStore = defaultGetStore()) {
    const items = [];
    return eachCursor(customStore, (cursor) => items.push(cursor.key)).then(() => items);
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function values(customStore = defaultGetStore()) {
    const items = [];
    return eachCursor(customStore, (cursor) => items.push(cursor.value)).then(() => items);
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function entries(customStore = defaultGetStore()) {
    const items = [];
    return eachCursor(customStore, (cursor) => items.push([cursor.key, cursor.value])).then(() => items);
}



;// CONCATENATED MODULE: ./src/providers/user-script/storage.ts



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var syncMark = '__sync__';
var GP_POLYFILLED = ('polyfilled' in GM_getValue);
var storage = GP_POLYFILLED ? function () {
  var store = createStore('EhSyringe', 'keyval');
  var listenerId = 1;
  var listeners = new Map();

  function onStorageChange(key, value) {
    if (!key) {
      var _iterator = _createForOfIteratorHelper(listeners.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
              name = _step$value.name,
              listener = _step$value.listener;
          listener(name, undefined, GM_getValue(name), false);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return;
    }

    var _iterator2 = _createForOfIteratorHelper(listeners.values()),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _step2.value,
            _name = _step2$value.name,
            _listener = _step2$value.listener;
        if (_name !== key) continue;

        _listener(_name, undefined, value, false);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  var storage = {
    get: function () {
      var _get2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(key) {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return esm_get(key, store);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x) {
        return _get2.apply(this, arguments);
      }

      return get;
    }(),
    set: function () {
      var _set2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(key, value) {
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return esm_set(key, value, store);

              case 2:
                onStorageChange(key, value);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function set(_x2, _x3) {
        return _set2.apply(this, arguments);
      }

      return set;
    }(),
    "delete": function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3(key) {
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return del(key, store);

              case 2:
                onStorageChange(key, undefined);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }(),
    keys: function () {
      var _keys2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4() {
        var ks;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return esm_keys(store);

              case 2:
                ks = _context4.sent;
                return _context4.abrupt("return", ks.filter(function (k) {
                  return typeof k == 'string';
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function keys() {
        return _keys2.apply(this, arguments);
      }

      return keys;
    }(),
    on: function on(key, listener) {
      var id = listenerId++;
      listeners.set(id, {
        name: key,
        listener: listener
      });
      return id;
    },
    off: function off(key, id) {
      listeners["delete"](id);
    }
  };
  return storage;
}() : {
  get: function get(key) {
    return Promise.resolve(GM_getValue(key));
  },
  set: function set(key, value) {
    return Promise.resolve(GM_setValue(key, value));
  },
  "delete": function _delete(key) {
    return Promise.resolve(GM_deleteValue(key));
  },
  keys: function keys() {
    return Promise.resolve(GM_listValues().filter(function (k) {
      return !k.startsWith(syncMark);
    }));
  },
  on: function on(key, listener) {
    return GM_addValueChangeListener(key, listener);
  },
  off: function off(key, id) {
    return GM_removeValueChangeListener(id);
  }
};

var syncKey = function syncKey(k) {
  return syncMark + k;
};

var syncStorage = {
  get: function get(key) {
    return GM_getValue(syncKey(key));
  },
  set: function set(key, value) {
    return GM_setValue(syncKey(key), value);
  },
  "delete": function _delete(key) {
    return GM_deleteValue(syncKey(key));
  },
  keys: function keys() {
    return GM_listValues().filter(function (k) {
      return k.startsWith(syncMark);
    });
  }
};
;// CONCATENATED MODULE: ./src/services/storage.ts





function storage_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = storage_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function storage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return storage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return storage_arrayLikeToArray(o, minLen); }

function storage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var Storage = /*#__PURE__*/function () {
  function Storage(logger) {
    var _this = this;

    _classCallCheck(this, Storage);

    this.logger = logger;
    this.defaults = {
      extensionCheck: 0,
      config: {
        translateUi: true,
        translateTag: true,
        showIntroduce: true,
        showIcon: true,
        introduceImageLevel: 3
        /* r18g */
        ,
        autoUpdate: true,
        tagTip: true
      },
      database: undefined,
      databaseInfo: undefined,
      release: undefined
    };
    Object.defineProperty(globalThis, 'storage', {
      value: function value() {
        _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
          var keys, _iterator, _step, key;

          return regenerator_default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.keys();

                case 2:
                  keys = _context.sent;
                  _iterator = storage_createForOfIteratorHelper(keys);
                  _context.prev = 4;

                  _iterator.s();

                case 6:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 16;
                    break;
                  }

                  key = _step.value;
                  _context.t0 = console;
                  _context.t1 = key;
                  _context.next = 12;
                  return _this.get(key);

                case 12:
                  _context.t2 = _context.sent;

                  _context.t0.log.call(_context.t0, _context.t1, _context.t2);

                case 14:
                  _context.next = 6;
                  break;

                case 16:
                  _context.next = 21;
                  break;

                case 18:
                  _context.prev = 18;
                  _context.t3 = _context["catch"](4);

                  _iterator.e(_context.t3);

                case 21:
                  _context.prev = 21;

                  _iterator.f();

                  return _context.finish(21);

                case 24:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[4, 18, 21, 24]]);
        }))()["catch"](logger.error);
      }
    });
    this.migrate()["catch"](logger.error);
  }

  _createClass(Storage, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(key) {
        var value;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return storage.get(key);

              case 2:
                value = _context2.sent;

                if (!(value == null)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", this.defaults[key]);

              case 5:
                return _context2.abrupt("return", value);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "set",
    value: function () {
      var _set = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3(key, value) {
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(value == null)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", this["delete"](key));

              case 2:
                return _context3.abrupt("return", storage.set(key, value));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function set(_x2, _x3) {
        return _set.apply(this, arguments);
      }

      return set;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4(key) {
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return storage.delete(key);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "keys",
    value: function () {
      var _keys = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee5() {
        return regenerator_default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return storage.keys();

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function keys() {
        return _keys.apply(this, arguments);
      }

      return keys;
    }()
  }, {
    key: "on",
    value: function on(key, listener) {
      return storage.on(key, listener);
    }
  }, {
    key: "off",
    value: function off(key, listener) {
      return storage.off(key, listener);
    }
  }, {
    key: "migrate",
    value: function () {
      var _migrate = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee6() {
        var keys, keysInCurrentVersion, deletes, _iterator2, _step2, key;

        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.keys();

              case 2:
                keys = _context6.sent;
                keysInCurrentVersion = Object.keys(this.defaults);
                deletes = keys.filter(function (k) {
                  return !keysInCurrentVersion.includes(k);
                });

                if (!(deletes.length === 0)) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return");

              case 7:
                this.logger.log("\u8FC1\u79FB\u5B58\u50A8\u7248\u672C\uFF0C\u5220\u9664 ", deletes);
                _iterator2 = storage_createForOfIteratorHelper(deletes);
                _context6.prev = 9;

                _iterator2.s();

              case 11:
                if ((_step2 = _iterator2.n()).done) {
                  _context6.next = 17;
                  break;
                }

                key = _step2.value;
                _context6.next = 15;
                return this["delete"](key);

              case 15:
                _context6.next = 11;
                break;

              case 17:
                _context6.next = 22;
                break;

              case 19:
                _context6.prev = 19;
                _context6.t0 = _context6["catch"](9);

                _iterator2.e(_context6.t0);

              case 22:
                _context6.prev = 22;

                _iterator2.f();

                return _context6.finish(22);

              case 25:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[9, 19, 22, 25]]);
      }));

      function migrate() {
        return _migrate.apply(this, arguments);
      }

      return migrate;
    }()
  }]);

  return Storage;
}();

Storage = __decorate([Service(), __metadata("design:paramtypes", [Logger])], Storage);

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function arrayLikeToArray_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray_arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function unsupportedIterableToArray_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray_arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || unsupportedIterableToArray_unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./src/providers/common/messaging.ts





var Multicast = /*#__PURE__*/function () {
  function Multicast(key) {
    _classCallCheck(this, Multicast);

    this.key = key;
    this.listeners = new Set();
  }

  _createClass(Multicast, [{
    key: "size",
    get: function get() {
      return this.listeners.size;
    }
  }, {
    key: "add",
    value: function add(listener) {
      this.listeners.add(listener);
    }
  }, {
    key: "remove",
    value: function remove(listener) {
      return this.listeners["delete"](listener);
    }
  }, {
    key: "handle",
    value: function () {
      var _handle = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(request) {
        var promises, first, all, error;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                promises = _toConsumableArray(this.listeners.keys()).map(function (listener) {
                  return Promise.resolve(listener(request));
                });
                _context.prev = 1;
                _context.next = 4;
                return Promise.race(promises);

              case 4:
                first = _context.sent;
                _context.next = 7;
                return Promise.all(promises);

              case 7:
                all = _context.sent;
                return _context.abrupt("return", first);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                error = _context.t0;
                Object.defineProperty(error, 'request', {
                  value: request,
                  enumerable: true
                });
                if (first) Object.defineProperty(error, 'firstReply', {
                  value: first,
                  enumerable: true
                });
                if (all) Object.defineProperty(error, 'replies', {
                  value: all,
                  enumerable: true
                });
                throw error;

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function handle(_x) {
        return _handle.apply(this, arguments);
      }

      return handle;
    }()
  }]);

  return Multicast;
}();
var Messaging = /*#__PURE__*/function () {
  function Messaging() {
    _classCallCheck(this, Messaging);

    this.handlers = new Map();
  }

  _createClass(Messaging, [{
    key: "on",
    value: function on(key, listener) {
      var handler = this.handlers.get(key);

      if (!handler) {
        handler = new Multicast(key);
        this.handlers.set(key, handler);
      }

      handler.add(listener);
      return {
        key: key,
        value: listener
      };
    }
  }, {
    key: "off",
    value: function off(listener) {
      var handler = this.handlers.get(listener.key);
      if (!handler) return false;
      return handler.remove(listener.value);
    }
  }, {
    key: "emit",
    value: function () {
      var _emit = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(key, args) {
        var broadcast,
            handler,
            handles,
            _args2 = arguments;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                broadcast = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;
                handler = this.handlers.get(key);

                if (!(!handler || handler.size === 0)) {
                  _context2.next = 6;
                  break;
                }

                if (!broadcast) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", Promise.resolve());

              case 5:
                return _context2.abrupt("return", Promise.reject(new Error("\u6D88\u606F ".concat(key, " \u8FD8\u672A\u6CE8\u518C\u8FC7\u5904\u7406\u7A0B\u5E8F"))));

              case 6:
                handles = handler.handle(args);

                if (!broadcast) {
                  _context2.next = 18;
                  break;
                }

                _context2.prev = 8;
                _context2.next = 11;
                return handles;

              case 11:
                return _context2.abrupt("return", _context2.sent);

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](8);
                console.error(_context2.t0);
                return _context2.abrupt("return");

              case 18:
                return _context2.abrupt("return", handles);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[8, 14]]);
      }));

      function emit(_x2, _x3) {
        return _emit.apply(this, arguments);
      }

      return emit;
    }()
  }]);

  return Messaging;
}();
var messaging = new Messaging();
;// CONCATENATED MODULE: ./src/providers/user-script/messaging.ts

var messaging_messaging = new Messaging();
;// CONCATENATED MODULE: ./src/services/messaging.ts







var messaging_Messaging = /*#__PURE__*/function () {
  function Messaging(logger) {
    _classCallCheck(this, Messaging);

    this.logger = logger;
  }

  _createClass(Messaging, [{
    key: "on",
    value: function on(key, listener) {
      this.logger.log("\u76D1\u542C\u4E8B\u4EF6", key);
      return messaging_messaging.on(key, listener);
    }
  }, {
    key: "off",
    value: function off(listener) {
      return messaging_messaging.off(listener);
    }
  }, {
    key: "emit",
    value: function emit(key, args) {
      var broadcast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return messaging_messaging.emit(key, args, broadcast);
    }
  }]);

  return Messaging;
}();

messaging_Messaging = __decorate([Service(), __metadata("design:paramtypes", [Logger])], messaging_Messaging);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/less-loader/dist/cjs.js!./src/plugin/introduce/index.less
var introduce = __webpack_require__(5738);
;// CONCATENATED MODULE: ./src/plugin/introduce/index.less

            

var options = {"insert":":root"};

options.insert = ":root";
options.singleton = false;

var introduce_update = injectStylesIntoStyleTag_default()(introduce/* default */.Z, options);



/* harmony default export */ var plugin_introduce = (introduce/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/escape-html/index.js
var escape_html = __webpack_require__(5573);
var escape_html_default = /*#__PURE__*/__webpack_require__.n(escape_html);
// EXTERNAL MODULE: ./node_modules/emoji-regex/index.js
var emoji_regex = __webpack_require__(809);
var emoji_regex_default = /*#__PURE__*/__webpack_require__.n(emoji_regex);
;// CONCATENATED MODULE: ./src/services/tagging.ts






var emojiReg = emoji_regex_default()();

var Tagging = /*#__PURE__*/function () {
  function Tagging() {
    _classCallCheck(this, Tagging);

    this.nsDic = {
      '': 'misc',
      misc: 'misc',
      miscellaneous: 'misc',
      r: 'reclass',
      reclass: 'reclass',
      l: 'language',
      language: 'language',
      lang: 'language',
      p: 'parody',
      parody: 'parody',
      series: 'parody',
      c: 'character',
      "char": 'character',
      character: 'character',
      g: 'group',
      group: 'group',
      creator: 'group',
      circle: 'group',
      a: 'artist',
      artist: 'artist',
      m: 'male',
      male: 'male',
      f: 'female',
      female: 'female'
    };
    this.namespaceTranslate = {
      rows: '行名',
      artist: '艺术家',
      parody: '原作',
      character: '角色',
      group: '团队',
      language: '语言',
      female: '女',
      male: '男',
      reclass: '重新分类',
      misc: '杂项'
    };
  }

  _createClass(Tagging, [{
    key: "namespace",
    value: function namespace(ns) {
      if (!ns) return 'misc';
      if (ns in this.nsDic) return this.nsDic[ns];
      ns = ns.toLowerCase();
      if (ns in this.nsDic) return this.nsDic[ns];
      ns = ns.trim();
      if (ns in this.nsDic) return this.nsDic[ns];
      ns = ns[0];
      if (ns in this.nsDic) return this.nsDic[ns];
      return 'misc';
    }
  }, {
    key: "ns",
    value: function ns(_ns) {
      var fns = this.namespace(_ns);
      if (fns === 'misc') return '';
      return fns[0];
    }
  }, {
    key: "removePara",
    value: function removePara(name) {
      return name.replace(/^<p>(.+?)<\/p>$/, '$1').trim();
    }
  }, {
    key: "markImagesAndEmoji",
    value: function markImagesAndEmoji(name) {
      return name.replace(emojiReg, "<span ehs-emoji>$&</span>").replace(/<img(.*?)>/gi, "<img onerror=\"this.style.display='none'\" ehs-icon $1>");
    }
  }, {
    key: "removeImagesAndEmoji",
    value: function removeImagesAndEmoji(name) {
      return name.replace(emojiReg, '').replace(/<img.*?>/gi, '').trim();
    }
  }, {
    key: "fullKey",
    value: function fullKey(tag) {
      var ns = 'namespace' in tag ? this.ns(tag.namespace) : tag.ns;
      var key = tag.key.toLowerCase();
      return ns ? "".concat(ns, ":").concat(key) : key;
    }
  }, {
    key: "searchTerm",
    value: function searchTerm(tag) {
      var ns = 'namespace' in tag ? this.ns(tag.namespace) : tag.ns;
      var key = tag.key.toLowerCase();
      var nsP = ns ? "".concat(ns, ":") : '';
      var search = key.includes(' ') ? "\"".concat(key, "$\"") : "".concat(key, "$");
      return nsP + search;
    }
  }, {
    key: "editorUrl",
    value: function editorUrl(tag) {
      var namespace = 'namespace' in tag ? this.namespace(tag.namespace) : this.namespace(tag.ns);
      var key = tag.key.toLowerCase();
      return "https://ehtt.vercel.app/edit/".concat(namespace, "/").concat(encodeURIComponent(key));
    }
  }, {
    key: "makeTagMatchHtml",
    value: function makeTagMatchHtml(suggestion) {
      var markTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mark';
      var tag = suggestion.tag;
      var cnNamespace = this.namespaceTranslate[this.namespace(tag.ns)];
      var cnNameHtml = '';
      var enNameHtml;

      if (tag.ns) {
        cnNameHtml += escape_html_default()(cnNamespace) + '：';
      }

      if (suggestion.match.cn) {
        var range = suggestion.match.cn;
        cnNameHtml += "".concat(escape_html_default()(tag.cn.slice(0, range.start)), "<").concat(markTag, ">").concat(escape_html_default()(tag.cn.slice(range.start, range.end)), "</").concat(markTag, ">").concat(escape_html_default()(tag.cn.slice(range.end)));
      } else {
        cnNameHtml += escape_html_default()(tag.cn);
      }

      if (suggestion.match.key) {
        var _range = suggestion.match.key;
        enNameHtml = "".concat(escape_html_default()(tag.key.slice(0, _range.start)), "<").concat(markTag, ">").concat(escape_html_default()(tag.key.slice(_range.start, _range.end)), "</").concat(markTag, ">").concat(escape_html_default()(tag.key.slice(_range.end)));
      } else {
        enNameHtml = escape_html_default()(tag.key);
      }

      return {
        cn: cnNameHtml,
        en: enNameHtml
      };
    }
  }]);

  return Tagging;
}();

Tagging = __decorate([Service()], Tagging);

;// CONCATENATED MODULE: ./src/plugin/introduce/index.ts












var Introduce = /*#__PURE__*/function () {
  function Introduce(logger, storage, messaging, tagging) {
    var _this = this;

    _classCallCheck(this, Introduce);

    this.logger = logger;
    this.storage = storage;
    this.messaging = messaging;
    this.tagging = tagging;
    this.target = null;

    this.onclick = function (e) {
      var _a;

      var target = _this.findTarget(e.target);

      if (!target) {
        return;
      }

      _this.target = target;
      var isOpen = !!target.style.color;

      if (!isOpen) {
        _this.closeIntroduceBox();

        return;
      }

      var m = /'(.*)'/gi.exec((_a = target.getAttribute('onclick')) !== null && _a !== void 0 ? _a : '');
      if (!(m === null || m === void 0 ? void 0 : m[1])) return;
      var m2 = m[1].split(':');
      var namespace = 'misc';
      var tag = '';

      if (m2.length === 1) {
        tag = m2[0];
      } else {
        namespace = m2.shift();
        tag = m2.join(':');
      }

      _this.openIntroduceBox(namespace, tag, function () {
        return _this.target !== target;
      })["catch"](_this.logger.error);
    };

    this.init()["catch"](logger.error);
  }

  _createClass(Introduce, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var conf, tagList, gridRight;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.storage.get('config');

              case 2:
                conf = _context.sent;

                if (conf.showIntroduce) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                tagList = document.querySelector('#taglist');
                this.tagList = tagList;
                gridRight = document.querySelector('#gd5');

                if (tagList && gridRight) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return");

              case 10:
                this.logger.log('标签介绍');
                this.initIntroduceBox();
                gridRight.insertBefore(this.introduceBox, null);
                tagList.addEventListener('click', this.onclick);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "initIntroduceBox",
    value: function initIntroduceBox() {
      var _this2 = this;

      this.introduceBox = document.createElement('div');
      this.introduceBox.id = 'ehs-introduce-box';
      this.introduceBox.addEventListener('click', function (ev) {
        var target = ev.target;

        if (target instanceof HTMLElement && target.classList.contains('ehs-close')) {
          var selectedTag = _this2.tagList.querySelector('[style*="color"]');

          if (selectedTag) {
            selectedTag.click();
          } else {
            _this2.closeIntroduceBox();
          }

          return;
        }

        while (target) {
          if (target.nodeName === 'A' && 'href' in target) break;
          target = target.parentNode;
        }

        if (target) {
          var a = target;
          ev.preventDefault();
          window.open(a.href, '_BLANK');
        }
      });
    }
  }, {
    key: "findTarget",
    value: function findTarget(node) {
      var isTarget = function isTarget(n) {
        return n.nodeType === Node.ELEMENT_NODE && n.nodeName === 'A' && n.id.startsWith('ta_') && n.parentElement != null && (n.parentElement.classList.contains('gt') || n.parentElement.classList.contains('gtl') || n.parentElement.classList.contains('gtw'));
      };

      while (node) {
        if (isTarget(node)) return node;
        node = node.parentNode;
      }

      return null;
    }
  }, {
    key: "openIntroduceBox",
    value: function () {
      var _openIntroduceBox = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(namespace, key, canceled) {
        var _a, timer, tagData, editorUrl;

        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                timer = this.logger.time('获取标签介绍');
                _context2.next = 3;
                return this.messaging.emit('get-tag', this.tagging.fullKey({
                  namespace: namespace,
                  key: key
                }));

              case 3:
                tagData = _context2.sent;
                timer.log(tagData);
                timer.end();

                if (!canceled()) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return");

              case 8:
                if (tagData) {
                  // language=HTML
                  this.introduceBox.innerHTML = "\n            <div class=\"ehs-title\">\n                <div>\n                    <div class=\"ehs-cn\">".concat(this.tagging.markImagesAndEmoji(tagData.name), "</div>\n                    <div class=\"ehs-en\">").concat(this.tagging.namespace(tagData.ns), ":").concat(tagData.key, "</div>\n                </div>\n                <span class=\"ehs-close\">\xD7</span>\n            </div>\n            <div class=\"ehs-content\">\n                ").concat(tagData.intro ? tagData.intro : "<div class=\"ehs-no-intro\">\u65E0\u4ECB\u7ECD</div> ", "\n            </div>\n            <div class=\"ehs-href\">").concat((_a = tagData.links) !== null && _a !== void 0 ? _a : '', "</div>");
                } else {
                  editorUrl = this.tagging.editorUrl({
                    namespace: namespace,
                    key: key
                  }); // language=HTML

                  this.introduceBox.innerHTML = "\n            <div class=\"ehs-title\">\n                <div>\n                    <div class=\"ehs-cn\">".concat(namespace, ":").concat(key, "</div>\n                    <div class=\"ehs-en\">\u8BE5\u6807\u7B7E\u5C1A\u672A\u7FFB\u8BD1</div>\n                </div>\n                <span class=\"ehs-close\">\xD7</span>\n            </div>\n            <div class=\"ehs-content\">\n                <div class=\"ehs-no-translation\">\n                    <div class=\"text\">\n                        \u8BE5\u6807\u7B7E\u5C1A\u672A\u7FFB\u8BD1\n                    </div>\n                    <div class=\"button\">\n                        <a href=\"").concat(editorUrl, "\" target=\"_blank\">\u63D0\u4F9B\u7FFB\u8BD1</a>\n                    </div>\n                </div>\n            </div>");
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function openIntroduceBox(_x, _x2, _x3) {
        return _openIntroduceBox.apply(this, arguments);
      }

      return openIntroduceBox;
    }()
  }, {
    key: "closeIntroduceBox",
    value: function closeIntroduceBox() {
      this.introduceBox.innerHTML = '';
    }
  }]);

  return Introduce;
}();

Introduce = __decorate([Service(), __metadata("design:paramtypes", [Logger, Storage, messaging_Messaging, Tagging])], Introduce);

;// CONCATENATED MODULE: ./node_modules/rxjs/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var tslib_es6_extendStatics = function(d, b) {
    tslib_es6_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return tslib_es6_extendStatics(d, b);
};

function tslib_tslib_es6_extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    tslib_es6_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_tslib_es6_assign = function() {
    tslib_tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_tslib_es6_assign.apply(this, arguments);
}

function tslib_es6_rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function tslib_es6_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function tslib_es6_param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function tslib_es6_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function tslib_es6_generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var tslib_es6_createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function tslib_es6_exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) tslib_es6_createBinding(o, m, p);
}

function tslib_es6_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function tslib_es6_read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(tslib_es6_read(arguments[i]));
    return ar;
}

/** @deprecated */
function tslib_tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function tslib_es6_spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function tslib_es6_await(v) {
    return this instanceof tslib_es6_await ? (this.v = v, this) : new tslib_es6_await(v);
}

function tslib_es6_asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof tslib_es6_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function tslib_es6_asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: tslib_es6_await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function tslib_es6_asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof tslib_es6_values === "function" ? tslib_es6_values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function tslib_es6_makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var tslib_es6_setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function tslib_es6_importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) tslib_es6_createBinding(result, mod, k);
    tslib_es6_setModuleDefault(result, mod);
    return result;
}

function tslib_es6_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function tslib_es6_classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function tslib_es6_classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscription.js




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._teardowns = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = tslib_es6_values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialTeardown = this.initialTeardown;
            if (isFunction(initialTeardown)) {
                try {
                    initialTeardown();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _teardowns = this._teardowns;
            if (_teardowns) {
                this._teardowns = null;
                try {
                    for (var _teardowns_1 = tslib_es6_values(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()) {
                        var teardown_1 = _teardowns_1_1.value;
                        try {
                            execTeardown(teardown_1);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = tslib_es6_spreadArray(tslib_es6_spreadArray([], tslib_es6_read(errors)), tslib_es6_read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return)) _b.call(_teardowns_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execTeardown(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _teardowns = this._teardowns;
        _teardowns && arrRemove(_teardowns, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execTeardown(teardown) {
    if (isFunction(teardown)) {
        teardown();
    }
    else {
        teardown.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/config.js
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js

var timeoutProvider = {
    setTimeout: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, tslib_es6_spreadArray([], tslib_es6_read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js


function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        var onUnhandledError = config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() { }
//# sourceMappingURL=noop.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscriber.js








var Subscriber = (function (_super) {
    tslib_tslib_es6_extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));

var SafeSubscriber = (function (_super) {
    tslib_tslib_es6_extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var next;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            (next = observerOrNext.next, error = observerOrNext.error, complete = observerOrNext.complete);
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
            }
            else {
                context_1 = observerOrNext;
            }
            next = next === null || next === void 0 ? void 0 : next.bind(context_1);
            error = error === null || error === void 0 ? void 0 : error.bind(context_1);
            complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
        }
        _this.destination = {
            next: next ? wrapForErrorHandling(next, _this) : noop,
            error: wrapForErrorHandling(error !== null && error !== void 0 ? error : defaultErrorHandler, _this),
            complete: complete ? wrapForErrorHandling(complete, _this) : noop,
        };
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function wrapForErrorHandling(handler, instance) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            handler.apply(void 0, tslib_es6_spreadArray([], tslib_es6_read(args)));
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                if (instance._syncErrorHack_isSubscribing) {
                    instance.__syncError = err;
                }
                else {
                    throw err;
                }
            }
            else {
                reportUnhandledError(err);
            }
        }
    };
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};
//# sourceMappingURL=Subscriber.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/pipe.js

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Observable.js






var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        if (config.useDeprecatedSynchronousErrorHandling) {
            this._deprecatedSyncErrorSubscribe(subscriber);
        }
        else {
            var _a = this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        this._subscribe(subscriber)
                    :
                        this._trySubscribe(subscriber));
        }
        return subscriber;
    };
    Observable.prototype._deprecatedSyncErrorSubscribe = function (subscriber) {
        var localSubscriber = subscriber;
        localSubscriber._syncErrorHack_isSubscribing = true;
        var operator = this.operator;
        if (operator) {
            subscriber.add(operator.call(subscriber, this.source));
        }
        else {
            try {
                subscriber.add(this._subscribe(subscriber));
            }
            catch (err) {
                localSubscriber.__syncError = err;
            }
        }
        var dest = localSubscriber;
        while (dest) {
            if ('__syncError' in dest) {
                try {
                    throw dest.__syncError;
                }
                finally {
                    subscriber.unsubscribe();
                }
            }
            dest = dest.destination;
        }
        localSubscriber._syncErrorHack_isSubscribing = false;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return operations.length ? pipeFromArray(operations)(this) : this;
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}
//# sourceMappingURL=Observable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/lift.js

function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js


var OperatorSubscriber = (function (_super) {
    tslib_tslib_es6_extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        var closed = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    };
    return OperatorSubscriber;
}(Subscriber));

//# sourceMappingURL=OperatorSubscriber.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/map.js


function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isPromise.js

function isPromise(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js


function isInteropObservable(input) {
    return isFunction(input[observable]);
}
//# sourceMappingURL=isInteropObservable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//# sourceMappingURL=throwUnobservableError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isIterable.js


function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
//# sourceMappingURL=isIterable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js


function readableStreamLikeToAsyncGenerator(readableStream) {
    return tslib_es6_asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return tslib_es6_generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4, tslib_es6_await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, tslib_es6_await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, tslib_es6_await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//# sourceMappingURL=isReadableStreamLike.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/from.js













function from(input, scheduler) {
    return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
function innerFrom(input) {
    if (input instanceof Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
    return new Observable(function (subscriber) {
        var obs = obj[observable]();
        if (isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = tslib_es6_values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return tslib_es6_awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return tslib_es6_generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = tslib_es6_asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=from.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js


function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalTeardown) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom(project(value, index++)).subscribe(new OperatorSubscriber(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        innerSubScheduler ? subscriber.add(innerSubScheduler.schedule(function () { return doInnerSub(bufferedValue); })) : doInnerSub(bufferedValue);
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(new OperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalTeardown === null || additionalTeardown === void 0 ? void 0 : additionalTeardown();
    };
}
//# sourceMappingURL=mergeInternals.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js





function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction(resultSelector)) {
        return mergeMap(function (a, i) { return map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return operate(function (source, subscriber) { return mergeInternals(source, subscriber, project, concurrent); });
}
//# sourceMappingURL=mergeMap.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js


var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, tslib_es6_spreadArray([], tslib_es6_read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map(function (args) { return callOrApply(fn, args); });
}
//# sourceMappingURL=mapOneOrManyArgs.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js

function scheduleArray(input, scheduler) {
    return new Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
//# sourceMappingURL=scheduleArray.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/fromArray.js


function internalFromArray(input, scheduler) {
    return scheduler ? scheduleArray(input, scheduler) : fromArrayLike(input);
}
//# sourceMappingURL=fromArray.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js







var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
    }
    var _a = tslib_es6_read(isEventTarget(target)
        ? eventTargetMethods.map(function (methodName) { return function (handler) { return target[methodName](eventName, handler, options); }; })
        :
            isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName))
                : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike(target)) {
            return mergeMap(function (subTarget) { return fromEvent(subTarget, eventName, options); })(internalFromArray(target));
        }
    }
    if (!add) {
        throw new TypeError('Invalid event target');
    }
    return new Observable(function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () { return remove(handler); };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) { return function (handler) { return target[methodName](eventName, handler); }; };
}
function isNodeStyleEventEmitter(target) {
    return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/filter.js


function filter(predicate, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}
//# sourceMappingURL=filter.js.map
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/less-loader/dist/cjs.js!./src/plugin/tag-tip/index.less
var tag_tip = __webpack_require__(3091);
;// CONCATENATED MODULE: ./src/plugin/tag-tip/index.less

            

var tag_tip_options = {"insert":":root"};

tag_tip_options.insert = ":root";
tag_tip_options.singleton = false;

var tag_tip_update = injectStylesIntoStyleTag_default()(tag_tip/* default */.Z, tag_tip_options);



/* harmony default export */ var plugin_tag_tip = (tag_tip/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/plugin/tag-tip/index.ts














var TagTip = /*#__PURE__*/function () {
  function TagTip(storage, logger, messaging, tagging) {
    _classCallCheck(this, TagTip);

    this.storage = storage;
    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.selectedIndex = 0;
    this.delimiter = ' ';
    this.ctrlKey = false;
    this.disableExclusionMode = false;
    this.init()["catch"](logger.error);
  }

  _createClass(TagTip, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var _this = this;

        var conf, searchInput;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.storage.get('config');

              case 2:
                conf = _context.sent;

                if (conf.tagTip) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                this.logger.log('标签提示');
                searchInput = document.querySelector('#f_search, #newtagfield, [name=f_search]');

                if (searchInput) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                this.disableExclusionMode = searchInput.id === 'newtagfield';
                this.delimiter = location.pathname.startsWith('/g/') ? ',' : ' ';
                this.inputElement = searchInput;
                this.inputElement.autocomplete = 'off';
                this.autoCompleteList = document.createElement('div');
                this.autoCompleteList.className = 'eh-syringe-lite-auto-complete-list';
                fromEvent(this.inputElement, 'keyup').pipe(filter(function (e) {
                  return !new Set(['ArrowUp', 'ArrowDown', 'Enter', 'Meta', 'Control', 'Alt']).has(e.key);
                }), map(function () {
                  return _this.inputElement.value;
                })).subscribe(function (s) {
                  _this.search(s)["catch"](_this.logger.error);
                });
                fromEvent(this.inputElement, 'keydown').subscribe(function (e) {
                  return _this.keydown(e);
                });
                fromEvent(this.inputElement, 'keyup').subscribe(function (e) {
                  return _this.checkCtrl(e);
                });
                fromEvent(this.autoCompleteList, 'click').subscribe(function (e) {
                  _this.inputElement.focus();

                  e.preventDefault();
                  e.stopPropagation();
                });
                fromEvent(this.inputElement, 'focus').subscribe(function () {
                  return _this.setListPosition();
                });
                fromEvent(window, 'resize').subscribe(function () {
                  return _this.setListPosition();
                });
                fromEvent(window, 'scroll').subscribe(function () {
                  return _this.setListPosition();
                });
                fromEvent(document, 'click').subscribe(function () {
                  _this.autoCompleteList.innerHTML = '';
                });
                document.body.insertBefore(this.autoCompleteList, null);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "search",
    value: function () {
      var _search = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3(value) {
        var _this2 = this;

        var _a, values, result, used;

        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // todo: 增加自定义分隔符
                value = this.inputElement.value = value.replace(/  +/gm, ' ');
                values = (_a = value.match(/(\S+:".+?"|".+?"|\S+:\S+|\S+)/gim)) !== null && _a !== void 0 ? _a : [];
                result = [];
                used = new Set();
                _context3.next = 6;
                return Promise.all(values.map( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(v, i) {
                    var sv, svs, suggestions;
                    return regenerator_default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            sv = values.slice(i);

                            if (!sv.length) {
                              _context2.next = 9;
                              break;
                            }

                            svs = sv.join(' ');

                            if (!(!svs || svs.replace(/\s+/, '').length === 0)) {
                              _context2.next = 5;
                              break;
                            }

                            return _context2.abrupt("return");

                          case 5:
                            _context2.next = 7;
                            return _this2.messaging.emit('suggest-tag', {
                              term: svs,
                              limit: 50
                            });

                          case 7:
                            suggestions = _context2.sent;
                            suggestions.forEach(function (suggestion) {
                              var tag = suggestion.tag;
                              if (used.has(_this2.tagging.fullKey(tag))) return;
                              used.add(_this2.tagging.fullKey(tag));
                              result.push(suggestion);
                            });

                          case 9:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x2, _x3) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 6:
                this.autoCompleteList.innerHTML = '';
                result.slice(0, 50).forEach(function (tag) {
                  _this2.autoCompleteList.insertBefore(_this2.tagElementItem(tag), null);
                });
                this.selectedIndex = -1;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function search(_x) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: "checkCtrl",
    value: function checkCtrl(e) {
      if (this.disableExclusionMode) return;
      this.ctrlKey = e.ctrlKey || e.metaKey;

      if (this.ctrlKey) {
        this.autoCompleteList.classList.add('exclude');
      } else {
        this.autoCompleteList.classList.remove('exclude');
      }
    }
  }, {
    key: "keydown",
    value: function keydown(e) {
      this.checkCtrl(e);

      if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
        if (e.code === 'ArrowUp') {
          this.selectedIndex--;

          if (this.selectedIndex < 0) {
            this.selectedIndex = this.autoCompleteList.children.length - 1;
          }
        } else {
          this.selectedIndex++;

          if (this.selectedIndex >= this.autoCompleteList.children.length) {
            this.selectedIndex = 0;
          }
        }

        var children = Array.from(this.autoCompleteList.children);
        children.forEach(function (element) {
          element.classList.remove('selected');
        });

        if (this.selectedIndex >= 0 && children[this.selectedIndex]) {
          children[this.selectedIndex].classList.add('selected');
        }

        e.preventDefault();
        e.stopPropagation();
      } else if (e.code === 'Enter') {
        var _children = Array.from(this.autoCompleteList.children);

        if (this.selectedIndex >= 0 && _children[this.selectedIndex]) {
          _children[this.selectedIndex].click();

          e.preventDefault();
          e.stopPropagation();
        }
      }
    }
  }, {
    key: "setListPosition",
    value: function setListPosition() {
      var rect = this.inputElement.getBoundingClientRect();
      this.autoCompleteList.style.left = "".concat(rect.left, "px");
      this.autoCompleteList.style.top = "".concat(rect.bottom, "px");
      this.autoCompleteList.style.minWidth = "".concat(rect.width, "px");
    }
  }, {
    key: "tagElementItem",
    value: function tagElementItem(suggestion) {
      var _this3 = this;

      var tag = suggestion.tag;
      var item = document.createElement('div');
      var cnName = document.createElement('span');
      cnName.className = 'auto-complete-text cn-name';
      var enName = document.createElement('span');
      enName.className = 'auto-complete-text en-name';
      var html = this.tagging.makeTagMatchHtml(suggestion, 'mark');
      cnName.innerHTML = html.cn;
      enName.innerHTML = html.en;
      item.insertBefore(cnName, null);
      item.insertBefore(enName, null);
      item.className = 'auto-complete-item';

      item.onclick = function () {
        var length = suggestion.term.length;

        if (_this3.inputElement.value.endsWith(' ')) {
          length++;
        }

        var exclude = _this3.ctrlKey ? '-' : '';
        _this3.inputElement.value = "".concat(_this3.inputElement.value.slice(0, 0 - length)).concat(exclude).concat(_this3.tagging.searchTerm(tag), " ");
        _this3.autoCompleteList.innerHTML = '';
      };

      return item;
    }
  }]);

  return TagTip;
}();

TagTip = __decorate([Service(), __metadata("design:paramtypes", [Storage, Logger, messaging_Messaging, Tagging])], TagTip);

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || unsupportedIterableToArray_unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./src/services/ui-translation/helper.ts



function helper_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = helper_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function helper_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return helper_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return helper_arrayLikeToArray(o, minLen); }

function helper_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var dataMaps = new Array();
function merge(regex, host, plainReplacements, regexReplacements) {
  var hosts = host ? _toConsumableArray(new Set(Array.isArray(host) ? host : [host])).sort() : undefined;
  var map = dataMaps.find(function (d) {
    return JSON.stringify(d.hosts) === JSON.stringify(hosts) && d.regex.source === regex.source;
  });

  if (!map) {
    map = {
      regex: regex,
      hosts: hosts,
      plainReplacements: new Map(),
      regexReplacements: new Map()
    };
    dataMaps.push(map);
  }

  for (var key in plainReplacements) {
    var element = plainReplacements[key];
    map.plainReplacements.set(key, element);
  }

  if (regexReplacements) {
    var _iterator = helper_createForOfIteratorHelper(regexReplacements),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            k = _step$value[0],
            v = _step$value[1];

        map.regexReplacements.set(k, v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}
;// CONCATENATED MODULE: ./src/services/ui-translation/data/archiver.ts

merge(/^\/archiver\.php/, undefined, {
  'Current Funds:': '现有资金',
  'Estimated Size: \xA0 ': '预计大小： ',
  'Download Cost: \xA0 ': '下载费用： ',
  'Insufficient Funds': '余额不足',
  'Download Original Archive': '下载原始档案',
  'Download Resample Archive': '下载重采样档案',
  'H@H Downloader': 'H@H 下载器',
  Original: '原图',
  'Your H@H client appears to be offline.': '你的 H@H 客户端处于离线状态',
  'Turn it on, then try again.': '请启动 H@H 客户端后重试'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/common.ts

merge(/.*/, undefined, {
  'Front Page': '首页',
  Watched: '关注',
  Popular: '流行',
  Torrents: '种子',
  Home: '主页',
  Settings: '设置',
  'My ': '我的',
  'My Home': '我的主页',
  Favorites: '收藏',
  Uploads: '上传',
  Toplists: '排行榜',
  Bounties: '悬赏',
  News: '新闻',
  Forums: '论坛',
  Wiki: '维基',
  Doujinshi: '同人志',
  Manga: '漫画',
  'Artist CG': '画师CG',
  'Artist CG Sets': '画师CG集',
  'Game CG': '游戏CG',
  'Game CG Sets': '游戏CG集',
  Western: '西方',
  'Non-H': '无H',
  'Image Set': '图集',
  'Image Sets': '图集',
  // 'Cosplay': '',
  'Asian Porn': '亚洲色情',
  Misc: '杂项',
  'Show Advanced Options': '显示高级选项',
  'Show File Search': '文件搜索',
  'E-Hentai Galleries: The Free Hentai Doujinshi, Manga and Image Gallery System': 'E-Hentai: 一个免费的绅士同人志、漫画和图片的图库系统',
  'Visit the E-Hentai Forums': '前往 E-Hentai 论坛',
  'Play the HentaiVerse Minigame': '玩 HentaiVerse 小游戏',
  'Lo-Fi Version': '低保真版',
  'Please read the ': '请阅读',
  'Terms of Service': '服务条款',
  ' before participating with or uploading any content to this site.': '后再使用该网站或上传资源。',
  'Search Keywords': '搜索关键词',
  'language:': '语言:',
  'parody:': '原作:',
  'character:': '角色:',
  'group:': '社团:',
  'artist:': '作者:',
  'female:': '女性:',
  'male:': '男性:',
  'misc:': '杂项:',
  'reclass:': '重新分类:',
  'Japanese \xA0': '日文 \xA0',
  'English \xA0': '英文 \xA0',
  'Chinese \xA0': '中文 \xA0',
  'Dutch \xA0': '荷兰语 \xA0',
  'French \xA0': '法语 \xA0',
  'German \xA0': '德语 \xA0',
  'Hungarian \xA0': '匈牙利 \xA0',
  'Italian \xA0': '意呆利 \xA0',
  'Korean \xA0': '韩语 \xA0',
  'Polish \xA0': '波兰语 \xA0',
  'Portuguese \xA0': '葡萄牙语 \xA0',
  'Russian \xA0': '俄语 \xA0',
  'Spanish \xA0': '西班牙语 \xA0',
  'Thai \xA0': '泰语 \xA0',
  'Vietnamese \xA0': '越南语 \xA0',
  Posted: '发布时间',
  Favorited: '收藏时间',
  Minimal: '最小化',
  'Minimal+': '最小化 + 关注标签',
  Compact: '紧凑 + 标签',
  Extended: '扩展',
  Thumbnail: '缩略图',
  Published: '发布时间',
  Title: '标题',
  Uploader: '上传者',
  'Search Gallery Name': '搜索名称',
  'Search Gallery Tags': '搜索标签',
  'Search Gallery Description': '搜索描述',
  'Search Torrent Filenames': '搜素种子文件名',
  'Only Show Galleries With Torrents': '只显示有种子的图库',
  'Search Low-Power Tags': '搜索低权重标签',
  'Search Downvoted Tags': '搜索投票移除了的标签',
  'Show Expunged Galleries': '显示已删除的库',
  'Minimum Rating:': '最低评分',
  'Between ': '介于 ',
  ' and ': ' 和 ',
  ' pages': ' 页',
  // 'Hide Advanced Options': '隐藏高级选项',
  'Disable default filters for: ': '禁用默认筛选器',
  Language: '语言',
  Tags: '标签',
  '2 stars': '2 星',
  '3 stars': '3 星',
  '4 stars': '4 星',
  '5 stars': '5 星',
  Overview: '概况',
  'My Stats': '我的统计',
  'My Settings': '我的设置',
  'My Tags': '我的标签',
  Donations: '捐赠',
  'Hath Exchange': 'Hath 交易',
  'GP Exchange': 'GP 交易',
  'Credit Log': 'Credit 记录',
  'Karma Log': 'Karma 记录',
  'Apply Filter': '应用筛选',
  'Clear Filter': '清理筛选',
  'No hits found': '什么也没有',
  'No unfiltered results in this page range. You either requested an invalid page or used too aggressive filters.': '在此页面范围内没有未被过滤的结果。你的过滤设置可能过于激进。',
  'Favorites 0': '收藏夹 0',
  'Favorites 1': '收藏夹 1',
  'Favorites 2': '收藏夹 2',
  'Favorites 3': '收藏夹 3',
  'Favorites 4': '收藏夹 4',
  'Favorites 5': '收藏夹 5',
  'Favorites 6': '收藏夹 6',
  'Favorites 7': '收藏夹 7',
  'Favorites 8': '收藏夹 8',
  'Favorites 9': '收藏夹 9',
  'It is the dawn of a new day!': '新的一天开始了！',
  'Reflecting on your journey so far, you find that you are a little wiser.': '回想一下你迄今为止的旅程，你发现你更聪明了。',
  'You gain ': '你获得了 ',
  ' EXP, ': ' 经验, ',
  ' Credits!': ' Credits!',
  Clear: '清除',
  Confirm: '确定',
  ' Minimal': ' 最小化',
  ' Minimal+': ' 最小化 + 关注标签',
  ' Compact': ' 紧凑 + 标签',
  ' Extended': ' 扩展',
  ' Thumbnail': ' 缩略图',
  Rename: '重命名',
  'Create New': '新建',
  Description: '描述',
  'You have encountered a monster!': '你遇到了怪物！',
  'Click here to fight in the HentaiVerse.': '点击这里进入 HentaiVerse 战斗',
  'If you want to combine a file search with a category/keyword search, upload the file first.': '如果要将文件和类别、关键词结合搜索，请先上传文件。',
  'Select a file to upload, then hit File Search. All public galleries containing this exact file will be displayed.': '选择要搜索的图片文件,点击“文件搜索”。将显示包含此文件的所有公开图库。',
  'For color images, the system can also perform a similarity lookup to find resampled images.': '对于彩色图片，系统还可以执行相似性查询以找到重采样过的图片。',
  'Use Similarity Scan': '使用相似性查询',
  'Only Search Covers': '仅搜索封面',
  'Show Expunged': '显示被删除的图库',
  'File Search': '文件搜索',
  'Next Page >': '下一页 >'
}, [[/^(\d+) pages?$/, '$1 页'], [/Showing ([\d,]+) results?\. Your filters excluded ([\d,]+) galler(ies|y) from this page/, '共 $1 个结果，你的过滤器已从此页面移除 $2 个结果'], [/Showing ([\d,]+) results?/, '共 $1 个结果'], [/Showing results for ([\d,]+) watched tags?/, '订阅的 $1 个标签的结果'], [/Showing ([\d,]+)-([\d,]+) of ([\d,]+)/, '$1 - $2，共 $3 个结果']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/exchange.ts

merge(/^\/exchange\.php\?/, undefined, {
  'The Hath Exchange': 'Hath 交易',
  'The GP Exchange': 'GP 交易',
  'Last 8 Hours (per kGP)': '最近 8 小时（每 kGP）',
  'Last 24 Hours (per kGP)': '最近 24 小时（每 kGP）',
  'Last 8 Hours (per Hath)': '最近 8 小时（每 Hath）',
  'Last 24 Hours (per Hath)': '最近 24 小时（每 Hath）',
  'Buy Hath': '买进 Hath',
  'Sell Hath': '卖出 Hath',
  'Buy GP': '买进 GP',
  'Sell GP': '卖出 GP',
  '\n\t\t\t\tCount: ': '数量：',
  ' Hath \xA0\n\t\t\t\tBid Price/Hath: ': 'Hath \xA0 买入单价：',
  ' Hath \xA0\n\t\t\t\tAsk Price/Hath: ': 'Hath \xA0 卖出单价：',
  'Buy Hath!': '买进 Hath',
  'Sell Hath!': '卖出 Hath',
  ' kGP \xA0\n\t\t\t\tBid Price/kGP: ': 'kGP \xA0 买入单价：',
  ' kGP \xA0\n\t\t\t\tAsk Price/kGP: ': 'kGP \xA0 卖出单价：',
  'Buy GP!': '买进 GP',
  'Sell GP!': '卖出 GP',
  Spread: '挂单交易',
  'Recent Transactions': '最近成交',
  'Bid (Buyers)': '买单',
  'Ask (Sellers)': '卖单',
  Time: '时间',
  Seller: '卖家',
  Buyer: '买家',
  Volume: '成交量',
  'Unit Cost': '单价',
  High: '最高',
  Low: '最低',
  Avg: '平均',
  Vol: '成交'
}, [[/^Available: ([\d,]+) (\w+)$/, '可用：$1 $2']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/favorites.ts

merge(/^\/favorites\.php/, undefined, {
  'Search:': '搜索:',
  ' Name': ' 名称',
  ' Tags': ' 标签',
  ' Note': ' 备注',
  '\n\t\tOrder: \xA0': '排序：',
  'Use Posted': '发布时间',
  'Use Favorited': '收藏时间',
  'Show All Favorites': '显示所有收藏夹',
  'Search Favorites': '搜索收藏夹',
  'Delete Favorites': '删除收藏',
  'Change Category': '移动到'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/gallery.ts

merge(/^\/g\//, undefined, {
  'No tags have been added for this gallery yet.': '当前图库还没有标签',
  'Report Gallery': '举报图库',
  'Archive Download': '存档下载',
  'Torrent Download': '种子下载',
  'Petition to Expunge': '申请删除',
  'Show Expunge Log': '显示删除日志',
  'Petition to Rename': '申请重命名',
  'Rename Petition Sent': '已发送的重命名申请',
  'Show Gallery Stats': '查看统计',
  'Multi-Page Viewer': '多页查看器',
  ' Read Later': ' 稍后再读',
  ' Added to Read Later': ' 已添加到稍后再读',
  'Posted:': '发布于:',
  'Parent:': '父级:',
  None: '无',
  'Visible:': '显示:',
  Yes: '是',
  'No (Expunged)': '否（已删除）',
  'No (Replaced)': '否（已被替换）',
  'Language:': '语言:',
  'File Size:': '文件大小:',
  'Length:': '页数:',
  'Favorited:': '收藏:',
  'Rating:': '评分:',
  'Not Yet Rated': '还没有评分',
  'Average:': '平均:',
  ' Add to Favorites': ' 添加到收藏夹',
  'There are newer versions of this gallery available:': '此图库有更新的版本可用：',
  Normal: '普通',
  Large: '大图',
  ' Normal': '普通',
  ' Large': '大图',
  '4 rows': '4 行',
  '10 rows': '10 行',
  '20 rows': '20 行',
  '40 rows': '40 行',
  'Score ': '分数 ',
  'Uploader Comment': '上传者评论',
  'Vote+': '顶',
  'Vote-': '踩',
  'Withdraw Vote': '撤销投票',
  'Vote Up': '顶',
  'Vote Down': '踩',
  'Show Tagged Galleries': '含有该标签的图库',
  'Show Tag Definition': '显示标签解释',
  'Add New Tag': '添加新标签',
  'Enter new tags, separated with comma': '输入新标签, 用逗号分隔',
  'Last edited on ': '最后编辑于 ',
  'Post New Comment': '发送新评论',
  'click to show all': '显示全部',
  'A Quick Note About Tagging': '关于标签系统的简单说明',
  'While tagging is relatively straight-forward, there are a number of established guidelines that determine when adding a particular tag is proper and when it is not. Before you put any significant amount of effort into it, we therefore ask that you skim through the ': '尽管标签相对简单明了，但是有许多已建立的准则可以确定何时添加特定标签是正确的。因此，在您投入其中之前，我们要求您阅读',
  'Basic Tagging Guidelines': '基本标签指南',
  ' and ': '和',
  'Fetish Listing': '恋物标签列表',
  '. This will likely save both you and the tagging moderators from doing unnecessary work. In particular, you should note the following:': '。这可以使您和标签管理员免于进行不必要的工作。特别要注意以下几点：',
  '- These are galleries, not individual images. ': '● 这些是图库，而不是单张图片。',
  'Do not tag stuff that is only featured in a few images.': '不要标记仅在少量图像中显示的内容。',
  '- If a tag is ambiguous or frequently misused, you may have to specify a ': '● 如果标签含糊不清或经常被滥用，则可能必须指定',
  namespace: '命名空间',
  '; ': '；',
  'see the Wiki': '参见 Wiki',
  '.': '。',
  '- The ': '● 您对标签的影响',
  power: '权重',
  ' with which you can affect tagging is determined by a number of factors, such as your account age and whether or not you are active on the ': '取决于多种因素，例如您的帐户资历以及您是否活跃在',
  forums: '论坛',
  '- The forums is also where ': '● 论坛也是',
  'everything about tagging is discussed': '讨论标签相关内容',
  '. If you have any comments, suggestions or questions about tagging, this is where you should take it.': '的地方。如果您对标签有任何意见、建议或问题，可在此处讨论。',
  'Alright Already': '好的',
  'Back to Gallery': '返回图库',
  'Report Type': '举报类型',
  '[Select a complaint type...]': '[请选择一个举报类型...]',
  'DMCA/Copyright Infringement': 'DMCA / 侵犯版权',
  'Child Pornography': '儿童色情',
  'Other Illicit Content': '其他非法内容',
  'Watched Tag Galleries': '标签订阅'
}, [[/^(\d+) times?$/, '$1 次'], [/Average: ([\d.]+)/, '平均值：$1'], [/Rate as ([\d.]+) stars?/, '$1 星'], [/Torrent Download \(\s*(\d+)\s*\)/, '种子下载（$1）'], [/Posted on (.*?) by:\s*/, "\u8BC4\u8BBA\u65F6\u95F4\uFF1A$1 \xA0\u4F5C\u8005\uFF1A"], [/^, added (.*?)$/, "\uFF0C\u66F4\u65B0\u4E8E $1"], [/^There (is|are) ([\d,]+) more comments? below the viewing threshold - $/, '还有 $2 条评论尚未显示 - ']]);
merge(/^\/g\/\w+\/\w+\/.*act=expunge/, undefined, {
  'Submit New Expunge Petition': '提交新的删除申请',
  'Specify a valid objective reason why this gallery should be expunged.': '请说明要删除此库的客观原因。',
  ' None / Withdraw Petition.': '无 / 撤回删除申请。',
  ' This gallery is a duplicate of equal or lower quality of an earlier posted gallery.': '此图库是之前发布的图库的质量相同或较低的副本。',
  ' A newer higher-quality and clearly marked copy of this gallery has been uploaded.': '这个图库的更高质量和标记清楚的副本已上传。',
  ' This gallery contains either illicit content like child porn or anything else forbidden by the ': '这个图库包含非法内容，如儿童色情或其他列于',
  ', or otherwise falls under the ': '的禁止内容，或列于',
  'Expunge Guidelines': '删除指南',
  ' (specify below).': '的内容（在下方详细描述）。',
  ' This gallery contains either illicit content like child porn or anything else that has been banned.': '这个图库包含非法内容，如儿童色情或其他任何禁止的内容。',
  'Enter a reason for this expunge here. Note that submitting petitions with subjective reasons along the line of "I hate this content/artist/uploader/etc" are NOT valid and can cause account penalties/restrictions.': '在此处输入删除的详细原因。请注意，“我讨厌此内容/艺术家/上传者”等主观理由是无效的，并且可能导致帐户处罚/限制。',
  'Enter the URL of the conflicting gallery, if applicable.': '如有必要，在此处输入冲突图库的 URL。',
  'Enter an explanation for this expunge here. It should include the location of the duplicate or the specific rule being violated.': '请输入清除原因和备注。它应包括副本的位置或违反的特定规则。',
  'No expunge petitions have been filed for this gallery': '此图库尚未有删除申诉',
  'Create New Petition': '提交新申请',
  Back: '返回'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/gallerypopups.ts

merge(/^\/gallerypopups\.php\?.*act=rename/, undefined, {
  'Uploader:': '上传者：',
  'Roman Script': '罗马音',
  'Japanese Script': '日文',
  'Not Set': '未设置',
  'Blank Vote': '空投票',
  ' New': ' 新',
  Submit: '提交'
});
merge(/^\/gallerypopups\.php\?.*act=addfav/, undefined, {
  'Please choose a color to file this favorite gallery under. You can also add a note to it if you wish.': '请选择一个颜色标记你的收藏，你也可以加一些备注。',
  'Favorite Note (Max 200 Characters)': '收藏备注（最多 200 字符）',
  'Add to Favorites': '添加到收藏',
  'Remove from Favorites': '从收藏中移除',
  'Apply Changes': '应用更改'
}, [[/([\d,]+) \/ ([\d,]+) favorite note slots? used\./, '已经使用了 $1 个备注，共 $2 个。']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/hathperks.ts

merge(/^\/hathperks\.php/, undefined, {
  'By running the Hentai@Home client, you will over time gain special bonus points known as ': '通过运行 Hentai@Home 客户端，您将随着时间的推移获得特殊的奖励积分，即 ',
  '. These are rewards for people who help keeping this site free, fast and responsive by donating bandwidth and computer resources, and can be exchanged here for ': '。这是给予捐献带宽和计算机资源，帮助网站保持自由与快速的奖励，可以在这里交换 ',
  ', which grant beneficial effects on E-Hentai Galleries and in the HentaiVerse.': '，这对 E-Hentai 和 HentaiVerse 产生了有益的影响。',
  'If running H@H is not an option, you can also you can exchange Credits for Hath at the ': '如果你不能运行 H@H，你可以在这里用 Credits 交换 Hath：',
  'While the Hath Perks for the HentaiVerse cannot be obtained in any other way, most of the ones that are specific for Galleries will also get unlocked by making a donation on the ': '尽管用于 HentaiVerse 游戏的 Hath Perks 不能用其他方法获取，但关于图库的大部分  Hath Perks 也可以通过',
  'Donation Screen': '捐赠',
  '. These will be refunded if you buy them for Hath, and later make a qualifying donation. There is also an option to "adopt" H@H clients that will grant you Hath over time as if you were running it yourself.': '获取。如果您已经用 Hath 购买，在符合条件的捐赠后将获得退款。还有一个“领养” H@H 客户端的选项，它会随着时间的推移而授予您 Hath，就好像您自己运行它一样。',
  'You currently have ': '你现在拥有 ',
  ' Hath.': ' Hath。',
  Description: '描述',
  Obtained: '已获得',
  Purchase: '购买',
  'Free with a $20 donation.': '捐赠 $20 免费解锁',
  'Free with a $50 donation.': '捐赠 $50 免费解锁',
  'Free with a $100 donation.': '捐赠 $100 免费解锁',
  'Ads-Be-Gone': '广告不见了',
  'Unlocks the display ads toggle for E-Hentai Galleries on the User Settings page. This will allow you to browse E-Hentai Galleries sans ads, and still retain your conscience.': '移除 E-Hentai 的广告，不需要昧着良心使用广告屏蔽插件。',
  'Source Nexus': '原始之力',
  'Unlocks the Original Images functionality on E-Hentai Galleries. This allows you to browse the original, non-resampled version of a gallery directly.': '解锁 E-Hentai 图库的原始图像功能。这允许您直接浏览图库的原始非重采样版本。',
  'Multi-Page Viewer': '多页查看器',
  'Unlocks the Multi-Page Viewer function on E-Hentai Galleries. This allows you to view all images from a gallery on one page. (': '解锁 E-Hentai 图库的多页查看器功能。这允许您在一个页面上查看库中的所有图像。（',
  demo: '演示',
  ')': '）',
  'More Thumbs': '更多的缩略图',
  'Increases the maximum number of thumbnail rows to 10.': '将最大缩略图行数增加到 10。',
  'Thumbs Up': '超多的缩略图',
  'Further increases the maximum number of thumbnail rows to 20.': '将最大缩略图行数增加到 20。',
  'All Thumbs': '全部的缩略图',
  'Further increases the maximum number of thumbnail rows to 40.': '将最大缩略图行数增加到 40。',
  'More Pages': '更多页面',
  'Increases all limits on how many pages you can view by a factor of two.': '将图片限制变为原来的 2 倍。',
  'Lots of Pages': '超多页面',
  'Increases all limits on how many pages you can view by a factor of five.': '将图片限制变为原来的 5 倍。',
  'Too Many Pages': '全部页面',
  'Increases all limits on how many pages you can view by a factor of ten.': '将图片限制变为原来的 10 倍。',
  'More Favorite Notes I': '更多收藏备注 I',
  'Increases the number of favorite note slots to 10000.': '将收藏备注限制增加到 10000。',
  'More Favorite Notes II': '更多收藏备注 II',
  'Increases the number of favorite note slots to 25000.': '将收藏备注限制增加到 25000。',
  'Paging Enlargement I': '页面扩大 I',
  'Increases the number of results you can show per page on the index, search and torrent pages to 50.': '将主页、搜索和种子页面的结果数量变为 50。',
  'Paging Enlargement II': '页面扩大 II',
  'Increases the number of results you can show per page on the index, search and torrent pages to 100.': '将主页、搜索和种子页面的结果数量变为 100。',
  'Paging Enlargement III': '页面扩大 III',
  'Increases the number of results you can show per page on the index, search and torrent pages to 200.': '将主页、搜索和种子页面的结果数量变为 200。'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/hentaiathome.ts

merge(/^\/hentaiathome\.php/, undefined, {
  'Hentai@Home Clients': 'Hentai@Home 客户端'
}, [[/All schedule times are in UTC\. As a reference, the current UTC time is (.*?)\./, function (s, t) {
  return "\u6240\u6709\u8BA1\u5212\u65F6\u95F4\u5747\u4E3A UTC\u3002\u4F5C\u4E3A\u53C2\u8003\uFF0C\u73B0\u5728\u7684 UTC \u65F6\u95F4\u662F ".concat(t.replace(/\s/g, '\xA0'), "\u3002");
}]]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/home.ts

merge(/^\/home\.php/, undefined, {
  'Image Limits': '图片限制',
  'You are currently at ': '当前：',
  ' towards a limit of ': '，限制为 ',
  '. This regenerates at a rate of ': '，每分钟回复 ',
  ' per minute.': ' 点',
  'Reset Cost: ': '重置限制花费：',
  'Reset Limit': '重置限制',
  EHTracker: 'EH 种子服务器',
  ' uploaded': '上传量',
  downloaded: '下载量',
  'up/down ratio': '分享率',
  'torrent completes': '完成种子',
  'gallery completes': '完成图库',
  seedmins: '做种时长',
  'Show My Torrents': '显示我的种子',
  'If you misplace any of your personalized torrents, hit the button below to reset your key.': '如果你错误地分发了私有种子，请点击下面的按钮重置你的 KEY。',
  'This will immediately invalidate all of your personalized torrents in play.': '这将立即注销你全部的私有种子。',
  'Your current key is: ': '你当前的 KEY 是：',
  'Reset Torrent Key': '重置种子 KEY',
  'Total GP Gained': '获得的总 GP',
  'GP from gallery visits': 'GP 来自图库浏览',
  'GP from torrent completions': 'GP 来自种子完成',
  'GP from archive downloads': 'GP 来自存档下载',
  'GP from Hentai@Home': 'GP 来自 Hentai@Home',
  Toplists: '排行榜',
  '\n\t\t\tYou are currently not featured on any toplists...\n\t\t': '您当前没有上榜……',
  'You are currently: ': '你现在是：',
  'on the ': '（在',
  ' toplist': '榜）',
  'Moderation Power': '愿力',
  'Current Moderation Power': '当前愿力',
  Base: '基础',
  Awards: '奖励',
  Tagging: '打标签',
  Level: '等级',
  Donations: '捐赠',
  'Forum Activity': '论坛活跃',
  'Uploads/H@H': '上传 / H@H',
  'Account Age': '账户资历',
  '(capped to 25)': '（不超过 25）'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/image.ts

merge(/^\/s\//, undefined, {
  'Show all galleries with this file': '显示所有包含此图片的图库',
  'Generate a static forum image link': '生成用于论坛的图片链接',
  'Click here if the image fails loading': '重新加载图片'
}, [[/Download original (.*?) source/, '下载原图（$1）']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/login.ts

merge(/^\/bounce_login\.php/, undefined, {
  'This page requires you to log on.': '此页面需要登录才能访问',
  'User:': '用户：',
  'Pass:': '密码：',
  'Login!': '登录',
  '\xA0or\xA0': '或',
  Register: '注册'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/logs.ts

merge(/^\/logs\.php/, undefined, {
  Date: '日期',
  Amount: '金额',
  Information: '信息',
  'Total Karma: ': '总 Karma：',
  From: '来自',
  Topic: '主题',
  Comment: '附言'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/mytags.ts

merge(/^\/mytags/, undefined, {
  'Enter a single tag to flag, watch or hide': '输入要标记、关注或隐藏的标签',
  ' Watched': ' 关注',
  ' Hidden': ' 隐藏',
  ' Enable': '启用',
  'Action:': '操作：',
  Save: '保存',
  '#default': '#默认',
  'Select All': '全选',
  'Delete Selected': '删除选中项',
  'Confirm Delete': '确认删除'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/news.ts

merge(/^\/news\.php/, undefined, {
  'Latest Site Status Updates': '最新网站状态',
  'Site Update Log': '网站更新日志',
  'You can follow ': '你可以',
  'follow us on Twitter': '在推特上关注我们',
  ' to receive these site status updates if the site is ever unavailable.': '以便在网站不可用时获取网站状态信息。 '
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/stats.ts

merge(/^\/stats\.php/, undefined, {
  'Visitor Statistics': '访客统计',
  'This gallery has had a total of ': '此图库共计有 ',
  ' visit(s).': ' 名访客。',
  'Galleries All-Time': '所有时间',
  'Galleries Past Year': '年排行',
  'Galleries Past Month': '月排行',
  'Galleries Yesterday': '日排行',
  'Not in top 1000': '1000 名以外',
  Ranking: '名次',
  Score: '分数',
  Visits: '访问',
  Hits: '点击',
  'Yearly Stats': '年度统计',
  'Last 12 Months': '最近 12 个月',
  'Daily Stats': '每日统计',
  'The number of total visits on your galleries.': '图库总访问次数',
  'The number of total image accesses on your galleries.': '图库中图片访问次数',
  'Back To Gallery': '返回图库',
  Jan: '1 月',
  Feb: '2 月',
  Mar: '3 月',
  Apr: '4 月',
  May: '5 月',
  Jun: '6 月',
  Jul: '7 月',
  Aug: '8 月',
  Sep: '9 月',
  Oct: '10 月',
  Nov: '11 月',
  Dec: '12 月',
  '1st': '1 日',
  '2nd': '2 日',
  '3rd': '3 日',
  '4th': '4 日',
  '5th': '5 日',
  '6th': '6 日',
  '7th': '7 日',
  '8th': '8 日',
  '9th': '9 日',
  '10th': '10 日',
  '11th': '11 日',
  '12th': '12 日',
  '13th': '13 日',
  '14th': '14 日',
  '15th': '15 日',
  '16th': '16 日',
  '17th': '17 日',
  '18th': '18 日',
  '19th': '19 日',
  '20th': '20 日',
  '21st': '21 日',
  '22nd': '22 日',
  '23rd': '23 日',
  '24th': '24 日',
  '25th': '25 日',
  '26th': '26 日',
  '27th': '27 日',
  '28th': '28 日',
  '29th': '29 日',
  '30th': '30 日',
  '31st': '31 日'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/toplist.ts

merge(/^\/(toplist|home)\.php/, undefined, {
  'Galleries All-Time': '图库总排行',
  'Galleries Past Year': '图库年排行',
  'Galleries Past Month': '图库月排行',
  'Galleries Yesterday': '图库日排行',
  'Uploader All-Time': '上传总排行',
  'Uploader Past Year': '上传年排行',
  'Uploader Past Month': '上传月排行',
  'Uploader Yesterday': '上传日排行',
  'Tagging All-Time': '标签总排行',
  'Tagging Past Year': '标签年排行',
  'Tagging Past Month': '标签月排行',
  'Tagging Yesterday': '标签日排行',
  'Hentai@Home All-Time': 'Hentai@Home 总排行',
  'Hentai@Home Past Year': 'Hentai@Home 年排行',
  'Hentai@Home Past Month': 'Hentai@Home 月排行',
  'Hentai@Home Yesterday': 'Hentai@Home 日排行',
  'EHTracker All-Time': '做种总排行',
  'EHTracker Past Year': '做种年排行',
  'EHTracker Past Month': '做种月排行',
  'EHTracker Yesterday': '做种日排行',
  'Cleanup All-Time': '清理总排行',
  'Cleanup Past Year': '清理年排行',
  'Cleanup Past Month': '清理月排行',
  'Cleanup Yesterday': '清理日排行',
  'Rating & Reviewing All-Time': '打分 & 评论总排行',
  'Rating & Reviewing Past Year': '打分 & 评论年排行',
  'Rating & Reviewing Past Month': '打分 & 评论月排行',
  'Rating & Reviewing Yesterday': '打分 & 评论日排行'
});
merge(/^\/toplist\.php/, undefined, {
  'EHG Toplists': 'EHG 排行榜',
  'Gallery Toplists': '图库排行',
  'Uploader Toplists': '上传排行',
  'Tagging Toplists': '标签排行',
  'Hentai@Home Toplists': 'Hentai@Home 排行',
  'EHTracker Toplists': '做种排行',
  'Cleanup Toplists': '清理排行',
  'Rating & Reviewing Toplists': '打分 & 评论排行'
});
merge(/^\/toplist\.php\?tl=1/, undefined, {
  Published: '发布时间',
  Name: '标题',
  Uploader: '上传者'
});
merge(/^\/toplist\.php\?tl=[2-7]/, undefined, {
  Rank: '排名',
  Score: '得分',
  Name: '用户名'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/torrents.ts

merge(/^\/(gallery)?torrents\.php/, undefined, {
  'Status: ': '状态：',
  All: '全部',
  Seeded: '有种',
  Unseeded: '无种',
  ' \xA0 \xA0 \xA0 \xA0 Show: ': ' |  显示：',
  'All Torrents': '全部种子',
  'Only My Torrents': '我的种子',
  '\nNote that you cannot add torrents directly to this page. To upload torrents to this system, visit the torrent screen for a gallery.\n': '注意：你不能直接把种子添加到此页面。请在图库中上传。',
  'Search Torrents': '搜索种子',
  'Advanced Gallery/Torrent Search': '高级图库和种子搜索',
  Added: '添加于',
  'Posted:': '发布于：',
  'Torrent Name': '种子名',
  Gallery: '图库 ID',
  Size: '文件大小',
  'Size:': '文件大小：',
  Seeds: '做种',
  Peers: '下载',
  'Seeds:': '做种：',
  'Peers:': '下载：',
  DLers: '下载',
  'Downloads:': '完成：',
  Completes: '完成',
  DLs: '完成',
  '0 torrents were found for this gallery.': '当前图库还没有种子',
  'Uploader:': '上传者：',
  'New Torrents:': '新种子：',
  Information: '信息',
  'Close Window': '关闭窗口',
  'Upload Torrent': '上传种子',
  '\n\t\tYou can add a torrent for this gallery by uploading it here. The maximum torrent file size is 10 MB.': '您可以在这里上传来为此库添加种子。最大 Torrent 文件大小为 10MB。',
  '\n\t\tNote that you have to download the finished torrent from this site after uploading for stats to be recorded.\n\t': '请注意，您必须在上传后从该站点下载私有种子，以便记录统计信息。',
  '\n\t\tIf you are creating the torrent yourself, set this as announce tracker: ': '如果您自己创建 Torrent，请将其设置为 AnnounceTracker：',
  'Personalized Torrent': '私有种子',
  'Redistributable Torrent': '可再分发种子',
  '(Just For You - this makes sure to record your stats)\n': '(只属于你 - 确保记录你的下载统计信息)',
  '(use if you want a file you can post or give to others)': '(如果您想再发布或提供给其他人使用)',
  'Back to Index': '返回',
  'Vote to Expunge': '投票删除',
  'No comments were given for this torrent.': '这个种子没有评论'
}, [[/([\d,]+) torrents? (was|were) found for this gallery\./, '找到了 $1 个种子。']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/uconfig.ts

merge(/^\/uconfig\.php/, undefined, {
  'Selected Profile:': '当前配置：',
  'Settings were updated': '设置更新完毕',
  Rename: '重命名',
  'Create New': '新建',
  'Delete Profile': '删除配置',
  'Set as Default': '设为默认',
  Apply: '应用',
  ' Auto': '自动',
  ' No': '否',
  ' Yes': '是',
  ' Nope': ' 否',
  ' Yup': ' 是',
  ' Always': '总是',
  'Image Load Settings': '图片加载设置',
  'Do you wish to load images through the Hentai@Home Network, if available?': '如果可用，是否希望通过 Hentai@Home 网络加载图像？',
  ' Any client (Recommended)': ' 所有客户端（推荐）',
  ' Default port clients only (Can be slower. Enable if behind firewall/proxy that blocks outgoing non-standard ports.)': ' 仅使用默认端口的客户端（可能稍慢。当防火墙或代理阻止非标准接口的流量时启用此项。）',
  ' No (Donator only. You will not be able to browse as many pages, enable only if having severe problems.)': ' 否（仅限赞助者。配额消耗会加快，只有出现问题时才启用。）',
  'You appear to be browsing the site from ': '你看起来正在 ',
  ' or use a VPN or proxy in this country, which means the site will try to load images from H@H clients in this general geographic region. If this is incorrect, or if you want to use a different region for any reason (like if you are using a split tunneling VPN), you can select a different country below.': ' 浏览此网页，或是使用了一个来自此处的 VPN，这意味着网站将尝试通过在此区域的 H@H 客户端加载图片。如果该结果不正确，或你想通过其他地区的 H@H 客户端加载图片（例如你正在使用分割隧道 VPN），你可以在下方选择一个不同的区域。',
  '\n\t\tBrowsing Country: ': '浏览区域：',
  'Auto-Detect': '自动',
  'Image Size Settings': '图片大小设置',
  'Normally, images are resampled to 1280 pixels of horizontal resolution for online viewing. You can alternatively select one of the following resample resolutions. To avoid murdering the staging servers, resolutions above 1280x are temporarily restricted to donators, people with any hath perk, and people with a UID below 3,000,000.': '通常情况，图像将重采样到 1280 像素宽度以用于在线浏览，您也可以选择以下重新采样分辨率。' + '但是为了避免负载过高，高于 1280 像素将只供给于赞助者、特殊贡献者，以及 UID 小于 3,000,000 的用户。',
  'While the site will automatically scale down images to fit your screen width, you can also manually restrict the maximum display size of an image. Like the automatic scaling, this does not resample the image, as the resizing is done browser-side. (0 = no limit)': '虽然图片会自动根据窗口缩小，你也可以手动设置最大大小，图片并没有重新采样（0 为不限制）',
  'Horizontal:': '宽/横向',
  'Vertical:': '高/纵向',
  ' pixels': ' 像素',
  'Gallery Name Display': '图库的名字显示',
  'Many galleries have both an English/Romanized title and a title in Japanese script. Which gallery name would you like as default?': '很多图库都同时拥有英文或者日文标题，你想默认显示哪一个？',
  ' Default Title': '默认标题（英文）',
  ' Japanese Title (if available)': '日文标题（如果有）',
  'Archiver Settings': '归档设置',
  'The default behavior for the Archiver is to confirm the cost and selection for original or resampled archive, then present a link that can be clicked or copied elsewhere. You can change this behavior here.': '默认归档下载方式为手动选择（原画质或压缩画质），然后手动复制或点击下载链接。你可以修改归档下载方式。',
  ' Manual Select, Manual Start (Default)': ' 手动选择，手动下载（默认）',
  ' Manual Select, Auto Start': ' 手动选择，自动下载',
  ' Auto Select Original, Manual Start': ' 自动选择原始画质，手动下载',
  ' Auto Select Original, Auto Start': ' 自动选择原始画质，自动下载',
  ' Auto Select Resample, Manual Start': ' 自动选择压缩画质，手动下载',
  ' Auto Select Resample, Auto Start': ' 自动选择压缩画质，自动下载',
  'Front Page Settings': '首页设置',
  'Which display mode would you like to use on the front and search pages?': '你想在搜索页面显示哪种样式？',
  'What categories would you like to show by default on the front page and in searches?': '你希望在首页上看到哪些类别？',
  Favorites: '收藏',
  'Here you can choose and rename your favorite categories.': '在这里你可以重命名你的收藏夹。',
  'You can also select your default sort order for galleries on your favorites page. Note that favorites added prior to the March 2016 revamp did not store a timestamp, and will use the gallery posted time regardless of this setting.': '你也可以选择收藏夹中默认排序。请注意，2016 年 3 月改版之前加入收藏夹的图库并未保存收藏时间，会以图库发布时间代替。',
  ' By last gallery update time': '以最新的图库更新时间排序',
  ' By favorited time': '以收藏时间排序',
  Ratings: '评分',
  'By default, galleries that you have rated will appear with red stars for ratings of 2 stars and below, green for ratings between 2.5 and 4 stars, and blue for ratings of 4.5 or 5 stars. You can customize this by entering your desired color combination below.': '默认设置下，你评为 2 星及以下的图库显示为红星，2.5 ~ 4 星显示为绿星，4.5 ~ 5 星显示为蓝星。你可以将其设定为其他颜色组合。',
  'Each letter represents one star. The default RRGGB means R(ed) for the first and second star, G(reen) for the third and fourth, and B(lue) for the fifth. You can also use (Y)ellow for the normal stars. Any five-letter R/G/B/Y combo works.': '每一个字幕代表一颗星, 默认的 RRGGB 表示第一第二颗星显示为红色 R(ed)，第三第四颗星显示是绿色 G(reen)，第五颗星显示为蓝色 B(lue)。你也可以使用黄色 (Y)ellow，R/G/B/Y 任何五个组合都是有效的。',
  'Tag Namespaces': '标签组',
  'If you want to exclude certain namespaces from a default tag search, you can check those below. Note that this does not prevent galleries with tags in these namespaces from appearing, it just makes it so that when searching tags, it will forego those namespaces.': '如果要从默认标签搜索中排除某些标签组，可以检查以下内容。请注意，这不会阻止在这些标签组中的标签的展示区出现，它只是在搜索标签时排除这些标签组。',
  ' reclass': ' 重新分类',
  ' language': ' 语言',
  ' parody': ' 原作',
  ' character': ' 角色',
  ' group': ' 社团',
  ' artist': ' 作者',
  ' male': ' 男性',
  ' female': ' 女性',
  'Tag Filtering Threshold': '标签筛选阈值',
  'You can soft filter tags by adding them to ': '你可以通过将标签加入「',
  ' with a negative weight. If a gallery has tags that add up to weight below this value, it is filtered from view. This threshold can be set between 0 and -9999.': '」并设置一个负权重来软过滤它们。如果一个作品所有的标签权重之和低于设定值，此作品将从视图中被过滤。这个值可以设定为 0 ~ -9999。',
  'Tag Watching Threshold': '标签订阅阈值',
  'Recently uploaded galleries will be included on the watched screen if it has at least one watched tag with positive weight, and the sum of weights on its watched tags add up to this value or higher. This threshold can be set between 0 and 9999.': '你可以通过将标签加入「我的标签」并设置一个正权重来关注它们。如果一个最近上传的作品所有标签的权重之和高于设定值，则它将会被包含在「关注」里。这个值可以设定为 0 ~ 9999。',
  'Excluded Languages': '排除语言',
  'If you wish to hide galleries in certain languages from the gallery list and searches, select them from the list below.': '如果您希望以图库列表中的某些语言隐藏图库并进行搜索，请从下面的列表中选择它们。',
  'Note that matching galleries will never appear regardless of your search query.': '请注意，无论搜索查询如何，匹配的图库都不会出现。',
  Original: '原始语言',
  Translated: '翻译版',
  Rewrite: '改编版',
  All: '所有',
  Japanese: '日文',
  English: '英文',
  Chinese: '中文',
  Dutch: '荷兰语',
  French: '法语',
  German: '德语',
  Hungarian: '匈牙利',
  Italian: '意呆利',
  Korean: '韩语',
  Polish: '波兰语',
  Portuguese: '葡萄牙语',
  Russian: '俄语',
  Spanish: '西班牙语',
  Thai: '泰语',
  Vietnamese: '越南语',
  'N/A': '无效',
  Other: '其他',
  'Excluded Uploaders': '屏蔽的上传者',
  'If you wish to hide galleries from certain uploaders from the gallery list and searches, add them below. Put one username per line.': '如果你希望在图库中和搜索中隐藏某个上传者的话，请把他们的用户名填写在下方，每行一个。',
  'Note that galleries from these uploaders will never appear regardless of your search query.': '注意：无论你如何搜索，这些上传者都不会出现。',
  'You are currently using ': '已使用 ',
  ' of ': '/',
  ' exclusion slots.\n': '。',
  'Search Result Count': '搜索结果数',
  'How many results would you like per page for the index/search page and torrent search pages? (Hath Perk: Paging Enlargement Required)': '搜索页面每页显示多少条数据？（Hath Perk：需要「页面扩大」）',
  ' 25 results': '25 个',
  ' 50 results': '50 个',
  ' 100 results': '100 个',
  ' 200 results': '200 个',
  'Thumbnail Settings': '缩略图设置',
  'How would you like the mouse-over thumbnails on the front page to load when using List Mode?': '你希望鼠标悬停缩略图何时加载？',
  ' On mouse-over (pages load faster, but there may be a slight delay before a thumb appears)': '鼠标悬停时 (页面加载快，缩略图加载有延迟)',
  ' On page load (pages take longer to load, but there is no delay for loading a thumb after the page has loaded)': '页面加载时 (页面加载时间更长，但是显示的时候无需等待)',
  'You can set a default thumbnail configuration for all galleries you visit.': '图库页面缩略图设置。',
  'Size: ': '大小：',
  ' Normal': ' 普通',
  ' Large': ' 大图',
  'Rows:': '行数：',
  'Thumbnail Scaling': '缩略图缩放',
  'Thumbnails on the thumbnail and extended gallery list views can be scaled to a custom value between 75% and 150%.': '缩略图和扩展模式下的图库列表缩略图可以缩放为 75% 到 150% 之间的自定义值。',
  'Viewport Override': '移动端虚拟宽度',
  'Allows you to override the virtual width of the site for mobile devices. This is normally determined automatically by your device based on its DPI. Sensible values at 100% thumbnail scale are between 640 and 1400.': '允许你覆盖移动设备的虚拟宽度，默认是根据 DPI 自动计算的，100% 缩略图比例下的合理值在 640 到 1400 之间。',
  'Gallery Comments': '图库评论',
  'Sort order for gallery comments:': '评论排序方式：',
  ' Oldest comments first': '最早的评论',
  ' Recent comments first': '最新的评论',
  ' By highest score': '分数最高',
  'Show gallery comment votes:': '显示评论投票数：',
  ' On score hover or click': '悬停或点击时',
  'Gallery Tags': '图库标签',
  'Sort order for gallery tags:': '图库标签排序方式：',
  ' Alphabetical': '按字母排序',
  ' By tag power': '按标签权重',
  'Gallery Page Numbering': '图库页面页码',
  'Show gallery page numbers:\n\t': '显示图库页码：\n\t',
  'Hentai@Home Local Network Host': 'Hentai@Home 本地网络服务器',
  'This setting can be used if you have a H@H client running on your local network with the same public IP you browse the site with. Some routers are buggy and cannot route requests back to its own IP; this allows you to work around this problem.': '如果你本地安装了 H@H 客户端，本地 IP 与浏览网站的公共 IP 相同，一些路由器不支持回流导致无法访问到自己，你可以设置这里来解决。',
  'If you are running the client on the same PC you browse from, use the loopback address (127.0.0.1:port). If the client is running on another computer on your network, use its local network IP. Some browser configurations prevent external web sites from accessing URLs with local network IPs, the site must then be whitelisted for this to work.': '如果在同一台电脑上访问网站和运行客户端，请使用本地回环地址(127.0.0.1:端口号)。如果客户端在网络上的其他计算机运行，请使用那台机器的内网 IP。某些浏览器的配置可能阻止外部网站访问本地网络，你必须将网站列入白名单才能工作。',
  'Original Images': '原始图像',
  'Use original images instead of the resampled versions where applicable?': '当可用的时候，使用原始图像代替压缩过的版本？',
  ' Yup, I can take it': '好的，我可以接受更多的配额消耗',
  'Multi-Page Viewer': '多页查看器',
  'Always use the Multi-Page Viewer? There will still be a link to manually start it if this is left disabled.': '总是使用多页查看器？禁用此选项时，仍可以手动启动多页查看器。',
  'Multi-Page Viewer Display Style:': '显示样式：',
  ' Align left; Only scale if image is larger than browser width': '左对齐；仅当图像大于浏览器宽度时缩放',
  ' Align center; Only scale if image is larger than browser width': '居中对齐；仅当图像大于浏览器宽度时缩放',
  ' Align center; Always scale images to fit browser width': '居中对齐；始终缩放图像以适应浏览器宽度',
  'Multi-Page Viewer Thumbnail Pane:': '显示缩略图侧栏：',
  ' Show': ' 显示',
  ' Hide': ' 隐藏'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/upload.ts

var data = {
  'Published Galleries': '发布图库',
  'Empty Galleries': '空图库',
  'Unpublished Galleries': '未发布的图库',
  'Gallery Name ': '图库名称',
  'Date Added ': '添加时间 ',
  'Public Category': '发布类别',
  'Available Actions': '操作',
  Files: '文件数',
  Unsorted: '未分类',
  'Go To Gallery': '查看图库',
  Stats: '统计',
  Manage: '管理',
  Publish: '发布',
  'Collapse Open Folders': '折叠文件夹',
  'Set public category for selected galleries: ': '设置选中的发布分类: ',
  'Move selected galleries to folder: ': '移动到文件夹: ',
  'Create New Gallery': '创建新图库',
  'Manage Folders': '管理文件夹',
  'Gallery List': '图库列表',
  'Create Gallery': '创建图库',
  'My Galleries': '我的图库',
  'Main Gallery Title': '主标题',
  'The main english or romanized title for this gallery.': '这个图库的主标题, 英文或者罗马音',
  'Japanese Script Title': '日文标题',
  'The original title in Japanese script, if applicable.': '原始的日文标题（如果有）',
  'Gallery Folder': '图库文件夹',
  'The folder this gallery will be displayed under in the gallery list. This is only used to help you organize your gallery uploads.': '图库文件夹仅在我的图库列表中显示，仅用于帮助整理上传的图库.',
  'or new folder: ': '或新建文件夹：',
  'Uploader Comment': '上传者评论',
  'Any comments or additional relevant information for this gallery. This will always show up as the topmost comment, and cannot be voted down.': '关于此图库的任何评论或其他相关信息。将始终显示在评论的最顶部，并且不能投票。',
  'Date Added:': '添加时间：',
  'Date Posted:': '发布时间：',
  'Not created yet': '尚未创建',
  'Not published yet': '尚未发布',
  'Uploaded Files:': '上传文件数：',
  'Total Filesize:': '总文件大小：',
  'Parent Gallery:': '父级图库：',
  'Child Gallery:': '子图库：',
  'Expunged:': '删除：',
  'Visible:': '可见：',
  'No (Unpublished)': '否 (尚未发布)',
  'Show Public Gallery': '查看图库',
  'Show Gallery Stats': '查看统计',
  'Delete Gallery': '删除图库',
  'Make this gallery publicly available as:': '将图库发布到：',
  'I have read and agree with the ': '我已阅读并同意',
  'Upload Files': '上传文件',
  'Accepted Images: JPG < 20 MB, PNG < 50 MB, GIF < 10 MB. Accepted Archive Formats: RAR, ZIP. Max Resolution: 20000 x 20000.': '图像：JPG < 20 MB, PNG < 50 MB, GIF < 10 MB；归档：RAR, ZIP。最大分辨率：20000 x 20000。',
  'Max 2,000 files and 10 GB per gallery. You should upload no more than 500MB at a time, less if you have a slow connection.': '每个图库最多包含 2000 张图片或 10GB。一次上传的大小不应超过500MB，如果连接速度较慢，可以尝试以更小归档上传。',
  'Start Upload': '开始上传',
  'Select one or more image or archive files and click Start Upload to add files to this gallery.': '选择一个或多个图像或归档文件，然后点击“开始上传”，以添加文件到此图库。',
  '\n\t\tNo files have been added yet\n\t\t': '尚未添加任何文件',
  'You have added a total of ': '你目前添加了 ',
  ' image so far.': ' 张图片。',
  'Revert All Changes': '撤销所有更改',
  'Apply with Standard Sort': '使用标准排序',
  'Apply with Natural Sort': '使用自然排序',
  'Apply with Current Ordering': '使用当前顺序',
  'Using Standard Sort will reorder the gallery with numbers in lexicographic order (1, 10, 11, 12, 2). Unless numbers are zero-padded, this can lead to unexpected results.': '使用标准排序将按字典顺序（1, 10, 11, 12, 2）排序此图库中的图片。如果数字不包含前导 0，此操作将导致错误的结果。',
  'Using Natural Sort will reorder the gallery with numbers in natural ascending order (8, 9, 10, 11, 12) regardless of whether they are padded or not.': '使用自然排序将按数字递增顺序（8, 9, 10, 11, 12）排序此图库中的图片，不论是否存在前导 0。',
  'Publish Gallery': '发布图库',
  'Folder Name': '文件夹名称',
  'Display Order': '显示顺序',
  '(No folders have been added yet.)': '（尚未添加文件夹）',
  'Create Folder': '创建文件夹',
  'Save and Auto-Reorder': '保存并自动排序',
  'Save Changes': '保存更改',
  Delete: '删除',
  Cancel: '取消',
  'New folder name': '新文件夹名称',
  'Please confirm that you wish to delete the gallery:': '请确认要删除以下图库',
  'Gallery not found.': '图库未找到。',
  'You do not have access to change that item.': '你没有更改此条目的权限'
};
merge(/^\/upload\//, undefined, data);
merge(/^\//, 'upload.e-hentai.org', data);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/watched.ts

merge(/^\/watched/, undefined, {
  'You do not have any watched tags. You can change your watched tags from ': '你当前没有关注任何标签。你可以修改关注的标签：'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data.ts




















;// CONCATENATED MODULE: ./src/services/ui-translation/index.ts




function ui_translation_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = ui_translation_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ui_translation_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ui_translation_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ui_translation_arrayLikeToArray(o, minLen); }

function ui_translation_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var UiTranslation = /*#__PURE__*/function () {
  function UiTranslation(logger) {
    _classCallCheck(this, UiTranslation);

    this.logger = logger;
  }

  _createClass(UiTranslation, [{
    key: "get",
    value: function get() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location;
      var results = {
        plainReplacements: new Map(),
        regexReplacements: new Map()
      };

      if (!url || !(url.host.endsWith('e-hentai.org') || url.host.endsWith('exhentai.org'))) {
        return results;
      }

      var path = url.pathname + url.search;
      this.logger.log('获取 UI 翻译：', path);
      dataMaps.filter(function (d) {
        var _a, _b;

        return d.regex.test(path) && ((_b = (_a = d.hosts) === null || _a === void 0 ? void 0 : _a.includes(location.hostname)) !== null && _b !== void 0 ? _b : true);
      }).forEach(function (d) {
        var _iterator = ui_translation_createForOfIteratorHelper(d.plainReplacements),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                k = _step$value[0],
                v = _step$value[1];

            results.plainReplacements.set(k, v);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = ui_translation_createForOfIteratorHelper(d.regexReplacements),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                _k = _step2$value[0],
                _v = _step2$value[1];

            results.regexReplacements.set(_k, _v);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
      return results;
    }
  }]);

  return UiTranslation;
}();

UiTranslation = __decorate([Service(), __metadata("design:paramtypes", [Logger])], UiTranslation);

;// CONCATENATED MODULE: ./package.json
var package_namespaceObject = JSON.parse('{"name":"ehsyringe","displayName":"EhSyringe","version":"2.4.0","description":"E 站注射器，将中文翻译注入到 E 站体内。","author":"EhTagTranslation","scripts":{"start:monkey":"webpack serve --mode=development --env type=user-script","start:ext":"webpack --mode=development --watch --env type=web-ext","start:chrome":"yarn start:ext --env vendor=chrome","start:firefox":"yarn start:ext --env vendor=firefox","build":"webpack --mode=production","build:monkey":"yarn build --env type=user-script","build:ext":"yarn build --env type=web-ext","build:chrome":"yarn build:ext --env vendor=chrome && web-ext build -s dist -a releases -n ehsyringe.chrome.zip -o","build:firefox":"yarn build:ext --env vendor=firefox && web-ext build -s dist -a releases -n ehsyringe.firefox.xpi -o","lint":"eslint ./src/**/*.ts","format":"prettier --ignore-path .gitignore --write .","clean":"rimraf dist releases"},"repository":{"type":"git","url":"git+https://github.com/EhTagTranslation/EhSyringe.git"},"license":"MIT","bugs":{"url":"https://github.com/EhTagTranslation/EhSyringe/issues"},"readme":"https://github.com/EhTagTranslation/EhSyringe","homepage":"https://github.com/EhTagTranslation/EhSyringe","devDependencies":{"@babel/core":"^7.14.3","@babel/plugin-transform-runtime":"^7.14.3","@babel/preset-env":"^7.14.4","@types/chrome":"^0.0.143","@types/escape-html":"^1.0.1","@types/node":"^15.6.1","@types/tampermonkey":"^4.0.0","@typescript-eslint/eslint-plugin":"^4.26.0","@typescript-eslint/parser":"^4.26.0","babel-loader":"^8.2.2","copy-webpack-plugin":"^9.0.0","css-loader":"^5.2.6","cssnano":"^5.0.5","eslint":"^7.27.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^3.4.0","execa":"^5.0.1","file-loader":"^6.2.0","html-webpack-plugin":"^5.3.1","less":"^4.1.1","less-loader":"^9.0.0","postcss":"^8.3.0","postcss-import":"^14.0.2","postcss-loader":"^5.3.0","postcss-preset-env":"^6.7.0","prettier":"^2.3.0","rimraf":"^3.0.2","semver":"^7.3.5","style-loader":"^2.0.0","ts-loader":"^9.2.2","tsconfig-paths-webpack-plugin":"^3.5.1","type-fest":"^1.1.3","typescript":"^4.2.4","url-loader":"^4.1.1","web-ext":"^6.1.0","webpack":"^5.38.1","webpack-bundle-analyzer":"^4.4.2","webpack-cli":"^4.7.0","webpack-dev-server":"^3.11.2","webpack-userscript":"^2.5.8","webpack-webextension-plugin":"^0.3.0","yargs":"^17.0.1"},"dependencies":{"core-js":"^3.13.1","emoji-regex":"^9.2.2","escape-html":"^1.0.3","idb-keyval":"^5.0.6","lit-html":"^1.4.1","normalize.css":"^8.0.1","rxjs":"^7.1.0","tslib":"^2.2.0","typedi":"^0.10.0","webextension-polyfill-ts":"^0.25.0"}}');
;// CONCATENATED MODULE: ./src/info.ts

var packageJson = package_namespaceObject;
;// CONCATENATED MODULE: ./src/services/sync-storage.ts



function sync_storage_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = sync_storage_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function sync_storage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return sync_storage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sync_storage_arrayLikeToArray(o, minLen); }

function sync_storage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var SyncStorage = /*#__PURE__*/function () {
  function SyncStorage(logger, async) {
    _classCallCheck(this, SyncStorage);

    this.logger = logger;
    this.async = async;
    this.defaults = {
      version: packageJson.version,
      databaseMap: undefined,
      databaseSha: undefined,
      config: this.async.defaults.config
    };
    var oldVer = this.get('version');

    if (packageJson.version !== oldVer) {
      this.migrate();
      this.set('version', packageJson.version);
    }
  }

  _createClass(SyncStorage, [{
    key: "get",
    value: function get(key) {
      var value = syncStorage.get(key);
      if (value == null) return this.defaults[key];
      return value;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (value == null) return this["delete"](key);
      return syncStorage.set(key, value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return syncStorage.delete(key);
    }
  }, {
    key: "keys",
    value: function keys() {
      return syncStorage.keys();
    }
  }, {
    key: "migrate",
    value: function migrate() {
      var keys = this.keys();
      if (keys.length === 0) return;
      this.logger.log("\u8FC1\u79FB\u540C\u6B65\u5B58\u50A8\u7248\u672C\uFF0C\u5220\u9664 ", keys);

      var _iterator = sync_storage_createForOfIteratorHelper(keys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          this["delete"](key);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return SyncStorage;
}();

SyncStorage = __decorate([Service(), __metadata("design:paramtypes", [Logger, Storage])], SyncStorage);

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./src/services/date-time.ts




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DateTime_1;


var base = {
  hourCycle: 'h23'
};
var dateFormatter = new Intl.DateTimeFormat(undefined, _objectSpread({
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}, base));
var timeFormatter = new Intl.DateTimeFormat(undefined, _objectSpread({
  hour: 'numeric',
  minute: 'numeric'
}, base));
var dateTimeFormatter = new Intl.DateTimeFormat(undefined, _objectSpread({
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}, base));
var noYearDateTimeFormatter = new Intl.DateTimeFormat(undefined, _objectSpread({
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}, base));

var DateTime = DateTime_1 = /*#__PURE__*/function () {
  function DateTime() {
    _classCallCheck(this, DateTime);
  }

  _createClass(DateTime, [{
    key: "diff",
    value: function diff() {
      var hisTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var nowTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
      var maxRelativeDiff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DateTime_1.day * 7;
      hisTime = typeof hisTime === 'number' ? hisTime : hisTime.getTime();
      nowTime = typeof nowTime === 'number' ? nowTime : nowTime.getTime();
      if (!hisTime) return 'N/A';
      var diffValue = nowTime - hisTime;

      if (diffValue >= maxRelativeDiff) {
        var his = new Date(hisTime);
        var now = new Date(nowTime);

        if (dateFormatter.format(his) === dateFormatter.format(now)) {
          return "\u4ECA\u5929 ".concat(timeFormatter.format(his));
        }

        if (his.getFullYear() === now.getFullYear()) {
          return noYearDateTimeFormatter.format(his);
        }

        return dateTimeFormatter.format(his);
      }

      var nYear = diffValue / DateTime_1.year;
      var nMonth = diffValue / DateTime_1.month;
      var nDay = diffValue / DateTime_1.day;
      var nHour = diffValue / DateTime_1.hour;
      var nMin = diffValue / DateTime_1.minute;
      if (nYear >= 1) return "".concat(Math.floor(nYear), " \u5E74\u524D");else if (nMonth >= 1) return "".concat(Math.floor(nMonth), " \u4E2A\u6708\u524D");else if (nDay >= 1) return "".concat(Math.floor(nDay), " \u5929\u524D");else if (nHour >= 1) return "".concat(Math.floor(nHour), " \u5C0F\u65F6\u524D");else if (nMin >= 1) return "".concat(Math.floor(nMin), " \u5206\u949F\u524D");else return '刚刚';
    }
  }]);

  return DateTime;
}();

DateTime.second = 1000;
DateTime.minute = DateTime_1.second * 60;
DateTime.hour = DateTime_1.minute * 60;
DateTime.day = DateTime_1.hour * 24;
DateTime.month = DateTime_1.day * (365.25 / 12);
DateTime.year = DateTime_1.month * 12;
DateTime = DateTime_1 = __decorate([Service()], DateTime);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/less-loader/dist/cjs.js!./src/plugin/syringe/index.less
var syringe = __webpack_require__(7521);
;// CONCATENATED MODULE: ./src/plugin/syringe/index.less

            

var syringe_options = {"insert":":root"};

syringe_options.insert = ":root";
syringe_options.singleton = false;

var syringe_update = injectStylesIntoStyleTag_default()(syringe/* default */.Z, syringe_options);



/* harmony default export */ var plugin_syringe = (syringe/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/plugin/syringe/index.ts






function syringe_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = syringe_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function syringe_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return syringe_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return syringe_arrayLikeToArray(o, minLen); }

function syringe_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












function isNode(node, nodeName) {
  return node instanceof HTMLElement && node.localName === nodeName;
}

function isText(node) {
  return node != null && node.nodeType === Node.TEXT_NODE;
}

var TagNodeRef = /*#__PURE__*/function () {
  function TagNodeRef(node, fullKey, original, service) {
    _classCallCheck(this, TagNodeRef);

    this.node = node;
    this.fullKey = fullKey;
    this.original = original;
    this.service = service;
    node.setAttribute(TagNodeRef.ATTR, this.original);
    node.setAttribute('lang', 'en');
    Object.defineProperty(node, 'ehs', {
      value: this
    });

    if (!node.hasAttribute('title')) {
      node.title = this.fullKey;
    }
  }

  _createClass(TagNodeRef, [{
    key: "alive",
    get: function get() {
      return !!this.node.parentElement;
    }
  }, {
    key: "translate",
    value: function translate(tagMap) {
      if (!this.alive) return true;

      if (!this.service.config.translateTag) {
        this.node.innerText = this.original;
        this.node.setAttribute('lang', 'en');
        return true;
      }

      if (!tagMap) {
        return false;
      }

      var value = tagMap[this.fullKey];

      if (!value) {
        return false;
      }

      value = this.service.tagging.markImagesAndEmoji(value);

      if (this.original[1] === ':') {
        value = "".concat(this.original[0], ":").concat(value);
      }

      this.node.innerHTML = value;
      this.node.setAttribute('lang', 'cmn-Hans');
      return true;
    }
  }], [{
    key: "create",
    value: function create(node, service) {
      var _a;

      var parentElement = node.parentElement;

      if (!parentElement || parentElement.hasAttribute(this.ATTR)) {
        return true;
      }

      var aId = parentElement.id;
      var aTitle = parentElement.title;
      var fullKeyCandidate;

      if (aTitle) {
        var _aTitle$split = aTitle.split(':'),
            _aTitle$split2 = _slicedToArray(_aTitle$split, 2),
            namespace = _aTitle$split2[0],
            key = _aTitle$split2[1];

        fullKeyCandidate = service.tagging.fullKey({
          namespace: namespace,
          key: key
        });
      } else if (aId) {
        var id = aId;
        if (id.startsWith('ta_')) id = id.slice(3);

        var _id$replace$split = id.replace(/_/gi, ' ').split(':'),
            _id$replace$split2 = _slicedToArray(_id$replace$split, 2),
            _namespace = _id$replace$split2[0],
            _key = _id$replace$split2[1];

        fullKeyCandidate = _key ? service.tagging.fullKey({
          namespace: _namespace,
          key: _key
        }) : service.tagging.fullKey({
          namespace: '',
          key: _namespace
        });
      }

      if (!fullKeyCandidate) return false;
      var fullKey = fullKeyCandidate;
      var text = (_a = node.textContent) !== null && _a !== void 0 ? _a : '';
      return new TagNodeRef(parentElement, fullKey, text, service);
    }
  }]);

  return TagNodeRef;
}();

TagNodeRef.ATTR = 'ehs-tag';

var Syringe = /*#__PURE__*/function () {
  function Syringe(storage, uiTranslation, logger, messaging, tagging, time) {
    var _this = this;

    _classCallCheck(this, Syringe);

    this.storage = storage;
    this.uiTranslation = uiTranslation;
    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.time = time;
    this.tags = [];
    this.documentEnd = false;
    this.skipNode = new Set(['TITLE', 'LINK', 'META', 'HEAD', 'SCRIPT', 'BR', 'HR', 'STYLE', 'MARK']);
    this.config = this.getAndInitConfig();
    this.uiData = this.uiTranslation.get();
    storage.async.on('config', function (k, ov, nv) {
      if (nv) _this.updateConfig(nv);
    });
    this.init();
  }

  _createClass(Syringe, [{
    key: "translateTags",
    value: function translateTags(tagMap) {
      var tags = this.tags.filter(function (t) {
        return t.alive;
      });
      this.tags = tags;
      tagMap !== null && tagMap !== void 0 ? tagMap : tagMap = this.tagMap;
      tagMap !== null && tagMap !== void 0 ? tagMap : tagMap = this.storage.get('databaseMap');
      this.tagMap = tagMap;
      tags.forEach(function (t) {
        return t.translate(tagMap);
      });
    }
  }, {
    key: "updateConfig",
    value: function updateConfig(config) {
      this.config = config;
      this.storage.set('config', config);
      var body = document.querySelector('body');
      if (body) this.setBodyAttrs(body);
      this.translateTags();
    }
  }, {
    key: "getAndInitConfig",
    value: function getAndInitConfig() {
      var _this2 = this;

      this.storage.async.get('config').then(function (conf) {
        _this2.updateConfig(conf);
      })["catch"](this.logger.error);
      return this.storage.get('config');
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      window.document.addEventListener('DOMContentLoaded', function () {
        _this3.documentEnd = true;
      });
      var body = document.querySelector('body');

      if (body) {
        var nodes = new Array();
        this.setBodyAttrs(body);
        var nodeIterator = document.createNodeIterator(body);
        var node = nodeIterator.nextNode();

        while (node) {
          nodes.push(node);
          this.translateNode(node);
          node = nodeIterator.nextNode();
        }

        this.logger.debug("\u6709 ".concat(nodes.length, " \u4E2A\u8282\u70B9\u5728\u6CE8\u5165\u524D\u52A0\u8F7D"), nodes);
      } else {
        this.logger.debug("\u6CA1\u6709\u8282\u70B9\u5728\u6CE8\u5165\u524D\u52A0\u8F7D");
      }

      this.observer = new MutationObserver(function (mutations) {
        return mutations.forEach(function (mutation) {
          return mutation.addedNodes.forEach(function (node1) {
            _this3.translateNode(node1);

            if (_this3.documentEnd && node1.childNodes) {
              var _nodeIterator = document.createNodeIterator(node1);

              var _node = _nodeIterator.nextNode();

              while (_node) {
                _this3.translateNode(_node);

                _node = _nodeIterator.nextNode();
              }
            }
          });
        });
      });
      this.observer.observe(window.document, {
        attributes: true,
        childList: true,
        subtree: true
      });
      this.updateTagMap();
      this.messaging.on('tag-updated', function () {
        return _this3.updateTagMap();
      });
    }
  }, {
    key: "updateTagMap",
    value: function updateTagMap() {
      var _this4 = this;

      if (this.updatingTagMap) return;
      var updatingTagMap;
      updatingTagMap = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var timer, currentSha, data, tagMap, key;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                timer = _this4.logger.time('获取替换数据');
                _context.prev = 1;
                currentSha = _this4.storage.get('databaseSha');
                _context.next = 5;
                return _this4.messaging.emit('get-tag-map', {
                  ifNotMatch: currentSha
                });

              case 5:
                data = _context.sent;

                if (data.map) {
                  tagMap = {};

                  for (key in data.map) {
                    tagMap[key] = data.map[key].name;
                  }

                  _this4.translateTags(tagMap);

                  _this4.storage.set('databaseMap', tagMap);

                  _this4.storage.set('databaseSha', data.sha);

                  _this4.logger.log('替换数据已更新', data.sha);
                } else {
                  _this4.logger.log('替换数据已经最新', data.sha);
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);

                _this4.logger.error(_context.t0);

              case 12:
                _context.prev = 12;
                timer.end();

                if (_this4.updatingTagMap === updatingTagMap) {
                  _this4.updatingTagMap = undefined;
                  updatingTagMap = undefined;
                }

                return _context.finish(12);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9, 12, 16]]);
      }))();
      this.updatingTagMap = updatingTagMap;
    }
  }, {
    key: "setBodyAttrs",
    value: function setBodyAttrs(node) {
      var _node$classList;

      if (!node) return;
      node.classList.add(!location.hostname.endsWith('exhentai.org') ? 'eh' : 'ex');

      (_node$classList = node.classList).remove.apply(_node$classList, _toConsumableArray(_toConsumableArray(node.classList.values()).filter(function (k) {
        return k.startsWith('ehs');
      })));

      if (!this.config.showIcon) {
        node.classList.add('ehs-hide-icon');
      }

      if (this.config.translateTag) {
        node.classList.add('ehs-translate-tag');
      }

      if (this.config.translateUi) {
        node.setAttribute('lang', 'cmn-Hans');
      } else {
        node.setAttribute('lang', 'en');
      }

      node.classList.add("ehs-image-level-".concat(this.config.introduceImageLevel));
    }
  }, {
    key: "translateNode",
    value: function translateNode(node) {
      if (!node.nodeName || this.skipNode.has(node.nodeName) || node.parentNode && this.skipNode.has(node.parentNode.nodeName)) {
        return;
      }

      if (isNode(node, 'body')) {
        this.setBodyAttrs(node);
      }

      var handled = this.translateTag(node);
      /* tag 处理过的ui不再处理*/

      if (!handled && this.config.translateUi) {
        this.translateUi(node);
      }
    }
  }, {
    key: "isTagContainer",
    value: function isTagContainer(node) {
      if (!node) {
        return false;
      }

      return node.classList.contains('gt') || node.classList.contains('gtl') || node.classList.contains('gtw');
    }
  }, {
    key: "translateTag",
    value: function translateTag(node) {
      var parentElement = node.parentElement;

      if (!isText(node) || !parentElement) {
        return false;
      }

      if (parentElement.nodeName === 'MARK' || parentElement.classList.contains('auto-complete-text')) {
        // 不翻译搜索提示的内容
        return true;
      } // 标签只翻译已知的位置


      if (!this.isTagContainer(parentElement) && !this.isTagContainer(parentElement === null || parentElement === void 0 ? void 0 : parentElement.parentElement)) {
        return false;
      }

      var ref = TagNodeRef.create(node, this);
      if (typeof ref == 'boolean') return ref;
      ref.translate(this.tagMap);
      this.tags.push(ref);
      return true;
    }
  }, {
    key: "translateUiText",
    value: function translateUiText(text) {
      var _this5 = this;

      var plain = this.uiData.plainReplacements.get(text);
      if (plain != null) return plain;
      var repText = text;

      var _iterator = syringe_createForOfIteratorHelper(this.uiData.regexReplacements),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              k = _step$value[0],
              v = _step$value[1];

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          repText = repText.replace(k, v);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      repText = repText.replace(/\d\d\d\d-\d\d-\d\d \d\d:\d\d/g, function (t) {
        var date = Date.parse(t + 'Z');
        if (!date) return t;
        return "".concat(_this5.time.diff(date, undefined, DateTime.hour));
      });
      repText = repText.replace(/\d\d \w{2,10} \d\d\d\d, \d\d:\d\d/gi, function (t) {
        var date = Date.parse(t + ' UTC');
        if (!date) return t;
        return "".concat(_this5.time.diff(date, undefined, DateTime.hour));
      });
      if (repText !== text) return repText;
      return undefined;
    }
  }, {
    key: "translateUi",
    value: function translateUi(node) {
      var _a, _b, _c, _d, _e, _f, _g;

      if (isText(node)) {
        var text = (_a = node.textContent) !== null && _a !== void 0 ? _a : '';
        var translation = this.translateUiText(text);

        if (translation != null) {
          node.textContent = translation;
        }

        return;
      } else if (isNode(node, 'input') || isNode(node, 'textarea')) {
        if (node.placeholder) {
          var _translation = this.translateUiText(node.placeholder);

          if (_translation != null) {
            node.placeholder = _translation;
          }
        } else if (node.type === 'submit' || node.type === 'button') {
          var _translation2 = this.translateUiText(node.value);

          if (_translation2 != null) {
            node.value = _translation2;
          }
        }

        return;
      } else if (isNode(node, 'optgroup')) {
        var _translation3 = this.translateUiText(node.label);

        if (_translation3 != null) {
          node.label = _translation3;
        }

        return;
      }

      if (isNode(node, 'a') && ((_c = (_b = node === null || node === void 0 ? void 0 : node.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.id) === 'nb') {
        var _translation4 = this.translateUiText((_d = node.textContent) !== null && _d !== void 0 ? _d : '');

        if (_translation4 != null) {
          node.textContent = _translation4;
        }
      }

      if (isNode(node, 'p') && node.classList.contains('gpc')) {
        /* 兼容熊猫书签，单独处理页码，保留原页码Element，防止熊猫书签取不到报错*/
        var _text = (_e = node.textContent) !== null && _e !== void 0 ? _e : '';

        var p = document.createElement('p');
        p.textContent = _text.replace(/Showing ([\d,]+) - ([\d,]+) of ([\d,]+) images?/, '$1 - $2，共 $3 张图片');
        p.className = 'gpc-translate';
        (_f = node.parentElement) === null || _f === void 0 ? void 0 : _f.insertBefore(p, node);
        node.style.display = 'none';
      }

      if (isNode(node, 'div')) {
        /* E-Hentai-Downloader 兼容处理 */
        if (node.id === 'gdd') {
          var div = document.createElement('div');
          div.textContent = node.textContent;
          div.style.display = 'none';
          node.insertBefore(div, null);
        }
        /* 熊猫书签 兼容处理 2 */


        if (((_g = node.parentElement) === null || _g === void 0 ? void 0 : _g.id) === 'gdo4' && node.classList.contains('ths') && node.classList.contains('nosel')) {
          var _div = document.createElement('div');

          _div.textContent = node.textContent;
          _div.style.display = 'none';
          _div.className = 'ths';
          node.parentElement.insertBefore(_div, node);
        }
      }
    }
  }]);

  return Syringe;
}();

Syringe = __decorate([Service(), __metadata("design:paramtypes", [SyncStorage, UiTranslation, Logger, messaging_Messaging, Tagging, DateTime])], Syringe);

;// CONCATENATED MODULE: ./src/plugin/auto-update.ts










var AutoUpdate = /*#__PURE__*/function () {
  function AutoUpdate(logger, storage, messaging) {
    _classCallCheck(this, AutoUpdate);

    this.logger = logger;
    this.storage = storage;
    this.messaging = messaging;
    this.init()["catch"](logger.error);
  }

  _createClass(AutoUpdate, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var conf;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.messaging.emit('check-extension', undefined, true)["catch"](this.logger.error);
                _context.next = 3;
                return this.storage.get('config');

              case 3:
                conf = _context.sent;

                if (conf.autoUpdate) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                this.messaging.emit('update-database', {
                  force: false
                })["catch"](this.logger.error);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);

  return AutoUpdate;
}();

AutoUpdate = __decorate([Service(), __metadata("design:paramtypes", [Logger, Storage, messaging_Messaging])], AutoUpdate);

// EXTERNAL MODULE: ./src/assets/logo.svg
var logo = __webpack_require__(9806);
;// CONCATENATED MODULE: ./src/providers/user-script/menu.ts








var supported = 'contextMenu' in document.documentElement && 'HTMLMenuItemElement' in window;

var MenuProvider = /*#__PURE__*/function () {
  function MenuProvider(logger) {
    _classCallCheck(this, MenuProvider);

    this.logger = logger;
    this.infoLists = new Array();

    if (!supported) {
      logger.warn("\u4E0D\u652F\u6301\u53F3\u952E\u83DC\u5355");
    }
  }

  _createClass(MenuProvider, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (this.menu) return this.menu;
      var id = "user-script-menu-".concat(Math.floor(Math.random() * 100000));
      var body = document.body;
      var menu = body.appendChild(document.createElement('menu'));
      menu.id = id;
      menu.setAttribute('type', 'context');

      var matcher = function matcher(context, url) {
        if (!url) return [];
        return _this.infoLists.filter(function (info) {
          return info.menu.contexts.includes(context) && info.patterns.some(function (p) {
            return p.test(url);
          });
        });
      };

      body.addEventListener('contextmenu', function (ev) {
        var _a, _b;

        var node = ev.target;
        var showMenu;

        if (node.nodeName === 'IMG') {
          _this.url = (_a = node.getAttribute('src')) !== null && _a !== void 0 ? _a : undefined;
          showMenu = matcher('image', _this.url);
        } else if (node.nodeName === 'A') {
          _this.url = (_b = node.getAttribute('href')) !== null && _b !== void 0 ? _b : undefined;
          showMenu = matcher('link', _this.url);
        }

        if (showMenu && showMenu.length > 0) {
          body.setAttribute('contextmenu', id);

          while (menu.firstChild) {
            menu.firstChild.remove();
          }

          showMenu.forEach(function (menuItem) {
            menu.appendChild(menuItem.el);
          });
        } else {
          body.removeAttribute('contextmenu');
        }
      }, false);
      return this.menu = menu;
    }
  }, {
    key: "createMenu",
    value: function createMenu(info) {
      var _this2 = this;

      if (!supported) return;
      var menu = this.init();
      var patterns = info.targetUrlPatterns.map(function (p) {
        return new RegExp("^".concat(p.replace(/[.]/g, '\\.').replace(/[*]/g, '.*').replace(/[?]/g, '.'), "$"), 'i');
      });
      var el = menu.appendChild(document.createElement('menuitem'));
      el.setAttribute('label', info.title);
      el.setAttribute('icon', logo/* default */.Z);
      el.style.visibility = 'hidden';
      el.addEventListener('click', function () {
        info.onclick({
          url: _this2.url
        });
      }, false);
      this.infoLists.push({
        menu: info,
        patterns: patterns,
        el: el
      });
    }
  }]);

  return MenuProvider;
}();

MenuProvider = __decorate([Service(), __metadata("design:paramtypes", [Logger])], MenuProvider);
var provider = services_Container.get(MenuProvider);
var createMenu = provider.createMenu.bind(provider);
;// CONCATENATED MODULE: ./src/providers/user-script/utils.ts
function openInTab(url) {
  GM_openInTab(url, {
    active: true,
    insert: true,
    setParent: true
  });
}
function sendNotification(info) {
  GM_notification({
    text: info.message,
    title: info.title,
    onclick: info.action
  });
}
function setBadge(info) {
  var badge = document.getElementById('eh-syringe-popup-badge');

  if (badge) {
    if (info.text != null) {
      badge.innerText = info.text;
      badge.style.visibility = info.text ? 'visible' : 'hidden';
    }

    if (info.background != null) {
      badge.style.background = info.background;
    }
  }
}
;// CONCATENATED MODULE: ./src/plugin/tag-context-menu.ts








var TagContextMenu = /*#__PURE__*/function () {
  function TagContextMenu(tagging) {
    var _this = this;

    _classCallCheck(this, TagContextMenu);

    this.tagging = tagging;
    this.documentUrlPatterns = ['*://exhentai.org/*', '*://e-hentai.org/*', '*://*.exhentai.org/*', '*://*.e-hentai.org/*'];
    this.title = '提交标签翻译';
    this.targetUrlPatterns = ['*://exhentai.org/tag/*', '*://e-hentai.org/tag/*', '*://*.exhentai.org/tag/*', '*://*.e-hentai.org/tag/*'];
    this.contexts = ['link'];

    this.onclick = function (info) {
      var _a, _b, _c;

      if (!info.url || !info.url.includes('/tag/')) {
        return;
      }

      var seg = (_b = (_a = info.url.split('/').pop()) === null || _a === void 0 ? void 0 : _a.replace(/\+/g, ' ').split(':')) !== null && _b !== void 0 ? _b : [];
      var namespace = seg.length <= 1 ? 'misc' : seg[0];
      var key = (_c = seg.pop()) !== null && _c !== void 0 ? _c : '';
      openInTab(_this.tagging.editorUrl({
        namespace: namespace,
        key: key
      }));
    };

    this.init();
  }

  _createClass(TagContextMenu, [{
    key: "init",
    value: function init() {
      createMenu(this);
    }
  }]);

  return TagContextMenu;
}();

TagContextMenu = __decorate([Service(), __metadata("design:paramtypes", [Tagging])], TagContextMenu);

;// CONCATENATED MODULE: ./src/services/http.ts







var Http = /*#__PURE__*/function () {
  function Http() {
    _classCallCheck(this, Http);
  }

  _createClass(Http, [{
    key: "json",
    value: function () {
      var _json = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(url) {
        var method,
            res,
            _args = arguments;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                method = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'GET';
                _context.next = 3;
                return fetch(url, {
                  method: method
                });

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                return _context.abrupt("return", _context.sent);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function json(_x) {
        return _json.apply(this, arguments);
      }

      return json;
    }()
  }, {
    key: "download",
    value: function download(url) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var progress = arguments.length > 2 ? arguments[2] : undefined;
      var responseType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'arraybuffer';
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = responseType;

        xhr.onload = function () {
          if (xhr.status >= 300) {
            reject(new Error("".concat(method, " ").concat(url, " ").concat(xhr.statusText, " (").concat(xhr.status, ")")));
          } else if (xhr.response instanceof ArrayBuffer && responseType === 'arraybuffer') {
            resolve(xhr.response);
          } else if (responseType === 'json') {
            resolve(xhr.response);
          } else {
            reject(new Error('数据无法解析'));
          }
        };

        xhr.onerror = function () {
          reject('加载失败');
        };

        if (progress) xhr.onprogress = progress;
        xhr.send();
      });
    }
  }]);

  return Http;
}();

Http = __decorate([Service()], Http);

;// CONCATENATED MODULE: ./src/services/database.ts




function database_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = database_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function database_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return database_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return database_arrayLikeToArray(o, minLen); }

function database_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var Database = /*#__PURE__*/function () {
  function Database(http, logger) {
    _classCallCheck(this, Database);

    this.http = http;
    this.logger = logger;
  }

  _createClass(Database, [{
    key: "getLatestVersion",
    value: function () {
      var _getLatestVersion = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var githubDownloadUrl, info;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
                info = this.http.json(githubDownloadUrl);
                return _context.abrupt("return", info);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLatestVersion() {
        return _getLatestVersion.apply(this, arguments);
      }

      return getLatestVersion;
    }()
  }, {
    key: "dataUrls",
    value: function dataUrls(version) {
      var dataJson = /<!--((.|\s)+?)-->/gi.exec(version.body);
      if (!dataJson) throw new Error("GitHub \u53D1\u5E03\u6570\u636E\u65E0\u6CD5\u89E3\u6790\uFF0C\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u63D2\u4EF6\u7248\u672C");

      try {
        var data = JSON.parse(dataJson[1]);
        var sha = data.mirror;
        if (typeof sha != 'string') throw new Error();
        return ["https://cdn.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@".concat(sha, "/db.html.json"), "https://gitcdn.xyz/cdn/EhTagTranslation/DatabaseReleases/".concat(sha, "/db.html.json"), "https://rawcdn.githack.com/EhTagTranslation/DatabaseReleases/".concat(sha, "/db.html.json"), "https://cdn.statically.io/gh/EhTagTranslation/DatabaseReleases/".concat(sha, "/db.html.json")];
      } catch (_a) {
        throw new Error("GitHub \u53D1\u5E03\u6570\u636E\u65E0\u6CD5\u89E3\u6790\uFF0C\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u63D2\u4EF6\u7248\u672C");
      }
    }
  }, {
    key: "getData",
    value: function () {
      var _getData = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(version, progress) {
        var _a, urls, errors, _iterator, _step, url, result, e;

        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                urls = this.dataUrls(version);
                errors = [];
                _iterator = database_createForOfIteratorHelper(urls);
                _context2.prev = 3;

                _iterator.s();

              case 5:
                if ((_step = _iterator.n()).done) {
                  _context2.next = 22;
                  break;
                }

                url = _step.value;
                _context2.prev = 7;
                _context2.next = 10;
                return this.http.download(url, 'GET', progress, 'json');

              case 10:
                result = _context2.sent;

                if (!(((_a = result === null || result === void 0 ? void 0 : result.head) === null || _a === void 0 ? void 0 : _a.sha) === version.target_commitish && (result === null || result === void 0 ? void 0 : result.data))) {
                  _context2.next = 14;
                  break;
                }

                this.logger.log("\u4ECE ".concat(url, " \u4E0B\u8F7D\u6210\u529F"));
                return _context2.abrupt("return", result);

              case 14:
                _context2.next = 20;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](7);
                errors.push(_context2.t0);
                this.logger.warn("\u5C1D\u8BD5\u4ECE ".concat(url, " \u4E0B\u8F7D\u5931\u8D25"), _context2.t0);

              case 20:
                _context2.next = 5;
                break;

              case 22:
                _context2.next = 27;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t1 = _context2["catch"](3);

                _iterator.e(_context2.t1);

              case 27:
                _context2.prev = 27;

                _iterator.f();

                return _context2.finish(27);

              case 30:
                if (!(errors.length === 0)) {
                  _context2.next = 32;
                  break;
                }

                throw new Error('没有获取到有效的文件');

              case 32:
                e = errors[errors.length - 1];
                Object.defineProperty(e, 'errors', {
                  value: errors,
                  enumerable: true
                });
                throw e;

              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 24, 27, 30], [7, 16]]);
      }));

      function getData(_x, _x2) {
        return _getData.apply(this, arguments);
      }

      return getData;
    }()
  }]);

  return Database;
}();

Database = __decorate([Service(), __metadata("design:paramtypes", [Http, Logger])], Database);

;// CONCATENATED MODULE: ./src/services/badge-loading.ts







var BadgeLoading = /*#__PURE__*/function () {
  function BadgeLoading(logger) {
    _classCallCheck(this, BadgeLoading);

    this.logger = logger;
    this.loadingStrArr = [[''], ['⢎⠀', '⢆⡀', '⢄⡠', '⢀⡰', '⠀⡱', '⠈⠱', '⠊⠑', '⠎⠁'], ['    ', '·   ', ' ·  ', '  · ', '   ·']];
    this.frame = 0;
    this.index = 0;
    this.interval = undefined;
    this.text = '';
    this.loadingString = [''];
    this.color = '';
    this.extname = 'EhSyringe';
  }

  _createClass(BadgeLoading, [{
    key: "setColor",
    value: function setColor() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#4A90E2';
      setBadge({
        background: color
      });
    }
  }, {
    key: "setText",
    value: function setText(text) {
      setBadge({
        text: text
      });
    }
  }, {
    key: "set",
    value: function set(text, color) {
      var _this = this;

      var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (this.index !== loading) {
        this.index = loading;
        this.loadingString = this.loadingStrArr[this.index] || [''];
        this.frame = 0;
      }

      this.text = text;
      this.setColor(color);

      if (loading) {
        if (!this.interval) {
          this.interval = setInterval(function () {
            _this.setText("".concat(_this.text).concat(_this.loadingString[_this.frame] || ''));

            _this.frame++;

            if (!_this.loadingString[_this.frame]) {
              _this.frame = 0;
            }
          }, 100);
        }
      } else {
        this.frame = 0;

        if (this.interval) {
          clearInterval(this.interval);
          this.interval = undefined;
        }

        this.setText(this.text);
      }
    }
  }]);

  return BadgeLoading;
}();

BadgeLoading = __decorate([Service(), __metadata("design:paramtypes", [Logger])], BadgeLoading);

;// CONCATENATED MODULE: ./src/utils/promise.ts
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
;// CONCATENATED MODULE: ./src/plugin/database-updater.ts






function database_updater_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function database_updater_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { database_updater_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { database_updater_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var database_updater_defaultStatus = {
  run: false,
  progress: 0,
  info: '',
  complete: false,
  error: false
};

var DatabaseUpdater = /*#__PURE__*/function () {
  function DatabaseUpdater(logger, messaging, storage, database, badge) {
    var _this = this;

    _classCallCheck(this, DatabaseUpdater);

    this.logger = logger;
    this.messaging = messaging;
    this.storage = storage;
    this.database = database;
    this.badge = badge;
    this._lastCheckData = {
      sha: '',
      check: 0,
      githubRelease: null
    };
    this.downloadStatus = database_updater_objectSpread({}, database_updater_defaultStatus);
    this.checked = false;
    this.messaging.on('update-database', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(_ref) {
        var force, recheck, version, updating, success;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                force = _ref.force, recheck = _ref.recheck;

                if (!(_this.checked && !force)) {
                  _context.next = 4;
                  break;
                }

                _this.logger.log('跳过');

                return _context.abrupt("return", undefined);

              case 4:
                _context.next = 6;
                return _this.checkVersion(recheck);

              case 6:
                version = _context.sent;
                _context.t0 = version === null || version === void 0 ? void 0 : version.sha;

                if (!_context.t0) {
                  _context.next = 17;
                  break;
                }

                _context.t1 = force;

                if (_context.t1) {
                  _context.next = 16;
                  break;
                }

                _context.t2 = version.sha;
                _context.next = 14;
                return _this.messaging.emit('get-tag-sha', undefined);

              case 14:
                _context.t3 = _context.sent;
                _context.t1 = _context.t2 !== _context.t3;

              case 16:
                _context.t0 = _context.t1;

              case 17:
                if (!_context.t0) {
                  _context.next = 33;
                  break;
                }

                _context.next = 20;
                return _this.updating;

              case 20:
                updating = _this.update();
                _this.updating = updating;
                _context.next = 24;
                return updating;

              case 24:
                success = _context.sent;
                _this.updating = undefined;

                if (!success) {
                  _context.next = 31;
                  break;
                }

                _this.logger.log('有新版本并更新', version);

                return _context.abrupt("return", version);

              case 31:
                _this.logger.log('更新新版本失败', version);

                return _context.abrupt("return", undefined);

              case 33:
                _this.logger.log('没有新版本');

                return _context.abrupt("return", undefined);

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    this.messaging.on('check-database', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(_ref3) {
        var force;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                force = _ref3.force;
                _context2.next = 3;
                return _this.checkVersion(force);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());
    this.init()["catch"](logger.error);
  }

  _createClass(DatabaseUpdater, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3() {
        var storage;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.storage.get('release');

              case 2:
                storage = _context3.sent;

                if (storage && storage.check > this._lastCheckData.check) {
                  Object.assign(this._lastCheckData, storage);
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "lastCheckData",
    get: function get() {
      return this._lastCheckData;
    },
    set: function set(value) {
      if (value && value.check > this.lastCheckData.check) {
        Object.assign(this._lastCheckData, value);
        this.storage.set('release', this._lastCheckData)["catch"](this.logger.error);
      }
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4() {
        var _this2 = this;

        var data, e;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // 重置下载状态
                this.initDownloadStatus();
                _context4.prev = 1;
                _context4.next = 4;
                return this.download();

              case 4:
                data = _context4.sent;
                _context4.next = 7;
                return this.messaging.emit('update-tag', data.data);

              case 7:
                this.badge.set('OK', '#00C801');
                this.pushDownloadStatus({
                  run: true,
                  info: '更新完成',
                  progress: 100,
                  complete: true
                });
                void sleep(2500).then(function () {
                  if (_this2.downloadStatus.complete) {
                    _this2.badge.set('', '#4A90E2');

                    _this2.initDownloadStatus();
                  }
                });
                return _context4.abrupt("return", true);

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](1);
                e = _context4.t0;
                this.logger.error(e);
                this.badge.set('ERR', '#C80000');
                this.pushDownloadStatus({
                  run: false,
                  error: true,
                  info: (e === null || e === void 0 ? void 0 : e.message) ? e.message : '更新失败'
                });
                return _context4.abrupt("return", false);

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 13]]);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "initDownloadStatus",
    value: function initDownloadStatus() {
      this.downloadStatus = database_updater_objectSpread({}, database_updater_defaultStatus);
      void this.messaging.emit('updating-database', this.downloadStatus, true);
    }
  }, {
    key: "pushDownloadStatus",
    value: function pushDownloadStatus() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.downloadStatus = database_updater_objectSpread(database_updater_objectSpread({}, this.downloadStatus), data);
      void this.messaging.emit('updating-database', this.downloadStatus, true);
    }
  }, {
    key: "checkVersion",
    value: function () {
      var _checkVersion = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee5() {
        var force,
            time,
            lastCheckData,
            info,
            _args5 = arguments;
        return regenerator_default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                force = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : false;

                if (force) {
                  _context5.next = 6;
                  break;
                }

                // 限制每 5 分钟最多请求 1 次
                time = new Date().getTime();
                lastCheckData = this.lastCheckData;

                if (!(time - lastCheckData.check <= 1000 * 60 * 5 && lastCheckData.githubRelease)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", lastCheckData);

              case 6:
                _context5.next = 8;
                return this.database.getLatestVersion();

              case 8:
                info = _context5.sent;

                if (info.target_commitish) {
                  _context5.next = 11;
                  break;
                }

                throw new Error('获取失败，响应有误');

              case 11:
                this.lastCheckData = {
                  sha: info.target_commitish,
                  githubRelease: info,
                  check: Date.now()
                };
                this.checked = true;
                return _context5.abrupt("return", this.lastCheckData);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function checkVersion() {
        return _checkVersion.apply(this, arguments);
      }

      return checkVersion;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee6() {
        var _this3 = this;

        var _a, checkData, info, timer, data;

        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.badge.set('', '#4A90E2', 2);
                this.pushDownloadStatus({
                  run: true,
                  info: '加载中'
                });
                _context6.next = 4;
                return this.checkVersion();

              case 4:
                checkData = _context6.sent;

                if ((_a = checkData === null || checkData === void 0 ? void 0 : checkData.githubRelease) === null || _a === void 0 ? void 0 : _a.target_commitish) {
                  _context6.next = 8;
                  break;
                }

                this.logger.debug('checkData', checkData);
                throw new Error('无法获取版本信息');

              case 8:
                info = checkData.githubRelease;
                timer = this.logger.time("\u5F00\u59CB\u4E0B\u8F7D");
                _context6.prev = 10;
                this.pushDownloadStatus({
                  info: '0%',
                  progress: 0
                });
                this.badge.set('0', '#4A90E2', 1);
                _context6.next = 15;
                return this.database.getData(info, function (event) {
                  if (event.lengthComputable) {
                    var percent = Math.floor(event.loaded / event.total * 100);

                    _this3.pushDownloadStatus({
                      info: "".concat(percent, "%"),
                      progress: percent
                    });

                    _this3.badge.set(percent.toFixed(0), '#4A90E2', 1);
                  }
                });

              case 15:
                data = _context6.sent;
                this.pushDownloadStatus({
                  info: '下载完成',
                  progress: 100
                });
                this.badge.set('100', '#4A90E2', 1);
                return _context6.abrupt("return", {
                  release: info,
                  data: data
                });

              case 19:
                _context6.prev = 19;
                timer.end();
                return _context6.finish(19);

              case 22:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[10,, 19, 22]]);
      }));

      function download() {
        return _download.apply(this, arguments);
      }

      return download;
    }()
  }]);

  return DatabaseUpdater;
}();

DatabaseUpdater = __decorate([Service(), __metadata("design:paramtypes", [Logger, messaging_Messaging, Storage, Database, BadgeLoading])], DatabaseUpdater);

;// CONCATENATED MODULE: ./src/plugin/suggest.ts










var Suggest = /*#__PURE__*/function () {
  function Suggest(logger, messaging, tagging) {
    var _this = this;

    _classCallCheck(this, Suggest);

    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.nsScore = {
      female: 5,
      male: 4.995,
      misc: 4.5,
      language: 1,
      artist: 3,
      group: 2.5,
      parody: 4,
      character: 3.5,
      reclass: 1,
      rows: 0
    };
    this.tagList = [];
    this.sha = '';
    messaging.on('suggest-tag', function (args) {
      return _this.getSuggests(args.term, args.limit);
    });
    this.update()["catch"](logger.error);
  }

  _createClass(Suggest, [{
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var v;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.messaging.emit('get-tag-map', {
                  ifNotMatch: this.sha
                });

              case 2:
                v = _context.sent;
                if (v.map) this.tagList = Object.values(v.map);
                this.sha = v.sha;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "markTag",
    value: function markTag(tag, search, term) {
      var key = tag.key;
      var cn = tag.cn.toLowerCase();
      var keyIdx = key.indexOf(search);
      var nameIdx = cn.indexOf(search);
      var ns = this.tagging.namespace(tag.ns);
      var score = 0;
      var match = {};

      if (keyIdx >= 0) {
        score += this.nsScore[ns] * (search.length + 1) / key.length * (keyIdx === 0 ? 2 : 1);
        match.key = {
          start: keyIdx,
          end: keyIdx + search.length
        };
      }

      if (nameIdx >= 0) {
        score += this.nsScore[ns] * (search.length + 1) / cn.length * (nameIdx === 0 ? 2 : 1);
        match.cn = {
          start: nameIdx,
          end: nameIdx + search.length
        };
      }

      return {
        tag: tag,
        term: term,
        match: match,
        score: score
      };
    }
  }, {
    key: "getSuggests",
    value: function () {
      var _getSuggests = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(term) {
        var _this2 = this;

        var limit,
            sTerm,
            col,
            tagList,
            ns,
            suggestions,
            _args2 = arguments;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                limit = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : -1;
                _context2.next = 3;
                return this.update();

              case 3:
                if (!(!this.tagList.length || !term)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", []);

              case 5:
                sTerm = term.toLowerCase();
                col = sTerm.indexOf(':');
                tagList = this.tagList;

                if (col >= 1) {
                  ns = this.tagging.ns(sTerm.slice(0, col));

                  if (ns) {
                    sTerm = sTerm.slice(col + 1);
                    tagList = tagList.filter(function (tag) {
                      return tag.ns === ns;
                    });
                  }
                }

                suggestions = tagList.map(function (tag) {
                  return _this2.markTag(tag, sTerm, term);
                }).filter(function (st) {
                  return st.score > 0;
                });

                if (term) {
                  suggestions = suggestions.sort(function (st1, st2) {
                    return st2.score - st1.score;
                  });
                }

                if (limit > 0) {
                  suggestions = suggestions.slice(0, limit);
                }

                return _context2.abrupt("return", suggestions);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSuggests(_x) {
        return _getSuggests.apply(this, arguments);
      }

      return getSuggests;
    }()
  }]);

  return Suggest;
}();

Suggest = __decorate([Service(), __metadata("design:paramtypes", [Logger, messaging_Messaging, Tagging])], Suggest);

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js





var Subject = (function (_super) {
    tslib_tslib_es6_extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var e_1, _a;
        this._throwIfClosed();
        if (!this.isStopped) {
            var copy = this.observers.slice();
            try {
                for (var copy_1 = tslib_es6_values(copy), copy_1_1 = copy_1.next(); !copy_1_1.done; copy_1_1 = copy_1.next()) {
                    var observer = copy_1_1.value;
                    observer.next(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (copy_1_1 && !copy_1_1.done && (_a = copy_1.return)) _a.call(copy_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    Subject.prototype.error = function (err) {
        this._throwIfClosed();
        if (!this.isStopped) {
            this.hasError = this.isStopped = true;
            this.thrownError = err;
            var observers = this.observers;
            while (observers.length) {
                observers.shift().error(err);
            }
        }
    };
    Subject.prototype.complete = function () {
        this._throwIfClosed();
        if (!this.isStopped) {
            this.isStopped = true;
            var observers = this.observers;
            while (observers.length) {
                observers.shift().complete();
            }
        }
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        return hasError || isStopped
            ? EMPTY_SUBSCRIPTION
            : (observers.push(subscriber), new Subscription(function () { return arrRemove(observers, subscriber); }));
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));

var AnonymousSubject = (function (_super) {
    tslib_tslib_es6_extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js


var BehaviorSubject = (function (_super) {
    tslib_tslib_es6_extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, (this._value = value));
    };
    return BehaviorSubject;
}(Subject));

//# sourceMappingURL=BehaviorSubject.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js

var EmptyError = createErrorClass(function (_super) { return function EmptyErrorImpl() {
    _super(this);
    this.name = 'EmptyError';
    this.message = 'no elements in sequence';
}; });
//# sourceMappingURL=EmptyError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js


function firstValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function (resolve, reject) {
        var subscriber = new SafeSubscriber({
            next: function (value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function () {
                if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new EmptyError());
                }
            },
        });
        source.subscribe(subscriber);
    });
}
//# sourceMappingURL=firstValueFrom.js.map
;// CONCATENATED MODULE: ./src/plugin/tag-database.ts






function tag_database_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function tag_database_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tag_database_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tag_database_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/* 数据存储结构版本, 如果不同 系统会自动执行 storageTagData 重新构建数据*/

/* 注意这是本地数据结构, 主要用于 storageTagData内解析方法发生变化, 重新加载数据的, 与线上无关*/

var DATA_STRUCTURE_VERSION = 10;

var TagDatabase = /*#__PURE__*/function () {
  function TagDatabase(storage, logger, messaging, tagging) {
    var _this = this;

    _classCallCheck(this, TagDatabase);

    this.storage = storage;
    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.tagMap = new BehaviorSubject(undefined);
    messaging.on('get-tag', function (key) {
      return firstValueFrom(_this.mapView.pipe(map(function (v) {
        return v.map[key];
      })));
    });
    messaging.on('get-tag-map', function (_ref) {
      var ifNotMatch = _ref.ifNotMatch;
      return firstValueFrom(_this.mapView.pipe(map(function (v) {
        if (ifNotMatch === v.sha) return {
          sha: v.sha,
          map: undefined
        };
        return {
          sha: v.sha,
          map: v.map
        };
      })));
    });
    messaging.on('get-tag-sha', function () {
      return firstValueFrom(_this.mapView.pipe(map(function (v) {
        return v.sha;
      })));
    });
    this.init()["catch"](logger.error);
  }

  _createClass(TagDatabase, [{
    key: "mapView",
    get: function get() {
      return this.tagMap.pipe(filter(function (v) {
        return v != null;
      }));
    }
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var _this2 = this;

        var data, dataMap, timer;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.storage.get('databaseInfo');

              case 2:
                data = _context.sent;
                _context.next = 5;
                return this.storage.get('database');

              case 5:
                dataMap = _context.sent;
                this.messaging.on('update-tag', function (data) {
                  return _this2.update(data);
                });

                if (!(!data || data.version !== DATA_STRUCTURE_VERSION || !dataMap || !data.sha)) {
                  _context.next = 17;
                  break;
                }

                this.tagMap.next({
                  sha: '',
                  map: {}
                });
                timer = this.logger.time('数据结构变化, 重新构建数据');
                _context.next = 12;
                return this.storage.migrate();

              case 12:
                _context.next = 14;
                return this.messaging.emit('update-database', {
                  force: true
                });

              case 14:
                timer.end();
                _context.next = 18;
                break;

              case 17:
                this.tagMap.next(tag_database_objectSpread(tag_database_objectSpread({}, data), {}, {
                  map: dataMap
                }));

              case 18:
                this.logger.log('标签数据库初始化完成');
                this.tagMap.subscribe({
                  next: function next() {
                    void _this2.messaging.emit('tag-updated', undefined, true);
                  }
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "update",
    value: function update(tagDB) {
      var _this3 = this;

      var timer = this.logger.time('构建数据');
      var sha = tagDB.head.sha;
      var map = {};
      var check = Date.now();
      tagDB.data.forEach(function (nsData) {
        var namespace = nsData.namespace;
        if (namespace === 'rows') return;

        for (var key in nsData.data) {
          var t = nsData.data[key];

          var fullKey = _this3.tagging.fullKey({
            namespace: namespace,
            key: key
          });

          var name = _this3.tagging.removePara(t.name);

          var ehTag = {
            ns: _this3.tagging.ns(namespace),
            key: key,
            name: name,
            cn: _this3.tagging.removeImagesAndEmoji(name)
          };
          if (t.intro) ehTag.intro = t.intro;
          if (t.links) ehTag.links = t.links;
          map[fullKey] = ehTag;
        }
      });
      this.tagMap.next({
        map: map,
        sha: sha
      }); // 后台继续处理，直接返回

      this.storage.set('databaseInfo', {
        sha: sha,
        check: check,
        version: DATA_STRUCTURE_VERSION
      })["catch"](this.logger.error);
      this.storage.set('database', map)["catch"](this.logger.error);
      timer.end();
    }
  }]);

  return TagDatabase;
}();

TagDatabase = __decorate([Service(), __metadata("design:paramtypes", [Storage, Logger, messaging_Messaging, Tagging])], TagDatabase);

;// CONCATENATED MODULE: ./src/plugin/image-context-menu.ts







var ImageContextMenu = /*#__PURE__*/function () {
  function ImageContextMenu() {
    _classCallCheck(this, ImageContextMenu);

    this.documentUrlPatterns = ['*://exhentai.org/*', '*://e-hentai.org/*', '*://*.exhentai.org/*', '*://*.e-hentai.org/*'];
    this.title = '显示所有包含此图片的图库';
    this.targetUrlPatterns = ['*://exhentai.org/t/*.jpg', '*://ehgt.org/*.jpg', '*://ul.ehgt.org/*.jpg', '*://*.hath.network:*/h/*', '*://*.hath.network/h/*'];
    this.contexts = ['image', 'link'];

    this.onclick = function (info) {
      var _a;

      var url = (_a = info.url) !== null && _a !== void 0 ? _a : '';
      var match = /[a-f0-9]{40}/i.exec(url);
      if (!match) return;
      openInTab("https://exhentai.org/?f_shash=".concat(match[0]));
    };

    this.init();
  }

  _createClass(ImageContextMenu, [{
    key: "init",
    value: function init() {
      createMenu(this);
    }
  }]);

  return ImageContextMenu;
}();

ImageContextMenu = __decorate([Service(), __metadata("design:paramtypes", [])], ImageContextMenu);

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
;// CONCATENATED MODULE: ./node_modules/lit-html/lib/directive.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map
;// CONCATENATED MODULE: ./node_modules/lit-html/lib/dom.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' &&
    window.customElements != null &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};
//# sourceMappingURL=dom.js.map
;// CONCATENATED MODULE: ./node_modules/lit-html/lib/part.js
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
//# sourceMappingURL=part.js.map
;// CONCATENATED MODULE: ./node_modules/lit-html/lib/template.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = 
// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map
;// CONCATENATED MODULE: ./node_modules/lit-html/lib/template-instance.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = isCEPolyfill ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!isTemplatePartActive(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (isCEPolyfill) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
//# sourceMappingURL=template-instance.js.map
;// CONCATENATED MODULE: ./node_modules/lit-html/lib/template-result.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = window.trustedTypes &&
    trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });
const commentMarker = ` ${marker} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment position.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = lastAttributeNameRegex.exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? commentMarker : nodeMarker);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] +
                    marker;
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        let value = this.getHTML();
        if (policy !== undefined) {
            // this is secure because `this.strings` is a TemplateStringsArray.
            // TODO: validate this when
            // https://github.com/tc39/proposal-array-is-template-object is
            // implemented.
            value = policy.createHTML(value);
        }
        template.innerHTML = value;
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        reparentNodes(content, svgElement.firstChild);
        return template;
    }
}
//# sourceMappingURL=template-result.js.map
;// CONCATENATED MODULE: ./node_modules/lit-html/lib/parts.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const parts_isIterable = (value) => {
    return Array.isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        const parts = this.parts;
        // If we're assigning an attribute via syntax like:
        //    attr="${foo}"  or  attr=${foo}
        // but not
        //    attr="${foo} ${bar}" or attr="${foo} baz"
        // then we don't want to coerce the attribute value into one long
        // string. Instead we want to just return the value itself directly,
        // so that sanitizeDOMValue can get the actual value rather than
        // String(value)
        // The exception is if v is an array, in which case we do want to smash
        // it together into a string without calling String() on the array.
        //
        // This also allows trusted values (when using TrustedTypes) being
        // assigned to DOM sinks without being stringified in the process.
        if (l === 1 && strings[0] === '' && strings[1] === '') {
            const v = parts[0].value;
            if (typeof v === 'symbol') {
                return String(v);
            }
            if (typeof v === 'string' || !parts_isIterable(v)) {
                return v;
            }
        }
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !parts_isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!isDirective(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (isDirective(this.value)) {
            const directive = this.value;
            this.value = noChange;
            directive(this);
        }
        if (this.value === noChange) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = createMarker());
        part.__insert(this.endNode = createMarker());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = createMarker());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        if (this.startNode.parentNode === null) {
            return;
        }
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === noChange) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof TemplateResult) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (parts_isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === nothing) {
            this.value = nothing;
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof TemplateInstance &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new TemplateInstance(template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        if (this.__pendingValue === noChange) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = noChange;
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(() => {
    try {
        const options = {
            get capture() {
                eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener('test', options, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener('test', options, options);
    }
    catch (_e) {
        // event options not supported
    }
})();
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        if (this.__pendingValue === noChange) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = noChange;
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map
;// CONCATENATED MODULE: ./node_modules/lit-html/lib/default-template-processor.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new PropertyCommitter(element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new EventPart(element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new BooleanAttributePart(element, name.slice(1), strings)];
        }
        const committer = new AttributeCommitter(element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new NodePart(options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map
;// CONCATENATED MODULE: ./node_modules/lit-html/lib/template-factory.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(marker);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new Template(result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map
;// CONCATENATED MODULE: ./node_modules/lit-html/lib/render.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        removeNodes(container, container.firstChild);
        parts.set(container, part = new NodePart(Object.assign({ templateFactory: templateFactory }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
//# sourceMappingURL=render.js.map
;// CONCATENATED MODULE: ./node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @packageDocumentation
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new SVGTemplateResult(strings, values, 'svg', defaultTemplateProcessor);
//# sourceMappingURL=lit-html.js.map
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/less-loader/dist/cjs.js!./src/plugin/popup/index.less
var popup = __webpack_require__(5665);
;// CONCATENATED MODULE: ./src/plugin/popup/index.less

            

var popup_options = {"insert":":root"};

popup_options.insert = ":root";
popup_options.singleton = false;

var popup_update = injectStylesIntoStyleTag_default()(popup/* default */.Z, popup_options);



/* harmony default export */ var plugin_popup = (popup/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/plugin/popup/index.ts







var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;



function popup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function popup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { popup_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { popup_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var Popup = /*#__PURE__*/function () {
  function Popup(logger, messaging, storage, time) {
    var _this = this;

    _classCallCheck(this, Popup);

    this.logger = logger;
    this.messaging = messaging;
    this.storage = storage;
    this.time = time;

    this.defaults = function () {
      return {
        sha: '',
        info: '',
        updateTime: '',
        updateTimeFull: '',
        newSha: '',
        versionInfo: '',
        updateAvailable: false,
        updateButtonDisabled: false,
        showSettingPanel: false,
        progress: 0,
        animationState: 0,
        configValue: popup_objectSpread({}, _this.configOriginal)
      };
    };

    this.testAnimationIndex = 0;
    this.testAnimationList = [[1, 0], [1, 10], [1, 30], [1, 80], [1, 100], [2, 100], [2, 5], [1, 5], [0, 0]];

    this.openLink = function (ev) {
      if (ev.target instanceof HTMLAnchorElement) {
        var href = ev.target.href;

        if (href && !href.startsWith(document.location.origin + document.location.pathname)) {
          ev.preventDefault();
          openInTab(href);

          _this.provider.close();
        }
      }
    };

    this.downloadStatus = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(data) {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.state.updateButtonDisabled = data.run;
                _this.state.animationState = data.run ? 1 : 0;
                _this.state.info = data.info;
                _this.state.progress = data.progress || 0;

                if (!data.complete) {
                  _context.next = 18;
                  break;
                }

                _context.next = 7;
                return sleep(1000);

              case 7:
                _this.state.progress = 100;
                _this.state.animationState = 2;
                _this.state.updateButtonDisabled = false;
                _context.next = 12;
                return _this.checkVersion();

              case 12:
                _context.next = 14;
                return sleep(500);

              case 14:
                _this.state.progress = 5;
                _context.next = 17;
                return sleep(500);

              case 17:
                _this.state.animationState = 1;

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }

  _createClass(Popup, [{
    key: "loadConfig",
    value: function () {
      var _loadConfig = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2() {
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.storage.get('config');

              case 2:
                this.configOriginal = _context2.sent;
                this.state.configValue = popup_objectSpread({}, this.configOriginal);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadConfig() {
        return _loadConfig.apply(this, arguments);
      }

      return loadConfig;
    }()
  }, {
    key: "testAnimation",
    value: function testAnimation() {
      var a = this.testAnimationList[this.testAnimationIndex];
      this.testAnimationIndex++;

      if (!this.testAnimationList[this.testAnimationIndex]) {
        this.testAnimationIndex = 0;
      }

      this.state.animationState = a[0];
      this.state.progress = a[1];
    }
  }, {
    key: "checkVersion",
    value: function () {
      var _checkVersion = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3() {
        var _a, currentSha, updateTime, data, hasNewData;

        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.state.versionInfo = '检查中...';
                _context3.next = 3;
                return this.messaging.emit('get-tag-sha', undefined);

              case 3:
                currentSha = _context3.sent;
                _context3.next = 6;
                return this.storage.get('databaseInfo');

              case 6:
                _context3.t1 = _a = _context3.sent;
                _context3.t0 = _context3.t1 === null;

                if (_context3.t0) {
                  _context3.next = 10;
                  break;
                }

                _context3.t0 = _a === void 0;

              case 10:
                if (!_context3.t0) {
                  _context3.next = 14;
                  break;
                }

                _context3.t2 = void 0;
                _context3.next = 15;
                break;

              case 14:
                _context3.t2 = _a.check;

              case 15:
                updateTime = _context3.t2;
                this.state.sha = currentSha ? currentSha.slice(0, 7) : 'N/A';
                this.state.updateTime = updateTime ? this.time.diff(updateTime) : 'N/A';
                this.state.updateTimeFull = updateTime ? new Date(updateTime).toLocaleString() : 'N/A';
                _context3.prev = 19;
                _context3.next = 22;
                return this.messaging.emit('check-database', {
                  force: true
                });

              case 22:
                data = _context3.sent;
                this.logger.log('Release Data', data);
                hasNewData = this.state.updateAvailable = data.sha !== currentSha;

                if (hasNewData) {
                  this.state.newSha = data.sha.slice(0, 7);
                  this.state.versionInfo = "\u6709\u66F4\u65B0\uFF01";
                } else {
                  this.state.versionInfo = '已是最新版本';
                }

                _context3.next = 32;
                break;

              case 28:
                _context3.prev = 28;
                _context3.t3 = _context3["catch"](19);
                this.logger.error('获取失败', _context3.t3);
                this.state.versionInfo = '获取失败';

              case 32:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[19, 28]]);
      }));

      function checkVersion() {
        return _checkVersion.apply(this, arguments);
      }

      return checkVersion;
    }()
  }, {
    key: "updateButtonClick",
    value: function () {
      var _updateButtonClick = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4() {
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.state.updateButtonDisabled = true;
                _context4.next = 3;
                return this.messaging.emit('update-database', {
                  force: true,
                  recheck: false
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateButtonClick() {
        return _updateButtonClick.apply(this, arguments);
      }

      return updateButtonClick;
    }()
  }, {
    key: "logoTemplate",
    value: function logoTemplate() {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var PushRodStyle = "transform: translate(".concat(progress / 400 * 70, "px, 0)");
      var EnemaStyle = "transform: scaleX(".concat(progress / 100, ")");
      return svg(_templateObject || (_templateObject = _taggedTemplateLiteral(["<svg width=\"160\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">\n            <defs>\n                <clipPath id=\"clip\">\n                    <rect width=\"200\" height=\"200\" />\n                </clipPath>\n            </defs>\n            <g id=\"Syringe\" clip-path=\"url(#clip)\">\n                <g id=\"PushRod\" style=\"", "\">\n                    <g transform=\"translate(-39 -312)\">\n                        <g transform=\"translate(131 403)\" fill-bg stroke-accent stroke-width=\"6\">\n                            <rect width=\"78\" height=\"18\" rx=\"6\" stroke=\"none\" />\n                            <rect x=\"3\" y=\"3\" width=\"72\" height=\"12\" rx=\"3\" fill=\"none\" />\n                        </g>\n                        <g transform=\"translate(203 391)\" fill-bg stroke-accent stroke-width=\"6\">\n                            <rect width=\"18\" height=\"43\" rx=\"9\" stroke=\"none\" />\n                            <rect x=\"3\" y=\"3\" width=\"12\" height=\"37\" rx=\"6\" fill=\"none\" />\n                        </g>\n                    </g>\n                </g>\n                <g transform=\"translate(56 85)\" fill-bg stroke-accent stroke-width=\"6\">\n                    <rect width=\"83\" height=\"30\" rx=\"6\" stroke=\"none\" />\n                    <rect x=\"3\" y=\"3\" width=\"77\" height=\"24\" rx=\"3\" fill=\"none\" />\n                </g>\n                <g id=\"Enema\" style=\"", "\">\n                    <rect width=\"70\" height=\"27\" transform=\"translate(61 86)\" fill-sa />\n                </g>\n                <path\n                    id=\"Enema2\"\n                    d=\"M27.426,86.36s5.65.007,13.6.006S57.64,83.357,57.64,83.357L38.015,102.982,24.409,89.377l3.015-3.015Z\"\n                    transform=\"translate(107.906 10.036) rotate(45)\"\n                    fill-sa\n                />\n                <g transform=\"translate(-39 -312)\">\n                    <g transform=\"translate(95 397)\" fill=\"none\" stroke-accent stroke-width=\"6\">\n                        <rect width=\"83\" height=\"30\" rx=\"6\" stroke=\"none\" />\n                        <rect x=\"3\" y=\"3\" width=\"77\" height=\"24\" rx=\"3\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(82 403)\" fill-sa stroke-accent stroke-width=\"6\">\n                        <rect width=\"19\" height=\"18\" rx=\"6\" stroke=\"none\" />\n                        <rect x=\"3\" y=\"3\" width=\"13\" height=\"12\" rx=\"3\" fill=\"none\" />\n                    </g>\n                    <rect width=\"29\" height=\"6\" rx=\"3\" transform=\"translate(58 409)\" fill-accent />\n                    <g transform=\"translate(172 381)\" fill-bg stroke-accent stroke-width=\"6\">\n                        <rect width=\"18\" height=\"62\" rx=\"9\" stroke=\"none\" />\n                        <rect x=\"3\" y=\"3\" width=\"12\" height=\"56\" rx=\"6\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(119 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(131 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(144 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(156 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                </g>\n            </g>\n        </svg>"])), PushRodStyle, EnemaStyle);
    }
  }, {
    key: "changeConfigValue",
    value: function changeConfigValue(key, value) {
      this.state.configValue = popup_objectSpread(popup_objectSpread({}, this.state.configValue), {}, _defineProperty({}, key, value));
    }
  }, {
    key: "changeConfigUnsaved",
    value: function changeConfigUnsaved() {
      var _this2 = this;

      if (!this.configOriginal) return false;
      var keys = [].concat(_toConsumableArray(Object.keys(this.configOriginal)), _toConsumableArray(Object.keys(this.state.configValue)));
      return keys.some(function (key) {
        return _this2.configOriginal[key] !== _this2.state.configValue[key];
      });
    }
  }, {
    key: "saveConfig",
    value: function () {
      var _saveConfig = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee5() {
        return regenerator_default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.storage.set('config', this.state.configValue);

              case 2:
                _context5.next = 4;
                return this.loadConfig();

              case 4:
                _context5.next = 6;
                return sleep(200);

              case 6:
                this.provider.close();

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function saveConfig() {
        return _saveConfig.apply(this, arguments);
      }

      return saveConfig;
    }()
  }, {
    key: "settingPanelTemplate",
    value: function settingPanelTemplate() {
      var _this3 = this;

      var state = this.state;
      var checkboxList = [{
        key: 'translateUi',
        name: '翻译界面'
      }, {
        key: 'translateTag',
        name: '翻译标签'
      }, {
        key: 'showIntroduce',
        name: '标签介绍'
      }, {
        key: 'showIcon',
        name: '显示标签图标'
      }, {
        key: 'tagTip',
        name: '搜索提示'
      }, {
        key: 'autoUpdate',
        name: '自动更新'
      }];
      return html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            <div id=\"settingPanel\" class=\"panel ", "\">\n                <div class=\"header\">\n                    <div>\u8BBE\u7F6E</div>\n                    <div class=\"cushion\"></div>\n                    <div>\n                        <a\n                            href=\"#\"\n                            @click=\"", "\"\n                            >\u2715</a\n                        >\n                    </div>\n                </div>\n                <form id=\"settingForm\" class=\"content\">\n                    ", "\n                    <p class=\"checkbox-item\">\n                        \u4ECB\u7ECD\u56FE\u7247:\n                        <span\n                            >", "</span\n                        >\n                    </p>\n                    <div class=\"image-level\">\n                        <div class=\"range-box\">\n                            <input\n                                type=\"range\"\n                                min=\"0\"\n                                max=\"300\"\n                                @change=", "\n                                .value=\"", "\"\n                            />\n                        </div>\n                        <div class=\"range-label\" @click=\"", "\">\n                            <a href=\"#\" @click=\"", "\"\n                                >\u7981\u7528</a\n                            >\n                            <a href=\"#\" @click=\"", "\"\n                                >\u975EH</a\n                            >\n                            <a href=\"#\" @click=\"", "\"\n                                >R18</a\n                            >\n                            <a href=\"#\" @click=\"", "\"\n                                >R18G</a\n                            >\n                        </div>\n                    </div>\n                </form>\n                <button\n                    @click=\"", "\"\n                    class=\"action ", "\"\n                >\n                    \u4FDD\u5B58\n                </button>\n            </div>\n        "])), state.showSettingPanel ? 'show' : '', function (ev) {
        state.showSettingPanel = false;
        ev.preventDefault();
      }, checkboxList.map(function (item) {
        return html(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n                            <div class=\"checkbox-item\">\n                                <label>\n                                    <input\n                                        type=\"checkbox\"\n                                        @change=", "\n                                        ?checked=\"", "\"\n                                    />\n                                    ", "\n                                    <svg\n                                        class=\"", "\"\n                                        viewBox=\"0 0 100 100\"\n                                        xmlns=\"http://www.w3.org/2000/svg\"\n                                    >\n                                        <path d=\"M 10 10 L 90 90\"></path>\n                                        <path d=\"M 90 10 L 10 90\"></path>\n                                    </svg>\n                                </label>\n                            </div>\n                        "])), function (e) {
          return _this3.changeConfigValue(item.key, e.target.checked);
        }, _this3.state.configValue[item.key], item.name, _this3.state.configValue[item.key] ? 'checked' : '');
      }), ['禁用', '隐藏色情图片', '隐藏引起不适的图片', '全部显示'][state.configValue.introduceImageLevel], function (e) {
        var value = Math.round(parseInt(e.target.value, 10) / 100);

        _this3.changeConfigValue('introduceImageLevel', value + 1);

        _this3.changeConfigValue('introduceImageLevel', value);
      }, String(state.configValue.introduceImageLevel * 100), function (ev) {
        return ev.preventDefault();
      }, function () {
        return _this3.changeConfigValue('introduceImageLevel', 0
        /* hide */
        );
      }, function () {
        return _this3.changeConfigValue('introduceImageLevel', 1
        /* nonH */
        );
      }, function () {
        return _this3.changeConfigValue('introduceImageLevel', 2
        /* r18 */
        );
      }, function () {
        return _this3.changeConfigValue('introduceImageLevel', 3
        /* r18g */
        );
      }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee6() {
        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this3.saveConfig();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      })), this.changeConfigUnsaved() ? 'primary' : '');
    }
  }, {
    key: "mainPanelTemplate",
    value: function mainPanelTemplate() {
      var _this4 = this;

      var state = this.state;
      return html(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<div id=\"mainPanel\" class=\"panel ", "\">\n            <div class=\"header\">\n                <div>\n                    <a href=\"", "\" class=\"monospace minor\">v", "</a>\n                </div>\n                <div class=\"cushion\"></div>\n                <div>\n                    <a\n                        id=\"settingSwitch\"\n                        href=\"#\"\n                        @click=\"", "\"\n                        >\u8BBE\u7F6E</a\n                    >\n                </div>\n            </div>\n            <div class=\"content\">\n                <div class=\"logo-box\" style=\"height: 205px;\">\n                    <div\n                        class=\"logo ", "\"\n                        @click=\"", "\"\n                    >\n                        ", "\n                    </div>\n                    <div id=\"info\">", "</div>\n                </div>\n                <table>\n                    <tr>\n                        <th>TAG\u7248\u672C\uFF1A</th>\n                        <td>\n                            <a href=\"https://github.com/EhTagTranslation/Database/tree/", "\" class=\"monospace\"\n                                >", "</a\n                            >\n                        </td>\n                    </tr>\n                    <tr>\n                        <th>\u4E0A\u6B21\u66F4\u65B0\uFF1A</th>\n                        <td>\n                            <span>", "</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <th>\u66F4\u65B0\u68C0\u67E5\uFF1A</th>\n                        <td>\n                            <span class=\"", "\">\n                                ", "\n                                <a\n                                    class=\"monospace ", "\"\n                                    href=\"https://github.com/EhTagTranslation/Database/tree/", "\"\n                                >\n                                    ", "\n                                </a>\n                            </span>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <button\n                @click=\"", "\"\n                ?disabled=", "\n                class=\"action ", "\"\n                id=\"updateButton\"\n            >\n                \u66F4\u65B0\n            </button>\n        </div>"])), state.showSettingPanel ? 'hide' : '', packageJson.homepage, packageJson.version, function (ev) {
        state.showSettingPanel = true;
        ev.preventDefault();
      }, ['', 'prominent', 'prominent injection'][state.animationState] || '', function () {
        _this4.testAnimation();
      }, this.logoTemplate(state.progress), state.info, state.sha, state.sha || ' --- ', state.updateTime || ' --- ', state.updateAvailable ? 'hasNew' : '', state.versionInfo, state.updateAvailable ? '' : 'hidden', state.newSha, state.newSha || '', function () {
        return _this4.updateButtonClick();
      }, state.updateButtonDisabled, state.updateAvailable ? 'primary' : '');
    }
  }, {
    key: "template",
    value: function template() {
      var state = this.state;
      return html(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([" <div id=\"eh-syringe-popup-root\">\n            ", " ", "\n        </div>"])), this.mainPanelTemplate(), state.configValue ? this.settingPanelTemplate() : nothing);
    }
  }, {
    key: "mount",
    value: function mount(el, provider) {
      var _this5 = this;

      if (this.el != null) throw new Error('Injected twice');
      this.el = el;
      this.provider = provider;
      this.resetState();
      this.updateView();
      provider.onopen(function () {
        return _this5.onopen()["catch"](_this5.logger.error);
      });
      provider.onclose(function () {
        return _this5.onclose();
      });
    }
  }, {
    key: "resetState",
    value: function resetState() {
      var _this6 = this;

      this.state = new Proxy(this.defaults(), {
        set: function set(target, key, value, receiver) {
          var r = Reflect.set(target, key, value, receiver);

          _this6.updateView();

          return r;
        }
      });
    }
  }, {
    key: "onopen",
    value: function () {
      var _onopen = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee7() {
        return regenerator_default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.resetState();
                _context7.next = 3;
                return this.loadConfig();

              case 3:
                this.updateView();
                _context7.next = 6;
                return sleep(0);

              case 6:
                _context7.next = 8;
                return this.checkVersion();

              case 8:
                if (!this.downloadStatusSub) {
                  this.downloadStatusSub = this.messaging.on('updating-database', this.downloadStatus);
                }

                this.el.addEventListener('click', this.openLink);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onopen() {
        return _onopen.apply(this, arguments);
      }

      return onopen;
    }()
  }, {
    key: "onclose",
    value: function onclose() {
      if (this.downloadStatusSub) {
        this.messaging.off(this.downloadStatusSub);
        this.downloadStatusSub = undefined;
      }

      this.el.removeEventListener('click', this.openLink);
      this.state.showSettingPanel = false;
    }
  }, {
    key: "updateView",
    value: function updateView() {
      render(this.template(), this.el);
    }
  }]);

  return Popup;
}();

Popup = __decorate([Service(), __metadata("design:paramtypes", [Logger, messaging_Messaging, Storage, DateTime])], Popup);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/less-loader/dist/cjs.js!./src/user-script/popup-host.less
var popup_host = __webpack_require__(3858);
;// CONCATENATED MODULE: ./src/user-script/popup-host.less

            

var popup_host_options = {"insert":":root"};

popup_host_options.insert = ":root";
popup_host_options.singleton = false;

var popup_host_update = injectStylesIntoStyleTag_default()(popup_host/* default */.Z, popup_host_options);



/* harmony default export */ var user_script_popup_host = (popup_host/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/user-script/popup-host.ts






function getNumber(key, defaultValue) {
  var value = localStorage.getItem(key);
  if (!value) return defaultValue;
  var parsed = Number.parseFloat(value);
  if (Number.isNaN(parsed)) return defaultValue;
  return parsed;
}

function clamp(value, min, max) {
  if (value < min) value = min;else if (value > max) value = max;
  return value;
}

var clampX = function clampX(value) {
  return clamp(value, 4, document.body.clientWidth - 44);
};

var clampY = function clampY(value) {
  return clamp(value, 4, document.body.clientHeight - 44);
};

function dragButton(el, click) {
  var initX = clampX(getNumber("eh-popup-button-x", 0.02) * document.body.clientWidth);
  var initY = clampY(getNumber("eh-popup-button-y", 0.02) * document.body.clientHeight); // set the element's init position:

  el.style.bottom = "".concat(initY, "px");
  el.style.right = "".concat(initX, "px");
  var mouseX = 0,
      mouseY = 0;
  el.addEventListener('mousedown', dragMouseDown, {
    passive: false
  });
  el.addEventListener('click', elementClick, {
    passive: false
  });
  var moved = false;

  function dragMouseDown(e) {
    e.preventDefault(); // get the mouse cursor position at startup:

    mouseX = e.clientX;
    mouseY = e.clientY;
    moved = false;
    document.addEventListener('mouseup', closeDragElement, {
      passive: true
    });
    document.addEventListener('mousemove', elementDrag, {
      passive: false
    });
  }

  function elementDrag(e) {
    e.preventDefault();
    var currentX = Number.parseFloat(el.style.right);
    var currentY = Number.parseFloat(el.style.bottom); // calculate the new cursor position:

    var diffX = mouseX - e.clientX;
    var diffY = mouseY - e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    var nextX = clampX(currentX + diffX);
    var nextY = clampY(currentY + diffY); // set the element's new position:

    el.style.right = "".concat(nextX, "px");
    el.style.bottom = "".concat(nextY, "px");
    moved = true;
  }

  function closeDragElement(e) {
    e.preventDefault(); // stop moving when mouse button is released:

    document.removeEventListener('mouseup', closeDragElement);
    document.removeEventListener('mousemove', elementDrag);
    var finalX = clampX(Number.parseFloat(el.style.right));
    var finalY = clampY(Number.parseFloat(el.style.bottom));
    el.style.right = "".concat(finalX, "px");
    el.style.bottom = "".concat(finalY, "px");
    localStorage.setItem("eh-popup-button-x", String(finalX / document.body.clientWidth));
    localStorage.setItem("eh-popup-button-y", String(finalY / document.body.clientHeight));
  }

  function elementClick(e) {
    if (moved) {
      moved = false;
      return;
    }

    click(e);
  }
}

function createPopup() {
  var button = document.body.appendChild(document.createElement('div'));
  button.id = 'eh-syringe-popup-button';
  button.title = packageJson.displayName;
  var badge = button.appendChild(document.createElement('div'));
  badge.id = 'eh-syringe-popup-badge';
  setBadge({
    text: ''
  });
  var popupBack = document.body.appendChild(document.createElement('div'));
  popupBack.id = 'eh-syringe-popup-back';
  popupBack.lang = 'cmn-Hans';
  var popup = popupBack.appendChild(document.createElement('div'));
  popup.id = 'eh-syringe-popup';
  var closeListeners = new Array();
  var openListeners = new Array();
  popupBack.classList.add('close');

  popupBack.ontransitionend = function (ev) {
    if (ev.target !== popupBack) return;

    if (popupBack.classList.contains('opening')) {
      popupBack.classList.remove('opening', 'close');
      popupBack.classList.add('open');
    }

    if (popupBack.classList.contains('closing')) {
      popupBack.classList.remove('closing', 'open');
      popupBack.classList.add('close');
      closeListeners.forEach(function (l) {
        return l();
      });
    }
  };

  var open = function open() {
    openListeners.forEach(function (l) {
      return l();
    });
    popupBack.classList.add('opening');
  };

  var close = function close() {
    popupBack.classList.add('closing');
  };

  services_Container.get(Popup).mount(popup, {
    close: close,
    onopen: function onopen(listener) {
      openListeners.push(listener);
    },
    onclose: function onclose(listener) {
      closeListeners.push(listener);
    }
  });
  popupBack.addEventListener('click', function (ev) {
    if (ev.target === popupBack && popupBack.classList.contains('open')) close();
  });
  dragButton(button, function () {
    if (popupBack.classList.contains('close')) open();
  });
}
;// CONCATENATED MODULE: ./src/user-script/index.ts












function main() {
  services_Container.get(DatabaseUpdater);
  services_Container.get(TagDatabase);
  services_Container.get(Syringe);

  function start() {
    services_Container.get(TagContextMenu);
    services_Container.get(ImageContextMenu);
    services_Container.get(Suggest);
    services_Container.get(AutoUpdate);
    services_Container.get(TagTip);
    services_Container.get(Introduce);
    createPopup();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    setTimeout(start);
  }
}

function isValidHost() {
  var hostname = location.hostname;

  if (!hostname.endsWith('e-hentai.org') && !hostname.endsWith('exhentai.org')) {
    return false;
  }

  if (hostname.endsWith('forums.e-hentai.org')) {
    return false;
  }

  return true;
} // 为轻型用户脚本实现添加简单过滤


var LOADED_KEY = "EhTagTranslation:EhSyringeLoaded";

if (!(LOADED_KEY in window)) {
  Object.defineProperty(window, LOADED_KEY, {
    value: true
  });

  if (isValidHost()) {
    main();
  }
}

/***/ }),

/***/ 7576:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/features/global-this.js
var global_this = __webpack_require__(1407);
// EXTERNAL MODULE: ./node_modules/core-js/features/array/index.js
var array = __webpack_require__(3043);
// EXTERNAL MODULE: ./node_modules/core-js/features/object/index.js
var object = __webpack_require__(1058);
// EXTERNAL MODULE: ./node_modules/core-js/features/string/index.js
var string = __webpack_require__(850);
// EXTERNAL MODULE: ./node_modules/core-js/features/regexp/index.js
var regexp = __webpack_require__(6794);
// EXTERNAL MODULE: ./node_modules/core-js/features/reflect/index.js
var reflect = __webpack_require__(2767);
;// CONCATENATED MODULE: ./src/polyfills.ts





 // 引入 promise 的 polyfills 会导致 waterfox classic 出错，按需引入
;// CONCATENATED MODULE: ./src/user-script/polyfills.ts


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function createPolyfill(key, value) {
  if (key in window && window[key] != null) {
    return false;
  }

  var v = value();
  Object.defineProperty(v, 'polyfilled', {
    value: true
  });
  Object.defineProperty(window, key, {
    value: v,
    configurable: true
  });
  return true;
}

createPolyfill('GM_notification', function () {
  return function (detailsOrText, ondoneOrTitle, image, onclick) {
    var _a, _b, _c, _d;

    var notification = _typeof(detailsOrText) == 'object' ? detailsOrText : {
      text: String(detailsOrText),
      image: image,
      onclick: onclick,
      highlight: false
    };
    notification.id = "".concat(Math.random() * 1000000000);

    if (typeof ondoneOrTitle == 'function') {
      notification.ondone = ondoneOrTitle;
    } else if (ondoneOrTitle) {
      notification.title = ondoneOrTitle;
    }

    alert("".concat((_a = notification.title) !== null && _a !== void 0 ? _a : '', "\n\n").concat((_b = notification.text) !== null && _b !== void 0 ? _b : ''));
    (_c = notification.onclick) === null || _c === void 0 ? void 0 : _c.call(notification);
    (_d = notification.ondone) === null || _d === void 0 ? void 0 : _d.call(notification, true);
  };
});
var STORAGE_PREFIX = 'GM_POLYFILL_';

function parse(value, defaultValue) {
  if (!value) return defaultValue;

  try {
    return JSON.parse(value);
  } catch (_a) {
    return defaultValue;
  }
}

createPolyfill('GM_getValue', function () {
  return function (name, defaultValue) {
    var value = localStorage.getItem("".concat(STORAGE_PREFIX).concat(name));
    if (!value) return defaultValue;
    return parse(value);
  };
});
createPolyfill('GM_setValue', function () {
  return function (name, value) {
    if (value === undefined) {
      return GM_deleteValue(name);
    }

    try {
      var jValue = JSON.stringify(value);
      var key = "".concat(STORAGE_PREFIX).concat(name);
      localStorage.setItem(key, jValue);
      onStorageChange(new StorageEvent('storage', {
        storageArea: localStorage,
        key: key,
        newValue: jValue
      }), true);
    } catch (_a) {// Ignore
    }
  };
});
createPolyfill('GM_deleteValue', function () {
  return function (name) {
    var key = "".concat(STORAGE_PREFIX).concat(name);
    localStorage.removeItem(key);
    onStorageChange(new StorageEvent('storage', {
      storageArea: localStorage,
      key: key
    }), true);
  };
});
createPolyfill('GM_listValues', function () {
  return function () {
    var names = [];

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (!key) break;

      if (key.startsWith(STORAGE_PREFIX)) {
        names.push(key.slice(STORAGE_PREFIX.length));
      }
    }

    return names;
  };
});
var listenerId = 1;
var listeners = new Map();

function onStorageChange(ev) {
  var local = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (ev.storageArea !== localStorage) return;

  if (!ev.key) {
    var _iterator = _createForOfIteratorHelper(listeners.values()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _step.value,
            name = _step$value.name,
            listener = _step$value.listener;
        listener(name, undefined, GM_getValue(name), !local);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return;
  }

  if (!ev.key.startsWith(STORAGE_PREFIX)) return;
  var changedName = ev.key.slice(STORAGE_PREFIX.length);
  var oldValue = parse(ev.oldValue);
  var newValue = parse(ev.newValue);

  var _iterator2 = _createForOfIteratorHelper(listeners.values()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _step2.value,
          _name = _step2$value.name,
          _listener = _step2$value.listener;
      if (_name !== changedName) continue;

      _listener(_name, oldValue, newValue, !local);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

createPolyfill('GM_addValueChangeListener', function () {
  return function (name, listener) {
    var id = listenerId++;

    if (listeners.size === 0) {
      window.addEventListener('storage', onStorageChange);
    }

    listeners.set(id, {
      name: name,
      listener: listener
    });
    return id;
  };
});
createPolyfill('GM_removeValueChangeListener', function () {
  return function (listenerId) {
    listeners["delete"](listenerId);

    if (listeners.size === 0) {
      window.removeEventListener('storage', onStorageChange);
    }
  };
});
createPolyfill('GM_openInTab', function () {
  return function (url, _options) {
    var opened = window.open(url);
    return {
      close: function close() {
        var _a;

        opened === null || opened === void 0 ? void 0 : opened.close();
        (_a = this.onclosed) === null || _a === void 0 ? void 0 : _a.call(this);
        this.closed = true;
      },
      closed: false
    };
  };
});

/***/ }),

/***/ 7377:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(8783);
__webpack_require__(1038);
__webpack_require__(9753);
__webpack_require__(6572);
__webpack_require__(2222);
__webpack_require__(545);
__webpack_require__(6541);
__webpack_require__(3290);
__webpack_require__(7327);
__webpack_require__(9826);
__webpack_require__(4553);
__webpack_require__(4944);
__webpack_require__(6535);
__webpack_require__(9554);
__webpack_require__(6699);
__webpack_require__(2772);
__webpack_require__(6992);
__webpack_require__(9600);
__webpack_require__(4986);
__webpack_require__(1249);
__webpack_require__(5827);
__webpack_require__(6644);
__webpack_require__(5069);
__webpack_require__(7042);
__webpack_require__(5212);
__webpack_require__(2707);
__webpack_require__(8706);
__webpack_require__(561);
__webpack_require__(3792);
__webpack_require__(9244);
var path = __webpack_require__(857);

module.exports = path.Array;


/***/ }),

/***/ 6410:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(5837);

module.exports = __webpack_require__(7854);


/***/ }),

/***/ 4790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(2526);
__webpack_require__(9601);
__webpack_require__(8011);
__webpack_require__(9070);
__webpack_require__(3321);
__webpack_require__(9720);
__webpack_require__(3371);
__webpack_require__(8559);
__webpack_require__(5003);
__webpack_require__(9337);
__webpack_require__(6210);
__webpack_require__(489);
__webpack_require__(3304);
__webpack_require__(1825);
__webpack_require__(8410);
__webpack_require__(2200);
__webpack_require__(7941);
__webpack_require__(7227);
__webpack_require__(514);
__webpack_require__(8304);
__webpack_require__(6833);
__webpack_require__(1539);
__webpack_require__(9595);
__webpack_require__(5500);
__webpack_require__(4869);
__webpack_require__(3952);
__webpack_require__(3706);
__webpack_require__(2703);
__webpack_require__(1299);
var path = __webpack_require__(857);

module.exports = path.Object;


/***/ }),

/***/ 2254:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(224);
__webpack_require__(2419);
__webpack_require__(9596);
__webpack_require__(2586);
__webpack_require__(4819);
__webpack_require__(5683);
__webpack_require__(9361);
__webpack_require__(1037);
__webpack_require__(5898);
__webpack_require__(7556);
__webpack_require__(4361);
__webpack_require__(3593);
__webpack_require__(9532);
__webpack_require__(1299);
var path = __webpack_require__(857);

module.exports = path.Reflect;


/***/ }),

/***/ 8460:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(4603);
__webpack_require__(9714);
__webpack_require__(4916);
__webpack_require__(2087);
__webpack_require__(8386);
__webpack_require__(7601);
__webpack_require__(4723);
__webpack_require__(5306);
__webpack_require__(4765);
__webpack_require__(3123);


/***/ }),

/***/ 1111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(4916);
__webpack_require__(4953);
__webpack_require__(8992);
__webpack_require__(9841);
__webpack_require__(7852);
__webpack_require__(2023);
__webpack_require__(4723);
__webpack_require__(6373);
__webpack_require__(6528);
__webpack_require__(3112);
__webpack_require__(2481);
__webpack_require__(5306);
__webpack_require__(8757);
__webpack_require__(4765);
__webpack_require__(3123);
__webpack_require__(6755);
__webpack_require__(3210);
__webpack_require__(5674);
__webpack_require__(8702);
__webpack_require__(8783);
__webpack_require__(5218);
__webpack_require__(4475);
__webpack_require__(7929);
__webpack_require__(915);
__webpack_require__(9253);
__webpack_require__(2125);
__webpack_require__(8830);
__webpack_require__(8734);
__webpack_require__(9254);
__webpack_require__(7268);
__webpack_require__(7397);
__webpack_require__(86);
__webpack_require__(623);
var path = __webpack_require__(857);

module.exports = path.String;


/***/ }),

/***/ 3043:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(7377);
__webpack_require__(1532);
__webpack_require__(9810);
__webpack_require__(4811);
__webpack_require__(3048);
__webpack_require__(7461);
__webpack_require__(0);
__webpack_require__(6273);
__webpack_require__(3475);
__webpack_require__(3087);

module.exports = parent;


/***/ }),

/***/ 1407:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// TODO: remove from `core-js@4`
__webpack_require__(5743);

var parent = __webpack_require__(6410);

module.exports = parent;


/***/ }),

/***/ 1058:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(4790);
__webpack_require__(6936);
__webpack_require__(9964);
__webpack_require__(5238);
__webpack_require__(4987);

module.exports = parent;


/***/ }),

/***/ 2767:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(2254);
__webpack_require__(4582);
__webpack_require__(7896);
__webpack_require__(2647);
__webpack_require__(8558);
__webpack_require__(4018);
__webpack_require__(7507);
__webpack_require__(1605);
__webpack_require__(9076);
__webpack_require__(4999);

module.exports = parent;


/***/ }),

/***/ 6794:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(8460);

module.exports = parent;


/***/ }),

/***/ 850:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(1111);
__webpack_require__(6035);
// TODO: disabled by default because of the conflict with another proposal
// require('../../modules/esnext.string.at-alternative');
__webpack_require__(7501);
// TODO: remove from `core-js@4`
__webpack_require__(3728);
__webpack_require__(7207);

module.exports = parent;


/***/ }),

/***/ 3099:
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ 6077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ 1223:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(30);
var definePropertyModule = __webpack_require__(3070);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 1530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(8710).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ 5787:
/***/ (function(module) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ 1048:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(7908);
var toAbsoluteIndex = __webpack_require__(1400);
var toLength = __webpack_require__(7466);

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ 1285:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(7908);
var toAbsoluteIndex = __webpack_require__(1400);
var toLength = __webpack_require__(7466);

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ 8533:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(2092).forEach;
var arrayMethodIsStrict = __webpack_require__(9341);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ 8457:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(9974);
var toObject = __webpack_require__(7908);
var callWithSafeIterationClosing = __webpack_require__(3411);
var isArrayIteratorMethod = __webpack_require__(7659);
var toLength = __webpack_require__(7466);
var createProperty = __webpack_require__(6135);
var getIteratorMethod = __webpack_require__(1246);

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(5656);
var toLength = __webpack_require__(7466);
var toAbsoluteIndex = __webpack_require__(1400);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 9671:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(9974);
var IndexedObject = __webpack_require__(8361);
var toObject = __webpack_require__(7908);
var toLength = __webpack_require__(7466);

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_FIND_INDEX = TYPE == 6;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var index = toLength(self.length);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 5: return value; // find
        case 6: return index; // findIndex
      }
    }
    return IS_FIND_INDEX ? -1 : undefined;
  };
};

module.exports = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod(5),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod(6)
};


/***/ }),

/***/ 2092:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(9974);
var IndexedObject = __webpack_require__(8361);
var toObject = __webpack_require__(7908);
var toLength = __webpack_require__(7466);
var arraySpeciesCreate = __webpack_require__(5417);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ 6583:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var toIndexedObject = __webpack_require__(5656);
var toInteger = __webpack_require__(9958);
var toLength = __webpack_require__(7466);
var arrayMethodIsStrict = __webpack_require__(9341);

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return $lastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;


/***/ }),

/***/ 1194:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var wellKnownSymbol = __webpack_require__(5112);
var V8_VERSION = __webpack_require__(7392);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ 9341:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(7293);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ 3671:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(3099);
var toObject = __webpack_require__(7908);
var IndexedObject = __webpack_require__(8361);
var toLength = __webpack_require__(7466);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ 5417:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);
var isArray = __webpack_require__(3157);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ 956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(7466);
var toObject = __webpack_require__(7908);
var getBuiltIn = __webpack_require__(5005);
var arraySpeciesCreate = __webpack_require__(5417);

var push = [].push;

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
module.exports = function uniqueBy(resolver) {
  var that = toObject(this);
  var length = toLength(that.length);
  var result = arraySpeciesCreate(that, 0);
  var Map = getBuiltIn('Map');
  var map = new Map();
  var resolverFunction, index, item, key;
  if (typeof resolver == 'function') resolverFunction = resolver;
  else if (resolver == null) resolverFunction = function (value) {
    return value;
  };
  else throw new TypeError('Incorrect resolver!');
  for (index = 0; index < length; index++) {
    item = that[index];
    key = resolverFunction(item);
    if (!map.has(key)) map.set(key, item);
  }
  map.forEach(function (value) {
    push.call(result, value);
  });
  return result;
};


/***/ }),

/***/ 3411:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(9670);
var iteratorClose = __webpack_require__(9212);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ 7072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 4326:
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var classofRaw = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ 5631:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(3070).f;
var create = __webpack_require__(30);
var redefineAll = __webpack_require__(2248);
var bind = __webpack_require__(9974);
var anInstance = __webpack_require__(5787);
var iterate = __webpack_require__(408);
var defineIterator = __webpack_require__(654);
var setSpecies = __webpack_require__(6340);
var DESCRIPTORS = __webpack_require__(9781);
var fastKey = __webpack_require__(2423).fastKey;
var InternalStateModule = __webpack_require__(9909);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ 9320:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(2248);
var getWeakData = __webpack_require__(2423).getWeakData;
var anObject = __webpack_require__(9670);
var isObject = __webpack_require__(111);
var anInstance = __webpack_require__(5787);
var iterate = __webpack_require__(408);
var ArrayIterationModule = __webpack_require__(2092);
var $has = __webpack_require__(6656);
var InternalStateModule = __webpack_require__(9909);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(C.prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && $has(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && $has(data, state.id);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};


/***/ }),

/***/ 7710:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var isForced = __webpack_require__(4705);
var redefine = __webpack_require__(1320);
var InternalMetadataModule = __webpack_require__(2423);
var iterate = __webpack_require__(408);
var anInstance = __webpack_require__(5787);
var isObject = __webpack_require__(111);
var fails = __webpack_require__(7293);
var checkCorrectnessOfIteration = __webpack_require__(7072);
var setToStringTag = __webpack_require__(8003);
var inheritIfRequired = __webpack_require__(9587);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(6656);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ 4964:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ 8544:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 4230:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4488);

var quot = /"/g;

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ 4994:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(3383).IteratorPrototype;
var create = __webpack_require__(30);
var createPropertyDescriptor = __webpack_require__(9114);
var setToStringTag = __webpack_require__(8003);
var Iterators = __webpack_require__(7497);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 6135:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(7593);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 654:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createIteratorConstructor = __webpack_require__(4994);
var getPrototypeOf = __webpack_require__(9518);
var setPrototypeOf = __webpack_require__(7674);
var setToStringTag = __webpack_require__(8003);
var createNonEnumerableProperty = __webpack_require__(8880);
var redefine = __webpack_require__(1320);
var wellKnownSymbol = __webpack_require__(5112);
var IS_PURE = __webpack_require__(1913);
var Iterators = __webpack_require__(7497);
var IteratorsCore = __webpack_require__(3383);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ 7235:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(857);
var has = __webpack_require__(6656);
var wrappedWellKnownSymbolModule = __webpack_require__(6061);
var defineProperty = __webpack_require__(3070).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 5268:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(4326);
var global = __webpack_require__(7854);

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ 8113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ 748:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = __webpack_require__(1236).f;
var createNonEnumerableProperty = __webpack_require__(8880);
var redefine = __webpack_require__(1320);
var setGlobal = __webpack_require__(3505);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 7007:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(4916);
var redefine = __webpack_require__(1320);
var regexpExec = __webpack_require__(2261);
var fails = __webpack_require__(7293);
var wellKnownSymbol = __webpack_require__(5112);
var createNonEnumerableProperty = __webpack_require__(8880);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExpPrototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ 6790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(3157);
var toLength = __webpack_require__(7466);
var bind = __webpack_require__(9974);

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ 6677:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ 9974:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(3099);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 7065:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(3099);
var isObject = __webpack_require__(111);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(857);
var global = __webpack_require__(7854);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 1246:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(648);
var Iterators = __webpack_require__(7497);
var wellKnownSymbol = __webpack_require__(5112);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 647:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toObject = __webpack_require__(7908);

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 6656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toObject = __webpack_require__(7908);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 9587:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);
var setPrototypeOf = __webpack_require__(7674);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(5465);

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 2423:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(3501);
var isObject = __webpack_require__(111);
var has = __webpack_require__(6656);
var defineProperty = __webpack_require__(3070).f;
var uid = __webpack_require__(9711);
var FREEZING = __webpack_require__(6677);

var METADATA = uid('meta');
var id = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(8536);
var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var objectHas = __webpack_require__(6656);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 7659:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var Iterators = __webpack_require__(7497);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 3157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(4326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 111:
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 1913:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 7850:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);
var classof = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ 408:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(9670);
var isArrayIteratorMethod = __webpack_require__(7659);
var toLength = __webpack_require__(7466);
var bind = __webpack_require__(9974);
var getIteratorMethod = __webpack_require__(1246);
var iteratorClose = __webpack_require__(9212);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ 9212:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(9670);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ 3383:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(7293);
var getPrototypeOf = __webpack_require__(9518);
var createNonEnumerableProperty = __webpack_require__(8880);
var has = __webpack_require__(6656);
var wellKnownSymbol = __webpack_require__(5112);
var IS_PURE = __webpack_require__(1913);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 7497:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 133:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 8536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var inspectSource = __webpack_require__(2788);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 3929:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isRegExp = __webpack_require__(7850);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ 1574:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var objectKeys = __webpack_require__(1956);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var propertyIsEnumerableModule = __webpack_require__(5296);
var toObject = __webpack_require__(7908);
var IndexedObject = __webpack_require__(8361);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 30:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(9670);
var defineProperties = __webpack_require__(6048);
var enumBugKeys = __webpack_require__(748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(490);
var documentCreateElement = __webpack_require__(317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ 6048:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(9670);
var objectKeys = __webpack_require__(1956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var anObject = __webpack_require__(9670);
var toPrimitive = __webpack_require__(7593);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPrimitive = __webpack_require__(7593);
var has = __webpack_require__(6656);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ 1156:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__(5656);
var $getOwnPropertyNames = __webpack_require__(8006).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 9518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(6656);
var toObject = __webpack_require__(7908);
var sharedKey = __webpack_require__(6200);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8544);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 996:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var InternalStateModule = __webpack_require__(9909);
var createIteratorConstructor = __webpack_require__(4994);
var has = __webpack_require__(6656);
var objectKeys = __webpack_require__(1956);
var toObject = __webpack_require__(7908);

var OBJECT_ITERATOR = 'Object Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(OBJECT_ITERATOR);

module.exports = createIteratorConstructor(function ObjectIterator(source, mode) {
  var object = toObject(source);
  setInternalState(this, {
    type: OBJECT_ITERATOR,
    mode: mode,
    object: object,
    keys: objectKeys(object),
    index: 0
  });
}, 'Object', function next() {
  var state = getInternalState(this);
  var keys = state.keys;
  while (true) {
    if (keys === null || state.index >= keys.length) {
      state.object = state.keys = null;
      return { value: undefined, done: true };
    }
    var key = keys[state.index++];
    var object = state.object;
    if (!has(object, key)) continue;
    switch (state.mode) {
      case 'keys': return { value: key, done: false };
      case 'values': return { value: object[key], done: false };
    } /* entries */ return { value: [key, object[key]], done: false };
  }
});


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(6656);
var toIndexedObject = __webpack_require__(5656);
var indexOf = __webpack_require__(1318).indexOf;
var hiddenKeys = __webpack_require__(3501);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 1956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 9026:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(1913);
var global = __webpack_require__(7854);
var fails = __webpack_require__(7293);
var userAgent = __webpack_require__(8113);

// Forced replacement object prototype accessors methods
module.exports = IS_PURE || !fails(function () {
  // This feature detection crashes old WebKit
  // https://github.com/zloirock/core-js/issues/232
  var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
  if (webkit && +webkit[1] < 535) return;
  var key = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call -- required for testing
  __defineSetter__.call(null, key, function () { /* empty */ });
  delete global[key];
});


/***/ }),

/***/ 7674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(9670);
var aPossiblePrototype = __webpack_require__(6077);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 4699:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var objectKeys = __webpack_require__(1956);
var toIndexedObject = __webpack_require__(5656);
var propertyIsEnumerable = __webpack_require__(5296).f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ 288:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var classof = __webpack_require__(648);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 857:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

module.exports = global;


/***/ }),

/***/ 2248:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var redefine = __webpack_require__(1320);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 1320:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var createNonEnumerableProperty = __webpack_require__(8880);
var has = __webpack_require__(6656);
var setGlobal = __webpack_require__(3505);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ 8845:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
var Map = __webpack_require__(1532);
var WeakMap = __webpack_require__(4129);
var shared = __webpack_require__(2309);

var metadata = shared('metadata');
var store = metadata.store || (metadata.store = new WeakMap());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};

var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};

var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};

var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};

var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};

var toMetadataKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};

module.exports = {
  store: store,
  getMap: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  toKey: toMetadataKey
};


/***/ }),

/***/ 7651:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(4326);
var regexpExec = __webpack_require__(2261);

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ 2261:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var regexpFlags = __webpack_require__(7066);
var stickyHelpers = __webpack_require__(2999);
var shared = __webpack_require__(2309);

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 7066:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9670);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 2999:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(7293);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ 4488:
/***/ (function(module) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 1150:
/***/ (function(module) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ 3505:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var createNonEnumerableProperty = __webpack_require__(8880);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 6340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(5005);
var definePropertyModule = __webpack_require__(3070);
var wellKnownSymbol = __webpack_require__(5112);
var DESCRIPTORS = __webpack_require__(9781);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 8003:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(3070).f;
var has = __webpack_require__(6656);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var setGlobal = __webpack_require__(3505);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.13.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 6707:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(9670);
var aFunction = __webpack_require__(3099);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ 3429:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ 8710:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(9958);
var requireObjectCoercible = __webpack_require__(4488);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 7061:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/zloirock/core-js/issues/280
var userAgent = __webpack_require__(8113);

// eslint-disable-next-line unicorn/no-unsafe-regex -- safe
module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);


/***/ }),

/***/ 6650:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(7466);
var repeat = __webpack_require__(8415);
var requireObjectCoercible = __webpack_require__(4488);

var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = String(requireObjectCoercible($this));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = toLength(maxLength);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ 8415:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(9958);
var requireObjectCoercible = __webpack_require__(4488);

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ 6091:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var whitespaces = __webpack_require__(1361);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ 3111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4488);
var whitespaces = __webpack_require__(1361);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(9958);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9958:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(9958);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4488);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 1694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 9711:
/***/ (function(module) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(133);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 6061:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

exports.f = wellKnownSymbol;


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var has = __webpack_require__(6656);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(133);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 1361:
/***/ (function(module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 2222:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var fails = __webpack_require__(7293);
var isArray = __webpack_require__(3157);
var isObject = __webpack_require__(111);
var toObject = __webpack_require__(7908);
var toLength = __webpack_require__(7466);
var createProperty = __webpack_require__(6135);
var arraySpeciesCreate = __webpack_require__(5417);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);
var wellKnownSymbol = __webpack_require__(5112);
var V8_VERSION = __webpack_require__(7392);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ 545:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var copyWithin = __webpack_require__(1048);
var addToUnscopables = __webpack_require__(1223);

// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
$({ target: 'Array', proto: true }, {
  copyWithin: copyWithin
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('copyWithin');


/***/ }),

/***/ 6541:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $every = __webpack_require__(2092).every;
var arrayMethodIsStrict = __webpack_require__(9341);

var STRICT_METHOD = arrayMethodIsStrict('every');

// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 3290:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var fill = __webpack_require__(1285);
var addToUnscopables = __webpack_require__(1223);

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ 7327:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $filter = __webpack_require__(2092).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 4553:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $findIndex = __webpack_require__(2092).findIndex;
var addToUnscopables = __webpack_require__(1223);

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ 9826:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $find = __webpack_require__(2092).find;
var addToUnscopables = __webpack_require__(1223);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ 6535:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var flattenIntoArray = __webpack_require__(6790);
var toObject = __webpack_require__(7908);
var toLength = __webpack_require__(7466);
var aFunction = __webpack_require__(3099);
var arraySpeciesCreate = __webpack_require__(5417);

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ 4944:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var flattenIntoArray = __webpack_require__(6790);
var toObject = __webpack_require__(7908);
var toLength = __webpack_require__(7466);
var toInteger = __webpack_require__(9958);
var arraySpeciesCreate = __webpack_require__(5417);

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});


/***/ }),

/***/ 9554:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var forEach = __webpack_require__(8533);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ 1038:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var from = __webpack_require__(8457);
var checkCorrectnessOfIteration = __webpack_require__(7072);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ 6699:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $includes = __webpack_require__(1318).includes;
var addToUnscopables = __webpack_require__(1223);

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 2772:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(2109);
var $indexOf = __webpack_require__(1318).indexOf;
var arrayMethodIsStrict = __webpack_require__(9341);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 9753:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var isArray = __webpack_require__(3157);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ 6992:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(5656);
var addToUnscopables = __webpack_require__(1223);
var Iterators = __webpack_require__(7497);
var InternalStateModule = __webpack_require__(9909);
var defineIterator = __webpack_require__(654);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 9600:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var IndexedObject = __webpack_require__(8361);
var toIndexedObject = __webpack_require__(5656);
var arrayMethodIsStrict = __webpack_require__(9341);

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ 4986:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var lastIndexOf = __webpack_require__(6583);

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ 1249:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $map = __webpack_require__(2092).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 6572:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var fails = __webpack_require__(7293);
var createProperty = __webpack_require__(6135);

var ISNT_GENERIC = fails(function () {
  function F() { /* empty */ }
  // eslint-disable-next-line es/no-array-of -- required for testing
  return !(Array.of.call(F) instanceof F);
});

// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
$({ target: 'Array', stat: true, forced: ISNT_GENERIC }, {
  of: function of(/* ...args */) {
    var index = 0;
    var argumentsLength = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(argumentsLength);
    while (argumentsLength > index) createProperty(result, index, arguments[index++]);
    result.length = argumentsLength;
    return result;
  }
});


/***/ }),

/***/ 6644:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $reduceRight = __webpack_require__(3671).right;
var arrayMethodIsStrict = __webpack_require__(9341);
var CHROME_VERSION = __webpack_require__(7392);
var IS_NODE = __webpack_require__(5268);

var STRICT_METHOD = arrayMethodIsStrict('reduceRight');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 5827:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $reduce = __webpack_require__(3671).left;
var arrayMethodIsStrict = __webpack_require__(9341);
var CHROME_VERSION = __webpack_require__(7392);
var IS_NODE = __webpack_require__(5268);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 5069:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var isArray = __webpack_require__(3157);

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),

/***/ 7042:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var isObject = __webpack_require__(111);
var isArray = __webpack_require__(3157);
var toAbsoluteIndex = __webpack_require__(1400);
var toLength = __webpack_require__(7466);
var toIndexedObject = __webpack_require__(5656);
var createProperty = __webpack_require__(6135);
var wellKnownSymbol = __webpack_require__(5112);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ 5212:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $some = __webpack_require__(2092).some;
var arrayMethodIsStrict = __webpack_require__(9341);

var STRICT_METHOD = arrayMethodIsStrict('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 2707:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var aFunction = __webpack_require__(3099);
var toObject = __webpack_require__(7908);
var fails = __webpack_require__(7293);
var arrayMethodIsStrict = __webpack_require__(9341);

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ 8706:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var setSpecies = __webpack_require__(6340);

// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
setSpecies('Array');


/***/ }),

/***/ 561:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var toAbsoluteIndex = __webpack_require__(1400);
var toInteger = __webpack_require__(9958);
var toLength = __webpack_require__(7466);
var toObject = __webpack_require__(7908);
var arraySpeciesCreate = __webpack_require__(5417);
var createProperty = __webpack_require__(6135);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ 9244:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(1223);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ }),

/***/ 3792:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(1223);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');


/***/ }),

/***/ 5837:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({ global: true }, {
  globalThis: global
});


/***/ }),

/***/ 3706:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var setToStringTag = __webpack_require__(8003);

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 1532:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(7710);
var collectionStrong = __webpack_require__(5631);

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ 2703:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var setToStringTag = __webpack_require__(8003);

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),

/***/ 9601:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var assign = __webpack_require__(1574);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ 8011:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var create = __webpack_require__(30);

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),

/***/ 9595:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var FORCED = __webpack_require__(9026);
var toObject = __webpack_require__(7908);
var aFunction = __webpack_require__(3099);
var definePropertyModule = __webpack_require__(3070);

// `Object.prototype.__defineGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __defineGetter__: function __defineGetter__(P, getter) {
      definePropertyModule.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
    }
  });
}


/***/ }),

/***/ 3321:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var defineProperties = __webpack_require__(6048);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ 9070:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var objectDefinePropertyModile = __webpack_require__(3070);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ 5500:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var FORCED = __webpack_require__(9026);
var toObject = __webpack_require__(7908);
var aFunction = __webpack_require__(3099);
var definePropertyModule = __webpack_require__(3070);

// `Object.prototype.__defineSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __defineSetter__: function __defineSetter__(P, setter) {
      definePropertyModule.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
    }
  });
}


/***/ }),

/***/ 9720:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var $entries = __webpack_require__(4699).entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ 3371:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var FREEZING = __webpack_require__(6677);
var fails = __webpack_require__(7293);
var isObject = __webpack_require__(111);
var onFreeze = __webpack_require__(2423).onFreeze;

// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ 8559:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var iterate = __webpack_require__(408);
var createProperty = __webpack_require__(6135);

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});


/***/ }),

/***/ 5003:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var fails = __webpack_require__(7293);
var toIndexedObject = __webpack_require__(5656);
var nativeGetOwnPropertyDescriptor = __webpack_require__(1236).f;
var DESCRIPTORS = __webpack_require__(9781);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ 9337:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var ownKeys = __webpack_require__(3887);
var toIndexedObject = __webpack_require__(5656);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var createProperty = __webpack_require__(6135);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ 6210:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var fails = __webpack_require__(7293);
var getOwnPropertyNames = __webpack_require__(1156).f;

// eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: getOwnPropertyNames
});


/***/ }),

/***/ 489:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var fails = __webpack_require__(7293);
var toObject = __webpack_require__(7908);
var nativeGetPrototypeOf = __webpack_require__(9518);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8544);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ 1825:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var fails = __webpack_require__(7293);
var isObject = __webpack_require__(111);

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  isExtensible: function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  }
});


/***/ }),

/***/ 8410:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var fails = __webpack_require__(7293);
var isObject = __webpack_require__(111);

// eslint-disable-next-line es/no-object-isfrozen -- safe
var $isFrozen = Object.isFrozen;
var FAILS_ON_PRIMITIVES = fails(function () { $isFrozen(1); });

// `Object.isFrozen` method
// https://tc39.es/ecma262/#sec-object.isfrozen
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  isFrozen: function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  }
});


/***/ }),

/***/ 2200:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var fails = __webpack_require__(7293);
var isObject = __webpack_require__(111);

// eslint-disable-next-line es/no-object-issealed -- safe
var $isSealed = Object.isSealed;
var FAILS_ON_PRIMITIVES = fails(function () { $isSealed(1); });

// `Object.isSealed` method
// https://tc39.es/ecma262/#sec-object.issealed
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  isSealed: function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  }
});


/***/ }),

/***/ 3304:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var is = __webpack_require__(1150);

// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
$({ target: 'Object', stat: true }, {
  is: is
});


/***/ }),

/***/ 7941:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var toObject = __webpack_require__(7908);
var nativeKeys = __webpack_require__(1956);
var fails = __webpack_require__(7293);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ 4869:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var FORCED = __webpack_require__(9026);
var toObject = __webpack_require__(7908);
var toPrimitive = __webpack_require__(7593);
var getPrototypeOf = __webpack_require__(9518);
var getOwnPropertyDescriptor = __webpack_require__(1236).f;

// `Object.prototype.__lookupGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = toObject(this);
      var key = toPrimitive(P, true);
      var desc;
      do {
        if (desc = getOwnPropertyDescriptor(O, key)) return desc.get;
      } while (O = getPrototypeOf(O));
    }
  });
}


/***/ }),

/***/ 3952:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var FORCED = __webpack_require__(9026);
var toObject = __webpack_require__(7908);
var toPrimitive = __webpack_require__(7593);
var getPrototypeOf = __webpack_require__(9518);
var getOwnPropertyDescriptor = __webpack_require__(1236).f;

// `Object.prototype.__lookupSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __lookupSetter__: function __lookupSetter__(P) {
      var O = toObject(this);
      var key = toPrimitive(P, true);
      var desc;
      do {
        if (desc = getOwnPropertyDescriptor(O, key)) return desc.set;
      } while (O = getPrototypeOf(O));
    }
  });
}


/***/ }),

/***/ 7227:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var isObject = __webpack_require__(111);
var onFreeze = __webpack_require__(2423).onFreeze;
var FREEZING = __webpack_require__(6677);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es/no-object-preventextensions -- safe
var $preventExtensions = Object.preventExtensions;
var FAILS_ON_PRIMITIVES = fails(function () { $preventExtensions(1); });

// `Object.preventExtensions` method
// https://tc39.es/ecma262/#sec-object.preventextensions
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ 514:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var isObject = __webpack_require__(111);
var onFreeze = __webpack_require__(2423).onFreeze;
var FREEZING = __webpack_require__(6677);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es/no-object-seal -- safe
var $seal = Object.seal;
var FAILS_ON_PRIMITIVES = fails(function () { $seal(1); });

// `Object.seal` method
// https://tc39.es/ecma262/#sec-object.seal
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  seal: function seal(it) {
    return $seal && isObject(it) ? $seal(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ 8304:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var setPrototypeOf = __webpack_require__(7674);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ 1539:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var redefine = __webpack_require__(1320);
var toString = __webpack_require__(288);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ 6833:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var $values = __webpack_require__(4699).values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ 224:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var getBuiltIn = __webpack_require__(5005);
var aFunction = __webpack_require__(3099);
var anObject = __webpack_require__(9670);
var fails = __webpack_require__(7293);

var nativeApply = getBuiltIn('Reflect', 'apply');
var functionApply = Function.apply;

// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
  nativeApply(function () { /* empty */ });
});

// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
$({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
  apply: function apply(target, thisArgument, argumentsList) {
    aFunction(target);
    anObject(argumentsList);
    return nativeApply
      ? nativeApply(target, thisArgument, argumentsList)
      : functionApply.call(target, thisArgument, argumentsList);
  }
});


/***/ }),

/***/ 2419:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var getBuiltIn = __webpack_require__(5005);
var aFunction = __webpack_require__(3099);
var anObject = __webpack_require__(9670);
var isObject = __webpack_require__(111);
var create = __webpack_require__(30);
var bind = __webpack_require__(7065);
var fails = __webpack_require__(7293);

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 9596:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var anObject = __webpack_require__(9670);
var toPrimitive = __webpack_require__(7593);
var definePropertyModule = __webpack_require__(3070);
var fails = __webpack_require__(7293);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var ERROR_INSTEAD_OF_FALSE = fails(function () {
  // eslint-disable-next-line es/no-reflect -- required for testing
  Reflect.defineProperty(definePropertyModule.f({}, 1, { value: 1 }), 1, { value: 2 });
});

// `Reflect.defineProperty` method
// https://tc39.es/ecma262/#sec-reflect.defineproperty
$({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS }, {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    var key = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      definePropertyModule.f(target, key, attributes);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 2586:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var anObject = __webpack_require__(9670);
var getOwnPropertyDescriptor = __webpack_require__(1236).f;

// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
$({ target: 'Reflect', stat: true }, {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ 5683:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var anObject = __webpack_require__(9670);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);

// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
$({ target: 'Reflect', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ 9361:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var anObject = __webpack_require__(9670);
var objectGetPrototypeOf = __webpack_require__(9518);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8544);

// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
$({ target: 'Reflect', stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(target) {
    return objectGetPrototypeOf(anObject(target));
  }
});


/***/ }),

/***/ 4819:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var isObject = __webpack_require__(111);
var anObject = __webpack_require__(9670);
var has = __webpack_require__(6656);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var getPrototypeOf = __webpack_require__(9518);

// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value')
    ? descriptor.value
    : descriptor.get === undefined
      ? undefined
      : descriptor.get.call(receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ 1037:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);

// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
$({ target: 'Reflect', stat: true }, {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ 5898:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var anObject = __webpack_require__(9670);

// eslint-disable-next-line es/no-object-isextensible -- safe
var objectIsExtensible = Object.isExtensible;

// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
$({ target: 'Reflect', stat: true }, {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return objectIsExtensible ? objectIsExtensible(target) : true;
  }
});


/***/ }),

/***/ 7556:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var ownKeys = __webpack_require__(3887);

// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
$({ target: 'Reflect', stat: true }, {
  ownKeys: ownKeys
});


/***/ }),

/***/ 4361:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var getBuiltIn = __webpack_require__(5005);
var anObject = __webpack_require__(9670);
var FREEZING = __webpack_require__(6677);

// `Reflect.preventExtensions` method
// https://tc39.es/ecma262/#sec-reflect.preventextensions
$({ target: 'Reflect', stat: true, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
      if (objectPreventExtensions) objectPreventExtensions(target);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 9532:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var anObject = __webpack_require__(9670);
var aPossiblePrototype = __webpack_require__(6077);
var objectSetPrototypeOf = __webpack_require__(7674);

// `Reflect.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.setprototypeof
if (objectSetPrototypeOf) $({ target: 'Reflect', stat: true }, {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    anObject(target);
    aPossiblePrototype(proto);
    try {
      objectSetPrototypeOf(target, proto);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 3593:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var anObject = __webpack_require__(9670);
var isObject = __webpack_require__(111);
var has = __webpack_require__(6656);
var fails = __webpack_require__(7293);
var definePropertyModule = __webpack_require__(3070);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var getPrototypeOf = __webpack_require__(9518);
var createPropertyDescriptor = __webpack_require__(9114);

// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  var existingDescriptor, prototype;
  if (!ownDescriptor) {
    if (isObject(prototype = getPrototypeOf(target))) {
      return set(prototype, propertyKey, V, receiver);
    }
    ownDescriptor = createPropertyDescriptor(0);
  }
  if (has(ownDescriptor, 'value')) {
    if (ownDescriptor.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      definePropertyModule.f(receiver, propertyKey, existingDescriptor);
    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
    return true;
  }
  return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
}

// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails(function () {
  var Constructor = function () { /* empty */ };
  var object = definePropertyModule.f(new Constructor(), 'a', { configurable: true });
  // eslint-disable-next-line es/no-reflect -- required for testing
  return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
});

$({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
  set: set
});


/***/ }),

/***/ 1299:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var setToStringTag = __webpack_require__(8003);

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(global.Reflect, 'Reflect', true);


/***/ }),

/***/ 4603:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var global = __webpack_require__(7854);
var isForced = __webpack_require__(4705);
var inheritIfRequired = __webpack_require__(9587);
var defineProperty = __webpack_require__(3070).f;
var getOwnPropertyNames = __webpack_require__(8006).f;
var isRegExp = __webpack_require__(7850);
var getFlags = __webpack_require__(7066);
var stickyHelpers = __webpack_require__(2999);
var redefine = __webpack_require__(1320);
var fails = __webpack_require__(7293);
var enforceInternalState = __webpack_require__(9909).enforce;
var setSpecies = __webpack_require__(6340);
var wellKnownSymbol = __webpack_require__(5112);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) {
      var state = enforceInternalState(result);
      state.sticky = true;
    }

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ 4916:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var exec = __webpack_require__(2261);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ 2087:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var objectDefinePropertyModule = __webpack_require__(3070);
var regExpFlags = __webpack_require__(7066);
var UNSUPPORTED_Y = __webpack_require__(2999).UNSUPPORTED_Y;

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
// eslint-disable-next-line es/no-regexp-prototype-flags -- required for testing
if (DESCRIPTORS && (/./g.flags != 'g' || UNSUPPORTED_Y)) {
  objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlags
  });
}


/***/ }),

/***/ 8386:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var UNSUPPORTED_Y = __webpack_require__(2999).UNSUPPORTED_Y;
var defineProperty = __webpack_require__(3070).f;
var getInternalState = __webpack_require__(9909).get;
var RegExpPrototype = RegExp.prototype;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && UNSUPPORTED_Y) {
  defineProperty(RegExp.prototype, 'sticky', {
    configurable: true,
    get: function () {
      if (this === RegExpPrototype) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (this instanceof RegExp) {
        return !!getInternalState(this).sticky;
      }
      throw TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ 7601:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(4916);
var $ = __webpack_require__(2109);
var isObject = __webpack_require__(111);

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (str) {
    if (typeof this.exec !== 'function') {
      return nativeTest.call(this, str);
    }
    var result = this.exec(str);
    if (result !== null && !isObject(result)) {
      throw new Error('RegExp exec method returned something other than an Object or null');
    }
    return !!result;
  }
});


/***/ }),

/***/ 9714:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(1320);
var anObject = __webpack_require__(9670);
var fails = __webpack_require__(7293);
var flags = __webpack_require__(7066);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ 189:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(7710);
var collectionStrong = __webpack_require__(5631);

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ 5218:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {
  anchor: function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  }
});


/***/ }),

/***/ 4475:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.big` method
// https://tc39.es/ecma262/#sec-string.prototype.big
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('big') }, {
  big: function big() {
    return createHTML(this, 'big', '', '');
  }
});


/***/ }),

/***/ 7929:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.blink` method
// https://tc39.es/ecma262/#sec-string.prototype.blink
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('blink') }, {
  blink: function blink() {
    return createHTML(this, 'blink', '', '');
  }
});


/***/ }),

/***/ 915:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.bold` method
// https://tc39.es/ecma262/#sec-string.prototype.bold
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('bold') }, {
  bold: function bold() {
    return createHTML(this, 'b', '', '');
  }
});


/***/ }),

/***/ 9841:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var codeAt = __webpack_require__(8710).codeAt;

// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
$({ target: 'String', proto: true }, {
  codePointAt: function codePointAt(pos) {
    return codeAt(this, pos);
  }
});


/***/ }),

/***/ 7852:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var getOwnPropertyDescriptor = __webpack_require__(1236).f;
var toLength = __webpack_require__(7466);
var notARegExp = __webpack_require__(3929);
var requireObjectCoercible = __webpack_require__(4488);
var correctIsRegExpLogic = __webpack_require__(4964);
var IS_PURE = __webpack_require__(1913);

// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var $endsWith = ''.endsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ 9253:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});


/***/ }),

/***/ 2125:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.fontcolor` method
// https://tc39.es/ecma262/#sec-string.prototype.fontcolor
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fontcolor') }, {
  fontcolor: function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  }
});


/***/ }),

/***/ 8830:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.fontsize` method
// https://tc39.es/ecma262/#sec-string.prototype.fontsize
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fontsize') }, {
  fontsize: function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  }
});


/***/ }),

/***/ 4953:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var toAbsoluteIndex = __webpack_require__(1400);

var fromCharCode = String.fromCharCode;
// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1;

// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$({ target: 'String', stat: true, forced: INCORRECT_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  fromCodePoint: function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point');
      elements.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00)
      );
    } return elements.join('');
  }
});


/***/ }),

/***/ 2023:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var notARegExp = __webpack_require__(3929);
var requireObjectCoercible = __webpack_require__(4488);
var correctIsRegExpLogic = __webpack_require__(4964);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 8734:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.italics` method
// https://tc39.es/ecma262/#sec-string.prototype.italics
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('italics') }, {
  italics: function italics() {
    return createHTML(this, 'i', '', '');
  }
});


/***/ }),

/***/ 8783:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(8710).charAt;
var InternalStateModule = __webpack_require__(9909);
var defineIterator = __webpack_require__(654);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 9254:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ 6373:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-string-prototype-matchall -- safe */
var $ = __webpack_require__(2109);
var createIteratorConstructor = __webpack_require__(4994);
var requireObjectCoercible = __webpack_require__(4488);
var toLength = __webpack_require__(7466);
var aFunction = __webpack_require__(3099);
var anObject = __webpack_require__(9670);
var classof = __webpack_require__(4326);
var isRegExp = __webpack_require__(7850);
var getRegExpFlags = __webpack_require__(7066);
var createNonEnumerableProperty = __webpack_require__(8880);
var fails = __webpack_require__(7293);
var wellKnownSymbol = __webpack_require__(5112);
var speciesConstructor = __webpack_require__(6707);
var advanceStringIndex = __webpack_require__(1530);
var InternalStateModule = __webpack_require__(9909);
var IS_PURE = __webpack_require__(1913);

var MATCH_ALL = wellKnownSymbol('matchAll');
var REGEXP_STRING = 'RegExp String';
var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(REGEXP_STRING_ITERATOR);
var RegExpPrototype = RegExp.prototype;
var regExpBuiltinExec = RegExpPrototype.exec;
var nativeMatchAll = ''.matchAll;

var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails(function () {
  'a'.matchAll(/./);
});

var regExpExec = function (R, S) {
  var exec = R.exec;
  var result;
  if (typeof exec == 'function') {
    result = exec.call(R, S);
    if (typeof result != 'object') throw TypeError('Incorrect exec result');
    return result;
  } return regExpBuiltinExec.call(R, S);
};

// eslint-disable-next-line max-len -- ignore
var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, global, fullUnicode) {
  setInternalState(this, {
    type: REGEXP_STRING_ITERATOR,
    regexp: regexp,
    string: string,
    global: global,
    unicode: fullUnicode,
    done: false
  });
}, REGEXP_STRING, function next() {
  var state = getInternalState(this);
  if (state.done) return { value: undefined, done: true };
  var R = state.regexp;
  var S = state.string;
  var match = regExpExec(R, S);
  if (match === null) return { value: undefined, done: state.done = true };
  if (state.global) {
    if (String(match[0]) == '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
    return { value: match, done: false };
  }
  state.done = true;
  return { value: match, done: false };
});

var $matchAll = function (string) {
  var R = anObject(this);
  var S = String(string);
  var C, flagsValue, flags, matcher, global, fullUnicode;
  C = speciesConstructor(R, RegExp);
  flagsValue = R.flags;
  if (flagsValue === undefined && R instanceof RegExp && !('flags' in RegExpPrototype)) {
    flagsValue = getRegExpFlags.call(R);
  }
  flags = flagsValue === undefined ? '' : String(flagsValue);
  matcher = new C(C === RegExp ? R.source : R, flags);
  global = !!~flags.indexOf('g');
  fullUnicode = !!~flags.indexOf('u');
  matcher.lastIndex = toLength(R.lastIndex);
  return new $RegExpStringIterator(matcher, S, global, fullUnicode);
};

// `String.prototype.matchAll` method
// https://tc39.es/ecma262/#sec-string.prototype.matchall
$({ target: 'String', proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {
  matchAll: function matchAll(regexp) {
    var O = requireObjectCoercible(this);
    var flags, S, matcher, rx;
    if (regexp != null) {
      if (isRegExp(regexp)) {
        flags = String(requireObjectCoercible('flags' in RegExpPrototype
          ? regexp.flags
          : getRegExpFlags.call(regexp)
        ));
        if (!~flags.indexOf('g')) throw TypeError('`.matchAll` does not allow non-global regexes');
      }
      if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
      matcher = regexp[MATCH_ALL];
      if (matcher === undefined && IS_PURE && classof(regexp) == 'RegExp') matcher = $matchAll;
      if (matcher != null) return aFunction(matcher).call(regexp, O);
    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
    S = String(O);
    rx = new RegExp(regexp, 'g');
    return IS_PURE ? $matchAll.call(rx, S) : rx[MATCH_ALL](S);
  }
});

IS_PURE || MATCH_ALL in RegExpPrototype || createNonEnumerableProperty(RegExpPrototype, MATCH_ALL, $matchAll);


/***/ }),

/***/ 4723:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
var anObject = __webpack_require__(9670);
var toLength = __webpack_require__(7466);
var requireObjectCoercible = __webpack_require__(4488);
var advanceStringIndex = __webpack_require__(1530);
var regExpExec = __webpack_require__(7651);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ 6528:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $padEnd = __webpack_require__(6650).end;
var WEBKIT_BUG = __webpack_require__(7061);

// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 3112:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $padStart = __webpack_require__(6650).start;
var WEBKIT_BUG = __webpack_require__(7061);

// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 8992:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var toIndexedObject = __webpack_require__(5656);
var toLength = __webpack_require__(7466);

// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
$({ target: 'String', stat: true }, {
  raw: function raw(template) {
    var rawTemplate = toIndexedObject(template.raw);
    var literalSegments = toLength(rawTemplate.length);
    var argumentsLength = arguments.length;
    var elements = [];
    var i = 0;
    while (literalSegments > i) {
      elements.push(String(rawTemplate[i++]));
      if (i < argumentsLength) elements.push(String(arguments[i]));
    } return elements.join('');
  }
});


/***/ }),

/***/ 2481:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var repeat = __webpack_require__(8415);

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ 8757:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var requireObjectCoercible = __webpack_require__(4488);
var isRegExp = __webpack_require__(7850);
var getRegExpFlags = __webpack_require__(7066);
var getSubstitution = __webpack_require__(647);
var wellKnownSymbol = __webpack_require__(5112);
var IS_PURE = __webpack_require__(1913);

var REPLACE = wellKnownSymbol('replace');
var RegExpPrototype = RegExp.prototype;
var max = Math.max;

var stringIndexOf = function (string, searchValue, fromIndex) {
  if (fromIndex > string.length) return -1;
  if (searchValue === '') return fromIndex;
  return string.indexOf(searchValue, fromIndex);
};

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';
    if (searchValue != null) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = String(requireObjectCoercible('flags' in RegExpPrototype
          ? searchValue.flags
          : getRegExpFlags.call(searchValue)
        ));
        if (!~flags.indexOf('g')) throw TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = searchValue[REPLACE];
      if (replacer !== undefined) {
        return replacer.call(searchValue, O, replaceValue);
      } else if (IS_PURE && IS_REG_EXP) {
        return String(O).replace(searchValue, replaceValue);
      }
    }
    string = String(O);
    searchString = String(searchValue);
    functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = stringIndexOf(string, searchString, 0);
    while (position !== -1) {
      if (functionalReplace) {
        replacement = String(replaceValue(searchString, position, string));
      } else {
        replacement = getSubstitution(searchString, string, position, [], undefined, replaceValue);
      }
      result += string.slice(endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = stringIndexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += string.slice(endOfLastMatch);
    }
    return result;
  }
});


/***/ }),

/***/ 5306:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
var anObject = __webpack_require__(9670);
var toLength = __webpack_require__(7466);
var toInteger = __webpack_require__(9958);
var requireObjectCoercible = __webpack_require__(4488);
var advanceStringIndex = __webpack_require__(1530);
var getSubstitution = __webpack_require__(647);
var regExpExec = __webpack_require__(7651);

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ 4765:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
var anObject = __webpack_require__(9670);
var requireObjectCoercible = __webpack_require__(4488);
var sameValue = __webpack_require__(1150);
var regExpExec = __webpack_require__(7651);

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ 7268:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('small') }, {
  small: function small() {
    return createHTML(this, 'small', '', '');
  }
});


/***/ }),

/***/ 3123:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
var isRegExp = __webpack_require__(7850);
var anObject = __webpack_require__(9670);
var requireObjectCoercible = __webpack_require__(4488);
var speciesConstructor = __webpack_require__(6707);
var advanceStringIndex = __webpack_require__(1530);
var toLength = __webpack_require__(7466);
var callRegExpExec = __webpack_require__(7651);
var regexpExec = __webpack_require__(2261);
var stickyHelpers = __webpack_require__(2999);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, UNSUPPORTED_Y);


/***/ }),

/***/ 6755:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var getOwnPropertyDescriptor = __webpack_require__(1236).f;
var toLength = __webpack_require__(7466);
var notARegExp = __webpack_require__(3929);
var requireObjectCoercible = __webpack_require__(4488);
var correctIsRegExpLogic = __webpack_require__(4964);
var IS_PURE = __webpack_require__(1913);

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var $startsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ 7397:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.strike` method
// https://tc39.es/ecma262/#sec-string.prototype.strike
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('strike') }, {
  strike: function strike() {
    return createHTML(this, 'strike', '', '');
  }
});


/***/ }),

/***/ 86:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sub') }, {
  sub: function sub() {
    return createHTML(this, 'sub', '', '');
  }
});


/***/ }),

/***/ 623:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createHTML = __webpack_require__(4230);
var forcedStringHTMLMethod = __webpack_require__(3429);

// `String.prototype.sup` method
// https://tc39.es/ecma262/#sec-string.prototype.sup
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sup') }, {
  sup: function sup() {
    return createHTML(this, 'sup', '', '');
  }
});


/***/ }),

/***/ 8702:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $trimEnd = __webpack_require__(3111).end;
var forcedStringTrimMethod = __webpack_require__(6091);

var FORCED = forcedStringTrimMethod('trimEnd');

var trimEnd = FORCED ? function trimEnd() {
  return $trimEnd(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimEnd;

// `String.prototype.{ trimEnd, trimRight }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
$({ target: 'String', proto: true, forced: FORCED }, {
  trimEnd: trimEnd,
  trimRight: trimEnd
});


/***/ }),

/***/ 5674:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $trimStart = __webpack_require__(3111).start;
var forcedStringTrimMethod = __webpack_require__(6091);

var FORCED = forcedStringTrimMethod('trimStart');

var trimStart = FORCED ? function trimStart() {
  return $trimStart(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimStart;

// `String.prototype.{ trimStart, trimLeft }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
$({ target: 'String', proto: true, forced: FORCED }, {
  trimStart: trimStart,
  trimLeft: trimStart
});


/***/ }),

/***/ 3210:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $trim = __webpack_require__(3111).trim;
var forcedStringTrimMethod = __webpack_require__(6091);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ 2526:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var getBuiltIn = __webpack_require__(5005);
var IS_PURE = __webpack_require__(1913);
var DESCRIPTORS = __webpack_require__(9781);
var NATIVE_SYMBOL = __webpack_require__(133);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);
var fails = __webpack_require__(7293);
var has = __webpack_require__(6656);
var isArray = __webpack_require__(3157);
var isObject = __webpack_require__(111);
var anObject = __webpack_require__(9670);
var toObject = __webpack_require__(7908);
var toIndexedObject = __webpack_require__(5656);
var toPrimitive = __webpack_require__(7593);
var createPropertyDescriptor = __webpack_require__(9114);
var nativeObjectCreate = __webpack_require__(30);
var objectKeys = __webpack_require__(1956);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertyNamesExternal = __webpack_require__(1156);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createNonEnumerableProperty = __webpack_require__(8880);
var redefine = __webpack_require__(1320);
var shared = __webpack_require__(2309);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);
var uid = __webpack_require__(9711);
var wellKnownSymbol = __webpack_require__(5112);
var wrappedWellKnownSymbolModule = __webpack_require__(6061);
var defineWellKnownSymbol = __webpack_require__(7235);
var setToStringTag = __webpack_require__(8003);
var InternalStateModule = __webpack_require__(9909);
var $forEach = __webpack_require__(2092).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 4129:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);
var redefineAll = __webpack_require__(2248);
var InternalMetadataModule = __webpack_require__(2423);
var collection = __webpack_require__(7710);
var collectionWeak = __webpack_require__(9320);
var isObject = __webpack_require__(111);
var enforceIternalState = __webpack_require__(9909).enforce;
var NATIVE_WEAK_MAP = __webpack_require__(8536);

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.REQUIRED = true;
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = WeakMapPrototype['delete'];
  var nativeHas = WeakMapPrototype.has;
  var nativeGet = WeakMapPrototype.get;
  var nativeSet = WeakMapPrototype.set;
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete.call(this, key) || state.frozen['delete'](key);
      } return nativeDelete.call(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) || state.frozen.has(key);
      } return nativeHas.call(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
      } return nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else nativeSet.call(this, key, value);
      return this;
    }
  });
}


/***/ }),

/***/ 9810:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var toObject = __webpack_require__(7908);
var toLength = __webpack_require__(7466);
var toInteger = __webpack_require__(9958);
var addToUnscopables = __webpack_require__(1223);

// `Array.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
$({ target: 'Array', proto: true }, {
  at: function at(index) {
    var O = toObject(this);
    var len = toLength(O.length);
    var relativeIndex = toInteger(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : O[k];
  }
});

addToUnscopables('at');


/***/ }),

/***/ 4811:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $filterOut = __webpack_require__(2092).filterOut;
var addToUnscopables = __webpack_require__(1223);

// `Array.prototype.filterOut` method
// https://github.com/tc39/proposal-array-filtering
$({ target: 'Array', proto: true }, {
  filterOut: function filterOut(callbackfn /* , thisArg */) {
    return $filterOut(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('filterOut');


/***/ }),

/***/ 7461:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $findLastIndex = __webpack_require__(9671).findLastIndex;
var addToUnscopables = __webpack_require__(1223);

// `Array.prototype.findLastIndex` method
// https://github.com/tc39/proposal-array-find-from-last
$({ target: 'Array', proto: true }, {
  findLastIndex: function findLastIndex(callbackfn /* , that = undefined */) {
    return $findLastIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('findLastIndex');


/***/ }),

/***/ 3048:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $findLast = __webpack_require__(9671).findLast;
var addToUnscopables = __webpack_require__(1223);

// `Array.prototype.findLast` method
// https://github.com/tc39/proposal-array-find-from-last
$({ target: 'Array', proto: true }, {
  findLast: function findLast(callbackfn /* , that = undefined */) {
    return $findLast(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('findLast');


/***/ }),

/***/ 0:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var isArray = __webpack_require__(3157);

// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = Object.isFrozen;

var isFrozenStringArray = function (array, allowUndefined) {
  if (!isFrozen || !isArray(array) || !isFrozen(array)) return false;
  var index = 0;
  var length = array.length;
  var element;
  while (index < length) {
    element = array[index++];
    if (!(typeof element === 'string' || (allowUndefined && typeof element === 'undefined'))) {
      return false;
    }
  } return length !== 0;
};

// `Array.isTemplateObject` method
// https://github.com/tc39/proposal-array-is-template-object
$({ target: 'Array', stat: true }, {
  isTemplateObject: function isTemplateObject(value) {
    if (!isFrozenStringArray(value, true)) return false;
    var raw = value.raw;
    if (raw.length !== value.length || !isFrozenStringArray(raw, false)) return false;
    return true;
  }
});


/***/ }),

/***/ 3475:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var addToUnscopables = __webpack_require__(1223);
var toObject = __webpack_require__(7908);
var toLength = __webpack_require__(7466);
var defineProperty = __webpack_require__(3070).f;

// `Array.prototype.lastIndex` getter
// https://github.com/keithamus/proposal-array-last
if (DESCRIPTORS && !('lastIndex' in [])) {
  defineProperty(Array.prototype, 'lastIndex', {
    configurable: true,
    get: function lastIndex() {
      var O = toObject(this);
      var len = toLength(O.length);
      return len == 0 ? 0 : len - 1;
    }
  });

  addToUnscopables('lastIndex');
}


/***/ }),

/***/ 6273:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var addToUnscopables = __webpack_require__(1223);
var toObject = __webpack_require__(7908);
var toLength = __webpack_require__(7466);
var defineProperty = __webpack_require__(3070).f;

// `Array.prototype.lastIndex` accessor
// https://github.com/keithamus/proposal-array-last
if (DESCRIPTORS && !('lastItem' in [])) {
  defineProperty(Array.prototype, 'lastItem', {
    configurable: true,
    get: function lastItem() {
      var O = toObject(this);
      var len = toLength(O.length);
      return len == 0 ? undefined : O[len - 1];
    },
    set: function lastItem(value) {
      var O = toObject(this);
      var len = toLength(O.length);
      return O[len == 0 ? 0 : len - 1] = value;
    }
  });

  addToUnscopables('lastItem');
}


/***/ }),

/***/ 3087:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var addToUnscopables = __webpack_require__(1223);
var uniqueBy = __webpack_require__(956);

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
$({ target: 'Array', proto: true }, {
  uniqueBy: uniqueBy
});

addToUnscopables('uniqueBy');


/***/ }),

/***/ 5743:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(5837);


/***/ }),

/***/ 6936:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var hasOwn = __webpack_require__(6656);

// `Object.hasOwn` method
// https://github.com/tc39/proposal-accessible-object-hasownproperty
$({ target: 'Object', stat: true }, {
  hasOwn: hasOwn
});


/***/ }),

/***/ 9964:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var ObjectIterator = __webpack_require__(996);

// `Object.iterateEntries` method
// https://github.com/tc39/proposal-object-iteration
$({ target: 'Object', stat: true }, {
  iterateEntries: function iterateEntries(object) {
    return new ObjectIterator(object, 'entries');
  }
});


/***/ }),

/***/ 5238:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var ObjectIterator = __webpack_require__(996);

// `Object.iterateKeys` method
// https://github.com/tc39/proposal-object-iteration
$({ target: 'Object', stat: true }, {
  iterateKeys: function iterateKeys(object) {
    return new ObjectIterator(object, 'keys');
  }
});


/***/ }),

/***/ 4987:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var ObjectIterator = __webpack_require__(996);

// `Object.iterateValues` method
// https://github.com/tc39/proposal-object-iteration
$({ target: 'Object', stat: true }, {
  iterateValues: function iterateValues(object) {
    return new ObjectIterator(object, 'values');
  }
});


/***/ }),

/***/ 4582:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var ReflectMetadataModule = __webpack_require__(8845);
var anObject = __webpack_require__(9670);

var toMetadataKey = ReflectMetadataModule.toKey;
var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

// `Reflect.defineMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  defineMetadata: function defineMetadata(metadataKey, metadataValue, target /* , targetKey */) {
    var targetKey = arguments.length < 4 ? undefined : toMetadataKey(arguments[3]);
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 7896:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var ReflectMetadataModule = __webpack_require__(8845);
var anObject = __webpack_require__(9670);

var toMetadataKey = ReflectMetadataModule.toKey;
var getOrCreateMetadataMap = ReflectMetadataModule.getMap;
var store = ReflectMetadataModule.store;

// `Reflect.deleteMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
    if (metadataMap.size) return true;
    var targetMetadata = store.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store['delete'](target);
  }
});


/***/ }),

/***/ 8558:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
var Set = __webpack_require__(189);
var ReflectMetadataModule = __webpack_require__(8845);
var anObject = __webpack_require__(9670);
var getPrototypeOf = __webpack_require__(9518);
var iterate = __webpack_require__(408);

var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
var toMetadataKey = ReflectMetadataModule.toKey;

var from = function (iter) {
  var result = [];
  iterate(iter, result.push, { that: result });
  return result;
};

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

// `Reflect.getMetadataKeys` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
    return ordinaryMetadataKeys(anObject(target), targetKey);
  }
});


/***/ }),

/***/ 2647:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var ReflectMetadataModule = __webpack_require__(8845);
var anObject = __webpack_require__(9670);
var getPrototypeOf = __webpack_require__(9518);

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

// `Reflect.getMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryGetMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 7507:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var ReflectMetadataModule = __webpack_require__(8845);
var anObject = __webpack_require__(9670);

var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.getOwnMetadataKeys` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
    return ordinaryOwnMetadataKeys(anObject(target), targetKey);
  }
});


/***/ }),

/***/ 4018:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var ReflectMetadataModule = __webpack_require__(8845);
var anObject = __webpack_require__(9670);

var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.getOwnMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryGetOwnMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 1605:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var ReflectMetadataModule = __webpack_require__(8845);
var anObject = __webpack_require__(9670);
var getPrototypeOf = __webpack_require__(9518);

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

// `Reflect.hasMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryHasMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 9076:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var ReflectMetadataModule = __webpack_require__(8845);
var anObject = __webpack_require__(9670);

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.hasOwnMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryHasOwnMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 4999:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var ReflectMetadataModule = __webpack_require__(8845);
var anObject = __webpack_require__(9670);

var toMetadataKey = ReflectMetadataModule.toKey;
var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

// `Reflect.metadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  metadata: function metadata(metadataKey, metadataValue) {
    return function decorator(target, key) {
      ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetadataKey(key));
    };
  }
});


/***/ }),

/***/ 6035:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var charAt = __webpack_require__(8710).charAt;
var fails = __webpack_require__(7293);

var FORCED = fails(function () {
  return '𠮷'.at(0) !== '𠮷';
});

// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
$({ target: 'String', proto: true, forced: FORCED }, {
  at: function at(pos) {
    return charAt(this, pos);
  }
});


/***/ }),

/***/ 7501:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var createIteratorConstructor = __webpack_require__(4994);
var requireObjectCoercible = __webpack_require__(4488);
var InternalStateModule = __webpack_require__(9909);
var StringMultibyteModule = __webpack_require__(8710);

var codeAt = StringMultibyteModule.codeAt;
var charAt = StringMultibyteModule.charAt;
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// TODO: unify with String#@@iterator
var $StringIterator = createIteratorConstructor(function StringIterator(string) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: string,
    index: 0
  });
}, 'String', function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: { codePoint: codeAt(point, 0), position: index }, done: false };
});

// `String.prototype.codePoints` method
// https://github.com/tc39/proposal-string-prototype-codepoints
$({ target: 'String', proto: true }, {
  codePoints: function codePoints() {
    return new $StringIterator(String(requireObjectCoercible(this)));
  }
});


/***/ }),

/***/ 3728:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(6373);


/***/ }),

/***/ 7207:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(8757);


/***/ }),

/***/ 5738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#gmid{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}#gmid #gd3,#gmid #gd4{-webkit-box-flex:0;-moz-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}#gmid #gd5{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto;width:auto}div#gd5{position:relative;z-index:3}div#gd5 #ehs-introduce-box img{height:auto;margin:0;width:auto}#ehs-introduce-box{-webkit-box-orient:vertical;-moz-box-orient:vertical;background:#edebdf;-webkit-border-radius:0 0 5px 0;-moz-border-radius:0 0 5px 0;border-radius:0 0 5px 0;bottom:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;left:0;overflow:auto;position:absolute;right:-5px;text-align:left;top:0}#ehs-introduce-box,#ehs-introduce-box .ehs-title{-webkit-box-direction:normal;-moz-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}#ehs-introduce-box .ehs-title{-webkit-box-flex:0;-moz-box-flex:0;-webkit-box-orient:horizontal;-moz-box-orient:horizontal;border-bottom:1px solid #5c0d12;-webkit-flex:none;-ms-flex:none;flex:none;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;line-height:14px;margin:0 8px;padding:3px 0}#ehs-introduce-box .ehs-title .ehs-cn{font-weight:700}#ehs-introduce-box .ehs-title .ehs-cn,#ehs-introduce-box .ehs-title .ehs-en{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}#ehs-introduce-box .ehs-title .ehs-en{opacity:.7}#ehs-introduce-box .ehs-title>div{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto;overflow:hidden}#ehs-introduce-box .ehs-title>span{-webkit-box-flex:0;-moz-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none;overflow:hidden}#ehs-introduce-box .ehs-close{cursor:pointer;font-size:16px;line-height:28px;opacity:.8;text-align:center;width:20px}#ehs-introduce-box .ehs-close:hover{opacity:1}#ehs-introduce-box .ehs-content{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto;overflow:auto;padding:8px}#ehs-introduce-box .ehs-content::-webkit-scrollbar{width:2px}#ehs-introduce-box .ehs-content abbr[title]{padding:0 1px}#ehs-introduce-box .ehs-content abbr[title]:after{content:\" (\" attr(title) \")\";font-size:90%}#ehs-introduce-box .ehs-href{-webkit-box-flex:0;-moz-box-flex:0;border-top:1px solid #5c0d12;-webkit-flex:none;-ms-flex:none;flex:none;line-height:24px;margin:0 8px}#ehs-introduce-box .ehs-href:empty{display:none}#ehs-introduce-box:empty{display:none}#ehs-introduce-box img{max-width:100%}body.ex #ehs-introduce-box{background:#4f535b}body.ex #ehs-introduce-box .ehs-title{border-bottom:1px solid #000}body.ex #ehs-introduce-box .ehs-href{border-top:1px solid #000}.ehs-no-translation{padding-top:80px;text-align:center}.ehs-no-translation .text{padding:8px}.ehs-no-intro,.ehs-no-translation .text{font-size:16px;font-weight:700;opacity:.3}.ehs-no-intro{padding-top:88px;text-align:center}body.ehs-image-level-0 #ehs-introduce-box .ehs-content img{display:none}body.ehs-image-level-1 #ehs-introduce-box .ehs-content img[nsfw]{display:none}body.ehs-image-level-2 #ehs-introduce-box .ehs-content img[nsfw=R18G]{display:none}", "",{"version":3,"sources":["webpack://./src/plugin/introduce/index.less"],"names":[],"mappings":"AAAA,MACI,mBAAA,CAAA,oBAAA,CAAA,gBAAA,CAAA,mBAAA,CAAA,YACJ,CAFA,sBAIQ,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,aAAA,CAAA,SAER,CANA,WAOQ,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,aAAA,CAAA,SAAA,CACA,UAER,CAEA,QAEI,iBAAA,CADA,SACJ,CAFA,+BAMQ,WAAA,CAFA,QAAA,CACA,UAER,CAGA,mBAUI,2BAAA,CAAA,wBAAA,CAHA,kBAAA,CAIA,+BAAA,CAAA,4BAAA,CAAA,uBAAA,CAPA,QAAA,CAMA,6BAAA,CAAA,yBAAA,CAAA,qBAAA,CARA,MAAA,CAIA,aAAA,CALA,iBAAA,CAIA,UAAA,CAGA,eAAA,CALA,KAOJ,CAVA,iDAUI,4BAAA,CAAA,yBAAA,CADA,mBAAA,CAAA,oBAAA,CAAA,gBAAA,CAAA,mBAAA,CAAA,YAUJ,CAnBA,8BAcQ,kBAAA,CAAA,eAAA,CAMA,6BAAA,CAAA,0BAAA,CAJA,+BAAA,CAFA,iBAAA,CAAA,aAAA,CAAA,SAAA,CAMA,0BAAA,CAAA,sBAAA,CAAA,kBAAA,CAHA,gBAAA,CAFA,YAAA,CAGA,aACR,CAnBA,sCAuBY,eAEZ,CAzBA,4EAwBY,eAAA,CACA,yBAAA,CAAA,sBAAA,CACA,kBAKZ,CA/BA,sCA6BY,UAEZ,CA/BA,kCAqCY,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,aAAA,CAAA,SAAA,CADA,eADZ,CAnCA,mCAyCY,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,aAAA,CAAA,SAAA,CADA,eADZ,CAvCA,8BA6CQ,cAAA,CACA,cAAA,CAEA,gBAAA,CADA,UAAA,CAGA,iBAAA,CADA,UAFR,CAIQ,oCACI,SAFZ,CAlDA,gCAwDQ,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,aAAA,CAAA,SAAA,CACA,aAAA,CACA,WAHR,CAIQ,mDACI,SAFZ,CA1DA,4CA+DY,aAFZ,CAGY,kDACI,4BAAA,CACA,aADhB,CAjEA,6BAuEQ,kBAAA,CAAA,eAAA,CACA,4BAAA,CADA,iBAAA,CAAA,aAAA,CAAA,SAAA,CAGA,gBAAA,CADA,YAFR,CAIQ,mCACI,YAFZ,CAMI,yBACI,YAJR,CA7EA,uBAoFQ,cAJR,CAQA,2BAEQ,kBAPR,CAKA,sCAIY,4BANZ,CAEA,qCAOY,yBANZ,CAWA,oBAEI,gBAAA,CADA,iBARJ,CAOA,0BAMQ,WAPR,CAWA,wCANQ,cAAA,CAGA,eAAA,CAFA,UACR,CAIA,cAEI,gBAAA,CADA,iBALJ,CAcA,2DAEQ,YAZR,CAeA,iEAEQ,YAdR,CAiBA,sEAEQ,YAhBR","sourcesContent":["#gmid {\n    display: flex;\n    #gd3,\n    #gd4 {\n        flex: none;\n    }\n    #gd5 {\n        flex: auto;\n        width: auto;\n    }\n}\n\ndiv#gd5 {\n    z-index: 3;\n    position: relative;\n    #ehs-introduce-box img {\n        margin: 0;\n        width: auto;\n        height: auto;\n    }\n}\n\n#ehs-introduce-box {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    bottom: 0;\n    right: -5px;\n    overflow: auto;\n    background: #edebdf;\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n    border-radius: 0 0 5px 0;\n\n    .ehs-title {\n        flex: none;\n        margin: 0 8px;\n        border-bottom: 1px solid #5c0d12;\n        line-height: 14px;\n        padding: 3px 0;\n        display: flex;\n        flex-direction: row;\n\n        .ehs-cn {\n            font-weight: bold;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n        }\n        .ehs-en {\n            opacity: 0.7;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n        }\n\n        > div {\n            overflow: hidden;\n            flex: auto;\n        }\n        > span {\n            overflow: hidden;\n            flex: none;\n        }\n    }\n    .ehs-close {\n        cursor: pointer;\n        font-size: 16px;\n        opacity: 0.8;\n        line-height: 28px;\n        width: 20px;\n        text-align: center;\n        &:hover {\n            opacity: 1;\n        }\n    }\n    .ehs-content {\n        flex: auto;\n        overflow: auto;\n        padding: 8px;\n        &::-webkit-scrollbar {\n            width: 2px;\n        }\n        abbr[title] {\n            padding: 0 1px;\n            &::after {\n                content: ' (' attr(title) ')';\n                font-size: 90%;\n            }\n        }\n    }\n    .ehs-href {\n        flex: none;\n        border-top: 1px solid #5c0d12;\n        margin: 0 8px;\n        line-height: 24px;\n        &:empty {\n            display: none;\n        }\n    }\n\n    &:empty {\n        display: none;\n    }\n    img {\n        max-width: 100%;\n    }\n}\n\nbody.ex {\n    #ehs-introduce-box {\n        background: #4f535b;\n        .ehs-title {\n            border-bottom: 1px solid #000;\n        }\n        .ehs-href {\n            border-top: 1px solid #000;\n        }\n    }\n}\n\n.ehs-no-translation {\n    text-align: center;\n    padding-top: 80px;\n    .text {\n        font-size: 16px;\n        opacity: 0.3;\n        padding: 8px;\n        font-weight: bold;\n    }\n}\n.ehs-no-intro {\n    text-align: center;\n    padding-top: 88px;\n    font-size: 16px;\n    opacity: 0.3;\n    font-weight: bold;\n}\n\n//0:hide, 1:non-h 2: R18 3: R18G\n/* nsfw=\"R18\" */\nbody.ehs-image-level-0 #ehs-introduce-box .ehs-content {\n    img {\n        display: none;\n    }\n}\nbody.ehs-image-level-1 #ehs-introduce-box .ehs-content {\n    img[nsfw] {\n        display: none;\n    }\n}\nbody.ehs-image-level-2 #ehs-introduce-box .ehs-content {\n    img[nsfw='R18G'] {\n        display: none;\n    }\n}\nbody.ehs-image-level-3 {\n    // 所有都显示\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;-moz-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}#eh-syringe-popup-root{font-size:medium;line-height:normal;text-align:left;text-align:initial}#eh-syringe-popup-root input,#eh-syringe-popup-root table,#eh-syringe-popup-root td,#eh-syringe-popup-root th{background:inherit;color:inherit}#eh-syringe-popup-root input{border:none}#eh-syringe-popup-root input[type=checkbox],#eh-syringe-popup-root input[type=radio]{position:static;top:auto}#eh-syringe-popup-root p{margin:.8em 0}#eh-syringe-popup-root a{background:rgba(0,0,0,0);text-decoration:none;-webkit-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;-o-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;-moz-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;transition:all .28s cubic-bezier(.4,0,.2,1) 0s}#eh-syringe-popup-root,#eh-syringe-popup-root .panel{background:#f0f0f0;color:#111}#eh-syringe-popup-root #info{color:#8041a6}#eh-syringe-popup-root .hasNew{color:#79252b}#eh-syringe-popup-root a{color:#8041a6}#eh-syringe-popup-root a:hover{color:#491774}#eh-syringe-popup-root a:active{color:#ae79c9}#eh-syringe-popup-root a.minor{color:#a5a3a6}#eh-syringe-popup-root a.minor:hover{color:#d2cdd4}#eh-syringe-popup-root a.minor:active{color:#838185}#eh-syringe-popup-root .logo svg [fill-bg]{fill:#f0f0f0}#eh-syringe-popup-root .logo svg [fill-accent]{fill:#8041a6}#eh-syringe-popup-root .logo svg [fill-sa]{fill:#cfbadc}#eh-syringe-popup-root .logo svg [stroke-bg]{stroke:#f0f0f0}#eh-syringe-popup-root .logo svg [stroke-accent]{stroke:#8041a6}#eh-syringe-popup-root .logo svg [stroke-sa]{stroke:#cfbadc}#eh-syringe-popup-root .action{background:#f0f0f0;color:#8041a6}#eh-syringe-popup-root .action.primary{background:#8041a6;color:#f0f0f0}#eh-syringe-popup-root .action.primary:hover{background:#491774}#eh-syringe-popup-root .action.primary:active{background:#ae79c9}#eh-syringe-popup-root #settingForm .checkbox-item svg path{stroke:#8041a6}#eh-syringe-popup-root #settingForm input[type=checkbox]{border:2px solid #a09da6}#eh-syringe-popup-root #settingForm input[type=checkbox]:checked{border:2px solid #8041a6}#eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-runnable-track{border:1px solid #ae79c9}#eh-syringe-popup-root #settingForm input[type=range]::-moz-range-track{border:1px solid #ae79c9}#eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-thumb{background:#f0f0f0;border:2px solid #8041a6}#eh-syringe-popup-root #settingForm input[type=range]::-moz-range-thumb{background:#f0f0f0;border:2px solid #8041a6}#eh-syringe-popup-root #settingForm input[type=range]:focus::-webkit-slider-thumb{border:2px solid #8041a6;-webkit-box-shadow:0 0 7px rgba(0,0,0,.2);box-shadow:0 0 7px rgba(0,0,0,.2)}#eh-syringe-popup-root #settingForm input[type=range]:focus::-moz-range-thumb{border:2px solid #8041a6;-moz-box-shadow:0 0 7px rgba(0,0,0,.2);box-shadow:0 0 7px rgba(0,0,0,.2)}#eh-syringe-popup-root #settingForm input[type=range]:active::-webkit-slider-thumb{background:#fdfdfd;border:2px solid #8041a6;-webkit-box-shadow:0 0 7px 1px rgba(0,0,0,.2);box-shadow:0 0 7px 1px rgba(0,0,0,.2)}#eh-syringe-popup-root #settingForm input[type=range]:active::-moz-range-thumb{background:#fdfdfd;border:2px solid #8041a6;-moz-box-shadow:0 0 7px 1px rgba(0,0,0,.2);box-shadow:0 0 7px 1px rgba(0,0,0,.2)}body.ex #eh-syringe-popup-root,body.ex #eh-syringe-popup-root .panel{background:#313131;color:#eee}body.ex #eh-syringe-popup-root #info{color:#ce90f1}body.ex #eh-syringe-popup-root .hasNew{color:#cb8d93}body.ex #eh-syringe-popup-root a{color:#ce90f1}body.ex #eh-syringe-popup-root a:hover{color:#e2b9f7}body.ex #eh-syringe-popup-root a:active{color:#b669e9}body.ex #eh-syringe-popup-root a.minor{color:#a5a3a6}body.ex #eh-syringe-popup-root a.minor:hover{color:#d2cdd4}body.ex #eh-syringe-popup-root a.minor:active{color:#838185}body.ex #eh-syringe-popup-root .logo svg [fill-bg]{fill:#313131}body.ex #eh-syringe-popup-root .logo svg [fill-accent]{fill:#ce90f1}body.ex #eh-syringe-popup-root .logo svg [fill-sa]{fill:#987ca8}body.ex #eh-syringe-popup-root .logo svg [stroke-bg]{stroke:#313131}body.ex #eh-syringe-popup-root .logo svg [stroke-accent]{stroke:#ce90f1}body.ex #eh-syringe-popup-root .logo svg [stroke-sa]{stroke:#987ca8}body.ex #eh-syringe-popup-root .action{background:#313131;color:#ce90f1}body.ex #eh-syringe-popup-root .action.primary{background:#ce90f1;color:#313131}body.ex #eh-syringe-popup-root .action.primary:hover{background:#e2b9f7}body.ex #eh-syringe-popup-root .action.primary:active{background:#b669e9}body.ex #eh-syringe-popup-root #settingForm .checkbox-item svg path{stroke:#ce90f1}body.ex #eh-syringe-popup-root #settingForm input[type=checkbox]{border:2px solid #a09da6}body.ex #eh-syringe-popup-root #settingForm input[type=checkbox]:checked{border:2px solid #ce90f1}body.ex #eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-runnable-track{border:1px solid #b669e9}body.ex #eh-syringe-popup-root #settingForm input[type=range]::-moz-range-track{border:1px solid #b669e9}body.ex #eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-thumb{background:#313131;border:2px solid #ce90f1}body.ex #eh-syringe-popup-root #settingForm input[type=range]::-moz-range-thumb{background:#313131;border:2px solid #ce90f1}body.ex #eh-syringe-popup-root #settingForm input[type=range]:focus::-webkit-slider-thumb{border:2px solid #ce90f1;-webkit-box-shadow:0 0 7px rgba(0,0,0,.2);box-shadow:0 0 7px rgba(0,0,0,.2)}body.ex #eh-syringe-popup-root #settingForm input[type=range]:focus::-moz-range-thumb{border:2px solid #ce90f1;-moz-box-shadow:0 0 7px rgba(0,0,0,.2);box-shadow:0 0 7px rgba(0,0,0,.2)}body.ex #eh-syringe-popup-root #settingForm input[type=range]:active::-webkit-slider-thumb{background:#131313;border:2px solid #ce90f1;-webkit-box-shadow:0 0 7px 1px rgba(0,0,0,.2);box-shadow:0 0 7px 1px rgba(0,0,0,.2)}body.ex #eh-syringe-popup-root #settingForm input[type=range]:active::-moz-range-thumb{background:#131313;border:2px solid #ce90f1;-moz-box-shadow:0 0 7px 1px rgba(0,0,0,.2);box-shadow:0 0 7px 1px rgba(0,0,0,.2)}#eh-syringe-popup-root{font-family:sans-serif;font-size:12pt;max-width:400px;min-width:240px;overflow:hidden;padding:1px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}#eh-syringe-popup-root .hidden{display:none;visibility:hidden}#eh-syringe-popup-root .panel{-webkit-box-orient:vertical;-webkit-box-direction:normal;-moz-box-orient:vertical;-moz-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto}#eh-syringe-popup-root .panel,#eh-syringe-popup-root .panel .header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}#eh-syringe-popup-root .panel .header{line-height:1;margin:16px}#eh-syringe-popup-root .panel .header>.cushion{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}#eh-syringe-popup-root .panel .header span{color:#a5a3a6}#eh-syringe-popup-root .panel .content{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto;margin:0 16px;overflow:visible}#eh-syringe-popup-root .panel .action{-webkit-tap-highlight-color:transparent;border:1px solid #ddd;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:block;font-size:16px;line-height:36px;margin:16px;min-width:64px;outline:0;overflow:visible;padding:0 16px;position:relative;text-align:center;text-decoration:none;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background .4s cubic-bezier(.25,.8,.25,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);transition:background .4s cubic-bezier(.25,.8,.25,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);-o-transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1);-moz-transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1),-moz-box-shadow .28s cubic-bezier(.4,0,.2,1);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1),-moz-box-shadow .28s cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}#eh-syringe-popup-root .panel .action.primary{border:none;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);-moz-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}#eh-syringe-popup-root .panel .action.primary:active{border:none;-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);-moz-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}#eh-syringe-popup-root .panel .action:disabled{opacity:.6}#eh-syringe-popup-root .panel .action:focus{border:1px solid #888}#eh-syringe-popup-root #mainPanel{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);-webkit-transition:opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);-o-transition:opacity .28s cubic-bezier(.4,0,.2,1),-o-transform .28s cubic-bezier(.4,0,.2,1);-moz-transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1),-o-transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root #mainPanel.hide{-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9);transform:scale(.9)}#eh-syringe-popup-root .logo-box{margin:-16px;overflow:hidden;pointer-events:none;position:relative}#eh-syringe-popup-root .logo{margin:20px 0;text-align:center;-webkit-transform:scale(1) rotate(-45deg);-moz-transform:scale(1) rotate(-45deg);-ms-transform:scale(1) rotate(-45deg);-o-transform:scale(1) rotate(-45deg);transform:scale(1) rotate(-45deg);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);-o-transition:-o-transform .28s cubic-bezier(.4,0,.2,1);-moz-transition:transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1),-o-transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root .logo #Syringe{pointer-events:all}#eh-syringe-popup-root .logo #Enema{opacity:0;-webkit-transform-origin:61px 86px;-moz-transform-origin:61px 86px;-ms-transform-origin:61px 86px;-o-transform-origin:61px 86px;transform-origin:61px 86px}#eh-syringe-popup-root .logo #Enema2{opacity:1}#eh-syringe-popup-root .logo #Enema,#eh-syringe-popup-root .logo #Enema2,#eh-syringe-popup-root .logo #PushRod{-webkit-transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);-o-transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),-o-transform .28s cubic-bezier(.4,0,.2,1);-moz-transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1);transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1);transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1),-o-transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root .logo.prominent{-webkit-transform:scale(1.6) rotate(0deg);-moz-transform:scale(1.6) rotate(0deg);-ms-transform:scale(1.6) rotate(0deg);-o-transform:scale(1.6) rotate(0deg);transform:scale(1.6) rotate(0deg)}#eh-syringe-popup-root .logo.prominent #Enema2{opacity:0}#eh-syringe-popup-root .logo.prominent #Enema{opacity:1}#eh-syringe-popup-root .logo.prominent.injection{-webkit-transform:scale(1.6) rotate(0deg) translate(-10px);-moz-transform:scale(1.6) rotate(0deg) translate(-10px);-ms-transform:scale(1.6) rotate(0deg) translate(-10px);-o-transform:scale(1.6) rotate(0deg) translate(-10px);transform:scale(1.6) rotate(0deg) translate(-10px)}#eh-syringe-popup-root .logo.prominent.injection #Enema,#eh-syringe-popup-root .logo.prominent.injection #Enema2,#eh-syringe-popup-root .logo.prominent.injection #PushRod{-webkit-transition:width .6s cubic-bezier(.4,0,.2,1),-webkit-transform .6s cubic-bezier(.4,0,.2,1);transition:width .6s cubic-bezier(.4,0,.2,1),-webkit-transform .6s cubic-bezier(.4,0,.2,1);-o-transition:width .6s cubic-bezier(.4,0,.2,1),-o-transform .6s cubic-bezier(.4,0,.2,1);-moz-transition:width .6s cubic-bezier(.4,0,.2,1),transform .6s cubic-bezier(.4,0,.2,1),-moz-transform .6s cubic-bezier(.4,0,.2,1);transition:width .6s cubic-bezier(.4,0,.2,1),transform .6s cubic-bezier(.4,0,.2,1);transition:width .6s cubic-bezier(.4,0,.2,1),transform .6s cubic-bezier(.4,0,.2,1),-webkit-transform .6s cubic-bezier(.4,0,.2,1),-moz-transform .6s cubic-bezier(.4,0,.2,1),-o-transform .6s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root #info{bottom:30px;font-size:16px;height:24px;left:0;line-height:24px;position:absolute;right:0;text-align:center}#eh-syringe-popup-root .monospace{font-family:Menlo,Consolas,Source Code Pro,Inconsolata,Monaco,Courier New,monospace}#eh-syringe-popup-root table{font-size:14px}#eh-syringe-popup-root #settingPanel{bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1);-webkit-transition:opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);-o-transition:opacity .28s cubic-bezier(.4,0,.2,1),-o-transform .28s cubic-bezier(.4,0,.2,1);-moz-transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1),-o-transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root #settingPanel.show{opacity:1;pointer-events:auto;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}#eh-syringe-popup-root #settingPanel #settingForm{font-size:10pt;line-height:12pt}#eh-syringe-popup-root .checkbox-item{padding:4px 0}#eh-syringe-popup-root .checkbox-item label{display:block;position:relative}#eh-syringe-popup-root .checkbox-item svg{height:10px;left:3px;position:absolute;top:3px;width:10px}#eh-syringe-popup-root .checkbox-item svg path{stroke-dasharray:1000;stroke-dashoffset:1000;stroke-width:16px;stroke-linecap:round;stroke-linejoin:round;fill:none}#eh-syringe-popup-root .checkbox-item svg.checked path{stroke-dasharray:113.137,113.137;stroke-dashoffset:0;-webkit-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;-o-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;-moz-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;transition:all .28s cubic-bezier(.4,0,.2,1) 0s}#eh-syringe-popup-root .checkbox-item svg.checked path+path{-webkit-transition:all .28s cubic-bezier(.4,0,.2,1) .28s;-o-transition:all .28s cubic-bezier(.4,0,.2,1) .28s;-moz-transition:all .28s cubic-bezier(.4,0,.2,1) .28s;transition:all .28s cubic-bezier(.4,0,.2,1) .28s}#eh-syringe-popup-root .checkbox-item input[type=checkbox]{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:16px;margin-right:2px;-webkit-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;-o-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;-moz-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;transition:all .28s cubic-bezier(.4,0,.2,1) 0s;vertical-align:top;width:16px}#eh-syringe-popup-root .checkbox-item input[type=checkbox]:focus{outline:none}#eh-syringe-popup-root #settingForm input[type=range]{appearance:none;-moz-appearance:none;-webkit-appearance:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;width:100%}#eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-runnable-track{-webkit-border-radius:10px;border-radius:10px;-webkit-box-sizing:border-box;box-sizing:border-box;height:6px}#eh-syringe-popup-root #settingForm input[type=range]:focus{outline:none}#eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-thumb{appearance:none;-moz-appearance:none;-webkit-appearance:none;-webkit-border-radius:50%;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;height:16px;margin-top:-6px;-webkit-transition:all .28s cubic-bezier(.4,0,.2,1);transition:all .28s cubic-bezier(.4,0,.2,1);width:16px}#eh-syringe-popup-root #settingForm input[type=range]::-moz-range-track{-moz-border-radius:10px;border-radius:10px;-moz-box-sizing:border-box;box-sizing:border-box;height:6px}#eh-syringe-popup-root #settingForm input[type=range]::-moz-range-thumb{appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-border-radius:50%;border-radius:50%;-moz-box-sizing:border-box;box-sizing:border-box;height:16px;margin-top:-6px;-moz-transition:all .28s cubic-bezier(.4,0,.2,1);transition:all .28s cubic-bezier(.4,0,.2,1);width:16px}#eh-syringe-popup-root #settingForm h3 span{font-size:20pt;font-weight:400}#eh-syringe-popup-root .image-level{margin:0 4px}#eh-syringe-popup-root .range-box{margin:5px}#eh-syringe-popup-root .range-label{-webkit-box-pack:justify;-moz-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;justify-content:space-between}#eh-syringe-popup-root .range-label a{-webkit-box-flex:0;-moz-box-flex:0;display:inline-block;-webkit-flex:none;-ms-flex:none;flex:none;font-size:10pt;text-align:center;width:30px}", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css","webpack://./src/plugin/popup/index.less"],"names":[],"mappings":"AAAA,2EAA2E,CAU3E,KAEE,6BAA8B,CAD9B,gBAEF,CASA,KACE,QACF,CAMA,KACE,aACF,CAOA,GACE,aAAc,CACd,cACF,CAUA,GACE,8BAAuB,CAAvB,2BAAuB,CAAvB,sBAAuB,CACvB,QAAS,CACT,gBACF,CAOA,IACE,+BAAiC,CACjC,aACF,CASA,EACE,4BACF,CAOA,YACE,kBAAmB,CACnB,yBAA0B,CAC1B,wCAAiC,CAAjC,qCAAiC,CAAjC,gCACF,CAMA,SAEE,kBACF,CAOA,cAGE,+BAAiC,CACjC,aACF,CAMA,MACE,aACF,CAOA,QAEE,aAAc,CACd,aAAc,CACd,iBAAkB,CAClB,uBACF,CAEA,IACE,aACF,CAEA,IACE,SACF,CASA,IACE,iBACF,CAUA,sCAKE,mBAAoB,CACpB,cAAe,CACf,gBAAiB,CACjB,QACF,CAOA,aAEE,gBACF,CAOA,cAEE,mBACF,CAMA,gDAIE,yBACF,CAMA,wHAIE,iBAAkB,CAClB,SACF,CAMA,4GAIE,6BACF,CAMA,SACE,0BACF,CASA,OACE,6BAAsB,CAAtB,0BAAsB,CAAtB,qBAAsB,CACtB,aAAc,CACd,aAAc,CACd,cAAe,CACf,SAAU,CACV,kBACF,CAMA,SACE,uBACF,CAMA,SACE,aACF,CAOA,6BAEE,6BAAsB,CAAtB,0BAAsB,CAAtB,qBAAsB,CACtB,SACF,CAMA,kFAEE,WACF,CAOA,cACE,4BAA6B,CAC7B,mBACF,CAMA,yCACE,uBACF,CAOA,6BACE,yBAA0B,CAC1B,YACF,CASA,QACE,aACF,CAMA,QACE,iBACF,CASA,SACE,YACF,CAMA,SACE,YACF,CCzVA,uBAEI,gBAAA,CACA,kBAAA,CAFA,eAAA,CAAA,kBACJ,CAFA,8GAQQ,kBAAA,CACA,aAAR,CATA,6BAaQ,WADR,CAZA,qFAkBQ,eAAA,CACA,QAFR,CAjBA,yBAsBQ,aAFR,CApBA,yBAyBQ,wBAAA,CAEA,oBAAA,CADA,sDAAA,CAAA,iDAAA,CAAA,mDAAA,CAAA,8CADR,CASI,qDAEI,kBAAA,CACA,UAPR,CAwHA,6BA7GQ,aARR,CAqHA,+BA1GQ,aARR,CAkHA,yBAvGQ,aARR,CASQ,+BACI,aAPZ,CASQ,gCACI,aAPZ,CASQ,+BACI,aAPZ,CAQY,qCACI,aANhB,CAQY,sCACI,aANhB,CAgGA,2CAnFY,YAVZ,CA6FA,+CAhFY,YAVZ,CA0FA,2CA7EY,YAVZ,CAuFA,6CA1EY,cAVZ,CAoFA,iDAvEY,cAVZ,CAiFA,6CApEY,cAVZ,CA8EA,+BA/DQ,kBAAA,CACA,aAZR,CAcQ,uCACI,kBAAA,CACA,aAZZ,CAcQ,6CACI,kBAZZ,CAcQ,8CACI,kBAZZ,CAgEA,4DA9CY,cAfZ,CA6DA,yDA1CY,wBAhBZ,CAiBY,iEACI,wBAfhB,CAoBY,qFACI,wBAlBhB,CAoBY,wEACI,wBAlBhB,CAoBY,4EACI,kBAAA,CACA,wBAlBhB,CAoBY,wEACI,kBAAA,CACA,wBAlBhB,CAoBY,kFACI,wBAAA,CACA,yCAAA,CAAA,iCAlBhB,CAoBY,8EACI,wBAAA,CACA,sCAAA,CAAA,iCAlBhB,CAoBY,mFAEI,kBAAA,CADA,wBAAA,CAEA,6CAAA,CAAA,qCAlBhB,CAoBY,+EAEI,kBAAA,CADA,wBAAA,CAEA,0CAAA,CAAA,qCAlBhB,CA7FI,qEAEI,kBAAA,CACA,UA+FR,CAyBA,qCApHQ,aA8FR,CAsBA,uCAjHQ,aA8FR,CAmBA,iCA9GQ,aA8FR,CA7FQ,uCACI,aA+FZ,CA7FQ,wCACI,aA+FZ,CA7FQ,uCACI,aA+FZ,CA9FY,6CACI,aAgGhB,CA9FY,8CACI,aAgGhB,CACA,mDA1FY,YA4FZ,CAFA,uDAvFY,YA4FZ,CALA,mDApFY,YA4FZ,CARA,qDAjFY,cA4FZ,CAXA,yDA9EY,cA4FZ,CAdA,qDA3EY,cA4FZ,CAjBA,uCAtEQ,kBAAA,CACA,aA0FR,CAxFQ,+CACI,kBAAA,CACA,aA0FZ,CAxFQ,qDACI,kBA0FZ,CAxFQ,sDACI,kBA0FZ,CA/BA,oEArDY,cAuFZ,CAlCA,iEAjDY,wBAsFZ,CArFY,yEACI,wBAuFhB,CAlFY,6FACI,wBAoFhB,CAlFY,gFACI,wBAoFhB,CAlFY,oFACI,kBAAA,CACA,wBAoFhB,CAlFY,gFACI,kBAAA,CACA,wBAoFhB,CAlFY,0FACI,wBAAA,CACA,yCAAA,CAAA,iCAoFhB,CAlFY,sFACI,wBAAA,CACA,sCAAA,CAAA,iCAoFhB,CAlFY,2FAEI,kBAAA,CADA,wBAAA,CAEA,6CAAA,CAAA,qCAoFhB,CAlFY,uFAEI,kBAAA,CADA,wBAAA,CAEA,0CAAA,CAAA,qCAoFhB,CAhEA,uBAGI,sBAAA,CACA,cAAA,CAGA,eAAA,CACA,eAAA,CAPA,eAAA,CAKA,WAAA,CAGA,iBAAA,CAJA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAHA,kBAyEJ,CA3EA,+BAaQ,YAAA,CADA,iBAmER,CA/EA,8BAmBQ,2BAAA,CAAA,4BAAA,CAAA,wBAAA,CAAA,yBAAA,CAAA,6BAAA,CAAA,yBAAA,CAAA,qBAAA,CAFA,aAmER,CApFA,oEAkBQ,mBAAA,CAAA,oBAAA,CAAA,gBAAA,CAAA,mBAAA,CAAA,YAuER,CAzFA,sCAuBY,aAAA,CADA,WAmEZ,CAzFA,+CA2BgB,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,aAAA,CAAA,SAiEhB,CA5FA,2CA8BgB,aAiEhB,CA/FA,uCAoCY,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,aAAA,CAAA,SAAA,CADA,aAAA,CAEA,gBA+DZ,CApGA,sCAkDY,uCAAA,CASA,qBAAA,CAHA,yBAAA,CAAA,sBAAA,CAAA,iBAAA,CAXA,6BAAA,CAAA,0BAAA,CAAA,qBAAA,CAGA,cAAA,CAPA,aAAA,CAEA,cAAA,CADA,gBAAA,CAEA,WAAA,CAUA,cAAA,CALA,SAAA,CAQA,gBAAA,CAFA,cAAA,CATA,iBAAA,CAOA,iBAAA,CADA,oBAAA,CAMA,+BAAA,CAAA,4BAAA,CAAA,uBAAA,CAEA,4GAAA,CAAA,oGAAA,CAAA,+FAAA,CAAA,8IAAA,CAAA,4FAAA,CAAA,yLAAA,CAbA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAIA,kBAuEZ,CA5DY,8CACI,WAAA,CACA,wGAAA,CAAA,qGAAA,CAAA,gGA8DhB,CA3DY,qDACI,WAAA,CACA,8GAAA,CAAA,2GAAA,CAAA,sGA6DhB,CA1DY,+CACI,UA4DhB,CA1DY,4CACI,qBA4DhB,CAxIA,kCAmFQ,0BAAA,CAAA,uBAAA,CAAA,sBAAA,CAAA,qBAAA,CAAA,kBAAA,CADA,sGAAA,CAAA,8FAAA,CAAA,4FAAA,CAAA,uIAAA,CAAA,sFAAA,CAAA,2NA0DR,CAxDQ,uCACI,2BAAA,CAAA,wBAAA,CAAA,uBAAA,CAAA,sBAAA,CAAA,mBA0DZ,CA/IA,iCA4FQ,YAAA,CAFA,eAAA,CAGA,mBAAA,CAFA,iBA0DR,CArJA,6BAiGQ,aAAA,CADA,iBAAA,CAGA,yCAAA,CAAA,sCAAA,CAAA,qCAAA,CAAA,oCAAA,CAAA,iCAAA,CADA,iEAAA,CAAA,yDAAA,CAAA,uDAAA,CAAA,kGAAA,CAAA,iDAAA,CAAA,sLAyDR,CA3JA,sCAqGY,kBAyDZ,CA9JA,oCAwGY,SAAA,CACA,kCAAA,CAAA,+BAAA,CAAA,8BAAA,CAAA,6BAAA,CAAA,0BAyDZ,CAlKA,qCA4GY,SAyDZ,CArKA,+GAiHY,yIAAA,CAAA,iIAAA,CAAA,+HAAA,CAAA,0KAAA,CAAA,yHAAA,CAAA,8PAyDZ,CAtDQ,uCAOI,yCAAA,CAAA,sCAAA,CAAA,qCAAA,CAAA,oCAAA,CAAA,iCAkDZ,CAzDQ,+CAEQ,SA0DhB,CA5DQ,8CAKQ,SA0DhB,CAvDY,iDACI,0DAAA,CAAA,uDAAA,CAAA,sDAAA,CAAA,qDAAA,CAAA,kDAyDhB,CA1DY,2KAKQ,kGAAA,CAAA,0FAAA,CAAA,wFAAA,CAAA,kIAAA,CAAA,kFAAA,CAAA,oNA0DpB,CA3LA,6BAyIQ,WAAA,CAMA,cAAA,CAHA,WAAA,CAFA,MAAA,CAGA,gBAAA,CALA,iBAAA,CAGA,OAAA,CAGA,iBAuDR,CArMA,kCAmJQ,mFAqDR,CAxMA,6BAsJQ,cAqDR,CA3MA,qCA6JQ,QAAA,CAFA,MAAA,CAKA,SAAA,CADA,mBAAA,CALA,iBAAA,CAIA,OAAA,CAFA,KAAA,CAMA,4BAAA,CAAA,yBAAA,CAAA,wBAAA,CAAA,uBAAA,CAAA,oBAAA,CADA,sGAAA,CAAA,8FAAA,CAAA,4FAAA,CAAA,uIAAA,CAAA,sFAAA,CAAA,2NAqDR,CAlDQ,0CAEI,SAAA,CADA,mBAAA,CAEA,0BAAA,CAAA,uBAAA,CAAA,sBAAA,CAAA,qBAAA,CAAA,kBAoDZ,CA3NA,kDA2KY,cAAA,CACA,gBAmDZ,CA/NA,sCAgLQ,aAkDR,CAlOA,4CAoLY,aAAA,CADA,iBAmDZ,CAtOA,0CAyLY,WAAA,CAEA,QAAA,CADA,iBAAA,CAEA,OAAA,CAJA,UAqDZ,CA7OA,+CA8LgB,qBAAA,CACA,sBAAA,CACA,iBAAA,CACA,oBAAA,CACA,qBAAA,CACA,SAkDhB,CA/CY,uDAEQ,gCAAA,CACA,mBAAA,CACA,sDAAA,CAAA,iDAAA,CAAA,mDAAA,CAAA,8CAgDpB,CApDY,4DAOQ,wDAAA,CAAA,mDAAA,CAAA,qDAAA,CAAA,gDAgDpB,CA7PA,2DAmNY,uBAAA,CAAA,oBAAA,CAAA,eAAA,CAIA,6BAAA,CAAA,0BAAA,CAAA,qBAAA,CAFA,WAAA,CACA,gBAAA,CAGA,sDAAA,CAAA,iDAAA,CAAA,mDAAA,CAAA,8CAAA,CADA,kBAAA,CAJA,UAkDZ,CAtQA,iEA4NY,YA6CZ,CAzQA,sDAkOY,eAAA,CACA,oBAAA,CACA,uBAAA,CACA,yBAAA,CAAA,sBAAA,CAAA,iBAAA,CACA,UA0CZ,CAhRA,qFA0OY,0BAAA,CAAA,kBAAA,CACA,6BAAA,CAAA,qBAAA,CAFA,UA4CZ,CArRA,4DA8OY,YA0CZ,CAxRA,4EAiPY,eAAA,CACA,oBAAA,CACA,uBAAA,CAKA,yBAAA,CAAA,iBAAA,CADA,6BAAA,CAAA,qBAAA,CAHA,WAAA,CAEA,eAAA,CAGA,mDAAA,CAAA,2CAAA,CAJA,UA8CZ,CAnSA,wEA8PY,uBAAA,CAAA,kBAAA,CACA,0BAAA,CAAA,qBAAA,CAFA,UA2CZ,CAxSA,wEAkQY,eAAA,CACA,oBAAA,CACA,uBAAA,CAKA,sBAAA,CAAA,iBAAA,CADA,0BAAA,CAAA,qBAAA,CAHA,WAAA,CAEA,eAAA,CAGA,gDAAA,CAAA,2CAAA,CAJA,UA6CZ,CAnTA,4CAgRgB,cAAA,CADA,eAwChB,CAvTA,oCAqRQ,YAqCR,CA1TA,kCAwRQ,UAqCR,CA7TA,oCA4RQ,wBAAA,CAAA,qBAAA,CAAA,qBAAA,CADA,mBAAA,CAAA,oBAAA,CAAA,gBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,qCAAA,CAAA,6BAqCR,CAjUA,sCA8RY,kBAAA,CAAA,eAAA,CAIA,oBAAA,CAJA,iBAAA,CAAA,aAAA,CAAA,SAAA,CACA,cAAA,CAEA,iBAAA,CADA,UAwCZ","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","@import 'normalize.css';\n\n// common resetting\n#eh-syringe-popup-root {\n    text-align: initial;\n    font-size: initial;\n    line-height: initial;\n    input,\n    table,\n    th,\n    td {\n        background: inherit;\n        color: inherit;\n    }\n\n    input {\n        border: none;\n    }\n\n    input[type='radio'],\n    input[type='checkbox'] {\n        position: initial;\n        top: initial;\n    }\n    p {\n        margin: 0.8em 0;\n    }\n    a {\n        background: rgba(0, 0, 0, 0);\n        transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n        text-decoration: none;\n    }\n}\n\n// theme\n.theme(@background, @foreground, @shadow, @accent) {\n    @soft-accent: softlight(@accent, @background);\n    &,\n    .panel {\n        background: @background;\n        color: @foreground;\n    }\n\n    #info {\n        color: @accent;\n    }\n    .hasNew {\n        color: softlight(#aa575e, @foreground);\n    }\n    a {\n        color: @accent;\n        &:hover {\n            color: softlight(@accent, @foreground);\n        }\n        &:active {\n            color: softlight(@accent, @background);\n        }\n        &.minor {\n            color: #a5a3a6;\n            &:hover {\n                color: #d2cdd4;\n            }\n            &:active {\n                color: #838185;\n            }\n        }\n    }\n    .logo svg {\n        @sa: lighten(average(@accent, @background), 10%);\n        [fill-bg] {\n            fill: @background;\n        }\n        [fill-accent] {\n            fill: @accent;\n        }\n        [fill-sa] {\n            fill: @sa;\n        }\n        [stroke-bg] {\n            stroke: @background;\n        }\n        [stroke-accent] {\n            stroke: @accent;\n        }\n        [stroke-sa] {\n            stroke: @sa;\n        }\n    }\n\n    .action {\n        background: @background;\n        color: @accent;\n\n        &.primary {\n            background: @accent;\n            color: @background;\n        }\n        &.primary:hover {\n            background: softlight(@accent, @foreground);\n        }\n        &.primary:active {\n            background: softlight(@accent, @background);\n        }\n    }\n\n    #settingForm {\n        .checkbox-item svg path {\n            stroke: @accent;\n        }\n\n        input[type='checkbox'] {\n            border: solid 2px #a09da6;\n            &:checked {\n                border: solid 2px @accent;\n            }\n        }\n\n        input[type='range'] {\n            &::-webkit-slider-runnable-track {\n                border: 1px @soft-accent solid;\n            }\n            &::-moz-range-track {\n                border: 1px @soft-accent solid;\n            }\n            &::-webkit-slider-thumb {\n                background: @background;\n                border: solid 2px @accent;\n            }\n            &::-moz-range-thumb {\n                background: @background;\n                border: solid 2px @accent;\n            }\n            &:focus::-webkit-slider-thumb {\n                border: solid 2px @accent;\n                box-shadow: 0 0 7px @shadow;\n            }\n            &:focus::-moz-range-thumb {\n                border: solid 2px @accent;\n                box-shadow: 0 0 7px @shadow;\n            }\n            &:active::-webkit-slider-thumb {\n                border: solid 2px @accent;\n                background: overlay(@background, @background);\n                box-shadow: 0 0 7px 1px @shadow;\n            }\n            &:active::-moz-range-thumb {\n                border: solid 2px @accent;\n                background: overlay(@background, @background);\n                box-shadow: 0 0 7px 1px @shadow;\n            }\n        }\n    }\n}\n#eh-syringe-popup-root {\n    @background: rgb(240, 240, 240);\n    @foreground: #111;\n    @shadow: rgba(0, 0, 0, 0.2);\n    @accent: #8041a6;\n    .theme(@background, @foreground, @shadow, @accent);\n}\nbody.ex #eh-syringe-popup-root {\n    @background: rgb(49, 49, 49);\n    @foreground: #eee;\n    @shadow: rgba(0, 0, 0, 0.2);\n    @accent: #ce90f1;\n    .theme(@background, @foreground, @shadow, @accent);\n}\n\n#eh-syringe-popup-root {\n    overflow: hidden;\n    white-space: nowrap;\n    font-family: sans-serif;\n    font-size: 12pt;\n    user-select: none;\n    padding: 1px;\n    max-width: 400px;\n    min-width: 240px;\n    position: relative;\n\n    .hidden {\n        visibility: hidden;\n        display: none;\n    }\n\n    .panel {\n        margin: 0 auto;\n        display: flex;\n        flex-direction: column;\n\n        .header {\n            margin: 16px;\n            line-height: 1;\n            //font-size: 16px;\n            display: flex;\n            > .cushion {\n                flex: auto;\n            }\n            span {\n                color: #a5a3a6;\n            }\n        }\n\n        .content {\n            margin: 0 16px;\n            flex: auto;\n            overflow: visible;\n        }\n\n        .action {\n            display: block;\n            line-height: 36px;\n            font-size: 16px;\n            margin: 16px;\n            box-sizing: border-box;\n            position: relative;\n            user-select: none;\n            cursor: pointer;\n            outline: 0;\n            -webkit-tap-highlight-color: transparent;\n            white-space: nowrap;\n            text-decoration: none;\n            text-align: center;\n            min-width: 64px;\n            padding: 0 16px;\n            border-radius: 4px;\n            overflow: visible;\n            transform: translate3d(0, 0, 0);\n            border: 1px #ddd solid;\n            transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n\n            &.primary {\n                border: none;\n                box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n            }\n            &.primary:active {\n                border: none;\n                box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n            }\n            &:disabled {\n                opacity: 0.6;\n            }\n            &:focus {\n                border: 1px #888 solid;\n            }\n        }\n    }\n\n    #mainPanel {\n        transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        transform: scale(1);\n        &.hide {\n            transform: scale(0.9);\n        }\n    }\n\n    .logo-box {\n        overflow: hidden;\n        position: relative;\n        margin: -16px;\n        pointer-events: none;\n    }\n    .logo {\n        text-align: center;\n        margin: 20px 0;\n        transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        transform: scale(1) rotate(-45deg);\n        #Syringe {\n            pointer-events: all;\n        }\n        #Enema {\n            opacity: 0;\n            transform-origin: 61px 86px;\n        }\n        #Enema2 {\n            opacity: 1;\n        }\n        #Enema,\n        #Enema2,\n        #PushRod {\n            transition: width 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 280ms cubic-bezier(0.4, 0, 0.2, 1),\n                transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        }\n        &.prominent {\n            #Enema2 {\n                opacity: 0;\n            }\n            #Enema {\n                opacity: 1;\n            }\n            transform: scale(1.6) rotate(0deg);\n            &.injection {\n                transform: scale(1.6) rotate(0deg) translate(-10px, 0);\n                #Enema,\n                #Enema2,\n                #PushRod {\n                    transition: width 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1);\n                }\n            }\n        }\n    }\n\n    #info {\n        position: absolute;\n        bottom: 30px;\n        left: 0;\n        right: 0;\n        height: 24px;\n        line-height: 24px;\n        text-align: center;\n        font-size: 16px;\n    }\n\n    .monospace {\n        font-family: Menlo, Consolas, 'Source Code Pro', Inconsolata, Monaco, 'Courier New', monospace;\n    }\n    table {\n        font-size: 14px;\n    }\n\n    #settingPanel {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        pointer-events: none;\n        opacity: 0;\n        transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        transform: scale(1.1);\n\n        &.show {\n            pointer-events: auto;\n            opacity: 1;\n            transform: scale(1);\n        }\n\n        #settingForm {\n            font-size: 10pt;\n            line-height: 12pt;\n        }\n    }\n    .checkbox-item {\n        padding: 4px 0;\n\n        label {\n            position: relative;\n            display: block;\n        }\n\n        svg {\n            width: 10px;\n            height: 10px;\n            position: absolute;\n            left: 3px;\n            top: 3px;\n            path {\n                stroke-dasharray: 1000;\n                stroke-dashoffset: 1000;\n                stroke-width: 16px;\n                stroke-linecap: round;\n                stroke-linejoin: round;\n                fill: none;\n            }\n\n            &.checked {\n                path {\n                    stroke-dasharray: 113.137, 113.137;\n                    stroke-dashoffset: 0;\n                    transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n                }\n                path + path {\n                    transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 280ms;\n                }\n            }\n        }\n\n        input[type='checkbox'] {\n            appearance: none;\n            width: 16px;\n            height: 16px;\n            margin-right: 2px;\n            box-sizing: border-box;\n            vertical-align: top;\n            transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n        }\n        input[type='checkbox']:focus {\n            outline: none;\n        }\n    }\n\n    #settingForm {\n        input[type='range'] {\n            appearance: none;\n            -moz-appearance: none;\n            -webkit-appearance: none;\n            border-radius: 8px;\n            width: 100%;\n        }\n        input[type='range']::-webkit-slider-runnable-track {\n            height: 6px;\n            border-radius: 10px;\n            box-sizing: border-box;\n        }\n        input[type='range']:focus {\n            outline: none;\n        }\n        input[type='range']::-webkit-slider-thumb {\n            appearance: none;\n            -moz-appearance: none;\n            -webkit-appearance: none;\n            height: 16px;\n            width: 16px;\n            margin-top: -6px;\n            box-sizing: border-box;\n            border-radius: 50%;\n            transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        }\n\n        input[type='range']::-moz-range-track {\n            height: 6px;\n            border-radius: 10px;\n            box-sizing: border-box;\n        }\n        input[type='range']::-moz-range-thumb {\n            appearance: none;\n            -moz-appearance: none;\n            -webkit-appearance: none;\n            height: 16px;\n            width: 16px;\n            margin-top: -6px;\n            box-sizing: border-box;\n            border-radius: 50%;\n            transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        }\n\n        h3 {\n            span {\n                font-weight: 400;\n                font-size: 20pt;\n            }\n        }\n    }\n    .image-level {\n        margin: 0 4px;\n    }\n    .range-box {\n        margin: 5px;\n    }\n    .range-label {\n        display: flex;\n        justify-content: space-between;\n        a {\n            flex: none;\n            font-size: 10pt;\n            width: 30px;\n            text-align: center;\n            display: inline-block;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "td.tc{white-space:nowrap}div.gt,div.gtl,div.gtw{height:16px;line-height:16px;white-space:nowrap}textarea[name=expungexpl]{display:block}body h1#gj{margin:3px 4px}body div#gright{z-index:3}body .g2{padding-bottom:20px}body .gsp{padding-top:10px}body div.gt,body div.gtl,body div.gtw{height:16px;line-height:16px;overflow:hidden}body div#gmid{height:auto}body p.gpc-translate{clear:both;font-size:9pt;margin:-3px auto;padding:0 5px 5px;text-align:center}body div.c6{text-align:left}@media screen and (max-width:990px){p.gpc-translate{margin-top:25px;visibility:hidden!important}}[ehs-emoji],[ehs-icon]{height:1em;margin:0 1px}[ehs-icon]{vertical-align:text-top}body.ehs-hide-icon [ehs-emoji],body.ehs-hide-icon [ehs-icon]{display:none}body [ehs-tag-original]{display:inline}body [ehs-tag-translated]{display:none}body.ehs-translate-tag [ehs-tag-original]{display:none}body.ehs-translate-tag [ehs-tag-translated]{display:inline}", "",{"version":3,"sources":["webpack://./src/plugin/syringe/index.less"],"names":[],"mappings":"AAAA,MACI,kBACJ,CAEA,uBAGI,WAAA,CACA,gBAAA,CACA,kBAAJ,CAGA,0BACI,aADJ,CAIA,WAEQ,cAHR,CACA,gBAMQ,SAJR,CAFA,SAUQ,mBALR,CALA,UAcQ,gBANR,CARA,sCAqBQ,WAAA,CACA,gBAAA,CAFA,eALR,CAfA,cA0BQ,WARR,CAlBA,qBAiCQ,UAAA,CACA,aAAA,CAJA,gBAAA,CAEA,iBAAA,CADA,iBANR,CAzBA,YAsCQ,eAVR,CAcA,oCACI,gBACI,eAAA,CACA,2BAZN,CACF,CAeA,uBAEI,UAAA,CACA,YAbJ,CAgBA,WACI,uBAdJ,CAiBA,6DAGQ,YAhBR,CAoBA,wBAEQ,cAnBR,CAiBA,0BAKQ,YAnBR,CAuBA,0CAEQ,YAtBR,CAoBA,4CAKQ,cAtBR","sourcesContent":["td.tc {\n    white-space: nowrap;\n}\n\ndiv.gt,\ndiv.gtl,\ndiv.gtw {\n    height: 16px;\n    line-height: 16px;\n    white-space: nowrap;\n}\n\ntextarea[name='expungexpl'] {\n    display: block;\n}\n\nbody {\n    h1#gj {\n        margin: 3px 4px;\n    }\n\n    div#gright {\n        z-index: 3;\n    }\n\n    .g2 {\n        padding-bottom: 20px;\n    }\n\n    .gsp {\n        padding-top: 10px;\n    }\n\n    div.gtl,\n    div.gtw,\n    div.gt {\n        overflow: hidden;\n        height: 16px;\n        line-height: 16px;\n    }\n\n    div#gmid {\n        height: auto;\n    }\n\n    p.gpc-translate {\n        margin: -3px auto;\n        text-align: center;\n        padding: 0px 5px 5px 5px;\n        clear: both;\n        font-size: 9pt;\n    }\n\n    div.c6 {\n        text-align: left;\n    }\n}\n\n@media screen and (max-width: 990px) {\n    p.gpc-translate {\n        margin-top: 25px;\n        visibility: hidden !important;\n    }\n}\n\n[ehs-icon],\n[ehs-emoji] {\n    height: 1em;\n    margin: 0 1px;\n}\n\n[ehs-icon] {\n    vertical-align: text-top;\n}\n\nbody.ehs-hide-icon {\n    [ehs-icon],\n    [ehs-emoji] {\n        display: none;\n    }\n}\n\nbody {\n    [ehs-tag-original] {\n        display: inline;\n    }\n    [ehs-tag-translated] {\n        display: none;\n    }\n}\n\nbody.ehs-translate-tag {\n    [ehs-tag-original] {\n        display: none;\n    }\n    [ehs-tag-translated] {\n        display: inline;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".eh-syringe-lite-auto-complete-list{background:#fff;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-moz-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);color:#202124;display:block;max-height:50vh;min-height:20px;overflow:auto;padding:8px 0;position:fixed;-moz-text-align-last:left;text-align-last:left;z-index:10000000000000000000}.eh-syringe-lite-auto-complete-list:empty,.eh-syringe-lite-auto-complete-list[hidden]{display:none}.eh-syringe-lite-auto-complete-list.exclude .auto-complete-item .en-name:before{content:\"- \"}.eh-syringe-lite-auto-complete-list .auto-complete-item{-webkit-box-pack:justify;-moz-box-pack:justify;-ms-flex-pack:justify;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;justify-content:space-between;line-height:24px;padding:0 8px}.eh-syringe-lite-auto-complete-list .auto-complete-item img{display:inline-block!important;height:8pt;vertical-align:text-top}.eh-syringe-lite-auto-complete-list .auto-complete-item>span{-webkit-box-flex:0;-moz-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}.eh-syringe-lite-auto-complete-list .auto-complete-item.selected,.eh-syringe-lite-auto-complete-list .auto-complete-item:hover{background:#e8eaed}.eh-syringe-lite-auto-complete-list .auto-complete-item .en-name{color:#5f6368;padding:0 8px}", "",{"version":3,"sources":["webpack://./src/plugin/tag-tip/index.less"],"names":[],"mappings":"AAAA,oCAGI,eAAA,CAEA,yBAAA,CAAA,sBAAA,CAAA,iBAAA,CACA,wGAAA,CAAA,qGAAA,CAAA,gGAAA,CACA,aAAA,CACA,aAAA,CACA,eAAA,CAPA,eAAA,CAQA,aAAA,CACA,aAAA,CAVA,cAAA,CAGA,yBAAA,CAAA,oBAAA,CAQA,4BACJ,CAAI,sFAEI,YAER,CACI,gFAGY,YADhB,CApBA,wDA8BQ,wBAAA,CAAA,qBAAA,CAAA,qBAAA,CACA,cAAA,CAFA,mBAAA,CAAA,oBAAA,CAAA,gBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,qCAAA,CAAA,6BAAA,CAFA,gBAAA,CADA,aAAR,CA3BA,4DAiCY,8BAAA,CACA,UAAA,CACA,uBAHZ,CAhCA,6DAuCY,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,aAAA,CAAA,SAJZ,CAOQ,+HAEI,kBALZ,CAvCA,iEAgDY,aAAA,CADA,aAJZ","sourcesContent":[".eh-syringe-lite-auto-complete-list {\n    position: fixed;\n    min-height: 20px;\n    background: #fff;\n    text-align-last: left;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    color: #202124;\n    display: block;\n    max-height: 50vh;\n    overflow: auto;\n    padding: 8px 0;\n    z-index: 9999999999999999999;\n    &[hidden],\n    &:empty {\n        display: none;\n    }\n\n    &.exclude {\n        .auto-complete-item {\n            .en-name::before {\n                content: '- ';\n            }\n        }\n    }\n\n    .auto-complete-item {\n        padding: 0 8px;\n        line-height: 24px;\n        display: flex;\n        justify-content: space-between;\n        cursor: pointer;\n        img {\n            display: inline-block !important;\n            height: 8pt;\n            vertical-align: text-top;\n        }\n\n        > span {\n            flex: none;\n        }\n\n        &:hover,\n        &.selected {\n            background: #e8eaed;\n        }\n        .en-name {\n            padding: 0 8px;\n            color: #5f6368;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9806);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#eh-syringe-popup-button{background:50%/65% no-repeat #fff url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");border:2px solid #6e066e;-webkit-border-radius:36px;-moz-border-radius:36px;border-radius:36px;-webkit-box-shadow:0 0 2px 1px rgba(0,0,0,.5);-moz-box-shadow:0 0 2px 1px rgba(0,0,0,.5);box-shadow:0 0 2px 1px rgba(0,0,0,.5);height:36px;position:fixed;width:36px;z-index:1000}#eh-syringe-popup-button:hover{cursor:pointer}body.ex #eh-syringe-popup-button{background-color:#bbb;border-color:#926a92}#eh-syringe-popup-badge{background:#444;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;color:#fff;font-size:12px;height:14px;padding:2px 4px;position:absolute;right:-10px;top:-10px}#eh-syringe-popup-back{background:rgba(0,0,0,.3);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;-webkit-transition:visibility,opacity .4s;-o-transition:visibility,opacity .4s;-moz-transition:visibility,opacity .4s;transition:visibility,opacity .4s;visibility:hidden;z-index:2000}#eh-syringe-popup-back.open,#eh-syringe-popup-back.opening{opacity:1;visibility:visible}#eh-syringe-popup-back.closing{opacity:0;visibility:visible}#eh-syringe-popup-back #eh-syringe-popup{background:#f5f5f5;border:1px solid #ca8dca;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;bottom:72px;-webkit-box-shadow:0 0 6px 2px rgba(0,0,0,.5);-moz-box-shadow:0 0 6px 2px rgba(0,0,0,.5);box-shadow:0 0 6px 2px rgba(0,0,0,.5);overflow:hidden;position:absolute;right:12px}", "",{"version":3,"sources":["webpack://./src/user-script/popup-host.less"],"names":[],"mappings":"AAAA,yBASI,yEAAA,CAFA,wBAAA,CADA,0BAAA,CAAA,uBAAA,CAAA,kBAAA,CAEA,6CAAA,CAAA,0CAAA,CAAA,qCAAA,CAHA,WAAA,CAJA,cAAA,CAGA,UAAA,CAMA,YADJ,CAEI,+BACI,cAAR,CAIA,iCACI,qBAAA,CACA,oBAFJ,CAKA,wBAQI,eAAA,CADA,yBAAA,CAAA,sBAAA,CAAA,iBAAA,CAEA,UAAA,CAPA,cAAA,CADA,WAAA,CAKA,eAAA,CAHA,iBAAA,CACA,WAAA,CACA,SACJ,CAMA,uBAOI,yBAAA,CALA,QAAA,CAGA,MAAA,CAIA,SAAA,CARA,cAAA,CAEA,OAAA,CACA,KAAA,CAMA,yCAAA,CAAA,oCAAA,CAAA,sCAAA,CAAA,iCAAA,CAFA,iBAAA,CAFA,YAAJ,CASI,2DAEI,SAAA,CADA,kBAFR,CAKI,+BAEI,SAAA,CADA,kBAFR,CAlBA,yCA6BQ,kBAAA,CAFA,wBAAA,CAGA,yBAAA,CAAA,sBAAA,CAAA,iBAAA,CALA,WAAA,CAGA,6CAAA,CAAA,0CAAA,CAAA,qCAAA,CAGA,eAAA,CAPA,iBAAA,CAEA,UAER","sourcesContent":["#eh-syringe-popup-button {\n    position: fixed;\n    // bottom: 12px;\n    // right: 12px;\n    width: 36px;\n    height: 36px;\n    border-radius: 36px;\n    border: rgb(110, 6, 110) 2px solid;\n    box-shadow: rgba(0, 0, 0, 0.5) 0 0 2px 1px;\n    background: center/65% no-repeat white url('../assets/logo.svg');\n    z-index: 1000;\n    &:hover {\n        cursor: pointer;\n    }\n}\n\nbody.ex #eh-syringe-popup-button {\n    background-color: rgb(187, 187, 187);\n    border-color: rgb(146, 106, 146);\n}\n\n#eh-syringe-popup-badge {\n    height: 14px;\n    font-size: 12px;\n    position: absolute;\n    right: -10px;\n    top: -10px;\n    padding: 2px 4px;\n    border-radius: 4px;\n    background: #444;\n    color: white;\n}\n\n#eh-syringe-popup-back {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    top: 0;\n    left: 0;\n    z-index: 2000;\n    background: rgba(0, 0, 0, 0.3);\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility, opacity 0.4s;\n    &.open {\n        visibility: visible;\n        opacity: 1;\n    }\n    &.opening {\n        visibility: visible;\n        opacity: 1;\n    }\n    &.closing {\n        visibility: visible;\n        opacity: 0;\n    }\n    #eh-syringe-popup {\n        position: absolute;\n        bottom: 12px + 36px + 24px;\n        right: 12px;\n        border: #ca8dca solid 1px;\n        box-shadow: rgba(0, 0, 0, 0.5) 0 0 6px 2px;\n        background: whitesmoke;\n        border-radius: 6px;\n        overflow: hidden;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 4015:
/***/ (function(module) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 1667:
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 809:
/***/ (function(module) {

"use strict";


module.exports = function () {
  // https://mths.be/emoji
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};


/***/ }),

/***/ 5573:
/***/ (function(module) {

"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


/***/ }),

/***/ 5666:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ 3379:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 9806:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NS4yICg3ODE4MSkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+bG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJsb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcuMjMxMzAzLCA3MS42NDQ5MzkpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTU3LjIzMTMwMywgLTcxLjY0NDkzOSkgIiB4PSIxOS43MzEzMDI3IiB5PSI1OS44OTQ5Mzk0IiB3aWR0aD0iNzUiIGhlaWdodD0iMjMuNSI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OC4xMzEzNTQsIDQwLjI0NTY4OSkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtODguMTMxMzU0LCAtNDAuMjQ1Njg5KSAiIHg9IjgyLjYzMTM1NDUiIHk9IjE0LjI0NTY4OSIgd2lkdGg9IjExIiBoZWlnaHQ9IjUyIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOS40ODk1OTIsIDE4LjUyNDAyOCkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTA5LjQ4OTU5MiwgLTE4LjUyNDAyOCkgIiB4PSIxMDMuOTg5NTkyIiB5PSIxLjAyNDAyODIxIiB3aWR0aD0iMTEiIGhlaWdodD0iMzUiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkuNzk4NjE2LCAyOS4xOTY5NTYpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTk5Ljc5ODYxNiwgLTI5LjE5Njk1NikgIiB4PSI4OS41NDg2MTY0IiB5PSIyMi45NDY5NTU1IiB3aWR0aD0iMjAuNSIgaGVpZ2h0PSIxMi41Ij48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNGREJERjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0Ljg2MTY0NywgMTAyLjk4MjQxMSkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtMjQuODYxNjQ3LCAtMTAyLjk4MjQxMSkgIiB4PSIxOS4zNjE2NDY3IiB5PSI5Ny40ODI0MTEiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSI+PC9yZWN0PgogICAgICAgICAgICA8cGF0aCBkPSJNMjcuNDI2MjQ4LDg2LjM1OTg4MjEgQzI3LjQyNjI0OCw4Ni4zNTk4ODIxIDMzLjA3NjUyMjUsODYuMzY2ODA4MSA0MS4wMjM0NzY0LDg2LjM2NTQyMyBDNDguOTc0NTg1OSw4Ni4zNjU0MjMgNTcuNjQwNDY0LDgzLjM1Njc0NTMgNTcuNjQwNDY0LDgzLjM1Njc0NTMgTDM4LjAxNDc5ODYsMTAyLjk4MjQxMSBMMjQuOTc5OTY1OSw4OS45NDc1Nzc5IEwyNy40MjQ4NjI4LDg2LjM2MTI2NzMgTDI3LjQyNjI0OCw4Ni4zNTk4ODIxIFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGREJERjEiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNOTQuNzIyNTU0OCwzNy41ODM4NDI0IEwxMDUuNjI0MTYzLDI2LjY4MjIzNDIgTDEwMS4yNzg3NTcsMjIuMzM2ODI4MiBMOTAuMzc3MTQ4OSwzMy4yMzg0MzY1IEw5NC43MjI1NTQ4LDM3LjU4Mzg0MjQgWiBNODMuODUxNDIxMiwzMS4wNzMzNTIxIEwxMDEuMjk1MzgsMTMuNjI5MzkzNiBMMTE0LjMzMTU5OCwyNi42NjU2MTE2IEw5Ni44ODYyNTM5LDQ0LjExMDk1NTMgTDgzLjg1MTQyMTIsMzEuMDc2MTIyNiBMODMuODUxNDIxMiwzMS4wNzMzNTIxIFoiIGlkPSLlvaLnirYiIGZpbGw9IiM3ODM2QTAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNzEuMjkwMzMwNCwyMi44NzI5MDQ3IEM3MC4wODc5Njc2LDI0LjA3NTI2NzYgNzAuMTkwNDczMSwyNi4xMzM2OTA3IDcxLjUwNjQyMzIsMjcuNDQ5NjQwOSBMMTAwLjUxMjczNiw1Ni40NTU5NTMzIEMxMDEuODE0ODM0LDU3Ljc1ODA1MTQgMTAzLjg5NDAzNSw1Ny44NjQ3MTI2IDEwNS4wODgwODcsNTYuNjcwNjYwOSBDMTA2LjI5MDQ0OSw1NS40NjgyOTggMTA2LjE4Nzk0NCw1My40MDk4NzQ5IDEwNC44NzE5OTQsNTIuMDkzOTI0NyBMNzUuODY3MDY2NywyMy4wODg5OTc2IEM3NC41NjQ5Njg2LDIxLjc4Njg5OTUgNzIuNDg0MzgyMSwyMS42Nzg4NTMyIDcxLjI5MDMzMDQsMjIuODcyOTA0NyBaIE02Ni40NjI4NzExLDE4LjA0NTQ0NTMgQzcwLjA3NTUwMDYsMTQuNDMyODE1OCA3Ni4yNzAxNjI5LDE0Ljc3MDgwNzIgODAuMjI3NzEsMTguNzI4MzU0MyBMMTA5LjIzNDAyMiw0Ny43MzQ2NjY1IEMxMTMuMjIzNDI5LDUxLjcyNDA3MzQgMTEzLjUxOTg2NCw1Ny44OTM4MDE5IDEwOS45MTU1NDYsNjEuNDk4MTIwMiBDMTA2LjMwMjkxNiw2NS4xMTA3NDk3IDEwMC4xMDgyNTQsNjQuNzcyNzU4MyA5Ni4xNTA3MDcxLDYwLjgxNTIxMTQgTDY3LjE0NTc3OTksMzEuODEwMjg0MiBDNjMuMTU2MzczMSwyNy44MjA4Nzc0IDYyLjg1ODU1MjgsMjEuNjQ5NzYzNiA2Ni40NjI4NzExLDE4LjA0NTQ0NTMgWiBNOTkuMTMwMjk1Myw3LjEwMzY2NTkxIEM5Ny45MzA3MDI5LDguMzAzMjU4MzMgOTcuOTI3OTMyNCwxMC4yNjE5NDYzIDk5LjEzMDI5NTMsMTEuNDY0MzA5MiBMMTE2LjQ5NjY4MiwyOC44MzA2OTYgQzExNy43MDQ1ODYsMzAuMDM4NTk5NyAxMTkuNjUyMTkyLDMwLjAzNTgyOTMgMTIwLjg1NzMyNSwyOC44MzA2OTYgQzEyMi4wNTU1MzMsMjcuNjMyNDg4NiAxMjIuMDU5Njg4LDI1LjY3MjQxNTUgMTIwLjg1NzMyNSwyNC40NzAwNTI3IEwxMDMuNDkwOTM5LDcuMTAzNjY1OTEgQzEwMi4yODMwMzUsNS44OTU3NjIxMiAxMDAuMzM1NDI5LDUuODk4NTMyNTggOTkuMTMwMjk1Myw3LjEwMzY2NTkxIFogTTk0Ljc4NDg4OTMsMi43NTgyNTk5NyBDOTYuNTE0OTgsMS4wMjIyODYzOCA5OC44NjQxOTgsMC4wNDUyNjU1OTg0IDEwMS4zMTUwNzcsMC4wNDIzOTUwMjI4IEMxMDMuNzY1OTU3LDAuMDM5NTQ5NTQzNiAxMDYuMTE3NDQ3LDEuMDExMDg4NzIgMTA3Ljg1MTU4MiwyLjc0MzAyMjYgTDEyNS4yMTc5NjksMjAuMTA5NDA5MyBDMTI4LjgyMjI4NywyMy43MTM3Mjc3IDEyOC44MDU2NjQsMjkuNTcwMzk4NSAxMjUuMjAxMzQ2LDMzLjE3NDcxNjggQzEyMy40NzE0OTUsMzQuOTEwNDUwNCAxMjEuMTIyNjc3LDM1Ljg4NzQ1MTIgMTE4LjY3MjEzNywzNS44OTA1ODM5IEMxMTYuMjIxNTk3LDM1Ljg5MzY4NjcgMTEzLjg3MDMwMSwzNC45MjI2NjU2IDExMi4xMzYwMzksMzMuMTkxMzM5MyBMOTQuNzY5NjUyLDE1LjgyNDk1MjcgQzkxLjE2NTMzMzcsMTIuMjIwNjM0MyA5MS4xODE5NTYzLDYuMzYzOTYzNTEgOTQuNzg2Mjc0NSwyLjc1OTY0NTIgTDk0Ljc4NDg4OTMsMi43NTgyNTk5NyBaIiBpZD0i5b2i54q2IiBmaWxsPSIjNzgzNkEwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI0Ljk5Nzk1MTYsODkuOTI5NTcwMSBDMjQuOTg0MTIxNSw4OS45NDM0MjIyIDM4LjAxNjE4MzgsMTAyLjk4MTAyNiAzOC4wMTYxODM4LDEwMi45ODEwMjYgQzM4LjAyMTcyNDYsMTAyLjk4NjU2NiA4OC4xNjYzNTI1LDUyLjgzMDg1NjggODguMTY2MzUyNSw1Mi44MzA4NTY4IEw3NS4xMzE1MTk3LDM5Ljc5NjAyNCBMMjQuOTk3OTUxNiw4OS45Mjk1NzAxIFogTTc1LjE0NTM3MTgsMzEuMDg4NTg5NCBMOTYuODcyNDAxOSw1Mi44MTU2MTk0IEw0Mi4zNzgyMTI0LDEwNy4zMDk4MDkgQzQxLjIyODE3NywxMDguNDc0NTkgMzkuNjYxMzIzMywxMDkuMTMyOTY4IDM4LjAyNDQ3OTMsMTA5LjEzOTI5NiBDMzYuMzg3NjM1MiwxMDkuMTQ1NDQ3IDM0LjgxNTgwNzcsMTA4LjQ5OTAzNCAzMy42NTY5MjU4LDEwNy4zNDMwNTQgTDIwLjYxOTMyMjUsOTQuMzA1NDUwOCBDMTguMjIwMTM3NSw5MS45MDYyNjU4IDE4LjIzMjYwNDQsODguMDAxMzU2OCAyMC42NTExODIzLDg1LjU4Mjc3ODkgTDc1LjE0NTM3MTgsMzEuMDg4NTg5NCBaIiBpZD0i5b2i54q2IiBmaWxsPSIjNzgzNkEwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIwLjU5OTkyOTUsMTAzLjAxNTY1NiBDMjAuNjA0MDg1MiwxMDMuMDExNSAyNC45NTM2NDY4LDEwNy4zNjEwNjIgMjQuOTUzNjQ2OCwxMDcuMzYxMDYyIEMyNC45NDk0OTEyLDEwNy4zNTY5MDYgMjkuMzEwMTM0NiwxMDIuOTk2MjYzIDI5LjMxMDEzNDYsMTAyLjk5NjI2MyBMMjQuOTY0NzI4NSw5OC42NTA4NTY4IEwyMC41OTk5Mjk1LDEwMy4wMTU2NTYgTDIwLjU5OTkyOTUsMTAzLjAxNTY1NiBaIE0yNC45ODEzNTEsODkuOTQzNDIyMiBMMzguMDE3NTY5MSwxMDIuOTc5NjQgTDI5LjI5MDc0MTUsMTExLjcwNjQ2OCBDMjYuODkxNTY2NCwxMTQuMTA4NzE4IDIzLjAwMDU4MDgsMTE0LjExNTUzNCAyMC41OTMwMDM1LDExMS43MjE3MDUgTDE2LjIzOTI4NjIsMTA3LjM2Nzk4OCBDMTMuODQ1NDU3LDEwNC45NjA0MTEgMTMuODUyMjczNSwxMDEuMDY5NDI1IDE2LjI1NDUyMzYsOTguNjcwMjQ5NyBMMjQuOTgxMzUxLDg5Ljk0MzQyMjIgTDI0Ljk4MTM1MSw4OS45NDM0MjIyIFoiIGlkPSLlvaLnirYiIGZpbGw9IiM3ODM2QTAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjAuNTk5OTI5NSwxMDMuMDE1NjU2IEMyMC42MDQwODUyLDEwMy4wMTE1IDI0Ljk1MzY0NjgsMTA3LjM2MTA2MiAyNC45NTM2NDY4LDEwNy4zNjEwNjIgQzI0Ljk0OTQ5MTIsMTA3LjM1NjkwNiAyOS4zMTAxMzQ2LDEwMi45OTYyNjMgMjkuMzEwMTM0NiwxMDIuOTk2MjYzIEwyNC45NjQ3Mjg1LDk4LjY1MDg1NjggTDIwLjU5OTkyOTUsMTAzLjAxNTY1NiBMMjAuNTk5OTI5NSwxMDMuMDE1NjU2IFogTTI0Ljk4MTM1MSw4OS45NDM0MjIyIEwzOC4wMTc1NjkxLDEwMi45Nzk2NCBMMjkuMjkwNzQxNSwxMTEuNzA2NDY4IEMyNi44OTE1NjY0LDExNC4xMDg3MTggMjMuMDAwNTgwOCwxMTQuMTE1NTM0IDIwLjU5MzAwMzUsMTExLjcyMTcwNSBMMTYuMjM5Mjg2MiwxMDcuMzY3OTg4IEMxMy44NDU0NTcsMTA0Ljk2MDQxMSAxMy44NTIyNzM1LDEwMS4wNjk0MjUgMTYuMjU0NTIzNiw5OC42NzAyNDk3IEwyNC45ODEzNTEsODkuOTQzNDIyMiBMMjQuOTgxMzUxLDg5Ljk0MzQyMjIgWiIgaWQ9IuW9oueKtiIgZmlsbD0iIzc4MzZBMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi4yNDM0NDE5LDEwNy4zNzIxNDMgTDAuOTc5ODA1MDUxLDEyMi42MzU3OCBDLTAuMjI1MzI4MjgzLDEyMy44NDA5MTQgLTAuMjI4MDk4NzM3LDEyNS43ODg1MiAwLjk3Mjg3OTA0LDEyNi45ODk0OTcgQzIuMTcyNDcxNDYsMTI4LjE4OTA5IDQuMTIxNDYzMDEsMTI4LjE4NDkzNCA1LjMyNTIxMDk4LDEyNi45ODExODYgTDIwLjU4ODg0NzksMTExLjcxNzU0OSBDMjEuNzkyNTk2LDExMC41MTM4MDEgMjEuNzk2NzUxNiwxMDguNTY0ODEgMjAuNTk3MTU5MSwxMDcuMzY1MjE3IEMxOS4zOTYxODE0LDEwNi4xNjQyNCAxNy40NDcxODk5LDEwNi4xNjgzOTUgMTYuMjQzNDQxOSwxMDcuMzcyMTQzIFogTTYwLjk2OTEyNTQsNDcuNDM5NjE2NyBMNjcuNDg2NTQxOCw1My45NTcwMzMxIEM2OC4wODg4NDMsNTQuNTU2Mjc4IDY5LjA2MjY5OTYsNTQuNTU0NDE4MyA2OS42NjI3MDc4LDUzLjk1Mjg3NzUgQzY5Ljk1MjIwNTEsNTMuNjY0ODUxNyA3MC4xMTU0MjY4LDUzLjI3MzYxOTkgNzAuMTE2NDc1OCw1Mi44NjUyNDk0IEM3MC4xMTc1MDUsNTIuNDU2ODc4OSA2OS45NTYyNzYzLDUyLjA2NDgyMTYgNjkuNjY4MjQ4Niw1MS43NzUzMjYzIEw2My4xNTA4MzIyLDQ1LjI1NzkwOTggQzYyLjg2MTQ2MzcsNDQuOTY5Mjc0OCA2Mi40NjkyMTI0LDQ0LjgwNzUyODQgNjIuMDYwNTAyNiw0NC44MDgzMDIyIEM2MS42NTE3OTI4LDQ0LjgwOTA4NzMgNjEuMjYwMTYxMyw0NC45NzIzMjg3IDYwLjk3MTg5NTgsNDUuMjYyMDY1NCBDNjAuMzcwNzE0NCw0NS44NjMyNDY4IDYwLjM2Nzk0MzksNDYuODM4NDM1MiA2MC45NjkxMjU0LDQ3LjQzOTYxNjcgTDYwLjk2OTEyNTQsNDcuNDM5NjE2NyBaIE01Mi4yNDc4Mzg4LDU2LjE2MDkwMzMgTDU4Ljc2NTI1NTIsNjIuNjc4MzE5NyBDNTkuMzY3NTU2NCw2My4yNzc1NjQ2IDYwLjM0MTQxMyw2My4yNzU3MDQ5IDYwLjk0MTQyMTIsNjIuNjc0MTY0MSBDNjEuNTQyOTYyLDYyLjA3NDE1NTkgNjEuNTQ0ODIxNyw2MS4xMDAyOTkzIDYwLjk0NTU3NjgsNjAuNDk3OTk4MSBMNTQuNDI4MTYwNCw1My45ODA1ODE3IEM1NC4xMzkwMzE5LDUzLjY5MjE4NzYgNTMuNzQ3MTgxMiw1My41MzA0NjEzIDUzLjMzODgxMSw1My41MzA5Nzg0IEM1Mi45MzA0NDA5LDUzLjUzMTUwMDQgNTIuNTM5MDAyOSw1My42OTQyMjMyIDUyLjI1MDYwOTIsNTMuOTgzMzUyMSBDNTEuNjQ5NDI3OCw1NC41ODQ1MzM2IDUxLjY0NjY1NzMsNTUuNTU5NzIyIDUyLjI0NzgzODgsNTYuMTYwOTAzMyBMNTIuMjQ3ODM4OCw1Ni4xNjA5MDMzIFogTTQzLjUyNjU1MjEsNjQuODgyMTkgTDUwLjA0Mzk2ODQsNzEuMzk5NjA2NCBDNTAuNjQ2MjY5Nyw3MS45OTg4NTEzIDUxLjYyMDEyNjMsNzEuOTk2OTkxNiA1Mi4yMjAxMzQ1LDcxLjM5NTQ1MDggQzUyLjgyMTY3NTMsNzAuNzk1NDQyNSA1Mi44MjM1MzUsNjkuODIxNTg2IDUyLjIyNDI5MDIsNjkuMjE5Mjg0NyBMNDUuNzA2ODczNyw2Mi43MDE4NjgzIEM0NS40MTc3NDUzLDYyLjQxMzQ3NDEgNDUuMDI1ODk0NSw2Mi4yNTE3NDc4IDQ0LjYxNzUyNDMsNjIuMjUyMjY0OSBDNDQuMjA5MTU0MSw2Mi4yNTI3ODY5IDQzLjgxNzcxNjIsNjIuNDE1NTA5OCA0My41MjkzMjI1LDYyLjcwNDYzODggQzQyLjkyNjc1NTgsNjMuMzA3MjA1NCA0Mi45MjUzNzA2LDY0LjI4MTAwODYgNDMuNTI2NTUyMSw2NC44ODIxOSBMNDMuNTI2NTUyMSw2NC44ODIxOSBaIE0zNC44MDUyNjU0LDczLjYwMzQ3NjYgTDQxLjMyMjY4MTgsODAuMTIwODkzMSBDNDEuOTI0OTgzMSw4MC43MjAxMzc5IDQyLjg5ODgzOTYsODAuNzE4Mjc4MiA0My40OTg4NDc5LDgwLjExNjczNzQgQzQ0LjEwMDM4ODcsNzkuNTE2NzI5MiA0NC4xMDIyNDg0LDc4LjU0Mjg3MjYgNDMuNTAzMDAzNSw3Ny45NDA1NzEzIEwzNi45ODU1ODcxLDcxLjQyMzE1NDkgQzM2LjY5NjQ1ODcsNzEuMTM0NzYwNyAzNi4zMDQ2MDc5LDcwLjk3MzAzNDQgMzUuODk2MjM3Nyw3MC45NzM1NTE1IEMzNS40ODc4Njc1LDcwLjk3NDA3MzYgMzUuMDk2NDI5Niw3MS4xMzY3OTY0IDM0LjgwODAzNTksNzEuNDI1OTI1NCBDMzQuMjA1NDY5Miw3Mi4wMjg0OTIgMzQuMjA0MDg0LDczLjAwMjI5NTIgMzQuODA1MjY1NCw3My42MDM0NzY2IEwzNC44MDUyNjU0LDczLjYwMzQ3NjYgWiIgaWQ9IuW9oueKtiIgZmlsbD0iIzc4MzZBMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(7576);
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(2959);
/******/ 	
/******/ })()
;
//# sourceMappingURL=ehsyringe.user.js.map