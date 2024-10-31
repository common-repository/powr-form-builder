/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		74: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		74: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"66":"async_settings"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"66":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"66":"async_settings"}[chunkId]||chunkId) + "-" + {"66":"edf3b2cfe7632af10e64"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./../wp-content/plugins/powr-form-builder/assets/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1213);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1087:
/***/ (function(module, exports) {

/*
 * jQuery File Upload Plugin 5.42.3
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/

    $.support.fileInput = !(new RegExp(
    // Handle devices which give false positives for the feature detection:
    '(Android (1\\.[0156]|2\\.[01]))' + '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' + '|(w(eb)?OSBrowser)|(webOS)' + '|(Kindle/(1\\.0|2\\.[05]|3\\.0))').test(window.navigator.userAgent) ||
    // Feature detection for all other devices:
    $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 && this._trigger(type, $.Event(type, { delegatedEvent: e })) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function i18n(message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function formData(form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function add(e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || data.autoUpload !== false && $(this).fileupload('option', 'autoUpload')) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: ['fileInput', 'dropZone', 'pasteZone', 'multipart', 'forceIframeTransport'],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function _BitrateTimer() {
            this.timestamp = Date.now ? Date.now() : new Date().getTime();
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function _isXHRUpload(options) {
            return !options.forceIframeTransport && (!options.multipart && $.support.xhrFileUpload || $.support.xhrFormDataFileUpload);
        },

        _getFormData: function _getFormData(options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({ name: name, value: value });
                });
                return formData;
            }
            return [];
        },

        _getTotal: function _getTotal(files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function _initProgressObject(obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function _initResponseObject(obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function _onProgress(e, data) {
            if (e.lengthComputable) {
                var now = Date.now ? Date.now() : new Date().getTime(),
                    loaded;
                if (data._time && data.progressInterval && now - data._time < data.progressInterval && e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(e.loaded / e.total * (data.chunkSize || data._progress.total)) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += loaded - data._progress.loaded;
                this._progress.bitrate = this._bitrateTimer.getBitrate(now, this._progress.loaded, data.bitrateInterval);
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(now, loaded, data.bitrateInterval);
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger('progress', $.Event('progress', { delegatedEvent: e }), data);
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger('progressall', $.Event('progressall', { delegatedEvent: e }), this._progress);
            }
        },

        _initProgressListener: function _initProgressListener(options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function _isInstanceOf(type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function _initXHRData(options) {
            var that = this,
                formData,
                file = options.files[0],

            // Ignore non-multipart setting if not supported:
            multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ? options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' + encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: $.type(options.paramName) === 'array' && options.paramName[index] || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) || that._isInstanceOf('Blob', file)) {
                                formData.append($.type(options.paramName) === 'array' && options.paramName[index] || paramName, file, file.uploadName || file.name);
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function _initIframeSettings(options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function _initDataSettings(options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function _getParamName(options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function _initFormSettings(options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type || $.type(options.form.prop('method')) === 'string' && options.form.prop('method') || '').toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' && options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function _getAJAXSettings(data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function _getDeferredState(deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function _enhancePromise(promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function _getXHRPromise(resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function _addConvenienceMethods(e, data) {
            var that = this,
                getPromise = function getPromise(args) {
                return $.Deferred().resolveWith(that, args).promise();
            };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue = (this._processQueue || getPromise([this])).pipe(function () {
                        if (data.errorThrown) {
                            return $.Deferred().rejectWith(that, [data]).promise();
                        }
                        return getPromise(arguments);
                    }).pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR = that._trigger('submit', $.Event('submit', { delegatedEvent: e }), this) !== false && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function _getUploadedBytes(jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 && parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function _chunkedUpload(options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                _upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) || options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(false, options.context, [null, 'error', file.error]);
            }
            // The chunk upload method:
            _upload = function upload() {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(file, ub, ub + mcs, file.type);
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' + (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = (that._trigger('chunksend', null, o) !== false && $.ajax(o) || that._getXHRPromise(false, o.context)).done(function (result, textStatus, jqXHR) {
                    ub = that._getUploadedBytes(jqXHR) || ub + o.chunkSize;
                    // Create a progress event if no final progress event
                    // with loaded equaling total has been triggered
                    // for this chunk:
                    if (currentLoaded + o.chunkSize - o._progress.loaded) {
                        that._onProgress($.Event('progress', {
                            lengthComputable: true,
                            loaded: ub - o.uploadedBytes,
                            total: ub - o.uploadedBytes
                        }), o);
                    }
                    options.uploadedBytes = o.uploadedBytes = ub;
                    o.result = result;
                    o.textStatus = textStatus;
                    o.jqXHR = jqXHR;
                    that._trigger('chunkdone', null, o);
                    that._trigger('chunkalways', null, o);
                    if (ub < fs) {
                        // File upload not yet complete,
                        // continue with the next chunk:
                        _upload();
                    } else {
                        dfd.resolveWith(o.context, [result, textStatus, jqXHR]);
                    }
                }).fail(function (jqXHR, textStatus, errorThrown) {
                    o.jqXHR = jqXHR;
                    o.textStatus = textStatus;
                    o.errorThrown = errorThrown;
                    that._trigger('chunkfail', null, o);
                    that._trigger('chunkalways', null, o);
                    dfd.rejectWith(o.context, [jqXHR, textStatus, errorThrown]);
                });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            _upload();
            return promise;
        },

        _beforeSend: function _beforeSend(e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function _onDone(result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function _onFail(jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function _onAlways(jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function _onSend(e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function send() {
                that._sending += 1;
                // Set timer for bitrate progress calculation:
                options._bitrateTimer = new that._BitrateTimer();
                jqXHR = jqXHR || ((aborted || that._trigger('send', $.Event('send', { delegatedEvent: e }), options) === false) && that._getXHRPromise(false, options.context, aborted) || that._chunkedUpload(options) || $.ajax(options)).done(function (result, textStatus, jqXHR) {
                    that._onDone(result, textStatus, jqXHR, options);
                }).fail(function (jqXHR, textStatus, errorThrown) {
                    that._onFail(jqXHR, textStatus, errorThrown, options);
                }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                    that._onAlways(jqXHRorResult, textStatus, jqXHRorError, options);
                    that._sending -= 1;
                    that._active -= 1;
                    if (options.limitConcurrentUploads && options.limitConcurrentUploads > that._sending) {
                        // Start the next queued upload,
                        // that has not been aborted:
                        var nextSlot = that._slots.shift();
                        while (nextSlot) {
                            if (that._getDeferredState(nextSlot) === 'pending') {
                                nextSlot.resolve();
                                break;
                            }
                            nextSlot = that._slots.shift();
                        }
                    }
                    if (that._active === 0) {
                        // The stop callback is triggered when all uploads have
                        // been completed, equivalent to the global ajaxStop event:
                        that._trigger('stop');
                    }
                });
                return jqXHR;
            };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    this._sequence = this._sequence.pipe(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function _onAdd(e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (limitSize && (!filesLength || files[0].size === undefined)) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) || !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength || batchSize + files[i + 1].size + overhead > limitSize || limit && i + 1 - j >= limit) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger('add', $.Event('add', { delegatedEvent: e }), newData);
                return result;
            });
            return result;
        },

        _replaceFileInput: function _replaceFileInput(data) {
            var input = data.fileInput,
                inputClone = input.clone(true);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function _handleFileTreeEntry(entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function errorHandler(e) {
                if (e && !e.entry) {
                    e.entry = entry;
                }
                // Since $.when returns immediately if one
                // Deferred is rejected, we use resolve instead.
                // This allows valid files and invalid items
                // to be returned together in one set:
                dfd.resolve([e]);
            },
                successHandler = function successHandler(entries) {
                that._handleFileTreeEntries(entries, path + entry.name + '/').done(function (files) {
                    dfd.resolve(files);
                }).fail(errorHandler);
            },
                readEntries = function readEntries() {
                dirReader.readEntries(function (results) {
                    if (!results.length) {
                        successHandler(entries);
                    } else {
                        entries = entries.concat(results);
                        readEntries();
                    }
                }, errorHandler);
            },
                dirReader,
                entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function _handleFileTreeEntries(entries, path) {
            var that = this;
            return $.when.apply($, $.map(entries, function (entry) {
                return that._handleFileTreeEntry(entry, path);
            })).pipe(function () {
                return Array.prototype.concat.apply([], arguments);
            });
        },

        _getDroppedFiles: function _getDroppedFiles(dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
                return this._handleFileTreeEntries($.map(items, function (item) {
                    var entry;
                    if (item.webkitGetAsEntry) {
                        entry = item.webkitGetAsEntry();
                        if (entry) {
                            // Workaround for Chrome bug #149735:
                            entry._file = item.getAsFile();
                        }
                        return entry;
                    }
                    return item.getAsEntry();
                }));
            }
            return $.Deferred().resolve($.makeArray(dataTransfer.files)).promise();
        },

        _getSingleFileInputFiles: function _getSingleFileInputFiles(fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') || fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{ name: value.replace(/^.*\\/, '') }];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function _getFileInputFiles(fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply($, $.map(fileInput, this._getSingleFileInputFiles)).pipe(function () {
                return Array.prototype.concat.apply([], arguments);
            });
        },

        _onChange: function _onChange(e) {
            var that = this,
                data = {
                fileInput: $(e.target),
                form: $(e.target.form)
            };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger('change', $.Event('change', { delegatedEvent: e }), data) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function _onPaste(e) {
            var items = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items,
                data = { files: [] };
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger('paste', $.Event('paste', { delegatedEvent: e }), data) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function _onDrop(e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger('drop', $.Event('drop', { delegatedEvent: e }), data) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function _initEventHandlers() {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function _destroyEventHandlers() {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function _setOption(key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function _initSpecialOptions() {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function _getRegExp(str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function _isRegExpOption(key, value) {
            return key !== 'url' && $.type(value) === 'string' && /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function _initDataAttributes() {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(this.element[0].attributes, function (index, attr) {
                var key = attr.name.toLowerCase(),
                    value;
                if (/^data-/.test(key)) {
                    // Convert hyphen-ated key to camelCase:
                    key = key.slice(5).replace(/-[a-z]/g, function (str) {
                        return str.charAt(1).toUpperCase();
                    });
                    value = data[key];
                    if (that._isRegExpOption(key, value)) {
                        value = that._getRegExp(value);
                    }
                    options[key] = value;
                }
            });
        },

        _create: function _create() {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function active() {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function progress() {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function add(data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function send(data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(function (files) {
                        if (aborted) {
                            return;
                        }
                        if (!files.length) {
                            dfd.reject();
                            return;
                        }
                        data.files = files;
                        jqXHR = that._onSend(null, data);
                        jqXHR.then(function (result, textStatus, jqXHR) {
                            dfd.resolve(result, textStatus, jqXHR);
                        }, function (jqXHR, textStatus, errorThrown) {
                            dfd.reject(jqXHR, textStatus, errorThrown);
                        });
                    });
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });
})(window.$);

/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

//Manifest file for app view. Used for all app views:
//This is for p up
__webpack_require__(1103);

__webpack_require__(1104);

__webpack_require__(1105);

$(function () {
  if (typeof onAppModelViewDefined != 'undefined') onAppModelViewDefined();
});

/***/ }),

/***/ 1103:
/***/ (function(module, exports) {

/*
 * Konami Code For jQuery Plugin
 * 1.2.1, 23 October 2013
 *
 * Using the Konami code, easily configure and Easter Egg for your page or any element on the page.
 *
 * Copyright 2011 - 2013 Tom McFarlin, http://tommcfarlin.com
 * Released under the MIT License
 */(function (e) {
  "use strict";
  e.fn.konami = function (t) {
    var n, r, i, s;n = e.extend({}, e.fn.konami.defaults, t);return this.each(function () {
      i = [];e(window).keyup(function (e) {
        s = e.keyCode || e.which;if (n.code.length > i.push(s)) {
          return;
        }if (n.code.length < i.length) {
          i.shift();
        }if (n.code.toString() !== i.toString()) {
          return;
        }n.cheat();
      });
    });
  };e.fn.konami.defaults = { code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], cheat: null };
})(jQuery);

/***/ }),

/***/ 1104:
/***/ (function(module, exports) {

(function (window, document, location, setTimeout, decodeURIComponent, encodeURIComponent) {
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global JSON, XMLHttpRequest, window, escape, unescape, ActiveXObject */
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

var global = this;
var channelId = Math.floor(Math.random() * 10000); // randomize the initial id in case of multiple closures loaded
var emptyFn = Function.prototype;
var reURI = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/; // returns groups for protocol (2), domain (3) and port (4)
var reParent = /[\-\w]+\/\.\.\//; // matches a foo/../ expression
var reDoubleSlash = /([^:])\/\//g; // matches // anywhere but in the protocol
var namespace = ""; // stores namespace under which easyXDM object is stored on the page (empty if object is global)
var easyXDM = {};
var _easyXDM = window.easyXDM; // map over global easyXDM in case of overwrite
var IFRAME_PREFIX = "easyXDM_";
var HAS_NAME_PROPERTY_BUG;
var useHash = false; // whether to use the hash over the query
var flashVersion; // will be set if using flash
var HAS_FLASH_THROTTLED_BUG;


// http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
function isHostMethod(object, property){
    var t = typeof object[property];
    return t == 'function' ||
    (!!(t == 'object' && object[property])) ||
    t == 'unknown';
}

function isHostObject(object, property){
    return !!(typeof(object[property]) == 'object' && object[property]);
}

// end

// http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
function isArray(o){
    return Object.prototype.toString.call(o) === '[object Array]';
}

// end
function hasFlash(){
    var name = "Shockwave Flash", mimeType = "application/x-shockwave-flash";

    if (!undef(navigator.plugins) && typeof navigator.plugins[name] == "object") {
        // adapted from the swfobject code
        var description = navigator.plugins[name].description;
        if (description && !undef(navigator.mimeTypes) && navigator.mimeTypes[mimeType] && navigator.mimeTypes[mimeType].enabledPlugin) {
            flashVersion = description.match(/\d+/g);
        }
    }
    if (!flashVersion) {
        var flash;
        try {
            flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            flashVersion = Array.prototype.slice.call(flash.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1);
            flash = null;
        }
        catch (notSupportedException) {
        }
    }
    if (!flashVersion) {
        return false;
    }
    var major = parseInt(flashVersion[0], 10), minor = parseInt(flashVersion[1], 10);
    HAS_FLASH_THROTTLED_BUG = major > 9 && minor > 0;
    return true;
}

/*
 * Cross Browser implementation for adding and removing event listeners.
 */
var on, un;
if (isHostMethod(window, "addEventListener")) {
    on = function(target, type, listener){
        target.addEventListener(type, listener, false);
    };
    un = function(target, type, listener){
        target.removeEventListener(type, listener, false);
    };
}
else if (isHostMethod(window, "attachEvent")) {
    on = function(object, sEvent, fpNotify){
        object.attachEvent("on" + sEvent, fpNotify);
    };
    un = function(object, sEvent, fpNotify){
        object.detachEvent("on" + sEvent, fpNotify);
    };
}
else {
    throw new Error("Browser not supported");
}

/*
 * Cross Browser implementation of DOMContentLoaded.
 */
var domIsReady = false, domReadyQueue = [], readyState;
if ("readyState" in document) {
    // If browser is WebKit-powered, check for both 'loaded' (legacy browsers) and
    // 'interactive' (HTML5 specs, recent WebKit builds) states.
    // https://bugs.webkit.org/show_bug.cgi?id=45119
    readyState = document.readyState;
    domIsReady = readyState == "complete" || (~ navigator.userAgent.indexOf('AppleWebKit/') && (readyState == "loaded" || readyState == "interactive"));
}
else {
    // If readyState is not supported in the browser, then in order to be able to fire whenReady functions apropriately
    // when added dynamically _after_ DOM load, we have to deduce wether the DOM is ready or not.
    // We only need a body to add elements to, so the existence of document.body is enough for us.
    domIsReady = !!document.body;
}

function dom_onReady(){
    if (domIsReady) {
        return;
    }
    domIsReady = true;
    for (var i = 0; i < domReadyQueue.length; i++) {
        domReadyQueue[i]();
    }
    domReadyQueue.length = 0;
}


if (!domIsReady) {
    if (isHostMethod(window, "addEventListener")) {
        on(document, "DOMContentLoaded", dom_onReady);
    }
    else {
        on(document, "readystatechange", function(){
            if (document.readyState == "complete") {
                dom_onReady();
            }
        });
        if (document.documentElement.doScroll && window === top) {
            var doScrollCheck = function(){
                if (domIsReady) {
                    return;
                }
                // http://javascript.nwbox.com/IEContentLoaded/
                try {
                    document.documentElement.doScroll("left");
                }
                catch (e) {
                    setTimeout(doScrollCheck, 1);
                    return;
                }
                dom_onReady();
            };
            doScrollCheck();
        }
    }

    // A fallback to window.onload, that will always work
    on(window, "load", dom_onReady);
}
/**
 * This will add a function to the queue of functions to be run once the DOM reaches a ready state.
 * If functions are added after this event then they will be executed immediately.
 * @param {function} fn The function to add
 * @param {Object} scope An optional scope for the function to be called with.
 */
function whenReady(fn, scope){
    if (domIsReady) {
        fn.call(scope);
        return;
    }
    domReadyQueue.push(function(){
        fn.call(scope);
    });
}

/**
 * Returns an instance of easyXDM from the parent window with
 * respect to the namespace.
 *
 * @return An instance of easyXDM (in the parent window)
 */
function getParentObject(){
    var obj = parent;
    if (namespace !== "") {
        for (var i = 0, ii = namespace.split("."); i < ii.length; i++) {
            obj = obj[ii[i]];
        }
    }
    return obj.easyXDM;
}

/**
 * Removes easyXDM variable from the global scope. It also returns control
 * of the easyXDM variable to whatever code used it before.
 *
 * @param {String} ns A string representation of an object that will hold
 *                    an instance of easyXDM.
 * @return An instance of easyXDM
 */
function noConflict(ns){

    window.easyXDM = _easyXDM;
    namespace = ns;
    if (namespace) {
        IFRAME_PREFIX = "easyXDM_" + namespace.replace(".", "_") + "_";
    }
    return easyXDM;
}

/*
 * Methods for working with URLs
 */
/**
 * Get the domain name from a url.
 * @param {String} url The url to extract the domain from.
 * @return The domain part of the url.
 * @type {String}
 */
function getDomainName(url){
    return url.match(reURI)[3];
}

/**
 * Get the port for a given URL, or "" if none
 * @param {String} url The url to extract the port from.
 * @return The port part of the url.
 * @type {String}
 */
function getPort(url){
    return url.match(reURI)[4] || "";
}

/**
 * Returns  a string containing the schema, domain and if present the port
 * @param {String} url The url to extract the location from
 * @return {String} The location part of the url
 */
function getLocation(url){
    var m = url.toLowerCase().match(reURI);
    var proto = m[2], domain = m[3], port = m[4] || "";
    if ((proto == "http:" && port == ":80") || (proto == "https:" && port == ":443")) {
        port = "";
    }
    return proto + "//" + domain + port;
}

/**
 * Resolves a relative url into an absolute one.
 * @param {String} url The path to resolve.
 * @return {String} The resolved url.
 */
function resolveUrl(url){

    // replace all // except the one in proto with /
    url = url.replace(reDoubleSlash, "$1/");

    // If the url is a valid url we do nothing
    if (!url.match(/^(http||https):\/\//)) {
        // If this is a relative path
        var path = (url.substring(0, 1) === "/") ? "" : location.pathname;
        if (path.substring(path.length - 1) !== "/") {
            path = path.substring(0, path.lastIndexOf("/") + 1);
        }

        url = location.protocol + "//" + location.host + path + url;
    }

    // reduce all 'xyz/../' to just ''
    while (reParent.test(url)) {
        url = url.replace(reParent, "");
    }

    return url;
}

/**
 * Appends the parameters to the given url.<br/>
 * The base url can contain existing query parameters.
 * @param {String} url The base url.
 * @param {Object} parameters The parameters to add.
 * @return {String} A new valid url with the parameters appended.
 */
function appendQueryParameters(url, parameters){

    var hash = "", indexOf = url.indexOf("#");
    if (indexOf !== -1) {
        hash = url.substring(indexOf);
        url = url.substring(0, indexOf);
    }
    var q = [];
    for (var key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            q.push(key + "=" + encodeURIComponent(parameters[key]));
        }
    }
    return url + (useHash ? "#" : (url.indexOf("?") == -1 ? "?" : "&")) + q.join("&") + hash;
}


// build the query object either from location.query, if it contains the xdm_e argument, or from location.hash
var query = (function(input){
    input = input.substring(1).split("&");
    var data = {}, pair, i = input.length;
    while (i--) {
        pair = input[i].split("=");
        data[pair[0]] = decodeURIComponent(pair[1]);
    }
    return data;
}(/xdm_e=/.test(location.search) ? location.search : location.hash));

/*
 * Helper methods
 */
/**
 * Helper for checking if a variable/property is undefined
 * @param {Object} v The variable to test
 * @return {Boolean} True if the passed variable is undefined
 */
function undef(v){
    return typeof v === "undefined";
}

/**
 * A safe implementation of HTML5 JSON. Feature testing is used to make sure the implementation works.
 * @return {JSON} A valid JSON conforming object, or null if not found.
 */
var getJSON = function(){
    var cached = {};
    var obj = {
        a: [1, 2, 3]
    }, json = "{\"a\":[1,2,3]}";

    if (typeof JSON != "undefined" && typeof JSON.stringify === "function" && JSON.stringify(obj).replace((/\s/g), "") === json) {
        // this is a working JSON instance
        return JSON;
    }
    if (Object.toJSON) {
        if (Object.toJSON(obj).replace((/\s/g), "") === json) {
            // this is a working stringify method
            cached.stringify = Object.toJSON;
        }
    }

    if (typeof String.prototype.evalJSON === "function") {
        obj = json.evalJSON();
        if (obj.a && obj.a.length === 3 && obj.a[2] === 3) {
            // this is a working parse method
            cached.parse = function(str){
                return str.evalJSON();
            };
        }
    }

    if (cached.stringify && cached.parse) {
        // Only memoize the result if we have valid instance
        getJSON = function(){
            return cached;
        };
        return cached;
    }
    return null;
};

/**
 * Applies properties from the source object to the target object.<br/>
 * @param {Object} target The target of the properties.
 * @param {Object} source The source of the properties.
 * @param {Boolean} noOverwrite Set to True to only set non-existing properties.
 */
function apply(destination, source, noOverwrite){
    var member;
    for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
            if (prop in destination) {
                member = source[prop];
                if (typeof member === "object") {
                    apply(destination[prop], member, noOverwrite);
                }
                else if (!noOverwrite) {
                    destination[prop] = source[prop];
                }
            }
            else {
                destination[prop] = source[prop];
            }
        }
    }
    return destination;
}

// This tests for the bug in IE where setting the [name] property using javascript causes the value to be redirected into [submitName].
function testForNamePropertyBug(){
    var form = document.body.appendChild(document.createElement("form")), input = form.appendChild(document.createElement("input"));
    input.name = IFRAME_PREFIX + "TEST" + channelId; // append channelId in order to avoid caching issues
    HAS_NAME_PROPERTY_BUG = input !== form.elements[input.name];
    document.body.removeChild(form);
}

/**
 * Creates a frame and appends it to the DOM.
 * @param config {object} This object can have the following properties
 * <ul>
 * <li> {object} prop The properties that should be set on the frame. This should include the 'src' property.</li>
 * <li> {object} attr The attributes that should be set on the frame.</li>
 * <li> {DOMElement} container Its parent element (Optional).</li>
 * <li> {function} onLoad A method that should be called with the frames contentWindow as argument when the frame is fully loaded. (Optional)</li>
 * </ul>
 * @return The frames DOMElement
 * @type DOMElement
 */
function createFrame(config){
    if (undef(HAS_NAME_PROPERTY_BUG)) {
        testForNamePropertyBug();
    }
    var frame;
    // This is to work around the problems in IE6/7 with setting the name property.
    // Internally this is set as 'submitName' instead when using 'iframe.name = ...'
    // This is not required by easyXDM itself, but is to facilitate other use cases
    if (HAS_NAME_PROPERTY_BUG) {
        frame = document.createElement("<iframe name=\"" + config.props.name + "\"/>");
    }
    else {
        frame = document.createElement("IFRAME");
        frame.name = config.props.name;
    }

    frame.id = frame.name = config.props.name;
    delete config.props.name;

    if (typeof config.container == "string") {
        config.container = document.getElementById(config.container);
    }

    if (!config.container) {
        // This needs to be hidden like this, simply setting display:none and the like will cause failures in some browsers.
        apply(frame.style, {
            position: "absolute",
            top: "-2000px",
            // Avoid potential horizontal scrollbar
            left: "0px"
        });
        config.container = document.body;
    }

    // HACK: IE cannot have the src attribute set when the frame is appended
    //       into the container, so we set it to "javascript:false" as a
    //       placeholder for now.  If we left the src undefined, it would
    //       instead default to "about:blank", which causes SSL mixed-content
    //       warnings in IE6 when on an SSL parent page.
    var src = config.props.src;
    config.props.src = "javascript:false";

    // transfer properties to the frame
    apply(frame, config.props);

    frame.border = frame.frameBorder = 0;
    frame.allowTransparency = true;
    config.container.appendChild(frame);

    if (config.onLoad) {
        on(frame, "load", config.onLoad);
    }

    // set the frame URL to the proper value (we previously set it to
    // "javascript:false" to work around the IE issue mentioned above)
    if(config.usePost) {
        var form = config.container.appendChild(document.createElement('form')), input;
        form.target = frame.name;
        form.action = src;
        form.method = 'POST';
        if (typeof(config.usePost) === 'object') {
            for (var i in config.usePost) {
                if (config.usePost.hasOwnProperty(i)) {
                    if (HAS_NAME_PROPERTY_BUG) {
                        input = document.createElement('<input name="' + i + '"/>');
                    } else {
                        input = document.createElement("INPUT");
                        input.name = i;
                    }
                    input.value = config.usePost[i];
                    form.appendChild(input);
                }
            }
        }
        form.submit();
        form.parentNode.removeChild(form);
    } else {
        frame.src = src;
    }
    config.props.src = src;

    return frame;
}

/**
 * Check whether a domain is allowed using an Access Control List.
 * The ACL can contain * and ? as wildcards, or can be regular expressions.
 * If regular expressions they need to begin with ^ and end with $.
 * @param {Array/String} acl The list of allowed domains
 * @param {String} domain The domain to test.
 * @return {Boolean} True if the domain is allowed, false if not.
 */
function checkAcl(acl, domain){
    // normalize into an array
    if (typeof acl == "string") {
        acl = [acl];
    }
    var re, i = acl.length;
    while (i--) {
        re = acl[i];
        re = new RegExp(re.substr(0, 1) == "^" ? re : ("^" + re.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"));
        if (re.test(domain)) {
            return true;
        }
    }
    return false;
}

/*
 * Functions related to stacks
 */
/**
 * Prepares an array of stack-elements suitable for the current configuration
 * @param {Object} config The Transports configuration. See easyXDM.Socket for more.
 * @return {Array} An array of stack-elements with the TransportElement at index 0.
 */
function prepareTransportStack(config){
    var protocol = config.protocol, stackEls;
    config.isHost = config.isHost || undef(query.xdm_p);
    useHash = config.hash || false;

    if (!config.props) {
        config.props = {};
    }
    if (!config.isHost) {
        config.channel = query.xdm_c.replace(/["'<>\\]/g, "");
        config.secret = query.xdm_s;
        config.remote = query.xdm_e.replace(/["'<>\\]/g, "");
        ;
        protocol = query.xdm_p;
        if (config.acl && !checkAcl(config.acl, config.remote)) {
            throw new Error("Access denied for " + config.remote);
        }
    }
    else {
        config.remote = resolveUrl(config.remote);
        config.channel = config.channel || "default" + channelId++;
        config.secret = Math.random().toString(16).substring(2);
        if (undef(protocol)) {
            if (getLocation(location.href) == getLocation(config.remote)) {
                /*
                 * Both documents has the same origin, lets use direct access.
                 */
                protocol = "4";
            }
            else if (isHostMethod(window, "postMessage") || isHostMethod(document, "postMessage")) {
                /*
                 * This is supported in IE8+, Firefox 3+, Opera 9+, Chrome 2+ and Safari 4+
                 */
                protocol = "1";
            }
            else if (config.swf && isHostMethod(window, "ActiveXObject") && hasFlash()) {
                /*
                 * The Flash transport superseedes the NixTransport as the NixTransport has been blocked by MS
                 */
                protocol = "6";
            }
            else if (navigator.product === "Gecko" && "frameElement" in window && navigator.userAgent.indexOf('WebKit') == -1) {
                /*
                 * This is supported in Gecko (Firefox 1+)
                 */
                protocol = "5";
            }
            else if (config.remoteHelper) {
                /*
                 * This is supported in all browsers that retains the value of window.name when
                 * navigating from one domain to another, and where parent.frames[foo] can be used
                 * to get access to a frame from the same domain
                 */
                protocol = "2";
            }
            else {
                /*
                 * This is supported in all browsers where [window].location is writable for all
                 * The resize event will be used if resize is supported and the iframe is not put
                 * into a container, else polling will be used.
                 */
                protocol = "0";
            }
        }
    }
    config.protocol = protocol; // for conditional branching
    switch (protocol) {
        case "0":// 0 = HashTransport
            apply(config, {
                interval: 100,
                delay: 2000,
                useResize: true,
                useParent: false,
                usePolling: false
            }, true);
            if (config.isHost) {
                if (!config.local) {
                    // If no local is set then we need to find an image hosted on the current domain
                    var domain = location.protocol + "//" + location.host, images = document.body.getElementsByTagName("img"), image;
                    var i = images.length;
                    while (i--) {
                        image = images[i];
                        if (image.src.substring(0, domain.length) === domain) {
                            config.local = image.src;
                            break;
                        }
                    }
                    if (!config.local) {
                        // If no local was set, and we are unable to find a suitable file, then we resort to using the current window
                        config.local = window;
                    }
                }

                var parameters = {
                    xdm_c: config.channel,
                    xdm_p: 0
                };

                if (config.local === window) {
                    // We are using the current window to listen to
                    config.usePolling = true;
                    config.useParent = true;
                    config.local = location.protocol + "//" + location.host + location.pathname + location.search;
                    parameters.xdm_e = config.local;
                    parameters.xdm_pa = 1; // use parent
                }
                else {
                    parameters.xdm_e = resolveUrl(config.local);
                }

                if (config.container) {
                    config.useResize = false;
                    parameters.xdm_po = 1; // use polling
                }
                config.remote = appendQueryParameters(config.remote, parameters);
            }
            else {
                apply(config, {
                    channel: query.xdm_c,
                    remote: query.xdm_e,
                    useParent: !undef(query.xdm_pa),
                    usePolling: !undef(query.xdm_po),
                    useResize: config.useParent ? false : config.useResize
                });
            }
            stackEls = [new easyXDM.stack.HashTransport(config), new easyXDM.stack.ReliableBehavior({}), new easyXDM.stack.QueueBehavior({
                encode: true,
                maxLength: 4000 - config.remote.length
            }), new easyXDM.stack.VerifyBehavior({
                initiate: config.isHost
            })];
            break;
        case "1":
            stackEls = [new easyXDM.stack.PostMessageTransport(config)];
            break;
        case "2":
            if (config.isHost) {
                config.remoteHelper = resolveUrl(config.remoteHelper);
            }
            stackEls = [new easyXDM.stack.NameTransport(config), new easyXDM.stack.QueueBehavior(), new easyXDM.stack.VerifyBehavior({
                initiate: config.isHost
            })];
            break;
        case "3":
            stackEls = [new easyXDM.stack.NixTransport(config)];
            break;
        case "4":
            stackEls = [new easyXDM.stack.SameOriginTransport(config)];
            break;
        case "5":
            stackEls = [new easyXDM.stack.FrameElementTransport(config)];
            break;
        case "6":
            if (!flashVersion) {
                hasFlash();
            }
            stackEls = [new easyXDM.stack.FlashTransport(config)];
            break;
    }
    // this behavior is responsible for buffering outgoing messages, and for performing lazy initialization
    stackEls.push(new easyXDM.stack.QueueBehavior({
        lazy: config.lazy,
        remove: true
    }));
    return stackEls;
}

/**
 * Chains all the separate stack elements into a single usable stack.<br/>
 * If an element is missing a necessary method then it will have a pass-through method applied.
 * @param {Array} stackElements An array of stack elements to be linked.
 * @return {easyXDM.stack.StackElement} The last element in the chain.
 */
function chainStack(stackElements){
    var stackEl, defaults = {
        incoming: function(message, origin){
            this.up.incoming(message, origin);
        },
        outgoing: function(message, recipient){
            this.down.outgoing(message, recipient);
        },
        callback: function(success){
            this.up.callback(success);
        },
        init: function(){
            this.down.init();
        },
        destroy: function(){
            this.down.destroy();
        }
    };
    for (var i = 0, len = stackElements.length; i < len; i++) {
        stackEl = stackElements[i];
        apply(stackEl, defaults, true);
        if (i !== 0) {
            stackEl.down = stackElements[i - 1];
        }
        if (i !== len - 1) {
            stackEl.up = stackElements[i + 1];
        }
    }
    return stackEl;
}

/**
 * This will remove a stackelement from its stack while leaving the stack functional.
 * @param {Object} element The elment to remove from the stack.
 */
function removeFromStack(element){
    element.up.down = element.down;
    element.down.up = element.up;
    element.up = element.down = null;
}

/*
 * Export the main object and any other methods applicable
 */
/**
 * @class easyXDM
 * A javascript library providing cross-browser, cross-domain messaging/RPC.
 * @version 2.4.19
 * @singleton
 */
apply(easyXDM, {
    /**
     * The version of the library
     * @type {string}
     */
    version: "2.4.19",
    /**
     * This is a map containing all the query parameters passed to the document.
     * All the values has been decoded using decodeURIComponent.
     * @type {object}
     */
    query: query,
    /**
     * @private
     */
    stack: {},
    /**
     * Applies properties from the source object to the target object.<br/>
     * @param {object} target The target of the properties.
     * @param {object} source The source of the properties.
     * @param {boolean} noOverwrite Set to True to only set non-existing properties.
     */
    apply: apply,

    /**
     * A safe implementation of HTML5 JSON. Feature testing is used to make sure the implementation works.
     * @return {JSON} A valid JSON conforming object, or null if not found.
     */
    getJSONObject: getJSON,
    /**
     * This will add a function to the queue of functions to be run once the DOM reaches a ready state.
     * If functions are added after this event then they will be executed immediately.
     * @param {function} fn The function to add
     * @param {object} scope An optional scope for the function to be called with.
     */
    whenReady: whenReady,
    /**
     * Removes easyXDM variable from the global scope. It also returns control
     * of the easyXDM variable to whatever code used it before.
     *
     * @param {String} ns A string representation of an object that will hold
     *                    an instance of easyXDM.
     * @return An instance of easyXDM
     */
    noConflict: noConflict
});

/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global console, _FirebugCommandLine,  easyXDM, window, escape, unescape, isHostObject, undef, _trace, domIsReady, emptyFn, namespace */
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, isHostObject, isHostMethod, un, on, createFrame, debug */
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.DomHelper
 * Contains methods for dealing with the DOM
 * @singleton
 */
easyXDM.DomHelper = {
    /**
     * Provides a consistent interface for adding eventhandlers
     * @param {Object} target The target to add the event to
     * @param {String} type The name of the event
     * @param {Function} listener The listener
     */
    on: on,
    /**
     * Provides a consistent interface for removing eventhandlers
     * @param {Object} target The target to remove the event from
     * @param {String} type The name of the event
     * @param {Function} listener The listener
     */
    un: un,
    /**
     * Checks for the presence of the JSON object.
     * If it is not present it will use the supplied path to load the JSON2 library.
     * This should be called in the documents head right after the easyXDM script tag.
     * http://json.org/json2.js
     * @param {String} path A valid path to json2.js
     */
    requiresJSON: function(path){
        if (!isHostObject(window, "JSON")) {
            // we need to encode the < in order to avoid an illegal token error
            // when the script is inlined in a document.
            document.write('<' + 'script type="text/javascript" src="' + path + '"><' + '/script>');
        }
    }
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, debug */
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

(function(){
    // The map containing the stored functions
    var _map = {};

    /**
     * @class easyXDM.Fn
     * This contains methods related to function handling, such as storing callbacks.
     * @singleton
     * @namespace easyXDM
     */
    easyXDM.Fn = {
        /**
         * Stores a function using the given name for reference
         * @param {String} name The name that the function should be referred by
         * @param {Function} fn The function to store
         * @namespace easyXDM.fn
         */
        set: function(name, fn){
            _map[name] = fn;
        },
        /**
         * Retrieves the function referred to by the given name
         * @param {String} name The name of the function to retrieve
         * @param {Boolean} del If the function should be deleted after retrieval
         * @return {Function} The stored function
         * @namespace easyXDM.fn
         */
        get: function(name, del){
            if (!_map.hasOwnProperty(name)) {
                return;
            }
            var fn = _map[name];

            if (del) {
                delete _map[name];
            }
            return fn;
        }
    };

}());
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, chainStack, prepareTransportStack, getLocation, debug */
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.Socket
 * This class creates a transport channel between two domains that is usable for sending and receiving string-based messages.<br/>
 * The channel is reliable, supports queueing, and ensures that the message originates from the expected domain.<br/>
 * Internally different stacks will be used depending on the browsers features and the available parameters.
 * <h2>How to set up</h2>
 * Setting up the provider:
 * <pre><code>
 * var socket = new easyXDM.Socket({
 * &nbsp; local: "name.html",
 * &nbsp; onReady: function(){
 * &nbsp; &nbsp; &#47;&#47; you need to wait for the onReady callback before using the socket
 * &nbsp; &nbsp; socket.postMessage("foo-message");
 * &nbsp; },
 * &nbsp; onMessage: function(message, origin) {
 * &nbsp;&nbsp; alert("received " + message + " from " + origin);
 * &nbsp; }
 * });
 * </code></pre>
 * Setting up the consumer:
 * <pre><code>
 * var socket = new easyXDM.Socket({
 * &nbsp; remote: "http:&#47;&#47;remotedomain/page.html",
 * &nbsp; remoteHelper: "http:&#47;&#47;remotedomain/name.html",
 * &nbsp; onReady: function(){
 * &nbsp; &nbsp; &#47;&#47; you need to wait for the onReady callback before using the socket
 * &nbsp; &nbsp; socket.postMessage("foo-message");
 * &nbsp; },
 * &nbsp; onMessage: function(message, origin) {
 * &nbsp;&nbsp; alert("received " + message + " from " + origin);
 * &nbsp; }
 * });
 * </code></pre>
 * If you are unable to upload the <code>name.html</code> file to the consumers domain then remove the <code>remoteHelper</code> property
 * and easyXDM will fall back to using the HashTransport instead of the NameTransport when not able to use any of the primary transports.
 * @namespace easyXDM
 * @constructor
 * @cfg {String/Window} local The url to the local name.html document, a local static file, or a reference to the local window.
 * @cfg {Boolean} lazy (Consumer only) Set this to true if you want easyXDM to defer creating the transport until really needed.
 * @cfg {String} remote (Consumer only) The url to the providers document.
 * @cfg {String} remoteHelper (Consumer only) The url to the remote name.html file. This is to support NameTransport as a fallback. Optional.
 * @cfg {Number} delay The number of milliseconds easyXDM should try to get a reference to the local window.  Optional, defaults to 2000.
 * @cfg {Number} interval The interval used when polling for messages. Optional, defaults to 300.
 * @cfg {String} channel (Consumer only) The name of the channel to use. Can be used to set consistent iframe names. Must be unique. Optional.
 * @cfg {Function} onMessage The method that should handle incoming messages.<br/> This method should accept two arguments, the message as a string, and the origin as a string. Optional.
 * @cfg {Function} onReady A method that should be called when the transport is ready. Optional.
 * @cfg {DOMElement|String} container (Consumer only) The element, or the id of the element that the primary iframe should be inserted into. If not set then the iframe will be positioned off-screen. Optional.
 * @cfg {Array/String} acl (Provider only) Here you can specify which '[protocol]://[domain]' patterns that should be allowed to act as the consumer towards this provider.<br/>
 * This can contain the wildcards ? and *.  Examples are 'http://example.com', '*.foo.com' and '*dom?.com'. If you want to use reqular expressions then you pattern needs to start with ^ and end with $.
 * If none of the patterns match an Error will be thrown.
 * @cfg {Object} props (Consumer only) Additional properties that should be applied to the iframe. This can also contain nested objects e.g: <code>{style:{width:"100px", height:"100px"}}</code>.
 * Properties such as 'name' and 'src' will be overrided. Optional.
 */
easyXDM.Socket = function(config){

    // create the stack
    var stack = chainStack(prepareTransportStack(config).concat([{
        incoming: function(message, origin){
            config.onMessage(message, origin);
        },
        callback: function(success){
            if (config.onReady) {
                config.onReady(success);
            }
        }
    }])), recipient = getLocation(config.remote);

    // set the origin
    this.origin = getLocation(config.remote);

    /**
     * Initiates the destruction of the stack.
     */
    this.destroy = function(){
        stack.destroy();
    };

    /**
     * Posts a message to the remote end of the channel
     * @param {String} message The message to send
     */
    this.postMessage = function(message){
        stack.outgoing(message, recipient);
    };

    stack.init();
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, undef,, chainStack, prepareTransportStack, debug, getLocation */
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.Rpc
 * Creates a proxy object that can be used to call methods implemented on the remote end of the channel, and also to provide the implementation
 * of methods to be called from the remote end.<br/>
 * The instantiated object will have methods matching those specified in <code>config.remote</code>.<br/>
 * This requires the JSON object present in the document, either natively, using json.org's json2 or as a wrapper around library spesific methods.
 * <h2>How to set up</h2>
 * <pre><code>
 * var rpc = new easyXDM.Rpc({
 * &nbsp; &#47;&#47; this configuration is equal to that used by the Socket.
 * &nbsp; remote: "http:&#47;&#47;remotedomain/...",
 * &nbsp; onReady: function(){
 * &nbsp; &nbsp; &#47;&#47; you need to wait for the onReady callback before using the proxy
 * &nbsp; &nbsp; rpc.foo(...
 * &nbsp; }
 * },{
 * &nbsp; local: {..},
 * &nbsp; remote: {..}
 * });
 * </code></pre>
 *
 * <h2>Exposing functions (procedures)</h2>
 * <pre><code>
 * var rpc = new easyXDM.Rpc({
 * &nbsp; ...
 * },{
 * &nbsp; local: {
 * &nbsp; &nbsp; nameOfMethod: {
 * &nbsp; &nbsp; &nbsp; method: function(arg1, arg2, success, error){
 * &nbsp; &nbsp; &nbsp; &nbsp; ...
 * &nbsp; &nbsp; &nbsp; }
 * &nbsp; &nbsp; },
 * &nbsp; &nbsp; &#47;&#47; with shorthand notation
 * &nbsp; &nbsp; nameOfAnotherMethod:  function(arg1, arg2, success, error){
 * &nbsp; &nbsp; }
 * &nbsp; },
 * &nbsp; remote: {...}
 * });
 * </code></pre>

 * The function referenced by  [method] will receive the passed arguments followed by the callback functions <code>success</code> and <code>error</code>.<br/>
 * To send a successfull result back you can use
 *     <pre><code>
 *     return foo;
 *     </pre></code>
 * or
 *     <pre><code>
 *     success(foo);
 *     </pre></code>
 *  To return an error you can use
 *     <pre><code>
 *     throw new Error("foo error");
 *     </code></pre>
 * or
 *     <pre><code>
 *     error("foo error");
 *     </code></pre>
 *
 * <h2>Defining remotely exposed methods (procedures/notifications)</h2>
 * The definition of the remote end is quite similar:
 * <pre><code>
 * var rpc = new easyXDM.Rpc({
 * &nbsp; ...
 * },{
 * &nbsp; local: {...},
 * &nbsp; remote: {
 * &nbsp; &nbsp; nameOfMethod: {}
 * &nbsp; }
 * });
 * </code></pre>
 * To call a remote method use
 * <pre><code>
 * rpc.nameOfMethod("arg1", "arg2", function(value) {
 * &nbsp; alert("success: " + value);
 * }, function(message) {
 * &nbsp; alert("error: " + message + );
 * });
 * </code></pre>
 * Both the <code>success</code> and <code>errror</code> callbacks are optional.<br/>
 * When called with no callback a JSON-RPC 2.0 notification will be executed.
 * Be aware that you will not be notified of any errors with this method.
 * <br/>
 * <h2>Specifying a custom serializer</h2>
 * If you do not want to use the JSON2 library for non-native JSON support, but instead capabilities provided by some other library
 * then you can specify a custom serializer using <code>serializer: foo</code>
 * <pre><code>
 * var rpc = new easyXDM.Rpc({
 * &nbsp; ...
 * },{
 * &nbsp; local: {...},
 * &nbsp; remote: {...},
 * &nbsp; serializer : {
 * &nbsp; &nbsp; parse: function(string){ ... },
 * &nbsp; &nbsp; stringify: function(object) {...}
 * &nbsp; }
 * });
 * </code></pre>
 * If <code>serializer</code> is set then the class will not attempt to use the native implementation.
 * @namespace easyXDM
 * @constructor
 * @param {Object} config The underlying transports configuration. See easyXDM.Socket for available parameters.
 * @param {Object} jsonRpcConfig The description of the interface to implement.
 */
easyXDM.Rpc = function(config, jsonRpcConfig){

    // expand shorthand notation
    if (jsonRpcConfig.local) {
        for (var method in jsonRpcConfig.local) {
            if (jsonRpcConfig.local.hasOwnProperty(method)) {
                var member = jsonRpcConfig.local[method];
                if (typeof member === "function") {
                    jsonRpcConfig.local[method] = {
                        method: member
                    };
                }
            }
        }
    }

    // create the stack
    var stack = chainStack(prepareTransportStack(config).concat([new easyXDM.stack.RpcBehavior(this, jsonRpcConfig), {
        callback: function(success){
            if (config.onReady) {
                config.onReady(success);
            }
        }
    }]));

    // set the origin
    this.origin = getLocation(config.remote);


    /**
     * Initiates the destruction of the stack.
     */
    this.destroy = function(){
        stack.destroy();
    };

    stack.init();
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, getLocation, appendQueryParameters, createFrame, debug, un, on, apply, whenReady, getParentObject, IFRAME_PREFIX*/
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.stack.SameOriginTransport
 * SameOriginTransport is a transport class that can be used when both domains have the same origin.<br/>
 * This can be useful for testing and for when the main application supports both internal and external sources.
 * @namespace easyXDM.stack
 * @constructor
 * @param {Object} config The transports configuration.
 * @cfg {String} remote The remote document to communicate with.
 */
easyXDM.stack.SameOriginTransport = function(config){
    var pub, frame, send, targetOrigin;

    return (pub = {
        outgoing: function(message, domain, fn){
            send(message);
            if (fn) {
                fn();
            }
        },
        destroy: function(){
            if (frame) {
                frame.parentNode.removeChild(frame);
                frame = null;
            }
        },
        onDOMReady: function(){
            targetOrigin = getLocation(config.remote);

            if (config.isHost) {
                // set up the iframe
                apply(config.props, {
                    src: appendQueryParameters(config.remote, {
                        xdm_e: location.protocol + "//" + location.host + location.pathname,
                        xdm_c: config.channel,
                        xdm_p: 4 // 4 = SameOriginTransport
                    }),
                    name: IFRAME_PREFIX + config.channel + "_provider"
                });
                frame = createFrame(config);
                easyXDM.Fn.set(config.channel, function(sendFn){
                    send = sendFn;
                    setTimeout(function(){
                        pub.up.callback(true);
                    }, 0);
                    return function(msg){
                        pub.up.incoming(msg, targetOrigin);
                    };
                });
            }
            else {
                send = getParentObject().Fn.get(config.channel, true)(function(msg){
                    pub.up.incoming(msg, targetOrigin);
                });
                setTimeout(function(){
                    pub.up.callback(true);
                }, 0);
            }
        },
        init: function(){
            whenReady(pub.onDOMReady, pub);
        }
    });
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global global, easyXDM, window, getLocation, appendQueryParameters, createFrame, debug, apply, whenReady, IFRAME_PREFIX, namespace, resolveUrl, getDomainName, HAS_FLASH_THROTTLED_BUG, getPort, query*/
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.stack.FlashTransport
 * FlashTransport is a transport class that uses an SWF with LocalConnection to pass messages back and forth.
 * @namespace easyXDM.stack
 * @constructor
 * @param {Object} config The transports configuration.
 * @cfg {String} remote The remote domain to communicate with.
 * @cfg {String} secret the pre-shared secret used to secure the communication.
 * @cfg {String} swf The path to the swf file
 * @cfg {Boolean} swfNoThrottle Set this to true if you want to take steps to avoid beeing throttled when hidden.
 * @cfg {String || DOMElement} swfContainer Set this if you want to control where the swf is placed
 */
easyXDM.stack.FlashTransport = function(config){
    var pub, // the public interface
 frame, send, targetOrigin, swf, swfContainer;

    function onMessage(message, origin){
        setTimeout(function(){
            pub.up.incoming(message, targetOrigin);
        }, 0);
    }

    /**
     * This method adds the SWF to the DOM and prepares the initialization of the channel
     */
    function addSwf(domain){
        // the differentiating query argument is needed in Flash9 to avoid a caching issue where LocalConnection would throw an error.
        var url = config.swf + "?host=" + config.isHost;
        var id = "easyXDM_swf_" + Math.floor(Math.random() * 10000);

        // prepare the init function that will fire once the swf is ready
        easyXDM.Fn.set("flash_loaded" + domain.replace(/[\-.]/g, "_"), function(){
            easyXDM.stack.FlashTransport[domain].swf = swf = swfContainer.firstChild;
            var queue = easyXDM.stack.FlashTransport[domain].queue;
            for (var i = 0; i < queue.length; i++) {
                queue[i]();
            }
            queue.length = 0;
        });

        if (config.swfContainer) {
            swfContainer = (typeof config.swfContainer == "string") ? document.getElementById(config.swfContainer) : config.swfContainer;
        }
        else {
            // create the container that will hold the swf
            swfContainer = document.createElement('div');

            // http://bugs.adobe.com/jira/browse/FP-4796
            // http://tech.groups.yahoo.com/group/flexcoders/message/162365
            // https://groups.google.com/forum/#!topic/easyxdm/mJZJhWagoLc
            apply(swfContainer.style, HAS_FLASH_THROTTLED_BUG && config.swfNoThrottle ? {
                height: "20px",
                width: "20px",
                position: "fixed",
                right: 0,
                top: 0
            } : {
                height: "1px",
                width: "1px",
                position: "absolute",
                overflow: "hidden",
                right: 0,
                top: 0
            });
            document.body.appendChild(swfContainer);
        }

        // create the object/embed
        var flashVars = "callback=flash_loaded" + encodeURIComponent(domain.replace(/[\-.]/g, "_"))
            + "&proto=" + global.location.protocol
            + "&domain=" + encodeURIComponent(getDomainName(global.location.href))
            + "&port=" + encodeURIComponent(getPort(global.location.href))
            + "&ns=" + encodeURIComponent(namespace);
        swfContainer.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + id + "' data='" + url + "'>" +
        "<param name='allowScriptAccess' value='always'></param>" +
        "<param name='wmode' value='transparent'>" +
        "<param name='movie' value='" +
        url +
        "'></param>" +
        "<param name='flashvars' value='" +
        flashVars +
        "'></param>" +
        "<embed type='application/x-shockwave-flash' FlashVars='" +
        flashVars +
        "' allowScriptAccess='always' wmode='transparent' src='" +
        url +
        "' height='1' width='1'></embed>" +
        "</object>";
    }

    return (pub = {
        outgoing: function(message, domain, fn){
            swf.postMessage(config.channel, message.toString());
            if (fn) {
                fn();
            }
        },
        destroy: function(){
            try {
                swf.destroyChannel(config.channel);
            }
            catch (e) {
            }
            swf = null;
            if (frame) {
                frame.parentNode.removeChild(frame);
                frame = null;
            }
        },
        onDOMReady: function(){

            targetOrigin = config.remote;

            // Prepare the code that will be run after the swf has been intialized
            easyXDM.Fn.set("flash_" + config.channel + "_init", function(){
                setTimeout(function(){
                    pub.up.callback(true);
                });
            });

            // set up the omMessage handler
            easyXDM.Fn.set("flash_" + config.channel + "_onMessage", onMessage);

            config.swf = resolveUrl(config.swf); // reports have been made of requests gone rogue when using relative paths
            var swfdomain = getDomainName(config.swf);
            var fn = function(){
                // set init to true in case the fn was called was invoked from a separate instance
                easyXDM.stack.FlashTransport[swfdomain].init = true;
                swf = easyXDM.stack.FlashTransport[swfdomain].swf;
                // create the channel
                swf.createChannel(config.channel, config.secret, getLocation(config.remote), config.isHost);

                if (config.isHost) {
                    // if Flash is going to be throttled and we want to avoid this
                    if (HAS_FLASH_THROTTLED_BUG && config.swfNoThrottle) {
                        apply(config.props, {
                            position: "fixed",
                            right: 0,
                            top: 0,
                            height: "20px",
                            width: "20px"
                        });
                    }
                    // set up the iframe
                    apply(config.props, {
                        src: appendQueryParameters(config.remote, {
                            xdm_e: getLocation(location.href),
                            xdm_c: config.channel,
                            xdm_p: 6, // 6 = FlashTransport
                            xdm_s: config.secret
                        }),
                        name: IFRAME_PREFIX + config.channel + "_provider"
                    });
                    frame = createFrame(config);
                }
            };

            if (easyXDM.stack.FlashTransport[swfdomain] && easyXDM.stack.FlashTransport[swfdomain].init) {
                // if the swf is in place and we are the consumer
                fn();
            }
            else {
                // if the swf does not yet exist
                if (!easyXDM.stack.FlashTransport[swfdomain]) {
                    // add the queue to hold the init fn's
                    easyXDM.stack.FlashTransport[swfdomain] = {
                        queue: [fn]
                    };
                    addSwf(swfdomain);
                }
                else {
                    easyXDM.stack.FlashTransport[swfdomain].queue.push(fn);
                }
            }
        },
        init: function(){
            whenReady(pub.onDOMReady, pub);
        }
    });
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, getLocation, appendQueryParameters, createFrame, debug, un, on, apply, whenReady, IFRAME_PREFIX*/
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.stack.PostMessageTransport
 * PostMessageTransport is a transport class that uses HTML5 postMessage for communication.<br/>
 * <a href="http://msdn.microsoft.com/en-us/library/ms644944(VS.85).aspx">http://msdn.microsoft.com/en-us/library/ms644944(VS.85).aspx</a><br/>
 * <a href="https://developer.mozilla.org/en/DOM/window.postMessage">https://developer.mozilla.org/en/DOM/window.postMessage</a>
 * @namespace easyXDM.stack
 * @constructor
 * @param {Object} config The transports configuration.
 * @cfg {String} remote The remote domain to communicate with.
 */
easyXDM.stack.PostMessageTransport = function(config){
    var pub, // the public interface
 frame, // the remote frame, if any
 callerWindow, // the window that we will call with
 targetOrigin; // the domain to communicate with
    /**
     * Resolves the origin from the event object
     * @private
     * @param {Object} event The messageevent
     * @return {String} The scheme, host and port of the origin
     */
    function _getOrigin(event){
        if (event.origin) {
            // This is the HTML5 property
            return getLocation(event.origin);
        }
        if (event.uri) {
            // From earlier implementations
            return getLocation(event.uri);
        }
        if (event.domain) {
            // This is the last option and will fail if the
            // origin is not using the same schema as we are
            return location.protocol + "//" + event.domain;
        }
        throw "Unable to retrieve the origin of the event";
    }

    /**
     * This is the main implementation for the onMessage event.<br/>
     * It checks the validity of the origin and passes the message on if appropriate.
     * @private
     * @param {Object} event The messageevent
     */
    function _window_onMessage(event){
        var origin = _getOrigin(event);
        if (origin == targetOrigin && event.data.substring(0, config.channel.length + 1) == config.channel + " ") {
            pub.up.incoming(event.data.substring(config.channel.length + 1), origin);
        }
    }

    return (pub = {
        outgoing: function(message, domain, fn){
            callerWindow.postMessage(config.channel + " " + message, domain || targetOrigin);
            if (fn) {
                fn();
            }
        },
        destroy: function(){
            un(window, "message", _window_onMessage);
            if (frame) {
                callerWindow = null;
                frame.parentNode.removeChild(frame);
                frame = null;
            }
        },
        onDOMReady: function(){
            targetOrigin = getLocation(config.remote);
            if (config.isHost) {
                // add the event handler for listening
                var waitForReady = function(event){
                    if (event.data == config.channel + "-ready") {
                        // replace the eventlistener
                        callerWindow = ("postMessage" in frame.contentWindow) ? frame.contentWindow : frame.contentWindow.document;
                        un(window, "message", waitForReady);
                        on(window, "message", _window_onMessage);
                        setTimeout(function(){
                            pub.up.callback(true);
                        }, 0);
                    }
                };
                on(window, "message", waitForReady);

                // set up the iframe
                apply(config.props, {
                    src: appendQueryParameters(config.remote, {
                        xdm_e: getLocation(location.href),
                        xdm_c: config.channel,
                        xdm_p: 1 // 1 = PostMessage
                    }),
                    name: IFRAME_PREFIX + config.channel + "_provider"
                });
                frame = createFrame(config);
            }
            else {
                // add the event handler for listening
                on(window, "message", _window_onMessage);
                callerWindow = ("postMessage" in window.parent) ? window.parent : window.parent.document;
                callerWindow.postMessage(config.channel + "-ready", targetOrigin);

                setTimeout(function(){
                    pub.up.callback(true);
                }, 0);
            }
        },
        init: function(){
            whenReady(pub.onDOMReady, pub);
        }
    });
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, getLocation, appendQueryParameters, createFrame, debug, apply, query, whenReady, IFRAME_PREFIX*/
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.stack.FrameElementTransport
 * FrameElementTransport is a transport class that can be used with Gecko-browser as these allow passing variables using the frameElement property.<br/>
 * Security is maintained as Gecho uses Lexical Authorization to determine under which scope a function is running.
 * @namespace easyXDM.stack
 * @constructor
 * @param {Object} config The transports configuration.
 * @cfg {String} remote The remote document to communicate with.
 */
easyXDM.stack.FrameElementTransport = function(config){
    var pub, frame, send, targetOrigin;

    return (pub = {
        outgoing: function(message, domain, fn){
            send.call(this, message);
            if (fn) {
                fn();
            }
        },
        destroy: function(){
            if (frame) {
                frame.parentNode.removeChild(frame);
                frame = null;
            }
        },
        onDOMReady: function(){
            targetOrigin = getLocation(config.remote);

            if (config.isHost) {
                // set up the iframe
                apply(config.props, {
                    src: appendQueryParameters(config.remote, {
                        xdm_e: getLocation(location.href),
                        xdm_c: config.channel,
                        xdm_p: 5 // 5 = FrameElementTransport
                    }),
                    name: IFRAME_PREFIX + config.channel + "_provider"
                });
                frame = createFrame(config);
                frame.fn = function(sendFn){
                    delete frame.fn;
                    send = sendFn;
                    setTimeout(function(){
                        pub.up.callback(true);
                    }, 0);
                    // remove the function so that it cannot be used to overwrite the send function later on
                    return function(msg){
                        pub.up.incoming(msg, targetOrigin);
                    };
                };
            }
            else {
                // This is to mitigate origin-spoofing
                if (document.referrer && getLocation(document.referrer) != query.xdm_e) {
                    window.top.location = query.xdm_e;
                }
                send = window.frameElement.fn(function(msg){
                    pub.up.incoming(msg, targetOrigin);
                });
                pub.up.callback(true);
            }
        },
        init: function(){
            whenReady(pub.onDOMReady, pub);
        }
    });
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, undef, getLocation, appendQueryParameters, resolveUrl, createFrame, debug, un, apply, whenReady, IFRAME_PREFIX*/
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.stack.NameTransport
 * NameTransport uses the window.name property to relay data.
 * The <code>local</code> parameter needs to be set on both the consumer and provider,<br/>
 * and the <code>remoteHelper</code> parameter needs to be set on the consumer.
 * @constructor
 * @param {Object} config The transports configuration.
 * @cfg {String} remoteHelper The url to the remote instance of hash.html - this is only needed for the host.
 * @namespace easyXDM.stack
 */
easyXDM.stack.NameTransport = function(config){

    var pub; // the public interface
    var isHost, callerWindow, remoteWindow, readyCount, callback, remoteOrigin, remoteUrl;

    function _sendMessage(message){
        var url = config.remoteHelper + (isHost ? "#_3" : "#_2") + config.channel;
        callerWindow.contentWindow.sendMessage(message, url);
    }

    function _onReady(){
        if (isHost) {
            if (++readyCount === 2 || !isHost) {
                pub.up.callback(true);
            }
        }
        else {
            _sendMessage("ready");
            pub.up.callback(true);
        }
    }

    function _onMessage(message){
        pub.up.incoming(message, remoteOrigin);
    }

    function _onLoad(){
        if (callback) {
            setTimeout(function(){
                callback(true);
            }, 0);
        }
    }

    return (pub = {
        outgoing: function(message, domain, fn){
            callback = fn;
            _sendMessage(message);
        },
        destroy: function(){
            callerWindow.parentNode.removeChild(callerWindow);
            callerWindow = null;
            if (isHost) {
                remoteWindow.parentNode.removeChild(remoteWindow);
                remoteWindow = null;
            }
        },
        onDOMReady: function(){
            isHost = config.isHost;
            readyCount = 0;
            remoteOrigin = getLocation(config.remote);
            config.local = resolveUrl(config.local);

            if (isHost) {
                // Register the callback
                easyXDM.Fn.set(config.channel, function(message){
                    if (isHost && message === "ready") {
                        // Replace the handler
                        easyXDM.Fn.set(config.channel, _onMessage);
                        _onReady();
                    }
                });

                // Set up the frame that points to the remote instance
                remoteUrl = appendQueryParameters(config.remote, {
                    xdm_e: config.local,
                    xdm_c: config.channel,
                    xdm_p: 2
                });
                apply(config.props, {
                    src: remoteUrl + '#' + config.channel,
                    name: IFRAME_PREFIX + config.channel + "_provider"
                });
                remoteWindow = createFrame(config);
            }
            else {
                config.remoteHelper = config.remote;
                easyXDM.Fn.set(config.channel, _onMessage);
            }

            // Set up the iframe that will be used for the transport
            var onLoad = function(){
                // Remove the handler
                var w = callerWindow || this;
                un(w, "load", onLoad);
                easyXDM.Fn.set(config.channel + "_load", _onLoad);
                (function test(){
                    if (typeof w.contentWindow.sendMessage == "function") {
                        _onReady();
                    }
                    else {
                        setTimeout(test, 50);
                    }
                }());
            };

            callerWindow = createFrame({
                props: {
                    src: config.local + "#_4" + config.channel
                },
                onLoad: onLoad
            });
        },
        init: function(){
            whenReady(pub.onDOMReady, pub);
        }
    });
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, getLocation, createFrame, debug, un, on, apply, whenReady, IFRAME_PREFIX*/
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.stack.HashTransport
 * HashTransport is a transport class that uses the IFrame URL Technique for communication.<br/>
 * <a href="http://msdn.microsoft.com/en-us/library/bb735305.aspx">http://msdn.microsoft.com/en-us/library/bb735305.aspx</a><br/>
 * @namespace easyXDM.stack
 * @constructor
 * @param {Object} config The transports configuration.
 * @cfg {String/Window} local The url to the local file used for proxying messages, or the local window.
 * @cfg {Number} delay The number of milliseconds easyXDM should try to get a reference to the local window.
 * @cfg {Number} interval The interval used when polling for messages.
 */
easyXDM.stack.HashTransport = function(config){
    var pub;
    var me = this, isHost, _timer, pollInterval, _lastMsg, _msgNr, _listenerWindow, _callerWindow;
    var useParent, _remoteOrigin;

    function _sendMessage(message){
        if (!_callerWindow) {
            return;
        }
        var url = config.remote + "#" + (_msgNr++) + "_" + message;
        ((isHost || !useParent) ? _callerWindow.contentWindow : _callerWindow).location = url;
    }

    function _handleHash(hash){
        _lastMsg = hash;
        pub.up.incoming(_lastMsg.substring(_lastMsg.indexOf("_") + 1), _remoteOrigin);
    }

    /**
     * Checks location.hash for a new message and relays this to the receiver.
     * @private
     */
    function _pollHash(){
        if (!_listenerWindow) {
            return;
        }
        var href = _listenerWindow.location.href, hash = "", indexOf = href.indexOf("#");
        if (indexOf != -1) {
            hash = href.substring(indexOf);
        }
        if (hash && hash != _lastMsg) {
            _handleHash(hash);
        }
    }

    function _attachListeners(){
        _timer = setInterval(_pollHash, pollInterval);
    }

    return (pub = {
        outgoing: function(message, domain){
            _sendMessage(message);
        },
        destroy: function(){
            window.clearInterval(_timer);
            if (isHost || !useParent) {
                _callerWindow.parentNode.removeChild(_callerWindow);
            }
            _callerWindow = null;
        },
        onDOMReady: function(){
            isHost = config.isHost;
            pollInterval = config.interval;
            _lastMsg = "#" + config.channel;
            _msgNr = 0;
            useParent = config.useParent;
            _remoteOrigin = getLocation(config.remote);
            if (isHost) {
                apply(config.props, {
                    src: config.remote,
                    name: IFRAME_PREFIX + config.channel + "_provider"
                });
                if (useParent) {
                    config.onLoad = function(){
                        _listenerWindow = window;
                        _attachListeners();
                        pub.up.callback(true);
                    };
                }
                else {
                    var tries = 0, max = config.delay / 50;
                    (function getRef(){
                        if (++tries > max) {
                            throw new Error("Unable to reference listenerwindow");
                        }
                        try {
                            _listenerWindow = _callerWindow.contentWindow.frames[IFRAME_PREFIX + config.channel + "_consumer"];
                        }
                        catch (ex) {
                        }
                        if (_listenerWindow) {
                            _attachListeners();
                            pub.up.callback(true);
                        }
                        else {
                            setTimeout(getRef, 50);
                        }
                    }());
                }
                _callerWindow = createFrame(config);
            }
            else {
                _listenerWindow = window;
                _attachListeners();
                if (useParent) {
                    _callerWindow = parent;
                    pub.up.callback(true);
                }
                else {
                    apply(config, {
                        props: {
                            src: config.remote + "#" + config.channel + new Date(),
                            name: IFRAME_PREFIX + config.channel + "_consumer"
                        },
                        onLoad: function(){
                            pub.up.callback(true);
                        }
                    });
                    _callerWindow = createFrame(config);
                }
            }
        },
        init: function(){
            whenReady(pub.onDOMReady, pub);
        }
    });
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, debug */
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.stack.ReliableBehavior
 * This is a behavior that tries to make the underlying transport reliable by using acknowledgements.
 * @namespace easyXDM.stack
 * @constructor
 * @param {Object} config The behaviors configuration.
 */
easyXDM.stack.ReliableBehavior = function(config){
    var pub, // the public interface
 callback; // the callback to execute when we have a confirmed success/failure
    var idOut = 0, idIn = 0, currentMessage = "";

    return (pub = {
        incoming: function(message, origin){
            var indexOf = message.indexOf("_"), ack = message.substring(0, indexOf).split(",");
            message = message.substring(indexOf + 1);

            if (ack[0] == idOut) {
                currentMessage = "";
                if (callback) {
                    callback(true);
                }
            }
            if (message.length > 0) {
                pub.down.outgoing(ack[1] + "," + idOut + "_" + currentMessage, origin);
                if (idIn != ack[1]) {
                    idIn = ack[1];
                    pub.up.incoming(message, origin);
                }
            }

        },
        outgoing: function(message, origin, fn){
            currentMessage = message;
            callback = fn;
            pub.down.outgoing(idIn + "," + (++idOut) + "_" + message, origin);
        }
    });
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, debug, undef, removeFromStack*/
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.stack.QueueBehavior
 * This is a behavior that enables queueing of messages. <br/>
 * It will buffer incoming messages and dispach these as fast as the underlying transport allows.
 * This will also fragment/defragment messages so that the outgoing message is never bigger than the
 * set length.
 * @namespace easyXDM.stack
 * @constructor
 * @param {Object} config The behaviors configuration. Optional.
 * @cfg {Number} maxLength The maximum length of each outgoing message. Set this to enable fragmentation.
 */
easyXDM.stack.QueueBehavior = function(config){
    var pub, queue = [], waiting = true, incoming = "", destroying, maxLength = 0, lazy = false, doFragment = false;

    function dispatch(){
        if (config.remove && queue.length === 0) {
            removeFromStack(pub);
            return;
        }
        if (waiting || queue.length === 0 || destroying) {
            return;
        }
        waiting = true;
        var message = queue.shift();

        pub.down.outgoing(message.data, message.origin, function(success){
            waiting = false;
            if (message.callback) {
                setTimeout(function(){
                    message.callback(success);
                }, 0);
            }
            dispatch();
        });
    }
    return (pub = {
        init: function(){
            if (undef(config)) {
                config = {};
            }
            if (config.maxLength) {
                maxLength = config.maxLength;
                doFragment = true;
            }
            if (config.lazy) {
                lazy = true;
            }
            else {
                pub.down.init();
            }
        },
        callback: function(success){
            waiting = false;
            var up = pub.up; // in case dispatch calls removeFromStack
            dispatch();
            up.callback(success);
        },
        incoming: function(message, origin){
            if (doFragment) {
                var indexOf = message.indexOf("_"), seq = parseInt(message.substring(0, indexOf), 10);
                incoming += message.substring(indexOf + 1);
                if (seq === 0) {
                    if (config.encode) {
                        incoming = decodeURIComponent(incoming);
                    }
                    pub.up.incoming(incoming, origin);
                    incoming = "";
                }
            }
            else {
                pub.up.incoming(message, origin);
            }
        },
        outgoing: function(message, origin, fn){
            if (config.encode) {
                message = encodeURIComponent(message);
            }
            var fragments = [], fragment;
            if (doFragment) {
                // fragment into chunks
                while (message.length !== 0) {
                    fragment = message.substring(0, maxLength);
                    message = message.substring(fragment.length);
                    fragments.push(fragment);
                }
                // enqueue the chunks
                while ((fragment = fragments.shift())) {
                    queue.push({
                        data: fragments.length + "_" + fragment,
                        origin: origin,
                        callback: fragments.length === 0 ? fn : null
                    });
                }
            }
            else {
                queue.push({
                    data: message,
                    origin: origin,
                    callback: fn
                });
            }
            if (lazy) {
                pub.down.init();
            }
            else {
                dispatch();
            }
        },
        destroy: function(){
            destroying = true;
            pub.down.destroy();
        }
    });
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, undef, debug */
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.stack.VerifyBehavior
 * This behavior will verify that communication with the remote end is possible, and will also sign all outgoing,
 * and verify all incoming messages. This removes the risk of someone hijacking the iframe to send malicious messages.
 * @namespace easyXDM.stack
 * @constructor
 * @param {Object} config The behaviors configuration.
 * @cfg {Boolean} initiate If the verification should be initiated from this end.
 */
easyXDM.stack.VerifyBehavior = function(config){
    var pub, mySecret, theirSecret, verified = false;

    function startVerification(){
        mySecret = Math.random().toString(16).substring(2);
        pub.down.outgoing(mySecret);
    }

    return (pub = {
        incoming: function(message, origin){
            var indexOf = message.indexOf("_");
            if (indexOf === -1) {
                if (message === mySecret) {
                    pub.up.callback(true);
                }
                else if (!theirSecret) {
                    theirSecret = message;
                    if (!config.initiate) {
                        startVerification();
                    }
                    pub.down.outgoing(message);
                }
            }
            else {
                if (message.substring(0, indexOf) === theirSecret) {
                    pub.up.incoming(message.substring(indexOf + 1), origin);
                }
            }
        },
        outgoing: function(message, origin, fn){
            pub.down.outgoing(mySecret + "_" + message, origin, fn);
        },
        callback: function(success){
            if (config.initiate) {
                startVerification();
            }
        }
    });
};
/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, undef, getJSON, debug, emptyFn, isArray */
//
// easyXDM
// http://easyxdm.net/
// Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

/**
 * @class easyXDM.stack.RpcBehavior
 * This uses JSON-RPC 2.0 to expose local methods and to invoke remote methods and have responses returned over the the string based transport stack.<br/>
 * Exposed methods can return values synchronous, asyncronous, or bet set up to not return anything.
 * @namespace easyXDM.stack
 * @constructor
 * @param {Object} proxy The object to apply the methods to.
 * @param {Object} config The definition of the local and remote interface to implement.
 * @cfg {Object} local The local interface to expose.
 * @cfg {Object} remote The remote methods to expose through the proxy.
 * @cfg {Object} serializer The serializer to use for serializing and deserializing the JSON. Should be compatible with the HTML5 JSON object. Optional, will default to JSON.
 */
easyXDM.stack.RpcBehavior = function(proxy, config){
    var pub, serializer = config.serializer || getJSON();
    var _callbackCounter = 0, _callbacks = {};

    /**
     * Serializes and sends the message
     * @private
     * @param {Object} data The JSON-RPC message to be sent. The jsonrpc property will be added.
     */
    function _send(data){
        data.jsonrpc = "2.0";
        pub.down.outgoing(serializer.stringify(data));
    }

    /**
     * Creates a method that implements the given definition
     * @private
     * @param {Object} The method configuration
     * @param {String} method The name of the method
     * @return {Function} A stub capable of proxying the requested method call
     */
    function _createMethod(definition, method){
        var slice = Array.prototype.slice;

        return function(){
            var l = arguments.length, callback, message = {
                method: method
            };

            if (l > 0 && typeof arguments[l - 1] === "function") {
                //with callback, procedure
                if (l > 1 && typeof arguments[l - 2] === "function") {
                    // two callbacks, success and error
                    callback = {
                        success: arguments[l - 2],
                        error: arguments[l - 1]
                    };
                    message.params = slice.call(arguments, 0, l - 2);
                }
                else {
                    // single callback, success
                    callback = {
                        success: arguments[l - 1]
                    };
                    message.params = slice.call(arguments, 0, l - 1);
                }
                _callbacks["" + (++_callbackCounter)] = callback;
                message.id = _callbackCounter;
            }
            else {
                // no callbacks, a notification
                message.params = slice.call(arguments, 0);
            }
            if (definition.namedParams && message.params.length === 1) {
                message.params = message.params[0];
            }
            // Send the method request
            _send(message);
        };
    }

    /**
     * Executes the exposed method
     * @private
     * @param {String} method The name of the method
     * @param {Number} id The callback id to use
     * @param {Function} method The exposed implementation
     * @param {Array} params The parameters supplied by the remote end
     */
    function _executeMethod(method, id, fn, params){
        if (!fn) {
            if (id) {
                _send({
                    id: id,
                    error: {
                        code: -32601,
                        message: "Procedure not found."
                    }
                });
            }
            return;
        }

        var success, error;
        if (id) {
            success = function(result){
                success = emptyFn;
                _send({
                    id: id,
                    result: result
                });
            };
            error = function(message, data){
                error = emptyFn;
                var msg = {
                    id: id,
                    error: {
                        code: -32099,
                        message: message
                    }
                };
                if (data) {
                    msg.error.data = data;
                }
                _send(msg);
            };
        }
        else {
            success = error = emptyFn;
        }
        // Call local method
        if (!isArray(params)) {
            params = [params];
        }
        try {
            var result = fn.method.apply(fn.scope, params.concat([success, error]));
            if (!undef(result)) {
                success(result);
            }
        }
        catch (ex1) {
            error(ex1.message);
        }
    }

    return (pub = {
        incoming: function(message, origin){
            var data = serializer.parse(message);
            if (data.method) {
                // A method call from the remote end
                if (config.handle) {
                    config.handle(data, _send);
                }
                else {
                    _executeMethod(data.method, data.id, config.local[data.method], data.params);
                }
            }
            else {
                // A method response from the other end
                var callback = _callbacks[data.id];
                if (data.error) {
                    if (callback.error) {
                        callback.error(data.error);
                    }
                }
                else if (callback.success) {
                    callback.success(data.result);
                }
                delete _callbacks[data.id];
            }
        },
        init: function(){
            if (config.remote) {
                // Implement the remote sides exposed methods
                for (var method in config.remote) {
                    if (config.remote.hasOwnProperty(method)) {
                        proxy[method] = _createMethod(config.remote[method], method);
                    }
                }
            }
            pub.down.init();
        },
        destroy: function(){
            for (var method in config.remote) {
                if (config.remote.hasOwnProperty(method) && proxy.hasOwnProperty(method)) {
                    delete proxy[method];
                }
            }
            pub.down.destroy();
        }
    });
};
module.exports = easyXDM;
})(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent);


/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

var easyXDM = __webpack_require__(1104);
window.loadView = function (opts) {
  window.name = META.id;
  var use_backup_content = typeof opts != 'undefined' && opts.use_backup_content != undefined ? opts.use_backup_content : false; //Default use content
  var app_el = typeof opts != 'undefined' && opts.app_el != undefined ? opts.app_el : $('#appView'); //Default app_el is #appView
  //Set Globals First
  for (var key in GLOBALS) {
    window[key] = GLOBALS[key];
  }
  var model_name = META.app_type + 'AppModel';
  //    if( META.app_type=='localDev' && typeof LOCAL_DEV_APP_TYPE != 'undefined' ){  //Set local app types
  //        model_name = LOCAL_DEV_APP_TYPE+"AppModel";
  //    }
  //debug()("META IS ",META);
  if (META.soft_alias) {
    //Set model and default content for soft aliases
    window[model_name] = window[META.app_namespace + 'AppModel'];
  }

  if (window.ENVIRONMENT == 'development' || window.ENVIRONMENT == 'staging') {
    initializePlatformsForQA();
  }

  //debug()("Load App called. Model name is "+model_name+"; type is "+typeof window[model_name]);
  window.APP_MODEL = new window[model_name](); //Initiate model assuming consistent naming scheme

  //Pass app values to model:
  if (use_backup_content) {
    for (var key in BACKUP_CONTENT) {
      if (BACKUP_CONTENT[key] != 'undefined') {
        APP_MODEL.set(key, BACKUP_CONTENT[key]);
      }
    }
  } else {
    for (var key in CONTENT) {
      if (CONTENT[key] != 'undefined') {
        APP_MODEL.set(key, CONTENT[key]);
      }
    }
  }
  //Set meta:
  APP_MODEL.meta = {};
  for (var key in META) {
    if (META[key] != 'undefined') {
      APP_MODEL.meta[key] = META[key];
    }
  }
  APP_MODEL.afterMount();
  //Add password protected template if present
  if (META.password_protected_template) {
    $('body').append(META.password_protected_template);
  }
  //Init view; also assuming consistent naming scheme:

  window.APP_VIEW = new window[META.app_namespace + 'AppView']({
    el: '#' + app_el.attr('id'),
    model: APP_MODEL
  });

  //HOST needs to be set so I think this needs to be here
  if ($.inArray(META.external_id_type, ['weebly-integrated', 'design-editor', 'webydo', 'bookmark', 'cloudflare', 'wordpress']) > -1) {
    //    if(HOST=='weebly' || (typeof INPAGE != 'undefined' && INPAGE)){
    debug()('Updating through local storage');
    setInterval(function () {
      if (typeof META == 'undefined') {
        return;
      }
      //debug()("Meta is defined");
      var data = localStorage.getItem('powr_data_' + META.id);
      //debug()("Data is ",data);
      if (data == undefined || data == null || data == 'null') {
        //debug()("Returning");
        return;
      }

      data = JSON.parse(data);
      var locals = APP_MODEL.get('locals');
      for (var i in data.content) {
        if (i == 'locals') {
          //Merge in locals
          for (var j in data.content.locals) {
            APP_MODEL.attributes.locals[j] = data.content.locals[j]; //Only overwrite locals present in response
          }
        } else {
          APP_MODEL.attributes[i] = data.content[i];
        }
      }
      //Override with any platform data:
      if (typeof PLATFORM_DATA != 'undefined') {
        loadPlatformData(PLATFORM_DATA, { render: false });
      }

      APP_VIEW.render(); //Render view
      localStorage.removeItem('powr_data_' + META.id); //Destroy data
    }, 100);
  }

  loadViewInitializers();
};
function loadViewInitializers() {
  if (META.premium_status == 'free') {
    $('.loadingWrapper').show();
  }

  //Handle edit me:
  if (META.edit_me) {
    //$('.editMeHelper').remove(); //Not currently in use
    if (META.external_id_type == 'jimdo') {
      $('#editMe').css({ marginTop: '20px' });
    }
    $('#editMe').fadeIn('fast');
  }

  //Handle canonical:
  $('link[rel="canonical"]').attr('href', baseUri() + '/plugins/view?id=' + META.id);

  //Handle admin debug panel
  if (META.admin_debug_panel) {
    $('body').append(META.admin_debug_panel);
  }

  var mode = getURLParameter('mode'); //Css for different view modes
  if (mode == 'page') {
    $('html').css({ overflow: 'auto' });
    $('#appView').css({ margin: '5% 15%' });
  } else if (mode == 'scroll') {
    $('html').css({ overflow: 'auto' });
  } else {
    $('html').css({ overflow: 'hidden' });
  }
}
function loadViewListeners() {
  ////////LISTENERS////////
  //Create new socket (still needed for old joomla):
  try {
    window.APP_SOCKET = new easyXDM.Socket({
      onMessage: function onMessage(message) {
        var m = JSON.parse(message);
        debug()('Message in app:', m);
        //p+up and down handling:
        if (m.action && m.action == 'activate') {
          $('#editMe').fadeIn();
        } else if (m.action && m.action == 'deactivate') {
          $('#editMe').fadeOut();
        }
      }
    });
  } catch (err) {
    debug()('Could not establish socket connection: ' + err);
  }
  //Listen for messages:
  function windowMessageReceived(evt) {
    debug()('View received settings, evt is', evt);
    try {
      var response = JSON.parse(evt.data);
    } catch (err) {
      debug()("Couldn't json parse data: ", err);
      return false;
    }
    var response = JSON.parse(evt.data);
    if (response.message == 'loaded') {
      var setParentOrigin = function setParentOrigin() {
        window.PARENT_ORIGIN = evt.origin; //Need to set these as globals so we can handle them below when APP_MODEL is not yet loaded
        window.IFRAME_INDEX = response.data.iframe_index;
        if (typeof APP_MODEL == 'undefined') {
          setTimeout(setParentOrigin, 50);
        } else {
          APP_MODEL.setLocals({
            parent_origin: evt.origin,
            iframe_index: response.data.iframe_index,
            parent_window_height: response.data.parent_window_height,
            parent_window_width: response.data.parent_window_width
          });
        }
      };

      debug()('View received settings loaded. Evt origin is ', evt.origin);

      setParentOrigin();
      //Tell parent the view is loaded
      var r = {
        message: 'viewLoaded',
        data: { iframe_index: response.data.iframe_index }
      };
      parent.postMessage(JSON.stringify(r), evt.origin);
      //Post size
      if (typeof APP_VIEW != 'undefined') {
        //Only undefined if loading async
        APP_VIEW.postSizeToSocket();
      }
    }
    if (response.message == 'loadView') {
      window.META = response.data.meta;
      window.GLOBALS = response.data.globals;
      window.CONTENT = response.data.content;
      loadView(); //This will define APP_MODEL
      window.APP_MODEL.setLocals({
        parent_origin: evt.origin,
        iframe_index: response.data.iframe_index
      });
    } else if (response.message == 'showEdit') {
      $('#editMe, .adminAppInfo').fadeIn();
    } else if (response.message == 'hideEdit') {
      $('#editMe, .adminAppInfo').hide();
    } else if (response.message == 'update' && APP_MODEL) {
      //save to merge in the locals
      var locals = APP_MODEL.get('locals');
      for (var i in response.data.content) {
        if (i == 'locals') {
          //Merge in locals
          for (var j in response.data.content.locals) {
            APP_MODEL.attributes.locals[j] = response.data.content.locals[j]; //Only overwrite locals present in response
          }
        } else {
          APP_MODEL.attributes[i] = response.data.content[i];
        }
      }
      APP_VIEW.render(); //Render view
    } else if (response.message == 'triggerPowrPopupClick' || response.message == 'exitDocument') {
      if (APP_VIEW.openModal) {
        APP_VIEW.openModal(response.message);
      }
    } else if (response.message == 'platformData') {
      loadPlatformData(response.data);
      window.PLATFORM_DATA = response.data;
    } else if (response.message == 'scrollPosition' && APP_VIEW.receiveScrollPosition) {
      APP_VIEW.receiveScrollPosition(response.scrollPercentage);
    }
  }

  //Listen for messages:
  if (window.addEventListener) {
    window.addEventListener('message', windowMessageReceived);
  } else {
    window.attachEvent('onmessage', windowMessageReceived);
  }
  $(document).on('click', '#editMe, .js-launchPopoutSettings, .js-unclaimed-cta', function () {
    if (typeof SETTINGS_WINDOW != 'undefined' && SETTINGS_WINDOW.close) {
      SETTINGS_WINDOW.close();
    }
    //not currently in use
    //$('.editMeHelper').css('display','none');
    var h = Math.round(0.9 * screen.height);
    //var w = Math.round(screen.width/3);
    //w = Math.min(w,500);
    var w = 400;
    var o = Math.round(screen.width - w - 0.1 * screen.width);
    var url = '/apps/' + META.app_type + '/settings?id=' + META.true_id + '&demo_mode=' + META.demo_mode + '&section=popup';
    //Template mode
    if (META.template != undefined) {
      url += '&template=' + META.template;
    }

    if ($(this).hasClass('js-unclaimed-cta')) {
      url += '&triggerSignup=true';
    }

    window.SETTINGS_WINDOW = window.open(url, 'POWr Editor', 'width=' + w + ',height=' + h + ',top=-1000,left=' + o + ',location=no,status=no', 'false');
  });

  //show editMe menu when hovering button
  $('#editMe').hover(function () {
    $('.js-editMeMenu').stop().fadeIn(100, function () {
      APP_VIEW.postSizeToSocket();
    });
  }, function () {
    $('.js-editMeMenu').stop().fadeOut(100, function () {
      APP_VIEW.postSizeToSocket();
    });
  });
  //necessary because the button and menu don't have a container to target on hover
  $('.js-editMeMenu').hover(function () {
    $('.js-editMeMenu').stop().show();
  }, function () {
    $('.js-editMeMenu').stop().fadeOut(100, function () {
      APP_VIEW.postSizeToSocket();
    });
  });

  function editMePopover() {
    $('#editMe').popover({
      html: true, //Allow content to be html
      trigger: 'hover',
      delay: { hide: 850 },
      viewport: { selector: '#apps-view', padding: 0 },
      template: '<div class="popover" role="tooltip" style="font-size: 12px;margin-top: 5px;z-index: 10000000;"><div class="arrow"></div><div class="popover-content"></div></div>'
    });
  }
  if ($(window).popover == undefined) {
    setTimeout(function () {
      editMePopover(); //Try again
    }, 2000);
    return;
  } else {
    editMePopover();
  }

  $(document).on('click', '.js-launchStandalone', function () {
    var standaloneUrl = '/plugins/' + META.app_slug + '/standalone?id=' + META.id;
    window.open(standaloneUrl);
  });

  $(document).on('click', '.js-launchResponseDashboard', function () {
    var dashboardUrl = '/apps/' + META.id + '/analytics';
    window.open(dashboardUrl);
  });

  //Prevent unload with unsaved work:
  $(window).on('beforeunload', function () {
    if (APP_MODEL.get('locals').isDirty && $('#appSettings').length > 0) {
      return 'You have unsaved work with a POWr Plugin! If you leave this page you will lose any unsaved changes.';
    }
  });
}
function loadPlatformData(platformData, opts) {
  debug()('Trying to load platform data');
  if (typeof APP_MODEL == 'undefined') {
    //If you don't have a model, try again
    setTimeout(function () {
      loadPlatformData(platformData);
    }, 100);
    return;
  }
  if (typeof opts == 'undefined') {
    opts = {
      render: true
    };
  }
  debug()('Loading platform data', platformData);
  var hasChanged = false;
  var newPlatformData = {};
  for (var key in platformData.content) {
    if (typeof APP_MODEL.defaults()[key] != 'undefined' && APP_MODEL.attributes[key] != platformData.content[key]) {
      debug()('Default key: ' + APP_MODEL.defaults()[key]);
      debug()('Response key: ' + platformData.content[key]);
      if ((APP_MODEL.defaults()[key] + '').slice(-2) == 'px' && (platformData.content[key] + '').slice(-2) != 'px') {
        //Add "px" and similar as necessary
        APP_MODEL.attributes[key] = platformData.content[key] + 'px';
        newPlatformData[key] = platformData.content[key] + 'px';
      } else {
        APP_MODEL.attributes[key] = platformData.content[key];
        newPlatformData[key] = platformData.content[key];
      }
      hasChanged = true;
    }
  }
  if (hasChanged && opts.render) {
    APP_VIEW.render();
    //localStorage.setItem("platform_data_"+APP_MODEL.meta.id, JSON.stringify({content: newPlatformData}));
  }
}

function initializeWix() {
  if (typeof WIX_QA_APP_TYPE != 'undefined') {
    //Set local app types
    window.wixStagingAppModel = window[WIX_QA_APP_TYPE + 'AppModel'];
    window.wixLocalAppModel = wixStagingAppModel;
    window.localDevAppModel = wixStagingAppModel;
    window.wixIeLocalAppModel = wixStagingAppModel;
  }

  //Load backup content if on edit or preview
  window.VIEW_MODE = Wix.Utils.getViewMode();
  if (VIEW_MODE != 'site') {
    loadView({ use_backup_content: true });
  } else {
    loadView({ use_backup_content: false });
  }
  //When settings is updated, rerender view
  Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, function (data) {
    debug()('Wix settings updated:', data);
    APP_MODEL.attributes = data; //Load the new data
    //Model should be saved on update, but make sure it is set in the view
    APP_MODEL.meta.saved = true;
    APP_VIEW.render(); //Render view
  });
  //When site is published, save model
  Wix.addEventListener(Wix.Events.SITE_PUBLISHED, function (data) {
    debug()('site published');
    APP_MODEL.doSave({ post_params: { wix_published: true } }); //Save model
  });
  //When app is deleted:
  Wix.addEventListener(Wix.Events.COMPONENT_DELETED, function (data) {
    debug()('app deleted');
    APP_MODEL.doSave({ post_params: { wix_deleted: true } }); //Save model
  });
  //User
  if (VIEW_MODE == 'site') {
    Wix.currentMember(function (memberDetails) {
      debug()('member details: ', memberDetails);
      //Not enough people enter this to make it useful. Also messes up password protect.
      // if(VIEW_MODE == 'site' && memberDetails && memberDetails.owner == true){
      //     if(APP_MODEL.get('wix_admin_email') != memberDetails.email){
      //         APP_MODEL.set({'wix_admin_email':memberDetails.email},{silent:true}); //Set Admin email
      //         APP_MODEL.doSave(); //Save model
      //     }
      // }
      if (memberDetails && memberDetails.email) {
        setTimeout(function () {
          deliverHash(memberDetails.email);
        }, 2000);
      }
    });
  }
}
$(function () {
  //Standard view load
  if ($('#apps-view, #apps-facebook_view').length > 0) {
    loadView();
    loadViewListeners();
  }

  //Cached view load
  if ($('#apps-cached_view').length > 0) {
    debug()('In apps cached view');
    loadViewListeners();
    if (getURLParameter('load') == 'async') {
      //For async loading by POWR.js
      debug()('Async loading');
      //Occasionally tell parent it needs to be loaded for strange cases where iframes are reloaded on a page
      window.LOAD_ME_INTERVAL = setInterval(function () {
        if (typeof META == 'undefined' || META == undefined) {
          if (typeof PARENT_ORIGIN != 'undefined' && typeof IFRAME_INDEX != 'undefined') {
            var r = {
              message: 'loadMe',
              data: { iframe_index: IFRAME_INDEX }
            };
            parent.postMessage(JSON.stringify(r), PARENT_ORIGIN);
          }
        } else {
          clearInterval(LOAD_ME_INTERVAL);
        }
      }, 5000);
    } else {
      //Otherwise call to get the app info
      var url = '/plugins/' + APP_DETAILS.slug + '/view.json?';
      if (getURLParameter('id')) {
        url += 'id=' + getURLParameter('id');
      } else if (getURLParameter('unique_label')) {
        url += 'unique_label=' + getURLParameter('unique_label') + '&powr_token=' + getURLParameter('powr_token') + '&user_label=' + getURLParameter('user_label');
      } else {
        url += 'powr_token=' + getURLParameter('powr_token') + '&user_label=' + getURLParameter('user_label');
      }
      if (getURLParameter('external_type')) {
        url += '&external_type=' + getURLParameter('external_type');
      }
      debug()('Calling to get app json. Url is ' + url);
      ajaxController({
        url: url,
        type: 'GET'
      }, function (r) {
        if (r.success) {
          debug()('Success getting view data');
          // BAD
          // TODO Clean this up
          window.META = r.meta;
          window.GLOBALS = r.globals;
          window.CONTENT = r.content;
          loadView();
        } else {
          debug()('Error getting view data');
        }
      });
    }
  }
  ///////WIX VIEW///////
  if ($('#apps-wix_view').length > 0) {
    initializeWix();
  }

  if ($('#apps-wix_cached_view').length > 0) {
    var url = '/plugins/' + APP_DETAILS.slug + '/wix_view.json?' + originalQuery();
    ajaxController({
      url: url,
      type: 'GET'
    }, function (r) {
      if (r.success) {
        window.META = r.meta;
        window.GLOBALS = r.globals;
        window.VIEW_MODE = Wix.Utils.getViewMode();
        if (VIEW_MODE != 'site') {
          window.BACKUP_CONTENT = r.content;
        } else {
          window.CONTENT = r.content;
        }
        initializeWix();
      } else {
        debug()('Error getting wix view data');
      }
    });
  }
});
//////////////////////

/***/ }),

/***/ 1122:
/***/ (function(module, exports) {

window.POWrDatePickerComponent = function (conf) {
  PowrStrap.call(this, conf);
  //Set the jquery picker
  this.formatString = this.formatString || 'MM-DD-YYYY';

  if (this.using_native_inputs) return this.handleNativeInputs(conf);

  if (this.$datePickerContainer.length) {
    this.$datePickerContainer.datepicker({
      showOn: 'focus',
      showButtonPanel: true,
      dateFormat: 'mm-dd-yy',
      onSelect: this._exec_handler('jqueryCalChange').bind(this)
    }).on('click', function () {
      $(this).datepicker('show');
    });

    //This handles situations where the user doesnt change `focus` away from the date input after having typed the date into the input. (Results in date picker not firing a `change` event)
    //On keydown, attach listener for mousemove (the user moving the mouse to click the submit btn - IF the user tries the press `enter (13)` it will fire the change event)
    //Then remove the handler after its done its job (only need one event)
    var $doc = $(document);
    this.$datePickerContainer.on('keydown', function (e) {
      //This is JQUERY'S `bind` implementation
      $doc.bind('mousemove.datepickertrigger', function (_e) {
        $doc.unbind('mousemove.datepickertrigger');
        this._handlers.jqueryCalChange(null, null, this);
      }.bind(this));
    }.bind(this));
  }

  this.dateState = this.initial_date || null;
  this.setDateInput();
};

POWrDatePickerComponent.prototype = {
  ModuleName: 'POWrDatePickerComponent',
  handleNativeInputs: function handleNativeInputs(conf) {
    //var $native_input = this.$body;
    var $native_input = $(this).find('[type="date"]');
    var $hidden_input = $(this).find('[pwr-mod-attr="dateTimeHidden"]');
    $native_input.on('change', function (e) {
      var val = $(e.target).val();
      var splitVal = val.split('-');
      var year = splitVal[0];
      var month = splitVal[1] - 1;
      var day = splitVal[2];

      this.dateState.year(year);
      this.dateState.month(month);
      this.dateState.date(day);
      $hidden_input.val((month + 1).toString() + '/' + day + '/' + year);
    }.bind(this));
  },
  setDateState: function setDateState(dateObj) {
    if (!dateObj) {
      this.dateState = moment_custom();
    } else {
      this.dateState = moment_custom(dateObj);
    }
    this.setDateInput();
  },
  setFormat: function setFormat(string) {
    if (!string) throw 'You messed up here';
    this.formatString = string;
    this.setDateInput();
    // this.$datePickerContainer.datepicker( "option", "dateFormat", (this.formatString === "MM-DD-YYYY" ? 'mm-dd-yy' : 'dd-mm-yy' ));
    var format = this.formatString === 'MM-DD-YYYY' ? 'mm-dd-yy' : 'dd-mm-yy';
    this.$datePickerContainer.datepicker('option', 'dateFormat', format);
    this.setDateInput();
  },
  setDateInput: function setDateInput() {
    if (!this.dateState) this.setDateState();
    var val = this.dateState.format(this.formatString, this.use_local);

    this.$datePickerContainer.datepicker('option', 'dateFormat', this.formatString === 'MM-DD-YYYY' ? 'mm-dd-yy' : 'dd-mm-yy');
    this.$datePickerContainer.datepicker('setDate', val);
  },
  _setYear: function _setYear(val) {
    this.dateState.year(val);
  },
  _setMonth: function _setMonth(val) {
    this.dateState.month(val);
  },
  _setDay: function _setDay(val) {
    this.dateState.date(val);
  },
  _changeDate: function _changeDate(dateObj) {
    var newDate = moment_custom(dateObj);
    var splitDate = {
      //I hate this
      year: newDate.get('year'),
      month: newDate.get('month'),
      date: newDate.get('date'),
      hour: newDate.get('hour'),
      minute: newDate.get('minute'),
      second: newDate.get('second'),
      millisecond: newDate.get('millisecond')
    };

    this.dateState = moment_custom(splitDate);
    this.setDateInput();
  },
  _handlers: {
    jqueryCalChange: function jqueryCalChange(string, binding, self) {
      var newDate = self.$datePickerContainer.datepicker('getDate');
      self._setMonth(newDate.getUTCMonth()); //months zero-indexed
      self._setDay(newDate.getUTCDate());
      self.setDateState(newDate);
      self.trigger('change');
    }
  },
  _html: function () {
    return [
    // '<script type="text/html" pwr pwr-mod-name="POWrDateTimeComponent">',
    '<input type="text" class="form-control ignore user-success" pwr pwr-mod-attr="datePickerContainer">'].join('\n');
  }()
};

/***/ }),

/***/ 1123:
/***/ (function(module, exports) {

window.PowrEvents = function () {
  this._events = {};

  this.on = function (event, callback) {
    if (event in this._events) {
      this._events[event].push(callback);
    } else {
      this._events[event] = [callback];
    }
    return this;
  };

  this.trigger = function (event) {
    if (event in this._events) {
      this._events[event].forEach(function (callback) {
        callback(this, event);
      }.bind(this));
    } else {
      console.warn('Unregistered event [ ' + event + ' ] called. For POWr Module: [ ' + this.moduleName + ' ]');
    }
    return this;
  };

  this.triggerFor = function (event, modifier) {
    //<- This _ref thing might be a memory leak cuz the we can always reference something later?
    var resp = function (arg) {
      if (modifier) modifier.call(this, event, arg);
      this.trigger(event);
    }.bind(this);

    return resp;
  };
};

/***/ }),

/***/ 1127:
/***/ (function(module, exports) {

window.PowrHideShow = function () {
  this.show = this.show || function () {
    this.$body.show();
    return this;
  };
  this.hide = this.hide || function () {
    this.$body.hide();
    return this;
  };
};

/***/ }),

/***/ 1128:
/***/ (function(module, exports) {

window.PowrStrap = function (conf) {
  this.registeredModules = [PowrRegister, PowrEvents, PowrHideShow];

  this._register = function (modName) {
    this.registeredModules.push(modName);
    this._make();
  };

  this._make = function () {
    this.registeredModules.forEach(function (module) {
      module.call(this, conf);
    }.bind(this));
  };

  this._make();
};

/***/ }),

/***/ 1130:
/***/ (function(module, exports) {

window.POWrDateTimeComponentWithIncrementer = function (conf) {
  PowrStrap.call(this, conf);
  this.dateTimeState = moment_custom(this.initial_date || new Date());

  // if(this.using_native_inputs)return this.handleNativeInputs();
  this.timeComponent = new POWrTimePickerComponent({
    using_native_inputs: this.using_native_inputs,
    use_local: this.use_local,
    $body: this.timeSelectEls || null
  }).on('change', function (timeComponent) {
    // this.timeComponent = new POWrTimePickerComponent().on("change",function(timeComponent){
    var timeObj = timeComponent.timeState;
    this.dateTimeState.hour(timeObj.hours(null, this.use_local), this.use_local); //Kinda ghetto? - but, rule of 3
    this.dateTimeState.minute(timeObj.minutes(null, this.use_local), this.use_local); //Kinda ghetto? - but, rule of 3
    this.dateTimeState.second(timeObj.seconds(null, this.use_local), this.use_local); //Kinda ghetto? - but, rule of 3
    this._setHiddenInput();
  }.bind(this));

  // this.$timePickerContainer.append(this.timeComponent.$body);
  this.dateComponent = new POWrDatePickerComponent({
    using_native_inputs: this.using_native_inputs,
    initial_date: this.dateTimeState,
    use_local: this.use_local,
    $body: this.dateSelectEls || null
  }).on('change', function (dateComponent) {
    this.dateTimeState.year(dateComponent.dateState.year(null, this.use_local), this.use_local); //Kinda ghetto? - but, rule of 3
    this.dateTimeState.month(dateComponent.dateState.month(null, this.use_local), this.use_local); //Kinda ghetto? - but, rule of 3
    this.dateTimeState.date(dateComponent.dateState.date(null, this.use_local), this.use_local); //Kinda ghetto? - but, rule of 3
    this._setDateHiddenInput();
  }.bind(this));

  // this.$datePickerContainer.append(this.dateComponent.$body);

  var items = [{ label: 'European (DD-MM-YYYY)', value: 'DD-MM-YYYY' }, { label: 'American (MM-DD-YYYY)', value: 'MM-DD-YYYY' }];
  this.formatString = this.formatString || 'MM-DD-YYYY';
  this.setFormat(this.formatString);

  // this.formatPickerComponent = new POWrDropDown({},items).on('change',function($dropdownComponent){
  //     var val = $dropdownComponent.selectedValue;
  //     this.$dateTimeFormatHidden.attr('value',val);
  //     this.$dateTimeFormattedHidden.attr('value',this.dateTimeState.format(val));
  //     this.$dateTimeFormatHidden.val(val);
  //     this.$dateTimeFormattedHidden.val(val);
  // }.bind(this));
  // this.$formatPickerContainer.append(this.formatPickerComponent.$body);
  this._init();
};

POWrDateTimeComponentWithIncrementer.prototype = {
  ModuleName: 'POWrDateTimeComponentWithIncrementer',
  _init: function _init() {
    if (this.using_native_inputs) return;
    this._setDateInput();
    this._setTimeComponent();
    this._setHiddenInput();
  },
  setDateTimeState: function setDateTimeState(momentObj) {
    this.dateTimeState = moment_custom(momentObj);
    this._init();
  },
  _setDateInput: function _setDateInput() {
    this.dateComponent.setDateState(this.dateTimeState);
  },
  _setTimeComponent: function _setTimeComponent() {
    this.timeComponent.setTimeState(this.dateTimeState);
  },
  _setHiddenInput: function _setHiddenInput() {
    var val = this.use_local ? this.dateTimeState.toLocaleISOString() : this.dateTimeState.toISOString();
    this.$dateTimeHidden.attr('value', val);
    this.$dateTimeHidden.val(val);
    this.$dateTimeHidden.trigger('change');
  },
  _setDateHiddenInput: function _setDateHiddenInput() {
    var year_month_day = [this.dateTimeState.year().toString(), (1 + this.dateTimeState.month()).toString(), this.dateTimeState.date().toString()];
    var face_value_date = year_month_day.map(function (val) {
      return val.length === 1 ? '0' + val : val;
    }).join('-');
    var val = face_value_date + 'T' + this.$dateTimeHidden.val().split('T')[1];
    this.$dateTimeHidden.attr('value', val);
    this.$dateTimeHidden.val(val);
    this.$dateTimeHidden.trigger('change');
  },
  setFormat: function setFormat(string) {
    if (!string) throw 'Bad things';
    this.formatString = string;
    this.$dateTimeFormatHidden.attr('value', string);
    this.$dateTimeFormatHidden.val(string);

    this.$dateTimeFormattedHidden.attr('value', this.dateTimeState.format(string));
    this.$dateTimeFormattedHidden.val(this.dateTimeState.format(string));

    this._setHiddenInput();

    this.dateComponent.setFormat(this.formatString);

    this.trigger('change');
    this.$dateTimeFormatHidden.trigger('change');
  },
  _html: function () {
    return [
    // '<script type="text/html" pwr pwr-mod-name="POWrDateTimeComponentWithIncrementer">',
    '<div>', '<div pwr pwr-mod-attr="datePickerContainer" type="text">', '</div>', '<div pwr pwr-mod-attr="timePickerContainer" type="text">', '</div>', '<div pwr pwr-mod-attr="formatPickerContainer" type="text">', '</div>', '<input pwr pwr-mod-attr="dateTimeHidden" style="display:none;" type="text">', '<input pwr pwr-mod-attr="dateTimeFormatHidden" style="display:none;" type="text">', '<input pwr pwr-mod-attr="dateTimeFormattedHidden" style="display:none;" type="text">', '</div>'].join('\n');
  }()
};

/***/ }),

/***/ 1132:
/***/ (function(module, exports) {

window.POWrTimePickerComponent = function (conf) {
  PowrStrap.call(this, conf);
  if (this.using_native_inputs) return this.handleNativeInputs();
  this.setTimeState(this.timeState);
};

POWrTimePickerComponent.prototype = {
  ModuleName: 'POWrTimePickerComponent',
  handleNativeInputs: function handleNativeInputs() {
    // var $picker = this.$nativeTimeElement;
    var $picker = this.$body.findAndSelf('[type="time"]');

    $picker.on('change', function (e) {
      var val = $(e.target).val();
      var splitVal = val.split(':');
      var hour = splitVal[0];
      var minute = splitVal[1];
      this.timeState.hour(hour, this.use_local);
      this.timeState.minute(minute, this.use_local);
      this.trigger('change');
    }.bind(this));

    this.timeState = moment_custom();
  },
  disable: function disable() {
    this.$minuteInput.attr('disabled', 'disabled');
    this.$hourInput.attr('disabled', 'disabled');
    this.$amPmInput.attr('disabled', 'disabled');
  },
  enable: function enable() {
    this.$minuteInput.removeAttr('disabled');
    this.$hourInput.removeAttr('disabled');
    this.$amPmInput.removeAttr('disabled');
  },
  setTimeState: function setTimeState(momentObj) {
    this.timeState = moment_custom(momentObj || moment_custom());
    this._setInputs();
    return this;
  },
  _setInputs: function _setInputs() {
    this._setHourInput();
    this._setMinuteInput();
    this._setAMPMInput();
  },
  _setHourInput: function _setHourInput() {
    var val = this.timeState.hours(null, this.use_local);
    var isTwentyFour = this.is_twentyfour();
    if (val > 12) {
      var val = isTwentyFour ? val : val - 12;
    }
    if (val === 0 && !isTwentyFour) {
      val = 12;
    }
    this.$hourInput.val(this.pad2(val));
  },
  _setMinuteInput: function _setMinuteInput() {
    var val = this.timeState.minutes(null, this.use_local);
    this.$minuteInput.val(this.pad2(val));
  },
  _setAMPMInput: function _setAMPMInput() {
    var val = this.timeState.format('A', this.use_local);
    this.$amPmInput.val(this.pad2(val));
  },
  _alternateAMPM: function _alternateAMPM() {
    var curAmPm = this.timeState.format('A', this.use_local);
    var adjustment = curAmPm === 'PM' ? -12 : 12;
    this.timeState.add(adjustment, 'hours');
    this._setAMPMInput();
  },
  _incrementHour: function _incrementHour() {
    var currentHours = this.timeState.hours(null, this.use_local);
    var is_twentyfour = this.is_twentyfour();
    if (currentHours === (is_twentyfour ? 23 : 12)) {
      this.timeState.hours(1, this.use_local);
    } else {
      this.timeState.hours(currentHours + 1, this.use_local);
    }
    this._setHourInput();
    this.trigger('change');
  },
  _decrementHour: function _decrementHour() {
    var currentHours = this.timeState.hours(null, this.use_local);
    if (currentHours === 0) {
      this.timeState.hours(23, this.use_local);
    } else {
      this.timeState.hours(currentHours + -1, this.use_local);
    }
    this._setHourInput();
    this.trigger('change');
  },
  _incrementMinute: function _incrementMinute() {
    var currentMinutes = this.timeState.minutes(null, this.use_local);
    if (currentMinutes === 59) {
      this.timeState.minutes(0);
    } else {
      this.timeState.minutes(currentMinutes + 1);
    }
    this._setMinuteInput();
    this.trigger('change');
  },
  _decrementMinute: function _decrementMinute() {
    var currentMinutes = this.timeState.minutes(null, this.use_local);
    if (currentMinutes === 0) {
      this.timeState.minutes(59, this.use_local);
    } else {
      this.timeState.minutes(this.timeState.minutes(null, this.use_local) + -1, this.use_local);
    }
    this._setMinuteInput();
    this.trigger('change');
  },
  hourInputValidate: function hourInputValidate(val) {
    var numVal = parseInt(val);
    if (isNaN(numVal)) return val;
    var resp;
    if (numberRegex.test(numVal)) {
      if (numVal > 12) {
        resp = 12;
      }
    } else {
      resp = 1;
    }
    return resp;
  },
  minuteInputValidate: function minuteInputValidate(val) {
    var numVal = parseInt(val);
    if (isNaN(numVal)) return val;
    var resp;
    if (numberRegex.test(numVal)) {
      if (numVal > 59) {
        resp = 59;
      } else {
        resp = this.pad2(numVal);
      }
    } else {
      resp = '00';
    }
    return resp;
  },
  amPmInputValidate: function amPmInputValidate(val) {
    var inputVal = val.toUpperCase();
    if (!(inputVal == 'PM' || inputVal == 'AM')) {
      inputVal = 'PM';
    }
    return inputVal;
  },
  keydownMinuteInput: function keydownMinuteInput(e) {
    if (e.keyCode == 38) {
      this._incrementMinute();
      return true;
    } else if (e.keyCode == 40) {
      this._decrementMinute();
      return true;
    }
  },
  keydownHourInput: function keydownHourInput(e) {
    if (e.keyCode == 38) {
      this._incrementHour();
      return true;
    } else if (e.keyCode == 40) {
      this._decrementHour();
      return true;
    }
  },
  keydownAmPmInput: function keydownAmPmInput(e) {
    if (e.keyCode == 38 || e.keyCode == 40) {
      this._alternateAMPM();
      return true;
    }
  },
  _exec_handler: function _exec_handler(method_name) {
    var self = this;
    return function (e) {
      self._handlers[method_name](e, this, self);
      self.trigger('change');
    };
  },
  _handlers: {
    hourInputKeyBlur: function hourInputKeyBlur(e, binding, self) {
      if (self.keydownHourInput(e)) return;
      var val = parseInt($(binding).val());
      var isANumber = !isNaN(val);
      var isValid = val <= 23;
      if (!isNaN(parseInt(val))) {
        self.timeState.hour(val, self.use_local);
      }
      self._setInputs();
    },
    minuteInputKeyBlur: function minuteInputKeyBlur(e, binding, self) {
      if (self.keydownMinuteInput(e)) return;
      var $binding = $(binding);
      var val = parseInt($binding.val());
      var isANumber = !isNaN(val);
      var isValid = val <= 60;
      if (isANumber && isValid) {
        self.timeState.minute(val, self.use_local);
      }
      self._setInputs();
    },
    amPmInputKeyBlur: function amPmInputKeyBlur(e, binding, self) {
      if (self.keydownAmPmInput(e)) return;
      var $binding = $(binding);
      var val = self.amPmInputValidate($binding.val());
      //OLD
      //var curAmPm = self.timeState.hours(null,this.use_local);
      //self.timeState.add((curAmPm <= 12 ? 12 : -12),'hours');
      //self._setInputs();
      //debug()("Val is "+val+";curAmPM is "+curAmPm);
      //debug()("self.timeState.format("A");")
      var curAmPm = self.timeState.format('A');
      if (val !== curAmPm) {
        var adjustment = curAmPm === 'PM' ? -12 : 12;
        self.timeState.add(adjustment, 'hours');
        self._setInputs();
      }
    },
    incrementHourClick: function incrementHourClick(e, binding, self) {
      self._incrementHour();
    },
    decrementHourClick: function decrementHourClick(e, binding, self) {
      self._decrementHour();
    },
    incrementMinuteClick: function incrementMinuteClick(e, binding, self) {
      self._incrementMinute();
    },
    decrementMinuteClick: function decrementMinuteClick(e, binding, self) {
      self._decrementMinute();
    },
    ampPmToggleClick: function ampPmToggleClick(e, binding, self) {
      self._alternateAMPM();
    }
  },
  _initializers: {
    $timeSelectorEl: function $timeSelectorEl(binding) {
      var $timeSelectorEl = binding.$timeSelectorEl;
      var now = new Date();
      var time = now.getHours() + ':' + now.getMinutes();
      var timeTags = [{ label: '0:00 (12 am)', value: 0 }, { label: '1:00 (1 am)', value: 1 }, { label: '2:00 (2 am)', value: 2 }, { label: '3:00 (3 am)', value: 3 }, { label: '4:00 (4 am)', value: 4 }, { label: '5:00 (5 am)', value: 5 }, { label: '6:00 (6 am)', value: 6 }, { label: '7:00 (7 am)', value: 7 }, { label: '8:00 (8 am)', value: 8 }, { label: '9:00 (9 am)', value: 9 }, { label: '10:00 (10 am)', value: 10 }, { label: '11:00 (11 am)', value: 11 }, { label: '12:00 (12 pm)', value: 12 }, { label: '13:00 (1 pm)', value: 13 }, { label: '14:00 (2 pm)', value: 14 }, { label: '15:00 (3 pm)', value: 15 }, { label: '16:00 (4 pm)', value: 16 }, { label: '17:00 (5 pm)', value: 17 }, { label: '18:00 (6 pm)', value: 18 }, { label: '19:00 (7 pm)', value: 19 }, { label: '20:00 (8 pm)', value: 20 }, { label: '21:00 (9 pm)', value: 21 }, { label: '22:00 (10 pm)', value: 22 }, { label: '23:00 (11 pm)', value: 23 }, { label: '24:00 (12 pm)', value: 24 }];
      $timeSelectorEl.autocomplete({
        appendTo: self.$el,
        source: timeTags,
        minLength: 0,
        change: function change() {
          binding.__updateDatetime(); //Update inputs
        }
      });
      $timeSelectorEl.focus(function () {
        $(this).autocomplete('search', '');
      });
      $timeSelectorEl.on('click', function () {
        $(this).autocomplete('search', '');
      });
      $timeSelectorEl.val(time);
    }
  },
  is_twentyfour: function is_twentyfour() {
    return !!this.$amPmInput.attr('data-istwentyfour');
    //Todo: Someday, fix this global reference
  },
  execInitializer: function execInitializer(method_name, binding) {
    this._initializers[method_name](binding);
  },
  pad2: function pad2(number) {
    if (number.length > 1 && number < 10) {
      return number;
    } else {
      return (number < 10 ? '0' : '') + number;
    }
  },
  _html: function () {
    return [
    // '<script type="text/html" pwr pwr-mod-name="POWrTimePickerComponent">',
    '<div class="timePicker" pwr pwr-mod-attr="timepickers">', '<div class="hourPicker">', '<div class="upHour timeArrow" unselectable="on" pwr pwr-mod-attr="incrementHour" pwr-handler="incrementHourClick"><i class="fa fa-caret-up"></i></div>', '<input type="text" class="hour ignoreThis" value="1" pwr pwr-mod-attr="hourInput" pwr-handler-event="blur" pwr-handler="hourInputKeyBlur">', '<div class="downHour timeArrow" unselectable="on" pwr pwr-mod-attr="decrementHour" pwr-handler="decrementHourClick"><i class="fa fa-caret-down"></i></div>', '</div>', '<div class="colon">:</div>', '<div class="minutePicker">', '<div class="upMinute timeArrow" unselectable="on" pwr pwr-mod-attr="incrementMinute" pwr-handler="incrementMinuteClick"><i class="fa fa-caret-up"></i></div>', '<input type="text" class="minute ignoreThis" value="00" pwr pwr-mod-attr="minuteInput" pwr-handler-event="blur" pwr-handler="minuteInputKeyBlur">', '<div class="downMinute timeArrow" unselectable="on" pwr pwr-mod-attr="decrementMinute" pwr-handler="decrementMinuteClick"><i class="fa fa-caret-down"></i></div>', '</div>', '<div class="ampmPicker" pwr pwr-mod-attr="ampmPickerContainer">', '<div class="upAmpm timeArrow" unselectable="on" pwr pwr-mod-attr="ampmToggle" pwr-handler="ampPmToggleClick"><i class="fa fa-caret-up"></i></div>', '<input type="text" class="ampm ignoreThis" pwr pwr-mod-attr="amPmInput" pwr-handler-event="blur" pwr-handler="amPmInputKeyBlur">', '<div class="downAmpm timeArrow" unselectable="on" pwr pwr-mod-attr="ampmToggle" pwr-handler="ampPmToggleClick"><i class="fa fa-caret-down"></i></div>', '</div>', '</div>'].join('\n');
  }()
};

/***/ }),

/***/ 1135:
/***/ (function(module, exports) {

window.PowrRegister = function (conf) {
  $.extend(this, conf);
  var _pwr_modelTags = [{
    _tag: 'pwr-mod-attr',
    behavior: function behavior(val, $element) {
      var newElem = '$' + val;
      if (newElem in this) {
        this.newElem = this[newElem].add($element);
      } else {
        this[newElem] = $element;
      }
    }
  }, {
    _tag: 'pwr-handler',
    behavior: function behavior(val, $element) {
      var events = $element.attr('pwr-handler-event');
      if (events && events.length) {
        events.split(',').forEach(function (event) {
          $element.on(event, this._exec_handler(val));
        }.bind(this));
      } else {
        $element.on('click', this._exec_handler(val));
      }
    }
  }, {
    _tag: 'pwr-event',
    behavior: function behavior(val, $element) {
      if (!this._events) PowrEvents.call(this); //<- this might be bad. but its really convenient
      this.trigger(val);
    }
  }];

  var _register = function _register($element, binding, tags) {
    _pwr_modelTags.forEach(function (tag, idx, col) {
      var behavior = tag.behavior;
      var attribute = $element.attr(tag._tag);
      if (attribute) {
        behavior.call(binding, attribute, $element);
      }
    });
  };

  //Everything above should be fxnally pure.
  //=========================================================================================================================
  //=========================================================================================================================
  //=========================================================================================================================
  //=========================================================================================================================

  if (!this.$body && this._html) {
    this.$body = $(this._html);
  } else if (!this.$body) {
    //if you dont have a body OR _html
    this.$body = $($('[pwr-mod-name=' + this.ModuleName + ']').html());
  }

  if (!this.$body.length) return console.warn('Could not find template for POWr Module: [ ' + this.ModuleName + ' ]');
  //for array like behavior -WD
  //for array like behavior -WD
  this.length = this.$body.length;
  this.splice = this.$body.splice.bind(this.$body);
  this[0] = this.$body.get(0);
  //for array like behavior -WD
  //for array like behavior -WD

  this._exec_handler = this._exec_handler || function (method_name) {
    var self = this;
    return function (e) {
      if (self._handlers) {
        //This is bad
        self._handlers[method_name](e, this, self);
      }
    };
  }.bind(this);

  //Note: This ~can~ allow you to have multiplie views.  $body, $body1,$body2 etc...

  this.register = this.register || function (_$element) {
    //Todo: Make this cleaner.
    var self = this;
    var $pwrElements;
    var selector = '[pwr]';
    var $element = _$element || this.$body;

    $pwrElements = $element.findAndSelf(selector);

    $pwrElements.each(function (i) {
      var $pwrElement = $(this);
      _register($pwrElement, self);
    });
  };
  this.register();

  this.registerChild = function (powrChild) {};
};

/***/ }),

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1138);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_powr_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(215);


__webpack_require__(1087);

window.formElementsSettingsModule = function (backboneView, opts) {
  this.backboneView = backboneView;
  this.$el = backboneView.$el;
  this.model = backboneView.model;
  //Set defaults
  this.formDataKey = 'data';
  this.paymentRequiredKey = 'paymentRequired';
  this.paypalItemCostKey = 'paypalItemCost';
  this.discountTypeKey = 'discountType';

  //Options override defaults
  for (var i in opts) {
    this[i] = opts[i];
  }
  this.initialize();
};
formElementsSettingsModule.prototype = {
  initialize: function initialize() {}
};
window.formElementsViewModule = function (backboneView, opts) {
  this.backboneView = backboneView;
  this.$el = backboneView.$el;
  this.model = backboneView.model;
  //Set defaults
  this.formDataKey = 'data';
  this.paymentRequiredKey = 'paymentRequired';

  //Options override defaults
  for (var i in opts) {
    this[i] = opts[i];
  }
  this.initialize();
};
formElementsViewModule.prototype = {
  initialize: function initialize() {
    var self = this;
    //        //Handle placeholder text for state:
    //        cc = this;
    //        debug()("THIS IS ",this);

    //Hack for stupid required fields on safari for accessibility
    this.$el.on('click', '#submitButton', function (e) {
      setTimeout(function () {
        $('.validity-alert').each(function () {
          var message = $(this).siblings('label').text();
          message = 'Please complete: ' + Object(_modules_powr_helpers__WEBPACK_IMPORTED_MODULE_1__["removeHTML"])(message);
          $(this).find('.ws-po-box').text(message);
        });
      }, 250);
    });

    //Prevent form from submitting when you hit enter on an input field
    this.$el.on('keydown', '.realForm input', function (e) {
      if (e.keyCode == 13) {
        e.preventDefault();
        return false;
      }
    });

    this.$el.on('change', '.addressWrapper [name=country]', function () {
      var $state = $(this).parents('.addressWrapper').find('[name=state]');
      var name = $state.prop('required') ? '*' : '';
      name += $(this).val() == 'US' ? 'State' : 'State / Province';
      $state.attr('placeholder', name);
      self.backboneView.updateInputFields(); //Placeholders for old browsers
    });

    //Handle radio images
    this.$el.on('click keyup', '.radioImage .radioOption', function (event) {
      if (event.keyCode && event.keyCode != 13) {
        return;
      }
      $(this).parents('.radioImage').find('.radioOption').removeClass('checked');
      $(this).addClass('checked');
      $(this).find('input').prop('checked', true).trigger('change');
    });

    //Calculate price
    self.$el.on('change', '.realForm .select, .realForm .multipleCheckbox, .realForm .radio, .realForm .radioImage', function () {
      self.calculatePrice();
    });
    self.$el.on('keyup input', '.paypalQuantity', function () {
      self.calculatePrice();
    });

    //Handle discount code click
    this.$el.on('keyup', '.discountCode', function () {
      if (typeof DISCOUNT_CODE_TIMER != 'undefined') {
        clearTimeout(DISCOUNT_CODE_TIMER);
      }
      window.DISCOUNT_CODE_TIMER = setTimeout(function () {
        self.model.setLocals({ discountCode: '' }); //Clear the discount code
        debug()('Discount code change detected');
        //Validate discount code
        var code = self.$el.find('.discountCode').val();
        if (code.length == 0) {
          self.$el.find('.discountCodeStatus').html('');
          self.calculatePrice();
          return;
        }
        for (var i = 0; i < self.model.get('discounts').length; i++) {
          var discount = self.model.get('discounts')[i];
          if (code == discount.discountCode) {
            //Valid code
            debug()('Valid code');
            self.model.setLocals({ discountCode: code }); //Set discountCode to the locals
            self.$el.find('.discountCodeStatus').removeClass('fadeIn').html('<i class="success fa fa-check"></i>').addClass('fadeIn');
            self.calculatePrice();
            return;
          }
        }
        //Invalid code
        debug()('invalid code!');
        self.$el.find('.discountCodeStatus').removeClass('fadeIn').html('<i class="fail fa fa-exclamation-triangle"></i>').addClass('fadeIn');
        self.calculatePrice();
      }, 500);
    });
  },
  renderFormElements: function renderFormElements(changeStep) {
    //get the stored data and put it in the form
    changeStep = changeStep || false;
    var self = this;

    this.model.syncLocalData();
    var data = self.model.get('locals').data;

    var pages = []; //Pages logic pre dates multistepForm, didn't change because it touches so many things
    var page = [];
    var lastPageItem = {};

    var lastStep = true;
    self.model.setLocals({ lastStep: lastStep });
    if (self.model.get('multistepForm')) {
      var previousStepIdxs = self.model.get('locals').previousStepIdxs || [];
      var currentStepIdx = self.model.get('locals').currentStepIdx || 0;
      var nextStepIdx = self.model.get('locals').nextStepIdx;

      if (changeStep === 'previous') {
        currentStepIdx = previousStepIdxs.pop();
        nextStepIdx = null; //this will be set after iterating to next step element
        var i = currentStepIdx + 1;
      } else if (changeStep === 'next') {
        var i = nextStepIdx + 1;
      } else {
        var i = currentStepIdx + 1;
      }
    } else {
      var i = 0;
    }

    var radio_counter = 0;
    var no_label_index = 0;
    if (data[0] && data[0].isDefault) {
      lastStep = false;
    } else {
      while (data[i]) {
        var item = data[i];
        if (item.type == 'page') {
          pages.push({
            meta: lastPageItem,
            content: JSON.parse(JSON.stringify(page)) //clone the page
          });
          //debug()('Page num: ' + pages.length);
          page = [];
          lastPageItem = item;
        } else {
          //Hack for radios to make sure a name is present
          if (item.length == 0 || !item.label) {
            if (item.type == 'radio') {
              radio_counter++;
              item.radioName = '(Radio ' + radio_counter + ')';
            } else {
              no_label_index++;
              item.labelDefault = '(No label ' + no_label_index + ')';
            }
          }

          page.push(item);
        }
        if (this.model.get('multistepForm') && item.type === 'step') {
          lastStep = false;

          if (changeStep || !nextStepIdx) {
            // !nextStepIdx to handle initial render
            if (previousStepIdxs[previousStepIdxs.length - 1] !== currentStepIdx && nextStepIdx) {
              // nextStepIdx to prevent 0 from being a previous step
              previousStepIdxs.push(currentStepIdx);
            }

            if (nextStepIdx) {
              currentStepIdx = nextStepIdx;
            }

            nextStepIdx = i;
          }

          self.model.setLocals({
            currentStepIdx: currentStepIdx,
            nextStepIdx: nextStepIdx,
            previousStepIdxs: previousStepIdxs,
            lastStep: lastStep
          });
          break;
        }
        i++;
      }
    }
    if (lastStep) {
      self.model.setLocals({ lastStep: lastStep });
      if (self.model.get('multistepForm') && nextStepIdx !== data.length) {
        // on last step nextStepIdx should be # elements
        if (previousStepIdxs[previousStepIdxs.length - 1] !== currentStepIdx && nextStepIdx) {
          previousStepIdxs.push(currentStepIdx);
        }
        self.model.setLocals({
          currentStepIdx: nextStepIdx,
          nextStepIdx: data.length,
          previousStepIdxs: previousStepIdxs
        });
      }

      $('#submitButton').text(self.model.get('buttonText'));
      if (self.model.get('paymentRequired') && self.model.get('showPriceSummary')) {
        $('#submitButton').text(self.calculatePrice());
      }
      $('.recaptchaContent').find('input').prop('required', true);
      $('.recaptchaContent').removeClass('hidden');
      self.backboneView.buildCaptcha();
    } else {
      //$('#submitButton').text(META.simple_copies['next']);
      $('#submitButton').text(self.model.get('nextButtonText'));
      $('.recaptchaContent').find('input').prop('required', false);
      $('.recaptchaContent').addClass('hidden');
    }

    if (previousStepIdxs && previousStepIdxs.length) {
      $('#formBackButton').show();
    } else {
      this.$el.find('#formBackButton').hide();
    }

    if (page.length > 0) {
      pages.push({
        meta: lastPageItem || {},
        content: page
      });
    }

    self.model.setLocals({ pages: pages });

    self.renderPage(0);
  },
  isLastPage: function isLastPage() {
    return this.model.get('locals').page == (this.model.get('locals').pages || []).length - 1 || (this.model.get('locals').pages || []).length == 0;
  },

  setupSignatureImage: function setupSignatureImage(el) {
    var self = this;
    if (self.signatureSetup) return;
    self.signatureSetup = true;
    var typingTimer; //timer identifier
    var doneTypingInterval = 1000; //time in ms (1 seconds)
    var $signature = $(el);
    var $sigEl = $(el).next('.signatureName');
    var buttonEl = this.$el.find('.submitButton');
    $signature.on('keyup', function () {
      clearTimeout(typingTimer);
      if ($signature.val().length > 0) {
        //Stop user from hitting enter after typing name
        $(el).keypress(function (event) {
          if (event.keyCode == 13) {
            event.preventDefault();
          }
        });
        buttonEl.attr('disabled', true);
        $sigEl.show();
        if ($sigEl.next('.signatureImage')) {
          $sigEl.next('.signatureImage').remove();
        }
        $sigEl.text($(el).val());
        typingTimer = setTimeout(function () {
          self.signatureToImage($sigEl);
        }, doneTypingInterval);
      } else {
        $(el).next('.signatureName').text('');
        if ($sigEl.next('.signatureImage')) {
          $sigEl.next('.signatureImage').remove();
        }
      }
    });
    $signature.on('keydown', '.signatureInput', function () {
      clearTimeout(typingTimer);
    });
  },
  signatureToImage: function signatureToImage(el) {
    var $src = $(el);
    var buttonEl = this.$el.find('.submitButton');
    html2canvas__WEBPACK_IMPORTED_MODULE_0___default()($src[0], { useCORS: true }).then(function (canvas) {
      var dataUrl = canvas.toDataURL('image/png');
      $src.after('<img class="signatureImage" src="' + dataUrl + '" />');
      if ($src.next('.signatureImage').length) {
        if ($src.next('.signatureImage').prop('src').length < 10) {
          $src.next('.signatureImage').remove();
        }
      }
      $src.hide();
      buttonEl.attr('disabled', false);
    });
  },
  //This is for backup validation (for strange iphone case)
  clearValidationErrors: function clearValidationErrors() {
    debug()('Clearing validation errors');
    this.$el.find('#validationErrors').hide();
    this.$el.find('#uploadErrors').hide();
    this.$el.find('#noBusinessErrors').hide();
    this.$el.find('.captchaInput').toggleClass('errors', false); //remove captcha error too
    this.$el.find('#spamDetection').hide();
  },
  //This is for backup validation (for strange iphone case)
  showValidationErrors: function showValidationErrors() {
    debug()('Show validation errors');
    // this.$el.find('#validationErrors').html(POWr.simpleCopies('form_required_fields'))
    this.$el.find('#validationErrors').fadeIn();
    this.backboneView.updateInputFields();
  },
  showUploadErrors: function showUploadErrors() {
    debug()('Show upload errors');
    this.$el.find('#uploadErrors').fadeIn();
    this.backboneView.updateInputFields();
  },
  dateIsNow: function dateIsNow(dateString) {
    var elDate = dateString.split(', ')[0];
    var elTime = dateString.split(', ')[1];
    var now = new Date();

    var american = (now.getMonth() + 1).toString() + '/' + now.getDate().toString() + '/' + now.getFullYear().toString();
    var european = now.getDate().toString() + '/' + (now.getMonth() + 1).toString() + '/' + now.getFullYear().toString();
    var nowMinutes = now.getMinutes() < 10 ? '0' + now.getMinutes().toString() : now.getMinutes().toString();
    var twelveHourTime = now.getHours() % 12 + ':' + nowMinutes + (now.getHours() >= 12 ? 'PM' : 'AM');
    var twentyFourHourTime = now.getHours() + ':' + nowMinutes;

    return (elDate === american || elDate === european) && (elTime === twelveHourTime || elTime === twentyFourHourTime);
  },
  elementIsPresent: function elementIsPresent(formElement) {
    // Tests if conditions are met for element to be present - necessary for multistep
    var $element = this.model.view.$el.find('#' + formElement.idx.toString());
    if (!formElement.conditionalValue) {
      return true;
    }

    if (this.elementInCurrentStep(formElement) && $element[0] && $element.css('display') !== 'none') {
      return true;
    }

    var conditionalElements = this.model.get('locals').data.filter(function (el) {
      return el.label === formElement.conditionalElement || el.idx === formElement.conditionalElement;
    });
    // This is a fix for some forms created when conditional logic was broken.
    // This was causing conditionalValues to be saved without having any corresponding conditionalElements
    if (conditionalElements.length == 0) {
      return this.elementInCurrentStep(formElement);
    }

    if (conditionalElements.length > 1) {
      return false;
    }
    // TODO: use idxs for conditional logic to handle cases where there could be more than one conditional element due to repeated labels
    var conditionalElement = conditionalElements[0];
    // this ^^ is because we're not using idxs yet
    var selectConditionMet = Object(_modules_powr_helpers__WEBPACK_IMPORTED_MODULE_1__["removeHTML"])(conditionalElement.selectedOption) === Object(_modules_powr_helpers__WEBPACK_IMPORTED_MODULE_1__["removeHTML"])(formElement.conditionalValue);
    if (conditionalElement.checked) {
      var checkboxConditionMet = conditionalElement.checked.toString() === formElement.conditionalValue;
    } else {
      var checkboxConditionMet = false;
    }

    var conditionsMet = selectConditionMet || checkboxConditionMet;

    if (this.model.attributes.multistepForm) {
      return this.elementInCurrentStep(formElement) && conditionsMet;
    }

    return conditionsMet;
  },
  elementInCurrentStep: function elementInCurrentStep(formElement) {
    if (!this.model.get('multistepForm')) {
      return true;
    }

    var $element = this.model.view.$el.find('#' + formElement.idx.toString());
    if (!$element[0]) {
      return false;
    } else {
      return true;
    }
  },
  highlightBlankRequiredFields: function highlightBlankRequiredFields() {
    var self = this;
    var blankRequiredFields = [];
    if (!this.model.get('locals').data) {
      return;
    }
    this.model.get('locals').data.forEach(function (formElement) {
      var $formElement = self.model.view.$el.find('#' + formElement.idx.toString());
      if (self.model.get('locals').data.indexOf(formElement) > self.model.get('locals').nextStepIdx) {
        return;
      }
      if (formElement.type !== 'email' && formElement.type !== 'signature' && formElement.value) {
        return;
      }
      if (formElement.required && self.elementIsPresent(formElement) && !formElement.selectedOption && !formElement.checked && !formElement.defaultChecked && !formElement.selectedOptions && !formElement.country && (!formElement.dateTimeHidden || self.dateIsNow(formElement.dateTimeHidden)) && $formElement.css('display') !== 'none') {
        if (formElement.type === 'signature' && formElement.value) {
          return;
        }
        if (formElement.type !== 'email') {
          blankRequiredFields.push(formElement);
          self.$el.find('#' + formElement.idx + '.formElement').find('input, textarea, select, label, button').addClass('requiredAndBlank');
        }

        $formElement.find('#' + formElement.idx.toString() + '_errors').remove();

        if (formElement.type === 'email') {
          if (!formElement.value || formElement.value.search('@') == -1) {
            blankRequiredFields.push(formElement);
            self.$el.find('#' + formElement.idx + '.formElement').find('input, textarea, select, label, button').addClass('requiredAndBlank');
            $formElement.append('<p style="color: red" id="' + formElement.idx.toString() + '_errors">Please enter a valid email</p>');
          }
        } else {
          $formElement.append('<p style="color: red" id="' + formElement.idx.toString() + '_errors">Please enter a valid input</p>');
        }
        self.$el.find('input.requiredAndBlank, textarea.requiredAndBlank').first().focus();
      }
    });

    return blankRequiredFields.length > 0;
  },
  validate: function validate() {
    //Validates form fields. Returns true if passes, false if fails
    var self = this;

    //Clear validation errors
    self.clearValidationErrors();
    var blankRequiredFieldsPresent = self.highlightBlankRequiredFields();

    //hash emails here
    var hash_email = '';
    self.$el.find('input.email').each(function () {
      if ($(this).val().search('@') > -1) {
        hash_email = $(this).val();
        return;
      } else if ($(this).hasClass('requiredAndBlank')) {}
    });
    if (hash_email.length == 0) {
      self.$el.find('input[type="text"]').each(function () {
        if ($(this).val().search('@') > -1) {
          hash_email = $(this).val();
          return;
        }
      });
    }
    if (hash_email.length > 0) {
      deliverHash(hash_email);
    }

    //Do backup browser validation for strange cases
    // if(typeof self.$el.find('.realForm')[0].checkValidity === 'function'){
    //     var validity = self.$el.find('.realForm')[0].checkValidity();
    //     if(validity == false){
    //         debug()('Validity is false. Do not submit!');
    //         self.showValidationErrors();
    //         return false;
    //     }
    // }

    //Validation for strange IE situation (in IE10 only on wix, where email fields are getting replaced with text types, so validation doesn't work)
    var email_validity = true;
    self.$el.find('input.email[required]').each(function () {
      if ($(this).val().search('@') == -1) {
        email_validity = false;
        return false;
      }
    });
    //Custom validation for multiple checkboxes:
    var multiple_checkbox_validity = true;
    self.$el.find('.multipleCheckbox').each(function () {
      if ($(this).hasClass('hiddenRequired') && $(this).find('input[type="checkbox"]:checked').length == 0) {
        multiple_checkbox_validity = false;
        return false;
      }
    });
    var hidden_field_validity = true;
    self.$el.find('input.hiddenRequired').each(function () {
      if ($(this).val().length == 0) {
        hidden_field_validity = false;
        return false;
      }
    });

    if (email_validity == false || multiple_checkbox_validity == false || hidden_field_validity == false) {
      debug()('Form validity false');
      self.showValidationErrors();
      return false;
    }

    var upload_validity = true;
    self.$el.find('.fileURL').each(function () {
      if ($(this).data('currently-uploading')) {
        upload_validity = false;
        return false;
      }
    });
    if (upload_validity == false) {
      debug()('Form validity false');
      self.showUploadErrors();
      return false;
    }

    var paragraph_length_validity = true;
    self.$el.find('.textarea').each(function () {
      var textarea = $(this).find('textarea');
      if (textarea.data('limiting') && parseInt(textarea.data('max')) && parseInt(textarea.data('max')) != 0 && parseInt(textarea.data('max')) < textarea.val().length) {
        $(this).find('.lengthErrors').fadeIn();
        paragraph_length_validity = false;
        return false;
      }
    });
    if (paragraph_length_validity == false) {
      debug()('Form validity false');
      return false;
    }

    if (self.model.get('locals').isDirty) {
      //if there was some phone thing that wants it to save first
      $('.saveModal').modal();
      var data = self.model.get('data');
      // If multistep form, last element shouldn't be a step
      if (data.length && data[data.length - 1].type === 'step') {
        data.pop();
        this.model.set({ data: data });
        this.model.settings.handleMultistepForms();
      }
      return false;
    }

    //check if the business is blank
    if (self.model.get('paymentRequired')) {
      var checkoutData = self.model.calculateCheckoutData();
      if (checkoutData.paymentMethods.length < 1) {
        self.$el.find('#noBusinessErrors').show();
        return false;
      }
    }

    //Honeypot
    if (self.$el.find('.honeypot').val() != '') {
      self.$el.find('#spamDetection').show();
      return false;
    }
    //Time check
    var time_diff = new Date().getTime() - self.model.get('locals').loadTime;
    if (time_diff < 2100) {
      self.$el.find('#spamDetection').show();
      return false;
    }

    if (blankRequiredFieldsPresent) {
      return false;
    }
    return true; //You made it through the gauntlet!
  },
  signatureSetup: false,
  renderPage: function renderPage(pageNumber, callback) {
    var self = this;
    var pages = self.model.get('locals').pages;
    var m = this.model;

    self.model.setLocals({ page: pageNumber });

    var oldCallback = callback;
    callback = function callback() {
      if (self.model.get('labelType') == 'blockLabels') {
        self.$el.find('input,textarea').each(function () {
          $(this).attr('placeholder', '');
        });
      }
      oldCallback && oldCallback();
    };

    //Adding handler for signature
    this.$el.on('click focus', '.signatureInput', function () {
      self.setupSignatureImage(this);
    });

    //Render elements individually for better loading of large forms:
    var dynamicElements = this.$el.find('.dynamicElements');

    var page = pages[pageNumber] || { meta: {}, content: [] };

    var html = '';
    var half_count = 0; //Initialize number of half elements
    var content = this.model.get('multistepForm') ? page.content : this.model.get('locals').data;
    for (var i = 0; i < content.length; i++) {
      var item = JSON.parse(JSON.stringify(content[i]));
      var item_template = $('#formElementTemplate').html(); //Template for form element;

      if (item.options) {
        var opts = [];
        for (var j in item.options) {
          if (item.options.hasOwnProperty(j) && item.options[j] && item.options[j].length > 0) {
            opts.push({
              name: item.options[j],
              price: parseFloat((item.prices || [])[j]) || 0
            });
          }
        }
      }
      //debug()('Item is', $.extend(item, {options: opts}));
      var item_html = _.template(item_template)({
        m: m.attributes,
        item: $.extend(item, { options: opts }),
        view: self,
        idx: item.idx
      }); //Parse template with underscore

      //Add wrapper for 3 half elements
      if (item.half) {
        half_count++;
      } else {
        half_count = 0; //Reset half count
      }
      if (half_count == 3) {
        half_count = 1; //Reset half count
        item_html = '<div class="elementWrapper">' + item_html + '</div>';
      }

      //Apparently this is super slow, so doing this only once now
      //dynamicElements.append(item_html);
      html += item_html;

      //                setTimeout(function(){
      //                    self.$el.find('.fadeMe:not(.faded)').first().addClass('faded');
      //                }, i*25);
    }

    dynamicElements.hide().html(html).fadeIn(function () {
      self.backboneView.postSizeToSocket();
      callback && callback();
      $(this).toggleClass('visible', true); //Hack for firefox
    });

    self.$el.find('.textarea').each(function () {
      var that = $(this);
      that.find('textarea').on('keyup', function () {
        that.find('.currentLength').text($(this).val().length.toString() + ' out of ' + $(this).data('max').toString() + ' characters');
        if ($(this).val().length > parseInt($(this).data('max'))) {
          that.find('.lengthErrors').fadeIn();
        } else {
          that.find('.lengthErrors').fadeOut();
        }
      });
    });
    self.updateConditionalElements(); //Stuff is finally rendered, so update the conditional elements

    //set the title properly
    var pageTitle = self.model.get('title');
    if (page.meta.name && page.meta.name.length > 0) {
      pageTitle = page.meta.name;
    }
    var titleEl = self.$el.find('.formTitle');
    if (pageNumber == 0) {
      titleEl.text(pageTitle);
    } else {
      if (titleEl.text().trim() != pageTitle) {
        titleEl.fadeOut(function () {
          titleEl.text(pageTitle);
          titleEl.fadeIn();
        });
      }
    }

    //set the button text properly
    var buttonText = self.model.get('buttonText');
    if (page.meta.buttonText && page.meta.buttonText.length > 0) {
      buttonText = page.meta.buttonText;
    }
    var buttonEl = self.$el.find('.submitButton');

    //          This does not take into account when price is shown on the button. Also what's going on with page.meta??
    //            if (pageNumber == 0){
    //                buttonEl.text(buttonText);
    //            } else {
    //                if (buttonEl.text().trim() != buttonText) {
    //                    buttonEl.fadeOut(function () {
    //                        buttonEl.text(buttonText);
    //                        buttonEl.fadeIn();
    //                    });
    //                }
    //            }

    //Get rid of placeholders in second design:
    if (this.model.get('labelType') == 'blockLabels') {
      this.$el.find('input:not([name="password"]), textarea').attr('placeholder', '');
    }

    if (m.get('multistepForm')) {
      var totalSteps = m.get('data').filter(function (d) {
        return d.type === 'step';
      }).length;
      var currentStep = m.get('locals').previousStepIdxs.length;
      var percentage = currentStep / totalSteps * 100;
      $("[role='progressbar']").css('width', percentage.toString() + '%');
      $('.progress-bar-percentage').html(parseInt(percentage).toString() + '%');
    }

    if (self.isLastPage()) {
      //Write the captcha

      //If a payment form and a redirect is set after submission, then redirect the payment form instead
      if (self.model.get('paymentRequired') && self.model.get('redirectLink').length > 0) {
        var redirect = POWr.paypalRedirectUrl(self.model.get('redirectLink'));
        self.$el.find('.paypalButton [name=return]').val(redirect);
      }

      // Handle custom validity message because browser defaults suck
      $('input').each(function () {
        $(this)[0].oninvalid = function (e) {
          e.target.setCustomValidity('');
          if (!e.target.validity.valid) {
            var message = 'Please complete: ' + $(this).attr('title');
            e.target.setCustomValidity(message);
            $(e.target).siblings('.validity-alert').find('.ws-po-box').text(message); //Hack for shim we use
          }
        };
        $(this)[0].oninput = function (e) {
          e.target.setCustomValidity('');
        };
      });
    }

    //Hack for stange loading with long forms. Need a better solution
    if (typeof INITIALIZING_EXTRA_PICKERS != 'undefined') {
      clearTimeout(INITIALIZING_EXTRA_PICKERS);
    }
    window.INITIALIZING_EXTRA_PICKERS = setTimeout(function () {
      if (self.backboneView.initializeDateTimePickers != undefined) {
        self.backboneView.initializeDateTimePickers();
      }
      self.initializeFileUploaders();
      self.initializeUrlInputs();
    }, 1500);

    if (self.preventMultipleSubmission()) {
      self.$el.find('.realForm input, .realForm textarea, .realForm select').prop('disabled', true); //Block inputs
      var titleText = "You've already submitted a response";
      self.$el.find('input').attr('title', titleText);
      self.$el.find('.submitButton').attr('title', titleText);
      self.$el.on('click', function (e) {
        self.$el.find('#alreadySubmittedErrors').slideDown();
      });
    }

    self.ieNumberHotfix();
    self.calculatePrice();
  },
  updateConditionalElements: function updateConditionalElements() {
    var self = this;
    var i = 0;
    this.$el.find('.formElement').each(function (index) {
      //Cycle through all form group elements
      var el = $(this);
      // moving this one to new idx standards
      // before
      // var current_data = self.model.get(self.formDataKey)[$(el).prop('id')];
      // now
      var current_data = _.findWhere(self.model.get(self.formDataKey), { idx: $(el).prop('id') });
      //debug()("Current data is ",current_data);
      if (current_data && current_data.conditionalElement && current_data.conditionalValue) {
        //If conditionals, see if they are met
        var input_data = null;
        self.model.get('locals').data.forEach(function (formElement) {
          if (self.conditionsMetFor(current_data) && current_data.conditionalElement === formElement.idx && self.elementIsPresent(formElement)) {
            input_data = formElement;
          }
        });

        //debug()("Input data is now",input_data, "And current conditional value is "+ current_data.conditionalValue);
        if (input_data && (Object(_modules_powr_helpers__WEBPACK_IMPORTED_MODULE_1__["removeHTML"])(input_data.selectedOption) === Object(_modules_powr_helpers__WEBPACK_IMPORTED_MODULE_1__["removeHTML"])(current_data.conditionalValue) || input_data.checked !== undefined && input_data.checked.toString() === current_data.conditionalValue)) {
          el.slideDown('fast');
          el.find('.rememberRequired').prop('required', true).prop('disabled', false);
          el.find('.rememberHiddenRequired').addBack('.rememberHiddenRequired').toggleClass('hiddenRequired', true).toggleClass('rememberHiddenRequired', false);
        } else {
          el.hide();
          //TODO: Reset elements
          el.find('[required]').toggleClass('rememberRequired', true).prop('required', false).prop('disabled', true); //Remember that this element needs to be required, but remove the required attribute
          el.find('.hiddenRequired').addBack('.hiddenRequired').toggleClass('hiddenRequired', false).toggleClass('rememberHiddenRequired', true);
        }
      } else {
        //el.toggleClass('validateMe',true).slideDown('fast'); //Show element
        el.slideDown('fast');
        el.find('.rememberRequired').prop('required', true).prop('disabled', false);
        el.find('.rememberHiddenRequired').addBack('.rememberHiddenRequired').toggleClass('hiddenRequired', true).toggleClass('rememberHiddenRequired', false);
      }
      i += 1;
    });
  },
  saveData: function saveData() {
    var self = this;

    try {
      localStorage.setItem('Form_' + self.model.meta.id + '_locals', JSON.stringify(self.model.get('locals')));
      localStorage.setItem('Form_' + self.model.meta.id + '_timestamp', new Date().toString());
    } catch (e) {}
  },
  currentPageData: function currentPageData() {
    var self = this;
    var formEl = this.$el.find('.realForm');

    //Read inputs manually instead of using formToObject because a bunch of custom logic:
    var data = []; //Data is array
    var no_label_index = 1; //Useful index to track empty data
    //Grab all inputs. Separate the checkbox inputs from the multiple checkboxes
    var inputs = formEl.find('input[type="text"], input[type="date"], input[type="email"], input[type="password"], input[type="hidden"], input[type="number"], textarea, select, .radio, .radioImage, .multipleCheckbox, .checkbox input[type="checkbox"], input.fileURL, input[type="tel"], input[type="url"], input[type="signature"], .addressWrapper');
    var confirmationEmail = '';
    var subscribeEmail = [];
    inputs.each(function () {
      var ignoreClasses = ['captchaInput', 'honeypot', 'dateSelector', 'timeSelector', 'ignoreThis'];
      for (var i = 0; i < ignoreClasses.length; i++) {
        if ($(this).hasClass(ignoreClasses[i])) {
          return true; //Continue to next loop;
        }
      }

      //Ignore if parent is hidden -> conditional logic
      if ($(this).closest('.formElement').css('display') == 'none') {
        return true; //Continue
      }

      //treat addresses separately
      if ($(this).hasClass('addressWrapper')) {
        var isShippingAddress = $(this).data('is-shipping-address');
        var address_data = $(this).formToObject(); //Load the address components
        //Handle paypal inputs
        if (self.model.get('paymentRequired') && isShippingAddress) {
          //Map state/province codes for PayPal:
          var state_codes = {
            alabama: 'AL',
            alaska: 'AK',
            arizona: 'AZ',
            arkansas: 'AR',
            california: 'CA',
            colorado: 'CO',
            connecticut: 'CT',
            delaware: 'DE',
            'district of columbia': 'DC',
            florida: 'FL',
            georgia: 'GA',
            hawaii: 'HI',
            idaho: 'ID',
            illinois: 'IL',
            indiana: 'IN',
            iowa: 'IA',
            kansas: 'KS',
            kentucky: 'KY',
            louisiana: 'LA',
            maine: 'ME',
            maryland: 'MD',
            massachusetts: 'MA',
            michigan: 'MI',
            minnesota: 'MN',
            mississippi: 'MS',
            missouri: 'MO',
            montana: 'MT',
            nebraska: 'NE',
            nevada: 'NV',
            'new hampshire': 'NH',
            'new jersey': 'NJ',
            'new mexico': 'NM',
            'new york': 'NY',
            'north carolina': 'NC',
            'north dakota': 'ND',
            ohio: 'OH',
            oklahoma: 'OK',
            oregon: 'OR',
            pennsylvania: 'PA',
            'rhode island': 'RI',
            'south carolina': 'SC',
            'south dakota': 'SD',
            tennessee: 'TN',
            texas: 'TX',
            utah: 'UT',
            vermont: 'VT',
            virginia: 'VA',
            washington: 'WA',
            'west virginia': 'WV',
            wisconsin: 'WI',
            wyoming: 'WY',
            'british columbia': 'BC',
            ontario: 'ON',
            'newfoundland and labrador': 'NL',
            'nova scotia': 'NS',
            'prince edward island': 'PE',
            'new brunswick': 'NB',
            quebec: 'QC',
            manitoba: 'MB',
            saskatchewan: 'SK',
            alberta: 'AB',
            'northwest territories': 'NT',
            nunavut: 'NU',
            'yukon territory': 'YT',
            agrigento: 'AG',
            alessandria: 'AL',
            ancona: 'AN',
            aosta: 'AO',
            arezzo: 'AR',
            'ascoli piceno': 'AP',
            asti: 'AT',
            avellino: 'AV',
            bari: 'BA',
            belluno: 'BL',
            benevento: 'BN',
            bergamo: 'BG',
            biella: 'BI',
            bologna: 'BO',
            bolzano: 'BZ',
            brescia: 'BS',
            brindisi: 'BR',
            cagliari: 'CA',
            caltanissetta: 'CL',
            campobasso: 'CB',
            caserta: 'CE',
            catania: 'CT',
            catanzaro: 'CZ',
            chieti: 'CH',
            como: 'CO',
            cosenza: 'CS',
            cremona: 'CR',
            crotone: 'KR',
            cuneo: 'CN',
            enna: 'EN',
            ferrara: 'FE',
            firenze: 'FI',
            foggia: 'FG',
            'forli-cesena': 'FO',
            frosinone: 'FR',
            genova: 'GE',
            gorizia: 'GO',
            grosseto: 'GR',
            imperia: 'IM',
            isernia: 'IS',
            'la spezia': 'SP',
            'l’aquila': 'AQ',
            latina: 'LT',
            lecce: 'LE',
            lecco: 'LC',
            livorno: 'LI',
            lodi: 'LO',
            lucca: 'LU',
            macerata: 'MC',
            mantova: 'MN',
            'massa-carrara': 'MS',
            matera: 'MT',
            messina: 'ME',
            milano: 'MI',
            modena: 'MO',
            'monza e brianza': 'MB',
            napoli: 'NA',
            novara: 'NO',
            nuoro: 'NU',
            oristano: 'OR',
            padova: 'PD',
            palermo: 'PA',
            parma: 'PR',
            pavia: 'PV',
            perugia: 'PG',
            pesaro: 'PS',
            pescara: 'PE',
            piacenza: 'PC',
            pisa: 'PI',
            pistoia: 'PT',
            pordenone: 'PN',
            potenza: 'PZ',
            prato: 'PO',
            ragusa: 'RG',
            ravenna: 'RA',
            'reggio calabria': 'RC',
            'reggio emilia': 'RE',
            rieti: 'RI',
            rimini: 'RN',
            roma: 'RM',
            rovigo: 'RO',
            salerno: 'SA',
            sassari: 'SS',
            savona: 'SV',
            siena: 'SI',
            siracusa: 'SR',
            sondrio: 'SO',
            taranto: 'TA',
            teramo: 'TE',
            terni: 'TR',
            torino: 'TO',
            trapani: 'TP',
            trento: 'TN',
            treviso: 'TV',
            trieste: 'TS',
            udine: 'UD',
            varese: 'VA',
            venezia: 'VE',
            'verbania-cusio-ossola': 'VB',
            vercelli: 'VC',
            verona: 'VR',
            'vibo valentia': 'VV',
            vicenza: 'VI',
            drenthe: 'DR',
            flevoland: 'FL',
            friesland: 'FR',
            gelderland: 'GE',
            groningen: 'GR',
            limburg: 'LI',
            'noord-brabant': 'NB',
            'noord-holland': 'NH',
            overijssel: 'OV',
            utrecht: 'UT',
            zeeland: 'ZE',
            'zuid-holland': 'ZH',
            'armed forces americas': 'AA',
            'armed forces': 'AE',
            'armed forces pacific': 'AP',
            'american samoa': 'AS',
            guam: 'GU',
            'northern mariana islands': 'MP',
            'virgin islands': 'VI',
            viterbo: 'VT'
          };
          if (state_codes[address_data.state.toLowerCase()] != undefined) {
            address_data.state = state_codes[address_data.state.toLowerCase()];
          }
          self.$el.find('.paypalForm').objectToForm(address_data);
        } else {
          //PayPal address wont be used, so just parse and save this address:
          var address = '';
          if (address_data.address1) {
            address += address_data.address1 + ', '; //Just using commas, cant get new lines to work
          }
          if (address_data.address2) {
            address += address_data.address2 + ', ';
          }
          address += address_data.city + ' ' + address_data.state + ' ' + address_data.zip + ' ' + address_data.country;

          //Handle labels (same logic as above loop)
          var name = $(this).data('label');
          if ((name || '').length == 0) {
            name = '(Address ' + no_label_index + ')';
            no_label_index++;
          }

          data.push({
            type: 'address',
            label: name,
            value: address
          });
        }
        //continue to the next loop
        return true;
      }

      var current_data = {};
      var name = $(this).attr('name');

      if ((name || '').length == 0 && !$(this).hasClass('radio') && !$(this).hasClass('radioImage')) {
        name = '(No label ' + no_label_index + ')';
        no_label_index++;
      } else if ($(this).hasClass('radio') || $(this).hasClass('radioImage')) {
        name = $(this).find('label').first().html();
      }

      var exportField = ($(this).data('export-field') || '').trim();
      current_data.exportField = exportField;

      var val = $(this).val();
      //Handle individual checkbox
      var type = $(this).attr('type');
      if (type == 'checkbox') {
        if ($(this).prop('checked')) {
          val = true;
        } else {
          val = false;
        }
      }
      //Handle multi checkbox -- ALSO handles GDPR permission boxes
      if ($(this).hasClass('multipleCheckbox')) {
        //debug()("Found multiple box");
        var valArr = [];
        $(this).find('input[type="checkbox"]:checked').each(function () {
          valArr.push($(this).val());
        });
        val = valArr.join(', ');
      }

      //Handle radio and radioImage
      if ($(this).hasClass('radio') || $(this).hasClass('radioImage')) {
        val = $(this).find('[type="radio"]:checked').val();
      }

      if (type == 'email' && $(this).data('send-confirmation-email')) {
        confirmationEmail = val;
      }
      if (type == 'email' && $(this).data('subscribe')) {
        debug()('Adding subscribe email');
        subscribeEmail.push(val);
      }
      current_data['type'] = $(this).data('form-type');

      if (current_data['type'] == 'file') {
        current_data['aws_key'] = $(this).data('aws-key');
        current_data['upload_id'] = $(this).data('upload-id');
      } else if (current_data['type'] == 'datetime' || current_data['type'] == 'date' || current_data['type'] == 'time') {
        current_data['timezone'] = new Date().getTimezoneOffset();
        current_data['date_format'] = $(this).attr('data-format');
        current_data['is_twenty_four'] = $(this).attr('data-is-twenty-four');
      } else if (current_data['type'] == 'paypalQuantity') {
        name = self.model.get('quantityLabel'); //make sure it has the right name -- stuff gets funky here
        val = self.model.get('locals').quantity; //give it the quantity that gets paid for (in most cases this will be the same as the normal value, but can occasionally be messed up)
      }

      current_data['label'] = name;
      //Push current data and "undo" the html characters
      current_data['value'] = val;

      //Handle hack for IE where it can't handle required radio fields that start with an integer (might be due to shims)
      if (type == 'radio' && $(this).prop('required')) {
        debug()('Required radio label is ' + current_data['label']);
        current_data['label'] = current_data['label'].replace('*', ''); //Remove asterisk added by hack
      }
      debug()('Current data is ', current_data);

      if (type == 'signature') {
        var base64 = $(this).next('.signatureName').next('.signatureImage').prop('src');
        if (base64) {
          current_data.value = base64;
        }
      }

      data.push(current_data);
    });

    //store which page this is on
    var page = self.model.get('locals').page || 0;
    data = data.map(function (a) {
      a.page = page;
      return a;
    });

    //For debugging ONLY
    debug()('page data is ', data);

    return {
      data: data,
      confirmationEmail: confirmationEmail,
      subscribeEmail: subscribeEmail.join(','),
      responseToken: self.model.get('locals').responseToken
    };
  },
  ieNumberHotfix: function ieNumberHotfix() {
    $('[type="number"]').keydown(function (e) {
      if (e.keyCode == 38) {
        $(e.target).val(parseInt($(e.target).val()) + 1);
        return false;
      } else if (e.keyCode == 40) {
        $(e.target).val(parseInt($(e.target).val()) - 1);
        return false;
      }
    });
  },
  conditionsMetFor: function conditionsMetFor(element) {
    if (!element.conditionalElement) {
      return true;
    }

    var conditionalEl = this.model.get('locals').data.filter(function (el) {
      // support for both new and old standards - idx and label check
      return el.idx === element.conditionalElement || el.label === element.conditionalElement;
    })[0];
    if (conditionalEl) {
      return this.conditionsMetFor(conditionalEl) && (Object(_modules_powr_helpers__WEBPACK_IMPORTED_MODULE_1__["removeHTML"])(conditionalEl.selectedOption) === Object(_modules_powr_helpers__WEBPACK_IMPORTED_MODULE_1__["removeHTML"])(element.conditionalValue) || (conditionalEl.checked || '').toString() === element.conditionalValue);
    } else {
      return false;
    }
  },
  arraysEqual: function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    };
    return true;
  },
  calculatePrice: function calculatePrice() {
    var self = this;
    if (window.getCheckoutLocals) {
      var locals = window.getCheckoutLocals() || self.model.get('locals');
    } else {
      var locals = self.model.get('locals');
    }

    if ((locals.window_checkout || '').toString() === 'true' && (locals.checkoutData || {}).form_response) {
      normalizeFormResponse(locals.checkoutData); // converts form_response to array
      locals.data = locals.checkoutData.form_response;
    }

    if (!locals.data) {
      var checkoutData = self.model.attributes.locals.checkoutData || {};
      if (checkoutData && checkoutData.form_response) {
        normalizeFormResponse(checkoutData); // converts form_response to array
        self.model.attributes.locals.data = checkoutData.form_response;
      } else {
        return twoDecimals(self.model.get('paypalItemCost') || self.model.get('paypalSubscriptionPrice'));
      }
    }

    if (self.model.get('paypalPurchaseType') == 'Recurring') {
      var currentPrice = getFloat(twoDecimals(self.model.get('paypalItemCost') || self.model.get('paypalSubscriptionPrice')));
    } else {
      var currentPrice = getFloat(twoDecimals(self.model.get('paypalItemCost')));
      if (isNaN(currentPrice)) {
        currentPrice = 0;
      }
    }
    //debug()('Base price', currentPrice);

    var priceChangeElements = [];
    locals.data.forEach(function (localElement) {

      if ($.inArray(localElement.type, ['select', 'multipleCheckbox', 'radio', 'radioimage']) > -1) {
        priceChangeElements.push(localElement);
      }
    });

    priceChangeElements.forEach(function (localElement, idx) {
      if (!self.conditionsMetFor(localElement) || !localElement.selectedOption && !localElement.selectedOptions && !localElement.value) {
        return;
      }

      var modelElement = self.model.attributes.data.filter(function (d) {
        return d.idx === localElement.idx;
      })[0];

      var selectedOptionIdx = modelElement.options.indexOf(localElement.selectedOption || localElement.value);
      if (modelElement.prices) {
        if (modelElement.type === 'multipleCheckbox') {
          if (localElement.selectedOptions) {
            var selectedOptions = [];
            localElement.selectedOptions.forEach(function (option) {
              selectedOptions = selectedOptions.concat(option.split(", "));
            });
          } else {
            var selectedOptions = localElement.value.split(", ");
          }

          modelElement.options.forEach(function (option, idx) {
            var optionArray = option.split(', ');
            var intersection = selectedOptions.filter(function (value) {
              return -1 !== option.indexOf(value);
            });
            if (intersection.length && self.arraysEqual(intersection, optionArray)) {
              var priceChange = getFloat(modelElement.prices[idx]);
              currentPrice = (inCents(twoDecimals(currentPrice)) + inCents(twoDecimals(priceChange))) / 100;
            }
          });
        } else if (selectedOptionIdx > -1) {
          var priceChange = getFloat(modelElement.prices[selectedOptionIdx]);
        } else {
          var priceChange = 0;
        }
        if (!isNaN(priceChange)) {
          currentPrice = (inCents(twoDecimals(currentPrice)) + inCents(twoDecimals(priceChange))) / 100;
        }
      }
    });

    if (currentPrice > 0) {
      currentPrice = currentPrice.toFixed(2); //Take care of any rounding errors
    } else if (currentPrice < 0) {
      currentPrice = 0;
    }
    var quantity = 1; // now handled in calculateCheckoutData
    var fullPrice = quantity * currentPrice;

    if (self.model.get('paypalPurchaseType') == "Donate" && this.model.attributes.locals.donation) {
      currentPrice = getFloat(this.model.attributes.locals.donation);
      fullPrice = currentPrice;
    }

    //debug()("Current price "+currentPrice+"; full price"+fullPrice);
    self.model.setLocals({
      currentPrice: currentPrice,
      fullPrice: fullPrice
    });

    if (self.model.get('paymentRequired') && locals.lastStep && self.model.get('showPriceSummary')) {
      self.$el.find('#submitButton').text(self.model.get('buttonText') + ' ' + self.priceToString(fullPrice));
    }
    if (quantity > 1) {
      //Set quantity in title (not ideal). This creates somethng line "2 x My Product" in paypal
      self.$el.find('[name="item_name"]').val(quantity + ' x ' + self.model.get('paypalItemName'));
    } else {
      self.$el.find('[name="item_name"]').val(self.model.get('paypalItemName'));
    }
    return self.priceToString(fullPrice);
  },
  priceToString: function priceToString(price) {
    //debug()("Price to string called with price: "+price+"; model is ",this.model.attributes);
    var self = this;
    var currencySymbol = {
      USD: '$',
      EUR: '€',
      GBP: '£',
      JPY: '¥'
    }[self.model.get('paypalCurrencyCode')] || '';

    if (price < 0) {
      currencySymbol = '-' + currencySymbol;
      price *= -1;
    }

    return currencySymbol + price.toFixed(2) + (currencySymbol.length > 0 ? '' : ' ' + self.model.get('paypalCurrencyCode'));
  },
  //This is called from form_elements_view_template
  optionPriceToString: function optionPriceToString(price) {
    return (price > 0 ? '+' : '') + this.priceToString(price);
  },
  //TODO: Update this to use different model attributes
  preventMultipleSubmission: function preventMultipleSubmission() {
    return this.model.get('submissionFrequency') === 'perUser' && getCookie('powr_form_' + this.model.meta.id) == 'blocked' && !window.APP_SETTINGS;
  },
  initializeFileUploaders: function initializeFileUploaders() {
    var self = this;

    $('.uploadSuccessful').hide();
    $('.uploadFail').hide();

    var uploadEnabled = false;
    //If old ie, then don't initialize anything, just handle the error. Also, supporting ie is like trying to get my grandfather drunk -- no matter how much we try, it can't be done successfully
    if (!/MSIE\s+(7|8|9)/.test(navigator.userAgent)) {
      //check for android kitkat or greater. Sugar makes the js hyper, leading to it drawing on the walls with crayons, causing the upload to fail
      var agent = navigator.userAgent.toLowerCase().match(/Android\s+([\d\.]+)/);
      if (!_.isEmpty(agent)) {
        var agentId = navigator.userAgent.toLowerCase().match(/Android\s+([\d\.]+)/)[1];
        var androidversion = parseFloat(agentId.slice(agentId.indexOf('Android') + 8));
        if (androidversion < 4.4) {
          //4.4 is kitkat. Or so they say.
          uploadEnabled = true;
        }
      }
    }

    if (uploadEnabled) {
      this.$el.on('click touchstart keyup', '.uploadBtn', function (event) {
        if (event.keyCode && event.keyCode != 13) {
          //Only key valid is enter
          return;
        }
        var parent = $(this).parents('.fileUploadParent');
        parent.find('.uploadFail').show();
        parent.find('.uploadIcon').hide();
        parent.find('.fileInputName').html('<i class="fa fa-warning"></i> Please use a more recent browser to upload file');
      });
      return;
    }

    //Initialize the fileuploader once a response has been received from the server with the params for direct file upload
    var doInit = function doInit() {
      self.$el.find('.fileUploadInput').each(function (i, elem) {
        var fileInput = $(elem);
        var form = fileInput.parents('.fileUploadParent');
        var submitButton = form.find('input[type="submit"]');
        var progressBar = form.find('.progress-bar');
        var progressContainer = form.find('.progressContainer');
        var urlInput = $(form).find('.fileURL');

        form.find('.uploadBtn').on('click touchstart keyup', function (event) {
          if (event.keyCode && event.keyCode != 13) {
            //Only key valid is enter
            return;
          }
          form.find('.fileUploadInput').trigger('click');
        });

        $(fileInput).on('change', function (e) {
          //stor the file size, in MB
          var files = e.currentTarget.files; // puts all files into an array
          //This wont work in IE, there is no files.
          if (files && files[0] && files[0].size) {
            var filesize = (files[0].size / 1024 / 1024).toFixed(4); // MB
            $(this).data('filesize', filesize);
          }
        });

        var copiedFormData = JSON.parse(JSON.stringify(self.form_data));
        copiedFormData.key = copiedFormData.key.replace('/${filename}', '/' + i + '-${filename}');

        fileInput.fileupload({
          fileInput: fileInput,
          url: '//' + self.direct_post_url,
          //url: '//powr-dev.s3.amazonaws.com',
          type: 'POST',
          autoUpload: false,
          formData: copiedFormData,
          paramName: 'file', // S3 does not like nested name fields i.e. name="user[avatar_url]"
          dataType: 'XML', // S3 returns XML if success_action_status is set to 201
          replaceFileInput: false,
          progressall: function progressall(e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            //debug()(progress +" : "+progressBar +" : "+progressContainer);
            progressBar.css('width', progress + '%');
            progressBar.attr('aria-valuenow', progress);
          },
          add: function add(e, data) {
            var fileSizes;
            if (HOST == 'wix' && Date.parse(META.created_at) > Date.parse('Mon, 3 July 2017 14:30:00 -0700')) {
              fileSizes = {
                //in MB
                free: 0,
                premium: 5,
                pro: 25,
                enterprise: 100
              };
            } else {
              fileSizes = {
                //in MB
                free: 0,
                premium: 5,
                pro: 10,
                enterprise: 100
              };
            }
            var fileSizePlan = META.premium_status;
            if ($(this).attr('filesize')) {
              fileSizePlan = $(this).attr('filesize');
            }
            //check if the file is too large
            var maxFileSize = fileSizes[fileSizePlan];
            if (fileInput.data('filesize') > maxFileSize) {
              var errMsg = 'File larger than the permitted size!';
              progressContainer.show();
              submitButton.prop('disabled', false);
              progressBar.css('width', 100 + '%');
              progressBar.css('background', 'red').text(errMsg);
              fileInput.wrap('<form>').closest('form').get(0).reset();
              fileInput.unwrap();
            } else {
              data.submit();
            }
          },
          start: function start(e) {
            $(elem).trigger('upload_start');
            submitButton.prop('disabled', true);
            progressContainer.show();
            progressBar.css('width', 0 + '%');
            progressBar.css('background', '').text('');
            form.find('.uploadSuccessful').hide();
            form.find('.uploadFail').hide();
            urlInput.data('currently-uploading', true);
          },
          done: function done(e, data) {
            submitButton.prop('disabled', false);
            progressContainer.hide();
            progressBar.css('width', '0%');
            progressBar.attr('aria-valuenow', '0');
            $('.uploadIcon').hide();
            //progressBar.text("Upload complete");
            // extract key and generate URL from response
            debug()('AWS Response: ', data);
            var aws_key = $(data.jqXHR.responseXML).find('Key').text();
            var aws_url = $(data.jqXHR.responseXML).find('Location').text();

            //debug()(aws_url);
            urlInput.val(aws_url);
            urlInput.data('aws-key', aws_key);
            urlInput.data('currently-uploading', false);
            //debug()("DONE. Key is "+aws_key+"; url is "+aws_url);

            //ping server to register the upload
            var options = {
              url: '/app_form_response/upload',
              data: {
                filesize: data.total,
                key: aws_key,
                id: self.model.meta.id
              },
              type: 'POST'
            };
            var fullPath = form.find('.fileUploadInput').val();
            if (fullPath) {
              var startIndex = fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/');
              var filename = fullPath.substring(startIndex);
              if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
              }
              form.find('.fileInputName').html(filename);
            }
            ajaxController(options, function (r) {
              if (r.success) {
                urlInput.data('upload-id', r.upload_id);
                $(elem).trigger('upload_success');
                form.find('.uploadSuccessful').show();
              } else {
                $(elem).trigger('upload_fail');
                form.find('.uploadFail').show();
              }
            });
          },
          fail: function fail(e, data) {
            submitButton.prop('disabled', false);
            if (data.messages.uploadedBytes === 'Uploaded bytes exceed file size') {
              //Generic file size rsp from amazon
              progressBar.css('background', 'red').html('File exceeds file size limit!');
            } else {
              progressBar.css('background', 'red').text('Failed');
            }
            fileInput.wrap('<form>').closest('form').get(0).reset();
            fileInput.unwrap();
          }
        });
      });
    };

    //Get data from server to post to AWS
    if (!self.direct_post_url && self.$el.find('.fileUploadInput').length > 0) {
      //load s3 info
      var options = {
        url: '/form_uploader.json',
        type: 'get',
        data: {
          app_id: self.model.meta.id
        }
      };
      ajaxController(options, function (r) {
        if (r.success) {
          self.direct_post_url = r.direct_post_url; //Set parameters for AWS direct upload
          self.form_data = r.form_data;
          doInit();
        }
      });
    } else {
      doInit();
    }
  },
  initializeUrlInputs: function initializeUrlInputs() {
    this.$el.find('input[type="url"]').each(function () {
      $(this).blur(function () {
        var input = $(this);
        var val = input.val();
        if (val && !val.match(/^http([s]?):\/\/.*/)) {
          input.val('http://' + val);
        }
      });
    });
  },
  //Add asterisk to beginning if begins with integer
  numberHack: function numberHack(val) {
    if (/^[0-9]/.test(val)) {
      return '*' + val;
    } else {
      return val;
    }
  }
};

/***/ }),

/***/ 1138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _CanvasRenderer = __webpack_require__(1139);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _Logger = __webpack_require__(1143);

var _Logger2 = _interopRequireDefault(_Logger);

var _Window = __webpack_require__(1144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html2canvas = function html2canvas(element, conf) {
    var config = conf || {};
    var logger = new _Logger2.default(typeof config.logging === 'boolean' ? config.logging : true);
    logger.log('html2canvas ' + "$npm_package_version");

    if (false) {}

    var ownerDocument = element.ownerDocument;
    if (!ownerDocument) {
        return Promise.reject('Provided element is not within a Document');
    }
    var defaultView = ownerDocument.defaultView;

    var defaultOptions = {
        async: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        logging: true,
        proxy: null,
        removeContainer: true,
        foreignObjectRendering: false,
        scale: defaultView.devicePixelRatio || 1,
        target: new _CanvasRenderer2.default(config.canvas),
        useCORS: false,
        windowWidth: defaultView.innerWidth,
        windowHeight: defaultView.innerHeight,
        scrollX: defaultView.pageXOffset,
        scrollY: defaultView.pageYOffset
    };

    var result = (0, _Window.renderElement)(element, _extends({}, defaultOptions, config), logger);

    if (false) {}
    return result;
};

html2canvas.CanvasRenderer = _CanvasRenderer2.default;

module.exports = html2canvas;

/***/ }),

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(1140);

var _textDecoration = __webpack_require__(1141);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addColorStops = function addColorStops(gradient, canvasGradient) {
    var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {
        return colorStop.stop;
    }));
    var f = 1 / Math.max(1, maxStop);
    gradient.colorStops.forEach(function (colorStop) {
        canvasGradient.addColorStop(f * colorStop.stop, colorStop.color.toString());
    });
};

var CanvasRenderer = function () {
    function CanvasRenderer(canvas) {
        _classCallCheck(this, CanvasRenderer);

        this.canvas = canvas ? canvas : document.createElement('canvas');
    }

    _createClass(CanvasRenderer, [{
        key: 'render',
        value: function render(options) {
            this.ctx = this.canvas.getContext('2d');
            this.options = options;
            this.canvas.width = Math.floor(options.width * options.scale);
            this.canvas.height = Math.floor(options.height * options.scale);
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            this.ctx.scale(this.options.scale, this.options.scale);
            this.ctx.translate(-options.x, -options.y);
            this.ctx.textBaseline = 'bottom';
            options.logger.log('Canvas renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + this.options.scale);
        }
    }, {
        key: 'clip',
        value: function clip(clipPaths, callback) {
            var _this = this;

            if (clipPaths.length) {
                this.ctx.save();
                clipPaths.forEach(function (path) {
                    _this.path(path);
                    _this.ctx.clip();
                });
            }

            callback();

            if (clipPaths.length) {
                this.ctx.restore();
            }
        }
    }, {
        key: 'drawImage',
        value: function drawImage(image, source, destination) {
            this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);
        }
    }, {
        key: 'drawShape',
        value: function drawShape(path, color) {
            this.path(path);
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'fill',
        value: function fill(color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'getTarget',
        value: function getTarget() {
            this.canvas.getContext('2d').setTransform(1, 0, 0, 1, 0, 0);
            return Promise.resolve(this.canvas);
        }
    }, {
        key: 'path',
        value: function path(_path) {
            var _this2 = this;

            this.ctx.beginPath();
            if (Array.isArray(_path)) {
                _path.forEach(function (point, index) {
                    var start = point.type === _Path.PATH.VECTOR ? point : point.start;
                    if (index === 0) {
                        _this2.ctx.moveTo(start.x, start.y);
                    } else {
                        _this2.ctx.lineTo(start.x, start.y);
                    }

                    if (point.type === _Path.PATH.BEZIER_CURVE) {
                        _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                    }
                });
            } else {
                this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);
            }

            this.ctx.closePath();
        }
    }, {
        key: 'rectangle',
        value: function rectangle(x, y, width, height, color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fillRect(x, y, width, height);
        }
    }, {
        key: 'renderLinearGradient',
        value: function renderLinearGradient(bounds, gradient) {
            var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);

            addColorStops(gradient, linearGradient);
            this.ctx.fillStyle = linearGradient;
            this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
        }
    }, {
        key: 'renderRadialGradient',
        value: function renderRadialGradient(bounds, gradient) {
            var _this3 = this;

            var x = bounds.left + gradient.center.x;
            var y = bounds.top + gradient.center.y;

            var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);
            if (!radialGradient) {
                return;
            }

            addColorStops(gradient, radialGradient);
            this.ctx.fillStyle = radialGradient;

            if (gradient.radius.x !== gradient.radius.y) {
                // transforms for elliptical radial gradient
                var midX = bounds.left + 0.5 * bounds.width;
                var midY = bounds.top + 0.5 * bounds.height;
                var f = gradient.radius.y / gradient.radius.x;
                var invF = 1 / f;

                this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {
                    return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);
                });
            } else {
                this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
        }
    }, {
        key: 'renderRepeat',
        value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), 'repeat');
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        }
    }, {
        key: 'renderTextNode',
        value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {
            var _this4 = this;

            this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(' ');

            textBounds.forEach(function (text) {
                _this4.ctx.fillStyle = color.toString();
                if (textShadows && text.text.trim().length) {
                    textShadows.slice(0).reverse().forEach(function (textShadow) {
                        _this4.ctx.shadowColor = textShadow.color.toString();
                        _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;
                        _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;
                        _this4.ctx.shadowBlur = textShadow.blur;

                        _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                    });
                } else {
                    _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                }

                if (textDecoration !== null) {
                    var textDecorationColor = textDecoration.textDecorationColor || color;
                    textDecoration.textDecorationLine.forEach(function (textDecorationLine) {
                        switch (textDecorationLine) {
                            case _textDecoration.TEXT_DECORATION_LINE.UNDERLINE:
                                // Draws a line at the baseline of the font
                                // TODO As some browsers display the line as more than 1px if the font-size is big,
                                // need to take that into account both in position and size
                                var _options$fontMetrics$ = _this4.options.fontMetrics.getMetrics(font),
                                    baseline = _options$fontMetrics$.baseline;

                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.OVERLINE:
                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.LINE_THROUGH:
                                // TODO try and find exact position for line-through
                                var _options$fontMetrics$2 = _this4.options.fontMetrics.getMetrics(font),
                                    middle = _options$fontMetrics$2.middle;

                                _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);
                                break;
                        }
                    });
                }
            });
        }
    }, {
        key: 'resizeImage',
        value: function resizeImage(image, size) {
            if (image.width === size.width && image.height === size.height) {
                return image;
            }

            var canvas = this.canvas.ownerDocument.createElement('canvas');
            canvas.width = size.width;
            canvas.height = size.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
            return canvas;
        }
    }, {
        key: 'setOpacity',
        value: function setOpacity(opacity) {
            this.ctx.globalAlpha = opacity;
        }
    }, {
        key: 'transform',
        value: function transform(offsetX, offsetY, matrix, callback) {
            this.ctx.save();
            this.ctx.translate(offsetX, offsetY);
            this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            this.ctx.translate(-offsetX, -offsetY);

            callback();

            this.ctx.restore();
        }
    }]);

    return CanvasRenderer;
}();

exports.default = CanvasRenderer;

/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PATH = exports.PATH = {
    VECTOR: 0,
    BEZIER_CURVE: 1,
    CIRCLE: 2
};

/***/ }),

/***/ 1141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextDecoration = exports.TEXT_DECORATION_LINE = exports.TEXT_DECORATION = exports.TEXT_DECORATION_STYLE = undefined;

var _Color = __webpack_require__(1142);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT_DECORATION_STYLE = exports.TEXT_DECORATION_STYLE = {
    SOLID: 0,
    DOUBLE: 1,
    DOTTED: 2,
    DASHED: 3,
    WAVY: 4
};

var TEXT_DECORATION = exports.TEXT_DECORATION = {
    NONE: null
};

var TEXT_DECORATION_LINE = exports.TEXT_DECORATION_LINE = {
    UNDERLINE: 1,
    OVERLINE: 2,
    LINE_THROUGH: 3,
    BLINK: 4
};

var parseLine = function parseLine(line) {
    switch (line) {
        case 'underline':
            return TEXT_DECORATION_LINE.UNDERLINE;
        case 'overline':
            return TEXT_DECORATION_LINE.OVERLINE;
        case 'line-through':
            return TEXT_DECORATION_LINE.LINE_THROUGH;
    }
    return TEXT_DECORATION_LINE.BLINK;
};

var parseTextDecorationLine = function parseTextDecorationLine(line) {
    if (line === 'none') {
        return null;
    }

    return line.split(' ').map(parseLine);
};

var parseTextDecorationStyle = function parseTextDecorationStyle(style) {
    switch (style) {
        case 'double':
            return TEXT_DECORATION_STYLE.DOUBLE;
        case 'dotted':
            return TEXT_DECORATION_STYLE.DOTTED;
        case 'dashed':
            return TEXT_DECORATION_STYLE.DASHED;
        case 'wavy':
            return TEXT_DECORATION_STYLE.WAVY;
    }
    return TEXT_DECORATION_STYLE.SOLID;
};

var parseTextDecoration = exports.parseTextDecoration = function parseTextDecoration(style) {
    var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);
    if (textDecorationLine === null) {
        return TEXT_DECORATION.NONE;
    }

    var textDecorationColor = style.textDecorationColor ? new _Color2.default(style.textDecorationColor) : null;
    var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);

    return {
        textDecorationLine: textDecorationLine,
        textDecorationColor: textDecorationColor,
        textDecorationStyle: textDecorationStyle
    };
};

/***/ }),

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://dev.w3.org/csswg/css-color/

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEX3 = /^#([a-f0-9]{3})$/i;
var hex3 = function hex3(value) {
    var match = value.match(HEX3);
    if (match) {
        return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];
    }
    return false;
};

var HEX6 = /^#([a-f0-9]{6})$/i;
var hex6 = function hex6(value) {
    var match = value.match(HEX6);
    if (match) {
        return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];
    }
    return false;
};

var RGB = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgb = function rgb(value) {
    var match = value.match(RGB);
    if (match) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), null];
    }
    return false;
};

var RGBA = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
var rgba = function rgba(value) {
    var match = value.match(RGBA);
    if (match && match.length > 4) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];
    }
    return false;
};

var fromArray = function fromArray(array) {
    return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];
};

var namedColor = function namedColor(name) {
    var color = NAMED_COLORS[name.toLowerCase()];
    return color ? color : false;
};

var Color = function () {
    function Color(value) {
        _classCallCheck(this, Color);

        var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],
            _ref2 = _slicedToArray(_ref, 4),
            r = _ref2[0],
            g = _ref2[1],
            b = _ref2[2],
            a = _ref2[3];

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    _createClass(Color, [{
        key: 'isTransparent',
        value: function isTransparent() {
            return this.a === 0;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.a !== null && this.a !== 1 ? 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')' : 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
        }
    }]);

    return Color;
}();

exports.default = Color;


var NAMED_COLORS = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, null],
    antiquewhite: [250, 235, 215, null],
    aqua: [0, 255, 255, null],
    aquamarine: [127, 255, 212, null],
    azure: [240, 255, 255, null],
    beige: [245, 245, 220, null],
    bisque: [255, 228, 196, null],
    black: [0, 0, 0, null],
    blanchedalmond: [255, 235, 205, null],
    blue: [0, 0, 255, null],
    blueviolet: [138, 43, 226, null],
    brown: [165, 42, 42, null],
    burlywood: [222, 184, 135, null],
    cadetblue: [95, 158, 160, null],
    chartreuse: [127, 255, 0, null],
    chocolate: [210, 105, 30, null],
    coral: [255, 127, 80, null],
    cornflowerblue: [100, 149, 237, null],
    cornsilk: [255, 248, 220, null],
    crimson: [220, 20, 60, null],
    cyan: [0, 255, 255, null],
    darkblue: [0, 0, 139, null],
    darkcyan: [0, 139, 139, null],
    darkgoldenrod: [184, 134, 11, null],
    darkgray: [169, 169, 169, null],
    darkgreen: [0, 100, 0, null],
    darkgrey: [169, 169, 169, null],
    darkkhaki: [189, 183, 107, null],
    darkmagenta: [139, 0, 139, null],
    darkolivegreen: [85, 107, 47, null],
    darkorange: [255, 140, 0, null],
    darkorchid: [153, 50, 204, null],
    darkred: [139, 0, 0, null],
    darksalmon: [233, 150, 122, null],
    darkseagreen: [143, 188, 143, null],
    darkslateblue: [72, 61, 139, null],
    darkslategray: [47, 79, 79, null],
    darkslategrey: [47, 79, 79, null],
    darkturquoise: [0, 206, 209, null],
    darkviolet: [148, 0, 211, null],
    deeppink: [255, 20, 147, null],
    deepskyblue: [0, 191, 255, null],
    dimgray: [105, 105, 105, null],
    dimgrey: [105, 105, 105, null],
    dodgerblue: [30, 144, 255, null],
    firebrick: [178, 34, 34, null],
    floralwhite: [255, 250, 240, null],
    forestgreen: [34, 139, 34, null],
    fuchsia: [255, 0, 255, null],
    gainsboro: [220, 220, 220, null],
    ghostwhite: [248, 248, 255, null],
    gold: [255, 215, 0, null],
    goldenrod: [218, 165, 32, null],
    gray: [128, 128, 128, null],
    green: [0, 128, 0, null],
    greenyellow: [173, 255, 47, null],
    grey: [128, 128, 128, null],
    honeydew: [240, 255, 240, null],
    hotpink: [255, 105, 180, null],
    indianred: [205, 92, 92, null],
    indigo: [75, 0, 130, null],
    ivory: [255, 255, 240, null],
    khaki: [240, 230, 140, null],
    lavender: [230, 230, 250, null],
    lavenderblush: [255, 240, 245, null],
    lawngreen: [124, 252, 0, null],
    lemonchiffon: [255, 250, 205, null],
    lightblue: [173, 216, 230, null],
    lightcoral: [240, 128, 128, null],
    lightcyan: [224, 255, 255, null],
    lightgoldenrodyellow: [250, 250, 210, null],
    lightgray: [211, 211, 211, null],
    lightgreen: [144, 238, 144, null],
    lightgrey: [211, 211, 211, null],
    lightpink: [255, 182, 193, null],
    lightsalmon: [255, 160, 122, null],
    lightseagreen: [32, 178, 170, null],
    lightskyblue: [135, 206, 250, null],
    lightslategray: [119, 136, 153, null],
    lightslategrey: [119, 136, 153, null],
    lightsteelblue: [176, 196, 222, null],
    lightyellow: [255, 255, 224, null],
    lime: [0, 255, 0, null],
    limegreen: [50, 205, 50, null],
    linen: [250, 240, 230, null],
    magenta: [255, 0, 255, null],
    maroon: [128, 0, 0, null],
    mediumaquamarine: [102, 205, 170, null],
    mediumblue: [0, 0, 205, null],
    mediumorchid: [186, 85, 211, null],
    mediumpurple: [147, 112, 219, null],
    mediumseagreen: [60, 179, 113, null],
    mediumslateblue: [123, 104, 238, null],
    mediumspringgreen: [0, 250, 154, null],
    mediumturquoise: [72, 209, 204, null],
    mediumvioletred: [199, 21, 133, null],
    midnightblue: [25, 25, 112, null],
    mintcream: [245, 255, 250, null],
    mistyrose: [255, 228, 225, null],
    moccasin: [255, 228, 181, null],
    navajowhite: [255, 222, 173, null],
    navy: [0, 0, 128, null],
    oldlace: [253, 245, 230, null],
    olive: [128, 128, 0, null],
    olivedrab: [107, 142, 35, null],
    orange: [255, 165, 0, null],
    orangered: [255, 69, 0, null],
    orchid: [218, 112, 214, null],
    palegoldenrod: [238, 232, 170, null],
    palegreen: [152, 251, 152, null],
    paleturquoise: [175, 238, 238, null],
    palevioletred: [219, 112, 147, null],
    papayawhip: [255, 239, 213, null],
    peachpuff: [255, 218, 185, null],
    peru: [205, 133, 63, null],
    pink: [255, 192, 203, null],
    plum: [221, 160, 221, null],
    powderblue: [176, 224, 230, null],
    purple: [128, 0, 128, null],
    rebeccapurple: [102, 51, 153, null],
    red: [255, 0, 0, null],
    rosybrown: [188, 143, 143, null],
    royalblue: [65, 105, 225, null],
    saddlebrown: [139, 69, 19, null],
    salmon: [250, 128, 114, null],
    sandybrown: [244, 164, 96, null],
    seagreen: [46, 139, 87, null],
    seashell: [255, 245, 238, null],
    sienna: [160, 82, 45, null],
    silver: [192, 192, 192, null],
    skyblue: [135, 206, 235, null],
    slateblue: [106, 90, 205, null],
    slategray: [112, 128, 144, null],
    slategrey: [112, 128, 144, null],
    snow: [255, 250, 250, null],
    springgreen: [0, 255, 127, null],
    steelblue: [70, 130, 180, null],
    tan: [210, 180, 140, null],
    teal: [0, 128, 128, null],
    thistle: [216, 191, 216, null],
    tomato: [255, 99, 71, null],
    turquoise: [64, 224, 208, null],
    violet: [238, 130, 238, null],
    wheat: [245, 222, 179, null],
    white: [255, 255, 255, null],
    whitesmoke: [245, 245, 245, null],
    yellow: [255, 255, 0, null],
    yellowgreen: [154, 205, 50, null]
};

var TRANSPARENT = exports.TRANSPARENT = new Color([0, 0, 0, 0]);

/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger(enabled, id, start) {
        _classCallCheck(this, Logger);

        this.enabled = typeof window !== 'undefined' && enabled;
        this.start = start ? start : Date.now();
        this.id = id;
    }

    _createClass(Logger, [{
        key: 'child',
        value: function child(id) {
            return new Logger(this.enabled, id, this.start);
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'log',
        value: function log() {
            if (this.enabled && window.console && window.console.log) {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'error',
        value: function error() {
            if (this.enabled && window.console && window.console.error) {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }
    }]);

    return Logger;
}();

exports.default = Logger;

/***/ }),

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderElement = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Logger = __webpack_require__(1143);

var _Logger2 = _interopRequireDefault(_Logger);

var _NodeParser = __webpack_require__(1145);

var _Renderer = __webpack_require__(1187);

var _Renderer2 = _interopRequireDefault(_Renderer);

var _ForeignObjectRenderer = __webpack_require__(1178);

var _ForeignObjectRenderer2 = _interopRequireDefault(_ForeignObjectRenderer);

var _Feature = __webpack_require__(1177);

var _Feature2 = _interopRequireDefault(_Feature);

var _Bounds = __webpack_require__(1153);

var _Clone = __webpack_require__(1191);

var _Font = __webpack_require__(1188);

var _Color = __webpack_require__(1142);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderElement = exports.renderElement = function renderElement(element, options, logger) {
    var ownerDocument = element.ownerDocument;

    var windowBounds = new _Bounds.Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);

    // http://www.w3.org/TR/css3-background/#special-backgrounds
    var documentBackgroundColor = ownerDocument.documentElement ? new _Color2.default(getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color.TRANSPARENT;
    var bodyBackgroundColor = ownerDocument.body ? new _Color2.default(getComputedStyle(ownerDocument.body).backgroundColor) : _Color.TRANSPARENT;

    var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color2.default(options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color2.default(options.backgroundColor) : null;

    return (options.foreignObjectRendering ? // $FlowFixMe
    _Feature2.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {
        return supportForeignObject ? function (cloner) {
            if (false) {}

            return cloner.inlineFonts(ownerDocument).then(function () {
                return cloner.resourceLoader.ready();
            }).then(function () {
                var renderer = new _ForeignObjectRenderer2.default(cloner.documentElement);

                var defaultView = ownerDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = element.tagName === 'HTML' || element.tagName === 'BODY';

                var _ref = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(element, scrollX, scrollY),
                    width = _ref.width,
                    height = _ref.height,
                    left = _ref.left,
                    top = _ref.top;

                return renderer.render({
                    backgroundColor: backgroundColor,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height),
                    windowWidth: options.windowWidth,
                    windowHeight: options.windowHeight,
                    scrollX: options.scrollX,
                    scrollY: options.scrollY
                });
            });
        }(new _Clone.DocumentCloner(element, options, logger, true, renderElement)) : (0, _Clone.cloneWindow)(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 3),
                container = _ref3[0],
                clonedElement = _ref3[1],
                resourceLoader = _ref3[2];

            if (false) {}

            var stack = (0, _NodeParser.NodeParser)(clonedElement, resourceLoader, logger);
            var clonedDocument = clonedElement.ownerDocument;

            if (backgroundColor === stack.container.style.background.backgroundColor) {
                stack.container.style.background.backgroundColor = _Color.TRANSPARENT;
            }

            return resourceLoader.ready().then(function (imageStore) {
                var fontMetrics = new _Font.FontMetrics(clonedDocument);
                if (false) {}

                var defaultView = clonedDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = clonedElement.tagName === 'HTML' || clonedElement.tagName === 'BODY';

                var _ref4 = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(clonedElement, scrollX, scrollY),
                    width = _ref4.width,
                    height = _ref4.height,
                    left = _ref4.left,
                    top = _ref4.top;

                var renderOptions = {
                    backgroundColor: backgroundColor,
                    fontMetrics: fontMetrics,
                    imageStore: imageStore,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height)
                };

                if (Array.isArray(options.target)) {
                    return Promise.all(options.target.map(function (target) {
                        var renderer = new _Renderer2.default(target, renderOptions);
                        return renderer.render(stack);
                    }));
                } else {
                    var renderer = new _Renderer2.default(options.target, renderOptions);
                    var canvas = renderer.render(stack);
                    if (options.removeContainer === true) {
                        if (container.parentNode) {
                            container.parentNode.removeChild(container);
                        } else if (false) {}
                    }

                    return canvas;
                }
            });
        });
    });
};

/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeParser = undefined;

var _StackingContext = __webpack_require__(1146);

var _StackingContext2 = _interopRequireDefault(_StackingContext);

var _NodeContainer = __webpack_require__(1147);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(1175);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _Input = __webpack_require__(1174);

var _ListItem = __webpack_require__(1186);

var _listStyle = __webpack_require__(1163);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeParser = exports.NodeParser = function NodeParser(node, resourceLoader, logger) {
    if (false) {}

    var index = 0;

    var container = new _NodeContainer2.default(node, null, resourceLoader, index++);
    var stack = new _StackingContext2.default(container, null, true);

    parseNodeTree(node, container, stack, resourceLoader, index);

    if (false) {}

    return stack;
};

var IGNORED_NODE_NAMES = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'];

var parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {
    if (false) {}

    for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {
        nextNode = childNode.nextSibling;
        var defaultView = childNode.ownerDocument.defaultView;
        if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {
            if (childNode.data.trim().length > 0) {
                parent.childNodes.push(_TextContainer2.default.fromTextNode(childNode, parent));
            }
        } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {
            if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {
                var container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                if (container.isVisible()) {
                    if (childNode.tagName === 'INPUT') {
                        // $FlowFixMe
                        (0, _Input.inlineInputElement)(childNode, container);
                    } else if (childNode.tagName === 'TEXTAREA') {
                        // $FlowFixMe
                        (0, _Input.inlineTextAreaElement)(childNode, container);
                    } else if (childNode.tagName === 'SELECT') {
                        // $FlowFixMe
                        (0, _Input.inlineSelectElement)(childNode, container);
                    } else if (container.style.listStyle && container.style.listStyle.listStyleType !== _listStyle.LIST_STYLE_TYPE.NONE) {
                        (0, _ListItem.inlineListItemElement)(childNode, container, resourceLoader);
                    }

                    var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== 'TEXTAREA';
                    var treatAsRealStackingContext = createsRealStackingContext(container, childNode);
                    if (treatAsRealStackingContext || createsStackingContext(container)) {
                        // for treatAsRealStackingContext:false, any positioned descendants and descendants
                        // which actually create a new stacking context should be considered part of the parent stacking context
                        var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                        var childStack = new _StackingContext2.default(container, parentStack, treatAsRealStackingContext);
                        parentStack.contexts.push(childStack);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, childStack, resourceLoader, index);
                        }
                    } else {
                        stack.children.push(container);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, stack, resourceLoader, index);
                        }
                    }
                }
            }
        } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {
            var _container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
            var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);
            if (_treatAsRealStackingContext || createsStackingContext(_container)) {
                // for treatAsRealStackingContext:false, any positioned descendants and descendants
                // which actually create a new stacking context should be considered part of the parent stacking context
                var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                var _childStack = new _StackingContext2.default(_container, _parentStack, _treatAsRealStackingContext);
                _parentStack.contexts.push(_childStack);
            } else {
                stack.children.push(_container);
            }
        }
    }
};

var createsRealStackingContext = function createsRealStackingContext(container, node) {
    return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);
};

var createsStackingContext = function createsStackingContext(container) {
    return container.isPositioned() || container.isFloating();
};

var isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {
    return node.nodeName === 'BODY' && container.parent instanceof _NodeContainer2.default && container.parent.style.background.backgroundColor.isTransparent();
};

/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(1147);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _position = __webpack_require__(1167);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StackingContext = function () {
    function StackingContext(container, parent, treatAsRealStackingContext) {
        _classCallCheck(this, StackingContext);

        this.container = container;
        this.parent = parent;
        this.contexts = [];
        this.children = [];
        this.treatAsRealStackingContext = treatAsRealStackingContext;
    }

    _createClass(StackingContext, [{
        key: 'getOpacity',
        value: function getOpacity() {
            return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;
        }
    }, {
        key: 'getRealParentStackingContext',
        value: function getRealParentStackingContext() {
            return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();
        }
    }]);

    return StackingContext;
}();

exports.default = StackingContext;

/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(1142);

var _Color2 = _interopRequireDefault(_Color);

var _Util = __webpack_require__(1148);

var _background = __webpack_require__(1149);

var _border = __webpack_require__(1156);

var _borderRadius = __webpack_require__(1157);

var _display = __webpack_require__(1158);

var _float = __webpack_require__(1159);

var _font = __webpack_require__(1160);

var _letterSpacing = __webpack_require__(1161);

var _lineBreak = __webpack_require__(1162);

var _listStyle = __webpack_require__(1163);

var _margin = __webpack_require__(1164);

var _overflow = __webpack_require__(1165);

var _overflowWrap = __webpack_require__(1166);

var _padding = __webpack_require__(1155);

var _position = __webpack_require__(1167);

var _textDecoration = __webpack_require__(1141);

var _textShadow = __webpack_require__(1168);

var _textTransform = __webpack_require__(1169);

var _transform = __webpack_require__(1170);

var _visibility = __webpack_require__(1171);

var _wordBreak = __webpack_require__(1172);

var _zIndex = __webpack_require__(1173);

var _Bounds = __webpack_require__(1153);

var _Input = __webpack_require__(1174);

var _ListItem = __webpack_require__(1186);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

var NodeContainer = function () {
    function NodeContainer(node, parent, resourceLoader, index) {
        var _this = this;

        _classCallCheck(this, NodeContainer);

        this.parent = parent;
        this.tagName = node.tagName;
        this.index = index;
        this.childNodes = [];
        this.listItems = [];
        if (typeof node.start === 'number') {
            this.listStart = node.start;
        }
        var defaultView = node.ownerDocument.defaultView;
        var scrollX = defaultView.pageXOffset;
        var scrollY = defaultView.pageYOffset;
        var style = defaultView.getComputedStyle(node, null);
        var display = (0, _display.parseDisplay)(style.display);

        var IS_INPUT = node.type === 'radio' || node.type === 'checkbox';

        var position = (0, _position.parsePosition)(style.position);

        this.style = {
            background: IS_INPUT ? _Input.INPUT_BACKGROUND : (0, _background.parseBackground)(style, resourceLoader),
            border: IS_INPUT ? _Input.INPUT_BORDERS : (0, _border.parseBorder)(style),
            borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? (0, _Input.getInputBorderRadius)(node) : (0, _borderRadius.parseBorderRadius)(style),
            color: IS_INPUT ? _Input.INPUT_COLOR : new _Color2.default(style.color),
            display: display,
            float: (0, _float.parseCSSFloat)(style.float),
            font: (0, _font.parseFont)(style),
            letterSpacing: (0, _letterSpacing.parseLetterSpacing)(style.letterSpacing),
            listStyle: display === _display.DISPLAY.LIST_ITEM ? (0, _listStyle.parseListStyle)(style) : null,
            lineBreak: (0, _lineBreak.parseLineBreak)(style.lineBreak),
            margin: (0, _margin.parseMargin)(style),
            opacity: parseFloat(style.opacity),
            overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? (0, _overflow.parseOverflow)(style.overflow) : _overflow.OVERFLOW.HIDDEN,
            overflowWrap: (0, _overflowWrap.parseOverflowWrap)(style.overflowWrap ? style.overflowWrap : style.wordWrap),
            padding: (0, _padding.parsePadding)(style),
            position: position,
            textDecoration: (0, _textDecoration.parseTextDecoration)(style),
            textShadow: (0, _textShadow.parseTextShadow)(style.textShadow),
            textTransform: (0, _textTransform.parseTextTransform)(style.textTransform),
            transform: (0, _transform.parseTransform)(style),
            visibility: (0, _visibility.parseVisibility)(style.visibility),
            wordBreak: (0, _wordBreak.parseWordBreak)(style.wordBreak),
            zIndex: (0, _zIndex.parseZIndex)(position !== _position.POSITION.STATIC ? style.zIndex : 'auto')
        };

        if (this.isTransformed()) {
            // getBoundingClientRect provides values post-transform, we want them without the transformation
            node.style.transform = 'matrix(1,0,0,1,0,0)';
        }

        if (display === _display.DISPLAY.LIST_ITEM) {
            var listOwner = (0, _ListItem.getListOwner)(this);
            if (listOwner) {
                var listIndex = listOwner.listItems.length;
                listOwner.listItems.push(this);
                this.listIndex = node.hasAttribute('value') && typeof node.value === 'number' ? node.value : listIndex === 0 ? typeof listOwner.listStart === 'number' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;
            }
        }

        // TODO move bound retrieval for all nodes to a later stage?
        if (node.tagName === 'IMG') {
            node.addEventListener('load', function () {
                _this.bounds = (0, _Bounds.parseBounds)(node, scrollX, scrollY);
                _this.curvedBounds = (0, _Bounds.parseBoundCurves)(_this.bounds, _this.style.border, _this.style.borderRadius);
            });
        }
        this.image = getImage(node, resourceLoader);
        this.bounds = IS_INPUT ? (0, _Input.reformatInputBounds)((0, _Bounds.parseBounds)(node, scrollX, scrollY)) : (0, _Bounds.parseBounds)(node, scrollX, scrollY);
        this.curvedBounds = (0, _Bounds.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius);

        if (false) {}
    }

    _createClass(NodeContainer, [{
        key: 'getClipPaths',
        value: function getClipPaths() {
            var parentClips = this.parent ? this.parent.getClipPaths() : [];
            var isClipped = this.style.overflow !== _overflow.OVERFLOW.VISIBLE;

            return isClipped ? parentClips.concat([(0, _Bounds.calculatePaddingBoxPath)(this.curvedBounds)]) : parentClips;
        }
    }, {
        key: 'isInFlow',
        value: function isInFlow() {
            return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return !(0, _Util.contains)(this.style.display, _display.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === _visibility.VISIBILITY.VISIBLE;
        }
    }, {
        key: 'isAbsolutelyPositioned',
        value: function isAbsolutelyPositioned() {
            return this.style.position !== _position.POSITION.STATIC && this.style.position !== _position.POSITION.RELATIVE;
        }
    }, {
        key: 'isPositioned',
        value: function isPositioned() {
            return this.style.position !== _position.POSITION.STATIC;
        }
    }, {
        key: 'isFloating',
        value: function isFloating() {
            return this.style.float !== _float.FLOAT.NONE;
        }
    }, {
        key: 'isRootElement',
        value: function isRootElement() {
            return this.parent === null;
        }
    }, {
        key: 'isTransformed',
        value: function isTransformed() {
            return this.style.transform !== null;
        }
    }, {
        key: 'isPositionedWithZIndex',
        value: function isPositionedWithZIndex() {
            return this.isPositioned() && !this.style.zIndex.auto;
        }
    }, {
        key: 'isInlineLevel',
        value: function isInlineLevel() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_FLEX) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_GRID) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_LIST_ITEM) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }, {
        key: 'isInlineBlockOrInlineTable',
        value: function isInlineBlockOrInlineTable() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }]);

    return NodeContainer;
}();

exports.default = NodeContainer;


var getImage = function getImage(node, resourceLoader) {
    if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {
        var s = new XMLSerializer();
        return resourceLoader.loadImage('data:image/svg+xml,' + encodeURIComponent(s.serializeToString(node)));
    }
    switch (node.tagName) {
        case 'IMG':
            // $FlowFixMe
            var img = node;
            return resourceLoader.loadImage(img.currentSrc || img.src);
        case 'CANVAS':
            // $FlowFixMe
            var canvas = node;
            return resourceLoader.loadCanvas(canvas);
        case 'IFRAME':
            var iframeKey = node.getAttribute('data-html2canvas-internal-iframe-key');
            if (iframeKey) {
                return iframeKey;
            }
            break;
    }

    return null;
};

/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var contains = exports.contains = function contains(bit, value) {
    return (bit & value) !== 0;
};

var distance = exports.distance = function distance(a, b) {
    return Math.sqrt(a * a + b * b);
};

var copyCSSStyles = exports.copyCSSStyles = function copyCSSStyles(style, target) {
    // Edge does not provide value for cssText
    for (var i = style.length - 1; i >= 0; i--) {
        var property = style.item(i);
        // Safari shows pseudoelements if content is set
        if (property !== 'content') {
            target.style.setProperty(property, style.getPropertyValue(property));
        }
    }
    return target;
};

var SMALL_IMAGE = exports.SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBackgroundImage = exports.parseBackground = exports.calculateBackgroundRepeatPath = exports.calculateBackgroundPosition = exports.calculateBackgroungPositioningArea = exports.calculateBackgroungPaintingArea = exports.calculateGradientBackgroundSize = exports.calculateBackgroundSize = exports.BACKGROUND_ORIGIN = exports.BACKGROUND_CLIP = exports.BACKGROUND_SIZE = exports.BACKGROUND_REPEAT = undefined;

var _Color = __webpack_require__(1142);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(1150);

var _Length2 = _interopRequireDefault(_Length);

var _Size = __webpack_require__(1151);

var _Size2 = _interopRequireDefault(_Size);

var _Vector = __webpack_require__(1152);

var _Vector2 = _interopRequireDefault(_Vector);

var _Bounds = __webpack_require__(1153);

var _padding = __webpack_require__(1155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BACKGROUND_REPEAT = exports.BACKGROUND_REPEAT = {
    REPEAT: 0,
    NO_REPEAT: 1,
    REPEAT_X: 2,
    REPEAT_Y: 3
};

var BACKGROUND_SIZE = exports.BACKGROUND_SIZE = {
    AUTO: 0,
    CONTAIN: 1,
    COVER: 2,
    LENGTH: 3
};

var BACKGROUND_CLIP = exports.BACKGROUND_CLIP = {
    BORDER_BOX: 0,
    PADDING_BOX: 1,
    CONTENT_BOX: 2
};

var BACKGROUND_ORIGIN = exports.BACKGROUND_ORIGIN = BACKGROUND_CLIP;

var AUTO = 'auto';

var BackgroundSize = function BackgroundSize(size) {
    _classCallCheck(this, BackgroundSize);

    switch (size) {
        case 'contain':
            this.size = BACKGROUND_SIZE.CONTAIN;
            break;
        case 'cover':
            this.size = BACKGROUND_SIZE.COVER;
            break;
        case 'auto':
            this.size = BACKGROUND_SIZE.AUTO;
            break;
        default:
            this.value = new _Length2.default(size);
    }
};

var calculateBackgroundSize = exports.calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {
    var width = 0;
    var height = 0;
    var size = backgroundImage.size;
    if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {
        var targetRatio = bounds.width / bounds.height;
        var currentRatio = image.width / image.height;
        return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _Size2.default(bounds.width, bounds.width / currentRatio) : new _Size2.default(bounds.height * currentRatio, bounds.height);
    }

    if (size[0].value) {
        width = size[0].value.getAbsoluteValue(bounds.width);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {
        height = image.height;
    } else if (size[1].size === BACKGROUND_SIZE.AUTO) {
        height = width / image.width * image.height;
    } else if (size[1].value) {
        height = size[1].value.getAbsoluteValue(bounds.height);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO) {
        width = height / image.height * image.width;
    }

    return new _Size2.default(width, height);
};

var calculateGradientBackgroundSize = exports.calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {
    var size = backgroundImage.size;
    var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;
    var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;

    return new _Size2.default(width, height);
};

var AUTO_SIZE = new BackgroundSize(AUTO);

var calculateBackgroungPaintingArea = exports.calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {
    switch (clip) {
        case BACKGROUND_CLIP.BORDER_BOX:
            return (0, _Bounds.calculateBorderBoxPath)(curves);
        case BACKGROUND_CLIP.PADDING_BOX:
        default:
            return (0, _Bounds.calculatePaddingBoxPath)(curves);
    }
};

var calculateBackgroungPositioningArea = exports.calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {
    var paddingBox = (0, _Bounds.calculatePaddingBox)(bounds, border);

    switch (backgroundOrigin) {
        case BACKGROUND_ORIGIN.BORDER_BOX:
            return bounds;
        case BACKGROUND_ORIGIN.CONTENT_BOX:
            var paddingLeft = padding[_padding.PADDING_SIDES.LEFT].getAbsoluteValue(bounds.width);
            var paddingRight = padding[_padding.PADDING_SIDES.RIGHT].getAbsoluteValue(bounds.width);
            var paddingTop = padding[_padding.PADDING_SIDES.TOP].getAbsoluteValue(bounds.width);
            var paddingBottom = padding[_padding.PADDING_SIDES.BOTTOM].getAbsoluteValue(bounds.width);
            return new _Bounds.Bounds(paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);
        case BACKGROUND_ORIGIN.PADDING_BOX:
        default:
            return paddingBox;
    }
};

var calculateBackgroundPosition = exports.calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {
    return new _Vector2.default(position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));
};

var calculateBackgroundRepeatPath = exports.calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {
    var repeat = background.repeat;
    switch (repeat) {
        case BACKGROUND_REPEAT.REPEAT_X:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];
        case BACKGROUND_REPEAT.REPEAT_Y:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];
        case BACKGROUND_REPEAT.NO_REPEAT:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];
        default:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(bounds.left), Math.round(bounds.height + bounds.top))];
    }
};

var parseBackground = exports.parseBackground = function parseBackground(style, resourceLoader) {
    return {
        backgroundColor: new _Color2.default(style.backgroundColor),
        backgroundImage: parseBackgroundImages(style, resourceLoader),
        backgroundClip: parseBackgroundClip(style.backgroundClip),
        backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)
    };
};

var parseBackgroundClip = function parseBackgroundClip(backgroundClip) {
    switch (backgroundClip) {
        case 'padding-box':
            return BACKGROUND_CLIP.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_CLIP.CONTENT_BOX;
    }
    return BACKGROUND_CLIP.BORDER_BOX;
};

var parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {
    switch (backgroundOrigin) {
        case 'padding-box':
            return BACKGROUND_ORIGIN.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_ORIGIN.CONTENT_BOX;
    }
    return BACKGROUND_ORIGIN.BORDER_BOX;
};

var parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {
    switch (backgroundRepeat.trim()) {
        case 'no-repeat':
            return BACKGROUND_REPEAT.NO_REPEAT;
        case 'repeat-x':
        case 'repeat no-repeat':
            return BACKGROUND_REPEAT.REPEAT_X;
        case 'repeat-y':
        case 'no-repeat repeat':
            return BACKGROUND_REPEAT.REPEAT_Y;
        case 'repeat':
            return BACKGROUND_REPEAT.REPEAT;
    }

    if (false) {}

    return BACKGROUND_REPEAT.REPEAT;
};

var parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {
    var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {
        if (backgroundImage.method === 'url') {
            var key = resourceLoader.loadImage(backgroundImage.args[0]);
            backgroundImage.args = key ? [key] : [];
        }
        return backgroundImage;
    });
    var positions = style.backgroundPosition.split(',');
    var repeats = style.backgroundRepeat.split(',');
    var sizes = style.backgroundSize.split(',');

    return sources.map(function (source, index) {
        var size = (sizes[index] || AUTO).trim().split(' ').map(parseBackgroundSize);
        var position = (positions[index] || AUTO).trim().split(' ').map(parseBackgoundPosition);

        return {
            source: source,
            repeat: parseBackgroundRepeat(typeof repeats[index] === 'string' ? repeats[index] : repeats[0]),
            size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],
            position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]
        };
    });
};

var parseBackgroundSize = function parseBackgroundSize(size) {
    return size === 'auto' ? AUTO_SIZE : new BackgroundSize(size);
};

var parseBackgoundPosition = function parseBackgoundPosition(position) {
    switch (position) {
        case 'bottom':
        case 'right':
            return new _Length2.default('100%');
        case 'left':
        case 'top':
            return new _Length2.default('0%');
        case 'auto':
            return new _Length2.default('0');
    }
    return new _Length2.default(position);
};

var parseBackgroundImage = exports.parseBackgroundImage = function parseBackgroundImage(image) {
    var whitespace = /^\s$/;
    var results = [];

    var args = [];
    var method = '';
    var quote = null;
    var definition = '';
    var mode = 0;
    var numParen = 0;

    var appendResult = function appendResult() {
        var prefix = '';
        if (method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }

            if (definition) {
                args.push(definition.trim());
            }

            var prefix_i = method.indexOf('-', 1) + 1;
            if (method.substr(0, 1) === '-' && prefix_i > 0) {
                prefix = method.substr(0, prefix_i).toLowerCase();
                method = method.substr(prefix_i);
            }
            method = method.toLowerCase();
            if (method !== 'none') {
                results.push({
                    prefix: prefix,
                    method: method,
                    args: args
                });
            }
        }
        args = [];
        method = definition = '';
    };

    image.split('').forEach(function (c) {
        if (mode === 0 && whitespace.test(c)) {
            return;
        }
        switch (c) {
            case '"':
                if (!quote) {
                    quote = c;
                } else if (quote === c) {
                    quote = null;
                }
                break;
            case '(':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    mode = 1;
                    return;
                } else {
                    numParen++;
                }
                break;
            case ')':
                if (quote) {
                    break;
                } else if (mode === 1) {
                    if (numParen === 0) {
                        mode = 0;
                        appendResult();
                        return;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    appendResult();
                    return;
                } else if (mode === 1) {
                    if (numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition.trim());
                        definition = '';
                        return;
                    }
                }
                break;
        }

        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
};

/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateLengthFromValueWithUnit = exports.LENGTH_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(1147);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LENGTH_WITH_UNIT = /([\d.]+)(px|r?em|%)/i;

var LENGTH_TYPE = exports.LENGTH_TYPE = {
    PX: 0,
    PERCENTAGE: 1
};

var Length = function () {
    function Length(value) {
        _classCallCheck(this, Length);

        this.type = value.substr(value.length - 1) === '%' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;
        var parsedValue = parseFloat(value);
        if (false) {}
        this.value = isNaN(parsedValue) ? 0 : parsedValue;
    }

    _createClass(Length, [{
        key: 'isPercentage',
        value: function isPercentage() {
            return this.type === LENGTH_TYPE.PERCENTAGE;
        }
    }, {
        key: 'getAbsoluteValue',
        value: function getAbsoluteValue(parentLength) {
            return this.isPercentage() ? parentLength * (this.value / 100) : this.value;
        }
    }], [{
        key: 'create',
        value: function create(v) {
            return new Length(v);
        }
    }]);

    return Length;
}();

exports.default = Length;


var getRootFontSize = function getRootFontSize(container) {
    var parent = container.parent;
    return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);
};

var calculateLengthFromValueWithUnit = exports.calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {
    switch (unit) {
        case 'px':
        case '%':
            return new Length(value + unit);
        case 'em':
        case 'rem':
            var length = new Length(value);
            length.value *= unit === 'em' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);
            return length;
        default:
            // TODO: handle correctly if unknown unit is used
            return new Length('0');
    }
};

/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Size = function Size(width, height) {
    _classCallCheck(this, Size);

    this.width = width;
    this.height = height;
};

exports.default = Size;

/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(1140);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.type = _Path.PATH.VECTOR;
    this.x = x;
    this.y = y;
    if (false) {}
};

exports.default = Vector;

/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBoundCurves = exports.calculatePaddingBoxPath = exports.calculateBorderBoxPath = exports.parsePathForBorder = exports.parseDocumentSize = exports.calculateContentBox = exports.calculatePaddingBox = exports.parseBounds = exports.Bounds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(1152);

var _Vector2 = _interopRequireDefault(_Vector);

var _BezierCurve = __webpack_require__(1154);

var _BezierCurve2 = _interopRequireDefault(_BezierCurve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOP = 0;
var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;

var H = 0;
var V = 1;

var Bounds = exports.Bounds = function () {
    function Bounds(x, y, w, h) {
        _classCallCheck(this, Bounds);

        this.left = x;
        this.top = y;
        this.width = w;
        this.height = h;
    }

    _createClass(Bounds, null, [{
        key: 'fromClientRect',
        value: function fromClientRect(clientRect, scrollX, scrollY) {
            return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);
        }
    }]);

    return Bounds;
}();

var parseBounds = exports.parseBounds = function parseBounds(node, scrollX, scrollY) {
    return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);
};

var calculatePaddingBox = exports.calculatePaddingBox = function calculatePaddingBox(bounds, borders) {
    return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));
};

var calculateContentBox = exports.calculateContentBox = function calculateContentBox(bounds, padding, borders) {
    // TODO support percentage paddings
    var paddingTop = padding[TOP].value;
    var paddingRight = padding[RIGHT].value;
    var paddingBottom = padding[BOTTOM].value;
    var paddingLeft = padding[LEFT].value;

    return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));
};

var parseDocumentSize = exports.parseDocumentSize = function parseDocumentSize(document) {
    var body = document.body;
    var documentElement = document.documentElement;

    if (!body || !documentElement) {
        throw new Error( false ? undefined : '');
    }
    var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));

    var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));

    return new Bounds(0, 0, width, height);
};

var parsePathForBorder = exports.parsePathForBorder = function parsePathForBorder(curves, borderSide) {
    switch (borderSide) {
        case TOP:
            return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);
        case RIGHT:
            return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);
        case BOTTOM:
            return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);
        case LEFT:
        default:
            return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);
    }
};

var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
    var path = [];
    if (outer1 instanceof _BezierCurve2.default) {
        path.push(outer1.subdivide(0.5, false));
    } else {
        path.push(outer1);
    }

    if (outer2 instanceof _BezierCurve2.default) {
        path.push(outer2.subdivide(0.5, true));
    } else {
        path.push(outer2);
    }

    if (inner2 instanceof _BezierCurve2.default) {
        path.push(inner2.subdivide(0.5, true).reverse());
    } else {
        path.push(inner2);
    }

    if (inner1 instanceof _BezierCurve2.default) {
        path.push(inner1.subdivide(0.5, false).reverse());
    } else {
        path.push(inner1);
    }

    return path;
};

var calculateBorderBoxPath = exports.calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
    return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];
};

var calculatePaddingBoxPath = exports.calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
    return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];
};

var parseBoundCurves = exports.parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {
    var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);
    var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);
    var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);
    var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);
    var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);
    var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);
    var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);
    var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);

    var factors = [];
    factors.push((tlh + trh) / bounds.width);
    factors.push((blh + brh) / bounds.width);
    factors.push((tlv + blv) / bounds.height);
    factors.push((trv + brv) / bounds.height);
    var maxFactor = Math.max.apply(Math, factors);

    if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
    }

    var topWidth = bounds.width - trh;
    var rightHeight = bounds.height - brv;
    var bottomWidth = bounds.width - brh;
    var leftHeight = bounds.height - blv;

    return {
        topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _Vector2.default(bounds.left, bounds.top),
        topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),
        topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top),
        topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),
        bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top + bounds.height),
        bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),
        bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left, bounds.top + bounds.height),
        bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)
    };
};

var CORNER = {
    TOP_LEFT: 0,
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3
};

var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = r1 * kappa; // control point offset horizontal
    var oy = r2 * kappa; // control point offset vertical
    var xm = x + r1; // x-middle
    var ym = y + r2; // y-middle

    switch (position) {
        case CORNER.TOP_LEFT:
            return new _BezierCurve2.default(new _Vector2.default(x, ym), new _Vector2.default(x, ym - oy), new _Vector2.default(xm - ox, y), new _Vector2.default(xm, y));
        case CORNER.TOP_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(x, y), new _Vector2.default(x + ox, y), new _Vector2.default(xm, ym - oy), new _Vector2.default(xm, ym));
        case CORNER.BOTTOM_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(xm, y), new _Vector2.default(xm, y + oy), new _Vector2.default(x + ox, ym), new _Vector2.default(x, ym));
        case CORNER.BOTTOM_LEFT:
        default:
            return new _BezierCurve2.default(new _Vector2.default(xm, ym), new _Vector2.default(xm - ox, ym), new _Vector2.default(x, y + oy), new _Vector2.default(x, y));
    }
};

/***/ }),

/***/ 1154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(1140);

var _Vector = __webpack_require__(1152);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lerp = function lerp(a, b, t) {
    return new _Vector2.default(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
};

var BezierCurve = function () {
    function BezierCurve(start, startControl, endControl, end) {
        _classCallCheck(this, BezierCurve);

        this.type = _Path.PATH.BEZIER_CURVE;
        this.start = start;
        this.startControl = startControl;
        this.endControl = endControl;
        this.end = end;
    }

    _createClass(BezierCurve, [{
        key: 'subdivide',
        value: function subdivide(t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        }
    }]);

    return BezierCurve;
}();

exports.default = BezierCurve;

/***/ }),

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePadding = exports.PADDING_SIDES = undefined;

var _Length = __webpack_require__(1150);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PADDING_SIDES = exports.PADDING_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = ['top', 'right', 'bottom', 'left'];

var parsePadding = exports.parsePadding = function parsePadding(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('padding-' + side));
    });
};

/***/ }),

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorder = exports.BORDER_SIDES = exports.BORDER_STYLE = undefined;

var _Color = __webpack_require__(1142);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BORDER_STYLE = exports.BORDER_STYLE = {
    NONE: 0,
    SOLID: 1
};

var BORDER_SIDES = exports.BORDER_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = Object.keys(BORDER_SIDES).map(function (s) {
    return s.toLowerCase();
});

var parseBorderStyle = function parseBorderStyle(style) {
    switch (style) {
        case 'none':
            return BORDER_STYLE.NONE;
    }
    return BORDER_STYLE.SOLID;
};

var parseBorder = exports.parseBorder = function parseBorder(style) {
    return SIDES.map(function (side) {
        var borderColor = new _Color2.default(style.getPropertyValue('border-' + side + '-color'));
        var borderStyle = parseBorderStyle(style.getPropertyValue('border-' + side + '-style'));
        var borderWidth = parseFloat(style.getPropertyValue('border-' + side + '-width'));
        return {
            borderColor: borderColor,
            borderStyle: borderStyle,
            borderWidth: isNaN(borderWidth) ? 0 : borderWidth
        };
    });
};

/***/ }),

/***/ 1157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorderRadius = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Length = __webpack_require__(1150);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

var parseBorderRadius = exports.parseBorderRadius = function parseBorderRadius(style) {
    return SIDES.map(function (side) {
        var value = style.getPropertyValue('border-' + side + '-radius');

        var _value$split$map = value.split(' ').map(_Length2.default.create),
            _value$split$map2 = _slicedToArray(_value$split$map, 2),
            horizontal = _value$split$map2[0],
            vertical = _value$split$map2[1];

        return typeof vertical === 'undefined' ? [horizontal, horizontal] : [horizontal, vertical];
    });
};

/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var DISPLAY = exports.DISPLAY = {
    NONE: 1 << 0,
    BLOCK: 1 << 1,
    INLINE: 1 << 2,
    RUN_IN: 1 << 3,
    FLOW: 1 << 4,
    FLOW_ROOT: 1 << 5,
    TABLE: 1 << 6,
    FLEX: 1 << 7,
    GRID: 1 << 8,
    RUBY: 1 << 9,
    SUBGRID: 1 << 10,
    LIST_ITEM: 1 << 11,
    TABLE_ROW_GROUP: 1 << 12,
    TABLE_HEADER_GROUP: 1 << 13,
    TABLE_FOOTER_GROUP: 1 << 14,
    TABLE_ROW: 1 << 15,
    TABLE_CELL: 1 << 16,
    TABLE_COLUMN_GROUP: 1 << 17,
    TABLE_COLUMN: 1 << 18,
    TABLE_CAPTION: 1 << 19,
    RUBY_BASE: 1 << 20,
    RUBY_TEXT: 1 << 21,
    RUBY_BASE_CONTAINER: 1 << 22,
    RUBY_TEXT_CONTAINER: 1 << 23,
    CONTENTS: 1 << 24,
    INLINE_BLOCK: 1 << 25,
    INLINE_LIST_ITEM: 1 << 26,
    INLINE_TABLE: 1 << 27,
    INLINE_FLEX: 1 << 28,
    INLINE_GRID: 1 << 29
};

var parseDisplayValue = function parseDisplayValue(display) {
    switch (display) {
        case 'block':
            return DISPLAY.BLOCK;
        case 'inline':
            return DISPLAY.INLINE;
        case 'run-in':
            return DISPLAY.RUN_IN;
        case 'flow':
            return DISPLAY.FLOW;
        case 'flow-root':
            return DISPLAY.FLOW_ROOT;
        case 'table':
            return DISPLAY.TABLE;
        case 'flex':
            return DISPLAY.FLEX;
        case 'grid':
            return DISPLAY.GRID;
        case 'ruby':
            return DISPLAY.RUBY;
        case 'subgrid':
            return DISPLAY.SUBGRID;
        case 'list-item':
            return DISPLAY.LIST_ITEM;
        case 'table-row-group':
            return DISPLAY.TABLE_ROW_GROUP;
        case 'table-header-group':
            return DISPLAY.TABLE_HEADER_GROUP;
        case 'table-footer-group':
            return DISPLAY.TABLE_FOOTER_GROUP;
        case 'table-row':
            return DISPLAY.TABLE_ROW;
        case 'table-cell':
            return DISPLAY.TABLE_CELL;
        case 'table-column-group':
            return DISPLAY.TABLE_COLUMN_GROUP;
        case 'table-column':
            return DISPLAY.TABLE_COLUMN;
        case 'table-caption':
            return DISPLAY.TABLE_CAPTION;
        case 'ruby-base':
            return DISPLAY.RUBY_BASE;
        case 'ruby-text':
            return DISPLAY.RUBY_TEXT;
        case 'ruby-base-container':
            return DISPLAY.RUBY_BASE_CONTAINER;
        case 'ruby-text-container':
            return DISPLAY.RUBY_TEXT_CONTAINER;
        case 'contents':
            return DISPLAY.CONTENTS;
        case 'inline-block':
            return DISPLAY.INLINE_BLOCK;
        case 'inline-list-item':
            return DISPLAY.INLINE_LIST_ITEM;
        case 'inline-table':
            return DISPLAY.INLINE_TABLE;
        case 'inline-flex':
            return DISPLAY.INLINE_FLEX;
        case 'inline-grid':
            return DISPLAY.INLINE_GRID;
    }

    return DISPLAY.NONE;
};

var setDisplayBit = function setDisplayBit(bit, display) {
    return bit | parseDisplayValue(display);
};

var parseDisplay = exports.parseDisplay = function parseDisplay(display) {
    return display.split(' ').reduce(setDisplayBit, 0);
};

/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FLOAT = exports.FLOAT = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    INLINE_START: 3,
    INLINE_END: 4
};

var parseCSSFloat = exports.parseCSSFloat = function parseCSSFloat(float) {
    switch (float) {
        case 'left':
            return FLOAT.LEFT;
        case 'right':
            return FLOAT.RIGHT;
        case 'inline-start':
            return FLOAT.INLINE_START;
        case 'inline-end':
            return FLOAT.INLINE_END;
    }
    return FLOAT.NONE;
};

/***/ }),

/***/ 1160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var parseFontWeight = function parseFontWeight(weight) {
    switch (weight) {
        case 'normal':
            return 400;
        case 'bold':
            return 700;
    }

    var value = parseInt(weight, 10);
    return isNaN(value) ? 400 : value;
};

var parseFont = exports.parseFont = function parseFont(style) {
    var fontFamily = style.fontFamily;
    var fontSize = style.fontSize;
    var fontStyle = style.fontStyle;
    var fontVariant = style.fontVariant;
    var fontWeight = parseFontWeight(style.fontWeight);

    return {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontVariant: fontVariant,
        fontWeight: fontWeight
    };
};

/***/ }),

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseLetterSpacing = exports.parseLetterSpacing = function parseLetterSpacing(letterSpacing) {
    if (letterSpacing === 'normal') {
        return 0;
    }
    var value = parseFloat(letterSpacing);
    return isNaN(value) ? 0 : value;
};

/***/ }),

/***/ 1162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var LINE_BREAK = exports.LINE_BREAK = {
    NORMAL: 'normal',
    STRICT: 'strict'
};

var parseLineBreak = exports.parseLineBreak = function parseLineBreak(wordBreak) {
    switch (wordBreak) {
        case 'strict':
            return LINE_BREAK.STRICT;
        case 'normal':
        default:
            return LINE_BREAK.NORMAL;
    }
};

/***/ }),

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseListStyle = exports.parseListStyleType = exports.LIST_STYLE_TYPE = exports.LIST_STYLE_POSITION = undefined;

var _background = __webpack_require__(1149);

var LIST_STYLE_POSITION = exports.LIST_STYLE_POSITION = {
    INSIDE: 0,
    OUTSIDE: 1
};

var LIST_STYLE_TYPE = exports.LIST_STYLE_TYPE = {
    NONE: -1,
    DISC: 0,
    CIRCLE: 1,
    SQUARE: 2,
    DECIMAL: 3,
    CJK_DECIMAL: 4,
    DECIMAL_LEADING_ZERO: 5,
    LOWER_ROMAN: 6,
    UPPER_ROMAN: 7,
    LOWER_GREEK: 8,
    LOWER_ALPHA: 9,
    UPPER_ALPHA: 10,
    ARABIC_INDIC: 11,
    ARMENIAN: 12,
    BENGALI: 13,
    CAMBODIAN: 14,
    CJK_EARTHLY_BRANCH: 15,
    CJK_HEAVENLY_STEM: 16,
    CJK_IDEOGRAPHIC: 17,
    DEVANAGARI: 18,
    ETHIOPIC_NUMERIC: 19,
    GEORGIAN: 20,
    GUJARATI: 21,
    GURMUKHI: 22,
    HEBREW: 22,
    HIRAGANA: 23,
    HIRAGANA_IROHA: 24,
    JAPANESE_FORMAL: 25,
    JAPANESE_INFORMAL: 26,
    KANNADA: 27,
    KATAKANA: 28,
    KATAKANA_IROHA: 29,
    KHMER: 30,
    KOREAN_HANGUL_FORMAL: 31,
    KOREAN_HANJA_FORMAL: 32,
    KOREAN_HANJA_INFORMAL: 33,
    LAO: 34,
    LOWER_ARMENIAN: 35,
    MALAYALAM: 36,
    MONGOLIAN: 37,
    MYANMAR: 38,
    ORIYA: 39,
    PERSIAN: 40,
    SIMP_CHINESE_FORMAL: 41,
    SIMP_CHINESE_INFORMAL: 42,
    TAMIL: 43,
    TELUGU: 44,
    THAI: 45,
    TIBETAN: 46,
    TRAD_CHINESE_FORMAL: 47,
    TRAD_CHINESE_INFORMAL: 48,
    UPPER_ARMENIAN: 49,
    DISCLOSURE_OPEN: 50,
    DISCLOSURE_CLOSED: 51
};

var parseListStyleType = exports.parseListStyleType = function parseListStyleType(type) {
    switch (type) {
        case 'disc':
            return LIST_STYLE_TYPE.DISC;
        case 'circle':
            return LIST_STYLE_TYPE.CIRCLE;
        case 'square':
            return LIST_STYLE_TYPE.SQUARE;
        case 'decimal':
            return LIST_STYLE_TYPE.DECIMAL;
        case 'cjk-decimal':
            return LIST_STYLE_TYPE.CJK_DECIMAL;
        case 'decimal-leading-zero':
            return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
        case 'lower-roman':
            return LIST_STYLE_TYPE.LOWER_ROMAN;
        case 'upper-roman':
            return LIST_STYLE_TYPE.UPPER_ROMAN;
        case 'lower-greek':
            return LIST_STYLE_TYPE.LOWER_GREEK;
        case 'lower-alpha':
            return LIST_STYLE_TYPE.LOWER_ALPHA;
        case 'upper-alpha':
            return LIST_STYLE_TYPE.UPPER_ALPHA;
        case 'arabic-indic':
            return LIST_STYLE_TYPE.ARABIC_INDIC;
        case 'armenian':
            return LIST_STYLE_TYPE.ARMENIAN;
        case 'bengali':
            return LIST_STYLE_TYPE.BENGALI;
        case 'cambodian':
            return LIST_STYLE_TYPE.CAMBODIAN;
        case 'cjk-earthly-branch':
            return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
        case 'cjk-heavenly-stem':
            return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
        case 'cjk-ideographic':
            return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
        case 'devanagari':
            return LIST_STYLE_TYPE.DEVANAGARI;
        case 'ethiopic-numeric':
            return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
        case 'georgian':
            return LIST_STYLE_TYPE.GEORGIAN;
        case 'gujarati':
            return LIST_STYLE_TYPE.GUJARATI;
        case 'gurmukhi':
            return LIST_STYLE_TYPE.GURMUKHI;
        case 'hebrew':
            return LIST_STYLE_TYPE.HEBREW;
        case 'hiragana':
            return LIST_STYLE_TYPE.HIRAGANA;
        case 'hiragana-iroha':
            return LIST_STYLE_TYPE.HIRAGANA_IROHA;
        case 'japanese-formal':
            return LIST_STYLE_TYPE.JAPANESE_FORMAL;
        case 'japanese-informal':
            return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
        case 'kannada':
            return LIST_STYLE_TYPE.KANNADA;
        case 'katakana':
            return LIST_STYLE_TYPE.KATAKANA;
        case 'katakana-iroha':
            return LIST_STYLE_TYPE.KATAKANA_IROHA;
        case 'khmer':
            return LIST_STYLE_TYPE.KHMER;
        case 'korean-hangul-formal':
            return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
        case 'korean-hanja-formal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
        case 'korean-hanja-informal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
        case 'lao':
            return LIST_STYLE_TYPE.LAO;
        case 'lower-armenian':
            return LIST_STYLE_TYPE.LOWER_ARMENIAN;
        case 'malayalam':
            return LIST_STYLE_TYPE.MALAYALAM;
        case 'mongolian':
            return LIST_STYLE_TYPE.MONGOLIAN;
        case 'myanmar':
            return LIST_STYLE_TYPE.MYANMAR;
        case 'oriya':
            return LIST_STYLE_TYPE.ORIYA;
        case 'persian':
            return LIST_STYLE_TYPE.PERSIAN;
        case 'simp-chinese-formal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
        case 'simp-chinese-informal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
        case 'tamil':
            return LIST_STYLE_TYPE.TAMIL;
        case 'telugu':
            return LIST_STYLE_TYPE.TELUGU;
        case 'thai':
            return LIST_STYLE_TYPE.THAI;
        case 'tibetan':
            return LIST_STYLE_TYPE.TIBETAN;
        case 'trad-chinese-formal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
        case 'trad-chinese-informal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
        case 'upper-armenian':
            return LIST_STYLE_TYPE.UPPER_ARMENIAN;
        case 'disclosure-open':
            return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
        case 'disclosure-closed':
            return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
        case 'none':
        default:
            return LIST_STYLE_TYPE.NONE;
    }
};

var parseListStyle = exports.parseListStyle = function parseListStyle(style) {
    var listStyleImage = (0, _background.parseBackgroundImage)(style.getPropertyValue('list-style-image'));
    return {
        listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),
        listStyleImage: listStyleImage.length ? listStyleImage[0] : null,
        listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))
    };
};

var parseListStylePosition = function parseListStylePosition(position) {
    switch (position) {
        case 'inside':
            return LIST_STYLE_POSITION.INSIDE;
        case 'outside':
        default:
            return LIST_STYLE_POSITION.OUTSIDE;
    }
};

/***/ }),

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseMargin = undefined;

var _Length = __webpack_require__(1150);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top', 'right', 'bottom', 'left'];

var parseMargin = exports.parseMargin = function parseMargin(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('margin-' + side));
    });
};

/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW = exports.OVERFLOW = {
    VISIBLE: 0,
    HIDDEN: 1,
    SCROLL: 2,
    AUTO: 3
};

var parseOverflow = exports.parseOverflow = function parseOverflow(overflow) {
    switch (overflow) {
        case 'hidden':
            return OVERFLOW.HIDDEN;
        case 'scroll':
            return OVERFLOW.SCROLL;
        case 'auto':
            return OVERFLOW.AUTO;
        case 'visible':
        default:
            return OVERFLOW.VISIBLE;
    }
};

/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW_WRAP = exports.OVERFLOW_WRAP = {
    NORMAL: 0,
    BREAK_WORD: 1
};

var parseOverflowWrap = exports.parseOverflowWrap = function parseOverflowWrap(overflow) {
    switch (overflow) {
        case 'break-word':
            return OVERFLOW_WRAP.BREAK_WORD;
        case 'normal':
        default:
            return OVERFLOW_WRAP.NORMAL;
    }
};

/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var POSITION = exports.POSITION = {
    STATIC: 0,
    RELATIVE: 1,
    ABSOLUTE: 2,
    FIXED: 3,
    STICKY: 4
};

var parsePosition = exports.parsePosition = function parsePosition(position) {
    switch (position) {
        case 'relative':
            return POSITION.RELATIVE;
        case 'absolute':
            return POSITION.ABSOLUTE;
        case 'fixed':
            return POSITION.FIXED;
        case 'sticky':
            return POSITION.STICKY;
    }

    return POSITION.STATIC;
};

/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextShadow = undefined;

var _Color = __webpack_require__(1142);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = /^([+-]|\d|\.)$/i;

var parseTextShadow = exports.parseTextShadow = function parseTextShadow(textShadow) {
    if (textShadow === 'none' || typeof textShadow !== 'string') {
        return null;
    }

    var currentValue = '';
    var isLength = false;
    var values = [];
    var shadows = [];
    var numParens = 0;
    var color = null;

    var appendValue = function appendValue() {
        if (currentValue.length) {
            if (isLength) {
                values.push(parseFloat(currentValue));
            } else {
                color = new _Color2.default(currentValue);
            }
        }
        isLength = false;
        currentValue = '';
    };

    var appendShadow = function appendShadow() {
        if (values.length && color !== null) {
            shadows.push({
                color: color,
                offsetX: values[0] || 0,
                offsetY: values[1] || 0,
                blur: values[2] || 0
            });
        }
        values.splice(0, values.length);
        color = null;
    };

    for (var i = 0; i < textShadow.length; i++) {
        var c = textShadow[i];
        switch (c) {
            case '(':
                currentValue += c;
                numParens++;
                break;
            case ')':
                currentValue += c;
                numParens--;
                break;
            case ',':
                if (numParens === 0) {
                    appendValue();
                    appendShadow();
                } else {
                    currentValue += c;
                }
                break;
            case ' ':
                if (numParens === 0) {
                    appendValue();
                } else {
                    currentValue += c;
                }
                break;
            default:
                if (currentValue.length === 0 && NUMBER.test(c)) {
                    isLength = true;
                }
                currentValue += c;
        }
    }

    appendValue();
    appendShadow();

    if (shadows.length === 0) {
        return null;
    }

    return shadows;
};

/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TEXT_TRANSFORM = exports.TEXT_TRANSFORM = {
    NONE: 0,
    LOWERCASE: 1,
    UPPERCASE: 2,
    CAPITALIZE: 3
};

var parseTextTransform = exports.parseTextTransform = function parseTextTransform(textTransform) {
    switch (textTransform) {
        case 'uppercase':
            return TEXT_TRANSFORM.UPPERCASE;
        case 'lowercase':
            return TEXT_TRANSFORM.LOWERCASE;
        case 'capitalize':
            return TEXT_TRANSFORM.CAPITALIZE;
    }

    return TEXT_TRANSFORM.NONE;
};

/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTransform = undefined;

var _Length = __webpack_require__(1150);

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toFloat = function toFloat(s) {
    return parseFloat(s.trim());
};

var MATRIX = /(matrix|matrix3d)\((.+)\)/;

var parseTransform = exports.parseTransform = function parseTransform(style) {
    var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform ||
    // $FlowFixMe
    style.msTransform ||
    // $FlowFixMe
    style.oTransform);
    if (transform === null) {
        return null;
    }

    return {
        transform: transform,
        transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin ||
        // $FlowFixMe
        style.msTransformOrigin ||
        // $FlowFixMe
        style.oTransformOrigin)
    };
};

// $FlowFixMe
var parseTransformOrigin = function parseTransformOrigin(origin) {
    if (typeof origin !== 'string') {
        var v = new _Length2.default('0');
        return [v, v];
    }
    var values = origin.split(' ').map(_Length2.default.create);
    return [values[0], values[1]];
};

// $FlowFixMe
var parseTransformMatrix = function parseTransformMatrix(transform) {
    if (transform === 'none' || typeof transform !== 'string') {
        return null;
    }

    var match = transform.match(MATRIX);
    if (match) {
        if (match[1] === 'matrix') {
            var matrix = match[2].split(',').map(toFloat);
            return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];
        } else {
            var matrix3d = match[2].split(',').map(toFloat);
            return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
        }
    }
    return null;
};

/***/ }),

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var VISIBILITY = exports.VISIBILITY = {
    VISIBLE: 0,
    HIDDEN: 1,
    COLLAPSE: 2
};

var parseVisibility = exports.parseVisibility = function parseVisibility(visibility) {
    switch (visibility) {
        case 'hidden':
            return VISIBILITY.HIDDEN;
        case 'collapse':
            return VISIBILITY.COLLAPSE;
        case 'visible':
        default:
            return VISIBILITY.VISIBLE;
    }
};

/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WORD_BREAK = exports.WORD_BREAK = {
    NORMAL: 'normal',
    BREAK_ALL: 'break-all',
    KEEP_ALL: 'keep-all'
};

var parseWordBreak = exports.parseWordBreak = function parseWordBreak(wordBreak) {
    switch (wordBreak) {
        case 'break-all':
            return WORD_BREAK.BREAK_ALL;
        case 'keep-all':
            return WORD_BREAK.KEEP_ALL;
        case 'normal':
        default:
            return WORD_BREAK.NORMAL;
    }
};

/***/ }),

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseZIndex = exports.parseZIndex = function parseZIndex(zIndex) {
    var auto = zIndex === 'auto';
    return {
        auto: auto,
        order: auto ? 0 : parseInt(zIndex, 10)
    };
};

/***/ }),

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reformatInputBounds = exports.inlineSelectElement = exports.inlineTextAreaElement = exports.inlineInputElement = exports.getInputBorderRadius = exports.INPUT_BACKGROUND = exports.INPUT_BORDERS = exports.INPUT_COLOR = undefined;

var _TextContainer = __webpack_require__(1175);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(1149);

var _border = __webpack_require__(1156);

var _Circle = __webpack_require__(1185);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(1152);

var _Vector2 = _interopRequireDefault(_Vector);

var _Color = __webpack_require__(1142);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(1150);

var _Length2 = _interopRequireDefault(_Length);

var _Bounds = __webpack_require__(1153);

var _TextBounds = __webpack_require__(1176);

var _Util = __webpack_require__(1148);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INPUT_COLOR = exports.INPUT_COLOR = new _Color2.default([42, 42, 42]);
var INPUT_BORDER_COLOR = new _Color2.default([165, 165, 165]);
var INPUT_BACKGROUND_COLOR = new _Color2.default([222, 222, 222]);
var INPUT_BORDER = {
    borderWidth: 1,
    borderColor: INPUT_BORDER_COLOR,
    borderStyle: _border.BORDER_STYLE.SOLID
};
var INPUT_BORDERS = exports.INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];
var INPUT_BACKGROUND = exports.INPUT_BACKGROUND = {
    backgroundColor: INPUT_BACKGROUND_COLOR,
    backgroundImage: [],
    backgroundClip: _background.BACKGROUND_CLIP.PADDING_BOX,
    backgroundOrigin: _background.BACKGROUND_ORIGIN.PADDING_BOX
};

var RADIO_BORDER_RADIUS = new _Length2.default('50%');
var RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];
var INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];

var CHECKBOX_BORDER_RADIUS = new _Length2.default('3px');
var CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];
var INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];

var getInputBorderRadius = exports.getInputBorderRadius = function getInputBorderRadius(node) {
    return node.type === 'radio' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;
};

var inlineInputElement = exports.inlineInputElement = function inlineInputElement(node, container) {
    if (node.type === 'radio' || node.type === 'checkbox') {
        if (node.checked) {
            var size = Math.min(container.bounds.width, container.bounds.height);
            container.childNodes.push(node.type === 'checkbox' ? [new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _Vector2.default(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _Vector2.default(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _Vector2.default(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _Vector2.default(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _Vector2.default(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _Circle2.default(container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));
        }
    } else {
        inlineFormElement(getInputValue(node), node, container, false);
    }
};

var inlineTextAreaElement = exports.inlineTextAreaElement = function inlineTextAreaElement(node, container) {
    inlineFormElement(node.value, node, container, true);
};

var inlineSelectElement = exports.inlineSelectElement = function inlineSelectElement(node, container) {
    var option = node.options[node.selectedIndex || 0];
    inlineFormElement(option ? option.text || '' : '', node, container, false);
};

var reformatInputBounds = exports.reformatInputBounds = function reformatInputBounds(bounds) {
    if (bounds.width > bounds.height) {
        bounds.left += (bounds.width - bounds.height) / 2;
        bounds.width = bounds.height;
    } else if (bounds.width < bounds.height) {
        bounds.top += (bounds.height - bounds.width) / 2;
        bounds.height = bounds.width;
    }
    return bounds;
};

var inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {
    var body = node.ownerDocument.body;
    if (value.length > 0 && body) {
        var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
        (0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);
        wrapper.style.position = 'absolute';
        wrapper.style.left = container.bounds.left + 'px';
        wrapper.style.top = container.bounds.top + 'px';
        if (!allowLinebreak) {
            wrapper.style.whiteSpace = 'nowrap';
        }
        var text = node.ownerDocument.createTextNode(value);
        wrapper.appendChild(text);
        body.appendChild(wrapper);
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    }
};

var getInputValue = function getInputValue(node) {
    var value = node.type === 'password' ? new Array(node.value.length + 1).join('\u2022') : node.value;

    return value.length === 0 ? node.placeholder || '' : value;
};

/***/ }),

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textTransform = __webpack_require__(1169);

var _TextBounds = __webpack_require__(1176);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextContainer = function () {
    function TextContainer(text, parent, bounds) {
        _classCallCheck(this, TextContainer);

        this.text = text;
        this.parent = parent;
        this.bounds = bounds;
    }

    _createClass(TextContainer, null, [{
        key: 'fromTextNode',
        value: function fromTextNode(node, parent) {
            var text = transform(node.data, parent.style.textTransform);
            return new TextContainer(text, parent, (0, _TextBounds.parseTextBounds)(text, parent, node));
        }
    }]);

    return TextContainer;
}();

exports.default = TextContainer;


var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;

var transform = function transform(text, _transform) {
    switch (_transform) {
        case _textTransform.TEXT_TRANSFORM.LOWERCASE:
            return text.toLowerCase();
        case _textTransform.TEXT_TRANSFORM.CAPITALIZE:
            return text.replace(CAPITALIZE, capitalize);
        case _textTransform.TEXT_TRANSFORM.UPPERCASE:
            return text.toUpperCase();
        default:
            return text;
    }
};

function capitalize(m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }

    return m;
}

/***/ }),

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextBounds = exports.TextBounds = undefined;

var _Bounds = __webpack_require__(1153);

var _textDecoration = __webpack_require__(1141);

var _Feature = __webpack_require__(1177);

var _Feature2 = _interopRequireDefault(_Feature);

var _Unicode = __webpack_require__(1179);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextBounds = exports.TextBounds = function TextBounds(text, bounds) {
    _classCallCheck(this, TextBounds);

    this.text = text;
    this.bounds = bounds;
};

var parseTextBounds = exports.parseTextBounds = function parseTextBounds(value, parent, node) {
    var letterRendering = parent.style.letterSpacing !== 0;
    var textList = letterRendering ? (0, _Unicode.toCodePoints)(value).map(function (i) {
        return (0, _Unicode.fromCodePoint)(i);
    }) : (0, _Unicode.breakWords)(value, parent);
    var length = textList.length;
    var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;
    var scrollX = defaultView ? defaultView.pageXOffset : 0;
    var scrollY = defaultView ? defaultView.pageYOffset : 0;
    var textBounds = [];
    var offset = 0;
    for (var i = 0; i < length; i++) {
        var text = textList[i];
        if (parent.style.textDecoration !== _textDecoration.TEXT_DECORATION.NONE || text.trim().length > 0) {
            if (_Feature2.default.SUPPORT_RANGE_BOUNDS) {
                textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));
            } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));
                node = replacementNode;
            }
        } else if (!_Feature2.default.SUPPORT_RANGE_BOUNDS) {
            node = node.splitText(text.length);
        }
        offset += text.length;
    }
    return textBounds;
};

var getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
        parentNode.replaceChild(wrapper, node);
        var bounds = (0, _Bounds.parseBounds)(wrapper, scrollX, scrollY);
        if (wrapper.firstChild) {
            parentNode.replaceChild(wrapper.firstChild, wrapper);
        }
        return bounds;
    }
    return new _Bounds.Bounds(0, 0, 0, 0);
};

var getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {
    var range = node.ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return _Bounds.Bounds.fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);
};

/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ForeignObjectRenderer = __webpack_require__(1178);

var testRangeBounds = function testRangeBounds(document) {
    var TEST_HEIGHT = 123;

    if (document.createRange) {
        var range = document.createRange();
        if (range.getBoundingClientRect) {
            var testElement = document.createElement('boundtest');
            testElement.style.height = TEST_HEIGHT + 'px';
            testElement.style.display = 'block';
            document.body.appendChild(testElement);

            range.selectNode(testElement);
            var rangeBounds = range.getBoundingClientRect();
            var rangeHeight = Math.round(rangeBounds.height);
            document.body.removeChild(testElement);
            if (rangeHeight === TEST_HEIGHT) {
                return true;
            }
        }
    }

    return false;
};

// iOS 10.3 taints canvas with base64 images unless crossOrigin = 'anonymous'
var testBase64 = function testBase64(document, src) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    return new Promise(function (resolve) {
        // Single pixel base64 image renders fine on iOS 10.3???
        img.src = src;

        var onload = function onload() {
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return resolve(false);
            }

            return resolve(true);
        };

        img.onload = onload;
        img.onerror = function () {
            return resolve(false);
        };

        if (img.complete === true) {
            setTimeout(function () {
                onload();
            }, 500);
        }
    });
};

var testCORS = function testCORS() {
    return typeof new Image().crossOrigin !== 'undefined';
};

var testResponseType = function testResponseType() {
    return typeof new XMLHttpRequest().responseType === 'string';
};

var testSVG = function testSVG(document) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    img.src = 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\'></svg>';

    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch (e) {
        return false;
    }
    return true;
};

var isGreenPixel = function isGreenPixel(data) {
    return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};

var testForeignObject = function testForeignObject(document) {
    var canvas = document.createElement('canvas');
    var size = 100;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(0, 0, size, size);

    var img = new Image();
    var greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    var svg = (0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, img);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size, size);

    return (0, _ForeignObjectRenderer.loadSerializedSVG)(svg).then(function (img) {
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, size, size).data;
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);

        var node = document.createElement('div');
        node.style.backgroundImage = 'url(' + greenImageSrc + ')';
        node.style.height = size + 'px';
        // Firefox 55 does not render inline <img /> tags
        return isGreenPixel(data) ? (0, _ForeignObjectRenderer.loadSerializedSVG)((0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, node)) : Promise.reject(false);
    }).then(function (img) {
        ctx.drawImage(img, 0, 0);
        // Edge does not render background-images
        return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    }).catch(function (e) {
        return false;
    });
};

var FEATURES = {
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RANGE_BOUNDS() {
        'use strict';

        var value = testRangeBounds(document);
        Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_SVG_DRAWING() {
        'use strict';

        var value = testSVG(document);
        Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_BASE64_DRAWING() {
        'use strict';

        return function (src) {
            var _value = testBase64(document, src);
            Object.defineProperty(FEATURES, 'SUPPORT_BASE64_DRAWING', { value: function value() {
                    return _value;
                } });
            return _value;
        };
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        'use strict';

        var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
        Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_IMAGES() {
        'use strict';

        var value = testCORS();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RESPONSE_TYPE() {
        'use strict';

        var value = testResponseType();
        Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_XHR() {
        'use strict';

        var value = 'withCredentials' in new XMLHttpRequest();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
        return value;
    }
};

exports.default = FEATURES;

/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForeignObjectRenderer = function () {
    function ForeignObjectRenderer(element) {
        _classCallCheck(this, ForeignObjectRenderer);

        this.element = element;
    }

    _createClass(ForeignObjectRenderer, [{
        key: 'render',
        value: function render(options) {
            var _this = this;

            this.options = options;
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = Math.floor(options.width) * options.scale;
            this.canvas.height = Math.floor(options.height) * options.scale;
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            options.logger.log('ForeignObject renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + options.scale);
            var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);

            return loadSerializedSVG(svg).then(function (img) {
                if (options.backgroundColor) {
                    _this.ctx.fillStyle = options.backgroundColor.toString();
                    _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);
                }

                _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);
                return _this.canvas;
            });
        }
    }]);

    return ForeignObjectRenderer;
}();

exports.default = ForeignObjectRenderer;
var createForeignObjectSVG = exports.createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width);
    svg.setAttributeNS(null, 'height', height);

    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x);
    foreignObject.setAttributeNS(null, 'y', y);
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);

    foreignObject.appendChild(node);

    return svg;
};

var loadSerializedSVG = exports.loadSerializedSVG = function loadSerializedSVG(svg) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;

        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
};

/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.breakWords = exports.fromCodePoint = exports.toCodePoints = undefined;

var _cssLineBreak = __webpack_require__(1180);

Object.defineProperty(exports, 'toCodePoints', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.toCodePoints;
    }
});
Object.defineProperty(exports, 'fromCodePoint', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.fromCodePoint;
    }
});

var _NodeContainer = __webpack_require__(1147);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _overflowWrap = __webpack_require__(1166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakWords = exports.breakWords = function breakWords(str, parent) {
    var breaker = (0, _cssLineBreak.LineBreaker)(str, {
        lineBreak: parent.style.lineBreak,
        wordBreak: parent.style.overflowWrap === _overflowWrap.OVERFLOW_WRAP.BREAK_WORD ? 'break-word' : parent.style.wordBreak
    });

    var words = [];
    var bk = void 0;

    while (!(bk = breaker.next()).done) {
        words.push(bk.value.slice());
    }

    return words;
};

/***/ }),

/***/ 1180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(1181);

Object.defineProperty(exports, 'toCodePoints', {
  enumerable: true,
  get: function get() {
    return _Util.toCodePoints;
  }
});
Object.defineProperty(exports, 'fromCodePoint', {
  enumerable: true,
  get: function get() {
    return _Util.fromCodePoint;
  }
});

var _LineBreak = __webpack_require__(1182);

Object.defineProperty(exports, 'LineBreaker', {
  enumerable: true,
  get: function get() {
    return _LineBreak.LineBreaker;
  }
});

/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            } else {
                codePoints.push(value);
                i--;
            }
        } else {
            codePoints.push(value);
        }
    }
    return codePoints;
};

var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, arguments);
    }

    var length = arguments.length;
    if (!length) {
        return '';
    }

    var codeUnits = [];

    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = arguments.length <= index ? undefined : arguments[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        } else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}

var decode = exports.decode = function decode(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i = void 0,
        p = 0,
        encoded1 = void 0,
        encoded2 = void 0,
        encoded3 = void 0,
        encoded4 = void 0;

    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return buffer;
};

var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i = 0; _i < length; _i += 2) {
        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
    }
    return bytes;
};

var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i2 = 0; _i2 < length; _i2 += 4) {
        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
    }
    return bytes;
};

/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Trie = __webpack_require__(1183);

var _linebreakTrie = __webpack_require__(1184);

var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);

var _Util = __webpack_require__(1181);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;

// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var SG = 6; //  Do not occur in well-formed text
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

var classes = exports.classes = {
    BK: BK,
    CR: CR,
    LF: LF,
    CM: CM,
    NL: NL,
    SG: SG,
    WJ: WJ,
    ZW: ZW,
    GL: GL,
    SP: SP,
    ZWJ: ZWJ,
    B2: B2,
    BA: BA,
    BB: BB,
    HY: HY,
    CB: CB,
    CL: CL,
    CP: CP,
    EX: EX,
    IN: IN,
    NS: NS,
    OP: OP,
    QU: QU,
    IS: IS,
    NU: NU,
    PO: PO,
    PR: PR,
    SY: SY,
    AI: AI,
    AL: AL,
    CJ: CJ,
    EB: EB,
    EM: EM,
    H2: H2,
    H3: H3,
    HL: HL,
    ID: ID,
    JL: JL,
    JV: JV,
    JT: JT,
    RI: RI,
    SA: SA,
    XX: XX
};

var BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';
var UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);

var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR, LF, NL];
var SPACE = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];

var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';

    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        } else {
            categories.push(false);
        }

        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indicies.push(index);
                return types.push(CB);
            }
        }

        if (classType === CM || classType === ZWJ) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indicies.push(index);
                return types.push(AL);
            }

            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indicies.push(indicies[index - 1]);
                return types.push(prev);
            }
            indicies.push(index);
            return types.push(AL);
        }

        indicies.push(index);

        if (classType === CJ) {
            return types.push(lineBreak === 'strict' ? NS : ID);
        }

        if (classType === SA) {
            return types.push(AL);
        }

        if (classType === AI) {
            return types.push(AL);
        }

        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                return types.push(ID);
            } else {
                return types.push(AL);
            }
        }

        types.push(classType);
    });

    return [indicies, types, categories];
};

var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while (i <= classTypes.length) {
            i++;
            var next = classTypes[i];

            if (next === b) {
                return true;
            }

            if (next !== SP) {
                break;
            }
        }
    }

    if (current === SP) {
        var _i = currentIndex;

        while (_i > 0) {
            _i--;
            var prev = classTypes[_i];

            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var _next = classTypes[n];

                    if (_next === b) {
                        return true;
                    }

                    if (_next !== SP) {
                        break;
                    }
                }
            }

            if (prev !== SP) {
                break;
            }
        }
    }
    return false;
};

var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        } else {
            return type;
        }
    }
    return 0;
};

var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
        return BREAK_NOT_ALLOWED;
    }

    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
        return BREAK_NOT_ALLOWED;
    }

    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];

    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];

    if (current === CR && next === LF) {
        return BREAK_NOT_ALLOWED;
    }

    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
        return BREAK_MANDATORY;
    }

    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB7 Do not break before spaces or zero width space.
    if (SPACE.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
        return BREAK_ALLOWED;
    }

    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB18 Break after spaces.
    if (current === SP) {
        return BREAK_ALLOWED;
    }

    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
        return BREAK_ALLOWED;
    }

    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23 Do not break between digits and letters.
    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
        return BREAK_NOT_ALLOWED;
    }

    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
    // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU ||
    // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            } else {
                break;
            }
        }
    }

    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (_prevIndex >= 0) {
            var _type = classTypes[_prevIndex];
            if (_type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(_type) !== -1) {
                _prevIndex--;
            } else {
                break;
            }
        }
    }

    // LB26 Do not break a Korean syllable.
    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
        return BREAK_NOT_ALLOWED;
    }

    // LB27 Treat a Korean Syllable Block the same as ID.
    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
        return BREAK_NOT_ALLOWED;
    }

    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI && next === RI) {
        var i = indicies[currentIndex];
        var count = 1;
        while (i > 0) {
            i--;
            if (classTypes[i] === RI) {
                count++;
            } else {
                break;
            }
        }
        if (count % 2 !== 0) {
            return BREAK_NOT_ALLOWED;
        }
    }

    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
        return BREAK_NOT_ALLOWED;
    }

    return BREAK_ALLOWED;
};

var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
    // LB2 Never break at the start of text.
    if (index === 0) {
        return BREAK_NOT_ALLOWED;
    }

    // LB3 Always break at the end of text.
    if (index >= codePoints.length) {
        return BREAK_MANDATORY;
    }

    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),
        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),
        indicies = _codePointsToCharacte2[0],
        classTypes = _codePointsToCharacte2[1];

    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
};

var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }

    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),
        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),
        indicies = _codePointsToCharacte4[0],
        classTypes = _codePointsToCharacte4[1],
        isLetterNumber = _codePointsToCharacte4[2];

    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) {
            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
        });
    }

    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {
        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : null;

    return [indicies, classTypes, forbiddenBreakpoints];
};

var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);
    var output = BREAK_NOT_ALLOWED;

    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),
        indicies = _cssFormattedClasses2[0],
        classTypes = _cssFormattedClasses2[1],
        forbiddenBreakpoints = _cssFormattedClasses2[2];

    codePoints.forEach(function (codePoint, i) {
        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
    });

    return output;
};

var Break = function () {
    function Break(codePoints, lineBreak, start, end) {
        _classCallCheck(this, Break);

        this._codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }

    _createClass(Break, [{
        key: 'slice',
        value: function slice() {
            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
        }
    }]);

    return Break;
}();

var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);

    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),
        indicies = _cssFormattedClasses4[0],
        classTypes = _cssFormattedClasses4[1],
        forbiddenBreakpoints = _cssFormattedClasses4[2];

    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;

    return {
        next: function next() {
            if (nextIndex >= length) {
                return { done: true };
            }
            var lineBreak = BREAK_NOT_ALLOWED;
            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}

            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }

            return { done: true };
        }
    };
};

/***/ }),

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(1181);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;

/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;

/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;

/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;

/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;

/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;

var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;

/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;

/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
    var buffer = (0, _Util.decode)(base64);
    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);
    var headerLength = 24;

    var index = view16.slice(headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));

    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};

var Trie = exports.Trie = function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        _classCallCheck(this, Trie);

        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }

    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */


    _createClass(Trie, [{
        key: 'get',
        value: function get(codePoint) {
            var ix = void 0;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }

            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        }
    }]);

    return Trie;
}();

/***/ }),

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(1140);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function Circle(x, y, radius) {
    _classCallCheck(this, Circle);

    this.type = _Path.PATH.CIRCLE;
    this.x = x;
    this.y = y;
    this.radius = radius;
    if (false) {}
};

exports.default = Circle;

/***/ }),

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCounterText = exports.inlineListItemElement = exports.getListOwner = undefined;

var _Util = __webpack_require__(1148);

var _NodeContainer = __webpack_require__(1147);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(1175);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _listStyle = __webpack_require__(1163);

var _Unicode = __webpack_require__(1179);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Margin between the enumeration and the list item content
var MARGIN_RIGHT = 7;

var ancestorTypes = ['OL', 'UL', 'MENU'];

var getListOwner = exports.getListOwner = function getListOwner(container) {
    var parent = container.parent;
    if (!parent) {
        return null;
    }

    do {
        var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;
        if (isAncestor) {
            return parent;
        }
        parent = parent.parent;
    } while (parent);

    return container.parent;
};

var inlineListItemElement = exports.inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {
    var listStyle = container.style.listStyle;

    if (!listStyle) {
        return;
    }

    var style = node.ownerDocument.defaultView.getComputedStyle(node, null);
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    (0, _Util.copyCSSStyles)(style, wrapper);

    wrapper.style.position = 'absolute';
    wrapper.style.bottom = 'auto';
    wrapper.style.display = 'block';
    wrapper.style.letterSpacing = 'normal';

    switch (listStyle.listStylePosition) {
        case _listStyle.LIST_STYLE_POSITION.OUTSIDE:
            wrapper.style.left = 'auto';
            wrapper.style.right = node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT + 'px';
            wrapper.style.textAlign = 'right';
            break;
        case _listStyle.LIST_STYLE_POSITION.INSIDE:
            wrapper.style.left = container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width) + 'px';
            wrapper.style.right = 'auto';
            wrapper.style.textAlign = 'left';
            break;
    }

    var text = void 0;
    var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);
    var styleImage = listStyle.listStyleImage;
    if (styleImage) {
        if (styleImage.method === 'url') {
            var image = node.ownerDocument.createElement('img');
            image.src = styleImage.args[0];
            wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
            wrapper.style.width = 'auto';
            wrapper.style.height = 'auto';
            wrapper.appendChild(image);
        } else {
            var size = parseFloat(container.style.font.fontSize) * 0.5;
            wrapper.style.top = container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size + 'px';
            wrapper.style.width = size + 'px';
            wrapper.style.height = size + 'px';
            wrapper.style.backgroundImage = style.listStyleImage;
        }
    } else if (typeof container.listIndex === 'number') {
        text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));
        wrapper.appendChild(text);
        wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
    }

    // $FlowFixMe
    var body = node.ownerDocument.body;
    body.appendChild(wrapper);

    if (text) {
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    } else {
        // $FlowFixMe
        container.childNodes.push(new _NodeContainer2.default(wrapper, container, resourceLoader, 0));
    }
};

var ROMAN_UPPER = {
    integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
};

var ARMENIAN = {
    integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
};

var HEBREW = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
};

var GEORGIAN = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
};

var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
    if (value < min || value > max) {
        return createCounterText(value, fallback, suffix.length > 0);
    }

    return symbols.integers.reduce(function (string, integer, index) {
        while (value >= integer) {
            value -= integer;
            string += symbols.values[index];
        }
        return string;
    }, '') + suffix;
};

var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
    var string = '';

    do {
        if (!isNumeric) {
            value--;
        }
        string = resolver(value) + string;
        value /= codePointRangeLength;
    } while (value * codePointRangeLength >= codePointRangeLength);

    return string;
};

var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
    var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;

    return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
        return (0, _Unicode.fromCodePoint)(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
    }) + suffix);
};

var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';

    var codePointRangeLength = symbols.length;
    return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
        return symbols[Math.floor(codePoint % codePointRangeLength)];
    }) + suffix;
};

var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;

var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
    if (value < -9999 || value > 9999) {
        return createCounterText(value, _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
    }
    var tmp = Math.abs(value);
    var string = suffix;

    if (tmp === 0) {
        return numbers[0] + string;
    }

    for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
        var coefficient = tmp % 10;

        if (coefficient === 0 && (0, _Util.contains)(flags, CJK_ZEROS) && string !== '') {
            string = numbers[coefficient] + string;
        } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && (0, _Util.contains)(flags, CJK_HUNDRED_COEFFICIENTS)) {
            string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
        } else if (coefficient === 1 && digit > 0) {
            string = multipliers[digit - 1] + string;
        }
        tmp = Math.floor(tmp / 10);
    }

    return (value < 0 ? negativeSign : '') + string;
};

var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
var JAPANESE_NEGATIVE = 'マイナス';
var KOREAN_NEGATIVE = '마이너스 ';

var createCounterText = exports.createCounterText = function createCounterText(value, type, appendSuffix) {
    var defaultSuffix = appendSuffix ? '. ' : '';
    var cjkSuffix = appendSuffix ? '、' : '';
    var koreanSuffix = appendSuffix ? ', ' : '';
    switch (type) {
        case _listStyle.LIST_STYLE_TYPE.DISC:
            return '•';
        case _listStyle.LIST_STYLE_TYPE.CIRCLE:
            return '◦';
        case _listStyle.LIST_STYLE_TYPE.SQUARE:
            return '◾';
        case _listStyle.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
            var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
            return string.length < 4 ? '0' + string : string;
        case _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL:
            return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.UPPER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_GREEK:
            return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ALPHA:
            return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.UPPER_ALPHA:
            return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARABIC_INDIC:
            return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARMENIAN:
        case _listStyle.LIST_STYLE_TYPE.UPPER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.BENGALI:
            return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CAMBODIAN:
        case _listStyle.LIST_STYLE_TYPE.KHMER:
            return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
            return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
            return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
            return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_FORMAL:
            return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
            return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
            return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.DEVANAGARI:
            return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GEORGIAN:
            return createAdditiveCounter(value, 1, 19999, GEORGIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GUJARATI:
            return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GURMUKHI:
            return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HEBREW:
            return createAdditiveCounter(value, 1, 10999, HEBREW, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA:
            return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA_IROHA:
            return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
        case _listStyle.LIST_STYLE_TYPE.KANNADA:
            return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA:
            return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA_IROHA:
            return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LAO:
            return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MONGOLIAN:
            return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MYANMAR:
            return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ORIYA:
            return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.PERSIAN:
            return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TAMIL:
            return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TELUGU:
            return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.THAI:
            return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TIBETAN:
            return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.DECIMAL:
        default:
            return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
};

/***/ }),

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(1153);

var _Font = __webpack_require__(1188);

var _Gradient = __webpack_require__(1189);

var _TextContainer = __webpack_require__(1175);

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(1149);

var _border = __webpack_require__(1156);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
    function Renderer(target, options) {
        _classCallCheck(this, Renderer);

        this.target = target;
        this.options = options;
        target.render(options);
    }

    _createClass(Renderer, [{
        key: 'renderNode',
        value: function renderNode(container) {
            if (container.isVisible()) {
                this.renderNodeBackgroundAndBorders(container);
                this.renderNodeContent(container);
            }
        }
    }, {
        key: 'renderNodeContent',
        value: function renderNodeContent(container) {
            var _this = this;

            var callback = function callback() {
                if (container.childNodes.length) {
                    container.childNodes.forEach(function (child) {
                        if (child instanceof _TextContainer2.default) {
                            var style = child.parent.style;
                            _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);
                        } else {
                            _this.target.drawShape(child, container.style.color);
                        }
                    });
                }

                if (container.image) {
                    var _image = _this.options.imageStore.get(container.image);
                    if (_image) {
                        var contentBox = (0, _Bounds.calculateContentBox)(container.bounds, container.style.padding, container.style.border);
                        var _width = typeof _image.width === 'number' && _image.width > 0 ? _image.width : contentBox.width;
                        var _height = typeof _image.height === 'number' && _image.height > 0 ? _image.height : contentBox.height;
                        if (_width > 0 && _height > 0) {
                            _this.target.clip([(0, _Bounds.calculatePaddingBoxPath)(container.curvedBounds)], function () {
                                _this.target.drawImage(_image, new _Bounds.Bounds(0, 0, _width, _height), contentBox);
                            });
                        }
                    }
                }
            };
            var paths = container.getClipPaths();
            if (paths.length) {
                this.target.clip(paths, callback);
            } else {
                callback();
            }
        }
    }, {
        key: 'renderNodeBackgroundAndBorders',
        value: function renderNodeBackgroundAndBorders(container) {
            var _this2 = this;

            var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;

            var hasRenderableBorders = container.style.border.some(function (border) {
                return border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent();
            });

            var callback = function callback() {
                var backgroundPaintingArea = (0, _background.calculateBackgroungPaintingArea)(container.curvedBounds, container.style.background.backgroundClip);

                if (HAS_BACKGROUND) {
                    _this2.target.clip([backgroundPaintingArea], function () {
                        if (!container.style.background.backgroundColor.isTransparent()) {
                            _this2.target.fill(container.style.background.backgroundColor);
                        }

                        _this2.renderBackgroundImage(container);
                    });
                }

                container.style.border.forEach(function (border, side) {
                    if (border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent()) {
                        _this2.renderBorder(border, side, container.curvedBounds);
                    }
                });
            };

            if (HAS_BACKGROUND || hasRenderableBorders) {
                var paths = container.parent ? container.parent.getClipPaths() : [];
                if (paths.length) {
                    this.target.clip(paths, callback);
                } else {
                    callback();
                }
            }
        }
    }, {
        key: 'renderBackgroundImage',
        value: function renderBackgroundImage(container) {
            var _this3 = this;

            container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {
                if (backgroundImage.source.method === 'url' && backgroundImage.source.args.length) {
                    _this3.renderBackgroundRepeat(container, backgroundImage);
                } else if (/gradient/i.test(backgroundImage.source.method)) {
                    _this3.renderBackgroundGradient(container, backgroundImage);
                }
            });
        }
    }, {
        key: 'renderBackgroundRepeat',
        value: function renderBackgroundRepeat(container, background) {
            var image = this.options.imageStore.get(background.source.args[0]);
            if (image) {
                var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                var backgroundImageSize = (0, _background.calculateBackgroundSize)(background, image, backgroundPositioningArea);
                var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
                var _path = (0, _background.calculateBackgroundRepeatPath)(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);

                var _offsetX = Math.round(backgroundPositioningArea.left + position.x);
                var _offsetY = Math.round(backgroundPositioningArea.top + position.y);
                this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);
            }
        }
    }, {
        key: 'renderBackgroundGradient',
        value: function renderBackgroundGradient(container, background) {
            var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
            var backgroundImageSize = (0, _background.calculateGradientBackgroundSize)(background, backgroundPositioningArea);
            var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
            var gradientBounds = new _Bounds.Bounds(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);

            var gradient = (0, _Gradient.parseGradient)(container, background.source, gradientBounds);
            if (gradient) {
                switch (gradient.type) {
                    case _Gradient.GRADIENT_TYPE.LINEAR_GRADIENT:
                        // $FlowFixMe
                        this.target.renderLinearGradient(gradientBounds, gradient);
                        break;
                    case _Gradient.GRADIENT_TYPE.RADIAL_GRADIENT:
                        // $FlowFixMe
                        this.target.renderRadialGradient(gradientBounds, gradient);
                        break;
                }
            }
        }
    }, {
        key: 'renderBorder',
        value: function renderBorder(border, side, curvePoints) {
            this.target.drawShape((0, _Bounds.parsePathForBorder)(curvePoints, side), border.borderColor);
        }
    }, {
        key: 'renderStack',
        value: function renderStack(stack) {
            var _this4 = this;

            if (stack.container.isVisible()) {
                var _opacity = stack.getOpacity();
                if (_opacity !== this._opacity) {
                    this.target.setOpacity(stack.getOpacity());
                    this._opacity = _opacity;
                }

                var _transform = stack.container.style.transform;
                if (_transform !== null) {
                    this.target.transform(stack.container.bounds.left + _transform.transformOrigin[0].value, stack.container.bounds.top + _transform.transformOrigin[1].value, _transform.transform, function () {
                        return _this4.renderStackContent(stack);
                    });
                } else {
                    this.renderStackContent(stack);
                }
            }
        }
    }, {
        key: 'renderStackContent',
        value: function renderStackContent(stack) {
            var _splitStackingContext = splitStackingContexts(stack),
                _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),
                negativeZIndex = _splitStackingContext2[0],
                zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],
                positiveZIndex = _splitStackingContext2[2],
                nonPositionedFloats = _splitStackingContext2[3],
                nonPositionedInlineLevel = _splitStackingContext2[4];

            var _splitDescendants = splitDescendants(stack),
                _splitDescendants2 = _slicedToArray(_splitDescendants, 2),
                inlineLevel = _splitDescendants2[0],
                nonInlineLevel = _splitDescendants2[1];

            // https://www.w3.org/TR/css-position-3/#painting-order
            // 1. the background and borders of the element forming the stacking context.


            this.renderNodeBackgroundAndBorders(stack.container);
            // 2. the child stacking contexts with negative stack levels (most negative first).
            negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
            this.renderNodeContent(stack.container);
            nonInlineLevel.forEach(this.renderNode, this);
            // 4. All non-positioned floating descendants, in tree order. For each one of these,
            // treat the element as if it created a new stacking context, but any positioned descendants and descendants
            // which actually create a new stacking context should be considered part of the parent stacking context,
            // not this new one.
            nonPositionedFloats.forEach(this.renderStack, this);
            // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
            nonPositionedInlineLevel.forEach(this.renderStack, this);
            inlineLevel.forEach(this.renderNode, this);
            // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:
            //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.
            //  For those with 'z-index: auto', treat the element as if it created a new stacking context,
            //  but any positioned descendants and descendants which actually create a new stacking context should be
            //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',
            //  treat the stacking context generated atomically.
            //
            //  All opacity descendants with opacity less than 1
            //
            //  All transform descendants with transform other than none
            zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this);
            // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index
            // order (smallest first) then tree order.
            positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
        }
    }, {
        key: 'render',
        value: function render(stack) {
            var _this5 = this;

            if (this.options.backgroundColor) {
                this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);
            }
            this.renderStack(stack);
            var target = this.target.getTarget();
            if (false) {}
            return target;
        }
    }]);

    return Renderer;
}();

exports.default = Renderer;


var splitDescendants = function splitDescendants(stack) {
    var inlineLevel = [];
    var nonInlineLevel = [];

    var length = stack.children.length;
    for (var i = 0; i < length; i++) {
        var child = stack.children[i];
        if (child.isInlineLevel()) {
            inlineLevel.push(child);
        } else {
            nonInlineLevel.push(child);
        }
    }
    return [inlineLevel, nonInlineLevel];
};

var splitStackingContexts = function splitStackingContexts(stack) {
    var negativeZIndex = [];
    var zeroOrAutoZIndexOrTransformedOrOpacity = [];
    var positiveZIndex = [];
    var nonPositionedFloats = [];
    var nonPositionedInlineLevel = [];
    var length = stack.contexts.length;
    for (var i = 0; i < length; i++) {
        var child = stack.contexts[i];
        if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {
            if (child.container.style.zIndex.order < 0) {
                negativeZIndex.push(child);
            } else if (child.container.style.zIndex.order > 0) {
                positiveZIndex.push(child);
            } else {
                zeroOrAutoZIndexOrTransformedOrOpacity.push(child);
            }
        } else {
            if (child.container.isFloating()) {
                nonPositionedFloats.push(child);
            } else {
                nonPositionedInlineLevel.push(child);
            }
        }
    }
    return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];
};

var sortByZIndex = function sortByZIndex(a, b) {
    if (a.container.style.zIndex.order > b.container.style.zIndex.order) {
        return 1;
    } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {
        return -1;
    }

    return a.container.index > b.container.index ? 1 : -1;
};

/***/ }),

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FontMetrics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(1148);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAMPLE_TEXT = 'Hidden Text';

var FontMetrics = exports.FontMetrics = function () {
    function FontMetrics(document) {
        _classCallCheck(this, FontMetrics);

        this._data = {};
        this._document = document;
    }

    _createClass(FontMetrics, [{
        key: '_parseMetrics',
        value: function _parseMetrics(font) {
            var container = this._document.createElement('div');
            var img = this._document.createElement('img');
            var span = this._document.createElement('span');

            var body = this._document.body;
            if (!body) {
                throw new Error( false ? undefined : '');
            }

            container.style.visibility = 'hidden';
            container.style.fontFamily = font.fontFamily;
            container.style.fontSize = font.fontSize;
            container.style.margin = '0';
            container.style.padding = '0';

            body.appendChild(container);

            img.src = _Util.SMALL_IMAGE;
            img.width = 1;
            img.height = 1;

            img.style.margin = '0';
            img.style.padding = '0';
            img.style.verticalAlign = 'baseline';

            span.style.fontFamily = font.fontFamily;
            span.style.fontSize = font.fontSize;
            span.style.margin = '0';
            span.style.padding = '0';

            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;

            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));

            container.style.lineHeight = 'normal';
            img.style.verticalAlign = 'super';

            var middle = img.offsetTop - container.offsetTop + 2;

            body.removeChild(container);

            return { baseline: baseline, middle: middle };
        }
    }, {
        key: 'getMetrics',
        value: function getMetrics(font) {
            var key = font.fontFamily + ' ' + font.fontSize;
            if (this._data[key] === undefined) {
                this._data[key] = this._parseMetrics(font);
            }

            return this._data[key];
        }
    }]);

    return FontMetrics;
}();

/***/ }),

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformWebkitRadialGradientArgs = exports.parseGradient = exports.RadialGradient = exports.LinearGradient = exports.RADIAL_GRADIENT_SHAPE = exports.GRADIENT_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _NodeContainer = __webpack_require__(1147);

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _Angle = __webpack_require__(1190);

var _Color = __webpack_require__(1142);

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(1150);

var _Length2 = _interopRequireDefault(_Length);

var _Util = __webpack_require__(1148);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;
var PERCENTAGE_ANGLES = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i;
var ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;
var FROM_TO_COLORSTOP = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i;
var RADIAL_SHAPE_DEFINITION = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i;

var GRADIENT_TYPE = exports.GRADIENT_TYPE = {
    LINEAR_GRADIENT: 0,
    RADIAL_GRADIENT: 1
};

var RADIAL_GRADIENT_SHAPE = exports.RADIAL_GRADIENT_SHAPE = {
    CIRCLE: 0,
    ELLIPSE: 1
};

var LENGTH_FOR_POSITION = {
    left: new _Length2.default('0%'),
    top: new _Length2.default('0%'),
    center: new _Length2.default('50%'),
    right: new _Length2.default('100%'),
    bottom: new _Length2.default('100%')
};

var LinearGradient = exports.LinearGradient = function LinearGradient(colorStops, direction) {
    _classCallCheck(this, LinearGradient);

    this.type = GRADIENT_TYPE.LINEAR_GRADIENT;
    this.colorStops = colorStops;
    this.direction = direction;
};

var RadialGradient = exports.RadialGradient = function RadialGradient(colorStops, shape, center, radius) {
    _classCallCheck(this, RadialGradient);

    this.type = GRADIENT_TYPE.RADIAL_GRADIENT;
    this.colorStops = colorStops;
    this.shape = shape;
    this.center = center;
    this.radius = radius;
};

var parseGradient = exports.parseGradient = function parseGradient(container, _ref, bounds) {
    var args = _ref.args,
        method = _ref.method,
        prefix = _ref.prefix;

    if (method === 'linear-gradient') {
        return parseLinearGradient(args, bounds, !!prefix);
    } else if (method === 'gradient' && args[0] === 'linear') {
        // TODO handle correct angle
        return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);
    } else if (method === 'radial-gradient') {
        return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);
    } else if (method === 'gradient' && args[0] === 'radial') {
        return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);
    }
};

var parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {
    var colorStops = [];

    for (var i = firstColorStopIndex; i < args.length; i++) {
        var value = args[i];
        var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);
        var lastSpaceIndex = value.lastIndexOf(' ');
        var _color = new _Color2.default(HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);
        var _stop = HAS_LENGTH ? new _Length2.default(value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length2.default('0%') : i === args.length - 1 ? new _Length2.default('100%') : null;
        colorStops.push({ color: _color, stop: _stop });
    }

    var absoluteValuedColorStops = colorStops.map(function (_ref2) {
        var color = _ref2.color,
            stop = _ref2.stop;

        var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;

        return {
            color: color,
            // $FlowFixMe
            stop: absoluteStop
        };
    });

    var previousColorStop = absoluteValuedColorStops[0].stop;
    for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {
        if (previousColorStop !== null) {
            var _stop2 = absoluteValuedColorStops[_i].stop;
            if (_stop2 === null) {
                var n = _i;
                while (absoluteValuedColorStops[n].stop === null) {
                    n++;
                }
                var steps = n - _i + 1;
                var nextColorStep = absoluteValuedColorStops[n].stop;
                var stepSize = (nextColorStep - previousColorStop) / steps;
                for (; _i < n; _i++) {
                    previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;
                }
            } else {
                previousColorStop = _stop2;
            }
        }
    }

    return absoluteValuedColorStops;
};

var parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {
    var angle = (0, _Angle.parseAngle)(args[0]);
    var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);
    var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);
    var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection(
    // if there is a prefix, the 0° angle points due East (instead of North per W3C)
    hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);
    var firstColorStopIndex = HAS_DIRECTION ? 1 : 0;

    // TODO: Fix some inaccuracy with color stops with px values
    var lineLength = Math.min((0, _Util.distance)(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);

    return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);
};

var parseRadialGradient = function parseRadialGradient(container, args, bounds) {
    var m = args[0].match(RADIAL_SHAPE_DEFINITION);
    var shape = m && (m[1] === 'circle' || // explicit shape specification
    m[3] !== undefined && m[5] === undefined) // only one radius coordinate
    ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;
    var radius = {};
    var center = {};

    if (m) {
        // Radius
        if (m[3] !== undefined) {
            radius.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[3], m[4]).getAbsoluteValue(bounds.width);
        }

        if (m[5] !== undefined) {
            radius.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[5], m[6]).getAbsoluteValue(bounds.height);
        }

        // Position
        if (m[7]) {
            center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];
        } else if (m[8] !== undefined) {
            center.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[8], m[9]);
        }

        if (m[10]) {
            center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];
        } else if (m[11] !== undefined) {
            center.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[11], m[12]);
        }
    }

    var gradientCenter = {
        x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),
        y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)
    };
    var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);

    return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);
};

var calculateGradientDirection = function calculateGradientDirection(radian, bounds) {
    var width = bounds.width;
    var height = bounds.height;
    var HALF_WIDTH = width * 0.5;
    var HALF_HEIGHT = height * 0.5;
    var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    var HALF_LINE_LENGTH = lineLength / 2;

    var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;
    var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;
    var x1 = width - x0;
    var y1 = height - y0;

    return { x0: x0, x1: x1, y0: y0, y1: y1 };
};

var parseTopRight = function parseTopRight(bounds) {
    return Math.acos(bounds.width / 2 / ((0, _Util.distance)(bounds.width, bounds.height) / 2));
};

var parseSideOrCorner = function parseSideOrCorner(side, bounds) {
    switch (side) {
        case 'bottom':
        case 'to top':
            return calculateGradientDirection(0, bounds);
        case 'left':
        case 'to right':
            return calculateGradientDirection(Math.PI / 2, bounds);
        case 'right':
        case 'to left':
            return calculateGradientDirection(3 * Math.PI / 2, bounds);
        case 'top right':
        case 'right top':
        case 'to bottom left':
        case 'to left bottom':
            return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);
        case 'top left':
        case 'left top':
        case 'to bottom right':
        case 'to right bottom':
            return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);
        case 'bottom left':
        case 'left bottom':
        case 'to top right':
        case 'to right top':
            return calculateGradientDirection(parseTopRight(bounds), bounds);
        case 'bottom right':
        case 'right bottom':
        case 'to top left':
        case 'to left top':
            return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);
        case 'top':
        case 'to bottom':
        default:
            return calculateGradientDirection(Math.PI, bounds);
    }
};

var parsePercentageAngle = function parsePercentageAngle(angle, bounds) {
    var _angle$split$map = angle.split(' ').map(parseFloat),
        _angle$split$map2 = _slicedToArray(_angle$split$map, 2),
        left = _angle$split$map2[0],
        top = _angle$split$map2[1];

    var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);

    return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);
};

var findCorner = function findCorner(bounds, x, y, closest) {
    var corners = [{ x: 0, y: 0 }, { x: 0, y: bounds.height }, { x: bounds.width, y: 0 }, { x: bounds.width, y: bounds.height }];

    // $FlowFixMe
    return corners.reduce(function (stat, corner) {
        var d = (0, _Util.distance)(x - corner.x, y - corner.y);
        if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
            return {
                optimumCorner: corner,
                optimumDistance: d
            };
        }

        return stat;
    }, {
        optimumDistance: closest ? Infinity : -Infinity,
        optimumCorner: null
    }).optimumCorner;
};

var calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {
    var x = center.x;
    var y = center.y;
    var rx = 0;
    var ry = 0;

    switch (extent) {
        case 'closest-side':
            // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, it exactly meets the closest side in each dimension.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'closest-corner':
            // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));
                var corner = findCorner(bounds, x, y, true);
                rx = (0, _Util.distance)(corner.x - x, (corner.y - y) / c);
                ry = c * rx;
            }
            break;

        case 'farthest-side':
            // Same as closest-side, except the ending shape is sized based on the farthest side(s)
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'farthest-corner':
            // Same as closest-corner, except the ending shape is sized based on the farthest corner.
            // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));
                var _corner = findCorner(bounds, x, y, false);
                rx = (0, _Util.distance)(_corner.x - x, (_corner.y - y) / _c);
                ry = _c * rx;
            }
            break;

        default:
            // pixel or percentage values
            rx = radius.x || 0;
            ry = radius.y !== undefined ? radius.y : rx;
            break;
    }

    return {
        x: rx,
        y: ry
    };
};

var transformWebkitRadialGradientArgs = exports.transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {
    var shape = '';
    var radius = '';
    var extent = '';
    var position = '';
    var idx = 0;

    var POSITION = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i;
    var SHAPE_AND_EXTENT = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;
    var RADIUS = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i;

    var matchStartPosition = args[idx].match(POSITION);
    if (matchStartPosition) {
        idx++;
    }

    var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);
    if (matchShapeExtent) {
        shape = matchShapeExtent[1] || '';
        extent = matchShapeExtent[2] || '';
        if (extent === 'contain') {
            extent = 'closest-side';
        } else if (extent === 'cover') {
            extent = 'farthest-corner';
        }
        idx++;
    }

    var matchStartRadius = args[idx].match(RADIUS);
    if (matchStartRadius) {
        idx++;
    }

    var matchEndPosition = args[idx].match(POSITION);
    if (matchEndPosition) {
        idx++;
    }

    var matchEndRadius = args[idx].match(RADIUS);
    if (matchEndRadius) {
        idx++;
    }

    var matchPosition = matchEndPosition || matchStartPosition;
    if (matchPosition && matchPosition[1]) {
        position = matchPosition[1] + (/^\d+$/.test(matchPosition[1]) ? 'px' : '');
        if (matchPosition[2]) {
            position += ' ' + matchPosition[2] + (/^\d+$/.test(matchPosition[2]) ? 'px' : '');
        }
    }

    var matchRadius = matchEndRadius || matchStartRadius;
    if (matchRadius) {
        radius = matchRadius[0];
        if (!matchRadius[1]) {
            radius += 'px';
        }
    }

    if (position && !shape && !radius && !extent) {
        radius = position;
        position = '';
    }

    if (position) {
        position = 'at ' + position;
    }

    return [[shape, extent, radius, position].filter(function (s) {
        return !!s;
    }).join(' ')].concat(args.slice(idx));
};

var transformObsoleteColorStops = function transformObsoleteColorStops(args) {
    return args.map(function (color) {
        return color.match(FROM_TO_COLORSTOP);
    })
    // $FlowFixMe
    .map(function (v, index) {
        if (!v) {
            return args[index];
        }

        switch (v[1]) {
            case 'from':
                return v[4] + ' 0%';
            case 'to':
                return v[4] + ' 100%';
            case 'color-stop':
                if (v[3] === '%') {
                    return v[4] + ' ' + v[2];
                }
                return v[4] + ' ' + parseFloat(v[2]) * 100 + '%';
        }
    });
};

/***/ }),

/***/ 1190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ANGLE = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;

var parseAngle = exports.parseAngle = function parseAngle(angle) {
    var match = angle.match(ANGLE);

    if (match) {
        var value = parseFloat(match[1]);
        switch (match[2].toLowerCase()) {
            case 'deg':
                return Math.PI * value / 180;
            case 'grad':
                return Math.PI / 200 * value;
            case 'rad':
                return value;
            case 'turn':
                return Math.PI * 2 * value;
        }
    }

    return null;
};

/***/ }),

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneWindow = exports.DocumentCloner = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(1153);

var _Proxy = __webpack_require__(1192);

var _ResourceLoader = __webpack_require__(1193);

var _ResourceLoader2 = _interopRequireDefault(_ResourceLoader);

var _Util = __webpack_require__(1148);

var _background = __webpack_require__(1149);

var _CanvasRenderer = __webpack_require__(1139);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _PseudoNodeContent = __webpack_require__(1194);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';

var DocumentCloner = exports.DocumentCloner = function () {
    function DocumentCloner(element, options, logger, copyInline, renderer) {
        _classCallCheck(this, DocumentCloner);

        this.referenceElement = element;
        this.scrolledElements = [];
        this.copyStyles = copyInline;
        this.inlineImages = copyInline;
        this.logger = logger;
        this.options = options;
        this.renderer = renderer;
        this.resourceLoader = new _ResourceLoader2.default(options, logger, window);
        this.pseudoContentData = {
            counters: {},
            quoteDepth: 0
        };
        // $FlowFixMe
        this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
    }

    _createClass(DocumentCloner, [{
        key: 'inlineAllImages',
        value: function inlineAllImages(node) {
            var _this = this;

            if (this.inlineImages && node) {
                var style = node.style;
                Promise.all((0, _background.parseBackgroundImage)(style.backgroundImage).map(function (backgroundImage) {
                    if (backgroundImage.method === 'url') {
                        return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {
                            return img && typeof img.src === 'string' ? 'url("' + img.src + '")' : 'none';
                        }).catch(function (e) {
                            if (false) {}
                        });
                    }
                    return Promise.resolve('' + backgroundImage.prefix + backgroundImage.method + '(' + backgroundImage.args.join(',') + ')');
                })).then(function (backgroundImages) {
                    if (backgroundImages.length > 1) {
                        // TODO Multiple backgrounds somehow broken in Chrome
                        style.backgroundColor = '';
                    }
                    style.backgroundImage = backgroundImages.join(',');
                });

                if (node instanceof HTMLImageElement) {
                    this.resourceLoader.inlineImage(node.src).then(function (img) {
                        if (img && node instanceof HTMLImageElement && node.parentNode) {
                            var parentNode = node.parentNode;
                            var clonedChild = (0, _Util.copyCSSStyles)(node.style, img.cloneNode(false));
                            parentNode.replaceChild(clonedChild, node);
                        }
                    }).catch(function (e) {
                        if (false) {}
                    });
                }
            }
        }
    }, {
        key: 'inlineFonts',
        value: function inlineFonts(document) {
            var _this2 = this;

            return Promise.all(Array.from(document.styleSheets).map(function (sheet) {
                if (sheet.href) {
                    return fetch(sheet.href).then(function (res) {
                        return res.text();
                    }).then(function (text) {
                        return createStyleSheetFontsFromText(text, sheet.href);
                    }).catch(function (e) {
                        if (false) {}
                        return [];
                    });
                }
                return getSheetFonts(sheet, document);
            })).then(function (fonts) {
                return fonts.reduce(function (acc, font) {
                    return acc.concat(font);
                }, []);
            }).then(function (fonts) {
                return Promise.all(fonts.map(function (font) {
                    return fetch(font.formats[0].src).then(function (response) {
                        return response.blob();
                    }).then(function (blob) {
                        return new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.onerror = reject;
                            reader.onload = function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            };
                            reader.readAsDataURL(blob);
                        });
                    }).then(function (dataUri) {
                        font.fontFace.setProperty('src', 'url("' + dataUri + '")');
                        return '@font-face {' + font.fontFace.cssText + ' ';
                    });
                }));
            }).then(function (fontCss) {
                var style = document.createElement('style');
                style.textContent = fontCss.join('\n');
                _this2.documentElement.appendChild(style);
            });
        }
    }, {
        key: 'createElementClone',
        value: function createElementClone(node) {
            var _this3 = this;

            if (this.copyStyles && node instanceof HTMLCanvasElement) {
                var img = node.ownerDocument.createElement('img');
                try {
                    img.src = node.toDataURL();
                    return img;
                } catch (e) {
                    if (false) {}
                }
            }

            if (node instanceof HTMLIFrameElement) {
                var tempIframe = node.cloneNode(false);
                var iframeKey = generateIframeKey();
                tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);

                var _parseBounds = (0, _Bounds.parseBounds)(node, 0, 0),
                    width = _parseBounds.width,
                    height = _parseBounds.height;

                this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {
                    return _this3.renderer(documentElement, {
                        async: _this3.options.async,
                        allowTaint: _this3.options.allowTaint,
                        backgroundColor: '#ffffff',
                        canvas: null,
                        imageTimeout: _this3.options.imageTimeout,
                        logging: _this3.options.logging,
                        proxy: _this3.options.proxy,
                        removeContainer: _this3.options.removeContainer,
                        scale: _this3.options.scale,
                        foreignObjectRendering: _this3.options.foreignObjectRendering,
                        useCORS: _this3.options.useCORS,
                        target: new _CanvasRenderer2.default(),
                        width: width,
                        height: height,
                        x: 0,
                        y: 0,
                        windowWidth: documentElement.ownerDocument.defaultView.innerWidth,
                        windowHeight: documentElement.ownerDocument.defaultView.innerHeight,
                        scrollX: documentElement.ownerDocument.defaultView.pageXOffset,
                        scrollY: documentElement.ownerDocument.defaultView.pageYOffset
                    }, _this3.logger.child(iframeKey));
                }).then(function (canvas) {
                    return new Promise(function (resolve, reject) {
                        var iframeCanvas = document.createElement('img');
                        iframeCanvas.onload = function () {
                            return resolve(canvas);
                        };
                        iframeCanvas.onerror = reject;
                        iframeCanvas.src = canvas.toDataURL();
                        if (tempIframe.parentNode) {
                            tempIframe.parentNode.replaceChild((0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);
                        }
                    });
                });
                return tempIframe;
            }

            if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {
                var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {
                    try {
                        if (rule && rule.cssText) {
                            return css + rule.cssText;
                        }
                        return css;
                    } catch (err) {
                        _this3.logger.log('Unable to access cssText property', rule.name);
                        return css;
                    }
                }, '');
                var style = node.cloneNode(false);
                style.textContent = css;
                return style;
            }

            return node.cloneNode(false);
        }
    }, {
        key: 'cloneNode',
        value: function cloneNode(node) {
            var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);

            var window = node.ownerDocument.defaultView;
            var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;
            var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':before') : null;
            var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':after') : null;

            if (this.referenceElement === node && clone instanceof window.HTMLElement) {
                this.clonedReferenceElement = clone;
            }

            if (clone instanceof window.HTMLBodyElement) {
                createPseudoHideStyles(clone);
            }

            var counters = (0, _PseudoNodeContent.parseCounterReset)(style, this.pseudoContentData);
            var contentBefore = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleBefore, this.pseudoContentData);

            for (var child = node.firstChild; child; child = child.nextSibling) {
                if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== 'SCRIPT' &&
                // $FlowFixMe
                !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' ||
                // $FlowFixMe
                !this.options.ignoreElements(child))) {
                    if (!this.copyStyles || child.nodeName !== 'STYLE') {
                        clone.appendChild(this.cloneNode(child));
                    }
                }
            }

            var contentAfter = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleAfter, this.pseudoContentData);
            (0, _PseudoNodeContent.popCounters)(counters, this.pseudoContentData);

            if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {
                if (styleBefore) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));
                }
                if (styleAfter) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));
                }
                if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {
                    (0, _Util.copyCSSStyles)(style, clone);
                }
                this.inlineAllImages(clone);
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                    this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                switch (node.nodeName) {
                    case 'CANVAS':
                        if (!this.copyStyles) {
                            cloneCanvasContents(node, clone);
                        }
                        break;
                    case 'TEXTAREA':
                    case 'SELECT':
                        clone.value = node.value;
                        break;
                }
            }
            return clone;
        }
    }]);

    return DocumentCloner;
}();

var getSheetFonts = function getSheetFonts(sheet, document) {
    // $FlowFixMe
    return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {
        return rule.type === CSSRule.FONT_FACE_RULE;
    }).map(function (rule) {
        var src = (0, _background.parseBackgroundImage)(rule.style.getPropertyValue('src'));
        var formats = [];
        for (var i = 0; i < src.length; i++) {
            if (src[i].method === 'url' && src[i + 1] && src[i + 1].method === 'format') {
                var a = document.createElement('a');
                a.href = src[i].args[0];
                if (document.body) {
                    document.body.appendChild(a);
                }

                var font = {
                    src: a.href,
                    format: src[i + 1].args[0]
                };
                formats.push(font);
            }
        }

        return {
            // TODO select correct format for browser),

            formats: formats.filter(function (font) {
                return (/^woff/i.test(font.format)
                );
            }),
            fontFace: rule.style
        };
    }).filter(function (font) {
        return font.formats.length;
    });
};

var createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {
    var doc = document.implementation.createHTMLDocument('');
    var base = document.createElement('base');
    // $FlowFixMe
    base.href = baseHref;
    var style = document.createElement('style');

    style.textContent = text;
    if (doc.head) {
        doc.head.appendChild(base);
    }
    if (doc.body) {
        doc.body.appendChild(style);
    }

    return style.sheet ? getSheetFonts(style.sheet, doc) : [];
};

var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
        ownerDocument.defaultView.scrollTo(x, y);
    }
};

var cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {
    try {
        if (clonedCanvas) {
            clonedCanvas.width = canvas.width;
            clonedCanvas.height = canvas.height;
            var ctx = canvas.getContext('2d');
            var clonedCtx = clonedCanvas.getContext('2d');
            if (ctx) {
                clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
            } else {
                clonedCtx.drawImage(canvas, 0, 0);
            }
        }
    } catch (e) {}
};

var inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return;
    }

    var anonymousReplacedElement = clone.ownerDocument.createElement('html2canvaspseudoelement');
    (0, _Util.copyCSSStyles)(style, anonymousReplacedElement);

    if (contentItems) {
        var len = contentItems.length;
        for (var i = 0; i < len; i++) {
            var item = contentItems[i];
            switch (item.type) {
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                    var img = clone.ownerDocument.createElement('img');
                    img.src = (0, _background.parseBackgroundImage)('url(' + item.value + ')')[0].args[0];
                    img.style.opacity = '1';
                    anonymousReplacedElement.appendChild(img);
                    break;
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                    anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));
                    break;
            }
        }
    }

    anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    clone.className += pseudoElt === PSEUDO_BEFORE ? ' ' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    if (pseudoElt === PSEUDO_BEFORE) {
        clone.insertBefore(anonymousReplacedElement, clone.firstChild);
    } else {
        clone.appendChild(anonymousReplacedElement);
    }

    return anonymousReplacedElement;
};

var URL_REGEXP = /^url\((.+)\)$/i;
var PSEUDO_BEFORE = ':before';
var PSEUDO_AFTER = ':after';
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';

var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';

var createPseudoHideStyles = function createPseudoHideStyles(body) {
    createStyles(body, '.' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + '\n         .' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};

var createStyles = function createStyles(body, styles) {
    var style = body.ownerDocument.createElement('style');
    style.innerHTML = styles;
    body.appendChild(style);
};

var initNode = function initNode(_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        element = _ref2[0],
        x = _ref2[1],
        y = _ref2[2];

    element.scrollLeft = x;
    element.scrollTop = y;
};

var generateIframeKey = function generateIframeKey() {
    return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);
};

var DATA_URI_REGEXP = /^data:text\/(.+);(base64)?,(.*)$/i;

var getIframeDocumentElement = function getIframeDocumentElement(node, options) {
    try {
        return Promise.resolve(node.contentWindow.document.documentElement);
    } catch (e) {
        return options.proxy ? (0, _Proxy.Proxy)(node.src, options).then(function (html) {
            var match = html.match(DATA_URI_REGEXP);
            if (!match) {
                return Promise.reject();
            }

            return match[2] === 'base64' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);
        }).then(function (html) {
            return createIframeContainer(node.ownerDocument, (0, _Bounds.parseBounds)(node, 0, 0)).then(function (cloneIframeContainer) {
                var cloneWindow = cloneIframeContainer.contentWindow;
                var documentClone = cloneWindow.document;

                documentClone.open();
                documentClone.write(html);
                var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
                    return documentClone.documentElement;
                });

                documentClone.close();
                return iframeLoad;
            });
        }) : Promise.reject();
    }
};

var createIframeContainer = function createIframeContainer(ownerDocument, bounds) {
    var cloneIframeContainer = ownerDocument.createElement('iframe');

    cloneIframeContainer.className = 'html2canvas-container';
    cloneIframeContainer.style.visibility = 'hidden';
    cloneIframeContainer.style.position = 'fixed';
    cloneIframeContainer.style.left = '-10000px';
    cloneIframeContainer.style.top = '0px';
    cloneIframeContainer.style.border = '0';
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
    if (!ownerDocument.body) {
        return Promise.reject( false ? undefined : '');
    }

    ownerDocument.body.appendChild(cloneIframeContainer);

    return Promise.resolve(cloneIframeContainer);
};

var iframeLoader = function iframeLoader(cloneIframeContainer) {
    var cloneWindow = cloneIframeContainer.contentWindow;
    var documentClone = cloneWindow.document;

    return new Promise(function (resolve, reject) {
        cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {
            var interval = setInterval(function () {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                    clearInterval(interval);
                    resolve(cloneIframeContainer);
                }
            }, 50);
        };
    });
};

var cloneWindow = exports.cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {
    var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);
    var scrollX = ownerDocument.defaultView.pageXOffset;
    var scrollY = ownerDocument.defaultView.pageYOffset;

    return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {
        var cloneWindow = cloneIframeContainer.contentWindow;
        var documentClone = cloneWindow.document;

        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */

        var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
            cloner.scrolledElements.forEach(initNode);
            cloneWindow.scrollTo(bounds.left, bounds.top);
            if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {
                documentClone.documentElement.style.top = -bounds.top + 'px';
                documentClone.documentElement.style.left = -bounds.left + 'px';
                documentClone.documentElement.style.position = 'absolute';
            }

            var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);

            var onclone = options.onclone;

            return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === 'function' ? Promise.resolve().then(function () {
                return onclone(documentClone);
            }).then(function () {
                return result;
            }) : result : Promise.reject( false ? undefined : '');
        });

        documentClone.open();
        documentClone.write(serializeDoctype(document.doctype) + '<html></html>');
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);
        documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);
        documentClone.close();

        return iframeLoad;
    });
};

var serializeDoctype = function serializeDoctype(doctype) {
    var str = '';
    if (doctype) {
        str += '<!DOCTYPE ';
        if (doctype.name) {
            str += doctype.name;
        }

        if (doctype.internalSubset) {
            str += doctype.internalSubset;
        }

        if (doctype.publicId) {
            str += '"' + doctype.publicId + '"';
        }

        if (doctype.systemId) {
            str += '"' + doctype.systemId + '"';
        }

        str += '>';
    }

    return str;
};

/***/ }),

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Proxy = undefined;

var _Feature = __webpack_require__(1177);

var _Feature2 = _interopRequireDefault(_Feature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Proxy = exports.Proxy = function Proxy(src, options) {
    if (!options.proxy) {
        return Promise.reject( false ? undefined : null);
    }
    var proxy = options.proxy;

    return new Promise(function (resolve, reject) {
        var responseType = _Feature2.default.SUPPORT_CORS_XHR && _Feature2.default.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
        var xhr = _Feature2.default.SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();
        xhr.onload = function () {
            if (xhr instanceof XMLHttpRequest) {
                if (xhr.status === 200) {
                    if (responseType === 'text') {
                        resolve(xhr.response);
                    } else {
                        var reader = new FileReader();
                        // $FlowFixMe
                        reader.addEventListener('load', function () {
                            return resolve(reader.result);
                        }, false);
                        // $FlowFixMe
                        reader.addEventListener('error', function (e) {
                            return reject(e);
                        }, false);
                        reader.readAsDataURL(xhr.response);
                    }
                } else {
                    reject( false ? undefined : '');
                }
            } else {
                resolve(xhr.responseText);
            }
        };

        xhr.onerror = reject;
        xhr.open('GET', proxy + '?url=' + encodeURIComponent(src) + '&responseType=' + responseType);

        if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
            xhr.responseType = responseType;
        }

        if (options.imageTimeout) {
            var timeout = options.imageTimeout;
            xhr.timeout = timeout;
            xhr.ontimeout = function () {
                return reject( false ? undefined : '');
            };
        }

        xhr.send();
    });
};

/***/ }),

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResourceStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Feature = __webpack_require__(1177);

var _Feature2 = _interopRequireDefault(_Feature);

var _Proxy = __webpack_require__(1192);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceLoader = function () {
    function ResourceLoader(options, logger, window) {
        _classCallCheck(this, ResourceLoader);

        this.options = options;
        this._window = window;
        this.origin = this.getOrigin(window.location.href);
        this.cache = {};
        this.logger = logger;
        this._index = 0;
    }

    _createClass(ResourceLoader, [{
        key: 'loadImage',
        value: function loadImage(src) {
            var _this = this;

            if (this.hasResourceInCache(src)) {
                return src;
            }
            if (isBlobImage(src)) {
                this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);
                return src;
            }

            if (!isSVG(src) || _Feature2.default.SUPPORT_SVG_DRAWING) {
                if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {
                    return this.addImage(src, src, false);
                } else if (!this.isSameOrigin(src)) {
                    if (typeof this.options.proxy === 'string') {
                        this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                            return _loadImage(src, _this.options.imageTimeout || 0);
                        });
                        return src;
                    } else if (this.options.useCORS === true && _Feature2.default.SUPPORT_CORS_IMAGES) {
                        return this.addImage(src, src, true);
                    }
                }
            }
        }
    }, {
        key: 'inlineImage',
        value: function inlineImage(src) {
            var _this2 = this;

            if (isInlineImage(src)) {
                return _loadImage(src, this.options.imageTimeout || 0);
            }
            if (this.hasResourceInCache(src)) {
                return this.cache[src];
            }
            if (!this.isSameOrigin(src) && typeof this.options.proxy === 'string') {
                return this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                    return _loadImage(src, _this2.options.imageTimeout || 0);
                });
            }

            return this.xhrImage(src);
        }
    }, {
        key: 'xhrImage',
        value: function xhrImage(src) {
            var _this3 = this;

            this.cache[src] = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status !== 200) {
                            reject('Failed to fetch image ' + src.substring(0, 256) + ' with status code ' + xhr.status);
                        } else {
                            var reader = new FileReader();
                            reader.addEventListener('load', function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            }, false);
                            reader.addEventListener('error', function (e) {
                                return reject(e);
                            }, false);
                            reader.readAsDataURL(xhr.response);
                        }
                    }
                };
                xhr.responseType = 'blob';
                if (_this3.options.imageTimeout) {
                    var timeout = _this3.options.imageTimeout;
                    xhr.timeout = timeout;
                    xhr.ontimeout = function () {
                        return reject( false ? undefined : '');
                    };
                }
                xhr.open('GET', src, true);
                xhr.send();
            }).then(function (src) {
                return _loadImage(src, _this3.options.imageTimeout || 0);
            });

            return this.cache[src];
        }
    }, {
        key: 'loadCanvas',
        value: function loadCanvas(node) {
            var key = String(this._index++);
            this.cache[key] = Promise.resolve(node);
            return key;
        }
    }, {
        key: 'hasResourceInCache',
        value: function hasResourceInCache(key) {
            return typeof this.cache[key] !== 'undefined';
        }
    }, {
        key: 'addImage',
        value: function addImage(key, src, useCORS) {
            var _this4 = this;

            if (false) {}

            var imageLoadHandler = function imageLoadHandler(supportsDataImages) {
                return new Promise(function (resolve, reject) {
                    var img = new Image();
                    img.onload = function () {
                        return resolve(img);
                    };
                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                    if (!supportsDataImages || useCORS) {
                        img.crossOrigin = 'anonymous';
                    }

                    img.onerror = reject;
                    img.src = src;
                    if (img.complete === true) {
                        // Inline XML images may fail to parse, throwing an Error later on
                        setTimeout(function () {
                            resolve(img);
                        }, 500);
                    }
                    if (_this4.options.imageTimeout) {
                        var timeout = _this4.options.imageTimeout;
                        setTimeout(function () {
                            return reject( false ? undefined : '');
                        }, timeout);
                    }
                });
            };

            this.cache[key] = isInlineBase64Image(src) && !isSVG(src) ? // $FlowFixMe
            _Feature2.default.SUPPORT_BASE64_DRAWING(src).then(imageLoadHandler) : imageLoadHandler(true);
            return key;
        }
    }, {
        key: 'isSameOrigin',
        value: function isSameOrigin(url) {
            return this.getOrigin(url) === this.origin;
        }
    }, {
        key: 'getOrigin',
        value: function getOrigin(url) {
            var link = this._link || (this._link = this._window.document.createElement('a'));
            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
            return link.protocol + link.hostname + link.port;
        }
    }, {
        key: 'ready',
        value: function ready() {
            var _this5 = this;

            var keys = Object.keys(this.cache);
            var values = keys.map(function (str) {
                return _this5.cache[str].catch(function (e) {
                    if (false) {}
                    return null;
                });
            });
            return Promise.all(values).then(function (images) {
                if (false) {}
                return new ResourceStore(keys, images);
            });
        }
    }]);

    return ResourceLoader;
}();

exports.default = ResourceLoader;

var ResourceStore = exports.ResourceStore = function () {
    function ResourceStore(keys, resources) {
        _classCallCheck(this, ResourceStore);

        this._keys = keys;
        this._resources = resources;
    }

    _createClass(ResourceStore, [{
        key: 'get',
        value: function get(key) {
            var index = this._keys.indexOf(key);
            return index === -1 ? null : this._resources[index];
        }
    }]);

    return ResourceStore;
}();

var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;

var isInlineImage = function isInlineImage(src) {
    return INLINE_IMG.test(src);
};
var isInlineBase64Image = function isInlineBase64Image(src) {
    return INLINE_BASE64.test(src);
};
var isBlobImage = function isBlobImage(src) {
    return src.substr(0, 4) === 'blob';
};

var isSVG = function isSVG(src) {
    return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
};

var _loadImage = function _loadImage(src, timeout) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;
        img.src = src;
        if (img.complete === true) {
            // Inline XML images may fail to parse, throwing an Error later on
            setTimeout(function () {
                resolve(img);
            }, 500);
        }
        if (timeout) {
            setTimeout(function () {
                return reject( false ? undefined : '');
            }, timeout);
        }
    });
};

/***/ }),

/***/ 1194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseContent = exports.resolvePseudoContent = exports.popCounters = exports.parseCounterReset = exports.TOKEN_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ListItem = __webpack_require__(1186);

var _listStyle = __webpack_require__(1163);

var PSEUDO_CONTENT_ITEM_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = {
    TEXT: 0,
    IMAGE: 1
};

var TOKEN_TYPE = exports.TOKEN_TYPE = {
    STRING: 0,
    ATTRIBUTE: 1,
    URL: 2,
    COUNTER: 3,
    COUNTERS: 4,
    OPENQUOTE: 5,
    CLOSEQUOTE: 6
};

var parseCounterReset = exports.parseCounterReset = function parseCounterReset(style, data) {
    if (!style || !style.counterReset || style.counterReset === 'none') {
        return [];
    }

    var counterNames = [];
    var counterResets = style.counterReset.split(/\s*,\s*/);
    var lenCounterResets = counterResets.length;

    for (var i = 0; i < lenCounterResets; i++) {
        var _counterResets$i$spli = counterResets[i].split(/\s+/),
            _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),
            counterName = _counterResets$i$spli2[0],
            initialValue = _counterResets$i$spli2[1];

        counterNames.push(counterName);
        var counter = data.counters[counterName];
        if (!counter) {
            counter = data.counters[counterName] = [];
        }
        counter.push(parseInt(initialValue || 0, 10));
    }

    return counterNames;
};

var popCounters = exports.popCounters = function popCounters(counterNames, data) {
    var lenCounters = counterNames.length;
    for (var i = 0; i < lenCounters; i++) {
        data.counters[counterNames[i]].pop();
    }
};

var resolvePseudoContent = exports.resolvePseudoContent = function resolvePseudoContent(node, style, data) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return null;
    }

    var tokens = parseContent(style.content);

    var len = tokens.length;
    var contentItems = [];
    var s = '';

    // increment the counter (if there is a "counter-increment" declaration)
    var counterIncrement = style.counterIncrement;
    if (counterIncrement && counterIncrement !== 'none') {
        var _counterIncrement$spl = counterIncrement.split(/\s+/),
            _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),
            counterName = _counterIncrement$spl2[0],
            incrementValue = _counterIncrement$spl2[1];

        var counter = data.counters[counterName];
        if (counter) {
            counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);
        }
    }

    // build the content string
    for (var i = 0; i < len; i++) {
        var token = tokens[i];
        switch (token.type) {
            case TOKEN_TYPE.STRING:
                s += token.value || '';
                break;

            case TOKEN_TYPE.ATTRIBUTE:
                if (node instanceof HTMLElement && token.value) {
                    s += node.getAttribute(token.value) || '';
                }
                break;

            case TOKEN_TYPE.COUNTER:
                var _counter = data.counters[token.name || ''];
                if (_counter) {
                    s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);
                }
                break;

            case TOKEN_TYPE.COUNTERS:
                var _counters = data.counters[token.name || ''];
                if (_counters) {
                    s += formatCounterValue(_counters, token.glue, token.format);
                }
                break;

            case TOKEN_TYPE.OPENQUOTE:
                s += getQuote(style, true, data.quoteDepth);
                data.quoteDepth++;
                break;

            case TOKEN_TYPE.CLOSEQUOTE:
                data.quoteDepth--;
                s += getQuote(style, false, data.quoteDepth);
                break;

            case TOKEN_TYPE.URL:
                if (s) {
                    contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
                    s = '';
                }
                contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE, value: token.value || '' });
                break;
        }
    }

    if (s) {
        contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
    }

    return contentItems;
};

var parseContent = exports.parseContent = function parseContent(content, cache) {
    if (cache && cache[content]) {
        return cache[content];
    }

    var tokens = [];
    var len = content.length;

    var isString = false;
    var isEscaped = false;
    var isFunction = false;
    var str = '';
    var functionName = '';
    var args = [];

    for (var i = 0; i < len; i++) {
        var c = content.charAt(i);

        switch (c) {
            case "'":
            case '"':
                if (isEscaped) {
                    str += c;
                } else {
                    isString = !isString;
                    if (!isFunction && !isString) {
                        tokens.push({ type: TOKEN_TYPE.STRING, value: str });
                        str = '';
                    }
                }
                break;

            case '\\':
                if (isEscaped) {
                    str += c;
                    isEscaped = false;
                } else {
                    isEscaped = true;
                }
                break;

            case '(':
                if (isString) {
                    str += c;
                } else {
                    isFunction = true;
                    functionName = str;
                    str = '';
                    args = [];
                }
                break;

            case ')':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    if (str) {
                        args.push(str);
                    }

                    switch (functionName) {
                        case 'attr':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.ATTRIBUTE, value: args[0] });
                            }
                            break;

                        case 'counter':
                            if (args.length > 0) {
                                var counter = {
                                    type: TOKEN_TYPE.COUNTER,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    counter.format = args[1];
                                }
                                tokens.push(counter);
                            }
                            break;

                        case 'counters':
                            if (args.length > 0) {
                                var _counters2 = {
                                    type: TOKEN_TYPE.COUNTERS,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    _counters2.glue = args[1];
                                }
                                if (args.length > 2) {
                                    _counters2.format = args[2];
                                }
                                tokens.push(_counters2);
                            }
                            break;

                        case 'url':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.URL, value: args[0] });
                            }
                            break;
                    }

                    isFunction = false;
                    str = '';
                }
                break;

            case ',':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    args.push(str);
                    str = '';
                }
                break;

            case ' ':
            case '\t':
                if (isString) {
                    str += c;
                } else if (str) {
                    addOtherToken(tokens, str);
                    str = '';
                }
                break;

            default:
                str += c;
        }

        if (c !== '\\') {
            isEscaped = false;
        }
    }

    if (str) {
        addOtherToken(tokens, str);
    }

    if (cache) {
        cache[content] = tokens;
    }

    return tokens;
};

var addOtherToken = function addOtherToken(tokens, identifier) {
    switch (identifier) {
        case 'open-quote':
            tokens.push({ type: TOKEN_TYPE.OPENQUOTE });
            break;
        case 'close-quote':
            tokens.push({ type: TOKEN_TYPE.CLOSEQUOTE });
            break;
    }
};

var getQuote = function getQuote(style, isOpening, quoteDepth) {
    var quotes = style.quotes ? style.quotes.split(/\s+/) : ["'\"'", "'\"'"];
    var idx = quoteDepth * 2;
    if (idx >= quotes.length) {
        idx = quotes.length - 2;
    }
    if (!isOpening) {
        ++idx;
    }
    return quotes[idx].replace(/^["']|["']$/g, '');
};

var formatCounterValue = function formatCounterValue(counter, glue, format) {
    var len = counter.length;
    var result = '';

    for (var i = 0; i < len; i++) {
        if (i > 0) {
            result += glue || '';
        }
        result += (0, _ListItem.createCounterText)(counter[i], (0, _listStyle.parseListStyleType)(format || 'decimal'), false);
    }

    return result;
};

/***/ }),

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(1209);
/*
Apps that use this need a calculateCheckoutData function namespaced on the model
which crates a checkoutData hash in app's locals. See ecommerce.js for reference.
This data is necessary to populate checkout_modal.html.erb.

Example:
  getCheckoutLocals().checkoutData => {
      purchase_type: i.e. 'BuyNow' or 'Recurring'
      currency: currencyCode for app
      items:[{title,quantity,prices:{post_trial, trial}}],
      totals:{post_trial,trial}, grand totals for trial and non trial prices
      post_trial:{items_price,tax,shipping,discount,total}, breakdown for non trial
      trial:null or {items_price,tax,shipping,discount,total}, breakdown for trial
      paymentMethods:[] i.e. ['Stripe', 'Paypal']
  }

Remember to @import 'partials/checkout.scss'; in app's css

Developer: Zac
*/

window.checkout = function (e, previewModal) {
  getCheckoutLocals().processingPayment = null;
  getCheckoutLocals().checkoutData = null;
  APP_MODEL.calculateCheckoutData();

  var button = e ? $(e.target) : null;
  var locals = getCheckoutLocals();
  var previewModal = locals.previewModal && locals.previewModal.toString() === 'true';

  if (!locals.checkoutData.paymentMethods.length && !previewModal) {
    if (button) {
      var previousText = button.text();
      button.text('No payment methods connected.');
      setTimeout(function () {
        button.text(previousText);
      }, 3000);
    }

    return;
  }

  window.showCheckoutModal();
};

window.showCheckoutModal = function () {

  var locals = getCheckoutLocals();
  if (getURLParameter('confirmation_code') && !locals.checkoutData.confirmation_code) {
    locals.checkoutData.confirmation_code = getURLParameter('confirmation_code');
    return populateConfirmation();
  };

  var confirmationCode = getURLParameter('confirmation_code') || locals.checkoutData.confirmation_code;

  normalizeLocals(); //if eCommerce window checkout, convert selectedItems to array

  if (locals.window_checkout) {
    // if you're already in the window
    initializeListeners();
    var confirmationCode = getURLParameter('confirmation_code') || locals.checkoutData.confirmation_code;
    if (confirmationCode) {
      locals.checkoutData.confirmation_code = confirmationCode;
      locals.checkoutData.buyer_data = JSON.parse(getURLParameter('buyer_data'));
      return populateConfirmation();
    }

    $('.checkoutModal').css({ display: 'block' });

    // Handle immediate paypal checkout.
    if (locals.checkoutData.directlyToPaypal && !window.isWebview()) {
      var top = screen.height / 2 - 425;
      $('.checkoutModal').html('<div class="loader-overlay" id="js-loader-overlay" style="position: relative; top: 425px;"><div class="preloader"><div class="preloader__box"></div><div class="preloader__box"></div><div class="preloader__box"></div></div></div>');
      return processPayment(null, false);
    } else {
      populateRightSide();
      populateSummary();
      $('.checkoutModal').css('z-index', '2');
      $('.checkoutModal').fadeIn('600');
      $('.checkoutModal').css({ width: '100%' });
      $('.checkoutModal').addClass('checkoutWindow');
    }
  } else {
    if (window.isWebview()) {
      $('#checkoutFormData').val(JSON.stringify(locals.checkoutData));
      $('#checkoutForm').attr('action', '/checkout/window/');
      $('#checkoutForm').submit();
      APP_MODEL.resetCart(true); // webview won't be notified so reset now
    } else {
      window.name = META.id + '_parent'; // allow forms to update parent
      var nav = navigator.userAgent.toLowerCase();
      var isIE = nav.indexOf('trident') > -1 || nav.indexOf("msie ") > -1;
      if (locals.checkoutData.directlyToPaypal && !window.isWebview()) {
        var left = screen.width / 2 - 600;
        var top = screen.height / 2 - 425;
        var dimensions = 'height=850, width=1200, left=' + left + ', top=' + top;
      } else {
        var left = screen.width / 2 - 450;
        var top = screen.height / 2 - 325;
        var dimensions = 'height=650, width=900, left=' + left + ', top=' + top;
      }

      var uri = '/checkout/window/?window_checkout_mode=true&app_id=' + window.META.id;

      window._checkout_locals = locals;
      if (isIE) {
        var newWindow = window.open('', '', dimensions);
        newWindow._checkout_locals = locals;
        newWindow.location = uri;
      } else {
        var newWindow = window.open(uri, '', dimensions);
        newWindow._checkout_locals = locals;
      }

      ajaxController({
        url: '/checkout/create_pending_transaction',
        method: 'POST',
        data: JSON.stringify(locals.checkoutData),
        contentType: 'application/json'
      });

      return;
    }
  }
};

window.prepCheckoutWindow = function () {
  $(document).ready(function () {
    window.loadScripts();
    if (window.opener) {
      window.APP_MODEL.setLocals($.extend(true, { window_checkout: true }, window.opener._checkout_locals));
    } else {
      window.APP_MODEL.setLocals($.extend(true, { window_checkout: true }, window._checkout_locals));
    }
    window.showCheckoutModal();
  });
};

window.loadScripts = function () {
  $.getScript('https://js.stripe.com/v3');
  $.getScript('https://js.braintreegateway.com/v2/braintree.js');
  $.getScript('https://www.paypalobjects.com/api/checkout.js');
};

var normalizeLocals = function normalizeLocals() {
  var selectedItems = getCheckoutLocals().selectedItems;
  if (selectedItems && (typeof selectedItems === 'undefined' ? 'undefined' : _typeof(selectedItems)) === 'object') {
    var selectedItemsArr = [];
    Object.keys(selectedItems).forEach(function (key) {
      selectedItemsArr.push(selectedItems[key]);
    });
    APP_MODEL.setLocals({ selectedItems: selectedItemsArr });
  }
};

var getCheckoutLocals = function getCheckoutLocals() {
  if (!APP_MODEL.get('locals').checkoutData) {
    APP_MODEL.calculateCheckoutData();
  };
  return APP_MODEL.get('locals');
};

var populateRightSide = function populateRightSide(opts) {
  var checkoutData = getCheckoutLocals().checkoutData;
  var container = $('#right-side');
  container.html('');

  var template = $('#right-side-content').html();
  var html = _.template(template)({
    data: checkoutData,
    simpleCopies: APP_MODEL.meta.simple_copies
  });

  container.html(formatForCurrency(html));

  if (opts && opts.page === 'payment') {
    if (checkoutData.item) {
      var summary = checkoutData.item.quantity + 'x ' + checkoutData.item.title + ':';
      $('#subtotal').text(summary);
    }
    $('#payment-methods-container').addClass('hidden');
    $('#right-side-title').text('Totals');
    $('#goToPaymentButtonContainer').addClass('hidden');
    $('#paymentButtonContainer').removeClass('hidden');
  } else {
    $('#payment-methods-container').removeClass('hidden');
  }

  if (!checkoutData.item && !checkoutData.selected_items.length) {
    $('#goToPaymentButtonContainer').addClass('hidden');
    $('.safe-and-secure').addClass('hidden');
  }

  if (checkoutData.purchase_type === 'BuyNow' && checkoutData.api === 'Paypal' && checkoutData.smartButtonsEnabled && !window.isWebview()) {
    renderSmartButton();
  }
};

var closeCheckoutModal = function closeCheckoutModal() {
  APP_MODEL.setLocals({ previewModal: false });

  if (getCheckoutLocals().window_checkout) {
    window.close();
  } else {
    var checkoutModal = $('.checkoutModal');
    // checkoutModal.css('opacity', '0');
    checkoutModal.fadeOut('fast');

    // change z-index after the thing has faded out
    setTimeout(function () {
      checkoutModal.css('z-index', '-1');
    }, 618);

    goToSummary();
  }
};

var populateSummary = function populateSummary() {
  var container = $('#left-side');
  var checkoutData = getCheckoutLocals().checkoutData;
  container.html('');

  var template = $('#cart-summary').html();
  var html = _.template(template)({
    data: checkoutData,
    simpleCopies: APP_MODEL.meta.simple_copies
  });

  container.html(formatForCurrency(html));
  if (APP_MODEL.get('noShipping')) {
    $('#left-side').removeClass('mobile-expanded-left-side');
  }
  $('#note-to-seller').val(checkoutData.memo);
};

var renderSmartButton = function renderSmartButton() {
  if (!window.paypal || !$('#paypal-button').length) {
    console.log('no paypal!');
    setTimeout(renderSmartButton, 500);
    return;
  }

  var checkoutData = getCheckoutLocals().checkoutData || APP_MODEL.calculateCheckoutData();
  checkoutData.app_id = APP_MODEL.meta.id;
  window.paypal.Button.render({
    env: ENVIRONMENT == 'production' ? 'production' : 'sandbox',
    style: {
      layout: 'vertical', // horizontal | vertical
      size: 'medium', // medium | large | responsive
      shape: 'rect', // pill | rect
      color: 'gold', // gold | blue | silver | white | black
      label: 'checkout'
    },
    // Options:
    // - paypal.FUNDING.CARD
    // - paypal.FUNDING.CREDIT
    // - paypal.FUNDING.ELV
    funding: {
      allowed: [paypal.FUNDING.CREDIT],
      disallowed: [paypal.FUNDING.CARD]
    },

    client: {
      sandbox: 'AZOuKdY4-RlcWi9pwdjs3Ja4hT8ft8f0i50hv-S1y_yVbtfGaghf6f9Z97f1l3-3qr8oV5sz4vov80hi',
      production: 'ASeEwM3xfNywcWueMJSpBfeDgwItsdAcqpvV1C47xinYQtPi4L2tiBv-cgMt-D0irLIwS_j0aG-vuM3a'
    },

    payment: function payment(data, actions) {
      return actions.request.post('/checkout/cached/null?submit_type=form', { checkout: JSON.stringify(getCheckoutLocals().checkoutData) }).then(function (res) {
        var c = res.confirmation_code;
        if (c && typeof c === 'string' && c.slice(0, 5) === 'powr_') {
          return handleResponse(res); // no money transacted because 100% discount
        };

        checkoutData = $.extend(true, checkoutData, res);

        return res.id;
      });
    },

    validate: function validate(actions) {
      if (missingBuyerData()) {
        actions.disable();
      } else {
        actions.enable();
      }
    },

    onAuthorize: function onAuthorize(data, actions) {
      return actions.request.post('/checkout/paypal_success/' + getURLParameter('transaction_id'), {
        paymentID: data.paymentID,
        payerID: data.payerID
      }).then(function (data) {
        if (data.window_redirect_url) {
          try {
            if (!checkoutData.payer_id) {
              var left = screen.width / 2 - 600;
              var top = screen.height / 2 - window.innerHeight / 2;
              window.moveTo(left, top);
              window.resizeBy(300, 200);
            }
            var top = screen.height / 2 - 425;
            $('.checkoutModal').html('<div class="loader-overlay" id="js-loader-overlay" style="position: relative; top: 425px;"><div class="preloader"><div class="preloader__box"></div><div class="preloader__box"></div><div class="preloader__box"></div></div></div>');
            $(window).off('beforeunload');
            var parentWindow = window.opener;
            if (parentWindow && parentWindow.APP_MODEL && parentWindow.getCheckoutLocals) {
              parentWindow.getCheckoutLocals().processingPayment = null;
              parentWindow.APP_MODEL.resetCart(true);
            }

            // hack for payment window behind parentWindow
            window.open('', window.name);

            window.location.assign(data.window_redirect_url);
          } catch (e) {
            handleResponse(e);
          }
          // Handle modal confirmation page
        } else {
          handleResponse(data);
        }
      });
    },
    onError: function onError(data) {
      data.checkout_error_message = data.message.split('"')[3];
      handleResponse(data);
    }
  }, '#paypal-button');
};

var mountCard = function mountCard() {
  if (ENVIRONMENT == 'production') {
    var stripeInstance = Stripe('pk_live_dG3PRZbeKyeq01hNmpFmk9Qs');
  } else {
    var stripeInstance = Stripe('pk_test_VaXpTh86OgrdlsCwNacGBIAz');
  }

  var card = stripeInstance.elements().create('card', { id: 'card_number' });

  var cardContainer = $('#card-element')[0];
  card.mount(cardContainer);

  // Set up listener for card errors
  card.addEventListener('change', function (event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
      displayError.textContent = event.error.message;
      $('#card-errors').css('opacity', '1');
    } else {
      $('#card-errors').css('opacity', '0');
    }

    // If card info is filled out, get token
    if (event.complete) {
      stripeInstance.createToken(card).then(function (result) {
        if (result.error) {
          displayError.textContent = result.error.message;
        } else {
          APP_MODEL.setLocals({ token: result.token.id });
        }
      });
    }
  });

  var locals = getCheckoutLocals();
  locals.stripeInstance = stripeInstance;
  locals.card = card;
};

var paymentMethodAssets = {
  Stripe: { icon: 'fa-credit-card', text: 'pay_now' },
  Offline: { icon: 'fa-shopping-bag', text: 'pay_in_store' },
  Paypal: { icon: 'fa-paypal', text: 'pay_with_paypal' },
  Braintree: { icon: 'fa-credit-card', text: 'pay_now' }
};

var populatePayment = function populatePayment(form) {
  var self = this;
  var locals = getCheckoutLocals();
  var checkoutData = locals.checkoutData;
  var template = $('#payment').html();
  var container = $('#left-side');

  container.html('');

  var html = _.template(template)({
    data: checkoutData,
    assets: paymentMethodAssets,
    simpleCopies: APP_MODEL.meta.simple_copies
  });

  container.html(formatForCurrency(html));

  // In the case this is called after discount code, keep the old form
  if (form) {
    $('#purchaseForm').replaceWith(form);
  }

  // if discount has been added, make sure elements are still opaque.
  if (locals.total_discounts !== currency() + '0') {
    $('#card-element').css('opacity', '1');
  }

  if (APP_MODEL.get('stripeEnabled') && $('#card-element')[0]) {
    mountCard();
  }

  if (APP_MODEL.get('braintreeEnabled') && checkoutData.purchase_type !== 'Recurring') {
    getBraintreeClient();
  }

  if (APP_MODEL.get('noShipping')) {
    $('#left-side').addClass('mobile-expanded-left-side');
  }
  var mobileBackButton = $('.mobile-back-button-container')[0];

  if (mobileBackButton) {
    mobileBackButton.scrollIntoView();
  } // scroll to first missing input
};

var getBraintreeClient = function getBraintreeClient() {
  ajaxController({
    url: '/braintree/client_token/' + APP_MODEL.meta.id
  }, function (data) {
    APP_MODEL.setLocals({
      braintreeClient: new braintree.api.Client({
        clientToken: data.braintree_client_token
      })
    });
  });
};

var populateConfirmation = function populateConfirmation() {
  var checkoutData = getCheckoutLocals().checkoutData;
  checkoutData.isWebview = window.isWebview();
  var container = $('.checkoutModal');
  container.html('');

  var template = $('#confirmation').html();
  var html = _.template(template)({
    data: checkoutData,
    simpleCopies: APP_MODEL.meta.simple_copies
  });

  if (checkoutData.directlyToPaypal === true && !window.isWebview()) {
    container.css({
      display: 'block',
      top: '100px',
      'box-shadow': '0 0 6px -2px rgba(0,0,0,.7)'
    });
  } else {
    container.css({ display: 'block', width: '100%', 'box-shadow': 'none' });
  }

  $('iframe').remove();
  container.html(formatForCurrency(html));
};

var goToSummary = function goToSummary() {
  $('.cart-summary').removeClass('hidden');
  $('.payment:not(.section)').addClass('hidden');
  $('.confirmation').addClass('hidden');

  if (getCheckoutLocals().window_checkout) {
    window.resizeBy(0, 550 - window.innerHeight);
  } else {
    $('.checkoutModal').css('top', '100px');
  }
};

var missingBuyerData = function missingBuyerData() {
  var missingData = false;
  var ignoreFields = ['buyer_memo'];
  var checkoutData = getCheckoutLocals().checkoutData;
  if (!checkoutData.addressNotRequired) {
    ignoreFields = ['buyer_first_name', 'buyer_last_name', 'buyer_address', 'buyer_zip', 'buyer_city', 'buyer_state', 'buyer_memo'];
  }

  if (checkoutData.merchantPriceMissing && checkoutData.merchantPriceMissing.toString() === 'true' && getFloat($('#user-price-amount').val()) === 0 && getFloat($('#donation-amount').val()) === 0 && getFloat($('#donation-amount-sm').val()) === 0 && getFloat(checkoutData.post_trial.items_price) === 0) {
    $('#user-price-amount').addClass('border-color-red');
    $('#donation-amount-sm').addClass('border-color-red');
    $('#donation-amount').addClass('border-color-red');
    missingData = true;
  }

  // Flag blank required inputs
  $('#purchaseForm').children().each(function (idx, element) {
    $(element).find('input').each(function (idx, input) {
      if (arrayHasValue(ignoreFields, input.name)) {
        return;
      }
      if (!input.value) {
        $(input).addClass('border-color-red');
        if (!missingData && !window.name) {
          input.scrollIntoView();
        } // scroll to first missing input
        missingData = true;
      }
    });
  });

  if (arrayHasValue(checkoutData.paymentMethods, 'Braintree')) {
    $('#braintree-element').children().each(function (idx, input) {
      if (arrayHasValue(ignoreFields, input.name)) {
        return;
      }
      if (!input.value && checkoutData.api === 'Braintree') {
        $(input).addClass('border-color-red');
        missingData = true;
      } else {
        $(input).removeClass('border-color-red');
      }
    });
  }

  return missingData;
};

var missingOptions = function missingOptions() {
  return false; // Decided to disable PaypalButton options being required for now
  // Only relevant for Paypal button since eCommerce forces users to select options
  // if (!APP_MODEL.get('options') || !APP_MODEL.get('options').length) {
  //   $(".optionsSelect").removeClass("border-color-red");
  //   return false;
  // };
  //
  // if (APP_MODEL.get('options').length && APP_MODEL.get('locals').checkoutData.item.selected_option_idx === undefined) {
  //   $(".optionsSelect").addClass("border-color-red");
  //   return true
  // }
};

var processPayment = function processPayment(button, requireBuyerData) {
  requireBuyerData = requireBuyerData || true;
  var locals = getCheckoutLocals();
  var checkoutData = locals.checkoutData;
  if (checkoutData.formResponse) {
    normalizeFormResponse(checkoutData);
  };
  checkoutData.app_id = APP_MODEL.meta.id;
  checkoutData.view_mode = APP_MODEL.meta.view_mode;
  checkoutData.window_checkout = locals.window_checkout;

  if (requireBuyerData && missingBuyerData()) {
    return;
  }
  if (locals.processingPayment) {
    return;
  }

  if (button) {
    var previousButtonHtml = button.html();
    button.text('Processing...');
    button.prop('disabled', true);
  }

  getCheckoutLocals().processingPayment = true;
  if (checkoutData.api === 'Braintree' && !locals.token) {
    locals.braintreeClient.tokenizeCard({
      number: $('#braintree-card-number').val(),
      expirationMonth: $('#braintree-exp-month').val(),
      expirationYear: $('#braintree-exp-year').val(),
      cvv: $('#braintree-cvv').val()
    }, function (err, nonce) {
      if (err) {
        if (button) {
          button.html(previousButtonHtml);
        }
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = err.message;
      } else if (nonce) {
        APP_MODEL.setLocals({ token: nonce });
        button.text('Confirm Purchase');
      }
    });

    button.prop('disabled', false);
    return;
  } else if (checkoutData.api === 'Stripe' && !locals.token) {
    var stripeInstance = locals.stripeInstance;
    var card = locals.card;
    stripeInstance.createToken(card).then(function (result) {
      if (result.error) {
        if (button) {
          button.html(previousButtonHtml);
        }
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        APP_MODEL.setLocals({ token: result.token.id });
        button.text('Confirm Purchase');
      }
    });

    button.prop('disabled', false);
    return;
  } else {
    checkoutData.token = getCheckoutLocals().token;
  }

  if (requireBuyerData) {
    var email = (checkoutData.buyer_data || {}).email;
    var name = (checkoutData.buyer_data || {}).name;
    var address = (checkoutData.buyer_data || {}).address;
    var city = (checkoutData.buyer_data || {}).city;
    var state_or_provence = (checkoutData.buyer_data || {}).state_or_provence;
    var zip_or_country = (checkoutData.buyer_data || {}).zip_or_country;

    if ($('[name="buyer_email"]').val()) {
      //if shipping form is present in checkout window

      checkoutData.buyer_data = {
        name: name || $('[name="buyer_first_name"]').val() + ' ' + $('[name="buyer_last_name"]').val(),
        email: email || $('[name="buyer_email"]').val(),
        payer_email: $('[name="buyer_email"]').val(), // notion of a form email and a payer email
        address: address || $('[name="buyer_address"]').val(),
        city: city || $('[name="buyer_city"]').val(),
        state_or_provence: state_or_provence || $('[name="buyer_state"]').val(),
        zip_or_country: zip_or_country || $('[name="buyer_zip"]').val(),
        memo: checkoutData.memo
      };
    } else {
      // if we don't have stuff from shipping, we get it from other places
      checkoutData.buyer_data = {
        name: name || unescape(getURLParameter('name')).replace(/\+/g, ' '),
        email: email || unescape(getURLParameter('email')).replace(/\+/g, ' '),
        address: address || unescape(getURLParameter('address')).replace(/\+/g, ' '),
        city: city || unescape(getURLParameter('city')).replace(/\+/g, ' '),
        state_or_provence: state_or_provence || unescape(getURLParameter('state_or_provence')).replace(/\+/g, ' '),
        zip_or_country: zip_or_country || unescape(getURLParameter('zip_or_country')).replace(/\+/g, ' ')
      };
    }
  }

  if (checkoutData.buyer_data.name.match('undefined')) {
    checkoutData.buyer_data.name = '';
  }

  checkoutData.payer_id = getURLParameter('PayerID');
  checkoutData.TOKEN = getURLParameter('token');

  if (window.isWebview()) {
    // submit as form if webview
    locals.checkoutData.isWebview = true;
    $('#checkoutFormData').val(JSON.stringify(locals.checkoutData));
    $('#checkoutForm').attr('action', '/checkout');
    $('#checkoutForm').submit();
    APP_MODEL.resetCart(true); // webview won't be notified so reset now
    return;
  }

  ajaxController({
    url: '/checkout/',
    method: 'POST',
    data: JSON.stringify(checkoutData),
    contentType: 'application/json'
  }, function (successData) {
    // Handle redirect from checkout window
    if (successData.window_redirect_url) {
      try {
        if (!checkoutData.payer_id && !checkoutData.directlyToPaypal) {
          var left = screen.width / 2 - 600;
          var top = screen.height / 2 - window.innerHeight / 2;
          window.moveTo(left, top);
          window.resizeBy(300, 200);
        }
        var top = screen.height / 2 - 425;
        $('.checkoutModal').html('<div class="loader-overlay" id="js-loader-overlay" style="position: relative; top: 425px;"><div class="preloader"><div class="preloader__box"></div><div class="preloader__box"></div><div class="preloader__box"></div></div></div>');
        $(window).off('beforeunload');

        var parentWindow = window.opener;
        if (parentWindow && parentWindow.APP_MODEL && parentWindow.APP_MODEL.attributes && parentWindow.APP_MODEL.attributes.locals) {
          parentWindow.APP_MODEL.attributes.locals.processingPayment = null;
          parentWindow.APP_MODEL.resetCart(true);
        }

        window.location.assign(successData.window_redirect_url);
      } catch (e) {
        handleResponse(e);
      }
      // Handle modal confirmation page
    } else {
      handleResponse(successData);
    }
  });
};

var handleResponse = function handleResponse(data) {
  var checkoutData = getCheckoutLocals().checkoutData;
  checkoutData.confirmation_code = data.confirmation_code;
  checkoutData.checkout_error_message = data.checkout_error_message;

  populateConfirmation();

  getCheckoutLocals().processingPayment = null;
  APP_MODEL.resetCart();
};

var getSelectedItemFromEvent = function getSelectedItemFromEvent(e) {
  var checkoutData = getCheckoutLocals().checkoutData;
  var selectedItemIdx = parseInt($(e.target).parent().prop('id'));

  if (checkoutData) {
    return checkoutData.selected_items[selectedItemIdx];
  }
};

var currency = function currency() {
  var currency_symbols = {
    USD: '$', // US Dollar
    BRL: 'R$',
    CZK: 'Kč',
    DKK: 'kr ',
    EUR: '€', // Euro
    HUF: 'Ft',
    ILS: '₪', // Israeli New Sheqel
    JPY: '¥', // Japanese Yen
    MYR: 'RM',
    NOK: 'kr ',
    PHP: '₱', // Philippine Peso
    PLN: 'zł', // Polish Zloty
    GBP: '£', // British Pound Sterling
    RUB: '₽',
    SEK: 'Kr ', // A space between kr and number
    CHF: 'CHF',
    THB: '฿', // Thai Baht
    TRY: '&#8378;' //Note this has very limited support
  };
  if (currency_symbols[APP_MODEL.get('currencyCode')] == undefined) {
    return '$';
  } else {
    return currency_symbols[APP_MODEL.get('currencyCode')];
  }
};

window.buyerDataPresent = function () {
  return !!getURLParameter('name') && !!getURLParameter('email') && !!getURLParameter('address') && !!getURLParameter('city') && !!getURLParameter('state_or_provence') && !!getURLParameter('zip_or_country');
};

window.normalizeFormResponse = function (data) {
  data.form_response = Object.keys(data.form_response).map(function (key) {
    return data.form_response[key];
  });
};

window.recurringString = function (item) {
  var preface = item.trialOn || item.paypalTrialOn ? ' for the first ' : ' every ';
  var unit = item.trialOn || item.paypalTrialOn ? item.trialDurationUnits || item.paypalTrialDurationUnits : item.subscriptionDurationUnits || item.paypalSubscriptionDurationUnits;
  var numUnits = item.trialOn || item.paypalTrialOn ? item.trialDuration || item.paypalTrialDuration : item.subscriptionDuration || item.paypalSubscriptionDuration;

  var unitString = {
    D: 'day',
    W: 'week',
    M: 'month',
    Y: 'year'
  }[unit];

  if (numUnits > 1) {
    var numUnitsString = numUnits.toString() + ' ';
    unitString += 's';
  } else {
    var numUnitsString = '';
  }

  return preface + numUnitsString + unitString;
};

window.getFloat = function (input) {
  if (arrayHasValue(['object', 'undefined'], typeof input === 'undefined' ? 'undefined' : _typeof(input))) {
    return 0;
  }
  // convert to string, remove characters like % or $ and replace , with .
  var matchData = input.toString().match(/[0-9]+[\., \,][0-9]+|[0-9]+/g) || ['0'];
  var string = matchData[0].replace(',', '.');
  if (arrayHasValue(['.', ','], input.toString().replace('-', '')[0])) {
    string = '0.' + string;
  }
  var value = parseFloat(string);
  return input.toString().match('-') ? -value : value;
};

var formatForCurrency = function formatForCurrency(html) {
  if (!arrayHasValue(['€', 'CHF'], currency())) {
    return html;
  }

  return html.replace(/[0-9]+\.[0-9]{2}/g, function (amount) {
    return amount.replace('.', ',');
  });
};

window.twoDecimals = function (number) {
  if (typeof number === 'undefined') {
    return '0.00';
  }
  var integer = number.toString().split('.')[0];
  var decimals = number.toString().split('.')[1] || '00';
  while (decimals.length < 2) {
    decimals += '0';
  }

  return integer + '.' + decimals.slice(0, 2);
};

window.inCents = function (amountString) {
  return parseInt(amountString.replace('.', ''));
};

window.addTotals = function (data) {
  var totalType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'post_trial';

  var total = inCents(twoDecimals(data[totalType].items_price)) + inCents(twoDecimals(data[totalType].tax)) + inCents(twoDecimals(data[totalType].shipping)) - inCents(twoDecimals(data[totalType].discount));

  if (total < 0) {
    total = 0;
  };
  return twoDecimals(total / 100.0);
};

window.minimumCharge = function (currencyCode, api) {
  if (['Paypal', "Offline"].indexOf(api) > -1) {
    return 0;
  }
  return {
    USD: 0.5,
    CAD: 0.5,
    GBP: 0.5,
    EUR: 0.5,
    DKK: 5,
    NOK: 5,
    SEK: 5,
    CHF: 1,
    AUD: 1,
    JPY: 50,
    MXN: 10,
    SGD: 1,
    HKD: 4
  }[currencyCode] || 0.5;
};

window.arrayHasValue = function (array, value) {
  //For IE11
  return $.inArray(value, array) !== -1;
};

window.rgb2hex = function (rgb) {
  if (rgb[rgb.length - 2] === '0') {
    return '#ffffff';
  }
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return rgb && rgb.length === 4 ? '#' + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
};

window.objectAssignIE = function (object1, object2) {
  Object.keys(object2).forEach(function (key) {
    object1[key] = object2[key];
  });
  return object1;
};

window.formatPriceChange = function (priceChange) {
  if (!priceChange) {
    return '';
  }
  if (priceChange > 0) {
    return '+' + currency() + priceChange.toString();
  }
  if (priceChange < 0) {
    return '-' + currency() + priceChange.toString();
  }
};

var initializeListeners = function initializeListeners() {
  $(document).on('click', '#review-step, .backToCartButton', function (e) {
    e.preventDefault();
    populateSummary();
    populateRightSide();
  });

  $(document).on('click', '.payment-method-radio', function (e) {
    getCheckoutLocals().checkoutData.api = e.target.value;
    APP_MODEL.calculateCheckoutData();
    populateRightSide();
    populateSummary();
  });

  $(document).on('click', '.makePaymentButton', function (e) {
    var button = $(e.target);

    if (!button.prop('id')) {
      return;
    }

    APP_MODEL.calculateCheckoutData();
    var locals = getCheckoutLocals();
    var checkoutData = locals.checkoutData;
    checkoutData.api = button.prop('id');

    var previewModal = locals.previewModal;
    if (previewModal && previewModal.toString() === 'true') {
      if (missingBuyerData()) {
        return;
      }
      handleResponse({ confirmation_code: 'TEST TRANSACTION' });
    } else {
      processPayment(button);
    }
  });

  $(document).on('change', '#cart-item-quantity', function (e) {
    var locals = getCheckoutLocals();
    var checkoutData = locals.checkoutData;
    if (parseInt(e.target.value) < 1) {
      e.target.value = 1;
    }
    if (checkoutData.selected_items) {
      var selectedItem = getSelectedItemFromEvent(e);
      selectedItem.quantity = e.target.value;
    } else {
      getCheckoutLocals().quantity = e.target.value;
    }

    APP_MODEL.calculateCheckoutData();
    populateSummary();
    populateRightSide();
  });

  $(document).on('change', '#donation-amount, #donation-amount-sm', function (e) {
    var checkoutData = getCheckoutLocals().checkoutData;
    if (getFloat(e.target.value) < 0) {
      e.target.value = 0;
    }

    getCheckoutLocals().donation = e.target.value;

    APP_MODEL.calculateCheckoutData();
    populateSummary();
    populateRightSide();
  });

  $(document).on('change', '#user-price-amount', function (e) {
    var checkoutData = getCheckoutLocals().checkoutData;
    if (getFloat(e.target.value) < 0) {
      e.target.value = 0;
    }

    getCheckoutLocals().donation = e.target.value;

    APP_MODEL.calculateCheckoutData();
    populateSummary();
    populateRightSide();
  });

  $(document).on('change', '.checkout-dropdown', function (e) {
    var checkoutData = getCheckoutLocals().checkoutData;
    if (checkoutData.selected_items) {
      var selectedItem = getSelectedItemFromEvent(e);
      var optionGroupIdx = $(e.target).prop('id');
      var optionIdx = $(e.target).find('option:selected').prop('id');
      selectedItem.optionIndexes[optionGroupIdx] = parseInt(optionIdx);
    } else {
      getCheckoutLocals().selectedOptionIdx = $(e.target).find('option:selected').prop('id');
    }

    APP_MODEL.calculateCheckoutData();
    populateSummary();
    populateRightSide();
  });

  $(document).on('click', '.cancelItem', function (e) {
    var selectedItem = getSelectedItemFromEvent(e);
    var checkoutData = getCheckoutLocals().checkoutData;
    var selectedItemIdx = checkoutData.selected_items.indexOf(selectedItem);
    checkoutData.selected_items.splice(selectedItemIdx, 1);

    APP_MODEL.calculateCheckoutData();
    populateSummary();
    populateRightSide();

    if (!checkoutData.selected_items.length) {
      $('.goToPaymentButton').css('opacity', '0.3');
    }
  });

  $(document).on('click', '.discount-button', function () {
    var discountCode = $('.payment-discount-input').val();
    if (!discountCode) {
      return;
    };
    APP_MODEL.setLocals({ discountCode: discountCode });

    APP_MODEL.calculateCheckoutData();
    populateSummary();
    populateRightSide();
  });

  $(document).on('click', '.discount-container', function () {
    $('.discount-container').addClass('hidden');
    $('.discount-input-container').removeClass('hidden');
  });

  $(document).on('change', '.payment-inline-input', function (e) {
    if ($(e.target).val()) {
      $(e.target).removeClass('border-color-red');
    }
  });

  $(document).on('change', '[name="buyer_memo"]', function (e) {
    var checkoutData = getCheckoutLocals().checkoutData;
    checkoutData.memo = e.target.value;
  });

  $(document).on('change', '[name="paymentMethod"]', function (e) {
    var checkoutData = getCheckoutLocals().checkoutData;
    checkoutData.api = e.target.value;
    checkoutData.memo = $('#note-to-seller').val();

    populateSummary();
    populateRightSide();
  });

  $(document).on('click', '#goToPaymentButton', function () {
    if (missingOptions()) {
      return;
    }
    var checkoutData = getCheckoutLocals().checkoutData;

    if (checkoutData.api === 'Paypal') {
      if (checkoutData.addressNotRequired !== 'false' || checkoutData.purchase_type === 'BuyNow' || checkoutData.purchase_type === 'Donate' || buyerDataPresent()) {
        return processPayment();
      }
    }

    if (!missingBuyerData()) {
      populatePayment();
      populateRightSide({ page: 'payment' });
    }
  });

  $(document).on('click', '#paymentButton', function (e) {
    processPayment($(e.target));
  });

  $(document).on('focus', '#note-to-seller', function (e) {
    $(e.target).css('height', '175px');
    $('#left-side').addClass('mobile-expanded-left-side');
  });

  $(document).on('blur', '#note-to-seller', function (e) {
    $(e.target).css('height', '30px');
    $('#left-side').removeClass('mobile-expanded-left-side');
  });

  $(document).on('click', '.backToStoreButton, .checkoutModalClose', function () {
    closeCheckoutModal();
  });

  $(document).on('click', '*', function (e) {
    if (!$(e.target).closest('.checkoutModal')[0] && getCheckoutLocals().window_checkout.toString() !== 'true' && !$(e.target).closest('.cancelItem')[0] && !$(e.target).closest('.goToPaymentButton')[0] && !$(e.target).closest('.checkoutButtonWrapper')[0] && !$(e.target).closest('.previewModalButton')[0] && !$(e.target).closest('#checkoutModalSection')[0] && !$(e.target).closest('.cart-button')[0]) {
      closeCheckoutModal();
    }
  });
};

/***/ }),

/***/ 1209:
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;var o = n[r] = { exports: {}, id: r, loaded: !1 };return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
  }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
}([function (e, t, n) {
  e.exports = n(25);
}, function (e, t) {
  "use strict";
  function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function r(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }Object.defineProperty(t, "__esModule", { value: !0 });var i = function (e) {
    function t(e) {
      n(this, t);var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return o.name = "IntegrationError", o;
    }return o(t, e), t;
  }(Error);t.default = i;
}, function (e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      r = (t.find = function (e, t) {
    for (var n = 0; n < e.length; n++) {
      if (t(e[n])) return e[n];
    }
  }, t.findIndex = function (e, t) {
    for (var n = 0; n < e.length; n++) {
      if (t(e[n])) return n;
    }return -1;
  }, "[object Object]"),
      o = (t.isEqual = function e(t, o) {
    if ("object" !== ("undefined" == typeof t ? "undefined" : n(t)) || "object" !== ("undefined" == typeof o ? "undefined" : n(o))) return t === o;if (null === t || null === o) return t === o;var i = Array.isArray(t),
        a = Array.isArray(o);if (i !== a) return !1;var s = Object.prototype.toString.call(t) === r,
        u = Object.prototype.toString.call(o) === r;if (s !== u) return !1;if (!s && !i) return !1;var c = Object.keys(t),
        l = Object.keys(o);if (c.length !== l.length) return !1;for (var f = {}, d = 0; d < c.length; d++) {
      f[c[d]] = !0;
    }for (var p = 0; p < l.length; p++) {
      f[l[p]] = !0;
    }var h = Object.keys(f);if (h.length !== c.length) return !1;var _ = function _(n) {
      return e(t[n], o[n]);
    };return h.every(_);
  }, t.mapValues = function (e, t) {
    for (var n = {}, r = Object.keys(e), o = 0; o < r.length; o++) {
      n[r[o]] = t(e[r[o]], r[o]);
    }return n;
  }, t.pick = function (e, t) {
    for (var n = {}, r = 0; r < t.length; r++) {
      "undefined" != typeof e[t[r]] && (n[t[r]] = e[t[r]]);
    }return n;
  }, t.pickBy = function (e, t) {
    for (var n = {}, r = Object.keys(e), o = 0; o < r.length; o++) {
      t(r[o], e[r[o]]) && (n[r[o]] = e[r[o]]);
    }return n;
  });t.omit = function (e, t) {
    return o(e, function (e, n) {
      return t.indexOf(e) === -1;
    });
  }, t.merge = function e() {
    for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) {
      r[o] = arguments[o];
    }var i = Array.isArray(r[0]) ? [] : {};return r.forEach(function (t) {
      t && Object.keys(t).forEach(function (r) {
        var o = i[r],
            a = t[r],
            s = o && "object" === ("undefined" == typeof o ? "undefined" : n(o)) && (o.constructor === Object || o.constructor === Array);"object" === ("undefined" == typeof a ? "undefined" : n(a)) && s ? i[r] = e(o, a) : void 0 !== a ? i[r] = a : void 0 !== o && (i[r] = o);
      });
    }), i;
  }, t.stringsIntersection = function (e, t) {
    for (var n = {}, r = 0; r < t.length; r++) {
      n[t[r]] = !0;
    }for (var o = [], i = 0; i < e.length; i++) {
      n[e[i]] && o.push(e[i]);
    }return o;
  }, t.sum = function (e) {
    for (var t = 0, n = 0; n < e.length; n++) {
      t += e[n];
    }return t;
  }, t.zipObject = function (e, t) {
    for (var n = {}, r = 0; r < e.length; r++) {
      n[e[r]] = t[r];
    }return n;
  };
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.CONTROLLER_ACTIONS = t.RELEASE_VERSION = t.Q_URL = t.API_URL = t.CONTROLLER_URL = t.ELEMENTS_INNER_URL = t.PARENT_ORIGIN = t.REFERRER = t.ORIGIN = void 0;var r = n(6),
      o = (t.ORIGIN = (0, r.parseUrl)("https://js.stripe.com/v3/").origin, t.REFERRER = document.referrer);t.PARENT_ORIGIN = (0, r.parseUrl)(o).origin, t.ELEMENTS_INNER_URL = "https://js.stripe.com/v3/elements-inner-0af99cb731ac730ea7bcd84ded80feaa.html", t.CONTROLLER_URL = "https://js.stripe.com/v3/controller-e00aced2d63d939124286b79e3ff164e.html", t.API_URL = "https://api.stripe.com/v1/", t.Q_URL = "https://q.stripe.com", t.RELEASE_VERSION = "0021c7a", t.CONTROLLER_ACTIONS = { TOKENIZE: "TOKENIZE", FETCH_LOCALE: "FETCH_LOCALE", FETCH_FONT_CSS: "FETCH_FONT_CSS", CREATE_SOURCE: "CREATE_SOURCE", COMPLETE_SOURCE: "COMPLETE_SOURCE" };
}, function (e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var n = 0;t.nextId = function (e) {
    return "" + e + n++;
  }, t.uuid = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, e);
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function o(e, t) {
    var n = {};for (var r in e) {
      t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }return n;
  }function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
    }return e;
  },
      s = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      u = n(3),
      c = n(4),
      l = n(9),
      f = r(l),
      d = n(12),
      p = r(d),
      h = n(23),
      _ = n(1),
      y = r(_),
      v = "__privateStripeController",
      m = function () {
    function e(t) {
      i(this, e), this._parseMessage = function (e, t) {
        try {
          return "string" == typeof e ? JSON.parse(e) : e;
        } catch (e) {
          return;
        }
      };var n = t.apiKey,
          r = t.stripeJsId;this._id = (0, c.nextId)(v), this._stripeJsId = r, this._apiKey = n, this._controllerFrame = new f.default(l.CONTROLLER, a({}, t, { frameId: this._id })), this._frames = {}, this._requests = {}, this._setupPostMessage();
    }return s(e, [{ key: "action", value: function value(e, t) {
        var n = this,
            r = (0, c.nextId)(u.CONTROLLER_ACTIONS[e]),
            o = new p.default(function (o, i) {
          n._requests[r] = a({}, n._requests[r], { resolve: o, reject: i }), n._controllerFrame.send({ action: "stripe-user-action", type: e, nonce: r, options: t });
        });return this._requests[r] = a({}, this._requests[r], { promise: o }), o;
      } }, { key: "createFrame", value: function value(e, t) {
        var n = this,
            r = t.groupId,
            i = o(t, ["groupId"]),
            s = window.location.toString(),
            u = e === l.CONTROLLER ? { apiKey: this._apiKey, stripeJsId: this._stripeJsId, referrer: s } : {},
            c = new f.default(e, a({}, i, u, { controllerId: this._id }));return this._frames[c.id] = c, this._controllerFrame.send({ action: "stripe-user-createframe", frameId: c.id, groupId: r }), c.on("unload", function () {
          n._controllerFrame.send({ action: "stripe-frame-unload", frameId: c.id });
        }), c.on("load", function () {
          n._controllerFrame.send({ action: "stripe-frame-load", frameId: c.id }), n._controllerFrame.loaded && c.send({ action: "stripe-controller-load", controllerId: n._id });
        }), c;
      } }, { key: "report", value: function value(e, t) {
        this._controllerFrame.send({ action: "stripe-controller-report", event: e, data: t });
      } }, { key: "warn", value: function value() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }this._controllerFrame.send({ action: "stripe-controller-warn", args: t });
      } }, { key: "_setupPostMessage", value: function value() {
        var e = this;window.addEventListener("message", function (t) {
          var n = t.data,
              r = t.origin,
              o = e._parseMessage(n, r);o && o.__stripeJsV3 && (0, h.isSameOrigin)(u.ORIGIN, r) && e._handleMessage(o);
        });
      } }, { key: "_handleMessage", value: function value(e) {
        var t = this,
            n = e.action,
            r = e.controllerId,
            i = e.frameId,
            a = e.nonce,
            s = o(e, ["action", "controllerId", "frameId", "nonce"]),
            u = this._frames[i],
            c = this._requests[a];if (r === this._id) switch (n) {case "stripe-frame-load":
            u && u.emit("load");break;case "stripe-frame-event":
            var l = s.event,
                f = o(s, ["event"]);u && u.emit(l, f);break;case "stripe-frame-error":
            throw new y.default(s.message);case "stripe-controller-load":
            this._controllerFrame.emit("load"), Object.keys(this._frames).forEach(function (e) {
              return t._frames[e].send({ action: "stripe-controller-load", controllerId: t._id });
            });break;case "stripe-user-action-complete":
            c && c.resolve(s.payload);break;case "stripe-user-action-error":
            c && c.reject(new y.default(s.error));}
      } }]), e;
  }();t.default = m;
}, function (e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var n = t.parseUrl = function (e) {
    if ("" === e) return { host: "", protocol: "", origin: "" };var t = document.createElement("a");return t.href = e, { host: t.host, protocol: t.protocol, origin: t.protocol + "//" + t.host };
  };t.isCrossDomain = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        r = n(e).host;return !!r && r !== (t || window.location.host);
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function o(e, t) {
    var n = {};for (var r in e) {
      t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }return n;
  }function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function s(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function u(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.PRIVATE_INPUT_CLASSNAME = void 0;var c = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
    }return e;
  },
      l = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      f = n(10),
      d = r(f),
      p = n(21),
      h = r(p),
      _ = n(22),
      y = n(20),
      v = r(y),
      m = n(1),
      b = r(m),
      g = n(11),
      O = r(g),
      E = n(8),
      w = n(9),
      S = (r(w), n(5)),
      j = (r(S), { base: "StripeElement", focus: "StripeElement--focus", invalid: "StripeElement--invalid", complete: "StripeElement--complete", empty: "StripeElement--empty", webkitAutofill: "StripeElement--webkit-autofill" }),
      T = "#faffbd",
      k = "rgb(250, 255, 189)",
      C = "__PrivateStripeElement",
      P = t.PRIVATE_INPUT_CLASSNAME = C + "-input",
      M = function (e) {
    function t(e) {
      a(this, t);var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));n._formSubmit = function () {
        for (var e = n._component.parentElement; e && "FORM" !== e.nodeName;) {
          e = e.parentElement;
        }if (e) {
          var t = document.createEvent("Event");t.initEvent("submit", !0, !0), e.dispatchEvent(t);
        }
      }, n.focus = function (e) {
        return e && e.preventDefault(), n._frame.focus(), n;
      }, n.blur = function () {
        return n._frame.blur(), n._fakeInput.blur(), n;
      };var r = e.controller,
          o = e.classes,
          i = e.componentName;return n._controller = r, n._componentName = i, n._createComponent(e), n._classes = c({}, j), n._changeClasses(o), n._lastBackgroundColor = "", n.on("submit", n._formSubmit), n;
    }return u(t, e), l(t, [{ key: "mount", value: function value(e) {
        var t = void 0;if (!e) throw new b.default("Missing argument. Make sure to call mount() with a valid DOM element or selector.");if ("string" == typeof e) {
          var n = document.querySelectorAll(e);if (n.length > 1 && this._controller.warn("The selector you specified (" + e + ") applies to " + n.length + " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."), !n.length) throw new b.default("The selector you specified (" + e + ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount().");t = n[0];
        } else {
          if (!e.appendChild) throw new b.default("Invalid DOM element. Make sure to call mount() with a valid DOM element or selector.");t = e;
        }if ("INPUT" === t.nodeName) throw new b.default("Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` or `span` element instead.");t.children.length && this._controller.warn("This Element will be mounted to a DOM element that contains child nodes.");var r = this._component.parentElement,
            o = this._isMounted();if (t === r) {
          if (o) return;this.unmount(), this._mountTo(t);
        } else if (r) {
          if (o) throw new b.default("This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting.");this.unmount(), this._mountTo(t);
        } else this._mountTo(t);
      } }, { key: "_mountTo", value: function value(e) {
        var t,
            n = Date.now();for (this._parent = e; e.firstChild;) {
          e.removeChild(e.firstChild);
        }e.appendChild(this._component), this._frame.send({ action: "stripe-user-mount", mountTime: n }), this._findPossibleLabel(), (0, _.updateClasses)(e, (t = {}, i(t, this._classes.base, !0), i(t, this._classes.empty, !0), t));
      } }, { key: "_findPossibleLabel", value: function value() {
        var e = this._parent;if (e) {
          var t = e.getAttribute("id"),
              n = void 0;if (t && (n = document.querySelector("label[for=" + t + "]")), n) e.addEventListener("click", this.focus);else for (n = n || e.parentElement; n && "LABEL" !== n.nodeName;) {
            n = n.parentElement;
          }n ? (this._label = n, n.addEventListener("click", this.focus)) : e.addEventListener("click", this.focus);
        }
      } }, { key: "update", value: function value(e) {
        var t = (0, O.default)(E.createOptions, e, { label: "option for `update()`" }) || {};if (t) {
          var n = t.classes,
              r = o(t, ["classes"]);this._changeClasses(n), this._updateFrameHeight(e), Object.keys(r).length && this._frame.update(r);
        }return this;
      } }, { key: "_isMounted", value: function value() {
        return !!document.body && document.body.contains(this._component);
      } }, { key: "unmount", value: function value() {
        var e = this._component.parentElement,
            t = this._label;if (e) {
          var n;e.removeChild(this._component), e.removeEventListener("click", this.focus), (0, _.updateClasses)(e, (n = {}, i(n, this._classes.base, !1), i(n, this._classes.empty, !1), i(n, this._classes.focus, !1), i(n, this._classes.invalid, !1), i(n, this._classes.complete, !1), n));
        }return this._parent = null, t && (t.removeEventListener("click", this.focus), this._label = null), this._fakeInput.disabled = !0, this._frame.unmount(), this;
      } }, { key: "_changeClasses", value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = {};return Object.keys(e).forEach(function (n) {
          if (!j[n]) throw new b.default(n + " is not a customizable class name.\nYou can customize: " + Object.keys(j).join(", "));t[n] = e[n].replace(/\./g, " ");
        }), this._classes = c({}, this._classes, t), this;
      } }, { key: "_setupEvents", value: function value() {
        var e = this;this._frame.on("redirectfocus", function (t) {
          var n = t.focusDirection,
              r = (0, h.default)(e._component, n);r && r.focus();
        }), this._frame.on("focus", function () {
          e._parent && (0, _.updateClasses)(e._parent, i({}, e._classes.focus, !0)), e.emit("focus");
        }), this._frame.on("blur", function () {
          e._parent && (0, _.updateClasses)(e._parent, i({}, e._classes.focus, !1)), e.emit("blur");
        }), this._frame.on("escape", function () {
          return e.emit("escape");
        }), this._frame.on("submit", function () {
          return e.emit("submit");
        }), this._frame.on("change", function (t) {
          var n = t.error,
              r = t.brand,
              o = t.value,
              a = t.empty,
              s = t.complete;if (e.emit("change", { error: n, brand: r, value: o, empty: a, complete: s }), e._parent) {
            var u;(0, _.updateClasses)(e._parent, (u = {}, i(u, e._classes.invalid, n), i(u, e._classes.empty, a), i(u, e._classes.complete, s), u));
          }
        }), this._frame.on("autofill", function () {
          if (e._parent) {
            var t = e._parent.style.backgroundColor,
                n = t === T || t === k;e._lastBackgroundColor = n ? e._lastBackgroundColor : t, e._parent.style.backgroundColor = T, (0, _.updateClasses)(e._parent, i({}, e._classes.webkitAutofill, !0));
          }
        }), this._frame.on("autofill-cleared", function () {
          e._parent && (e._parent.style.backgroundColor = e._lastBackgroundColor, (0, _.updateClasses)(e._parent, i({}, e._classes.webkitAutofill, !1)));
        });
      } }, { key: "_createComponent", value: function value(e) {
        this._createElement(e), this._setupEvents(), this._updateFrameHeight(e, !0);
      } }, { key: "_updateFrameHeight", value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.style && e.style.base || {},
            r = n.lineHeight,
            o = n.fontSize;if (t || r || o) {
          var i = (0, v.default)(r || this._lastHeight, o || this._lastFontSize);this._frame.updateStyle({ height: i }), this._lastFontSize = o || this._lastFontSize, this._lastHeight = r || this._lastHeight;
        }
      } }, { key: "_createElement", value: function value(e) {
        var t = (e.classes, e.controller, o(e, ["classes", "controller"])),
            n = document.createElement("div");n.className = C, n.style.margin = "0", n.style.padding = "0", n.style.border = "none", n.style.display = "block", n.style.background = "transparent", n.style.position = "relative", n.style.opacity = "1";var r = document.createElement("input");r.className = P, r.style.height = "1px", r.style.position = "absolute", r.style.top = "0", r.style.left = "0", r.style.border = "none", r.style.padding = "0", r.style.margin = "0", r.style.display = "block", r.style.width = "100%", r.style.opacity = "0", r.style.background = "transparent", r.style.pointerEvents = "none", r.setAttribute("aria-hidden", "true"), r.disabled = !0;var i = this._controller.createFrame(w.ELEMENT, t);i.on("load", function () {
          r.disabled = !1;
        }), r.addEventListener("focus", function () {
          i.focus();
        }), i.appendTo(n), n.appendChild(r), this._component = n, this._frame = i, this._fakeInput = r;
      } }]), t;
  }(d.default);t.default = M;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.createOptions = void 0;var r = n(13);t.createOptions = (0, r.combineTypes)({ classes: (0, r.combineTypes)({ base: r.string, complete: r.string, empty: r.string, focus: r.string, invalid: r.string, webkitAutofill: r.string }), hidePostalCode: r.bool, hideIcon: r.bool, style: (0, r.combineTypes)({ base: r.object, complete: r.object, empty: r.object, invalid: r.object }), iconStyle: (0, r.oneOf)("solid", "default"), value: (0, r.or)(r.string, r.object), __privateCvcOptional: r.bool, __privateValue: (0, r.or)(r.string, r.object), error: (0, r.combineTypes)({ type: r.string, code: r.string, decline_code: r.string }), locale: (0, r.misuse)("elements()"), fonts: (0, r.misuse)("elements()") });
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function o(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }return n;
    }return Array.from(e);
  }function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function s(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.CONTROLLER = t.ELEMENT = void 0;var c,
      l = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
    }return e;
  },
      f = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      d = n(3),
      p = n(24),
      h = r(p),
      _ = n(6),
      y = n(4),
      v = n(10),
      m = r(v),
      b = n(1),
      g = r(b),
      O = "__privateStripeFrame",
      E = t.ELEMENT = "ELEMENT",
      w = t.CONTROLLER = "CONTROLLER",
      S = (c = {}, u(c, E, d.ELEMENTS_INNER_URL), u(c, w, d.CONTROLLER_URL), c),
      j = function (e) {
    function t(e, n) {
      i(this, t);var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return r._ensureMounted = function () {
        r._isMounted() || (r.unmount(), r.type === w && r._autoMount());
      }, r.type = e, r.id = n.frameId || (0, y.nextId)(O), r._iframe = r._createIFrame(r.id, e, n), r.loaded = !1, r._queuedMessages = [], r.on("load", function () {
        r.loaded = !0, r._queuedMessages.forEach(function (e) {
          return r.send(e);
        }), r._queuedMessages = [];
      }), e === w && ("complete" === document.readyState ? r._ensureMounted() : (document.addEventListener("DOMContentLoaded", r._ensureMounted), window.addEventListener("load", r._ensureMounted))), r;
    }return s(t, e), f(t, [{ key: "send", value: function value(e) {
        this._ensureMounted();var t = l({}, e, { __stripeJsV3: !0 }),
            n = this.type === w ? l({}, t, { controllerId: this.id }) : l({}, t, { frameId: this.id });this.loaded ? this._iframe.contentWindow.postMessage(JSON.stringify(n), d.ORIGIN) : this._queuedMessages = [].concat(o(this._queuedMessages), [n]);
      } }, { key: "update", value: function value(e) {
        this.type === w || this.send(l({ action: "stripe-user-update" }, e));
      } }, { key: "updateStyle", value: function value(e) {
        var t = this;Object.keys(e).forEach(function (n) {
          t._iframe.style[n] = e[n];
        });
      } }, { key: "appendTo", value: function value(e) {
        e.appendChild(this._iframe);
      } }, { key: "focus", value: function value() {
        this.loaded && (this._iframe.contentWindow.focus(), this._iframe.focus());
      } }, { key: "blur", value: function value() {
        this.loaded && (this._iframe.contentWindow.blur(), this._iframe.blur());
      } }, { key: "unmount", value: function value() {
        this.loaded = !1, this.emit("unload");
      } }, { key: "_autoMount", value: function value() {
        if (document.body) this.appendTo(document.body);else if ("complete" === document.readyState || "interactive" === document.readyState) throw new g.default("Stripe.js requires that your page has a <body> element.");
      } }, { key: "_isMounted", value: function value() {
        return !!document.body && document.body.contains(this._iframe);
      } }, { key: "_createIFrame", value: function value(e, t, n) {
        var r = (0, h.default)(l({ origin: (0, _.parseUrl)(window.location.toString()).origin }, n)),
            o = document.createElement("iframe");return o.setAttribute("frameborder", "0"), o.setAttribute("allowTransparency", "true"), o.setAttribute("scrolling", "no"), o.setAttribute("name", this.id), o.style.border = "none", o.style.margin = "0", o.style.padding = "0", o.style.width = "1px", o.style.minWidth = "100%", o.style.overflow = "hidden", o.src = S[t] + "#" + r, t === w ? o.style.display = "none" : o.style.display = "block", o;
      } }]), t;
  }(m.default);t.default = j;
}, function (e, t) {
  "use strict";
  function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = function () {
    function e() {
      n(this, e), this._callbacks = {}, this.on = this.addListener = this.addEventListener, this.off = this.removeListener = this.removeEventListener;
    }return r(e, [{ key: "addEventListener", value: function value(e, t) {
        return this._addEventListener(e, t);
      } }, { key: "_addEventListener", value: function value(e, t, n) {
        return this._callbacks[e] = this._callbacks[e] || [], this._callbacks[e].push({ original: n, fn: t }), this;
      } }, { key: "removeEventListener", value: function value(e, t) {
        if ("undefined" == typeof t) delete this._callbacks[e];else for (var n = this._callbacks[e], r = void 0, o = 0; o < n.length; o++) {
          if (r = n[o], r.fn === t || r.original === t) {
            n.splice(o, 1);break;
          }
        }return this;
      } }, { key: "removeAllListeners", value: function value() {
        return this._callbacks = {}, this;
      } }, { key: "once", value: function value(e, t) {
        var n = this,
            r = function r() {
          n.off(e, r), t.apply(void 0, arguments);
        };return this._addEventListener(e, r, t);
      } }, { key: "emit", value: function value(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
          n[r - 1] = arguments[r];
        }var o = this._callbacks[e] || [];return o.forEach(function (e) {
          var t = e.fn;return t.apply(void 0, n);
        }), this;
      } }]), e;
  }();t.default = o;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      i = n(1),
      a = r(i),
      s = function s(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = n.path || [],
        i = n.label || "option",
        s = e.check(t, n),
        u = null === t ? "null" : "undefined" == typeof t ? "undefined" : o(t);if (void 0 === s) throw new a.default("Invalid " + i + ": " + r.join(".") + " should be " + e.description + ".\n      You passed a value of type: " + u + ".");return s;
  };t.default = s;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = n(28),
      i = r(o),
      a = window.Promise || i.default;t.default = a;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function o(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }return n;
    }return Array.from(e);
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.combineTypes = t.misuse = t.arrayOf = t.object = t.number = t.bool = t.string = t.oneOf = t.or = void 0;var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      a = n(1),
      s = r(a),
      u = n(2);t.or = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }return { check: function check(e) {
        var n = (0, u.find)(t, function (t) {
          return !!t.check(e);
        });return n ? n.check(e) : void 0;
      }, description: "one of the following types: " + t.map(function (e) {
        return e.description;
      }).join(", ") };
  }, t.oneOf = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }return { check: function check(e) {
        return (0, u.find)(t, function (t) {
          return t === e;
        });
      }, description: "one of the following strings: " + t.join(", ") };
  }, t.string = { check: function check(e) {
      return "string" == typeof e ? e : void 0;
    }, description: "a string" }, t.bool = { check: function check(e) {
      return "boolean" == typeof e ? e : void 0;
    }, description: "true or false" }, t.number = { check: function check(e) {
      return "number" == typeof e ? e : void 0;
    }, description: "a number" }, t.object = { check: function check(e) {
      return e && "object" === ("undefined" == typeof e ? "undefined" : i(e)) ? e : void 0;
    }, description: "an object" }, t.arrayOf = function (e) {
    return { check: function (e) {
        function t(t) {
          return e.apply(this, arguments);
        }return t.toString = function () {
          return e.toString();
        }, t;
      }(function (t) {
        if (Array.isArray(t)) {
          var n = t.reduce(function (t, n) {
            var r = e.check(n);return void 0 === r ? t : [].concat(o(t), [r]);
          }, []);if (n.length === t.length) return n;
        }
      }), description: "an array of " + e.description };
  }, t.misuse = function (e) {
    return { check: function check(e) {
        return void 0 === e || void 0;
      }, description: "used in " + e + " instead" };
  }, t.combineTypes = function (e) {
    return { check: function check(t, n) {
        var r = n.path || [],
            a = n.label || "option";return t && "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? (0, u.pickBy)((0, u.mapValues)(t, function (t, n) {
          var i = e[n];if (i) {
            var u = i.check(t, { label: a, path: [].concat(o(r), [n]) });if (void 0 === u) throw new s.default("Invalid " + a + ": " + [].concat(o(r), [n]).join(".") + " should be " + i.description + ".");return u;
          }
        }), function (e, t) {
          return void 0 !== t;
        }) : void 0;
      }, description: "an object" };
  };
}, function (e, t) {
  (function (t) {
    "use strict";
    function n(e) {
      s.length || (a(), u = !0), s[s.length] = e;
    }function r() {
      for (; c < s.length;) {
        var e = c;if (c += 1, s[e].call(), c > l) {
          for (var t = 0, n = s.length - c; t < n; t++) {
            s[t] = s[t + c];
          }s.length -= c, c = 0;
        }
      }s.length = 0, c = 0, u = !1;
    }function o(e) {
      var t = 1,
          n = new d(e),
          r = document.createTextNode("");return n.observe(r, { characterData: !0 }), function () {
        t = -t, r.data = t;
      };
    }function i(e) {
      return function () {
        function t() {
          clearTimeout(n), clearInterval(r), e();
        }var n = setTimeout(t, 0),
            r = setInterval(t, 50);
      };
    }e.exports = n;var a,
        s = [],
        u = !1,
        c = 0,
        l = 1024,
        f = "undefined" != typeof t ? t : self,
        d = f.MutationObserver || f.WebKitMutationObserver;a = "function" == typeof d ? o(r) : i(r), n.requestFlush = a, n.makeRequestCallFromTimer = i;
  }).call(t, function () {
    return this;
  }());
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.validate = void 0;var o = n(2),
      i = n(1),
      a = r(i),
      s = n(18);t.validate = function (e, t) {
    if (!(e && e in s.ELEMENT_SPEC)) throw new a.default("A valid component name must be provided. Valid component names are:\n" + Object.keys(s.ELEMENT_SPEC).join(", ") + "; you passed: " + e + ".");if (s.ELEMENT_SPEC[e].unique && t.indexOf(e) !== -1) throw new a.default("Can only create one element of type " + e + ".");var n = (0, o.stringsIntersection)(t, s.ELEMENT_SPEC[e].conflict);if (n.length) {
      var r = n[0];throw new a.default("Cannot create an element of type " + e + " after an element of type " + r + " has already been created.");
    }
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function o(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }return n;
    }return Array.from(e);
  }function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
    }return e;
  },
      s = n(11),
      u = r(s),
      c = n(5),
      l = (r(c), n(4)),
      f = n(3),
      d = n(17),
      p = n(15),
      h = n(8),
      _ = n(7),
      y = r(_),
      v = function e(t, n) {
    var r = this;i(this, e), m.call(this);var s = (0, u.default)(d.elementsOptions, n || {}, { label: "option for `elements()`" });this._elements = [], this._id = (0, l.nextId)("elements"), this._controller = t;var c = s.locale,
        p = s.fonts || [];c && this._controller.action(f.CONTROLLER_ACTIONS.FETCH_LOCALE, { locale: c });var h = p.filter(function (e) {
      return !e.cssSrc || "string" != typeof e.cssSrc;
    }),
        _ = p.filter(function (e) {
      return e.cssSrc && "string" == typeof e.cssSrc;
    });return this._pendingFonts = _.length, this._commonOptions = a({}, s, { fonts: h }), _.forEach(function (e) {
      r._controller.action(f.CONTROLLER_ACTIONS.FETCH_FONT_CSS, a({}, e, { groupId: r._id })).then(function (e) {
        e.length && (r._pendingFonts -= 1, r._commonOptions = a({}, r._commonOptions, { fonts: [].concat(o(r._commonOptions.fonts), o(e)) }));
      }).catch(function (e) {
        throw r._pendingFonts -= 1, e;
      });
    }), this;
  },
      m = function m() {
    var e = this;this.create = function (t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};(0, p.validate)(t, e._elements);var r = (0, u.default)(h.createOptions, n, { label: "option for `create()`" }),
          i = !!e._pendingFonts,
          s = new y.default(a({}, r, e._commonOptions, { controller: e._controller, componentName: t, groupId: e._id, wait: i }));return e._elements = [].concat(o(e._elements), [t]), s;
    };
  };t.default = v;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.elementsOptions = void 0;var r = n(13);t.elementsOptions = (0, r.combineTypes)({ locale: r.string, fonts: (0, r.arrayOf)(r.object) });
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.FieldTypes = t.CSS_TO_JS_FONT_PROPERTY_MAPPINGS = t.JS_TO_CSS_FONT_PROPERTY_MAPPINGS = t.ELEMENT_SPEC = void 0;var r = n(2),
      o = t.ELEMENT_SPEC = { card: { unique: !0, conflict: ["cardNumber", "cardExpiry", "cardCvc", "postalCode"] }, cardNumber: { unique: !0, conflict: ["card"] }, cardExpiry: { unique: !0, conflict: ["card"] }, cardCvc: { unique: !0, conflict: ["card"] }, postalCode: { unique: !0, conflict: ["card"] } },
      i = t.JS_TO_CSS_FONT_PROPERTY_MAPPINGS = { family: "font-family", src: "src", unicodeRange: "unicode-range", style: "font-style", variant: "font-variant", stretch: "font-stretch", weight: "font-weight" };t.CSS_TO_JS_FONT_PROPERTY_MAPPINGS = Object.keys(i).reduce(function (e, t) {
    return e[i[t]] = t, e;
  }, {}), t.FieldTypes = (0, r.zipObject)(Object.keys(o), Object.keys(o));
}, function (e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var n = function n(e) {
    for (var t = 0, n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);t = 31 * t + r, t |= 0;
    }return t.toString();
  },
      r = ["-773399366", "1989136570", "210190701", "1303932147", "-147274945", "-297149942", "687948291", "2030695830", "673389072", "-896430887", "1491181601", "-1873732229", "-890613060", "1073554010", "1324589168", "-326080851", "899343521", "1558301396", "-284704318", "-1985702564", "1556405681", "-732561183", "547661313", "1396140689", "1116452697", "877958346", "482622058", "-18589041", "1528627819", "688924143", "389473637", "-2101644269", "1809632740", "108555703", "507248301", "-888501206", "1693373996", "-1050391243", "1686212698", "1886529469", "-352230169", "-733045116", "-982407076", "1133984419", "2096044571", "699902961", "785670145", "131906610", "-1373531614", "371122836", "-626902830", "-1376994668", "1436894394", "-328393296", "1991723371", "-626825242", "-1682934482", "-1188216841", "-735066355", "-1098637167", "-2101634513", "1035340923", "-819933589", "-1183298800", "2067583735", "-2099885952", "2067438071", "-598151343", "1288525823", "-1042762947", "-745538780", "1533454620", "-1056808292", "-1815016130", "151420091", "575269458", "-1412987990", "485196232", "1250357440", "-347019723", "-1515919642", "-1940611553", "177978312", "-1662969253", "1117201369", "410483761", "373007540", "-1251286857", "880682170", "-1849683474", "62874849", "-1237193657", "828183583", "798735774", "1045093605", "629826665"];t.isNonHttpsWhitelisted = function (e) {
    return r.indexOf(n(e)) !== -1;
  };
}, function (e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var n = "1.2em",
      r = "14px",
      o = function o() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
    if (/^[0-9.]+px$/.test(e)) return e;var o = parseFloat(t.toString().replace(/[^0-9.]/g, "")),
        i = parseFloat(e.toString().replace(/[^0-9.]/g, ""));/^[0-9.]+px$/.test(t) || (o *= parseFloat(r.replace(/[^0-9.]/g, "")));var a = i * o + "px";return (/^[0-9.]+px$/.test(a) ? a : "100%"
    );
  };t.default = o;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var r = n(2),
      o = "a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  iframe, object, embed, *[tabindex], *[contenteditable]",
      i = function i(e, t) {
    for (var n = document.querySelectorAll(o), i = (0, r.findIndex)(n, function (t) {
      return t === e || e.contains(t);
    }), a = "previous" === t ? -1 : 1, s = a, u = n[i + s]; u && e.contains(u);) {
      s += a, u = n[i + s];
    }return u && u.contentWindow ? u.contentWindow : u;
  };t.default = i;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.updateClasses = void 0;var o = n(26),
      i = r(o);t.updateClasses = function (e, t) {
    var n = {};Object.keys(t).forEach(function (e) {
      e.split(/\s+/).forEach(function (r) {
        r && (n[r] = t[e]);
      });
    }), e.className = (0, i.default)(e.className, n);
  };
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isSameOrigin = t.isStripeOrigin = void 0;var r = n(6);t.isStripeOrigin = function (e) {
    var t = (0, r.parseUrl)(e).host;return "stripe.com" === t || !!t.match(/\.stripe\.(com|me)$/);
  }, t.isSameOrigin = function (e, t) {
    var n = (0, r.parseUrl)(e).origin,
        o = (0, r.parseUrl)(t).origin;return n === o;
  };
}, function (e, t) {
  "use strict";
  function n(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }return n;
    }return Array.from(e);
  }Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      o = function e(t, o) {
    var i = [];return Object.keys(t).forEach(function (a) {
      var s = t[a],
          u = o ? o + "[" + a + "]" : a;if ("object" === ("undefined" == typeof s ? "undefined" : r(s))) {
        var c = e(s, u);"" !== c && (i = [].concat(n(i), [c]));
      } else void 0 !== s && (i = [].concat(n(i), [u + "=" + encodeURIComponent(s)]));
    }), i.join("&").replace(/%20/g, "+");
  };t.default = o;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var i = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
    }return e;
  },
      a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      s = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      u = n(16),
      c = r(u),
      l = n(7),
      f = r(l),
      d = n(4),
      p = n(3),
      h = n(1),
      _ = r(h),
      y = n(12),
      v = r(y),
      m = n(19),
      b = n(5),
      g = r(b),
      O = function () {
    function e(t) {
      var n = this,
          r = t.apiKey;if (o(this, e), this.elements = function (e) {
        var t = new c.default(n._controller, e);return t;
      }, this.createToken = function (e, t) {
        var r = "string" == typeof e ? e : void 0,
            o = e instanceof f.default ? e._frame.id : void 0,
            s = t && "object" === ("undefined" == typeof t ? "undefined" : a(t)) ? t : {};return n._controller.action(p.CONTROLLER_ACTIONS.TOKENIZE, i({ type: r, frameId: o }, s));
      }, this.createSource = function (e, t) {
        var r = e instanceof f.default ? e._frame.id : void 0,
            o = r ? t : e;return !r && o && "object" !== ("undefined" == typeof o ? "undefined" : a(o)) ? v.default.reject(new _.default("Please provide Source creation parameters to createSource.")) : n._controller.action(p.CONTROLLER_ACTIONS.CREATE_SOURCE, { frameId: r, data: o });
      }, this.completeSource = function (e) {
        return n._controller.action(p.CONTROLLER_ACTIONS.COMPLETE_SOURCE, { source: e });
      }, !r) throw new _.default("Please specify a publishable key.");if (0 === r.indexOf("sk_")) throw new _.default("You should not use your secret key with Stripe.js.\n        Please pass a publishable key instead.");this._apiKey = r, this._controller = new g.default({ apiKey: r, stripeJsId: e.stripeJsId }), this._ensureHTTPS(r);
    }return s(e, [{ key: "_ensureHTTPS", value: function value(e) {
        var t = window.location.protocol,
            n = "https:" === t,
            r = ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(window.location.hostname) !== -1,
            o = 0 === e.indexOf("pk_live_"),
            i = "Live Stripe.js integrations must use HTTPS.";if (!n) {
          if (o && !r && !(0, m.isNonHttpsWhitelisted)(e)) throw this._controller.report("non_https_error", { protocol: t }), new _.default(i);!o || r ? window.console && console.warn("You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS.") : window.console && console.warn(i);
        }
      } }]), e;
  }();O.version = 3, O.stripeJsId = (0, d.uuid)();var E = function E(e) {
    return new O({ apiKey: e });
  };E.version = O.version, window.Stripe && 2 === window.Stripe.version ? window.Stripe.StripeV3 = E : window.Stripe = E, e.exports = E;
}, function (e, t, n) {
  var r, o;!function () {
    "use strict";
    var n = function () {
      function e() {}function t(e, t) {
        for (var n = t.length, r = 0; r < n; ++r) {
          i(e, t[r]);
        }
      }function n(e, t) {
        e[t] = !0;
      }function r(e, t) {
        for (var n in t) {
          s.call(t, n) && (e[n] = !!t[n]);
        }
      }function o(e, t) {
        for (var n = t.split(u), r = n.length, o = 0; o < r; ++o) {
          e[n[o]] = !0;
        }
      }function i(e, i) {
        if (i) {
          var a = typeof i === "undefined" ? "undefined" : _typeof(i);"string" === a ? o(e, i) : Array.isArray(i) ? t(e, i) : "object" === a ? r(e, i) : "number" === a && n(e, i);
        }
      }function a() {
        for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) {
          r[o] = arguments[o];
        }var i = new e();t(i, r);var a = [];for (var s in i) {
          i[s] && a.push(s);
        }return a.join(" ");
      }e.prototype = Object.create(null);var s = {}.hasOwnProperty,
          u = /\s+/;return a;
    }();"undefined" != typeof e && e.exports ? e.exports = n : (r = [], o = function () {
      return n;
    }.apply(t, r), !(void 0 !== o && (e.exports = o)));
  }();
}, function (e, t, n) {
  "use strict";
  function r() {}function o(e) {
    try {
      return e.then;
    } catch (e) {
      return v = e, m;
    }
  }function i(e, t) {
    try {
      return e(t);
    } catch (e) {
      return v = e, m;
    }
  }function a(e, t, n) {
    try {
      e(t, n);
    } catch (e) {
      return v = e, m;
    }
  }function s(e) {
    if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");if ("function" != typeof e) throw new TypeError("not a function");this._45 = 0, this._81 = 0, this._65 = null, this._54 = null, e !== r && _(e, this);
  }function u(e, t, n) {
    return new e.constructor(function (o, i) {
      var a = new s(r);a.then(o, i), c(e, new h(t, n, a));
    });
  }function c(e, t) {
    for (; 3 === e._81;) {
      e = e._65;
    }return s._10 && s._10(e), 0 === e._81 ? 0 === e._45 ? (e._45 = 1, void (e._54 = t)) : 1 === e._45 ? (e._45 = 2, void (e._54 = [e._54, t])) : void e._54.push(t) : void l(e, t);
  }function l(e, t) {
    y(function () {
      var n = 1 === e._81 ? t.onFulfilled : t.onRejected;if (null === n) return void (1 === e._81 ? f(t.promise, e._65) : d(t.promise, e._65));var r = i(n, e._65);r === m ? d(t.promise, v) : f(t.promise, r);
    });
  }function f(e, t) {
    if (t === e) return d(e, new TypeError("A promise cannot be resolved with itself."));if (t && ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t)) {
      var n = o(t);if (n === m) return d(e, v);if (n === e.then && t instanceof s) return e._81 = 3, e._65 = t, void p(e);if ("function" == typeof n) return void _(n.bind(t), e);
    }e._81 = 1, e._65 = t, p(e);
  }function d(e, t) {
    e._81 = 2, e._65 = t, s._97 && s._97(e, t), p(e);
  }function p(e) {
    if (1 === e._45 && (c(e, e._54), e._54 = null), 2 === e._45) {
      for (var t = 0; t < e._54.length; t++) {
        c(e, e._54[t]);
      }e._54 = null;
    }
  }function h(e, t, n) {
    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n;
  }function _(e, t) {
    var n = !1,
        r = a(e, function (e) {
      n || (n = !0, f(t, e));
    }, function (e) {
      n || (n = !0, d(t, e));
    });n || r !== m || (n = !0, d(t, v));
  }var y = n(14),
      v = null,
      m = {};e.exports = s, s._10 = null, s._97 = null, s._61 = r, s.prototype.then = function (e, t) {
    if (this.constructor !== s) return u(this, e, t);var n = new s(r);return c(this, new h(e, t, n)), n;
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    var t = new o(o._61);return t._81 = 1, t._65 = e, t;
  }var o = n(27);e.exports = o;var i = r(!0),
      a = r(!1),
      s = r(null),
      u = r(void 0),
      c = r(0),
      l = r("");o.resolve = function (e) {
    if (e instanceof o) return e;if (null === e) return s;if (void 0 === e) return u;if (e === !0) return i;if (e === !1) return a;if (0 === e) return c;if ("" === e) return l;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) try {
      var t = e.then;if ("function" == typeof t) return new o(t.bind(e));
    } catch (e) {
      return new o(function (t, n) {
        n(e);
      });
    }return r(e);
  }, o.all = function (e) {
    var t = Array.prototype.slice.call(e);return new o(function (e, n) {
      function r(a, s) {
        if (s && ("object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || "function" == typeof s)) {
          if (s instanceof o && s.then === o.prototype.then) {
            for (; 3 === s._81;) {
              s = s._65;
            }return 1 === s._81 ? r(a, s._65) : (2 === s._81 && n(s._65), void s.then(function (e) {
              r(a, e);
            }, n));
          }var u = s.then;if ("function" == typeof u) {
            var c = new o(u.bind(s));return void c.then(function (e) {
              r(a, e);
            }, n);
          }
        }t[a] = s, 0 === --i && e(t);
      }if (0 === t.length) return e([]);for (var i = t.length, a = 0; a < t.length; a++) {
        r(a, t[a]);
      }
    });
  }, o.reject = function (e) {
    return new o(function (t, n) {
      n(e);
    });
  }, o.race = function (e) {
    return new o(function (t, n) {
      e.forEach(function (e) {
        o.resolve(e).then(t, n);
      });
    });
  }, o.prototype.catch = function (e) {
    return this.then(null, e);
  };
}]);

/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_require__(1137);
__webpack_require__(1127);
__webpack_require__(1123);
__webpack_require__(1135);
__webpack_require__(1128);
__webpack_require__(1122);
__webpack_require__(1132);
__webpack_require__(1130);
__webpack_require__(384);
__webpack_require__(1208);

$(function () {
  formBuilderBaseModel = appModel.extend({
    baseDefaults: function baseDefaults() {
      var d = _extends({}, __webpack_require__(489).default, {
        smartButtonsEnabled: new Date(META.created_at) > new Date('2018-12-17')
      });
      if (HOST == 'weebly') {
        d['formTriggerElementStyle'] = 'tab';
        d['formTriggerPositionOffset'] = '50%';
      }

      if (HOST == 'wix') {
        try {
          var header_font = Wix.Styles.getSiteTextPresets()['Heading-M'].fontFamily;
          var body_font = Wix.Styles.getSiteTextPresets()['Body-M'].fontFamily;
          d['inputFontFamily'] = body_font;
          d['textFontFamily'] = body_font;
          d['titleFontFamily'] = header_font;
        } catch (err) {}
        d['titleFontColorWix'] = 'color-5'; //title / heading text
        d['textFontColorWix'] = 'color-4'; //Running text
        d['inputBackgroundColorWix'] = 'color-1'; //background color
        d['inputFontColorWix'] = 'color-4'; //Running text
        d['backgroundColorWix'] = 'color-1'; //background color
        d['backgroundStartColorWix'] = 'color-1'; //background color
        d['backgroundEndColorWix'] = 'color-2'; //border or background color
        d['buttonColorWix'] = 'color-1'; //background color
        d['buttonBackgroundColorWix'] = 'color-8'; //master / brand color
        d['backgroundBorderColorWix'] = 'color-2'; //border or background color
      }
      return d;
    },
    loadChameleonToModel: function loadChameleonToModel() {
      var mapper = {
        titleFontFamily: 'header.fontFamily',
        titleFontSize: 'header.fontSize',
        titleFontColor: 'header.color',
        textFontFamily: 'text.fontFamily',
        textFontSize: 'text.fontSize',
        textFontColor: 'text.color',
        buttonBackgroundColor: 'button.background',
        buttonColor: 'button.color',
        backgroundColor: 'div.background',
        inputFontSize: 'text.fontSize',
        inputFontFamily: 'input.fontFamily'
      };

      this.mapChameleonToModel(this, mapper);
    },
    addOrUpdatePowrMail: function addOrUpdatePowrMail(emails) {
      APP_SETTINGS.observableStore.updateValue({
        key: 'model.emails',
        value: emails,
        refreshSettings: true
      });
    },

    resetCart: function resetCart() {
      var webview_reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (webview_reset) {
        APP_MODEL.syncLocalData(true);
        APP_MODEL.setLocals({ checkoutData: null });
        APP_MODEL.view.afterSubmission();
      } else if ((this.get('locals').checkoutData || {}).confirmation_code) {
        // successful payment - tell the form to be done
        window.opener.APP_MODEL.syncLocalData(true);
        window.opener.APP_MODEL.setLocals({ checkoutData: null });
        window.opener.APP_MODEL.view.afterSubmission();
      }
    },

    connectToStripe: function connectToStripe() {
      if (!META.external_data || !META.external_data.stripe_connected) {
        var redirect = baseUri() + '/stripe/connect/';
        if (ENVIRONMENT == 'production') {
          var client_id = 'ca_AXJPUCBikBt9fKD9Oy3keLEGlommaUyd';
        } else {
          var client_id = 'ca_AXJPkT7jXZWeoXBz1AcNdGlY6Uc5VlWY';
        }
        var url = 'https://connect.stripe.com/oauth/authorize?response_type=code&client_id=' + client_id + '&scope=read_write&state=' + META.id + '&redirect_uri=' + redirect;
        var w = Math.round(screen.width / 2); //1/2 of screen width
        var h = screen.height; //Full height
        window.name = META.id;
        window.open(url, '', 'width=' + w + ',height=' + h + ',scrollbars=1');
      }
    },

    shouldShowDiscount: function shouldShowDiscount() {
      return this.attributes.discounts.length > 0;
    },

    calculateCheckoutData: function calculateCheckoutData() {
      var self = this;
      var m = this.attributes;
      var discountCodeStatus = null;
      var quantity = getFloat(m.locals.quantity) || getFloat(m.paypalQuantity) || 1;
      var purchaseType = m.paypalPurchaseType;
      var itemPrice = getFloat(this.formElementsViewModule.calculatePrice().replace(/[^\d.,-]/g, ''));
      itemPrice = twoDecimals((m.paypalAllowUserToSpecifyPrice ? m.locals.donation || itemPrice : itemPrice) * quantity);
      var merchantPriceMissing = m.paypalAllowUserToSpecifyPrice ? true : m.paypalPurchaseType === 'BuyNow' && getFloat(itemPrice) === 0 || m.paypalPurchaseType === 'Donate' && getFloat(itemPrice) === 0.0;

      if ((merchantPriceMissing || !!m.donation) && getFloat(itemPrice) < 0) {
        itemPrice = twoDecimals(parseFloat($('#user-price-amount').val()) || 0);
      }

      if (getFloat(itemPrice) < 0) {
        itemPrice = "0.00";
      }

      if (m.paypalTrialOn) {
        var trialPrice = getFloat(m.paypalTrialPrice);
        if (m.locals && m.locals.checkoutData && m.locals.checkoutData.api) {
          var min = minimumCharge(m.paypalCurrencyCode, m.locals.checkoutData.api);
          if (trialPrice < min) {
            trialPrice = min;
          };
        }
      }

      var paymentMethods = [];
      if (m.paypalEnabled && m.paypalPaypalAccount) {
        paymentMethods.push("Paypal");
      };
      if (m.stripeEnabled && (META.external_data || {}).stripe_connected) {
        paymentMethods.push("Stripe");
      };
      if (m.braintreeEnabled && (META.external_data || {}).braintree_connected) {
        paymentMethods.push("Braintree");
      };
      if (m.offlineEnabled) {
        paymentMethods.push("Offline");
      };

      var discount = 0;
      var discountCode = self.get("locals").discountCode;
      var validCode = false;
      m.discounts.forEach(function (d) {
        if (d.discountCode == discountCode) {
          validCode = d;
        }
      });
      if (validCode) {
        discountCodeStatus = 'success';
        if (validCode.discountType === 'rate') {
          discount = getFloat(itemPrice) * (validCode.discountAmount / 100);
          if (m.paypalTrialOn) {
            var trialDiscount = getFloat(m.paypalTrialPrice) * (getFloat(validCode.discountAmount) / 100);
          }
        } else {
          discount = getFloat(validCode.discountAmount);
        }
      }
      if (discountCode && !validCode) {
        discountCodeStatus = 'failure';
      }

      if (m.paypalTaxType === 'rate') {
        var tax = (getFloat(itemPrice) - getFloat(discount)) * (getFloat(m.paypalTaxRate) / 100);
        if (m.paypalTrialOn) {
          var trialTax = getFloat(m.paypalTrialPrice) * (getFloat(m.paypalTaxRate) / 100);
        }
      } else {
        var tax = getFloat(m.paypalTaxAmount);
      }

      if (!m.locals.window_checkout) {
        //Don't try to look to the view to get form response submit data if you're in checkout window
        try {
          var formResponse = this.view.getSubmitData();
        } catch (e) {}
      }

      var formResponse = formResponse || (m.locals.checkoutData && m.locals.checkoutData.form_response ? m.locals.checkoutData.form_response : []);

      var addressNotRequired = m.paypalNoShipping !== '2' && m.paypalNoShipping !== true || m.data.filter(function (d) {
        return d.isShippingAddress;
      }).length > 0;
      var directlyToPaypal = paymentMethods.length === 1 && arrayHasValue(paymentMethods, 'Paypal') && !merchantPriceMissing && !m.paypalAllowUserToSpecifyPrice && !m.paypalAllowUserToSpecifyQuantity && !m.showQuantityInput && !m.noteToSeller && !m.smartButtonsEnabled && !this.shouldShowDiscount() && m.paypalPurchaseType !== 'Donate';

      if (purchaseType === 'Recurring' && m.paypalTrialOn) {
        var trial = {
          items_price: trialPrice,
          tax: trialTax,
          shipping: getFloat(m.paypalShippingCost),
          discount: trialDiscount,
          total: null
        };
      } else {
        var trial = null;
      }

      var data = {
        purchase_type: purchaseType,
        currency: m.paypalCurrencyCode,
        item: {
          title: m.paypalItemName,
          quantity: quantity,
          displayPrice: trial ? twoDecimals(trial.items_price) : itemPrice
        },
        totals: { post_trial: null, trial: null },
        post_trial: {
          items_price: getFloat(itemPrice),
          tax: tax,
          shipping: getFloat(m.paypalShippingCost),
          discount: discount,
          total: null
        },
        trial: trial,
        paymentMethods: paymentMethods,
        api: m.locals.checkoutData && m.locals.checkoutData.api && paymentMethods.indexOf(m.locals.checkoutData.api) > -1 ? m.locals.checkoutData.api : paymentMethods[0],
        addressNotRequired: addressNotRequired,
        allowUserToSpecifyQuantity: m.paypalAllowUserToSpecifyQuantity || m.showQuantityInput || false,
        allowUserToSpecifyPrice: m.paypalAllowUserToSpecifyPrice || false,
        donation: m.locals.donation || twoDecimals(getFloat(itemPrice) / quantity),
        showDiscount: this.shouldShowDiscount(),
        discount_code: this.get('locals').discountCode,
        discountCodeStatus: discountCodeStatus,
        directlyToPaypal: directlyToPaypal,
        merchantPriceMissing: merchantPriceMissing || !!m.locals.donation,
        memo: m.locals.checkoutData ? m.locals.checkoutData.memo : null,
        smartButtonsEnabled: m.smartButtonsEnabled && !window.isWebview(),
        form_response: formResponse,
        app_id: META.id
      };

      data.post_trial.total = addTotals(data);
      data.totals.post_trial = addTotals(data);

      var min = minimumCharge(data.currency, data.api);
      if (data.post_trial.total < min) {
        data.post_trial.total = twoDecimals(min);
        data.totals.post_trial = twoDecimals(min);
        data.detailedRecurringString = data.recurringString || '';
        data.detailedRecurringString += '\n*minimum charge allowed';
      };

      if (purchaseType === 'Recurring') {
        data.recurringString = recurringString(m);

        if (m.paypalTrialOn) {
          data.trial.total = addTotals(data, 'trial');
          data.totals.trial = addTotals(data, 'trial');

          var m2 = $.extend(true, {}, m);
          m2.paypalTrialOn = false;
          data.detailedRecurringString = recurringString(m) + ', then ' + currency() + data.post_trial.total + ' ' + recurringString(m2);
          if (min && trialPrice === min) {
            data.detailedRecurringString += '\n*minimum charge allowed';
          }
        }
      }

      try {
        var buyerEmail = this.view.getConfirmationEmail(formResponse);
      } catch (e) {
        var buyerEmail = '';
      }

      try {
        var buyerAddress = this.view.getConfirmationAddress(formResponse);
      } catch (e) {
        var buyerAddress = null;
      }

      data.buyer_data = { email: buyerEmail };

      if (buyerAddress) {
        var _buyerAddress$split = buyerAddress.split(", "),
            _buyerAddress$split2 = _slicedToArray(_buyerAddress$split, 6),
            address1 = _buyerAddress$split2[0],
            address2 = _buyerAddress$split2[1],
            city = _buyerAddress$split2[2],
            state = _buyerAddress$split2[3],
            zip = _buyerAddress$split2[4],
            country = _buyerAddress$split2[5];

        data.buyer_data['address'] = address1 + ' ' + address2;
        data.buyer_data['city'] = '' + city;
        data.buyer_data['state_or_provence'] = '' + state;
        data.buyer_data['zip_or_country'] = country + ' ' + zip;
      }

      this.setLocals({ checkoutData: data });
      return data;
    },

    syncLocalData: function syncLocalData(erasePreviousData) {
      erasePreviousData = erasePreviousData || false;

      var self = this;
      var locals = this.get('locals');
      var localDataExists = locals.data && locals.data.length;
      var data = JSON.parse(JSON.stringify(this.get('data')));
      data = data.map(function (element, i) {
        // moving this one to new idx standards
        // before
        // element.idx = idx
        // now
        if (!element.idx) element.idx = window.uniqueLabel(true);
        if (!erasePreviousData) {
          var localElement = localDataExists ? _.findWhere(locals.data, { idx: element.idx }) : null;

          // If the form owner updates properties on the model these shouldn't
          // be overwritten by previous localElement values
          if (localElement && !locals.data[0].isDefault) {
            ['value', 'src', 'selectedOption', 'dateTimeHidden', 'selectedOptions', 'address1', 'address2', 'city', 'state', 'zip', 'country', 'checked'].forEach(function (property) {
              element[property] = localElement[property];
            });
          }
        }

        if (element.type === 'signature') {
          var src = $('#signature-' + element.idx).next('.signatureImage').prop('src');
          if (src) {
            element.src = src;
          }
        }

        return element;
      });

      this.setLocals({ data: data });
    },
    afterMount: function afterMount() {
      // this.set({ removePowrLogo: true });
      if (this.get('formTriggerElementType') == 'fixed') {
        this.setLocals({ displayMode: this.get('formTriggerElementStyle') });
      } else {
        this.setLocals({ displayMode: 'default' });
      }
    }
  });

  formBuilderAppModel = formBuilderBaseModel;
  orderFormAppModel = formBuilderBaseModel;
  contactFormAppModel = formBuilderBaseModel;
  mailingListAppModel = formBuilderBaseModel;
  surveyAppModel = formBuilderBaseModel;
  pollAppModel = formBuilderBaseModel;
  wixDevAppModel = formBuilderAppModel; //KEEP THIS FOR WIX QA

  stagingDevAppModel = formBuilderAppModel;

  localDevAppModel = formBuilderAppModel;

  formBuilderAppSettings = appSettings.extend({
    beforeInitialize: function beforeInitialize() {
      var self = this;

      self.formElementsSettingsModule = new formElementsSettingsModule(this, {
        formDataKey: 'data',
        paymentRequiredKey: 'paymentRequired'
      });

      self.model.settings = self;
    },
    googleSheetsAuthSuccess: function googleSheetsAuthSuccess() {
      this.observableStore.updateValue({
        key: 'model.googleSheetsConnected',
        value: true,
        refreshSettings: true
      });
    },
    stripeAuthSuccess: function stripeAuthSuccess() {
      META.external_data = META.external_data || {};
      META.external_data.stripe_connected = true;
      if (this.observableStore) {
        this.observableStore.updateValue({
          key: 'model.stripeEnabled',
          value: true,
          refreshSettings: true
        });
      } else {
        this.$el.find('[name=stripeEnabled]').prop('checked', true).trigger('forceUpdateComponent');
        this.update();
      }
    },
    googleSheetsDisconnectSuccess: function googleSheetsDisconnectSuccess() {
      this.observableStore.updateValue({
        key: 'model.googleSheetsConnected',
        value: false,
        refreshSettings: true
      });
    },

    afterInitialize: function afterInitialize() {
      var self = this;
      var m = this.model;
      var el = this.$el;

      __webpack_require__.e(/* require.ensure | async_settings */ 66).then((function (require) {
        var componentRenderer = __webpack_require__(2290).default;
        componentRenderer(self, 'form_builder', [{
          component: 'content',
          querySelector: '#powr-form-builder-content'
        }, {
          component: 'settings',
          querySelector: '#powr-form-builder-settings'
        }, {
          component: 'payment',
          querySelector: '#powr-form-builder-payment'
        }, {
          component: 'design',
          querySelector: '#powr-form-builder-design'
        }, {
          component: 'import',
          querySelector: '#powr-get-started'
        }]);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

      // this is just temp, waiting for a/b to finish
      // does not touch any dom el.
      self.loadTemplates();
    },

    getPowrMailFormResponse: function getPowrMailFormResponse() {
      var labeled = [];
      this.model.attributes.data.forEach(function (el) {
        if (el.label && ['signature', 'label'].indexOf(el.type) === -1) {
          labeled.push(el);
        }
      });

      return labeled.map(function (formElement) {
        return {
          label: formElement.label,
          display_label: formElement['label']
        };
      }).filter(function (response) {
        return response;
      });
    },

    afterUpdate: function afterUpdate() {
      var self = this;

      //Emails
      var steps = self.model.get('data').filter(function (formElement) {
        return formElement.type === 'step';
      });

      var multistepForm = steps.length > 1;

      //clear any saved progress
      try {
        localStorage.removeItem('Form_' + self.model.meta.id + '_locals');
        localStorage.removeItem('Form_' + self.model.meta.id + '_timestamp');
      } catch (e) {}

      this.model.set({
        multistepForm: multistepForm
      }, { silent: true });
      this.model.triggerChange();
      this.handleMultistepForms();
    },
    afterSort: function afterSort() {
      this.afterUpdate();
      this.handleMultistepForms();
    },
    maxNumberOfElements: function maxNumberOfElements() {
      var numElements = this.model.get('data').length;
      var maxNumberOfElements = parseInt(this.$el.find('.triggerElementModal').attr('data-' + this.model.meta.premium_status + '-limit'));

      return maxNumberOfElements < numElements;
    },
    handleMultistepForms: function handleMultistepForms(clickedEl) {
      clickedEl = clickedEl || null;
      var data = this.model.get('data');

      if (clickedEl) {
        if (clickedEl.prop('checked')) {
          // If multistep form, first element should be step 1
          if (data[0].type !== 'step') {
            this.model.setLocals({
              currenStepIdx: 0,
              previousStepIdxs: [],
              nextStepIdx: null
            });
            this.model.set({
              multistepForm: true,
              data: [{ type: 'step' }].concat(data)
            });
          }
        } else {
          // remove steps
          data = data.filter(function (element) {
            return element.type !== 'step';
          });
          this.model.setLocals({
            currenStepIdx: 0,
            previousStepIdxs: [],
            nextStepIdx: null
          });
          this.model.set({ multistepForm: false, data: data });
        }
      } else {
        // If multistep form, first element should be step 1
        if (this.model.get('multistepForm') && !this.maxNumberOfElements()) {
          this.model.setLocals({
            currenStepIdx: 0,
            previousStepIdxs: [],
            nextStepIdx: null
          });
          if (data[0].type !== 'step') {
            this.model.set({ data: [{ type: 'step' }].concat(data) });
          }
        } else {
          // remove steps
          data = data.filter(function (element) {
            return element.type !== 'step';
          });
          this.model.set({ data: data });
        }
      }

      // reset to step 1
      this.$el.find('#formBackButton').hide();
      this.model.syncLocalData(true);

      // Keep expanded panels expanded after rerender
      var expandedPanels = this.$el.find('.formElements .panel-collapse').map(function (idx, el) {
        if (el.style.display === 'block') {
          return $(el).find('.form-element.hid').prop('id');
        }
      }).toArray();

      var expandedAdvancedSections = this.$el.find('.formElements .hideText').map(function (idx, el) {
        return $(el).parent().find('.form-element').first().prop('id');
      }).toArray();

      var scrollHeight = this.$el.find('.connect').scrollTop() || this.$el.find('.wixSection.connectTabSelector').scrollTop();

      this.model.setLocals({
        expandedPanels: expandedPanels,
        expandedAdvancedSections: expandedAdvancedSections
      });

      var scrollHeight = this.$el.find('.connect').scrollTop() || this.$el.find('.wixSection.connectTabSelector').scrollTop();
      var currentFocus = this.$el.find(':focus');

      if (this.model.get('locals').editingSteps) {
        this.model.setLocals({ editingSteps: false });
      }

      if (this.maxNumberOfElements()) {
        this.$el.find('.triggerElementModal').addClass('premium');
      }
    },

    afterRender: function afterRender() {
      var self = this;
      if (HOST == 'wix') {
        //Set the open dashboard URL in Wix
        Wix.Settings.getDashboardAppUrl(function (url) {
          //Set the open dashboard url
          if (url) {
            url += '&powr_app_id=' + self.model.meta.id;
          } else {
            url = '/apps/' + self.model.meta.id + '/responses';
          }
          debug()('Setting dashboard to ' + url);
          self.$el.find('.openDashboard').attr('href', url);
        });
        Wix.Dashboard.getEditorUrl(function (url) {
          //Sets the link to view in editor
          self.$el.find('.openSite').attr('href', url);
        });
      }
    }
  });

  formBuilderAppView = appView.extend({
    beforeInitialize: function beforeInitialize() {
      var self = this;
      try {
        var stored = JSON.parse(localStorage.getItem('Form_' + self.model.meta.id + '_locals'));
        var timestamp = new Date(localStorage.getItem('Form_' + self.model.meta.id + '_timestamp'));
        var oldAF = new Date() - timestamp > 604800000 ? true : false;
        //                                     ^^ milliseconds in 1 week

        if (oldAF) {
          localStorage.removeItem('Form_' + self.model.meta.id + '_locals');
          localStorage.removeItem('Form_' + self.model.meta.id + '_timestamp');
        } else {
          self.model.setLocals(stored);
        }
      } catch (e) {}

      // For old forms, where there is no idx - adding it to the model so conditional elements work.
      self.model.get('data').forEach(function (formElement) {
        if (!formElement.idx) formElement.idx = window.uniqueLabel(true);
      });

      //Close form modal
      this.$el.on('mouseup touchstart', '.js-trigger-close', function (e) {
        self.model.setLocals({ displayMode: self.model.get('formTriggerElementStyle') });
        self.render();
        self.captchaHeightHack();
      });
      // this.$el.on('mouseup touchstart', function(e) {
      //   if (self.model.get('locals').displayMode != 'modalForm') { return }
      //   if ($(e.target).hasClass('js-trigger-modal-form')) { return }
      //   var container = self.$el.find('.formBuilder');
      //   if (!container.is(e.target) && container.has(e.target).length === 0) {
      //     self.model.setLocals({displayMode: self.model.get('formTriggerElementStyle')});
      //     self.render();
      //   }
      // });

      this.$el.on('click touchstart', '.js-trigger-modal-form', function () {
        self.model.setLocals({ displayMode: 'modalForm' });
        self.render();
        self.captchaHeightHack();
      });

      self.formElementsViewModule = new formElementsViewModule(this, {}); //Initialize the form elements
      self.model.formElementsViewModule = self.formElementsViewModule;
      self.model.view = self;

      if (getURLParameter('confirmation_code')) {
        this.model.calculateCheckoutData();
        window.showCheckoutModal(false);
        $('.checkoutModal').css('z-index', '1');
      }
    },
    nextStep: function nextStep(e) {
      this.formElementsViewModule.saveData();
      if (this.model.get('locals').lastStep) {
        this.submitForm(e);
      }

      this.formElementsViewModule.renderFormElements('next');
    },
    previousStep: function previousStep() {
      this.formElementsViewModule.renderFormElements('previous');
    },
    afterCorrectPassword: function afterCorrectPassword() {
      // this.model.setLocals({
      //   currentStepIdx: 0,
      //   previousStepIdxs: []
      // });

      this.formElementsViewModule.renderFormElements();
      this.$el.find('#formBackButton').hide();
    },
    setPosition: function setPosition() {
      var postCss = {
        //CSS That will be posted to parent JS
        display: 'block',
        position: 'fixed',
        zIndex: 9999999,
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        height: 'unset',
        transform: 'none',
        webkitTransform: 'none',
        transformOrigin: 'unset',
        webkitTransformOrigin: 'unset',
        width: '100%'
      };
      if (this.model.get('locals').displayMode == 'default') {
        $.extend(postCss, {
          position: 'unset',
          zIndex: 'unset'
        });
        var overridePostCssHeight = true;
      }
      if (this.model.get('locals').displayMode == 'modalForm') {
        $.extend(postCss, {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: '100%',
          width: '100%'
        });
        var overridePostCssHeight = false;
      } else if (['tab', 'floatingButton'].indexOf(this.model.get('locals').displayMode) > -1) {
        var overridePostCssHeight = true;
        ////Compute width/////////
        this.$el.css('width', '1000px');
        var width = this.$el.find('.fixed-element').outerWidth();
        //width = Math.min(width, $(window).width()); //ideally need to make sure is not too wide but this wont work
        this.$el.css('width', 'auto');
        postCss.minWidth = 'unset';
        postCss.width = width + 'px';
        var is_standalone = this.model.meta.is_standalone;
        if (is_standalone) {
          var window_width = $(window).width();
          var window_height = $(window).height();
          var available_width = window_width - 400;
          var available_height = window_height - 64;
          var offset_percentage = parseInt(this.model.get('formTriggerPositionOffset')); //eg 52
          var horizontal_offset_in_pixels = 400 + offset_percentage * available_width / 100 + 'px';
          var vertical_offset_in_pixels = 64 + offset_percentage * available_height / 100 + 'px';
        }
        if (this.model.get('locals').displayMode == 'tab') {
          postCss.display = 'table';
          switch (this.model.get('formTriggerTabLocation')) {
            case 'right':
              if (is_standalone) {
                postCss.top = vertical_offset_in_pixels;
              } else {
                postCss.top = this.model.get('formTriggerPositionOffset');
              }
              postCss.right = 0;
              postCss.transform = 'rotate(-90deg) translateY(-100%) translateX(' + parseInt(this.model.get('formTriggerPositionOffset')) + '%)';
              postCss.webkitTransform = 'rotate(-90deg) translateY(-100%) translateX(' + parseInt(this.model.get('formTriggerPositionOffset')) + '%)';
              postCss.transformOrigin = 'right top';
              postCss.webkitTransformOrigin = 'right top';
              break;
            case 'left':
              if (is_standalone) {
                postCss.top = vertical_offset_in_pixels;
                postCss.left = '400px';
              } else {
                postCss.top = this.model.get('formTriggerPositionOffset');
                postCss.left = 0;
              }
              postCss.transform = 'rotate(90deg) translateY(-100%) translateX(-' + parseInt(this.model.get('formTriggerPositionOffset')) + '%)';
              postCss.webkitTransform = 'rotate(90deg) translateY(-100%) translateX(-' + parseInt(this.model.get('formTriggerPositionOffset')) + '%)';
              postCss.transformOrigin = 'left top';
              postCss.webkitTransformOrigin = 'left top';
              break;
            case 'bottom':
              if (is_standalone) {
                postCss.left = horizontal_offset_in_pixels;
              } else {
                postCss.left = this.model.get('formTriggerPositionOffset');
              }
              postCss.bottom = '0px';
              postCss.transform = 'translateX(-' + parseInt(this.model.get('formTriggerPositionOffset')) + '%)'; // 0=>0, 50->-50, 100->-100
              postCss.webkitTransform = 'translateX(-' + parseInt(this.model.get('formTriggerPositionOffset')) + '%)';
              break;
          }
        } else if (this.model.get('locals').displayMode == 'floatingButton') {
          if (is_standalone) {
            postCss.left = horizontal_offset_in_pixels;
            postCss.height = '60px';
          } else {
            postCss.left = this.model.get('formTriggerPositionOffset');
          }
          postCss.bottom = '20px';
          postCss.transform = 'translateX(-' + parseInt(this.model.get('formTriggerPositionOffset')) + '%)'; // 0=>0, 50->-50, 100->-100
          postCss.webkitTransform = 'translateX(-' + parseInt(this.model.get('formTriggerPositionOffset')) + '%)';
        }
      }
      this.model.setLocals({ postCss: postCss, overridePostCssHeight: overridePostCssHeight });
      this.postSizeToSocket();
      if (is_standalone) {
        this.$el.find('.fixed-element').css(postCss);
      }
    },
    afterInitialize: function afterInitialize() {
      var self = this;
      // if (self.model.get('multistepForm') && !self.model.get('locals').currentStepIdx) {
      //   self.model.setLocals({currentStepIdx: 0});
      // }

      //When payment quantity is changed, make sure it is updated in the form
      this.$el.on('keyup change', '.paypalQuantity', function () {
        var val = $(this).val(); // Validate
        if (isNaN(val) || parseInt(Number(val)) != val || isNaN(parseInt(val, 10)) || val < 1) {
          $(this).val(1);
        }
        self.formElementsViewModule.calculatePrice();
      });

      this.$el.on('click', '#quantity-up, #quantity-down', function (e) {
        var id = e.target.id || $(e.target).parent().prop('id');
        if (id === 'quantity-up') {
          self.model.set({
            paypalQuantity: parseInt(self.model.get('paypalQuantity')) + 1
          });
        } else {
          self.model.set({
            paypalQuantity: parseInt(self.model.get('paypalQuantity')) - 1 || 1
          });
        }
      });

      // Save input values on locals data
      this.$el.on('change', 'input[type="text"], input[type="date"], input[type="time"], input[type="email"], input[type="password"], input[type="hidden"], input[type="number"], textarea, select, input[type="radio"]:checked, .multipleCheckbox, .checkbox input[type="checkbox"], input.fileURL, input[type="tel"], input[type="url"], input[type="signature"], .addressWrapper', function (e) {
        if ($(e.target).parent().prop('id') === 'protectionForm') {
          return;
        }
        var parent = $(e.target).closest('.formElement');
        // moving this one to new idx standards
        // old
        // var idx = parseInt(parent.prop('id'));
        // self.model.attributes.locals.data[idx];
        // now
        var idx = parent.prop('id');
        var localElement = _.findWhere(self.model.attributes.locals.data, { idx: idx });

        if (!localElement) {
          return;
        }

        if (localElement.type === 'multipleCheckbox' || localElement.type === 'gdpr') {
          localElement.selectedOptions = [];
          $(e.target).closest('.formElement').find(':checked').each(function (selectedOptionIdx, el) {
            localElement.selectedOptions.push($(el).val());
          });
          if (localElement.selectedOptions.length) {
            parent.removeClass('requiredAndBlank');
            parent.find('input, textarea, select, label, button').removeClass('requiredAndBlank');
            parent.find('#' + localElement.idx.toString() + '_errors').remove();
          }
        } else if (localElement.type === 'radio' || localElement.type === 'select' || localElement.type === 'radioimage') {
          localElement.selectedOption = $(e.target).closest('.formElement').find(':checked').val();
          if (localElement.selectedOption) {
            parent.removeClass('requiredAndBlank');
            parent.find('input, textarea, select, label, button').removeClass('requiredAndBlank');
            parent.find('#' + localElement.idx.toString() + '_errors').remove();
          }
        } else if (localElement.type === 'checkbox') {
          localElement.checked = $(e.target).prop('checked');
          if (localElement.checked) {
            parent.removeClass('requiredAndBlank');
            parent.find('input, textarea, select, label, button').removeClass('requiredAndBlank');
            parent.find('#' + localElement.idx.toString() + '_errors').remove();
          }
        } else if (localElement.type === 'address') {
          $(e.target).closest('.formElement').find('input, select').each(function (inputIdx, el) {
            localElement[el.name] = $(el).val();
            if (localElement[el.name]) {
              parent.removeClass('requiredAndBlank');
              parent.find('input, textarea, select, label, button').removeClass('requiredAndBlank');
              parent.find('#' + localElement.idx.toString() + '_errors').remove();
            }
          });
        } else if (localElement.type === 'date') {
          $(e.target).closest('.formElement').find('input').each(function (inputIdx, el) {
            var dateString = self.getDateString(el);
            localElement[$(el).attr('pwr-mod-attr')] = dateString;
            if (localElement[$(el).attr('pwr-mod-attr')]) {
              parent.removeClass('requiredAndBlank');
              parent.find('input, textarea, select, label, button').removeClass('requiredAndBlank');
              parent.find('#' + localElement.idx.toString() + '_errors').remove();
            }
          });
        } else if (localElement.type === 'signature') {
          var src = $(e.target).closest('.formElement').find('img').prop('src');
          if (src) {
            localElement.src = src;
          }
          localElement.value = $(e.target).val();
        } else if (localElement.type === 'url') {
          localElement.value = urlFormat($(e.target).val());
        } else {
          localElement.value = $(e.target).val();
        }

        if (localElement.value && localElement.type !== 'email' || localElement.type === 'email' && localElement.value.indexOf('@') > -1) {
          parent.removeClass('requiredAndBlank');
          parent.find('#invalidEmail').remove();
          parent.find('input, textarea, select, label, button').removeClass('requiredAndBlank');
          parent.find('#' + localElement.idx.toString() + '_errors').remove();
        }

        self.model.formElementsViewModule.updateConditionalElements();
        if (self.model.attributes.paymentRequired) {
          self.model.calculateCheckoutData();
        };
      });

      this.$el.on('upload_start', '.fileUploadInput', function (e) {
        self.model.setLocals({ upoadInProgress: true });
      });

      this.$el.on('upload_fail', '.fileUploadInput', function (e) {
        self.model.setLocals({ upoadInProgress: false });
      });

      this.$el.on('upload_success', '.fileUploadInput', function (e) {
        var idx = $(e.target).closest('.formElement').prop('id');
        var localElement = _.findWhere(self.model.attributes.locals.data, { idx: idx });
        var value = $(e.target).closest('.formElement').find('.fileURL').val();
        localElement.value = value;
        self.model.setLocals({ upoadInProgress: false });
      });

      //For link to trigger payment:
      this.$el.on('click', '.triggerPayment', function (e) {
        checkout(e);
      });

      this.$el.on('click', '#formBackButton', function (e) {
        e.preventDefault();
        $(this).blur();
        self.previousStep();
      });

      this.$el.on('click', '#submitButton', function (e) {
        e.preventDefault();
        debug()('Form submit triggered. Event:', e);
        if (!self.formElementsViewModule.validate()) {
          return false;
        }

        if (self.model.get('captchaRequired') && !self.model.get('paymentRequired') && self.model.get('locals').lastStep) {
          if (grecaptcha.getResponse(self.model.get('locals').captchaID) !== '') {
            self.submitForm(e);
          }
        } else if (self.model.get('multistepForm')) {
          self.model.syncLocalData();
          self.nextStep(e);
        } else {
          self.submitForm(e);
        }

        return false; //Prevent default behavior
      });

      if (self.model.get('captchaRequired')) {
        setInterval(function () {
          self.captchaHeightHack();
        }, 2000);
      }

      this.$el.on('click', '.printer', function () {
        if (self.model.get('locals').isDirty || !self.model.meta.saved) {
          $('.saveModal').modal('show');
          return;
        }

        window.open('/plugins/form-builder/view?form-builder-print=true&id=' + self.model.meta.id);
      });

      //Set when app is loaded
      self.model.setLocals({
        loadTime: new Date().getTime()
      });

      //Open logo link in a new window because wix is forcing us:
      if (HOST == 'wix') {
        this.$el.on('click', '.powrMark a', function () {
          var w = Math.round(0.7 * screen.width); //70% of screen width
          var h = screen.height; //Full height
          window.open($(this).attr('href'), '', 'width=' + w + ',height=' + h + ',scrollbars=1');
          return false;
        });
      }
    },
    captchaHeightHack: function captchaHeightHack() {
      var self = this;
      if (!self.model.get('captchaRequired')) {
        return false;
      }
      if (self.model.get('locals').displayMode == 'modalForm') {
        //Don't mess with height in a modal
        self.$el.css('height', '100%');
      } else if (self.model.get('locals').displayMode == 'default') {
        if ($('.g-recaptcha-bubble-arrow').length > 0 && $('.g-recaptcha-bubble-arrow').parent().css('opacity') == 1) {
          self.$el.css('height', 'auto');
          var old_ht = self.$el.height();
          var captcha_ht = $('.g-recaptcha-bubble-arrow').parent().height() * 0.5;
          self.$el.height(old_ht + captcha_ht);
        } else {
          self.$el.css('height', 'auto');
        }
      } else {
        self.$el.css('height', 'auto');
      }
    },
    getDateString: function getDateString(dateEl) {
      var dateElIdx = $(dateEl).closest('.formElement').prop('id');
      var formElement = _.findWhere(this.model.get('locals').data, { idx: dateElIdx });
      var date = new Date($(dateEl).val());
      var hour = date.getHours();
      var hourVal = formElement.istwentyfour ? hour : hour % 12 === 0 ? 12 : hour % 12; //put hour to a 12 hour setup if necessary (eg 4 -> 4, 14 -> 2)
      var minutes = date.getMinutes();
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      var ampm = formElement.istwentyfour ? '' : hour > 12 ? 'PM' : 'AM';
      return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + ', ' + hourVal + ':' + minutes + ampm;
    },
    formatForPrint: function formatForPrint() {
      $('html').css('margin', '5%');

      $('.formBuilder').css('max-width', '100%');
      $('.formBuilder').css('border', 'none');
      $('.formBuilder').css('text-align', 'center');
      $('#editMe').hide();
      $('.formTitle').css('text-align', 'center');
      $('.adminAppInfo').hide();
      $('.errors').hide();
      $('.printer').hide();
      $('.success').hide();
      $('.triggerPayment').hide();
      $('.formResponses').hide();
      $('.resultsButton').hide();
      $('.datePickerParent').hide();
      $('.submitButton').hide();
      $('#spamDetection').hide();
      $('.lengthSummary').hide();
      $('.description').hide();
      $('.honeypot').hide();
      $('.stepLabel').hide();
      $('.radio').removeClass('radio');
      $('.checkbox').removeClass('checkbox');
      $('input, textarea').prop('placeholder', '');
      if ($('[name="zip"]')[0]) {
        var newCountryInput = $('[name="zip"]')[0].outerHTML;
        newCountryInput = newCountryInput.replace('zip', 'country');
        $('[name="country"]').replaceWith(newCountryInput);
      }
      $('.fitText').css('display', 'block');
      $('.lengthSummary').hide();
      $('.buttonAndSummaryWrapper').hide();
      $('.success').hide();

      // Prevent things from being cut in half between pages
      $('input, label, textarea').each(function (index, el) {
        var distanceFromPageTop = el.getBoundingClientRect().top % 1100;
        var elHeight = parseFloat($(el).css('height')) * 3;
        if (distanceFromPageTop < elHeight || distanceFromPageTop > 1100 - elHeight) {
          $(el).css('margin-top', elHeight.toString() + 'px');
        }
      });
    },
    setMetaContent: function setMetaContent() {
      //The default meta section for an app. Note this is HTML meta
      var description = this.model.get('description').length > 0 ? this.model.get('description') : this.model.get('title');
      var title = this.model.get('title');
      this.writeMetaContent(description, title);
    },
    paymentsActive: function paymentsActive() {
      return this.model.get('paymentRequired') && (parseFloat(this.model.get('locals').fullPrice) > 0 || this.model.get('paypalAllowUserToSpecifyPrice') && $.inArray(this.model.get('paypalPurchaseType'), ['Donate', 'BuyNow']) > -1);
    },
    getSubmitData: function getSubmitData() {
      var self = this;
      var labels = [];
      return this.model.get('locals').data.filter(function (formElement) {
        return $.inArray(formElement.type, ['image', 'linebreak', 'step', 'space', 'label', 'text_content']) === -1;
      }).map(function (formElement) {
        if (formElement.type === 'gdpr') {
          formElement.label = 'Marketing Permissions';
        }
        labels.push(formElement.label);
        var value;
        if (formElement.type === 'multipleCheckbox' || formElement.type === 'gdpr') {
          value = formElement.selectedOptions ? formElement.selectedOptions.join(', ') : '';
        } else if (formElement.type === 'radio' || formElement.type === 'select' || formElement.type === 'radioimage') {
          value = formElement.selectedOption;
        } else if (formElement.type === 'checkbox') {
          value = formElement.checked;
          if (value === undefined) {
            if (formElement.defaultChecked) {
              value = true;
            } else {
              value = false;
            }
          }
        } else if (formElement.type === 'address') {
          value = [formElement.address1, formElement.address2, formElement.city, formElement.state, formElement.zip, formElement.country].join(', ');
        } else if (formElement.type === 'date') {
          // TODO: datetime picker is broken AF and none of this clownshoes code should be necessary. Make a new one that simply feeds the LITERAL VALUE as the value, no timezones, no need to be fancy
          if (formElement.displayType === 'date') {
            try {
              formElement.dateTimeHidden = formElement.dateTimeHidden.split(',')[0]; //only date
            } catch (e) {}
          } else if (formElement.displayType === 'time') {
            try {
              formElement.dateTimeHidden = formElement.dateTimeHidden.split(', ')[1]; //only time
            } catch (e) {}
          }

          if (formElement.displayType === 'both' && formElement.nativeTimeElement) {
            var yearMonthDay = self.$el.find('#' + formElement.idx).find('[type="date"]').val().split('-');
            date = yearMonthDay[1] + '/' + yearMonthDay[2] + '/' + yearMonthDay[0];
            formElement.datePickerContainer = date + ' ' + self.ensureTenCharacters(formElement.dateTimeHidden.split(' ')[1]);
          }

          if (formElement.dateFormat && formElement.dateFormat[0] === 'D') {
            formElement.dateTimeHidden = self.euroDate(formElement.dateTimeHidden);
            if (formElement.datePickerContainer) {
              // var [date, time] = ...
              var dateTime = formElement.datePickerContainer.split(' ');
              formElement.datePickerContainer = self.euroDate(dateTime[0]) + ' ' + dateTime[1];
            }
          }
          var value = $.inArray(formElement.displayType, ['date', 'both']) && !formElement.nativeTimeElement ? formElement.dateTimeHidden : formElement.datePickerContainer;
          if (formElement.displayType === 'date') {
            value = formElement.dateTimeHidden;
          }
          if (formElement.displayType === 'time') {
            value = formElement.dateTimeHidden;
          } // #bandaid

          var ampm = self.$el.find('#' + formElement.idx).find('.ampm').val();
          if (ampm && value) {
            value = value.match('AM') ? value.replace('AM', ampm) : value.replace('PM', ampm);
          }

          return {
            label: self.uniqueLabel(labels, formElement),
            idx: formElement.idx,
            value: value,
            date_format: formElement.dateFormat,
            is_twenty_four: formElement.istwentyfour,
            exportField: formElement.exportField
          };
        } else if (formElement.type === 'signature') {
          var src = $('#signature-' + formElement.idx).next('.signatureImage').prop('src');
          if (src) {
            formElement.src = src;
          }
          value = formElement.value;
        } else {
          value = formElement.value;
        }
        return _defineProperty({
          label: POWr.removeHTML(self.uniqueLabel(labels, formElement)),
          idx: formElement.idx,
          type: formElement.type,
          value: value,
          src: formElement.src,
          exportField: formElement.exportField
        }, 'idx', formElement.idx);
      }).filter(function (el) {
        return el;
      }); // remove undefineds
    },
    uniqueLabel: function uniqueLabel(labels, formElement) {
      var num = 0;
      labels.forEach(function (label) {
        num += label === formElement.label ? 1 : 0;
      });

      return num > 1 ? formElement.label + '_' + num : formElement.label;
    },
    euroDate: function euroDate(dateString) {
      if (!dateString) {
        return;
      }
      var dateArray = dateString.split('/');
      var day = dateArray[1];
      var month = dateArray[0];
      dateArray[0] = day;
      dateArray[1] = month;
      return dateArray.join('/');
    },
    ensureTenCharacters: function ensureTenCharacters(dateString) {
      return dateString.split('/').map(function (d) {
        return d.length < 2 ? '0' + d : d;
      }).join('/');
    },
    submitForm: function submitForm(e) {
      var self = this;
      // self.initializeDateTimePickers();

      var formEl = this.$el.find('.realForm');
      var buttonEl = this.$el.find('#submitButton');

      var data = self.formElementsViewModule.currentPageData();

      //get data from all pages
      var allData = this.getSubmitData();
      if (this.model.get('locals').discountCode) {
        allData.push({
          label: 'Discount Code Used',
          type: 'text',
          value: this.model.get('locals').discountCode,
          exportField: ''
        });
      }

      //store the progress on localStorage
      self.formElementsViewModule.saveData();

      if (self.model.get('locals').uploadInProgress) {
        return;
      }

      //For debugging only
      debug()(data);

      if (self.formElementsViewModule.preventMultipleSubmission()) {
        return;
      }

      if (self.formElementsViewModule.isLastPage()) {
        //Set response tokens immediately before submitting
        //Generate a random unique token so the server and paypal responses can find each other
        if (self.model.get('paymentRequired')) {
          var responseToken = Math.floor(Math.random() * 10000 + 1) + '_' + (d = new Date()).getTime();
          //  responseToken = self.model.get('locals').responseToken;
          //  if( !responseToken ){
          //      //Only set the token once! NOTE: If a user is able to submit twice, the tokens will have the same
          //      var responseToken = Math.floor((Math.random() * 10000) + 1) + "_" + (d = new Date()).getTime();
          //  }
          allData.push({
            label: 'Quantity',
            type: 'paypalQuantity',
            value: self.$el.find('.paypalQuantity').val()
          });
        } else {
          var responseToken = null;
        }
        self.model.setLocals({ responseToken: responseToken });
        var postData = {
          appId: self.model.meta.id,
          data: allData,
          confirmationEmail: self.getConfirmationEmail(allData),
          subscribeEmail: self.getMailchimpSubscribeEmail(),
          responseToken: self.model.get('locals').responseToken
        };

        debug()('All data is ', allData);
        debug()('Post Data is ', postData);

        if (self.paymentsActive()) {
          if (self.model.get('submissionFrequency') === 'perUser') {
            // check if user can submit
            var ipCheckOptions = {
              url: '/form-responses/already_submitted/' + self.model.meta.id,
              type: 'GET',
              buttonElement: buttonEl,
              errorsElement: self.$el.find('#validationErrors')
            };
            ajaxController(ipCheckOptions, function (r) {
              if (!r.success) {
                checkout(e);
              } else {
                errorsElement.html('<i class="fa fa-warning"></i> You\'ve already submitted a response').removeClass('hid').show();
              }
            });
          } else {
            checkout(e);
          }
        } else {
          var options = {
            url: '/app_form_response.json',
            data: postData,
            type: 'POST',
            buttonElement: buttonEl,
            errorsElement: self.$el.find('#validationErrors')
          };
          ajaxController(options, function (r) {
            if (r.success) {
              self.afterSubmission();
            } else {
              errorsElement.html(r.errors[0]).removeClass('hid').show();
            }
          });
        }
        self.postSizeToSocket(); //Make sure size is updated

        //Submit in parallel to Wix
        if (HOST == 'wix' && window.VIEW_MODE == 'site') {
          //For Form Builder
          var email = '';
          var phone = '';
          var address = '';
          var fields = [];
          var emails = [];
          var phones = [];
          var additionalFields = [];
          var emailAdded = false;
          var phoneAdded = false;
          var addressAdded = false;
          for (var i in allData) {
            if (emailAdded == false && allData[i].type == 'email' && allData[i].value.length > 0) {
              email = allData[i].value;
              fields.push({ name: 'email', value: email });
              emails.push({ tag: 'main', email: email });
              emailAdded = true;
              continue;
            }
            if (phoneAdded == false && allData[i].type == 'phone' && allData[i].value.length > 0) {
              phone = allData[i].value;
              fields.push({ name: 'phone', value: phone });
              phones.push({ tag: 'main', phone: phone });
              phoneAdded = true;
              continue;
            }
            if (addressAdded == false && allData[i].type == 'address' && allData[i].value.length > 0) {
              address = allData[i].value;
              fields.push({ name: 'address', value: address });
              addressAdded = true;
              continue;
            }
            if (allData[i].label != undefined && allData[i].value != undefined) {
              additionalFields.push({
                name: allData[i].label,
                value: allData[i].value
              });
            }
          }
          if ($.inArray(self.model.meta.app_type, ['formBuilder', 'contactForm', 'poll', 'wixDev', 'localDev', 'wixLocal']) > -1 && (fields.length > 0 || emails.length > 0)) {
            var activity = {
              //type:Wix.Activities.Type.CONTACT_CONTACT_FORM,
              type: Wix.Activities.Type.FORM_CONTACT_FORM,
              //info:{fields:fields},
              info: { content: {}, additionalFields: additionalFields },
              details: {
                additionalInfoUrl: null,
                summary: 'Adding contact from POWr'
              },
              contactUpdate: { emails: emails, phones: phones }
            };
            debug()('Sending contact activity to wix: ', activity);
            Wix.Activities.postActivity(activity, function (r) {
              debug()('Wix activity success:', r);
            }, function (r) {
              debug()('Wix activity failure:', r);
            });
          }

          //For Mailing List
          if ($.inArray(self.model.meta.app_type, ['mailingList']) > -1 && email.length > 0) {
            var activity = {
              type: Wix.Activities.Type.SUBSCRIPTION_FORM,
              info: {
                email: email,
                phone: phone
              },
              details: {
                additionalInfoUrl: null,
                summary: 'Adding contact from POWr'
              },
              contactUpdate: { emails: emails, phones: phones }
            };
            debug()('Sending subscription activity to wix: ', activity);
            Wix.Activities.postActivity(activity, function (r) {
              debug()('Wix activity success:', r);
            }, function (r) {
              debug()('Wix activity failure:', r);
            });
          }
        }
      } else {
        //this isn't the last page. Go to the next one
        //but first, save the data
        self.model.setLocals({ data: allData });
        self.formElementsViewModule.renderPage(self.model.get('locals').page + 1);
      }
    },
    getMailchimpSubscribeEmail: function getMailchimpSubscribeEmail() {
      var mailchimpEl = this.model.get('locals').data.filter(function (d) {
        return d.subscribeToMailchimp;
      });
      if (mailchimpEl.length) {
        return mailchimpEl[0].value;
      }
    },
    getConfirmationEmail: function getConfirmationEmail(data) {
      var ownerSelectedConfirmationEmailField = this.model.attributes['confirmationEmailFieldIdx'];
      var confirmationEmail = null;

      if (ownerSelectedConfirmationEmailField) {
        this.model.get('locals').data.forEach(function (d) {
          if (d.type === 'email' && d.idx === ownerSelectedConfirmationEmailField) {
            confirmationEmail = d.value;
          }
        });
      }

      if (confirmationEmail) {
        return confirmationEmail;
      }
      // Fallback in case user has not touched the updated settings and may not have an ownerSelectedConfirmationEmailField
      var emailEl = null;
      var firstEmailEl = null;

      (data || this.model.get('locals').data).forEach(function (d) {
        if (d.type === 'email' && !firstEmailEl) {
          firstEmailEl = d;
        }

        if (d.sendConfirmationEmail) {
          emailEl = d;
        }
      });

      emailEl = emailEl || firstEmailEl;

      if (emailEl) {
        return emailEl.value;
      }
    },

    getConfirmationAddress: function getConfirmationAddress(data) {
      var addressEl = null;
      var firstAddressEl = null;

      (data || this.model.get('locals').data).forEach(function (d) {
        if (d.type === 'address' && !firstAddressEl) {
          firstAddressEl = d;
        }
        if (d.isShippingAddress) {
          addressEl = d;
        }
      });

      addressEl = addressEl || firstAddressEl;

      if (addressEl) {
        return addressEl.value;
      };
    },
    afterSubmission: function afterSubmission() {
      var self = this;
      var buttonEl = this.$el.find('#submitButton');
      this.$el.find('.formBackButton').hide();
      this.$el.find("[role='progressbar']").css('width', '100%');
      this.$el.find('.progress-bar-percentage').html('100%');
      this.$el.find('.progressBarBox, .progress-bar-percentage').hide();

      if (self.model.get('submissionFrequency') === 'perUser') {
        setCookie('powr_form_' + self.model.meta.id, 'blocked', 14);
      }

      //clear the the current progress
      try {
        localStorage.removeItem('Form_' + self.model.meta.id + '_locals');
        localStorage.removeItem('Form_' + self.model.meta.id + '_timestamp');
      } catch (e) {}

      buttonEl.fadeOut('fast', function () {
        debug()('Button faded out');
        //Action depending on settings:

        switch (self.model.get('afterSubmission')) {
          case 'showForm':
            self.$el.find('.realForm input, .realForm textarea, .realForm select').prop('disabled', true); //Block inputs
            self.$el.find('.success').fadeIn('fast').trigger('change');
            // if (self.paymentsActive()) {
            //   //If payment is required, show the "Continue to payment"
            //   // self.$el.find('.triggerPayment').fadeIn(); //Show trigger payment button
            //   self.$el.find('.realForm input, .realForm textarea, .realForm select').prop('disabled', false);
            // }

            // User allows for multiple submissions...
            if (self.model.get('submissionFrequency') === 'multiple') {
              self.model.syncLocalData(true); // clear local data
              self.render(); //Just re-render to clear form
              self.$el.find("[role='progressbar']").css('width', '100%');
              self.$el.find('.progress-bar-percentage').html('100%');
              self.$el.find('.success').fadeIn('fast').trigger('change');
            }
            break;

          case 'redirect':
            //If a payment form, then redirect the payment form instead
            if (self.model.get('paymentRequired') && self.model.get('afterSubmission') == 'redirect' && self.model.get('redirectLink').length > 0) {
              self.$el.find('.realForm input, .realForm textarea, .realForm select').prop('disabled', true); //Block inputs
              self.$el.find('.success').fadeIn('fast').trigger('change');
            } else {
              self.render(); //Just re-render to clear form
              debug()('Re-rendering and setting location');
              //Make sure redirect will work in IE (if just the #something is changed, it will not reload the page
              var link = urlFormat(self.model.get('redirectLink'));
              if (link.indexOf('?') == -1) {
                link = link.replace('#', '?#');
              }
              if (link !== 'http://') {
                window.top.location.href = link; //Redirect the page
              } else {
                self.$el.find('.formBuilder').slideUp(function () {
                  self.postSizeToSocket(); //Post size once it is gone
                }); //Hide entire form
                self.$el.find('.success').fadeIn('fast');
              }
            }
            // if (self.paymentsActive()) {
            //   //If payment is required, show the "Continue to payment"
            //   self.$el.find('.triggerPayment').fadeIn(); //Show trigger payment button
            // }
            break;
          case 'hideForm':
            self.$el.find('.redirectLink').slideUp();
            self.$el.find('.successText').slideUp();
            self.$el.find('.formBuilder').slideUp(function () {
              self.postSizeToSocket(); //Post size once it is gone
            }); //Hide entire form
            break;
          case 'responses':
            self.$el.find('.success').fadeIn('fast').trigger('change');
            self.$el.find('.progress').hide();
            self.showResponses();
            // if (self.paymentsActive()) {
            //   //If payment is required, show the "Continue to payment"
            //   self.$el.find('.triggerPayment').fadeIn(); //Show trigger payment button
            // }
            break;
        }
        self.postSizeToSocket(); //Make sure size is updated
      });
    },
    showResponses: function showResponses() {
      var self = this;

      //Set link responses link if it exists
      var response_link = '/form-responses/' + this.model.meta.id + '/show';
      this.$el.find('.linkResponses a').attr('href', response_link);

      self.$el.find('.realForm').find('.dynamicElements').removeClass('visible').slideUp();
      self.$el.find('.recaptchaContent').slideUp();
      var responsesEl = self.$el.find('.formResponses');
      responsesEl.slideDown();

      var realData = self.model.get('data').filter(function (a) {
        return !!a.showResponse;
      });
      var questionNum = realData.length;

      if (questionNum == 0) {} else {
        //if it's more than one question, spit back a link
        responsesEl.find('.linkResponses').slideDown();
      }
    },
    beforeRender: function beforeRender() {
      if (this.model.get('locals').displayModeOverride) {
        this.model.setLocals({ displayModeOverride: false });
      } else {}
    },
    afterRender: function afterRender() {
      var self = this;
      if (['default', 'modalForm'].indexOf(this.model.get('locals').displayMode) > -1) {
        var successMessage = self.model.get('locals').successMessageDraft;
        if (successMessage) {
          self.$el.find('#successAlert').text(successMessage).fadeIn('fast');
          setTimeout(function () {
            self.$el.find('#successAlert').fadeOut('fast');
          }, 5000);
        }
        this.formElementsViewModule.renderFormElements();
        this.updatePowrMarkLink();
        this.$el.find('.radioImage img').csswatch({ props: 'height' });
        this.$el.find('.radioImage img').on('css-change', function () {
          self.makeRadioImagesSameHeight();
        });
        this.makeRadioImagesSameHeight();
      } else {
        this.$el.find('.js-form-modal-floating-tab-text, .js-form-modal-floating-tab-icon').csswatch({ props: 'width' });
        this.$el.find('.js-form-modal-floating-tab-text, .js-form-modal-floating-tab-icon').on('css-change', function () {
          self.setPosition();
        });
      }
      this.setPosition();
    },
    makeRadioImagesSameHeight: function makeRadioImagesSameHeight() {
      this.turnOffCssWatch();
      this.$el.find('.radioImage').each(function () {
        var maxHt = 0;
        $(this).find('.imageWrapper').height('auto');
        $(this).find('.radioOption').each(function () {
          var currentHt = $(this).find('img').height();
          if (currentHt > maxHt) {
            maxHt = currentHt;
          }
        });
        $(this).find('.imageWrapper').height(maxHt);
      });
      this.turnOnCssWatch();
    },
    updatePowrMarkLink: function updatePowrMarkLink() {
      // var app_id = this.model.meta.id;
      // var total_number_avail_apps = 105000;
      // var days_since_launch = Math.floor(( (new Date).getTime() - 1498001581655 ) / 86400000);
      //
      // function somewhat_random(seed, max) {
      //     return Math.abs(Math.sin(seed) * max);
      // }
      // var alt;
      // if( 10*days_since_launch > Math.round(somewhat_random(app_id, total_number_avail_apps)) ){
      //   switch( app_id % 4 ){
      //     case 0:
      //       alt = 'jotform'; break;
      //     case 1:
      //       alt = "123-contact-form"; break;
      //     case 2:
      //       alt = "formsite"; break;
      //     case 3:
      //       alt = "wufoo"; break;
      //     case 4:
      //       alt = "survey-monkey"; break;
      //   }
      // }else if( 100*days_since_launch > Math.round(somewhat_random(app_id, total_number_avail_apps)) ){
      //   switch( app_id % 4 ){
      //     case 0:
      //       alt = 'formstack'; break;
      //     case 1:
      //       alt = "cognito-forms"; break;
      //     case 2:
      //       alt = "email-me-form"; break;
      //     case 3:
      //       alt = "gravity-forms"; break;
      //     case 4:
      //       alt = "typeform"; break;
      //   }
      // }
      // if( alt ){
      //   var href = "/best-alternative-to-"+alt;
      //   $('.powrMarkLink').attr('href',href);
      // }
    },
    buildCaptcha: function buildCaptcha() {
      if (window.location.href.match('form-builder-print')) {
        return;
      }

      if (this.model.get('captchaRequired') && $('.captchaImgWrapper').html() === '') {
        try {
          var captchaID = grecaptcha.render($('.captchaImgWrapper')[0], {
            sitekey: '6Le7gisUAAAAAL3VennxOM93GaltIhkqNXlTnCOA'
          });
          this.model.setLocals({ captchaID: captchaID });
        } catch (e) {}
        $('.captchaImgWrapper').animate({ opacity: 1 });
      }
    },
    initializeDateTimePickers: function initializeDateTimePickers() {
      var usingNativeInputs = usingHtml5Datetime();
      var $dateTimeElements = this.$el.find('.datetimeWrapper');
      var now = moment();
      $dateTimeElements.each(function () {
        register($(this));
      });

      function register($dateTimeElement) {
        var format = $dateTimeElement.findAndSelf("[pwr-mod-attr='formatElement']").attr('data-format');
        var inputType;
        var targetAttr = 'data-form-type';

        var $specialInput = $dateTimeElement.find('input').fxnMap(function () {
          return $(this);
        }).filter(function ($domEl) {
          return !!$domEl.attr(targetAttr);
        })[0];

        inputType = $specialInput.attr(targetAttr);

        switch (inputType) {
          case 'datetime':
            handleDateTime($dateTimeElement, format);
            break;
          case 'date':
            handleDate($dateTimeElement, format);
            break;
          case 'time':
            handleTime($dateTimeElement, format);
            break;
          default:
            throw 'Bad stuff, couldnt find input type';
        }

        function handleDateTime($element, format) {
          var $dateInput = $element.find('.dateSelector');
          var $timeInputs = $element.find('.timePicker');
          var conf = {
            using_native_inputs: usingNativeInputs,
            $body: $element,
            use_local: true,
            formatString: format,
            dateSelectEls: $dateInput,
            timeSelectEls: $timeInputs
          };
          new POWrDateTimeComponentWithIncrementer(conf).on('change', function ($component) {});
        }

        function handleDate($element, format) {
          var conf = {
            use_local: true,
            formatString: format,
            using_native_inputs: usingNativeInputs,
            $body: $element,
            dateState: now
          };
          new POWrDatePickerComponent(conf).on('change', function ($component) {
            $specialInput.attr('value', $component.dateState.toLocaleISOString());
            $specialInput.val($component.dateState.toLocaleISOString());
            $($component).find('input').trigger('change'); // To update locals
          });
        }

        function handleTime($element, format) {
          var conf = {
            use_local: true,
            formatString: format,
            using_native_inputs: usingNativeInputs,
            $body: $element,
            timeState: now
          };
          new POWrTimePickerComponent(conf).on('change', function ($component) {
            $specialInput.attr('value', $component.timeState.toLocaleISOString());
            $specialInput.val($component.timeState.toLocaleISOString());
            $($component).find('input').trigger('change'); // To update locals
          });
        }
        $specialInput.val(now.toLocaleISOString());
        $specialInput.attr('value', now.toLocaleISOString());
      }
    },

    _initializeDateTimePickers: function _initializeDateTimePickers() {
      var self = this;
      //NOTE: THE TOP PART OF THIS IS COPIED FROM BASE.JS
      this.$el.find('.datetimeWrapper').each(function () {
        var datetimeWrapper = $(this);

        ///////Parse current value into a JS Date Object://////
        var datetime = datetimeWrapper.find('.datetime').val();
        debug()('Parsing datetime, current value is ' + datetime);
        if (datetime.length == 0) {
          var datetimeObj = new Date(); //Current time
        } else {
          if (datetime.search('am') > -1) {
            //Get rid of am
            datetime = datetime.replace('am', '');
          } else if (datetime.search('pm') > -1) {
            //Convert pm to 24-hour time and get rid of the pm
            datetime = datetime.replace(/\d\d:/, function (match) {
              return pad2(parseInt(match.substr(0, 2)) + 12) + ':';
            });
            datetime = datetime.replace('pm', '');
          }
          debug()('Datetime after am/pm parsing: ' + datetime);

          //If a datetime is passed:
          if (datetime.search('/') > -1) {
            datetimeObj = new Date(datetime);
          } else {
            //If just a time is passed
            datetimeObj = new Date();
            datetimeObj.setHours(datetime.split(':')[0]);
            datetimeObj.setMinutes(datetime.split(':')[1]);
          }
          debug()('Datetime Object:', datetimeObj);
        }
        ///////////////////////////////////////////////////////
        var is_twentyfour = datetimeWrapper.find('.datetime').data('is-twenty-four') || false;
        var hour = datetimeObj.getHours();
        var m = datetimeObj.getMinutes();
        var h = Array(3 - hour.toString().length).join('0') + h; //Add leading zeros
        m = Array(3 - m.toString().length).join('0') + m; //Add leading zeros
        var time = h + ':' + m; //Time in minutes (like 02:00)
        debug()('Parsed time is ' + time + '; datetime obj is', datetimeObj);

        //put the parsed time on the screen
        var hourVal = is_twentyfour ? hour : hour % 12 == 0 ? 12 : hour % 12; //put hour to a 12 hour setup if necessary (eg 4 -> 4, 14 -> 2)
        var ampm = is_twentyfour ? '' : hour > 12 ? 'PM' : 'AM';
        datetimeWrapper.find('.hour').val(hourVal);
        datetimeWrapper.find('.minute').val(m);
        datetimeWrapper.find('.ampm').val(ampm);

        var stringifyDate = function stringifyDate(opts) {
          debug()('Stringify date called with opts ', opts);
          var dateVar = opts.date;
          var is_twentyfour = opts.is_twentyfour || false;

          var hour = dateVar.getHours();
          var minute = dateVar.getMinutes();
          var day = dateVar.getDate();
          var month = dateVar.getMonth() + 1;
          var year = dateVar.getFullYear();

          var hourVal = is_twentyfour ? hour : hour % 12 == 0 ? 12 : hour % 12; //put hour to a 12 hour setup if necessary (eg 4 -> 4, 14 -> 2)
          var ampm = is_twentyfour ? '' : hour > 12 ? 'pm' : 'am';

          var pad = function pad(value) {
            var length = 2;
            value = value.toString();
            if (value.length < length) {
              value = '0' + value;
            }
            return value;
          };

          //var dateStr = "" + year + "-" + month + '-' + day;
          var dateStr = '' + month + '/' + day + '/' + year;

          var timeStr = '' + pad(hourVal) + ':' + pad(minute) + ampm;

          if (opts.type == 'date') {
            return dateStr;
          } else if (opts.type == 'time') {
            return timeStr;
          } else if (opts.type == 'datetime') {
            return dateStr + ' ' + timeStr;
          }

          return dateStr + ' ' + timeStr;
        };

        //This parses the datetime from the inputs to a hidden element called .datetime:
        function updateDatetime() {
          //Parse Date
          var resultEl = datetimeWrapper.find('.datetime');
          is_twentyfour = resultEl.data('is-twenty-four') || false;

          var ampmVal = datetimeWrapper.find('.ampm').val();
          //debug()("Date var is ",dateVar);
          //Parse Time
          //var time = datetimeWrapper.find('.timeSelector') ? datetimeWrapper.find('.timeSelector').val() || '00:00' : '00:00'; //Time
          //Create date time object?
          var time_obj = new Date();

          if (usingHtml5Datetime()) {
            //is_twentyfour = true;

            var dateEl = datetimeWrapper.find('.htmlDate');
            var timeEl = datetimeWrapper.find('.htmlTime');

            //is_twentyfour = datetimeWrapper.find('.htmlTime').hasClass('twentyfour');

            var dateInfo = dateEl.length == 0 ? [2000, 1, 1] : dateEl.val().split('-');
            time_obj.setFullYear(parseInt(dateInfo[0]) || 2000);
            time_obj.setDate(1); //Start with the day at 1 because february is a bitch
            time_obj.setMonth((parseInt(dateInfo[1]) || 1) - 1);
            time_obj.setDate(parseInt(dateInfo[2]) || 1);

            var timeInfo = timeEl.length == 0 ? [0, 0] : timeEl.val().split(':');
            time_obj.setHours(parseInt(timeInfo[0]) || 0);
            time_obj.setMinutes(parseInt(timeInfo[1]) || 0);

            //debug()('T', dateInfo, (parseInt(dateInfo[1]) || 1) - 1, time_obj);
          } else {
            if (datetimeWrapper.find('.dateSelector').length > 0) {
              //it has date selection available
              var dateVar = datetimeWrapper.find('.dateSelector').datepicker('getDate'); //Date object
              time_obj.setFullYear($.datepicker.formatDate('yy', dateVar));
              time_obj.setDate(1); //Start with the day at 1 because february is a bitch
              time_obj.setMonth(parseInt($.datepicker.formatDate('m', dateVar)) - 1);
              time_obj.setDate($.datepicker.formatDate('d', dateVar));
              debug()('Date var', dateVar);
            }

            if (is_twentyfour) {
              time_obj.setHours(parseInt(datetimeWrapper.find('.hour').val()) || 0);
            } else {
              if (ampmVal == 'PM') {
                time_obj.setHours((parseInt(datetimeWrapper.find('.hour').val()) || 0) + 12);
              } else {
                time_obj.setHours(parseInt(datetimeWrapper.find('.hour').val()) || 0);
              }
            }
            time_obj.setMinutes(parseInt(datetimeWrapper.find('.minute').val()) || 0);
          }
          time_obj.setSeconds(0);
          //time_obj.setTime( time_obj.getTime() + 0*new Date().getTimezoneOffset()*60*1000 );//deal with the timezone. I hate timezones

          var use_local_time = datetimeWrapper.find('.datetime').data('use-local-time'); //Whether to use local time
          if (use_local_time) {
            var datetime_string = time_obj.toLocaleString(); //Time string WITHOUT timezone
          } else {
            var datetime_string = time_obj.toString(); //Time string WITH timezone
          }

          resultEl.val(stringifyDate({
            date: time_obj,
            is_twentyfour: is_twentyfour,
            type: resultEl.data('form-type')
          }));
          debug()('Formbuilder Datetime string is ' + resultEl.val());
        }

        //Set the jquery picker

        $(this).find('.dateSelector').datepicker({
          onSelect: function onSelect() {
            //When selected, then update
            updateDatetime();
          }
        });

        var dateSelectorEl = $(this).find('.dateSelector');
        if (dateSelectorEl.length > 0) {
          //Handle when date value manually entered
          dateSelectorEl.change(function () {
            updateDatetime();
          });
          //Set the current date:
          dateSelectorEl.datepicker('setDate', datetimeObj);
        }

        // Find out if user is on a 24 hour clock
        var newdate = new Date();
        var dateString = newdate.toLocaleTimeString();
        debug()('datestring: ' + dateString);
        //apparently toLocaleTimeString() has a bug in Chrome. toString() however returns 12/24 hour formats. If one of two contains AM/PM execute 12 hour coding.
        if (dateString.match(/am|pm/i) || newdate.toString().match(/am|pm/i)) {
          debug()('12 hour clock');
        } else {
          debug()('24 hour clock');
          if (usingHtml5Datetime()) {
            datetimeWrapper.find('.htmlTime').addClass('twentyfour');
          } else {
            var hour = datetimeWrapper.find('.hour');
            hour.addClass('twentyfour');
            hour.val(pad2(parseInt(hour.val())));
            datetimeWrapper.find('.ampmPicker').hide();
          }
        }

        function incrementHour() {
          //var is_twentyfour = datetimeWrapper.find('.hour').hasClass('twentyfour');
          var val = parseInt(datetimeWrapper.find('.hour').val());
          if (val < 23 && is_twentyfour) {
            datetimeWrapper.find('.hour').val(pad2(val + 1));
          } else if (val < 12) {
            datetimeWrapper.find('.hour').val(val + 1);
          } else if (is_twentyfour) {
            datetimeWrapper.find('.hour').val(pad2(0));
          } else {
            datetimeWrapper.find('.hour').val(1);
          }
          updateDatetime();
        }
        function decrementHour() {
          //var is_twentyfour = datetimeWrapper.find('.hour').hasClass('twentyfour');
          var val = parseInt(datetimeWrapper.find('.hour').val());
          if (is_twentyfour) {
            if (val > 0) {
              datetimeWrapper.find('.hour').val(pad2(val - 1));
            } else {
              datetimeWrapper.find('.hour').val(23);
            }
          } else {
            if (val > 1) {
              datetimeWrapper.find('.hour').val(val - 1);
            } else {
              datetimeWrapper.find('.hour').val(12);
            }
          }
          updateDatetime();
        }
        function incrementMinute() {
          var val = parseInt(datetimeWrapper.find('.minute').val());
          if (val < 59) {
            datetimeWrapper.find('.minute').val(pad2(val + 1));
          } else {
            datetimeWrapper.find('.minute').val(pad2(0));
          }
          updateDatetime();
        }
        function decrementMinute() {
          var val = parseInt(datetimeWrapper.find('.minute').val());
          if (val > 0) {
            datetimeWrapper.find('.minute').val(pad2(val - 1));
          } else {
            datetimeWrapper.find('.minute').val(pad2(59));
          }
          updateDatetime();
        }

        // Handle add of hour when up arrow is click
        datetimeWrapper.find('.upHour').on('click', function () {
          incrementHour();
        });
        // Handle subtract of Hour when down arrow is click
        datetimeWrapper.find('.downHour').on('click', function () {
          decrementHour();
        });
        // Handles inputs for Hour
        datetimeWrapper.find('.hour').on('blur', function () {
          var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
          var str = $(this).val();
          var isTwentyFour = $(this).parents('.datePickerParent').first().hasClass('twentyFour');
          var maxVal = isTwentyFour ? 24 : 12; //Max value of hours
          if (numberRegex.test(str)) {
            if (str > maxVal) {
              $(this).val(maxVal);
            } else {
              $(this).val(str);
            }
          } else {
            $(this).val(1);
          }
          updateDatetime();
        });

        // Handle add of minute when up arrow is click
        datetimeWrapper.find('.upMinute').on('click', function () {
          incrementMinute();
        });
        // Handle subtract of minute when down arrow is click
        datetimeWrapper.find('.downMinute').on('click', function () {
          decrementMinute();
        });
        // Handles inputs for Minutes
        datetimeWrapper.find('.minute').on('blur', function () {
          var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
          var str = $(this).val();
          if (numberRegex.test(str)) {
            if (str > 59) {
              $(this).val(59);
            } else {
              $(this).val(pad2(str));
            }
          } else {
            $(this).val(pad2(0));
          }
          updateDatetime();
        });
        datetimeWrapper.find('.minute').on('keydown', function (e) {
          if (e.keyCode == 38) {
            incrementMinute();
            return false;
          } else if (e.keyCode == 40) {
            decrementMinute();
            return false;
          }
        });
        datetimeWrapper.find('.hour').on('keydown', function (e) {
          if (e.keyCode == 38) {
            incrementHour();
            return false;
          } else if (e.keyCode == 40) {
            decrementHour();
            return false;
          }
        });
        datetimeWrapper.find('.ampm').on('keydown', function (e) {
          if (e.keyCode == 38 || e.keyCode == 40) {
            $(this).val($(this).val() == 'AM' ? 'PM' : 'AM');
            return false;
          }
        });

        // Handle up and down of AM/PM when down arrows is click
        datetimeWrapper.find('.upAmpm, .downAmpm').on('click', function () {
          var val = datetimeWrapper.find('.ampm').val();
          debug()(val);
          if (val == 'PM') {
            datetimeWrapper.find('.ampm').val('AM');
          } else {
            datetimeWrapper.find('.ampm').val('PM');
          }
          updateDatetime();
        });
        // Handles inputs for AM/PM
        datetimeWrapper.find('.ampm').on('blur', function () {
          var inputVal = $(this).val().toUpperCase();
          if (!(inputVal == 'PM' || inputVal == 'AM')) {
            $(this).val('PM');
          } else {
            $(this).val(inputVal);
          }
          updateDatetime();
        });
        // This function makes sure the single digits numbers have a 0 in front
        function pad2(number) {
          if (number.length > 1 && number < 10) {
            return number;
          } else {
            return (number < 10 ? '0' : '') + number;
          }
        }
        updateDatetime();
      });
    }
  });
  __webpack_require__(1102);
});
/*****************************FORM BUILDER APP**********************************/
window.usingHtml5Datetime = function () {
  //return true;
  return isMobile();
};

window.mailingListChosen = function (data) {
  //allow the other window to send mailing list
  debug()('Called', data);
  if (APP_SETTINGS.observableStore) {
    APP_SETTINGS.observableStore.updateValue({
      key: 'model.mailchimpList',
      value: data.list_id
    });
    APP_SETTINGS.observableStore.updateValue({
      key: 'model.mailchimpListName',
      value: data.name
    });
    APP_MODEL.attributes.data.map(function (el, i) {
      if (el.type === 'email') {
        APP_MODEL.attributes.data[i].subscribeToMailchimp = true;
      }
    });
    APP_SETTINGS.observableStore.forceUpdate();
  } else {
    APP_MODEL.set({
      mailchimpList: data.list_id,
      mailchimpListName: data.name
    });
    $('[data-namespace="mailchimplist"]').data('mailchimpList', data.list_id).data('mailchimpListName', data.name).change(); //Ensure react components updated
    $('[name="subscribeToMailchimp"]').prop('checked', true);
    APP_MODEL.attributes.data.map(function (el, i) {
      if (el.type === 'email') {
        APP_MODEL.attributes.data[i].subscribeToMailchimp = true;
      }
    });
    APP_SETTINGS.initializeCheckboxes();
    APP_SETTINGS.initializeWixCheckboxes();
  }
};
window.currency = function () {
  var currency_symbols = {
    USD: '$', // US Dollar
    BRL: 'R$',
    CZK: 'Kč',
    DKK: 'kr',
    EUR: '€', // Euro
    HUF: 'Ft',
    ILS: '₪', // Israeli New Sheqel
    JPY: '¥', // Japanese Yen
    MYR: 'RM',
    NOK: 'kr',
    PHP: '₱', // Philippine Peso
    PLN: 'zł', // Polish Zloty
    GBP: '£', // British Pound Sterling
    RUB: '₽',
    SEK: 'kr',
    CHF: 'CHF',
    THB: '฿', // Thai Baht
    TRY: '&#8378;' //Note this has very limited support
  };
  if (currency_symbols[APP_MODEL.get('paypalCurrencyCode')] == undefined) {
    return '$';
  } else {
    return currency_symbols[APP_MODEL.get('paypalCurrencyCode')];
  }
};

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.1';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(204), __webpack_require__(205)(module)))

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleCopies", function() { return simpleCopies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premiumStatusLabel", function() { return premiumStatusLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURI", function() { return baseURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grantAccess", function() { return grantAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeHTML", function() { return removeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTitleCase", function() { return toTitleCase; });
if (!window._) {
  window._ = __webpack_require__(203);
}

var simpleCopies = function simpleCopies(key, data) {
  // TODO Handle passing in arguments
  var translation = window.SIMPLE_COPIES_DICTIONARY[key];
  if (!translation) return key;
  _.each(data, function (value, variable) {
    translation = translation.replace(new RegExp('{' + variable + '}', 'g'), value);
  });
  return translation;
};
var premiumStatusLabel = {
  enterprise: 'Business',
  pro: 'Pro',
  premium: 'Starter',
  free: 'Free'
};

var removeHTML = function removeHTML(string) {
  //hack to strip out html and just display text of a label
  var temp = document.createElement('div');
  temp.innerHTML = string;
  return temp.textContent;
};

var truncate = function truncate(str, length) {
  return str.length > length ? str.substring(0, length - 3) + '...' : str;
};

if (!window.POWr) {
  window.POWr = {
    paypalRedirectUrl: function paypalRedirectUrl(url) {
      if (HOST == 'wix') {
        var redirect = baseUri() + '/paramless-mirror/' + encodeURIComponent(urlFormat(url)); //Hack because paypal adds parameters and wix page can't deal with them
      } else {
        var redirect = urlFormat(url);
      }
      return redirect;
    },
    simpleCopies: simpleCopies,
    premiumStatusLabel: premiumStatusLabel,
    removeHTML: removeHTML,
    truncate: truncate
  };
}

var baseURI = window.baseUri;
var grantAccess = window.grantAccess;
var toTitleCase = function toTitleCase(txt) {
  return '' + txt.charAt(0).toUpperCase() + txt.slice(1);
};



/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var require;var require;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    module.exports = function arbitrator(callback, interval) {
      return function (val) {
        setTimeout(function () {
          callback(val);
        }, interval);
      };
    };
  }, {}], 2: [function (require, module, exports) {
    module.exports = function changeDate(date, units, _interval) {
      var interval = _interval.slice(-1) === "s" ? _interval.slice(0, -1) : _interval;var ret = new Date(date);switch (interval.toLowerCase()) {case "year":
          ret.setFullYear(ret.getFullYear() + units);break;case "quarter":
          ret.setMonth(ret.getMonth() + 3 * units);break;case "month":
          ret.setMonth(ret.getMonth() + units);break;case "week":
          ret.setDate(ret.getDate() + 7 * units);break;case "day":
          ret.setDate(ret.getDate() + units);break;case "hour":
          ret.setTime(ret.getTime() + units * 36e5);break;case "minute":
          ret.setTime(ret.getTime() + units * 6e4);break;case "second":
          ret.setTime(ret.getTime() + units * 1e3);break;default:
          ret = new Date(NaN);break;}return ret;
    };
  }, {}], 3: [function (require, module, exports) {
    window.moment_custom = require("./momentlte.js");window.moment = require("./momentlte.js");
  }, { "./momentlte.js": 6 }], 4: [function (require, module, exports) {
    var ordinalSuffix = require("./ordinalSuffix.js");var offsetFix = require("./offsetFix.js");dateFormat.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" };dateFormat.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] };function pad(val, len) {
      val = String(val);len = len || 2;while (val.length < len) {
        val = "0" + val;
      }return val;
    }function getWeek(date) {
      var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();targetThursday.setHours(targetThursday.getHours() - ds);var weekDiff = (targetThursday - firstThursday) / (864e5 * 7);return 1 + Math.floor(weekDiff);
    }function getDayOfWeek(date) {
      var dow = date.getDay();if (dow === 0) {
        dow = 7;
      }return dow;
    }function kindOf(val) {
      if (val === null) {
        return "null";
      }if (val === undefined) {
        return "undefined";
      }if ((typeof val === "undefined" ? "undefined" : _typeof(val)) !== "object") {
        return typeof val === "undefined" ? "undefined" : _typeof(val);
      }if (Array.isArray(val)) {
        return "array";
      }return {}.toString.call(val).slice(8, -1).toLowerCase();
    }function dateFormat() {
      var token = /([YyMmDdSsH]{1,4})|([h]){1,2}|([AaoZ])/g;var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;var timezoneClip = /[^-+\dA-Z]/g;return function (date, mask, localFlag, gmt) {
        var _flags;

        var utc = !localFlag;if (arguments.length === 1 && kindOf(date) === "string" && !/\d/.test(date)) {
          mask = date;date = undefined;
        }date = date || new Date();if (!(date instanceof Date)) {
          date = new Date(date);
        }if (isNaN(date)) {
          return new Date(date);
        }mask = String(dateFormat.masks[mask] || mask || dateFormat.masks["default"]);var _ = utc ? "getUTC" : "get";var D = date[_ + "Date"]();var d = date[_ + "Day"]();var M = date[_ + "Month"]();var Y = date[_ + "FullYear"]();var H = date[_ + "Hours"]();var m = date[_ + "Minutes"]();var s = date[_ + "Seconds"]();var L = date[_ + "Milliseconds"]();var o = utc ? 0 : date.getTimezoneOffset();var W = getWeek(date);var N = getDayOfWeek(date);var flags = (_flags = { Q: "TO BE IMPLEMENTED", Qo: "TO BE IMPLEMENTED", Do: ordinalSuffix(D), D: D, DD: pad(D), DDD: "TO BE IMPLEMENTED", d: d, dd: pad(d), ddd: dateFormat.i18n.dayNames[D], dddd: dateFormat.i18n.dayNames[D] + "day", m: m, mm: pad(m), M: M + 1, Mo: ordinalSuffix(M + 1), MM: pad(M + 1), MMM: dateFormat.i18n.monthNames[M].slice(0, 3), MMMM: dateFormat.i18n.monthNames[M], YY: String(Y).slice(2), yy: String(Y).slice(2), yyyy: Y, YYYY: Y, h: H % 12 || 12, hh: pad(H % 12 || 12), H: H, HH: pad(H) }, _defineProperty(_flags, "M", M), _defineProperty(_flags, "s", s), _defineProperty(_flags, "ss", pad(s)), _defineProperty(_flags, "l", pad(L, 3)), _defineProperty(_flags, "L", pad(Math.round(L / 10))), _defineProperty(_flags, "A", H < 12 ? "AM" : "PM"), _defineProperty(_flags, "a", H < 12 ? "AM" : "PM"), _defineProperty(_flags, "Z", o ? offsetFix(o) : "Z"), _defineProperty(_flags, "S", ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]), _defineProperty(_flags, "W", W), _defineProperty(_flags, "N", N), _flags);return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }return match.slice(1, match.length - 1);
        });
      };
    }module.exports = dateFormat();
  }, { "./offsetFix.js": 7, "./ordinalSuffix.js": 8 }], 5: [function (require, module, exports) {
    var fromISOString = function () {
      var origParse = Date.parse,
          numericKeys = [1, 4, 5, 6, 7, 10, 11];return function (date) {
        var timestamp,
            struct,
            minutesOffset = 0;if (struct = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(date)) {
          for (var i = 0, k; k = numericKeys[i]; ++i) {
            struct[k] = +struct[k] || 0;
          }struct[2] = (+struct[2] || 1) - 1;struct[3] = +struct[3] || 1;if (struct[8] !== "Z" && struct[9] !== undefined) {
            minutesOffset = struct[10] * 60 + struct[11];if (struct[9] === "+") {
              minutesOffset = 0 - minutesOffset;
            }
          }timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
        } else {
          console.warn("Bad date object passed", date);return new Date();
        }return new Date(timestamp);
      };
    }();module.exports = fromISOString;
  }, {}], 6: [function (require, module, exports) {
    var dateFormatter = require("./format.js");var dateFromISO = require("./fromISOString.js");var Arbitrator = require("./arbitrator.js");var changeDate = require("./changeDate.js");var offsetFix = require("./offsetFix.js");var CONF = { ISOFORMAT: "isoDateTime" };var isoFormat = function isoFormat(dateObj) {
      function pad(number) {
        if (number < 10) {
          return "0" + number;
        }return number;
      }var toISOString = function toISOString() {
        return this.getUTCFullYear() + "-" + pad(this.getUTCMonth() + 1) + "-" + pad(this.getUTCDate()) + "T" + pad(this.getUTCHours()) + ":" + pad(this.getUTCMinutes()) + ":" + pad(this.getUTCSeconds()) + "Z";
      };return toISOString.call(dateObj);
    };TYPE = { STRING: "STRING", DATE: "DATE", OBJECT: "OBJECT", MOMENT: "MOMENT", FUNCTION: "FUNCTION" };function typeDetect(object) {
      var string = typeof object === "string" ? TYPE.STRING : null;var DateObject = Object.prototype.toString.call(object) === "[object Date]" ? TYPE.DATE : null;var object = (typeof object === "undefined" ? "undefined" : _typeof(object)) === "object" ? TYPE.OBJECT : null;var Moment = typeof object === "function" && object._isAMomentObject ? TYPE.MOMENT : null;var fxn = typeof object === "function" ? TYPE.FUNCTION : null;return [string, DateObject, object, fxn].reduce(function (val, nextVal) {
        return val ? val : nextVal;
      });
    }function isPresent(thing) {
      return thing != null || !!thing;
    }var momentlte = function momentlte(dateObjOrString) {
      var _date;var paramType = typeDetect(dateObjOrString);switch (paramType) {case TYPE.STRING:
          _date = dateFromISO(dateObjOrString);break;case TYPE.DATE:
          _date = new Date(dateObjOrString);break;case TYPE.OBJECT:
          _date = new Date(dateObjOrString["year"], dateObjOrString["month"], dateObjOrString["date"], dateObjOrString["hours"], dateObjOrString["minutes"], dateObjOrString["seconds"], dateObjOrString["milliseconds"]);break;case TYPE.MOMENT:
          _date = new Date(dateObjOrString._d);break;case TYPE.NUMBER:
          throw "We dont support numbers.";break;default:
          _date = new Date();}var _response = function _response(val) {
        var valType = typeDetect(val);if (valType === TYPE.DATE) {
          _date = val;
        } else if (valType === TYPE.OBJECT) {
          Object.keys(val).forEach(function (key, idx, keys) {
            _response[key](val[key]);
          });return _response;
        } else {
          _date = new Date();
        }return _response;
      };_response._d = _date;_response._isAMomentObject = true;_response.every = function (numValue, _unit, callback) {
        var arbitrator = Arbitrator(callback, numValue * 1e3);return arbitrator;
      };_response.add = function (interval, unit) {
        _date = changeDate(_date, interval, unit);_response._d = _date;return _response;
      };_response.minus = function (val, unit) {
        return _response.add(-1 * val, unit);
      };_response.toLocaleISOString = function () {
        var initial = dateFormatter(_date, "YYYY-MM-DDTHH:mm:ss", true);var offset = _date.getTimezoneOffset();var offsetString = offsetFix(offset);return initial + offsetString;
      };_response.toISOString = function () {
        return _response.format("yyyy-MM-DDTHH:mm:ssZ");
      };_response.format = function (formatStr, localFlag) {
        return dateFormatter(_date, formatStr, localFlag);
      };_response.valueOf = function () {
        return +_date;
      };_response.get = _response.set = function (key, val) {
        if (typeDetect(key) === TYPE.OBJECT) {
          Object.keys(key).forEach(function (_key) {
            _response.set(_key, key[_key]);
          });return _response;
        } else {
          return isPresent(val) ? _response[key](val) : _response[key]();
        }
      };_response.year = _response.years = function (val, localFlag) {
        var valPresent = isPresent(val);var getOrSet = valPresent ? "set" : "get";var mode = localFlag ? "" : "UTC";var _method = "FullYear";var method = getOrSet + mode + _method;if (valPresent) {
          _date[method](val);return _response;
        } else {
          return _date[method]();
        }
      };_response.month = _response.months = function (val, localFlag) {
        var valPresent = isPresent(val);var getOrSet = valPresent ? "set" : "get";var mode = localFlag ? "" : "UTC";var _method = "Month";var method = getOrSet + mode + _method;if (valPresent) {
          _date[method](val);return _response;
        } else {
          return _date[method]();
        }
      };_response.date = _response.dates = function (val, localFlag) {
        var valPresent = isPresent(val);var getOrSet = valPresent ? "set" : "get";var mode = localFlag ? "" : "UTC";var _method = "Date";var method = getOrSet + mode + _method;if (valPresent) {
          _date[method](val);return _response;
        } else {
          return _date[method]();
        }
      };_response.hour = _response.hours = function (val, localFlag) {
        var valPresent = isPresent(val);var getOrSet = valPresent ? "set" : "get";var mode = localFlag ? "" : "UTC";var _method = "Hours";var method = getOrSet + mode + _method;if (valPresent) {
          _date[method](val);return _response;
        } else {
          return _date[method]();
        }
      };_response.minute = _response.minutes = function (val, localFlag) {
        var valPresent = isPresent(val);var getOrSet = valPresent ? "set" : "get";var mode = localFlag ? "" : "UTC";var _method = "Minutes";var method = getOrSet + mode + _method;if (valPresent) {
          _date[method](val);return _response;
        } else {
          return _date[method]();
        }
      };_response.second = _response.seconds = function (val, localFlag) {
        var valPresent = isPresent(val);var getOrSet = valPresent ? "set" : "get";var mode = localFlag ? "" : "UTC";var _method = "Seconds";var method = getOrSet + mode + _method;if (valPresent) {
          _date[method](val);return _response;
        } else {
          return _date[method]();
        }
      };_response.millisecond = _response.milliseconds = function (val, localFlag) {
        var valPresent = isPresent(val);var getOrSet = valPresent ? "set" : "get";var mode = localFlag ? "" : "UTC";var _method = "Milliseconds";var method = getOrSet + mode + _method;if (valPresent) {
          _date[method](val);return _response;
        } else {
          return _date[method]();
        }
      };_response.localYear = _response.localYears = function () {
        return _date.getFullYear();
      };_response.localMonth = _response.localMonths = function () {
        return _date.getMonth();
      };_response.localDate = _response.localDates = function () {
        return _date.getDate();
      };_response.localHour = _response.localHours = function () {
        return _date.getHours();
      };_response.localMinute = _response.localMinutes = function () {
        return _date.getMinutes();
      };_response.localSecond = _response.localSeconds = function () {
        return _date.getSeconds();
      };_response.localMillisecond = _response.localMilliseconds = function () {
        return _date.getMilliseconds();
      };return _response;
    };module.exports = momentlte;
  }, { "./arbitrator.js": 1, "./changeDate.js": 2, "./format.js": 4, "./fromISOString.js": 5, "./offsetFix.js": 7 }], 7: [function (require, module, exports) {
    function offsetFix(numMinutes) {
      var numMinutes = parseInt(numMinutes);if (!numMinutes) return "+00:00";function pad(number) {
        var resp;var isNeg = number < 0;var number = isNeg ? number * -1 : number;if (number < 10) {
          return "0" + number;
        }return number;
      }var isNeg = numMinutes < 0;var numMinutes = isNeg ? numMinutes * -1 : numMinutes;var numHours = Math.floor(numMinutes / 60);var remainMin = numMinutes % 60;var numHoursString = pad(numHours);var remainMinString = pad(remainMin);var _resp = numHoursString + ":" + remainMinString;return (isNeg ? "+" : "-") + _resp;
    }module.exports = offsetFix;
  }, {}], 8: [function (require, module, exports) {
    module.exports = function getOrdinal(n) {
      var s = ["th", "st", "nd", "rd"],
          v = n % 100;return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
  }, {}] }, {}, [3]);

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultDateFormat$af;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_defaultDateFormat$af = {
  defaultDateFormat: 'MM-DD-YYYY',
  afterSubmission: 'showForm',
  submissionFrequency: 'perPage',
  redirectLink: '',
  ownerEmail: '',
  carrier: '',
  carrierLabel: '',
  phoneNumber: '',
  phoneValid: false,
  pattern: false,
  printable: false,
  stripeEnabled: false,
  braintreeEnabled: false,
  offlineEnabled: false,
  noteToSeller: false,
  sendCartAbandonmentEmailsTo: '',
  sendConfirmationEmailHack: false,
  confirmationEmailFieldIdx: null,
  patternType: 'subtle_white_feathers',
  removePowrLogo: false,
  multistepForm: false,
  title: 'Form Title',
  powrMail: 'zilla',
  emails: {},
  description: '',
  data: [{
    type: 'text',
    label: 'Example text field',
    half: false,
    required: false,
    isDefault: true
  }, {
    type: 'select',
    label: 'Example Dropdown',
    options: ['Option 1', 'Option 2', 'Option 3'],
    half: false,
    required: false,
    isDefault: true
  }, {
    type: 'textarea',
    label: 'Example textarea',
    half: false,
    required: false,
    isDefault: true
  }, {
    type: 'radio',
    label: 'Example Radio',
    options: ['Option A', 'Option B', 'Option C'],
    half: false,
    required: false,
    radioAlign: 'vertical',
    isDefault: true
  }],

  mailchimpList: '',
  mailchimpListName: '',

  formTriggerElementType: 'default', //fixed or default
  formTriggerElementStyle: 'floatingButton',
  formTriggerTabLocation: 'right',
  formTriggerPositionOffset: '100%',
  formTriggerIcon: 'envelope-o',
  formTriggerText: 'Your Text Here',
  fixedButtonColor: 'rgb(255,255,255)',
  fixedButtonBackgroundColor: 'rgb(30,136,229)',

  emailSubject: '', //This is now changed in powrzilla
  emailBody: '', //This is now changed in powrzilla
  emailName: '', //This is now changed in powrzilla
  emailAddress: '', //This is now changed in powrzilla
  customAdminEmails: false,
  adminSubjectVariable: '',
  adminEmailName: '',
  adminSubjectMessage: '',
  includeSkippedFields: false,

  //Payment options
  paymentRequired: false,
  paypalEnabled: true,
  paypalQuantity: 1,
  quantityLabel: 'Quantity',
  paypalButtonText: 'Purchase',
  showQuantityInput: false,
  showPriceSummary: true,
  paypalPaypalAccount: '', //The email for the paypal accound
  paypalCurrencyCode: 'USD', //The currency code
  //logo: '', //Url to a logo for the business; couldn't get this to work so not using
  paypalPurchaseType: 'BuyNow', //Currently BuyNow or Recurring. Should correspond to the paypal notation
  //Product information
  paypalItemName: 'My product', //Name of the product
  paypalItemCost: '', //Cost of item
  paypalAllowUserToSpecifyPrice: false, //Whether to allow the user to specify the price
  paypalAllowUserToSpecifyQuantity: false,
  //Subscriptions
  paypalTrialOn: false,
  paypalTrialPrice: 0.0,
  paypalTrialDuration: 30,
  paypalTrialDurationUnits: 'D',
  paypalSubscriptionPrice: 10.0, //DEPRECATED - paypalItemCost is where the item cost is now
  paypalSubscriptionDuration: 1,
  paypalSubscriptionDurationUnits: 'M',
  paypalShippingCost: '',
  paypalNoShipping: '0',
  paypalTaxType: 'rate',
  paypalTaxRate: '0',
  paypalTaxAmount: '0',
  showGoogleSheetsAlert: true,

  titleFontFamily: 'Open Sans',
  titleFontSize: '28px',
  titleFontColor: 'rgb(56, 56, 56)',
  textFontFamily: 'Open Sans', //This is label text
  textFontSize: '12px',
  textFontColor: 'rgb(86, 86, 86)',
  googleSheetsConnected: false,

  //Button
  buttonBackgroundColor: 'rgb(86, 86, 86)',
  buttonColor: '#FFF',
  buttonRadius: '4px',

  //Standard Background
  backgroundGradient: false,
  backgroundColor: '#FFF',
  backgroundStartColor: '#d5d5d5',
  backgroundEndColor: '#333',

  backgroundBorderColor: 'rgb(238, 238, 238)',
  backgroundBorderRadius: '4px',
  backgroundBorderWidth: '1px',
  backgroundShadow: 'none',
  inputBackgroundColor: '#FFF',
  inputBorderRadius: '4px',
  inputFontColor: '#333',
  inputFontSize: '12px',
  inputFontFamily: 'Open Sans',

  //Discounts
  discountCodeText: 'Discount Code', //Text for discount code
  discounts: [
    //  {
    //      discountCode: '', //The discount code
    //      discountType: 'rate', //Discount a flat amount or a rate  'flat', 'rate'
    //      discountAmount: 0 //The actual discount
    //  }
  ],
  //textAlign: 'left',
  passwordProtectOn: false,
  titleAlign: 'left',
  successText: 'Received. Thank you!',
  buttonText: 'Submit',
  nextButtonText: 'Next',
  backButtonText: 'Back',
  buttonAlign: 'leftBtn',
  captchaRequired: false,
  labelType: 'inlineLabels', //Either inlineLabels or blockLabels
  pluginWidth: '500px',
  introAnimation: 'none',
  buttonAnimation: 'none',
  customCSS: '',
  customJS: '',
  template: 'form_template_custom',

  limitingCharacters: false,
  conditionalLogic: '',
  showResponse: false
}, _defineProperty(_defaultDateFormat$af, 'googleSheetsConnected', false), _defineProperty(_defaultDateFormat$af, 'view_form_responses', []), _defineProperty(_defaultDateFormat$af, 'paragraphHeight', '50px'), _defaultDateFormat$af);

/***/ })

/******/ });
