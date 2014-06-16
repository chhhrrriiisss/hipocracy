
    /*! theme 21-05-2014 */
/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
/*!
 * Olle Ota
 * Fetch more posts from infinite scroll if doc height is too small
 */
function fetchMore() {
        1 == theme_options.infinite_scroll && $(window).height() >= $(document).height() && $(".index #content").infinitescroll("retrieve")
    }
    /*!
     * Olle Ota
     * Prepares grid after initial load
     */

function prepareGrid() {
        $(".index #content").masonry({
            itemSelector: ".index article"
        }).imagesLoaded(function () {
            $(".index #content").masonry("reloadItems").masonry(), olleMenus(), fetchMore()
        })
    }
    /*!
     * Olle Ota
     * Set up menus
     */

function olleMenus() {
        if ("pages" == theme_options.menu && $("#nav-toggle-wrapper").hide(), "pages" != theme_options.menu && $("#nav-toggle").on("click", function () {
            $(this).toggleClass("active")
        }), "overlay" == theme_options.menu && ($("#overlay").hide(), $("#nav-toggle").on("click", function () { // animates and shows overlay
            $("#overlay").fadeToggle(), // sets overflow to none in CSS
                $("body").toggleClass("disable-scroll"), // makes overlay take precedent over posts for sidebar themes
                $("body").toggleClass("fixed-masthead"), $("body").hasClass("sidebar-present") && $("body").removeClass("sidebar-present"), "fixed" == $("#masthead").css("position") && $("body").toggleClass("sidebar-present")
        })), "slide-panel" == theme_options.menu) {
            $("#slide-panel").hide();
            var a = $.jPanelMenu({
                menu: "#slide-panel nav",
                trigger: "#nav-toggle",
                duration: 300,
                beforeOpen: function () {
                    $("#fade-body-hook").addClass("fade-body"), $(".jPanelMenu").addClass("disable-scroll")
                },
                afterClose: function () {
                    $("#nav-toggle").removeClass("active"), $("#fade-body-hook").removeClass("fade-body"), $(".jPanelMenu").removeClass("disable-scroll")
                }
            });
            a.on()
        }
    }! function () {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function () {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype;
        d.getListeners = function (a) {
            var b, c, d = this._getEvents();
            if ("object" == typeof a) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function (a) {
            var b, c = [];
            for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function (a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function (a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
            return this.getListeners(a), this
        }, d.defineEvents = function (a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function (a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = c("removeListener"), d.addListeners = function (a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function (a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function (a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function (a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function (a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function (a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, d._getEvents = function () {
            return this._events || (this._events = {})
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function (a) {
        var b = document.documentElement,
            c = function () {};
        b.addEventListener ? c = function (a, b, c) {
            a.addEventListener(b, c, !1)
        } : b.attachEvent && (c = function (b, c, d) {
            b[c + d] = d.handleEvent ? function () {
                var b = a.event;
                b.target = b.target || b.srcElement, d.handleEvent.call(d, b)
            } : function () {
                var c = a.event;
                c.target = c.target || c.srcElement, d.call(b, c)
            }, b.attachEvent("on" + c, b[c + d])
        });
        var d = function () {};
        b.removeEventListener ? d = function (a, b, c) {
            a.removeEventListener(b, c, !1)
        } : b.detachEvent && (d = function (a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var e = {
            bind: c,
            unbind: d
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", e) : a.eventie = e
    }(this),
    function (a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            return "[object Array]" === i.call(a)
        }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if ("number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b
        }

        function e(a, c) {
            function e(a, c, g) {
                if (!(this instanceof e)) return new e(a, c);
                "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = d(a), this.options = b({}, this.options), "function" == typeof c ? g = c : b(this.options, c), g && this.on("always", g), this.getImages(), f && (this.jqDeferred = new f.Deferred);
                var h = this;
                setTimeout(function () {
                    h.check()
                })
            }

            function i(a) {
                this.img = a
            }
            e.prototype = new a, e.prototype.options = {}, e.prototype.getImages = function () {
                this.images = [];
                for (var a = 0, b = this.elements.length; b > a; a++) {
                    var c = this.elements[a];
                    "IMG" === c.nodeName && this.addImage(c);
                    for (var d = c.querySelectorAll("img"), e = 0, f = d.length; f > e; e++) {
                        var g = d[e];
                        this.addImage(g)
                    }
                }
            }, e.prototype.addImage = function (a) {
                var b = new i(a);
                this.images.push(b)
            }, e.prototype.check = function () {
                function a(a, e) {
                    return b.options.debug && h && g.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
                }
                var b = this,
                    c = 0,
                    d = this.images.length;
                if (this.hasAnyBroken = !1, !d) return this.complete(), void 0;
                for (var e = 0; d > e; e++) {
                    var f = this.images[e];
                    f.on("confirm", a), f.check()
                }
            }, e.prototype.progress = function (a) {
                this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
                var b = this;
                setTimeout(function () {
                    b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify(b, a)
                })
            }, e.prototype.complete = function () {
                var a = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var b = this;
                setTimeout(function () {
                    if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                        var c = b.hasAnyBroken ? "reject" : "resolve";
                        b.jqDeferred[c](b)
                    }
                })
            }, f && (f.fn.imagesLoaded = function (a, b) {
                var c = new e(this, a, b);
                return c.jqDeferred.promise(f(this))
            });
            var j = {};
            return i.prototype = new a, i.prototype.check = function () {
                var a = j[this.img.src];
                if (a) return this.useCached(a), void 0;
                if (j[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
                var b = this.proxyImage = new Image;
                c.bind(b, "load", this), c.bind(b, "error", this), b.src = this.img.src
            }, i.prototype.useCached = function (a) {
                if (a.isConfirmed) this.confirm(a.isLoaded, "cached was confirmed");
                else {
                    var b = this;
                    a.on("confirm", function (a) {
                        return b.confirm(a.isLoaded, "cache emitted confirmed"), !0
                    })
                }
            }, i.prototype.confirm = function (a, b) {
                this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
            }, i.prototype.handleEvent = function (a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, i.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindProxyEvents()
            }, i.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindProxyEvents()
            }, i.prototype.unbindProxyEvents = function () {
                c.unbind(this.proxyImage, "load", this), c.unbind(this.proxyImage, "error", this)
            }, e
        }
        var f = a.jQuery,
            g = a.console,
            h = void 0 !== g,
            i = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], e) : a.imagesLoaded = e(a.EventEmitter, a.eventie)
    }(window), /*jshint undef: true */
    /*global jQuery: true */
    /*
   --------------------------------
   Infinite Scroll
   --------------------------------
   + https://github.com/paulirish/infinite-scroll
   + version 2.0b2.120519
   + Copyright 2011/12 Paul Irish & Luke Shumard
   + Licensed under the MIT license

   + Documentation: http://infinite-scroll.com/
   + Edited: Yes
*/
    function (a, b, c) {
        "use strict";
        b.infinitescroll = function (a, c, d) {
                this.element = b(d), // Flag the object in the event of a failed creation
                    this._create(a, c) || (this.failed = !0)
            }, b.infinitescroll.defaults = {
                loading: {
                    finished: c,
                    finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
                    img: "data:image/gif;base64,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",
                    msg: null,
                    msgText: "<em>Loading the next set of posts...</em>",
                    selector: null,
                    speed: "fast",
                    start: c
                },
                state: {
                    isDuringAjax: !1,
                    isInvalidPage: !1,
                    isDestroyed: !1,
                    isDone: !1, // For when it goes all the way through the archive.
                    isPaused: !1,
                    isBeyondMaxPage: !1,
                    currPage: 1
                },
                debug: !1,
                behavior: c,
                binder: b(a), // used to cache the selector
                nextSelector: "div.navigation a:first",
                navSelector: "div.navigation",
                contentSelector: null, // rename to pageFragment
                extraScrollPx: 150,
                itemSelector: "div.post",
                animate: !1,
                pathParse: c,
                dataType: "html",
                appendCallback: !0,
                bufferPx: 40,
                errorCallback: function () {},
                infid: 0, //Instance ID
                pixelsFromNavToBottom: c,
                path: c, // Either parts of a URL as an array (e.g. ["/page/", "/"] or a function that takes in the page number and returns a URL
                prefill: !1, // When the document is smaller than the window, load data until the document is larger or links are exhausted
                maxPage: c
            }, b.infinitescroll.prototype = {
                /*	
            ----------------------------
            Private methods
            ----------------------------
            */
                // Bind or unbind from scroll
                _binding: function (a) {
                    var b = this,
                        d = b.options; // if behavior is defined and this function is extended, call that instead of default
                    return d.v = "2.0b2.120520", d.behavior && this["_binding_" + d.behavior] !== c ? (this["_binding_" + d.behavior].call(this), void 0) : "bind" !== a && "unbind" !== a ? (this._debug("Binding value  " + a + " not valid"), !1) : ("unbind" === a ? this.options.binder.unbind("smartscroll.infscr." + b.options.infid) : this.options.binder[a]("smartscroll.infscr." + b.options.infid, function () {
                        b.scroll()
                    }), this._debug("Binding", a), void 0)
                }, // Fundamental aspects of the plugin are initialized
                _create: function (d, e) { // Add custom options to defaults
                    var f = b.extend(!0, {}, b.infinitescroll.defaults, d);
                    this.options = f;
                    var g = b(a),
                        h = this; // Validate selectors
                    if (!h._validate(d)) return !1; // Validate page fragment path
                    var i = b(f.nextSelector).attr("href");
                    if (!i) return this._debug("Navigation selector not found"), !1; // Set the path to be a relative URL from root.
                    f.path = f.path || this._determinepath(i), // contentSelector is 'page fragment' option for .load() / .ajax() calls
                        f.contentSelector = f.contentSelector || this.element, // loading.selector - if we want to place the load message in a specific selector, defaulted to the contentSelector
                        f.loading.selector = f.loading.selector || f.contentSelector, // Define loading.msg
                        f.loading.msg = f.loading.msg || b('<div id="infscr-loading"><img alt="Loading..." src="' + f.loading.img + '" /><div>' + f.loading.msgText + "</div></div>"), // Preload loading.img
                        (new Image).src = f.loading.img, // distance from nav links to bottom
                        // computed as: height of the document + top offset of container - top offset of nav link
                        f.pixelsFromNavToBottom === c && (f.pixelsFromNavToBottom = b(document).height() - b(f.navSelector).offset().top, this._debug("pixelsFromNavToBottom: " + f.pixelsFromNavToBottom));
                    var j = this; // Return true to indicate successful creation
                    // determine loading.start actions
                    return f.loading.start = f.loading.start || function () {
                            b(f.navSelector).hide(), f.loading.msg.appendTo(f.loading.selector).show(f.loading.speed, b.proxy(function () {
                                this.beginAjax(f)
                            }, j))
                        }, // determine loading.finished actions
                        f.loading.finished = f.loading.finished || function () {
                            f.state.isBeyondMaxPage || f.loading.msg.fadeOut(f.loading.speed)
                        }, // callback loading
                        f.callback = function (a, d, h) {
                            f.behavior && a["_callback_" + f.behavior] !== c && a["_callback_" + f.behavior].call(b(f.contentSelector)[0], d, h), e && e.call(b(f.contentSelector)[0], d, f, h), f.prefill && g.bind("resize.infinite-scroll", a._prefill)
                        }, d.debug && ( // Tell IE9 to use its built-in console
                            !Function.prototype.bind || "object" != typeof console && "function" != typeof console || "object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function (a) {
                                console[a] = this.call(console[a], console)
                            }, Function.prototype.bind)), this._setup(), // Setups the prefill method for use
                        f.prefill && this._prefill(), !0
                },
                _prefill: function () {
                    function c() {
                        return d.options.contentSelector.height() <= e.height()
                    }
                    var d = this,
                        e = b(a);
                    this._prefill = function () {
                            c() && d.scroll(), e.bind("resize.infinite-scroll", function () {
                                c() && (e.unbind("resize.infinite-scroll"), d.scroll())
                            })
                        }, // Call self after setting up the new function
                        this._prefill()
                }, // Console log wrapper
                _debug: function () {
                    !0 === this.options.debug && ("undefined" != typeof console && "function" == typeof console.log ? // Modern browsers
                        // Single argument, which is a string
                        1 === Array.prototype.slice.call(arguments).length && "string" == typeof Array.prototype.slice.call(arguments)[0] ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log || // IE8
                        Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
                }, // find the number to increment in the path.
                _determinepath: function (a) {
                    var b = this.options; // if behavior is defined and this function is extended, call that instead of default
                    if (b.behavior && this["_determinepath_" + b.behavior] !== c) return this["_determinepath_" + b.behavior].call(this, a);
                    if (b.pathParse) return this._debug("pathParse manual"), b.pathParse(a, this.options.state.currPage + 1);
                    if (a.match(/^(.*?)\b2\b(.*?$)/)) a = a.match(/^(.*?)\b2\b(.*?$)/).slice(1);
                    else if (a.match(/^(.*?)2(.*?$)/)) { // page= is used in django:
                        // http://www.infinite-scroll.com/changelog/comment-page-1/#comment-127
                        if (a.match(/^(.*?page=)2(\/.*|$)/)) return a = a.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                        a = a.match(/^(.*?)2(.*?$)/).slice(1)
                    } else { // page= is used in drupal too but second page is page=1 not page=2:
                        // thx Jerod Fritz, vladikoff
                        if (a.match(/^(.*?page=)1(\/.*|$)/)) return a = a.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                        this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."), // Get rid of isInvalidPage to allow permalink to state
                            b.state.isInvalidPage = !0
                    }
                    return this._debug("determinePath", a), a
                }, // Custom error
                _error: function (a) {
                    var b = this.options; // if behavior is defined and this function is extended, call that instead of default
                    // if behavior is defined and this function is extended, call that instead of default
                    return b.behavior && this["_error_" + b.behavior] !== c ? (this["_error_" + b.behavior].call(this, a), void 0) : ("destroy" !== a && "end" !== a && (a = "unknown"), this._debug("Error", a), ("end" === a || b.state.isBeyondMaxPage) && this._showdonemsg(), b.state.isDone = !0, b.state.currPage = 1, // if you need to go back to this instance
                        b.state.isPaused = !1, b.state.isBeyondMaxPage = !1, this._binding("unbind"), void 0)
                }, // Load Callback
                _loadcallback: function (d, e, f) {
                    var g, h = this.options,
                        i = this.options.callback, // GLOBAL OBJECT FOR CALLBACK
                        j = h.state.isDone ? "done" : h.appendCallback ? "append" : "no-append"; // if behavior is defined and this function is extended, call that instead of default
                    if (h.behavior && this["_loadcallback_" + h.behavior] !== c) return this["_loadcallback_" + h.behavior].call(this, d, e), void 0;
                    switch (j) {
                    case "done":
                        return this._showdonemsg(), !1;
                    case "no-append":
                        "html" === h.dataType && (e = "<div>" + e + "</div>", e = b(e).find(h.itemSelector));
                        break;
                    case "append":
                        var k = d.children(); // if it didn't return anything
                        if (0 === k.length) return this._error("end");
                        for ( // use a documentFragment because it works when content is going into a table or UL
                            g = document.createDocumentFragment(); d[0].firstChild;) g.appendChild(d[0].firstChild);
                        this._debug("contentSelector", b(h.contentSelector)[0]), b(h.contentSelector)[0].appendChild(g), // previously, we would pass in the new DOM element as context for the callback
                            // however we're now using a documentfragment, which doesn't have parents or children,
                            // so the context is the contentContainer guy, and we pass in an array
                            // of the elements collected as the first argument.
                            e = k.get()
                    } // smooth scroll to ease in the new content
                    if ( // loadingEnd function
                        h.loading.finished.call(b(h.contentSelector)[0], h), h.animate) {
                        var l = b(a).scrollTop() + b(h.loading.msg).height() + h.extraScrollPx + "px";
                        b("html,body").animate({
                            scrollTop: l
                        }, 800, function () {
                            h.state.isDuringAjax = !1
                        })
                    }
                    h.animate || ( // once the call is done, we can allow it again.
                        h.state.isDuringAjax = !1), i(this, e, f), h.prefill && this._prefill()
                },
                _nearbottom: function () {
                    var d = this.options,
                        e = 0 + b(document).height() - d.binder.scrollTop() - b(a).height(); // if behavior is defined and this function is extended, call that instead of default
                    // if behavior is defined and this function is extended, call that instead of default
                    return d.behavior && this["_nearbottom_" + d.behavior] !== c ? this["_nearbottom_" + d.behavior].call(this) : (this._debug("math:", e, d.pixelsFromNavToBottom), e - d.bufferPx < d.pixelsFromNavToBottom)
                }, // Pause / temporarily disable plugin from firing
                _pausing: function (a) {
                    var b = this.options; // if behavior is defined and this function is extended, call that instead of default
                    if (b.behavior && this["_pausing_" + b.behavior] !== c) return this["_pausing_" + b.behavior].call(this, a), void 0;
                    switch ( // If pause is not 'pause' or 'resume', toggle it's value
                        "pause" !== a && "resume" !== a && null !== a && this._debug("Invalid argument. Toggling pause value instead"), a = !a || "pause" !== a && "resume" !== a ? "toggle" : a) {
                    case "pause":
                        b.state.isPaused = !0;
                        break;
                    case "resume":
                        b.state.isPaused = !1;
                        break;
                    case "toggle":
                        b.state.isPaused = !b.state.isPaused
                    }
                    return this._debug("Paused", b.state.isPaused), !1
                }, // Behavior is determined
                // If the behavior option is undefined, it will set to default and bind to scroll
                _setup: function () {
                    var a = this.options; // if behavior is defined and this function is extended, call that instead of default
                    // if behavior is defined and this function is extended, call that instead of default
                    return a.behavior && this["_setup_" + a.behavior] !== c ? (this["_setup_" + a.behavior].call(this), void 0) : (this._binding("bind"), !1)
                }, // Show done message
                _showdonemsg: function () {
                    var a = this.options; // if behavior is defined and this function is extended, call that instead of default
                    // if behavior is defined and this function is extended, call that instead of default
                    return a.behavior && this["_showdonemsg_" + a.behavior] !== c ? (this["_showdonemsg_" + a.behavior].call(this), void 0) : (b("#loading").fadeOut(), a.loading.msg.find("img").hide().parent().find("div").html(a.loading.finishedMsg).animate({
                            opacity: 1
                        }, 2e3, function () {
                            b(this).parent().fadeOut(a.loading.speed)
                        }), // user provided callback when done    
                        a.errorCallback.call(b(a.contentSelector)[0], "done"), void 0)
                }, // grab each selector option and see if any fail
                _validate: function (a) {
                    for (var c in a)
                        if (c.indexOf && c.indexOf("Selector") > -1 && 0 === b(a[c]).length) return this._debug("Your " + c + " found no elements."), !1;
                    return !0
                },
                /*	
            ----------------------------
            Public methods
            ----------------------------
            */
                // Bind to scroll
                bind: function () {
                    this._binding("bind")
                }, // Destroy current instance of plugin
                destroy: function () {
                    return this.options.state.isDestroyed = !0, this.options.loading.finished(), this._error("destroy")
                }, // Set pause value to false
                pause: function () {
                    this._pausing("pause")
                }, // Set pause value to false
                resume: function () {
                    this._pausing("resume")
                },
                beginAjax: function (a) {
                    var d, e, f, g, h = this,
                        i = a.path; // Manually control maximum page 
                    if ( // flinders test
                        b("#loading").show(), // increment the URL bit. e.g. /page/3/
                        a.state.currPage++, a.maxPage != c && a.state.currPage > a.maxPage) return a.state.isBeyondMaxPage = !0, this.destroy(), void 0;
                    switch ( // if we're dealing with a table we can't use DIVs
                        d = b(a.contentSelector).is("table, tbody") ? b("<tbody/>") : b("<div/>"), e = "function" == typeof i ? i(a.state.currPage) : i.join(a.state.currPage), h._debug("heading into ajax", e), f = "html" === a.dataType || "json" === a.dataType ? a.dataType : "html+callback", a.appendCallback && "html" === a.dataType && (f += "+callback"), f) {
                    case "html+callback":
                        h._debug("Using HTML via .load() method"), d.load(e + " " + a.itemSelector, c, function (a) {
                            h._loadcallback(d, a, e)
                        });
                        break;
                    case "html":
                        h._debug("Using " + f.toUpperCase() + " via $.ajax() method"), b.ajax({ // params
                            url: e,
                            dataType: a.dataType,
                            complete: function (a, b) {
                                g = "undefined" != typeof a.isResolved ? a.isResolved() : "success" === b || "notmodified" === b, g ? h._loadcallback(d, a.responseText, e) : h._error("end")
                            }
                        });
                        break;
                    case "json":
                        h._debug("Using " + f.toUpperCase() + " via $.ajax() method"), b.ajax({
                            dataType: "json",
                            type: "GET",
                            url: e,
                            success: function (b, f, i) {
                                if (g = "undefined" != typeof i.isResolved ? i.isResolved() : "success" === f || "notmodified" === f, a.appendCallback) // if appendCallback is true, you must defined template in options.
                                // note that data passed into _loadcallback is already an html (after processed in opts.template(data)).
                                    if (a.template !== c) {
                                    var j = a.template(b);
                                    d.append(j), g ? h._loadcallback(d, j) : h._error("end")
                                } else h._debug("template must be defined."), h._error("end");
                                else // if appendCallback is false, we will pass in the JSON object. you should handle it yourself in your callback.
                                    g ? h._loadcallback(d, b, e) : h._error("end")
                            },
                            error: function () {
                                h._debug("JSON ajax request failed."), h._error("end")
                            }
                        })
                    }
                }, // Retrieve next set of content items
                retrieve: function (a) {
                    a = a || null;
                    var d = this,
                        e = d.options; // if behavior is defined and this function is extended, call that instead of default
                    // if behavior is defined and this function is extended, call that instead of default
                    return e.behavior && this["retrieve_" + e.behavior] !== c ? (this["retrieve_" + e.behavior].call(this, a), void 0) : // for manual triggers, if destroyed, get out of here
                        e.state.isDestroyed ? (this._debug("Instance is destroyed"), !1) : ( // we dont want to fire the ajax multiple times
                            e.state.isDuringAjax = !0, e.loading.start.call(b(e.contentSelector)[0], e), void 0)
                }, // Check to see next page is needed
                scroll: function () {
                    var a = this.options,
                        b = a.state; // if behavior is defined and this function is extended, call that instead of default
                    // if behavior is defined and this function is extended, call that instead of default
                    return a.behavior && this["scroll_" + a.behavior] !== c ? (this["scroll_" + a.behavior].call(this), void 0) : (b.isDuringAjax || b.isInvalidPage || b.isDone || b.isDestroyed || b.isPaused || this._nearbottom() && this.retrieve(), void 0)
                }, // Toggle pause value
                toggle: function () {
                    this._pausing()
                }, // Unbind from scroll
                unbind: function () {
                    this._binding("unbind")
                }, // update options
                update: function (a) {
                    b.isPlainObject(a) && (this.options = b.extend(!0, this.options, a))
                }
            },
            /*	
        ----------------------------
        Infinite Scroll function
        ----------------------------

        Borrowed logic from the following...

        jQuery UI
        - https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.widget.js

        jCarousel
        - https://github.com/jsor/jcarousel/blob/master/lib/jquery.jcarousel.js

        Masonry
        - https://github.com/desandro/masonry/blob/master/jquery.masonry.js		

*/
            b.fn.infinitescroll = function (a, c) {
                var d = typeof a;
                switch (d) { // method 
                case "string":
                    var e = Array.prototype.slice.call(arguments, 1);
                    this.each(function () {
                        var c = b.data(this, "infinitescroll");
                        return c ? b.isFunction(c[a]) && "_" !== a.charAt(0) ? ( // no errors!
                            c[a].apply(c, e), void 0) : !1 : !1
                    });
                    break; // creation 
                case "object":
                    this.each(function () {
                        var d = b.data(this, "infinitescroll");
                        d ? // update options of current instance
                            d.update(a) : ( // initialize new instance
                                d = new b.infinitescroll(a, c, this), // don't attach if instantiation failed
                                d.failed || b.data(this, "infinitescroll", d))
                    })
                }
                return this
            };
        /* 
         * smartscroll: debounced scroll event for jQuery *
         * https://github.com/lukeshumard/smartscroll
         * Based on smartresize by @louis_remi: https://github.com/lrbabe/jquery.smartresize.js *
         * Copyright 2011 Louis-Remi & Luke Shumard * Licensed under the MIT license. *
         */
        var d, e = b.event;
        e.special.smartscroll = {
            setup: function () {
                b(this).bind("scroll", e.special.smartscroll.handler)
            },
            teardown: function () {
                b(this).unbind("scroll", e.special.smartscroll.handler)
            },
            handler: function (a, c) { // Save the context
                var e = this,
                    f = arguments; // set correct event type
                a.type = "smartscroll", d && clearTimeout(d), d = setTimeout(function () {
                    b(e).trigger("smartscroll", f)
                }, "execAsap" === c ? 0 : 100)
            }
        }, b.fn.smartscroll = function (a) {
            return a ? this.bind("smartscroll", a) : this.trigger("smartscroll", ["execAsap"])
        }
    }(window, jQuery),
    /**
     *
     * jPanelMenu 1.3.0 (http://jpanelmenu.com)
     * By Anthony Colangelo (http://acolangelo.com)
     * Edited: Yes
     *
     * */
    function (a) {
        a.jPanelMenu = function (b) {
            ("undefined" == typeof b || null == b) && (b = {});
            var c = {
                options: a.extend({
                    menu: "#menu",
                    trigger: ".menu-trigger",
                    excludedPanelContent: "style, script",
                    direction: "left",
                    openPosition: "250px",
                    animated: !0,
                    closeOnContentClick: !0,
                    keyboardShortcuts: [{
                        code: 27,
                        open: !1,
                        close: !0
                    }, {
                        code: 37,
                        open: !1,
                        close: !0
                    }, {
                        code: 39,
                        open: !0,
                        close: !0
                    }, {
                        code: 77,
                        open: !0,
                        close: !0
                    }],
                    duration: 150,
                    openDuration: b.duration || 150,
                    closeDuration: b.duration || 150,
                    easing: "ease-in-out",
                    openEasing: b.easing || "ease-in-out",
                    closeEasing: b.easing || "ease-in-out",
                    before: function () {},
                    beforeOpen: function () {},
                    beforeClose: function () {},
                    after: function () {},
                    afterOpen: function () {},
                    afterClose: function () {},
                    beforeOn: function () {},
                    afterOn: function () {},
                    beforeOff: function () {},
                    afterOff: function () {}
                }, b),
                settings: {
                    transitionsSupported: "WebkitTransition" in document.body.style || "MozTransition" in document.body.style || "msTransition" in document.body.style || "OTransition" in document.body.style || "Transition" in document.body.style,
                    shiftFixedChildren: !1,
                    panelPosition: "relative",
                    positionUnits: "px"
                },
                menu: "#jPanelMenu-menu",
                panel: ".jPanelMenu-panel",
                fixedChildren: [],
                timeouts: {},
                clearTimeouts: function () {
                    clearTimeout(c.timeouts.open), clearTimeout(c.timeouts.afterOpen), clearTimeout(c.timeouts.afterClose)
                },
                setPositionUnits: function () {
                    var a = !1,
                        b = ["%", "px", "em"];
                    for (unitID in b) {
                        var d = b[unitID];
                        c.options.openPosition.toString().substr(-d.length) == d && (a = !0, c.settings.positionUnits = d)
                    }
                    a || (c.options.openPosition = parseInt(c.options.openPosition) + c.settings.positionUnits)
                },
                checkFixedChildren: function () {
                    c.disableTransitions();
                    var b = {
                        position: a(c.panel).css("position")
                    };
                    if (b[c.options.direction] = "auto" == a(c.panel).css(c.options.direction) ? 0 : a(c.panel).css(c.options.direction), a(c.panel).find("> *").each(function () {
                        "fixed" == a(this).css("position") && "auto" == a(this).css(c.options.direction) && c.fixedChildren.push(this)
                    }), c.fixedChildren.length > 0) {
                        var d = {
                            position: "relative"
                        };
                        d[c.options.direction] = "1px", c.setPanelStyle(d), 0 == parseInt(a(c.fixedChildren[0]).offset().left) && (c.settings.shiftFixedChildren = !0)
                    }
                    c.setPanelStyle(b)
                },
                setjPanelMenuStyles: function () {
                    var b = "#fff",
                        d = a("html").css("background-color"),
                        e = a("body").css("background-color");
                    b = "transparent" != e && "rgba(0, 0, 0, 0)" != e ? e : "transparent" != d && "rgba(0, 0, 0, 0)" != d ? d : "#fff", 0 == a("#jPanelMenu-style-master").length && a("body").append('<style id="jPanelMenu-style-master">body{width:100%}.jPanelMenu,body{overflow-x:hidden}#jPanelMenu-menu{display:block;position:fixed;top:0;' + c.options.direction + ":0;height:100%;z-index:-1;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.jPanelMenu-panel{position:static;" + c.options.direction + ":0;top:0;z-index:2;background:" + b + "}</style>")
                },
                setMenuState: function (b) {
                    var c = b ? "open" : "closed";
                    a("body").attr("data-menu-position", c)
                },
                getMenuState: function () {
                    return a("body").attr("data-menu-position")
                },
                menuIsOpen: function () {
                    return "open" == c.getMenuState() ? !0 : !1
                },
                setMenuStyle: function (b) {
                    a(c.menu).css(b)
                },
                setPanelStyle: function (b) {
                    a(c.panel).css(b)
                },
                showMenu: function () {
                    c.setMenuStyle({
                        display: "block"
                    }), c.setMenuStyle({
                        "z-index": "1"
                    })
                },
                hideMenu: function () {
                    c.setMenuStyle({
                        "z-index": "-1"
                    }), c.setMenuStyle({
                        display: "none"
                    })
                },
                enableTransitions: function (b, d) {
                    var e = b / 1e3,
                        f = c.getCSSEasingFunction(d);
                    c.disableTransitions(), a("body").append('<style id="jPanelMenu-style-transitions">.jPanelMenu-panel{-webkit-transition: all ' + e + "s " + f + "; -moz-transition: all " + e + "s " + f + "; -o-transition: all " + e + "s " + f + "; transition: all " + e + "s " + f + ";}</style>")
                },
                disableTransitions: function () {
                    a("#jPanelMenu-style-transitions").remove()
                },
                enableFixedTransitions: function (b, d, e, f) {
                    var g = e / 1e3,
                        h = c.getCSSEasingFunction(f);
                    c.disableFixedTransitions(d), a("body").append('<style id="jPanelMenu-style-fixed-' + d + '">' + b + "{-webkit-transition: all " + g + "s " + h + "; -moz-transition: all " + g + "s " + h + "; -o-transition: all " + g + "s " + h + "; transition: all " + g + "s " + h + ";}</style>")
                },
                disableFixedTransitions: function (b) {
                    a("#jPanelMenu-style-fixed-" + b).remove()
                },
                getCSSEasingFunction: function (a) {
                    switch (a) {
                    case "linear":
                        return a;
                    case "ease":
                        return a;
                    case "ease-in":
                        return a;
                    case "ease-out":
                        return a;
                    case "ease-in-out":
                        return a;
                    default:
                        return "ease-in-out"
                    }
                },
                getJSEasingFunction: function (a) {
                    switch (a) {
                    case "linear":
                        return a;
                    default:
                        return "swing"
                    }
                },
                openMenu: function (b) {
                    ("undefined" == typeof b || null == b) && (b = c.options.animated), c.clearTimeouts(), c.options.before(), c.options.beforeOpen(), c.setMenuState(!0), c.setPanelStyle({
                        position: "relative"
                    }), c.showMenu();
                    var d = {
                        none: b ? !1 : !0,
                        transitions: b && c.settings.transitionsSupported ? !0 : !1
                    };
                    if (d.transitions || d.none) {
                        d.none && c.disableTransitions(), d.transitions && c.enableTransitions(c.options.openDuration, c.options.openEasing);
                        var e = {};
                        e[c.options.direction] = c.options.openPosition, c.setPanelStyle(e), c.settings.shiftFixedChildren && a(c.fixedChildren).each(function () {
                            var b = a(this).prop("tagName").toLowerCase() + " " + a(this).attr("class"),
                                e = b.replace(" ", "."),
                                b = b.replace(" ", "-");
                            d.none && c.disableFixedTransitions(b), d.transitions && c.enableFixedTransitions(e, b, c.options.openDuration, c.options.openEasing);
                            var f = {};
                            f[c.options.direction] = c.options.openPosition, a(this).css(f)
                        }), c.timeouts.afterOpen = setTimeout(function () {
                            c.disableTransitions(), c.settings.shiftFixedChildren && a(c.fixedChildren).each(function () {
                                var b = a(this).prop("tagName").toLowerCase() + " " + a(this).attr("class"),
                                    b = b.replace(" ", "-");
                                c.disableFixedTransitions(b)
                            }), c.options.after(), c.options.afterOpen(), c.initiateContentClickListeners()
                        }, c.options.openDuration)
                    } else {
                        var f = c.getJSEasingFunction(c.options.openEasing),
                            g = {};
                        g[c.options.direction] = c.options.openPosition, a(c.panel).stop().animate(g, c.options.openDuration, f, function () {
                            c.options.after(), c.options.afterOpen(), c.initiateContentClickListeners()
                        }), c.settings.shiftFixedChildren && a(c.fixedChildren).each(function () {
                            var b = {};
                            b[c.options.direction] = c.options.openPosition, a(this).stop().animate(b, c.options.openDuration, f)
                        })
                    }
                },
                closeMenu: function (b) {
                    ("undefined" == typeof b || null == b) && (b = c.options.animated), c.clearTimeouts(), c.options.before(), c.options.beforeClose(), c.setMenuState(!1);
                    var d = {
                        none: b ? !1 : !0,
                        transitions: b && c.settings.transitionsSupported ? !0 : !1
                    };
                    if (d.transitions || d.none) {
                        d.none && c.disableTransitions(), d.transitions && c.enableTransitions(c.options.closeDuration, c.options.closeEasing);
                        var e = {};
                        e[c.options.direction] = 0 + c.settings.positionUnits, c.setPanelStyle(e), c.settings.shiftFixedChildren && a(c.fixedChildren).each(function () {
                            var b = a(this).prop("tagName").toLowerCase() + " " + a(this).attr("class"),
                                e = b.replace(" ", "."),
                                b = b.replace(" ", "-");
                            d.none && c.disableFixedTransitions(b), d.transitions && c.enableFixedTransitions(e, b, c.options.closeDuration, c.options.closeEasing);
                            var f = {};
                            f[c.options.direction] = 0 + c.settings.positionUnits, a(this).css(f)
                        }), c.timeouts.afterClose = setTimeout(function () {
                            c.setPanelStyle({
                                position: c.settings.panelPosition
                            }), c.disableTransitions(), c.settings.shiftFixedChildren && a(c.fixedChildren).each(function () {
                                var b = a(this).prop("tagName").toLowerCase() + " " + a(this).attr("class"),
                                    b = b.replace(" ", "-");
                                c.disableFixedTransitions(b)
                            }), c.hideMenu(), c.options.after(), c.options.afterClose(), c.destroyContentClickListeners()
                        }, c.options.closeDuration)
                    } else {
                        var f = c.getJSEasingFunction(c.options.closeEasing),
                            g = {};
                        g[c.options.direction] = 0 + c.settings.positionUnits, a(c.panel).stop().animate(g, c.options.closeDuration, f, function () {
                            c.setPanelStyle({
                                position: c.settings.panelPosition
                            }), c.hideMenu(), c.options.after(), c.options.afterClose(), c.destroyContentClickListeners()
                        }), c.settings.shiftFixedChildren && a(c.fixedChildren).each(function () {
                            var b = {};
                            b[c.options.direction] = 0 + c.settings.positionUnits, a(this).stop().animate(b, c.options.closeDuration, f)
                        })
                    }
                },
                triggerMenu: function (a) {
                    c.menuIsOpen() ? c.closeMenu(a) : c.openMenu(a)
                },
                initiateClickListeners: function () {
                    a(document).on("click", c.options.trigger, function () {
                        return c.triggerMenu(c.options.animated), !1
                    })
                },
                destroyClickListeners: function () {
                    a(document).off("click", c.options.trigger, null)
                },
                initiateContentClickListeners: function () {
                    return c.options.closeOnContentClick ? (a(document).on("click", c.panel, function () {
                        c.menuIsOpen() && c.closeMenu(c.options.animated)
                    }), a(document).on("touchend", c.panel, function () {
                        c.menuIsOpen() && c.closeMenu(c.options.animated)
                    }), void 0) : !1
                },
                destroyContentClickListeners: function () {
                    return c.options.closeOnContentClick ? (a(document).off("click", c.panel, null), a(document).off("touchend", c.panel, null), void 0) : !1
                },
                initiateKeyboardListeners: function () {
                    var b = ["input", "textarea"];
                    a(document).on("keydown", function (d) {
                        var e = a(d.target),
                            f = !1;
                        if (a.each(b, function () {
                            e.is(this.toString()) && (f = !0)
                        }), f) return !0;
                        for (mapping in c.options.keyboardShortcuts)
                            if (d.which == c.options.keyboardShortcuts[mapping].code) {
                                var g = c.options.keyboardShortcuts[mapping];
                                return g.open && g.close ? c.triggerMenu(c.options.animated) : !g.open || g.close || c.menuIsOpen() ? !g.open && g.close && c.menuIsOpen() && c.closeMenu(c.options.animated) : c.openMenu(c.options.animated), !1
                            }
                    })
                },
                destroyKeyboardListeners: function () {
                    a(document).off("keydown", null)
                },
                setupMarkup: function () {
                    a("html").addClass("jPanelMenu"), a("body > *").not(c.menu + ", " + c.options.excludedPanelContent).wrapAll('<div class="' + c.panel.replace(".", "") + '"/>'), a(c.options.menu).clone().attr("id", c.menu.replace("#", "")).insertAfter("body > " + c.panel)
                },
                resetMarkup: function () {
                    a("html").removeClass("jPanelMenu"), a("body > " + c.panel + " > *").unwrap(), a(c.menu).remove()
                },
                init: function () {
                    c.options.beforeOn(), c.initiateClickListeners(), "[object Array]" === Object.prototype.toString.call(c.options.keyboardShortcuts) && c.initiateKeyboardListeners(), c.setjPanelMenuStyles(), c.setMenuState(!1), c.setupMarkup(), c.setMenuStyle({
                        width: c.options.openPosition
                    }), c.checkFixedChildren(), c.setPositionUnits(), c.closeMenu(!1), c.options.afterOn()
                },
                destroy: function () {
                    c.options.beforeOff(), c.closeMenu(), c.destroyClickListeners(), "[object Array]" === Object.prototype.toString.call(c.options.keyboardShortcuts) && c.destroyKeyboardListeners(), c.resetMarkup();
                    var b = {};
                    b[c.options.direction] = "auto", a(c.fixedChildren).each(function () {
                        a(this).css(b)
                    }), c.fixedChildren = [], c.options.afterOff()
                }
            };
            return {
                on: c.init,
                off: c.destroy,
                trigger: c.triggerMenu,
                open: c.openMenu,
                close: c.closeMenu,
                isOpen: c.menuIsOpen,
                menu: c.menu,
                getMenu: function () {
                    return a(c.menu)
                },
                panel: c.panel,
                getPanel: function () {
                    return a(c.panel)
                }
            }
        }
    }(jQuery),
    /*!
     * Masonry PACKAGED v3.1.2
     * Cascading grid layout library
     * http://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */
    function (a) {
        "use strict";

        function b() {}

        function c(a) {
            function c(b) {
                b.prototype.option || (b.prototype.option = function (b) {
                    a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
                })
            }

            function e(b, c) {
                a.fn[b] = function (e) {
                    if ("string" == typeof e) {
                        for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                            var j = this[h],
                                k = a.data(j, b);
                            if (k)
                                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                    var l = k[e].apply(k, g);
                                    if (void 0 !== l) return l
                                } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; " + "attempted to call '" + e + "'")
                        }
                        return this
                    }
                    return this.each(function () {
                        var d = a.data(this, b);
                        d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                    })
                }
            }
            if (a) {
                var f = "undefined" == typeof console ? b : function (a) {
                    console.error(a)
                };
                a.bridget = function (a, b) {
                    c(b), e(a, b)
                }
            }
        }
        var d = Array.prototype.slice;
        "function" == typeof define && define.amd ? define(["jquery"], c) : c(a.jQuery)
    }(window),
    function (a) {
        var b = document.documentElement,
            c = function () {};
        b.addEventListener ? c = function (a, b, c) {
            a.addEventListener(b, c, !1)
        } : b.attachEvent && (c = function (b, c, d) {
            b[c + d] = d.handleEvent ? function () {
                var b = a.event;
                b.target = b.target || b.srcElement, d.handleEvent.call(d, b)
            } : function () {
                var c = a.event;
                c.target = c.target || c.srcElement, d.call(b, c)
            }, b.attachEvent("on" + c, b[c + d])
        });
        var d = function () {};
        b.removeEventListener ? d = function (a, b, c) {
            a.removeEventListener(b, c, !1)
        } : b.detachEvent && (d = function (a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var e = {
            bind: c,
            unbind: d
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", e) : a.eventie = e
    }(this),
    function (a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : f.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== e.readyState;
            if (!b.isReady && !c) {
                b.isReady = !0;
                for (var d = 0, g = f.length; g > d; d++) {
                    var h = f[d];
                    h()
                }
            }
        }

        function d(d) {
            return d.bind(e, "DOMContentLoaded", c), d.bind(e, "readystatechange", c), d.bind(a, "load", c), b
        }
        var e = a.document,
            f = [];
        b.isReady = !1, "function" == typeof define && define.amd ? (b.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : a.docReady = d(a.eventie)
    }(this),
    function () {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function () {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function (a) {
            var b, c, d = this._getEvents();
            if ("object" == typeof a) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function (a) {
            var b, c = [];
            for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function (a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function (a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
            return this.getListeners(a), this
        }, d.defineEvents = function (a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function (a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = c("removeListener"), d.addListeners = function (a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function (a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function (a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function (a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function (a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function (a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, d._getEvents = function () {
            return this._events || (this._events = {})
        }, a.noConflict = function () {
            return e.EventEmitter = f, a
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function (a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function (a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function c() {
            for (var a = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0
            }
            return a
        }

        function d(a) {
            function d(a) {
                if ("string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var d = g(a);
                    if ("none" === d.display) return c();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var k = f.isBorderBox = !(!j || !d[j] || "border-box" !== d[j]), l = 0, m = h.length; m > l; l++) {
                        var n = h[l],
                            o = d[n];
                        o = e(a, o);
                        var p = parseFloat(o);
                        f[n] = isNaN(p) ? 0 : p
                    }
                    var q = f.paddingLeft + f.paddingRight,
                        r = f.paddingTop + f.paddingBottom,
                        s = f.marginLeft + f.marginRight,
                        t = f.marginTop + f.marginBottom,
                        u = f.borderLeftWidth + f.borderRightWidth,
                        v = f.borderTopWidth + f.borderBottomWidth,
                        w = k && i,
                        x = b(d.width);
                    x !== !1 && (f.width = x + (w ? 0 : q + u));
                    var y = b(d.height);
                    return y !== !1 && (f.height = y + (w ? 0 : r + v)), f.innerWidth = f.width - (q + u), f.innerHeight = f.height - (r + v), f.outerWidth = f.width + s, f.outerHeight = f.height + t, f
                }
            }

            function e(a, b) {
                if (f || -1 === b.indexOf("%")) return b;
                var c = a.style,
                    d = c.left,
                    e = a.runtimeStyle,
                    g = e && e.left;
                return g && (e.left = a.currentStyle.left), c.left = b, b = c.pixelLeft, c.left = d, g && (e.left = g), b
            }
            var i, j = a("boxSizing");
            return function () {
                if (j) {
                    var a = document.createElement("div");
                    a.style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style[j] = "border-box";
                    var c = document.body || document.documentElement;
                    c.appendChild(a);
                    var d = g(a);
                    i = 200 === b(d.width), c.removeChild(a)
                }
            }(), d
        }
        var e = document.defaultView,
            f = e && e.getComputedStyle,
            g = f ? function (a) {
                return e.getComputedStyle(a, null)
            } : function (a) {
                return a.currentStyle
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require("get-style-property")) : a.getSize = d(a.getStyleProperty)
    }(window),
    function (a, b) {
        function c(a, b) {
            return a[h](b)
        }

        function d(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function e(a, b) {
            d(a);
            for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++)
                if (c[e] === a) return !0;
            return !1
        }

        function f(a, b) {
            return d(a), c(a, b)
        }
        var g, h = function () {
            if (b.matchesSelector) return "matchesSelector";
            for (var a = ["webkit", "moz", "ms", "o"], c = 0, d = a.length; d > c; c++) {
                var e = a[c],
                    f = e + "MatchesSelector";
                if (b[f]) return f
            }
        }();
        if (h) {
            var i = document.createElement("div"),
                j = c(i, "div");
            g = j ? c : f
        } else g = e;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
            return g
        }) : window.matchesSelector = g
    }(this, Element.prototype),
    function (a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function d(a) {
            return a.replace(/([A-Z])/g, function (a) {
                return "-" + a.toLowerCase()
            })
        }

        function e(a, e, f) {
            function h(a, b) {
                a && (this.element = a, this.layout = b, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var i = f("transition"),
                j = f("transform"),
                k = i && j,
                l = !!f("perspective"),
                m = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[i],
                n = ["transform", "transition", "transitionDuration", "transitionProperty"],
                o = function () {
                    for (var a = {}, b = 0, c = n.length; c > b; b++) {
                        var d = n[b],
                            e = f(d);
                        e && e !== d && (a[d] = e)
                    }
                    return a
                }();
            b(h.prototype, a.prototype), h.prototype._create = function () {
                this._transition = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, h.prototype.handleEvent = function (a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, h.prototype.getSize = function () {
                this.size = e(this.element)
            }, h.prototype.css = function (a) {
                var b = this.element.style;
                for (var c in a) {
                    var d = o[c] || c;
                    b[d] = a[c]
                }
            }, h.prototype.getPosition = function () {
                var a = g(this.element),
                    b = this.layout.options,
                    c = b.isOriginLeft,
                    d = b.isOriginTop,
                    e = parseInt(a[c ? "left" : "right"], 10),
                    f = parseInt(a[d ? "top" : "bottom"], 10);
                e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
                var h = this.layout.size;
                e -= c ? h.paddingLeft : h.paddingRight, f -= d ? h.paddingTop : h.paddingBottom, this.position.x = e, this.position.y = f
            }, h.prototype.layoutPosition = function () {
                var a = this.layout.size,
                    b = this.layout.options,
                    c = {};
                b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this])
            };
            var p = l ? function (a, b) {
                return "translate3d(" + a + "px, " + b + "px, 0)"
            } : function (a, b) {
                return "translate(" + a + "px, " + b + "px)"
            };
            h.prototype._transitionTo = function (a, b) {
                this.getPosition();
                var c = this.position.x,
                    d = this.position.y,
                    e = parseInt(a, 10),
                    f = parseInt(b, 10),
                    g = e === this.position.x && f === this.position.y;
                if (this.setPosition(a, b), g && !this.isTransitioning) return this.layoutPosition(), void 0;
                var h = a - c,
                    i = b - d,
                    j = {},
                    k = this.layout.options;
                h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({
                    to: j,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, h.prototype.goTo = function (a, b) {
                this.setPosition(a, b), this.layoutPosition()
            }, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function (a, b) {
                this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
            }, h.prototype._nonTransition = function (a) {
                this.css(a.to), a.isCleaning && this._removeStyles(a.to);
                for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
            }, h.prototype._transition = function (a) {
                if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(a), void 0;
                var b = this._transition;
                for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
                for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
                if (a.from) {
                    this.css(a.from);
                    var d = this.element.offsetHeight;
                    d = null
                }
                this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
            };
            var q = j && d(j) + ",opacity";
            h.prototype.enableTransition = function () {
                this.isTransitioning || (this.css({
                    transitionProperty: q,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(m, this, !1))
            }, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function (a) {
                this.ontransitionend(a)
            }, h.prototype.onotransitionend = function (a) {
                this.ontransitionend(a)
            };
            var r = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            h.prototype.ontransitionend = function (a) {
                if (a.target === this.element) {
                    var b = this._transition,
                        d = r[a.propertyName] || a.propertyName;
                    if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                        var e = b.onEnd[d];
                        e.call(this), delete b.onEnd[d]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, h.prototype.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1
            }, h.prototype._removeStyles = function (a) {
                var b = {};
                for (var c in a) b[c] = "";
                this.css(b)
            };
            var s = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return h.prototype.removeTransitionStyles = function () {
                this.css(s)
            }, h.prototype.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, h.prototype.remove = function () {
                if (!i || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
                var a = this;
                this.on("transitionEnd", function () {
                    return a.removeElem(), !0
                }), this.hide()
            }, h.prototype.reveal = function () {
                delete this.isHidden, this.css({
                    display: ""
                });
                var a = this.layout.options;
                this.transition({
                    from: a.hiddenStyle,
                    to: a.visibleStyle,
                    isCleaning: !0
                })
            }, h.prototype.hide = function () {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var a = this.layout.options;
                this.transition({
                    from: a.visibleStyle,
                    to: a.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function () {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, h.prototype.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, h
        }
        var f = document.defaultView,
            g = f && f.getComputedStyle ? function (a) {
                return f.getComputedStyle(a, null)
            } : function (a) {
                return a.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty))
    }(window),
    function (a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            return "[object Array]" === l.call(a)
        }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b
        }

        function e(a, b) {
            var c = n(b, a); - 1 !== c && b.splice(c, 1)
        }

        function f(a) {
            return a.replace(/(.)([A-Z])/g, function (a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        }

        function g(c, g, l, n, o, p) {
            function q(a, c) {
                if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a)) return i && i.error("Bad " + this.settings.namespace + " element: " + a), void 0;
                this.element = a, this.options = b({}, this.options), this.option(c);
                var d = ++s;
                this.element.outlayerGUID = d, t[d] = this, this._create(), this.options.isInitLayout && this.layout()
            }

            function r(a, c) {
                a.prototype[c] = b({}, q.prototype[c])
            }
            var s = 0,
                t = {};
            return q.prototype.settings = {
                namespace: "outlayer",
                item: p
            }, q.prototype.options = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, b(q.prototype, l.prototype), q.prototype.option = function (a) {
                b(this.options, a)
            }, q.prototype._create = function () {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, q.prototype.reloadItems = function () {
                this.items = this._itemize(this.element.children)
            }, q.prototype._itemize = function (a) {
                for (var b = this._filterFindItemElements(a), c = this.settings.item, d = [], e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = new c(g, this);
                    d.push(h)
                }
                return d
            }, q.prototype._filterFindItemElements = function (a) {
                a = d(a);
                for (var b = this.options.itemSelector, c = [], e = 0, f = a.length; f > e; e++) {
                    var g = a[e];
                    if (m(g))
                        if (b) {
                            o(g, b) && c.push(g);
                            for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i])
                        } else c.push(g)
                }
                return c
            }, q.prototype.getItemElements = function () {
                for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
                return a
            }, q.prototype.layout = function () {
                this._resetLayout(), this._manageStamps();
                var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, a), this._isLayoutInited = !0
            }, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function () {
                this.getSize()
            }, q.prototype.getSize = function () {
                this.size = n(this.element)
            }, q.prototype._getMeasurement = function (a, b) {
                var c, d = this.options[a];
                d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0
            }, q.prototype.layoutItems = function (a, b) {
                a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
            }, q.prototype._getItemsForLayout = function (a) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.isIgnored || b.push(e)
                }
                return b
            }, q.prototype._layoutItems = function (a, b) {
                if (!a || !a.length) return this.emitEvent("layoutComplete", [this, a]), void 0;
                this._itemsOn(a, "layout", function () {
                    this.emitEvent("layoutComplete", [this, a])
                });
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b, c.push(g)
                }
                this._processLayoutQueue(c)
            }, q.prototype._getItemLayoutPosition = function () {
                return {
                    x: 0,
                    y: 0
                }
            }, q.prototype._processLayoutQueue = function (a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this._positionItem(d.item, d.x, d.y, d.isInstant)
                }
            }, q.prototype._positionItem = function (a, b, c, d) {
                d ? a.goTo(b, c) : a.moveTo(b, c)
            }, q.prototype._postLayout = function () {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function (a, b) {
                if (void 0 !== a) {
                    var c = this.size;
                    c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
                }
            }, q.prototype._itemsOn = function (a, b, c) {
                function d() {
                    return e++, e === f && c.call(g), !0
                }
                for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
                    var j = a[h];
                    j.on(b, d)
                }
            }, q.prototype.ignore = function (a) {
                var b = this.getItem(a);
                b && (b.isIgnored = !0)
            }, q.prototype.unignore = function (a) {
                var b = this.getItem(a);
                b && delete b.isIgnored
            }, q.prototype.stamp = function (a) {
                if (a = this._find(a)) {
                    this.stamps = this.stamps.concat(a);
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        this.ignore(d)
                    }
                }
            }, q.prototype.unstamp = function (a) {
                if (a = this._find(a))
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        e(d, this.stamps), this.unignore(d)
                    }
            }, q.prototype._find = function (a) {
                return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0
            }, q.prototype._manageStamps = function () {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var a = 0, b = this.stamps.length; b > a; a++) {
                        var c = this.stamps[a];
                        this._manageStamp(c)
                    }
                }
            }, q.prototype._getBoundingRect = function () {
                var a = this.element.getBoundingClientRect(),
                    b = this.size;
                this._boundingRect = {
                    left: a.left + b.paddingLeft + b.borderLeftWidth,
                    top: a.top + b.paddingTop + b.borderTopWidth,
                    right: a.right - (b.paddingRight + b.borderRightWidth),
                    bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
                }
            }, q.prototype._manageStamp = k, q.prototype._getElementOffset = function (a) {
                var b = a.getBoundingClientRect(),
                    c = this._boundingRect,
                    d = n(a),
                    e = {
                        left: b.left - c.left - d.marginLeft,
                        top: b.top - c.top - d.marginTop,
                        right: c.right - b.right - d.marginRight,
                        bottom: c.bottom - b.bottom - d.marginBottom
                    };
                return e
            }, q.prototype.handleEvent = function (a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, q.prototype.bindResize = function () {
                this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0)
            }, q.prototype.unbindResize = function () {
                c.unbind(a, "resize", this), this.isResizeBound = !1
            }, q.prototype.onresize = function () {
                function a() {
                    b.resize(), delete b.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var b = this;
                this.resizeTimeout = setTimeout(a, 100)
            }, q.prototype.resize = function () {
                var a = n(this.element),
                    b = this.size && a;
                b && a.innerWidth === this.size.innerWidth || this.layout()
            }, q.prototype.addItems = function (a) {
                var b = this._itemize(a);
                return b.length && (this.items = this.items.concat(b)), b
            }, q.prototype.appended = function (a) {
                var b = this.addItems(a);
                b.length && (this.layoutItems(b, !0), this.reveal(b))
            }, q.prototype.prepended = function (a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
                }
            }, q.prototype.reveal = function (a) {
                if (a && a.length)
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        d.reveal()
                    }
            }, q.prototype.hide = function (a) {
                if (a && a.length)
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        d.hide()
                    }
            }, q.prototype.getItem = function (a) {
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    if (d.element === a) return d
                }
            }, q.prototype.getItems = function (a) {
                if (a && a.length) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        var e = a[c],
                            f = this.getItem(e);
                        f && b.push(f)
                    }
                    return b
                }
            }, q.prototype.remove = function (a) {
                a = d(a);
                var b = this.getItems(a);
                if (b && b.length) {
                    this._itemsOn(b, "remove", function () {
                        this.emitEvent("removeComplete", [this, b])
                    });
                    for (var c = 0, f = b.length; f > c; c++) {
                        var g = b[c];
                        g.remove(), e(g, this.items)
                    }
                }
            }, q.prototype.destroy = function () {
                var a = this.element.style;
                a.height = "", a.position = "", a.width = "";
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    d.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, j && j.removeData(this.element, this.settings.namespace)
            }, q.data = function (a) {
                var b = a && a.outlayerGUID;
                return b && t[b]
            }, q.create = function (a, c) {
                function d() {
                    q.apply(this, arguments)
                }
                return b(d.prototype, q.prototype), r(d, "options"), r(d, "settings"), b(d.prototype.options, c), d.prototype.settings.namespace = a, d.data = q.data, d.Item = function () {
                    p.apply(this, arguments)
                }, d.Item.prototype = new p, d.prototype.settings.item = d.Item, g(function () {
                    for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
                        var l, m = c[g],
                            n = m.getAttribute(e);
                        try {
                            l = n && JSON.parse(n)
                        } catch (o) {
                            i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + o);
                            continue
                        }
                        var p = new d(m, l);
                        j && j.data(m, a, p)
                    }
                }), j && j.bridget && j.bridget(a, d), d
            }, q.Item = p, q
        }
        var h = a.document,
            i = a.console,
            j = a.jQuery,
            k = function () {},
            l = Object.prototype.toString,
            m = "object" == typeof HTMLElement ? function (a) {
                return a instanceof HTMLElement
            } : function (a) {
                return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
            },
            n = Array.prototype.indexOf ? function (a, b) {
                return a.indexOf(b)
            } : function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
    }(window),
    function (a) {
        function b(a, b) {
            var d = a.create("masonry");
            return d.prototype._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var a = this.cols;
                for (this.colYs = []; a--;) this.colYs.push(0);
                this.maxY = 0
            }, d.prototype.measureColumns = function () {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var a = this.items[0],
                        c = a && a.element;
                    this.columnWidth = c && b(c).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, d.prototype.getContainerWidth = function () {
                var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                    c = b(a);
                this.containerWidth = c && c.innerWidth
            }, d.prototype._getItemLayoutPosition = function (a) {
                a.getSize();
                var b = Math.ceil(a.size.outerWidth / this.columnWidth);
                b = Math.min(b, this.cols);
                for (var d = this._getColGroup(b), e = Math.min.apply(Math, d), f = c(d, e), g = {
                    x: this.columnWidth * f,
                    y: e
                }, h = e + a.size.outerHeight, i = this.cols + 1 - d.length, j = 0; i > j; j++) this.colYs[f + j] = h;
                return g
            }, d.prototype._getColGroup = function (a) {
                if (2 > a) return this.colYs;
                for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                    var e = this.colYs.slice(d, d + a);
                    b[d] = Math.max.apply(Math, e)
                }
                return b
            }, d.prototype._manageStamp = function (a) {
                var c = b(a),
                    d = this._getElementOffset(a),
                    e = this.options.isOriginLeft ? d.left : d.right,
                    f = e + c.outerWidth,
                    g = Math.floor(e / this.columnWidth);
                g = Math.max(0, g);
                var h = Math.floor(f / this.columnWidth);
                h = Math.min(this.cols - 1, h);
                for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
            }, d.prototype._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var a = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
            }, d.prototype._getContainerFitWidth = function () {
                for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
                return (this.cols - a) * this.columnWidth - this.gutter
            }, d.prototype.resize = function () {
                var a = this.containerWidth;
                this.getContainerWidth(), a !== this.containerWidth && this.layout()
            }, d
        }
        var c = Array.prototype.indexOf ? function (a, b) {
            return a.indexOf(b)
        } : function (a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                if (e === b) return c
            }
            return -1
        };
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], b) : a.Masonry = b(a.Outlayer, a.getSize)
    }(window), window.Modernizr = function (a, b, c) {
        function d(a) {
            s.cssText = a
        }

        function e(a, b) {
            return typeof a === b
        }

        function f(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function g(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!f(e, "-") && s[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function h(a, b, d) {
            for (var f in a) {
                var g = b[a[f]];
                if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function i(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                f = (a + " " + u.join(d + " ") + d).split(" ");
            return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c))
        }
        var j, k, l, m = "2.6.2",
            n = {},
            o = !0,
            p = b.documentElement,
            q = "modernizr",
            r = b.createElement(q),
            s = r.style,
            t = ({}.toString, "Webkit Moz O ms"),
            u = t.split(" "),
            v = t.toLowerCase().split(" "),
            w = {},
            x = [],
            y = x.slice,
            z = {}.hasOwnProperty;
        l = e(z, "undefined") || e(z.call, "undefined") ? function (a, b) {
            return b in a && e(a.constructor.prototype[b], "undefined")
        } : function (a, b) {
            return z.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function (a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = y.call(arguments, 1),
                d = function () {
                    if (this instanceof d) {
                        var e = function () {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(y.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(y.call(arguments)))
                };
            return d
        }), w.cssanimations = function () {
            return i("animationName")
        }, w.csstransforms = function () {
            return !!i("transform")
        }, w.csstransitions = function () {
            return i("transition")
        };
        for (var A in w) l(w, A) && (k = A.toLowerCase(), n[k] = w[A](), x.push((n[k] ? "" : "no-") + k));
        return n.addTest = function (a, b) {
                if ("object" == typeof a)
                    for (var d in a) l(a, d) && n.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), n[a] !== c) return n;
                    b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " " + (b ? "" : "no-") + a), n[a] = b
                }
                return n
            }, d(""), r = j = null,
            function (a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = r.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = q[a[o]];
                    return b || (b = {}, p++, a[o] = p, q[p] = b), b
                }

                function f(a, c, d) {
                    if (c || (c = b), k) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : n.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), f.canHaveChildren && !m.test(a) ? d.frag.appendChild(f) : f
                }

                function g(a, c) {
                    if (a || (a = b), k) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                        return r.shivMethods ? f(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g, function (a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function i(a) {
                    a || (a = b);
                    var d = e(a);
                    return r.shivCSS && !j && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), k || h(a, d), a
                }
                var j, k, l = a.html5 || {},
                    m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    n = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    o = "_html5shiv",
                    p = 0,
                    q = {};
                ! function () {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function () {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                        }()
                    } catch (c) {
                        j = !0, k = !0
                    }
                }();
                var r = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: l.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: l.shivMethods !== !1,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                };
                a.html5 = r, i(b)
            }(this, b), n._version = m, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function (a) {
                return g([a])
            }, n.testAllProps = i, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " js " + x.join(" ") : ""), n
    }(this, this.document),
    function (a, b, c) {
        function d(a) {
            return "[object Function]" == q.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = r.shift();
            s = 1, a ? a.t ? o(function () {
                ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : s = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && o(function () {
                        v.removeChild(l)
                    }, 50);
                    for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
                }
            }
            var j = j || m.errorTimeout,
                l = b.createElement(a),
                n = 0,
                q = 0,
                t = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
                k.call(this, q)
            }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
        }

        function j(a, b, c, d, f) {
            return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
        }

        function k() {
            var a = m;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l, m, n = b.documentElement,
            o = a.setTimeout,
            p = b.getElementsByTagName("script")[0],
            q = {}.toString,
            r = [],
            s = 0,
            t = "MozAppearance" in n.style,
            u = t && !!b.createRange().compareNode,
            v = u ? n : p.parentNode,
            n = a.opera && "[object Opera]" == q.call(a.opera),
            n = !!b.attachEvent && !n,
            w = t ? "object" : n ? "script" : "img",
            x = n ? "script" : w,
            y = Array.isArray || function (a) {
                return "[object Array]" == q.call(a)
            },
            z = [],
            A = {},
            B = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            };
        m = function (a) {
            function b(a) {
                var b, c, d, a = a.split("!"),
                    e = z.length,
                    f = a.pop(),
                    g = a.length,
                    f = {
                        url: f,
                        origUrl: f,
                        prefixes: a
                    };
                for (c = 0; g > c; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
                for (c = 0; e > c; c++) f = z[c](f);
                return f
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (l = function () {
                            var a = [].slice.call(arguments);
                            m.apply(this, a), n()
                        }), g(a, l, b, 0, j);
                        else if (Object(a) === a)
                            for (i in h = function () {
                                var b, c = 0;
                                for (b in a) a.hasOwnProperty(b) && c++;
                                return c
                            }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function () {
                                var a = [].slice.call(arguments);
                                m.apply(this, a), n()
                            } : l[i] = function (a) {
                                return function () {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), n()
                                }
                            }(m[i])), g(a[i], l, b, i, j))
                    } else !c && n()
                }
                var h, i, j = !!a.test,
                    k = a.load || a.both,
                    l = a.callback || f,
                    m = l,
                    n = a.complete || f;
                c(j ? a.yep : a.nope, !!k), k && c(k)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (y(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, m.addPrefix = function (a, b) {
            B[a] = b
        }, m.addFilter = function (a) {
            z.push(a)
        }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function () {
            b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
            var k, l, n = b.createElement("script"),
                e = e || m.errorTimeout;
            n.src = a;
            for (l in d) n.setAttribute(l, d[l]);
            c = j ? h : c || f, n.onreadystatechange = n.onload = function () {
                !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
            }, o(function () {
                k || (k = 1, c(1))
            }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
        }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
            var j, e = b.createElement("link"),
                c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (p.parentNode.insertBefore(e, p), o(c, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    /**
     * StyleFix 1.0.3 & PrefixFree 1.0.7
     * @author Lea Verou
     * MIT license
     */
    function () {
        function a(a, b) {
            return [].slice.call((b || document).querySelectorAll(a))
        }
        if (window.addEventListener) {
            var b = window.StyleFix = {
                link: function (a) {
                    try {
                        if ("stylesheet" !== a.rel || a.hasAttribute("data-noprefix")) return
                    } catch (c) {
                        return
                    }
                    var d, e = a.href || a.getAttribute("data-href"),
                        f = e.replace(/[^\/]+$/, ""),
                        g = a.parentNode,
                        h = new XMLHttpRequest;
                    h.onreadystatechange = function () {
                        4 === h.readyState && d()
                    }, d = function () {
                        var c = h.responseText;
                        if (c && a.parentNode && (!h.status || h.status < 400 || h.status > 600)) {
                            if (c = b.fix(c, !0, a), f) {
                                c = c.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function (a, b, c) {
                                    return /^([a-z]{3,10}:|\/|#)/i.test(c) ? a : 'url("' + f + c + '")'
                                });
                                var d = f.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g, "\\$1");
                                c = c.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)" + d, "gi"), "$1")
                            }
                            var e = document.createElement("style");
                            e.textContent = c, e.media = a.media, e.disabled = a.disabled, e.setAttribute("data-href", a.getAttribute("href")), g.insertBefore(e, a), g.removeChild(a), e.media = a.media
                        }
                    };
                    try {
                        h.open("GET", e), h.send(null)
                    } catch (c) {
                        "undefined" != typeof XDomainRequest && (h = new XDomainRequest, h.onerror = h.onprogress = function () {}, h.onload = d, h.open("GET", e), h.send(null))
                    }
                    a.setAttribute("data-inprogress", "")
                },
                styleElement: function (a) {
                    if (!a.hasAttribute("data-noprefix")) {
                        var c = a.disabled;
                        a.textContent = b.fix(a.textContent, !0, a), a.disabled = c
                    }
                },
                styleAttribute: function (a) {
                    var c = a.getAttribute("style");
                    c = b.fix(c, !1, a), a.setAttribute("style", c)
                },
                process: function () {
                    a('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link), a("style").forEach(StyleFix.styleElement), a("[style]").forEach(StyleFix.styleAttribute)
                },
                register: function (a, c) {
                    (b.fixers = b.fixers || []).splice(void 0 === c ? b.fixers.length : c, 0, a)
                },
                fix: function (a, c, d) {
                    for (var e = 0; e < b.fixers.length; e++) a = b.fixers[e](a, c, d) || a;
                    return a
                },
                camelCase: function (a) {
                    return a.replace(/-([a-z])/g, function (a, b) {
                        return b.toUpperCase()
                    }).replace("-", "")
                },
                deCamelCase: function (a) {
                    return a.replace(/[A-Z]/g, function (a) {
                        return "-" + a.toLowerCase()
                    })
                }
            };
            ! function () {
                setTimeout(function () {
                    a('link[rel="stylesheet"]').forEach(StyleFix.link)
                }, 10), document.addEventListener("DOMContentLoaded", StyleFix.process, !1)
            }()
        }
    }(),
    function (a) {
        function b(a, b, d, e, f) {
            if (a = c[a], a.length) {
                var g = RegExp(b + "(" + a.join("|") + ")" + d, "gi");
                f = f.replace(g, e)
            }
            return f
        }
        if (window.StyleFix && window.getComputedStyle) {
            var c = window.PrefixFree = {
                prefixCSS: function (a, d) {
                    var e = c.prefix;
                    if (c.functions.indexOf("linear-gradient") > -1 && (a = a.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi, function (a, b, c, d) {
                        return b + (c || "") + "linear-gradient(" + (90 - d) + "deg"
                    })), a = b("functions", "(\\s|:|,)", "\\s*\\(", "$1" + e + "$2(", a), a = b("keywords", "(\\s|:)", "(\\s|;|\\}|$)", "$1" + e + "$2$3", a), a = b("properties", "(^|\\{|\\s|;)", "\\s*:", "$1" + e + "$2:", a), c.properties.length) {
                        var f = RegExp("\\b(" + c.properties.join("|") + ")(?!:)", "gi");
                        a = b("valueProperties", "\\b", ":(.+?);", function (a) {
                            return a.replace(f, e + "$1")
                        }, a)
                    }
                    return d && (a = b("selectors", "", "\\b", c.prefixSelector, a), a = b("atrules", "@", "\\b", "@" + e + "$1", a)), a = a.replace(RegExp("-" + e, "g"), "-"), a = a.replace(/-\*-(?=[a-z]+)/gi, c.prefix)
                },
                property: function (a) {
                    return (c.properties.indexOf(a) ? c.prefix : "") + a
                },
                value: function (a) {
                    return a = b("functions", "(^|\\s|,)", "\\s*\\(", "$1" + c.prefix + "$2(", a), a = b("keywords", "(^|\\s)", "(\\s|$)", "$1" + c.prefix + "$2$3", a)
                },
                prefixSelector: function (a) {
                    return a.replace(/^:{1,2}/, function (a) {
                        return a + c.prefix
                    })
                },
                prefixProperty: function (a, b) {
                    var d = c.prefix + a;
                    return b ? StyleFix.camelCase(d) : d
                }
            };
            ! function () {
                var a = {},
                    b = [],
                    d = getComputedStyle(document.documentElement, null),
                    e = document.createElement("div").style,
                    f = function (c) {
                        if ("-" === c.charAt(0)) {
                            b.push(c);
                            var d = c.split("-"),
                                e = d[1];
                            for (a[e] = ++a[e] || 1; d.length > 3;) {
                                d.pop();
                                var f = d.join("-");
                                g(f) && -1 === b.indexOf(f) && b.push(f)
                            }
                        }
                    },
                    g = function (a) {
                        return StyleFix.camelCase(a) in e
                    };
                if (d.length > 0)
                    for (var h = 0; h < d.length; h++) f(d[h]);
                else
                    for (var i in d) f(StyleFix.deCamelCase(i));
                var j = {
                    uses: 0
                };
                for (var k in a) {
                    var l = a[k];
                    j.uses < l && (j = {
                        prefix: k,
                        uses: l
                    })
                }
                c.prefix = "-" + j.prefix + "-", c.Prefix = StyleFix.camelCase(c.prefix), c.properties = [];
                for (var h = 0; h < b.length; h++) {
                    var i = b[h];
                    if (0 === i.indexOf(c.prefix)) {
                        var m = i.slice(c.prefix.length);
                        g(m) || c.properties.push(m)
                    }
                }
                "Ms" == c.Prefix && !("transform" in e) && !("MsTransform" in e) && "msTransform" in e && c.properties.push("transform", "transform-origin"), c.properties.sort()
            }(),
            function () {
                function a(a, b) {
                    return e[b] = "", e[b] = a, !!e[b]
                }
                var b = {
                    "linear-gradient": {
                        property: "backgroundImage",
                        params: "red, teal"
                    },
                    calc: {
                        property: "width",
                        params: "1px + 5%"
                    },
                    element: {
                        property: "backgroundImage",
                        params: "#foo"
                    },
                    "cross-fade": {
                        property: "backgroundImage",
                        params: "url(a.png), url(b.png), 50%"
                    }
                };
                b["repeating-linear-gradient"] = b["repeating-radial-gradient"] = b["radial-gradient"] = b["linear-gradient"];
                var d = {
                    initial: "color",
                    "zoom-in": "cursor",
                    "zoom-out": "cursor",
                    box: "display",
                    flexbox: "display",
                    "inline-flexbox": "display",
                    flex: "display",
                    "inline-flex": "display"
                };
                c.functions = [], c.keywords = [];
                var e = document.createElement("div").style;
                for (var f in b) {
                    var g = b[f],
                        h = g.property,
                        i = f + "(" + g.params + ")";
                    !a(i, h) && a(c.prefix + i, h) && c.functions.push(f)
                }
                for (var j in d) {
                    var h = d[j];
                    !a(j, h) && a(c.prefix + j, h) && c.keywords.push(j)
                }
            }(),
            function () {
                function b(a) {
                    return f.textContent = a + "{}", !!f.sheet.cssRules.length
                }
                var d = {
                        ":read-only": null,
                        ":read-write": null,
                        ":any-link": null,
                        "::selection": null
                    },
                    e = {
                        keyframes: "name",
                        viewport: null,
                        document: 'regexp(".")'
                    };
                c.selectors = [], c.atrules = [];
                var f = a.appendChild(document.createElement("style"));
                for (var g in d) {
                    var h = g + (d[g] ? "(" + d[g] + ")" : "");
                    !b(h) && b(c.prefixSelector(h)) && c.selectors.push(g)
                }
                for (var i in e) {
                    var h = i + " " + (e[i] || "");
                    !b("@" + h) && b("@" + c.prefix + h) && c.atrules.push(i)
                }
                a.removeChild(f)
            }(), c.valueProperties = ["transition", "transition-property"], a.className += " " + c.prefix, StyleFix.register(c.prefixCSS)
        }
    }(document.documentElement),
    /*!
    --------------------------------
    PXU Photoset Extended
    --------------------------------
    + https://github.com/PixelUnion/Extended-Tumblr-Photoset
    + http://pixelunion.net
    + Version 1.8.0
    + Copyright 2013 Pixel Union
    + Licensed under the MIT license
*/
    function (a) {
        a.fn.pxuPhotoset = function (b, c) {
            var d = {
                    lightbox: !0,
                    highRes: !0,
                    rounded: "corners",
                    borderRadius: "5px",
                    exif: !0,
                    captions: !0,
                    gutter: "10px",
                    photoset: ".photo-slideshow",
                    photoWrap: ".photo-data",
                    photo: ".pxu-photo"
                },
                e = a.extend(d, b);
            if (e.lightbox) { // init Tumblr Lightbox
                a(".tumblr-box").on("click", function (b) {
                    b.preventDefault();
                    var c = a(this),
                        d = c.parents(e.photoset).attr("id");
                    f(c, d)
                });
                var f = function (b, c) { // figure out which image was clicked
                    // we'll make sure that's where we start our lightbox
                    var d = b.parents(e.photoWrap).find(e.photo + " img").data("count"),
                        f = [];
                    a("#" + c).find(e.photoWrap).each(function () {
                        var b = a(this).find(e.photo + " img"),
                            c = b.data("width"),
                            d = b.data("height"),
                            g = b.attr("src"),
                            h = b.data("highres"),
                            i = {
                                width: c,
                                height: d,
                                low_res: g,
                                high_res: h
                            };
                        f.push(i)
                    }), Tumblr.Lightbox.init(f, d)
                }
            } // opacity change on icons
            return a(e.photoWrap).on("mouseenter", function () {
                    a(this).find(".icons").css("visibility", "visible")
                }).on("mouseleave", function () {
                    a(this).find(".icons").css("visibility", "hidden")
                }), // display photo info
                a("span.info").on("mouseenter", function () {
                    var b = a(this),
                        c = b.children(".pxu-data");
                    c.css("display", "block").stop(!0, !1).animate({
                        opacity: 1
                    }, 200)
                }), a("span.info").on("mouseleave", function () {
                    var b = a(this),
                        c = b.children(".pxu-data");
                    c.stop(!0, !1).animate({
                        opacity: 0
                    }, 200, function () {
                        a(this).css("display", "none")
                    })
                }), this.each(function () {
                    function b(b) {
                        for (var c, d, f, g, h, i = b.find(".row"), j = i.length, k = 0; j > k; k++)
                            if (currentRow = i.eq(k), images = currentRow.find(e.photoWrap + " img"), photoCount = images.length, photoCount > 1) { // find smallest value
                                var l = currentRow.find(e.photo + " img").map(function () {
                                        return c = a(this), d = c.data("width"), f = c.data("height"), g = c.parent().width(), h = g / d * f, c.data("new-height", h), h
                                    }).get(),
                                    m = Array.min(l); // center crop the images that are too tall for the row
                                for (currentRow.height(m - 1).find(e.photo).height(m - 1), p = 0; photoCount > p; p++) {
                                    var n = images.eq(p),
                                        o = n.data("new-height"),
                                        q = m;
                                    if (o > q) {
                                        var r = (o - q) / 2;
                                        n.css("margin-top", -r)
                                    }
                                }
                            }
                    }
                    var d = a(this),
                        f = d.data("layout"),
                        g = JSON.stringify(f).split(""),
                        h = g.length,
                        i = d.find(e.photo + " img");
                    for (p = 0; p < i.length; p++) {
                        var j = i.eq(p);
                        j.attr("data-count", p + 1)
                    } // here we are going to combine rows, image count per row,
                    // and the last image number in each row (of total images)
                    var k = [];
                    for (p = 1; h >= p; ++p) {
                        for (var l = 0, m = 0; p > m; ++m) {
                            var n = parseInt(g[m], 10);
                            l += n
                        }
                        var o = parseInt(g[p - 1], 10); // rowArray = (row number, images in row, last image in row)
                        k[p] = Array(p, o, l)
                    } // create our rows
                    for (var p = 1; h >= p; p++) {
                        var q; // first row, start at zero
                        q = 1 === p ? 0 : k[p - 1][2], // now that we have our firstPhoto, we slice from it to the last photo in the row rowArray[i][2]
                            // and we add a clas to each of those images with however many images are in that row, eg: count-2
                            // and then we wrap them all in a div.row
                            d.find(e.photoWrap).slice(q, k[p][2]).addClass("count-" + k[p][1]).wrapAll('<div class="row clearit" />')
                    } // end HIGH RES
                    // Round the corners on the top and bottom rows
                    if ( // end create rows
                        // apply gutter
                        e.gutter && (a(this).find(".row").css("margin-bottom", e.gutter), a(this).find(e.photoWrap + ":not(:first-child) " + e.photo + " img").css("margin-left", e.gutter)), // our function to find the minimum value
                        Array.min = function (a) {
                            return Math.min.apply(Math, a)
                        }, b(d), a(window).resize(function () {
                            b(d)
                        }), // EXIF data and CAPTIONS enabled
                        e.exif && e.captions ? d.find(e.photoWrap).each(function () {
                            var b, c, d = a(this).find("img");
                            if (d.hasClass("exif-yes")) {
                                var e = d.data("camera") || "-",
                                    f = d.data("iso") || "-",
                                    g = d.data("aperture") || "-",
                                    h = d.data("exposure") || "-",
                                    i = d.data("focal") || "-";
                                b = '<table class="exif"><tr><td colspan="2"><span class="label">Camera</span><br>' + e + '</td></tr><tr><td><span class="label">ISO</span><br>' + f + '</td><td><span class="label">Aperture</span><br>' + g + '</td></tr><tr><td><span class="label">Exposure</span><br>' + h + '</td><td><span class="label">Focal Length</span><br>' + i + "</td></tr></table>"
                            } else b = ""; if (d.hasClass("caption-yes")) {
                                var j = d.data("caption");
                                c = '<p class="pxu-caption">' + j + "</p>"
                            } else c = "";
                            ("" !== c || "" !== b) && (a(this).find(".info").append('<div class="pxu-data">' + c + b + '<span class="arrow-down"></span></div>'), "" === b && a(this).find(".pxu-data").addClass("caption-only"), a(this).find("span.info").css("display", "block"))
                        }) : e.exif ? d.find(e.photoWrap).each(function () {
                            var b = a(this).find("img");
                            if (b.hasClass("exif-yes")) { // exif data avialable
                                var c = b.data("camera") || "-",
                                    d = b.data("iso") || "-",
                                    e = b.data("aperture") || "-",
                                    f = b.data("exposure") || "-",
                                    g = b.data("focal") || "-",
                                    h = '<table class="exif"><tr><td colspan="2"><span class="label">Camera</span><br>' + c + '</td></tr><tr><td><span class="label">ISO</span><br>' + d + '</td><td><span class="label">Aperture</span><br>' + e + '</td></tr><tr><td><span class="label">Exposure</span><br>' + f + '</td><td><span class="label">Focal Length</span><br>' + g + '</td></tr></table><span class="arrow-down"></span>';
                                a(this).find(".info").append('<div class="pxu-data">' + h + "</div>"), a(this).find("span.info").css("display", "block")
                            }
                        }) : e.captions && d.find(e.photoWrap).each(function () {
                            var b = a(this).find("img");
                            if (b.hasClass("caption-yes")) {
                                var c = b.data("caption"),
                                    d = '<p class="pxu-caption" style="margin:0;">' + c + "</p>";
                                a(this).find(".info").append('<div class="pxu-data caption-only">' + d + '<span class="arrow-down"></span></div>'), a(this).find("span.info").css("display", "block")
                            }
                        }), // end CAPTIONS
                        // Roll through HighRes data and replace the images
                        e.highRes && d.find(e.photoWrap).each(function () {
                            var b = a(this).find(e.photo + " img"),
                                c = b.data("highres");
                            b.attr("src", c)
                        }), "corners" == e.rounded) {
                        var r = d.find(".row");
                        if (1 == h) // only one row
                            r.find(e.photoWrap + ":first-child " + e.photo).css({
                            borderRadius: e.borderRadius + " 0 0 " + e.borderRadius
                        }), r.find(e.photoWrap + ":last-child " + e.photo).css({
                            borderRadius: "0 " + e.borderRadius + " " + e.borderRadius + " 0"
                        });
                        else // more than one row
                            for (var s = 0; h > s; s++) {
                            var t;
                            0 === s && ( // first row
                                t = r.eq(s).find(e.photo).size(), 1 == t ? r.eq(s).find(e.photo).css({
                                    borderRadius: e.borderRadius + " " + e.borderRadius + " 0 0"
                                }) : (r.eq(s).find(e.photoWrap + ":first-child " + e.photo).css({
                                    borderRadius: e.borderRadius + " 0 0 0"
                                }), r.eq(s).find(e.photoWrap + ":last-child " + e.photo).css({
                                    borderRadius: "0 " + e.borderRadius + " 0 0"
                                }))), s == h - 1 && ( // we're on the last row
                                t = r.eq(s).find(e.photo).size(), 1 == t ? r.eq(s).find(e.photo).css({
                                    borderRadius: "0 0 " + e.borderRadius + " " + e.borderRadius
                                }) : (r.eq(s).find(e.photoWrap + ":first-child " + e.photo).css({
                                    borderRadius: "0 0 0 " + e.borderRadius
                                }), r.eq(s).find(e.photoWrap + ":last-child " + e.photo).css({
                                    borderRadius: "0 0 " + e.borderRadius + " 0"
                                })))
                        }
                    } // end ROUNDED
                    // Round the corners on the top and bottom rows
                    "all" == e.rounded && d.find(e.photo).css({
                            borderRadius: e.borderRadius
                        }), // end ROUNDED
                        // Round the corners on the top and bottom rows
                        e.rounded || d.find(e.photo).css({
                            borderRadius: 0
                        }), // end ROUNDED
                        // We're done! Add a 'processed' class so people can tie other processes into it
                        d.addClass("processed"), // callback if provided
                        "function" == typeof c && // make sure the callback is a function
                        c.call(this)
                })
        }
    }(jQuery),
    /*!
     * Olle Ota
     * Copyright 2013-2014
     */
    function () {
        if (1 == theme_options.infinite_scroll) {
            $("#pagination").hide();
            var a = $("#loading");
            $(".index #content").infinitescroll({
                navSelector: "nav#pagination",
                nextSelector: "nav#pagination a:first",
                itemSelector: ".hentry",
                prefill: !0,
                bufferPx: 100,
                done: "",
                loading: {
                    finishedMsg: theme_options.infinite_scroll_str,
                    img: "http://static.tumblr.com/ns3mt1d/t7dmwtaxj/x.png",
                    msgText: ""
                }
            }, function (c) {
                var d = [],
                    e = $(c).hide();
                1 == theme_options.form_photosets && $(c).find(".photo-slideshow").pxuPhotoset(b), e.imagesLoaded(function () {
                    e.fadeIn(200), "grid" == theme_options.theme_type && $(".index #content").masonry("appended", e), a.hide()
                }), e.each(function () {
                    d.push(this.id)
                }), Tumblr.LikeButton.get_status_by_post_ids(d)
            })
        }
        if ("grid" == theme_options.theme_type) {
            var b = {
                ligthbox: !0, // uses the default Tumblr lightbox, change to false to use your own
                highRes: !1, // will use high res images
                rounded: "false", // corners, all or false
                exif: !0, // display EXIF data if available (tooltip)
                captions: !0, // display individual captions on photos (tooltip)
                gutter: theme_options.photoset_gap, // spacing between the images
                photoset: ".photo-slideshow", // photoset wrapper
                photoWrap: ".photo-data", // photo data wrapper (includes photo, icons + exif)
                photo: ".pxu-photo"
            };
            1 == theme_options.form_photosets && $(".photo-slideshow").pxuPhotoset(b), docReady(function () {
                prepareGrid()
            })
        }
        if ("column" == theme_options.theme_type) {
            if (olleMenus(), 1 == theme_options.widget_grid) {
                var c = $(".widgets");
                c.imagesLoaded(function () {
                    c.masonry({
                        itemSelector: ".widget"
                    })
                })
            }
            fetchMore()
        }
    }(),

    $(function () {
        "" != theme_options.soundcloud_link && $.stratus({
            links: theme_options.soundcloud_link,
            align: "bottom",
            position: "fixed"
        })
    });



    // Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/


(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define('waypoints', ['jquery'], function($) {
        return factory($, root);
      });
    } else {
      return factory(root.jQuery, root);
    }
  })(window, function($, window) {
    var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;

    $w = $(window);
    isTouch = __indexOf.call(window, 'ontouchstart') >= 0;
    allWaypoints = {
      horizontal: {},
      vertical: {}
    };
    contextCounter = 1;
    contexts = {};
    contextKey = 'waypoints-context-id';
    resizeEvent = 'resize.waypoints';
    scrollEvent = 'scroll.waypoints';
    waypointCounter = 1;
    waypointKey = 'waypoints-waypoint-ids';
    wp = 'waypoint';
    wps = 'waypoints';
    Context = (function() {
      function Context($element) {
        var _this = this;

        this.$element = $element;
        this.element = $element[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = 'context' + contextCounter++;
        this.oldScroll = {
          x: $element.scrollLeft(),
          y: $element.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        this.element[contextKey] = this.id;
        contexts[this.id] = this;
        $element.bind(scrollEvent, function() {
          var scrollHandler;

          if (!(_this.didScroll || isTouch)) {
            _this.didScroll = true;
            scrollHandler = function() {
              _this.doScroll();
              return _this.didScroll = false;
            };
            return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
          }
        });
        $element.bind(resizeEvent, function() {
          var resizeHandler;

          if (!_this.didResize) {
            _this.didResize = true;
            resizeHandler = function() {
              $[wps]('refresh');
              return _this.didResize = false;
            };
            return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
          }
        });
      }

      Context.prototype.doScroll = function() {
        var axes,
          _this = this;

        axes = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left'
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up'
          }
        };
        if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
          $[wps]('refresh');
        }
        $.each(axes, function(aKey, axis) {
          var direction, isForward, triggered;

          triggered = [];
          isForward = axis.newScroll > axis.oldScroll;
          direction = isForward ? axis.forward : axis.backward;
          $.each(_this.waypoints[aKey], function(wKey, waypoint) {
            var _ref, _ref1;

            if ((axis.oldScroll < (_ref = waypoint.offset) && _ref <= axis.newScroll)) {
              return triggered.push(waypoint);
            } else if ((axis.newScroll < (_ref1 = waypoint.offset) && _ref1 <= axis.oldScroll)) {
              return triggered.push(waypoint);
            }
          });
          triggered.sort(function(a, b) {
            return a.offset - b.offset;
          });
          if (!isForward) {
            triggered.reverse();
          }
          return $.each(triggered, function(i, waypoint) {
            if (waypoint.options.continuous || i === triggered.length - 1) {
              return waypoint.trigger([direction]);
            }
          });
        });
        return this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll
        };
      };

      Context.prototype.refresh = function() {
        var axes, cOffset, isWin,
          _this = this;

        isWin = $.isWindow(this.element);
        cOffset = this.$element.offset();
        this.doScroll();
        axes = {
          horizontal: {
            contextOffset: isWin ? 0 : cOffset.left,
            contextScroll: isWin ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left',
            offsetProp: 'left'
          },
          vertical: {
            contextOffset: isWin ? 0 : cOffset.top,
            contextScroll: isWin ? 0 : this.oldScroll.y,
            contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up',
            offsetProp: 'top'
          }
        };
        return $.each(axes, function(aKey, axis) {
          return $.each(_this.waypoints[aKey], function(i, waypoint) {
            var adjustment, elementOffset, oldOffset, _ref, _ref1;

            adjustment = waypoint.options.offset;
            oldOffset = waypoint.offset;
            elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
            if ($.isFunction(adjustment)) {
              adjustment = adjustment.apply(waypoint.element);
            } else if (typeof adjustment === 'string') {
              adjustment = parseFloat(adjustment);
              if (waypoint.options.offset.indexOf('%') > -1) {
                adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
              }
            }
            waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
            if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
              return;
            }
            if (oldOffset !== null && (oldOffset < (_ref = axis.oldScroll) && _ref <= waypoint.offset)) {
              return waypoint.trigger([axis.backward]);
            } else if (oldOffset !== null && (oldOffset > (_ref1 = axis.oldScroll) && _ref1 >= waypoint.offset)) {
              return waypoint.trigger([axis.forward]);
            } else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
              return waypoint.trigger([axis.forward]);
            }
          });
        });
      };

      Context.prototype.checkEmpty = function() {
        if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([resizeEvent, scrollEvent].join(' '));
          return delete contexts[this.id];
        }
      };

      return Context;

    })();
    Waypoint = (function() {
      function Waypoint($element, context, options) {
        var idList, _ref;

        if (options.offset === 'bottom-in-view') {
          options.offset = function() {
            var contextHeight;

            contextHeight = $[wps]('viewportHeight');
            if (!$.isWindow(context.element)) {
              contextHeight = context.$element.height();
            }
            return contextHeight - $(this).outerHeight();
          };
        }
        this.$element = $element;
        this.element = $element[0];
        this.axis = options.horizontal ? 'horizontal' : 'vertical';
        this.callback = options.handler;
        this.context = context;
        this.enabled = options.enabled;
        this.id = 'waypoints' + waypointCounter++;
        this.offset = null;
        this.options = options;
        context.waypoints[this.axis][this.id] = this;
        allWaypoints[this.axis][this.id] = this;
        idList = (_ref = this.element[waypointKey]) != null ? _ref : [];
        idList.push(this.id);
        this.element[waypointKey] = idList;
      }

      Waypoint.prototype.trigger = function(args) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, args);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      Waypoint.prototype.disable = function() {
        return this.enabled = false;
      };

      Waypoint.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true;
      };

      Waypoint.prototype.destroy = function() {
        delete allWaypoints[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      Waypoint.getWaypointsByElement = function(element) {
        var all, ids;

        ids = element[waypointKey];
        if (!ids) {
          return [];
        }
        all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
        return $.map(ids, function(id) {
          return all[id];
        });
      };

      return Waypoint;

    })();
    methods = {
      init: function(f, options) {
        var _ref;

        options = $.extend({}, $.fn[wp].defaults, options);
        if ((_ref = options.handler) == null) {
          options.handler = f;
        }
        this.each(function() {
          var $this, context, contextElement, _ref1;

          $this = $(this);
          contextElement = (_ref1 = options.context) != null ? _ref1 : $.fn[wp].defaults.context;
          if (!$.isWindow(contextElement)) {
            contextElement = $this.closest(contextElement);
          }
          contextElement = $(contextElement);
          context = contexts[contextElement[0][contextKey]];
          if (!context) {
            context = new Context(contextElement);
          }
          return new Waypoint($this, context, options);
        });
        $[wps]('refresh');
        return this;
      },
      disable: function() {
        return methods._invoke.call(this, 'disable');
      },
      enable: function() {
        return methods._invoke.call(this, 'enable');
      },
      destroy: function() {
        return methods._invoke.call(this, 'destroy');
      },
      prev: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index > 0) {
            return stack.push(waypoints[index - 1]);
          }
        });
      },
      next: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index < waypoints.length - 1) {
            return stack.push(waypoints[index + 1]);
          }
        });
      },
      _traverse: function(axis, selector, push) {
        var stack, waypoints;

        if (axis == null) {
          axis = 'vertical';
        }
        if (selector == null) {
          selector = window;
        }
        waypoints = jQMethods.aggregate(selector);
        stack = [];
        this.each(function() {
          var index;

          index = $.inArray(this, waypoints[axis]);
          return push(stack, index, waypoints[axis]);
        });
        return this.pushStack(stack);
      },
      _invoke: function(method) {
        this.each(function() {
          var waypoints;

          waypoints = Waypoint.getWaypointsByElement(this);
          return $.each(waypoints, function(i, waypoint) {
            waypoint[method]();
            return true;
          });
        });
        return this;
      }
    };
    $.fn[wp] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (methods[method]) {
        return methods[method].apply(this, args);
      } else if ($.isFunction(method)) {
        return methods.init.apply(this, arguments);
      } else if ($.isPlainObject(method)) {
        return methods.init.apply(this, [null, method]);
      } else if (!method) {
        return $.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return $.error("The " + method + " method does not exist in jQuery Waypoints.");
      }
    };
    $.fn[wp].defaults = {
      context: window,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    jQMethods = {
      refresh: function() {
        return $.each(contexts, function(i, context) {
          return context.refresh();
        });
      },
      viewportHeight: function() {
        var _ref;

        return (_ref = window.innerHeight) != null ? _ref : $w.height();
      },
      aggregate: function(contextSelector) {
        var collection, waypoints, _ref;

        collection = allWaypoints;
        if (contextSelector) {
          collection = (_ref = contexts[$(contextSelector)[0][contextKey]]) != null ? _ref.waypoints : void 0;
        }
        if (!collection) {
          return [];
        }
        waypoints = {
          horizontal: [],
          vertical: []
        };
        $.each(waypoints, function(axis, arr) {
          $.each(collection[axis], function(key, waypoint) {
            return arr.push(waypoint);
          });
          arr.sort(function(a, b) {
            return a.offset - b.offset;
          });
          waypoints[axis] = $.map(arr, function(waypoint) {
            return waypoint.element;
          });
          return waypoints[axis] = $.unique(waypoints[axis]);
        });
        return waypoints;
      },
      above: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.y;
        });
      },
      below: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.y;
        });
      },
      left: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.x;
        });
      },
      right: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.x;
        });
      },
      enable: function() {
        return jQMethods._invoke('enable');
      },
      disable: function() {
        return jQMethods._invoke('disable');
      },
      destroy: function() {
        return jQMethods._invoke('destroy');
      },
      extendFn: function(methodName, f) {
        return methods[methodName] = f;
      },
      _invoke: function(method) {
        var waypoints;

        waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
        return $.each(waypoints, function(key, waypoint) {
          waypoint[method]();
          return true;
        });
      },
      _filter: function(selector, axis, test) {
        var context, waypoints;

        context = contexts[$(selector)[0][contextKey]];
        if (!context) {
          return [];
        }
        waypoints = [];
        $.each(context.waypoints[axis], function(i, waypoint) {
          if (test(context, waypoint)) {
            return waypoints.push(waypoint);
          }
        });
        waypoints.sort(function(a, b) {
          return a.offset - b.offset;
        });
        return $.map(waypoints, function(waypoint) {
          return waypoint.element;
        });
      }
    };
    $[wps] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (jQMethods[method]) {
        return jQMethods[method].apply(null, args);
      } else {
        return jQMethods.aggregate.call(null, method);
      }
    };
    $[wps].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return $w.on('load.waypoints', function() {
      return $[wps]('refresh');
    });
  });

}).call(this);


    /*
    Sticky Elements Shortcut for jQuery Waypoints - v2.0.5
    Copyright (c) 2011-2014 Caleb Troughton
    Licensed under the MIT license.
    https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
    */
    (function(){(function(t,n){if(typeof define==="function"&&define.amd){return define(["jquery","waypoints"],n)}else{return n(t.jQuery)}})(window,function(t){var n,i;n={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"};i=function(t,n){var i;t.wrap(n.wrapper);i=t.parent();return i.data("isWaypointStickyWrapper",true)};t.waypoints("extendFn","sticky",function(r){var e,a,s;a=t.extend({},t.fn.waypoint.defaults,n,r);e=i(this,a);s=a.handler;a.handler=function(n){var i,r;i=t(this).children(":first");r=a.direction.indexOf(n)!==-1;i.toggleClass(a.stuckClass,r);e.height(r?i.outerHeight():"");if(s!=null){return s.call(this,n)}};e.waypoint(a);return this.data("stuckClass",a.stuckClass)});return t.waypoints("extendFn","unsticky",function(){var t;t=this.parent();if(!t.data("isWaypointStickyWrapper")){return this}t.waypoint("destroy");this.unwrap();return this.removeClass(this.data("stuckClass"))})})}).call(this);
