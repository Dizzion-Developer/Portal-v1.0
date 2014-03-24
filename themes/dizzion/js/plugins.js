/*
 *  Document   : plugins.js
 *  Author     : Various
 *  Description: Plugins
 */

/* Avoid `console` errors in browsers that lack a console */
(function() {
    var e;
    var t = function() {
    };
    var n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
    var r = n.length;
    var i = window.console = window.console || {};
    while (r--) {
        e = n[r];
        if (!i[e]) {
            i[e] = t
        }
    }
})();

/*! jQuery UI - v1.10.3 - 2013-05-25
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.resizable.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
(function(e, t) {
    function i(t, i) {
        var a, n, r, o = t.nodeName.toLowerCase();
        return"area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
    }
    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return"hidden" === e.css(this, "visibility")
        }).length
    }
    var a = 0, n = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {version: "1.10.3", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}}), e.fn.extend({focus: function(t) {
            return function(i, s) {
                return"number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus), scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return/(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return/(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        }, zIndex: function(i) {
            if (i !== t)
                return this.css("zIndex", i);
            if (this.length)
                for (var s, a, n = e(this[0]); n.length && n[0] !== document; ) {
                    if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a))
                        return a;
                    n = n.parent()
                }
            return 0
        }, uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++a)
            })
        }, removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && e(this).removeAttr("id")
            })
        }}), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return!!e.data(i, t)
            }
        }) : function(t, i, s) {
            return!!e.data(t, s[3])
        }, focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        }, tabbable: function(t) {
            var s = e.attr(t, "tabindex"), a = isNaN(s);
            return(a || s >= 0) && i(t, !a)
        }}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
        function a(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"], r = s.toLowerCase(), o = {innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight};
        e.fn["inner" + s] = function(i) {
            return i === t ? o["inner" + s].call(this) : this.each(function() {
                e(this).css(r, a(this, i) + "px")
            })
        }, e.fn["outer" + s] = function(t, i) {
            return"number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
                e(this).css(r, a(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in document.createElement("div"), e.fn.extend({disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        }, enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }}), e.extend(e.ui, {plugin: {add: function(t, i, s) {
                var a, n = e.ui[t].prototype;
                for (a in s)
                    n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
            }, call: function(e, t, i) {
                var s, a = e.plugins[t];
                if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (s = 0; a.length > s; s++)
                        e.options[a[s][0]] && a[s][1].apply(e.element, i)
            }}, hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow"))
                return!1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", a = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
        }})
})(jQuery);
(function(e, t) {
    var i = 0, s = Array.prototype.slice, n = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++)
            try {
                e(i).triggerHandler("remove")
            } catch (a) {
            }
        n(t)
    }, e.widget = function(i, s, n) {
        var a, r, o, h, l = {}, u = i.split(".")[0];
        i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function(t) {
            return!!e.data(t, a)
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        }, e.extend(o, r, {version: n.version, _proto: e.extend({}, n), _childConstructors: []}), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function(i, n) {
            return e.isFunction(n) ? (l[i] = function() {
                var e = function() {
                    return s.prototype[i].apply(this, arguments)
                }, t = function(e) {
                    return s.prototype[i].apply(this, e)
                };
                return function() {
                    var i, s = this._super, a = this._superApply;
                    return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
                }
            }(), t) : (l[i] = n, t)
        }), o.prototype = e.widget.extend(h, {widgetEventPrefix: r ? h.widgetEventPrefix : i}, l, {constructor: o, namespace: u, widgetName: i, widgetFullName: a}), r ? (e.each(r._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
    }, e.widget.extend = function(i) {
        for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
            for (n in r[o])
                a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
        return i
    }, e.widget.bridge = function(i, n) {
        var a = n.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var o = "string" == typeof r, h = s.call(arguments, 1), l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function() {
                var s, n = e.data(this, a);
                return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function() {
                var t = e.data(this, a);
                t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
            }), l
        }
    }, e.Widget = function() {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {remove: function(e) {
                    e.target === s && this.destroy()
                }}), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        }, _destroy: e.noop, widget: function() {
            return this.element
        }, option: function(i, s) {
            var n, a, r, o = i;
            if (0 === arguments.length)
                return e.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (o = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++)
                        a[n[r]] = a[n[r]] || {}, a = a[n[r]];
                    if (i = n.pop(), s === t)
                        return a[i] === t ? null : a[i];
                    a[i] = s
                } else {
                    if (s === t)
                        return this.options[i] === t ? null : this.options[i];
                    o[i] = s
                }
            return this._setOptions(o), this
        }, _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        }, _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        }, enable: function() {
            return this._setOption("disabled", !1)
        }, disable: function() {
            return this._setOption("disabled", !0)
        }, _on: function(i, s, n) {
            var a, r = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function(n, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/), u = l[1] + r.eventNamespace, c = l[2];
                c ? a.delegate(c, u, h) : s.bind(u, h)
            })
        }, _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        }, _delay: function(e, t) {
            function i() {
                return("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        }, _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }})
        }, _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }})
        }, _trigger: function(t, i, s) {
            var n, a, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a)
                    n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }}, e.each({show: "fadeIn", hide: "fadeOut"}, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {effect: n});
            var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {duration: n}), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1
    }), e.widget("ui.mouse", {version: "1.10.3", options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(i) {
                return!0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        }, _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        }, _mouseDown: function(i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this, n = 1 === i.which, a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return s._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return s._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
            }
        }, _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        }, _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        }, _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        }, _mouseDelayMet: function() {
            return this.mouseDelayMet
        }, _mouseStart: function() {
        }, _mouseDrag: function() {
        }, _mouseStop: function() {
        }, _mouseCapture: function() {
            return!0
        }})
})(jQuery);
(function(e) {
    e.widget("ui.draggable", e.ui.mouse, {version: "1.10.3", widgetEventPrefix: "drag", options: {addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null}, _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        }, _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        }, _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3}).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        }, _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, this.offset.scroll = !1, e.extend(this.offset, {click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        }, _mouseDrag: function(t, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1)
                    return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        }, _mouseStop: function(t) {
            var i = this, s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
        }, _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        }, cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        }, _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        }, _createHelper: function(t) {
            var i = this.options, s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        }, _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {left: +t[0], top: +t[1] || 0}), "left"in t && (this.offset.click.left = t.left + this.margins.left), "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top"in t && (this.offset.click.top = t.top + this.margins.top), "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        }, _getParentOffset: function() {
            var t = this.offsetParent.offset();
            return"absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {top: 0, left: 0}), {top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        }, _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.element.position();
                return{top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
            }
            return{top: 0, left: 0}
        }, _cacheMargins: function() {
            this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
        }, _cacheHelperProportions: function() {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        }, _setContainment: function() {
            var t, i, s, n = this.options;
            return n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
        }, _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {top: n.scrollTop(), left: n.scrollLeft()}), {top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s}
        }, _generatePosition: function(t) {
            var i, s, n, a, o = this.options, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = t.pageX, l = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {top: r.scrollTop(), left: r.scrollLeft()}), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)}
        }, _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        }, _trigger: function(t, i, s) {
            return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
        }, plugins: {}, _uiHash: function() {
            return{helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
        }}), e.ui.plugin.add("draggable", "connectToSortable", {start: function(t, i) {
            var s = e(this).data("ui-draggable"), n = s.options, a = e.extend({}, i, {item: s.element});
            s.sortables = [], e(n.connectToSortable).each(function() {
                var i = e.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({instance: i, shouldRevert: i.options.revert}), i.refreshPositions(), i._trigger("activate", t, a))
            })
        }, stop: function(t, i) {
            var s = e(this).data("ui-draggable"), n = e.extend({}, i, {item: s.element});
            e.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({top: "auto", left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n))
            })
        }, drag: function(t, i) {
            var s = e(this).data("ui-draggable"), n = this;
            e.each(s.sortables, function() {
                var a = !1, o = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
                })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
            })
        }}), e.ui.plugin.add("draggable", "cursor", {start: function() {
            var t = e("body"), i = e(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
        }, stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }}), e.ui.plugin.add("draggable", "opacity", {start: function(t, i) {
            var s = e(i.helper), n = e(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        }, stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._opacity && e(i.helper).css("opacity", s._opacity)
        }}), e.ui.plugin.add("draggable", "scroll", {start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        }, drag: function(t) {
            var i = e(this).data("ui-draggable"), s = i.options, n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
        }}), e.ui.plugin.add("draggable", "snap", {start: function() {
            var t = e(this).data("ui-draggable"), i = t.options;
            t.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = e(this), s = i.offset();
                this !== t.element[0] && t.snapElements.push({item: this, width: i.outerWidth(), height: i.outerHeight(), top: s.top, left: s.left})
            })
        }, drag: function(t, i) {
            var s, n, a, o, r, h, l, u, c, d, p = e(this).data("ui-draggable"), f = p.options, m = f.snapTolerance, g = i.offset.left, v = g + p.helperProportions.width, b = i.offset.top, y = b + p.helperProportions.height;
            for (c = p.snapElements.length - 1; c >= 0; c--)
                r = p.snapElements[c].left, h = r + p.snapElements[c].width, l = p.snapElements[c].top, u = l + p.snapElements[c].height, r - m > v || g > h + m || l - m > y || b > u + m || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item) ? (p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {snapItem: p.snapElements[c].item})), p.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (s = m >= Math.abs(l - y), n = m >= Math.abs(u - b), a = m >= Math.abs(r - v), o = m >= Math.abs(h - g), s && (i.position.top = p._convertPositionTo("relative", {top: l - p.helperProportions.height, left: 0}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {top: u, left: 0}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {top: 0, left: r - p.helperProportions.width}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {top: 0, left: h}).left - p.margins.left)), d = s || n || a || o, "outer" !== f.snapMode && (s = m >= Math.abs(l - b), n = m >= Math.abs(u - y), a = m >= Math.abs(r - g), o = m >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", {top: l, left: 0}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {top: u - p.helperProportions.height, left: 0}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {top: 0, left: r}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {top: 0, left: h - p.helperProportions.width}).left - p.margins.left)), !p.snapElements[c].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {snapItem: p.snapElements[c].item})), p.snapElements[c].snapping = s || n || a || o || d)
        }}), e.ui.plugin.add("draggable", "stack", {start: function() {
            var t, i = this.data("ui-draggable").options, s = e.makeArray(e(i.stack)).sort(function(t, i) {
                return(parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
            });
            s.length && (t = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function(i) {
                e(this).css("zIndex", t + i)
            }), this.css("zIndex", t + s.length))
        }}), e.ui.plugin.add("draggable", "zIndex", {start: function(t, i) {
            var s = e(i.helper), n = e(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        }, stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._zIndex && e(i.helper).css("zIndex", s._zIndex)
        }})
})(jQuery);
(function(e) {
    function t(e) {
        return parseInt(e, 10) || 0
    }
    function i(e) {
        return!isNaN(parseInt(e, 10))
    }
    e.widget("ui.resizable", e.ui.mouse, {version: "1.10.3", widgetEventPrefix: "resize", options: {alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null}, _create: function() {
            var t, i, s, n, a, o = this, r = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {_aspectRatio: !!r.aspectRatio, aspectRatio: r.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left")})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static", zoom: 1, display: "block"})), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw"} : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++)
                    s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({zIndex: r.zIndex}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function(t) {
                var i, s, n, a;
                t = t || this.element;
                for (i in this.handles)
                    this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function() {
                r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        }, _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left")}).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        }, _mouseCapture: function(t) {
            var i, s, n = !1;
            for (i in this.handles)
                s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
            return!this.options.disabled && n
        }, _mouseStart: function(i) {
            var s, n, a, o = this.options, r = this.element.position(), h = this.element;
            return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({position: "absolute", top: h.css("top"), left: h.css("left")}) : h.is(".ui-draggable") && h.css({position: "absolute", top: r.top, left: r.left}), this._renderProxy(), s = t(this.helper.css("left")), n = t(this.helper.css("top")), o.containment && (s += e(o.containment).scrollLeft() || 0, n += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left: s, top: n}, this.size = this._helper ? {width: h.outerWidth(), height: h.outerHeight()} : {width: h.width(), height: h.height()}, this.originalSize = this._helper ? {width: h.outerWidth(), height: h.outerHeight()} : {width: h.width(), height: h.height()}, this.originalPosition = {left: s, top: n}, this.sizeDiff = {width: h.outerWidth() - h.width(), height: h.outerHeight() - h.height()}, this.originalMousePosition = {left: i.pageX, top: i.pageY}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        }, _mouseDrag: function(t) {
            var i, s = this.helper, n = {}, a = this.originalMousePosition, o = this.axis, r = this.position.top, h = this.position.left, l = this.size.width, u = this.size.height, c = t.pageX - a.left || 0, d = t.pageY - a.top || 0, p = this._change[o];
            return p ? (i = p.apply(this, [t, c, d]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== u && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || this._trigger("resize", t, this.ui()), !1) : !1
        }, _mouseStop: function(t) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options, u = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && e.ui.hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {width: u.helper.width() - a, height: u.helper.height() - n}, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {top: h, left: r})), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        }, _updateVirtualBoundaries: function(e) {
            var t, s, n, a, o, r = this.options;
            o = {minWidth: i(r.minWidth) ? r.minWidth : 0, maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0, minHeight: i(r.minHeight) ? r.minHeight : 0, maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0}, (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
        }, _updateCache: function(e) {
            this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
        }, _updateRatio: function(e) {
            var t = this.position, s = this.size, n = this.axis;
            return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (s.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (s.height - e.height), e.left = t.left + (s.width - e.width)), e
        }, _respectSize: function(e) {
            var t = this._vBoundaries, s = this.axis, n = i(e.width) && t.maxWidth && t.maxWidth < e.width, a = i(e.height) && t.maxHeight && t.maxHeight < e.height, o = i(e.width) && t.minWidth && t.minWidth > e.width, r = i(e.height) && t.minHeight && t.minHeight > e.height, h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, u = /sw|nw|w/.test(s), c = /nw|ne|n/.test(s);
            return o && (e.width = t.minWidth), r && (e.height = t.minHeight), n && (e.width = t.maxWidth), a && (e.height = t.maxHeight), o && u && (e.left = h - t.minWidth), n && u && (e.left = h - t.maxWidth), r && c && (e.top = l - t.minHeight), a && c && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        }, _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var e, t, i, s, n, a = this.helper || this.element;
                for (e = 0; this._proportionallyResizeElements.length > e; e++) {
                    if (n = this._proportionallyResizeElements[e], !this.borderDif)
                        for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; i.length > t; t++)
                            this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
                    n.css({height: a.height() - this.borderDif[0] - this.borderDif[2] || 0, width: a.width() - this.borderDif[1] - this.borderDif[3] || 0})
                }
            }
        }, _renderProxy: function() {
            var t = this.element, i = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        }, _change: {e: function(e, t) {
                return{width: this.originalSize.width + t}
            }, w: function(e, t) {
                var i = this.originalSize, s = this.originalPosition;
                return{left: s.left + t, width: i.width - t}
            }, n: function(e, t, i) {
                var s = this.originalSize, n = this.originalPosition;
                return{top: n.top + i, height: s.height - i}
            }, s: function(e, t, i) {
                return{height: this.originalSize.height + i}
            }, se: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            }, sw: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }, ne: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            }, nw: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }}, _propagate: function(t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
        }, plugins: {}, ui: function() {
            return{originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition}
        }}), e.ui.plugin.add("resizable", "animate", {stop: function(t) {
            var i = e(this).data("ui-resizable"), s = i.options, n = i._proportionallyResizeElements, a = n.length && /textarea/i.test(n[0].nodeName), o = a && e.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width, h = {width: i.size.width - r, height: i.size.height - o}, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(h, u && l ? {top: u, left: l} : {}), {duration: s.animateDuration, easing: s.animateEasing, step: function() {
                    var s = {width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10)};
                    n && n.length && e(n[0]).css({width: s.width, height: s.height}), i._updateCache(s), i._propagate("resize", t)
                }})
        }}), e.ui.plugin.add("resizable", "containment", {start: function() {
            var i, s, n, a, o, r, h, l = e(this).data("ui-resizable"), u = l.options, c = l.element, d = u.containment, p = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
            p && (l.containerElement = e(p), /document/.test(d) || d === document ? (l.containerOffset = {left: 0, top: 0}, l.containerPosition = {left: 0, top: 0}, l.parentData = {element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight}) : (i = e(p), s = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) {
                s[e] = t(i.css("padding" + n))
            }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {height: i.innerHeight() - s[3], width: i.innerWidth() - s[1]}, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = e.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {element: p, left: n.left, top: n.top, width: r, height: h}))
        }, resize: function(t) {
            var i, s, n, a, o = e(this).data("ui-resizable"), r = o.options, h = o.containerOffset, l = o.position, u = o._aspectRatio || t.shiftKey, c = {top: 0, left: 0}, d = o.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (c = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - c.left), u && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= o.parentData.left), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio))
        }, stop: function() {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.containerOffset, n = t.containerPosition, a = t.containerElement, o = e(t.helper), r = o.offset(), h = o.outerWidth() - t.sizeDiff.width, l = o.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({left: r.left - n.left - s.left, width: h, height: l}), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({left: r.left - n.left - s.left, width: h, height: l})
        }}), e.ui.plugin.add("resizable", "alsoResize", {start: function() {
            var t = e(this).data("ui-resizable"), i = t.options, s = function(t) {
                e(t).each(function() {
                    var t = e(this);
                    t.data("ui-resizable-alsoresize", {width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10)})
                })
            };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function(e) {
                s(e)
            })
        }, resize: function(t, i) {
            var s = e(this).data("ui-resizable"), n = s.options, a = s.originalSize, o = s.originalPosition, r = {height: s.size.height - a.height || 0, width: s.size.width - a.width || 0, top: s.position.top - o.top || 0, left: s.position.left - o.left || 0}, h = function(t, s) {
                e(t).each(function() {
                    var t = e(this), n = e(this).data("ui-resizable-alsoresize"), a = {}, o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(o, function(e, t) {
                        var i = (n[t] || 0) + (r[t] || 0);
                        i && i >= 0 && (a[t] = i || null)
                    }), t.css(a)
                })
            };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function(e, t) {
                h(e, t)
            })
        }, stop: function() {
            e(this).removeData("resizable-alsoresize")
        }}), e.ui.plugin.add("resizable", "ghost", {start: function() {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({opacity: .25, display: "block", position: "relative", height: s.height, width: s.width, margin: 0, left: 0, top: 0}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
        }, resize: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
        }, stop: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }}), e.ui.plugin.add("resizable", "grid", {resize: function() {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.size, n = t.originalSize, a = t.originalPosition, o = t.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, h = r[0] || 1, l = r[1] || 1, u = Math.round((s.width - n.width) / h) * h, c = Math.round((s.height - n.height) / l) * l, d = n.width + u, p = n.height + c, f = i.maxWidth && d > i.maxWidth, m = i.maxHeight && p > i.maxHeight, g = i.minWidth && i.minWidth > d, v = i.minHeight && i.minHeight > p;
            i.grid = r, g && (d += h), v && (p += l), f && (d -= h), m && (p -= l), /^(se|s|e)$/.test(o) ? (t.size.width = d, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.top = a.top - c) : /^(sw)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.left = a.left - u) : (t.size.width = d, t.size.height = p, t.position.top = a.top - c, t.position.left = a.left - u)
        }})
})(jQuery);

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * SlimScroll, Version: 1.1.0
 *
 */
(function(f) {
    jQuery.fn.extend({slimScroll: function(l) {
            var a = f.extend({width: "auto", height: "250px", size: "7px", color: "#000", position: "right", distance: "1px", start: "top", opacity: 0.4, alwaysVisible: !1, disableFadeOut: !1, railVisible: !1, railColor: "#333", railOpacity: 0.2, railDraggable: !0, railClass: "slimScrollRail", barClass: "slimScrollBar", wrapperClass: "slimScrollDiv", allowPageScroll: !1, wheelStep: 20, touchScrollStep: 200}, l);
            this.each(function() {
                function r(d) {
                    if (n) {
                        d = d || window.event;
                        var c = 0;
                        d.wheelDelta && (c = -d.wheelDelta /
                                120);
                        d.detail && (c = d.detail / 3);
                        f(d.target || d.srcTarget).closest("." + a.wrapperClass).is(b.parent()) && g(c, !0);
                        d.preventDefault && !p && d.preventDefault();
                        p || (d.returnValue = !1)
                    }
                }
                function g(d, f, h) {
                    var e = d, g = b.outerHeight() - c.outerHeight();
                    f && (e = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), e = Math.min(Math.max(e, 0), g), e = 0 < d ? Math.ceil(e) : Math.floor(e), c.css({top: e + "px"}));
                    j = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
                    e = j * (b[0].scrollHeight - b.outerHeight());
                    h && (e = d, d = e / b[0].scrollHeight *
                            b.outerHeight(), d = Math.min(Math.max(d, 0), g), c.css({top: d + "px"}));
                    b.scrollTop(e);
                    b.trigger("slimscrolling", ~~e);
                    s();
                    m()
                }
                function A() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", r, !1), this.addEventListener("mousewheel", r, !1)) : document.attachEvent("onmousewheel", r)
                }
                function t() {
                    q = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), B);
                    c.css({height: q + "px"});
                    var a = q == b.outerHeight() ? "none" : "block";
                    c.css({display: a})
                }
                function s() {
                    t();
                    clearTimeout(w);
                    j == ~~j && (p = a.allowPageScroll,
                            x != j && b.trigger("slimscroll", 0 == ~~j ? "top" : "bottom"));
                    x = j;
                    q >= b.outerHeight() ? p = !0 : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && h.stop(!0, !0).fadeIn("fast"))
                }
                function m() {
                    a.alwaysVisible || (w = setTimeout(function() {
                        if ((!a.disableFadeOut || !n) && !u && !v)
                            c.fadeOut("slow"), h.fadeOut("slow")
                    }, 1E3))
                }
                var n, u, v, w, y, q, j, x, B = 30, p = !1, b = f(this);
                if (b.parent().hasClass(a.wrapperClass)) {
                    var k = b.scrollTop(), c = b.parent().find("." + a.barClass), h = b.parent().find("." + a.railClass);
                    t();
                    if (f.isPlainObject(l)) {
                        if ("scrollTo"in l)
                            k =
                                    parseInt(a.scrollTo);
                        else if ("scrollBy"in l)
                            k += parseInt(a.scrollBy);
                        else if ("destroy"in l) {
                            c.remove();
                            h.remove();
                            b.unwrap();
                            return
                        }
                        g(k, !1, !0)
                    }
                } else {
                    a.height = "auto" == a.height ? b.parent().innerHeight() : a.height;
                    k = f("<div></div>").addClass(a.wrapperClass).css({position: "relative", overflow: "hidden", width: a.width, height: a.height});
                    b.css({overflow: "hidden", width: a.width, height: a.height});
                    var h = f("<div></div>").addClass(a.railClass).css({width: a.size, height: "100%", position: "absolute", top: 0, display: a.alwaysVisible &&
                                a.railVisible ? "block" : "none", "border-radius": a.size, background: a.railColor, opacity: a.railOpacity, zIndex: 90}), c = f("<div></div>").addClass(a.barClass).css({background: a.color, width: a.size, position: "absolute", top: 0, opacity: a.opacity, display: a.alwaysVisible ? "block" : "none", "border-radius": a.size, BorderRadius: a.size, MozBorderRadius: a.size, WebkitBorderRadius: a.size, zIndex: 99}), z = "right" == a.position ? {right: a.distance} : {left: a.distance};
                    h.css(z);
                    c.css(z);
                    b.wrap(k);
                    b.parent().append(c);
                    b.parent().append(h);
                    a.railDraggable && c.draggable({axis: "y", containment: "parent", start: function() {
                            v = !0
                        }, stop: function() {
                            v = !1;
                            m()
                        }, drag: function() {
                            g(0, f(this).position().top, !1)
                        }});
                    h.hover(function() {
                        s()
                    }, function() {
                        m()
                    });
                    c.hover(function() {
                        u = !0
                    }, function() {
                        u = !1
                    });
                    b.hover(function() {
                        n = !0;
                        s();
                        m()
                    }, function() {
                        n = !1;
                        m()
                    });
                    b.bind("touchstart", function(a) {
                        a.originalEvent.touches.length && (y = a.originalEvent.touches[0].pageY)
                    });
                    b.bind("touchmove", function(b) {
                        b.originalEvent.preventDefault();
                        b.originalEvent.touches.length && g((y -
                                b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0)
                    });
                    "bottom" === a.start ? (c.css({top: b.outerHeight() - c.outerHeight()}), g(0, !0)) : "top" !== a.start && (g(f(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
                    A();
                    t()
                }
            });
            return this
        }});
    jQuery.fn.extend({slimscroll: jQuery.fn.slimScroll})
})(jQuery);

/*
 * File:        jquery.dataTables.min.js
 * Version:     1.9.4
 * Author:      Allan Jardine (www.sprymedia.co.uk)
 * Info:        www.datatables.net
 *
 * Copyright 2008-2012 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, available at:
 *   http://datatables.net/license_gpl2
 *   http://datatables.net/license_bsd
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 */
(function(X, l, n) {
    var L = function(h) {
        var j = function(e) {
            function o(a, b) {
                var c = j.defaults.columns, d = a.aoColumns.length, c = h.extend({}, j.models.oColumn, c, {sSortingClass: a.oClasses.sSortable, sSortingClassJUI: a.oClasses.sSortJUI, nTh: b ? b : l.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.oDefaults : d});
                a.aoColumns.push(c);
                if (a.aoPreSearchCols[d] === n || null === a.aoPreSearchCols[d])
                    a.aoPreSearchCols[d] = h.extend({}, j.models.oSearch);
                else if (c = a.aoPreSearchCols[d],
                        c.bRegex === n && (c.bRegex = !0), c.bSmart === n && (c.bSmart = !0), c.bCaseInsensitive === n)
                    c.bCaseInsensitive = !0;
                m(a, d, null)
            }
            function m(a, b, c) {
                var d = a.aoColumns[b];
                c !== n && null !== c && (c.mDataProp && !c.mData && (c.mData = c.mDataProp), c.sType !== n && (d.sType = c.sType, d._bAutoType = !1), h.extend(d, c), p(d, c, "sWidth", "sWidthOrig"), c.iDataSort !== n && (d.aDataSort = [c.iDataSort]), p(d, c, "aDataSort"));
                var i = d.mRender ? Q(d.mRender) : null, f = Q(d.mData);
                d.fnGetData = function(a, b) {
                    var c = f(a, b);
                    return d.mRender && b && "" !== b ? i(c, b, a) : c
                };
                d.fnSetData =
                        L(d.mData);
                a.oFeatures.bSort || (d.bSortable = !1);
                !d.bSortable || -1 == h.inArray("asc", d.asSorting) && -1 == h.inArray("desc", d.asSorting) ? (d.sSortingClass = a.oClasses.sSortableNone, d.sSortingClassJUI = "") : -1 == h.inArray("asc", d.asSorting) && -1 == h.inArray("desc", d.asSorting) ? (d.sSortingClass = a.oClasses.sSortable, d.sSortingClassJUI = a.oClasses.sSortJUI) : -1 != h.inArray("asc", d.asSorting) && -1 == h.inArray("desc", d.asSorting) ? (d.sSortingClass = a.oClasses.sSortableAsc, d.sSortingClassJUI = a.oClasses.sSortJUIAscAllowed) : -1 ==
                        h.inArray("asc", d.asSorting) && -1 != h.inArray("desc", d.asSorting) && (d.sSortingClass = a.oClasses.sSortableDesc, d.sSortingClassJUI = a.oClasses.sSortJUIDescAllowed)
            }
            function k(a) {
                if (!1 === a.oFeatures.bAutoWidth)
                    return!1;
                da(a);
                for (var b = 0, c = a.aoColumns.length; b < c; b++)
                    a.aoColumns[b].nTh.style.width = a.aoColumns[b].sWidth
            }
            function G(a, b) {
                var c = r(a, "bVisible");
                return"number" === typeof c[b] ? c[b] : null
            }
            function R(a, b) {
                var c = r(a, "bVisible"), c = h.inArray(b, c);
                return-1 !== c ? c : null
            }
            function t(a) {
                return r(a, "bVisible").length
            }
            function r(a, b) {
                var c = [];
                h.map(a.aoColumns, function(a, i) {
                    a[b] && c.push(i)
                });
                return c
            }
            function B(a) {
                for (var b = j.ext.aTypes, c = b.length, d = 0; d < c; d++) {
                    var i = b[d](a);
                    if (null !== i)
                        return i
                }
                return"string"
            }
            function u(a, b) {
                for (var c = b.split(","), d = [], i = 0, f = a.aoColumns.length; i < f; i++)
                    for (var g = 0; g < f; g++)
                        if (a.aoColumns[i].sName == c[g]) {
                            d.push(g);
                            break
                        }
                return d
            }
            function M(a) {
                for (var b = "", c = 0, d = a.aoColumns.length; c < d; c++)
                    b += a.aoColumns[c].sName + ",";
                return b.length == d ? "" : b.slice(0, -1)
            }
            function ta(a, b, c, d) {
                var i, f,
                        g, e, w;
                if (b)
                    for (i = b.length - 1; 0 <= i; i--) {
                        var j = b[i].aTargets;
                        h.isArray(j) || D(a, 1, "aTargets must be an array of targets, not a " + typeof j);
                        f = 0;
                        for (g = j.length; f < g; f++)
                            if ("number" === typeof j[f] && 0 <= j[f]) {
                                for (; a.aoColumns.length <= j[f]; )
                                    o(a);
                                d(j[f], b[i])
                            } else if ("number" === typeof j[f] && 0 > j[f])
                                d(a.aoColumns.length + j[f], b[i]);
                            else if ("string" === typeof j[f]) {
                                e = 0;
                                for (w = a.aoColumns.length; e < w; e++)
                                    ("_all" == j[f] || h(a.aoColumns[e].nTh).hasClass(j[f])) && d(e, b[i])
                            }
                    }
                if (c) {
                    i = 0;
                    for (a = c.length; i < a; i++)
                        d(i, c[i])
                }
            }
            function H(a,
                    b) {
                var c;
                c = h.isArray(b) ? b.slice() : h.extend(!0, {}, b);
                var d = a.aoData.length, i = h.extend(!0, {}, j.models.oRow);
                i._aData = c;
                a.aoData.push(i);
                for (var f, i = 0, g = a.aoColumns.length; i < g; i++)
                    c = a.aoColumns[i], "function" === typeof c.fnRender && c.bUseRendered && null !== c.mData ? F(a, d, i, S(a, d, i)) : F(a, d, i, v(a, d, i)), c._bAutoType && "string" != c.sType && (f = v(a, d, i, "type"), null !== f && "" !== f && (f = B(f), null === c.sType ? c.sType = f : c.sType != f && "html" != c.sType && (c.sType = "string")));
                a.aiDisplayMaster.push(d);
                a.oFeatures.bDeferRender || ea(a,
                        d);
                return d
            }
            function ua(a) {
                var b, c, d, i, f, g, e;
                if (a.bDeferLoading || null === a.sAjaxSource)
                    for (b = a.nTBody.firstChild; b; ) {
                        if ("TR" == b.nodeName.toUpperCase()) {
                            c = a.aoData.length;
                            b._DT_RowIndex = c;
                            a.aoData.push(h.extend(!0, {}, j.models.oRow, {nTr: b}));
                            a.aiDisplayMaster.push(c);
                            f = b.firstChild;
                            for (d = 0; f; ) {
                                g = f.nodeName.toUpperCase();
                                if ("TD" == g || "TH" == g)
                                    F(a, c, d, h.trim(f.innerHTML)), d++;
                                f = f.nextSibling
                            }
                        }
                        b = b.nextSibling
                    }
                i = T(a);
                d = [];
                b = 0;
                for (c = i.length; b < c; b++)
                    for (f = i[b].firstChild; f; )
                        g = f.nodeName.toUpperCase(), ("TD" ==
                                g || "TH" == g) && d.push(f), f = f.nextSibling;
                c = 0;
                for (i = a.aoColumns.length; c < i; c++) {
                    e = a.aoColumns[c];
                    null === e.sTitle && (e.sTitle = e.nTh.innerHTML);
                    var w = e._bAutoType, o = "function" === typeof e.fnRender, k = null !== e.sClass, n = e.bVisible, m, p;
                    if (w || o || k || !n) {
                        g = 0;
                        for (b = a.aoData.length; g < b; g++)
                            f = a.aoData[g], m = d[g * i + c], w && "string" != e.sType && (p = v(a, g, c, "type"), "" !== p && (p = B(p), null === e.sType ? e.sType = p : e.sType != p && "html" != e.sType && (e.sType = "string"))), e.mRender ? m.innerHTML = v(a, g, c, "display") : e.mData !== c && (m.innerHTML = v(a,
                                    g, c, "display")), o && (p = S(a, g, c), m.innerHTML = p, e.bUseRendered && F(a, g, c, p)), k && (m.className += " " + e.sClass), n ? f._anHidden[c] = null : (f._anHidden[c] = m, m.parentNode.removeChild(m)), e.fnCreatedCell && e.fnCreatedCell.call(a.oInstance, m, v(a, g, c, "display"), f._aData, g, c)
                    }
                }
                if (0 !== a.aoRowCreatedCallback.length) {
                    b = 0;
                    for (c = a.aoData.length; b < c; b++)
                        f = a.aoData[b], A(a, "aoRowCreatedCallback", null, [f.nTr, f._aData, b])
                }
            }
            function I(a, b) {
                return b._DT_RowIndex !== n ? b._DT_RowIndex : null
            }
            function fa(a, b, c) {
                for (var b = J(a, b), d = 0, a =
                        a.aoColumns.length; d < a; d++)
                    if (b[d] === c)
                        return d;
                return-1
            }
            function Y(a, b, c, d) {
                for (var i = [], f = 0, g = d.length; f < g; f++)
                    i.push(v(a, b, d[f], c));
                return i
            }
            function v(a, b, c, d) {
                var i = a.aoColumns[c];
                if ((c = i.fnGetData(a.aoData[b]._aData, d)) === n)
                    return a.iDrawError != a.iDraw && null === i.sDefaultContent && (D(a, 0, "Requested unknown parameter " + ("function" == typeof i.mData ? "{mData function}" : "'" + i.mData + "'") + " from the data source for row " + b), a.iDrawError = a.iDraw), i.sDefaultContent;
                if (null === c && null !== i.sDefaultContent)
                    c =
                            i.sDefaultContent;
                else if ("function" === typeof c)
                    return c();
                return"display" == d && null === c ? "" : c
            }
            function F(a, b, c, d) {
                a.aoColumns[c].fnSetData(a.aoData[b]._aData, d)
            }
            function Q(a) {
                if (null === a)
                    return function() {
                        return null
                    };
                if ("function" === typeof a)
                    return function(b, d, i) {
                        return a(b, d, i)
                    };
                if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("["))) {
                    var b = function(a, d, i) {
                        var f = i.split("."), g;
                        if ("" !== i) {
                            var e = 0;
                            for (g = f.length; e < g; e++) {
                                if (i = f[e].match(U)) {
                                    f[e] = f[e].replace(U, "");
                                    "" !== f[e] && (a = a[f[e]]);
                                    g = [];
                                    f.splice(0, e + 1);
                                    for (var f = f.join("."), e = 0, h = a.length; e < h; e++)
                                        g.push(b(a[e], d, f));
                                    a = i[0].substring(1, i[0].length - 1);
                                    a = "" === a ? g : g.join(a);
                                    break
                                }
                                if (null === a || a[f[e]] === n)
                                    return n;
                                a = a[f[e]]
                            }
                        }
                        return a
                    };
                    return function(c, d) {
                        return b(c, d, a)
                    }
                }
                return function(b) {
                    return b[a]
                }
            }
            function L(a) {
                if (null === a)
                    return function() {
                    };
                if ("function" === typeof a)
                    return function(b, d) {
                        a(b, "set", d)
                    };
                if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("["))) {
                    var b = function(a, d, i) {
                        var i = i.split("."), f, g, e = 0;
                        for (g =
                                i.length - 1; e < g; e++) {
                            if (f = i[e].match(U)) {
                                i[e] = i[e].replace(U, "");
                                a[i[e]] = [];
                                f = i.slice();
                                f.splice(0, e + 1);
                                g = f.join(".");
                                for (var h = 0, j = d.length; h < j; h++)
                                    f = {}, b(f, d[h], g), a[i[e]].push(f);
                                return
                            }
                            if (null === a[i[e]] || a[i[e]] === n)
                                a[i[e]] = {};
                            a = a[i[e]]
                        }
                        a[i[i.length - 1].replace(U, "")] = d
                    };
                    return function(c, d) {
                        return b(c, d, a)
                    }
                }
                return function(b, d) {
                    b[a] = d
                }
            }
            function Z(a) {
                for (var b = [], c = a.aoData.length, d = 0; d < c; d++)
                    b.push(a.aoData[d]._aData);
                return b
            }
            function ga(a) {
                a.aoData.splice(0, a.aoData.length);
                a.aiDisplayMaster.splice(0,
                        a.aiDisplayMaster.length);
                a.aiDisplay.splice(0, a.aiDisplay.length);
                y(a)
            }
            function ha(a, b) {
                for (var c = -1, d = 0, i = a.length; d < i; d++)
                    a[d] == b ? c = d : a[d] > b && a[d]--;
                -1 != c && a.splice(c, 1)
            }
            function S(a, b, c) {
                var d = a.aoColumns[c];
                return d.fnRender({iDataRow: b, iDataColumn: c, oSettings: a, aData: a.aoData[b]._aData, mDataProp: d.mData}, v(a, b, c, "display"))
            }
            function ea(a, b) {
                var c = a.aoData[b], d;
                if (null === c.nTr) {
                    c.nTr = l.createElement("tr");
                    c.nTr._DT_RowIndex = b;
                    c._aData.DT_RowId && (c.nTr.id = c._aData.DT_RowId);
                    c._aData.DT_RowClass &&
                            (c.nTr.className = c._aData.DT_RowClass);
                    for (var i = 0, f = a.aoColumns.length; i < f; i++) {
                        var g = a.aoColumns[i];
                        d = l.createElement(g.sCellType);
                        d.innerHTML = "function" === typeof g.fnRender && (!g.bUseRendered || null === g.mData) ? S(a, b, i) : v(a, b, i, "display");
                        null !== g.sClass && (d.className = g.sClass);
                        g.bVisible ? (c.nTr.appendChild(d), c._anHidden[i] = null) : c._anHidden[i] = d;
                        g.fnCreatedCell && g.fnCreatedCell.call(a.oInstance, d, v(a, b, i, "display"), c._aData, b, i)
                    }
                    A(a, "aoRowCreatedCallback", null, [c.nTr, c._aData, b])
                }
            }
            function va(a) {
                var b,
                        c, d;
                if (0 !== h("th, td", a.nTHead).length) {
                    b = 0;
                    for (d = a.aoColumns.length; b < d; b++)
                        if (c = a.aoColumns[b].nTh, c.setAttribute("role", "columnheader"), a.aoColumns[b].bSortable && (c.setAttribute("tabindex", a.iTabIndex), c.setAttribute("aria-controls", a.sTableId)), null !== a.aoColumns[b].sClass && h(c).addClass(a.aoColumns[b].sClass), a.aoColumns[b].sTitle != c.innerHTML)
                            c.innerHTML = a.aoColumns[b].sTitle
                } else {
                    var i = l.createElement("tr");
                    b = 0;
                    for (d = a.aoColumns.length; b < d; b++)
                        c = a.aoColumns[b].nTh, c.innerHTML = a.aoColumns[b].sTitle,
                                c.setAttribute("tabindex", "0"), null !== a.aoColumns[b].sClass && h(c).addClass(a.aoColumns[b].sClass), i.appendChild(c);
                    h(a.nTHead).html("")[0].appendChild(i);
                    V(a.aoHeader, a.nTHead)
                }
                h(a.nTHead).children("tr").attr("role", "row");
                if (a.bJUI) {
                    b = 0;
                    for (d = a.aoColumns.length; b < d; b++) {
                        c = a.aoColumns[b].nTh;
                        i = l.createElement("div");
                        i.className = a.oClasses.sSortJUIWrapper;
                        h(c).contents().appendTo(i);
                        var f = l.createElement("span");
                        f.className = a.oClasses.sSortIcon;
                        i.appendChild(f);
                        c.appendChild(i)
                    }
                }
                if (a.oFeatures.bSort)
                    for (b =
                            0; b < a.aoColumns.length; b++)
                        !1 !== a.aoColumns[b].bSortable ? ia(a, a.aoColumns[b].nTh, b) : h(a.aoColumns[b].nTh).addClass(a.oClasses.sSortableNone);
                "" !== a.oClasses.sFooterTH && h(a.nTFoot).children("tr").children("th").addClass(a.oClasses.sFooterTH);
                if (null !== a.nTFoot) {
                    c = N(a, null, a.aoFooter);
                    b = 0;
                    for (d = a.aoColumns.length; b < d; b++)
                        c[b] && (a.aoColumns[b].nTf = c[b], a.aoColumns[b].sClass && h(c[b]).addClass(a.aoColumns[b].sClass))
                }
            }
            function W(a, b, c) {
                var d, i, f, g = [], e = [], h = a.aoColumns.length, j;
                c === n && (c = !1);
                d = 0;
                for (i =
                        b.length; d < i; d++) {
                    g[d] = b[d].slice();
                    g[d].nTr = b[d].nTr;
                    for (f = h - 1; 0 <= f; f--)
                        !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
                    e.push([])
                }
                d = 0;
                for (i = g.length; d < i; d++) {
                    if (a = g[d].nTr)
                        for (; f = a.firstChild; )
                            a.removeChild(f);
                    f = 0;
                    for (b = g[d].length; f < b; f++)
                        if (j = h = 1, e[d][f] === n) {
                            a.appendChild(g[d][f].cell);
                            for (e[d][f] = 1; g[d + h] !== n && g[d][f].cell == g[d + h][f].cell; )
                                e[d + h][f] = 1, h++;
                            for (; g[d][f + j] !== n && g[d][f].cell == g[d][f + j].cell; ) {
                                for (c = 0; c < h; c++)
                                    e[d + c][f + j] = 1;
                                j++
                            }
                            g[d][f].cell.rowSpan = h;
                            g[d][f].cell.colSpan = j
                        }
                }
            }
            function x(a) {
                var b =
                        A(a, "aoPreDrawCallback", "preDraw", [a]);
                if (-1 !== h.inArray(!1, b))
                    E(a, !1);
                else {
                    var c, d, b = [], i = 0, f = a.asStripeClasses.length;
                    c = a.aoOpenRows.length;
                    a.bDrawing = !0;
                    a.iInitDisplayStart !== n && -1 != a.iInitDisplayStart && (a._iDisplayStart = a.oFeatures.bServerSide ? a.iInitDisplayStart : a.iInitDisplayStart >= a.fnRecordsDisplay() ? 0 : a.iInitDisplayStart, a.iInitDisplayStart = -1, y(a));
                    if (a.bDeferLoading)
                        a.bDeferLoading = !1, a.iDraw++;
                    else if (a.oFeatures.bServerSide) {
                        if (!a.bDestroying && !wa(a))
                            return
                    } else
                        a.iDraw++;
                    if (0 !== a.aiDisplay.length) {
                        var g =
                                a._iDisplayStart;
                        d = a._iDisplayEnd;
                        a.oFeatures.bServerSide && (g = 0, d = a.aoData.length);
                        for (; g < d; g++) {
                            var e = a.aoData[a.aiDisplay[g]];
                            null === e.nTr && ea(a, a.aiDisplay[g]);
                            var j = e.nTr;
                            if (0 !== f) {
                                var o = a.asStripeClasses[i % f];
                                e._sRowStripe != o && (h(j).removeClass(e._sRowStripe).addClass(o), e._sRowStripe = o)
                            }
                            A(a, "aoRowCallback", null, [j, a.aoData[a.aiDisplay[g]]._aData, i, g]);
                            b.push(j);
                            i++;
                            if (0 !== c)
                                for (e = 0; e < c; e++)
                                    if (j == a.aoOpenRows[e].nParent) {
                                        b.push(a.aoOpenRows[e].nTr);
                                        break
                                    }
                        }
                    } else
                        b[0] = l.createElement("tr"), a.asStripeClasses[0] &&
                                (b[0].className = a.asStripeClasses[0]), c = a.oLanguage, f = c.sZeroRecords, 1 == a.iDraw && null !== a.sAjaxSource && !a.oFeatures.bServerSide ? f = c.sLoadingRecords : c.sEmptyTable && 0 === a.fnRecordsTotal() && (f = c.sEmptyTable), c = l.createElement("td"), c.setAttribute("valign", "top"), c.colSpan = t(a), c.className = a.oClasses.sRowEmpty, c.innerHTML = ja(a, f), b[i].appendChild(c);
                    A(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Z(a), a._iDisplayStart, a.fnDisplayEnd(), a.aiDisplay]);
                    A(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0],
                        Z(a), a._iDisplayStart, a.fnDisplayEnd(), a.aiDisplay]);
                    i = l.createDocumentFragment();
                    c = l.createDocumentFragment();
                    if (a.nTBody) {
                        f = a.nTBody.parentNode;
                        c.appendChild(a.nTBody);
                        if (!a.oScroll.bInfinite || !a._bInitComplete || a.bSorted || a.bFiltered)
                            for (; c = a.nTBody.firstChild; )
                                a.nTBody.removeChild(c);
                        c = 0;
                        for (d = b.length; c < d; c++)
                            i.appendChild(b[c]);
                        a.nTBody.appendChild(i);
                        null !== f && f.appendChild(a.nTBody)
                    }
                    A(a, "aoDrawCallback", "draw", [a]);
                    a.bSorted = !1;
                    a.bFiltered = !1;
                    a.bDrawing = !1;
                    a.oFeatures.bServerSide && (E(a, !1),
                            a._bInitComplete || $(a))
                }
            }
            function aa(a) {
                a.oFeatures.bSort ? O(a, a.oPreviousSearch) : a.oFeatures.bFilter ? K(a, a.oPreviousSearch) : (y(a), x(a))
            }
            function xa(a) {
                var b = h("<div></div>")[0];
                a.nTable.parentNode.insertBefore(b, a.nTable);
                a.nTableWrapper = h('<div id="' + a.sTableId + '_wrapper" class="' + a.oClasses.sWrapper + '" role="grid"></div>')[0];
                a.nTableReinsertBefore = a.nTable.nextSibling;
                for (var c = a.nTableWrapper, d = a.sDom.split(""), i, f, g, e, w, o, k, m = 0; m < d.length; m++) {
                    f = 0;
                    g = d[m];
                    if ("<" == g) {
                        e = h("<div></div>")[0];
                        w = d[m +
                        1];
                        if ("'" == w || '"' == w) {
                            o = "";
                            for (k = 2; d[m + k] != w; )
                                o += d[m + k], k++;
                            "H" == o ? o = a.oClasses.sJUIHeader : "F" == o && (o = a.oClasses.sJUIFooter);
                            -1 != o.indexOf(".") ? (w = o.split("."), e.id = w[0].substr(1, w[0].length - 1), e.className = w[1]) : "#" == o.charAt(0) ? e.id = o.substr(1, o.length - 1) : e.className = o;
                            m += k
                        }
                        c.appendChild(e);
                        c = e
                    } else if (">" == g)
                        c = c.parentNode;
                    else if ("l" == g && a.oFeatures.bPaginate && a.oFeatures.bLengthChange)
                        i = ya(a), f = 1;
                    else if ("f" == g && a.oFeatures.bFilter)
                        i = za(a), f = 1;
                    else if ("r" == g && a.oFeatures.bProcessing)
                        i = Aa(a), f =
                                1;
                    else if ("t" == g)
                        i = Ba(a), f = 1;
                    else if ("i" == g && a.oFeatures.bInfo)
                        i = Ca(a), f = 1;
                    else if ("p" == g && a.oFeatures.bPaginate)
                        i = Da(a), f = 1;
                    else if (0 !== j.ext.aoFeatures.length) {
                        e = j.ext.aoFeatures;
                        k = 0;
                        for (w = e.length; k < w; k++)
                            if (g == e[k].cFeature) {
                                (i = e[k].fnInit(a)) && (f = 1);
                                break
                            }
                    }
                    1 == f && null !== i && ("object" !== typeof a.aanFeatures[g] && (a.aanFeatures[g] = []), a.aanFeatures[g].push(i), c.appendChild(i))
                }
                b.parentNode.replaceChild(a.nTableWrapper, b)
            }
            function V(a, b) {
                var c = h(b).children("tr"), d, i, f, g, e, j, o, k, m, p;
                a.splice(0, a.length);
                f = 0;
                for (j = c.length; f < j; f++)
                    a.push([]);
                f = 0;
                for (j = c.length; f < j; f++) {
                    d = c[f];
                    for (i = d.firstChild; i; ) {
                        if ("TD" == i.nodeName.toUpperCase() || "TH" == i.nodeName.toUpperCase()) {
                            k = 1 * i.getAttribute("colspan");
                            m = 1 * i.getAttribute("rowspan");
                            k = !k || 0 === k || 1 === k ? 1 : k;
                            m = !m || 0 === m || 1 === m ? 1 : m;
                            g = 0;
                            for (e = a[f]; e[g]; )
                                g++;
                            o = g;
                            p = 1 === k ? !0 : !1;
                            for (e = 0; e < k; e++)
                                for (g = 0; g < m; g++)
                                    a[f + g][o + e] = {cell: i, unique: p}, a[f + g].nTr = d
                        }
                        i = i.nextSibling
                    }
                }
            }
            function N(a, b, c) {
                var d = [];
                c || (c = a.aoHeader, b && (c = [], V(c, b)));
                for (var b = 0, i = c.length; b < i; b++)
                    for (var f =
                            0, g = c[b].length; f < g; f++)
                        if (c[b][f].unique && (!d[f] || !a.bSortCellsTop))
                            d[f] = c[b][f].cell;
                return d
            }
            function wa(a) {
                if (a.bAjaxDataGet) {
                    a.iDraw++;
                    E(a, !0);
                    var b = Ea(a);
                    ka(a, b);
                    a.fnServerData.call(a.oInstance, a.sAjaxSource, b, function(b) {
                        Fa(a, b)
                    }, a);
                    return!1
                }
                return!0
            }
            function Ea(a) {
                var b = a.aoColumns.length, c = [], d, i, f, g;
                c.push({name: "sEcho", value: a.iDraw});
                c.push({name: "iColumns", value: b});
                c.push({name: "sColumns", value: M(a)});
                c.push({name: "iDisplayStart", value: a._iDisplayStart});
                c.push({name: "iDisplayLength",
                    value: !1 !== a.oFeatures.bPaginate ? a._iDisplayLength : -1});
                for (f = 0; f < b; f++)
                    d = a.aoColumns[f].mData, c.push({name: "mDataProp_" + f, value: "function" === typeof d ? "function" : d});
                if (!1 !== a.oFeatures.bFilter) {
                    c.push({name: "sSearch", value: a.oPreviousSearch.sSearch});
                    c.push({name: "bRegex", value: a.oPreviousSearch.bRegex});
                    for (f = 0; f < b; f++)
                        c.push({name: "sSearch_" + f, value: a.aoPreSearchCols[f].sSearch}), c.push({name: "bRegex_" + f, value: a.aoPreSearchCols[f].bRegex}), c.push({name: "bSearchable_" + f, value: a.aoColumns[f].bSearchable})
                }
                if (!1 !==
                        a.oFeatures.bSort) {
                    var e = 0;
                    d = null !== a.aaSortingFixed ? a.aaSortingFixed.concat(a.aaSorting) : a.aaSorting.slice();
                    for (f = 0; f < d.length; f++) {
                        i = a.aoColumns[d[f][0]].aDataSort;
                        for (g = 0; g < i.length; g++)
                            c.push({name: "iSortCol_" + e, value: i[g]}), c.push({name: "sSortDir_" + e, value: d[f][1]}), e++
                    }
                    c.push({name: "iSortingCols", value: e});
                    for (f = 0; f < b; f++)
                        c.push({name: "bSortable_" + f, value: a.aoColumns[f].bSortable})
                }
                return c
            }
            function ka(a, b) {
                A(a, "aoServerParams", "serverParams", [b])
            }
            function Fa(a, b) {
                if (b.sEcho !== n) {
                    if (1 * b.sEcho <
                            a.iDraw)
                        return;
                    a.iDraw = 1 * b.sEcho
                }
                (!a.oScroll.bInfinite || a.oScroll.bInfinite && (a.bSorted || a.bFiltered)) && ga(a);
                a._iRecordsTotal = parseInt(b.iTotalRecords, 10);
                a._iRecordsDisplay = parseInt(b.iTotalDisplayRecords, 10);
                var c = M(a), c = b.sColumns !== n && "" !== c && b.sColumns != c, d;
                c && (d = u(a, b.sColumns));
                for (var i = Q(a.sAjaxDataProp)(b), f = 0, g = i.length; f < g; f++)
                    if (c) {
                        for (var e = [], h = 0, j = a.aoColumns.length; h < j; h++)
                            e.push(i[f][d[h]]);
                        H(a, e)
                    } else
                        H(a, i[f]);
                a.aiDisplay = a.aiDisplayMaster.slice();
                a.bAjaxDataGet = !1;
                x(a);
                a.bAjaxDataGet =
                        !0;
                E(a, !1)
            }
            function za(a) {
                var b = a.oPreviousSearch, c = a.oLanguage.sSearch, c = -1 !== c.indexOf("_INPUT_") ? c.replace("_INPUT_", '<input type="text" />') : "" === c ? '<input type="text" />' : c + ' <input type="text" />', d = l.createElement("div");
                d.className = a.oClasses.sFilter;
                d.innerHTML = "<label>" + c + "</label>";
                a.aanFeatures.f || (d.id = a.sTableId + "_filter");
                c = h('input[type="text"]', d);
                d._DT_Input = c[0];
                c.val(b.sSearch.replace('"', "&quot;"));
                c.bind("keyup.DT", function() {
                    for (var c = a.aanFeatures.f, d = this.value === "" ? "" : this.value,
                            g = 0, e = c.length; g < e; g++)
                        c[g] != h(this).parents("div.dataTables_filter")[0] && h(c[g]._DT_Input).val(d);
                    d != b.sSearch && K(a, {sSearch: d, bRegex: b.bRegex, bSmart: b.bSmart, bCaseInsensitive: b.bCaseInsensitive})
                });
                c.attr("aria-controls", a.sTableId).bind("keypress.DT", function(a) {
                    if (a.keyCode == 13)
                        return false
                });
                return d
            }
            function K(a, b, c) {
                var d = a.oPreviousSearch, i = a.aoPreSearchCols, f = function(a) {
                    d.sSearch = a.sSearch;
                    d.bRegex = a.bRegex;
                    d.bSmart = a.bSmart;
                    d.bCaseInsensitive = a.bCaseInsensitive
                };
                if (a.oFeatures.bServerSide)
                    f(b);
                else {
                    Ga(a, b.sSearch, c, b.bRegex, b.bSmart, b.bCaseInsensitive);
                    f(b);
                    for (b = 0; b < a.aoPreSearchCols.length; b++)
                        Ha(a, i[b].sSearch, b, i[b].bRegex, i[b].bSmart, i[b].bCaseInsensitive);
                    Ia(a)
                }
                a.bFiltered = !0;
                h(a.oInstance).trigger("filter", a);
                a._iDisplayStart = 0;
                y(a);
                x(a);
                la(a, 0)
            }
            function Ia(a) {
                for (var b = j.ext.afnFiltering, c = r(a, "bSearchable"), d = 0, i = b.length; d < i; d++)
                    for (var f = 0, g = 0, e = a.aiDisplay.length; g < e; g++) {
                        var h = a.aiDisplay[g - f];
                        b[d](a, Y(a, h, "filter", c), h) || (a.aiDisplay.splice(g - f, 1), f++)
                    }
            }
            function Ha(a, b, c,
                    d, i, f) {
                if ("" !== b)
                    for (var g = 0, b = ma(b, d, i, f), d = a.aiDisplay.length - 1; 0 <= d; d--)
                        i = Ja(v(a, a.aiDisplay[d], c, "filter"), a.aoColumns[c].sType), b.test(i) || (a.aiDisplay.splice(d, 1), g++)
            }
            function Ga(a, b, c, d, i, f) {
                d = ma(b, d, i, f);
                i = a.oPreviousSearch;
                c || (c = 0);
                0 !== j.ext.afnFiltering.length && (c = 1);
                if (0 >= b.length)
                    a.aiDisplay.splice(0, a.aiDisplay.length), a.aiDisplay = a.aiDisplayMaster.slice();
                else if (a.aiDisplay.length == a.aiDisplayMaster.length || i.sSearch.length > b.length || 1 == c || 0 !== b.indexOf(i.sSearch)) {
                    a.aiDisplay.splice(0,
                            a.aiDisplay.length);
                    la(a, 1);
                    for (b = 0; b < a.aiDisplayMaster.length; b++)
                        d.test(a.asDataSearch[b]) && a.aiDisplay.push(a.aiDisplayMaster[b])
                } else
                    for (b = c = 0; b < a.asDataSearch.length; b++)
                        d.test(a.asDataSearch[b]) || (a.aiDisplay.splice(b - c, 1), c++)
            }
            function la(a, b) {
                if (!a.oFeatures.bServerSide) {
                    a.asDataSearch = [];
                    for (var c = r(a, "bSearchable"), d = 1 === b ? a.aiDisplayMaster : a.aiDisplay, i = 0, f = d.length; i < f; i++)
                        a.asDataSearch[i] = na(a, Y(a, d[i], "filter", c))
                }
            }
            function na(a, b) {
                var c = b.join("  ");
                -1 !== c.indexOf("&") && (c = h("<div>").html(c).text());
                return c.replace(/[\n\r]/g, " ")
            }
            function ma(a, b, c, d) {
                if (c)
                    return a = b ? a.split(" ") : oa(a).split(" "), a = "^(?=.*?" + a.join(")(?=.*?") + ").*$", RegExp(a, d ? "i" : "");
                a = b ? a : oa(a);
                return RegExp(a, d ? "i" : "")
            }
            function Ja(a, b) {
                return"function" === typeof j.ext.ofnSearch[b] ? j.ext.ofnSearch[b](a) : null === a ? "" : "html" == b ? a.replace(/[\r\n]/g, " ").replace(/<.*?>/g, "") : "string" === typeof a ? a.replace(/[\r\n]/g, " ") : a
            }
            function oa(a) {
                return a.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
                        "\\$1")
            }
            function Ca(a) {
                var b = l.createElement("div");
                b.className = a.oClasses.sInfo;
                a.aanFeatures.i || (a.aoDrawCallback.push({fn: Ka, sName: "information"}), b.id = a.sTableId + "_info");
                a.nTable.setAttribute("aria-describedby", a.sTableId + "_info");
                return b
            }
            function Ka(a) {
                if (a.oFeatures.bInfo && 0 !== a.aanFeatures.i.length) {
                    var b = a.oLanguage, c = a._iDisplayStart + 1, d = a.fnDisplayEnd(), i = a.fnRecordsTotal(), f = a.fnRecordsDisplay(), g;
                    g = 0 === f ? b.sInfoEmpty : b.sInfo;
                    f != i && (g += " " + b.sInfoFiltered);
                    g += b.sInfoPostFix;
                    g = ja(a, g);
                    null !== b.fnInfoCallback && (g = b.fnInfoCallback.call(a.oInstance, a, c, d, i, f, g));
                    a = a.aanFeatures.i;
                    b = 0;
                    for (c = a.length; b < c; b++)
                        h(a[b]).html(g)
                }
            }
            function ja(a, b) {
                var c = a.fnFormatNumber(a._iDisplayStart + 1), d = a.fnDisplayEnd(), d = a.fnFormatNumber(d), i = a.fnRecordsDisplay(), i = a.fnFormatNumber(i), f = a.fnRecordsTotal(), f = a.fnFormatNumber(f);
                a.oScroll.bInfinite && (c = a.fnFormatNumber(1));
                return b.replace(/_START_/g, c).replace(/_END_/g, d).replace(/_TOTAL_/g, i).replace(/_MAX_/g, f)
            }
            function ba(a) {
                var b, c, d = a.iInitDisplayStart;
                if (!1 === a.bInitialised)
                    setTimeout(function() {
                        ba(a)
                    }, 200);
                else {
                    xa(a);
                    va(a);
                    W(a, a.aoHeader);
                    a.nTFoot && W(a, a.aoFooter);
                    E(a, !0);
                    a.oFeatures.bAutoWidth && da(a);
                    b = 0;
                    for (c = a.aoColumns.length; b < c; b++)
                        null !== a.aoColumns[b].sWidth && (a.aoColumns[b].nTh.style.width = q(a.aoColumns[b].sWidth));
                    a.oFeatures.bSort ? O(a) : a.oFeatures.bFilter ? K(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice(), y(a), x(a));
                    null !== a.sAjaxSource && !a.oFeatures.bServerSide ? (c = [], ka(a, c), a.fnServerData.call(a.oInstance, a.sAjaxSource,
                            c, function(c) {
                        var f = a.sAjaxDataProp !== "" ? Q(a.sAjaxDataProp)(c) : c;
                        for (b = 0; b < f.length; b++)
                            H(a, f[b]);
                        a.iInitDisplayStart = d;
                        if (a.oFeatures.bSort)
                            O(a);
                        else {
                            a.aiDisplay = a.aiDisplayMaster.slice();
                            y(a);
                            x(a)
                        }
                        E(a, false);
                        $(a, c)
                    }, a)) : a.oFeatures.bServerSide || (E(a, !1), $(a))
                }
            }
            function $(a, b) {
                a._bInitComplete = !0;
                A(a, "aoInitComplete", "init", [a, b])
            }
            function pa(a) {
                var b = j.defaults.oLanguage;
                !a.sEmptyTable && (a.sZeroRecords && "No data available in table" === b.sEmptyTable) && p(a, a, "sZeroRecords", "sEmptyTable");
                !a.sLoadingRecords &&
                        (a.sZeroRecords && "Loading..." === b.sLoadingRecords) && p(a, a, "sZeroRecords", "sLoadingRecords")
            }
            function ya(a) {
                if (a.oScroll.bInfinite)
                    return null;
                var b = '<select size="1" ' + ('name="' + a.sTableId + '_length"') + ">", c, d, i = a.aLengthMenu;
                if (2 == i.length && "object" === typeof i[0] && "object" === typeof i[1]) {
                    c = 0;
                    for (d = i[0].length; c < d; c++)
                        b += '<option value="' + i[0][c] + '">' + i[1][c] + "</option>"
                } else {
                    c = 0;
                    for (d = i.length; c < d; c++)
                        b += '<option value="' + i[c] + '">' + i[c] + "</option>"
                }
                b += "</select>";
                i = l.createElement("div");
                a.aanFeatures.l ||
                        (i.id = a.sTableId + "_length");
                i.className = a.oClasses.sLength;
                i.innerHTML = "<label>" + a.oLanguage.sLengthMenu.replace("_MENU_", b) + "</label>";
                h('select option[value="' + a._iDisplayLength + '"]', i).attr("selected", !0);
                h("select", i).bind("change.DT", function() {
                    var b = h(this).val(), i = a.aanFeatures.l;
                    c = 0;
                    for (d = i.length; c < d; c++)
                        i[c] != this.parentNode && h("select", i[c]).val(b);
                    a._iDisplayLength = parseInt(b, 10);
                    y(a);
                    if (a.fnDisplayEnd() == a.fnRecordsDisplay()) {
                        a._iDisplayStart = a.fnDisplayEnd() - a._iDisplayLength;
                        if (a._iDisplayStart <
                                0)
                            a._iDisplayStart = 0
                    }
                    if (a._iDisplayLength == -1)
                        a._iDisplayStart = 0;
                    x(a)
                });
                h("select", i).attr("aria-controls", a.sTableId);
                return i
            }
            function y(a) {
                a._iDisplayEnd = !1 === a.oFeatures.bPaginate ? a.aiDisplay.length : a._iDisplayStart + a._iDisplayLength > a.aiDisplay.length || -1 == a._iDisplayLength ? a.aiDisplay.length : a._iDisplayStart + a._iDisplayLength
            }
            function Da(a) {
                if (a.oScroll.bInfinite)
                    return null;
                var b = l.createElement("div");
                b.className = a.oClasses.sPaging + a.sPaginationType;
                j.ext.oPagination[a.sPaginationType].fnInit(a,
                        b, function(a) {
                    y(a);
                    x(a)
                });
                a.aanFeatures.p || a.aoDrawCallback.push({fn: function(a) {
                        j.ext.oPagination[a.sPaginationType].fnUpdate(a, function(a) {
                            y(a);
                            x(a)
                        })
                    }, sName: "pagination"});
                return b
            }
            function qa(a, b) {
                var c = a._iDisplayStart;
                if ("number" === typeof b)
                    a._iDisplayStart = b * a._iDisplayLength, a._iDisplayStart > a.fnRecordsDisplay() && (a._iDisplayStart = 0);
                else if ("first" == b)
                    a._iDisplayStart = 0;
                else if ("previous" == b)
                    a._iDisplayStart = 0 <= a._iDisplayLength ? a._iDisplayStart - a._iDisplayLength : 0, 0 > a._iDisplayStart && (a._iDisplayStart =
                            0);
                else if ("next" == b)
                    0 <= a._iDisplayLength ? a._iDisplayStart + a._iDisplayLength < a.fnRecordsDisplay() && (a._iDisplayStart += a._iDisplayLength) : a._iDisplayStart = 0;
                else if ("last" == b)
                    if (0 <= a._iDisplayLength) {
                        var d = parseInt((a.fnRecordsDisplay() - 1) / a._iDisplayLength, 10) + 1;
                        a._iDisplayStart = (d - 1) * a._iDisplayLength
                    } else
                        a._iDisplayStart = 0;
                else
                    D(a, 0, "Unknown paging action: " + b);
                h(a.oInstance).trigger("page", a);
                return c != a._iDisplayStart
            }
            function Aa(a) {
                var b = l.createElement("div");
                a.aanFeatures.r || (b.id = a.sTableId +
                        "_processing");
                b.innerHTML = a.oLanguage.sProcessing;
                b.className = a.oClasses.sProcessing;
                a.nTable.parentNode.insertBefore(b, a.nTable);
                return b
            }
            function E(a, b) {
                if (a.oFeatures.bProcessing)
                    for (var c = a.aanFeatures.r, d = 0, i = c.length; d < i; d++)
                        c[d].style.visibility = b ? "visible" : "hidden";
                h(a.oInstance).trigger("processing", [a, b])
            }
            function Ba(a) {
                if ("" === a.oScroll.sX && "" === a.oScroll.sY)
                    return a.nTable;
                var b = l.createElement("div"), c = l.createElement("div"), d = l.createElement("div"), i = l.createElement("div"), f = l.createElement("div"),
                        g = l.createElement("div"), e = a.nTable.cloneNode(!1), j = a.nTable.cloneNode(!1), o = a.nTable.getElementsByTagName("thead")[0], k = 0 === a.nTable.getElementsByTagName("tfoot").length ? null : a.nTable.getElementsByTagName("tfoot")[0], m = a.oClasses;
                c.appendChild(d);
                f.appendChild(g);
                i.appendChild(a.nTable);
                b.appendChild(c);
                b.appendChild(i);
                d.appendChild(e);
                e.appendChild(o);
                null !== k && (b.appendChild(f), g.appendChild(j), j.appendChild(k));
                b.className = m.sScrollWrapper;
                c.className = m.sScrollHead;
                d.className = m.sScrollHeadInner;
                i.className = m.sScrollBody;
                f.className = m.sScrollFoot;
                g.className = m.sScrollFootInner;
                a.oScroll.bAutoCss && (c.style.overflow = "hidden", c.style.position = "relative", f.style.overflow = "hidden", i.style.overflow = "auto");
                c.style.border = "0";
                c.style.width = "100%";
                f.style.border = "0";
                d.style.width = "" !== a.oScroll.sXInner ? a.oScroll.sXInner : "100%";
                e.removeAttribute("id");
                e.style.marginLeft = "0";
                a.nTable.style.marginLeft = "0";
                null !== k && (j.removeAttribute("id"), j.style.marginLeft = "0");
                d = h(a.nTable).children("caption");
                0 <
                        d.length && (d = d[0], "top" === d._captionSide ? e.appendChild(d) : "bottom" === d._captionSide && k && j.appendChild(d));
                "" !== a.oScroll.sX && (c.style.width = q(a.oScroll.sX), i.style.width = q(a.oScroll.sX), null !== k && (f.style.width = q(a.oScroll.sX)), h(i).scroll(function() {
                    c.scrollLeft = this.scrollLeft;
                    if (k !== null)
                        f.scrollLeft = this.scrollLeft
                }));
                "" !== a.oScroll.sY && (i.style.height = q(a.oScroll.sY));
                a.aoDrawCallback.push({fn: La, sName: "scrolling"});
                a.oScroll.bInfinite && h(i).scroll(function() {
                    if (!a.bDrawing && h(this).scrollTop() !==
                            0 && h(this).scrollTop() + h(this).height() > h(a.nTable).height() - a.oScroll.iLoadGap && a.fnDisplayEnd() < a.fnRecordsDisplay()) {
                        qa(a, "next");
                        y(a);
                        x(a)
                    }
                });
                a.nScrollHead = c;
                a.nScrollFoot = f;
                return b
            }
            function La(a) {
                var b = a.nScrollHead.getElementsByTagName("div")[0], c = b.getElementsByTagName("table")[0], d = a.nTable.parentNode, i, f, g, e, j, o, k, m, p = [], n = [], l = null !== a.nTFoot ? a.nScrollFoot.getElementsByTagName("div")[0] : null, R = null !== a.nTFoot ? l.getElementsByTagName("table")[0] : null, r = a.oBrowser.bScrollOversize, s = function(a) {
                    k =
                            a.style;
                    k.paddingTop = "0";
                    k.paddingBottom = "0";
                    k.borderTopWidth = "0";
                    k.borderBottomWidth = "0";
                    k.height = 0
                };
                h(a.nTable).children("thead, tfoot").remove();
                i = h(a.nTHead).clone()[0];
                a.nTable.insertBefore(i, a.nTable.childNodes[0]);
                g = a.nTHead.getElementsByTagName("tr");
                e = i.getElementsByTagName("tr");
                null !== a.nTFoot && (j = h(a.nTFoot).clone()[0], a.nTable.insertBefore(j, a.nTable.childNodes[1]), o = a.nTFoot.getElementsByTagName("tr"), j = j.getElementsByTagName("tr"));
                "" === a.oScroll.sX && (d.style.width = "100%", b.parentNode.style.width =
                        "100%");
                var t = N(a, i);
                i = 0;
                for (f = t.length; i < f; i++)
                    m = G(a, i), t[i].style.width = a.aoColumns[m].sWidth;
                null !== a.nTFoot && C(function(a) {
                    a.style.width = ""
                }, j);
                a.oScroll.bCollapse && "" !== a.oScroll.sY && (d.style.height = d.offsetHeight + a.nTHead.offsetHeight + "px");
                i = h(a.nTable).outerWidth();
                if ("" === a.oScroll.sX) {
                    if (a.nTable.style.width = "100%", r && (h("tbody", d).height() > d.offsetHeight || "scroll" == h(d).css("overflow-y")))
                        a.nTable.style.width = q(h(a.nTable).outerWidth() - a.oScroll.iBarWidth)
                } else
                    "" !== a.oScroll.sXInner ? a.nTable.style.width =
                            q(a.oScroll.sXInner) : i == h(d).width() && h(d).height() < h(a.nTable).height() ? (a.nTable.style.width = q(i - a.oScroll.iBarWidth), h(a.nTable).outerWidth() > i - a.oScroll.iBarWidth && (a.nTable.style.width = q(i))) : a.nTable.style.width = q(i);
                i = h(a.nTable).outerWidth();
                C(s, e);
                C(function(a) {
                    p.push(q(h(a).width()))
                }, e);
                C(function(a, b) {
                    a.style.width = p[b]
                }, g);
                h(e).height(0);
                null !== a.nTFoot && (C(s, j), C(function(a) {
                    n.push(q(h(a).width()))
                }, j), C(function(a, b) {
                    a.style.width = n[b]
                }, o), h(j).height(0));
                C(function(a, b) {
                    a.innerHTML =
                            "";
                    a.style.width = p[b]
                }, e);
                null !== a.nTFoot && C(function(a, b) {
                    a.innerHTML = "";
                    a.style.width = n[b]
                }, j);
                if (h(a.nTable).outerWidth() < i) {
                    g = d.scrollHeight > d.offsetHeight || "scroll" == h(d).css("overflow-y") ? i + a.oScroll.iBarWidth : i;
                    if (r && (d.scrollHeight > d.offsetHeight || "scroll" == h(d).css("overflow-y")))
                        a.nTable.style.width = q(g - a.oScroll.iBarWidth);
                    d.style.width = q(g);
                    a.nScrollHead.style.width = q(g);
                    null !== a.nTFoot && (a.nScrollFoot.style.width = q(g));
                    "" === a.oScroll.sX ? D(a, 1, "The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width.") :
                            "" !== a.oScroll.sXInner && D(a, 1, "The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation")
                } else
                    d.style.width = q("100%"), a.nScrollHead.style.width = q("100%"), null !== a.nTFoot && (a.nScrollFoot.style.width = q("100%"));
                "" === a.oScroll.sY && r && (d.style.height = q(a.nTable.offsetHeight + a.oScroll.iBarWidth));
                "" !== a.oScroll.sY && a.oScroll.bCollapse && (d.style.height = q(a.oScroll.sY), r = "" !== a.oScroll.sX && a.nTable.offsetWidth >
                        d.offsetWidth ? a.oScroll.iBarWidth : 0, a.nTable.offsetHeight < d.offsetHeight && (d.style.height = q(a.nTable.offsetHeight + r)));
                r = h(a.nTable).outerWidth();
                c.style.width = q(r);
                b.style.width = q(r);
                c = h(a.nTable).height() > d.clientHeight || "scroll" == h(d).css("overflow-y");
                b.style.paddingRight = c ? a.oScroll.iBarWidth + "px" : "0px";
                null !== a.nTFoot && (R.style.width = q(r), l.style.width = q(r), l.style.paddingRight = c ? a.oScroll.iBarWidth + "px" : "0px");
                h(d).scroll();
                if (a.bSorted || a.bFiltered)
                    d.scrollTop = 0
            }
            function C(a, b, c) {
                for (var d =
                        0, i = 0, f = b.length, g, e; i < f; ) {
                    g = b[i].firstChild;
                    for (e = c?c[i].firstChild:null; g; )
                        1 === g.nodeType && (c ? a(g, e, d) : a(g, d), d++), g = g.nextSibling, e = c ? e.nextSibling : null;
                    i++
                }
            }
            function Ma(a, b) {
                if (!a || null === a || "" === a)
                    return 0;
                b || (b = l.body);
                var c, d = l.createElement("div");
                d.style.width = q(a);
                b.appendChild(d);
                c = d.offsetWidth;
                b.removeChild(d);
                return c
            }
            function da(a) {
                var b = 0, c, d = 0, i = a.aoColumns.length, f, e, j = h("th", a.nTHead), o = a.nTable.getAttribute("width");
                e = a.nTable.parentNode;
                for (f = 0; f < i; f++)
                    a.aoColumns[f].bVisible &&
                            (d++, null !== a.aoColumns[f].sWidth && (c = Ma(a.aoColumns[f].sWidthOrig, e), null !== c && (a.aoColumns[f].sWidth = q(c)), b++));
                if (i == j.length && 0 === b && d == i && "" === a.oScroll.sX && "" === a.oScroll.sY)
                    for (f = 0; f < a.aoColumns.length; f++)
                        c = h(j[f]).width(), null !== c && (a.aoColumns[f].sWidth = q(c));
                else {
                    b = a.nTable.cloneNode(!1);
                    f = a.nTHead.cloneNode(!0);
                    d = l.createElement("tbody");
                    c = l.createElement("tr");
                    b.removeAttribute("id");
                    b.appendChild(f);
                    null !== a.nTFoot && (b.appendChild(a.nTFoot.cloneNode(!0)), C(function(a) {
                        a.style.width =
                                ""
                    }, b.getElementsByTagName("tr")));
                    b.appendChild(d);
                    d.appendChild(c);
                    d = h("thead th", b);
                    0 === d.length && (d = h("tbody tr:eq(0)>td", b));
                    j = N(a, f);
                    for (f = d = 0; f < i; f++) {
                        var k = a.aoColumns[f];
                        k.bVisible && null !== k.sWidthOrig && "" !== k.sWidthOrig ? j[f - d].style.width = q(k.sWidthOrig) : k.bVisible ? j[f - d].style.width = "" : d++
                    }
                    for (f = 0; f < i; f++)
                        a.aoColumns[f].bVisible && (d = Na(a, f), null !== d && (d = d.cloneNode(!0), "" !== a.aoColumns[f].sContentPadding && (d.innerHTML += a.aoColumns[f].sContentPadding), c.appendChild(d)));
                    e.appendChild(b);
                    "" !== a.oScroll.sX && "" !== a.oScroll.sXInner ? b.style.width = q(a.oScroll.sXInner) : "" !== a.oScroll.sX ? (b.style.width = "", h(b).width() < e.offsetWidth && (b.style.width = q(e.offsetWidth))) : "" !== a.oScroll.sY ? b.style.width = q(e.offsetWidth) : o && (b.style.width = q(o));
                    b.style.visibility = "hidden";
                    Oa(a, b);
                    i = h("tbody tr:eq(0)", b).children();
                    0 === i.length && (i = N(a, h("thead", b)[0]));
                    if ("" !== a.oScroll.sX) {
                        for (f = d = e = 0; f < a.aoColumns.length; f++)
                            a.aoColumns[f].bVisible && (e = null === a.aoColumns[f].sWidthOrig ? e + h(i[d]).outerWidth() :
                                    e + (parseInt(a.aoColumns[f].sWidth.replace("px", ""), 10) + (h(i[d]).outerWidth() - h(i[d]).width())), d++);
                        b.style.width = q(e);
                        a.nTable.style.width = q(e)
                    }
                    for (f = d = 0; f < a.aoColumns.length; f++)
                        a.aoColumns[f].bVisible && (e = h(i[d]).width(), null !== e && 0 < e && (a.aoColumns[f].sWidth = q(e)), d++);
                    i = h(b).css("width");
                    a.nTable.style.width = -1 !== i.indexOf("%") ? i : q(h(b).outerWidth());
                    b.parentNode.removeChild(b)
                }
                o && (a.nTable.style.width = q(o))
            }
            function Oa(a, b) {
                "" === a.oScroll.sX && "" !== a.oScroll.sY ? (h(b).width(), b.style.width = q(h(b).outerWidth() -
                        a.oScroll.iBarWidth)) : "" !== a.oScroll.sX && (b.style.width = q(h(b).outerWidth()))
            }
            function Na(a, b) {
                var c = Pa(a, b);
                if (0 > c)
                    return null;
                if (null === a.aoData[c].nTr) {
                    var d = l.createElement("td");
                    d.innerHTML = v(a, c, b, "");
                    return d
                }
                return J(a, c)[b]
            }
            function Pa(a, b) {
                for (var c = -1, d = -1, i = 0; i < a.aoData.length; i++) {
                    var e = v(a, i, b, "display") + "", e = e.replace(/<.*?>/g, "");
                    e.length > c && (c = e.length, d = i)
                }
                return d
            }
            function q(a) {
                if (null === a)
                    return"0px";
                if ("number" == typeof a)
                    return 0 > a ? "0px" : a + "px";
                var b = a.charCodeAt(a.length - 1);
                return 48 > b || 57 < b ? a : a + "px"
            }
            function Qa() {
                var a = l.createElement("p"), b = a.style;
                b.width = "100%";
                b.height = "200px";
                b.padding = "0px";
                var c = l.createElement("div"), b = c.style;
                b.position = "absolute";
                b.top = "0px";
                b.left = "0px";
                b.visibility = "hidden";
                b.width = "200px";
                b.height = "150px";
                b.padding = "0px";
                b.overflow = "hidden";
                c.appendChild(a);
                l.body.appendChild(c);
                b = a.offsetWidth;
                c.style.overflow = "scroll";
                a = a.offsetWidth;
                b == a && (a = c.clientWidth);
                l.body.removeChild(c);
                return b - a
            }
            function O(a, b) {
                var c, d, i, e, g, k, o = [], m = [], p =
                        j.ext.oSort, l = a.aoData, q = a.aoColumns, G = a.oLanguage.oAria;
                if (!a.oFeatures.bServerSide && (0 !== a.aaSorting.length || null !== a.aaSortingFixed)) {
                    o = null !== a.aaSortingFixed ? a.aaSortingFixed.concat(a.aaSorting) : a.aaSorting.slice();
                    for (c = 0; c < o.length; c++)
                        if (d = o[c][0], i = R(a, d), e = a.aoColumns[d].sSortDataType, j.ext.afnSortData[e])
                            if (g = j.ext.afnSortData[e].call(a.oInstance, a, d, i), g.length === l.length) {
                                i = 0;
                                for (e = l.length; i < e; i++)
                                    F(a, i, d, g[i])
                            } else
                                D(a, 0, "Returned data sort array (col " + d + ") is the wrong length");
                    c =
                            0;
                    for (d = a.aiDisplayMaster.length; c < d; c++)
                        m[a.aiDisplayMaster[c]] = c;
                    var r = o.length, s;
                    c = 0;
                    for (d = l.length; c < d; c++)
                        for (i = 0; i < r; i++) {
                            s = q[o[i][0]].aDataSort;
                            g = 0;
                            for (k = s.length; g < k; g++)
                                e = q[s[g]].sType, e = p[(e ? e : "string") + "-pre"], l[c]._aSortData[s[g]] = e ? e(v(a, c, s[g], "sort")) : v(a, c, s[g], "sort")
                        }
                    a.aiDisplayMaster.sort(function(a, b) {
                        var c, d, e, i, f;
                        for (c = 0; c < r; c++) {
                            f = q[o[c][0]].aDataSort;
                            d = 0;
                            for (e = f.length; d < e; d++)
                                if (i = q[f[d]].sType, i = p[(i ? i : "string") + "-" + o[c][1]](l[a]._aSortData[f[d]], l[b]._aSortData[f[d]]), 0 !==
                                        i)
                                    return i
                        }
                        return p["numeric-asc"](m[a], m[b])
                    })
                }
                (b === n || b) && !a.oFeatures.bDeferRender && P(a);
                c = 0;
                for (d = a.aoColumns.length; c < d; c++)
                    e = q[c].sTitle.replace(/<.*?>/g, ""), i = q[c].nTh, i.removeAttribute("aria-sort"), i.removeAttribute("aria-label"), q[c].bSortable ? 0 < o.length && o[0][0] == c ? (i.setAttribute("aria-sort", "asc" == o[0][1] ? "ascending" : "descending"), i.setAttribute("aria-label", e + ("asc" == (q[c].asSorting[o[0][2] + 1] ? q[c].asSorting[o[0][2] + 1] : q[c].asSorting[0]) ? G.sSortAscending : G.sSortDescending))) : i.setAttribute("aria-label",
                            e + ("asc" == q[c].asSorting[0] ? G.sSortAscending : G.sSortDescending)) : i.setAttribute("aria-label", e);
                a.bSorted = !0;
                h(a.oInstance).trigger("sort", a);
                a.oFeatures.bFilter ? K(a, a.oPreviousSearch, 1) : (a.aiDisplay = a.aiDisplayMaster.slice(), a._iDisplayStart = 0, y(a), x(a))
            }
            function ia(a, b, c, d) {
                Ra(b, {}, function(b) {
                    if (!1 !== a.aoColumns[c].bSortable) {
                        var e = function() {
                            var d, e;
                            if (b.shiftKey) {
                                for (var f = !1, h = 0; h < a.aaSorting.length; h++)
                                    if (a.aaSorting[h][0] == c) {
                                        f = !0;
                                        d = a.aaSorting[h][0];
                                        e = a.aaSorting[h][2] + 1;
                                        a.aoColumns[d].asSorting[e] ?
                                                (a.aaSorting[h][1] = a.aoColumns[d].asSorting[e], a.aaSorting[h][2] = e) : a.aaSorting.splice(h, 1);
                                        break
                                    }
                                !1 === f && a.aaSorting.push([c, a.aoColumns[c].asSorting[0], 0])
                            } else
                                1 == a.aaSorting.length && a.aaSorting[0][0] == c ? (d = a.aaSorting[0][0], e = a.aaSorting[0][2] + 1, a.aoColumns[d].asSorting[e] || (e = 0), a.aaSorting[0][1] = a.aoColumns[d].asSorting[e], a.aaSorting[0][2] = e) : (a.aaSorting.splice(0, a.aaSorting.length), a.aaSorting.push([c, a.aoColumns[c].asSorting[0], 0]));
                            O(a)
                        };
                        a.oFeatures.bProcessing ? (E(a, !0), setTimeout(function() {
                            e();
                            a.oFeatures.bServerSide || E(a, !1)
                        }, 0)) : e();
                        "function" == typeof d && d(a)
                    }
                })
            }
            function P(a) {
                var b, c, d, e, f, g = a.aoColumns.length, j = a.oClasses;
                for (b = 0; b < g; b++)
                    a.aoColumns[b].bSortable && h(a.aoColumns[b].nTh).removeClass(j.sSortAsc + " " + j.sSortDesc + " " + a.aoColumns[b].sSortingClass);
                c = null !== a.aaSortingFixed ? a.aaSortingFixed.concat(a.aaSorting) : a.aaSorting.slice();
                for (b = 0; b < a.aoColumns.length; b++)
                    if (a.aoColumns[b].bSortable) {
                        f = a.aoColumns[b].sSortingClass;
                        e = -1;
                        for (d = 0; d < c.length; d++)
                            if (c[d][0] == b) {
                                f = "asc" == c[d][1] ?
                                        j.sSortAsc : j.sSortDesc;
                                e = d;
                                break
                            }
                        h(a.aoColumns[b].nTh).addClass(f);
                        a.bJUI && (f = h("span." + j.sSortIcon, a.aoColumns[b].nTh), f.removeClass(j.sSortJUIAsc + " " + j.sSortJUIDesc + " " + j.sSortJUI + " " + j.sSortJUIAscAllowed + " " + j.sSortJUIDescAllowed), f.addClass(-1 == e ? a.aoColumns[b].sSortingClassJUI : "asc" == c[e][1] ? j.sSortJUIAsc : j.sSortJUIDesc))
                    } else
                        h(a.aoColumns[b].nTh).addClass(a.aoColumns[b].sSortingClass);
                f = j.sSortColumn;
                if (a.oFeatures.bSort && a.oFeatures.bSortClasses) {
                    a = J(a);
                    e = [];
                    for (b = 0; b < g; b++)
                        e.push("");
                    b = 0;
                    for (d = 1; b < c.length; b++)
                        j = parseInt(c[b][0], 10), e[j] = f + d, 3 > d && d++;
                    f = RegExp(f + "[123]");
                    var o;
                    b = 0;
                    for (c = a.length; b < c; b++)
                        j = b % g, d = a[b].className, o = e[j], j = d.replace(f, o), j != d ? a[b].className = h.trim(j) : 0 < o.length && -1 == d.indexOf(o) && (a[b].className = d + " " + o)
                }
            }
            function ra(a) {
                if (a.oFeatures.bStateSave && !a.bDestroying) {
                    var b, c;
                    b = a.oScroll.bInfinite;
                    var d = {iCreate: (new Date).getTime(), iStart: b ? 0 : a._iDisplayStart, iEnd: b ? a._iDisplayLength : a._iDisplayEnd, iLength: a._iDisplayLength, aaSorting: h.extend(!0, [], a.aaSorting),
                        oSearch: h.extend(!0, {}, a.oPreviousSearch), aoSearchCols: h.extend(!0, [], a.aoPreSearchCols), abVisCols: []};
                    b = 0;
                    for (c = a.aoColumns.length; b < c; b++)
                        d.abVisCols.push(a.aoColumns[b].bVisible);
                    A(a, "aoStateSaveParams", "stateSaveParams", [a, d]);
                    a.fnStateSave.call(a.oInstance, a, d)
                }
            }
            function Sa(a, b) {
                if (a.oFeatures.bStateSave) {
                    var c = a.fnStateLoad.call(a.oInstance, a);
                    if (c) {
                        var d = A(a, "aoStateLoadParams", "stateLoadParams", [a, c]);
                        if (-1 === h.inArray(!1, d)) {
                            a.oLoadedState = h.extend(!0, {}, c);
                            a._iDisplayStart = c.iStart;
                            a.iInitDisplayStart =
                                    c.iStart;
                            a._iDisplayEnd = c.iEnd;
                            a._iDisplayLength = c.iLength;
                            a.aaSorting = c.aaSorting.slice();
                            a.saved_aaSorting = c.aaSorting.slice();
                            h.extend(a.oPreviousSearch, c.oSearch);
                            h.extend(!0, a.aoPreSearchCols, c.aoSearchCols);
                            b.saved_aoColumns = [];
                            for (d = 0; d < c.abVisCols.length; d++)
                                b.saved_aoColumns[d] = {}, b.saved_aoColumns[d].bVisible = c.abVisCols[d];
                            A(a, "aoStateLoaded", "stateLoaded", [a, c])
                        }
                    }
                }
            }
            function s(a) {
                for (var b = 0; b < j.settings.length; b++)
                    if (j.settings[b].nTable === a)
                        return j.settings[b];
                return null
            }
            function T(a) {
                for (var b =
                [], a = a.aoData, c = 0, d = a.length; c < d; c++)
                    null !== a[c].nTr && b.push(a[c].nTr);
                return b
            }
            function J(a, b) {
                var c = [], d, e, f, g, h, j;
                e = 0;
                var o = a.aoData.length;
                b !== n && (e = b, o = b + 1);
                for (f = e; f < o; f++)
                    if (j = a.aoData[f], null !== j.nTr) {
                        e = [];
                        for (d = j.nTr.firstChild; d; )
                            g = d.nodeName.toLowerCase(), ("td" == g || "th" == g) && e.push(d), d = d.nextSibling;
                        g = d = 0;
                        for (h = a.aoColumns.length; g < h; g++)
                            a.aoColumns[g].bVisible ? c.push(e[g - d]) : (c.push(j._anHidden[g]), d++)
                    }
                return c
            }
            function D(a, b, c) {
                a = null === a ? "DataTables warning: " + c : "DataTables warning (table id = '" +
                        a.sTableId + "'): " + c;
                if (0 === b)
                    if ("alert" == j.ext.sErrMode)
                        alert(a);
                    else
                        throw Error(a);
                else
                    X.console && console.log && console.log(a)
            }
            function p(a, b, c, d) {
                d === n && (d = c);
                b[c] !== n && (a[d] = b[c])
            }
            function Ta(a, b) {
                var c, d;
                for (d in b)
                    b.hasOwnProperty(d) && (c = b[d], "object" === typeof e[d] && null !== c && !1 === h.isArray(c) ? h.extend(!0, a[d], c) : a[d] = c);
                return a
            }
            function Ra(a, b, c) {
                h(a).bind("click.DT", b, function(b) {
                    a.blur();
                    c(b)
                }).bind("keypress.DT", b, function(a) {
                    13 === a.which && c(a)
                }).bind("selectstart.DT", function() {
                    return!1
                })
            }
            function z(a, b, c, d) {
                c && a[b].push({fn: c, sName: d})
            }
            function A(a, b, c, d) {
                for (var b = a[b], e = [], f = b.length - 1; 0 <= f; f--)
                    e.push(b[f].fn.apply(a.oInstance, d));
                null !== c && h(a.oInstance).trigger(c, d);
                return e
            }
            function Ua(a) {
                var b = h('<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden"><div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;"><div id="DT_BrowserTest" style="width:100%; height:10px;"></div></div></div>')[0];
                l.body.appendChild(b);
                a.oBrowser.bScrollOversize =
                        100 === h("#DT_BrowserTest", b)[0].offsetWidth ? !0 : !1;
                l.body.removeChild(b)
            }
            function Va(a) {
                return function() {
                    var b = [s(this[j.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                    return j.ext.oApi[a].apply(this, b)
                }
            }
            var U = /\[.*?\]$/, Wa = X.JSON ? JSON.stringify : function(a) {
                var b = typeof a;
                if ("object" !== b || null === a)
                    return"string" === b && (a = '"' + a + '"'), a + "";
                var c, d, e = [], f = h.isArray(a);
                for (c in a)
                    d = a[c], b = typeof d, "string" === b ? d = '"' + d + '"' : "object" === b && null !== d && (d = Wa(d)), e.push((f ? "" : '"' + c + '":') + d);
                return(f ?
                        "[" : "{") + e + (f ? "]" : "}")
            };
            this.$ = function(a, b) {
                var c, d, e = [], f;
                d = s(this[j.ext.iApiIndex]);
                var g = d.aoData, o = d.aiDisplay, k = d.aiDisplayMaster;
                b || (b = {});
                b = h.extend({}, {filter: "none", order: "current", page: "all"}, b);
                if ("current" == b.page) {
                    c = d._iDisplayStart;
                    for (d = d.fnDisplayEnd(); c < d; c++)
                        (f = g[o[c]].nTr) && e.push(f)
                } else if ("current" == b.order && "none" == b.filter) {
                    c = 0;
                    for (d = k.length; c < d; c++)
                        (f = g[k[c]].nTr) && e.push(f)
                } else if ("current" == b.order && "applied" == b.filter) {
                    c = 0;
                    for (d = o.length; c < d; c++)
                        (f = g[o[c]].nTr) && e.push(f)
                } else if ("original" ==
                        b.order && "none" == b.filter) {
                    c = 0;
                    for (d = g.length; c < d; c++)
                        (f = g[c].nTr) && e.push(f)
                } else if ("original" == b.order && "applied" == b.filter) {
                    c = 0;
                    for (d = g.length; c < d; c++)
                        f = g[c].nTr, -1 !== h.inArray(c, o) && f && e.push(f)
                } else
                    D(d, 1, "Unknown selection options");
                e = h(e);
                c = e.filter(a);
                e = e.find(a);
                return h([].concat(h.makeArray(c), h.makeArray(e)))
            };
            this._ = function(a, b) {
                var c = [], d, e, f = this.$(a, b);
                d = 0;
                for (e = f.length; d < e; d++)
                    c.push(this.fnGetData(f[d]));
                return c
            };
            this.fnAddData = function(a, b) {
                if (0 === a.length)
                    return[];
                var c = [],
                        d, e = s(this[j.ext.iApiIndex]);
                if ("object" === typeof a[0] && null !== a[0])
                    for (var f = 0; f < a.length; f++) {
                        d = H(e, a[f]);
                        if (-1 == d)
                            return c;
                        c.push(d)
                    }
                else {
                    d = H(e, a);
                    if (-1 == d)
                        return c;
                    c.push(d)
                }
                e.aiDisplay = e.aiDisplayMaster.slice();
                (b === n || b) && aa(e);
                return c
            };
            this.fnAdjustColumnSizing = function(a) {
                var b = s(this[j.ext.iApiIndex]);
                k(b);
                a === n || a ? this.fnDraw(!1) : ("" !== b.oScroll.sX || "" !== b.oScroll.sY) && this.oApi._fnScrollDraw(b)
            };
            this.fnClearTable = function(a) {
                var b = s(this[j.ext.iApiIndex]);
                ga(b);
                (a === n || a) && x(b)
            };
            this.fnClose =
                    function(a) {
                        for (var b = s(this[j.ext.iApiIndex]), c = 0; c < b.aoOpenRows.length; c++)
                            if (b.aoOpenRows[c].nParent == a)
                                return(a = b.aoOpenRows[c].nTr.parentNode) && a.removeChild(b.aoOpenRows[c].nTr), b.aoOpenRows.splice(c, 1), 0;
                        return 1
                    };
            this.fnDeleteRow = function(a, b, c) {
                var d = s(this[j.ext.iApiIndex]), e, f, a = "object" === typeof a ? I(d, a) : a, g = d.aoData.splice(a, 1);
                e = 0;
                for (f = d.aoData.length; e < f; e++)
                    null !== d.aoData[e].nTr && (d.aoData[e].nTr._DT_RowIndex = e);
                e = h.inArray(a, d.aiDisplay);
                d.asDataSearch.splice(e, 1);
                ha(d.aiDisplayMaster,
                        a);
                ha(d.aiDisplay, a);
                "function" === typeof b && b.call(this, d, g);
                d._iDisplayStart >= d.fnRecordsDisplay() && (d._iDisplayStart -= d._iDisplayLength, 0 > d._iDisplayStart && (d._iDisplayStart = 0));
                if (c === n || c)
                    y(d), x(d);
                return g
            };
            this.fnDestroy = function(a) {
                var b = s(this[j.ext.iApiIndex]), c = b.nTableWrapper.parentNode, d = b.nTBody, i, f, a = a === n ? !1 : a;
                b.bDestroying = !0;
                A(b, "aoDestroyCallback", "destroy", [b]);
                if (!a) {
                    i = 0;
                    for (f = b.aoColumns.length; i < f; i++)
                        !1 === b.aoColumns[i].bVisible && this.fnSetColumnVis(i, !0)
                }
                h(b.nTableWrapper).find("*").andSelf().unbind(".DT");
                h("tbody>tr>td." + b.oClasses.sRowEmpty, b.nTable).parent().remove();
                b.nTable != b.nTHead.parentNode && (h(b.nTable).children("thead").remove(), b.nTable.appendChild(b.nTHead));
                b.nTFoot && b.nTable != b.nTFoot.parentNode && (h(b.nTable).children("tfoot").remove(), b.nTable.appendChild(b.nTFoot));
                b.nTable.parentNode.removeChild(b.nTable);
                h(b.nTableWrapper).remove();
                b.aaSorting = [];
                b.aaSortingFixed = [];
                P(b);
                h(T(b)).removeClass(b.asStripeClasses.join(" "));
                h("th, td", b.nTHead).removeClass([b.oClasses.sSortable, b.oClasses.sSortableAsc,
                    b.oClasses.sSortableDesc, b.oClasses.sSortableNone].join(" "));
                b.bJUI && (h("th span." + b.oClasses.sSortIcon + ", td span." + b.oClasses.sSortIcon, b.nTHead).remove(), h("th, td", b.nTHead).each(function() {
                    var a = h("div." + b.oClasses.sSortJUIWrapper, this), c = a.contents();
                    h(this).append(c);
                    a.remove()
                }));
                !a && b.nTableReinsertBefore ? c.insertBefore(b.nTable, b.nTableReinsertBefore) : a || c.appendChild(b.nTable);
                i = 0;
                for (f = b.aoData.length; i < f; i++)
                    null !== b.aoData[i].nTr && d.appendChild(b.aoData[i].nTr);
                !0 === b.oFeatures.bAutoWidth &&
                        (b.nTable.style.width = q(b.sDestroyWidth));
                if (f = b.asDestroyStripes.length) {
                    a = h(d).children("tr");
                    for (i = 0; i < f; i++)
                        a.filter(":nth-child(" + f + "n + " + i + ")").addClass(b.asDestroyStripes[i])
                }
                i = 0;
                for (f = j.settings.length; i < f; i++)
                    j.settings[i] == b && j.settings.splice(i, 1);
                e = b = null
            };
            this.fnDraw = function(a) {
                var b = s(this[j.ext.iApiIndex]);
                !1 === a ? (y(b), x(b)) : aa(b)
            };
            this.fnFilter = function(a, b, c, d, e, f) {
                var g = s(this[j.ext.iApiIndex]);
                if (g.oFeatures.bFilter) {
                    if (c === n || null === c)
                        c = !1;
                    if (d === n || null === d)
                        d = !0;
                    if (e === n || null ===
                            e)
                        e = !0;
                    if (f === n || null === f)
                        f = !0;
                    if (b === n || null === b) {
                        if (K(g, {sSearch: a + "", bRegex: c, bSmart: d, bCaseInsensitive: f}, 1), e && g.aanFeatures.f) {
                            b = g.aanFeatures.f;
                            c = 0;
                            for (d = b.length; c < d; c++)
                                try {
                                    b[c]._DT_Input != l.activeElement && h(b[c]._DT_Input).val(a)
                                } catch (o) {
                                    h(b[c]._DT_Input).val(a)
                                }
                        }
                    } else
                        h.extend(g.aoPreSearchCols[b], {sSearch: a + "", bRegex: c, bSmart: d, bCaseInsensitive: f}), K(g, g.oPreviousSearch, 1)
                }
            };
            this.fnGetData = function(a, b) {
                var c = s(this[j.ext.iApiIndex]);
                if (a !== n) {
                    var d = a;
                    if ("object" === typeof a) {
                        var e = a.nodeName.toLowerCase();
                        "tr" === e ? d = I(c, a) : "td" === e && (d = I(c, a.parentNode), b = fa(c, d, a))
                    }
                    return b !== n ? v(c, d, b, "") : c.aoData[d] !== n ? c.aoData[d]._aData : null
                }
                return Z(c)
            };
            this.fnGetNodes = function(a) {
                var b = s(this[j.ext.iApiIndex]);
                return a !== n ? b.aoData[a] !== n ? b.aoData[a].nTr : null : T(b)
            };
            this.fnGetPosition = function(a) {
                var b = s(this[j.ext.iApiIndex]), c = a.nodeName.toUpperCase();
                return"TR" == c ? I(b, a) : "TD" == c || "TH" == c ? (c = I(b, a.parentNode), a = fa(b, c, a), [c, R(b, a), a]) : null
            };
            this.fnIsOpen = function(a) {
                for (var b = s(this[j.ext.iApiIndex]), c = 0; c <
                        b.aoOpenRows.length; c++)
                    if (b.aoOpenRows[c].nParent == a)
                        return!0;
                return!1
            };
            this.fnOpen = function(a, b, c) {
                var d = s(this[j.ext.iApiIndex]), e = T(d);
                if (-1 !== h.inArray(a, e)) {
                    this.fnClose(a);
                    var e = l.createElement("tr"), f = l.createElement("td");
                    e.appendChild(f);
                    f.className = c;
                    f.colSpan = t(d);
                    "string" === typeof b ? f.innerHTML = b : h(f).html(b);
                    b = h("tr", d.nTBody);
                    -1 != h.inArray(a, b) && h(e).insertAfter(a);
                    d.aoOpenRows.push({nTr: e, nParent: a});
                    return e
                }
            };
            this.fnPageChange = function(a, b) {
                var c = s(this[j.ext.iApiIndex]);
                qa(c, a);
                y(c);
                (b === n || b) && x(c)
            };
            this.fnSetColumnVis = function(a, b, c) {
                var d = s(this[j.ext.iApiIndex]), e, f, g = d.aoColumns, h = d.aoData, o, m;
                if (g[a].bVisible != b) {
                    if (b) {
                        for (e = f = 0; e < a; e++)
                            g[e].bVisible && f++;
                        m = f >= t(d);
                        if (!m)
                            for (e = a; e < g.length; e++)
                                if (g[e].bVisible) {
                                    o = e;
                                    break
                                }
                        e = 0;
                        for (f = h.length; e < f; e++)
                            null !== h[e].nTr && (m ? h[e].nTr.appendChild(h[e]._anHidden[a]) : h[e].nTr.insertBefore(h[e]._anHidden[a], J(d, e)[o]))
                    } else {
                        e = 0;
                        for (f = h.length; e < f; e++)
                            null !== h[e].nTr && (o = J(d, e)[a], h[e]._anHidden[a] = o, o.parentNode.removeChild(o))
                    }
                    g[a].bVisible =
                            b;
                    W(d, d.aoHeader);
                    d.nTFoot && W(d, d.aoFooter);
                    e = 0;
                    for (f = d.aoOpenRows.length; e < f; e++)
                        d.aoOpenRows[e].nTr.colSpan = t(d);
                    if (c === n || c)
                        k(d), x(d);
                    ra(d)
                }
            };
            this.fnSettings = function() {
                return s(this[j.ext.iApiIndex])
            };
            this.fnSort = function(a) {
                var b = s(this[j.ext.iApiIndex]);
                b.aaSorting = a;
                O(b)
            };
            this.fnSortListener = function(a, b, c) {
                ia(s(this[j.ext.iApiIndex]), a, b, c)
            };
            this.fnUpdate = function(a, b, c, d, e) {
                var f = s(this[j.ext.iApiIndex]), b = "object" === typeof b ? I(f, b) : b;
                if (h.isArray(a) && c === n) {
                    f.aoData[b]._aData = a.slice();
                    for (c = 0; c < f.aoColumns.length; c++)
                        this.fnUpdate(v(f, b, c), b, c, !1, !1)
                } else if (h.isPlainObject(a) && c === n) {
                    f.aoData[b]._aData = h.extend(!0, {}, a);
                    for (c = 0; c < f.aoColumns.length; c++)
                        this.fnUpdate(v(f, b, c), b, c, !1, !1)
                } else {
                    F(f, b, c, a);
                    var a = v(f, b, c, "display"), g = f.aoColumns[c];
                    null !== g.fnRender && (a = S(f, b, c), g.bUseRendered && F(f, b, c, a));
                    null !== f.aoData[b].nTr && (J(f, b)[c].innerHTML = a)
                }
                c = h.inArray(b, f.aiDisplay);
                f.asDataSearch[c] = na(f, Y(f, b, "filter", r(f, "bSearchable")));
                (e === n || e) && k(f);
                (d === n || d) && aa(f);
                return 0
            };
            this.fnVersionCheck = j.ext.fnVersionCheck;
            this.oApi = {_fnExternApiFunc: Va, _fnInitialise: ba, _fnInitComplete: $, _fnLanguageCompat: pa, _fnAddColumn: o, _fnColumnOptions: m, _fnAddData: H, _fnCreateTr: ea, _fnGatherData: ua, _fnBuildHead: va, _fnDrawHead: W, _fnDraw: x, _fnReDraw: aa, _fnAjaxUpdate: wa, _fnAjaxParameters: Ea, _fnAjaxUpdateDraw: Fa, _fnServerParams: ka, _fnAddOptionsHtml: xa, _fnFeatureHtmlTable: Ba, _fnScrollDraw: La, _fnAdjustColumnSizing: k, _fnFeatureHtmlFilter: za, _fnFilterComplete: K, _fnFilterCustom: Ia, _fnFilterColumn: Ha,
                _fnFilter: Ga, _fnBuildSearchArray: la, _fnBuildSearchRow: na, _fnFilterCreateSearch: ma, _fnDataToSearch: Ja, _fnSort: O, _fnSortAttachListener: ia, _fnSortingClasses: P, _fnFeatureHtmlPaginate: Da, _fnPageChange: qa, _fnFeatureHtmlInfo: Ca, _fnUpdateInfo: Ka, _fnFeatureHtmlLength: ya, _fnFeatureHtmlProcessing: Aa, _fnProcessingDisplay: E, _fnVisibleToColumnIndex: G, _fnColumnIndexToVisible: R, _fnNodeToDataIndex: I, _fnVisbleColumns: t, _fnCalculateEnd: y, _fnConvertToWidth: Ma, _fnCalculateColumnWidths: da, _fnScrollingWidthAdjust: Oa, _fnGetWidestNode: Na,
                _fnGetMaxLenString: Pa, _fnStringToCss: q, _fnDetectType: B, _fnSettingsFromNode: s, _fnGetDataMaster: Z, _fnGetTrNodes: T, _fnGetTdNodes: J, _fnEscapeRegex: oa, _fnDeleteIndex: ha, _fnReOrderIndex: u, _fnColumnOrdering: M, _fnLog: D, _fnClearTable: ga, _fnSaveState: ra, _fnLoadState: Sa, _fnCreateCookie: function(a, b, c, d, e) {
                    var f = new Date;
                    f.setTime(f.getTime() + 1E3 * c);
                    var c = X.location.pathname.split("/"), a = a + "_" + c.pop().replace(/[\/:]/g, "").toLowerCase(), g;
                    null !== e ? (g = "function" === typeof h.parseJSON ? h.parseJSON(b) : eval("(" + b + ")"),
                            b = e(a, g, f.toGMTString(), c.join("/") + "/")) : b = a + "=" + encodeURIComponent(b) + "; expires=" + f.toGMTString() + "; path=" + c.join("/") + "/";
                    a = l.cookie.split(";");
                    e = b.split(";")[0].length;
                    f = [];
                    if (4096 < e + l.cookie.length + 10) {
                        for (var j = 0, o = a.length; j < o; j++)
                            if (-1 != a[j].indexOf(d)) {
                                var k = a[j].split("=");
                                try {
                                    (g = eval("(" + decodeURIComponent(k[1]) + ")")) && g.iCreate && f.push({name: k[0], time: g.iCreate})
                                } catch (m) {
                                }
                            }
                        for (f.sort(function(a, b) {
                            return b.time - a.time
                        }); 4096 < e + l.cookie.length + 10; ) {
                            if (0 === f.length)
                                return;
                            d = f.pop();
                            l.cookie =
                                    d.name + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + c.join("/") + "/"
                        }
                    }
                    l.cookie = b
                }, _fnReadCookie: function(a) {
                    for (var b = X.location.pathname.split("/"), a = a + "_" + b[b.length - 1].replace(/[\/:]/g, "").toLowerCase() + "=", b = l.cookie.split(";"), c = 0; c < b.length; c++) {
                        for (var d = b[c]; " " == d.charAt(0); )
                            d = d.substring(1, d.length);
                        if (0 === d.indexOf(a))
                            return decodeURIComponent(d.substring(a.length, d.length))
                    }
                    return null
                }, _fnDetectHeader: V, _fnGetUniqueThs: N, _fnScrollBarWidth: Qa, _fnApplyToChildren: C, _fnMap: p, _fnGetRowData: Y,
                _fnGetCellData: v, _fnSetCellData: F, _fnGetObjectDataFn: Q, _fnSetObjectDataFn: L, _fnApplyColumnDefs: ta, _fnBindAction: Ra, _fnExtend: Ta, _fnCallbackReg: z, _fnCallbackFire: A, _fnJsonString: Wa, _fnRender: S, _fnNodeToColumnIndex: fa, _fnInfoMacros: ja, _fnBrowserDetect: Ua, _fnGetColumns: r};
            h.extend(j.ext.oApi, this.oApi);
            for (var sa in j.ext.oApi)
                sa && (this[sa] = Va(sa));
            var ca = this;
            this.each(function() {
                var a = 0, b, c, d;
                c = this.getAttribute("id");
                var i = !1, f = !1;
                if ("table" != this.nodeName.toLowerCase())
                    D(null, 0, "Attempted to initialise DataTables on a node which is not a table: " +
                            this.nodeName);
                else {
                    a = 0;
                    for (b = j.settings.length; a < b; a++) {
                        if (j.settings[a].nTable == this) {
                            if (e === n || e.bRetrieve)
                                return j.settings[a].oInstance;
                            if (e.bDestroy) {
                                j.settings[a].oInstance.fnDestroy();
                                break
                            } else {
                                D(j.settings[a], 0, "Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, pass no arguments or see the docs for bRetrieve and bDestroy");
                                return
                            }
                        }
                        if (j.settings[a].sTableId == this.id) {
                            j.settings.splice(a, 1);
                            break
                        }
                    }
                    if (null === c || "" === c)
                        this.id = c = "DataTables_Table_" + j.ext._oExternConfig.iNextUnique++;
                    var g = h.extend(!0, {}, j.models.oSettings, {nTable: this, oApi: ca.oApi, oInit: e, sDestroyWidth: h(this).width(), sInstance: c, sTableId: c});
                    j.settings.push(g);
                    g.oInstance = 1 === ca.length ? ca : h(this).dataTable();
                    e || (e = {});
                    e.oLanguage && pa(e.oLanguage);
                    e = Ta(h.extend(!0, {}, j.defaults), e);
                    p(g.oFeatures, e, "bPaginate");
                    p(g.oFeatures, e, "bLengthChange");
                    p(g.oFeatures, e, "bFilter");
                    p(g.oFeatures, e, "bSort");
                    p(g.oFeatures, e, "bInfo");
                    p(g.oFeatures, e, "bProcessing");
                    p(g.oFeatures, e, "bAutoWidth");
                    p(g.oFeatures, e, "bSortClasses");
                    p(g.oFeatures, e, "bServerSide");
                    p(g.oFeatures, e, "bDeferRender");
                    p(g.oScroll, e, "sScrollX", "sX");
                    p(g.oScroll, e, "sScrollXInner", "sXInner");
                    p(g.oScroll, e, "sScrollY", "sY");
                    p(g.oScroll, e, "bScrollCollapse", "bCollapse");
                    p(g.oScroll, e, "bScrollInfinite", "bInfinite");
                    p(g.oScroll, e, "iScrollLoadGap", "iLoadGap");
                    p(g.oScroll, e, "bScrollAutoCss", "bAutoCss");
                    p(g, e, "asStripeClasses");
                    p(g, e, "asStripClasses", "asStripeClasses");
                    p(g, e, "fnServerData");
                    p(g, e, "fnFormatNumber");
                    p(g, e, "sServerMethod");
                    p(g, e, "aaSorting");
                    p(g,
                            e, "aaSortingFixed");
                    p(g, e, "aLengthMenu");
                    p(g, e, "sPaginationType");
                    p(g, e, "sAjaxSource");
                    p(g, e, "sAjaxDataProp");
                    p(g, e, "iCookieDuration");
                    p(g, e, "sCookiePrefix");
                    p(g, e, "sDom");
                    p(g, e, "bSortCellsTop");
                    p(g, e, "iTabIndex");
                    p(g, e, "oSearch", "oPreviousSearch");
                    p(g, e, "aoSearchCols", "aoPreSearchCols");
                    p(g, e, "iDisplayLength", "_iDisplayLength");
                    p(g, e, "bJQueryUI", "bJUI");
                    p(g, e, "fnCookieCallback");
                    p(g, e, "fnStateLoad");
                    p(g, e, "fnStateSave");
                    p(g.oLanguage, e, "fnInfoCallback");
                    z(g, "aoDrawCallback", e.fnDrawCallback, "user");
                    z(g, "aoServerParams", e.fnServerParams, "user");
                    z(g, "aoStateSaveParams", e.fnStateSaveParams, "user");
                    z(g, "aoStateLoadParams", e.fnStateLoadParams, "user");
                    z(g, "aoStateLoaded", e.fnStateLoaded, "user");
                    z(g, "aoRowCallback", e.fnRowCallback, "user");
                    z(g, "aoRowCreatedCallback", e.fnCreatedRow, "user");
                    z(g, "aoHeaderCallback", e.fnHeaderCallback, "user");
                    z(g, "aoFooterCallback", e.fnFooterCallback, "user");
                    z(g, "aoInitComplete", e.fnInitComplete, "user");
                    z(g, "aoPreDrawCallback", e.fnPreDrawCallback, "user");
                    g.oFeatures.bServerSide &&
                            g.oFeatures.bSort && g.oFeatures.bSortClasses ? z(g, "aoDrawCallback", P, "server_side_sort_classes") : g.oFeatures.bDeferRender && z(g, "aoDrawCallback", P, "defer_sort_classes");
                    e.bJQueryUI ? (h.extend(g.oClasses, j.ext.oJUIClasses), e.sDom === j.defaults.sDom && "lfrtip" === j.defaults.sDom && (g.sDom = '<"H"lfr>t<"F"ip>')) : h.extend(g.oClasses, j.ext.oStdClasses);
                    h(this).addClass(g.oClasses.sTable);
                    if ("" !== g.oScroll.sX || "" !== g.oScroll.sY)
                        g.oScroll.iBarWidth = Qa();
                    g.iInitDisplayStart === n && (g.iInitDisplayStart = e.iDisplayStart,
                            g._iDisplayStart = e.iDisplayStart);
                    e.bStateSave && (g.oFeatures.bStateSave = !0, Sa(g, e), z(g, "aoDrawCallback", ra, "state_save"));
                    null !== e.iDeferLoading && (g.bDeferLoading = !0, a = h.isArray(e.iDeferLoading), g._iRecordsDisplay = a ? e.iDeferLoading[0] : e.iDeferLoading, g._iRecordsTotal = a ? e.iDeferLoading[1] : e.iDeferLoading);
                    null !== e.aaData && (f = !0);
                    "" !== e.oLanguage.sUrl ? (g.oLanguage.sUrl = e.oLanguage.sUrl, h.getJSON(g.oLanguage.sUrl, null, function(a) {
                        pa(a);
                        h.extend(true, g.oLanguage, e.oLanguage, a);
                        ba(g)
                    }), i = !0) : h.extend(!0,
                            g.oLanguage, e.oLanguage);
                    null === e.asStripeClasses && (g.asStripeClasses = [g.oClasses.sStripeOdd, g.oClasses.sStripeEven]);
                    b = g.asStripeClasses.length;
                    g.asDestroyStripes = [];
                    if (b) {
                        c = !1;
                        d = h(this).children("tbody").children("tr:lt(" + b + ")");
                        for (a = 0; a < b; a++)
                            d.hasClass(g.asStripeClasses[a]) && (c = !0, g.asDestroyStripes.push(g.asStripeClasses[a]));
                        c && d.removeClass(g.asStripeClasses.join(" "))
                    }
                    c = [];
                    a = this.getElementsByTagName("thead");
                    0 !== a.length && (V(g.aoHeader, a[0]), c = N(g));
                    if (null === e.aoColumns) {
                        d = [];
                        a = 0;
                        for (b =
                                c.length; a < b; a++)
                            d.push(null)
                    } else
                        d = e.aoColumns;
                    a = 0;
                    for (b = d.length; a < b; a++)
                        e.saved_aoColumns !== n && e.saved_aoColumns.length == b && (null === d[a] && (d[a] = {}), d[a].bVisible = e.saved_aoColumns[a].bVisible), o(g, c ? c[a] : null);
                    ta(g, e.aoColumnDefs, d, function(a, b) {
                        m(g, a, b)
                    });
                    a = 0;
                    for (b = g.aaSorting.length; a < b; a++) {
                        g.aaSorting[a][0] >= g.aoColumns.length && (g.aaSorting[a][0] = 0);
                        var k = g.aoColumns[g.aaSorting[a][0]];
                        g.aaSorting[a][2] === n && (g.aaSorting[a][2] = 0);
                        e.aaSorting === n && g.saved_aaSorting === n && (g.aaSorting[a][1] =
                                k.asSorting[0]);
                        c = 0;
                        for (d = k.asSorting.length; c < d; c++)
                            if (g.aaSorting[a][1] == k.asSorting[c]) {
                                g.aaSorting[a][2] = c;
                                break
                            }
                    }
                    P(g);
                    Ua(g);
                    a = h(this).children("caption").each(function() {
                        this._captionSide = h(this).css("caption-side")
                    });
                    b = h(this).children("thead");
                    0 === b.length && (b = [l.createElement("thead")], this.appendChild(b[0]));
                    g.nTHead = b[0];
                    b = h(this).children("tbody");
                    0 === b.length && (b = [l.createElement("tbody")], this.appendChild(b[0]));
                    g.nTBody = b[0];
                    g.nTBody.setAttribute("role", "alert");
                    g.nTBody.setAttribute("aria-live",
                            "polite");
                    g.nTBody.setAttribute("aria-relevant", "all");
                    b = h(this).children("tfoot");
                    if (0 === b.length && 0 < a.length && ("" !== g.oScroll.sX || "" !== g.oScroll.sY))
                        b = [l.createElement("tfoot")], this.appendChild(b[0]);
                    0 < b.length && (g.nTFoot = b[0], V(g.aoFooter, g.nTFoot));
                    if (f)
                        for (a = 0; a < e.aaData.length; a++)
                            H(g, e.aaData[a]);
                    else
                        ua(g);
                    g.aiDisplay = g.aiDisplayMaster.slice();
                    g.bInitialised = !0;
                    !1 === i && ba(g)
                }
            });
            ca = null;
            return this
        };
        j.fnVersionCheck = function(e) {
            for (var h = function(e, h) {
                for (; e.length < h; )
                    e += "0";
                return e
            }, m = j.ext.sVersion.split("."),
                    e = e.split("."), k = "", n = "", l = 0, t = e.length; l < t; l++)
                k += h(m[l], 3), n += h(e[l], 3);
            return parseInt(k, 10) >= parseInt(n, 10)
        };
        j.fnIsDataTable = function(e) {
            for (var h = j.settings, m = 0; m < h.length; m++)
                if (h[m].nTable === e || h[m].nScrollHead === e || h[m].nScrollFoot === e)
                    return!0;
            return!1
        };
        j.fnTables = function(e) {
            var o = [];
            jQuery.each(j.settings, function(j, k) {
                (!e || !0 === e && h(k.nTable).is(":visible")) && o.push(k.nTable)
            });
            return o
        };
        j.version = "1.9.4";
        j.settings = [];
        j.models = {};
        j.models.ext = {afnFiltering: [], afnSortData: [], aoFeatures: [],
            aTypes: [], fnVersionCheck: j.fnVersionCheck, iApiIndex: 0, ofnSearch: {}, oApi: {}, oStdClasses: {}, oJUIClasses: {}, oPagination: {}, oSort: {}, sVersion: j.version, sErrMode: "alert", _oExternConfig: {iNextUnique: 0}};
        j.models.oSearch = {bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0};
        j.models.oRow = {nTr: null, _aData: [], _aSortData: [], _anHidden: [], _sRowStripe: ""};
        j.models.oColumn = {aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bUseRendered: null, bVisible: null, _bAutoType: !0, fnCreatedCell: null, fnGetData: null,
            fnRender: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null};
        j.defaults = {aaData: null, aaSorting: [[0, "asc"]], aaSortingFixed: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: !0, bDeferRender: !1, bDestroy: !1, bFilter: !0, bInfo: !0, bJQueryUI: !1, bLengthChange: !0,
            bPaginate: !0, bProcessing: !1, bRetrieve: !1, bScrollAutoCss: !0, bScrollCollapse: !1, bScrollInfinite: !1, bServerSide: !1, bSort: !0, bSortCellsTop: !1, bSortClasses: !0, bStateSave: !1, fnCookieCallback: null, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function(e) {
                if (1E3 > e)
                    return e;
                for (var h = e + "", e = h.split(""), j = "", h = h.length, k = 0; k < h; k++)
                    0 === k % 3 && 0 !== k && (j = this.oLanguage.sInfoThousands + j), j = e[h - k - 1] + j;
                return j
            }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null,
            fnRowCallback: null, fnServerData: function(e, j, m, k) {
                k.jqXHR = h.ajax({url: e, data: j, success: function(e) {
                        e.sError && k.oApi._fnLog(k, 0, e.sError);
                        h(k.oInstance).trigger("xhr", [k, e]);
                        m(e)
                    }, dataType: "json", cache: !1, type: k.sServerMethod, error: function(e, h) {
                        "parsererror" == h && k.oApi._fnLog(k, 0, "DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.")
                    }})
            }, fnServerParams: null, fnStateLoad: function(e) {
                var e = this.oApi._fnReadCookie(e.sCookiePrefix + e.sInstance), j;
                try {
                    j =
                            "function" === typeof h.parseJSON ? h.parseJSON(e) : eval("(" + e + ")")
                } catch (m) {
                    j = null
                }
                return j
            }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSave: function(e, h) {
                this.oApi._fnCreateCookie(e.sCookiePrefix + e.sInstance, this.oApi._fnJsonString(h), e.iCookieDuration, e.sCookiePrefix, e.fnCookieCallback)
            }, fnStateSaveParams: null, iCookieDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iScrollLoadGap: 100, iTabIndex: 0, oLanguage: {oAria: {sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending"},
                oPaginate: {sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous"}, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries", sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sInfoThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "Processing...", sSearch: "Search:", sUrl: "", sZeroRecords: "No matching records found"}, oSearch: h.extend({}, j.models.oSearch), sAjaxDataProp: "aaData",
            sAjaxSource: null, sCookiePrefix: "SpryMedia_DataTables_", sDom: "lfrtip", sPaginationType: "two_button", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET"};
        j.defaults.columns = {aDataSort: null, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bUseRendered: !0, bVisible: !0, fnCreatedCell: null, fnRender: null, iDataSort: -1, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null};
        j.models.oSettings = {oFeatures: {bAutoWidth: null,
                bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortClasses: null, bStateSave: null}, oScroll: {bAutoCss: null, bCollapse: null, bInfinite: null, iBarWidth: 0, iLoadGap: null, sX: null, sXInner: null, sY: null}, oLanguage: {fnInfoCallback: null}, oBrowser: {bScrollOversize: !1}, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aoColumns: [], aoHeader: [], aoFooter: [], asDataSearch: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: null,
            asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: !1, bInitialised: !1, aoOpenRows: [], sDom: null, sPaginationType: "two_button", iCookieDuration: 0, sCookiePrefix: "", fnCookieCallback: null, aoStateSave: [], aoStateLoad: [],
            oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, bAjaxDataGet: !0, jqXHR: null, fnServerData: null, aoServerParams: [], sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iDisplayEnd: 10, _iRecordsTotal: 0, _iRecordsDisplay: 0, bJUI: null, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function() {
                return this.oFeatures.bServerSide ? parseInt(this._iRecordsTotal, 10) : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function() {
                return this.oFeatures.bServerSide ? parseInt(this._iRecordsDisplay, 10) : this.aiDisplay.length
            }, fnDisplayEnd: function() {
                return this.oFeatures.bServerSide ? !1 === this.oFeatures.bPaginate || -1 == this._iDisplayLength ? this._iDisplayStart + this.aiDisplay.length : Math.min(this._iDisplayStart + this._iDisplayLength, this._iRecordsDisplay) : this._iDisplayEnd
            }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null};
        j.ext = h.extend(!0, {}, j.models.ext);
        h.extend(j.ext.oStdClasses,
                {sTable: "dataTable", sPagePrevEnabled: "paginate_enabled_previous", sPagePrevDisabled: "paginate_disabled_previous", sPageNextEnabled: "paginate_enabled_next", sPageNextDisabled: "paginate_disabled_next", sPageJUINext: "", sPageJUIPrev: "", sPageButton: "paginate_button", sPageButtonActive: "paginate_active", sPageButtonStaticDisabled: "paginate_button paginate_button_disabled", sPageFirst: "first", sPagePrevious: "previous", sPageNext: "next", sPageLast: "last", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty",
                    sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_asc_disabled", sSortableDesc: "sorting_desc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "",
                    sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner", sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sFooterTH: "", sJUIHeader: "", sJUIFooter: ""});
        h.extend(j.ext.oJUIClasses, j.ext.oStdClasses, {sPagePrevEnabled: "fg-button ui-button ui-state-default ui-corner-left", sPagePrevDisabled: "fg-button ui-button ui-state-default ui-corner-left ui-state-disabled", sPageNextEnabled: "fg-button ui-button ui-state-default ui-corner-right",
            sPageNextDisabled: "fg-button ui-button ui-state-default ui-corner-right ui-state-disabled", sPageJUINext: "ui-icon ui-icon-circle-arrow-e", sPageJUIPrev: "ui-icon ui-icon-circle-arrow-w", sPageButton: "fg-button ui-button ui-state-default", sPageButtonActive: "fg-button ui-button ui-state-default ui-state-disabled", sPageButtonStaticDisabled: "fg-button ui-button ui-state-default ui-state-disabled", sPageFirst: "first ui-corner-tl ui-corner-bl", sPageLast: "last ui-corner-tr ui-corner-br", sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: "ui-state-default", sSortDesc: "ui-state-default", sSortable: "ui-state-default", sSortableAsc: "ui-state-default", sSortableDesc: "ui-state-default", sSortableNone: "ui-state-default", sSortJUIAsc: "css_right ui-icon ui-icon-triangle-1-n", sSortJUIDesc: "css_right ui-icon ui-icon-triangle-1-s", sSortJUI: "css_right ui-icon ui-icon-carat-2-n-s", sSortJUIAscAllowed: "css_right ui-icon ui-icon-carat-1-n", sSortJUIDescAllowed: "css_right ui-icon ui-icon-carat-1-s", sSortJUIWrapper: "DataTables_sort_wrapper", sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead ui-state-default", sScrollFoot: "dataTables_scrollFoot ui-state-default", sFooterTH: "ui-state-default", sJUIHeader: "fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix", sJUIFooter: "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"});
        h.extend(j.ext.oPagination, {two_button: {fnInit: function(e, j, m) {
                    var k = e.oLanguage.oPaginate, n = function(h) {
                        e.oApi._fnPageChange(e, h.data.action) && m(e)
                    }, k = !e.bJUI ? '<a class="' +
                            e.oClasses.sPagePrevDisabled + '" tabindex="' + e.iTabIndex + '" role="button">' + k.sPrevious + '</a><a class="' + e.oClasses.sPageNextDisabled + '" tabindex="' + e.iTabIndex + '" role="button">' + k.sNext + "</a>" : '<a class="' + e.oClasses.sPagePrevDisabled + '" tabindex="' + e.iTabIndex + '" role="button"><span class="' + e.oClasses.sPageJUIPrev + '"></span></a><a class="' + e.oClasses.sPageNextDisabled + '" tabindex="' + e.iTabIndex + '" role="button"><span class="' + e.oClasses.sPageJUINext + '"></span></a>';
                    h(j).append(k);
                    var l = h("a", j),
                            k = l[0], l = l[1];
                    e.oApi._fnBindAction(k, {action: "previous"}, n);
                    e.oApi._fnBindAction(l, {action: "next"}, n);
                    e.aanFeatures.p || (j.id = e.sTableId + "_paginate", k.id = e.sTableId + "_previous", l.id = e.sTableId + "_next", k.setAttribute("aria-controls", e.sTableId), l.setAttribute("aria-controls", e.sTableId))
                }, fnUpdate: function(e) {
                    if (e.aanFeatures.p)
                        for (var h = e.oClasses, j = e.aanFeatures.p, k, l = 0, n = j.length; l < n; l++)
                            if (k = j[l].firstChild)
                                k.className = 0 === e._iDisplayStart ? h.sPagePrevDisabled : h.sPagePrevEnabled, k = k.nextSibling,
                                        k.className = e.fnDisplayEnd() == e.fnRecordsDisplay() ? h.sPageNextDisabled : h.sPageNextEnabled
                }}, iFullNumbersShowPages: 5, full_numbers: {fnInit: function(e, j, m) {
                    var k = e.oLanguage.oPaginate, l = e.oClasses, n = function(h) {
                        e.oApi._fnPageChange(e, h.data.action) && m(e)
                    };
                    h(j).append('<a  tabindex="' + e.iTabIndex + '" class="' + l.sPageButton + " " + l.sPageFirst + '">' + k.sFirst + '</a><a  tabindex="' + e.iTabIndex + '" class="' + l.sPageButton + " " + l.sPagePrevious + '">' + k.sPrevious + '</a><span></span><a tabindex="' + e.iTabIndex + '" class="' +
                            l.sPageButton + " " + l.sPageNext + '">' + k.sNext + '</a><a tabindex="' + e.iTabIndex + '" class="' + l.sPageButton + " " + l.sPageLast + '">' + k.sLast + "</a>");
                    var t = h("a", j), k = t[0], l = t[1], r = t[2], t = t[3];
                    e.oApi._fnBindAction(k, {action: "first"}, n);
                    e.oApi._fnBindAction(l, {action: "previous"}, n);
                    e.oApi._fnBindAction(r, {action: "next"}, n);
                    e.oApi._fnBindAction(t, {action: "last"}, n);
                    e.aanFeatures.p || (j.id = e.sTableId + "_paginate", k.id = e.sTableId + "_first", l.id = e.sTableId + "_previous", r.id = e.sTableId + "_next", t.id = e.sTableId + "_last")
                },
                fnUpdate: function(e, o) {
                    if (e.aanFeatures.p) {
                        var m = j.ext.oPagination.iFullNumbersShowPages, k = Math.floor(m / 2), l = Math.ceil(e.fnRecordsDisplay() / e._iDisplayLength), n = Math.ceil(e._iDisplayStart / e._iDisplayLength) + 1, t = "", r, B = e.oClasses, u, M = e.aanFeatures.p, L = function(h) {
                            e.oApi._fnBindAction(this, {page: h + r - 1}, function(h) {
                                e.oApi._fnPageChange(e, h.data.page);
                                o(e);
                                h.preventDefault()
                            })
                        };
                        -1 === e._iDisplayLength ? n = k = r = 1 : l < m ? (r = 1, k = l) : n <= k ? (r = 1, k = m) : n >= l - k ? (r = l - m + 1, k = l) : (r = n - Math.ceil(m / 2) + 1, k = r + m - 1);
                        for (m = r; m <= k; m++)
                            t +=
                                    n !== m ? '<a tabindex="' + e.iTabIndex + '" class="' + B.sPageButton + '">' + e.fnFormatNumber(m) + "</a>" : '<a tabindex="' + e.iTabIndex + '" class="' + B.sPageButtonActive + '">' + e.fnFormatNumber(m) + "</a>";
                        m = 0;
                        for (k = M.length; m < k; m++)
                            u = M[m], u.hasChildNodes() && (h("span:eq(0)", u).html(t).children("a").each(L), u = u.getElementsByTagName("a"), u = [u[0], u[1], u[u.length - 2], u[u.length - 1]], h(u).removeClass(B.sPageButton + " " + B.sPageButtonActive + " " + B.sPageButtonStaticDisabled), h([u[0], u[1]]).addClass(1 == n ? B.sPageButtonStaticDisabled :
                                    B.sPageButton), h([u[2], u[3]]).addClass(0 === l || n === l || -1 === e._iDisplayLength ? B.sPageButtonStaticDisabled : B.sPageButton))
                    }
                }}});
        h.extend(j.ext.oSort, {"string-pre": function(e) {
                "string" != typeof e && (e = null !== e && e.toString ? e.toString() : "");
                return e.toLowerCase()
            }, "string-asc": function(e, h) {
                return e < h ? -1 : e > h ? 1 : 0
            }, "string-desc": function(e, h) {
                return e < h ? 1 : e > h ? -1 : 0
            }, "html-pre": function(e) {
                return e.replace(/<.*?>/g, "").toLowerCase()
            }, "html-asc": function(e, h) {
                return e < h ? -1 : e > h ? 1 : 0
            }, "html-desc": function(e, h) {
                return e <
                        h ? 1 : e > h ? -1 : 0
            }, "date-pre": function(e) {
                e = Date.parse(e);
                if (isNaN(e) || "" === e)
                    e = Date.parse("01/01/1970 00:00:00");
                return e
            }, "date-asc": function(e, h) {
                return e - h
            }, "date-desc": function(e, h) {
                return h - e
            }, "numeric-pre": function(e) {
                return"-" == e || "" === e ? 0 : 1 * e
            }, "numeric-asc": function(e, h) {
                return e - h
            }, "numeric-desc": function(e, h) {
                return h - e
            }});
        h.extend(j.ext.aTypes, [function(e) {
                if ("number" === typeof e)
                    return"numeric";
                if ("string" !== typeof e)
                    return null;
                var h, j = !1;
                h = e.charAt(0);
                if (-1 == "0123456789-".indexOf(h))
                    return null;
                for (var k = 1; k < e.length; k++) {
                    h = e.charAt(k);
                    if (-1 == "0123456789.".indexOf(h))
                        return null;
                    if ("." == h) {
                        if (j)
                            return null;
                        j = !0
                    }
                }
                return"numeric"
            }, function(e) {
                var h = Date.parse(e);
                return null !== h && !isNaN(h) || "string" === typeof e && 0 === e.length ? "date" : null
            }, function(e) {
                return"string" === typeof e && -1 != e.indexOf("<") && -1 != e.indexOf(">") ? "html" : null
            }]);
        h.fn.DataTable = j;
        h.fn.dataTable = j;
        h.fn.dataTableSettings = j.settings;
        h.fn.dataTableExt = j.ext
    };
    "function" === typeof define && define.amd ? define(["jquery"], L) : jQuery && !jQuery.fn.dataTable &&
            L(jQuery)
})(window, document);

/*!
 * FullCalendar v1.6.1
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function(t, e) {
    function n(e) {
        t.extend(!0, ye, e)
    }
    function r(n, r, l) {
        function u(t) {
            G ? (S(), C(), R(), b(t)) : f()
        }
        function f() {
            K = r.theme ? "ui" : "fc", n.addClass("fc"), r.isRTL ? n.addClass("fc-rtl") : n.addClass("fc-ltr"), r.theme && n.addClass("ui-widget"), G = t("<div class='fc-content' style='position:relative'/>").prependTo(n), $ = new a(Z, r), Q = $.render(), Q && n.prepend(Q), y(r.defaultView), t(window).resize(x), m() || v()
        }
        function v() {
            setTimeout(function() {
                !te.start && m() && b()
            }, 0)
        }
        function h() {
            t(window).unbind("resize", x), $.destroy(), G.remove(), n.removeClass("fc fc-rtl ui-widget")
        }
        function g() {
            return 0 !== se.offsetWidth
        }
        function m() {
            return 0 !== t("body")[0].offsetWidth
        }
        function y(e) {
            if (!te || e != te.name) {
                ue++, W();
                var n, r = te;
                r ? ((r.beforeHide || I)(), q(G, G.height()), r.element.hide()) : q(G, 1), G.css("overflow", "hidden"), te = ce[e], te ? te.element.show() : te = ce[e] = new De[e](n = re = t("<div class='fc-view fc-view-" + e + "' style='position:absolute'/>").appendTo(G), Z), r && $.deactivateButton(r.name), $.activateButton(e), b(), G.css("overflow", ""), r && q(G, 1), n || (te.afterShow || I)(), ue--
            }
        }
        function b(t) {
            if (g()) {
                ue++, W(), ne === e && S();
                var r = !1;
                !te.start || t || te.start > fe || fe >= te.end ? (te.render(fe, t || 0), E(!0), r = !0) : te.sizeDirty ? (te.clearEvents(), E(), r = !0) : te.eventsDirty && (te.clearEvents(), r = !0), te.sizeDirty = !1, te.eventsDirty = !1, T(r), ee = n.outerWidth(), $.updateTitle(te.title);
                var a = new Date;
                a >= te.start && te.end > a ? $.disableButton("today") : $.enableButton("today"), ue--, te.trigger("viewDisplay", se)
            }
        }
        function M() {
            C(), g() && (S(), E(), W(), te.clearEvents(), te.renderEvents(de), te.sizeDirty = !1)
        }
        function C() {
            t.each(ce, function(t, e) {
                e.sizeDirty = !0
            })
        }
        function S() {
            ne = r.contentHeight ? r.contentHeight : r.height ? r.height - (Q ? Q.height() : 0) - L(G) : Math.round(G.width() / Math.max(r.aspectRatio, .5))
        }
        function E(t) {
            ue++, te.setHeight(ne, t), re && (re.css("position", "relative"), re = null), te.setWidth(G.width(), t), ue--
        }
        function x() {
            if (!ue)
                if (te.start) {
                    var t = ++le;
                    setTimeout(function() {
                        t == le && !ue && g() && ee != (ee = n.outerWidth()) && (ue++, M(), te.trigger("windowResize", se), ue--)
                    }, 200)
                } else
                    v()
        }
        function T(t) {
            !r.lazyFetching || oe(te.visStart, te.visEnd) ? k() : t && F()
        }
        function k() {
            ie(te.visStart, te.visEnd)
        }
        function H(t) {
            de = t, F()
        }
        function z(t) {
            F(t)
        }
        function F(t) {
            R(), g() && (te.clearEvents(), te.renderEvents(de, t), te.eventsDirty = !1)
        }
        function R() {
            t.each(ce, function(t, e) {
                e.eventsDirty = !0
            })
        }
        function N(t, n, r) {
            te.select(t, n, r === e ? !0 : r)
        }
        function W() {
            te && te.unselect()
        }
        function A() {
            b(-1)
        }
        function _() {
            b(1)
        }
        function O() {
            i(fe, -1), b()
        }
        function B() {
            i(fe, 1), b()
        }
        function Y() {
            fe = new Date, b()
        }
        function j(t, e, n) {
            t instanceof Date ? fe = d(t) : p(fe, t, e, n), b()
        }
        function P(t, n, r) {
            t !== e && i(fe, t), n !== e && s(fe, n), r !== e && c(fe, r), b()
        }
        function J() {
            return d(fe)
        }
        function V() {
            return te
        }
        function X(t, n) {
            return n === e ? r[t] : (("height" == t || "contentHeight" == t || "aspectRatio" == t) && (r[t] = n, M()), e)
        }
        function U(t, n) {
            return r[t] ? r[t].apply(n || se, Array.prototype.slice.call(arguments, 2)) : e
        }
        var Z = this;
        Z.options = r, Z.render = u, Z.destroy = h, Z.refetchEvents = k, Z.reportEvents = H, Z.reportEventChange = z, Z.rerenderEvents = F, Z.changeView = y, Z.select = N, Z.unselect = W, Z.prev = A, Z.next = _, Z.prevYear = O, Z.nextYear = B, Z.today = Y, Z.gotoDate = j, Z.incrementDate = P, Z.formatDate = function(t, e) {
            return w(t, e, r)
        }, Z.formatDates = function(t, e, n) {
            return D(t, e, n, r)
        }, Z.getDate = J, Z.getView = V, Z.option = X, Z.trigger = U, o.call(Z, r, l);
        var $, Q, G, K, te, ee, ne, re, ae, oe = Z.isFetchNeeded, ie = Z.fetchEvents, se = n[0], ce = {}, le = 0, ue = 0, fe = new Date, de = [];
        p(fe, r.year, r.month, r.date), r.droppable && t(document).bind("dragstart", function(e, n) {
            var a = e.target, o = t(a);
            if (!o.parents(".fc").length) {
                var i = r.dropAccept;
                (t.isFunction(i) ? i.call(a, o) : o.is(i)) && (ae = a, te.dragStart(ae, e, n))
            }
        }).bind("dragstop", function(t, e) {
            ae && (te.dragStop(ae, t, e), ae = null)
        })
    }
    function a(n, r) {
        function a() {
            v = r.theme ? "ui" : "fc";
            var n = r.header;
            return n ? h = t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(i("left")).append(i("center")).append(i("right"))) : e
        }
        function o() {
            h.remove()
        }
        function i(e) {
            var a = t("<td class='fc-header-" + e + "'/>"), o = r.header[e];
            return o && t.each(o.split(" "), function(e) {
                e > 0 && a.append("<span class='fc-header-space'/>");
                var o;
                t.each(this.split(","), function(e, i) {
                    if ("title" == i)
                        a.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"), o && o.addClass(v + "-corner-right"), o = null;
                    else {
                        var s;
                        if (n[i] ? s = n[i] : De[i] && (s = function() {
                            u.removeClass(v + "-state-hover"), n.changeView(i)
                        }), s) {
                            var c = r.theme ? J(r.buttonIcons, i) : null, l = J(r.buttonText, i), u = t("<span class='fc-button fc-button-" + i + " " + v + "-state-default'>" + (c ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" + c + "'/>" + "</span>" : l) + "</span>").click(function() {
                                u.hasClass(v + "-state-disabled") || s()
                            }).mousedown(function() {
                                u.not("." + v + "-state-active").not("." + v + "-state-disabled").addClass(v + "-state-down")
                            }).mouseup(function() {
                                u.removeClass(v + "-state-down")
                            }).hover(function() {
                                u.not("." + v + "-state-active").not("." + v + "-state-disabled").addClass(v + "-state-hover")
                            }, function() {
                                u.removeClass(v + "-state-hover").removeClass(v + "-state-down")
                            }).appendTo(a);
                            U(u), o || u.addClass(v + "-corner-left"), o = u
                        }
                    }
                }), o && o.addClass(v + "-corner-right")
            }), a
        }
        function s(t) {
            h.find("h2").html(t)
        }
        function c(t) {
            h.find("span.fc-button-" + t).addClass(v + "-state-active")
        }
        function l(t) {
            h.find("span.fc-button-" + t).removeClass(v + "-state-active")
        }
        function u(t) {
            h.find("span.fc-button-" + t).addClass(v + "-state-disabled")
        }
        function f(t) {
            h.find("span.fc-button-" + t).removeClass(v + "-state-disabled")
        }
        var d = this;
        d.render = a, d.destroy = o, d.updateTitle = s, d.activateButton = c, d.deactivateButton = l, d.disableButton = u, d.enableButton = f;
        var v, h = t([])
    }
    function o(n, r) {
        function a(t, e) {
            return!S || S > t || e > E
        }
        function o(t, e) {
            S = t, E = e, W = [];
            var n = ++F, r = z.length;
            R = r;
            for (var a = 0; r > a; a++)
                i(z[a], n)
        }
        function i(e, r) {
            s(e, function(a) {
                if (r == F) {
                    if (a) {
                        n.eventDataTransform && (a = t.map(a, n.eventDataTransform)), e.eventDataTransform && (a = t.map(a, e.eventDataTransform));
                        for (var o = 0; a.length > o; o++)
                            a[o].source = e, b(a[o]);
                        W = W.concat(a)
                    }
                    R--, R || k(W)
                }
            })
        }
        function s(r, a) {
            var o, i, c = we.sourceFetchers;
            for (o = 0; c.length > o; o++) {
                if (i = c[o](r, S, E, a), i === !0)
                    return;
                if ("object" == typeof i)
                    return s(i, a), e
            }
            var l = r.events;
            if (l)
                t.isFunction(l) ? (p(), l(d(S), d(E), function(t) {
                    a(t), y()
                })) : t.isArray(l) ? a(l) : a();
            else {
                var u = r.url;
                if (u) {
                    var f = r.success, v = r.error, h = r.complete, g = t.extend({}, r.data || {}), m = K(r.startParam, n.startParam), b = K(r.endParam, n.endParam);
                    m && (g[m] = Math.round(+S / 1e3)), b && (g[b] = Math.round(+E / 1e3)), p(), t.ajax(t.extend({}, Me, r, {data: g, success: function(e) {
                            e = e || [];
                            var n = G(f, this, arguments);
                            t.isArray(n) && (e = n), a(e)
                        }, error: function() {
                            G(v, this, arguments), a()
                        }, complete: function() {
                            G(h, this, arguments), y()
                        }}))
                } else
                    a()
            }
        }
        function c(t) {
            t = l(t), t && (R++, i(t, F))
        }
        function l(n) {
            return t.isFunction(n) || t.isArray(n) ? n = {events: n} : "string" == typeof n && (n = {url: n}), "object" == typeof n ? (w(n), z.push(n), n) : e
        }
        function u(e) {
            z = t.grep(z, function(t) {
                return!D(t, e)
            }), W = t.grep(W, function(t) {
                return!D(t.source, e)
            }), k(W)
        }
        function f(t) {
            var e, n, r = W.length, a = T().defaultEventEnd, o = t.start - t._start, i = t.end ? t.end - (t._end || a(t)) : 0;
            for (e = 0; r > e; e++)
                n = W[e], n._id == t._id && n != t && (n.start = new Date(+n.start + o), n.end = t.end ? n.end ? new Date(+n.end + i) : new Date(+a(n) + i) : null, n.title = t.title, n.url = t.url, n.allDay = t.allDay, n.className = t.className, n.editable = t.editable, n.color = t.color, n.backgroudColor = t.backgroudColor, n.borderColor = t.borderColor, n.textColor = t.textColor, b(n));
            b(t), k(W)
        }
        function v(t, e) {
            b(t), t.source || (e && (H.events.push(t), t.source = H), W.push(t)), k(W)
        }
        function h(e) {
            if (e) {
                if (!t.isFunction(e)) {
                    var n = e + "";
                    e = function(t) {
                        return t._id == n
                    }
                }
                W = t.grep(W, e, !0);
                for (var r = 0; z.length > r; r++)
                    t.isArray(z[r].events) && (z[r].events = t.grep(z[r].events, e, !0))
            } else {
                W = [];
                for (var r = 0; z.length > r; r++)
                    t.isArray(z[r].events) && (z[r].events = [])
            }
            k(W)
        }
        function g(e) {
            return t.isFunction(e) ? t.grep(W, e) : e ? (e += "", t.grep(W, function(t) {
                return t._id == e
            })) : W
        }
        function p() {
            N++ || x("loading", null, !0)
        }
        function y() {
            --N || x("loading", null, !1)
        }
        function b(t) {
            var r = t.source || {}, a = K(r.ignoreTimezone, n.ignoreTimezone);
            t._id = t._id || (t.id === e ? "_fc" + Ce++ : t.id + ""), t.date && (t.start || (t.start = t.date), delete t.date), t._start = d(t.start = m(t.start, a)), t.end = m(t.end, a), t.end && t.end <= t.start && (t.end = null), t._end = t.end ? d(t.end) : null, t.allDay === e && (t.allDay = K(r.allDayDefault, n.allDayDefault)), t.className ? "string" == typeof t.className && (t.className = t.className.split(/\s+/)) : t.className = []
        }
        function w(t) {
            t.className ? "string" == typeof t.className && (t.className = t.className.split(/\s+/)) : t.className = [];
            for (var e = we.sourceNormalizers, n = 0; e.length > n; n++)
                e[n](t)
        }
        function D(t, e) {
            return t && e && M(t) == M(e)
        }
        function M(t) {
            return("object" == typeof t ? t.events || t.url : "") || t
        }
        var C = this;
        C.isFetchNeeded = a, C.fetchEvents = o, C.addEventSource = c, C.removeEventSource = u, C.updateEvent = f, C.renderEvent = v, C.removeEvents = h, C.clientEvents = g, C.normalizeEvent = b;
        for (var S, E, x = C.trigger, T = C.getView, k = C.reportEvents, H = {events: []}, z = [H], F = 0, R = 0, N = 0, W = [], A = 0; r.length > A; A++)
            l(r[A])
    }
    function i(t, e, n) {
        return t.setFullYear(t.getFullYear() + e), n || f(t), t
    }
    function s(t, e, n) {
        if (+t) {
            var r = t.getMonth() + e, a = d(t);
            for (a.setDate(1), a.setMonth(r), t.setMonth(r), n || f(t); t.getMonth() != a.getMonth(); )
                t.setDate(t.getDate() + (a > t ? 1 : -1))
        }
        return t
    }
    function c(t, e, n) {
        if (+t) {
            var r = t.getDate() + e, a = d(t);
            a.setHours(9), a.setDate(r), t.setDate(r), n || f(t), l(t, a)
        }
        return t
    }
    function l(t, e) {
        if (+t)
            for (; t.getDate() != e.getDate(); )
                t.setTime(+t + (e > t ? 1 : -1) * xe)
    }
    function u(t, e) {
        return t.setMinutes(t.getMinutes() + e), t
    }
    function f(t) {
        return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
    }
    function d(t, e) {
        return e ? f(new Date(+t)) : new Date(+t)
    }
    function v() {
        var t, e = 0;
        do
            t = new Date(1970, e++, 1);
        while (t.getHours());
        return t
    }
    function h(t, e, n) {
        for (e = e || 1; !t.getDay() || n && 1 == t.getDay() || !n && 6 == t.getDay(); )
            c(t, e);
        return t
    }
    function g(t, e) {
        return Math.round((d(t, !0) - d(e, !0)) / Ee)
    }
    function p(t, n, r, a) {
        n !== e && n != t.getFullYear() && (t.setDate(1), t.setMonth(0), t.setFullYear(n)), r !== e && r != t.getMonth() && (t.setDate(1), t.setMonth(r)), a !== e && t.setDate(a)
    }
    function m(t, n) {
        return"object" == typeof t ? t : "number" == typeof t ? new Date(1e3 * t) : "string" == typeof t ? t.match(/^\d+(\.\d+)?$/) ? new Date(1e3 * parseFloat(t)) : (n === e && (n = !0), y(t, n) || (t ? new Date(t) : null)) : null
    }
    function y(t, e) {
        var n = t.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
        if (!n)
            return null;
        var r = new Date(n[1], 0, 1);
        if (e || !n[13]) {
            var a = new Date(n[1], 0, 1, 9, 0);
            n[3] && (r.setMonth(n[3] - 1), a.setMonth(n[3] - 1)), n[5] && (r.setDate(n[5]), a.setDate(n[5])), l(r, a), n[7] && r.setHours(n[7]), n[8] && r.setMinutes(n[8]), n[10] && r.setSeconds(n[10]), n[12] && r.setMilliseconds(1e3 * Number("0." + n[12])), l(r, a)
        } else if (r.setUTCFullYear(n[1], n[3] ? n[3] - 1 : 0, n[5] || 1), r.setUTCHours(n[7] || 0, n[8] || 0, n[10] || 0, n[12] ? 1e3 * Number("0." + n[12]) : 0), n[14]) {
            var o = 60 * Number(n[16]) + (n[18] ? Number(n[18]) : 0);
            o *= "-" == n[15] ? 1 : -1, r = new Date(+r + 1e3 * 60 * o)
        }
        return r
    }
    function b(t) {
        if ("number" == typeof t)
            return 60 * t;
        if ("object" == typeof t)
            return 60 * t.getHours() + t.getMinutes();
        var e = t.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
        if (e) {
            var n = parseInt(e[1], 10);
            return e[3] && (n %= 12, "p" == e[3].toLowerCase().charAt(0) && (n += 12)), 60 * n + (e[2] ? parseInt(e[2], 10) : 0)
        }
    }
    function w(t, e, n) {
        return D(t, null, e, n)
    }
    function D(t, e, n, r) {
        r = r || ye;
        var a, o, i, s, c = t, l = e, u = n.length, f = "";
        for (a = 0; u > a; a++)
            if (o = n.charAt(a), "'" == o) {
                for (i = a + 1; u > i; i++)
                    if ("'" == n.charAt(i)) {
                        c && (f += i == a + 1 ? "'" : n.substring(a + 1, i), a = i);
                        break
                    }
            } else if ("(" == o) {
                for (i = a + 1; u > i; i++)
                    if (")" == n.charAt(i)) {
                        var d = w(c, n.substring(a + 1, i), r);
                        parseInt(d.replace(/\D/, ""), 10) && (f += d), a = i;
                        break
                    }
            } else if ("[" == o) {
                for (i = a + 1; u > i; i++)
                    if ("]" == n.charAt(i)) {
                        var v = n.substring(a + 1, i), d = w(c, v, r);
                        d != w(l, v, r) && (f += d), a = i;
                        break
                    }
            } else if ("{" == o)
                c = e, l = t;
            else if ("}" == o)
                c = t, l = e;
            else {
                for (i = u; i > a; i--)
                    if (s = ke[n.substring(a, i)]) {
                        c && (f += s(c, r)), a = i - 1;
                        break
                    }
                i == a && c && (f += o)
            }
        return f
    }
    function M(t) {
        var e, n = new Date(t.getTime());
        return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), e = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((e - n) / 864e5) / 7) + 1
    }
    function C(t) {
        return t.end ? S(t.end, t.allDay) : c(d(t.start), 1)
    }
    function S(t, e) {
        return t = d(t), e || t.getHours() || t.getMinutes() ? c(t, 1) : f(t)
    }
    function E(t, e) {
        return 100 * (e.msLength - t.msLength) + (t.event.start - e.event.start)
    }
    function x(t, e) {
        return t.end > e.start && t.start < e.end
    }
    function T(t, e, n, r) {
        var a, o, i, s, c, l, u, f, v = [], h = t.length;
        for (a = 0; h > a; a++)
            o = t[a], i = o.start, s = e[a], s > n && r > i && (n > i ? (c = d(n), u = !1) : (c = i, u = !0), s > r ? (l = d(r), f = !1) : (l = s, f = !0), v.push({event: o, start: c, end: l, isStart: u, isEnd: f, msLength: l - c}));
        return v.sort(E)
    }
    function k(t) {
        var e, n, r, a, o, i = [], s = t.length;
        for (e = 0; s > e; e++) {
            for (n = t[e], r = 0; ; ) {
                if (a = !1, i[r])
                    for (o = 0; i[r].length > o; o++)
                        if (x(i[r][o], n)) {
                            a = !0;
                            break
                        }
                if (!a)
                    break;
                r++
            }
            i[r] ? i[r].push(n) : i[r] = [n]
        }
        return i
    }
    function H(n, r, a) {
        n.unbind("mouseover").mouseover(function(n) {
            for (var o, i, s, c = n.target; c != this; )
                o = c, c = c.parentNode;
            (i = o._fci) !== e && (o._fci = e, s = r[i], a(s.event, s.element, s), t(n.target).trigger(n)), n.stopPropagation()
        })
    }
    function z(e, n, r) {
        for (var a, o = 0; e.length > o; o++)
            a = t(e[o]), a.width(Math.max(0, n - R(a, r)))
    }
    function F(e, n, r) {
        for (var a, o = 0; e.length > o; o++)
            a = t(e[o]), a.height(Math.max(0, n - L(a, r)))
    }
    function R(t, e) {
        return N(t) + A(t) + (e ? W(t) : 0)
    }
    function N(e) {
        return(parseFloat(t.css(e[0], "paddingLeft", !0)) || 0) + (parseFloat(t.css(e[0], "paddingRight", !0)) || 0)
    }
    function W(e) {
        return(parseFloat(t.css(e[0], "marginLeft", !0)) || 0) + (parseFloat(t.css(e[0], "marginRight", !0)) || 0)
    }
    function A(e) {
        return(parseFloat(t.css(e[0], "borderLeftWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderRightWidth", !0)) || 0)
    }
    function L(t, e) {
        return _(t) + B(t) + (e ? O(t) : 0)
    }
    function _(e) {
        return(parseFloat(t.css(e[0], "paddingTop", !0)) || 0) + (parseFloat(t.css(e[0], "paddingBottom", !0)) || 0)
    }
    function O(e) {
        return(parseFloat(t.css(e[0], "marginTop", !0)) || 0) + (parseFloat(t.css(e[0], "marginBottom", !0)) || 0)
    }
    function B(e) {
        return(parseFloat(t.css(e[0], "borderTopWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderBottomWidth", !0)) || 0)
    }
    function q(t, e) {
        e = "number" == typeof e ? e + "px" : e, t.each(function(t, n) {
            n.style.cssText += ";min-height:" + e + ";_height:" + e
        })
    }
    function I() {
    }
    function Y(t, e) {
        return t - e
    }
    function j(t) {
        return Math.max.apply(Math, t)
    }
    function P(t) {
        return(10 > t ? "0" : "") + t
    }
    function J(t, n) {
        if (t[n] !== e)
            return t[n];
        for (var r, a = n.split(/(?=[A-Z])/), o = a.length - 1; o >= 0; o--)
            if (r = t[a[o].toLowerCase()], r !== e)
                return r;
        return t[""]
    }
    function V(t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }
    function X(t) {
        return t.id + "/" + t.className + "/" + t.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/gi, "")
    }
    function U(t) {
        t.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
            return!1
        })
    }
    function Z(t) {
        t.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
    }
    function $(t, e) {
        t.each(function(t, n) {
            n.className = n.className.replace(/^fc-\w*/, "fc-" + Se[e.getDay()])
        })
    }
    function Q(t, e) {
        var n = t.source || {}, r = t.color, a = n.color, o = e("eventColor"), i = t.backgroundColor || r || n.backgroundColor || a || e("eventBackgroundColor") || o, s = t.borderColor || r || n.borderColor || a || e("eventBorderColor") || o, c = t.textColor || n.textColor || e("eventTextColor"), l = [];
        return i && l.push("background-color:" + i), s && l.push("border-color:" + s), c && l.push("color:" + c), l.join(";")
    }
    function G(e, n, r) {
        if (t.isFunction(e) && (e = [e]), e) {
            var a, o;
            for (a = 0; e.length > a; a++)
                o = e[a].apply(n, r) || o;
            return o
        }
    }
    function K() {
        for (var t = 0; arguments.length > t; t++)
            if (arguments[t] !== e)
                return arguments[t]
    }
    function te(t, e) {
        function n(t, e) {
            e && (s(t, e), t.setDate(1));
            var n = d(t, !0);
            n.setDate(1);
            var l = s(d(n), 1), u = d(n), f = d(l), v = a("firstDay"), g = a("weekends") ? 0 : 1;
            g && (h(u), h(f, -1, !0)), c(u, -((u.getDay() - Math.max(v, g) + 7) % 7)), c(f, (7 - f.getDay() + Math.max(v, g)) % 7);
            var p = Math.round((f - u) / (7 * Ee));
            "fixed" == a("weekMode") && (c(f, 7 * (6 - p)), p = 6), r.title = i(n, a("titleFormat")), r.start = n, r.end = l, r.visStart = u, r.visEnd = f, o(p, g ? 5 : 7, !0)
        }
        var r = this;
        r.render = n, re.call(r, t, e, "month");
        var a = r.opt, o = r.renderBasic, i = e.formatDate
    }
    function ee(t, e) {
        function n(t, e) {
            e && c(t, 7 * e);
            var n = c(d(t), -((t.getDay() - a("firstDay") + 7) % 7)), s = c(d(n), 7), l = d(n), u = d(s), f = a("weekends");
            f || (h(l), h(u, -1, !0)), r.title = i(l, c(d(u), -1), a("titleFormat")), r.start = n, r.end = s, r.visStart = l, r.visEnd = u, o(1, f ? 7 : 5, !1)
        }
        var r = this;
        r.render = n, re.call(r, t, e, "basicWeek");
        var a = r.opt, o = r.renderBasic, i = e.formatDates
    }
    function ne(t, e) {
        function n(t, e) {
            e && (c(t, e), a("weekends") || h(t, 0 > e ? -1 : 1)), r.title = i(t, a("titleFormat")), r.start = r.visStart = d(t, !0), r.end = r.visEnd = c(d(r.start), 1), o(1, 1, !1)
        }
        var r = this;
        r.render = n, re.call(r, t, e, "basicDay");
        var a = r.opt, o = r.renderBasic, i = e.formatDate
    }
    function re(e, n, r) {
        function a(t, e, n) {
            ne = t, re = e, o();
            var r = !P;
            r ? i() : Te(), s(n)
        }
        function o() {
            ce = Ee("isRTL"), ce ? (le = -1, fe = re - 1) : (le = 1, fe = 0), pe = Ee("firstDay"), ye = Ee("weekends") ? 0 : 1, be = Ee("theme") ? "ui" : "fc", we = Ee("columnFormat"), De = Ee("weekNumbers"), Me = Ee("weekNumberTitle"), Ce = "iso" != Ee("weekNumberCalculation") ? "w" : "W"
        }
        function i() {
            Q = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(e)
        }
        function s(n) {
            var r, a, o, i, s = "", c = be + "-widget-header", l = be + "-widget-content", u = B.start.getMonth(), d = f(new Date);
            for (s += "<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>", De && (s += "<th class='fc-week-number " + c + "'/>"), r = 0; re > r; r++)
                o = F(0, r), s += "<th class='fc-day-header fc-" + Se[o.getDay()] + " " + c + "'/>";
            for (s += "</tr></thead><tbody>", r = 0; ne > r; r++) {
                for (s += "<tr class='fc-week'>", De && (s += "<td class='fc-week-number " + l + "'>" + "<div/>" + "</td>"), a = 0; re > a; a++)
                    o = F(r, a), i = ["fc-day", "fc-" + Se[o.getDay()], l], o.getMonth() != u && i.push("fc-other-month"), +o == +d && (i.push("fc-today"), i.push(be + "-state-highlight")), s += "<td class='" + i.join(" ") + "'" + " data-date='" + Fe(o, "yyyy-MM-dd") + "'" + ">" + "<div>", n && (s += "<div class='fc-day-number'>" + o.getDate() + "</div>"), s += "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
                s += "</tr>"
            }
            s += "</tbody></table>", _(), I && I.remove(), I = t(s).appendTo(e), Y = I.find("thead"), j = Y.find(".fc-day-header"), P = I.find("tbody"), J = P.find("tr"), V = P.find(".fc-day"), X = J.find("td:first-child"), $ = J.eq(0).find(".fc-day-content > div"), Z(Y.add(Y.find("tr"))), Z(J), J.eq(0).addClass("fc-first"), J.filter(":last").addClass("fc-last"), De && Y.find(".fc-week-number").text(Me), j.each(function(e, n) {
                var r = R(e);
                t(n).text(Fe(r, we))
            }), De && P.find(".fc-week-number > div").each(function(e, n) {
                var r = F(e, 0);
                t(n).text(Fe(r, Ce))
            }), V.each(function(e, n) {
                var r = R(e);
                xe("dayRender", B, r, t(n))
            }), v(V)
        }
        function l(e) {
            K = e;
            var n, r, a, o = K - Y.height();
            "variable" == Ee("weekMode") ? n = r = Math.floor(o / (1 == ne ? 2 : 6)) : (n = Math.floor(o / ne), r = o - n * (ne - 1)), X.each(function(e, o) {
                ne > e && (a = t(o), q(a.find("> div"), (e == ne - 1 ? r : n) - L(a)))
            }), O()
        }
        function u(t) {
            G = t, se.clear(), ee = 0, De && (ee = Y.find("th.fc-week-number").outerWidth()), te = Math.floor((G - ee) / re), z(j.slice(0, -1), te)
        }
        function v(t) {
            t.click(h).mousedown(ze)
        }
        function h(e) {
            if (!Ee("selectable")) {
                var n = y(t(this).data("date"));
                xe("dayClick", this, n, !0, e)
            }
        }
        function p(t, e, n) {
            n && oe.build();
            for (var r = d(B.visStart), a = c(d(r), re), o = 0; ne > o; o++) {
                var i = new Date(Math.max(r, t)), s = new Date(Math.min(a, e));
                if (s > i) {
                    var l, u;
                    ce ? (l = g(s, r) * le + fe + 1, u = g(i, r) * le + fe + 1) : (l = g(i, r), u = g(s, r)), v(m(o, l, o, u - 1))
                }
                c(r, 7), c(a, 7)
            }
        }
        function m(t, n, r, a) {
            var o = oe.rect(t, n, r, a, e);
            return ke(o, e)
        }
        function b(t) {
            return d(t)
        }
        function w(t, e) {
            p(t, c(d(e), 1), !0)
        }
        function D() {
            He()
        }
        function M(t, e, n) {
            var r = k(t), a = V[r.row * re + r.col];
            xe("dayClick", a, t, e, n)
        }
        function C(t, e) {
            ie.start(function(t) {
                He(), t && m(t.row, t.col, t.row, t.col)
            }, e)
        }
        function S(t, e, n) {
            var r = ie.stop();
            if (He(), r) {
                var a = H(r);
                xe("drop", t, a, !0, e, n)
            }
        }
        function E(t) {
            return d(t.start)
        }
        function x(t) {
            return se.left(t)
        }
        function T(t) {
            return se.right(t)
        }
        function k(t) {
            return{row: Math.floor(g(t, B.visStart) / 7), col: N(t.getDay())}
        }
        function H(t) {
            return F(t.row, t.col)
        }
        function F(t, e) {
            return c(d(B.visStart), 7 * t + e * le + fe)
        }
        function R(t) {
            return F(Math.floor(t / re), t % re)
        }
        function N(t) {
            return(t - Math.max(pe, ye) + re) % re * le + fe
        }
        function W(t) {
            return J.eq(t)
        }
        function A() {
            var t = 0;
            return De && (t += ee), {left: t, right: G}
        }
        function _() {
            q(e, e.height())
        }
        function O() {
            q(e, 1)
        }
        var B = this;
        B.renderBasic = a, B.setHeight = l, B.setWidth = u, B.renderDayOverlay = p, B.defaultSelectionEnd = b, B.renderSelection = w, B.clearSelection = D, B.reportDayClick = M, B.dragStart = C, B.dragStop = S, B.defaultEventEnd = E, B.getHoverListener = function() {
            return ie
        }, B.colContentLeft = x, B.colContentRight = T, B.dayOfWeekCol = N, B.dateCell = k, B.cellDate = H, B.cellIsAllDay = function() {
            return!0
        }, B.allDayRow = W, B.allDayBounds = A, B.getRowCnt = function() {
            return ne
        }, B.getColCnt = function() {
            return re
        }, B.getColWidth = function() {
            return te
        }, B.getDaySegmentContainer = function() {
            return Q
        }, ue.call(B, e, n, r), ve.call(B), de.call(B), ae.call(B);
        var I, Y, j, P, J, V, X, $, Q, G, K, te, ee, ne, re, oe, ie, se, ce, le, fe, pe, ye, be, we, De, Me, Ce, Ee = B.opt, xe = B.trigger, Te = B.clearEvents, ke = B.renderOverlay, He = B.clearOverlays, ze = B.daySelectionMousedown, Fe = n.formatDate;
        U(e.addClass("fc-grid")), oe = new he(function(e, n) {
            var r, a, o;
            j.each(function(e, i) {
                r = t(i), a = r.offset().left, e && (o[1] = a), o = [a], n[e] = o
            }), o[1] = a + r.outerWidth(), J.each(function(n, i) {
                ne > n && (r = t(i), a = r.offset().top, n && (o[1] = a), o = [a], e[n] = o)
            }), o[1] = a + r.outerHeight()
        }), ie = new ge(oe), se = new me(function(t) {
            return $.eq(t)
        })
    }
    function ae() {
        function e(t, e) {
            v(t), x(r(t), e), l("eventAfterAllRender")
        }
        function n() {
            h(), b().empty()
        }
        function r(e) {
            var n, r, a, o, s, l, u = S(), f = E(), v = d(i.visStart), h = c(d(v), f), g = t.map(e, C), p = [];
            for (n = 0; u > n; n++) {
                for (r = k(T(e, g, v, h)), a = 0; r.length > a; a++)
                    for (o = r[a], s = 0; o.length > s; s++)
                        l = o[s], l.row = n, l.level = a, p.push(l);
                c(v, 7), c(h, 7)
            }
            return p
        }
        function a(t, e, n) {
            u(t) && o(t, e), n.isEnd && f(t) && H(t, e, n), g(t, e)
        }
        function o(t, e) {
            var n, r = w();
            e.draggable({zIndex: 9, delay: 50, opacity: s("dragOpacity"), revertDuration: s("dragRevertDuration"), start: function(a, o) {
                    l("eventDragStart", e, t, a, o), m(t, e), r.start(function(r, a, o, i) {
                        e.draggable("option", "revert", !r || !o && !i), M(), r ? (n = 7 * o + i * (s("isRTL") ? -1 : 1), D(c(d(t.start), n), c(C(t), n))) : n = 0
                    }, a, "drag")
                }, stop: function(a, o) {
                    r.stop(), M(), l("eventDragStop", e, t, a, o), n ? y(this, t, n, 0, t.allDay, a, o) : (e.css("filter", ""), p(t, e))
                }})
        }
        var i = this;
        i.renderEvents = e, i.compileDaySegs = r, i.clearEvents = n, i.bindDaySeg = a, fe.call(i);
        var s = i.opt, l = i.trigger, u = i.isEventDraggable, f = i.isEventResizable, v = i.reportEvents, h = i.reportEventClear, g = i.eventElementHandlers, p = i.showEvents, m = i.hideEvents, y = i.eventDrop, b = i.getDaySegmentContainer, w = i.getHoverListener, D = i.renderDayOverlay, M = i.clearOverlays, S = i.getRowCnt, E = i.getColCnt, x = i.renderDaySegs, H = i.resizableDayEvent
    }
    function oe(t, e) {
        function n(t, e) {
            e && c(t, 7 * e);
            var n = c(d(t), -((t.getDay() - a("firstDay") + 7) % 7)), s = c(d(n), 7), l = d(n), u = d(s), f = a("weekends");
            f || (h(l), h(u, -1, !0)), r.title = i(l, c(d(u), -1), a("titleFormat")), r.start = n, r.end = s, r.visStart = l, r.visEnd = u, o(f ? 7 : 5)
        }
        var r = this;
        r.render = n, se.call(r, t, e, "agendaWeek");
        var a = r.opt, o = r.renderAgenda, i = e.formatDates
    }
    function ie(t, e) {
        function n(t, e) {
            e && (c(t, e), a("weekends") || h(t, 0 > e ? -1 : 1));
            var n = d(t, !0), s = c(d(n), 1);
            r.title = i(t, a("titleFormat")), r.start = r.visStart = n, r.end = r.visEnd = s, o(1)
        }
        var r = this;
        r.render = n, se.call(r, t, e, "agendaDay");
        var a = r.opt, o = r.renderAgenda, i = e.formatDate
    }
    function se(n, r, a) {
        function o(t) {
            Le = t, i(), te ? nn() : s(), l()
        }
        function i() {
            Ye = tn("theme") ? "ui" : "fc", Pe = tn("weekends") ? 0 : 1, je = tn("firstDay"), (Je = tn("isRTL")) ? (Ve = -1, Xe = Le - 1) : (Ve = 1, Xe = 0), Ue = b(tn("minTime")), Ze = b(tn("maxTime")), $e = tn("columnFormat"), Qe = tn("weekNumbers"), Ge = tn("weekNumberTitle"), Ke = "iso" != tn("weekNumberCalculation") ? "w" : "W", Ne = tn("snapMinutes") || tn("slotMinutes")
        }
        function s() {
            var e, r, a, o, i, s = Ye + "-widget-header", c = Ye + "-widget-content", l = 0 == tn("slotMinutes") % 15;
            for (e = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr>", e += Qe?"<th class='fc-agenda-axis fc-week-number " + s + "'/>":"<th class='fc-agenda-axis " + s + "'>&nbsp;</th>", r = 0; Le > r; r++)
                e += "<th class='fc- fc-col" + r + " " + s + "'/>";
            for (e += "<th class='fc-agenda-gutter " + s + "'>&nbsp;</th>" + "</tr>" + "</thead>" + "<tbody>" + "<tr>" + "<th class='fc-agenda-axis " + s + "'>&nbsp;</th>", r = 0; Le > r; r++)
                e += "<td class='fc- fc-col" + r + " " + c + "'>" + "<div>" + "<div class='fc-day-content'>" + "<div style='position:relative'>&nbsp;</div>" + "</div>" + "</div>" + "</td>";
            for (e += "<td class='fc-agenda-gutter " + c + "'>&nbsp;</td>" + "</tr>" + "</tbody>" + "</table>", te = t(e).appendTo(n), ee = te.find("thead"), ne = ee.find("th").slice(1, - 1), re = te.find("tbody"), ae = re.find("td").slice(0, - 1), oe = ae.find("div.fc-day-content div"), ie = ae.eq(0), se = ie.find("> div"), Z(ee.add(ee.find("tr"))), Z(re.add(re.find("tr"))), Se = ee.find("th:first"), Ee = te.find(".fc-agenda-gutter"), le = t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n), tn("allDaySlot")?(fe = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(le), e = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + s + " fc-agenda-axis'>" + tn("allDayText") + "</th>" + "<td>" + "<div class='fc-day-content'><div style='position:relative'/></div>" + "</td>" + "<th class='" + s + " fc-agenda-gutter'>&nbsp;</th>" + "</tr>" + "</table>", pe = t(e).appendTo(le), ye = pe.find("tr"), D(ye.find("td")), Se = Se.add(pe.find("th:first")), Ee = Ee.add(pe.find("th.fc-agenda-gutter")), le.append("<div class='fc-agenda-divider " + s + "'>" + "<div class='fc-agenda-divider-inner'/>" + "</div>")):fe = t([]), be = t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(le), we = t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(be), De = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(we), e = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", a = v(), o = u(d(a), Ze), u(a, Ue), _e = 0, r = 0; o > a; r++)
                i = a.getMinutes(), e += "<tr class='fc-slot" + r + " " + (i ? "fc-minor" : "") + "'>" + "<th class='fc-agenda-axis " + s + "'>" + (l && i ? "&nbsp;" : un(a, tn("axisFormat"))) + "</th>" + "<td class='" + c + "'>" + "<div style='position:relative'>&nbsp;</div>" + "</td>" + "</tr>", u(a, tn("slotMinutes")), _e++;
            e += "</tbody></table>", Me = t(e).appendTo(we), Ce = Me.find("div:first"), M(Me.find("td")), Se = Se.add(Me.find("th:first"))
        }
        function l() {
            var t, e, n, r, a = f(new Date);
            if (Qe) {
                var o = un(N(0), Ke);
                Je ? o += Ge : o = Ge + o, ee.find(".fc-week-number").text(o)
            }
            for (t = 0; Le > t; t++)
                r = N(t), e = ne.eq(t), e.html(un(r, $e)), n = ae.eq(t), +r == +a ? n.addClass(Ye + "-state-highlight fc-today") : n.removeClass(Ye + "-state-highlight fc-today"), $(e.add(n), r)
        }
        function h(t, n) {
            t === e && (t = ke), ke = t, fn = {};
            var r = re.position().top, a = be.position().top, o = Math.min(t - r, Me.height() + a + 1);
            se.height(o - L(ie)), le.css("top", r), be.height(o - a - 1), Re = Ce.height() + 1, We = tn("slotMinutes") / Ne, Ae = Re / We, n && m()
        }
        function p(e) {
            Te = e, qe.clear(), He = 0, z(Se.width("").each(function(e, n) {
                He = Math.max(He, t(n).outerWidth())
            }), He);
            var n = be[0].clientWidth;
            Fe = be.width() - n, Fe ? (z(Ee, Fe), Ee.show().prev().removeClass("fc-last")) : Ee.hide().prev().addClass("fc-last"), ze = Math.floor((n - He) / Le), z(ne.slice(0, -1), ze)
        }
        function m() {
            function t() {
                be.scrollTop(r)
            }
            var e = v(), n = d(e);
            n.setHours(tn("firstHour"));
            var r = _(e, n) + 1;
            t(), setTimeout(t, 0)
        }
        function y() {
            Ie = be.scrollTop()
        }
        function w() {
            be.scrollTop(Ie)
        }
        function D(t) {
            t.click(C).mousedown(cn)
        }
        function M(t) {
            t.click(C).mousedown(V)
        }
        function C(t) {
            if (!tn("selectable")) {
                var e = Math.min(Le - 1, Math.floor((t.pageX - te.offset().left - He) / ze)), n = N(e), r = this.parentNode.className.match(/fc-slot(\d+)/);
                if (r) {
                    var a = parseInt(r[1]) * tn("slotMinutes"), o = Math.floor(a / 60);
                    n.setHours(o), n.setMinutes(a % 60 + Ue), en("dayClick", ae[e], n, !1, t)
                } else
                    en("dayClick", ae[e], n, !0, t)
            }
        }
        function S(t, e, n) {
            n && Oe.build();
            var r, a, o = d(K.visStart);
            Je ? (r = g(e, o) * Ve + Xe + 1, a = g(t, o) * Ve + Xe + 1) : (r = g(t, o), a = g(e, o)), r = Math.max(0, r), a = Math.min(Le, a), a > r && D(E(0, r, 0, a - 1))
        }
        function E(t, e, n, r) {
            var a = Oe.rect(t, e, n, r, le);
            return rn(a, le)
        }
        function x(t, e) {
            for (var n = d(K.visStart), r = c(d(n), 1), a = 0; Le > a; a++) {
                var o = new Date(Math.max(n, t)), i = new Date(Math.min(r, e));
                if (i > o) {
                    var s = a * Ve + Xe, l = Oe.rect(0, s, 0, s, we), u = _(n, o), f = _(n, i);
                    l.top = u, l.height = f - u, M(rn(l, we))
                }
                c(n, 1), c(r, 1)
            }
        }
        function T(t) {
            return qe.left(t)
        }
        function k(t) {
            return qe.right(t)
        }
        function H(t) {
            return{row: Math.floor(g(t, K.visStart) / 7), col: A(t.getDay())}
        }
        function R(t) {
            var e = N(t.col), n = t.row;
            return tn("allDaySlot") && n--, n >= 0 && u(e, Ue + n * Ne), e
        }
        function N(t) {
            return c(d(K.visStart), t * Ve + Xe)
        }
        function W(t) {
            return tn("allDaySlot") && !t.row
        }
        function A(t) {
            return(t - Math.max(je, Pe) + Le) % Le * Ve + Xe
        }
        function _(t, n) {
            if (t = d(t, !0), u(d(t), Ue) > n)
                return 0;
            if (n >= u(d(t), Ze))
                return Me.height();
            var r = tn("slotMinutes"), a = 60 * n.getHours() + n.getMinutes() - Ue, o = Math.floor(a / r), i = fn[o];
            return i === e && (i = fn[o] = Me.find("tr:eq(" + o + ") td div")[0].offsetTop), Math.max(0, Math.round(i - 1 + Re * (a % r / r)))
        }
        function O() {
            return{left: He, right: Te - Fe}
        }
        function B() {
            return ye
        }
        function q(t) {
            var e = d(t.start);
            return t.allDay ? e : u(e, tn("defaultEventMinutes"))
        }
        function I(t, e) {
            return e ? d(t) : u(d(t), tn("slotMinutes"))
        }
        function j(t, e, n) {
            n ? tn("allDaySlot") && S(t, c(d(e), 1), !0) : P(t, e)
        }
        function P(e, n) {
            var r = tn("selectHelper");
            if (Oe.build(), r) {
                var a = g(e, K.visStart) * Ve + Xe;
                if (a >= 0 && Le > a) {
                    var o = Oe.rect(0, a, 0, a, we), i = _(e, e), s = _(e, n);
                    if (s > i) {
                        if (o.top = i, o.height = s - i, o.left += 2, o.width -= 5, t.isFunction(r)) {
                            var c = r(e, n);
                            c && (o.position = "absolute", o.zIndex = 8, xe = t(c).css(o).appendTo(we))
                        } else
                            o.isStart = !0, o.isEnd = !0, xe = t(ln({title: "", start: e, end: n, className: ["fc-select-helper"], editable: !1}, o)), xe.css("opacity", tn("dragOpacity"));
                        xe && (M(xe), we.append(xe), z(xe, o.width, !0), F(xe, o.height, !0))
                    }
                }
            } else
                x(e, n)
        }
        function J() {
            an(), xe && (xe.remove(), xe = null)
        }
        function V(e) {
            if (1 == e.which && tn("selectable")) {
                sn(e);
                var n;
                Be.start(function(t, e) {
                    if (J(), t && t.col == e.col && !W(t)) {
                        var r = R(e), a = R(t);
                        n = [r, u(d(r), Ne), a, u(d(a), Ne)].sort(Y), P(n[0], n[3])
                    } else
                        n = null
                }, e), t(document).one("mouseup", function(t) {
                    Be.stop(), n && (+n[0] == +n[1] && X(n[0], !1, t), on(n[0], n[3], !1, t))
                })
            }
        }
        function X(t, e, n) {
            en("dayClick", ae[A(t.getDay())], t, e, n)
        }
        function Q(t, e) {
            Be.start(function(t) {
                if (an(), t)
                    if (W(t))
                        E(t.row, t.col, t.row, t.col);
                    else {
                        var e = R(t), n = u(d(e), tn("defaultEventMinutes"));
                        x(e, n)
                    }
            }, e)
        }
        function G(t, e, n) {
            var r = Be.stop();
            an(), r && en("drop", t, R(r), W(r), e, n)
        }
        var K = this;
        K.renderAgenda = o, K.setWidth = p, K.setHeight = h, K.beforeHide = y, K.afterShow = w, K.defaultEventEnd = q, K.timePosition = _, K.dayOfWeekCol = A, K.dateCell = H, K.cellDate = R, K.cellIsAllDay = W, K.allDayRow = B, K.allDayBounds = O, K.getHoverListener = function() {
            return Be
        }, K.colContentLeft = T, K.colContentRight = k, K.getDaySegmentContainer = function() {
            return fe
        }, K.getSlotSegmentContainer = function() {
            return De
        }, K.getMinMinute = function() {
            return Ue
        }, K.getMaxMinute = function() {
            return Ze
        }, K.getBodyContent = function() {
            return we
        }, K.getRowCnt = function() {
            return 1
        }, K.getColCnt = function() {
            return Le
        }, K.getColWidth = function() {
            return ze
        }, K.getSnapHeight = function() {
            return Ae
        }, K.getSnapMinutes = function() {
            return Ne
        }, K.defaultSelectionEnd = I, K.renderDayOverlay = S, K.renderSelection = j, K.clearSelection = J, K.reportDayClick = X, K.dragStart = Q, K.dragStop = G, ue.call(K, n, r, a), ve.call(K), de.call(K), ce.call(K);
        var te, ee, ne, re, ae, oe, ie, se, le, fe, pe, ye, be, we, De, Me, Ce, Se, Ee, xe, Te, ke, He, ze, Fe, Re, Ne, We, Ae, Le, _e, Oe, Be, qe, Ie, Ye, je, Pe, Je, Ve, Xe, Ue, Ze, $e, Qe, Ge, Ke, tn = K.opt, en = K.trigger, nn = K.clearEvents, rn = K.renderOverlay, an = K.clearOverlays, on = K.reportSelection, sn = K.unselect, cn = K.daySelectionMousedown, ln = K.slotSegHtml, un = r.formatDate, fn = {};
        U(n.addClass("fc-agenda")), Oe = new he(function(e, n) {
            function r(t) {
                return Math.max(c, Math.min(l, t))
            }
            var a, o, i;
            ne.each(function(e, r) {
                a = t(r), o = a.offset().left, e && (i[1] = o), i = [o], n[e] = i
            }), i[1] = o + a.outerWidth(), tn("allDaySlot") && (a = ye, o = a.offset().top, e[0] = [o, o + a.outerHeight()]);
            for (var s = we.offset().top, c = be.offset().top, l = c + be.outerHeight(), u = 0; _e * We > u; u++)
                e.push([r(s + Ae * u), r(s + Ae * (u + 1))])
        }), Be = new ge(Oe), qe = new me(function(t) {
            return oe.eq(t)
        })
    }
    function ce() {
        function n(t, e) {
            S(t);
            var n, r = t.length, i = [], c = [];
            for (n = 0; r > n; n++)
                t[n].allDay ? i.push(t[n]) : c.push(t[n]);
            y("allDaySlot") && (Y(a(i), e), z()), s(o(c), e), b("eventAfterAllRender")
        }
        function r() {
            E(), N().empty(), W().empty()
        }
        function a(e) {
            var n, r, a, o, i = k(T(e, t.map(e, C), m.visStart, m.visEnd)), s = i.length, c = [];
            for (n = 0; s > n; n++)
                for (r = i[n], a = 0; r.length > a; a++)
                    o = r[a], o.row = 0, o.level = n, c.push(o);
            return c
        }
        function o(e) {
            var n, r, a, o, s, l, f = P(), v = O(), h = _(), g = u(d(m.visStart), v), p = t.map(e, i), y = [];
            for (n = 0; f > n; n++) {
                for (r = k(T(e, p, g, u(d(g), h - v))), le(r), a = 0; r.length > a; a++)
                    for (o = r[a], s = 0; o.length > s; s++)
                        l = o[s], l.col = n, l.level = a, y.push(l);
                c(g, 1, !0)
            }
            return y
        }
        function i(t) {
            return t.end ? d(t.end) : u(d(t.start), y("defaultEventMinutes"))
        }
        function s(n, r) {
            var a, o, i, s, c, u, f, d, h, g, p, m, w, D, M, C, S, E, x, T, k, z, F = n.length, N = "", A = {}, _ = {}, O = W(), Y = P();
            for ((T = y("isRTL"))?(k = - 1, z = Y - 1):(k = 1, z = 0), a = 0; F > a; a++)
                o = n[a], i = o.event, s = B(o.start, o.start), c = B(o.start, o.end), u = o.col, f = o.level, d = o.forward || 0, h = q(u * k + z), g = I(u * k + z) - h, g = Math.min(g - 6, .95 * g), p = f ? g / (f + d + 1) : d ? 2 * (g / (d + 1) - 6) : g, m = h + g / (f + d + 1) * f * k + (T ? g - p : 0), o.top = s, o.left = m, o.outerWidth = p, o.outerHeight = c - s, N += l(i, o);
            for (O[0].innerHTML = N, w = O.children(), a = 0; F > a; a++)
                o = n[a], i = o.event, D = t(w[a]), M = b("eventRender", i, i, D), M === !1 ? D.remove() : (M && M !== !0 && (D.remove(), D = t(M).css({position: "absolute", top: o.top, left: o.left}).appendTo(O)), o.element = D, i._id === r ? v(i, D, o) : D[0]._fci = a, G(i, D));
            for (H(O, n, v), a = 0; F > a; a++)
                o = n[a], (D = o.element) && (S = A[C = o.key = X(D[0])], o.vsides = S === e ? A[C] = L(D, !0) : S, S = _[C], o.hsides = S === e ? _[C] = R(D, !0) : S, E = D.find(".fc-event-title"), E.length && (o.contentTop = E[0].offsetTop));
            for (a = 0; F > a; a++)
                o = n[a], (D = o.element) && (D[0].style.width = Math.max(0, o.outerWidth - o.hsides) + "px", x = Math.max(0, o.outerHeight - o.vsides), D[0].style.height = x + "px", i = o.event, o.contentTop !== e && 10 > x - o.contentTop && (D.find("div.fc-event-time").text(ie(i.start, y("timeFormat")) + " - " + i.title), D.find("div.fc-event-title").remove()), b("eventAfterRender", i, i, D))
        }
        function l(t, e) {
            var n = "<", r = t.url, a = Q(t, y), o = ["fc-event", "fc-event-vert"];
            return w(t) && o.push("fc-event-draggable"), e.isStart && o.push("fc-event-start"), e.isEnd && o.push("fc-event-end"), o = o.concat(t.className), t.source && (o = o.concat(t.source.className || [])), n += r ? "a href='" + V(t.url) + "'" : "div", n += " class='" + o.join(" ") + "'" + " style='position:absolute;z-index:8;top:" + e.top + "px;left:" + e.left + "px;" + a + "'" + ">" + "<div class='fc-event-inner'>" + "<div class='fc-event-time'>" + V(se(t.start, t.end, y("timeFormat"))) + "</div>" + "<div class='fc-event-title'>" + V(t.title) + "</div>" + "</div>" + "<div class='fc-event-bg'></div>", e.isEnd && D(t) && (n += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), n += "</" + (r ? "a" : "div") + ">"
        }
        function f(t, e, n) {
            w(t) && h(t, e, n.isStart), n.isEnd && D(t) && j(t, e, n), x(t, e)
        }
        function v(t, e, n) {
            var r = e.find("div.fc-event-time");
            w(t) && g(t, e, r), n.isEnd && D(t) && p(t, e, r), x(t, e)
        }
        function h(t, e, n) {
            function r() {
                s || (e.width(a).height("").draggable("option", "grid", null), s = !0)
            }
            var a, o, i, s = !0, l = y("isRTL") ? -1 : 1, u = A(), f = J(), v = U(), h = Z(), g = O();
            e.draggable({zIndex: 9, opacity: y("dragOpacity", "month"), revertDuration: y("dragRevertDuration"), start: function(g, p) {
                    b("eventDragStart", e, t, g, p), te(t, e), a = e.width(), u.start(function(a, u, g, p) {
                        ae(), a ? (o = !1, i = p * l, a.row ? n ? s && (e.width(f - 10), F(e, v * Math.round((t.end ? (t.end - t.start) / Te : y("defaultEventMinutes")) / h)), e.draggable("option", "grid", [f, 1]), s = !1) : o = !0 : (re(c(d(t.start), i), c(C(t), i)), r()), o = o || s && !i) : (r(), o = !0), e.draggable("option", "revert", o)
                    }, g, "drag")
                }, stop: function(n, a) {
                    if (u.stop(), ae(), b("eventDragStop", e, t, n, a), o)
                        r(), e.css("filter", ""), K(t, e);
                    else {
                        var c = 0;
                        s || (c = Math.round((e.offset().top - $().offset().top) / v) * h + g - (60 * t.start.getHours() + t.start.getMinutes())), ee(this, t, i, c, s, n, a)
                    }
                }})
        }
        function g(t, e, n) {
            function r(e) {
                var r, a = u(d(t.start), e);
                t.end && (r = u(d(t.end), e)), n.text(se(a, r, y("timeFormat")))
            }
            function a() {
                f && (n.css("display", ""), e.draggable("option", "grid", [p, m]), f = !1)
            }
            var o, i, s, l, f = !1, v = y("isRTL") ? -1 : 1, h = A(), g = P(), p = J(), m = U(), w = Z();
            e.draggable({zIndex: 9, scroll: !1, grid: [p, m], axis: 1 == g ? "y" : !1, opacity: y("dragOpacity"), revertDuration: y("dragRevertDuration"), start: function(r, u) {
                    b("eventDragStart", e, t, r, u), te(t, e), o = e.position(), s = l = 0, h.start(function(r, o, s, l) {
                        e.draggable("option", "revert", !r), ae(), r && (i = l * v, y("allDaySlot") && !r.row ? (f || (f = !0, n.hide(), e.draggable("option", "grid", null)), re(c(d(t.start), i), c(C(t), i))) : a())
                    }, r, "drag")
                }, drag: function(t, e) {
                    s = Math.round((e.position.top - o.top) / m) * w, s != l && (f || r(s), l = s)
                }, stop: function(n, c) {
                    var l = h.stop();
                    ae(), b("eventDragStop", e, t, n, c), l && (i || s || f) ? ee(this, t, i, f ? 0 : s, f, n, c) : (a(), e.css("filter", ""), e.css(o), r(0), K(t, e))
                }})
        }
        function p(t, e, n) {
            var r, a, o = U(), i = Z();
            e.resizable({handles: {s: ".ui-resizable-handle"}, grid: o, start: function(n, o) {
                    r = a = 0, te(t, e), e.css("z-index", 9), b("eventResizeStart", this, t, n, o)
                }, resize: function(s, c) {
                    r = Math.round((Math.max(o, e.height()) - c.originalSize.height) / o), r != a && (n.text(se(t.start, r || t.end ? u(M(t), i * r) : null, y("timeFormat"))), a = r)
                }, stop: function(n, a) {
                    b("eventResizeStop", this, t, n, a), r ? ne(this, t, 0, i * r, n, a) : (e.css("z-index", 8), K(t, e))
                }})
        }
        var m = this;
        m.renderEvents = n, m.compileDaySegs = a, m.clearEvents = r, m.slotSegHtml = l, m.bindDaySeg = f, fe.call(m);
        var y = m.opt, b = m.trigger, w = m.isEventDraggable, D = m.isEventResizable, M = m.eventEnd, S = m.reportEvents, E = m.reportEventClear, x = m.eventElementHandlers, z = m.setHeight, N = m.getDaySegmentContainer, W = m.getSlotSegmentContainer, A = m.getHoverListener, _ = m.getMaxMinute, O = m.getMinMinute, B = m.timePosition, q = m.colContentLeft, I = m.colContentRight, Y = m.renderDaySegs, j = m.resizableDayEvent, P = m.getColCnt, J = m.getColWidth, U = m.getSnapHeight, Z = m.getSnapMinutes, $ = m.getBodyContent, G = m.reportEventElement, K = m.showEvents, te = m.hideEvents, ee = m.eventDrop, ne = m.eventResize, re = m.renderDayOverlay, ae = m.clearOverlays, oe = m.calendar, ie = oe.formatDate, se = oe.formatDates
    }
    function le(t) {
        var e, n, r, a, o, i;
        for (e = t.length - 1; e > 0; e--)
            for (a = t[e], n = 0; a.length > n; n++)
                for (o = a[n], r = 0; t[e - 1].length > r; r++)
                    i = t[e - 1][r], x(o, i) && (i.forward = Math.max(i.forward || 0, (o.forward || 0) + 1))
    }
    function ue(t, n, r) {
        function a(t, e) {
            var n = F[t];
            return"object" == typeof n ? J(n, e || r) : n
        }
        function o(t, e) {
            return n.trigger.apply(n, [t, e || S].concat(Array.prototype.slice.call(arguments, 2), [S]))
        }
        function i(t) {
            return l(t) && !a("disableDragging")
        }
        function s(t) {
            return l(t) && !a("disableResizing")
        }
        function l(t) {
            return K(t.editable, (t.source || {}).editable, a("editable"))
        }
        function f(t) {
            k = {};
            var e, n, r = t.length;
            for (e = 0; r > e; e++)
                n = t[e], k[n._id] ? k[n._id].push(n) : k[n._id] = [n]
        }
        function v(t) {
            return t.end ? d(t.end) : E(t)
        }
        function h(t, e) {
            H.push(e), z[t._id] ? z[t._id].push(e) : z[t._id] = [e]
        }
        function g() {
            H = [], z = {}
        }
        function p(t, n) {
            n.click(function(r) {
                return n.hasClass("ui-draggable-dragging") || n.hasClass("ui-resizable-resizing") ? e : o("eventClick", this, t, r)
            }).hover(function(e) {
                o("eventMouseover", this, t, e)
            }, function(e) {
                o("eventMouseout", this, t, e)
            })
        }
        function m(t, e) {
            b(t, e, "show")
        }
        function y(t, e) {
            b(t, e, "hide")
        }
        function b(t, e, n) {
            var r, a = z[t._id], o = a.length;
            for (r = 0; o > r; r++)
                e && a[r][0] == e[0] || a[r][n]()
        }
        function w(t, e, n, r, a, i, s) {
            var c = e.allDay, l = e._id;
            M(k[l], n, r, a), o("eventDrop", t, e, n, r, a, function() {
                M(k[l], -n, -r, c), T(l)
            }, i, s), T(l)
        }
        function D(t, e, n, r, a, i) {
            var s = e._id;
            C(k[s], n, r), o("eventResize", t, e, n, r, function() {
                C(k[s], -n, -r), T(s)
            }, a, i), T(s)
        }
        function M(t, n, r, a) {
            r = r || 0;
            for (var o, i = t.length, s = 0; i > s; s++)
                o = t[s], a !== e && (o.allDay = a), u(c(o.start, n, !0), r), o.end && (o.end = u(c(o.end, n, !0), r)), x(o, F)
        }
        function C(t, e, n) {
            n = n || 0;
            for (var r, a = t.length, o = 0; a > o; o++)
                r = t[o], r.end = u(c(v(r), e, !0), n), x(r, F)
        }
        var S = this;
        S.element = t, S.calendar = n, S.name = r, S.opt = a, S.trigger = o, S.isEventDraggable = i, S.isEventResizable = s, S.reportEvents = f, S.eventEnd = v, S.reportEventElement = h, S.reportEventClear = g, S.eventElementHandlers = p, S.showEvents = m, S.hideEvents = y, S.eventDrop = w, S.eventResize = D;
        var E = S.defaultEventEnd, x = n.normalizeEvent, T = n.reportEventChange, k = {}, H = [], z = {}, F = n.options
    }
    function fe() {
        function n(t, e) {
            var n, r, c, d, p, m, y, b, w = B(), D = T(), M = k(), C = 0, S = t.length;
            for (w[0].innerHTML = a(t), o(t, w.children()), i(t), s(t, w, e), l(t), u(t), f(t), n = v(), r = 0; D > r; r++) {
                for (c = 0, d = [], p = 0; M > p; p++)
                    d[p] = 0;
                for (; S > C && (m = t[C]).row == r; ) {
                    for (y = j(d.slice(m.startCol, m.endCol)), m.top = y, y += m.outerHeight, b = m.startCol; m.endCol > b; b++)
                        d[b] = y;
                    C++
                }
                n[r].height(j(d))
            }
            g(t, h(n))
        }
        function r(e, n, r) {
            var i, s, c, d = t("<div/>"), p = B(), m = e.length;
            for (d[0].innerHTML = a(e), i = d.children(), p.append(i), o(e, i), l(e), u(e), f(e), g(e, h(v())), i = [], s = 0; m > s; s++)
                c = e[s].element, c && (e[s].row === n && c.css("top", r), i.push(c[0]));
            return t(i)
        }
        function a(t) {
            var e, n, r, a, o, i, s, c, l, u, f = y("isRTL"), d = t.length, v = F(), h = v.left, g = v.right, p = "";
            for (e = 0; d > e; e++)
                n = t[e], r = n.event, o = ["fc-event", "fc-event-hori"], w(r) && o.push("fc-event-draggable"), n.isStart && o.push("fc-event-start"), n.isEnd && o.push("fc-event-end"), f ? (i = A(n.end.getDay() - 1), s = A(n.start.getDay()), c = n.isEnd ? N(i) : h, l = n.isStart ? W(s) : g) : (i = A(n.start.getDay()), s = A(n.end.getDay() - 1), c = n.isStart ? N(i) : h, l = n.isEnd ? W(s) : g), o = o.concat(r.className), r.source && (o = o.concat(r.source.className || [])), a = r.url, u = Q(r, y), p += a ? "<a href='" + V(a) + "'" : "<div", p += " class='" + o.join(" ") + "'" + " style='position:absolute;z-index:8;left:" + c + "px;" + u + "'" + ">" + "<div class='fc-event-inner'>", !r.allDay && n.isStart && (p += "<span class='fc-event-time'>" + V(I(r.start, r.end, y("timeFormat"))) + "</span>"), p += "<span class='fc-event-title'>" + V(r.title) + "</span>" + "</div>", n.isEnd && D(r) && (p += "<div class='ui-resizable-handle ui-resizable-" + (f ? "w" : "e") + "'>" + "&nbsp;&nbsp;&nbsp;" + "</div>"), p += "</" + (a ? "a" : "div") + ">", n.left = c, n.outerWidth = l - c, n.startCol = i, n.endCol = s + 1;
            return p
        }
        function o(e, n) {
            var r, a, o, i, s, c = e.length;
            for (r = 0; c > r; r++)
                a = e[r], o = a.event, i = t(n[r]), s = b("eventRender", o, o, i), s === !1 ? i.remove() : (s && s !== !0 && (s = t(s).css({position: "absolute", left: a.left}), i.replaceWith(s), i = s), a.element = i)
        }
        function i(t) {
            var e, n, r, a = t.length;
            for (e = 0; a > e; e++)
                n = t[e], r = n.element, r && C(n.event, r)
        }
        function s(t, e, n) {
            var r, a, o, i, s = t.length;
            for (r = 0; s > r; r++)
                a = t[r], o = a.element, o && (i = a.event, i._id === n ? q(i, o, a) : o[0]._fci = r);
            H(e, t, q)
        }
        function l(t) {
            var n, r, a, o, i, s = t.length, c = {};
            for (n = 0; s > n; n++)
                r = t[n], a = r.element, a && (o = r.key = X(a[0]), i = c[o], i === e && (i = c[o] = R(a, !0)), r.hsides = i)
        }
        function u(t) {
            var e, n, r, a = t.length;
            for (e = 0; a > e; e++)
                n = t[e], r = n.element, r && (r[0].style.width = Math.max(0, n.outerWidth - n.hsides) + "px")
        }
        function f(t) {
            var n, r, a, o, i, s = t.length, c = {};
            for (n = 0; s > n; n++)
                r = t[n], a = r.element, a && (o = r.key, i = c[o], i === e && (i = c[o] = O(a)), r.outerHeight = a[0].offsetHeight + i)
        }
        function v() {
            var t, e = T(), n = [];
            for (t = 0; e > t; t++)
                n[t] = z(t).find("div.fc-day-content > div");
            return n
        }
        function h(t) {
            var e, n = t.length, r = [];
            for (e = 0; n > e; e++)
                r[e] = t[e][0].offsetTop;
            return r
        }
        function g(t, e) {
            var n, r, a, o, i = t.length;
            for (n = 0; i > n; n++)
                r = t[n], a = r.element, a && (a[0].style.top = e[r.row] + (r.top || 0) + "px", o = r.event, b("eventAfterRender", o, o, a))
        }
        function p(e, n, a) {
            var o = y("isRTL"), i = o ? "w" : "e", s = n.find(".ui-resizable-" + i), l = !1;
            U(n), n.mousedown(function(t) {
                t.preventDefault()
            }).click(function(t) {
                l && (t.preventDefault(), t.stopImmediatePropagation())
            }), s.mousedown(function(s) {
                function u(n) {
                    b("eventResizeStop", this, e, n), t("body").css("cursor", ""), h.stop(), P(), f && x(this, e, f, 0, n), setTimeout(function() {
                        l = !1
                    }, 0)
                }
                if (1 == s.which) {
                    l = !0;
                    var f, v, h = m.getHoverListener(), g = T(), p = k(), y = o ? -1 : 1, w = o ? p - 1 : 0, D = n.css("top"), C = t.extend({}, e), H = L(e.start);
                    J(), t("body").css("cursor", i + "-resize").one("mouseup", u), b("eventResizeStart", this, e, s), h.start(function(t, n) {
                        if (t) {
                            var s = Math.max(H.row, t.row), l = t.col;
                            1 == g && (s = 0), s == H.row && (l = o ? Math.min(H.col, l) : Math.max(H.col, l)), f = 7 * s + l * y + w - (7 * n.row + n.col * y + w);
                            var u = c(M(e), f, !0);
                            if (f) {
                                C.end = u;
                                var h = v;
                                v = r(_([C]), a.row, D), v.find("*").css("cursor", i + "-resize"), h && h.remove(), E(e)
                            } else
                                v && (S(e), v.remove(), v = null);
                            P(), Y(e.start, c(d(u), 1))
                        }
                    }, s)
                }
            })
        }
        var m = this;
        m.renderDaySegs = n, m.resizableDayEvent = p;
        var y = m.opt, b = m.trigger, w = m.isEventDraggable, D = m.isEventResizable, M = m.eventEnd, C = m.reportEventElement, S = m.showEvents, E = m.hideEvents, x = m.eventResize, T = m.getRowCnt, k = m.getColCnt;
        m.getColWidth;
        var z = m.allDayRow, F = m.allDayBounds, N = m.colContentLeft, W = m.colContentRight, A = m.dayOfWeekCol, L = m.dateCell, _ = m.compileDaySegs, B = m.getDaySegmentContainer, q = m.bindDaySeg, I = m.calendar.formatDates, Y = m.renderDayOverlay, P = m.clearOverlays, J = m.clearSelection
    }
    function de() {
        function e(t, e, a) {
            n(), e || (e = c(t, a)), l(t, e, a), r(t, e, a)
        }
        function n(t) {
            f && (f = !1, u(), s("unselect", null, t))
        }
        function r(t, e, n, r) {
            f = !0, s("select", null, t, e, n, r)
        }
        function a(e) {
            var a = o.cellDate, s = o.cellIsAllDay, c = o.getHoverListener(), f = o.reportDayClick;
            if (1 == e.which && i("selectable")) {
                n(e);
                var d;
                c.start(function(t, e) {
                    u(), t && s(t) ? (d = [a(e), a(t)].sort(Y), l(d[0], d[1], !0)) : d = null
                }, e), t(document).one("mouseup", function(t) {
                    c.stop(), d && (+d[0] == +d[1] && f(d[0], !0, t), r(d[0], d[1], !0, t))
                })
            }
        }
        var o = this;
        o.select = e, o.unselect = n, o.reportSelection = r, o.daySelectionMousedown = a;
        var i = o.opt, s = o.trigger, c = o.defaultSelectionEnd, l = o.renderSelection, u = o.clearSelection, f = !1;
        i("selectable") && i("unselectAuto") && t(document).mousedown(function(e) {
            var r = i("unselectCancel");
            r && t(e.target).parents(r).length || n(e)
        })
    }
    function ve() {
        function e(e, n) {
            var r = o.shift();
            return r || (r = t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")), r[0].parentNode != n[0] && r.appendTo(n), a.push(r.css(e).show()), r
        }
        function n() {
            for (var t; t = a.shift(); )
                o.push(t.hide().unbind())
        }
        var r = this;
        r.renderOverlay = e, r.clearOverlays = n;
        var a = [], o = []
    }
    function he(t) {
        var e, n, r = this;
        r.build = function() {
            e = [], n = [], t(e, n)
        }, r.cell = function(t, r) {
            var a, o = e.length, i = n.length, s = -1, c = -1;
            for (a = 0; o > a; a++)
                if (r >= e[a][0] && e[a][1] > r) {
                    s = a;
                    break
                }
            for (a = 0; i > a; a++)
                if (t >= n[a][0] && n[a][1] > t) {
                    c = a;
                    break
                }
            return s >= 0 && c >= 0 ? {row: s, col: c} : null
        }, r.rect = function(t, r, a, o, i) {
            var s = i.offset();
            return{top: e[t][0] - s.top, left: n[r][0] - s.left, width: n[o][1] - n[r][0], height: e[a][1] - e[t][0]}
        }
    }
    function ge(e) {
        function n(t) {
            pe(t);
            var n = e.cell(t.pageX, t.pageY);
            (!n != !i || n && (n.row != i.row || n.col != i.col)) && (n ? (o || (o = n), a(n, o, n.row - o.row, n.col - o.col)) : a(n, o), i = n)
        }
        var r, a, o, i, s = this;
        s.start = function(s, c, l) {
            a = s, o = i = null, e.build(), n(c), r = l || "mousemove", t(document).bind(r, n)
        }, s.stop = function() {
            return t(document).unbind(r, n), i
        }
    }
    function pe(t) {
        t.pageX === e && (t.pageX = t.originalEvent.pageX, t.pageY = t.originalEvent.pageY)
    }
    function me(t) {
        function n(e) {
            return a[e] = a[e] || t(e)
        }
        var r = this, a = {}, o = {}, i = {};
        r.left = function(t) {
            return o[t] = o[t] === e ? n(t).position().left : o[t]
        }, r.right = function(t) {
            return i[t] = i[t] === e ? r.left(t) + n(t).width() : i[t]
        }, r.clear = function() {
            a = {}, o = {}, i = {}
        }
    }
    var ye = {defaultView: "month", aspectRatio: 1.35, header: {left: "title", center: "", right: "today prev,next"}, weekends: !0, weekNumbers: !1, weekNumberCalculation: "iso", weekNumberTitle: "W", allDayDefault: !0, ignoreTimezone: !0, lazyFetching: !0, startParam: "start", endParam: "end", titleFormat: {month: "MMMM yyyy", week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}", day: "dddd, MMM d, yyyy"}, columnFormat: {month: "ddd", week: "ddd M/d", day: "dddd M/d"}, timeFormat: {"": "h(:mm)t"}, isRTL: !1, firstDay: 0, monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], buttonText: {prev: "<span class='fc-text-arrow'>&lsaquo;</span>", next: "<span class='fc-text-arrow'>&rsaquo;</span>", prevYear: "<span class='fc-text-arrow'>&laquo;</span>", nextYear: "<span class='fc-text-arrow'>&raquo;</span>", today: "today", month: "month", week: "week", day: "day"}, theme: !1, buttonIcons: {prev: "circle-triangle-w", next: "circle-triangle-e"}, unselectAuto: !0, dropAccept: "*"}, be = {header: {left: "next,prev today", center: "", right: "title"}, buttonText: {prev: "<span class='fc-text-arrow'>&rsaquo;</span>", next: "<span class='fc-text-arrow'>&lsaquo;</span>", prevYear: "<span class='fc-text-arrow'>&raquo;</span>", nextYear: "<span class='fc-text-arrow'>&laquo;</span>"}, buttonIcons: {prev: "circle-triangle-e", next: "circle-triangle-w"}}, we = t.fullCalendar = {version: "1.6.1"}, De = we.views = {};
    t.fn.fullCalendar = function(n) {
        if ("string" == typeof n) {
            var a, o = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var r = t.data(this, "fullCalendar");
                if (r && t.isFunction(r[n])) {
                    var i = r[n].apply(r, o);
                    a === e && (a = i), "destroy" == n && t.removeData(this, "fullCalendar")
                }
            }), a !== e ? a : this
        }
        var i = n.eventSources || [];
        return delete n.eventSources, n.events && (i.push(n.events), delete n.events), n = t.extend(!0, {}, ye, n.isRTL || n.isRTL === e && ye.isRTL ? be : {}, n), this.each(function(e, a) {
            var o = t(a), s = new r(o, n, i);
            o.data("fullCalendar", s), s.render()
        }), this
    }, we.sourceNormalizers = [], we.sourceFetchers = [];
    var Me = {dataType: "json", cache: !1}, Ce = 1;
    we.addDays = c, we.cloneDate = d, we.parseDate = m, we.parseISO8601 = y, we.parseTime = b, we.formatDate = w, we.formatDates = D;
    var Se = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], Ee = 864e5, xe = 36e5, Te = 6e4, ke = {s: function(t) {
            return t.getSeconds()
        }, ss: function(t) {
            return P(t.getSeconds())
        }, m: function(t) {
            return t.getMinutes()
        }, mm: function(t) {
            return P(t.getMinutes())
        }, h: function(t) {
            return t.getHours() % 12 || 12
        }, hh: function(t) {
            return P(t.getHours() % 12 || 12)
        }, H: function(t) {
            return t.getHours()
        }, HH: function(t) {
            return P(t.getHours())
        }, d: function(t) {
            return t.getDate()
        }, dd: function(t) {
            return P(t.getDate())
        }, ddd: function(t, e) {
            return e.dayNamesShort[t.getDay()]
        }, dddd: function(t, e) {
            return e.dayNames[t.getDay()]
        }, M: function(t) {
            return t.getMonth() + 1
        }, MM: function(t) {
            return P(t.getMonth() + 1)
        }, MMM: function(t, e) {
            return e.monthNamesShort[t.getMonth()]
        }, MMMM: function(t, e) {
            return e.monthNames[t.getMonth()]
        }, yy: function(t) {
            return(t.getFullYear() + "").substring(2)
        }, yyyy: function(t) {
            return t.getFullYear()
        }, t: function(t) {
            return 12 > t.getHours() ? "a" : "p"
        }, tt: function(t) {
            return 12 > t.getHours() ? "am" : "pm"
        }, T: function(t) {
            return 12 > t.getHours() ? "A" : "P"
        }, TT: function(t) {
            return 12 > t.getHours() ? "AM" : "PM"
        }, u: function(t) {
            return w(t, "yyyy-MM-dd'T'HH:mm:ss'Z'")
        }, S: function(t) {
            var e = t.getDate();
            return e > 10 && 20 > e ? "th" : ["st", "nd", "rd"][e % 10 - 1] || "th"
        }, w: function(t, e) {
            return e.weekNumberCalculation(t)
        }, W: function(t) {
            return M(t)
        }};
    we.dateFormatters = ke, we.applyAll = G, De.month = te, De.basicWeek = ee, De.basicDay = ne, n({weekMode: "fixed"}), De.agendaWeek = oe, De.agendaDay = ie, n({allDaySlot: !0, allDayText: "all-day", firstHour: 6, slotMinutes: 30, defaultEventMinutes: 120, axisFormat: "h(:mm)tt", timeFormat: {agenda: "h:mm{ - h:mm}"}, dragOpacity: {agenda: .5}, minTime: 0, maxTime: 24})
})(jQuery);

/*!
 * FullCalendar v1.6.1 Google Calendar Plugin
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function(e) {
    function o(t, o, u) {
        var a = t.success;
        var f = e.extend({}, t.data || {}, {"start-min": n(o, "u"), "start-max": n(u, "u"), singleevents: true, "max-results": 9999});
        var l = t.currentTimezone;
        if (l) {
            f.ctz = l = l.replace(" ", "_")
        }
        return e.extend({}, t, {url: t.url.replace(/\/basic$/, "/full") + "?alt=json-in-script&callback=?", dataType: "jsonp", data: f, startParam: false, endParam: false, success: function(t) {
                var n = [];
                if (t.feed.entry) {
                    e.each(t.feed.entry, function(t, s) {
                        var o = s["gd$when"][0]["startTime"];
                        var u = r(o, true);
                        var a = r(s["gd$when"][0]["endTime"], true);
                        var f = o.indexOf("T") == -1;
                        var c;
                        e.each(s.link, function(e, t) {
                            if (t.type == "text/html") {
                                c = t.href;
                                if (l) {
                                    c += (c.indexOf("?") == -1 ? "?" : "&") + "ctz=" + l
                                }
                            }
                        });
                        if (f) {
                            i(a, -1)
                        }
                        n.push({id: s["gCal$uid"]["value"], title: s["title"]["$t"], url: c, start: u, end: a, allDay: f, location: s["gd$where"][0]["valueString"], description: s["content"]["$t"]})
                    })
                }
                var o = [n].concat(Array.prototype.slice.call(arguments, 1));
                var u = s(a, this, o);
                if (e.isArray(u)) {
                    return u
                }
                return n
            }})
    }
    var t = e.fullCalendar;
    var n = t.formatDate;
    var r = t.parseISO8601;
    var i = t.addDays;
    var s = t.applyAll;
    t.sourceNormalizers.push(function(e) {
        if (e.dataType == "gcal" || e.dataType === undefined && (e.url || "").match(/^(http|https):\/\/www.google.com\/calendar\/feeds\//)) {
            e.dataType = "gcal";
            if (e.editable === undefined) {
                e.editable = false
            }
        }
    });
    t.sourceFetchers.push(function(e, t, n) {
        if (e.dataType == "gcal") {
            return o(e, t, n)
        }
    });
    t.gcalFeed = function(t, n) {
        return e.extend({}, n, {url: t, dataType: "gcal"})
    }
})(jQuery);

/* Javascript plotting library for jQuery, version 0.8.1.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 *
 * Plugin for jQuery for working with colors. Version 1.1.
 * Inspiration from jQuery color animation plugin by John Resig.
 * Released under the MIT license by Ole Laursen, October 2009.
 */(function(e) {
    e.color = {}, e.color.make = function(t, n, r, i) {
        var s = {};
        return s.r = t || 0, s.g = n || 0, s.b = r || 0, s.a = i != null ? i : 1, s.add = function(e, t) {
            for (var n = 0; n < e.length; ++n)
                s[e.charAt(n)] += t;
            return s.normalize()
        }, s.scale = function(e, t) {
            for (var n = 0; n < e.length; ++n)
                s[e.charAt(n)] *= t;
            return s.normalize()
        }, s.toString = function() {
            return s.a >= 1 ? "rgb(" + [s.r, s.g, s.b].join(",") + ")" : "rgba(" + [s.r, s.g, s.b, s.a].join(",") + ")"
        }, s.normalize = function() {
            function e(e, t, n) {
                return t < e ? e : t > n ? n : t
            }
            return s.r = e(0, parseInt(s.r), 255), s.g = e(0, parseInt(s.g), 255), s.b = e(0, parseInt(s.b), 255), s.a = e(0, s.a, 1), s
        }, s.clone = function() {
            return e.color.make(s.r, s.b, s.g, s.a)
        }, s.normalize()
    }, e.color.extract = function(t, n) {
        var r;
        do {
            r = t.css(n).toLowerCase();
            if (r != "" && r != "transparent")
                break;
            t = t.parent()
        } while (!e.nodeName(t.get(0), "body"));
        return r == "rgba(0, 0, 0, 0)" && (r = "transparent"), e.color.parse(r)
    }, e.color.parse = function(n) {
        var r, i = e.color.make;
        if (r = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n))
            return i(parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[3], 10));
        if (r = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n))
            return i(parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[3], 10), parseFloat(r[4]));
        if (r = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n))
            return i(parseFloat(r[1]) * 2.55, parseFloat(r[2]) * 2.55, parseFloat(r[3]) * 2.55);
        if (r = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n))
            return i(parseFloat(r[1]) * 2.55, parseFloat(r[2]) * 2.55, parseFloat(r[3]) * 2.55, parseFloat(r[4]));
        if (r = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n))
            return i(parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16));
        if (r = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n))
            return i(parseInt(r[1] + r[1], 16), parseInt(r[2] + r[2], 16), parseInt(r[3] + r[3], 16));
        var s = e.trim(n).toLowerCase();
        return s == "transparent" ? i(255, 255, 255, 0) : (r = t[s] || [0, 0, 0], i(r[0], r[1], r[2]))
    };
    var t = {aqua: [0, 255, 255], azure: [240, 255, 255], beige: [245, 245, 220], black: [0, 0, 0], blue: [0, 0, 255], brown: [165, 42, 42], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [255, 0, 255], gold: [255, 215, 0], green: [0, 128, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, 255, 255], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightyellow: [255, 255, 224], lime: [0, 255, 0], magenta: [255, 0, 255], maroon: [128, 0, 0], navy: [0, 0, 128], olive: [128, 128, 0], orange: [255, 165, 0], pink: [255, 192, 203], purple: [128, 0, 128], violet: [128, 0, 128], red: [255, 0, 0], silver: [192, 192, 192], white: [255, 255, 255], yellow: [255, 255, 0]}
})(jQuery), function(e) {
    function n(t, n) {
        var r = n.children("." + t)[0];
        if (r == null) {
            r = document.createElement("canvas"), r.className = t, e(r).css({direction: "ltr", position: "absolute", left: 0, top: 0}).appendTo(n);
            if (!r.getContext) {
                if (!window.G_vmlCanvasManager)
                    throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
                r = window.G_vmlCanvasManager.initElement(r)
            }
        }
        this.element = r;
        var i = this.context = r.getContext("2d"), s = window.devicePixelRatio || 1, o = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1;
        this.pixelRatio = s / o, this.resize(n.width(), n.height()), this.textContainer = null, this.text = {}, this._textCache = {}
    }
    function r(t, r, s, o) {
        function E(e, t) {
            t = [w].concat(t);
            for (var n = 0; n < e.length; ++n)
                e[n].apply(this, t)
        }
        function S() {
            var t = {Canvas: n};
            for (var r = 0; r < o.length; ++r) {
                var i = o[r];
                i.init(w, t), i.options && e.extend(!0, a, i.options)
            }
        }
        function x(n) {
            e.extend(!0, a, n), n && n.colors && (a.colors = n.colors), a.xaxis.color == null && (a.xaxis.color = e.color.parse(a.grid.color).scale("a", .22).toString()), a.yaxis.color == null && (a.yaxis.color = e.color.parse(a.grid.color).scale("a", .22).toString()), a.xaxis.tickColor == null && (a.xaxis.tickColor = a.grid.tickColor || a.xaxis.color), a.yaxis.tickColor == null && (a.yaxis.tickColor = a.grid.tickColor || a.yaxis.color), a.grid.borderColor == null && (a.grid.borderColor = a.grid.color), a.grid.tickColor == null && (a.grid.tickColor = e.color.parse(a.grid.color).scale("a", .22).toString());
            var r, i, s, o = {style: t.css("font-style"), size: Math.round(.8 * (+t.css("font-size").replace("px", "") || 13)), variant: t.css("font-variant"), weight: t.css("font-weight"), family: t.css("font-family")};
            o.lineHeight = o.size * 1.15, s = a.xaxes.length || 1;
            for (r = 0; r < s; ++r)
                i = a.xaxes[r], i && !i.tickColor && (i.tickColor = i.color), i = e.extend(!0, {}, a.xaxis, i), a.xaxes[r] = i, i.font && (i.font = e.extend({}, o, i.font), i.font.color || (i.font.color = i.color));
            s = a.yaxes.length || 1;
            for (r = 0; r < s; ++r)
                i = a.yaxes[r], i && !i.tickColor && (i.tickColor = i.color), i = e.extend(!0, {}, a.yaxis, i), a.yaxes[r] = i, i.font && (i.font = e.extend({}, o, i.font), i.font.color || (i.font.color = i.color));
            a.xaxis.noTicks && a.xaxis.ticks == null && (a.xaxis.ticks = a.xaxis.noTicks), a.yaxis.noTicks && a.yaxis.ticks == null && (a.yaxis.ticks = a.yaxis.noTicks), a.x2axis && (a.xaxes[1] = e.extend(!0, {}, a.xaxis, a.x2axis), a.xaxes[1].position = "top"), a.y2axis && (a.yaxes[1] = e.extend(!0, {}, a.yaxis, a.y2axis), a.yaxes[1].position = "right"), a.grid.coloredAreas && (a.grid.markings = a.grid.coloredAreas), a.grid.coloredAreasColor && (a.grid.markingsColor = a.grid.coloredAreasColor), a.lines && e.extend(!0, a.series.lines, a.lines), a.points && e.extend(!0, a.series.points, a.points), a.bars && e.extend(!0, a.series.bars, a.bars), a.shadowSize != null && (a.series.shadowSize = a.shadowSize), a.highlightColor != null && (a.series.highlightColor = a.highlightColor);
            for (r = 0; r < a.xaxes.length; ++r)
                O(d, r + 1).options = a.xaxes[r];
            for (r = 0; r < a.yaxes.length; ++r)
                O(v, r + 1).options = a.yaxes[r];
            for (var u in b)
                a.hooks[u] && a.hooks[u].length && (b[u] = b[u].concat(a.hooks[u]));
            E(b.processOptions, [a])
        }
        function T(e) {
            u = N(e), M(), _()
        }
        function N(t) {
            var n = [];
            for (var r = 0; r < t.length; ++r) {
                var i = e.extend(!0, {}, a.series);
                t[r].data != null ? (i.data = t[r].data, delete t[r].data, e.extend(!0, i, t[r]), t[r].data = i.data) : i.data = t[r], n.push(i)
            }
            return n
        }
        function C(e, t) {
            var n = e[t + "axis"];
            return typeof n == "object" && (n = n.n), typeof n != "number" && (n = 1), n
        }
        function k() {
            return e.grep(d.concat(v), function(e) {
                return e
            })
        }
        function L(e) {
            var t = {}, n, r;
            for (n = 0; n < d.length; ++n)
                r = d[n], r && r.used && (t["x" + r.n] = r.c2p(e.left));
            for (n = 0; n < v.length; ++n)
                r = v[n], r && r.used && (t["y" + r.n] = r.c2p(e.top));
            return t.x1 !== undefined && (t.x = t.x1), t.y1 !== undefined && (t.y = t.y1), t
        }
        function A(e) {
            var t = {}, n, r, i;
            for (n = 0; n < d.length; ++n) {
                r = d[n];
                if (r && r.used) {
                    i = "x" + r.n, e[i] == null && r.n == 1 && (i = "x");
                    if (e[i] != null) {
                        t.left = r.p2c(e[i]);
                        break
                    }
                }
            }
            for (n = 0; n < v.length; ++n) {
                r = v[n];
                if (r && r.used) {
                    i = "y" + r.n, e[i] == null && r.n == 1 && (i = "y");
                    if (e[i] != null) {
                        t.top = r.p2c(e[i]);
                        break
                    }
                }
            }
            return t
        }
        function O(t, n) {
            return t[n - 1] || (t[n - 1] = {n: n, direction: t == d ? "x" : "y", options: e.extend(!0, {}, t == d ? a.xaxis : a.yaxis)}), t[n - 1]
        }
        function M() {
            var t = u.length, n = -1, r;
            for (r = 0; r < u.length; ++r) {
                var i = u[r].color;
                i != null && (t--, typeof i == "number" && i > n && (n = i))
            }
            t <= n && (t = n + 1);
            var s, o = [], f = a.colors, l = f.length, c = 0;
            for (r = 0; r < t; r++)
                s = e.color.parse(f[r % l] || "#666"), r % l == 0 && r && (c >= 0 ? c < .5 ? c = -c - .2 : c = 0 : c = -c), o[r] = s.scale("rgb", 1 + c);
            var h = 0, p;
            for (r = 0; r < u.length; ++r) {
                p = u[r], p.color == null ? (p.color = o[h].toString(), ++h) : typeof p.color == "number" && (p.color = o[p.color].toString());
                if (p.lines.show == null) {
                    var m, g = !0;
                    for (m in p)
                        if (p[m] && p[m].show) {
                            g = !1;
                            break
                        }
                    g && (p.lines.show = !0)
                }
                p.lines.zero == null && (p.lines.zero = !!p.lines.fill), p.xaxis = O(d, C(p, "x")), p.yaxis = O(v, C(p, "y"))
            }
        }
        function _() {
            function x(e, t, n) {
                t < e.datamin && t != -r && (e.datamin = t), n > e.datamax && n != r && (e.datamax = n)
            }
            var t = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, r = Number.MAX_VALUE, i, s, o, a, f, l, c, h, p, d, v, m, g, y, w, S;
            e.each(k(), function(e, r) {
                r.datamin = t, r.datamax = n, r.used = !1
            });
            for (i = 0; i < u.length; ++i)
                l = u[i], l.datapoints = {points: []}, E(b.processRawData, [l, l.data, l.datapoints]);
            for (i = 0; i < u.length; ++i) {
                l = u[i], w = l.data, S = l.datapoints.format;
                if (!S) {
                    S = [], S.push({x: !0, number: !0, required: !0}), S.push({y: !0, number: !0, required: !0});
                    if (l.bars.show || l.lines.show && l.lines.fill) {
                        var T = !!(l.bars.show && l.bars.zero || l.lines.show && l.lines.zero);
                        S.push({y: !0, number: !0, required: !1, defaultValue: 0, autoscale: T}), l.bars.horizontal && (delete S[S.length - 1].y, S[S.length - 1].x = !0)
                    }
                    l.datapoints.format = S
                }
                if (l.datapoints.pointsize != null)
                    continue;
                l.datapoints.pointsize = S.length, h = l.datapoints.pointsize, c = l.datapoints.points;
                var N = l.lines.show && l.lines.steps;
                l.xaxis.used = l.yaxis.used = !0;
                for (s = o = 0; s < w.length; ++s, o += h) {
                    y = w[s];
                    var C = y == null;
                    if (!C)
                        for (a = 0; a < h; ++a)
                            m = y[a], g = S[a], g && (g.number && m != null && (m = +m, isNaN(m) ? m = null : m == Infinity ? m = r : m == -Infinity && (m = -r)), m == null && (g.required && (C = !0), g.defaultValue != null && (m = g.defaultValue))), c[o + a] = m;
                    if (C)
                        for (a = 0; a < h; ++a)
                            m = c[o + a], m != null && (g = S[a], g.autoscale && (g.x && x(l.xaxis, m, m), g.y && x(l.yaxis, m, m))), c[o + a] = null;
                    else if (N && o > 0 && c[o - h] != null && c[o - h] != c[o] && c[o - h + 1] != c[o + 1]) {
                        for (a = 0; a < h; ++a)
                            c[o + h + a] = c[o + a];
                        c[o + 1] = c[o - h + 1], o += h
                    }
                }
            }
            for (i = 0; i < u.length; ++i)
                l = u[i], E(b.processDatapoints, [l, l.datapoints]);
            for (i = 0; i < u.length; ++i) {
                l = u[i], c = l.datapoints.points, h = l.datapoints.pointsize, S = l.datapoints.format;
                var L = t, A = t, O = n, M = n;
                for (s = 0; s < c.length; s += h) {
                    if (c[s] == null)
                        continue;
                    for (a = 0; a < h; ++a) {
                        m = c[s + a], g = S[a];
                        if (!g || g.autoscale === !1 || m == r || m == -r)
                            continue;
                        g.x && (m < L && (L = m), m > O && (O = m)), g.y && (m < A && (A = m), m > M && (M = m))
                    }
                }
                if (l.bars.show) {
                    var _;
                    switch (l.bars.align) {
                        case"left":
                            _ = 0;
                            break;
                        case"right":
                            _ = -l.bars.barWidth;
                            break;
                        case"center":
                            _ = -l.bars.barWidth / 2;
                            break;
                        default:
                            throw new Error("Invalid bar alignment: " + l.bars.align)
                    }
                    l.bars.horizontal ? (A += _, M += _ + l.bars.barWidth) : (L += _, O += _ + l.bars.barWidth)
                }
                x(l.xaxis, L, O), x(l.yaxis, A, M)
            }
            e.each(k(), function(e, r) {
                r.datamin == t && (r.datamin = null), r.datamax == n && (r.datamax = null)
            })
        }
        function D() {
            t.css("padding", 0).children(":not(.flot-base,.flot-overlay)").remove(), t.css("position") == "static" && t.css("position", "relative"), f = new n("flot-base", t), l = new n("flot-overlay", t), h = f.context, p = l.context, c = e(l.element).unbind();
            var r = t.data("plot");
            r && (r.shutdown(), l.clear()), t.data("plot", w)
        }
        function P() {
            a.grid.hoverable && (c.mousemove(at), c.bind("mouseleave", ft)), a.grid.clickable && c.click(lt), E(b.bindEvents, [c])
        }
        function H() {
            ot && clearTimeout(ot), c.unbind("mousemove", at), c.unbind("mouseleave", ft), c.unbind("click", lt), E(b.shutdown, [c])
        }
        function B(e) {
            function t(e) {
                return e
            }
            var n, r, i = e.options.transform || t, s = e.options.inverseTransform;
            e.direction == "x" ? (n = e.scale = g / Math.abs(i(e.max) - i(e.min)), r = Math.min(i(e.max), i(e.min))) : (n = e.scale = y / Math.abs(i(e.max) - i(e.min)), n = -n, r = Math.max(i(e.max), i(e.min))), i == t ? e.p2c = function(e) {
                return(e - r) * n
            } : e.p2c = function(e) {
                return(i(e) - r) * n
            }, s ? e.c2p = function(e) {
                return s(r + e / n)
            } : e.c2p = function(e) {
                return r + e / n
            }
        }
        function j(e) {
            var t = e.options, n = e.ticks || [], r = t.labelWidth || 0, i = t.labelHeight || 0, s = r || e.direction == "x" ? Math.floor(f.width / (n.length || 1)) : null;
            legacyStyles = e.direction + "Axis " + e.direction + e.n + "Axis", layer = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + legacyStyles, font = t.font || "flot-tick-label tickLabel";
            for (var o = 0; o < n.length; ++o) {
                var u = n[o];
                if (!u.label)
                    continue;
                var a = f.getTextInfo(layer, u.label, font, null, s);
                r = Math.max(r, a.width), i = Math.max(i, a.height)
            }
            e.labelWidth = t.labelWidth || r, e.labelHeight = t.labelHeight || i
        }
        function F(t) {
            var n = t.labelWidth, r = t.labelHeight, i = t.options.position, s = t.options.tickLength, o = a.grid.axisMargin, u = a.grid.labelMargin, l = t.direction == "x" ? d : v, c, h, p = e.grep(l, function(e) {
                return e && e.options.position == i && e.reserveSpace
            });
            e.inArray(t, p) == p.length - 1 && (o = 0);
            if (s == null) {
                var g = e.grep(l, function(e) {
                    return e && e.reserveSpace
                });
                h = e.inArray(t, g) == 0, h ? s = "full" : s = 5
            }
            isNaN(+s) || (u += +s), t.direction == "x" ? (r += u, i == "bottom" ? (m.bottom += r + o, t.box = {top: f.height - m.bottom, height: r}) : (t.box = {top: m.top + o, height: r}, m.top += r + o)) : (n += u, i == "left" ? (t.box = {left: m.left + o, width: n}, m.left += n + o) : (m.right += n + o, t.box = {left: f.width - m.right, width: n})), t.position = i, t.tickLength = s, t.box.padding = u, t.innermost = h
        }
        function I(e) {
            e.direction == "x" ? (e.box.left = m.left - e.labelWidth / 2, e.box.width = f.width - m.left - m.right + e.labelWidth) : (e.box.top = m.top - e.labelHeight / 2, e.box.height = f.height - m.bottom - m.top + e.labelHeight)
        }
        function q() {
            var t = a.grid.minBorderMargin, n = {x: 0, y: 0}, r, i;
            if (t == null) {
                t = 0;
                for (r = 0; r < u.length; ++r)
                    t = Math.max(t, 2 * (u[r].points.radius + u[r].points.lineWidth / 2))
            }
            n.x = n.y = Math.ceil(t), e.each(k(), function(e, t) {
                var r = t.direction;
                t.reserveSpace && (n[r] = Math.ceil(Math.max(n[r], (r == "x" ? t.labelWidth : t.labelHeight) / 2)))
            }), m.left = Math.max(n.x, m.left), m.right = Math.max(n.x, m.right), m.top = Math.max(n.y, m.top), m.bottom = Math.max(n.y, m.bottom)
        }
        function R() {
            var t, n = k(), r = a.grid.show;
            for (var i in m) {
                var s = a.grid.margin || 0;
                m[i] = typeof s == "number" ? s : s[i] || 0
            }
            E(b.processOffset, [m]);
            for (var i in m)
                typeof a.grid.borderWidth == "object" ? m[i] += r ? a.grid.borderWidth[i] : 0 : m[i] += r ? a.grid.borderWidth : 0;
            e.each(n, function(e, t) {
                t.show = t.options.show, t.show == null && (t.show = t.used), t.reserveSpace = t.show || t.options.reserveSpace, U(t)
            });
            if (r) {
                var o = e.grep(n, function(e) {
                    return e.reserveSpace
                });
                e.each(o, function(e, t) {
                    z(t), W(t), X(t, t.ticks), j(t)
                });
                for (t = o.length - 1; t >= 0; --t)
                    F(o[t]);
                q(), e.each(o, function(e, t) {
                    I(t)
                })
            }
            g = f.width - m.left - m.right, y = f.height - m.bottom - m.top, e.each(n, function(e, t) {
                B(t)
            }), r && G(), it()
        }
        function U(e) {
            var t = e.options, n = +(t.min != null ? t.min : e.datamin), r = +(t.max != null ? t.max : e.datamax), i = r - n;
            if (i == 0) {
                var s = r == 0 ? 1 : .01;
                t.min == null && (n -= s);
                if (t.max == null || t.min != null)
                    r += s
            } else {
                var o = t.autoscaleMargin;
                o != null && (t.min == null && (n -= i * o, n < 0 && e.datamin != null && e.datamin >= 0 && (n = 0)), t.max == null && (r += i * o, r > 0 && e.datamax != null && e.datamax <= 0 && (r = 0)))
            }
            e.min = n, e.max = r
        }
        function z(t) {
            var n = t.options, r;
            typeof n.ticks == "number" && n.ticks > 0 ? r = n.ticks : r = .3 * Math.sqrt(t.direction == "x" ? f.width : f.height);
            var s = (t.max - t.min) / r, o = -Math.floor(Math.log(s) / Math.LN10), u = n.tickDecimals;
            u != null && o > u && (o = u);
            var a = Math.pow(10, -o), l = s / a, c;
            l < 1.5 ? c = 1 : l < 3 ? (c = 2, l > 2.25 && (u == null || o + 1 <= u) && (c = 2.5, ++o)) : l < 7.5 ? c = 5 : c = 10, c *= a, n.minTickSize != null && c < n.minTickSize && (c = n.minTickSize), t.delta = s, t.tickDecimals = Math.max(0, u != null ? u : o), t.tickSize = n.tickSize || c;
            if (n.mode == "time" && !t.tickGenerator)
                throw new Error("Time mode requires the flot.time plugin.");
            t.tickGenerator || (t.tickGenerator = function(e) {
                var t = [], n = i(e.min, e.tickSize), r = 0, s = Number.NaN, o;
                do
                    o = s, s = n + r * e.tickSize, t.push(s), ++r;
                while (s < e.max && s != o);
                return t
            }, t.tickFormatter = function(e, t) {
                var n = t.tickDecimals ? Math.pow(10, t.tickDecimals) : 1, r = "" + Math.round(e * n) / n;
                if (t.tickDecimals != null) {
                    var i = r.indexOf("."), s = i == -1 ? 0 : r.length - i - 1;
                    if (s < t.tickDecimals)
                        return(s ? r : r + ".") + ("" + n).substr(1, t.tickDecimals - s)
                }
                return r
            }), e.isFunction(n.tickFormatter) && (t.tickFormatter = function(e, t) {
                return"" + n.tickFormatter(e, t)
            });
            if (n.alignTicksWithAxis != null) {
                var h = (t.direction == "x" ? d : v)[n.alignTicksWithAxis - 1];
                if (h && h.used && h != t) {
                    var p = t.tickGenerator(t);
                    p.length > 0 && (n.min == null && (t.min = Math.min(t.min, p[0])), n.max == null && p.length > 1 && (t.max = Math.max(t.max, p[p.length - 1]))), t.tickGenerator = function(e) {
                        var t = [], n, r;
                        for (r = 0; r < h.ticks.length; ++r)
                            n = (h.ticks[r].v - h.min) / (h.max - h.min), n = e.min + n * (e.max - e.min), t.push(n);
                        return t
                    };
                    if (!t.mode && n.tickDecimals == null) {
                        var m = Math.max(0, -Math.floor(Math.log(t.delta) / Math.LN10) + 1), g = t.tickGenerator(t);
                        g.length > 1 && /\..*0$/.test((g[1] - g[0]).toFixed(m)) || (t.tickDecimals = m)
                    }
                }
            }
        }
        function W(t) {
            var n = t.options.ticks, r = [];
            n == null || typeof n == "number" && n > 0 ? r = t.tickGenerator(t) : n && (e.isFunction(n) ? r = n(t) : r = n);
            var i, s;
            t.ticks = [];
            for (i = 0; i < r.length; ++i) {
                var o = null, u = r[i];
                typeof u == "object" ? (s = +u[0], u.length > 1 && (o = u[1])) : s = +u, o == null && (o = t.tickFormatter(s, t)), isNaN(s) || t.ticks.push({v: s, label: o})
            }
        }
        function X(e, t) {
            e.options.autoscaleMargin && t.length > 0 && (e.options.min == null && (e.min = Math.min(e.min, t[0].v)), e.options.max == null && t.length > 1 && (e.max = Math.max(e.max, t[t.length - 1].v)))
        }
        function V() {
            f.clear(), E(b.drawBackground, [h]);
            var e = a.grid;
            e.show && e.backgroundColor && K(), e.show && !e.aboveData && Q();
            for (var t = 0; t < u.length; ++t)
                E(b.drawSeries, [h, u[t]]), Y(u[t]);
            E(b.draw, [h]), e.show && e.aboveData && Q(), f.render(), ht()
        }
        function J(e, t) {
            var n, r, i, s, o = k();
            for (var u = 0; u < o.length; ++u) {
                n = o[u];
                if (n.direction == t) {
                    s = t + n.n + "axis", !e[s] && n.n == 1 && (s = t + "axis");
                    if (e[s]) {
                        r = e[s].from, i = e[s].to;
                        break
                    }
                }
            }
            e[s] || (n = t == "x" ? d[0] : v[0], r = e[t + "1"], i = e[t + "2"]);
            if (r != null && i != null && r > i) {
                var a = r;
                r = i, i = a
            }
            return{from: r, to: i, axis: n}
        }
        function K() {
            h.save(), h.translate(m.left, m.top), h.fillStyle = bt(a.grid.backgroundColor, y, 0, "rgba(255, 255, 255, 0)"), h.fillRect(0, 0, g, y), h.restore()
        }
        function Q() {
            var t, n, r, i;
            h.save(), h.translate(m.left, m.top);
            var s = a.grid.markings;
            if (s) {
                e.isFunction(s) && (n = w.getAxes(), n.xmin = n.xaxis.min, n.xmax = n.xaxis.max, n.ymin = n.yaxis.min, n.ymax = n.yaxis.max, s = s(n));
                for (t = 0; t < s.length; ++t) {
                    var o = s[t], u = J(o, "x"), f = J(o, "y");
                    u.from == null && (u.from = u.axis.min), u.to == null && (u.to = u.axis.max), f.from == null && (f.from = f.axis.min), f.to == null && (f.to = f.axis.max);
                    if (u.to < u.axis.min || u.from > u.axis.max || f.to < f.axis.min || f.from > f.axis.max)
                        continue;
                    u.from = Math.max(u.from, u.axis.min), u.to = Math.min(u.to, u.axis.max), f.from = Math.max(f.from, f.axis.min), f.to = Math.min(f.to, f.axis.max);
                    if (u.from == u.to && f.from == f.to)
                        continue;
                    u.from = u.axis.p2c(u.from), u.to = u.axis.p2c(u.to), f.from = f.axis.p2c(f.from), f.to = f.axis.p2c(f.to), u.from == u.to || f.from == f.to ? (h.beginPath(), h.strokeStyle = o.color || a.grid.markingsColor, h.lineWidth = o.lineWidth || a.grid.markingsLineWidth, h.moveTo(u.from, f.from), h.lineTo(u.to, f.to), h.stroke()) : (h.fillStyle = o.color || a.grid.markingsColor, h.fillRect(u.from, f.to, u.to - u.from, f.from - f.to))
                }
            }
            n = k(), r = a.grid.borderWidth;
            for (var l = 0; l < n.length; ++l) {
                var c = n[l], p = c.box, d = c.tickLength, v, b, E, S;
                if (!c.show || c.ticks.length == 0)
                    continue;
                h.lineWidth = 1, c.direction == "x" ? (v = 0, d == "full" ? b = c.position == "top" ? 0 : y : b = p.top - m.top + (c.position == "top" ? p.height : 0)) : (b = 0, d == "full" ? v = c.position == "left" ? 0 : g : v = p.left - m.left + (c.position == "left" ? p.width : 0)), c.innermost || (h.strokeStyle = c.options.color, h.beginPath(), E = S = 0, c.direction == "x" ? E = g + 1 : S = y + 1, h.lineWidth == 1 && (c.direction == "x" ? b = Math.floor(b) + .5 : v = Math.floor(v) + .5), h.moveTo(v, b), h.lineTo(v + E, b + S), h.stroke()), h.strokeStyle = c.options.tickColor, h.beginPath();
                for (t = 0; t < c.ticks.length; ++t) {
                    var x = c.ticks[t].v;
                    E = S = 0;
                    if (isNaN(x) || x < c.min || x > c.max || d == "full" && (typeof r == "object" && r[c.position] > 0 || r > 0) && (x == c.min || x == c.max))
                        continue;
                    c.direction == "x" ? (v = c.p2c(x), S = d == "full" ? -y : d, c.position == "top" && (S = -S)) : (b = c.p2c(x), E = d == "full" ? -g : d, c.position == "left" && (E = -E)), h.lineWidth == 1 && (c.direction == "x" ? v = Math.floor(v) + .5 : b = Math.floor(b) + .5), h.moveTo(v, b), h.lineTo(v + E, b + S)
                }
                h.stroke()
            }
            r && (i = a.grid.borderColor, typeof r == "object" || typeof i == "object" ? (typeof r != "object" && (r = {top: r, right: r, bottom: r, left: r}), typeof i != "object" && (i = {top: i, right: i, bottom: i, left: i}), r.top > 0 && (h.strokeStyle = i.top, h.lineWidth = r.top, h.beginPath(), h.moveTo(0 - r.left, 0 - r.top / 2), h.lineTo(g, 0 - r.top / 2), h.stroke()), r.right > 0 && (h.strokeStyle = i.right, h.lineWidth = r.right, h.beginPath(), h.moveTo(g + r.right / 2, 0 - r.top), h.lineTo(g + r.right / 2, y), h.stroke()), r.bottom > 0 && (h.strokeStyle = i.bottom, h.lineWidth = r.bottom, h.beginPath(), h.moveTo(g + r.right, y + r.bottom / 2), h.lineTo(0, y + r.bottom / 2), h.stroke()), r.left > 0 && (h.strokeStyle = i.left, h.lineWidth = r.left, h.beginPath(), h.moveTo(0 - r.left / 2, y + r.bottom), h.lineTo(0 - r.left / 2, 0), h.stroke())) : (h.lineWidth = r, h.strokeStyle = a.grid.borderColor, h.strokeRect(-r / 2, -r / 2, g + r, y + r))), h.restore()
        }
        function G() {
            e.each(k(), function(e, t) {
                if (!t.show || t.ticks.length == 0)
                    return;
                var n = t.box, r = t.direction + "Axis " + t.direction + t.n + "Axis", i = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + r, s = t.options.font || "flot-tick-label tickLabel", o, u, a, l, c;
                f.removeText(i);
                for (var h = 0; h < t.ticks.length; ++h) {
                    o = t.ticks[h];
                    if (!o.label || o.v < t.min || o.v > t.max)
                        continue;
                    t.direction == "x" ? (l = "center", u = m.left + t.p2c(o.v), t.position == "bottom" ? a = n.top + n.padding : (a = n.top + n.height - n.padding, c = "bottom")) : (c = "middle", a = m.top + t.p2c(o.v), t.position == "left" ? (u = n.left + n.width - n.padding, l = "right") : u = n.left + n.padding), f.addText(i, u, a, o.label, s, null, null, l, c)
                }
            })
        }
        function Y(e) {
            e.lines.show && Z(e), e.bars.show && nt(e), e.points.show && et(e)
        }
        function Z(e) {
            function t(e, t, n, r, i) {
                var s = e.points, o = e.pointsize, u = null, a = null;
                h.beginPath();
                for (var f = o; f < s.length; f += o) {
                    var l = s[f - o], c = s[f - o + 1], p = s[f], d = s[f + 1];
                    if (l == null || p == null)
                        continue;
                    if (c <= d && c < i.min) {
                        if (d < i.min)
                            continue;
                        l = (i.min - c) / (d - c) * (p - l) + l, c = i.min
                    } else if (d <= c && d < i.min) {
                        if (c < i.min)
                            continue;
                        p = (i.min - c) / (d - c) * (p - l) + l, d = i.min
                    }
                    if (c >= d && c > i.max) {
                        if (d > i.max)
                            continue;
                        l = (i.max - c) / (d - c) * (p - l) + l, c = i.max
                    } else if (d >= c && d > i.max) {
                        if (c > i.max)
                            continue;
                        p = (i.max - c) / (d - c) * (p - l) + l, d = i.max
                    }
                    if (l <= p && l < r.min) {
                        if (p < r.min)
                            continue;
                        c = (r.min - l) / (p - l) * (d - c) + c, l = r.min
                    } else if (p <= l && p < r.min) {
                        if (l < r.min)
                            continue;
                        d = (r.min - l) / (p - l) * (d - c) + c, p = r.min
                    }
                    if (l >= p && l > r.max) {
                        if (p > r.max)
                            continue;
                        c = (r.max - l) / (p - l) * (d - c) + c, l = r.max
                    } else if (p >= l && p > r.max) {
                        if (l > r.max)
                            continue;
                        d = (r.max - l) / (p - l) * (d - c) + c, p = r.max
                    }
                    (l != u || c != a) && h.moveTo(r.p2c(l) + t, i.p2c(c) + n), u = p, a = d, h.lineTo(r.p2c(p) + t, i.p2c(d) + n)
                }
                h.stroke()
            }
            function n(e, t, n) {
                var r = e.points, i = e.pointsize, s = Math.min(Math.max(0, n.min), n.max), o = 0, u, a = !1, f = 1, l = 0, c = 0;
                for (; ; ) {
                    if (i > 0 && o > r.length + i)
                        break;
                    o += i;
                    var p = r[o - i], d = r[o - i + f], v = r[o], m = r[o + f];
                    if (a) {
                        if (i > 0 && p != null && v == null) {
                            c = o, i = -i, f = 2;
                            continue
                        }
                        if (i < 0 && o == l + i) {
                            h.fill(), a = !1, i = -i, f = 1, o = l = c + i;
                            continue
                        }
                    }
                    if (p == null || v == null)
                        continue;
                    if (p <= v && p < t.min) {
                        if (v < t.min)
                            continue;
                        d = (t.min - p) / (v - p) * (m - d) + d, p = t.min
                    } else if (v <= p && v < t.min) {
                        if (p < t.min)
                            continue;
                        m = (t.min - p) / (v - p) * (m - d) + d, v = t.min
                    }
                    if (p >= v && p > t.max) {
                        if (v > t.max)
                            continue;
                        d = (t.max - p) / (v - p) * (m - d) + d, p = t.max
                    } else if (v >= p && v > t.max) {
                        if (p > t.max)
                            continue;
                        m = (t.max - p) / (v - p) * (m - d) + d, v = t.max
                    }
                    a || (h.beginPath(), h.moveTo(t.p2c(p), n.p2c(s)), a = !0);
                    if (d >= n.max && m >= n.max) {
                        h.lineTo(t.p2c(p), n.p2c(n.max)), h.lineTo(t.p2c(v), n.p2c(n.max));
                        continue
                    }
                    if (d <= n.min && m <= n.min) {
                        h.lineTo(t.p2c(p), n.p2c(n.min)), h.lineTo(t.p2c(v), n.p2c(n.min));
                        continue
                    }
                    var g = p, y = v;
                    d <= m && d < n.min && m >= n.min ? (p = (n.min - d) / (m - d) * (v - p) + p, d = n.min) : m <= d && m < n.min && d >= n.min && (v = (n.min - d) / (m - d) * (v - p) + p, m = n.min), d >= m && d > n.max && m <= n.max ? (p = (n.max - d) / (m - d) * (v - p) + p, d = n.max) : m >= d && m > n.max && d <= n.max && (v = (n.max - d) / (m - d) * (v - p) + p, m = n.max), p != g && h.lineTo(t.p2c(g), n.p2c(d)), h.lineTo(t.p2c(p), n.p2c(d)), h.lineTo(t.p2c(v), n.p2c(m)), v != y && (h.lineTo(t.p2c(v), n.p2c(m)), h.lineTo(t.p2c(y), n.p2c(m)))
                }
            }
            h.save(), h.translate(m.left, m.top), h.lineJoin = "round";
            var r = e.lines.lineWidth, i = e.shadowSize;
            if (r > 0 && i > 0) {
                h.lineWidth = i, h.strokeStyle = "rgba(0,0,0,0.1)";
                var s = Math.PI / 18;
                t(e.datapoints, Math.sin(s) * (r / 2 + i / 2), Math.cos(s) * (r / 2 + i / 2), e.xaxis, e.yaxis), h.lineWidth = i / 2, t(e.datapoints, Math.sin(s) * (r / 2 + i / 4), Math.cos(s) * (r / 2 + i / 4), e.xaxis, e.yaxis)
            }
            h.lineWidth = r, h.strokeStyle = e.color;
            var o = rt(e.lines, e.color, 0, y);
            o && (h.fillStyle = o, n(e.datapoints, e.xaxis, e.yaxis)), r > 0 && t(e.datapoints, 0, 0, e.xaxis, e.yaxis), h.restore()
        }
        function et(e) {
            function t(e, t, n, r, i, s, o, u) {
                var a = e.points, f = e.pointsize;
                for (var l = 0; l < a.length; l += f) {
                    var c = a[l], p = a[l + 1];
                    if (c == null || c < s.min || c > s.max || p < o.min || p > o.max)
                        continue;
                    h.beginPath(), c = s.p2c(c), p = o.p2c(p) + r, u == "circle" ? h.arc(c, p, t, 0, i ? Math.PI : Math.PI * 2, !1) : u(h, c, p, t, i), h.closePath(), n && (h.fillStyle = n, h.fill()), h.stroke()
                }
            }
            h.save(), h.translate(m.left, m.top);
            var n = e.points.lineWidth, r = e.shadowSize, i = e.points.radius, s = e.points.symbol;
            n == 0 && (n = 1e-4);
            if (n > 0 && r > 0) {
                var o = r / 2;
                h.lineWidth = o, h.strokeStyle = "rgba(0,0,0,0.1)", t(e.datapoints, i, null, o + o / 2, !0, e.xaxis, e.yaxis, s), h.strokeStyle = "rgba(0,0,0,0.2)", t(e.datapoints, i, null, o / 2, !0, e.xaxis, e.yaxis, s)
            }
            h.lineWidth = n, h.strokeStyle = e.color, t(e.datapoints, i, rt(e.points, e.color), 0, !1, e.xaxis, e.yaxis, s), h.restore()
        }
        function tt(e, t, n, r, i, s, o, u, a, f, l, c) {
            var h, p, d, v, m, g, y, b, w;
            l ? (b = g = y = !0, m = !1, h = n, p = e, v = t + r, d = t + i, p < h && (w = p, p = h, h = w, m = !0, g = !1)) : (m = g = y = !0, b = !1, h = e + r, p = e + i, d = n, v = t, v < d && (w = v, v = d, d = w, b = !0, y = !1));
            if (p < u.min || h > u.max || v < a.min || d > a.max)
                return;
            h < u.min && (h = u.min, m = !1), p > u.max && (p = u.max, g = !1), d < a.min && (d = a.min, b = !1), v > a.max && (v = a.max, y = !1), h = u.p2c(h), d = a.p2c(d), p = u.p2c(p), v = a.p2c(v), o && (f.beginPath(), f.moveTo(h, d), f.lineTo(h, v), f.lineTo(p, v), f.lineTo(p, d), f.fillStyle = o(d, v), f.fill()), c > 0 && (m || g || y || b) && (f.beginPath(), f.moveTo(h, d + s), m ? f.lineTo(h, v + s) : f.moveTo(h, v + s), y ? f.lineTo(p, v + s) : f.moveTo(p, v + s), g ? f.lineTo(p, d + s) : f.moveTo(p, d + s), b ? f.lineTo(h, d + s) : f.moveTo(h, d + s), f.stroke())
        }
        function nt(e) {
            function t(t, n, r, i, s, o, u) {
                var a = t.points, f = t.pointsize;
                for (var l = 0; l < a.length; l += f) {
                    if (a[l] == null)
                        continue;
                    tt(a[l], a[l + 1], a[l + 2], n, r, i, s, o, u, h, e.bars.horizontal, e.bars.lineWidth)
                }
            }
            h.save(), h.translate(m.left, m.top), h.lineWidth = e.bars.lineWidth, h.strokeStyle = e.color;
            var n;
            switch (e.bars.align) {
                case"left":
                    n = 0;
                    break;
                case"right":
                    n = -e.bars.barWidth;
                    break;
                case"center":
                    n = -e.bars.barWidth / 2;
                    break;
                default:
                    throw new Error("Invalid bar alignment: " + e.bars.align)
            }
            var r = e.bars.fill ? function(t, n) {
                return rt(e.bars, e.color, t, n)
            } : null;
            t(e.datapoints, n, n + e.bars.barWidth, 0, r, e.xaxis, e.yaxis), h.restore()
        }
        function rt(t, n, r, i) {
            var s = t.fill;
            if (!s)
                return null;
            if (t.fillColor)
                return bt(t.fillColor, r, i, n);
            var o = e.color.parse(n);
            return o.a = typeof s == "number" ? s : .4, o.normalize(), o.toString()
        }
        function it() {
            t.find(".legend").remove();
            if (!a.legend.show)
                return;
            var n = [], r = [], i = !1, s = a.legend.labelFormatter, o, f;
            for (var l = 0; l < u.length; ++l)
                o = u[l], o.label && (f = s ? s(o.label, o) : o.label, f && r.push({label: f, color: o.color}));
            if (a.legend.sorted)
                if (e.isFunction(a.legend.sorted))
                    r.sort(a.legend.sorted);
                else if (a.legend.sorted == "reverse")
                    r.reverse();
                else {
                    var c = a.legend.sorted != "descending";
                    r.sort(function(e, t) {
                        return e.label == t.label ? 0 : e.label < t.label != c ? 1 : -1
                    })
                }
            for (var l = 0; l < r.length; ++l) {
                var h = r[l];
                l % a.legend.noColumns == 0 && (i && n.push("</tr>"), n.push("<tr>"), i = !0), n.push('<td class="legendColorBox"><div style="border:1px solid ' + a.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + h.color + ';overflow:hidden"></div></div></td>' + '<td class="legendLabel">' + h.label + "</td>")
            }
            i && n.push("</tr>");
            if (n.length == 0)
                return;
            var p = '<table style="font-size:smaller;color:' + a.grid.color + '">' + n.join("") + "</table>";
            if (a.legend.container != null)
                e(a.legend.container).html(p);
            else {
                var d = "", v = a.legend.position, g = a.legend.margin;
                g[0] == null && (g = [g, g]), v.charAt(0) == "n" ? d += "top:" + (g[1] + m.top) + "px;" : v.charAt(0) == "s" && (d += "bottom:" + (g[1] + m.bottom) + "px;"), v.charAt(1) == "e" ? d += "right:" + (g[0] + m.right) + "px;" : v.charAt(1) == "w" && (d += "left:" + (g[0] + m.left) + "px;");
                var y = e('<div class="legend">' + p.replace('style="', 'style="position:absolute;' + d + ";") + "</div>").appendTo(t);
                if (a.legend.backgroundOpacity != 0) {
                    var b = a.legend.backgroundColor;
                    b == null && (b = a.grid.backgroundColor, b && typeof b == "string" ? b = e.color.parse(b) : b = e.color.extract(y, "background-color"), b.a = 1, b = b.toString());
                    var w = y.children();
                    e('<div style="position:absolute;width:' + w.width() + "px;height:" + w.height() + "px;" + d + "background-color:" + b + ';"> </div>').prependTo(y).css("opacity", a.legend.backgroundOpacity)
                }
            }
        }
        function ut(e, t, n) {
            var r = a.grid.mouseActiveRadius, i = r * r + 1, s = null, o = !1, f, l, c;
            for (f = u.length - 1; f >= 0; --f) {
                if (!n(u[f]))
                    continue;
                var h = u[f], p = h.xaxis, d = h.yaxis, v = h.datapoints.points, m = p.c2p(e), g = d.c2p(t), y = r / p.scale, b = r / d.scale;
                c = h.datapoints.pointsize, p.options.inverseTransform && (y = Number.MAX_VALUE), d.options.inverseTransform && (b = Number.MAX_VALUE);
                if (h.lines.show || h.points.show)
                    for (l = 0; l < v.length; l += c) {
                        var w = v[l], E = v[l + 1];
                        if (w == null)
                            continue;
                        if (w - m > y || w - m < -y || E - g > b || E - g < -b)
                            continue;
                        var S = Math.abs(p.p2c(w) - e), x = Math.abs(d.p2c(E) - t), T = S * S + x * x;
                        T < i && (i = T, s = [f, l / c])
                    }
                if (h.bars.show && !s) {
                    var N = h.bars.align == "left" ? 0 : -h.bars.barWidth / 2, C = N + h.bars.barWidth;
                    for (l = 0; l < v.length; l += c) {
                        var w = v[l], E = v[l + 1], k = v[l + 2];
                        if (w == null)
                            continue;
                        if (u[f].bars.horizontal ? m <= Math.max(k, w) && m >= Math.min(k, w) && g >= E + N && g <= E + C : m >= w + N && m <= w + C && g >= Math.min(k, E) && g <= Math.max(k, E))
                            s = [f, l / c]
                    }
                }
            }
            return s ? (f = s[0], l = s[1], c = u[f].datapoints.pointsize, {datapoint: u[f].datapoints.points.slice(l * c, (l + 1) * c), dataIndex: l, series: u[f], seriesIndex: f}) : null
        }
        function at(e) {
            a.grid.hoverable && ct("plothover", e, function(e) {
                return e["hoverable"] != 0
            })
        }
        function ft(e) {
            a.grid.hoverable && ct("plothover", e, function(e) {
                return!1
            })
        }
        function lt(e) {
            ct("plotclick", e, function(e) {
                return e["clickable"] != 0
            })
        }
        function ct(e, n, r) {
            var i = c.offset(), s = n.pageX - i.left - m.left, o = n.pageY - i.top - m.top, u = L({left: s, top: o});
            u.pageX = n.pageX, u.pageY = n.pageY;
            var f = ut(s, o, r);
            f && (f.pageX = parseInt(f.series.xaxis.p2c(f.datapoint[0]) + i.left + m.left, 10), f.pageY = parseInt(f.series.yaxis.p2c(f.datapoint[1]) + i.top + m.top, 10));
            if (a.grid.autoHighlight) {
                for (var l = 0; l < st.length; ++l) {
                    var h = st[l];
                    h.auto == e && (!f || h.series != f.series || h.point[0] != f.datapoint[0] || h.point[1] != f.datapoint[1]) && vt(h.series, h.point)
                }
                f && dt(f.series, f.datapoint, e)
            }
            t.trigger(e, [u, f])
        }
        function ht() {
            var e = a.interaction.redrawOverlayInterval;
            if (e == -1) {
                pt();
                return
            }
            ot || (ot = setTimeout(pt, e))
        }
        function pt() {
            ot = null, p.save(), l.clear(), p.translate(m.left, m.top);
            var e, t;
            for (e = 0; e < st.length; ++e)
                t = st[e], t.series.bars.show ? yt(t.series, t.point) : gt(t.series, t.point);
            p.restore(), E(b.drawOverlay, [p])
        }
        function dt(e, t, n) {
            typeof e == "number" && (e = u[e]);
            if (typeof t == "number") {
                var r = e.datapoints.pointsize;
                t = e.datapoints.points.slice(r * t, r * (t + 1))
            }
            var i = mt(e, t);
            i == -1 ? (st.push({series: e, point: t, auto: n}), ht()) : n || (st[i].auto = !1)
        }
        function vt(e, t) {
            if (e == null && t == null) {
                st = [], ht();
                return
            }
            typeof e == "number" && (e = u[e]);
            if (typeof t == "number") {
                var n = e.datapoints.pointsize;
                t = e.datapoints.points.slice(n * t, n * (t + 1))
            }
            var r = mt(e, t);
            r != -1 && (st.splice(r, 1), ht())
        }
        function mt(e, t) {
            for (var n = 0; n < st.length; ++n) {
                var r = st[n];
                if (r.series == e && r.point[0] == t[0] && r.point[1] == t[1])
                    return n
            }
            return-1
        }
        function gt(t, n) {
            var r = n[0], i = n[1], s = t.xaxis, o = t.yaxis, u = typeof t.highlightColor == "string" ? t.highlightColor : e.color.parse(t.color).scale("a", .5).toString();
            if (r < s.min || r > s.max || i < o.min || i > o.max)
                return;
            var a = t.points.radius + t.points.lineWidth / 2;
            p.lineWidth = a, p.strokeStyle = u;
            var f = 1.5 * a;
            r = s.p2c(r), i = o.p2c(i), p.beginPath(), t.points.symbol == "circle" ? p.arc(r, i, f, 0, 2 * Math.PI, !1) : t.points.symbol(p, r, i, f, !1), p.closePath(), p.stroke()
        }
        function yt(t, n) {
            var r = typeof t.highlightColor == "string" ? t.highlightColor : e.color.parse(t.color).scale("a", .5).toString(), i = r, s = t.bars.align == "left" ? 0 : -t.bars.barWidth / 2;
            p.lineWidth = t.bars.lineWidth, p.strokeStyle = r, tt(n[0], n[1], n[2] || 0, s, s + t.bars.barWidth, 0, function() {
                return i
            }, t.xaxis, t.yaxis, p, t.bars.horizontal, t.bars.lineWidth)
        }
        function bt(t, n, r, i) {
            if (typeof t == "string")
                return t;
            var s = h.createLinearGradient(0, r, 0, n);
            for (var o = 0, u = t.colors.length; o < u; ++o) {
                var a = t.colors[o];
                if (typeof a != "string") {
                    var f = e.color.parse(i);
                    a.brightness != null && (f = f.scale("rgb", a.brightness)), a.opacity != null && (f.a *= a.opacity), a = f.toString()
                }
                s.addColorStop(o / (u - 1), a)
            }
            return s
        }
        var u = [], a = {colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"], legend: {show: !0, noColumns: 1, labelFormatter: null, labelBoxBorderColor: "#ccc", container: null, position: "ne", margin: 5, backgroundColor: null, backgroundOpacity: .85, sorted: null}, xaxis: {show: null, position: "bottom", mode: null, font: null, color: null, tickColor: null, transform: null, inverseTransform: null, min: null, max: null, autoscaleMargin: null, ticks: null, tickFormatter: null, labelWidth: null, labelHeight: null, reserveSpace: null, tickLength: null, alignTicksWithAxis: null, tickDecimals: null, tickSize: null, minTickSize: null}, yaxis: {autoscaleMargin: .02, position: "left"}, xaxes: [], yaxes: [], series: {points: {show: !1, radius: 3, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle"}, lines: {lineWidth: 2, fill: !1, fillColor: null, steps: !1}, bars: {show: !1, lineWidth: 2, barWidth: 1, fill: !0, fillColor: null, align: "left", horizontal: !1, zero: !0}, shadowSize: 3, highlightColor: null}, grid: {show: !0, aboveData: !1, color: "#545454", backgroundColor: null, borderColor: null, tickColor: null, margin: 0, labelMargin: 5, axisMargin: 8, borderWidth: 2, minBorderMargin: null, markings: null, markingsColor: "#f4f4f4", markingsLineWidth: 2, clickable: !1, hoverable: !1, autoHighlight: !0, mouseActiveRadius: 10}, interaction: {redrawOverlayInterval: 1e3 / 60}, hooks: {}}, f = null, l = null, c = null, h = null, p = null, d = [], v = [], m = {left: 0, right: 0, top: 0, bottom
                    : 0}, g = 0, y = 0, b = {processOptions: [], processRawData: [], processDatapoints: [], processOffset: [], drawBackground: [], drawSeries: [], draw: [], bindEvents: [], drawOverlay: [], shutdown: []}, w = this;
        w.setData = T, w.setupGrid = R, w.draw = V, w.getPlaceholder = function() {
            return t
        }, w.getCanvas = function() {
            return f.element
        }, w.getPlotOffset = function() {
            return m
        }, w.width = function() {
            return g
        }, w.height = function() {
            return y
        }, w.offset = function() {
            var e = c.offset();
            return e.left += m.left, e.top += m.top, e
        }, w.getData = function() {
            return u
        }, w.getAxes = function() {
            var t = {}, n;
            return e.each(d.concat(v), function(e, n) {
                n && (t[n.direction + (n.n != 1 ? n.n : "") + "axis"] = n)
            }), t
        }, w.getXAxes = function() {
            return d
        }, w.getYAxes = function() {
            return v
        }, w.c2p = L, w.p2c = A, w.getOptions = function() {
            return a
        }, w.highlight = dt, w.unhighlight = vt, w.triggerRedrawOverlay = ht, w.pointOffset = function(e) {
            return{left: parseInt(d[C(e, "x") - 1].p2c(+e.x) + m.left, 10), top: parseInt(v[C(e, "y") - 1].p2c(+e.y) + m.top, 10)}
        }, w.shutdown = H, w.resize = function() {
            var e = t.width(), n = t.height();
            f.resize(e, n), l.resize(e, n)
        }, w.hooks = b, S(w), x(s), D(), T(r), R(), V(), P();
        var st = [], ot = null
    }
    function i(e, t) {
        return t * Math.floor(e / t)
    }
    var t = Object.prototype.hasOwnProperty;
    n.prototype.resize = function(e, t) {
        if (e <= 0 || t <= 0)
            throw new Error("Invalid dimensions for plot, width = " + e + ", height = " + t);
        var n = this.element, r = this.context, i = this.pixelRatio;
        this.width != e && (n.width = e * i, n.style.width = e + "px", this.width = e), this.height != t && (n.height = t * i, n.style.height = t + "px", this.height = t), r.restore(), r.save(), r.scale(i, i)
    }, n.prototype.clear = function() {
        this.context.clearRect(0, 0, this.width, this.height)
    }, n.prototype.render = function() {
        var e = this._textCache;
        for (var n in e)
            if (t.call(e, n)) {
                var r = this.getTextLayer(n), i = e[n];
                r.hide();
                for (var s in i)
                    if (t.call(i, s)) {
                        var o = i[s];
                        for (var u in o)
                            if (t.call(o, u)) {
                                var a = o[u].positions;
                                for (var f = 0, l; l = a[f]; f++)
                                    l.active ? l.rendered || (r.append(l.element), l.rendered = !0) : (a.splice(f--, 1), l.rendered && l.element.detach());
                                a.length == 0 && delete o[u]
                            }
                    }
                r.show()
            }
    }, n.prototype.getTextLayer = function(t) {
        var n = this.text[t];
        return n == null && (this.textContainer == null && (this.textContainer = e("<div class='flot-text'></div>").css({position: "absolute", top: 0, left: 0, bottom: 0, right: 0, "font-size": "smaller", color: "#545454"}).insertAfter(this.element)), n = this.text[t] = e("<div></div>").addClass(t).css({position: "absolute", top: 0, left: 0, bottom: 0, right: 0}).appendTo(this.textContainer)), n
    }, n.prototype.getTextInfo = function(t, n, r, i, s) {
        var o, u, a, f;
        n = "" + n, typeof r == "object" ? o = r.style + " " + r.variant + " " + r.weight + " " + r.size + "px/" + r.lineHeight + "px " + r.family : o = r, u = this._textCache[t], u == null && (u = this._textCache[t] = {}), a = u[o], a == null && (a = u[o] = {}), f = a[n];
        if (f == null) {
            var l = e("<div></div>").html(n).css({position: "absolute", "max-width": s, top: -9999}).appendTo(this.getTextLayer(t));
            typeof r == "object" ? l.css({font: o, color: r.color}) : typeof r == "string" && l.addClass(r), f = a[n] = {width: l.outerWidth(!0), height: l.outerHeight(!0), element: l, positions: []}, l.detach()
        }
        return f
    }, n.prototype.addText = function(e, t, n, r, i, s, o, u, a) {
        var f = this.getTextInfo(e, r, i, s, o), l = f.positions;
        u == "center" ? t -= f.width / 2 : u == "right" && (t -= f.width), a == "middle" ? n -= f.height / 2 : a == "bottom" && (n -= f.height);
        for (var c = 0, h; h = l[c]; c++)
            if (h.x == t && h.y == n) {
                h.active = !0;
                return
            }
        h = {active: !0, rendered: !1, element: l.length ? f.element.clone() : f.element, x: t, y: n}, l.push(h), h.element.css({top: Math.round(n), left: Math.round(t), "text-align": u})
    }, n.prototype.removeText = function(e, n, r, i, s, o) {
        if (i == null) {
            var u = this._textCache[e];
            if (u != null)
                for (var a in u)
                    if (t.call(u, a)) {
                        var f = u[a];
                        for (var l in f)
                            if (t.call(f, l)) {
                                var c = f[l].positions;
                                for (var h = 0, p; p = c[h]; h++)
                                    p.active = !1
                            }
                    }
        } else {
            var c = this.getTextInfo(e, i, s, o).positions;
            for (var h = 0, p; p = c[h]; h++)
                p.x == n && p.y == r && (p.active = !1)
        }
    }, e.plot = function(t, n, i) {
        var s = new r(e(t), n, i, e.plot.plugins);
        return s
    }, e.plot.version = "0.8.1", e.plot.plugins = [], e.fn.plot = function(t, n) {
        return this.each(function() {
            e.plot(this, t, n)
        })
    }
}(jQuery);

/* Flot plugin for rendering pie charts.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 * Created by Brian Medendorp
 * Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars
 */
(function(e) {
    function r(r) {
        function p(t, n, r) {
            l || (l = !0, s = t.getCanvas(), o = e(s).parent(), i = t.getOptions(), t.setData(d(t.getData())))
        }
        function d(t) {
            var n = 0, r = 0, s = 0, o = i.series.pie.combine.color, u = [];
            for (var a = 0; a < t.length; ++a) {
                var f = t[a].data;
                e.isArray(f) && f.length == 1 && (f = f[0]), e.isArray(f) ? !isNaN(parseFloat(f[1])) && isFinite(f[1]) ? f[1] = +f[1] : f[1] = 0 : !isNaN(parseFloat(f)) && isFinite(f) ? f = [1, +f] : f = [1, 0], t[a].data = [f]
            }
            for (var a = 0; a < t.length; ++a)
                n += t[a].data[0][1];
            for (var a = 0; a < t.length; ++a) {
                var f = t[a].data[0][1];
                f / n <= i.series.pie.combine.threshold && (r += f, s++, o || (o = t[a].color))
            }
            for (var a = 0; a < t.length; ++a) {
                var f = t[a].data[0][1];
                (s < 2 || f / n > i.series.pie.combine.threshold) && u.push({data: [[1, f]], color: t[a].color, label: t[a].label, angle: f * Math.PI * 2 / n, percent: f / (n / 100)})
            }
            return s > 1 && u.push({data: [[1, r]], color: o, label: i.series.pie.combine.label, angle: r * Math.PI * 2 / n, percent: r / (n / 100)}), u
        }
        function v(r, s) {
            function y() {
                c.clearRect(0, 0, h, p), o.children().filter(".pieLabel, .pieLabelBackground").remove()
            }
            function b() {
                var e = i.series.pie.shadow.left, t = i.series.pie.shadow.top, n = 10, r = i.series.pie.shadow.alpha, s = i.series.pie.radius > 1 ? i.series.pie.radius : u * i.series.pie.radius;
                if (s >= h / 2 - e || s * i.series.pie.tilt >= p / 2 - t || s <= n)
                    return;
                c.save(), c.translate(e, t), c.globalAlpha = r, c.fillStyle = "#000", c.translate(a, f), c.scale(1, i.series.pie.tilt);
                for (var o = 1; o <= n; o++)
                    c.beginPath(), c.arc(0, 0, s, 0, Math.PI * 2, !1), c.fill(), s -= o;
                c.restore()
            }
            function w() {
                function l(e, t, i) {
                    if (e <= 0 || isNaN(e))
                        return;
                    i ? c.fillStyle = t : (c.strokeStyle = t, c.lineJoin = "round"), c.beginPath(), Math.abs(e - Math.PI * 2) > 1e-9 && c.moveTo(0, 0), c.arc(0, 0, n, r, r + e / 2, !1), c.arc(0, 0, n, r + e / 2, r + e, !1), c.closePath(), r += e, i ? c.fill() : c.stroke()
                }
                function d() {
                    function l(t, n, s) {
                        if (t.data[0][1] == 0)
                            return!0;
                        var u = i.legend.labelFormatter, l, c = i.series.pie.label.formatter;
                        u ? l = u(t.label, t) : l = t.label, c && (l = c(l, t));
                        var d = (n + t.angle + n) / 2, v = a + Math.round(Math.cos(d) * r), m = f + Math.round(Math.sin(d) * r) * i.series.pie.tilt, g = "<span class='pieLabel' id='pieLabel" + s + "' style='position:absolute;top:" + m + "px;left:" + v + "px;'>" + l + "</span>";
                        o.append(g);
                        var y = o.children("#pieLabel" + s), b = m - y.height() / 2, w = v - y.width() / 2;
                        y.css("top", b), y.css("left", w);
                        if (0 - b > 0 || 0 - w > 0 || p - (b + y.height()) < 0 || h - (w + y.width()) < 0)
                            return!1;
                        if (i.series.pie.label.background.opacity != 0) {
                            var E = i.series.pie.label.background.color;
                            E == null && (E = t.color);
                            var S = "top:" + b + "px;left:" + w + "px;";
                            e("<div class='pieLabelBackground' style='position:absolute;width:" + y.width() + "px;height:" + y.height() + "px;" + S + "background-color:" + E + ";'></div>").css("opacity", i.series.pie.label.background.opacity).insertBefore(y)
                        }
                        return!0
                    }
                    var n = t, r = i.series.pie.label.radius > 1 ? i.series.pie.label.radius : u * i.series.pie.label.radius;
                    for (var s = 0; s < v.length; ++s) {
                        if (v[s].percent >= i.series.pie.label.threshold * 100 && !l(v[s], n, s))
                            return!1;
                        n += v[s].angle
                    }
                    return!0
                }
                var t = Math.PI * i.series.pie.startAngle, n = i.series.pie.radius > 1 ? i.series.pie.radius : u * i.series.pie.radius;
                c.save(), c.translate(a, f), c.scale(1, i.series.pie.tilt), c.save();
                var r = t;
                for (var s = 0; s < v.length; ++s)
                    v[s].startAngle = r, l(v[s].angle, v[s].color, !0);
                c.restore();
                if (i.series.pie.stroke.width > 0) {
                    c.save(), c.lineWidth = i.series.pie.stroke.width, r = t;
                    for (var s = 0; s < v.length; ++s)
                        l(v[s].angle, i.series.pie.stroke.color, !1);
                    c.restore()
                }
                return m(c), c.restore(), i.series.pie.label.show ? d() : !0
            }
            if (!o)
                return;
            var h = r.getPlaceholder().width(), p = r.getPlaceholder().height(), d = o.children().filter(".legend").children().width() || 0;
            c = s, l = !1, u = Math.min(h, p / i.series.pie.tilt) / 2, f = p / 2 + i.series.pie.offset.top, a = h / 2, i.series.pie.offset.left == "auto" ? i.legend.position.match("w") ? a += d / 2 : a -= d / 2 : a += i.series.pie.offset.left, a < u ? a = u : a > h - u && (a = h - u);
            var v = r.getData(), g = 0;
            do
                g > 0 && (u *= n), g += 1, y(), i.series.pie.tilt <= .8 && b();
            while (!w() && g < t);
            g >= t && (y(), o.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")), r.setSeries && r.insertLegend && (r.setSeries(v), r.insertLegend())
        }
        function m(e) {
            if (i.series.pie.innerRadius > 0) {
                e.save();
                var t = i.series.pie.innerRadius > 1 ? i.series.pie.innerRadius : u * i.series.pie.innerRadius;
                e.globalCompositeOperation = "destination-out", e.beginPath(), e.fillStyle = i.series.pie.stroke.color, e.arc(0, 0, t, 0, Math.PI * 2, !1), e.fill(), e.closePath(), e.restore(), e.save(), e.beginPath(), e.strokeStyle = i.series.pie.stroke.color, e.arc(0, 0, t, 0, Math.PI * 2, !1), e.stroke(), e.closePath(), e.restore()
            }
        }
        function g(e, t) {
            for (var n = !1, r = -1, i = e.length, s = i - 1; ++r < i; s = r)
                (e[r][1] <= t[1] && t[1] < e[s][1] || e[s][1] <= t[1] && t[1] < e[r][1]) && t[0] < (e[s][0] - e[r][0]) * (t[1] - e[r][1]) / (e[s][1] - e[r][1]) + e[r][0] && (n = !n);
            return n
        }
        function y(e, t) {
            var n = r.getData(), i = r.getOptions(), s = i.series.pie.radius > 1 ? i.series.pie.radius : u * i.series.pie.radius, o, l;
            for (var h = 0; h < n.length; ++h) {
                var p = n[h];
                if (p.pie.show) {
                    c.save(), c.beginPath(), c.moveTo(0, 0), c.arc(0, 0, s, p.startAngle, p.startAngle + p.angle / 2, !1), c.arc(0, 0, s, p.startAngle + p.angle / 2, p.startAngle + p.angle, !1), c.closePath(), o = e - a, l = t - f;
                    if (c.isPointInPath) {
                        if (c.isPointInPath(e - a, t - f))
                            return c.restore(), {datapoint: [p.percent, p.data], dataIndex: 0, series: p, seriesIndex: h}
                    } else {
                        var d = s * Math.cos(p.startAngle), v = s * Math.sin(p.startAngle), m = s * Math.cos(p.startAngle + p.angle / 4), y = s * Math.sin(p.startAngle + p.angle / 4), b = s * Math.cos(p.startAngle + p.angle / 2), w = s * Math.sin(p.startAngle + p.angle / 2), E = s * Math.cos(p.startAngle + p.angle / 1.5), S = s * Math.sin(p.startAngle + p.angle / 1.5), x = s * Math.cos(p.startAngle + p.angle), T = s * Math.sin(p.startAngle + p.angle), N = [[0, 0], [d, v], [m, y], [b, w], [E, S], [x, T]], C = [o, l];
                        if (g(N, C))
                            return c.restore(), {datapoint: [p.percent, p.data], dataIndex: 0, series: p, seriesIndex: h}
                    }
                    c.restore()
                }
            }
            return null
        }
        function b(e) {
            E("plothover", e)
        }
        function w(e) {
            E("plotclick", e)
        }
        function E(e, t) {
            var n = r.offset(), s = parseInt(t.pageX - n.left), u = parseInt(t.pageY - n.top), a = y(s, u);
            if (i.grid.autoHighlight)
                for (var f = 0; f < h.length; ++f) {
                    var l = h[f];
                    l.auto == e && (!a || l.series != a.series) && x(l.series)
                }
            a && S(a.series, e);
            var c = {pageX: t.pageX, pageY: t.pageY};
            o.trigger(e, [c, a])
        }
        function S(e, t) {
            var n = T(e);
            n == -1 ? (h.push({series: e, auto: t}), r.triggerRedrawOverlay()) : t || (h[n].auto = !1)
        }
        function x(e) {
            e == null && (h = [], r.triggerRedrawOverlay());
            var t = T(e);
            t != -1 && (h.splice(t, 1), r.triggerRedrawOverlay())
        }
        function T(e) {
            for (var t = 0; t < h.length; ++t) {
                var n = h[t];
                if (n.series == e)
                    return t
            }
            return-1
        }
        function N(e, t) {
            function s(e) {
                if (e.angle <= 0 || isNaN(e.angle))
                    return;
                t.fillStyle = "rgba(255, 255, 255, " + n.series.pie.highlight.opacity + ")", t.beginPath(), Math.abs(e.angle - Math.PI * 2) > 1e-9 && t.moveTo(0, 0), t.arc(0, 0, r, e.startAngle, e.startAngle + e.angle / 2, !1), t.arc(0, 0, r, e.startAngle + e.angle / 2, e.startAngle + e.angle, !1), t.closePath(), t.fill()
            }
            var n = e.getOptions(), r = n.series.pie.radius > 1 ? n.series.pie.radius : u * n.series.pie.radius;
            t.save(), t.translate(a, f), t.scale(1, n.series.pie.tilt);
            for (var i = 0; i < h.length; ++i)
                s(h[i].series);
            m(t), t.restore()
        }
        var s = null, o = null, u = null, a = null, f = null, l = !1, c = null, h = [];
        r.hooks.processOptions.push(function(e, t) {
            t.series.pie.show && (t.grid.show = !1, t.series.pie.label.show == "auto" && (t.legend.show ? t.series.pie.label.show = !1 : t.series.pie.label.show = !0), t.series.pie.radius == "auto" && (t.series.pie.label.show ? t.series.pie.radius = .75 : t.series.pie.radius = 1), t.series.pie.tilt > 1 ? t.series.pie.tilt = 1 : t.series.pie.tilt < 0 && (t.series.pie.tilt = 0))
        }), r.hooks.bindEvents.push(function(e, t) {
            var n = e.getOptions();
            n.series.pie.show && (n.grid.hoverable && t.unbind("mousemove").mousemove(b), n.grid.clickable && t.unbind("click").click(w))
        }), r.hooks.processDatapoints.push(function(e, t, n, r) {
            var i = e.getOptions();
            i.series.pie.show && p(e, t, n, r)
        }), r.hooks.drawOverlay.push(function(e, t) {
            var n = e.getOptions();
            n.series.pie.show && N(e, t)
        }), r.hooks.draw.push(function(e, t) {
            var n = e.getOptions();
            n.series.pie.show && v(e, t)
        })
    }
    var t = 10, n = .95, i = {series: {pie: {show: !1, radius: "auto", innerRadius: 0, startAngle: 1.5, tilt: 1, shadow: {left: 5, top: 15, alpha: .02}, offset: {top: 0, left: "auto"}, stroke: {color: "#fff", width: 1}, label: {show: "auto", formatter: function(e, t) {
                        return"<div style='font-size:x-small;text-align:center;padding:2px;color:" + t.color + ";'>" + e + "<br/>" + Math.round(t.percent) + "%</div>"
                    }, radius: 1, background: {color: null, opacity: 0}, threshold: 0}, combine: {threshold: -1, color: null, label: "Other"}, highlight: {opacity: .5}}}};
    e.plot.plugins.push({init: r, options: i, name: "pie", version: "1.1"})
})(jQuery);

/* Flot plugin for automatically redrawing plots as the placeholder resizes.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 * Inline dependency:
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(e, t, n) {
    function c() {
        s = t[o](function() {
            r.each(function() {
                var t = e(this), n = t.width(), r = t.height(), i = e.data(this, a);
                (n !== i.w || r !== i.h) && t.trigger(u, [i.w = n, i.h = r])
            }), c()
        }, i[f])
    }
    var r = e([]), i = e.resize = e.extend(e.resize, {}), s, o = "setTimeout", u = "resize", a = u + "-special-event", f = "delay", l = "throttleWindow";
    i[f] = 250, i[l] = !0, e.event.special[u] = {setup: function() {
            if (!i[l] && this[o])
                return!1;
            var t = e(this);
            r = r.add(t), e.data(this, a, {w: t.width(), h: t.height()}), r.length === 1 && c()
        }, teardown: function() {
            if (!i[l] && this[o])
                return!1;
            var t = e(this);
            r = r.not(t), t.removeData(a), r.length || clearTimeout(s)
        }, add: function(t) {
            function s(t, i, s) {
                var o = e(this), u = e.data(this, a);
                u.w = i !== n ? i : o.width(), u.h = s !== n ? s : o.height(), r.apply(this, arguments)
            }
            if (!i[l] && this[o])
                return!1;
            var r;
            if (e.isFunction(t))
                return r = t, s;
            r = t.handler, t.handler = s
        }}
})(jQuery, this), function(e) {
    function n(e) {
        function t() {
            var t = e.getPlaceholder();
            if (t.width() == 0 || t.height() == 0)
                return;
            e.resize(), e.setupGrid(), e.draw()
        }
        function n(e, n) {
            e.getPlaceholder().resize(t)
        }
        function r(e, n) {
            e.getPlaceholder().unbind("resize", t)
        }
        e.hooks.bindEvents.push(n), e.hooks.shutdown.push(r)
    }
    var t = {};
    e.plot.plugins.push({init: n, options: t, name: "resize", version: "1.0"})
}(jQuery);

/* Flot plugin for stacking data sets rather than overlyaing them.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 */
(function(e) {
    function n(e) {
        function t(e, t) {
            var n = null;
            for (var r = 0; r < t.length; ++r) {
                if (e == t[r])
                    break;
                t[r].stack == e.stack && (n = t[r])
            }
            return n
        }
        function n(e, n, r) {
            if (n.stack == null || n.stack === !1)
                return;
            var i = t(n, e.getData());
            if (!i)
                return;
            var s = r.pointsize, o = r.points, u = i.datapoints.pointsize, a = i.datapoints.points, f = [], l, c, h, p, d, v, m = n.lines.show, g = n.bars.horizontal, y = s > 2 && (g ? r.format[2].x : r.format[2].y), b = m && n.lines.steps, w = !0, E = g ? 1 : 0, S = g ? 0 : 1, x = 0, T = 0, N, C;
            for (; ; ) {
                if (x >= o.length)
                    break;
                N = f.length;
                if (o[x] == null) {
                    for (C = 0; C < s; ++C)
                        f.push(o[x + C]);
                    x += s
                } else if (T >= a.length) {
                    if (!m)
                        for (C = 0; C < s; ++C)
                            f.push(o[x + C]);
                    x += s
                } else if (a[T] == null) {
                    for (C = 0; C < s; ++C)
                        f.push(null);
                    w = !0, T += u
                } else {
                    l = o[x + E], c = o[x + S], p = a[T + E], d = a[T + S], v = 0;
                    if (l == p) {
                        for (C = 0; C < s; ++C)
                            f.push(o[x + C]);
                        f[N + S] += d, v = d, x += s, T += u
                    } else if (l > p) {
                        if (m && x > 0 && o[x - s] != null) {
                            h = c + (o[x - s + S] - c) * (p - l) / (o[x - s + E] - l), f.push(p), f.push(h + d);
                            for (C = 2; C < s; ++C)
                                f.push(o[x + C]);
                            v = d
                        }
                        T += u
                    } else {
                        if (w && m) {
                            x += s;
                            continue
                        }
                        for (C = 0; C < s; ++C)
                            f.push(o[x + C]);
                        m && T > 0 && a[T - u] != null && (v = d + (a[T - u + S] - d) * (l - p) / (a[T - u + E] - p)), f[N + S] += v, x += s
                    }
                    w = !1, N != f.length && y && (f[N + 2] += v)
                }
                if (b && N != f.length && N > 0 && f[N] != null && f[N] != f[N - s] && f[N + 1] != f[N - s + 1]) {
                    for (C = 0; C < s; ++C)
                        f[N + s + C] = f[N + C];
                    f[N + 1] = f[N - s + 1]
                }
            }
            r.points = f
        }
        e.hooks.processDatapoints.push(n)
    }
    var t = {series: {stack: null}};
    e.plot.plugins.push({init: n, options: t, name: "stack", version: "1.2"})
})(jQuery);

/*
 *	@name		Elastic
 *	@descripton	Elastic is jQuery plugin that grow and shrink your textareas automatically
 *	@version	1.6.11
 *	@requires	jQuery 1.2.6+
 *
 *	@author		Jan Jarfalk
 *	@author-email	jan.jarfalk@unwrongest.com
 *	@author-website	http://www.unwrongest.com
 *
 *	@licence	MIT License - http://www.opensource.org/licenses/mit-license.php
 */
(function(e) {
    jQuery.fn.extend({elastic: function() {
            var t = ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontSize", "lineHeight", "fontFamily", "width", "fontWeight", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "borderTopStyle", "borderTopColor", "borderRightStyle", "borderRightColor", "borderBottomStyle", "borderBottomColor", "borderLeftStyle", "borderLeftColor"];
            return this.each(function() {
                function f() {
                    var e = Math.floor(parseInt(n.width(), 10));
                    if (r.width() !== e) {
                        r.css({width: e + "px"});
                        c(true)
                    }
                }
                function l(e, t) {
                    var r = Math.floor(parseInt(e, 10));
                    if (n.height() !== r) {
                        n.css({height: r + "px", overflow: t})
                    }
                }
                function c(e) {
                    var t = n.val().replace(/&/g, "&").replace(/ {2}/g, " ").replace(/<|>/g, ">").replace(/\n/g, "<br />");
                    var u = r.html().replace(/<br>/ig, "<br />");
                    if (e || t + " " !== u) {
                        r.html(t + " ");
                        if (Math.abs(r.height() + i - n.height()) > 3) {
                            var a = r.height() + i;
                            if (a >= o) {
                                l(o, "auto")
                            } else if (a <= s) {
                                l(s, "hidden")
                            } else {
                                l(a, "hidden")
                            }
                        }
                    }
                }
                if (this.type !== "textarea") {
                    return false
                }
                var n = jQuery(this), r = jQuery("<div />").css({position: "absolute", display: "none", "word-wrap": "break-word", "white-space": "pre-wrap"}), i = parseInt(n.css("line-height"), 10) || parseInt(n.css("font-size"), "10"), s = parseInt(n.css("height"), 10) || i * 3, o = parseInt(n.css("max-height"), 10) || Number.MAX_VALUE, u = 0;
                if (o < 0) {
                    o = Number.MAX_VALUE
                }
                r.appendTo(n.parent());
                var a = t.length;
                while (a--) {
                    r.css(t[a].toString(), n.css(t[a].toString()))
                }
                n.css({overflow: "hidden"});
                n.bind("keyup change cut paste", function() {
                    c()
                });
                e(window).bind("resize", f);
                n.bind("resize", f);
                n.bind("update", c);
                n.bind("blur", function() {
                    if (r.height() < o) {
                        if (r.height() > s) {
                            n.height(r.height())
                        } else {
                            n.height(s)
                        }
                    }
                });
                n.bind("input paste", function(e) {
                    setTimeout(c, 250)
                });
                c()
            })
        }})
})(jQuery);

/*
 * wysihtml5 v0.3.0_rc2
 * https://github.com/xing/wysihtml5
 *
 * Author: Christopher Blum (https://github.com/tiff)
 *
 * Copyright (C) 2012 XING AG
 * Licensed under the MIT license (MIT)
 *
 * Rangy, a cross-browser JavaScript range and selection library
 * http://code.google.com/p/rangy/
 *
 * Copyright 2011, Tim Down
 * Licensed under the MIT license.
 * Version: 1.2.2
 * Build date: 13 November 2011
 */
var wysihtml5 = {version: "0.3.0_rc2", commands: {}, dom: {}, quirks: {}, toolbar: {}, lang: {}, selection: {}, views: {}, INVISIBLE_SPACE: "\ufeff", EMPTY_FUNCTION: function() {
    }, ELEMENT_NODE: 1, TEXT_NODE: 3, BACKSPACE_KEY: 8, ENTER_KEY: 13, ESCAPE_KEY: 27, SPACE_KEY: 32, DELETE_KEY: 46};
window.rangy = function() {
    function b(a, b) {
        var c = typeof a[b];
        return c == k || !!(c == g && a[b]) || "unknown" == c
    }
    function c(a, b) {
        return!!(typeof a[b] == g && a[b])
    }
    function a(a, b) {
        return typeof a[b] != j
    }
    function d(a) {
        return function(b, c) {
            for (var d = c.length; d--; )
                if (!a(b, c[d]))
                    return!1;
            return!0
        }
    }
    function e(a) {
        return a && m(a, r) && x(a, p)
    }
    function f(a) {
        window.alert("Rangy not supported in your browser. Reason: " + a);
        o.initialized = !0;
        o.supported = !1
    }
    function h() {
        if (!o.initialized) {
            var a, d = !1, g = !1;
            b(document, "createRange") &&
                    (a = document.createRange(), m(a, n) && x(a, q) && (d = !0), a.detach());
            if ((a = c(document, "body") ? document.body : document.getElementsByTagName("body")[0]) && b(a, "createTextRange"))
                a = a.createTextRange(), e(a) && (g = !0);
            !d && !g && f("Neither Range nor TextRange are implemented");
            o.initialized = !0;
            o.features = {implementsDomRange: d, implementsTextRange: g};
            d = w.concat(z);
            g = 0;
            for (a = d.length; g < a; ++g)
                try {
                    d[g](o)
                } catch (j) {
                    c(window, "console") && b(window.console, "log") && window.console.log("Init listener threw an exception. Continuing.",
                            j)
                }
        }
    }
    function i(a) {
        this.name = a;
        this.supported = this.initialized = !1
    }
    var g = "object", k = "function", j = "undefined", q = "startContainer,startOffset,endContainer,endOffset,collapsed,commonAncestorContainer,START_TO_START,START_TO_END,END_TO_START,END_TO_END".split(","), n = "setStart,setStartBefore,setStartAfter,setEnd,setEndBefore,setEndAfter,collapse,selectNode,selectNodeContents,compareBoundaryPoints,deleteContents,extractContents,cloneContents,insertNode,surroundContents,cloneRange,toString,detach".split(","),
            p = "boundingHeight,boundingLeft,boundingTop,boundingWidth,htmlText,text".split(","), r = "collapse,compareEndPoints,duplicate,getBookmark,moveToBookmark,moveToElementText,parentElement,pasteHTML,select,setEndPoint,getBoundingClientRect".split(","), m = d(b), s = d(c), x = d(a), o = {version: "1.2.2", initialized: !1, supported: !0, util: {isHostMethod: b, isHostObject: c, isHostProperty: a, areHostMethods: m, areHostObjects: s, areHostProperties: x, isTextRange: e}, features: {}, modules: {}, config: {alertOnWarn: !1, preferTextRange: !1}};
    o.fail = f;
    o.warn = function(a) {
        a = "Rangy warning: " + a;
        o.config.alertOnWarn ? window.alert(a) : typeof window.console != j && typeof window.console.log != j && window.console.log(a)
    };
    ({}).hasOwnProperty ? o.util.extend = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    } : f("hasOwnProperty not supported");
    var z = [], w = [];
    o.init = h;
    o.addInitListener = function(a) {
        o.initialized ? a(o) : z.push(a)
    };
    var y = [];
    o.addCreateMissingNativeApiListener = function(a) {
        y.push(a)
    };
    o.createMissingNativeApi = function(a) {
        a = a || window;
        h();
        for (var b = 0, c = y.length; b < c; ++b)
            y[b](a)
    };
    i.prototype.fail = function(a) {
        this.initialized = !0;
        this.supported = !1;
        throw Error("Module '" + this.name + "' failed to load: " + a);
    };
    i.prototype.warn = function(a) {
        o.warn("Module " + this.name + ": " + a)
    };
    i.prototype.createError = function(a) {
        return Error("Error in Rangy " + this.name + " module: " + a)
    };
    o.createModule = function(a, b) {
        var c = new i(a);
        o.modules[a] = c;
        w.push(function(a) {
            b(a, c);
            c.initialized = !0;
            c.supported = !0
        })
    };
    o.requireModules = function(a) {
        for (var b = 0, c = a.length, d, g; b <
                c; ++b) {
            g = a[b];
            d = o.modules[g];
            if (!d || !(d instanceof i))
                throw Error("Module '" + g + "' not found");
            if (!d.supported)
                throw Error("Module '" + g + "' not supported");
        }
    };
    var A = !1, s = function() {
        A || (A = !0, o.initialized || h())
    };
    if (typeof window == j)
        f("No window found");
    else if (typeof document == j)
        f("No document found");
    else
        return b(document, "addEventListener") && document.addEventListener("DOMContentLoaded", s, !1), b(window, "addEventListener") ? window.addEventListener("load", s, !1) : b(window, "attachEvent") ? window.attachEvent("onload",
                s) : f("Window does not have required addEventListener or attachEvent method"), o
}();
rangy.createModule("DomUtil", function(b, c) {
    function a(a) {
        for (var b = 0; a = a.previousSibling; )
            b++;
        return b
    }
    function d(a, b) {
        var c = [], d;
        for (d = a; d; d = d.parentNode)
            c.push(d);
        for (d = b; d; d = d.parentNode)
            if (m(c, d))
                return d;
        return null
    }
    function e(a, b, c) {
        for (c = c ? a : a.parentNode; c; ) {
            a = c.parentNode;
            if (a === b)
                return c;
            c = a
        }
        return null
    }
    function f(a) {
        a = a.nodeType;
        return 3 == a || 4 == a || 8 == a
    }
    function h(a, b) {
        var c = b.nextSibling, d = b.parentNode;
        c ? d.insertBefore(a, c) : d.appendChild(a);
        return a
    }
    function i(a) {
        if (9 == a.nodeType)
            return a;
        if (typeof a.ownerDocument != n)
            return a.ownerDocument;
        if (typeof a.document != n)
            return a.document;
        if (a.parentNode)
            return i(a.parentNode);
        throw Error("getDocument: no document found for node");
    }
    function g(a) {
        return!a ? "[No node]" : f(a) ? '"' + a.data + '"' : 1 == a.nodeType ? "<" + a.nodeName + (a.id ? ' id="' + a.id + '"' : "") + ">[" + a.childNodes.length + "]" : a.nodeName
    }
    function k(a) {
        this._next = this.root = a
    }
    function j(a, b) {
        this.node = a;
        this.offset = b
    }
    function q(a) {
        this.code = this[a];
        this.codeName = a;
        this.message = "DOMException: " + this.codeName
    }
    var n = "undefined", p = b.util;
    p.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"]) || c.fail("document missing a Node creation method");
    p.isHostMethod(document, "getElementsByTagName") || c.fail("document missing getElementsByTagName method");
    var r = document.createElement("div");
    p.areHostMethods(r, ["insertBefore", "appendChild", "cloneNode"]) || c.fail("Incomplete Element implementation");
    p.isHostProperty(r, "innerHTML") || c.fail("Element is missing innerHTML property");
    r = document.createTextNode("test");
    p.areHostMethods(r, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"]) || c.fail("Incomplete Text Node implementation");
    var m = function(a, b) {
        for (var c = a.length; c--; )
            if (a[c] === b)
                return!0;
        return!1
    };
    k.prototype = {_current: null, hasNext: function() {
            return!!this._next
        }, next: function() {
            var a = this._current = this._next, b;
            if (this._current) {
                b = a.firstChild;
                if (!b)
                    for (b = null; a !== this.root && !(b = a.nextSibling); )
                        a = a.parentNode;
                this._next = b
            }
            return this._current
        }, detach: function() {
            this._current = this._next = this.root =
            null
        }};
    j.prototype = {equals: function(a) {
            return this.node === a.node & this.offset == a.offset
        }, inspect: function() {
            return"[DomPosition(" + g(this.node) + ":" + this.offset + ")]"
        }};
    q.prototype = {INDEX_SIZE_ERR: 1, HIERARCHY_REQUEST_ERR: 3, WRONG_DOCUMENT_ERR: 4, NO_MODIFICATION_ALLOWED_ERR: 7, NOT_FOUND_ERR: 8, NOT_SUPPORTED_ERR: 9, INVALID_STATE_ERR: 11};
    q.prototype.toString = function() {
        return this.message
    };
    b.dom = {arrayContains: m, isHtmlNamespace: function(a) {
            var b;
            return typeof a.namespaceURI == n || null === (b = a.namespaceURI) || "http://www.w3.org/1999/xhtml" ==
            b
        }, parentElement: function(a) {
            a = a.parentNode;
            return 1 == a.nodeType ? a : null
        }, getNodeIndex: a, getNodeLength: function(a) {
            var b;
            return f(a) ? a.length : (b = a.childNodes) ? b.length : 0
        }, getCommonAncestor: d, isAncestorOf: function(a, b, c) {
            for (b = c ? b : b.parentNode; b; ) {
                if (b === a)
                    return!0;
                b = b.parentNode
            }
            return!1
        }, getClosestAncestorIn: e, isCharacterDataNode: f, insertAfter: h, splitDataNode: function(a, b) {
            var c = a.cloneNode(!1);
            c.deleteData(0, b);
            a.deleteData(b, a.length - b);
            h(c, a);
            return c
        }, getDocument: i, getWindow: function(a) {
            a = i(a);
            if (typeof a.defaultView != n)
                return a.defaultView;
            if (typeof a.parentWindow != n)
                return a.parentWindow;
            throw Error("Cannot get a window object for node");
        }, getIframeWindow: function(a) {
            if (typeof a.contentWindow != n)
                return a.contentWindow;
            if (typeof a.contentDocument != n)
                return a.contentDocument.defaultView;
            throw Error("getIframeWindow: No Window object found for iframe element");
        }, getIframeDocument: function(a) {
            if (typeof a.contentDocument != n)
                return a.contentDocument;
            if (typeof a.contentWindow != n)
                return a.contentWindow.document;
            throw Error("getIframeWindow: No Document object found for iframe element");
        }, getBody: function(a) {
            return p.isHostObject(a, "body") ? a.body : a.getElementsByTagName("body")[0]
        }, getRootContainer: function(a) {
            for (var b; b = a.parentNode; )
                a = b;
            return a
        }, comparePoints: function(b, c, g, j) {
            var k;
            if (b == g)
                return c === j ? 0 : c < j ? -1 : 1;
            if (k = e(g, b, !0))
                return c <= a(k) ? -1 : 1;
            if (k = e(b, g, !0))
                return a(k) < j ? -1 : 1;
            c = d(b, g);
            b = b === c ? c : e(b, c, !0);
            g = g === c ? c : e(g, c, !0);
            if (b === g)
                throw Error("comparePoints got to case 4 and childA and childB are the same!");
            for (c = c.firstChild; c; ) {
                if (c === b)
                    return-1;
                if (c === g)
                    return 1;
                c = c.nextSibling
            }
            throw Error("Should not be here!");
        }, inspectNode: g, fragmentFromNodeChildren: function(a) {
            for (var b = i(a).createDocumentFragment(), c; c = a.firstChild; )
                b.appendChild(c);
            return b
        }, createIterator: function(a) {
            return new k(a)
        }, DomPosition: j};
    b.DOMException = q
});
rangy.createModule("DomRange", function(b) {
    function c(a, b) {
        return 3 != a.nodeType && (l.isAncestorOf(a, b.startContainer, !0) || l.isAncestorOf(a, b.endContainer, !0))
    }
    function a(a) {
        return l.getDocument(a.startContainer)
    }
    function d(a, b, c) {
        if (b = a._listeners[b])
            for (var d = 0, g = b.length; d < g; ++d)
                b[d].call(a, {target: a, args: c})
    }
    function e(a) {
        return new u(a.parentNode, l.getNodeIndex(a))
    }
    function f(a) {
        return new u(a.parentNode, l.getNodeIndex(a) + 1)
    }
    function h(a, b, c) {
        var d = 11 == a.nodeType ? a.firstChild : a;
        l.isCharacterDataNode(b) ?
                c == b.length ? l.insertAfter(a, b) : b.parentNode.insertBefore(a, 0 == c ? b : l.splitDataNode(b, c)) : c >= b.childNodes.length ? b.appendChild(a) : b.insertBefore(a, b.childNodes[c]);
        return d
    }
    function i(b) {
        for (var c, d, g = a(b.range).createDocumentFragment(); d = b.next(); ) {
            c = b.isPartiallySelectedSubtree();
            d = d.cloneNode(!c);
            c && (c = b.getSubtreeIterator(), d.appendChild(i(c)), c.detach(!0));
            if (10 == d.nodeType)
                throw new B("HIERARCHY_REQUEST_ERR");
            g.appendChild(d)
        }
        return g
    }
    function g(a, b, c) {
        for (var d, e, c = c || {stop: !1}; d = a.next(); )
            if (a.isPartiallySelectedSubtree())
                if (!1 ===
                        b(d)) {
                    c.stop = !0;
                    break
                } else {
                    if (d = a.getSubtreeIterator(), g(d, b, c), d.detach(!0), c.stop)
                        break
                }
            else
                for (d = l.createIterator(d); e = d.next(); )
                    if (!1 === b(e)) {
                        c.stop = !0;
                        return
                    }
    }
    function k(a) {
        for (var b; a.next(); )
            a.isPartiallySelectedSubtree() ? (b = a.getSubtreeIterator(), k(b), b.detach(!0)) : a.remove()
    }
    function j(b) {
        for (var c, d = a(b.range).createDocumentFragment(), g; c = b.next(); ) {
            b.isPartiallySelectedSubtree() ? (c = c.cloneNode(!1), g = b.getSubtreeIterator(), c.appendChild(j(g)), g.detach(!0)) : b.remove();
            if (10 == c.nodeType)
                throw new B("HIERARCHY_REQUEST_ERR");
            d.appendChild(c)
        }
        return d
    }
    function q(a, b, c) {
        var d = !(!b || !b.length), e, j = !!c;
        d && (e = RegExp("^(" + b.join("|") + ")$"));
        var k = [];
        g(new p(a, !1), function(a) {
            (!d || e.test(a.nodeType)) && (!j || c(a)) && k.push(a)
        });
        return k
    }
    function n(a) {
        return"[" + ("undefined" == typeof a.getName ? "Range" : a.getName()) + "(" + l.inspectNode(a.startContainer) + ":" + a.startOffset + ", " + l.inspectNode(a.endContainer) + ":" + a.endOffset + ")]"
    }
    function p(a, b) {
        this.range = a;
        this.clonePartiallySelectedTextNodes = b;
        if (!a.collapsed) {
            this.sc = a.startContainer;
            this.so = a.startOffset;
            this.ec = a.endContainer;
            this.eo = a.endOffset;
            var c = a.commonAncestorContainer;
            this.sc === this.ec && l.isCharacterDataNode(this.sc) ? (this.isSingleCharacterDataNode = !0, this._first = this._last = this._next = this.sc) : (this._first = this._next = this.sc === c && !l.isCharacterDataNode(this.sc) ? this.sc.childNodes[this.so] : l.getClosestAncestorIn(this.sc, c, !0), this._last = this.ec === c && !l.isCharacterDataNode(this.ec) ? this.ec.childNodes[this.eo - 1] : l.getClosestAncestorIn(this.ec, c, !0))
        }
    }
    function r(a) {
        this.code =
                this[a];
        this.codeName = a;
        this.message = "RangeException: " + this.codeName
    }
    function m(a, b, c) {
        this.nodes = q(a, b, c);
        this._next = this.nodes[0];
        this._position = 0
    }
    function s(a) {
        return function(b, c) {
            for (var d, g = c ? b : b.parentNode; g; ) {
                d = g.nodeType;
                if (l.arrayContains(a, d))
                    return g;
                g = g.parentNode
            }
            return null
        }
    }
    function x(a, b) {
        if ($(a, b))
            throw new r("INVALID_NODE_TYPE_ERR");
    }
    function o(a) {
        if (!a.startContainer)
            throw new B("INVALID_STATE_ERR");
    }
    function z(a, b) {
        if (!l.arrayContains(b, a.nodeType))
            throw new r("INVALID_NODE_TYPE_ERR");
    }
    function w(a, b) {
        if (0 > b || b > (l.isCharacterDataNode(a) ? a.length : a.childNodes.length))
            throw new B("INDEX_SIZE_ERR");
    }
    function y(a, b) {
        if (O(a, !0) !== O(b, !0))
            throw new B("WRONG_DOCUMENT_ERR");
    }
    function A(a) {
        if (aa(a, !0))
            throw new B("NO_MODIFICATION_ALLOWED_ERR");
    }
    function t(a, b) {
        if (!a)
            throw new B(b);
    }
    function v(a) {
        o(a);
        if (!l.arrayContains(G, a.startContainer.nodeType) && !O(a.startContainer, !0) || !l.arrayContains(G, a.endContainer.nodeType) && !O(a.endContainer, !0) || !(a.startOffset <= (l.isCharacterDataNode(a.startContainer) ?
                a.startContainer.length : a.startContainer.childNodes.length)) || !(a.endOffset <= (l.isCharacterDataNode(a.endContainer) ? a.endContainer.length : a.endContainer.childNodes.length)))
            throw Error("Range error: Range is no longer valid after DOM mutation (" + a.inspect() + ")");
    }
    function D() {
    }
    function K(a) {
        a.START_TO_START = Q;
        a.START_TO_END = U;
        a.END_TO_END = ba;
        a.END_TO_START = V;
        a.NODE_BEFORE = W;
        a.NODE_AFTER = X;
        a.NODE_BEFORE_AND_AFTER = Y;
        a.NODE_INSIDE = R
    }
    function F(a) {
        K(a);
        K(a.prototype)
    }
    function E(a, b) {
        return function() {
            v(this);
            var c = this.startContainer, d = this.startOffset, e = this.commonAncestorContainer, j = new p(this, !0);
            c !== e && (c = l.getClosestAncestorIn(c, e, !0), d = f(c), c = d.node, d = d.offset);
            g(j, A);
            j.reset();
            e = a(j);
            j.detach();
            b(this, c, d, c, d);
            return e
        }
    }
    function I(a, d, g) {
        function h(a, b) {
            return function(c) {
                o(this);
                z(c, L);
                z(M(c), G);
                c = (a ? e : f)(c);
                (b ? i : n)(this, c.node, c.offset)
            }
        }
        function i(a, b, c) {
            var g = a.endContainer, e = a.endOffset;
            if (b !== a.startContainer || c !== a.startOffset) {
                if (M(b) != M(g) || 1 == l.comparePoints(b, c, g, e))
                    g = b, e = c;
                d(a, b, c,
                        g, e)
            }
        }
        function n(a, b, c) {
            var g = a.startContainer, e = a.startOffset;
            if (b !== a.endContainer || c !== a.endOffset) {
                if (M(b) != M(g) || -1 == l.comparePoints(b, c, g, e))
                    g = b, e = c;
                d(a, g, e, b, c)
            }
        }
        a.prototype = new D;
        b.util.extend(a.prototype, {setStart: function(a, b) {
                o(this);
                x(a, !0);
                w(a, b);
                i(this, a, b)
            }, setEnd: function(a, b) {
                o(this);
                x(a, !0);
                w(a, b);
                n(this, a, b)
            }, setStartBefore: h(!0, !0), setStartAfter: h(!1, !0), setEndBefore: h(!0, !1), setEndAfter: h(!1, !1), collapse: function(a) {
                v(this);
                a ? d(this, this.startContainer, this.startOffset, this.startContainer,
                        this.startOffset) : d(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset)
            }, selectNodeContents: function(a) {
                o(this);
                x(a, !0);
                d(this, a, 0, a, l.getNodeLength(a))
            }, selectNode: function(a) {
                o(this);
                x(a, !1);
                z(a, L);
                var b = e(a), a = f(a);
                d(this, b.node, b.offset, a.node, a.offset)
            }, extractContents: E(j, d), deleteContents: E(k, d), canSurroundContents: function() {
                v(this);
                A(this.startContainer);
                A(this.endContainer);
                var a = new p(this, !0), b = a._first && c(a._first, this) || a._last && c(a._last, this);
                a.detach();
                return!b
            },
            detach: function() {
                g(this)
            }, splitBoundaries: function() {
                v(this);
                var a = this.startContainer, b = this.startOffset, c = this.endContainer, g = this.endOffset, e = a === c;
                l.isCharacterDataNode(c) && 0 < g && g < c.length && l.splitDataNode(c, g);
                l.isCharacterDataNode(a) && 0 < b && b < a.length && (a = l.splitDataNode(a, b), e ? (g -= b, c = a) : c == a.parentNode && g >= l.getNodeIndex(a) && g++, b = 0);
                d(this, a, b, c, g)
            }, normalizeBoundaries: function() {
                v(this);
                var a = this.startContainer, b = this.startOffset, c = this.endContainer, g = this.endOffset, e = function(a) {
                    var b =
                            a.nextSibling;
                    b && b.nodeType == a.nodeType && (c = a, g = a.length, a.appendData(b.data), b.parentNode.removeChild(b))
                }, j = function(d) {
                    var e = d.previousSibling;
                    if (e && e.nodeType == d.nodeType) {
                        a = d;
                        var j = d.length;
                        b = e.length;
                        d.insertData(0, e.data);
                        e.parentNode.removeChild(e);
                        a == c ? (g += b, c = a) : c == d.parentNode && (e = l.getNodeIndex(d), g == e ? (c = d, g = j) : g > e && g--)
                    }
                }, k = !0;
                l.isCharacterDataNode(c) ? c.length == g && e(c) : (0 < g && (k = c.childNodes[g - 1]) && l.isCharacterDataNode(k) && e(k), k = !this.collapsed);
                k ? l.isCharacterDataNode(a) ? 0 == b && j(a) :
                        b < a.childNodes.length && (e = a.childNodes[b]) && l.isCharacterDataNode(e) && j(e) : (a = c, b = g);
                d(this, a, b, c, g)
            }, collapseToPoint: function(a, b) {
                o(this);
                x(a, !0);
                w(a, b);
                (a !== this.startContainer || b !== this.startOffset || a !== this.endContainer || b !== this.endOffset) && d(this, a, b, a, b)
            }});
        F(a)
    }
    function N(a) {
        a.collapsed = a.startContainer === a.endContainer && a.startOffset === a.endOffset;
        a.commonAncestorContainer = a.collapsed ? a.startContainer : l.getCommonAncestor(a.startContainer, a.endContainer)
    }
    function J(a, b, c, g, e) {
        var j = a.startContainer !==
                b || a.startOffset !== c, k = a.endContainer !== g || a.endOffset !== e;
        a.startContainer = b;
        a.startOffset = c;
        a.endContainer = g;
        a.endOffset = e;
        N(a);
        d(a, "boundarychange", {startMoved: j, endMoved: k})
    }
    function C(a) {
        this.startContainer = a;
        this.startOffset = 0;
        this.endContainer = a;
        this.endOffset = 0;
        this._listeners = {boundarychange: [], detach: []};
        N(this)
    }
    b.requireModules(["DomUtil"]);
    var l = b.dom, u = l.DomPosition, B = b.DOMException;
    p.prototype = {_current: null, _next: null, _first: null, _last: null, isSingleCharacterDataNode: !1, reset: function() {
            this._current =
                    null;
            this._next = this._first
        }, hasNext: function() {
            return!!this._next
        }, next: function() {
            var a = this._current = this._next;
            a && (this._next = a !== this._last ? a.nextSibling : null, l.isCharacterDataNode(a) && this.clonePartiallySelectedTextNodes && (a === this.ec && (a = a.cloneNode(!0)).deleteData(this.eo, a.length - this.eo), this._current === this.sc && (a = a.cloneNode(!0)).deleteData(0, this.so)));
            return a
        }, remove: function() {
            var a = this._current, b, c;
            l.isCharacterDataNode(a) && (a === this.sc || a === this.ec) ? (b = a === this.sc ? this.so : 0, c = a ===
                    this.ec ? this.eo : a.length, b != c && a.deleteData(b, c - b)) : a.parentNode && a.parentNode.removeChild(a)
        }, isPartiallySelectedSubtree: function() {
            return c(this._current, this.range)
        }, getSubtreeIterator: function() {
            var b;
            if (this.isSingleCharacterDataNode)
                b = this.range.cloneRange(), b.collapse();
            else {
                b = new C(a(this.range));
                var c = this._current, d = c, g = 0, e = c, j = l.getNodeLength(c);
                l.isAncestorOf(c, this.sc, !0) && (d = this.sc, g = this.so);
                l.isAncestorOf(c, this.ec, !0) && (e = this.ec, j = this.eo);
                J(b, d, g, e, j)
            }
            return new p(b, this.clonePartiallySelectedTextNodes)
        },
        detach: function(a) {
            a && this.range.detach();
            this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null
        }};
    r.prototype = {BAD_BOUNDARYPOINTS_ERR: 1, INVALID_NODE_TYPE_ERR: 2};
    r.prototype.toString = function() {
        return this.message
    };
    m.prototype = {_current: null, hasNext: function() {
            return!!this._next
        }, next: function() {
            this._current = this._next;
            this._next = this.nodes[++this._position];
            return this._current
        }, detach: function() {
            this._current = this._next = this.nodes = null
        }};
    var L = [1, 3, 4, 5,
        7, 8, 10], G = [2, 9, 11], P = [1, 3, 4, 5, 7, 8, 10, 11], H = [1, 3, 4, 5, 7, 8], M = l.getRootContainer, O = s([9, 11]), aa = s([5, 6, 10, 12]), $ = s([6, 10, 12]), Z = document.createElement("style"), S = !1;
    try {
        Z.innerHTML = "<b>x</b>", S = 3 == Z.firstChild.nodeType
    } catch (ca) {
    }
    b.features.htmlParsingConforms = S;
    var T = "startContainer,startOffset,endContainer,endOffset,collapsed,commonAncestorContainer".split(","), Q = 0, U = 1, ba = 2, V = 3, W = 0, X = 1, Y = 2, R = 3;
    D.prototype = {attachListener: function(a, b) {
            this._listeners[a].push(b)
        }, compareBoundaryPoints: function(a, b) {
            v(this);
            y(this.startContainer, b.startContainer);
            var c = a == V || a == Q ? "start" : "end", d = a == U || a == Q ? "start" : "end";
            return l.comparePoints(this[c + "Container"], this[c + "Offset"], b[d + "Container"], b[d + "Offset"])
        }, insertNode: function(a) {
            v(this);
            z(a, P);
            A(this.startContainer);
            if (l.isAncestorOf(a, this.startContainer, !0))
                throw new B("HIERARCHY_REQUEST_ERR");
            this.setStartBefore(h(a, this.startContainer, this.startOffset))
        }, cloneContents: function() {
            v(this);
            var b, c;
            if (this.collapsed)
                return a(this).createDocumentFragment();
            if (this.startContainer ===
                    this.endContainer && l.isCharacterDataNode(this.startContainer))
                return b = this.startContainer.cloneNode(!0), b.data = b.data.slice(this.startOffset, this.endOffset), c = a(this).createDocumentFragment(), c.appendChild(b), c;
            c = new p(this, !0);
            b = i(c);
            c.detach();
            return b
        }, canSurroundContents: function() {
            v(this);
            A(this.startContainer);
            A(this.endContainer);
            var a = new p(this, !0), b = a._first && c(a._first, this) || a._last && c(a._last, this);
            a.detach();
            return!b
        }, surroundContents: function(a) {
            z(a, H);
            if (!this.canSurroundContents())
                throw new r("BAD_BOUNDARYPOINTS_ERR");
            var b = this.extractContents();
            if (a.hasChildNodes())
                for (; a.lastChild; )
                    a.removeChild(a.lastChild);
            h(a, this.startContainer, this.startOffset);
            a.appendChild(b);
            this.selectNode(a)
        }, cloneRange: function() {
            v(this);
            for (var b = new C(a(this)), c = T.length, d; c--; )
                d = T[c], b[d] = this[d];
            return b
        }, toString: function() {
            v(this);
            var a = this.startContainer;
            if (a === this.endContainer && l.isCharacterDataNode(a))
                return 3 == a.nodeType || 4 == a.nodeType ? a.data.slice(this.startOffset, this.endOffset) : "";
            var b = [], a = new p(this, !0);
            g(a, function(a) {
                (3 ==
                        a.nodeType || 4 == a.nodeType) && b.push(a.data)
            });
            a.detach();
            return b.join("")
        }, compareNode: function(a) {
            v(this);
            var b = a.parentNode, c = l.getNodeIndex(a);
            if (!b)
                throw new B("NOT_FOUND_ERR");
            a = this.comparePoint(b, c);
            b = this.comparePoint(b, c + 1);
            return 0 > a ? 0 < b ? Y : W : 0 < b ? X : R
        }, comparePoint: function(a, b) {
            v(this);
            t(a, "HIERARCHY_REQUEST_ERR");
            y(a, this.startContainer);
            return 0 > l.comparePoints(a, b, this.startContainer, this.startOffset) ? -1 : 0 < l.comparePoints(a, b, this.endContainer, this.endOffset) ? 1 : 0
        }, createContextualFragment: S ?
                function(a) {
                    var b = this.startContainer, c = l.getDocument(b);
                    if (!b)
                        throw new B("INVALID_STATE_ERR");
                    var d = null;
                    1 == b.nodeType ? d = b : l.isCharacterDataNode(b) && (d = l.parentElement(b));
                    d = null === d || "HTML" == d.nodeName && l.isHtmlNamespace(l.getDocument(d).documentElement) && l.isHtmlNamespace(d) ? c.createElement("body") : d.cloneNode(!1);
                    d.innerHTML = a;
                    return l.fragmentFromNodeChildren(d)
                } : function(b) {
            o(this);
            var c = a(this).createElement("body");
            c.innerHTML = b;
            return l.fragmentFromNodeChildren(c)
        }, toHtml: function() {
            v(this);
            var b = a(this).createElement("div");
            b.appendChild(this.cloneContents());
            return b.innerHTML
        }, intersectsNode: function(b, c) {
            v(this);
            t(b, "NOT_FOUND_ERR");
            if (l.getDocument(b) !== a(this))
                return!1;
            var d = b.parentNode, g = l.getNodeIndex(b);
            t(d, "NOT_FOUND_ERR");
            var e = l.comparePoints(d, g, this.endContainer, this.endOffset), d = l.comparePoints(d, g + 1, this.startContainer, this.startOffset);
            return c ? 0 >= e && 0 <= d : 0 > e && 0 < d
        }, isPointInRange: function(a, b) {
            v(this);
            t(a, "HIERARCHY_REQUEST_ERR");
            y(a, this.startContainer);
            return 0 <=
                    l.comparePoints(a, b, this.startContainer, this.startOffset) && 0 >= l.comparePoints(a, b, this.endContainer, this.endOffset)
        }, intersectsRange: function(b, c) {
            v(this);
            if (a(b) != a(this))
                throw new B("WRONG_DOCUMENT_ERR");
            var d = l.comparePoints(this.startContainer, this.startOffset, b.endContainer, b.endOffset), g = l.comparePoints(this.endContainer, this.endOffset, b.startContainer, b.startOffset);
            return c ? 0 >= d && 0 <= g : 0 > d && 0 < g
        }, intersection: function(a) {
            if (this.intersectsRange(a)) {
                var b = l.comparePoints(this.startContainer,
                        this.startOffset, a.startContainer, a.startOffset), c = l.comparePoints(this.endContainer, this.endOffset, a.endContainer, a.endOffset), d = this.cloneRange();
                -1 == b && d.setStart(a.startContainer, a.startOffset);
                1 == c && d.setEnd(a.endContainer, a.endOffset);
                return d
            }
            return null
        }, union: function(a) {
            if (this.intersectsRange(a, !0)) {
                var b = this.cloneRange();
                -1 == l.comparePoints(a.startContainer, a.startOffset, this.startContainer, this.startOffset) && b.setStart(a.startContainer, a.startOffset);
                1 == l.comparePoints(a.endContainer,
                        a.endOffset, this.endContainer, this.endOffset) && b.setEnd(a.endContainer, a.endOffset);
                return b
            }
            throw new r("Ranges do not intersect");
        }, containsNode: function(a, b) {
            return b ? this.intersectsNode(a, !1) : this.compareNode(a) == R
        }, containsNodeContents: function(a) {
            return 0 <= this.comparePoint(a, 0) && 0 >= this.comparePoint(a, l.getNodeLength(a))
        }, containsRange: function(a) {
            return this.intersection(a).equals(a)
        }, containsNodeText: function(a) {
            var b = this.cloneRange();
            b.selectNode(a);
            var c = b.getNodes([3]);
            return 0 < c.length ?
                    (b.setStart(c[0], 0), a = c.pop(), b.setEnd(a, a.length), a = this.containsRange(b), b.detach(), a) : this.containsNodeContents(a)
        }, createNodeIterator: function(a, b) {
            v(this);
            return new m(this, a, b)
        }, getNodes: function(a, b) {
            v(this);
            return q(this, a, b)
        }, getDocument: function() {
            return a(this)
        }, collapseBefore: function(a) {
            o(this);
            this.setEndBefore(a);
            this.collapse(!1)
        }, collapseAfter: function(a) {
            o(this);
            this.setStartAfter(a);
            this.collapse(!0)
        }, getName: function() {
            return"DomRange"
        }, equals: function(a) {
            return C.rangesEqual(this,
                    a)
        }, inspect: function() {
            return n(this)
        }};
    I(C, J, function(a) {
        o(a);
        a.startContainer = a.startOffset = a.endContainer = a.endOffset = null;
        a.collapsed = a.commonAncestorContainer = null;
        d(a, "detach", null);
        a._listeners = null
    });
    b.rangePrototype = D.prototype;
    C.rangeProperties = T;
    C.RangeIterator = p;
    C.copyComparisonConstants = F;
    C.createPrototypeRange = I;
    C.inspect = n;
    C.getRangeDocument = a;
    C.rangesEqual = function(a, b) {
        return a.startContainer === b.startContainer && a.startOffset === b.startOffset && a.endContainer === b.endContainer && a.endOffset ===
                b.endOffset
    };
    b.DomRange = C;
    b.RangeException = r
});
rangy.createModule("WrappedRange", function(b) {
    function c(a, b, c, d) {
        var h = a.duplicate();
        h.collapse(c);
        var i = h.parentElement();
        e.isAncestorOf(b, i, !0) || (i = b);
        if (!i.canHaveHTML)
            return new f(i.parentNode, e.getNodeIndex(i));
        var b = e.getDocument(i).createElement("span"), r, m = c ? "StartToStart" : "StartToEnd";
        do
            i.insertBefore(b, b.previousSibling), h.moveToElementText(b);
        while (0 < (r = h.compareEndPoints(m, a)) && b.previousSibling);
        m = b.nextSibling;
        if (-1 == r && m && e.isCharacterDataNode(m)) {
            h.setEndPoint(c ? "EndToStart" : "EndToEnd",
                    a);
            if (/[\r\n]/.test(m.data)) {
                i = h.duplicate();
                c = i.text.replace(/\r\n/g, "\r").length;
                for (c = i.moveStart("character", c); - 1 == i.compareEndPoints("StartToEnd", i); )
                    c++, i.moveStart("character", 1)
            } else
                c = h.text.length;
            i = new f(m, c)
        } else
            m = (d || !c) && b.previousSibling, i = (c = (d || c) && b.nextSibling) && e.isCharacterDataNode(c) ? new f(c, 0) : m && e.isCharacterDataNode(m) ? new f(m, m.length) : new f(i, e.getNodeIndex(b));
        b.parentNode.removeChild(b);
        return i
    }
    function a(a, b) {
        var c, d, f = a.offset, h = e.getDocument(a.node), i = h.body.createTextRange(),
                m = e.isCharacterDataNode(a.node);
        m ? (c = a.node, d = c.parentNode) : (c = a.node.childNodes, c = f < c.length ? c[f] : null, d = a.node);
        h = h.createElement("span");
        h.innerHTML = "&#feff;";
        c ? d.insertBefore(h, c) : d.appendChild(h);
        i.moveToElementText(h);
        i.collapse(!b);
        d.removeChild(h);
        if (m)
            i[b ? "moveStart" : "moveEnd"]("character", f);
        return i
    }
    b.requireModules(["DomUtil", "DomRange"]);
    var d, e = b.dom, f = e.DomPosition, h = b.DomRange;
    if (b.features.implementsDomRange && (!b.features.implementsTextRange || !b.config.preferTextRange))
        (function() {
            function a(b) {
                for (var c =
                        j.length, d; c--; )
                    d = j[c], b[d] = b.nativeRange[d]
            }
            var c, j = h.rangeProperties, f;
            d = function(b) {
                if (!b)
                    throw Error("Range must be specified");
                this.nativeRange = b;
                a(this)
            };
            h.createPrototypeRange(d, function(a, b, c, d, g) {
                var e = a.endContainer !== d || a.endOffset != g;
                if (a.startContainer !== b || a.startOffset != c || e)
                    a.setEnd(d, g), a.setStart(b, c)
            }, function(a) {
                a.nativeRange.detach();
                a.detached = !0;
                for (var b = j.length, c; b--; )
                    c = j[b], a[c] = null
            });
            c = d.prototype;
            c.selectNode = function(b) {
                this.nativeRange.selectNode(b);
                a(this)
            };
            c.deleteContents =
                    function() {
                        this.nativeRange.deleteContents();
                        a(this)
                    };
            c.extractContents = function() {
                var b = this.nativeRange.extractContents();
                a(this);
                return b
            };
            c.cloneContents = function() {
                return this.nativeRange.cloneContents()
            };
            c.surroundContents = function(b) {
                this.nativeRange.surroundContents(b);
                a(this)
            };
            c.collapse = function(b) {
                this.nativeRange.collapse(b);
                a(this)
            };
            c.cloneRange = function() {
                return new d(this.nativeRange.cloneRange())
            };
            c.refresh = function() {
                a(this)
            };
            c.toString = function() {
                return this.nativeRange.toString()
            };
            var i = document.createTextNode("test");
            e.getBody(document).appendChild(i);
            var p = document.createRange();
            p.setStart(i, 0);
            p.setEnd(i, 0);
            try {
                p.setStart(i, 1), c.setStart = function(b, c) {
                    this.nativeRange.setStart(b, c);
                    a(this)
                }, c.setEnd = function(b, c) {
                    this.nativeRange.setEnd(b, c);
                    a(this)
                }, f = function(b) {
                    return function(c) {
                        this.nativeRange[b](c);
                        a(this)
                    }
                }
            } catch (r) {
                c.setStart = function(b, c) {
                    try {
                        this.nativeRange.setStart(b, c)
                    } catch (d) {
                        this.nativeRange.setEnd(b, c), this.nativeRange.setStart(b, c)
                    }
                    a(this)
                }, c.setEnd = function(b,
                        c) {
                    try {
                        this.nativeRange.setEnd(b, c)
                    } catch (d) {
                        this.nativeRange.setStart(b, c), this.nativeRange.setEnd(b, c)
                    }
                    a(this)
                }, f = function(b, c) {
                    return function(d) {
                        try {
                            this.nativeRange[b](d)
                        } catch (e) {
                            this.nativeRange[c](d), this.nativeRange[b](d)
                        }
                        a(this)
                    }
                }
            }
            c.setStartBefore = f("setStartBefore", "setEndBefore");
            c.setStartAfter = f("setStartAfter", "setEndAfter");
            c.setEndBefore = f("setEndBefore", "setStartBefore");
            c.setEndAfter = f("setEndAfter", "setStartAfter");
            p.selectNodeContents(i);
            c.selectNodeContents = p.startContainer ==
                    i && p.endContainer == i && 0 == p.startOffset && p.endOffset == i.length ? function(b) {
                this.nativeRange.selectNodeContents(b);
                a(this)
            } : function(a) {
                this.setStart(a, 0);
                this.setEnd(a, h.getEndOffset(a))
            };
            p.selectNodeContents(i);
            p.setEnd(i, 3);
            f = document.createRange();
            f.selectNodeContents(i);
            f.setEnd(i, 4);
            f.setStart(i, 2);
            c.compareBoundaryPoints = -1 == p.compareBoundaryPoints(p.START_TO_END, f) & 1 == p.compareBoundaryPoints(p.END_TO_START, f) ? function(a, b) {
                b = b.nativeRange || b;
                a == b.START_TO_END ? a = b.END_TO_START : a == b.END_TO_START &&
                        (a = b.START_TO_END);
                return this.nativeRange.compareBoundaryPoints(a, b)
            } : function(a, b) {
                return this.nativeRange.compareBoundaryPoints(a, b.nativeRange || b)
            };
            b.util.isHostMethod(p, "createContextualFragment") && (c.createContextualFragment = function(a) {
                return this.nativeRange.createContextualFragment(a)
            });
            e.getBody(document).removeChild(i);
            p.detach();
            f.detach()
        })(), b.createNativeRange = function(a) {
            return(a || document).createRange()
        };
    else if (b.features.implementsTextRange) {
        d = function(a) {
            this.textRange = a;
            this.refresh()
        };
        d.prototype = new h(document);
        d.prototype.refresh = function() {
            var a, b, d = this.textRange;
            a = d.parentElement();
            var f = d.duplicate();
            f.collapse(!0);
            b = f.parentElement();
            f = d.duplicate();
            f.collapse(!1);
            d = f.parentElement();
            b = b == d ? b : e.getCommonAncestor(b, d);
            b = b == a ? b : e.getCommonAncestor(a, b);
            0 == this.textRange.compareEndPoints("StartToEnd", this.textRange) ? b = a = c(this.textRange, b, !0, !0) : (a = c(this.textRange, b, !0, !1), b = c(this.textRange, b, !1, !1));
            this.setStart(a.node, a.offset);
            this.setEnd(b.node, b.offset)
        };
        h.copyComparisonConstants(d);
        var i = function() {
            return this
        }();
        "undefined" == typeof i.Range && (i.Range = d);
        b.createNativeRange = function(a) {
            return(a || document).body.createTextRange()
        }
    }
    b.features.implementsTextRange && (d.rangeToTextRange = function(b) {
        if (b.collapsed)
            return a(new f(b.startContainer, b.startOffset), !0);
        var c = a(new f(b.startContainer, b.startOffset), !0), d = a(new f(b.endContainer, b.endOffset), !1), b = e.getDocument(b.startContainer).body.createTextRange();
        b.setEndPoint("StartToStart", c);
        b.setEndPoint("EndToEnd", d);
        return b
    });
    d.prototype.getName =
            function() {
                return"WrappedRange"
            };
    b.WrappedRange = d;
    b.createRange = function(a) {
        return new d(b.createNativeRange(a || document))
    };
    b.createRangyRange = function(a) {
        return new h(a || document)
    };
    b.createIframeRange = function(a) {
        return b.createRange(e.getIframeDocument(a))
    };
    b.createIframeRangyRange = function(a) {
        return b.createRangyRange(e.getIframeDocument(a))
    };
    b.addCreateMissingNativeApiListener(function(a) {
        a = a.document;
        if (typeof a.createRange == "undefined")
            a.createRange = function() {
                return b.createRange(this)
            };
        a =
                a = null
    })
});
rangy.createModule("WrappedSelection", function(b, c) {
    function a(a) {
        return(a || window).getSelection()
    }
    function d(a) {
        return(a || window).document.selection
    }
    function e(a, b, c) {
        var d = c ? "end" : "start", c = c ? "start" : "end";
        a.anchorNode = b[d + "Container"];
        a.anchorOffset = b[d + "Offset"];
        a.focusNode = b[c + "Container"];
        a.focusOffset = b[c + "Offset"]
    }
    function f(a) {
        a.anchorNode = a.focusNode = null;
        a.anchorOffset = a.focusOffset = 0;
        a.rangeCount = 0;
        a.isCollapsed = !0;
        a._ranges.length = 0
    }
    function h(a) {
        var c;
        a instanceof x ? (c = a._selectionNativeRange, c ||
                (c = b.createNativeRange(m.getDocument(a.startContainer)), c.setEnd(a.endContainer, a.endOffset), c.setStart(a.startContainer, a.startOffset), a._selectionNativeRange = c, a.attachListener("detach", function() {
                    this._selectionNativeRange = null
                }))) : a instanceof o ? c = a.nativeRange : b.features.implementsDomRange && a instanceof m.getWindow(a.startContainer).Range && (c = a);
        return c
    }
    function i(a) {
        var b = a.getNodes(), c;
        a:if (!b.length || 1 != b[0].nodeType)
            c = !1;
        else {
            c = 1;
            for (var d = b.length; c < d; ++c)
                if (!m.isAncestorOf(b[0], b[c])) {
                    c =
                            !1;
                    break a
                }
            c = !0
        }
        if (!c)
            throw Error("getSingleElementFromRange: range " + a.inspect() + " did not consist of a single element");
        return b[0]
    }
    function g(a, b) {
        var c = new o(b);
        a._ranges = [c];
        e(a, c, !1);
        a.rangeCount = 1;
        a.isCollapsed = c.collapsed
    }
    function k(a) {
        a._ranges.length = 0;
        if ("None" == a.docSelection.type)
            f(a);
        else {
            var c = a.docSelection.createRange();
            if (c && "undefined" != typeof c.text)
                g(a, c);
            else {
                a.rangeCount = c.length;
                for (var d, j = m.getDocument(c.item(0)), k = 0; k < a.rangeCount; ++k)
                    d = b.createRange(j), d.selectNode(c.item(k)),
                            a._ranges.push(d);
                a.isCollapsed = 1 == a.rangeCount && a._ranges[0].collapsed;
                e(a, a._ranges[a.rangeCount - 1], !1)
            }
        }
    }
    function j(a, b) {
        for (var c = a.docSelection.createRange(), d = i(b), e = m.getDocument(c.item(0)), e = m.getBody(e).createControlRange(), g = 0, j = c.length; g < j; ++g)
            e.add(c.item(g));
        try {
            e.add(d)
        } catch (f) {
            throw Error("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)");
        }
        e.select();
        k(a)
    }
    function q(a, b, c) {
        this.nativeSelection = a;
        this.docSelection = b;
        this._ranges =
        [];
        this.win = c;
        this.refresh()
    }
    function n(a, b) {
        for (var c = m.getDocument(b[0].startContainer), c = m.getBody(c).createControlRange(), d = 0, e; d < rangeCount; ++d) {
            e = i(b[d]);
            try {
                c.add(e)
            } catch (g) {
                throw Error("setRanges(): Element within the one of the specified Ranges could not be added to control selection (does it have layout?)");
            }
        }
        c.select();
        k(a)
    }
    function p(a, b) {
        if (a.anchorNode && m.getDocument(a.anchorNode) !== m.getDocument(b))
            throw new z("WRONG_DOCUMENT_ERR");
    }
    function r(a) {
        var b = [], c = new w(a.anchorNode, a.anchorOffset),
                d = new w(a.focusNode, a.focusOffset), e = "function" == typeof a.getName ? a.getName() : "Selection";
        if ("undefined" != typeof a.rangeCount)
            for (var g = 0, j = a.rangeCount; g < j; ++g)
                b[g] = x.inspect(a.getRangeAt(g));
        return"[" + e + "(Ranges: " + b.join(", ") + ")(anchor: " + c.inspect() + ", focus: " + d.inspect() + "]"
    }
    b.requireModules(["DomUtil", "DomRange", "WrappedRange"]);
    b.config.checkSelectionRanges = !0;
    var m = b.dom, s = b.util, x = b.DomRange, o = b.WrappedRange, z = b.DOMException, w = m.DomPosition, y, A, t = b.util.isHostMethod(window, "getSelection"),
            v = b.util.isHostObject(document, "selection"), D = v && (!t || b.config.preferTextRange);
    D ? (y = d, b.isSelectionValid = function(a) {
        var a = (a || window).document, b = a.selection;
        return"None" != b.type || m.getDocument(b.createRange().parentElement()) == a
    }) : t ? (y = a, b.isSelectionValid = function() {
        return!0
    }) : c.fail("Neither document.selection or window.getSelection() detected.");
    b.getNativeSelection = y;
    var t = y(), K = b.createNativeRange(document), F = m.getBody(document), E = s.areHostObjects(t, s.areHostProperties(t, ["anchorOffset", "focusOffset"]));
    b.features.selectionHasAnchorAndFocus = E;
    var I = s.isHostMethod(t, "extend");
    b.features.selectionHasExtend = I;
    var N = "number" == typeof t.rangeCount;
    b.features.selectionHasRangeCount = N;
    var J = !1, C = !0;
    s.areHostMethods(t, ["addRange", "getRangeAt", "removeAllRanges"]) && "number" == typeof t.rangeCount && b.features.implementsDomRange && function() {
        var a = document.createElement("iframe");
        F.appendChild(a);
        var b = m.getIframeDocument(a);
        b.open();
        b.write("<html><head></head><body>12</body></html>");
        b.close();
        var c = m.getIframeWindow(a).getSelection(),
                d = b.documentElement.lastChild.firstChild, b = b.createRange();
        b.setStart(d, 1);
        b.collapse(true);
        c.addRange(b);
        C = c.rangeCount == 1;
        c.removeAllRanges();
        var e = b.cloneRange();
        b.setStart(d, 0);
        e.setEnd(d, 2);
        c.addRange(b);
        c.addRange(e);
        J = c.rangeCount == 2;
        b.detach();
        e.detach();
        F.removeChild(a)
    }();
    b.features.selectionSupportsMultipleRanges = J;
    b.features.collapsedNonEditableSelectionsSupported = C;
    var l = !1, u;
    F && s.isHostMethod(F, "createControlRange") && (u = F.createControlRange(), s.areHostProperties(u, ["item", "add"]) && (l =
            !0));
    b.features.implementsControlRange = l;
    A = E ? function(a) {
        return a.anchorNode === a.focusNode && a.anchorOffset === a.focusOffset
    } : function(a) {
        return a.rangeCount ? a.getRangeAt(a.rangeCount - 1).collapsed : false
    };
    var B;
    s.isHostMethod(t, "getRangeAt") ? B = function(a, b) {
        try {
            return a.getRangeAt(b)
        } catch (c) {
            return null
        }
    } : E && (B = function(a) {
        var c = m.getDocument(a.anchorNode), c = b.createRange(c);
        c.setStart(a.anchorNode, a.anchorOffset);
        c.setEnd(a.focusNode, a.focusOffset);
        if (c.collapsed !== this.isCollapsed) {
            c.setStart(a.focusNode,
                    a.focusOffset);
            c.setEnd(a.anchorNode, a.anchorOffset)
        }
        return c
    });
    b.getSelection = function(a) {
        var a = a || window, b = a._rangySelection, c = y(a), e = v ? d(a) : null;
        if (b) {
            b.nativeSelection = c;
            b.docSelection = e;
            b.refresh(a)
        } else {
            b = new q(c, e, a);
            a._rangySelection = b
        }
        return b
    };
    b.getIframeSelection = function(a) {
        return b.getSelection(m.getIframeWindow(a))
    };
    u = q.prototype;
    if (!D && E && s.areHostMethods(t, ["removeAllRanges", "addRange"])) {
        u.removeAllRanges = function() {
            this.nativeSelection.removeAllRanges();
            f(this)
        };
        var L = function(a,
                c) {
            var d = x.getRangeDocument(c), d = b.createRange(d);
            d.collapseToPoint(c.endContainer, c.endOffset);
            a.nativeSelection.addRange(h(d));
            a.nativeSelection.extend(c.startContainer, c.startOffset);
            a.refresh()
        };
        u.addRange = N ? function(a, c) {
            if (l && v && this.docSelection.type == "Control")
                j(this, a);
            else if (c && I)
                L(this, a);
            else {
                var d;
                if (J)
                    d = this.rangeCount;
                else {
                    this.removeAllRanges();
                    d = 0
                }
                this.nativeSelection.addRange(h(a));
                this.rangeCount = this.nativeSelection.rangeCount;
                if (this.rangeCount == d + 1) {
                    if (b.config.checkSelectionRanges)
                        (d =
                                B(this.nativeSelection, this.rangeCount - 1)) && !x.rangesEqual(d, a) && (a = new o(d));
                    this._ranges[this.rangeCount - 1] = a;
                    e(this, a, H(this.nativeSelection));
                    this.isCollapsed = A(this)
                } else
                    this.refresh()
            }
        } : function(a, b) {
            if (b && I)
                L(this, a);
            else {
                this.nativeSelection.addRange(h(a));
                this.refresh()
            }
        };
        u.setRanges = function(a) {
            if (l && a.length > 1)
                n(this, a);
            else {
                this.removeAllRanges();
                for (var b = 0, c = a.length; b < c; ++b)
                    this.addRange(a[b])
            }
        }
    } else if (s.isHostMethod(t, "empty") && s.isHostMethod(K, "select") && l && D)
        u.removeAllRanges =
                function() {
                    try {
                        this.docSelection.empty();
                        if (this.docSelection.type != "None") {
                            var a;
                            if (this.anchorNode)
                                a = m.getDocument(this.anchorNode);
                            else if (this.docSelection.type == "Control") {
                                var b = this.docSelection.createRange();
                                b.length && (a = m.getDocument(b.item(0)).body.createTextRange())
                            }
                            if (a) {
                                a.body.createTextRange().select();
                                this.docSelection.empty()
                            }
                        }
                    } catch (c) {
                    }
                    f(this)
                }, u.addRange = function(a) {
            if (this.docSelection.type == "Control")
                j(this, a);
            else {
                o.rangeToTextRange(a).select();
                this._ranges[0] = a;
                this.rangeCount =
                        1;
                this.isCollapsed = this._ranges[0].collapsed;
                e(this, a, false)
            }
        }, u.setRanges = function(a) {
            this.removeAllRanges();
            var b = a.length;
            b > 1 ? n(this, a) : b && this.addRange(a[0])
        };
    else
        return c.fail("No means of selecting a Range or TextRange was found"), !1;
    u.getRangeAt = function(a) {
        if (a < 0 || a >= this.rangeCount)
            throw new z("INDEX_SIZE_ERR");
        return this._ranges[a]
    };
    var G;
    if (D)
        G = function(a) {
            var c;
            if (b.isSelectionValid(a.win))
                c = a.docSelection.createRange();
            else {
                c = m.getBody(a.win.document).createTextRange();
                c.collapse(true)
            }
            a.docSelection.type ==
                    "Control" ? k(a) : c && typeof c.text != "undefined" ? g(a, c) : f(a)
        };
    else if (s.isHostMethod(t, "getRangeAt") && "number" == typeof t.rangeCount)
        G = function(a) {
            if (l && v && a.docSelection.type == "Control")
                k(a);
            else {
                a._ranges.length = a.rangeCount = a.nativeSelection.rangeCount;
                if (a.rangeCount) {
                    for (var c = 0, d = a.rangeCount; c < d; ++c)
                        a._ranges[c] = new b.WrappedRange(a.nativeSelection.getRangeAt(c));
                    e(a, a._ranges[a.rangeCount - 1], H(a.nativeSelection));
                    a.isCollapsed = A(a)
                } else
                    f(a)
            }
        };
    else if (E && "boolean" == typeof t.isCollapsed && "boolean" ==
            typeof K.collapsed && b.features.implementsDomRange)
        G = function(a) {
            var b;
            b = a.nativeSelection;
            if (b.anchorNode) {
                b = B(b, 0);
                a._ranges = [b];
                a.rangeCount = 1;
                b = a.nativeSelection;
                a.anchorNode = b.anchorNode;
                a.anchorOffset = b.anchorOffset;
                a.focusNode = b.focusNode;
                a.focusOffset = b.focusOffset;
                a.isCollapsed = A(a)
            } else
                f(a)
        };
    else
        return c.fail("No means of obtaining a Range or TextRange from the user's selection was found"), !1;
    u.refresh = function(a) {
        var b = a ? this._ranges.slice(0) : null;
        G(this);
        if (a) {
            a = b.length;
            if (a != this._ranges.length)
                return false;
            for (; a--; )
                if (!x.rangesEqual(b[a], this._ranges[a]))
                    return false;
            return true
        }
    };
    var P = function(a, b) {
        var c = a.getAllRanges(), d = false;
        a.removeAllRanges();
        for (var e = 0, g = c.length; e < g; ++e)
            d || b !== c[e] ? a.addRange(c[e]) : d = true;
        a.rangeCount || f(a)
    };
    u.removeRange = l ? function(a) {
        if (this.docSelection.type == "Control") {
            for (var b = this.docSelection.createRange(), a = i(a), c = m.getDocument(b.item(0)), c = m.getBody(c).createControlRange(), d, e = false, g = 0, j = b.length; g < j; ++g) {
                d = b.item(g);
                d !== a || e ? c.add(b.item(g)) : e = true
            }
            c.select();
            k(this)
        } else
            P(this, a)
    } : function(a) {
        P(this, a)
    };
    var H;
    !D && E && b.features.implementsDomRange ? (H = function(a) {
        var b = false;
        a.anchorNode && (b = m.comparePoints(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset) == 1);
        return b
    }, u.isBackwards = function() {
        return H(this)
    }) : H = u.isBackwards = function() {
        return false
    };
    u.toString = function() {
        for (var a = [], b = 0, c = this.rangeCount; b < c; ++b)
            a[b] = "" + this._ranges[b];
        return a.join("")
    };
    u.collapse = function(a, c) {
        p(this, a);
        var d = b.createRange(m.getDocument(a));
        d.collapseToPoint(a,
                c);
        this.removeAllRanges();
        this.addRange(d);
        this.isCollapsed = true
    };
    u.collapseToStart = function() {
        if (this.rangeCount) {
            var a = this._ranges[0];
            this.collapse(a.startContainer, a.startOffset)
        } else
            throw new z("INVALID_STATE_ERR");
    };
    u.collapseToEnd = function() {
        if (this.rangeCount) {
            var a = this._ranges[this.rangeCount - 1];
            this.collapse(a.endContainer, a.endOffset)
        } else
            throw new z("INVALID_STATE_ERR");
    };
    u.selectAllChildren = function(a) {
        p(this, a);
        var c = b.createRange(m.getDocument(a));
        c.selectNodeContents(a);
        this.removeAllRanges();
        this.addRange(c)
    };
    u.deleteFromDocument = function() {
        if (l && v && this.docSelection.type == "Control") {
            for (var a = this.docSelection.createRange(), b; a.length; ) {
                b = a.item(0);
                a.remove(b);
                b.parentNode.removeChild(b)
            }
            this.refresh()
        } else if (this.rangeCount) {
            a = this.getAllRanges();
            this.removeAllRanges();
            b = 0;
            for (var c = a.length; b < c; ++b)
                a[b].deleteContents();
            this.addRange(a[c - 1])
        }
    };
    u.getAllRanges = function() {
        return this._ranges.slice(0)
    };
    u.setSingleRange = function(a) {
        this.setRanges([a])
    };
    u.containsNode = function(a, b) {
        for (var c =
                0, d = this._ranges.length; c < d; ++c)
            if (this._ranges[c].containsNode(a, b))
                return true;
        return false
    };
    u.toHtml = function() {
        var a = "";
        if (this.rangeCount) {
            for (var a = x.getRangeDocument(this._ranges[0]).createElement("div"), b = 0, c = this._ranges.length; b < c; ++b)
                a.appendChild(this._ranges[b].cloneContents());
            a = a.innerHTML
        }
        return a
    };
    u.getName = function() {
        return"WrappedSelection"
    };
    u.inspect = function() {
        return r(this)
    };
    u.detach = function() {
        this.win = this.anchorNode = this.focusNode = this.win._rangySelection = null
    };
    q.inspect =
            r;
    b.Selection = q;
    b.selectionPrototype = u;
    b.addCreateMissingNativeApiListener(function(a) {
        if (typeof a.getSelection == "undefined")
            a.getSelection = function() {
                return b.getSelection(this)
            };
        a = null
    })
});
var Base = function() {
};
Base.extend = function(b, c) {
    var a = Base.prototype.extend;
    Base._prototyping = !0;
    var d = new this;
    a.call(d, b);
    d.base = function() {
    };
    delete Base._prototyping;
    var e = d.constructor, f = d.constructor = function() {
        if (!Base._prototyping)
            if (this._constructing || this.constructor == f)
                this._constructing = !0, e.apply(this, arguments), delete this._constructing;
            else if (null != arguments[0])
                return(arguments[0].extend || a).call(arguments[0], d)
    };
    f.ancestor = this;
    f.extend = this.extend;
    f.forEach = this.forEach;
    f.implement = this.implement;
    f.prototype =
            d;
    f.toString = this.toString;
    f.valueOf = function(a) {
        return"object" == a ? f : e.valueOf()
    };
    a.call(f, c);
    "function" == typeof f.init && f.init();
    return f
};
Base.prototype = {extend: function(b, c) {
        if (1 < arguments.length) {
            var a = this[b];
            if (a && "function" == typeof c && (!a.valueOf || a.valueOf() != c.valueOf()) && /\bbase\b/.test(c)) {
                var d = c.valueOf(), c = function() {
                    var b = this.base || Base.prototype.base;
                    this.base = a;
                    var c = d.apply(this, arguments);
                    this.base = b;
                    return c
                };
                c.valueOf = function(a) {
                    return"object" == a ? c : d
                };
                c.toString = Base.toString
            }
            this[b] = c
        } else if (b) {
            var e = Base.prototype.extend;
            !Base._prototyping && "function" != typeof this && (e = this.extend || e);
            for (var f = {toSource: null},
            h = ["constructor", "toString", "valueOf"], i = Base._prototyping ? 0 : 1; g = h[i++]; )
                b[g] != f[g] && e.call(this, g, b[g]);
            for (var g in b)
                f[g] || e.call(this, g, b[g])
        }
        return this
    }};
Base = Base.extend({constructor: function(b) {
        this.extend(b)
    }}, {ancestor: Object, version: "1.1", forEach: function(b, c, a) {
        for (var d in b)
            void 0 === this.prototype[d] && c.call(a, b[d], d, b)
    }, implement: function() {
        for (var b = 0; b < arguments.length; b++)
            if ("function" == typeof arguments[b])
                arguments[b](this.prototype);
            else
                this.prototype.extend(arguments[b]);
        return this
    }, toString: function() {
        return"" + this.valueOf()
    }});
wysihtml5.browser = function() {
    var b = navigator.userAgent, c = document.createElement("div"), a = -1 !== b.indexOf("MSIE") && -1 === b.indexOf("Opera"), d = -1 !== b.indexOf("Gecko") && -1 === b.indexOf("KHTML"), e = -1 !== b.indexOf("AppleWebKit/"), f = -1 !== b.indexOf("Chrome/"), h = -1 !== b.indexOf("Opera/");
    return{USER_AGENT: b, supported: function() {
            var a = this.USER_AGENT.toLowerCase(), b = "contentEditable"in c, d = document.execCommand && document.queryCommandSupported && document.queryCommandState, e = document.querySelector && document.querySelectorAll,
                    a = this.isIos() && 5 > (/ipad|iphone|ipod/.test(a) && a.match(/ os (\d+).+? like mac os x/) || [, 0])[1] || -1 !== a.indexOf("opera mobi") || -1 !== a.indexOf("hpwos/");
            return b && d && e && !a
        }, isTouchDevice: function() {
            return this.supportsEvent("touchmove")
        }, isIos: function() {
            var a = this.USER_AGENT.toLowerCase();
            return-1 !== a.indexOf("webkit") && -1 !== a.indexOf("mobile")
        }, supportsSandboxedIframes: function() {
            return a
        }, throwsMixedContentWarningWhenIframeSrcIsEmpty: function() {
            return!("querySelector"in document)
        }, displaysCaretInEmptyContentEditableCorrectly: function() {
            return!d
        },
        hasCurrentStyleProperty: function() {
            return"currentStyle"in c
        }, insertsLineBreaksOnReturn: function() {
            return d
        }, supportsPlaceholderAttributeOn: function(a) {
            return"placeholder"in a
        }, supportsEvent: function(a) {
            var b;
            if (!(b = "on" + a in c))
                c.setAttribute("on" + a, "return;"), b = "function" === typeof c["on" + a];
            return b
        }, supportsEventsInIframeCorrectly: function() {
            return!h
        }, firesOnDropOnlyWhenOnDragOverIsCancelled: function() {
            return e || d
        }, supportsDataTransfer: function() {
            try {
                return e && (window.Clipboard || window.DataTransfer).prototype.getData
            } catch (a) {
                return!1
            }
        },
        supportsHTML5Tags: function(a) {
            a = a.createElement("div");
            a.innerHTML = "<article>foo</article>";
            return"<article>foo</article>" === a.innerHTML.toLowerCase()
        }, supportsCommand: function() {
            var b = {formatBlock: a, insertUnorderedList: a || h, insertOrderedList: a || h}, c = {insertHTML: d};
            return function(a, d) {
                if (!b[d]) {
                    try {
                        return a.queryCommandSupported(d)
                    } catch (e) {
                    }
                    try {
                        return a.queryCommandEnabled(d)
                    } catch (f) {
                        return!!c[d]
                    }
                }
                return!1
            }
        }(), doesAutoLinkingInContentEditable: function() {
            return a
        }, canDisableAutoLinking: function() {
            return this.supportsCommand(document,
                    "AutoUrlDetect")
        }, clearsContentEditableCorrectly: function() {
            return d || h || e
        }, supportsGetAttributeCorrectly: function() {
            return"1" != document.createElement("td").getAttribute("rowspan")
        }, canSelectImagesInContentEditable: function() {
            return d || a || h
        }, clearsListsInContentEditableCorrectly: function() {
            return d || a || e
        }, autoScrollsToCaret: function() {
            return!e
        }, autoClosesUnclosedTags: function() {
            var a = c.cloneNode(!1), b;
            a.innerHTML = "<p><div></div>";
            a = a.innerHTML.toLowerCase();
            b = "<p></p><div></div>" === a || "<p><div></div></p>" ===
                    a;
            this.autoClosesUnclosedTags = function() {
                return b
            };
            return b
        }, supportsNativeGetElementsByClassName: function() {
            return-1 !== ("" + document.getElementsByClassName).indexOf("[native code]")
        }, supportsSelectionModify: function() {
            return"getSelection"in window && "modify"in window.getSelection()
        }, supportsClassList: function() {
            return"classList"in c
        }, needsSpaceAfterLineBreak: function() {
            return h
        }, supportsSpeechApiOn: function(a) {
            return 11 <= (b.match(/Chrome\/(\d+)/) || [, 0])[1] && ("onwebkitspeechchange"in a || "speech"in a)
        },
        crashesWhenDefineProperty: function(b) {
            return a && ("XMLHttpRequest" === b || "XDomainRequest" === b)
        }, doesAsyncFocus: function() {
            return a
        }, hasProblemsSettingCaretAfterImg: function() {
            return a
        }, hasUndoInContextMenu: function() {
            return d || f || h
        }}
}();
wysihtml5.lang.array = function(b) {
    return{contains: function(c) {
            if (b.indexOf)
                return-1 !== b.indexOf(c);
            for (var a = 0, d = b.length; a < d; a++)
                if (b[a] === c)
                    return!0;
            return!1
        }, without: function(c) {
            for (var c = wysihtml5.lang.array(c), a = [], d = 0, e = b.length; d < e; d++)
                c.contains(b[d]) || a.push(b[d]);
            return a
        }, get: function() {
            for (var c = 0, a = b.length, d = []; c < a; c++)
                d.push(b[c]);
            return d
        }}
};
wysihtml5.lang.Dispatcher = Base.extend({observe: function(b, c) {
        this.events = this.events || {};
        this.events[b] = this.events[b] || [];
        this.events[b].push(c);
        return this
    }, on: function() {
        return this.observe.apply(this, wysihtml5.lang.array(arguments).get())
    }, fire: function(b, c) {
        this.events = this.events || {};
        for (var a = this.events[b] || [], d = 0; d < a.length; d++)
            a[d].call(this, c);
        return this
    }, stopObserving: function(b, c) {
        this.events = this.events || {};
        var a = 0, d, e;
        if (b) {
            d = this.events[b] || [];
            for (e = []; a < d.length; a++)
                d[a] !== c && c &&
                        e.push(d[a]);
            this.events[b] = e
        } else
            this.events = {};
        return this
    }});
wysihtml5.lang.object = function(b) {
    return{merge: function(c) {
            for (var a in c)
                b[a] = c[a];
            return this
        }, get: function() {
            return b
        }, clone: function() {
            var c = {}, a;
            for (a in b)
                c[a] = b[a];
            return c
        }, isArray: function() {
            return"[object Array]" === Object.prototype.toString.call(b)
        }}
};
(function() {
    var b = /^\s+/, c = /\s+$/;
    wysihtml5.lang.string = function(a) {
        a = "" + a;
        return{trim: function() {
                return a.replace(b, "").replace(c, "")
            }, interpolate: function(b) {
                for (var c in b)
                    a = this.replace("#{" + c + "}").by(b[c]);
                return a
            }, replace: function(b) {
                return{by: function(c) {
                        return a.split(b).join(c)
                    }}
            }}
    }
})();
(function(b) {
    function c(a) {
        return a.replace(e, function(a, b) {
            var c = (b.match(f) || [])[1] || "", d = i[c], b = b.replace(f, "");
            b.split(d).length > b.split(c).length && (b += c, c = "");
            var e = d = b;
            b.length > h && (e = e.substr(0, h) + "...");
            "www." === d.substr(0, 4) && (d = "http://" + d);
            return'<a href="' + d + '">' + e + "</a>" + c
        })
    }
    function a(g) {
        if (!d.contains(g.nodeName))
            if (g.nodeType === b.TEXT_NODE && g.data.match(e)) {
                var f = g.parentNode, j;
                j = f.ownerDocument;
                var h = j._wysihtml5_tempElement;
                h || (h = j._wysihtml5_tempElement = j.createElement("div"));
                j =
                        h;
                j.innerHTML = "<span></span>" + c(g.data);
                for (j.removeChild(j.firstChild); j.firstChild; )
                    f.insertBefore(j.firstChild, g);
                f.removeChild(g)
            } else {
                f = b.lang.array(g.childNodes).get();
                j = f.length;
                for (h = 0; h < j; h++)
                    a(f[h]);
                return g
            }
    }
    var d = b.lang.array("CODE,PRE,A,SCRIPT,HEAD,TITLE,STYLE".split(",")), e = /((https?:\/\/|www\.)[^\s<]{3,})/gi, f = /([^\w\/\-](,?))$/i, h = 100, i = {")": "(", "]": "[", "}": "{"};
    b.dom.autoLink = function(b) {
        var c;
        a:{
            c = b;
            for (var e; c.parentNode; ) {
                c = c.parentNode;
                e = c.nodeName;
                if (d.contains(e)) {
                    c = !0;
                    break a
                }
                if ("body" ===
                        e)
                    break
            }
            c = !1
        }
        if (c)
            return b;
        b === b.ownerDocument.documentElement && (b = b.ownerDocument.body);
        return a(b)
    };
    b.dom.autoLink.URL_REG_EXP = e
})(wysihtml5);
(function(b) {
    var c = b.browser.supportsClassList(), a = b.dom;
    a.addClass = function(b, e) {
        if (c)
            return b.classList.add(e);
        a.hasClass(b, e) || (b.className += " " + e)
    };
    a.removeClass = function(a, b) {
        if (c)
            return a.classList.remove(b);
        a.className = a.className.replace(RegExp("(^|\\s+)" + b + "(\\s+|$)"), " ")
    };
    a.hasClass = function(a, b) {
        if (c)
            return a.classList.contains(b);
        var f = a.className;
        return 0 < f.length && (f == b || RegExp("(^|\\s)" + b + "(\\s|$)").test(f))
    }
})(wysihtml5);
wysihtml5.dom.contains = function() {
    var b = document.documentElement;
    if (b.contains)
        return function(b, a) {
            a.nodeType !== wysihtml5.ELEMENT_NODE && (a = a.parentNode);
            return b !== a && b.contains(a)
        };
    if (b.compareDocumentPosition)
        return function(b, a) {
            return!!(b.compareDocumentPosition(a) & 16)
        }
}();
wysihtml5.dom.convertToList = function() {
    function b(b, a) {
        var d = b.createElement("li");
        a.appendChild(d);
        return d
    }
    return function(c, a) {
        if ("UL" === c.nodeName || "OL" === c.nodeName || "MENU" === c.nodeName)
            return c;
        for (var d = c.ownerDocument, e = d.createElement(a), f = wysihtml5.lang.array(c.childNodes).get(), h = f.length, i, g, k, j, q = 0; q < h; q++)
            j = j || b(d, e), i = f[q], g = "block" === wysihtml5.dom.getStyle("display").from(i), k = "BR" === i.nodeName, g ? (j = j.firstChild ? b(d, e) : j, j.appendChild(i), j = null) : k ? j = j.firstChild ? null : j : j.appendChild(i);
        c.parentNode.replaceChild(e, c);
        return e
    }
}();
wysihtml5.dom.copyAttributes = function(b) {
    return{from: function(c) {
            return{to: function(a) {
                    for (var d, e = 0, f = b.length; e < f; e++)
                        d = b[e], c[d] && (a[d] = c[d]);
                    return{andTo: arguments.callee}
                }}
        }}
};
(function(b) {
    var c = ["-webkit-box-sizing", "-moz-box-sizing", "-ms-box-sizing", "box-sizing"], a = function(a) {
        var e;
        a:for (var f = 0, h = c.length; f < h; f++)
            if ("border-box" === b.getStyle(c[f]).from(a)) {
                e = c[f];
                break a
            }
        return e ? parseInt(b.getStyle("width").from(a), 10) < a.offsetWidth : !1
    };
    b.copyStyles = function(d) {
        return{from: function(e) {
                a(e) && (d = wysihtml5.lang.array(d).without(c));
                for (var f = "", h = d.length, i = 0, g; i < h; i++)
                    g = d[i], f += g + ":" + b.getStyle(g).from(e) + ";";
                return{to: function(a) {
                        b.setStyles(f).on(a);
                        return{andTo: arguments.callee}
                    }}
            }}
    }
})(wysihtml5.dom);
(function(b) {
    b.dom.delegate = function(c, a, d, e) {
        return b.dom.observe(c, d, function(d) {
            for (var h = d.target, i = b.lang.array(c.querySelectorAll(a)); h && h !== c; ) {
                if (i.contains(h)) {
                    e.call(h, d);
                    break
                }
                h = h.parentNode
            }
        })
    }
})(wysihtml5);
wysihtml5.dom.getAsDom = function() {
    var b = "abbr,article,aside,audio,bdi,canvas,command,datalist,details,figcaption,figure,footer,header,hgroup,keygen,mark,meter,nav,output,progress,rp,rt,ruby,svg,section,source,summary,time,track,video,wbr".split(",");
    return function(c, a) {
        var a = a || document, d;
        if ("object" === typeof c && c.nodeType)
            d = a.createElement("div"), d.appendChild(c);
        else if (wysihtml5.browser.supportsHTML5Tags(a))
            d = a.createElement("div"), d.innerHTML = c;
        else {
            d = a;
            if (!d._wysihtml5_supportsHTML5Tags) {
                for (var e =
                        0, f = b.length; e < f; e++)
                    d.createElement(b[e]);
                d._wysihtml5_supportsHTML5Tags = !0
            }
            d = a;
            e = d.createElement("div");
            e.style.display = "none";
            d.body.appendChild(e);
            try {
                e.innerHTML = c
            } catch (h) {
            }
            d.body.removeChild(e);
            d = e
        }
        return d
    }
}();
wysihtml5.dom.getParentElement = function() {
    function b(b, a) {
        return!a || !a.length ? !0 : "string" === typeof a ? b === a : wysihtml5.lang.array(a).contains(b)
    }
    return function(c, a, d) {
        d = d || 50;
        if (a.className || a.classRegExp) {
            a:{
                for (var e = a.nodeName, f = a.className, a = a.classRegExp; d-- && c && "BODY" !== c.nodeName; ) {
                    var h;
                    if (h = c.nodeType === wysihtml5.ELEMENT_NODE)
                        if (h = b(c.nodeName, e)) {
                            h = f;
                            var i = (c.className || "").match(a) || [];
                            h = !h ? !!i.length : i[i.length - 1] === h
                        }
                    if (h)
                        break a;
                    c = c.parentNode
                }
                c = null
            }
            return c
        }
        a:{
            e = a.nodeName;
            for (f = d; f-- &&
                    c && "BODY" !== c.nodeName; ) {
                if (b(c.nodeName, e))
                    break a;
                c = c.parentNode
            }
            c = null
        }
        return c
    }
}();
wysihtml5.dom.getStyle = function() {
    function b(b) {
        return b.replace(a, function(a) {
            return a.charAt(1).toUpperCase()
        })
    }
    var c = {"float": "styleFloat"in document.createElement("div").style ? "styleFloat" : "cssFloat"}, a = /\-[a-z]/g;
    return function(a) {
        return{from: function(e) {
                if (e.nodeType === wysihtml5.ELEMENT_NODE) {
                    var f = e.ownerDocument, h = c[a] || b(a), i = e.style, g = e.currentStyle, k = i[h];
                    if (k)
                        return k;
                    if (g)
                        try {
                            return g[h]
                        } catch (j) {
                        }
                    var h = f.defaultView || f.parentWindow, f = ("height" === a || "width" === a) && "TEXTAREA" === e.nodeName,
                            q;
                    if (h.getComputedStyle)
                        return f && (q = i.overflow, i.overflow = "hidden"), e = h.getComputedStyle(e, null).getPropertyValue(a), f && (i.overflow = q || ""), e
                }
            }}
    }
}();
wysihtml5.dom.hasElementWithTagName = function() {
    var b = {}, c = 1;
    return function(a, d) {
        var e = (a._wysihtml5_identifier || (a._wysihtml5_identifier = c++)) + ":" + d, f = b[e];
        f || (f = b[e] = a.getElementsByTagName(d));
        return 0 < f.length
    }
}();
(function(b) {
    var c = {}, a = 1;
    b.dom.hasElementWithClassName = function(d, e) {
        if (!b.browser.supportsNativeGetElementsByClassName())
            return!!d.querySelector("." + e);
        var f = (d._wysihtml5_identifier || (d._wysihtml5_identifier = a++)) + ":" + e, h = c[f];
        h || (h = c[f] = d.getElementsByClassName(e));
        return 0 < h.length
    }
})(wysihtml5);
wysihtml5.dom.insert = function(b) {
    return{after: function(c) {
            c.parentNode.insertBefore(b, c.nextSibling)
        }, before: function(c) {
            c.parentNode.insertBefore(b, c)
        }, into: function(c) {
            c.appendChild(b)
        }}
};
wysihtml5.dom.insertCSS = function(b) {
    b = b.join("\n");
    return{into: function(c) {
            var a = c.head || c.getElementsByTagName("head")[0], d = c.createElement("style");
            d.type = "text/css";
            d.styleSheet ? d.styleSheet.cssText = b : d.appendChild(c.createTextNode(b));
            a && a.appendChild(d)
        }}
};
wysihtml5.dom.observe = function(b, c, a) {
    for (var c = "string" === typeof c ? [c] : c, d, e, f = 0, h = c.length; f < h; f++)
        e = c[f], b.addEventListener ? b.addEventListener(e, a, !1) : (d = function(c) {
            "target"in c || (c.target = c.srcElement);
            c.preventDefault = c.preventDefault || function() {
                this.returnValue = false
            };
            c.stopPropagation = c.stopPropagation || function() {
                this.cancelBubble = true
            };
            a.call(b, c)
        }, b.attachEvent("on" + e, d));
    return{stop: function() {
            for (var e, g = 0, f = c.length; g < f; g++)
                e = c[g], b.removeEventListener ? b.removeEventListener(e, a, !1) :
                        b.detachEvent("on" + e, d)
        }}
};
wysihtml5.dom.parse = function() {
    function b(c, e) {
        var g = c.childNodes, f = g.length, k;
        k = a[c.nodeType];
        var h = 0;
        k = k && k(c);
        if (!k)
            return null;
        for (h = 0; h < f; h++)
            (newChild = b(g[h], e)) && k.appendChild(newChild);
        return e && 1 >= k.childNodes.length && k.nodeName.toLowerCase() === d && !k.attributes.length ? k.firstChild : k
    }
    function c(a, b) {
        var b = b.toLowerCase(), c;
        if (c = "IMG" == a.nodeName)
            if (c = "src" == b) {
                var d;
                try {
                    d = a.complete && !a.mozMatchesSelector(":-moz-broken")
                } catch (e) {
                    a.complete && "complete" === a.readyState && (d = !0)
                }
                c = !0 === d
            }
        return c ?
                a.src : i && "outerHTML"in a ? -1 != a.outerHTML.toLowerCase().indexOf(" " + b + "=") ? a.getAttribute(b) : null : a.getAttribute(b)
    }
    var a = {1: function(a) {
            var b, f, i = h.tags;
            f = a.nodeName.toLowerCase();
            b = a.scopeName;
            if (a._wysihtml5)
                return null;
            a._wysihtml5 = 1;
            if ("wysihtml5-temp" === a.className)
                return null;
            b && "HTML" != b && (f = b + ":" + f);
            "outerHTML"in a && !wysihtml5.browser.autoClosesUnclosedTags() && "P" === a.nodeName && "</p>" !== a.outerHTML.slice(-4).toLowerCase() && (f = "div");
            if (f in i) {
                b = i[f];
                if (!b || b.remove)
                    return null;
                b = "string" ===
                        typeof b ? {rename_tag: b} : b
            } else if (a.firstChild)
                b = {rename_tag: d};
            else
                return null;
            f = a.ownerDocument.createElement(b.rename_tag || f);
            var i = {}, r = b.set_class, m = b.add_class, s = b.set_attributes, x = b.check_attributes, o = h.classes, z = 0, w = [];
            b = [];
            var y = [], A = [], t;
            s && (i = wysihtml5.lang.object(s).clone());
            if (x)
                for (t in x)
                    if (s = g[x[t]])
                        s = s(c(a, t)), "string" === typeof s && (i[t] = s);
            r && w.push(r);
            if (m)
                for (t in m)
                    if (s = k[m[t]])
                        r = s(c(a, t)), "string" === typeof r && w.push(r);
            o["_wysihtml5-temp-placeholder"] = 1;
            (A = a.getAttribute("class")) &&
                    (w = w.concat(A.split(e)));
            for (m = w.length; z < m; z++)
                a = w[z], o[a] && b.push(a);
            for (o = b.length; o--; )
                a = b[o], wysihtml5.lang.array(y).contains(a) || y.unshift(a);
            y.length && (i["class"] = y.join(" "));
            for (t in i)
                try {
                    f.setAttribute(t, i[t])
                } catch (v) {
                }
            i.src && ("undefined" !== typeof i.width && f.setAttribute("width", i.width), "undefined" !== typeof i.height && f.setAttribute("height", i.height));
            return f
        }, 3: function(a) {
            return a.ownerDocument.createTextNode(a.data)
        }}, d = "span", e = /\s+/, f = {tags: {}, classes: {}}, h = {}, i = !wysihtml5.browser.supportsGetAttributeCorrectly(),
            g = {url: function() {
            var a = /^https?:\/\//i;
            return function(b) {
                return!b || !b.match(a) ? null : b.replace(a, function(a) {
                    return a.toLowerCase()
                })
            }
        }(), alt: function() {
            var a = /[^ a-z0-9_\-]/gi;
            return function(b) {
                return!b ? "" : b.replace(a, "")
            }
        }(), numbers: function() {
            var a = /\D/g;
            return function(b) {
                return(b = (b || "").replace(a, "")) || null
            }
        }()}, k = {align_img: function() {
            var a = {left: "wysiwyg-float-left", right: "wysiwyg-float-right"};
            return function(b) {
                return a[("" + b).toLowerCase()]
            }
        }(), align_text: function() {
            var a = {left: "wysiwyg-text-align-left",
                right: "wysiwyg-text-align-right", center: "wysiwyg-text-align-center", justify: "wysiwyg-text-align-justify"};
            return function(b) {
                return a[("" + b).toLowerCase()]
            }
        }(), clear_br: function() {
            var a = {left: "wysiwyg-clear-left", right: "wysiwyg-clear-right", both: "wysiwyg-clear-both", all: "wysiwyg-clear-both"};
            return function(b) {
                return a[("" + b).toLowerCase()]
            }
        }(), size_font: function() {
            var a = {1: "wysiwyg-font-size-xx-small", 2: "wysiwyg-font-size-small", 3: "wysiwyg-font-size-medium", 4: "wysiwyg-font-size-large", 5: "wysiwyg-font-size-x-large",
                6: "wysiwyg-font-size-xx-large", 7: "wysiwyg-font-size-xx-large", "-": "wysiwyg-font-size-smaller", "+": "wysiwyg-font-size-larger"};
            return function(b) {
                return a[("" + b).charAt(0)]
            }
        }()};
    return function(a, c, d, e) {
        wysihtml5.lang.object(h).merge(f).merge(c).get();
        for (var d = d || a.ownerDocument || document, c = d.createDocumentFragment(), g = "string" === typeof a, a = g ? wysihtml5.dom.getAsDom(a, d) : a; a.firstChild; )
            d = a.firstChild, a.removeChild(d), (d = b(d, e)) && c.appendChild(d);
        a.innerHTML = "";
        a.appendChild(c);
        return g ? wysihtml5.quirks.getCorrectInnerHTML(a) :
        a
    }
}();
wysihtml5.dom.removeEmptyTextNodes = function(b) {
    for (var c = wysihtml5.lang.array(b.childNodes).get(), a = c.length, d = 0; d < a; d++)
        b = c[d], b.nodeType === wysihtml5.TEXT_NODE && "" === b.data && b.parentNode.removeChild(b)
};
wysihtml5.dom.renameElement = function(b, c) {
    for (var a = b.ownerDocument.createElement(c), d; d = b.firstChild; )
        a.appendChild(d);
    wysihtml5.dom.copyAttributes(["align", "className"]).from(b).to(a);
    b.parentNode.replaceChild(a, b);
    return a
};
wysihtml5.dom.replaceWithChildNodes = function(b) {
    if (b.parentNode)
        if (b.firstChild) {
            for (var c = b.ownerDocument.createDocumentFragment(); b.firstChild; )
                c.appendChild(b.firstChild);
            b.parentNode.replaceChild(c, b)
        } else
            b.parentNode.removeChild(b)
};
(function(b) {
    function c(a) {
        var b = a.ownerDocument.createElement("br");
        a.appendChild(b)
    }
    b.resolveList = function(a) {
        if (!("MENU" !== a.nodeName && "UL" !== a.nodeName && "OL" !== a.nodeName)) {
            var d = a.ownerDocument.createDocumentFragment(), e = a.previousSibling, f, h, i;
            for (e && "block" !== b.getStyle("display").from(e) && c(d); i = a.firstChild; ) {
                for (f = i.lastChild; e = i.firstChild; )
                    h = (h = e === f) && "block" !== b.getStyle("display").from(e) && "BR" !== e.nodeName, d.appendChild(e), h && c(d);
                i.parentNode.removeChild(i)
            }
            a.parentNode.replaceChild(d,
                    a)
        }
    }
})(wysihtml5.dom);
(function(b) {
    var c = document, a = "parent,top,opener,frameElement,frames,localStorage,globalStorage,sessionStorage,indexedDB".split(","), d = "open,close,openDialog,showModalDialog,alert,confirm,prompt,openDatabase,postMessage,XMLHttpRequest,XDomainRequest".split(","), e = ["referrer", "write", "open", "close"];
    b.dom.Sandbox = Base.extend({constructor: function(a, c) {
            this.callback = a || b.EMPTY_FUNCTION;
            this.config = b.lang.object({}).merge(c).get();
            this.iframe = this._createIframe()
        }, insertInto: function(a) {
            "string" === typeof a &&
                    (a = c.getElementById(a));
            a.appendChild(this.iframe)
        }, getIframe: function() {
            return this.iframe
        }, getWindow: function() {
            this._readyError()
        }, getDocument: function() {
            this._readyError()
        }, destroy: function() {
            var a = this.getIframe();
            a.parentNode.removeChild(a)
        }, _readyError: function() {
            throw Error("wysihtml5.Sandbox: Sandbox iframe isn't loaded yet");
        }, _createIframe: function() {
            var a = this, d = c.createElement("iframe");
            d.className = "wysihtml5-sandbox";
            b.dom.setAttributes({security: "restricted", allowtransparency: "true",
                frameborder: 0, width: 0, height: 0, marginwidth: 0, marginheight: 0}).on(d);
            b.browser.throwsMixedContentWarningWhenIframeSrcIsEmpty() && (d.src = "javascript:'<html></html>'");
            d.onload = function() {
                d.onreadystatechange = d.onload = null;
                a._onLoadIframe(d)
            };
            d.onreadystatechange = function() {
                if (/loaded|complete/.test(d.readyState)) {
                    d.onreadystatechange = d.onload = null;
                    a._onLoadIframe(d)
                }
            };
            return d
        }, _onLoadIframe: function(f) {
            if (b.dom.contains(c.documentElement, f)) {
                var h = this, i = f.contentWindow, g = f.contentWindow.document, k =
                        this._getHtml({charset: c.characterSet || c.charset || "utf-8", stylesheets: this.config.stylesheets});
                g.open("text/html", "replace");
                g.write(k);
                g.close();
                this.getWindow = function() {
                    return f.contentWindow
                };
                this.getDocument = function() {
                    return f.contentWindow.document
                };
                i.onerror = function(a, b, c) {
                    throw Error("wysihtml5.Sandbox: " + a, b, c);
                };
                if (!b.browser.supportsSandboxedIframes()) {
                    var j, k = 0;
                    for (j = a.length; k < j; k++)
                        this._unset(i, a[k]);
                    k = 0;
                    for (j = d.length; k < j; k++)
                        this._unset(i, d[k], b.EMPTY_FUNCTION);
                    k = 0;
                    for (j = e.length; k <
                            j; k++)
                        this._unset(g, e[k]);
                    this._unset(g, "cookie", "", !0)
                }
                this.loaded = !0;
                setTimeout(function() {
                    h.callback(h)
                }, 0)
            }
        }, _getHtml: function(a) {
            var c = a.stylesheets, d = "", e = 0, k;
            if (c = "string" === typeof c ? [c] : c)
                for (k = c.length; e < k; e++)
                    d += '<link rel="stylesheet" href="' + c[e] + '">';
            a.stylesheets = d;
            return b.lang.string('<!DOCTYPE html><html><head><meta charset="#{charset}">#{stylesheets}</head><body></body></html>').interpolate(a)
        }, _unset: function(a, c, d, e) {
            try {
                a[c] = d
            } catch (k) {
            }
            try {
                a.__defineGetter__(c, function() {
                    return d
                })
            } catch (j) {
            }
            if (e)
                try {
                    a.__defineSetter__(c,
                            function() {
                            })
                } catch (q) {
                }
            if (!b.browser.crashesWhenDefineProperty(c))
                try {
                    var n = {get: function() {
                            return d
                        }};
                    e && (n.set = function() {
                    });
                    Object.defineProperty(a, c, n)
                } catch (p) {
                }
        }})
})(wysihtml5);
(function() {
    var b = {className: "class"};
    wysihtml5.dom.setAttributes = function(c) {
        return{on: function(a) {
                for (var d in c)
                    a.setAttribute(b[d] || d, c[d])
            }}
    }
})();
wysihtml5.dom.setStyles = function(b) {
    return{on: function(c) {
            c = c.style;
            if ("string" === typeof b)
                c.cssText += ";" + b;
            else
                for (var a in b)
                    "float" === a ? (c.cssFloat = b[a], c.styleFloat = b[a]) : c[a] = b[a]
        }}
};
(function(b) {
    b.simulatePlaceholder = function(c, a, d) {
        var e = function() {
            a.hasPlaceholderSet() && a.clear();
            b.removeClass(a.element, "placeholder")
        }, f = function() {
            a.isEmpty() && (a.setValue(d), b.addClass(a.element, "placeholder"))
        };
        c.observe("set_placeholder", f).observe("unset_placeholder", e).observe("focus:composer", e).observe("paste:composer", e).observe("blur:composer", f);
        f()
    }
})(wysihtml5.dom);
(function(b) {
    var c = document.documentElement;
    "textContent"in c ? (b.setTextContent = function(a, b) {
        a.textContent = b
    }, b.getTextContent = function(a) {
        return a.textContent
    }) : "innerText"in c ? (b.setTextContent = function(a, b) {
        a.innerText = b
    }, b.getTextContent = function(a) {
        return a.innerText
    }) : (b.setTextContent = function(a, b) {
        a.nodeValue = b
    }, b.getTextContent = function(a) {
        return a.nodeValue
    })
})(wysihtml5.dom);
wysihtml5.quirks.cleanPastedHTML = function() {
    var b = {"a u": wysihtml5.dom.replaceWithChildNodes};
    return function(c, a, d) {
        var a = a || b, d = d || c.ownerDocument || document, e = "string" === typeof c, f, h, i, g = 0, c = e ? wysihtml5.dom.getAsDom(c, d) : c;
        for (i in a) {
            f = c.querySelectorAll(i);
            d = a[i];
            for (h = f.length; g < h; g++)
                d(f[g])
        }
        return e ? c.innerHTML : c
    }
}();
(function(b) {
    var c = b.dom;
    b.quirks.ensureProperClearing = function() {
        var a = function() {
            var a = this;
            setTimeout(function() {
                var b = a.innerHTML.toLowerCase();
                if ("<p>&nbsp;</p>" == b || "<p>&nbsp;</p><p>&nbsp;</p>" == b)
                    a.innerHTML = ""
            }, 0)
        };
        return function(b) {
            c.observe(b.element, ["cut", "keydown"], a)
        }
    }();
    b.quirks.ensureProperClearingOfLists = function() {
        var a = ["OL", "UL", "MENU"];
        return function(d) {
            c.observe(d.element, "keydown", function(e) {
                if (e.keyCode === b.BACKSPACE_KEY) {
                    var f = d.selection.getSelectedNode(), e = d.element;
                    e.firstChild && b.lang.array(a).contains(e.firstChild.nodeName) && (f = c.getParentElement(f, {nodeName: a})) && f == e.firstChild && 1 >= f.childNodes.length && (f.firstChild ? "" === f.firstChild.innerHTML : 1) && f.parentNode.removeChild(f)
                }
            })
        }
    }()
})(wysihtml5);
(function(b) {
    b.quirks.getCorrectInnerHTML = function(c) {
        var a = c.innerHTML;
        if (-1 === a.indexOf("%7E"))
            return a;
        var c = c.querySelectorAll("[href*='~'], [src*='~']"), d, e, f, h;
        h = 0;
        for (f = c.length; h < f; h++)
            d = c[h].href || c[h].src, e = b.lang.string(d).replace("~").by("%7E"), a = b.lang.string(a).replace(e).by(d);
        return a
    }
})(wysihtml5);
(function(b) {
    var c = b.dom, a = "LI,P,H1,H2,H3,H4,H5,H6".split(","), d = ["UL", "OL", "MENU"];
    b.quirks.insertLineBreakOnReturn = function(e) {
        function f(a) {
            if (a = c.getParentElement(a, {nodeName: ["P", "DIV"]}, 2)) {
                var d = document.createTextNode(b.INVISIBLE_SPACE);
                c.insert(d).before(a);
                c.replaceWithChildNodes(a);
                e.selection.selectNode(d)
            }
        }
        c.observe(e.element.ownerDocument, "keydown", function(h) {
            var i = h.keyCode;
            if (!(h.shiftKey || i !== b.ENTER_KEY && i !== b.BACKSPACE_KEY)) {
                var g = e.selection.getSelectedNode();
                (g = c.getParentElement(g,
                        {nodeName: a}, 4)) ? "LI" === g.nodeName && (i === b.ENTER_KEY || i === b.BACKSPACE_KEY) ? setTimeout(function() {
                    var a = e.selection.getSelectedNode(), b;
                    a && ((b = c.getParentElement(a, {nodeName: d}, 2)) || f(a))
                }, 0) : g.nodeName.match(/H[1-6]/) && i === b.ENTER_KEY && setTimeout(function() {
                    f(e.selection.getSelectedNode())
                }, 0) : i === b.ENTER_KEY && !b.browser.insertsLineBreaksOnReturn() && (e.commands.exec("insertLineBreak"), h.preventDefault())
            }
        })
    }
})(wysihtml5);
(function(b) {
    b.quirks.redraw = function(c) {
        b.dom.addClass(c, "wysihtml5-quirks-redraw");
        b.dom.removeClass(c, "wysihtml5-quirks-redraw");
        try {
            var a = c.ownerDocument;
            a.execCommand("italic", !1, null);
            a.execCommand("italic", !1, null)
        } catch (d) {
        }
    }
})(wysihtml5);
(function(b) {
    var c = b.dom;
    b.Selection = Base.extend({constructor: function(a) {
            window.rangy.init();
            this.editor = a;
            this.composer = a.composer;
            this.doc = this.composer.doc
        }, getBookmark: function() {
            var a = this.getRange();
            return a && a.cloneRange()
        }, setBookmark: function(a) {
            a && this.setSelection(a)
        }, setBefore: function(a) {
            var b = rangy.createRange(this.doc);
            b.setStartBefore(a);
            b.setEndBefore(a);
            return this.setSelection(b)
        }, setAfter: function(a) {
            var b = rangy.createRange(this.doc);
            b.setStartAfter(a);
            b.setEndAfter(a);
            return this.setSelection(b)
        },
        selectNode: function(a) {
            var d = rangy.createRange(this.doc), e = a.nodeType === b.ELEMENT_NODE, f = "canHaveHTML"in a ? a.canHaveHTML : "IMG" !== a.nodeName, h = e ? a.innerHTML : a.data, h = "" === h || h === b.INVISIBLE_SPACE, i = c.getStyle("display").from(a), i = "block" === i || "list-item" === i;
            if (h && e && f)
                try {
                    a.innerHTML = b.INVISIBLE_SPACE
                } catch (g) {
                }
            f ? d.selectNodeContents(a) : d.selectNode(a);
            f && h && e ? d.collapse(i) : f && h && (d.setStartAfter(a), d.setEndAfter(a));
            this.setSelection(d)
        }, getSelectedNode: function(a) {
            if (a && this.doc.selection && "Control" ===
                    this.doc.selection.type && (a = this.doc.selection.createRange()) && a.length)
                return a.item(0);
            a = this.getSelection(this.doc);
            return a.focusNode === a.anchorNode ? a.focusNode : (a = this.getRange(this.doc)) ? a.commonAncestorContainer : this.doc.body
        }, executeAndRestore: function(a, c) {
            var e = this.doc.body, f = c && e.scrollTop, h = c && e.scrollLeft, i = '<span class="_wysihtml5-temp-placeholder">' + b.INVISIBLE_SPACE + "</span>", g = this.getRange(this.doc);
            if (g) {
                i = g.createContextualFragment(i);
                g.insertNode(i);
                try {
                    a(g.startContainer, g.endContainer)
                } catch (k) {
                    setTimeout(function() {
                        throw k;
                    }, 0)
                }
                (caretPlaceholder = this.doc.querySelector("._wysihtml5-temp-placeholder")) ? (g = rangy.createRange(this.doc), g.selectNode(caretPlaceholder), g.deleteContents(), this.setSelection(g)) : e.focus();
                c && (e.scrollTop = f, e.scrollLeft = h);
                try {
                    caretPlaceholder.parentNode.removeChild(caretPlaceholder)
                } catch (j) {
                }
            } else
                a(e, e)
        }, executeAndRestoreSimple: function(a) {
            var b, c, f = this.getRange(), h = this.doc.body, i;
            if (f) {
                b = f.getNodes([3]);
                h = b[0] || f.startContainer;
                i = b[b.length - 1] || f.endContainer;
                b = h === f.startContainer ? f.startOffset :
                        0;
                c = i === f.endContainer ? f.endOffset : i.length;
                try {
                    a(f.startContainer, f.endContainer)
                } catch (g) {
                    setTimeout(function() {
                        throw g;
                    }, 0)
                }
                a = rangy.createRange(this.doc);
                try {
                    a.setStart(h, b)
                } catch (k) {
                }
                try {
                    a.setEnd(i, c)
                } catch (j) {
                }
                try {
                    this.setSelection(a)
                } catch (q) {
                }
            } else
                a(h, h)
        }, insertHTML: function(a) {
            var a = rangy.createRange(this.doc).createContextualFragment(a), b = a.lastChild;
            this.insertNode(a);
            b && this.setAfter(b)
        }, insertNode: function(a) {
            var b = this.getRange();
            b && b.insertNode(a)
        }, surround: function(a) {
            var b = this.getRange();
            if (b)
                try {
                    b.surroundContents(a), this.selectNode(a)
                } catch (c) {
                    a.appendChild(b.extractContents()), b.insertNode(a)
                }
        }, scrollIntoView: function() {
            var a = this.doc, c = a.documentElement.scrollHeight > a.documentElement.offsetHeight, e;
            if (!(e = a._wysihtml5ScrollIntoViewElement))
                e = a.createElement("span"), e.innerHTML = b.INVISIBLE_SPACE;
            e = a._wysihtml5ScrollIntoViewElement = e;
            if (c) {
                this.insertNode(e);
                var c = e, f = 0;
                if (c.parentNode) {
                    do
                        f += c.offsetTop || 0, c = c.offsetParent;
                    while (c)
                }
                c = f;
                e.parentNode.removeChild(e);
                c > a.body.scrollTop &&
                        (a.body.scrollTop = c)
            }
        }, selectLine: function() {
            b.browser.supportsSelectionModify() ? this._selectLine_W3C() : this.doc.selection && this._selectLine_MSIE()
        }, _selectLine_W3C: function() {
            var a = this.doc.defaultView.getSelection();
            a.modify("extend", "left", "lineboundary");
            a.modify("extend", "right", "lineboundary")
        }, _selectLine_MSIE: function() {
            var a = this.doc.selection.createRange(), b = a.boundingTop, c = this.doc.body.scrollWidth, f;
            if (a.moveToPoint) {
                0 === b && (f = this.doc.createElement("span"), this.insertNode(f), b = f.offsetTop,
                        f.parentNode.removeChild(f));
                b += 1;
                for (f = - 10; f < c; f += 2)
                    try {
                        a.moveToPoint(f, b);
                        break
                    } catch (h) {
                    }
                for (f = this.doc.selection.createRange(); 0 <= c; c--)
                    try {
                        f.moveToPoint(c, b);
                        break
                    } catch (i) {
                    }
                a.setEndPoint("EndToEnd", f);
                a.select()
            }
        }, getText: function() {
            var a = this.getSelection();
            return a ? a.toString() : ""
        }, getNodes: function(a, b) {
            var c = this.getRange();
            return c ? c.getNodes([a], b) : []
        }, getRange: function() {
            var a = this.getSelection();
            return a && a.rangeCount && a.getRangeAt(0)
        }, getSelection: function() {
            return rangy.getSelection(this.doc.defaultView ||
                    this.doc.parentWindow)
        }, setSelection: function(a) {
            return rangy.getSelection(this.doc.defaultView || this.doc.parentWindow).setSingleRange(a)
        }})
})(wysihtml5);
(function(b, c) {
    function a(a, b) {
        return c.dom.isCharacterDataNode(a) ? 0 == b ? !!a.previousSibling : b == a.length ? !!a.nextSibling : !0 : 0 < b && b < a.childNodes.length
    }
    function d(a, b, e) {
        var f;
        c.dom.isCharacterDataNode(b) && (0 == e ? (e = c.dom.getNodeIndex(b), b = b.parentNode) : e == b.length ? (e = c.dom.getNodeIndex(b) + 1, b = b.parentNode) : f = c.dom.splitDataNode(b, e));
        if (!f) {
            f = b.cloneNode(!1);
            f.id && f.removeAttribute("id");
            for (var h; h = b.childNodes[e]; )
                f.appendChild(h);
            c.dom.insertAfter(f, b)
        }
        return b == a ? f : d(a, f.parentNode, c.dom.getNodeIndex(f))
    }
    function e(a) {
        this.firstTextNode = (this.isElementMerge = a.nodeType == b.ELEMENT_NODE) ? a.lastChild : a;
        this.textNodes = [this.firstTextNode]
    }
    function f(a, b, c, d) {
        this.tagNames = a || [h];
        this.cssClass = b || "";
        this.similarClassRegExp = c;
        this.normalize = d;
        this.applyToAnyTagName = !1
    }
    var h = "span", i = /\s+/g;
    e.prototype = {doMerge: function() {
            for (var a = [], b, c, d = 0, e = this.textNodes.length; d < e; ++d)
                b = this.textNodes[d], c = b.parentNode, a[d] = b.data, d && (c.removeChild(b), c.hasChildNodes() || c.parentNode.removeChild(c));
            return this.firstTextNode.data =
                    a = a.join("")
        }, getLength: function() {
            for (var a = this.textNodes.length, b = 0; a--; )
                b += this.textNodes[a].length;
            return b
        }, toString: function() {
            for (var a = [], b = 0, c = this.textNodes.length; b < c; ++b)
                a[b] = "'" + this.textNodes[b].data + "'";
            return"[Merge(" + a.join(",") + ")]"
        }};
    f.prototype = {getAncestorWithClass: function(a) {
            for (var d; a; ) {
                if (this.cssClass)
                    if (d = this.cssClass, a.className) {
                        var e = a.className.match(this.similarClassRegExp) || [];
                        d = e[e.length - 1] === d
                    } else
                        d = !1;
                else
                    d = !0;
                if (a.nodeType == b.ELEMENT_NODE && c.dom.arrayContains(this.tagNames,
                        a.tagName.toLowerCase()) && d)
                    return a;
                a = a.parentNode
            }
            return!1
        }, postApply: function(a, b) {
            for (var c = a[0], d = a[a.length - 1], f = [], h, i = c, m = d, s = 0, x = d.length, o, z, w = 0, y = a.length; w < y; ++w)
                if (o = a[w], z = this.getAdjacentMergeableTextNode(o.parentNode, !1)) {
                    if (h || (h = new e(z), f.push(h)), h.textNodes.push(o), o === c && (i = h.firstTextNode, s = i.length), o === d)
                        m = h.firstTextNode, x = h.getLength()
                } else
                    h = null;
            if (c = this.getAdjacentMergeableTextNode(d.parentNode, !0))
                h || (h = new e(d), f.push(h)), h.textNodes.push(c);
            if (f.length) {
                w = 0;
                for (y =
                        f.length; w < y; ++w)
                    f[w].doMerge();
                b.setStart(i, s);
                b.setEnd(m, x)
            }
        }, getAdjacentMergeableTextNode: function(a, c) {
            var d = a.nodeType == b.TEXT_NODE, e = d ? a.parentNode : a, f = c ? "nextSibling" : "previousSibling";
            if (d) {
                if ((d = a[f]) && d.nodeType == b.TEXT_NODE)
                    return d
            } else if ((d = e[f]) && this.areElementsMergeable(a, d))
                return d[c ? "firstChild" : "lastChild"];
            return null
        }, areElementsMergeable: function(a, b) {
            var d;
            if (d = c.dom.arrayContains(this.tagNames, (a.tagName || "").toLowerCase()))
                if (d = c.dom.arrayContains(this.tagNames, (b.tagName ||
                        "").toLowerCase()))
                    if (d = a.className.replace(i, " ") == b.className.replace(i, " "))
                        a:if (a.attributes.length != b.attributes.length)
                            d = !1;
                        else {
                            d = 0;
                            for (var e = a.attributes.length, f, h; d < e; ++d)
                                if (f = a.attributes[d], h = f.name, "class" != h && (h = b.attributes.getNamedItem(h), f.specified != h.specified || f.specified && f.nodeValue !== h.nodeValue)) {
                                    d = !1;
                                    break a
                                }
                            d = !0
                        }
            return d
        }, createContainer: function(a) {
            a = a.createElement(this.tagNames[0]);
            this.cssClass && (a.className = this.cssClass);
            return a
        }, applyToTextNode: function(a) {
            var b =
                    a.parentNode;
            1 == b.childNodes.length && c.dom.arrayContains(this.tagNames, b.tagName.toLowerCase()) ? this.cssClass && (a = this.cssClass, b.className ? (b.className && (b.className = b.className.replace(this.similarClassRegExp, "")), b.className += " " + a) : b.className = a) : (b = this.createContainer(c.dom.getDocument(a)), a.parentNode.insertBefore(b, a), b.appendChild(a))
        }, isRemovable: function(a) {
            return c.dom.arrayContains(this.tagNames, a.tagName.toLowerCase()) && b.lang.string(a.className).trim() == this.cssClass
        }, undoToTextNode: function(b,
                c, e) {
            c.containsNode(e) || (b = c.cloneRange(), b.selectNode(e), b.isPointInRange(c.endContainer, c.endOffset) && a(c.endContainer, c.endOffset) && (d(e, c.endContainer, c.endOffset), c.setEndAfter(e)), b.isPointInRange(c.startContainer, c.startOffset) && a(c.startContainer, c.startOffset) && (e = d(e, c.startContainer, c.startOffset)));
            this.similarClassRegExp && e.className && (e.className = e.className.replace(this.similarClassRegExp, ""));
            if (this.isRemovable(e)) {
                c = e;
                for (e = c.parentNode; c.firstChild; )
                    e.insertBefore(c.firstChild,
                            c);
                e.removeChild(c)
            }
        }, applyToRange: function(a) {
            var c = a.getNodes([b.TEXT_NODE]);
            if (!c.length)
                try {
                    var d = this.createContainer(a.endContainer.ownerDocument);
                    a.surroundContents(d);
                    this.selectNode(a, d);
                    return
                } catch (e) {
                }
            a.splitBoundaries();
            c = a.getNodes([b.TEXT_NODE]);
            if (c.length) {
                for (var f = 0, h = c.length; f < h; ++f)
                    d = c[f], this.getAncestorWithClass(d) || this.applyToTextNode(d);
                a.setStart(c[0], 0);
                d = c[c.length - 1];
                a.setEnd(d, d.length);
                this.normalize && this.postApply(c, a)
            }
        }, undoToRange: function(a) {
            var c = a.getNodes([b.TEXT_NODE]),
                    d, e;
            c.length ? (a.splitBoundaries(), c = a.getNodes([b.TEXT_NODE])) : (c = a.endContainer.ownerDocument.createTextNode(b.INVISIBLE_SPACE), a.insertNode(c), a.selectNode(c), c = [c]);
            for (var f = 0, h = c.length; f < h; ++f)
                d = c[f], (e = this.getAncestorWithClass(d)) && this.undoToTextNode(d, a, e);
            1 == h ? this.selectNode(a, c[0]) : (a.setStart(c[0], 0), d = c[c.length - 1], a.setEnd(d, d.length), this.normalize && this.postApply(c, a))
        }, selectNode: function(a, c) {
            var d = c.nodeType === b.ELEMENT_NODE, e = "canHaveHTML"in c ? c.canHaveHTML : !0, f = d ? c.innerHTML :
                    c.data;
            if ((f = "" === f || f === b.INVISIBLE_SPACE) && d && e)
                try {
                    c.innerHTML = b.INVISIBLE_SPACE
                } catch (h) {
                }
            a.selectNodeContents(c);
            f && d ? a.collapse(!1) : f && (a.setStartAfter(c), a.setEndAfter(c))
        }, getTextSelectedByRange: function(a, b) {
            var c = b.cloneRange();
            c.selectNodeContents(a);
            var d = c.intersection(b), d = d ? d.toString() : "";
            c.detach();
            return d
        }, isAppliedToRange: function(a) {
            var c = [], d, e = a.getNodes([b.TEXT_NODE]);
            if (!e.length)
                return(d = this.getAncestorWithClass(a.startContainer)) ? [d] : !1;
            for (var f = 0, h = e.length, i; f < h; ++f) {
                i =
                        this.getTextSelectedByRange(e[f], a);
                d = this.getAncestorWithClass(e[f]);
                if ("" != i && !d)
                    return!1;
                c.push(d)
            }
            return c
        }, toggleRange: function(a) {
            this.isAppliedToRange(a) ? this.undoToRange(a) : this.applyToRange(a)
        }};
    b.selection.HTMLApplier = f
})(wysihtml5, rangy);
wysihtml5.Commands = Base.extend({constructor: function(b) {
        this.editor = b;
        this.composer = b.composer;
        this.doc = this.composer.doc
    }, support: function(b) {
        return wysihtml5.browser.supportsCommand(this.doc, b)
    }, exec: function(b, c) {
        var a = wysihtml5.commands[b], d = a && a.exec;
        this.editor.fire("beforecommand:composer");
        if (d)
            return d.call(a, this.composer, b, c);
        try {
            return this.doc.execCommand(b, !1, c)
        } catch (e) {
        }
        this.editor.fire("aftercommand:composer")
    }, state: function(b, c) {
        var a = wysihtml5.commands[b], d = a && a.state;
        if (d)
            return d.call(a,
                    this.composer, b, c);
        try {
            return this.doc.queryCommandState(b)
        } catch (e) {
            return!1
        }
    }, value: function(b) {
        var c = wysihtml5.commands[b], a = c && c.value;
        if (a)
            return a.call(c, this.composer, b);
        try {
            return this.doc.queryCommandValue(b)
        } catch (d) {
            return null
        }
    }});
(function(b) {
    b.commands.bold = {exec: function(c, a) {
            return b.commands.formatInline.exec(c, a, "b")
        }, state: function(c, a) {
            return b.commands.formatInline.state(c, a, "b")
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    function c(c, h) {
        var i = c.doc, g = "_wysihtml5-temp-" + +new Date, k = 0, j, q, n;
        b.commands.formatInline.exec(c, a, d, g, /non-matching-class/g);
        j = i.querySelectorAll(d + "." + g);
        for (g = j.length; k < g; k++)
            for (n in q = j[k], q.removeAttribute("class"), h)
                q.setAttribute(n, h[n]);
        k = q;
        1 === g && (n = e.getTextContent(q), g = !!q.querySelector("*"), n = "" === n || n === b.INVISIBLE_SPACE, !g && n && (e.setTextContent(q, q.href), i = i.createTextNode(" "), c.selection.setAfter(q), c.selection.insertNode(i), k = i));
        c.selection.setAfter(k)
    }
    var a, d =
            "A", e = b.dom;
    b.commands.createLink = {exec: function(a, b, d) {
            var g = this.state(a, b);
            g ? a.selection.executeAndRestore(function() {
                for (var a = g.length, b = 0, c, d, f; b < a; b++)
                    c = g[b], d = e.getParentElement(c, {nodeName: "code"}), f = e.getTextContent(c), f.match(e.autoLink.URL_REG_EXP) && !d ? e.renameElement(c, "code") : e.replaceWithChildNodes(c)
            }) : (d = "object" === typeof d ? d : {href: d}, c(a, d))
        }, state: function(a, c) {
            return b.commands.formatInline.state(a, c, "A")
        }, value: function() {
            return a
        }}
})(wysihtml5);
(function(b) {
    var c = /wysiwyg-font-size-[a-z]+/g;
    b.commands.fontSize = {exec: function(a, d, e) {
            return b.commands.formatInline.exec(a, d, "span", "wysiwyg-font-size-" + e, c)
        }, state: function(a, d, e) {
            return b.commands.formatInline.state(a, d, "span", "wysiwyg-font-size-" + e, c)
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    var c = /wysiwyg-color-[a-z]+/g;
    b.commands.foreColor = {exec: function(a, d, e) {
            return b.commands.formatInline.exec(a, d, "span", "wysiwyg-color-" + e, c)
        }, state: function(a, d, e) {
            return b.commands.formatInline.state(a, d, "span", "wysiwyg-color-" + e, c)
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    function c(a) {
        for (a = a.previousSibling; a && a.nodeType === b.TEXT_NODE && !b.lang.string(a.data).trim(); )
            a = a.previousSibling;
        return a
    }
    function a(a) {
        for (a = a.nextSibling; a && a.nodeType === b.TEXT_NODE && !b.lang.string(a.data).trim(); )
            a = a.nextSibling;
        return a
    }
    function d(a) {
        return"BR" === a.nodeName || "block" === h.getStyle("display").from(a) ? !0 : !1
    }
    function e(a, c, d, e) {
        if (e)
            var f = h.observe(a, "DOMNodeInserted", function(a) {
                var a = a.target, c;
                a.nodeType === b.ELEMENT_NODE && (c = h.getStyle("display").from(a), "inline" !==
                        c.substr(0, 6) && (a.className += " " + e))
            });
        a.execCommand(c, !1, d);
        f && f.stop()
    }
    function f(b, d) {
        b.selection.selectLine();
        b.selection.surround(d);
        var e = a(d), f = c(d);
        e && "BR" === e.nodeName && e.parentNode.removeChild(e);
        f && "BR" === f.nodeName && f.parentNode.removeChild(f);
        (e = d.lastChild) && "BR" === e.nodeName && e.parentNode.removeChild(e);
        b.selection.selectNode(d)
    }
    var h = b.dom, i = "H1,H2,H3,H4,H5,H6,P,BLOCKQUOTE,DIV".split(",");
    b.commands.formatBlock = {exec: function(g, k, j, q, n) {
            var p = g.doc, r = this.state(g, k, j, q, n), m, j = "string" ===
                    typeof j ? j.toUpperCase() : j;
            if (r)
                g.selection.executeAndRestoreSimple(function() {
                    n && (r.className = r.className.replace(n, ""));
                    var e = !!b.lang.string(r.className).trim();
                    if (!e && r.nodeName === (j || "DIV")) {
                        var e = r, f = e.ownerDocument, g = a(e), i = c(e);
                        g && !d(g) && e.parentNode.insertBefore(f.createElement("br"), g);
                        i && !d(i) && e.parentNode.insertBefore(f.createElement("br"), e);
                        h.replaceWithChildNodes(r)
                    } else
                        e && h.renameElement(r, "DIV")
                });
            else {
                if (null === j || b.lang.array(i).contains(j))
                    if (m = g.selection.getSelectedNode(),
                            r = h.getParentElement(m, {nodeName: i})) {
                        g.selection.executeAndRestoreSimple(function() {
                            j && (r = h.renameElement(r, j));
                            if (q) {
                                var a = r;
                                a.className ? (a.className = a.className.replace(n, ""), a.className += " " + q) : a.className = q
                            }
                        });
                        return
                    }
                g.commands.support(k) ? e(p, k, j || "DIV", q) : (r = p.createElement(j || "DIV"), q && (r.className = q), f(g, r))
            }
        }, state: function(a, b, c, d, e) {
            c = "string" === typeof c ? c.toUpperCase() : c;
            a = a.selection.getSelectedNode();
            return h.getParentElement(a, {nodeName: c, className: d, classRegExp: e})
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    function c(c, f, h) {
        var i = c + ":" + f;
        if (!d[i]) {
            var g = d, k = b.selection.HTMLApplier, j = a[c], c = j ? [c.toLowerCase(), j.toLowerCase()] : [c.toLowerCase()];
            g[i] = new k(c, f, h, !0)
        }
        return d[i]
    }
    var a = {strong: "b", em: "i", b: "strong", i: "em"}, d = {};
    b.commands.formatInline = {exec: function(a, b, d, i, g) {
            b = a.selection.getRange();
            if (!b)
                return!1;
            c(d, i, g).toggleRange(b);
            a.selection.setSelection(b)
        }, state: function(d, f, h, i, g) {
            var f = d.doc, k = a[h] || h;
            if (!b.dom.hasElementWithTagName(f, h) && !b.dom.hasElementWithTagName(f, k) || i &&
                    !b.dom.hasElementWithClassName(f, i))
                return!1;
            d = d.selection.getRange();
            return!d ? !1 : c(h, i, g).isAppliedToRange(d)
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    b.commands.insertHTML = {exec: function(b, a, d) {
            b.commands.support(a) ? b.doc.execCommand(a, !1, d) : b.selection.insertHTML(d)
        }, state: function() {
            return!1
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    b.commands.insertImage = {exec: function(c, a, d) {
            var d = "object" === typeof d ? d : {src: d}, e = c.doc, a = this.state(c), f;
            if (a)
                c.selection.setBefore(a), d = a.parentNode, d.removeChild(a), b.dom.removeEmptyTextNodes(d), "A" === d.nodeName && !d.firstChild && (c.selection.setAfter(d), d.parentNode.removeChild(d)), b.quirks.redraw(c.element);
            else {
                a = e.createElement("IMG");
                for (f in d)
                    a[f] = d[f];
                c.selection.insertNode(a);
                b.browser.hasProblemsSettingCaretAfterImg() ? (d = e.createTextNode(b.INVISIBLE_SPACE), c.selection.insertNode(d),
                        c.selection.setAfter(d)) : c.selection.setAfter(a)
            }
        }, state: function(c) {
            var a;
            if (!b.dom.hasElementWithTagName(c.doc, "IMG"))
                return!1;
            a = c.selection.getSelectedNode();
            if (!a)
                return!1;
            if ("IMG" === a.nodeName)
                return a;
            if (a.nodeType !== b.ELEMENT_NODE)
                return!1;
            a = c.selection.getText();
            if (a = b.lang.string(a).trim())
                return!1;
            c = c.selection.getNodes(b.ELEMENT_NODE, function(a) {
                return"IMG" === a.nodeName
            });
            return 1 !== c.length ? !1 : c[0]
        }, value: function(b) {
            return(b = this.state(b)) && b.src
        }}
})(wysihtml5);
(function(b) {
    var c = "<br>" + (b.browser.needsSpaceAfterLineBreak() ? " " : "");
    b.commands.insertLineBreak = {exec: function(a, d) {
            a.commands.support(d) ? (a.doc.execCommand(d, !1, null), b.browser.autoScrollsToCaret() || a.selection.scrollIntoView()) : a.commands.exec("insertHTML", c)
        }, state: function() {
            return!1
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    b.commands.insertOrderedList = {exec: function(c, a) {
            var d = c.doc, e, f, h;
            c.commands.support(a) ? d.execCommand(a, !1, null) : (e = c.selection.getSelectedNode(), (h = b.dom.getParentElement(e, {nodeName: ["UL", "OL"]}, 4)) ? c.selection.executeAndRestoreSimple(function() {
                "OL" === h.nodeName ? b.dom.resolveList(h) : ("UL" === h.nodeName || "MENU" === h.nodeName) && b.dom.renameElement(h, "ol")
            }) : (f = d.createElement("span"), c.selection.surround(f), d = "" === f.innerHTML || f.innerHTML === b.INVISIBLE_SPACE, c.selection.executeAndRestoreSimple(function() {
                h =
                        b.dom.convertToList(f, "ol")
            }), d && c.selection.selectNode(h.querySelector("li"))))
        }, state: function(b, a) {
            try {
                return b.doc.queryCommandState(a)
            } catch (d) {
                return!1
            }
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    b.commands.insertUnorderedList = {exec: function(c, a) {
            var d = c.doc, e, f, h;
            c.commands.support(a) ? d.execCommand(a, !1, null) : (e = c.selection.getSelectedNode(), (h = b.dom.getParentElement(e, {nodeName: ["UL", "OL"]})) ? c.selection.executeAndRestoreSimple(function() {
                "UL" === h.nodeName ? b.dom.resolveList(h) : ("OL" === h.nodeName || "MENU" === h.nodeName) && b.dom.renameElement(h, "ul")
            }) : (f = d.createElement("span"), c.selection.surround(f), d = "" === f.innerHTML || f.innerHTML === b.INVISIBLE_SPACE, c.selection.executeAndRestoreSimple(function() {
                h =
                        b.dom.convertToList(f, "ul")
            }), d && c.selection.selectNode(h.querySelector("li"))))
        }, state: function(b, a) {
            try {
                return b.doc.queryCommandState(a)
            } catch (d) {
                return!1
            }
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    b.commands.italic = {exec: function(c, a) {
            return b.commands.formatInline.exec(c, a, "i")
        }, state: function(c, a) {
            return b.commands.formatInline.state(c, a, "i")
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    var c = /wysiwyg-text-align-[a-z]+/g;
    b.commands.justifyCenter = {exec: function(a) {
            return b.commands.formatBlock.exec(a, "formatBlock", null, "wysiwyg-text-align-center", c)
        }, state: function(a) {
            return b.commands.formatBlock.state(a, "formatBlock", null, "wysiwyg-text-align-center", c)
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    var c = /wysiwyg-text-align-[a-z]+/g;
    b.commands.justifyLeft = {exec: function(a) {
            return b.commands.formatBlock.exec(a, "formatBlock", null, "wysiwyg-text-align-left", c)
        }, state: function(a) {
            return b.commands.formatBlock.state(a, "formatBlock", null, "wysiwyg-text-align-left", c)
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    var c = /wysiwyg-text-align-[a-z]+/g;
    b.commands.justifyRight = {exec: function(a) {
            return b.commands.formatBlock.exec(a, "formatBlock", null, "wysiwyg-text-align-right", c)
        }, state: function(a) {
            return b.commands.formatBlock.state(a, "formatBlock", null, "wysiwyg-text-align-right", c)
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    var c = /wysiwyg-text-decoration-underline/g;
    b.commands.underline = {exec: function(a, d) {
            return b.commands.formatInline.exec(a, d, "span", "wysiwyg-text-decoration-underline", c)
        }, state: function(a, d) {
            return b.commands.formatInline.state(a, d, "span", "wysiwyg-text-decoration-underline", c)
        }, value: function() {
        }}
})(wysihtml5);
(function(b) {
    var c = '<span id="_wysihtml5-undo" class="_wysihtml5-temp">' + b.INVISIBLE_SPACE + "</span>", a = '<span id="_wysihtml5-redo" class="_wysihtml5-temp">' + b.INVISIBLE_SPACE + "</span>", d = b.dom;
    b.UndoManager = b.lang.Dispatcher.extend({constructor: function(a) {
            this.editor = a;
            this.composer = a.composer;
            this.element = this.composer.element;
            this.history = [this.composer.getValue()];
            this.position = 1;
            this.composer.commands.support("insertHTML") && this._observe()
        }, _observe: function() {
            var e = this, f = this.composer.sandbox.getDocument(),
                    h;
            d.observe(this.element, "keydown", function(a) {
                if (!(a.altKey || !a.ctrlKey && !a.metaKey)) {
                    var b = a.keyCode, c = 90 === b && a.shiftKey || 89 === b;
                    90 === b && !a.shiftKey ? (e.undo(), a.preventDefault()) : c && (e.redo(), a.preventDefault())
                }
            });
            d.observe(this.element, "keydown", function(a) {
                a = a.keyCode;
                a !== h && (h = a, (8 === a || 46 === a) && e.transact())
            });
            if (b.browser.hasUndoInContextMenu()) {
                var i, g, k = function() {
                    for (var a; a = f.querySelector("._wysihtml5-temp"); )
                        a.parentNode.removeChild(a);
                    clearInterval(i)
                };
                d.observe(this.element, "contextmenu",
                        function() {
                            k();
                            e.composer.selection.executeAndRestoreSimple(function() {
                                e.element.lastChild && e.composer.selection.setAfter(e.element.lastChild);
                                f.execCommand("insertHTML", !1, c);
                                f.execCommand("insertHTML", !1, a);
                                f.execCommand("undo", !1, null)
                            });
                            i = setInterval(function() {
                                f.getElementById("_wysihtml5-redo") ? (k(), e.redo()) : f.getElementById("_wysihtml5-undo") || (k(), e.undo())
                            }, 400);
                            g || (g = !0, d.observe(document, "mousedown", k), d.observe(f, ["mousedown", "paste", "cut", "copy"], k))
                        })
            }
            this.editor.observe("newword:composer",
                    function() {
                        e.transact()
                    }).observe("beforecommand:composer", function() {
                e.transact()
            })
        }, transact: function() {
            var a = this.history[this.position - 1], b = this.composer.getValue();
            if (b != a) {
                if (40 < (this.history.length = this.position))
                    this.history.shift(), this.position--;
                this.position++;
                this.history.push(b)
            }
        }, undo: function() {
            this.transact();
            1 >= this.position || (this.set(this.history[--this.position - 1]), this.editor.fire("undo:composer"))
        }, redo: function() {
            this.position >= this.history.length || (this.set(this.history[++this.position -
            1]), this.editor.fire("redo:composer"))
        }, set: function(a) {
            this.composer.setValue(a);
            this.editor.focus(!0)
        }})
})(wysihtml5);
wysihtml5.views.View = Base.extend({constructor: function(b, c, a) {
        this.parent = b;
        this.element = c;
        this.config = a;
        this._observeViewChange()
    }, _observeViewChange: function() {
        var b = this;
        this.parent.observe("beforeload", function() {
            b.parent.observe("change_view", function(c) {
                c === b.name ? (b.parent.currentView = b, b.show(), setTimeout(function() {
                    b.focus()
                }, 0)) : b.hide()
            })
        })
    }, focus: function() {
        if (this.element.ownerDocument.querySelector(":focus") !== this.element)
            try {
                this.element.focus()
            } catch (b) {
            }
    }, hide: function() {
        this.element.style.display =
                "none"
    }, show: function() {
        this.element.style.display = ""
    }, disable: function() {
        this.element.setAttribute("disabled", "disabled")
    }, enable: function() {
        this.element.removeAttribute("disabled")
    }});
(function(b) {
    var c = b.dom, a = b.browser;
    b.views.Composer = b.views.View.extend({name: "composer", CARET_HACK: "<br>", constructor: function(a, b, c) {
            this.base(a, b, c);
            this.textarea = this.parent.textarea;
            this._initSandbox()
        }, clear: function() {
            this.element.innerHTML = a.displaysCaretInEmptyContentEditableCorrectly() ? "" : this.CARET_HACK
        }, getValue: function(a) {
            var c = this.isEmpty() ? "" : b.quirks.getCorrectInnerHTML(this.element);
            a && (c = this.parent.parse(c));
            return c = b.lang.string(c).replace(b.INVISIBLE_SPACE).by("")
        }, setValue: function(a,
                b) {
            b && (a = this.parent.parse(a));
            this.element.innerHTML = a
        }, show: function() {
            this.iframe.style.display = this._displayStyle || "";
            this.disable();
            this.enable()
        }, hide: function() {
            this._displayStyle = c.getStyle("display").from(this.iframe);
            "none" === this._displayStyle && (this._displayStyle = null);
            this.iframe.style.display = "none"
        }, disable: function() {
            this.element.removeAttribute("contentEditable");
            this.base()
        }, enable: function() {
            this.element.setAttribute("contentEditable", "true");
            this.base()
        }, focus: function(a) {
            b.browser.doesAsyncFocus() &&
                    this.hasPlaceholderSet() && this.clear();
            this.base();
            var c = this.element.lastChild;
            a && c && ("BR" === c.nodeName ? this.selection.setBefore(this.element.lastChild) : this.selection.setAfter(this.element.lastChild))
        }, getTextContent: function() {
            return c.getTextContent(this.element)
        }, hasPlaceholderSet: function() {
            return this.getTextContent() == this.textarea.element.getAttribute("placeholder")
        }, isEmpty: function() {
            var a = this.element.innerHTML;
            return"" === a || a === this.CARET_HACK || this.hasPlaceholderSet() || "" === this.getTextContent() &&
                    !this.element.querySelector("blockquote, ul, ol, img, embed, object, table, iframe, svg, video, audio, button, input, select, textarea")
        }, _initSandbox: function() {
            var a = this;
            this.sandbox = new c.Sandbox(function() {
                a._create()
            }, {stylesheets: this.config.stylesheets});
            this.iframe = this.sandbox.getIframe();
            var b = document.createElement("input");
            b.type = "hidden";
            b.name = "_wysihtml5_mode";
            b.value = 1;
            var f = this.textarea.element;
            c.insert(this.iframe).after(f);
            c.insert(b).after(f)
        }, _create: function() {
            var d = this;
            this.doc =
                    this.sandbox.getDocument();
            this.element = this.doc.body;
            this.textarea = this.parent.textarea;
            this.element.innerHTML = this.textarea.getValue(!0);
            this.enable();
            this.selection = new b.Selection(this.parent);
            this.commands = new b.Commands(this.parent);
            c.copyAttributes("className,spellcheck,title,lang,dir,accessKey".split(",")).from(this.textarea.element).to(this.element);
            c.addClass(this.element, this.config.composerClassName);
            this.config.style && this.style();
            this.observe();
            var e = this.config.name;
            e && (c.addClass(this.element,
                    e), c.addClass(this.iframe, e));
            (e = "string" === typeof this.config.placeholder ? this.config.placeholder : this.textarea.element.getAttribute("placeholder")) && c.simulatePlaceholder(this.parent, this, e);
            this.commands.exec("styleWithCSS", !1);
            this._initAutoLinking();
            this._initObjectResizing();
            this._initUndoManager();
            (this.textarea.element.hasAttribute("autofocus") || document.querySelector(":focus") == this.textarea.element) && setTimeout(function() {
                d.focus()
            }, 100);
            b.quirks.insertLineBreakOnReturn(this);
            a.clearsContentEditableCorrectly() ||
                    b.quirks.ensureProperClearing(this);
            a.clearsListsInContentEditableCorrectly() || b.quirks.ensureProperClearingOfLists(this);
            this.initSync && this.config.sync && this.initSync();
            this.textarea.hide();
            this.parent.fire("beforeload").fire("load")
        }, _initAutoLinking: function() {
            var d = this, e = a.canDisableAutoLinking(), f = a.doesAutoLinkingInContentEditable();
            e && this.commands.exec("autoUrlDetect", !1);
            if (this.config.autoLink) {
                (!f || f && e) && this.parent.observe("newword:composer", function() {
                    d.selection.executeAndRestore(function(a,
                            b) {
                        c.autoLink(b.parentNode)
                    })
                });
                var h = this.sandbox.getDocument().getElementsByTagName("a"), i = c.autoLink.URL_REG_EXP, g = function(a) {
                    a = b.lang.string(c.getTextContent(a)).trim();
                    "www." === a.substr(0, 4) && (a = "http://" + a);
                    return a
                };
                c.observe(this.element, "keydown", function(a) {
                    if (h.length) {
                        var a = d.selection.getSelectedNode(a.target.ownerDocument), b = c.getParentElement(a, {nodeName: "A"}, 4), e;
                        b && (e = g(b), setTimeout(function() {
                            var a = g(b);
                            a !== e && a.match(i) && b.setAttribute("href", a)
                        }, 0))
                    }
                })
            }
        }, _initObjectResizing: function() {
            var d =
                    ["width", "height"], e = d.length, f = this.element;
            this.commands.exec("enableObjectResizing", this.config.allowObjectResizing);
            this.config.allowObjectResizing ? a.supportsEvent("resizeend") && c.observe(f, "resizeend", function(a) {
                for (var a = a.target || a.srcElement, c = a.style, g = 0, k; g < e; g++)
                    k = d[g], c[k] && (a.setAttribute(k, parseInt(c[k], 10)), c[k] = "");
                b.quirks.redraw(f)
            }) : a.supportsEvent("resizestart") && c.observe(f, "resizestart", function(a) {
                a.preventDefault()
            })
        }, _initUndoManager: function() {
            new b.UndoManager(this.parent)
        }})
})(wysihtml5);
(function(b) {
    var c = b.dom, a = document, d = window, e = a.createElement("div"), f = "background-color,color,cursor,font-family,font-size,font-style,font-variant,font-weight,line-height,letter-spacing,text-align,text-decoration,text-indent,text-rendering,word-break,word-wrap,word-spacing".split(","), h = "background-color,border-collapse,border-bottom-color,border-bottom-style,border-bottom-width,border-left-color,border-left-style,border-left-width,border-right-color,border-right-style,border-right-width,border-top-color,border-top-style,border-top-width,clear,display,float,margin-bottom,margin-left,margin-right,margin-top,outline-color,outline-offset,outline-width,outline-style,padding-left,padding-right,padding-top,padding-bottom,position,top,left,right,bottom,z-index,vertical-align,text-align,-webkit-box-sizing,-moz-box-sizing,-ms-box-sizing,box-sizing,-webkit-box-shadow,-moz-box-shadow,-ms-box-shadow,box-shadow,-webkit-border-top-right-radius,-moz-border-radius-topright,border-top-right-radius,-webkit-border-bottom-right-radius,-moz-border-radius-bottomright,border-bottom-right-radius,-webkit-border-bottom-left-radius,-moz-border-radius-bottomleft,border-bottom-left-radius,-webkit-border-top-left-radius,-moz-border-radius-topleft,border-top-left-radius,width,height".split(","),
            i = "width,height,top,left,right,bottom".split(","), g = ["html             { height: 100%; }", "body             { min-height: 100%; padding: 0; margin: 0; margin-top: -1px; padding-top: 1px; }", "._wysihtml5-temp { display: none; }", b.browser.isGecko ? "body.placeholder { color: graytext !important; }" : "body.placeholder { color: #a9a9a9 !important; }", "body[disabled]   { background-color: #eee !important; color: #999 !important; cursor: default !important; }", "img:-moz-broken  { -moz-force-broken-image-icon: 1; height: 24px; width: 24px; }"],
            k = function(b) {
        if (b.setActive)
            try {
                b.setActive()
            } catch (e) {
            }
        else {
            var f = b.style, g = a.documentElement.scrollTop || a.body.scrollTop, h = a.documentElement.scrollLeft || a.body.scrollLeft, f = {position: f.position, top: f.top, left: f.left, WebkitUserSelect: f.WebkitUserSelect};
            c.setStyles({position: "absolute", top: "-99999px", left: "-99999px", WebkitUserSelect: "none"}).on(b);
            b.focus();
            c.setStyles(f).on(b);
            d.scrollTo && d.scrollTo(h, g)
        }
    };
    b.views.Composer.prototype.style = function() {
        var j = this, q = a.querySelector(":focus"), n = this.textarea.element,
                p = n.hasAttribute("placeholder"), r = p && n.getAttribute("placeholder");
        this.focusStylesHost = this.focusStylesHost || e.cloneNode(!1);
        this.blurStylesHost = this.blurStylesHost || e.cloneNode(!1);
        p && n.removeAttribute("placeholder");
        n === q && n.blur();
        c.copyStyles(h).from(n).to(this.iframe).andTo(this.blurStylesHost);
        c.copyStyles(f).from(n).to(this.element).andTo(this.blurStylesHost);
        c.insertCSS(g).into(this.element.ownerDocument);
        k(n);
        c.copyStyles(h).from(n).to(this.focusStylesHost);
        c.copyStyles(f).from(n).to(this.focusStylesHost);
        var m = b.lang.array(h).without(["display"]);
        q ? q.focus() : n.blur();
        p && n.setAttribute("placeholder", r);
        b.browser.hasCurrentStyleProperty() || c.observe(d, "resize", function() {
            var a = c.getStyle("display").from(n);
            n.style.display = "";
            c.copyStyles(i).from(n).to(j.iframe).andTo(j.focusStylesHost).andTo(j.blurStylesHost);
            n.style.display = a
        });
        this.parent.observe("focus:composer", function() {
            c.copyStyles(m).from(j.focusStylesHost).to(j.iframe);
            c.copyStyles(f).from(j.focusStylesHost).to(j.element)
        });
        this.parent.observe("blur:composer",
                function() {
                    c.copyStyles(m).from(j.blurStylesHost).to(j.iframe);
                    c.copyStyles(f).from(j.blurStylesHost).to(j.element)
                });
        return this
    }
})(wysihtml5);
(function(b) {
    var c = b.dom, a = b.browser, d = {66: "bold", 73: "italic", 85: "underline"};
    b.views.Composer.prototype.observe = function() {
        var e = this, f = this.getValue(), h = this.sandbox.getIframe(), i = this.element, g = a.supportsEventsInIframeCorrectly() ? i : this.sandbox.getWindow(), k = a.supportsEvent("drop") ? ["drop", "paste"] : ["dragdrop", "paste"];
        c.observe(h, "DOMNodeRemoved", function() {
            clearInterval(j);
            e.parent.fire("destroy:composer")
        });
        var j = setInterval(function() {
            c.contains(document.documentElement, h) || (clearInterval(j),
                    e.parent.fire("destroy:composer"))
        }, 250);
        c.observe(g, "focus", function() {
            e.parent.fire("focus").fire("focus:composer");
            setTimeout(function() {
                f = e.getValue()
            }, 0)
        });
        c.observe(g, "blur", function() {
            f !== e.getValue() && e.parent.fire("change").fire("change:composer");
            e.parent.fire("blur").fire("blur:composer")
        });
        b.browser.isIos() && c.observe(i, "blur", function() {
            var a = i.ownerDocument.createElement("input"), b = document.documentElement.scrollTop || document.body.scrollTop, c = document.documentElement.scrollLeft || document.body.scrollLeft;
            try {
                e.selection.insertNode(a)
            } catch (d) {
                i.appendChild(a)
            }
            a.focus();
            a.parentNode.removeChild(a);
            window.scrollTo(c, b)
        });
        c.observe(i, "dragenter", function() {
            e.parent.fire("unset_placeholder")
        });
        a.firesOnDropOnlyWhenOnDragOverIsCancelled() && c.observe(i, ["dragover", "dragenter"], function(a) {
            a.preventDefault()
        });
        c.observe(i, k, function(b) {
            var c = b.dataTransfer, d;
            c && a.supportsDataTransfer() && (d = c.getData("text/html") || c.getData("text/plain"));
            d ? (i.focus(), e.commands.exec("insertHTML", d), e.parent.fire("paste").fire("paste:composer"),
                    b.stopPropagation(), b.preventDefault()) : setTimeout(function() {
                e.parent.fire("paste").fire("paste:composer")
            }, 0)
        });
        c.observe(i, "keyup", function(a) {
            a = a.keyCode;
            (a === b.SPACE_KEY || a === b.ENTER_KEY) && e.parent.fire("newword:composer")
        });
        this.parent.observe("paste:composer", function() {
            setTimeout(function() {
                e.parent.fire("newword:composer")
            }, 0)
        });
        a.canSelectImagesInContentEditable() || c.observe(i, "mousedown", function(a) {
            var b = a.target;
            "IMG" === b.nodeName && (e.selection.selectNode(b), a.preventDefault())
        });
        c.observe(i,
                "keydown", function(a) {
            var b = d[a.keyCode];
            if ((a.ctrlKey || a.metaKey) && b)
                e.commands.exec(b), a.preventDefault()
        });
        c.observe(i, "keydown", function(a) {
            var c = e.selection.getSelectedNode(!0), d = a.keyCode;
            if (c && "IMG" === c.nodeName && (d === b.BACKSPACE_KEY || d === b.DELETE_KEY))
                d = c.parentNode, d.removeChild(c), "A" === d.nodeName && !d.firstChild && d.parentNode.removeChild(d), setTimeout(function() {
                    b.quirks.redraw(i)
                }, 0), a.preventDefault()
        });
        var q = {IMG: "Image: ", A: "Link: "};
        c.observe(i, "mouseover", function(a) {
            var a = a.target,
                    b = a.nodeName;
            "A" !== b && "IMG" !== b || (b = q[b] + (a.getAttribute("href") || a.getAttribute("src")), a.setAttribute("title", b))
        })
    }
})(wysihtml5);
(function(b) {
    b.views.Synchronizer = Base.extend({constructor: function(b, a, d) {
            this.editor = b;
            this.textarea = a;
            this.composer = d;
            this._observe()
        }, fromComposerToTextarea: function(c) {
            this.textarea.setValue(b.lang.string(this.composer.getValue()).trim(), c)
        }, fromTextareaToComposer: function(b) {
            var a = this.textarea.getValue();
            a ? this.composer.setValue(a, b) : (this.composer.clear(), this.editor.fire("set_placeholder"))
        }, sync: function(b) {
            "textarea" === this.editor.currentView.name ? this.fromTextareaToComposer(b) : this.fromComposerToTextarea(b)
        },
        _observe: function() {
            var c, a = this, d = this.textarea.element.form, e = function() {
                c = setInterval(function() {
                    a.fromComposerToTextarea()
                }, 400)
            }, f = function() {
                clearInterval(c);
                c = null
            };
            e();
            d && (b.dom.observe(d, "submit", function() {
                a.sync(!0)
            }), b.dom.observe(d, "reset", function() {
                setTimeout(function() {
                    a.fromTextareaToComposer()
                }, 0)
            }));
            this.editor.observe("change_view", function(b) {
                if (b === "composer" && !c) {
                    a.fromTextareaToComposer(true);
                    e()
                } else if (b === "textarea") {
                    a.fromComposerToTextarea(true);
                    f()
                }
            });
            this.editor.observe("destroy:composer",
                    f)
        }})
})(wysihtml5);
wysihtml5.views.Textarea = wysihtml5.views.View.extend({name: "textarea", constructor: function(b, c, a) {
        this.base(b, c, a);
        this._observe()
    }, clear: function() {
        this.element.value = ""
    }, getValue: function(b) {
        var c = this.isEmpty() ? "" : this.element.value;
        b && (c = this.parent.parse(c));
        return c
    }, setValue: function(b, c) {
        c && (b = this.parent.parse(b));
        this.element.value = b
    }, hasPlaceholderSet: function() {
        var b = wysihtml5.browser.supportsPlaceholderAttributeOn(this.element), c = this.element.getAttribute("placeholder") || null, a = this.element.value;
        return b && !a || a === c
    }, isEmpty: function() {
        return!wysihtml5.lang.string(this.element.value).trim() || this.hasPlaceholderSet()
    }, _observe: function() {
        var b = this.element, c = this.parent, a = {focusin: "focus", focusout: "blur"}, d = wysihtml5.browser.supportsEvent("focusin") ? ["focusin", "focusout", "change"] : ["focus", "blur", "change"];
        c.observe("beforeload", function() {
            wysihtml5.dom.observe(b, d, function(b) {
                b = a[b.type] || b.type;
                c.fire(b).fire(b + ":textarea")
            });
            wysihtml5.dom.observe(b, ["paste", "drop"], function() {
                setTimeout(function() {
                    c.fire("paste").fire("paste:textarea")
                },
                        0)
            })
        })
    }});
(function(b) {
    var c = b.dom;
    b.toolbar.Dialog = b.lang.Dispatcher.extend({constructor: function(a, b) {
            this.link = a;
            this.container = b
        }, _observe: function() {
            if (!this._observed) {
                var a = this, d = function(b) {
                    var c = a._serialize();
                    c == a.elementToChange ? a.fire("edit", c) : a.fire("save", c);
                    a.hide();
                    b.preventDefault();
                    b.stopPropagation()
                };
                c.observe(a.link, "click", function() {
                    c.hasClass(a.link, "wysihtml5-command-dialog-opened") && setTimeout(function() {
                        a.hide()
                    }, 0)
                });
                c.observe(this.container, "keydown", function(c) {
                    var e = c.keyCode;
                    e === b.ENTER_KEY && d(c);
                    e === b.ESCAPE_KEY && a.hide()
                });
                c.delegate(this.container, "[data-wysihtml5-dialog-action=save]", "click", d);
                c.delegate(this.container, "[data-wysihtml5-dialog-action=cancel]", "click", function(b) {
                    a.fire("cancel");
                    a.hide();
                    b.preventDefault();
                    b.stopPropagation()
                });
                for (var e = this.container.querySelectorAll("input, select, textarea"), f = 0, h = e.length, i = function() {
                    clearInterval(a.interval)
                }; f < h; f++)
                    c.observe(e[f], "change", i);
                this._observed = !0
            }
        }, _serialize: function() {
            for (var a = this.elementToChange ||
                    {}, b = this.container.querySelectorAll("[data-wysihtml5-dialog-field]"), c = b.length, f = 0; f < c; f++)
                a[b[f].getAttribute("data-wysihtml5-dialog-field")] = b[f].value;
            return a
        }, _interpolate: function(a) {
            for (var b, c, f = document.querySelector(":focus"), h = this.container.querySelectorAll("[data-wysihtml5-dialog-field]"), i = h.length, g = 0; g < i; g++)
                b = h[g], b !== f && !(a && "hidden" === b.type) && (c = b.getAttribute("data-wysihtml5-dialog-field"), c = this.elementToChange ? this.elementToChange[c] || "" : b.defaultValue, b.value = c)
        }, show: function(a) {
            var b =
                    this, e = this.container.querySelector("input, select, textarea");
            this.elementToChange = a;
            this._observe();
            this._interpolate();
            a && (this.interval = setInterval(function() {
                b._interpolate(!0)
            }, 500));
            c.addClass(this.link, "wysihtml5-command-dialog-opened");
            this.container.style.display = "";
            this.fire("show");
            if (e && !a)
                try {
                    e.focus()
                } catch (f) {
                }
        }, hide: function() {
            clearInterval(this.interval);
            this.elementToChange = null;
            c.removeClass(this.link, "wysihtml5-command-dialog-opened");
            this.container.style.display = "none";
            this.fire("hide")
        }})
})(wysihtml5);
(function(b) {
    var c = b.dom, a = {position: "relative"}, d = {left: 0, margin: 0, opacity: 0, overflow: "hidden", padding: 0, position: "absolute", top: 0, zIndex: 1}, e = {cursor: "inherit", fontSize: "50px", height: "50px", marginTop: "-25px", outline: 0, padding: 0, position: "absolute", right: "-4px", top: "50%"}, f = {"x-webkit-speech": "", speech: ""};
    b.toolbar.Speech = function(h, i) {
        var g = document.createElement("input");
        if (b.browser.supportsSpeechApiOn(g)) {
            var k = document.createElement("div");
            b.lang.object(d).merge({width: i.offsetWidth + "px", height: i.offsetHeight +
                        "px"});
            c.insert(g).into(k);
            c.insert(k).into(i);
            c.setStyles(e).on(g);
            c.setAttributes(f).on(g);
            c.setStyles(d).on(k);
            c.setStyles(a).on(i);
            c.observe(g, "onwebkitspeechchange"in g ? "webkitspeechchange" : "speechchange", function() {
                h.execCommand("insertText", g.value);
                g.value = ""
            });
            c.observe(g, "click", function(a) {
                c.hasClass(i, "wysihtml5-command-disabled") && a.preventDefault();
                a.stopPropagation()
            })
        } else
            i.style.display = "none"
    }
})(wysihtml5);
(function(b) {
    var c = b.dom;
    b.toolbar.Toolbar = Base.extend({constructor: function(a, c) {
            this.editor = a;
            this.container = "string" === typeof c ? document.getElementById(c) : c;
            this.composer = a.composer;
            this._getLinks("command");
            this._getLinks("action");
            this._observe();
            this.show();
            for (var e = this.container.querySelectorAll("[data-wysihtml5-command=insertSpeech]"), f = e.length, h = 0; h < f; h++)
                new b.toolbar.Speech(this, e[h])
        }, _getLinks: function(a) {
            for (var c = this[a + "Links"] = b.lang.array(this.container.querySelectorAll("a[data-wysihtml5-" +
                    a + "]")).get(), e = c.length, f = 0, h = this[a + "Mapping"] = {}, i, g, k, j; f < e; f++)
                i = c[f], g = i.getAttribute("data-wysihtml5-" + a), k = i.getAttribute("data-wysihtml5-" + a + "-value"), j = this._getDialog(i, g), h[g + ":" + k] = {link: i, name: g, value: k, dialog: j, state: !1}
        }, _getDialog: function(a, c) {
            var e = this, f = this.container.querySelector("[data-wysihtml5-dialog='" + c + "']"), h, i;
            f && (h = new b.toolbar.Dialog(a, f), h.observe("show", function() {
                i = e.composer.selection.getBookmark();
                e.editor.fire("show:dialog", {command: c, dialogContainer: f, commandLink: a})
            }),
                    h.observe("save", function(b) {
                i && e.composer.selection.setBookmark(i);
                e._execCommand(c, b);
                e.editor.fire("save:dialog", {command: c, dialogContainer: f, commandLink: a})
            }), h.observe("cancel", function() {
                e.editor.focus(!1);
                e.editor.fire("cancel:dialog", {command: c, dialogContainer: f, commandLink: a})
            }));
            return h
        }, execCommand: function(a, b) {
            if (!this.commandsDisabled) {
                var c = this.commandMapping[a + ":" + b];
                c && c.dialog && !c.state ? c.dialog.show() : this._execCommand(a, b)
            }
        }, _execCommand: function(a, b) {
            this.editor.focus(!1);
            this.composer.commands.exec(a,
                    b);
            this._updateLinkStates()
        }, execAction: function(a) {
            var b = this.editor;
            switch (a) {
                case "change_view":
                    b.currentView === b.textarea ? b.fire("change_view", "composer") : b.fire("change_view", "textarea")
                }
        }, _observe: function() {
            for (var a = this, b = this.editor, e = this.container, f = this.commandLinks.concat(this.actionLinks), h = f.length, i = 0; i < h; i++)
                c.setAttributes({href: "javascript:;", unselectable: "on"}).on(f[i]);
            c.delegate(e, "[data-wysihtml5-command]", "mousedown", function(a) {
                a.preventDefault()
            });
            c.delegate(e, "[data-wysihtml5-command]",
                    "click", function(b) {
                var c = this.getAttribute("data-wysihtml5-command"), d = this.getAttribute("data-wysihtml5-command-value");
                a.execCommand(c, d);
                b.preventDefault()
            });
            c.delegate(e, "[data-wysihtml5-action]", "click", function(b) {
                var c = this.getAttribute("data-wysihtml5-action");
                a.execAction(c);
                b.preventDefault()
            });
            b.observe("focus:composer", function() {
                a.bookmark = null;
                clearInterval(a.interval);
                a.interval = setInterval(function() {
                    a._updateLinkStates()
                }, 500)
            });
            b.observe("blur:composer", function() {
                clearInterval(a.interval)
            });
            b.observe("destroy:composer", function() {
                clearInterval(a.interval)
            });
            b.observe("change_view", function(b) {
                setTimeout(function() {
                    a.commandsDisabled = "composer" !== b;
                    a._updateLinkStates();
                    a.commandsDisabled ? c.addClass(e, "wysihtml5-commands-disabled") : c.removeClass(e, "wysihtml5-commands-disabled")
                }, 0)
            })
        }, _updateLinkStates: function() {
            var a = this.commandMapping, d, e, f;
            for (d in a)
                if (f = a[d], this.commandsDisabled ? (e = !1, c.removeClass(f.link, "wysihtml5-command-active"), f.dialog && f.dialog.hide()) : (e = this.composer.commands.state(f.name,
                        f.value), b.lang.object(e).isArray() && (e = 1 === e.length ? e[0] : !0), c.removeClass(f.link, "wysihtml5-command-disabled")), f.state !== e)
                    (f.state = e) ? (c.addClass(f.link, "wysihtml5-command-active"), f.dialog && ("object" === typeof e ? f.dialog.show(e) : f.dialog.hide())) : (c.removeClass(f.link, "wysihtml5-command-active"), f.dialog && f.dialog.hide())
        }, show: function() {
            this.container.style.display = ""
        }, hide: function() {
            this.container.style.display = "none"
        }})
})(wysihtml5);
(function(b) {
    var c = {name: void 0, style: !0, toolbar: void 0, autoLink: !0, parserRules: {tags: {br: {}, span: {}, div: {}, p: {}}, classes: {}}, parser: b.dom.parse, composerClassName: "wysihtml5-editor", bodyClassName: "wysihtml5-supported", stylesheets: [], placeholderText: void 0, allowObjectResizing: !0, supportTouchDevices: !0};
    b.Editor = b.lang.Dispatcher.extend({constructor: function(a, d) {
            this.textareaElement = "string" === typeof a ? document.getElementById(a) : a;
            this.config = b.lang.object({}).merge(c).merge(d).get();
            this.currentView =
                    this.textarea = new b.views.Textarea(this, this.textareaElement, this.config);
            this._isCompatible = b.browser.supported();
            if (!this._isCompatible || !this.config.supportTouchDevices && b.browser.isTouchDevice()) {
                var e = this;
                setTimeout(function() {
                    e.fire("beforeload").fire("load")
                }, 0)
            } else {
                b.dom.addClass(document.body, this.config.bodyClassName);
                this.currentView = this.composer = new b.views.Composer(this, this.textareaElement, this.config);
                "function" === typeof this.config.parser && this._initParser();
                this.observe("beforeload",
                        function() {
                            this.synchronizer = new b.views.Synchronizer(this, this.textarea, this.composer);
                            this.config.toolbar && (this.toolbar = new b.toolbar.Toolbar(this, this.config.toolbar))
                        });
                try {
                    console.log("Heya! This page is using wysihtml5 for rich text editing. Check out https://github.com/xing/wysihtml5")
                } catch (f) {
                }
            }
        }, isCompatible: function() {
            return this._isCompatible
        }, clear: function() {
            this.currentView.clear();
            return this
        }, getValue: function(a) {
            return this.currentView.getValue(a)
        }, setValue: function(a, b) {
            if (!a)
                return this.clear();
            this.currentView.setValue(a, b);
            return this
        }, focus: function(a) {
            this.currentView.focus(a);
            return this
        }, disable: function() {
            this.currentView.disable();
            return this
        }, enable: function() {
            this.currentView.enable();
            return this
        }, isEmpty: function() {
            return this.currentView.isEmpty()
        }, hasPlaceholderSet: function() {
            return this.currentView.hasPlaceholderSet()
        }, parse: function(a) {
            var c = this.config.parser(a, this.config.parserRules, this.composer.sandbox.getDocument(), !0);
            "object" === typeof a && b.quirks.redraw(a);
            return c
        },
        _initParser: function() {
            this.observe("paste:composer", function() {
                var a = this;
                a.composer.selection.executeAndRestore(function() {
                    b.quirks.cleanPastedHTML(a.composer.element);
                    a.parse(a.composer.element)
                }, !0)
            });
            this.observe("paste:textarea", function() {
                this.textarea.setValue(this.parse(this.textarea.getValue()))
            })
        }})
})(wysihtml5);

// Bootstrap wysihtml5
!function(a, b) {
    "use strict";
    var c = {"font-styles": "<li class='dropdown'><a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class='icon-font'></i>&nbsp;<span class='current-font'>Normal text</span>&nbsp;<b class='caret'></b></a><ul class='dropdown-menu'><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='div'>Normal text</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h1'>Heading 1</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h2'>Heading 2</a></li></ul></li>", emphasis: "<li><div class='btn-group'><a class='btn' data-wysihtml5-command='bold' title='CTRL+B'>Bold</a><a class='btn' data-wysihtml5-command='italic' title='CTRL+I'>Italic</a></div></li>", lists: "<li><div class='btn-group'><a class='btn' data-wysihtml5-command='insertUnorderedList' title='Unordered List'><i class='icon-list'></i></a><a class='btn' data-wysihtml5-command='insertOrderedList' title='Ordered List'><i class='icon-th-list'></i></a><a class='btn' data-wysihtml5-command='Outdent' title='Outdent'><i class='icon-indent-right'></i></a><a class='btn' data-wysihtml5-command='Indent' title='Indent'><i class='icon-indent-left'></i></a></div></li>", link: "<li><div class='bootstrap-wysihtml5-insert-link-modal modal hide fade'><div class='modal-header'><a class='close' data-dismiss='modal'>×</a><h3>Insert Link</h3></div><div class='modal-body'><input value='http://' class='bootstrap-wysihtml5-insert-link-url input-xlarge'></div><div class='modal-footer'><a href='#' class='btn' data-dismiss='modal'>Cancel</a><a href='#' class='btn btn-primary' data-dismiss='modal'>Insert link</a></div></div><a class='btn' data-wysihtml5-command='createLink' title='Link'><i class='icon-share'></i></a></li>", image: "<li><div class='bootstrap-wysihtml5-insert-image-modal modal hide fade'><div class='modal-header'><a class='close' data-dismiss='modal'>×</a><h3>Insert Image</h3></div><div class='modal-body'><input value='http://' class='bootstrap-wysihtml5-insert-image-url input-xlarge'></div><div class='modal-footer'><a href='#' class='btn' data-dismiss='modal'>Cancel</a><a href='#' class='btn btn-primary' data-dismiss='modal'>Insert image</a></div></div><a class='btn' data-wysihtml5-command='insertImage' title='Insert image'><i class='icon-picture'></i></a></li>", html: "<li><div class='btn-group'><a class='btn' data-wysihtml5-action='change_view' title='Edit HTML'><i class='icon-pencil'></i></a></div></li>"}, d = {"font-styles": !0, emphasis: !0, lists: !0, html: !1, link: !0, image: !0, events: {}, parserRules: {tags: {b: {}, i: {}, br: {}, ol: {}, ul: {}, li: {}, h1: {}, h2: {}, u: 1, img: {check_attributes: {width: "numbers", alt: "alt", src: "url", height: "numbers"}}, a: {set_attributes: {target: "_blank", rel: "nofollow"}, check_attributes: {href: "url"}}}}}, e = function(b, c) {
        this.el = b, this.toolbar = this.createToolbar(b, c || d), this.editor = this.createEditor(c), window.editor = this.editor, a("iframe.wysihtml5-sandbox").each(function(b, c) {
            a(c.contentWindow).off("focus.wysihtml5").on({"focus.wysihtml5": function() {
                    a("li.dropdown").removeClass("open")
                }})
        })
    };
    e.prototype = {constructor: e, createEditor: function(a) {
            var c = d.parserRules;
            a && a.parserRules && (c = a.parserRules);
            var e = new b.Editor(this.el.attr("id"), {toolbar: this.toolbar.attr("id"), parserRules: c});
            if (a && a.events)
                for (var f in a.events)
                    e.on(f, a.events[f]);
            return e
        }, createToolbar: function(b, e) {
            var f = this, g = a("<ul/>", {id: b.attr("id") + "-wysihtml5-toolbar", "class": "wysihtml5-toolbar", style: "display:none"});
            for (var h in d) {
                var i = !1;
                e[h] != undefined ? e[h] == 1 && (i = !0) : i = d[h], i == 1 && (g.append(c[h]), h == "html" && this.initHtml(g), h == "link" && this.initInsertLink(g), h == "image" && this.initInsertImage(g))
            }
            var f = this;
            return g.find("a[data-wysihtml5-command='formatBlock']").click(function(b) {
                var c = a(b.srcElement);
                f.toolbar.find(".current-font").text(c.html())
            }), this.el.before(g), g
        }, initHtml: function(a) {
            var b = "a[data-wysihtml5-action='change_view']";
            a.find(b).click(function(c) {
                a.find("a.btn").not(b).toggleClass("disabled")
            })
        }, initInsertImage: function(a) {
            var b = this, c = a.find(".bootstrap-wysihtml5-insert-image-modal"), d = c.find(".bootstrap-wysihtml5-insert-image-url"), e = c.find("a.btn-primary"), f = d.val(), g = function() {
                var a = d.val();
                d.val(f), b.editor.composer.commands.exec("insertImage", a)
            };
            d.keypress(function(a) {
                a.which == 13 && (g(), c.modal("hide"))
            }), e.click(g), c.on("shown", function() {
                d.focus()
            }), c.on("hide", function() {
                b.editor.currentView.element.focus()
            }), a.find("a[data-wysihtml5-command=insertImage]").click(function() {
                c.modal("show")
            })
        }, initInsertLink: function(a) {
            var b = this, c = a.find(".bootstrap-wysihtml5-insert-link-modal"), d = c.find(".bootstrap-wysihtml5-insert-link-url"), e = c.find("a.btn-primary"), f = d.val(), g = function() {
                var a = d.val();
                d.val(f), b.editor.composer.commands.exec("createLink", {href: a, target: "_blank", rel: "nofollow"})
            }, h = !1;
            d.keypress(function(a) {
                a.which == 13 && (g(), c.modal("hide"))
            }), e.click(g), c.on("shown", function() {
                d.focus()
            }), c.on("hide", function() {
                b.editor.currentView.element.focus()
            }), a.find("a[data-wysihtml5-command=createLink]").click(function() {
                c.modal("show")
            })
        }}, a.fn.wysihtml5 = function(b) {
        return this.each(function() {
            var c = a(this);
            c.data("wysihtml5", new e(c, b))
        })
    }, a.fn.wysihtml5.Constructor = e
}(window.jQuery, window.wysihtml5);

/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-05-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See http://www.datejs.com/license/.
 * @website: http://www.datejs.com/
 */
Date.CultureInfo = {name: "en-US", englishName: "English (United States)", nativeName: "English (United States)", dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], amDesignator: "AM", pmDesignator: "PM", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "mdy", formatPatterns: {shortDate: "M/d/yyyy", longDate: "dddd, MMMM dd, yyyy", shortTime: "h:mm tt", longTime: "h:mm:ss tt", fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "MMMM dd", yearMonth: "MMMM, yyyy"}, regexPatterns: {jan: /^jan(uary)?/i, feb: /^feb(ruary)?/i, mar: /^mar(ch)?/i, apr: /^apr(il)?/i, may: /^may/i, jun: /^jun(e)?/i, jul: /^jul(y)?/i, aug: /^aug(ust)?/i, sep: /^sep(t(ember)?)?/i, oct: /^oct(ober)?/i, nov: /^nov(ember)?/i, dec: /^dec(ember)?/i, sun: /^su(n(day)?)?/i, mon: /^mo(n(day)?)?/i, tue: /^tu(e(s(day)?)?)?/i, wed: /^we(d(nesday)?)?/i, thu: /^th(u(r(s(day)?)?)?)?/i, fri: /^fr(i(day)?)?/i, sat: /^sa(t(urday)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|aft(er)?|from|hence)/i, subtract: /^(\-|bef(ore)?|ago)/i, yesterday: /^yes(terday)?/i, today: /^t(od(ay)?)?/i, tomorrow: /^tom(orrow)?/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^mn|min(ute)?s?/i, hour: /^h(our)?s?/i, week: /^w(eek)?s?/i, month: /^m(onth)?s?/i, day: /^d(ay)?s?/i, year: /^y(ear)?s?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a(?!u|p)|p)/i}, timezones: [{name: "UTC", offset: "-000"}, {name: "GMT", offset: "-000"}, {name: "EST", offset: "-0500"}, {name: "EDT", offset: "-0400"}, {name: "CST", offset: "-0600"}, {name: "CDT", offset: "-0500"}, {name: "MST", offset: "-0700"}, {name: "MDT", offset: "-0600"}, {name: "PST", offset: "-0800"}, {name: "PDT", offset: "-0700"}]};
(function() {
    var e = Date, t = e.prototype, n = e.CultureInfo, r = function(e, t) {
        if (!t) {
            t = 2
        }
        return("000" + e).slice(t * -1)
    };
    t.clearTime = function() {
        this.setHours(0);
        this.setMinutes(0);
        this.setSeconds(0);
        this.setMilliseconds(0);
        return this
    };
    t.setTimeToNow = function() {
        var e = new Date;
        this.setHours(e.getHours());
        this.setMinutes(e.getMinutes());
        this.setSeconds(e.getSeconds());
        this.setMilliseconds(e.getMilliseconds());
        return this
    };
    e.today = function() {
        return(new Date).clearTime()
    };
    e.compare = function(e, t) {
        if (isNaN(e) || isNaN(t)) {
            throw new Error(e + " - " + t)
        } else if (e instanceof Date && t instanceof Date) {
            return e < t ? -1 : e > t ? 1 : 0
        } else {
            throw new TypeError(e + " - " + t)
        }
    };
    e.equals = function(e, t) {
        return e.compareTo(t) === 0
    };
    e.getDayNumberFromName = function(e) {
        var t = n.dayNames, r = n.abbreviatedDayNames, i = n.shortestDayNames, s = e.toLowerCase();
        for (var o = 0; o < t.length; o++) {
            if (t[o].toLowerCase() == s || r[o].toLowerCase() == s || i[o].toLowerCase() == s) {
                return o
            }
        }
        return-1
    };
    e.getMonthNumberFromName = function(e) {
        var t = n.monthNames, r = n.abbreviatedMonthNames, i = e.toLowerCase();
        for (var s = 0; s < t.length; s++) {
            if (t[s].toLowerCase() == i || r[s].toLowerCase() == i) {
                return s
            }
        }
        return-1
    };
    e.isLeapYear = function(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    };
    e.getDaysInMonth = function(t, n) {
        return[31, e.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n]
    };
    e.getTimezoneAbbreviation = function(e) {
        var t = n.timezones, r;
        for (var i = 0; i < t.length; i++) {
            if (t[i].offset === e) {
                return t[i].name
            }
        }
        return null
    };
    e.getTimezoneOffset = function(e) {
        var t = n.timezones, r;
        for (var i = 0; i < t.length; i++) {
            if (t[i].name === e.toUpperCase()) {
                return t[i].offset
            }
        }
        return null
    };
    t.clone = function() {
        return new Date(this.getTime())
    };
    t.compareTo = function(e) {
        return Date.compare(this, e)
    };
    t.equals = function(e) {
        return Date.equals(this, e || new Date)
    };
    t.between = function(e, t) {
        return this.getTime() >= e.getTime() && this.getTime() <= t.getTime()
    };
    t.isAfter = function(e) {
        return this.compareTo(e || new Date) === 1
    };
    t.isBefore = function(e) {
        return this.compareTo(e || new Date) === -1
    };
    t.isToday = function() {
        return this.isSameDay(new Date)
    };
    t.isSameDay = function(e) {
        return this.clone().clearTime().equals(e.clone().clearTime())
    };
    t.addMilliseconds = function(e) {
        this.setMilliseconds(this.getMilliseconds() + e);
        return this
    };
    t.addSeconds = function(e) {
        return this.addMilliseconds(e * 1e3)
    };
    t.addMinutes = function(e) {
        return this.addMilliseconds(e * 6e4)
    };
    t.addHours = function(e) {
        return this.addMilliseconds(e * 36e5)
    };
    t.addDays = function(e) {
        this.setDate(this.getDate() + e);
        return this
    };
    t.addWeeks = function(e) {
        return this.addDays(e * 7)
    };
    t.addMonths = function(t) {
        var n = this.getDate();
        this.setDate(1);
        this.setMonth(this.getMonth() + t);
        this.setDate(Math.min(n, e.getDaysInMonth(this.getFullYear(), this.getMonth())));
        return this
    };
    t.addYears = function(e) {
        return this.addMonths(e * 12)
    };
    t.add = function(e) {
        if (typeof e == "number") {
            this._orient = e;
            return this
        }
        var t = e;
        if (t.milliseconds) {
            this.addMilliseconds(t.milliseconds)
        }
        if (t.seconds) {
            this.addSeconds(t.seconds)
        }
        if (t.minutes) {
            this.addMinutes(t.minutes)
        }
        if (t.hours) {
            this.addHours(t.hours)
        }
        if (t.weeks) {
            this.addWeeks(t.weeks)
        }
        if (t.months) {
            this.addMonths(t.months)
        }
        if (t.years) {
            this.addYears(t.years)
        }
        if (t.days) {
            this.addDays(t.days)
        }
        return this
    };
    var i, s, o;
    t.getWeek = function() {
        var e, t, n, r, u, a, f, l, c, h;
        i = !i ? this.getFullYear() : i;
        s = !s ? this.getMonth() + 1 : s;
        o = !o ? this.getDate() : o;
        if (s <= 2) {
            e = i - 1;
            t = (e / 4 | 0) - (e / 100 | 0) + (e / 400 | 0);
            n = ((e - 1) / 4 | 0) - ((e - 1) / 100 | 0) + ((e - 1) / 400 | 0);
            c = t - n;
            u = 0;
            a = o - 1 + 31 * (s - 1)
        } else {
            e = i;
            t = (e / 4 | 0) - (e / 100 | 0) + (e / 400 | 0);
            n = ((e - 1) / 4 | 0) - ((e - 1) / 100 | 0) + ((e - 1) / 400 | 0);
            c = t - n;
            u = c + 1;
            a = o + (153 * (s - 3) + 2) / 5 + 58 + c
        }
        f = (e + t) % 7;
        r = (a + f - u) % 7;
        l = a + 3 - r | 0;
        if (l < 0) {
            h = 53 - ((f - c) / 5 | 0)
        } else if (l > 364 + c) {
            h = 1
        } else {
            h = (l / 7 | 0) + 1
        }
        i = s = o = null;
        return h
    };
    t.getISOWeek = function() {
        i = this.getUTCFullYear();
        s = this.getUTCMonth() + 1;
        o = this.getUTCDate();
        return r(this.getWeek())
    };
    t.setWeek = function(e) {
        return this.moveToDayOfWeek(1).addWeeks(e - this.getWeek())
    };
    e._validate = function(e, t, n, r) {
        if (typeof e == "undefined") {
            return false
        } else if (typeof e != "number") {
            throw new TypeError(e + " is not a Number.")
        } else if (e < t || e > n) {
            throw new RangeError(e + " is not a valid value for " + r + ".")
        }
        return true
    };
    e.validateMillisecond = function(t) {
        return e._validate(t, 0, 999, "millisecond")
    };
    e.validateSecond = function(t) {
        return e._validate(t, 0, 59, "second")
    };
    e.validateMinute = function(t) {
        return e._validate(t, 0, 59, "minute")
    };
    e.validateHour = function(t) {
        return e._validate(t, 0, 23, "hour")
    };
    e.validateDay = function(t, n, r) {
        return e._validate(t, 1, e.getDaysInMonth(n, r), "day")
    };
    e.validateMonth = function(t) {
        return e._validate(t, 0, 11, "month")
    };
    e.validateYear = function(t) {
        return e._validate(t, 0, 9999, "year")
    };
    t.set = function(t) {
        if (e.validateMillisecond(t.millisecond)) {
            this.addMilliseconds(t.millisecond - this.getMilliseconds())
        }
        if (e.validateSecond(t.second)) {
            this.addSeconds(t.second - this.getSeconds())
        }
        if (e.validateMinute(t.minute)) {
            this.addMinutes(t.minute - this.getMinutes())
        }
        if (e.validateHour(t.hour)) {
            this.addHours(t.hour - this.getHours())
        }
        if (e.validateMonth(t.month)) {
            this.addMonths(t.month - this.getMonth())
        }
        if (e.validateYear(t.year)) {
            this.addYears(t.year - this.getFullYear())
        }
        if (e.validateDay(t.day, this.getFullYear(), this.getMonth())) {
            this.addDays(t.day - this.getDate())
        }
        if (t.timezone) {
            this.setTimezone(t.timezone)
        }
        if (t.timezoneOffset) {
            this.setTimezoneOffset(t.timezoneOffset)
        }
        if (t.week && e._validate(t.week, 0, 53, "week")) {
            this.setWeek(t.week)
        }
        return this
    };
    t.moveToFirstDayOfMonth = function() {
        return this.set({day: 1})
    };
    t.moveToLastDayOfMonth = function() {
        return this.set({day: e.getDaysInMonth(this.getFullYear(), this.getMonth())})
    };
    t.moveToNthOccurrence = function(e, t) {
        var n = 0;
        if (t > 0) {
            n = t - 1
        } else if (t === -1) {
            this.moveToLastDayOfMonth();
            if (this.getDay() !== e) {
                this.moveToDayOfWeek(e, -1)
            }
            return this
        }
        return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(e, +1).addWeeks(n)
    };
    t.moveToDayOfWeek = function(e, t) {
        var n = (e - this.getDay() + 7 * (t || +1)) % 7;
        return this.addDays(n === 0 ? n += 7 * (t || +1) : n)
    };
    t.moveToMonth = function(e, t) {
        var n = (e - this.getMonth() + 12 * (t || +1)) % 12;
        return this.addMonths(n === 0 ? n += 12 * (t || +1) : n)
    };
    t.getOrdinalNumber = function() {
        return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 864e5) + 1
    };
    t.getTimezone = function() {
        return e.getTimezoneAbbreviation(this.getUTCOffset())
    };
    t.setTimezoneOffset = function(e) {
        var t = this.getTimezoneOffset(), n = Number(e) * -6 / 10;
        return this.addMinutes(n - t)
    };
    t.setTimezone = function(t) {
        return this.setTimezoneOffset(e.getTimezoneOffset(t))
    };
    t.hasDaylightSavingTime = function() {
        return Date.today().set({month: 0, day: 1}).getTimezoneOffset() !== Date.today().set({month: 6, day: 1}).getTimezoneOffset()
    };
    t.isDaylightSavingTime = function() {
        return this.hasDaylightSavingTime() && (new Date).getTimezoneOffset() === Date.today().set({month: 6, day: 1}).getTimezoneOffset()
    };
    t.getUTCOffset = function() {
        var e = this.getTimezoneOffset() * -10 / 6, t;
        if (e < 0) {
            t = (e - 1e4).toString();
            return t.charAt(0) + t.substr(2)
        } else {
            t = (e + 1e4).toString();
            return"+" + t.substr(1)
        }
    };
    t.getElapsed = function(e) {
        return(e || new Date) - this
    };
    if (!t.toISOString) {
        t.toISOString = function() {
            function e(e) {
                return e < 10 ? "0" + e : e
            }
            return'"' + this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + 'Z"'
        }
    }
    t._toString = t.toString;
    t.toString = function(e) {
        var t = this;
        if (e && e.length == 1) {
            var i = n.formatPatterns;
            t.t = t.toString;
            switch (e) {
                case"d":
                    return t.t(i.shortDate);
                case"D":
                    return t.t(i.longDate);
                case"F":
                    return t.t(i.fullDateTime);
                case"m":
                    return t.t(i.monthDay);
                case"r":
                    return t.t(i.rfc1123);
                case"s":
                    return t.t(i.sortableDateTime);
                case"t":
                    return t.t(i.shortTime);
                case"T":
                    return t.t(i.longTime);
                case"u":
                    return t.t(i.universalSortableDateTime);
                case"y":
                    return t.t(i.yearMonth)
                }
        }
        var s = function(e) {
            switch (e * 1) {
                case 1:
                case 21:
                case 31:
                    return"st";
                case 2:
                case 22:
                    return"nd";
                case 3:
                case 23:
                    return"rd";
                default:
                    return"th"
                }
        };
        return e ? e.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g, function(e) {
            if (e.charAt(0) === "\\") {
                return e.replace("\\", "")
            }
            t.h = t.getHours;
            switch (e) {
                case"hh":
                    return r(t.h() < 13 ? t.h() === 0 ? 12 : t.h() : t.h() - 12);
                case"h":
                    return t.h() < 13 ? t.h() === 0 ? 12 : t.h() : t.h() - 12;
                case"HH":
                    return r(t.h());
                case"H":
                    return t.h();
                case"mm":
                    return r(t.getMinutes());
                case"m":
                    return t.getMinutes();
                case"ss":
                    return r(t.getSeconds());
                case"s":
                    return t.getSeconds();
                case"yyyy":
                    return r(t.getFullYear(), 4);
                case"yy":
                    return r(t.getFullYear());
                case"dddd":
                    return n.dayNames[t.getDay()];
                case"ddd":
                    return n.abbreviatedDayNames[t.getDay()];
                case"dd":
                    return r(t.getDate());
                case"d":
                    return t.getDate();
                case"MMMM":
                    return n.monthNames[t.getMonth()];
                case"MMM":
                    return n.abbreviatedMonthNames[t.getMonth()];
                case"MM":
                    return r(t.getMonth() + 1);
                case"M":
                    return t.getMonth() + 1;
                case"t":
                    return t.h() < 12 ? n.amDesignator.substring(0, 1) : n.pmDesignator.substring(0, 1);
                case"tt":
                    return t.h() < 12 ? n.amDesignator : n.pmDesignator;
                case"S":
                    return s(t.getDate());
                default:
                    return e
                }
        }) : this._toString()
    }
})();
(function() {
    var e = Date, t = e.prototype, n = e.CultureInfo, r = Number.prototype;
    t._orient = +1;
    t._nth = null;
    t._is = false;
    t._same = false;
    t._isSecond = false;
    r._dateElement = "day";
    t.next = function() {
        this._orient = +1;
        return this
    };
    e.next = function() {
        return e.today().next()
    };
    t.last = t.prev = t.previous = function() {
        this._orient = -1;
        return this
    };
    e.last = e.prev = e.previous = function() {
        return e.today().last()
    };
    t.is = function() {
        this._is = true;
        return this
    };
    t.same = function() {
        this._same = true;
        this._isSecond = false;
        return this
    };
    t.today = function() {
        return this.same().day()
    };
    t.weekday = function() {
        if (this._is) {
            this._is = false;
            return!this.is().sat() && !this.is().sun()
        }
        return false
    };
    t.at = function(t) {
        return typeof t === "string" ? e.parse(this.toString("d") + " " + t) : this.set(t)
    };
    r.fromNow = r.after = function(e) {
        var t = {};
        t[this._dateElement] = this;
        return(!e ? new Date : e.clone()).add(t)
    };
    r.ago = r.before = function(e) {
        var t = {};
        t[this._dateElement] = this * -1;
        return(!e ? new Date : e.clone()).add(t)
    };
    var i = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/), s = "january february march april may june july august september october november december".split(/\s/), o = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/), u = "Milliseconds Seconds Minutes Hours Date Week Month FullYear".split(/\s/), a = "final first second third fourth fifth".split(/\s/), f;
    t.toObject = function() {
        var e = {};
        for (var t = 0; t < o.length; t++) {
            e[o[t].toLowerCase()] = this["get" + u[t]]()
        }
        return e
    };
    e.fromObject = function(e) {
        e.week = null;
        return Date.today().set(e)
    };
    var l = function(t) {
        return function() {
            if (this._is) {
                this._is = false;
                return this.getDay() == t
            }
            if (this._nth !== null) {
                if (this._isSecond) {
                    this.addSeconds(this._orient * -1)
                }
                this._isSecond = false;
                var n = this._nth;
                this._nth = null;
                var r = this.clone().moveToLastDayOfMonth();
                this.moveToNthOccurrence(t, n);
                if (this > r) {
                    throw new RangeError(e.getDayName(t) + " does not occur " + n + " times in the month of " + e.getMonthName(r.getMonth()) + " " + r.getFullYear() + ".")
                }
                return this
            }
            return this.moveToDayOfWeek(t, this._orient)
        }
    };
    var c = function(t) {
        return function() {
            var r = e.today(), i = t - r.getDay();
            if (t === 0 && n.firstDayOfWeek === 1 && r.getDay() !== 0) {
                i = i + 7
            }
            return r.addDays(i)
        }
    };
    for (var h = 0; h < i.length; h++) {
        e[i[h].toUpperCase()] = e[i[h].toUpperCase().substring(0, 3)] = h;
        e[i[h]] = e[i[h].substring(0, 3)] = c(h);
        t[i[h]] = t[i[h].substring(0, 3)] = l(h)
    }
    var p = function(e) {
        return function() {
            if (this._is) {
                this._is = false;
                return this.getMonth() === e
            }
            return this.moveToMonth(e, this._orient)
        }
    };
    var d = function(t) {
        return function() {
            return e.today().set({month: t, day: 1})
        }
    };
    for (var v = 0; v < s.length; v++) {
        e[s[v].toUpperCase()] = e[s[v].toUpperCase().substring(0, 3)] = v;
        e[s[v]] = e[s[v].substring(0, 3)] = d(v);
        t[s[v]] = t[s[v].substring(0, 3)] = p(v)
    }
    var m = function(e) {
        return function() {
            if (this._isSecond) {
                this._isSecond = false;
                return this
            }
            if (this._same) {
                this._same = this._is = false;
                var t = this.toObject(), n = (arguments[0] || new Date).toObject(), r = "", i = e.toLowerCase();
                for (var s = o.length - 1; s > -1; s--) {
                    r = o[s].toLowerCase();
                    if (t[r] != n[r]) {
                        return false
                    }
                    if (i == r) {
                        break
                    }
                }
                return true
            }
            if (e.substring(e.length - 1) != "s") {
                e += "s"
            }
            return this["add" + e](this._orient)
        }
    };
    var g = function(e) {
        return function() {
            this._dateElement = e;
            return this
        }
    };
    for (var y = 0; y < o.length; y++) {
        f = o[y].toLowerCase();
        t[f] = t[f + "s"] = m(o[y]);
        r[f] = r[f + "s"] = g(f)
    }
    t._ss = m("Second");
    var b = function(e) {
        return function(t) {
            if (this._same) {
                return this._ss(arguments[0])
            }
            if (t || t === 0) {
                return this.moveToNthOccurrence(t, e)
            }
            this._nth = e;
            if (e === 2 && (t === undefined || t === null)) {
                this._isSecond = true;
                return this.addSeconds(this._orient)
            }
            return this
        }
    };
    for (var w = 0; w < a.length; w++) {
        t[a[w]] = w === 0 ? b(-1) : b(w)
    }
})();
(function() {
    Date.Parsing = {Exception: function(e) {
            this.message = "Parse error at '" + e.substring(0, 10) + " ...'"
        }};
    var e = Date.Parsing;
    var t = e.Operators = {rtoken: function(t) {
            return function(n) {
                var i = n.match(t);
                if (i) {
                    return[i[0], n.substring(i[0].length)]
                } else {
                    throw new e.Exception(n)
                }
            }
        }, token: function(e) {
            return function(e) {
                return t.rtoken(new RegExp("^s*" + e + "s*"))(e)
            }
        }, stoken: function(e) {
            return t.rtoken(new RegExp("^" + e))
        }, until: function(e) {
            return function(t) {
                var n = [], r = null;
                while (t.length) {
                    try {
                        r = e.call(this, t)
                    } catch (i) {
                        n.push(r[0]);
                        t = r[1];
                        continue
                    }
                    break
                }
                return[n, t]
            }
        }, many: function(e) {
            return function(t) {
                var n = [], r = null;
                while (t.length) {
                    try {
                        r = e.call(this, t)
                    } catch (i) {
                        return[n, t]
                    }
                    n.push(r[0]);
                    t = r[1]
                }
                return[n, t]
            }
        }, optional: function(e) {
            return function(t) {
                var n = null;
                try {
                    n = e.call(this, t)
                } catch (r) {
                    return[null, t]
                }
                return[n[0], n[1]]
            }
        }, not: function(t) {
            return function(n) {
                try {
                    t.call(this, n)
                } catch (r) {
                    return[null, n]
                }
                throw new e.Exception(n)
            }
        }, ignore: function(e) {
            return e ? function(t) {
                var n = null;
                n = e.call(this, t);
                return[null, n[1]]
            } : null
        }, product: function() {
            var e = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = [];
            for (var i = 0; i < e.length; i++) {
                r.push(t.each(e[i], n))
            }
            return r
        }, cache: function(t) {
            var n = {}, r = null;
            return function(i) {
                try {
                    r = n[i] = n[i] || t.call(this, i)
                } catch (s) {
                    r = n[i] = s
                }
                if (r instanceof e.Exception) {
                    throw r
                } else {
                    return r
                }
            }
        }, any: function() {
            var t = arguments;
            return function(n) {
                var r = null;
                for (var i = 0; i < t.length; i++) {
                    if (t[i] == null) {
                        continue
                    }
                    try {
                        r = t[i].call(this, n)
                    } catch (s) {
                        r = null
                    }
                    if (r) {
                        return r
                    }
                }
                throw new e.Exception(n)
            }
        }, each: function() {
            var t = arguments;
            return function(n) {
                var r = [], i = null;
                for (var s = 0; s < t.length; s++) {
                    if (t[s] == null) {
                        continue
                    }
                    try {
                        i = t[s].call(this, n)
                    } catch (o) {
                        throw new e.Exception(n)
                    }
                    r.push(i[0]);
                    n = i[1]
                }
                return[r, n]
            }
        }, all: function() {
            var e = arguments, t = t;
            return t.each(t.optional(e))
        }, sequence: function(n, r, i) {
            r = r || t.rtoken(/^\s*/);
            i = i || null;
            if (n.length == 1) {
                return n[0]
            }
            return function(t) {
                var s = null, o = null;
                var u = [];
                for (var a = 0; a < n.length; a++) {
                    try {
                        s = n[a].call(this, t)
                    } catch (f) {
                        break
                    }
                    u.push(s[0]);
                    try {
                        o = r.call(this, s[1])
                    } catch (l) {
                        o = null;
                        break
                    }
                    t = o[1]
                }
                if (!s) {
                    throw new e.Exception(t)
                }
                if (o) {
                    throw new e.Exception(o[1])
                }
                if (i) {
                    try {
                        s = i.call(this, s[1])
                    } catch (h) {
                        throw new e.Exception(s[1])
                    }
                }
                return[u, s ? s[1] : t]
            }
        }, between: function(e, n, i) {
            i = i || e;
            var s = t.each(t.ignore(e), n, t.ignore(i));
            return function(e) {
                var t = s.call(this, e);
                return[[t[0][0], r[0][2]], t[1]]
            }
        }, list: function(e, n, r) {
            n = n || t.rtoken(/^\s*/);
            r = r || null;
            return e instanceof Array ? t.each(t.product(e.slice(0, -1), t.ignore(n)), e.slice(-1), t.ignore(r)) : t.each(t.many(t.each(e, t.ignore(n))), px, t.ignore(r))
        }, set: function(n, r, i) {
            r = r || t.rtoken(/^\s*/);
            i = i || null;
            return function(s) {
                var o = null, u = null, a = null, f = null, l = [[], s], h = false;
                for (var p = 0; p < n.length; p++) {
                    a = null;
                    u = null;
                    o = null;
                    h = n.length == 1;
                    try {
                        o = n[p].call(this, s)
                    } catch (v) {
                        continue
                    }
                    f = [[o[0]], o[1]];
                    if (o[1].length > 0 && !h) {
                        try {
                            a = r.call(this, o[1])
                        } catch (m) {
                            h = true
                        }
                    } else {
                        h = true
                    }
                    if (!h && a[1].length === 0) {
                        h = true
                    }
                    if (!h) {
                        var g = [];
                        for (var y = 0; y < n.length; y++) {
                            if (p != y) {
                                g.push(n[y])
                            }
                        }
                        u = t.set(g, r).call(this, a[1]);
                        if (u[0].length > 0) {
                            f[0] = f[0].concat(u[0]);
                            f[1] = u[1]
                        }
                    }
                    if (f[1].length < l[1].length) {
                        l = f
                    }
                    if (l[1].length === 0) {
                        break
                    }
                }
                if (l[0].length === 0) {
                    return l
                }
                if (i) {
                    try {
                        a = i.call(this, l[1])
                    } catch (b) {
                        throw new e.Exception(l[1])
                    }
                    l[1] = a[1]
                }
                return l
            }
        }, forward: function(e, t) {
            return function(n) {
                return e[t].call(this, n)
            }
        }, replace: function(e, t) {
            return function(n) {
                var r = e.call(this, n);
                return[t, r[1]]
            }
        }, process: function(e, t) {
            return function(n) {
                var r = e.call(this, n);
                return[t.call(this, r[0]), r[1]]
            }
        }, min: function(t, n) {
            return function(r) {
                var i = n.call(this, r);
                if (i[0].length < t) {
                    throw new e.Exception(r)
                }
                return i
            }
        }};
    var n = function(e) {
        return function() {
            var t = null, n = [];
            if (arguments.length > 1) {
                t = Array.prototype.slice.call(arguments)
            } else if (arguments[0]instanceof Array) {
                t = arguments[0]
            }
            if (t) {
                for (var r = 0, i = t.shift(); r < i.length; r++) {
                    t.unshift(i[r]);
                    n.push(e.apply(null, t));
                    t.shift();
                    return n
                }
            } else {
                return e.apply(null, arguments)
            }
        }
    };
    var i = "optional not ignore cache".split(/\s/);
    for (var s = 0; s < i.length; s++) {
        t[i[s]] = n(t[i[s]])
    }
    var o = function(e) {
        return function() {
            if (arguments[0]instanceof Array) {
                return e.apply(null, arguments[0])
            } else {
                return e.apply(null, arguments)
            }
        }
    };
    var u = "each any all".split(/\s/);
    for (var a = 0; a < u.length; a++) {
        t[u[a]] = o(t[u[a]])
    }
})();
(function() {
    var e = Date, t = e.prototype, n = e.CultureInfo;
    var r = function(e) {
        var t = [];
        for (var n = 0; n < e.length; n++) {
            if (e[n]instanceof Array) {
                t = t.concat(r(e[n]))
            } else {
                if (e[n]) {
                    t.push(e[n])
                }
            }
        }
        return t
    };
    e.Grammar = {};
    e.Translator = {hour: function(e) {
            return function() {
                this.hour = Number(e)
            }
        }, minute: function(e) {
            return function() {
                this.minute = Number(e)
            }
        }, second: function(e) {
            return function() {
                this.second = Number(e)
            }
        }, meridian: function(e) {
            return function() {
                this.meridian = e.slice(0, 1).toLowerCase()
            }
        }, timezone: function(e) {
            return function() {
                var t = e.replace(/[^\d\+\-]/g, "");
                if (t.length) {
                    this.timezoneOffset = Number(t)
                } else {
                    this.timezone = e.toLowerCase()
                }
            }
        }, day: function(e) {
            var t = e[0];
            return function() {
                this.day = Number(t.match(/\d+/)[0])
            }
        }, month: function(e) {
            return function() {
                this.month = e.length == 3 ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(e) / 4 : Number(e) - 1
            }
        }, year: function(e) {
            return function() {
                var t = Number(e);
                this.year = e.length > 2 ? t : t + (t + 2e3 < n.twoDigitYearMax ? 2e3 : 1900)
            }
        }, rday: function(e) {
            return function() {
                switch (e) {
                    case"yesterday":
                        this.days = -1;
                        break;
                    case"tomorrow":
                        this.days = 1;
                        break;
                    case"today":
                        this.days = 0;
                        break;
                    case"now":
                        this.days = 0;
                        this.now = true;
                        break
                    }
            }
        }, finishExact: function(t) {
            t = t instanceof Array ? t : [t];
            for (var n = 0; n < t.length; n++) {
                if (t[n]) {
                    t[n].call(this)
                }
            }
            var r = new Date;
            if ((this.hour || this.minute) && !this.month && !this.year && !this.day) {
                this.day = r.getDate()
            }
            if (!this.year) {
                this.year = r.getFullYear()
            }
            if (!this.month && this.month !== 0) {
                this.month = r.getMonth()
            }
            if (!this.day) {
                this.day = 1
            }
            if (!this.hour) {
                this.hour = 0
            }
            if (!this.minute) {
                this.minute = 0
            }
            if (!this.second) {
                this.second = 0
            }
            if (this.meridian && this.hour) {
                if (this.meridian == "p" && this.hour < 12) {
                    this.hour = this.hour + 12
                } else if (this.meridian == "a" && this.hour == 12) {
                    this.hour = 0
                }
            }
            if (this.day > e.getDaysInMonth(this.year, this.month)) {
                throw new RangeError(this.day + " is not a valid value for days.")
            }
            var i = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
            if (this.timezone) {
                i.set({timezone: this.timezone})
            } else if (this.timezoneOffset) {
                i.set({timezoneOffset: this.timezoneOffset})
            }
            return i
        }, finish: function(t) {
            t = t instanceof Array ? r(t) : [t];
            if (t.length === 0) {
                return null
            }
            for (var n = 0; n < t.length; n++) {
                if (typeof t[n] == "function") {
                    t[n].call(this)
                }
            }
            var i = e.today();
            if (this.now && !this.unit && !this.operator) {
                return new Date
            } else if (this.now) {
                i = new Date
            }
            var s = !!(this.days && this.days !== null || this.orient || this.operator);
            var o, u, a;
            a = this.orient == "past" || this.operator == "subtract" ? -1 : 1;
            if (!this.now && "hour minute second".indexOf(this.unit) != -1) {
                i.setTimeToNow()
            }
            if (this.month || this.month === 0) {
                if ("year day hour minute second".indexOf(this.unit) != -1) {
                    this.value = this.month + 1;
                    this.month = null;
                    s = true
                }
            }
            if (!s && this.weekday && !this.day && !this.days) {
                var f = Date[this.weekday]();
                this.day = f.getDate();
                if (!this.month) {
                    this.month = f.getMonth()
                }
                this.year = f.getFullYear()
            }
            if (s && this.weekday && this.unit != "month") {
                this.unit = "day";
                o = e.getDayNumberFromName(this.weekday) - i.getDay();
                u = 7;
                this.days = o ? (o + a * u) % u : a * u
            }
            if (this.month && this.unit == "day" && this.operator) {
                this.value = this.month + 1;
                this.month = null
            }
            if (this.value != null && this.month != null && this.year != null) {
                this.day = this.value * 1
            }
            if (this.month && !this.day && this.value) {
                i.set({day: this.value * 1});
                if (!s) {
                    this.day = this.value * 1
                }
            }
            if (!this.month && this.value && this.unit == "month" && !this.now) {
                this.month = this.value;
                s = true
            }
            if (s && (this.month || this.month === 0) && this.unit != "year") {
                this.unit = "month";
                o = this.month - i.getMonth();
                u = 12;
                this.months = o ? (o + a * u) % u : a * u;
                this.month = null
            }
            if (!this.unit) {
                this.unit = "day"
            }
            if (!this.value && this.operator && this.operator !== null && this[this.unit + "s"] && this[this.unit + "s"] !== null) {
                this[this.unit + "s"] = this[this.unit + "s"] + (this.operator == "add" ? 1 : -1) + (this.value || 0) * a
            } else if (this[this.unit + "s"] == null || this.operator != null) {
                if (!this.value) {
                    this.value = 1
                }
                this[this.unit + "s"] = this.value * a
            }
            if (this.meridian && this.hour) {
                if (this.meridian == "p" && this.hour < 12) {
                    this.hour = this.hour + 12
                } else if (this.meridian == "a" && this.hour == 12) {
                    this.hour = 0
                }
            }
            if (this.weekday && !this.day && !this.days) {
                var f = Date[this.weekday]();
                this.day = f.getDate();
                if (f.getMonth() !== i.getMonth()) {
                    this.month = f.getMonth()
                }
            }
            if ((this.month || this.month === 0) && !this.day) {
                this.day = 1
            }
            if (!this.orient && !this.operator && this.unit == "week" && this.value && !this.day && !this.month) {
                return Date.today().setWeek(this.value)
            }
            if (s && this.timezone && this.day && this.days) {
                this.day = this.days
            }
            return s ? i.add(this) : i.set(this)
        }};
    var i = e.Parsing.Operators, s = e.Grammar, o = e.Translator, u;
    s.datePartDelimiter = i.rtoken(/^([\s\-\.\,\/\x27]+)/);
    s.timePartDelimiter = i.stoken(":");
    s.whiteSpace = i.rtoken(/^\s*/);
    s.generalDelimiter = i.rtoken(/^(([\s\,]|at|@|on)+)/);
    var a = {};
    s.ctoken = function(e) {
        var t = a[e];
        if (!t) {
            var r = n.regexPatterns;
            var s = e.split(/\s+/), o = [];
            for (var u = 0; u < s.length; u++) {
                o.push(i.replace(i.rtoken(r[s[u]]), s[u]))
            }
            t = a[e] = i.any.apply(null, o)
        }
        return t
    };
    s.ctoken2 = function(e) {
        return i.rtoken(n.regexPatterns[e])
    };
    s.h = i.cache(i.process(i.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), o.hour));
    s.hh = i.cache(i.process(i.rtoken(/^(0[0-9]|1[0-2])/), o.hour));
    s.H = i.cache(i.process(i.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), o.hour));
    s.HH = i.cache(i.process(i.rtoken(/^([0-1][0-9]|2[0-3])/), o.hour));
    s.m = i.cache(i.process(i.rtoken(/^([0-5][0-9]|[0-9])/), o.minute));
    s.mm = i.cache(i.process(i.rtoken(/^[0-5][0-9]/), o.minute));
    s.s = i.cache(i.process(i.rtoken(/^([0-5][0-9]|[0-9])/), o.second));
    s.ss = i.cache(i.process(i.rtoken(/^[0-5][0-9]/), o.second));
    s.hms = i.cache(i.sequence([s.H, s.m, s.s], s.timePartDelimiter));
    s.t = i.cache(i.process(s.ctoken2("shortMeridian"), o.meridian));
    s.tt = i.cache(i.process(s.ctoken2("longMeridian"), o.meridian));
    s.z = i.cache(i.process(i.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), o.timezone));
    s.zz = i.cache(i.process(i.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), o.timezone));
    s.zzz = i.cache(i.process(s.ctoken2("timezone"), o.timezone));
    s.timeSuffix = i.each(i.ignore(s.whiteSpace), i.set([s.tt, s.zzz]));
    s.time = i.each(i.optional(i.ignore(i.stoken("T"))), s.hms, s.timeSuffix);
    s.d = i.cache(i.process(i.each(i.rtoken(/^([0-2]\d|3[0-1]|\d)/), i.optional(s.ctoken2("ordinalSuffix"))), o.day));
    s.dd = i.cache(i.process(i.each(i.rtoken(/^([0-2]\d|3[0-1])/), i.optional(s.ctoken2("ordinalSuffix"))), o.day));
    s.ddd = s.dddd = i.cache(i.process(s.ctoken("sun mon tue wed thu fri sat"), function(e) {
        return function() {
            this.weekday = e
        }
    }));
    s.M = i.cache(i.process(i.rtoken(/^(1[0-2]|0\d|\d)/), o.month));
    s.MM = i.cache(i.process(i.rtoken(/^(1[0-2]|0\d)/), o.month));
    s.MMM = s.MMMM = i.cache(i.process(s.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), o.month));
    s.y = i.cache(i.process(i.rtoken(/^(\d\d?)/), o.year));
    s.yy = i.cache(i.process(i.rtoken(/^(\d\d)/), o.year));
    s.yyy = i.cache(i.process(i.rtoken(/^(\d\d?\d?\d?)/), o.year));
    s.yyyy = i.cache(i.process(i.rtoken(/^(\d\d\d\d)/), o.year));
    u = function() {
        return i.each(i.any.apply(null, arguments), i.not(s.ctoken2("timeContext")))
    };
    s.day = u(s.d, s.dd);
    s.month = u(s.M, s.MMM);
    s.year = u(s.yyyy, s.yy);
    s.orientation = i.process(s.ctoken("past future"), function(e) {
        return function() {
            this.orient = e
        }
    });
    s.operator = i.process(s.ctoken("add subtract"), function(e) {
        return function() {
            this.operator = e
        }
    });
    s.rday = i.process(s.ctoken("yesterday tomorrow today now"), o.rday);
    s.unit = i.process(s.ctoken("second minute hour day week month year"), function(e) {
        return function() {
            this.unit = e
        }
    });
    s.value = i.process(i.rtoken(/^\d\d?(st|nd|rd|th)?/), function(e) {
        return function() {
            this.value = e.replace(/\D/g, "")
        }
    });
    s.expression = i.set([s.rday, s.operator, s.value, s.unit, s.orientation, s.ddd, s.MMM]);
    u = function() {
        return i.set(arguments, s.datePartDelimiter)
    };
    s.mdy = u(s.ddd, s.month, s.day, s.year);
    s.ymd = u(s.ddd, s.year, s.month, s.day);
    s.dmy = u(s.ddd, s.day, s.month, s.year);
    s.date = function(e) {
        return(s[n.dateElementOrder] || s.mdy).call(this, e)
    };
    s.format = i.process(i.many(i.any(i.process(i.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(t) {
        if (s[t]) {
            return s[t]
        } else {
            throw e.Parsing.Exception(t)
        }
    }), i.process(i.rtoken(/^[^dMyhHmstz]+/), function(e) {
        return i.ignore(i.stoken(e))
    }))), function(e) {
        return i.process(i.each.apply(null, e), o.finishExact)
    });
    var f = {};
    var l = function(e) {
        return f[e] = f[e] || s.format(e)[0]
    };
    s.formats = function(e) {
        if (e instanceof Array) {
            var t = [];
            for (var n = 0; n < e.length; n++) {
                t.push(l(e[n]))
            }
            return i.any.apply(null, t)
        } else {
            return l(e)
        }
    };
    s._formats = s.formats(['"yyyy-MM-ddTHH:mm:ssZ"', "yyyy-MM-ddTHH:mm:ssZ", "yyyy-MM-ddTHH:mm:ssz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mmZ", "yyyy-MM-ddTHH:mmz", "yyyy-MM-ddTHH:mm", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "MMddyyyy", "ddMMyyyy", "Mddyyyy", "ddMyyyy", "Mdyyyy", "dMyyyy", "yyyy", "Mdyy", "dMyy", "d"]);
    s._start = i.process(i.set([s.date, s.time, s.expression], s.generalDelimiter, s.whiteSpace), o.finish);
    s.start = function(e) {
        try {
            var t = s._formats.call({}, e);
            if (t[1].length === 0) {
                return t
            }
        } catch (n) {
        }
        return s._start.call({}, e)
    };
    e._parse = e.parse;
    e.parse = function(t) {
        var n = null;
        if (!t) {
            return null
        }
        if (t instanceof Date) {
            return t
        }
        try {
            n = e.Grammar.start.call({}, t.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"))
        } catch (r) {
            return null
        }
        return n[1].length === 0 ? n[0] : null
    };
    e.getParseFunction = function(t) {
        var n = e.Grammar.formats(t);
        return function(e) {
            var t = null;
            try {
                t = n.call({}, e)
            } catch (r) {
                return null
            }
            return t[1].length === 0 ? t[0] : null
        }
    };
    e.parseExact = function(t, n) {
        return e.getParseFunction(n)(t)
    }
})();

/**
 * @version: 1.1
 * @author: Dan Grossman http://www.dangrossman.info/
 * @date: 2013-03-04
 * @copyright: Copyright (c) 2012 Dan Grossman. All rights reserved.
 * @license: Licensed under Apache License v2.0. See http://www.apache.org/licenses/LICENSE-2.0
 * @website: http://www.improvely.com/
 */
!function(e) {
    var t = function(t, n, r) {
        var i = typeof n == "object";
        var s;
        this.startDate = Date.today();
        this.endDate = Date.today();
        this.minDate = false;
        this.maxDate = false;
        this.changed = false;
        this.cleared = false;
        this.showDropdowns = false;
        this.ranges = {};
        this.dateLimit = false;
        this.opens = "right";
        this.cb = function() {
        };
        this.format = "MM/dd/yyyy";
        this.separator = " - ";
        this.showWeekNumbers = false;
        this.buttonClasses = ["btn-success"];
        this.applyClass = "btn btn-small btn-success";
        this.clearClass = "btn btn-small";
        this.locale = {applyLabel: "Apply", clearLabel: "Clear", fromLabel: "From", toLabel: "To", weekLabel: "W", customRangeLabel: "Custom Range", daysOfWeek: Date.CultureInfo.shortestDayNames, monthNames: Date.CultureInfo.monthNames, firstDay: 0};
        s = this.locale;
        this.leftCalendar = {month: Date.today().set({day: 1, month: this.startDate.getMonth(), year: this.startDate.getFullYear()}), calendar: Array()};
        this.rightCalendar = {month: Date.today().set({day: 1, month: this.endDate.getMonth(), year: this.endDate.getFullYear()}), calendar: Array()};
        this.element = e(t);
        if (this.element.hasClass("pull-right"))
            this.opens = "left";
        if (this.element.is("input")) {
            this.element.on({click: e.proxy(this.show, this), focus: e.proxy(this.show, this)})
        } else {
            this.element.on("click", e.proxy(this.show, this))
        }
        if (i) {
            if (typeof n.locale == "object") {
                e.each(s, function(e, t) {
                    s[e] = n.locale[e] || t
                })
            }
            if (n.applyClass) {
                this.applyClass = n.applyClass
            }
            if (n.clearClass) {
                this.clearClass = n.clearClass
            }
        }
        var o = '<div class="daterangepicker dropdown-menu">' + '<div class="calendar left"></div>' + '<div class="calendar right"></div>' + '<div class="ranges">' + '<div class="range_inputs">' + '<div class="daterangepicker_start_input" style="float: left">' + '<label for="daterangepicker_start">' + this.locale.fromLabel + "</label>" + '<input class="input-mini" type="text" name="daterangepicker_start" value="" disabled="disabled" />' + "</div>" + '<div class="daterangepicker_end_input" style="float: left; padding-left: 11px">' + '<label for="daterangepicker_end">' + this.locale.toLabel + "</label>" + '<input class="input-mini" type="text" name="daterangepicker_end" value="" disabled="disabled" />' + "</div>" + '<button class="' + this.applyClass + ' applyBtn" disabled="disabled">' + this.locale.applyLabel + "</button> " + '<button class="' + this.clearClass + ' clearBtn">' + this.locale.clearLabel + "</button>" + "</div>" + "</div>" + "</div>";
        this.container = e(o).appendTo("body");
        if (i) {
            if (typeof n.format == "string")
                this.format = n.format;
            if (typeof n.separator == "string")
                this.separator = n.separator;
            if (typeof n.startDate == "string")
                this.startDate = Date.parseExact(n.startDate, this.format);
            if (typeof n.endDate == "string")
                this.endDate = Date.parseExact(n.endDate, this.format);
            if (typeof n.minDate == "string")
                this.minDate = Date.parseExact(n.minDate, this.format);
            if (typeof n.maxDate == "string")
                this.maxDate = Date.parseExact(n.maxDate, this.format);
            if (typeof n.startDate == "object")
                this.startDate = n.startDate;
            if (typeof n.endDate == "object")
                this.endDate = n.endDate;
            if (typeof n.minDate == "object")
                this.minDate = n.minDate;
            if (typeof n.maxDate == "object")
                this.maxDate = n.maxDate;
            if (typeof n.ranges == "object") {
                for (var u in n.ranges) {
                    var a = n.ranges[u][0];
                    var f = n.ranges[u][1];
                    if (typeof a == "string")
                        a = Date.parse(a);
                    if (typeof f == "string")
                        f = Date.parse(f);
                    if (this.minDate && a < this.minDate)
                        a = this.minDate;
                    if (this.maxDate && f > this.maxDate)
                        f = this.maxDate;
                    if (this.minDate && f < this.minDate || this.maxDate && a > this.maxDate) {
                        continue
                    }
                    this.ranges[u] = [a, f]
                }
                var l = "<ul>";
                for (var u in this.ranges) {
                    l += "<li>" + u + "</li>"
                }
                l += "<li>" + this.locale.customRangeLabel + "</li>";
                l += "</ul>";
                this.container.find(".ranges").prepend(l)
            }
            if (typeof n.dateLimit == "object")
                this.dateLimit = n.dateLimit;
            if (typeof n.locale == "object") {
                if (typeof n.locale.firstDay == "number") {
                    this.locale.firstDay = n.locale.firstDay;
                    var c = n.locale.firstDay;
                    while (c > 0) {
                        this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                        c--
                    }
                }
            }
            if (typeof n.opens == "string")
                this.opens = n.opens;
            if (typeof n.showWeekNumbers == "boolean") {
                this.showWeekNumbers = n.showWeekNumbers
            }
            if (typeof n.buttonClasses == "string") {
                this.buttonClasses = [n.buttonClasses]
            }
            if (typeof n.buttonClasses == "object") {
                this.buttonClasses = n.buttonClasses
            }
            if (typeof n.showDropdowns == "boolean") {
                this.showDropdowns = n.showDropdowns
            }
        }
        var h = this.container;
        e.each(this.buttonClasses, function(e, t) {
            h.find("button").addClass(t)
        });
        if (this.opens == "right") {
            var p = this.container.find(".calendar.left");
            var d = this.container.find(".calendar.right");
            p.removeClass("left").addClass("right");
            d.removeClass("right").addClass("left")
        }
        if (typeof n == "undefined" || typeof n.ranges == "undefined")
            this.container.find(".calendar").show();
        if (typeof r == "function")
            this.cb = r;
        this.container.addClass("opens" + this.opens);
        if (!i || typeof n.startDate == "undefined" && typeof n.endDate == "undefined") {
            if (e(this.element).is("input[type=text]")) {
                var v = e(this.element).val();
                var m = v.split(this.separator);
                if (m.length == 2) {
                    this.startDate = Date.parseExact(m[0], this.format);
                    this.endDate = Date.parseExact(m[1], this.format)
                }
            }
        }
        this.container.on("mousedown", e.proxy(this.mousedown, this));
        this.container.find(".calendar").on("click", ".prev", e.proxy(this.clickPrev, this));
        this.container.find(".calendar").on("click", ".next", e.proxy(this.clickNext, this));
        this.container.find(".ranges").on("click", "button.applyBtn", e.proxy(this.clickApply, this));
        this.container.find(".ranges").on("click", "button.clearBtn", e.proxy(this.clickClear, this));
        this.container.find(".calendar").on("click", "td.available", e.proxy(this.clickDate, this));
        this.container.find(".calendar").on("mouseenter", "td.available", e.proxy(this.enterDate, this));
        this.container.find(".calendar").on("mouseleave", "td.available", e.proxy(this.updateView, this));
        this.container.find(".ranges").on("click", "li", e.proxy(this.clickRange, this));
        this.container.find(".ranges").on("mouseenter", "li", e.proxy(this.enterRange, this));
        this.container.find(".ranges").on("mouseleave", "li", e.proxy(this.updateView, this));
        this.container.find(".calendar").on("change", "select.yearselect", e.proxy(this.updateYear, this));
        this.container.find(".calendar").on("change", "select.monthselect", e.proxy(this.updateMonth, this));
        this.element.on("keyup", e.proxy(this.updateFromControl, this));
        this.updateView();
        this.updateCalendars()
    };
    t.prototype = {constructor: t, mousedown: function(t) {
            t.stopPropagation();
            if (!this.showDropdowns || e(t.target).not("select").length)
                t.preventDefault()
        }, updateView: function() {
            this.leftCalendar.month.set({month: this.startDate.getMonth(), year: this.startDate.getFullYear()});
            this.rightCalendar.month.set({month: this.endDate.getMonth(), year: this.endDate.getFullYear()});
            this.container.find("input[name=daterangepicker_start]").val(this.startDate.toString(this.format));
            this.container.find("input[name=daterangepicker_end]").val(this.endDate.toString(this.format));
            if (this.startDate.equals(this.endDate) || this.startDate.isBefore(this.endDate)) {
                this.container.find("button.applyBtn").removeAttr("disabled")
            } else {
                this.container.find("button.applyBtn").attr("disabled", "disabled")
            }
        }, updateFromControl: function() {
            if (!this.element.is("input"))
                return;
            var e = this.element.val().split(this.separator);
            var t = Date.parseExact(e[0], this.format);
            var n = Date.parseExact(e[1], this.format);
            if (t == null || n == null)
                return;
            if (n.isBefore(t))
                return;
            this.startDate = t;
            this.endDate = n;
            this.updateView();
            this.cb(this.startDate, this.endDate);
            this.updateCalendars()
        }, notify: function() {
            if (!this.cleared) {
                this.updateView()
            }
            if (this.element.is("input")) {
                this.element.val(this.cleared ? "" : this.startDate.toString(this.format) + this.separator + this.endDate.toString(this.format))
            }
            var e = this.cleared ? null : this.startDate, t = this.cleared ? null : this.endDate;
            this.cleared = false;
            this.cb(e, t)
        }, move: function() {
            if (this.opens == "left") {
                this.container.css({top: this.element.offset().top + this.element.outerHeight(), right: e(window).width() - this.element.offset().left - this.element.outerWidth(), left: "auto"})
            } else {
                this.container.css({top: this.element.offset().top + this.element.outerHeight(), left: this.element.offset().left, right: "auto"})
            }
        }, show: function(t) {
            this.container.show();
            this.move();
            if (t) {
                t.stopPropagation();
                t.preventDefault()
            }
            this.changed = false;
            this.element.trigger("shown", {target: t.target, picker: this});
            e(document).on("mousedown", e.proxy(this.hide, this))
        }, hide: function(t) {
            this.container.hide();
            e(document).off("mousedown", this.hide);
            if (this.changed) {
                this.changed = false;
                this.notify()
            }
        }, enterRange: function(e) {
            var t = e.target.innerHTML;
            if (t == this.locale.customRangeLabel) {
                this.updateView()
            } else {
                var n = this.ranges[t];
                this.container.find("input[name=daterangepicker_start]").val(n[0].toString(this.format));
                this.container.find("input[name=daterangepicker_end]").val(n[1].toString(this.format))
            }
        }, clickRange: function(e) {
            var t = e.target.innerHTML;
            if (t == this.locale.customRangeLabel) {
                this.container.find(".calendar").show()
            } else {
                var n = this.ranges[t];
                this.startDate = n[0];
                this.endDate = n[1];
                this.leftCalendar.month.set({month: this.startDate.getMonth(), year: this.startDate.getFullYear()});
                this.rightCalendar.month.set({month: this.endDate.getMonth(), year: this.endDate.getFullYear()});
                this.updateCalendars();
                this.changed = true;
                this.container.find(".calendar").hide();
                this.hide()
            }
        }, clickPrev: function(t) {
            var n = e(t.target).parents(".calendar");
            if (n.hasClass("left")) {
                this.leftCalendar.month.add({months: -1})
            } else {
                this.rightCalendar.month.add({months: -1})
            }
            this.updateCalendars()
        }, clickNext: function(t) {
            var n = e(t.target).parents(".calendar");
            if (n.hasClass("left")) {
                this.leftCalendar.month.add({months: 1})
            } else {
                this.rightCalendar.month.add({months: 1})
            }
            this.updateCalendars()
        }, enterDate: function(t) {
            var n = e(t.target).attr("title");
            var r = n.substr(1, 1);
            var i = n.substr(3, 1);
            var s = e(t.target).parents(".calendar");
            if (s.hasClass("left")) {
                this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[r][i].toString(this.format))
            } else {
                this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[r][i].toString(this.format))
            }
        }, clickDate: function(t) {
            var n = e(t.target).attr("title");
            var r = n.substr(1, 1);
            var i = n.substr(3, 1);
            var s = e(t.target).parents(".calendar");
            if (s.hasClass("left")) {
                startDate = this.leftCalendar.calendar[r][i];
                endDate = this.endDate;
                if (typeof this.dateLimit == "object") {
                    var o = (new Date(startDate)).add(this.dateLimit);
                    if (endDate.isAfter(o)) {
                        endDate = o
                    }
                }
                this.element.trigger("clicked", {dir: "left", picker: this})
            } else {
                startDate = this.startDate;
                endDate = this.rightCalendar.calendar[r][i];
                if (typeof this.dateLimit == "object") {
                    var u = {days: 0 - this.dateLimit.days, months: 0 - this.dateLimit.months, years: 0 - this.dateLimit.years};
                    var a = (new Date(endDate)).add(u);
                    if (startDate.isBefore(a)) {
                        startDate = a
                    }
                }
                this.element.trigger("clicked", {dir: "right", picker: this})
            }
            s.find("td").removeClass("active");
            if (startDate.equals(endDate) || startDate.isBefore(endDate)) {
                e(t.target).addClass("active");
                if (!startDate.equals(this.startDate) || !endDate.equals(this.endDate))
                    this.changed = true;
                this.startDate = startDate;
                this.endDate = endDate
            } else if (startDate.isAfter(endDate)) {
                e(t.target).addClass("active");
                this.changed = true;
                this.startDate = startDate;
                this.endDate = startDate.clone().add(1).days()
            }
            this.leftCalendar.month.set({month: this.startDate.getMonth(), year: this.startDate.getFullYear()});
            this.rightCalendar.month.set({month: this.endDate.getMonth(), year: this.endDate.getFullYear()});
            this.updateCalendars()
        }, clickApply: function(e) {
            this.hide()
        }, clickClear: function(e) {
            this.changed = true;
            this.cleared = true;
            this.hide()
        }, updateYear: function(t) {
            var n = parseInt(e(t.target).val());
            var r = e(t.target).closest(".calendar").hasClass("left");
            if (r) {
                this.leftCalendar.month.set({month: this.startDate.getMonth(), year: n})
            } else {
                this.rightCalendar.month.set({month: this.endDate.getMonth(), year: n})
            }
            this.updateCalendars()
        }, updateMonth: function(t) {
            var n = parseInt(e(t.target).val());
            var r = e(t.target).closest(".calendar").hasClass("left");
            if (r) {
                this.leftCalendar.month.set({month: n, year: this.startDate.getFullYear()})
            } else {
                this.rightCalendar.month.set({month: n, year: this.endDate.getFullYear()})
            }
            this.updateCalendars()
        }, updateCalendars: function() {
            this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.getMonth(), this.leftCalendar.month.getFullYear());
            this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.getMonth(), this.rightCalendar.month.getFullYear());
            this.container.find(".calendar.left").html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate));
            this.container.find(".calendar.right").html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, this.startDate, this.maxDate));
            this.container.find(".ranges li").removeClass("active");
            var e = true;
            var t = 0;
            for (var n in this.ranges) {
                if (this.startDate.equals(this.ranges[n][0]) && this.endDate.equals(this.ranges[n][1])) {
                    e = false;
                    this.container.find(".ranges li:eq(" + t + ")").addClass("active")
                }
                t++
            }
            if (e)
                this.container.find(".ranges li:last").addClass("active");
            this.element.trigger("updated", this)
        }, buildCalendar: function(e, t) {
            var n = Date.today().set({day: 1, month: e, year: t});
            var r = n.clone().add(-1).day().getMonth();
            var i = n.clone().add(-1).day().getFullYear();
            var s = Date.getDaysInMonth(t, e);
            var o = Date.getDaysInMonth(i, r);
            var u = n.getDay();
            var a = Array();
            for (var f = 0; f < 6; f++) {
                a[f] = Array()
            }
            var l = o - u + this.locale.firstDay + 1;
            if (l > o)
                l -= 7;
            if (u == this.locale.firstDay)
                l = o - 6;
            var c = Date.today().set({day: l, month: r, year: i});
            for (var f = 0, h = 0, p = 0; f < 42; f++, h++, c = c.clone().add(1).day()) {
                if (f > 0 && h % 7 == 0) {
                    h = 0;
                    p++
                }
                a[p][h] = c
            }
            return a
        }, renderDropdowns: function(e, t, n) {
            var r = e.getMonth();
            var i = '<select class="monthselect">';
            var s = false;
            var o = false;
            for (var u = 0; u < 12; u++) {
                if ((!s || u >= t.getMonth()) && (!o || u <= n.getMonth())) {
                    i += "<option value='" + u + "'" + (u === r ? " selected='selected'" : "") + ">" + this.locale.monthNames[u] + "</option>"
                }
            }
            i += "</select>";
            var a = e.getFullYear();
            var f = n && n.getFullYear() || a + 5;
            var l = t && t.getFullYear() || a - 50;
            var c = '<select class="yearselect">';
            for (var h = l; h <= f; h++) {
                c += '<option value="' + h + '"' + (h === a ? ' selected="selected"' : "") + ">" + h + "</option>"
            }
            c += "</select>";
            return i + c
        }, renderCalendar: function(t, n, r, i) {
            var s = '<table class="table-condensed">';
            s += "<thead>";
            s += "<tr>";
            if (this.showWeekNumbers)
                s += "<th></th>";
            if (!r || r < t[1][1]) {
                s += '<th class="prev available"><i class="icon-arrow-left"></i></th>'
            } else {
                s += "<th></th>"
            }
            var o = this.locale.monthNames[t[1][1].getMonth()] + t[1][1].toString(" yyyy");
            if (this.showDropdowns) {
                o = this.renderDropdowns(t[1][1], r, i)
            }
            s += '<th colspan="5" style="width: auto">' + o + "</th>";
            if (!i || i > t[1][1]) {
                s += '<th class="next available"><i class="icon-arrow-right"></i></th>'
            } else {
                s += "<th></th>"
            }
            s += "</tr>";
            s += "<tr>";
            if (this.showWeekNumbers)
                s += '<th class="week">' + this.locale.weekLabel + "</th>";
            e.each(this.locale.daysOfWeek, function(e, t) {
                s += "<th>" + t + "</th>"
            });
            s += "</tr>";
            s += "</thead>";
            s += "<tbody>";
            for (var u = 0; u < 6; u++) {
                s += "<tr>";
                if (this.showWeekNumbers)
                    s += '<td class="week">' + t[u][0].getWeek() + "</td>";
                for (var a = 0; a < 7; a++) {
                    var f = "available ";
                    f += t[u][a].getMonth() == t[1][1].getMonth() ? "" : "off";
                    n.setHours(0, 0, 0, 0);
                    if (r && t[u][a] < r || i && t[u][a] > i) {
                        f = " off disabled "
                    } else if (t[u][a].equals(n)) {
                        f += " active ";
                        if (t[u][a].equals(this.startDate)) {
                            f += " start-date "
                        }
                        if (t[u][a].equals(this.endDate)) {
                            f += " end-date "
                        }
                    } else if (t[u][a] >= this.startDate && t[u][a] <= this.endDate) {
                        f += " in-range ";
                        if (t[u][a].equals(this.startDate)) {
                            f += " start-date "
                        }
                        if (t[u][a].equals(this.endDate)) {
                            f += " end-date "
                        }
                    }
                    var l = "r" + u + "c" + a;
                    s += '<td class="' + f.replace(/\s+/g, " ").replace(/^\s?(.*?)\s?$/, "$1") + '" title="' + l + '">' + t[u][a].getDate() + "</td>"
                }
                s += "</tr>"
            }
            s += "</tbody>";
            s += "</table>";
            return s
        }};
    e.fn.daterangepicker = function(n, r) {
        this.each(function() {
            var i = e(this);
            if (!i.data("daterangepicker"))
                i.data("daterangepicker", new t(i, n, r))
        });
        return this
    }
}(window.jQuery);

/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function(e) {
    var t = function(t, r) {
        this.element = e(t);
        this.format = n.parseFormat(r.format || this.element.data("date-format") || "mm/dd/yyyy");
        this.picker = e(n.template).appendTo("body").on({click: e.proxy(this.click, this)});
        this.isInput = this.element.is("input");
        this.component = this.element.is(".date") ? this.element.find(".add-on") : false;
        if (this.isInput) {
            this.element.on({focus: e.proxy(this.show, this), keyup: e.proxy(this.update, this)})
        } else {
            if (this.component) {
                this.component.on("click", e.proxy(this.show, this))
            } else {
                this.element.on("click", e.proxy(this.show, this))
            }
        }
        this.minViewMode = r.minViewMode || this.element.data("date-minviewmode") || 0;
        if (typeof this.minViewMode === "string") {
            switch (this.minViewMode) {
                case"months":
                    this.minViewMode = 1;
                    break;
                case"years":
                    this.minViewMode = 2;
                    break;
                default:
                    this.minViewMode = 0;
                    break
                }
        }
        this.viewMode = r.viewMode || this.element.data("date-viewmode") || 0;
        if (typeof this.viewMode === "string") {
            switch (this.viewMode) {
                case"months":
                    this.viewMode = 1;
                    break;
                case"years":
                    this.viewMode = 2;
                    break;
                default:
                    this.viewMode = 0;
                    break
                }
        }
        this.startViewMode = this.viewMode;
        this.weekStart = r.weekStart || this.element.data("date-weekstart") || 0;
        this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
        this.onRender = r.onRender;
        this.fillDow();
        this.fillMonths();
        this.update();
        this.showMode()
    };
    t.prototype = {constructor: t, show: function(t) {
            this.picker.show();
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
            this.place();
            e(window).on("resize", e.proxy(this.place, this));
            if (t) {
                t.stopPropagation();
                t.preventDefault()
            }
            if (!this.isInput) {
            }
            var n = this;
            e(document).on("mousedown", function(t) {
                if (e(t.target).closest(".datepicker").length == 0) {
                    n.hide()
                }
            });
            this.element.trigger({type: "show", date: this.date})
        }, hide: function() {
            this.picker.hide();
            e(window).off("resize", this.place);
            this.viewMode = this.startViewMode;
            this.showMode();
            if (!this.isInput) {
                e(document).off("mousedown", this.hide)
            }
            this.element.trigger({type: "hide", date: this.date})
        }, set: function() {
            var e = n.formatDate(this.date, this.format);
            if (!this.isInput) {
                if (this.component) {
                    this.element.find("input").prop("value", e)
                }
                this.element.data("date", e)
            } else {
                this.element.prop("value", e)
            }
        }, setValue: function(e) {
            if (typeof e === "string") {
                this.date = n.parseDate(e, this.format)
            } else {
                this.date = new Date(e)
            }
            this.set();
            this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
            this.fill()
        }, place: function() {
            var e = this.component ? this.component.offset() : this.element.offset();
            this.picker.css({top: e.top + this.height, left: e.left})
        }, update: function(e) {
            this.date = n.parseDate(typeof e === "string" ? e : this.isInput ? this.element.prop("value") : this.element.data("date"), this.format);
            this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
            this.fill()
        }, fillDow: function() {
            var e = this.weekStart;
            var t = "<tr>";
            while (e < this.weekStart + 7) {
                t += '<th class="dow">' + n.dates.daysMin[e++ % 7] + "</th>"
            }
            t += "</tr>";
            this.picker.find(".datepicker-days thead").append(t)
        }, fillMonths: function() {
            var e = "";
            var t = 0;
            while (t < 12) {
                e += '<span class="month">' + n.dates.monthsShort[t++] + "</span>"
            }
            this.picker.find(".datepicker-months td").append(e)
        }, fill: function() {
            var e = new Date(this.viewDate), t = e.getFullYear(), r = e.getMonth(), i = this.date.valueOf();
            this.picker.find(".datepicker-days th:eq(1)").text(n.dates.months[r] + " " + t);
            var s = new Date(t, r - 1, 28, 0, 0, 0, 0), o = n.getDaysInMonth(s.getFullYear(), s.getMonth());
            s.setDate(o);
            s.setDate(o - (s.getDay() - this.weekStart + 7) % 7);
            var u = new Date(s);
            u.setDate(u.getDate() + 42);
            u = u.valueOf();
            var a = [];
            var f, l, c;
            while (s.valueOf() < u) {
                if (s.getDay() === this.weekStart) {
                    a.push("<tr>")
                }
                f = this.onRender(s);
                l = s.getFullYear();
                c = s.getMonth();
                if (c < r && l === t || l < t) {
                    f += " old"
                } else if (c > r && l === t || l > t) {
                    f += " new"
                }
                if (s.valueOf() === i) {
                    f += " active"
                }
                a.push('<td class="day ' + f + '">' + s.getDate() + "</td>");
                if (s.getDay() === this.weekEnd) {
                    a.push("</tr>")
                }
                s.setDate(s.getDate() + 1)
            }
            this.picker.find(".datepicker-days tbody").empty().append(a.join(""));
            var h = this.date.getFullYear();
            var p = this.picker.find(".datepicker-months").find("th:eq(1)").text(t).end().find("span").removeClass("active");
            if (h === t) {
                p.eq(this.date.getMonth()).addClass("active")
            }
            a = "";
            t = parseInt(t / 10, 10) * 10;
            var d = this.picker.find(".datepicker-years").find("th:eq(1)").text(t + "-" + (t + 9)).end().find("td");
            t -= 1;
            for (var v = -1; v < 11; v++) {
                a += '<span class="year' + (v === -1 || v === 10 ? " old" : "") + (h === t ? " active" : "") + '">' + t + "</span>";
                t += 1
            }
            d.html(a)
        }, click: function(t) {
            t.stopPropagation();
            t.preventDefault();
            var r = e(t.target).closest("span, td, th");
            if (r.length === 1) {
                switch (r[0].nodeName.toLowerCase()) {
                    case"th":
                        switch (r[0].className) {
                            case"switch":
                                this.showMode(1);
                                break;
                            case"prev":
                            case"next":
                                this.viewDate["set" + n.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + n.modes[this.viewMode].navFnc].call(this.viewDate) + n.modes[this.viewMode].navStep * (r[0].className === "prev" ? -1 : 1));
                                this.fill();
                                this.set();
                                break
                        }
                        break;
                    case"span":
                        if (r.is(".month")) {
                            var i = r.parent().find("span").index(r);
                            this.viewDate.setMonth(i)
                        } else {
                            var s = parseInt(r.text(), 10) || 0;
                            this.viewDate.setFullYear(s)
                        }
                        if (this.viewMode !== 0) {
                            this.date = new Date(this.viewDate);
                            this.element.trigger({type: "changeDate", date: this.date, viewMode: n.modes[this.viewMode].clsName})
                        }
                        this.showMode(-1);
                        this.fill();
                        this.set();
                        break;
                    case"td":
                        if (r.is(".day") && !r.is(".disabled")) {
                            var o = parseInt(r.text(), 10) || 1;
                            var i = this.viewDate.getMonth();
                            if (r.is(".old")) {
                                i -= 1
                            } else if (r.is(".new")) {
                                i += 1
                            }
                            var s = this.viewDate.getFullYear();
                            this.date = new Date(s, i, o, 0, 0, 0, 0);
                            this.viewDate = new Date(s, i, Math.min(28, o), 0, 0, 0, 0);
                            this.fill();
                            this.set();
                            this.element.trigger({type: "changeDate", date: this.date, viewMode: n.modes[this.viewMode].clsName})
                        }
                        break
                    }
            }
        }, mousedown: function(e) {
            e.stopPropagation();
            e.preventDefault()
        }, showMode: function(e) {
            if (e) {
                this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + e))
            }
            this.picker.find(">div").hide().filter(".datepicker-" + n.modes[this.viewMode].clsName).show()
        }};
    e.fn.datepicker = function(n, r) {
        return this.each(function() {
            var i = e(this), s = i.data("datepicker"), o = typeof n === "object" && n;
            if (!s) {
                i.data("datepicker", s = new t(this, e.extend({}, e.fn.datepicker.defaults, o)))
            }
            if (typeof n === "string")
                s[n](r)
        })
    };
    e.fn.datepicker.defaults = {onRender: function(e) {
            return""
        }};
    e.fn.datepicker.Constructor = t;
    var n = {modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {clsName: "months", navFnc: "FullYear", navStep: 1}, {clsName: "years", navFnc: "FullYear", navStep: 10}], dates: {days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}, isLeapYear: function(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }, getDaysInMonth: function(e, t) {
            return[31, n.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        }, parseFormat: function(e) {
            var t = e.match(/[.\/\-\s].*?/), n = e.split(/\W+/);
            if (!t || !n || n.length === 0) {
                throw new Error("Invalid date format.")
            }
            return{separator: t, parts: n}
        }, parseDate: function(e, t) {
            var n = e.split(t.separator), e = new Date, r;
            e.setHours(0);
            e.setMinutes(0);
            e.setSeconds(0);
            e.setMilliseconds(0);
            if (n.length === t.parts.length) {
                var i = e.getFullYear(), s = e.getDate(), o = e.getMonth();
                for (var u = 0, a = t.parts.length; u < a; u++) {
                    r = parseInt(n[u], 10) || 1;
                    switch (t.parts[u]) {
                        case"dd":
                        case"d":
                            s = r;
                            e.setDate(r);
                            break;
                        case"mm":
                        case"m":
                            o = r - 1;
                            e.setMonth(r - 1);
                            break;
                        case"yy":
                            i = 2e3 + r;
                            e.setFullYear(2e3 + r);
                            break;
                        case"yyyy":
                            i = r;
                            e.setFullYear(r);
                            break
                        }
                }
                e = new Date(i, o, s, 0, 0, 0)
            }
            return e
        }, formatDate: function(e, t) {
            var n = {d: e.getDate(), m: e.getMonth() + 1, yy: e.getFullYear().toString().substring(2), yyyy: e.getFullYear()};
            n.dd = (n.d < 10 ? "0" : "") + n.d;
            n.mm = (n.m < 10 ? "0" : "") + n.m;
            var e = [];
            for (var r = 0, i = t.parts.length; r < i; r++) {
                e.push(n[t.parts[r]])
            }
            return e.join(t.separator)
        }, headTemplate: "<thead>" + "<tr>" + '<th class="prev">‹</th>' + '<th colspan="5" class="switch"></th>' + '<th class="next">›</th>' + "</tr>" + "</thead>", contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'};
    n.template = '<div class="datepicker dropdown-menu">' + '<div class="datepicker-days">' + '<table class=" table-condensed">' + n.headTemplate + "<tbody></tbody>" + "</table>" + "</div>" + '<div class="datepicker-months">' + '<table class="table-condensed">' + n.headTemplate + n.contTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">' + n.headTemplate + n.contTemplate + "</table>" + "</div>" + "</div>"
}(window.jQuery);

/*! bootstrap-timepicker v0.2.3
 * http://jdewit.github.com/bootstrap-timepicker
 * Copyright (c) 2013 Joris de Wit
 * MIT License
 */
(function(t, i, e, s) {
    "use strict";
    var h = function(i, e) {
        this.widget = "", this.$element = t(i), this.defaultTime = e.defaultTime, this.disableFocus = e.disableFocus, this.isOpen = e.isOpen, this.minuteStep = e.minuteStep, this.modalBackdrop = e.modalBackdrop, this.secondStep = e.secondStep, this.showInputs = e.showInputs, this.showMeridian = e.showMeridian, this.showSeconds = e.showSeconds, this.template = e.template, this.appendWidgetTo = e.appendWidgetTo, this._init()
    };
    h.prototype = {constructor: h, _init: function() {
            var i = this;
            this.$element.parent().hasClass("input-append") || this.$element.parent().hasClass("input-prepend") ? (this.$element.parent(".input-append, .input-prepend").find(".add-on").on({"click.timepicker": t.proxy(this.showWidget, this)}), this.$element.on({"focus.timepicker": t.proxy(this.highlightUnit, this), "click.timepicker": t.proxy(this.highlightUnit, this), "keydown.timepicker": t.proxy(this.elementKeydown, this), "blur.timepicker": t.proxy(this.blurElement, this)})) : this.template ? this.$element.on({"focus.timepicker": t.proxy(this.showWidget, this), "click.timepicker": t.proxy(this.showWidget, this), "blur.timepicker": t.proxy(this.blurElement, this)}) : this.$element.on({"focus.timepicker": t.proxy(this.highlightUnit, this), "click.timepicker": t.proxy(this.highlightUnit, this), "keydown.timepicker": t.proxy(this.elementKeydown, this), "blur.timepicker": t.proxy(this.blurElement, this)}), this.$widget = this.template !== !1 ? t(this.getTemplate()).prependTo(this.$element.parents(this.appendWidgetTo)).on("click", t.proxy(this.widgetClick, this)) : !1, this.showInputs && this.$widget !== !1 && this.$widget.find("input").each(function() {
                t(this).on({"click.timepicker": function() {
                        t(this).select()
                    }, "keydown.timepicker": t.proxy(i.widgetKeydown, i)})
            }), this.setDefaultTime(this.defaultTime)
        }, blurElement: function() {
            this.highlightedUnit = s, this.updateFromElementVal()
        }, decrementHour: function() {
            if (this.showMeridian)
                if (1 === this.hour)
                    this.hour = 12;
                else {
                    if (12 === this.hour)
                        return this.hour--, this.toggleMeridian();
                    if (0 === this.hour)
                        return this.hour = 11, this.toggleMeridian();
                    this.hour--
                }
            else
                0 === this.hour ? this.hour = 23 : this.hour--;
            this.update()
        }, decrementMinute: function(t) {
            var i;
            i = t ? this.minute - t : this.minute - this.minuteStep, 0 > i ? (this.decrementHour(), this.minute = i + 60) : this.minute = i, this.update()
        }, decrementSecond: function() {
            var t = this.second - this.secondStep;
            0 > t ? (this.decrementMinute(!0), this.second = t + 60) : this.second = t, this.update()
        }, elementKeydown: function(t) {
            switch (t.keyCode) {
                case 9:
                    switch (this.updateFromElementVal(), this.highlightedUnit) {
                        case"hour":
                            t.preventDefault(), this.highlightNextUnit();
                            break;
                        case"minute":
                            (this.showMeridian || this.showSeconds) && (t.preventDefault(), this.highlightNextUnit());
                            break;
                        case"second":
                            this.showMeridian && (t.preventDefault(), this.highlightNextUnit())
                    }
                    break;
                case 27:
                    this.updateFromElementVal();
                    break;
                case 37:
                    t.preventDefault(), this.highlightPrevUnit(), this.updateFromElementVal();
                    break;
                case 38:
                    switch (t.preventDefault(), this.highlightedUnit) {
                        case"hour":
                            this.incrementHour(), this.highlightHour();
                            break;
                        case"minute":
                            this.incrementMinute(), this.highlightMinute();
                            break;
                        case"second":
                            this.incrementSecond(), this.highlightSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian(), this.highlightMeridian()
                    }
                    break;
                case 39:
                    t.preventDefault(), this.updateFromElementVal(), this.highlightNextUnit();
                    break;
                case 40:
                    switch (t.preventDefault(), this.highlightedUnit) {
                        case"hour":
                            this.decrementHour(), this.highlightHour();
                            break;
                        case"minute":
                            this.decrementMinute(), this.highlightMinute();
                            break;
                        case"second":
                            this.decrementSecond(), this.highlightSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian(), this.highlightMeridian()
                        }
                }
        }, formatTime: function(t, i, e, s) {
            return t = 10 > t ? "0" + t : t, i = 10 > i ? "0" + i : i, e = 10 > e ? "0" + e : e, t + ":" + i + (this.showSeconds ? ":" + e : "") + (this.showMeridian ? " " + s : "")
        }, getCursorPosition: function() {
            var t = this.$element.get(0);
            if ("selectionStart"in t)
                return t.selectionStart;
            if (e.selection) {
                t.focus();
                var i = e.selection.createRange(), s = e.selection.createRange().text.length;
                return i.moveStart("character", -t.value.length), i.text.length - s
            }
        }, getTemplate: function() {
            var t, i, e, s, h, n;
            switch (this.showInputs ? (i = '<input type="text" name="hour" class="bootstrap-timepicker-hour" maxlength="2"/>', e = '<input type="text" name="minute" class="bootstrap-timepicker-minute" maxlength="2"/>', s = '<input type="text" name="second" class="bootstrap-timepicker-second" maxlength="2"/>', h = '<input type="text" name="meridian" class="bootstrap-timepicker-meridian" maxlength="2"/>') : (i = '<span class="bootstrap-timepicker-hour"></span>', e = '<span class="bootstrap-timepicker-minute"></span>', s = '<span class="bootstrap-timepicker-second"></span>', h = '<span class="bootstrap-timepicker-meridian"></span>'), n = '<table><tr><td><a href="#" data-action="incrementHour"><i class="icon-chevron-up"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="icon-chevron-up"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="icon-chevron-up"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="icon-chevron-up"></i></a></td>' : "") + "</tr>" + "<tr>" + "<td>" + i + "</td> " + '<td class="separator">:</td>' + "<td>" + e + "</td> " + (this.showSeconds ? '<td class="separator">:</td><td>' + s + "</td>" : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + h + "</td>" : "") + "</tr>" + "<tr>" + '<td><a href="#" data-action="decrementHour"><i class="icon-chevron-down"></i></a></td>' + '<td class="separator"></td>' + '<td><a href="#" data-action="decrementMinute"><i class="icon-chevron-down"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="icon-chevron-down"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="icon-chevron-down"></i></a></td>' : "") + "</tr>" + "</table>", this.template) {
                case"modal":
                    t = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? "true" : "false") + '">' + '<div class="modal-header">' + '<a href="#" class="close" data-dismiss="modal">×</a>' + "<h3>Pick a Time</h3>" + "</div>" + '<div class="modal-content">' + n + "</div>" + '<div class="modal-footer">' + '<a href="#" class="btn btn-primary" data-dismiss="modal">OK</a>' + "</div>" + "</div>";
                    break;
                case"dropdown":
                    t = '<div class="bootstrap-timepicker-widget dropdown-menu">' + n + "</div>"
            }
            return t
        }, getTime: function() {
            return this.formatTime(this.hour, this.minute, this.second, this.meridian)
        }, hideWidget: function() {
            this.isOpen !== !1 && (this.showInputs && this.updateFromWidgetInputs(), this.$element.trigger({type: "hide.timepicker", time: {value: this.getTime(), hours: this.hour, minutes: this.minute, seconds: this.second, meridian: this.meridian}}), "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"), t(e).off("mousedown.timepicker"), this.isOpen = !1)
        }, highlightUnit: function() {
            this.position = this.getCursorPosition(), this.position >= 0 && 2 >= this.position ? this.highlightHour() : this.position >= 3 && 5 >= this.position ? this.highlightMinute() : this.position >= 6 && 8 >= this.position ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : this.position >= 9 && 11 >= this.position && this.highlightMeridian()
        }, highlightNextUnit: function() {
            switch (this.highlightedUnit) {
                case"hour":
                    this.highlightMinute();
                    break;
                case"minute":
                    this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case"second":
                    this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case"meridian":
                    this.highlightHour()
                }
        }, highlightPrevUnit: function() {
            switch (this.highlightedUnit) {
                case"hour":
                    this.highlightMeridian();
                    break;
                case"minute":
                    this.highlightHour();
                    break;
                case"second":
                    this.highlightMinute();
                    break;
                case"meridian":
                    this.showSeconds ? this.highlightSecond() : this.highlightMinute()
                }
        }, highlightHour: function() {
            var t = this.$element.get(0);
            this.highlightedUnit = "hour", t.setSelectionRange && setTimeout(function() {
                t.setSelectionRange(0, 2)
            }, 0)
        }, highlightMinute: function() {
            var t = this.$element.get(0);
            this.highlightedUnit = "minute", t.setSelectionRange && setTimeout(function() {
                t.setSelectionRange(3, 5)
            }, 0)
        }, highlightSecond: function() {
            var t = this.$element.get(0);
            this.highlightedUnit = "second", t.setSelectionRange && setTimeout(function() {
                t.setSelectionRange(6, 8)
            }, 0)
        }, highlightMeridian: function() {
            var t = this.$element.get(0);
            this.highlightedUnit = "meridian", t.setSelectionRange && (this.showSeconds ? setTimeout(function() {
                t.setSelectionRange(9, 11)
            }, 0) : setTimeout(function() {
                t.setSelectionRange(6, 8)
            }, 0))
        }, incrementHour: function() {
            if (this.showMeridian) {
                if (11 === this.hour)
                    return this.hour++, this.toggleMeridian();
                12 === this.hour && (this.hour = 0)
            }
            return 23 === this.hour ? (this.hour = 0, s) : (this.hour++, this.update(), s)
        }, incrementMinute: function(t) {
            var i;
            i = t ? this.minute + t : this.minute + this.minuteStep - this.minute % this.minuteStep, i > 59 ? (this.incrementHour(), this.minute = i - 60) : this.minute = i, this.update()
        }, incrementSecond: function() {
            var t = this.second + this.secondStep - this.second % this.secondStep;
            t > 59 ? (this.incrementMinute(!0), this.second = t - 60) : this.second = t, this.update()
        }, remove: function() {
            t("document").off(".timepicker"), this.$widget && this.$widget.remove(), delete this.$element.data().timepicker
        }, setDefaultTime: function(t) {
            if (this.$element.val())
                this.updateFromElementVal();
            else if ("current" === t) {
                var i = new Date, e = i.getHours(), s = Math.floor(i.getMinutes() / this.minuteStep) * this.minuteStep, h = Math.floor(i.getSeconds() / this.secondStep) * this.secondStep, n = "AM";
                this.showMeridian && (0 === e ? e = 12 : e >= 12 ? (e > 12 && (e -= 12), n = "PM") : n = "AM"), this.hour = e, this.minute = s, this.second = h, this.meridian = n, this.update()
            } else
                t === !1 ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = "AM") : this.setTime(t)
        }, setTime: function(t) {
            var i, e;
            this.showMeridian ? (i = t.split(" "), e = i[0].split(":"), this.meridian = i[1]) : e = t.split(":"), this.hour = parseInt(e[0], 10), this.minute = parseInt(e[1], 10), this.second = parseInt(e[2], 10), isNaN(this.hour) && (this.hour = 0), isNaN(this.minute) && (this.minute = 0), this.showMeridian ? (this.hour > 12 ? this.hour = 12 : 1 > this.hour && (this.hour = 12), "am" === this.meridian || "a" === this.meridian ? this.meridian = "AM" : ("pm" === this.meridian || "p" === this.meridian) && (this.meridian = "PM"), "AM" !== this.meridian && "PM" !== this.meridian && (this.meridian = "AM")) : this.hour >= 24 ? this.hour = 23 : 0 > this.hour && (this.hour = 0), 0 > this.minute ? this.minute = 0 : this.minute >= 60 && (this.minute = 59), this.showSeconds && (isNaN(this.second) ? this.second = 0 : 0 > this.second ? this.second = 0 : this.second >= 60 && (this.second = 59)), this.update()
        }, showWidget: function() {
            if (!this.isOpen && !this.$element.is(":disabled")) {
                var i = this;
                t(e).on("mousedown.timepicker", function(e) {
                    0 === t(e.target).closest(".bootstrap-timepicker-widget").length && i.hideWidget()
                }), this.$element.trigger({type: "show.timepicker", time: {value: this.getTime(), hours: this.hour, minutes: this.minute, seconds: this.second, meridian: this.meridian}}), this.disableFocus && this.$element.blur(), this.updateFromElementVal(), "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", t.proxy(this.hideWidget, this)) : this.isOpen === !1 && this.$widget.addClass("open"), this.isOpen = !0
            }
        }, toggleMeridian: function() {
            this.meridian = "AM" === this.meridian ? "PM" : "AM", this.update()
        }, update: function() {
            this.$element.trigger({type: "changeTime.timepicker", time: {value: this.getTime(), hours: this.hour, minutes: this.minute, seconds: this.second, meridian: this.meridian}}), this.updateElement(), this.updateWidget()
        }, updateElement: function() {
            this.$element.val(this.getTime()).change()
        }, updateFromElementVal: function() {
            var t = this.$element.val();
            t && this.setTime(t)
        }, updateWidget: function() {
            if (this.$widget !== !1) {
                var t = 10 > this.hour ? "0" + this.hour : this.hour, i = 10 > this.minute ? "0" + this.minute : this.minute, e = 10 > this.second ? "0" + this.second : this.second;
                this.showInputs ? (this.$widget.find("input.bootstrap-timepicker-hour").val(t), this.$widget.find("input.bootstrap-timepicker-minute").val(i), this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(e), this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)) : (this.$widget.find("span.bootstrap-timepicker-hour").text(t), this.$widget.find("span.bootstrap-timepicker-minute").text(i), this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(e), this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))
            }
        }, updateFromWidgetInputs: function() {
            if (this.$widget !== !1) {
                var i = t("input.bootstrap-timepicker-hour", this.$widget).val() + ":" + t("input.bootstrap-timepicker-minute", this.$widget).val() + (this.showSeconds ? ":" + t("input.bootstrap-timepicker-second", this.$widget).val() : "") + (this.showMeridian ? " " + t("input.bootstrap-timepicker-meridian", this.$widget).val() : "");
                this.setTime(i)
            }
        }, widgetClick: function(i) {
            i.stopPropagation(), i.preventDefault();
            var e = t(i.target).closest("a").data("action");
            e && this[e]()
        }, widgetKeydown: function(i) {
            var e = t(i.target).closest("input"), s = e.attr("name");
            switch (i.keyCode) {
                case 9:
                    if (this.showMeridian) {
                        if ("meridian" === s)
                            return this.hideWidget()
                    } else if (this.showSeconds) {
                        if ("second" === s)
                            return this.hideWidget()
                    } else if ("minute" === s)
                        return this.hideWidget();
                    this.updateFromWidgetInputs();
                    break;
                case 27:
                    this.hideWidget();
                    break;
                case 38:
                    switch (i.preventDefault(), s) {
                        case"hour":
                            this.incrementHour();
                            break;
                        case"minute":
                            this.incrementMinute();
                            break;
                        case"second":
                            this.incrementSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian()
                    }
                    break;
                case 40:
                    switch (i.preventDefault(), s) {
                        case"hour":
                            this.decrementHour();
                            break;
                        case"minute":
                            this.decrementMinute();
                            break;
                        case"second":
                            this.decrementSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian()
                        }
                }
        }}, t.fn.timepicker = function(i) {
        var e = Array.apply(null, arguments);
        return e.shift(), this.each(function() {
            var s = t(this), n = s.data("timepicker"), o = "object" == typeof i && i;
            n || s.data("timepicker", n = new h(this, t.extend({}, t.fn.timepicker.defaults, o, t(this).data()))), "string" == typeof i && n[i].apply(n, e)
        })
    }, t.fn.timepicker.defaults = {defaultTime: "current", disableFocus: !1, isOpen: !1, minuteStep: 15, modalBackdrop: !1, secondStep: 15, showSeconds: !1, showInputs: !0, showMeridian: !0, template: "dropdown", appendWidgetTo: ".bootstrap-timepicker"}, t.fn.timepicker.Constructor = h
})(jQuery, window, document);

/* =========================================================
 * bootstrap-colorpicker.js
 * http://www.eyecon.ro/bootstrap-colorpicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function(e) {
    var t = function(e) {
        this.value = {h: 1, s: 1, b: 1, a: 1};
        this.setColor(e)
    };
    t.prototype = {constructor: t, setColor: function(t) {
            t = t.toLowerCase();
            var n = this;
            e.each(r.stringParsers, function(e, i) {
                var s = i.re.exec(t), o = s && i.parse(s), u = i.space || "rgba";
                if (o) {
                    if (u === "hsla") {
                        n.value = r.RGBtoHSB.apply(null, r.HSLtoRGB.apply(null, o))
                    } else {
                        n.value = r.RGBtoHSB.apply(null, o)
                    }
                    return false
                }
            })
        }, setHue: function(e) {
            this.value.h = 1 - e
        }, setSaturation: function(e) {
            this.value.s = e
        }, setLightness: function(e) {
            this.value.b = 1 - e
        }, setAlpha: function(e) {
            this.value.a = parseInt((1 - e) * 100, 10) / 100
        }, toRGB: function(e, t, n, r) {
            if (!e) {
                e = this.value.h;
                t = this.value.s;
                n = this.value.b
            }
            e *= 360;
            var i, s, o, u, a;
            e = e % 360 / 60;
            a = n * t;
            u = a * (1 - Math.abs(e % 2 - 1));
            i = s = o = n - a;
            e = ~~e;
            i += [a, u, 0, 0, u, a][e];
            s += [u, a, a, u, 0, 0][e];
            o += [0, 0, u, a, a, u][e];
            return{r: Math.round(i * 255), g: Math.round(s * 255), b: Math.round(o * 255), a: r || this.value.a}
        }, toHex: function(e, t, n, r) {
            var i = this.toRGB(e, t, n, r);
            return"#" + (1 << 24 | parseInt(i.r) << 16 | parseInt(i.g) << 8 | parseInt(i.b)).toString(16).substr(1)
        }, toHSL: function(e, t, n, r) {
            if (!e) {
                e = this.value.h;
                t = this.value.s;
                n = this.value.b
            }
            var i = e, s = (2 - t) * n, o = t * n;
            if (s > 0 && s <= 1) {
                o /= s
            } else {
                o /= 2 - s
            }
            s /= 2;
            if (o > 1) {
                o = 1
            }
            return{h: i, s: o, l: s, a: r || this.value.a}
        }};
    var n = function(t, n) {
        this.element = e(t);
        var i = n.format || this.element.data("color-format") || "hex";
        this.format = r.translateFormats[i];
        this.isInput = this.element.is("input");
        this.component = this.element.is(".color") ? this.element.find(".add-on") : false;
        this.picker = e(r.template).appendTo("body").on("mousedown", e.proxy(this.mousedown, this));
        if (this.isInput) {
            this.element.on({focus: e.proxy(this.show, this), keyup: e.proxy(this.update, this)})
        } else if (this.component) {
            this.component.on({click: e.proxy(this.show, this)})
        } else {
            this.element.on({click: e.proxy(this.show, this)})
        }
        if (i === "rgba" || i === "hsla") {
            this.picker.addClass("alpha");
            this.alpha = this.picker.find(".colorpicker-alpha")[0].style
        }
        if (this.component) {
            this.picker.find(".colorpicker-color").hide();
            this.preview = this.element.find("i")[0].style
        } else {
            this.preview = this.picker.find("div:last")[0].style
        }
        this.base = this.picker.find("div:first")[0].style;
        this.update()
    };
    n.prototype = {constructor: n, show: function(t) {
            this.picker.show();
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
            this.place();
            e(window).on("resize", e.proxy(this.place, this));
            if (!this.isInput) {
                if (t) {
                    t.stopPropagation();
                    t.preventDefault()
                }
            }
            e(document).on({mousedown: e.proxy(this.hide, this)});
            this.element.trigger({type: "show", color: this.color})
        }, update: function() {
            this.color = new t(this.isInput ? this.element.prop("value") : this.element.data("color"));
            this.picker.find("i").eq(0).css({left: this.color.value.s * 100, top: 100 - this.color.value.b * 100}).end().eq(1).css("top", 100 * (1 - this.color.value.h)).end().eq(2).css("top", 100 * (1 - this.color.value.a));
            this.previewColor()
        }, setValue: function(e) {
            this.color = new t(e);
            this.picker.find("i").eq(0).css({left: this.color.value.s * 100, top: 100 - this.color.value.b * 100}).end().eq(1).css("top", 100 * (1 - this.color.value.h)).end().eq(2).css("top", 100 * (1 - this.color.value.a));
            this.previewColor();
            this.element.trigger({type: "changeColor", color: this.color})
        }, hide: function() {
            this.picker.hide();
            e(window).off("resize", this.place);
            if (!this.isInput) {
                e(document).off({mousedown: this.hide});
                if (this.component) {
                    this.element.find("input").prop("value", this.format.call(this))
                }
                this.element.data("color", this.format.call(this))
            } else {
                this.element.prop("value", this.format.call(this))
            }
            this.element.trigger({type: "hide", color: this.color})
        }, place: function() {
            var e = this.component ? this.component.offset() : this.element.offset();
            this.picker.css({top: e.top + this.height, left: e.left})
        }, previewColor: function() {
            try {
                this.preview.backgroundColor = this.format.call(this)
            } catch (e) {
                this.preview.backgroundColor = this.color.toHex()
            }
            this.base.backgroundColor = this.color.toHex(this.color.value.h, 1, 1, 1);
            if (this.alpha) {
                this.alpha.backgroundColor = this.color.toHex()
            }
        }, pointer: null, slider: null, mousedown: function(t) {
            t.stopPropagation();
            t.preventDefault();
            var n = e(t.target);
            var i = n.closest("div");
            if (!i.is(".colorpicker")) {
                if (i.is(".colorpicker-saturation")) {
                    this.slider = e.extend({}, r.sliders.saturation)
                } else if (i.is(".colorpicker-hue")) {
                    this.slider = e.extend({}, r.sliders.hue)
                } else if (i.is(".colorpicker-alpha")) {
                    this.slider = e.extend({}, r.sliders.alpha)
                } else {
                    return false
                }
                var s = i.offset();
                this.slider.knob = i.find("i")[0].style;
                this.slider.left = t.pageX - s.left;
                this.slider.top = t.pageY - s.top;
                this.pointer = {left: t.pageX, top: t.pageY};
                e(document).on({mousemove: e.proxy(this.mousemove, this), mouseup: e.proxy(this.mouseup, this)}).trigger("mousemove")
            }
            return false
        }, mousemove: function(e) {
            e.stopPropagation();
            e.preventDefault();
            var t = Math.max(0, Math.min(this.slider.maxLeft, this.slider.left + ((e.pageX || this.pointer.left) - this.pointer.left)));
            var n = Math.max(0, Math.min(this.slider.maxTop, this.slider.top + ((e.pageY || this.pointer.top) - this.pointer.top)));
            this.slider.knob.left = t + "px";
            this.slider.knob.top = n + "px";
            if (this.slider.callLeft) {
                this.color[this.slider.callLeft].call(this.color, t / 100)
            }
            if (this.slider.callTop) {
                this.color[this.slider.callTop].call(this.color, n / 100)
            }
            this.previewColor();
            this.element.trigger({type: "changeColor", color: this.color});
            return false
        }, mouseup: function(t) {
            t.stopPropagation();
            t.preventDefault();
            e(document).off({mousemove: this.mousemove, mouseup: this.mouseup});
            return false
        }};
    e.fn.colorpicker = function(t) {
        return this.each(function() {
            var r = e(this), i = r.data("colorpicker"), s = typeof t === "object" && t;
            if (!i) {
                r.data("colorpicker", i = new n(this, e.extend({}, e.fn.colorpicker.defaults, s)))
            }
            if (typeof t === "string")
                i[t]()
        })
    };
    e.fn.colorpicker.defaults = {};
    e.fn.colorpicker.Constructor = n;
    var r = {translateFormats: {rgb: function() {
                var e = this.color.toRGB();
                return"rgb(" + e.r + "," + e.g + "," + e.b + ")"
            }, rgba: function() {
                var e = this.color.toRGB();
                return"rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")"
            }, hsl: function() {
                var e = this.color.toHSL();
                return"hsl(" + Math.round(e.h * 360) + "," + Math.round(e.s * 100) + "%," + Math.round(e.l * 100) + "%)"
            }, hsla: function() {
                var e = this.color.toHSL();
                return"hsla(" + Math.round(e.h * 360) + "," + Math.round(e.s * 100) + "%," + Math.round(e.l * 100) + "%," + e.a + ")"
            }, hex: function() {
                return this.color.toHex()
            }}, sliders: {saturation: {maxLeft: 100, maxTop: 100, callLeft: "setSaturation", callTop: "setLightness"}, hue: {maxLeft: 0, maxTop: 100, callLeft: false, callTop: "setHue"}, alpha: {maxLeft: 0, maxTop: 100, callLeft: false, callTop: "setAlpha"}}, RGBtoHSB: function(e, t, n, r) {
            e /= 255;
            t /= 255;
            n /= 255;
            var i, s, o, u;
            o = Math.max(e, t, n);
            u = o - Math.min(e, t, n);
            i = u === 0 ? null : o == e ? (t - n) / u : o == t ? (n - e) / u + 2 : (e - t) / u + 4;
            i = (i + 360) % 6 * 60 / 360;
            s = u === 0 ? 0 : u / o;
            return{h: i || 1, s: s, b: o, a: r || 1}
        }, HueToRGB: function(e, t, n) {
            if (n < 0)
                n += 1;
            else if (n > 1)
                n -= 1;
            if (n * 6 < 1)
                return e + (t - e) * n * 6;
            else if (n * 2 < 1)
                return t;
            else if (n * 3 < 2)
                return e + (t - e) * (2 / 3 - n) * 6;
            else
                return e
        }, HSLtoRGB: function(e, t, n, i) {
            if (t < 0) {
                t = 0
            }
            var s;
            if (n <= .5) {
                s = n * (1 + t)
            } else {
                s = n + t - n * t
            }
            var o = 2 * n - s;
            var u = e + 1 / 3;
            var a = e;
            var f = e - 1 / 3;
            var l = Math.round(r.HueToRGB(o, s, u) * 255);
            var c = Math.round(r.HueToRGB(o, s, a) * 255);
            var h = Math.round(r.HueToRGB(o, s, f) * 255);
            return[l, c, h, i || 1]
        }, stringParsers: [{re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, parse: function(e) {
                    return[e[1], e[2], e[3], e[4]]
                }}, {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, parse: function(e) {
                    return[2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                }}, {re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, parse: function(e) {
                    return[parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }}, {re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/, parse: function(e) {
                    return[parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }}, {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(e) {
                    return[e[1] / 360, e[2] / 100, e[3] / 100, e[4]]
                }}], template: '<div class="colorpicker dropdown-menu">' + '<div class="colorpicker-saturation"><i><b></b></i></div>' + '<div class="colorpicker-hue"><i></i></div>' + '<div class="colorpicker-alpha"><i></i></div>' + '<div class="colorpicker-color"><div /></div>' + "</div>"}
}(window.jQuery);

/* ============================================================
 * bootstrapSwitch v1.2 by Larentis Mattia @spiritualGuru
 * http://www.larentis.eu/switch/
 * ============================================================
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 * ============================================================ */
!function(e) {
    "use strict";
    e.fn["bootstrapSwitch"] = function(t) {
        var n = {init: function() {
                return this.each(function() {
                    var t = e(this), n, r, i, s, o = "", u = t.attr("class"), a, f, l = "ON", c = "OFF";
                    e.each(["switch-mini", "switch-small", "switch-large"], function(e, t) {
                        if (u.indexOf(t) >= 0)
                            o = t
                    });
                    t.addClass("has-switch");
                    if (t.data("on") !== undefined)
                        a = "switch-" + t.data("on");
                    if (t.data("on-label") !== undefined)
                        l = t.data("on-label");
                    if (t.data("off-label") !== undefined)
                        c = t.data("off-label");
                    r = e("<span>").addClass("switch-left").addClass(o).addClass(a).html(l);
                    a = "";
                    if (t.data("off") !== undefined)
                        a = "switch-" + t.data("off");
                    i = e("<span>").addClass("switch-right").addClass(o).addClass(a).html(c);
                    s = e("<label>").html(" ").addClass(o).attr("for", t.find("input").attr("id"));
                    n = t.find(":checkbox").wrap(e("<div>")).parent().data("animated", false);
                    if (t.data("animated") !== false)
                        n.addClass("switch-animate").data("animated", true);
                    n.append(r).append(s).append(i);
                    t.find(">div").addClass(t.find("input").is(":checked") ? "switch-on" : "switch-off");
                    if (t.find("input").is(":disabled"))
                        e(this).addClass("deactivate");
                    var h = function(e) {
                        e.siblings("label").trigger("mousedown").trigger("mouseup").trigger("click")
                    };
                    t.on("keydown", function(t) {
                        if (t.keyCode === 32) {
                            t.stopImmediatePropagation();
                            t.preventDefault();
                            h(e(t.target).find("span:first"))
                        }
                    });
                    r.on("click", function(t) {
                        h(e(this))
                    });
                    i.on("click", function(t) {
                        h(e(this))
                    });
                    t.find("input").on("change", function(t) {
                        var n = e(this).parent();
                        t.preventDefault();
                        t.stopImmediatePropagation();
                        n.css("left", "");
                        if (e(this).is(":checked"))
                            n.removeClass("switch-off").addClass("switch-on");
                        else
                            n.removeClass("switch-on").addClass("switch-off");
                        if (n.data("animated") !== false)
                            n.addClass("switch-animate");
                        n.parent().trigger("switch-change", {el: e(this), value: e(this).is(":checked")})
                    });
                    t.find("label").on("mousedown touchstart", function(t) {
                        var n = e(this);
                        f = false;
                        t.preventDefault();
                        t.stopImmediatePropagation();
                        n.closest("div").removeClass("switch-animate");
                        if (n.closest(".switch").is(".deactivate"))
                            n.unbind("click");
                        else {
                            n.on("mousemove touchmove", function(t) {
                                var n = e(this).closest(".switch"), r = (t.pageX || t.originalEvent.targetTouches[0].pageX) - n.offset().left, i = r / n.width() * 100, s = 25, o = 75;
                                f = true;
                                if (i < s)
                                    i = s;
                                else if (i > o)
                                    i = o;
                                n.find(">div").css("left", i - o + "%")
                            });
                            n.on("click touchend", function(t) {
                                var n = e(this), r = e(t.target), i = r.siblings("input");
                                t.stopImmediatePropagation();
                                t.preventDefault();
                                n.unbind("mouseleave");
                                if (f)
                                    i.prop("checked", !(parseInt(n.parent().css("left")) < -25));
                                else
                                    i.prop("checked", !i.is(":checked"));
                                f = false;
                                i.trigger("change")
                            });
                            n.on("mouseleave", function(t) {
                                var n = e(this), r = n.siblings("input");
                                t.preventDefault();
                                t.stopImmediatePropagation();
                                n.unbind("mouseleave");
                                n.trigger("mouseup");
                                r.prop("checked", !(parseInt(n.parent().css("left")) < -25)).trigger("change")
                            });
                            n.on("mouseup", function(t) {
                                t.stopImmediatePropagation();
                                t.preventDefault();
                                e(this).unbind("mousemove")
                            })
                        }
                    })
                })
            }, toggleActivation: function() {
                e(this).toggleClass("deactivate")
            }, isActive: function() {
                return!e(this).hasClass("deactivate")
            }, setActive: function(t) {
                if (t)
                    e(this).removeClass("deactivate");
                else
                    e(this).addClass("deactivate")
            }, toggleState: function(t) {
                var n = e(this).find("input:checkbox");
                n.prop("checked", !n.is(":checked")).trigger("change", t)
            }, setState: function(t, n) {
                e(this).find("input:checkbox").prop("checked", t).trigger("change", n)
            }, status: function() {
                return e(this).find("input:checkbox").is(":checked")
            }, destroy: function() {
                var t = e(this).find("div"), n;
                t.find(":not(input:checkbox)").remove();
                n = t.children();
                n.unwrap().unwrap();
                n.unbind("change");
                return n
            }};
        if (n[t])
            return n[t].apply(this, Array.prototype.slice.call(arguments, 1));
        else if (typeof t === "object" || !t)
            return n.init.apply(this, arguments);
        else
            e.error("Method " + t + " does not exist!")
    }
}(jQuery);

/* Dropzone.js 3.1.0, http://www.dropzonejs.com/ */
(function() {
    function e(t, i, n) {
        var r = e.resolve(t);
        if (null == r) {
            n = n || t, i = i || "root";
            var s = Error('Failed to require "' + n + '" from "' + i + '"');
            throw s.path = n, s.parent = i, s.require = !0, s
        }
        var o = e.modules[r];
        return o.exports || (o.exports = {}, o.client = o.component = !0, o.call(this, o.exports, e.relative(r), o)), o.exports
    }
    var t = Object.prototype.hasOwnProperty;
    e.modules = {}, e.aliases = {}, e.resolve = function(i) {
        "/" === i.charAt(0) && (i = i.slice(1));
        for (var n = i + "/index.js", r = [i, i + ".js", i + ".json", i + "/index.js", i + "/index.json"], s = 0; r.length > s; s++) {
            var i = r[s];
            if (t.call(e.modules, i))
                return i
        }
        return t.call(e.aliases, n) ? e.aliases[n] : void 0
    }, e.normalize = function(e, t) {
        var i = [];
        if ("." != t.charAt(0))
            return t;
        e = e.split("/"), t = t.split("/");
        for (var n = 0; t.length > n; ++n)
            ".." == t[n] ? e.pop() : "." != t[n] && "" != t[n] && i.push(t[n]);
        return e.concat(i).join("/")
    }, e.register = function(t, i) {
        e.modules[t] = i
    }, e.alias = function(i, n) {
        if (!t.call(e.modules, i))
            throw Error('Failed to alias "' + i + '", it does not exist');
        e.aliases[n] = i
    }, e.relative = function(i) {
        function n(e, t) {
            for (var i = e.length; i--; )
                if (e[i] === t)
                    return i;
            return-1
        }
        function r(t) {
            var n = r.resolve(t);
            return e(n, i, t)
        }
        var s = e.normalize(i, "..");
        return r.resolve = function(t) {
            var r = t.charAt(0);
            if ("/" == r)
                return t.slice(1);
            if ("." == r)
                return e.normalize(s, t);
            var o = i.split("/"), l = n(o, "deps") + 1;
            return l || (l = 0), t = o.slice(0, l + 1).join("/") + "/deps/" + t
        }, r.exists = function(i) {
            return t.call(e.modules, r.resolve(i))
        }, r
    }, e.register("component-emitter/index.js", function(e, t, i) {
        function n(e) {
            return e ? r(e) : void 0
        }
        function r(e) {
            for (var t in n.prototype)
                e[t] = n.prototype[t];
            return e
        }
        i.exports = n, n.prototype.on = function(e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
        }, n.prototype.once = function(e, t) {
            function i() {
                n.off(e, i), t.apply(this, arguments)
            }
            var n = this;
            return this._callbacks = this._callbacks || {}, t._off = i, this.on(e, i), this
        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = function(e, t) {
            this._callbacks = this._callbacks || {};
            var i = this._callbacks[e];
            if (!i)
                return this;
            if (1 == arguments.length)
                return delete this._callbacks[e], this;
            var n = i.indexOf(t._off || t);
            return~n && i.splice(n, 1), this
        }, n.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1), i = this._callbacks[e];
            if (i) {
                i = i.slice(0);
                for (var n = 0, r = i.length; r > n; ++n)
                    i[n].apply(this, t)
            }
            return this
        }, n.prototype.listeners = function(e) {
            return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
        }, n.prototype.hasListeners = function(e) {
            return!!this.listeners(e).length
        }
    }), e.register("dropzone/index.js", function(e, t, i) {
        i.exports = t("./lib/dropzone.js")
    }), e.register("dropzone/lib/dropzone.js", function(e, t, i) {
        (function() {
            var e, n, r, s, o, l, a = {}.hasOwnProperty, c = function(e, t) {
                function i() {
                    this.constructor = e
                }
                for (var n in t)
                    a.call(t, n) && (e[n] = t[n]);
                return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
            }, p = [].slice, d = [].indexOf || function(e) {
                for (var t = 0, i = this.length; i > t; t++)
                    if (t in this && this[t] === e)
                        return t;
                return-1
            };
            n = "undefined" != typeof Emitter && null !== Emitter ? Emitter : t("emitter"), o = function() {
            }, e = function(e) {
                function t(e, i) {
                    var n, r, s, o;
                    if (this.element = e, this.version = t.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType)
                        throw Error("Invalid dropzone element.");
                    if (this.element.dropzone)
                        throw Error("Dropzone already attached.");
                    if (t.instances.push(this), e.dropzone = this, n = null != (o = t.optionsForElement(this.element)) ? o : {}, r = function() {
                        var e, t, i, n, r, s, o;
                        for (n = arguments[0], i = arguments.length >= 2 ? p.call(arguments, 1) : [], s = 0, o = i.length; o > s; s++) {
                            t = i[s];
                            for (e in t)
                                r = t[e], n[e] = r
                        }
                        return n
                    }, this.options = r({}, this.defaultOptions, n, null != i ? i : {}), null == this.options.url && (this.options.url = this.element.action), !this.options.url)
                        throw Error("No URL provided.");
                    if (this.options.acceptParameter && this.options.acceptedMimeTypes)
                        throw Error("You can't provide both 'acceptParameter' and 'acceptedMimeTypes'. 'acceptParameter' is deprecated.");
                    if (this.options.method = this.options.method.toUpperCase(), this.options.forceFallback || !t.isBrowserSupported())
                        return this.options.fallback.call(this);
                    if ((s = this.getExistingFallback()) && s.parentNode && s.parentNode.removeChild(s), this.options.previewsContainer) {
                        if ("string" == typeof this.options.previewsContainer ? this.previewsContainer = document.querySelector(this.options.previewsContainer) : null != this.options.previewsContainer.nodeType && (this.previewsContainer = this.options.previewsContainer), null == this.previewsContainer)
                            throw Error("Invalid `previewsContainer` option provided. Please provide a CSS selector or a plain HTML element.")
                    } else
                        this.previewsContainer = this.element;
                    if (this.options.clickable && (this.options.clickable === !0 ? this.clickableElement = this.element : "string" == typeof this.options.clickable ? this.clickableElement = document.querySelector(this.options.clickable) : null != this.options.clickable.nodeType && (this.clickableElement = this.options.clickable), !this.clickableElement))
                        throw Error("Invalid `clickable` element provided. Please set it to `true`, a plain HTML element or a valid CSS selector.");
                    this.init()
                }
                return c(t, e), t.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "selectedfiles", "addedfile", "removedfile", "thumbnail", "error", "processingfile", "uploadprogress", "sending", "success", "complete", "reset"], t.prototype.defaultOptions = {url: null, method: "post", parallelUploads: 2, maxFilesize: 256, paramName: "file", createImageThumbnails: !0, maxThumbnailFilesize: 10, thumbnailWidth: 100, thumbnailHeight: 100, params: {}, clickable: !0, acceptedMimeTypes: null, acceptParameter: null, enqueueForUpload: !0, previewsContainer: null, dictDefaultMessage: "Drop files here to upload", dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.", dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.", dictFileTooBig: "File is too big ({{filesize}}MB). Max filesize: {{maxFilesize}}MB.", dictInvalidFileType: "You can't upload files of this type.", dictResponseError: "Server responded with {{statusCode}} code.", accept: function(e, t) {
                        return t()
                    }, init: function() {
                        return o
                    }, forceFallback: !1, fallback: function() {
                        var e, i, n, r, s, o;
                        for (this.element.className = "" + this.element.className + " dz-browser-not-supported", o = this.element.getElementsByTagName("div"), r = 0, s = o.length; s > r; r++)
                            e = o[r], /(^| )message($| )/.test(e.className) && (i = e, e.className = "dz-message");
                        return i || (i = t.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(i)), n = i.getElementsByTagName("span")[0], n && (n.textContent = this.options.dictFallbackMessage), this.element.appendChild(this.getFallbackForm())
                    }, resize: function(e) {
                        var t, i, n;
                        return t = {srcX: 0, srcY: 0, srcWidth: e.width, srcHeight: e.height}, i = e.width / e.height, n = this.options.thumbnailWidth / this.options.thumbnailHeight, e.height < this.options.thumbnailHeight || e.width < this.options.thumbnailWidth ? (t.trgHeight = t.srcHeight, t.trgWidth = t.srcWidth) : i > n ? (t.srcHeight = e.height, t.srcWidth = t.srcHeight * n) : (t.srcWidth = e.width, t.srcHeight = t.srcWidth / n), t.srcX = (e.width - t.srcWidth) / 2, t.srcY = (e.height - t.srcHeight) / 2, t
                    }, drop: function() {
                        return this.element.classList.remove("dz-drag-hover")
                    }, dragstart: o, dragend: function() {
                        return this.element.classList.remove("dz-drag-hover")
                    }, dragenter: function() {
                        return this.element.classList.add("dz-drag-hover")
                    }, dragover: function() {
                        return this.element.classList.add("dz-drag-hover")
                    }, dragleave: function() {
                        return this.element.classList.remove("dz-drag-hover")
                    }, selectedfiles: function() {
                        return this.element === this.previewsContainer ? this.element.classList.add("dz-started") : void 0
                    }, reset: function() {
                        return this.element.classList.remove("dz-started")
                    }, addedfile: function(e) {
                        return e.previewElement = t.createElement(this.options.previewTemplate), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement), e.previewElement.querySelector("[data-dz-name]").textContent = e.name, e.previewElement.querySelector("[data-dz-size]").innerHTML = this.filesize(e.size)
                    }, removedfile: function(e) {
                        return e.previewElement.parentNode.removeChild(e.previewElement)
                    }, thumbnail: function(e, t) {
                        var i;
                        return e.previewElement.classList.remove("dz-file-preview"), e.previewElement.classList.add("dz-image-preview"), i = e.previewElement.querySelector("[data-dz-thumbnail]"), i.alt = e.name, i.src = t
                    }, error: function(e, t) {
                        return e.previewElement.classList.add("dz-error"), e.previewElement.querySelector("[data-dz-errormessage]").textContent = t
                    }, processingfile: function(e) {
                        return e.previewElement.classList.add("dz-processing")
                    }, uploadprogress: function(e, t) {
                        return e.previewElement.querySelector("[data-dz-uploadprogress]").style.width = "" + t + "%"
                    }, sending: o, success: function(e) {
                        return e.previewElement.classList.add("dz-success")
                    }, complete: o, previewTemplate: '<div class="dz-preview dz-file-preview">\n <div class="dz-details">\n <div class="dz-filename"><span data-dz-name></span></div>\n <div class="dz-size" data-dz-size></div>\n <img data-dz-thumbnail />\n </div>\n <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n <div class="dz-success-mark"><span>✔</span></div>\n <div class="dz-error-mark"><span>✘</span></div>\n <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>'}, t.prototype.init = function() {
                    var e, i, n, r, s, o, l, a = this;
                    for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector("[data-dz-message]") && this.element.appendChild(t.createElement('<div class="dz-default dz-message" data-dz-message><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElement && (n = function() {
                        return a.hiddenFileInput && document.body.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), a.hiddenFileInput.setAttribute("type", "file"), a.hiddenFileInput.setAttribute("multiple", "multiple"), null != a.options.acceptedMimeTypes && a.hiddenFileInput.setAttribute("accept", a.options.acceptedMimeTypes), null != a.options.acceptParameter && a.hiddenFileInput.setAttribute("accept", a.options.acceptParameter), a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", a.hiddenFileInput.style.width = "0", document.body.appendChild(a.hiddenFileInput), a.hiddenFileInput.addEventListener("change", function() {
                            var e;
                            return e = a.hiddenFileInput.files, e.length && (a.emit("selectedfiles", e), a.handleFiles(e)), n()
                        })
                    }, n()), this.files = [], this.filesQueue = [], this.filesProcessing = [], this.URL = null != (o = window.URL)?o:window.webkitURL, l = this.events, r = 0, s = l.length; s > r; r++)
                        e = l[r], this.on(e, this.options[e]);
                    return this.on("uploadprogress", function(e) {
                        var t, i, n, r, s, o;
                        for (i = 0, t = 0, o = a.files, r = 0, s = o.length; s > r; r++)
                            e = o[r], i += e.upload.bytesSent, t += e.upload.total;
                        return n = 100 * i / t, a.emit("totaluploadprogress", n, t, i)
                    }), i = function(e) {
                        return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1
                    }, this.listeners = [{element: this.element, events: {dragstart: function(e) {
                                    return a.emit("dragstart", e)
                                }, dragenter: function(e) {
                                    return i(e), a.emit("dragenter", e)
                                }, dragover: function(e) {
                                    return i(e), a.emit("dragover", e)
                                }, dragleave: function(e) {
                                    return a.emit("dragleave", e)
                                }, drop: function(e) {
                                    return i(e), a.drop(e), a.emit("drop", e)
                                }, dragend: function(e) {
                                    return a.emit("dragend", e)
                                }}}], this.clickableElement && this.listeners.push({element: this.clickableElement, events: {click: function(e) {
                                return a.clickableElement !== a.element || e.target === a.element || t.elementInside(e.target, a.element.querySelector(".dz-message")) ? a.hiddenFileInput.click() : void 0
                            }}}), this.enable(), this.options.init.call(this)
                }, t.prototype.getFallbackForm = function() {
                    var e, i, n, r;
                    return(e = this.getExistingFallback()) ? e : (n = '<div class="dz-fallback">', this.options.dictFallbackText && (n += "<p>" + this.options.dictFallbackText + "</p>"), n += '<input type="file" name="' + this.options.paramName + '" multiple="multiple" /><button type="submit">Upload!</button></div>', i = t.createElement(n), "FORM" !== this.element.tagName ? (r = t.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), r.appendChild(i)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != r ? r : i)
                }, t.prototype.getExistingFallback = function() {
                    var e, t, i, n, r, s;
                    for (t = function(e) {
                        var t, i, n;
                        for (i = 0, n = e.length; n > i; i++)
                            if (t = e[i], /(^| )fallback($| )/.test(t.className))
                                return t
                    }, s = ["div", "form"], n = 0, r = s.length; r > n; n++)
                        if (i = s[n], e = t(this.element.getElementsByTagName(i)))
                            return e
                }, t.prototype.setupEventListeners = function() {
                    var e, t, i, n, r, s, o;
                    for (s = this.listeners, o = [], n = 0, r = s.length; r > n; n++)
                        e = s[n], o.push(function() {
                            var n, r;
                            n = e.events, r = [];
                            for (t in n)
                                i = n[t], r.push(e.element.addEventListener(t, i, !1));
                            return r
                        }());
                    return o
                }, t.prototype.removeEventListeners = function() {
                    var e, t, i, n, r, s, o;
                    for (s = this.listeners, o = [], n = 0, r = s.length; r > n; n++)
                        e = s[n], o.push(function() {
                            var n, r;
                            n = e.events, r = [];
                            for (t in n)
                                i = n[t], r.push(e.element.removeEventListener(t, i, !1));
                            return r
                        }());
                    return o
                }, t.prototype.disable = function() {
                    return this.clickableElement === this.element && this.element.classList.remove("dz-clickable"), this.removeEventListeners(), this.filesProcessing = [], this.filesQueue = []
                }, t.prototype.enable = function() {
                    return this.clickableElement === this.element && this.element.classList.add("dz-clickable"), this.setupEventListeners()
                }, t.prototype.filesize = function(e) {
                    var t;
                    return e >= 1e11 ? (e /= 1e11, t = "TB") : e >= 1e8 ? (e /= 1e8, t = "GB") : e >= 1e5 ? (e /= 1e5, t = "MB") : e >= 100 ? (e /= 100, t = "KB") : (e = 10 * e, t = "b"), "<strong>" + Math.round(e) / 10 + "</strong> " + t
                }, t.prototype.drop = function(e) {
                    var t;
                    if (e.dataTransfer)
                        return t = e.dataTransfer.files, this.emit("selectedfiles", t), t.length ? this.handleFiles(t) : void 0
                }, t.prototype.handleFiles = function(e) {
                    var t, i, n, r;
                    for (r = [], i = 0, n = e.length; n > i; i++)
                        t = e[i], r.push(this.addFile(t));
                    return r
                }, t.prototype.accept = function(e, i) {
                    return e.size > 1024 * 1024 * this.options.maxFilesize ? i(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : t.isValidMimeType(e.type, this.options.acceptedMimeTypes) ? this.options.accept.call(this, e, i) : i(this.options.dictInvalidFileType)
                }, t.prototype.addFile = function(e) {
                    var t = this;
                    return e.upload = {progress: 0, total: e.size, bytesSent: 0}, this.files.push(e), this.emit("addedfile", e), this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * 1024 * this.options.maxThumbnailFilesize && this.createThumbnail(e), this.accept(e, function(i) {
                        return i ? t.errorProcessing(e, i) : t.options.enqueueForUpload ? (t.filesQueue.push(e), t.processQueue()) : void 0
                    })
                }, t.prototype.removeFile = function(e) {
                    if (e.processing)
                        throw Error("Can't remove file currently processing");
                    return this.files = l(this.files, e), this.filesQueue = l(this.filesQueue, e), this.emit("removedfile", e), 0 === this.files.length ? this.emit("reset") : void 0
                }, t.prototype.removeAllFiles = function() {
                    var e, t, i, n;
                    for (n = this.files.slice(), t = 0, i = n.length; i > t; t++)
                        e = n[t], 0 > d.call(this.filesProcessing, e) && this.removeFile(e);
                    return null
                }, t.prototype.createThumbnail = function(e) {
                    var t, i = this;
                    return t = new FileReader, t.onload = function() {
                        var n;
                        return n = new Image, n.onload = function() {
                            var t, r, s, o, l, a, c, p, d, u;
                            return e.width = n.width, e.height = n.height, s = i.options.resize.call(i, e), null == (l = s.trgWidth) && (s.trgWidth = i.options.thumbnailWidth), null == (a = s.trgHeight) && (s.trgHeight = i.options.thumbnailHeight), t = document.createElement("canvas"), r = t.getContext("2d"), t.width = s.trgWidth, t.height = s.trgHeight, r.drawImage(n, null != (c = s.srcX) ? c : 0, null != (p = s.srcY) ? p : 0, s.srcWidth, s.srcHeight, null != (d = s.trgX) ? d : 0, null != (u = s.trgY) ? u : 0, s.trgWidth, s.trgHeight), o = t.toDataURL("image/png"), i.emit("thumbnail", e, o)
                        }, n.src = t.result
                    }, t.readAsDataURL(e)
                }, t.prototype.processQueue = function() {
                    var e, t, i;
                    for (t = this.options.parallelUploads, i = this.filesProcessing.length, e = i; t > e; ) {
                        if (!this.filesQueue.length)
                            return;
                        this.processFile(this.filesQueue.shift()), e++
                    }
                }, t.prototype.processFile = function(e) {
                    return this.filesProcessing.push(e), e.processing = !0, this.emit("processingfile", e), this.uploadFile(e)
                }, t.prototype.uploadFile = function(e) {
                    var t, i, n, r, s, o, l, a, c, p, d, u, h, m, f, v = this;
                    if (p = new XMLHttpRequest, p.open(this.options.method, this.options.url, !0), a = null, i = function() {
                        return v.errorProcessing(e, a || v.options.dictResponseError.replace("{{statusCode}}", p.status), p)
                    }, p.onload = function(t) {
                        var n;
                        if (a = p.responseText, p.getResponseHeader("content-type") && ~p.getResponseHeader("content-type").indexOf("application/json"))
                            try {
                                a = JSON.parse(a)
                            } catch (r) {
                                t = r, a = "Invalid JSON response from server."
                            }
                        return(n = p.status) >= 200 && 300 > n ? v.finished(e, a, t) : i()
                    }, p.onerror = function() {
                        return i()
                    }, l = null != (h = p.upload) ? h : p, l.onprogress = function(t) {
                        var i;
                        return e.upload = {progress: i, total: t.total, bytesSent: t.loaded}, i = 100 * t.loaded / t.total, v.emit("uploadprogress", e, i, t.loaded)
                    }, p.setRequestHeader("Accept", "application/json"), p.setRequestHeader("Cache-Control", "no-cache"), p.setRequestHeader("X-Requested-With", "XMLHttpRequest"), p.setRequestHeader("X-File-Name", e.name), t = new FormData, this.options.params) {
                        m = this.options.params;
                        for (o in m)
                            c = m[o], t.append(o, c)
                    }
                    if ("FORM" === this.element.tagName)
                        for (f = this.element.querySelectorAll("input, textarea, select, button"), d = 0, u = f.length; u > d; d++)
                            n = f[d], r = n.getAttribute("name"), s = n.getAttribute("type"), (!s || "checkbox" !== s.toLowerCase() || n.checked) && t.append(r, n.value);
                    return this.emit("sending", e, p, t), t.append(this.options.paramName, e), p.send(t)
                }, t.prototype.finished = function(e, t, i) {
                    return this.filesProcessing = l(this.filesProcessing, e), e.processing = !1, this.processQueue(), this.emit("success", e, t, i), this.emit("finished", e, t, i), this.emit("complete", e)
                }, t.prototype.errorProcessing = function(e, t, i) {
                    return this.filesProcessing = l(this.filesProcessing, e), e.processing = !1, this.processQueue(), this.emit("error", e, t, i), this.emit("complete", e)
                }, t
            }(n), e.version = "3.1.0", e.options = {}, e.optionsForElement = function(t) {
                return t.id ? e.options[r(t.id)] : void 0
            }, e.instances = [], e.forElement = function(e) {
                var t;
                return"string" == typeof e && (e = document.querySelector(e)), null != (t = e.dropzone) ? t : null
            }, e.autoDiscover = !0, e.discover = function() {
                var t, i, n, r, s, o;
                if (e.autoDiscover) {
                    for (document.querySelectorAll?n = document.querySelectorAll(".dropzone"):(n = [], t = function(e) {
                        var t, i, r, s;
                        for (s = [], i = 0, r = e.length; r > i; i++)
                            t = e[i], /(^| )dropzone($| )/.test(t.className) ? s.push(n.push(t)) : s.push(void 0);
                        return s
                    }, t(document.getElementsByTagName("div")), t(document.getElementsByTagName("form"))), o = [], r = 0, s = n.length; s > r; r++)
                        i = n[r], e.optionsForElement(i) !== !1 ? o.push(new e(i)) : o.push(void 0);
                    return o
                }
            }, e.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], e.isBrowserSupported = function() {
                var t, i, n, r, s;
                if (t = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                    if ("classList"in document.createElement("a"))
                        for (s = e.blacklistedBrowsers, n = 0, r = s.length; r > n; n++)
                            i = s[n], i.test(navigator.userAgent) && (t = !1);
                    else
                        t = !1;
                else
                    t = !1;
                return t
            }, l = function(e, t) {
                var i, n, r, s;
                for (s = [], n = 0, r = e.length; r > n; n++)
                    i = e[n], i !== t && s.push(i);
                return s
            }, r = function(e) {
                return e.replace(/[\-_](\w)/g, function(e) {
                    return e[1].toUpperCase()
                })
            }, e.createElement = function(e) {
                var t;
                return t = document.createElement("div"), t.innerHTML = e, t.childNodes[0]
            }, e.elementInside = function(e, t) {
                if (e === t)
                    return!0;
                for (; e = e.parentNode; )
                    if (e === t)
                        return!0;
                return!1
            }, e.isValidMimeType = function(e, t) {
                var i, n, r, s;
                if (!t)
                    return!0;
                for (t = t.split(","), i = e.replace(/\/.*$/, ""), r = 0, s = t.length; s > r; r++)
                    if (n = t[r], n = n.trim(), /\/\*$/.test(n)) {
                        if (i === n.replace(/\/.*$/, ""))
                            return!0
                    } else if (e === n)
                        return!0;
                return!1
            }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(t) {
                return this.each(function() {
                    return new e(this, t)
                })
            }), i !== void 0 && null !== i ? i.exports = e : window.Dropzone = e, s = function(e, t) {
                var i, n, r, s, o, l, a, c, p;
                if (r = !1, p = !0, n = e.document, c = n.documentElement, i = n.addEventListener ? "addEventListener" : "attachEvent", a = n.addEventListener ? "removeEventListener" : "detachEvent", l = n.addEventListener ? "" : "on", s = function(i) {
                    return"readystatechange" !== i.type || "complete" === n.readyState ? (("load" === i.type ? e : n)[a](l + i.type, s, !1), !r && (r = !0) ? t.call(e, i.type || i) : void 0) : void 0
                }, o = function() {
                    var e;
                    try {
                        c.doScroll("left")
                    } catch (t) {
                        return e = t, setTimeout(o, 50), void 0
                    }
                    return s("poll")
                }, "complete" !== n.readyState) {
                    if (n.createEventObject && c.doScroll) {
                        try {
                            p = !e.frameElement
                        } catch (d) {
                        }
                        p && o()
                    }
                    return n[i](l + "DOMContentLoaded", s, !1), n[i](l + "readystatechange", s, !1), e[i](l + "load", s, !1)
                }
            }, s(window, e.discover)
        }).call(this)
    }), e.alias("component-emitter/index.js", "dropzone/deps/emitter/index.js"), "object" == typeof exports ? module.exports = e("dropzone") : "function" == typeof define && define.amd ? define(function() {
        return e("dropzone")
    }) : window.Dropzone = e("dropzone")
})();

/* Chosen, a Select Box Enhancer for jQuery and Protoype
 * by Patrick Filler for Harvest, http://getharvest.com
 *
 * Version 0.9.12
 * Full source at https://github.com/harvesthq/chosen
 * Copyright (c) 2011 Harvest http://getharvest.com
 *
 * MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
 */
(function() {
    var e;
    e = function() {
        function e() {
            this.options_index = 0;
            this.parsed = []
        }
        e.prototype.add_node = function(e) {
            if (e.nodeName.toUpperCase() === "OPTGROUP") {
                return this.add_group(e)
            } else {
                return this.add_option(e)
            }
        };
        e.prototype.add_group = function(e) {
            var t, n, r, i, s, o;
            t = this.parsed.length;
            this.parsed.push({array_index: t, group: true, label: e.label, children: 0, disabled: e.disabled});
            s = e.childNodes;
            o = [];
            for (r = 0, i = s.length; r < i; r++) {
                n = s[r];
                o.push(this.add_option(n, t, e.disabled))
            }
            return o
        };
        e.prototype.add_option = function(e, t, n) {
            if (e.nodeName.toUpperCase() === "OPTION") {
                if (e.text !== "") {
                    if (t != null) {
                        this.parsed[t].children += 1
                    }
                    this.parsed.push({array_index: this.parsed.length, options_index: this.options_index, value: e.value, text: e.text, html: e.innerHTML, selected: e.selected, disabled: n === true ? n : e.disabled, group_array_index: t, classes: e.className, style: e.style.cssText})
                } else {
                    this.parsed.push({array_index: this.parsed.length, options_index: this.options_index, empty: true})
                }
                return this.options_index += 1
            }
        };
        return e
    }();
    e.select_to_array = function(t) {
        var n, r, i, s, o;
        r = new e;
        o = t.childNodes;
        for (i = 0, s = o.length; i < s; i++) {
            n = o[i];
            r.add_node(n)
        }
        return r.parsed
    };
    this.SelectParser = e
}).call(this);
(function() {
    var e, t;
    t = this;
    e = function() {
        function e(e, t) {
            this.form_field = e;
            this.options = t != null ? t : {};
            this.is_multiple = this.form_field.multiple;
            this.set_default_text();
            this.set_default_values();
            this.setup();
            this.set_up_html();
            this.register_observers();
            this.finish_setup()
        }
        e.prototype.set_default_values = function() {
            var e = this;
            this.click_test_action = function(t) {
                return e.test_active_click(t)
            };
            this.activate_action = function(t) {
                return e.activate_field(t)
            };
            this.active_field = false;
            this.mouse_on_container = false;
            this.results_showing = false;
            this.result_highlighted = null;
            this.result_single_selected = null;
            this.allow_single_deselect = this.options.allow_single_deselect != null && this.form_field.options[0] != null && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
            this.disable_search_threshold = this.options.disable_search_threshold || 0;
            this.disable_search = this.options.disable_search || false;
            this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
            this.search_contains = this.options.search_contains || false;
            this.choices = 0;
            this.single_backstroke_delete = this.options.single_backstroke_delete || false;
            this.max_selected_options = this.options.max_selected_options || Infinity;
            return this.inherit_select_classes = this.options.inherit_select_classes || false
        };
        e.prototype.set_default_text = function() {
            if (this.form_field.getAttribute("data-placeholder")) {
                this.default_text = this.form_field.getAttribute("data-placeholder")
            } else if (this.is_multiple) {
                this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || "Select Some Options"
            } else {
                this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || "Select an Option"
            }
            return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || "No results match"
        };
        e.prototype.mouse_enter = function() {
            return this.mouse_on_container = true
        };
        e.prototype.mouse_leave = function() {
            return this.mouse_on_container = false
        };
        e.prototype.input_focus = function(e) {
            var t = this;
            if (this.is_multiple) {
                if (!this.active_field) {
                    return setTimeout(function() {
                        return t.container_mousedown()
                    }, 50)
                }
            } else {
                if (!this.active_field) {
                    return this.activate_field()
                }
            }
        };
        e.prototype.input_blur = function(e) {
            var t = this;
            if (!this.mouse_on_container) {
                this.active_field = false;
                return setTimeout(function() {
                    return t.blur_test()
                }, 100)
            }
        };
        e.prototype.result_add_option = function(e) {
            var t, n;
            if (!e.disabled) {
                e.dom_id = this.container_id + "_o_" + e.array_index;
                t = e.selected && this.is_multiple ? [] : ["active-result"];
                if (e.selected) {
                    t.push("result-selected")
                }
                if (e.group_array_index != null) {
                    t.push("group-option")
                }
                if (e.classes !== "") {
                    t.push(e.classes)
                }
                n = e.style.cssText !== "" ? ' style="' + e.style + '"' : "";
                return'<li id="' + e.dom_id + '" class="' + t.join(" ") + '"' + n + ">" + e.html + "</li>"
            } else {
                return""
            }
        };
        e.prototype.results_update_field = function() {
            if (!this.is_multiple) {
                this.results_reset_cleanup()
            }
            this.result_clear_highlight();
            this.result_single_selected = null;
            return this.results_build()
        };
        e.prototype.results_toggle = function() {
            if (this.results_showing) {
                return this.results_hide()
            } else {
                return this.results_show()
            }
        };
        e.prototype.results_search = function(e) {
            if (this.results_showing) {
                return this.winnow_results()
            } else {
                return this.results_show()
            }
        };
        e.prototype.keyup_checker = function(e) {
            var t, n;
            t = (n = e.which) != null ? n : e.keyCode;
            this.search_field_scale();
            switch (t) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) {
                        return this.keydown_backstroke()
                    } else if (!this.pending_backstroke) {
                        this.result_clear_highlight();
                        return this.results_search()
                    }
                    break;
                case 13:
                    e.preventDefault();
                    if (this.results_showing) {
                        return this.result_select(e)
                    }
                    break;
                case 27:
                    if (this.results_showing) {
                        this.results_hide()
                    }
                    return true;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
                }
        };
        e.prototype.generate_field_id = function() {
            var e;
            e = this.generate_random_id();
            this.form_field.id = e;
            return e
        };
        e.prototype.generate_random_char = function() {
            var e, t, n;
            e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            n = Math.floor(Math.random() * e.length);
            return t = e.substring(n, n + 1)
        };
        return e
    }();
    t.AbstractChosen = e
}).call(this);
(function() {
    var e, t, n, r, i = {}.hasOwnProperty, s = function(e, t) {
        function r() {
            this.constructor = e
        }
        for (var n in t) {
            if (i.call(t, n))
                e[n] = t[n]
        }
        r.prototype = t.prototype;
        e.prototype = new r;
        e.__super__ = t.prototype;
        return e
    };
    r = this;
    e = jQuery;
    e.fn.extend({chosen: function(n) {
            var r, i, s;
            s = navigator.userAgent.toLowerCase();
            i = /(msie) ([\w.]+)/.exec(s) || [];
            r = {name: i[1] || "", version: i[2] || "0"};
            if (r.name === "msie" && (r.version === "6.0" || r.version === "7.0" && document.documentMode === 7)) {
                return this
            }
            return this.each(function(r) {
                var i;
                i = e(this);
                if (!i.hasClass("chzn-done")) {
                    return i.data("chosen", new t(this, n))
                }
            })
        }});
    t = function(t) {
        function i() {
            i.__super__.constructor.apply(this, arguments)
        }
        s(i, t);
        i.prototype.setup = function() {
            this.form_field_jq = e(this.form_field);
            this.current_value = this.form_field_jq.val();
            return this.is_rtl = this.form_field_jq.hasClass("chzn-rtl")
        };
        i.prototype.finish_setup = function() {
            return this.form_field_jq.addClass("chzn-done")
        };
        i.prototype.set_up_html = function() {
            var t, r, i, s, o, u;
            this.container_id = this.form_field.id.length ? this.form_field.id.replace(/[^\w]/g, "_") : this.generate_field_id();
            this.container_id += "_chzn";
            t = ["chzn-container"];
            t.push("chzn-container-" + (this.is_multiple ? "multi" : "single"));
            if (this.inherit_select_classes && this.form_field.className) {
                t.push(this.form_field.className)
            }
            if (this.is_rtl) {
                t.push("chzn-rtl")
            }
            this.f_width = this.form_field_jq.outerWidth();
            i = {id: this.container_id, "class": t.join(" "), style: "width: " + this.f_width + "px;", title: this.form_field.title};
            r = e("<div />", i);
            if (this.is_multiple) {
                r.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>')
            } else {
                r.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>')
            }
            this.form_field_jq.hide().after(r);
            this.container = e("#" + this.container_id);
            this.dropdown = this.container.find("div.chzn-drop").first();
            s = this.container.height();
            o = this.f_width - n(this.dropdown);
            this.dropdown.css({width: o + "px", top: s + "px"});
            this.search_field = this.container.find("input").first();
            this.search_results = this.container.find("ul.chzn-results").first();
            this.search_field_scale();
            this.search_no_results = this.container.find("li.no-results").first();
            if (this.is_multiple) {
                this.search_choices = this.container.find("ul.chzn-choices").first();
                this.search_container = this.container.find("li.search-field").first()
            } else {
                this.search_container = this.container.find("div.chzn-search").first();
                this.selected_item = this.container.find(".chzn-single").first();
                u = o - n(this.search_container) - n(this.search_field);
                this.search_field.css({width: u + "px"})
            }
            this.results_build();
            this.set_tab_index();
            return this.form_field_jq.trigger("liszt:ready", {chosen: this})
        };
        i.prototype.register_observers = function() {
            var e = this;
            this.container.mousedown(function(t) {
                e.container_mousedown(t)
            });
            this.container.mouseup(function(t) {
                e.container_mouseup(t)
            });
            this.container.mouseenter(function(t) {
                e.mouse_enter(t)
            });
            this.container.mouseleave(function(t) {
                e.mouse_leave(t)
            });
            this.search_results.mouseup(function(t) {
                e.search_results_mouseup(t)
            });
            this.search_results.mouseover(function(t) {
                e.search_results_mouseover(t)
            });
            this.search_results.mouseout(function(t) {
                e.search_results_mouseout(t)
            });
            this.form_field_jq.bind("liszt:updated", function(t) {
                e.results_update_field(t)
            });
            this.form_field_jq.bind("liszt:activate", function(t) {
                e.activate_field(t)
            });
            this.form_field_jq.bind("liszt:open", function(t) {
                e.container_mousedown(t)
            });
            this.search_field.blur(function(t) {
                e.input_blur(t)
            });
            this.search_field.keyup(function(t) {
                e.keyup_checker(t)
            });
            this.search_field.keydown(function(t) {
                e.keydown_checker(t)
            });
            this.search_field.focus(function(t) {
                e.input_focus(t)
            });
            if (this.is_multiple) {
                return this.search_choices.click(function(t) {
                    e.choices_click(t)
                })
            } else {
                return this.container.click(function(e) {
                    e.preventDefault()
                })
            }
        };
        i.prototype.search_field_disabled = function() {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled) {
                this.container.addClass("chzn-disabled");
                this.search_field[0].disabled = true;
                if (!this.is_multiple) {
                    this.selected_item.unbind("focus", this.activate_action)
                }
                return this.close_field()
            } else {
                this.container.removeClass("chzn-disabled");
                this.search_field[0].disabled = false;
                if (!this.is_multiple) {
                    return this.selected_item.bind("focus", this.activate_action)
                }
            }
        };
        i.prototype.container_mousedown = function(t) {
            var n;
            if (!this.is_disabled) {
                n = t != null ? e(t.target).hasClass("search-choice-close") : false;
                if (t && t.type === "mousedown" && !this.results_showing) {
                    t.preventDefault()
                }
                if (!this.pending_destroy_click && !n) {
                    if (!this.active_field) {
                        if (this.is_multiple) {
                            this.search_field.val("")
                        }
                        e(document).click(this.click_test_action);
                        this.results_show()
                    } else if (!this.is_multiple && t && (e(t.target)[0] === this.selected_item[0] || e(t.target).parents("a.chzn-single").length)) {
                        t.preventDefault();
                        this.results_toggle()
                    }
                    return this.activate_field()
                } else {
                    return this.pending_destroy_click = false
                }
            }
        };
        i.prototype.container_mouseup = function(e) {
            if (e.target.nodeName === "ABBR" && !this.is_disabled) {
                return this.results_reset(e)
            }
        };
        i.prototype.blur_test = function(e) {
            if (!this.active_field && this.container.hasClass("chzn-container-active")) {
                return this.close_field()
            }
        };
        i.prototype.close_field = function() {
            e(document).unbind("click", this.click_test_action);
            this.active_field = false;
            this.results_hide();
            this.container.removeClass("chzn-container-active");
            this.winnow_results_clear();
            this.clear_backstroke();
            this.show_search_field_default();
            return this.search_field_scale()
        };
        i.prototype.activate_field = function() {
            this.container.addClass("chzn-container-active");
            this.active_field = true;
            this.search_field.val(this.search_field.val());
            return this.search_field.focus()
        };
        i.prototype.test_active_click = function(t) {
            if (e(t.target).parents("#" + this.container_id).length) {
                return this.active_field = true
            } else {
                return this.close_field()
            }
        };
        i.prototype.results_build = function() {
            var e, t, n, i, s;
            this.parsing = true;
            this.results_data = r.SelectParser.select_to_array(this.form_field);
            if (this.is_multiple && this.choices > 0) {
                this.search_choices.find("li.search-choice").remove();
                this.choices = 0
            } else if (!this.is_multiple) {
                this.selected_item.addClass("chzn-default").find("span").text(this.default_text);
                if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
                    this.container.addClass("chzn-container-single-nosearch")
                } else {
                    this.container.removeClass("chzn-container-single-nosearch")
                }
            }
            e = "";
            s = this.results_data;
            for (n = 0, i = s.length; n < i; n++) {
                t = s[n];
                if (t.group) {
                    e += this.result_add_group(t)
                } else if (!t.empty) {
                    e += this.result_add_option(t);
                    if (t.selected && this.is_multiple) {
                        this.choice_build(t)
                    } else if (t.selected && !this.is_multiple) {
                        this.selected_item.removeClass("chzn-default").find("span").text(t.text);
                        if (this.allow_single_deselect) {
                            this.single_deselect_control_build()
                        }
                    }
                }
            }
            this.search_field_disabled();
            this.show_search_field_default();
            this.search_field_scale();
            this.search_results.html(e);
            return this.parsing = false
        };
        i.prototype.result_add_group = function(t) {
            if (!t.disabled) {
                t.dom_id = this.container_id + "_g_" + t.array_index;
                return'<li id="' + t.dom_id + '" class="group-result">' + e("<div />").text(t.label).html() + "</li>"
            } else {
                return""
            }
        };
        i.prototype.result_do_highlight = function(e) {
            var t, n, r, i, s;
            if (e.length) {
                this.result_clear_highlight();
                this.result_highlight = e;
                this.result_highlight.addClass("highlighted");
                r = parseInt(this.search_results.css("maxHeight"), 10);
                s = this.search_results.scrollTop();
                i = r + s;
                n = this.result_highlight.position().top + this.search_results.scrollTop();
                t = n + this.result_highlight.outerHeight();
                if (t >= i) {
                    return this.search_results.scrollTop(t - r > 0 ? t - r : 0)
                } else if (n < s) {
                    return this.search_results.scrollTop(n)
                }
            }
        };
        i.prototype.result_clear_highlight = function() {
            if (this.result_highlight) {
                this.result_highlight.removeClass("highlighted")
            }
            return this.result_highlight = null
        };
        i.prototype.results_show = function() {
            var e;
            if (!this.is_multiple) {
                this.selected_item.addClass("chzn-single-with-drop");
                if (this.result_single_selected) {
                    this.result_do_highlight(this.result_single_selected)
                }
            } else if (this.max_selected_options <= this.choices) {
                this.form_field_jq.trigger("liszt:maxselected", {chosen: this});
                return false
            }
            e = this.is_multiple ? this.container.height() : this.container.height() - 1;
            this.form_field_jq.trigger("liszt:showing_dropdown", {chosen: this});
            this.dropdown.css({top: e + "px", left: 0});
            this.results_showing = true;
            this.search_field.focus();
            this.search_field.val(this.search_field.val());
            return this.winnow_results()
        };
        i.prototype.results_hide = function() {
            if (!this.is_multiple) {
                this.selected_item.removeClass("chzn-single-with-drop")
            }
            this.result_clear_highlight();
            this.form_field_jq.trigger("liszt:hiding_dropdown", {chosen: this});
            this.dropdown.css({left: "-9000px"});
            return this.results_showing = false
        };
        i.prototype.set_tab_index = function(e) {
            var t;
            if (this.form_field_jq.attr("tabindex")) {
                t = this.form_field_jq.attr("tabindex");
                this.form_field_jq.attr("tabindex", -1);
                return this.search_field.attr("tabindex", t)
            }
        };
        i.prototype.show_search_field_default = function() {
            if (this.is_multiple && this.choices < 1 && !this.active_field) {
                this.search_field.val(this.default_text);
                return this.search_field.addClass("default")
            } else {
                this.search_field.val("");
                return this.search_field.removeClass("default")
            }
        };
        i.prototype.search_results_mouseup = function(t) {
            var n;
            n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first();
            if (n.length) {
                this.result_highlight = n;
                this.result_select(t);
                return this.search_field.focus()
            }
        };
        i.prototype.search_results_mouseover = function(t) {
            var n;
            n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first();
            if (n) {
                return this.result_do_highlight(n)
            }
        };
        i.prototype.search_results_mouseout = function(t) {
            if (e(t.target).hasClass("active-result" || e(t.target).parents(".active-result").first())) {
                return this.result_clear_highlight()
            }
        };
        i.prototype.choices_click = function(t) {
            t.preventDefault();
            if (this.active_field && !e(t.target).hasClass("search-choice" || e(t.target).parents(".search-choice").first) && !this.results_showing) {
                return this.results_show()
            }
        };
        i.prototype.choice_build = function(t) {
            var n, r, i, s = this;
            if (this.is_multiple && this.max_selected_options <= this.choices) {
                this.form_field_jq.trigger("liszt:maxselected", {chosen: this});
                return false
            }
            n = this.container_id + "_c_" + t.array_index;
            this.choices += 1;
            if (t.disabled) {
                r = '<li class="search-choice search-choice-disabled" id="' + n + '"><span>' + t.html + "</span></li>"
            } else {
                r = '<li class="search-choice" id="' + n + '"><span>' + t.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + t.array_index + '"></a></li>'
            }
            this.search_container.before(r);
            i = e("#" + n).find("a").first();
            return i.click(function(e) {
                return s.choice_destroy_link_click(e)
            })
        };
        i.prototype.choice_destroy_link_click = function(t) {
            t.preventDefault();
            if (!this.is_disabled) {
                this.pending_destroy_click = true;
                return this.choice_destroy(e(t.target))
            } else {
                return t.stopPropagation
            }
        };
        i.prototype.choice_destroy = function(e) {
            if (this.result_deselect(e.attr("rel"))) {
                this.choices -= 1;
                this.show_search_field_default();
                if (this.is_multiple && this.choices > 0 && this.search_field.val().length < 1) {
                    this.results_hide()
                }
                e.parents("li").first().remove();
                return this.search_field_scale()
            }
        };
        i.prototype.results_reset = function() {
            this.form_field.options[0].selected = true;
            this.selected_item.find("span").text(this.default_text);
            if (!this.is_multiple) {
                this.selected_item.addClass("chzn-default")
            }
            this.show_search_field_default();
            this.results_reset_cleanup();
            this.form_field_jq.trigger("change");
            if (this.active_field) {
                return this.results_hide()
            }
        };
        i.prototype.results_reset_cleanup = function() {
            this.current_value = this.form_field_jq.val();
            return this.selected_item.find("abbr").remove()
        };
        i.prototype.result_select = function(e) {
            var t, n, r, i;
            if (this.result_highlight) {
                t = this.result_highlight;
                n = t.attr("id");
                this.result_clear_highlight();
                if (this.is_multiple) {
                    this.result_deactivate(t)
                } else {
                    this.search_results.find(".result-selected").removeClass("result-selected");
                    this.result_single_selected = t;
                    this.selected_item.removeClass("chzn-default")
                }
                t.addClass("result-selected");
                i = n.substr(n.lastIndexOf("_") + 1);
                r = this.results_data[i];
                r.selected = true;
                this.form_field.options[r.options_index].selected = true;
                if (this.is_multiple) {
                    this.choice_build(r)
                } else {
                    this.selected_item.find("span").first().text(r.text);
                    if (this.allow_single_deselect) {
                        this.single_deselect_control_build()
                    }
                }
                if (!((e.metaKey || e.ctrlKey) && this.is_multiple)) {
                    this.results_hide()
                }
                this.search_field.val("");
                if (this.is_multiple || this.form_field_jq.val() !== this.current_value) {
                    this.form_field_jq.trigger("change", {selected: this.form_field.options[r.options_index].value})
                }
                this.current_value = this.form_field_jq.val();
                return this.search_field_scale()
            }
        };
        i.prototype.result_activate = function(e) {
            return e.addClass("active-result")
        };
        i.prototype.result_deactivate = function(e) {
            return e.removeClass("active-result")
        };
        i.prototype.result_deselect = function(t) {
            var n, r;
            r = this.results_data[t];
            if (!this.form_field.options[r.options_index].disabled) {
                r.selected = false;
                this.form_field.options[r.options_index].selected = false;
                n = e("#" + this.container_id + "_o_" + t);
                n.removeClass("result-selected").addClass("active-result").show();
                this.result_clear_highlight();
                this.winnow_results();
                this.form_field_jq.trigger("change", {deselected: this.form_field.options[r.options_index].value});
                this.search_field_scale();
                return true
            } else {
                return false
            }
        };
        i.prototype.single_deselect_control_build = function() {
            if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) {
                return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')
            }
        };
        i.prototype.winnow_results = function() {
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y;
            this.no_results_clear();
            f = 0;
            l = this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html();
            o = this.search_contains ? "" : "^";
            s = new RegExp(o + l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
            p = new RegExp(l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
            y = this.results_data;
            for (d = 0, m = y.length; d < m; d++) {
                n = y[d];
                if (!n.disabled && !n.empty) {
                    if (n.group) {
                        e("#" + n.dom_id).css("display", "none")
                    } else if (!(this.is_multiple && n.selected)) {
                        t = false;
                        a = n.dom_id;
                        u = e("#" + a);
                        if (s.test(n.html)) {
                            t = true;
                            f += 1
                        } else if (this.enable_split_word_search && (n.html.indexOf(" ") >= 0 || n.html.indexOf("[") === 0)) {
                            i = n.html.replace(/\[|\]/g, "").split(" ");
                            if (i.length) {
                                for (v = 0, g = i.length; v < g; v++) {
                                    r = i[v];
                                    if (s.test(r)) {
                                        t = true;
                                        f += 1
                                    }
                                }
                            }
                        }
                        if (t) {
                            if (l.length) {
                                c = n.html.search(p);
                                h = n.html.substr(0, c + l.length) + "</em>" + n.html.substr(c + l.length);
                                h = h.substr(0, c) + "<em>" + h.substr(c)
                            } else {
                                h = n.html
                            }
                            u.html(h);
                            this.result_activate(u);
                            if (n.group_array_index != null) {
                                e("#" + this.results_data[n.group_array_index].dom_id).css("display", "list-item")
                            }
                        } else {
                            if (this.result_highlight && a === this.result_highlight.attr("id")) {
                                this.result_clear_highlight()
                            }
                            this.result_deactivate(u)
                        }
                    }
                }
            }
            if (f < 1 && l.length) {
                return this.no_results(l)
            } else {
                return this.winnow_results_set_highlight()
            }
        };
        i.prototype.winnow_results_clear = function() {
            var t, n, r, i, s;
            this.search_field.val("");
            n = this.search_results.find("li");
            s = [];
            for (r = 0, i = n.length; r < i; r++) {
                t = n[r];
                t = e(t);
                if (t.hasClass("group-result")) {
                    s.push(t.css("display", "auto"))
                } else if (!this.is_multiple || !t.hasClass("result-selected")) {
                    s.push(this.result_activate(t))
                } else {
                    s.push(void 0)
                }
            }
            return s
        };
        i.prototype.winnow_results_set_highlight = function() {
            var e, t;
            if (!this.result_highlight) {
                t = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
                e = t.length ? t.first() : this.search_results.find(".active-result").first();
                if (e != null) {
                    return this.result_do_highlight(e)
                }
            }
        };
        i.prototype.no_results = function(t) {
            var n;
            n = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
            n.find("span").first().html(t);
            return this.search_results.append(n)
        };
        i.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        };
        i.prototype.keydown_arrow = function() {
            var t, n;
            if (!this.result_highlight) {
                t = this.search_results.find("li.active-result").first();
                if (t) {
                    this.result_do_highlight(e(t))
                }
            } else if (this.results_showing) {
                n = this.result_highlight.nextAll("li.active-result").first();
                if (n) {
                    this.result_do_highlight(n)
                }
            }
            if (!this.results_showing) {
                return this.results_show()
            }
        };
        i.prototype.keyup_arrow = function() {
            var e;
            if (!this.results_showing && !this.is_multiple) {
                return this.results_show()
            } else if (this.result_highlight) {
                e = this.result_highlight.prevAll("li.active-result");
                if (e.length) {
                    return this.result_do_highlight(e.first())
                } else {
                    if (this.choices > 0) {
                        this.results_hide()
                    }
                    return this.result_clear_highlight()
                }
            }
        };
        i.prototype.keydown_backstroke = function() {
            var e;
            if (this.pending_backstroke) {
                this.choice_destroy(this.pending_backstroke.find("a").first());
                return this.clear_backstroke()
            } else {
                e = this.search_container.siblings("li.search-choice").last();
                if (e.length && !e.hasClass("search-choice-disabled")) {
                    this.pending_backstroke = e;
                    if (this.single_backstroke_delete) {
                        return this.keydown_backstroke()
                    } else {
                        return this.pending_backstroke.addClass("search-choice-focus")
                    }
                }
            }
        };
        i.prototype.clear_backstroke = function() {
            if (this.pending_backstroke) {
                this.pending_backstroke.removeClass("search-choice-focus")
            }
            return this.pending_backstroke = null
        };
        i.prototype.keydown_checker = function(e) {
            var t, n;
            t = (n = e.which) != null ? n : e.keyCode;
            this.search_field_scale();
            if (t !== 8 && this.pending_backstroke) {
                this.clear_backstroke()
            }
            switch (t) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    if (this.results_showing && !this.is_multiple) {
                        this.result_select(e)
                    }
                    this.mouse_on_container = false;
                    break;
                case 13:
                    e.preventDefault();
                    break;
                case 38:
                    e.preventDefault();
                    this.keyup_arrow();
                    break;
                case 40:
                    this.keydown_arrow();
                    break
                }
        };
        i.prototype.search_field_scale = function() {
            var t, n, r, i, s, o, u, a, f;
            if (this.is_multiple) {
                r = 0;
                u = 0;
                s = "position:absolute; left: -1000px; top: -1000px; display:none;";
                o = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
                for (a = 0, f = o.length; a < f; a++) {
                    i = o[a];
                    s += i + ":" + this.search_field.css(i) + ";"
                }
                n = e("<div />", {style: s});
                n.text(this.search_field.val());
                e("body").append(n);
                u = n.width() + 25;
                n.remove();
                if (u > this.f_width - 10) {
                    u = this.f_width - 10
                }
                this.search_field.css({width: u + "px"});
                t = this.container.height();
                return this.dropdown.css({top: t + "px"})
            }
        };
        i.prototype.generate_random_id = function() {
            var t;
            t = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
            while (e("#" + t).length > 0) {
                t += this.generate_random_char()
            }
            return t
        };
        return i
    }(AbstractChosen);
    r.Chosen = t;
    n = function(e) {
        var t;
        return t = e.outerWidth() - e.width()
    };
    r.get_side_border_padding = n
}).call(this);

/* retina.js, a high-resolution image swapper (http://retinajs.com), v0.0.2 */
(function() {
    function t(e) {
        this.path = e;
        var t = this.path.split("."), n = t.slice(0, t.length - 1).join("."), r = t[t.length - 1];
        this.at_2x_path = n + "@2x." + r
    }
    function n(e) {
        this.el = e, this.path = new t(this.el.getAttribute("src"));
        var n = this;
        this.path.check_2x_variant(function(e) {
            e && n.swap()
        })
    }
    var e = typeof exports == "undefined" ? window : exports;
    e.RetinaImagePath = t, t.confirmed_paths = [], t.prototype.is_external = function() {
        return!!this.path.match(/^https?\:/i) && !this.path.match("//" + document.domain)
    }, t.prototype.check_2x_variant = function(e) {
        var n, r = this;
        if (this.is_external())
            return e(!1);
        if (this.at_2x_path in t.confirmed_paths)
            return e(!0);
        n = new XMLHttpRequest, n.open("HEAD", this.at_2x_path), n.onreadystatechange = function() {
            return n.readyState != 4 ? e(!1) : n.status >= 200 && n.status <= 399 ? (t.confirmed_paths.push(r.at_2x_path), e(!0)) : e(!1)
        }, n.send()
    }, e.RetinaImage = n, n.prototype.swap = function(e) {
        function n() {
            t.el.complete ? (t.el.setAttribute("width", t.el.offsetWidth), t.el.setAttribute("height", t.el.offsetHeight), t.el.setAttribute("src", e)) : setTimeout(n, 5)
        }
        typeof e == "undefined" && (e = this.path.at_2x_path);
        var t = this;
        n()
    }, e.devicePixelRatio > 1 && (window.onload = function() {
        var e = document.getElementsByTagName("img"), t = [], r, i;
        for (r = 0; r < e.length; r++)
            i = e[r], t.push(new n(i))
    })
})();

/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else {
        e(jQuery)
    }
})(function(e) {
    function n(e) {
        return e
    }
    function r(e) {
        return decodeURIComponent(e.replace(t, " "))
    }
    function i(e) {
        if (e.indexOf('"') === 0) {
            e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            return s.json ? JSON.parse(e) : e
        } catch (t) {
        }
    }
    var t = /\+/g;
    var s = e.cookie = function(t, o, u) {
        if (o !== undefined) {
            u = e.extend({}, s.defaults, u);
            if (typeof u.expires === "number") {
                var a = u.expires, f = u.expires = new Date;
                f.setDate(f.getDate() + a)
            }
            o = s.json ? JSON.stringify(o) : String(o);
            return document.cookie = [s.raw ? t : encodeURIComponent(t), "=", s.raw ? o : encodeURIComponent(o), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
        }
        var l = s.raw ? n : r;
        var c = document.cookie.split("; ");
        var h = t ? undefined : {};
        for (var p = 0, d = c.length; p < d; p++) {
            var v = c[p].split("=");
            var m = l(v.shift());
            var g = l(v.join("="));
            if (t && t === m) {
                h = i(g);
                break
            }
            if (!t) {
                h[m] = i(g)
            }
        }
        return h
    };
    s.defaults = {};
    e.removeCookie = function(t, n) {
        if (e.cookie(t) !== undefined) {
            e.cookie(t, "", e.extend(n, {expires: -1}));
            return true
        }
        return false
    }
});

/*!
 * jQVMap Version 1.0
 *
 * http://jqvmap.com
 *
 * Copyright 2012, Peter Schmalfeldt <manifestinteractive@gmail.com>
 * Copyright 2011-2012, Kirill Lebedev
 * Licensed under the MIT license.
 *
 * Fork Me @ https://github.com/manifestinteractive/jqvmap
 */
(function($) {
    var apiParams = {colors: 1, values: 1, backgroundColor: 1, scaleColors: 1, normalizeFunction: 1, enableZoom: 1, showTooltip: 1, borderColor: 1, borderWidth: 1, borderOpacity: 1, selectedRegions: 1, multiSelectRegion: 1};
    var apiEvents = {onLabelShow: 'labelShow', onRegionOver: 'regionMouseOver', onRegionOut: 'regionMouseOut', onRegionClick: 'regionClick', onRegionSelect: 'regionSelect', onRegionDeselect: 'regionDeselect'};
    $.fn.vectorMap = function(options) {
        var defaultParams = {map: 'world_en', backgroundColor: '#fff', color: '#bbb', hoverColor: '#eee', selectedColor: '#db4a39', scaleColors: ['#dbb4af', '#db4a39'], normalizeFunction: 'polynomial', enableZoom: true, showTooltip: true, borderColor: '#f9f9f9', borderWidth: 1, borderOpacity: 1, selectedRegions: null, multiSelectRegion: false}, map = this.data('mapObject');
        if (options === 'addMap') {
            WorldMap.maps[arguments[1]] = arguments[2]
        } else if (options === 'set' && apiParams[arguments[1]]) {
            map['set' + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(map, Array.prototype.slice.call(arguments, 2))
        } else if (typeof options === 'string' && typeof map[options] === 'function') {
            return map[options].apply(map, Array.prototype.slice.call(arguments, 1))
        } else {
            $.extend(defaultParams, options);
            defaultParams.container = this;
            this.css({position: 'relative', overflow: 'hidden'});
            map = new WorldMap(defaultParams);
            this.data('mapObject', map);
            for (var e in apiEvents) {
                if (defaultParams[e]) {
                    this.bind(apiEvents[e] + '.jqvmap', defaultParams[e])
                }
            }
        }
    };
    var VectorCanvas = function(width, height, params) {
        this.mode = window.SVGAngle ? 'svg' : 'vml';
        this.params = params;
        if (this.mode == 'svg') {
            this.createSvgNode = function(nodeName) {
                return document.createElementNS(this.svgns, nodeName)
            }
        } else {
            try {
                if (!document.namespaces.rvml) {
                    document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml")
                }
                this.createVmlNode = function(tagName) {
                    return document.createElement('<rvml:' + tagName + ' class="rvml">')
                }
            } catch (e) {
                this.createVmlNode = function(tagName) {
                    return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                }
            }
            document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)")
        }
        if (this.mode == 'svg') {
            this.canvas = this.createSvgNode('svg')
        } else {
            this.canvas = this.createVmlNode('group');
            this.canvas.style.position = 'absolute'
        }
        this.setSize(width, height)
    };
    VectorCanvas.prototype = {svgns: "http://www.w3.org/2000/svg", mode: 'svg', width: 0, height: 0, canvas: null, setSize: function(width, height) {
            if (this.mode == 'svg') {
                this.canvas.setAttribute('width', width);
                this.canvas.setAttribute('height', height)
            } else {
                this.canvas.style.width = width + "px";
                this.canvas.style.height = height + "px";
                this.canvas.coordsize = width + ' ' + height;
                this.canvas.coordorigin = "0 0";
                if (this.rootGroup) {
                    var pathes = this.rootGroup.getElementsByTagName('shape');
                    for (var i = 0, l = pathes.length; i < l; i++) {
                        pathes[i].coordsize = width + ' ' + height;
                        pathes[i].style.width = width + 'px';
                        pathes[i].style.height = height + 'px'
                    }
                    this.rootGroup.coordsize = width + ' ' + height;
                    this.rootGroup.style.width = width + 'px';
                    this.rootGroup.style.height = height + 'px'
                }
            }
            this.width = width;
            this.height = height
        }, createPath: function(config) {
            var node;
            if (this.mode == 'svg') {
                node = this.createSvgNode('path');
                node.setAttribute('d', config.path);
                if (this.params.borderColor !== null) {
                    node.setAttribute('stroke', this.params.borderColor)
                }
                if (this.params.borderWidth > 0) {
                    node.setAttribute('stroke-width', this.params.borderWidth);
                    node.setAttribute('stroke-linecap', 'round');
                    node.setAttribute('stroke-linejoin', 'round')
                }
                if (this.params.borderOpacity > 0) {
                    node.setAttribute('stroke-opacity', this.params.borderOpacity)
                }
                node.setFill = function(color) {
                    this.setAttribute("fill", color);
                    if (this.getAttribute("original") === null) {
                        this.setAttribute("original", color)
                    }
                };
                node.getFill = function(color) {
                    return this.getAttribute("fill")
                };
                node.getOriginalFill = function() {
                    return this.getAttribute("original")
                };
                node.setOpacity = function(opacity) {
                    this.setAttribute('fill-opacity', opacity)
                }
            } else {
                node = this.createVmlNode('shape');
                node.coordorigin = "0 0";
                node.coordsize = this.width + ' ' + this.height;
                node.style.width = this.width + 'px';
                node.style.height = this.height + 'px';
                node.fillcolor = WorldMap.defaultFillColor;
                node.stroked = false;
                node.path = VectorCanvas.pathSvgToVml(config.path);
                var scale = this.createVmlNode('skew');
                scale.on = true;
                scale.matrix = '0.01,0,0,0.01,0,0';
                scale.offset = '0,0';
                node.appendChild(scale);
                var fill = this.createVmlNode('fill');
                node.appendChild(fill);
                node.setFill = function(color) {
                    this.getElementsByTagName('fill')[0].color = color;
                    if (this.getAttribute("original") === null) {
                        this.setAttribute("original", color)
                    }
                };
                node.getFill = function(color) {
                    return this.getElementsByTagName('fill')[0].color
                };
                node.getOriginalFill = function() {
                    return this.getAttribute("original")
                };
                node.setOpacity = function(opacity) {
                    this.getElementsByTagName('fill')[0].opacity = parseInt(opacity * 100, 10) + '%'
                }
            }
            return node
        }, createGroup: function(isRoot) {
            var node;
            if (this.mode == 'svg') {
                node = this.createSvgNode('g')
            } else {
                node = this.createVmlNode('group');
                node.style.width = this.width + 'px';
                node.style.height = this.height + 'px';
                node.style.left = '0px';
                node.style.top = '0px';
                node.coordorigin = "0 0";
                node.coordsize = this.width + ' ' + this.height
            }
            if (isRoot) {
                this.rootGroup = node
            }
            return node
        }, applyTransformParams: function(scale, transX, transY) {
            if (this.mode == 'svg') {
                this.rootGroup.setAttribute('transform', 'scale(' + scale + ') translate(' + transX + ', ' + transY + ')')
            } else {
                this.rootGroup.coordorigin = (this.width - transX) + ',' + (this.height - transY);
                this.rootGroup.coordsize = this.width / scale + ',' + this.height / scale
            }
        }};
    VectorCanvas.pathSvgToVml = function(path) {
        var result = '';
        var cx = 0, cy = 0, ctrlx, ctrly;
        return path.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function(segment, letter, coords, index) {
            coords = coords.replace(/(\d)-/g, '$1,-').replace(/\s+/g, ',').split(',');
            if (!coords[0]) {
                coords.shift()
            }
            for (var i = 0, l = coords.length; i < l; i++) {
                coords[i] = Math.round(100 * coords[i])
            }
            switch (letter) {
                case'm':
                    cx += coords[0];
                    cy += coords[1];
                    return't' + coords.join(',');
                    break;
                case'M':
                    cx = coords[0];
                    cy = coords[1];
                    return'm' + coords.join(',');
                    break;
                case'l':
                    cx += coords[0];
                    cy += coords[1];
                    return'r' + coords.join(',');
                    break;
                case'L':
                    cx = coords[0];
                    cy = coords[1];
                    return'l' + coords.join(',');
                    break;
                case'h':
                    cx += coords[0];
                    return'r' + coords[0] + ',0';
                    break;
                case'H':
                    cx = coords[0];
                    return'l' + cx + ',' + cy;
                    break;
                case'v':
                    cy += coords[0];
                    return'r0,' + coords[0];
                    break;
                case'V':
                    cy = coords[0];
                    return'l' + cx + ',' + cy;
                    break;
                case'c':
                    ctrlx = cx + coords[coords.length - 4];
                    ctrly = cy + coords[coords.length - 3];
                    cx += coords[coords.length - 2];
                    cy += coords[coords.length - 1];
                    return'v' + coords.join(',');
                    break;
                case'C':
                    ctrlx = coords[coords.length - 4];
                    ctrly = coords[coords.length - 3];
                    cx = coords[coords.length - 2];
                    cy = coords[coords.length - 1];
                    return'c' + coords.join(',');
                    break;
                case's':
                    coords.unshift(cy - ctrly);
                    coords.unshift(cx - ctrlx);
                    ctrlx = cx + coords[coords.length - 4];
                    ctrly = cy + coords[coords.length - 3];
                    cx += coords[coords.length - 2];
                    cy += coords[coords.length - 1];
                    return'v' + coords.join(',');
                    break;
                case'S':
                    coords.unshift(cy + cy - ctrly);
                    coords.unshift(cx + cx - ctrlx);
                    ctrlx = coords[coords.length - 4];
                    ctrly = coords[coords.length - 3];
                    cx = coords[coords.length - 2];
                    cy = coords[coords.length - 1];
                    return'c' + coords.join(',');
                    break;
                default:
                    return false;
                    break
            }
            return''
        }).replace(/z/g, '')
    };
    var WorldMap = function(params) {
        params = params || {};
        var map = this;
        var mapData = WorldMap.maps[params.map];
        this.selectedRegions = [];
        this.multiSelectRegion = params.multiSelectRegion;
        this.container = params.container;
        this.defaultWidth = mapData.width;
        this.defaultHeight = mapData.height;
        this.color = params.color;
        this.selectedColor = params.selectedColor;
        this.hoverColor = params.hoverColor;
        this.hoverOpacity = params.hoverOpacity;
        this.setBackgroundColor(params.backgroundColor);
        this.width = params.container.width();
        this.height = params.container.height();
        this.resize();
        jQuery(window).resize(function() {
            map.width = params.container.width();
            map.height = params.container.height();
            map.resize();
            map.canvas.setSize(map.width, map.height);
            map.applyTransform()
        });
        this.canvas = new VectorCanvas(this.width, this.height, params);
        params.container.append(this.canvas.canvas);
        this.makeDraggable();
        this.rootGroup = this.canvas.createGroup(true);
        this.index = WorldMap.mapIndex;
        this.label = jQuery('<div/>').addClass('jqvmap-label').appendTo(jQuery('body')).hide();
        if (params.enableZoom) {
            jQuery('<div/>').addClass('jqvmap-zoomin').text('+').appendTo(params.container);
            jQuery('<div/>').addClass('jqvmap-zoomout').html('&#x2212;').appendTo(params.container)
        }
        map.countries = [];
        for (var key in mapData.pathes) {
            var path = this.canvas.createPath({path: mapData.pathes[key].path});
            path.setFill(this.color);
            path.id = map.getCountryId(key);
            map.countries[key] = path;
            if (this.canvas.mode == 'svg') {
                path.setAttribute('class', 'jvectormap-region')
            } else {
                jQuery(path).addClass('jvectormap-region')
            }
            jQuery(this.rootGroup).append(path)
        }
        jQuery(params.container).delegate(this.canvas.mode == 'svg' ? 'path' : 'shape', 'mouseover mouseout', function(e) {
            var path = e.target, code = e.target.id.split('_').pop(), labelShowEvent = $.Event('labelShow.jqvmap'), regionMouseOverEvent = $.Event('regionMouseOver.jqvmap');
            if (e.type == 'mouseover') {
                jQuery(params.container).trigger(regionMouseOverEvent, [code, mapData.pathes[code].name]);
                if (!regionMouseOverEvent.isDefaultPrevented()) {
                    map.highlight(code, path)
                }
                if (params.showTooltip) {
                    map.label.text(mapData.pathes[code].name);
                    jQuery(params.container).trigger(labelShowEvent, [map.label, code]);
                    if (!labelShowEvent.isDefaultPrevented()) {
                        map.label.show();
                        map.labelWidth = map.label.width();
                        map.labelHeight = map.label.height()
                    }
                }
            } else {
                map.unhighlight(code, path);
                map.label.hide();
                jQuery(params.container).trigger('regionMouseOut.jqvmap', [code, mapData.pathes[code].name])
            }
        });
        jQuery(params.container).delegate(this.canvas.mode == 'svg' ? 'path' : 'shape', 'click', function(e) {
            if (!params.multiSelectRegion) {
                for (var key in mapData.pathes) {
                    map.countries[key].currentFillColor = map.countries[key].getOriginalFill();
                    map.countries[key].setFill(map.countries[key].getOriginalFill())
                }
            }
            var path = e.target;
            var code = e.target.id.split('_').pop();
            jQuery(params.container).trigger('regionClick.jqvmap', [code, mapData.pathes[code].name]);
            if (map.selectedRegions.indexOf(code) !== -1) {
                map.deselect(code, path)
            } else {
                map.select(code, path)
            }
        });
        if (params.showTooltip) {
            params.container.mousemove(function(e) {
                if (map.label.is(':visible')) {
                    var left = e.pageX - 15 - map.labelWidth;
                    var top = e.pageY - 15 - map.labelHeight;
                    if (left < 0)
                        left = e.pageX + 15;
                    if (top < 0)
                        top = e.pageY + 15;
                    map.label.css({left: left, top: top})
                }
            })
        }
        this.setColors(params.colors);
        this.canvas.canvas.appendChild(this.rootGroup);
        this.applyTransform();
        this.colorScale = new ColorScale(params.scaleColors, params.normalizeFunction, params.valueMin, params.valueMax);
        if (params.values) {
            this.values = params.values;
            this.setValues(params.values)
        }
        if (params.selectedRegions) {
            if (params.selectedRegions instanceof Array) {
                for (var k in params.selectedRegions) {
                    this.select(params.selectedRegions[k].toLowerCase())
                }
            } else {
                this.select(params.selectedRegions.toLowerCase())
            }
        }
        this.bindZoomButtons();
        WorldMap.mapIndex++
    };
    WorldMap.prototype = {transX: 0, transY: 0, scale: 1, baseTransX: 0, baseTransY: 0, baseScale: 1, width: 0, height: 0, countries: {}, countriesColors: {}, countriesData: {}, zoomStep: 1.4, zoomMaxStep: 4, zoomCurStep: 1, setColors: function(key, color) {
            if (typeof key == 'string') {
                this.countries[key].setFill(color);
                this.countries[key].setAttribute("original", color)
            } else {
                var colors = key;
                for (var code in colors) {
                    if (this.countries[code]) {
                        this.countries[code].setFill(colors[code]);
                        this.countries[code].setAttribute("original", colors[code])
                    }
                }
            }
        }, setValues: function(values) {
            var max = 0, min = Number.MAX_VALUE, val;
            for (var cc in values) {
                val = parseFloat(values[cc]);
                if (val > max) {
                    max = values[cc]
                }
                if (val && val < min) {
                    min = val
                }
            }
            this.colorScale.setMin(min);
            this.colorScale.setMax(max);
            var colors = {};
            for (cc in values) {
                val = parseFloat(values[cc]);
                if (val) {
                    colors[cc] = this.colorScale.getColor(val)
                } else {
                    colors[cc] = this.color
                }
            }
            this.setColors(colors);
            this.values = values
        }, setBackgroundColor: function(backgroundColor) {
            this.container.css('background-color', backgroundColor)
        }, setScaleColors: function(colors) {
            this.colorScale.setColors(colors);
            if (this.values) {
                this.setValues(this.values)
            }
        }, setNormalizeFunction: function(f) {
            this.colorScale.setNormalizeFunction(f);
            if (this.values) {
                this.setValues(this.values)
            }
        }, highlight: function(cc, path) {
            path = path || $('#' + this.getCountryId(cc))[0];
            if (this.hoverOpacity) {
                path.setOpacity(this.hoverOpacity)
            } else if (this.hoverColor) {
                path.currentFillColor = path.getFill() + '';
                path.setFill(this.hoverColor)
            }
        }, unhighlight: function(cc, path) {
            path = path || $('#' + this.getCountryId(cc))[0];
            path.setOpacity(1);
            if (path.currentFillColor) {
                path.setFill(path.currentFillColor)
            }
        }, select: function(cc, path) {
            path = path || $('#' + this.getCountryId(cc))[0];
            if (this.selectedRegions.indexOf(cc) < 0) {
                if (this.multiSelectRegion) {
                    this.selectedRegions.push(cc)
                } else {
                    this.selectedRegions = [cc]
                }
                $(this.container).trigger('regionSelect.jqvmap', [cc]);
                if (this.selectedColor) {
                    path.currentFillColor = this.selectedColor;
                    path.setFill(this.selectedColor)
                }
            }
        }, deselect: function(cc, path) {
            path = path || $('#' + this.getCountryId(cc))[0];
            if (this.selectedRegions.indexOf(cc) >= 0) {
                this.selectedRegions.splice(this.selectedRegions.indexOf(cc), 1);
                $(this.container).trigger('regionDeselect.jqvmap', [cc]);
                path.currentFillColor = path.getOriginalFill();
                path.setFill(path.getOriginalFill())
            }
        }, isSelected: function(cc) {
            return this.selectedRegions.indexOf(cc) >= 0
        }, resize: function() {
            var curBaseScale = this.baseScale;
            if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
                this.baseScale = this.height / this.defaultHeight;
                this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)
            } else {
                this.baseScale = this.width / this.defaultWidth;
                this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)
            }
            this.scale *= this.baseScale / curBaseScale;
            this.transX *= this.baseScale / curBaseScale;
            this.transY *= this.baseScale / curBaseScale
        }, reset: function() {
            this.countryTitle.reset();
            for (var key in this.countries) {
                this.countries[key].setFill(WorldMap.defaultColor)
            }
            this.scale = this.baseScale;
            this.transX = this.baseTransX;
            this.transY = this.baseTransY;
            this.applyTransform()
        }, applyTransform: function() {
            var maxTransX, maxTransY, minTransX, minTransY;
            if (this.defaultWidth * this.scale <= this.width) {
                maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
                minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)
            } else {
                maxTransX = 0;
                minTransX = (this.width - this.defaultWidth * this.scale) / this.scale
            }
            if (this.defaultHeight * this.scale <= this.height) {
                maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
                minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)
            } else {
                maxTransY = 0;
                minTransY = (this.height - this.defaultHeight * this.scale) / this.scale
            }
            if (this.transY > maxTransY) {
                this.transY = maxTransY
            } else if (this.transY < minTransY) {
                this.transY = minTransY
            }
            if (this.transX > maxTransX) {
                this.transX = maxTransX
            } else if (this.transX < minTransX) {
                this.transX = minTransX
            }
            this.canvas.applyTransformParams(this.scale, this.transX, this.transY)
        }, makeDraggable: function() {
            var mouseDown = false;
            var oldPageX, oldPageY;
            var self = this;
            self.isMoving = false;
            self.isMovingTimeout = false;
            this.container.mousemove(function(e) {
                if (mouseDown) {
                    var curTransX = self.transX;
                    var curTransY = self.transY;
                    self.transX -= (oldPageX - e.pageX) / self.scale;
                    self.transY -= (oldPageY - e.pageY) / self.scale;
                    self.applyTransform();
                    oldPageX = e.pageX;
                    oldPageY = e.pageY;
                    self.isMoving = true;
                    if (self.isMovingTimeout) {
                        clearTimeout(self.isMovingTimeout)
                    }
                }
                return false
            }).mousedown(function(e) {
                mouseDown = true;
                oldPageX = e.pageX;
                oldPageY = e.pageY;
                return false
            }).mouseup(function() {
                mouseDown = false;
                self.isMovingTimeout = setTimeout(function() {
                    self.isMoving = false
                }, 100);
                return false
            })
        }, bindZoomButtons: function() {
            var map = this;
            var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);
            this.container.find('.jqvmap-zoomin').click(function() {
                if (map.zoomCurStep < map.zoomMaxStep) {
                    var curTransX = map.transX;
                    var curTransY = map.transY;
                    var curScale = map.scale;
                    map.transX -= (map.width / map.scale - map.width / (map.scale * map.zoomStep)) / 2;
                    map.transY -= (map.height / map.scale - map.height / (map.scale * map.zoomStep)) / 2;
                    map.setScale(map.scale * map.zoomStep);
                    map.zoomCurStep++;
                    jQuery('#zoomSlider').css('top', parseInt(jQuery('#zoomSlider').css('top'), 10) - sliderDelta)
                }
            });
            this.container.find('.jqvmap-zoomout').click(function() {
                if (map.zoomCurStep > 1) {
                    var curTransX = map.transX;
                    var curTransY = map.transY;
                    var curScale = map.scale;
                    map.transX += (map.width / (map.scale / map.zoomStep) - map.width / map.scale) / 2;
                    map.transY += (map.height / (map.scale / map.zoomStep) - map.height / map.scale) / 2;
                    map.setScale(map.scale / map.zoomStep);
                    map.zoomCurStep--;
                    jQuery('#zoomSlider').css('top', parseInt(jQuery('#zoomSlider').css('top'), 10) + sliderDelta)
                }
            })
        }, setScale: function(scale) {
            this.scale = scale;
            this.applyTransform()
        }, getCountryId: function(cc) {
            return'jqvmap' + this.index + '_' + cc
        }};
    WorldMap.xlink = "http://www.w3.org/1999/xlink";
    WorldMap.mapIndex = 1;
    WorldMap.maps = {};
    var ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
        if (colors) {
            this.setColors(colors)
        }
        if (normalizeFunction) {
            this.setNormalizeFunction(normalizeFunction)
        }
        if (minValue) {
            this.setMin(minValue)
        }
        if (minValue) {
            this.setMax(maxValue)
        }
    };
    ColorScale.prototype = {colors: [], setMin: function(min) {
            this.clearMinValue = min;
            if (typeof this.normalize === 'function') {
                this.minValue = this.normalize(min)
            } else {
                this.minValue = min
            }
        }, setMax: function(max) {
            this.clearMaxValue = max;
            if (typeof this.normalize === 'function') {
                this.maxValue = this.normalize(max)
            } else {
                this.maxValue = max
            }
        }, setColors: function(colors) {
            for (var i = 0; i < colors.length; i++) {
                colors[i] = ColorScale.rgbToArray(colors[i])
            }
            this.colors = colors
        }, setNormalizeFunction: function(f) {
            if (f === 'polynomial') {
                this.normalize = function(value) {
                    return Math.pow(value, 0.2)
                }
            } else if (f === 'linear') {
                delete this.normalize
            } else {
                this.normalize = f
            }
            this.setMin(this.clearMinValue);
            this.setMax(this.clearMaxValue)
        }, getColor: function(value) {
            if (typeof this.normalize === 'function') {
                value = this.normalize(value)
            }
            var lengthes = [];
            var fullLength = 0;
            var l;
            for (var i = 0; i < this.colors.length - 1; i++) {
                l = this.vectorLength(this.vectorSubtract(this.colors[i + 1], this.colors[i]));
                lengthes.push(l);
                fullLength += l
            }
            var c = (this.maxValue - this.minValue) / fullLength;
            for (i = 0; i < lengthes.length; i++) {
                lengthes[i] *= c
            }
            i = 0;
            value -= this.minValue;
            while (value - lengthes[i] >= 0) {
                value -= lengthes[i];
                i++
            }
            var color;
            if (i == this.colors.length - 1) {
                color = this.vectorToNum(this.colors[i]).toString(16)
            } else {
                color = (this.vectorToNum(this.vectorAdd(this.colors[i], this.vectorMult(this.vectorSubtract(this.colors[i + 1], this.colors[i]), (value) / (lengthes[i]))))).toString(16)
            }
            while (color.length < 6) {
                color = '0' + color
            }
            return'#' + color
        }, vectorToNum: function(vector) {
            var num = 0;
            for (var i = 0; i < vector.length; i++) {
                num += Math.round(vector[i]) * Math.pow(256, vector.length - i - 1)
            }
            return num
        }, vectorSubtract: function(vector1, vector2) {
            var vector = [];
            for (var i = 0; i < vector1.length; i++) {
                vector[i] = vector1[i] - vector2[i]
            }
            return vector
        }, vectorAdd: function(vector1, vector2) {
            var vector = [];
            for (var i = 0; i < vector1.length; i++) {
                vector[i] = vector1[i] + vector2[i]
            }
            return vector
        }, vectorMult: function(vector, num) {
            var result = [];
            for (var i = 0; i < vector.length; i++) {
                result[i] = vector[i] * num
            }
            return result
        }, vectorLength: function(vector) {
            var result = 0;
            for (var i = 0; i < vector.length; i++) {
                result += vector[i] * vector[i]
            }
            return Math.sqrt(result)
        }};
    ColorScale.arrayToRgb = function(ar) {
        var rgb = '#';
        var d;
        for (var i = 0; i < ar.length; i++) {
            d = ar[i].toString(16);
            rgb += d.length == 1 ? '0' + d : d
        }
        return rgb
    };
    ColorScale.rgbToArray = function(rgb) {
        rgb = rgb.substr(1);
        return[parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)]
    }
})(jQuery);

/*!
 * GMaps.js v0.4.3
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2012, Gustavo Leon
 * Released under the MIT License.
 */
/*if(window.google==undefined&&window.google.maps==undefined){throw"Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true."}var extend_object=function(e,t){var n;if(e===t){return e}for(n in t){e[n]=t[n]}return e};var replace_object=function(e,t){var n;if(e===t){return e}for(n in t){if(e[n]!=undefined){e[n]=t[n]}}return e};var array_map=function(e,t){var n=Array.prototype.slice.call(arguments,2),r=[],i=e.length,s;if(Array.prototype.map&&e.map===Array.prototype.map){r=Array.prototype.map.call(e,function(e){callback_params=n;callback_params.splice(0,0,e);return t.apply(this,callback_params)})}else{for(s=0;s<i;s++){callback_params=n;callback_params=callback_params.splice(0,0,e[s]);r.push(t.apply(this,callback_params))}}return r};var array_flat=function(e){var t=[],n;for(n=0;n<e.length;n++){t=t.concat(e[n])}return t};var coordsToLatLngs=function(e,t){var n=e[0],r=e[1];if(t){n=e[1];r=e[0]}return new google.maps.LatLng(n,r)};var arrayToLatLng=function(e,t){var n;for(n=0;n<e.length;n++){if(e[n].length>0&&typeof e[n][0]!="number"){e[n]=arrayToLatLng(e[n],t)}else{e[n]=coordsToLatLngs(e[n],t)}}return e};var getElementById=function(e,t){var n,e=e.replace("#","");if("jQuery"in this&&t){n=$("#"+e,t)[0]}else{n=document.getElementById(e)}return n};var findAbsolutePosition=function(e){var t=0,n=0;if(e.offsetParent){do{t+=e.offsetLeft;n+=e.offsetTop}while(e=e.offsetParent)}return[t,n]};var GMaps=function(e){"use strict";var t=document;var n=function(e){e.zoom=e.zoom||15;e.mapType=e.mapType||"roadmap";var n=this,r,i=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],s=["mousemove","mouseout","mouseover"],o=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],u=e.el||e.div,a=e.markerClusterer,f=google.maps.MapTypeId[e.mapType.toUpperCase()],l=new google.maps.LatLng(e.lat,e.lng),c=e.zoomControl||true,h=e.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},p=h.style||"DEFAULT",d=h.position||"TOP_LEFT",v=e.panControl||true,m=e.mapTypeControl||true,g=e.scaleControl||true,y=e.streetViewControl||true,b=b||true,w={},E={zoom:this.zoom,center:l,mapTypeId:f},S={panControl:v,zoomControl:c,zoomControlOptions:{style:google.maps.ZoomControlStyle[p],position:google.maps.ControlPosition[d]},mapTypeControl:m,scaleControl:g,streetViewControl:y,overviewMapControl:b};if(typeof e.el==="string"||typeof e.div==="string"){this.el=getElementById(u,e.context)}else{this.el=u}if(typeof this.el==="undefined"||this.el===null){throw"No element defined."}window.context_menu=window.context_menu||{};window.context_menu[n.el.id]={};this.controls=[];this.overlays=[];this.layers=[];this.singleLayers={};this.markers=[];this.polylines=[];this.routes=[];this.polygons=[];this.infoWindow=null;this.overlay_el=null;this.zoom=e.zoom;this.registered_events={};this.el.style.width=e.width||this.el.scrollWidth||this.el.offsetWidth;this.el.style.height=e.height||this.el.scrollHeight||this.el.offsetHeight;google.maps.visualRefresh=e.enableNewStyle;for(r=0;r<o.length;r++){delete e[o[r]]}if(e.disableDefaultUI!=true){E=extend_object(E,S)}w=extend_object(E,e);for(r=0;r<i.length;r++){delete w[i[r]]}for(r=0;r<s.length;r++){delete w[s[r]]}this.map=new google.maps.Map(this.el,w);if(a){this.markerClusterer=a.apply(this,[this.map])}var x=function(e,t){var r="",i=window.context_menu[n.el.id][e];for(var s in i){if(i.hasOwnProperty(s)){var o=i[s];r+='<li><a id="'+e+"_"+s+'" href="#">'+o.title+"</a></li>"}}if(!getElementById("gmaps_context_menu"))return;var u=getElementById("gmaps_context_menu");u.innerHTML=r;var a=u.getElementsByTagName("a"),f=a.length;s;for(s=0;s<f;s++){var l=a[s];var c=function(r){r.preventDefault();i[this.id.replace(e+"_","")].action.apply(n,[t]);n.hideContextMenu()};google.maps.event.clearListeners(l,"click");google.maps.event.addDomListenerOnce(l,"click",c,false)}var h=findAbsolutePosition.apply(this,[n.el]),p=h[0]+t.pixel.x-15,d=h[1]+t.pixel.y-15;u.style.left=p+"px";u.style.top=d+"px";u.style.display="block"};var T=function(e,t){if(e==="marker"){t.pixel={};var r=new google.maps.OverlayView;r.setMap(n.map);r.draw=function(){var n=r.getProjection(),i=t.marker.getPosition();t.pixel=n.fromLatLngToContainerPixel(i);x(e,t)}}else{x(e,t)}};this.setContextMenu=function(e){window.context_menu[n.el.id][e.control]={};var r,i=t.createElement("ul");for(r in e.options){if(e.options.hasOwnProperty(r)){var s=e.options[r];window.context_menu[n.el.id][e.control][s.name]={title:s.title,action:s.action}}}i.id="gmaps_context_menu";i.style.display="none";i.style.position="absolute";i.style.minWidth="100px";i.style.background="white";i.style.listStyle="none";i.style.padding="8px";i.style.boxShadow="2px 2px 6px #ccc";t.body.appendChild(i);var o=getElementById("gmaps_context_menu");google.maps.event.addDomListener(o,"mouseout",function(e){if(!e.relatedTarget||!this.contains(e.relatedTarget)){window.setTimeout(function(){o.style.display="none"},400)}},false)};this.hideContextMenu=function(){var e=getElementById("gmaps_context_menu");if(e){e.style.display="none"}};var N=function(t,r){google.maps.event.addListener(t,r,function(t){if(t==undefined){t=this}e[r].apply(this,[t]);n.hideContextMenu()})};for(var C=0;C<i.length;C++){var k=i[C];if(k in e){N(this.map,k)}}for(var C=0;C<s.length;C++){var k=s[C];if(k in e){N(this.map,k)}}google.maps.event.addListener(this.map,"rightclick",function(t){if(e.rightclick){e.rightclick.apply(this,[t])}if(window.context_menu[n.el.id]["map"]!=undefined){T("map",t)}});this.refresh=function(){google.maps.event.trigger(this.map,"resize")};this.fitZoom=function(){var e=[],t=this.markers.length,n;for(n=0;n<t;n++){e.push(this.markers[n].getPosition())}this.fitLatLngBounds(e)};this.fitLatLngBounds=function(e){var t=e.length;var n=new google.maps.LatLngBounds;for(var r=0;r<t;r++){n.extend(e[r])}this.map.fitBounds(n)};this.setCenter=function(e,t,n){this.map.panTo(new google.maps.LatLng(e,t));if(n){n()}};this.getElement=function(){return this.el};this.zoomIn=function(e){e=e||1;this.zoom=this.map.getZoom()+e;this.map.setZoom(this.zoom)};this.zoomOut=function(e){e=e||1;this.zoom=this.map.getZoom()-e;this.map.setZoom(this.zoom)};var L=[],A;for(A in this.map){if(typeof this.map[A]=="function"&&!this[A]){L.push(A)}}for(r=0;r<L.length;r++){(function(e,t,n){e[n]=function(){return t[n].apply(t,arguments)}})(this,this.map,L[r])}};return n}(this);GMaps.prototype.createControl=function(e){var t=document.createElement("div");t.style.cursor="pointer";t.style.fontFamily="Arial, sans-serif";t.style.fontSize="13px";t.style.boxShadow="rgba(0, 0, 0, 0.398438) 0px 2px 4px";for(var n in e.style){t.style[n]=e.style[n]}if(e.id){t.id=e.id}if(e.classes){t.className=e.classes}if(e.content){t.innerHTML=e.content}for(var r in e.events){(function(t,n){google.maps.event.addDomListener(t,n,function(){e.events[n].apply(this,[this])})})(t,r)}t.index=1;return t};GMaps.prototype.addControl=function(e){var t=google.maps.ControlPosition[e.position.toUpperCase()];delete e.position;var n=this.createControl(e);this.controls.push(n);this.map.controls[t].push(n);return n};GMaps.prototype.createMarker=function(e){if(e.lat==undefined&&e.lng==undefined&&e.position==undefined){throw"No latitude or longitude defined."}var t=this,n=e.details,r=e.fences,i=e.outside,s={position:new google.maps.LatLng(e.lat,e.lng),map:null};delete e.lat;delete e.lng;delete e.fences;delete e.outside;var o=extend_object(s,e),u=new google.maps.Marker(o);u.fences=r;if(e.infoWindow){u.infoWindow=new google.maps.InfoWindow(e.infoWindow);var a=["closeclick","content_changed","domready","position_changed","zindex_changed"];for(var f=0;f<a.length;f++){(function(t,n){if(e.infoWindow[n]){google.maps.event.addListener(t,n,function(t){e.infoWindow[n].apply(this,[t])})}})(u.infoWindow,a[f])}}var l=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"];var c=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"];for(var f=0;f<l.length;f++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(){e[n].apply(this,[this])})}})(u,l[f])}for(var f=0;f<c.length;f++){(function(t,n,r){if(e[r]){google.maps.event.addListener(n,r,function(n){if(!n.pixel){n.pixel=t.getProjection().fromLatLngToPoint(n.latLng)}e[r].apply(this,[n])})}})(this.map,u,c[f])}google.maps.event.addListener(u,"click",function(){this.details=n;if(e.click){e.click.apply(this,[this])}if(u.infoWindow){t.hideInfoWindows();u.infoWindow.open(t.map,u)}});google.maps.event.addListener(u,"rightclick",function(n){n.marker=this;if(e.rightclick){e.rightclick.apply(this,[n])}if(window.context_menu[t.el.id]["marker"]!=undefined){buildContextMenu("marker",n)}});if(u.fences){google.maps.event.addListener(u,"dragend",function(){t.checkMarkerGeofence(u,function(e,t){i(e,t)})})}return u};GMaps.prototype.addMarker=function(e){var t;if(e.hasOwnProperty("gm_accessors_")){t=e}else{if(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position){t=this.createMarker(e)}else{throw"No latitude or longitude defined."}}t.setMap(this.map);if(this.markerClusterer){this.markerClusterer.addMarker(t)}this.markers.push(t);GMaps.fire("marker_added",t,this);return t};GMaps.prototype.addMarkers=function(e){for(var t=0,n;n=e[t];t++){this.addMarker(n)}return this.markers};GMaps.prototype.hideInfoWindows=function(){for(var e=0,t;t=this.markers[e];e++){if(t.infoWindow){t.infoWindow.close()}}};GMaps.prototype.removeMarker=function(e){for(var t=0;t<this.markers.length;t++){if(this.markers[t]===e){this.markers[t].setMap(null);this.markers.splice(t,1);GMaps.fire("marker_removed",e,this);break}}return e};GMaps.prototype.removeMarkers=function(e){var e=e||this.markers;for(var t=0;t<this.markers.length;t++){if(this.markers[t]===e[t]){this.markers[t].setMap(null)}}var n=[];for(var t=0;t<this.markers.length;t++){if(this.markers[t].getMap()!=null){n.push(this.markers[t])}}this.markers=n};GMaps.prototype.drawOverlay=function(e){var t=new google.maps.OverlayView,n=true;t.setMap(this.map);if(e.auto_show!=null){n=e.auto_show}t.onAdd=function(){var n=document.createElement("div");n.style.borderStyle="none";n.style.borderWidth="0px";n.style.position="absolute";n.style.zIndex=100;n.innerHTML=e.content;t.el=n;if(!e.layer){e.layer="overlayLayer"}var r=this.getPanes(),i=r[e.layer],s=["contextmenu","DOMMouseScroll","dblclick","mousedown"];i.appendChild(n);for(var o=0;o<s.length;o++){(function(e,t){google.maps.event.addDomListener(e,t,function(e){if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&document.all){e.cancelBubble=true;e.returnValue=false}else{e.stopPropagation()}})})(n,s[o])}google.maps.event.trigger(this,"ready")};t.draw=function(){var r=this.getProjection(),i=r.fromLatLngToDivPixel(new google.maps.LatLng(e.lat,e.lng));e.horizontalOffset=e.horizontalOffset||0;e.verticalOffset=e.verticalOffset||0;var s=t.el,o=s.children[0],u=o.clientHeight,a=o.clientWidth;switch(e.verticalAlign){case"top":s.style.top=i.y-u+e.verticalOffset+"px";break;default:case"middle":s.style.top=i.y-u/2+e.verticalOffset+"px";break;case"bottom":s.style.top=i.y+e.verticalOffset+"px";break}switch(e.horizontalAlign){case"left":s.style.left=i.x-a+e.horizontalOffset+"px";break;default:case"center":s.style.left=i.x-a/2+e.horizontalOffset+"px";break;case"right":s.style.left=i.x+e.horizontalOffset+"px";break}s.style.display=n?"block":"none";if(!n){e.show.apply(this,[s])}};t.onRemove=function(){var n=t.el;if(e.remove){e.remove.apply(this,[n])}else{t.el.parentNode.removeChild(t.el);t.el=null}};this.overlays.push(t);return t};GMaps.prototype.removeOverlay=function(e){for(var t=0;t<this.overlays.length;t++){if(this.overlays[t]===e){this.overlays[t].setMap(null);this.overlays.splice(t,1);break}}};GMaps.prototype.removeOverlays=function(){for(var e=0,t;t=this.overlays[e];e++){t.setMap(null)}this.overlays=[]};GMaps.prototype.drawPolyline=function(e){var t=[],n=e.path;if(n.length){if(n[0][0]===undefined){t=n}else{for(var r=0,i;i=n[r];r++){t.push(new google.maps.LatLng(i[0],i[1]))}}}var s={map:this.map,path:t,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight,geodesic:e.geodesic,clickable:true,editable:false,visible:true};if(e.hasOwnProperty("clickable")){s.clickable=e.clickable}if(e.hasOwnProperty("editable")){s.editable=e.editable}if(e.hasOwnProperty("icons")){s.icons=e.icons}if(e.hasOwnProperty("zIndex")){s.zIndex=e.zIndex}var o=new google.maps.Polyline(s);var u=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var a=0;a<u.length;a++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})}})(o,u[a])}this.polylines.push(o);GMaps.fire("polyline_added",o,this);return o};GMaps.prototype.removePolyline=function(e){for(var t=0;t<this.polylines.length;t++){if(this.polylines[t]===e){this.polylines[t].setMap(null);this.polylines.splice(t,1);GMaps.fire("polyline_removed",e,this);break}}};GMaps.prototype.removePolylines=function(){for(var e=0,t;t=this.polylines[e];e++){t.setMap(null)}this.polylines=[]};GMaps.prototype.drawCircle=function(e){e=extend_object({map:this.map,center:new google.maps.LatLng(e.lat,e.lng)},e);delete e.lat;delete e.lng;var t=new google.maps.Circle(e),n=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var r=0;r<n.length;r++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})}})(t,n[r])}this.polygons.push(t);return t};GMaps.prototype.drawRectangle=function(e){e=extend_object({map:this.map},e);var t=new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0],e.bounds[0][1]),new google.maps.LatLng(e.bounds[1][0],e.bounds[1][1]));e.bounds=t;var n=new google.maps.Rectangle(e),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var i=0;i<r.length;i++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})}})(n,r[i])}this.polygons.push(n);return n};GMaps.prototype.drawPolygon=function(e){var t=false;if(e.hasOwnProperty("useGeoJSON")){t=e.useGeoJSON}delete e.useGeoJSON;e=extend_object({map:this.map},e);if(t==false){e.paths=[e.paths.slice(0)]}if(e.paths.length>0){if(e.paths[0].length>0){e.paths=array_flat(array_map(e.paths,arrayToLatLng,t))}}var n=new google.maps.Polygon(e),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var i=0;i<r.length;i++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})}})(n,r[i])}this.polygons.push(n);GMaps.fire("polygon_added",n,this);return n};GMaps.prototype.removePolygon=function(e){for(var t=0;t<this.polygons.length;t++){if(this.polygons[t]===e){this.polygons[t].setMap(null);this.polygons.splice(t,1);GMaps.fire("polygon_removed",e,this);break}}};GMaps.prototype.removePolygons=function(){for(var e=0,t;t=this.polygons[e];e++){t.setMap(null)}this.polygons=[]};GMaps.prototype.getFromFusionTables=function(e){var t=e.events;delete e.events;var n=e,r=new google.maps.FusionTablesLayer(n);for(var i in t){(function(e,n){google.maps.event.addListener(e,n,function(e){t[n].apply(this,[e])})})(r,i)}this.layers.push(r);return r};GMaps.prototype.loadFromFusionTables=function(e){var t=this.getFromFusionTables(e);t.setMap(this.map);return t};GMaps.prototype.getFromKML=function(e){var t=e.url,n=e.events;delete e.url;delete e.events;var r=e,i=new google.maps.KmlLayer(t,r);for(var s in n){(function(e,t){google.maps.event.addListener(e,t,function(e){n[t].apply(this,[e])})})(i,s)}this.layers.push(i);return i};GMaps.prototype.loadFromKML=function(e){var t=this.getFromKML(e);t.setMap(this.map);return t};GMaps.prototype.addLayer=function(e,t){t=t||{};var n;switch(e){case"weather":this.singleLayers.weather=n=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=n=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=n=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=n=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=n=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=n=new google.maps.panoramio.PanoramioLayer;n.setTag(t.filter);delete t.filter;if(t.click){google.maps.event.addListener(n,"click",function(e){t.click(e);delete t.click})}break;case"places":this.singleLayers.places=n=new google.maps.places.PlacesService(this.map);if(t.search||t.nearbySearch){var r={bounds:t.bounds||null,keyword:t.keyword||null,location:t.location||null,name:t.name||null,radius:t.radius||null,rankBy:t.rankBy||null,types:t.types||null};if(t.search){n.search(r,t.search)}if(t.nearbySearch){n.nearbySearch(r,t.nearbySearch)}}if(t.textSearch){var i={bounds:t.bounds||null,location:t.location||null,query:t.query||null,radius:t.radius||null};n.textSearch(i,t.textSearch)}break}if(n!==undefined){if(typeof n.setOptions=="function"){n.setOptions(t)}if(typeof n.setMap=="function"){n.setMap(this.map)}return n}};GMaps.prototype.removeLayer=function(e){if(typeof e=="string"&&this.singleLayers[e]!==undefined){this.singleLayers[e].setMap(null);delete this.singleLayers[e]}else{for(var t=0;t<this.layers.length;t++){if(this.layers[t]===e){this.layers[t].setMap(null);this.layers.splice(t,1);break}}}};var travelMode,unitSystem;GMaps.prototype.getRoutes=function(e){switch(e.travelMode){case"bicycling":travelMode=google.maps.TravelMode.BICYCLING;break;case"transit":travelMode=google.maps.TravelMode.TRANSIT;break;case"driving":travelMode=google.maps.TravelMode.DRIVING;break;default:travelMode=google.maps.TravelMode.WALKING;break}if(e.unitSystem==="imperial"){unitSystem=google.maps.UnitSystem.IMPERIAL}else{unitSystem=google.maps.UnitSystem.METRIC}var t={avoidHighways:false,avoidTolls:false,optimizeWaypoints:false,waypoints:[]},n=extend_object(t,e);n.origin=/string/.test(typeof e.origin)?e.origin:new google.maps.LatLng(e.origin[0],e.origin[1]);n.destination=/string/.test(typeof e.destination)?e.destination:new google.maps.LatLng(e.destination[0],e.destination[1]);n.travelMode=travelMode;n.unitSystem=unitSystem;delete n.callback;var r=this,i=new google.maps.DirectionsService;i.route(n,function(t,n){if(n===google.maps.DirectionsStatus.OK){for(var i in t.routes){if(t.routes.hasOwnProperty(i)){r.routes.push(t.routes[i])}}}if(e.callback){e.callback(r.routes)}})};GMaps.prototype.removeRoutes=function(){this.routes=[]};GMaps.prototype.getElevations=function(e){e=extend_object({locations:[],path:false,samples:256},e);if(e.locations.length>0){if(e.locations[0].length>0){e.locations=array_flat(array_map([e.locations],arrayToLatLng,false))}}var t=e.callback;delete e.callback;var n=new google.maps.ElevationService;if(!e.path){delete e.path;delete e.samples;n.getElevationForLocations(e,function(e,n){if(t&&typeof t==="function"){t(e,n)}})}else{var r={path:e.locations,samples:e.samples};n.getElevationAlongPath(r,function(e,n){if(t&&typeof t==="function"){t(e,n)}})}};GMaps.prototype.cleanRoute=GMaps.prototype.removePolylines;GMaps.prototype.drawRoute=function(e){var t=this;this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,callback:function(n){if(n.length>0){t.drawPolyline({path:n[n.length-1].overview_path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight});if(e.callback){e.callback(n[n.length-1])}}}})};GMaps.prototype.travelRoute=function(e){if(e.origin&&e.destination){this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,callback:function(t){if(t.length>0&&e.start){e.start(t[t.length-1])}if(t.length>0&&e.step){var n=t[t.length-1];if(n.legs.length>0){var r=n.legs[0].steps;for(var i=0,s;s=r[i];i++){s.step_number=i;e.step(s,n.legs[0].steps.length-1)}}}if(t.length>0&&e.end){e.end(t[t.length-1])}}})}else if(e.route){if(e.route.legs.length>0){var t=e.route.legs[0].steps;for(var n=0,r;r=t[n];n++){r.step_number=n;e.step(r)}}}};GMaps.prototype.drawSteppedRoute=function(e){var t=this;if(e.origin&&e.destination){this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,callback:function(n){if(n.length>0&&e.start){e.start(n[n.length-1])}if(n.length>0&&e.step){var r=n[n.length-1];if(r.legs.length>0){var i=r.legs[0].steps;for(var s=0,o;o=i[s];s++){o.step_number=s;t.drawPolyline({path:o.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight});e.step(o,r.legs[0].steps.length-1)}}}if(n.length>0&&e.end){e.end(n[n.length-1])}}})}else if(e.route){if(e.route.legs.length>0){var n=e.route.legs[0].steps;for(var r=0,i;i=n[r];r++){i.step_number=r;t.drawPolyline({path:i.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight});e.step(i)}}}};GMaps.Route=function(e){this.origin=e.origin;this.destination=e.destination;this.waypoints=e.waypoints;this.map=e.map;this.route=e.route;this.step_count=0;this.steps=this.route.legs[0].steps;this.steps_length=this.steps.length;this.polyline=this.map.drawPolyline({path:new google.maps.MVCArray,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}).getPath()};GMaps.Route.prototype.getRoute=function(t){var n=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:t.travelMode,waypoints:this.waypoints||[],callback:function(){n.route=e[0];if(t.callback){t.callback.call(n)}}})};GMaps.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var e=this.route.legs[0].steps[this.step_count].path;for(var t in e){if(e.hasOwnProperty(t)){this.polyline.pop()}}}};GMaps.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var e=this.route.legs[0].steps[this.step_count].path;for(var t in e){if(e.hasOwnProperty(t)){this.polyline.push(e[t])}}this.step_count++}};GMaps.prototype.checkGeofence=function(e,t,n){return n.containsLatLng(new google.maps.LatLng(e,t))};GMaps.prototype.checkMarkerGeofence=function(e,t){if(e.fences){for(var n=0,r;r=e.fences[n];n++){var i=e.getPosition();if(!this.checkGeofence(i.lat(),i.lng(),r)){t(e,r)}}}};GMaps.prototype.toImage=function(e){var e=e||{},t={};t["size"]=e["size"]||[this.el.clientWidth,this.el.clientHeight];t["lat"]=this.getCenter().lat();t["lng"]=this.getCenter().lng();if(this.markers.length>0){t["markers"]=[];for(var n=0;n<this.markers.length;n++){t["markers"].push({lat:this.markers[n].getPosition().lat(),lng:this.markers[n].getPosition().lng()})}}if(this.polylines.length>0){var r=this.polylines[0];t["polyline"]={};t["polyline"]["path"]=google.maps.geometry.encoding.encodePath(r.getPath());t["polyline"]["strokeColor"]=r.strokeColor;t["polyline"]["strokeOpacity"]=r.strokeOpacity;t["polyline"]["strokeWeight"]=r.strokeWeight}return GMaps.staticMapURL(t)};GMaps.staticMapURL=function(e){function p(e,t){if(e[0]==="#"){e=e.replace("#","0x");if(t){t=parseFloat(t);t=Math.min(1,Math.max(t,0));if(t===0){return"0x00000000"}t=(t*255).toString(16);if(t.length===1){t+=t}e=e.slice(0,8)+t}}return e}var t=[],n,r="http://maps.googleapis.com/maps/api/staticmap";if(e.url){r=e.url;delete e.url}r+="?";var i=e.markers;delete e.markers;if(!i&&e.marker){i=[e.marker];delete e.marker}var s=e.polyline;delete e.polyline;if(e.center){t.push("center="+e.center);delete e.center}else if(e.address){t.push("center="+e.address);delete e.address}else if(e.lat){t.push(["center=",e.lat,",",e.lng].join(""));delete e.lat;delete e.lng}else if(e.visible){var o=encodeURI(e.visible.join("|"));t.push("visible="+o)}var u=e.size;if(u){if(u.join){u=u.join("x")}delete e.size}else{u="630x300"}t.push("size="+u);if(!e.zoom){e.zoom=15}var a=e.hasOwnProperty("sensor")?!!e.sensor:true;delete e.sensor;t.push("sensor="+a);for(var f in e){if(e.hasOwnProperty(f)){t.push(f+"="+e[f])}}if(i){var l,c;for(var h=0;n=i[h];h++){l=[];if(n.size&&n.size!=="normal"){l.push("size:"+n.size)}else if(n.icon){l.push("icon:"+encodeURI(n.icon))}if(n.color){l.push("color:"+n.color.replace("#","0x"))}if(n.label){l.push("label:"+n.label[0].toUpperCase())}c=n.address?n.address:n.lat+","+n.lng;if(l.length||h===0){l.push(c);l=l.join("|");t.push("markers="+encodeURI(l))}else{l=t.pop()+encodeURI("|"+c);t.push(l)}}}if(s){n=s;s=[];if(n.strokeWeight){s.push("weight:"+parseInt(n.strokeWeight,10))}if(n.strokeColor){var d=p(n.strokeColor,n.strokeOpacity);s.push("color:"+d)}if(n.fillColor){var v=p(n.fillColor,n.fillOpacity);s.push("fillcolor:"+v)}var m=n.path;if(m.join){for(var g=0,y;y=m[g];g++){s.push(y.join(","))}}else{s.push("enc:"+m)}s=s.join("|");t.push("path="+encodeURI(s))}t=t.join("&");return r+t};GMaps.prototype.addMapType=function(e,t){if(t.hasOwnProperty("getTileUrl")&&typeof t["getTileUrl"]=="function"){t.tileSize=t.tileSize||new google.maps.Size(256,256);var n=new google.maps.ImageMapType(t);this.map.mapTypes.set(e,n)}else{throw"'getTileUrl' function required."}};GMaps.prototype.addOverlayMapType=function(e){if(e.hasOwnProperty("getTile")&&typeof e["getTile"]=="function"){var t=e.index;delete e.index;this.map.overlayMapTypes.insertAt(t,e)}else{throw"'getTile' function required."}};GMaps.prototype.removeOverlayMapType=function(e){this.map.overlayMapTypes.removeAt(e)};GMaps.prototype.addStyle=function(e){var t=new google.maps.StyledMapType(e.styles,e.styledMapName);this.map.mapTypes.set(e.mapTypeId,t)};GMaps.prototype.setStyle=function(e){this.map.setMapTypeId(e)};GMaps.prototype.createPanorama=function(e){if(!e.hasOwnProperty("lat")||!e.hasOwnProperty("lng")){e.lat=this.getCenter().lat();e.lng=this.getCenter().lng()}this.panorama=GMaps.createPanorama(e);this.map.setStreetView(this.panorama);return this.panorama};GMaps.createPanorama=function(e){var t=getElementById(e.el,e.context);e.position=new google.maps.LatLng(e.lat,e.lng);delete e.el;delete e.context;delete e.lat;delete e.lng;var n=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],r=extend_object({visible:true},e);for(var i=0;i<n.length;i++){delete r[n[i]]}var s=new google.maps.StreetViewPanorama(t,r);for(var i=0;i<n.length;i++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(){e[n].apply(this)})}})(s,n[i])}return s};GMaps.prototype.on=function(e,t){return GMaps.on(e,this,t)};GMaps.prototype.off=function(e){GMaps.off(e,this)};GMaps.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"];GMaps.on=function(e,t,n){if(GMaps.custom_events.indexOf(e)==-1){return google.maps.event.addListener(t,e,n)}else{var r={handler:n,eventName:e};t.registered_events[e]=t.registered_events[e]||[];t.registered_events[e].push(r);return r}};GMaps.off=function(e,t){if(GMaps.custom_events.indexOf(e)==-1){google.maps.event.clearListeners(t,e)}else{t.registered_events[e]=[]}};GMaps.fire=function(e,t,n){if(GMaps.custom_events.indexOf(e)==-1){google.maps.event.trigger(t,e,Array.prototype.slice.apply(arguments).slice(2))}else{if(e in n.registered_events){var r=n.registered_events[e];for(var i=0;i<r.length;i++){(function(e,t,n){e.apply(t,[n])})(r[i]["handler"],n,t)}}}};GMaps.geolocate=function(e){var t=e.always||e.complete;if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(n){e.success(n);if(t){t()}},function(n){e.error(n);if(t){t()}},e.options)}else{e.not_supported();if(t){t()}}};GMaps.geocode=function(e){this.geocoder=new google.maps.Geocoder;var t=e.callback;if(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")){e.latLng=new google.maps.LatLng(e.lat,e.lng)}delete e.lat;delete e.lng;delete e.callback;this.geocoder.geocode(e,function(e,n){t(e,n)})};if(!google.maps.Polygon.prototype.getBounds){google.maps.Polygon.prototype.getBounds=function(e){var t=new google.maps.LatLngBounds;var n=this.getPaths();var r;for(var i=0;i<n.getLength();i++){r=n.getAt(i);for(var s=0;s<r.getLength();s++){t.extend(r.getAt(s))}}return t}}if(!google.maps.Polygon.prototype.containsLatLng){google.maps.Polygon.prototype.containsLatLng=function(e){var t=this.getBounds();if(t!==null&&!t.contains(e)){return false}var n=false;var r=this.getPaths().getLength();for(var i=0;i<r;i++){var s=this.getPaths().getAt(i);var o=s.getLength();var u=o-1;for(var a=0;a<o;a++){var f=s.getAt(a);var l=s.getAt(u);if(f.lng()<e.lng()&&l.lng()>=e.lng()||l.lng()<e.lng()&&f.lng()>=e.lng()){if(f.lat()+(e.lng()-f.lng())/(l.lng()-f.lng())*(l.lat()-f.lat())<e.lat()){n=!n}}u=a}}return n}}google.maps.LatLngBounds.prototype.containsLatLng=function(e){return this.contains(e)};google.maps.Marker.prototype.setFences=function(e){this.fences=e};google.maps.Marker.prototype.addFence=function(e){this.fences.push(e)};google.maps.Marker.prototype.getId=function(){return this["__gm_id"]};if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e){"use strict";if(this==null){throw new TypeError}var t=Object(this);var n=t.length>>>0;if(n===0){return-1}var r=0;if(arguments.length>1){r=Number(arguments[1]);if(r!=r){r=0}else if(r!=0&&r!=Infinity&&r!=-Infinity){r=(r>0||-1)*Math.floor(Math.abs(r))}}if(r>=n){return-1}var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++){if(i in t&&t[i]===e){return i}}return-1}};*/

/*!
 * jQuery Form Plugin
 * version: 2.43 (12-MAR-2010)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(e) {
    function t() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            if (window.console && window.console.log)
                window.console.log(t);
            else if (window.opera && window.opera.postError)
                window.opera.postError(t)
        }
    }
    e.fn.ajaxSubmit = function(n) {
        function m() {
            function m() {
                var t = f.attr("target"), n = f.attr("action");
                r.setAttribute("target", o);
                if (r.getAttribute("method") != "POST")
                    r.setAttribute("method", "POST");
                if (r.getAttribute("action") != i.url)
                    r.setAttribute("action", i.url);
                if (!i.skipEncodingOverride) {
                    f.attr({encoding: "multipart/form-data", enctype: "multipart/form-data"})
                }
                if (i.timeout)
                    setTimeout(function() {
                        p = true;
                        y()
                    }, i.timeout);
                var s = [];
                try {
                    if (i.extraData)
                        for (var a in i.extraData)
                            s.push(e('<input type="hidden" name="' + a + '" value="' + i.extraData[a] + '" />').appendTo(r)[0]);
                    u.appendTo("body");
                    u.data("form-plugin-onload", y);
                    r.submit()
                } finally {
                    r.setAttribute("action", n);
                    t ? r.setAttribute("target", t) : f.removeAttr("target");
                    e(s).remove()
                }
            }
            function y() {
                if (h)
                    return;
                var n = true;
                try {
                    if (p)
                        throw"timeout";
                    var r, s;
                    s = a.contentWindow ? a.contentWindow.document : a.contentDocument ? a.contentDocument : a.document;
                    var o = i.dataType == "xml" || s.XMLDocument || e.isXMLDoc(s);
                    t("isXml=" + o);
                    if (!o && (s.body == null || s.body.innerHTML == "")) {
                        if (--g) {
                            t("requeing onLoad callback, DOM not available");
                            setTimeout(y, 250);
                            return
                        }
                        t("Could not access iframe DOM after 100 tries.");
                        return
                    }
                    t("response detected");
                    h = true;
                    l.responseText = s.body ? s.body.innerHTML : null;
                    l.responseXML = s.XMLDocument ? s.XMLDocument : s;
                    l.getResponseHeader = function(e) {
                        var t = {"content-type": i.dataType};
                        return t[e]
                    };
                    if (i.dataType == "json" || i.dataType == "script") {
                        var f = s.getElementsByTagName("textarea")[0];
                        if (f)
                            l.responseText = f.value;
                        else {
                            var d = s.getElementsByTagName("pre")[0];
                            if (d)
                                l.responseText = d.innerHTML
                        }
                    } else if (i.dataType == "xml" && !l.responseXML && l.responseText != null) {
                        l.responseXML = b(l.responseText)
                    }
                    r = e.httpData(l, i.dataType)
                } catch (v) {
                    t("error caught:", v);
                    n = false;
                    l.error = v;
                    e.handleError(i, l, "error", v)
                }
                if (n) {
                    i.success(r, "success");
                    if (c)
                        e.event.trigger("ajaxSuccess", [l, i])
                }
                if (c)
                    e.event.trigger("ajaxComplete", [l, i]);
                if (c && !--e.active)
                    e.event.trigger("ajaxStop");
                if (i.complete)
                    i.complete(l, n ? "success" : "error");
                setTimeout(function() {
                    u.removeData("form-plugin-onload");
                    u.remove();
                    l.responseXML = null
                }, 100)
            }
            function b(e, t) {
                if (window.ActiveXObject) {
                    t = new ActiveXObject("Microsoft.XMLDOM");
                    t.async = "false";
                    t.loadXML(e)
                } else
                    t = (new DOMParser).parseFromString(e, "text/xml");
                return t && t.documentElement && t.documentElement.tagName != "parsererror" ? t : null
            }
            var r = f[0];
            if (e(":input[name=submit]", r).length) {
                alert('Error: Form elements must not be named "submit".');
                return
            }
            var i = e.extend({}, e.ajaxSettings, n);
            var s = e.extend(true, {}, e.extend(true, {}, e.ajaxSettings), i);
            var o = "jqFormIO" + (new Date).getTime();
            var u = e('<iframe id="' + o + '" name="' + o + '" src="' + i.iframeSrc + '" onload="(jQuery(this).data(\'form-plugin-onload\'))()" />');
            var a = u[0];
            u.css({position: "absolute", top: "-1000px", left: "-1000px"});
            var l = {aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function() {
                }, getResponseHeader: function() {
                }, setRequestHeader: function() {
                }, abort: function() {
                    this.aborted = 1;
                    u.attr("src", i.iframeSrc)
                }};
            var c = i.global;
            if (c && !(e.active++))
                e.event.trigger("ajaxStart");
            if (c)
                e.event.trigger("ajaxSend", [l, i]);
            if (s.beforeSend && s.beforeSend(l, s) === false) {
                s.global && e.active--;
                return
            }
            if (l.aborted)
                return;
            var h = false;
            var p = 0;
            var d = r.clk;
            if (d) {
                var v = d.name;
                if (v && !d.disabled) {
                    i.extraData = i.extraData || {};
                    i.extraData[v] = d.value;
                    if (d.type == "image") {
                        i.extraData[v + ".x"] = r.clk_x;
                        i.extraData[v + ".y"] = r.clk_y
                    }
                }
            }
            if (i.forceSync)
                m();
            else
                setTimeout(m, 10);
            var g = 100;
        }
        if (!this.length) {
            t("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        if (typeof n == "function")
            n = {success: n};
        var r = e.trim(this.attr("action"));
        if (r) {
            r = (r.match(/^([^#]+)/) || [])[1]
        }
        r = r || window.location.href || "";
        n = e.extend({url: r, type: this.attr("method") || "GET", iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"}, n || {});
        var i = {};
        this.trigger("form-pre-serialize", [this, n, i]);
        if (i.veto) {
            t("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        if (n.beforeSerialize && n.beforeSerialize(this, n) === false) {
            t("ajaxSubmit: submit aborted via beforeSerialize callback");
            return this
        }
        var s = this.formToArray(n.semantic);
        if (n.data) {
            n.extraData = n.data;
            for (var o in n.data) {
                if (n.data[o]instanceof Array) {
                    for (var u in n.data[o])
                        s.push({name: o, value: n.data[o][u]})
                } else
                    s.push({name: o, value: n.data[o]})
            }
        }
        if (n.beforeSubmit && n.beforeSubmit(s, this, n) === false) {
            t("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [s, this, n, i]);
        if (i.veto) {
            t("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        var a = e.param(s);
        if (n.type.toUpperCase() == "GET") {
            n.url += (n.url.indexOf("?") >= 0 ? "&" : "?") + a;
            n.data = null
        } else
            n.data = a;
        var f = this, l = [];
        if (n.resetForm)
            l.push(function() {
                f.resetForm()
            });
        if (n.clearForm)
            l.push(function() {
                f.clearForm()
            });
        if (!n.dataType && n.target) {
            var c = n.success || function() {
            };
            l.push(function(t) {
                var r = n.replaceTarget ? "replaceWith" : "html";
                e(n.target)[r](t).each(c, arguments)
            })
        } else if (n.success)
            l.push(n.success);
        n.success = function(e, t, r) {
            for (var i = 0, s = l.length; i < s; i++)
                l[i].apply(n, [e, t, r || f, f])
        };
        var h = e("input:file", this).fieldValue();
        var p = false;
        for (var d = 0; d < h.length; d++)
            if (h[d])
                p = true;
        var v = false;
        if (h.length && n.iframe !== false || n.iframe || p || v) {
            if (n.closeKeepAlive)
                e.get(n.closeKeepAlive, m);
            else
                m()
        } else
            e.ajax(n);
        this.trigger("form-submit-notify", [this, n]);
        return this;
    };
    e.fn.ajaxForm = function(t) {
        return this.ajaxFormUnbind().bind("submit.form-plugin", function(n) {
            n.preventDefault();
            e(this).ajaxSubmit(t)
        }).bind("click.form-plugin", function(t) {
            var n = t.target;
            var r = e(n);
            if (!r.is(":submit,input:image")) {
                var i = r.closest(":submit");
                if (i.length == 0)
                    return;
                n = i[0]
            }
            var s = this;
            s.clk = n;
            if (n.type == "image") {
                if (t.offsetX != undefined) {
                    s.clk_x = t.offsetX;
                    s.clk_y = t.offsetY
                } else if (typeof e.fn.offset == "function") {
                    var o = r.offset();
                    s.clk_x = t.pageX - o.left;
                    s.clk_y = t.pageY - o.top
                } else {
                    s.clk_x = t.pageX - n.offsetLeft;
                    s.clk_y = t.pageY - n.offsetTop
                }
            }
            setTimeout(function() {
                s.clk = s.clk_x = s.clk_y = null
            }, 100)
        })
    };
    e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    e.fn.formToArray = function(t) {
        var n = [];
        if (this.length == 0)
            return n;
        var r = this[0];
        var i = t ? r.getElementsByTagName("*") : r.elements;
        if (!i)
            return n;
        for (var s = 0, o = i.length; s < o; s++) {
            var u = i[s];
            var a = u.name;
            if (!a)
                continue;
            if (t && r.clk && u.type == "image") {
                if (!u.disabled && r.clk == u) {
                    n.push({name: a, value: e(u).val()});
                    n.push({name: a + ".x", value: r.clk_x}, {name: a + ".y", value: r.clk_y})
                }
                continue
            }
            var f = e.fieldValue(u, true);
            if (f && f.constructor == Array) {
                for (var l = 0, c = f.length; l < c; l++)
                    n.push({name: a, value: f[l]})
            } else if (f !== null && typeof f != "undefined")
                n.push({name: a, value: f})
        }
        if (!t && r.clk) {
            var h = e(r.clk), p = h[0], a = p.name;
            if (a && !p.disabled && p.type == "image") {
                n.push({name: a, value: h.val()});
                n.push({name: a + ".x", value: r.clk_x}, {name: a + ".y", value: r.clk_y})
            }
        }
        return n
    };
    e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    };
    e.fn.fieldSerialize = function(t) {
        var n = [];
        this.each(function() {
            var r = this.name;
            if (!r)
                return;
            var i = e.fieldValue(this, t);
            if (i && i.constructor == Array) {
                for (var s = 0, o = i.length; s < o; s++)
                    n.push({name: r, value: i[s]})
            } else if (i !== null && typeof i != "undefined")
                n.push({name: this.name, value: i})
        });
        return e.param(n)
    };
    e.fn.fieldValue = function(t) {
        for (var n = [], r = 0, i = this.length; r < i; r++) {
            var s = this[r];
            var o = e.fieldValue(s, t);
            if (o === null || typeof o == "undefined" || o.constructor == Array && !o.length)
                continue;
            o.constructor == Array ? e.merge(n, o) : n.push(o)
        }
        return n
    };
    e.fieldValue = function(e, t) {
        var n = e.name, r = e.type, i = e.tagName.toLowerCase();
        if (typeof t == "undefined")
            t = true;
        if (t && (!n || e.disabled || r == "reset" || r == "button" || (r == "checkbox" || r == "radio") && !e.checked || (r == "submit" || r == "image") && e.form && e.form.clk != e || i == "select" && e.selectedIndex == -1))
            return null;
        if (i == "select") {
            var s = e.selectedIndex;
            if (s < 0)
                return null;
            var o = [], u = e.options;
            var a = r == "select-one";
            var f = a ? s + 1 : u.length;
            for (var l = a ? s : 0; l < f; l++) {
                var c = u[l];
                if (c.selected) {
                    var h = c.value;
                    if (!h)
                        h = c.attributes && c.attributes["value"] && !c.attributes["value"].specified ? c.text : c.value;
                    if (a)
                        return h;
                    o.push(h)
                }
            }
            return o
        }
        return e.value
    };
    e.fn.clearForm = function() {
        return this.each(function() {
            e("input,select,textarea", this).clearFields()
        })
    };
    e.fn.clearFields = e.fn.clearInputs = function() {
        return this.each(function() {
            var e = this.type, t = this.tagName.toLowerCase();
            if (e == "text" || e == "password" || t == "textarea")
                this.value = "";
            else if (e == "checkbox" || e == "radio")
                this.checked = false;
            else if (t == "select")
                this.selectedIndex = -1
        })
    };
    e.fn.resetForm = function() {
        return this.each(function() {
            if (typeof this.reset == "function" || typeof this.reset == "object" && !this.reset.nodeType)
                this.reset()
        })
    };
    e.fn.enable = function(e) {
        if (e == undefined)
            e = true;
        return this.each(function() {
            this.disabled = !e
        })
    };
    e.fn.selected = function(t) {
        if (t == undefined)
            t = true;
        return this.each(function() {
            var n = this.type;
            if (n == "checkbox" || n == "radio")
                this.checked = t;
            else if (this.tagName.toLowerCase() == "option") {
                var r = e(this).parent("select");
                if (t && r[0] && r[0].type == "select-one") {
                    r.find("option").selected(false)
                }
                this.selected = t
            }
        })
    };
})(jQuery);

/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
 * Copyright (c) 2013 JΓ¶rn Zaefferer; Licensed MIT */
(function(t) {
    t.extend(t.fn, {validate: function(e) {
            if (!this.length)
                return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function(e) {
                function s() {
                    var s;
                    return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0
                }
                return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
            })), i)
        }, valid: function() {
            if (t(this[0]).is("form"))
                return this.validate().form();
            var e = !0, i = t(this[0].form).validate();
            return this.each(function() {
                e = e && i.element(this)
            }), e
        }, removeAttrs: function(e) {
            var i = {}, s = this;
            return t.each(e.split(/\s/), function(t, e) {
                i[e] = s.attr(e), s.removeAttr(e)
            }), i
        }, rules: function(e, i) {
            var s = this[0];
            if (e) {
                var r = t.data(s.form, "validator").settings, n = r.rules, a = t.validator.staticRules(s);
                switch (e) {
                    case"add":
                        t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
                        break;
                    case"remove":
                        if (!i)
                            return delete n[s.name], a;
                        var u = {};
                        return t.each(i.split(/\s/), function(t, e) {
                            u[e] = a[e], delete a[e]
                        }), u
                    }
            }
            var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
            if (o.required) {
                var l = o.required;
                delete o.required, o = t.extend({required: l}, o)
            }
            return o
        }}), t.extend(t.expr[":"], {blank: function(e) {
            return!t.trim("" + t(e).val())
        }, filled: function(e) {
            return!!t.trim("" + t(e).val())
        }, unchecked: function(e) {
            return!t(e).prop("checked")
        }}), t.validator = function(e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function(e, i) {
        return 1 === arguments.length ? function() {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
            e = e.replace(RegExp("\\{" + t + "\\}", "g"), function() {
                return i
            })
        }), e)
    }, t.extend(t.validator, {defaults: {messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: t([]), errorLabelContainer: t([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
            }, onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            }, onkeyup: function(t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            }, onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            }, highlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
            }, unhighlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
            }}, setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        }, messages: {required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: t.validator.format("Please enter no more than {0} characters."), minlength: t.validator.format("Please enter at least {0} characters."), rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."), range: t.validator.format("Please enter a value between {0} and {1}."), max: t.validator.format("Please enter a value less than or equal to {0}."), min: t.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges: !1, prototype: {init: function() {
                function e(e) {
                    var i = t.data(this[0].form, "validator"), s = "on" + e.type.replace(/^validate/, "");
                    i.settings[s] && i.settings[s].call(i, this[0], e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i = this.groups = {};
                t.each(this.settings.groups, function(e, s) {
                    "string" == typeof s && (s = s.split(/\s/)), t.each(s, function(t, s) {
                        i[s] = e
                    })
                });
                var s = this.settings.rules;
                t.each(s, function(e, i) {
                    s[e] = t.validator.normalizeRule(i)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            }, form: function() {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                    this.check(e[t]);
                return this.valid()
            }, element: function(e) {
                e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                var i = this.check(e) !== !1;
                return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            }, showErrors: function(e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var i in e)
                        this.errorList.push({message: e[i], element: this.findByName(i)[0]});
                    this.successList = t.grep(this.successList, function(t) {
                        return!(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            }, numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            }, objectLength: function(t) {
                var e = 0;
                for (var i in t)
                    e++;
                return e
            }, hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            }, valid: function() {
                return 0 === this.size()
            }, size: function() {
                return this.errorList.length
            }, focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {
                    }
            }, findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            }, elements: function() {
                var e = this, i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return!this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            }, clean: function(e) {
                return t(e)[0]
            }, errors: function() {
                var e = this.settings.errorClass.replace(" ", ".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            }, reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            }, prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            }, elementValue: function(e) {
                var i = t(e).attr("type"), s = t(e).val();
                return"radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s
            }, check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, s = t(e).rules(), r = !1, n = this.elementValue(e);
                for (var a in s) {
                    var u = {method: a, parameters: s[a]};
                    try {
                        if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
                            r = !0;
                            continue
                        }
                        if (r = !1, "pending" === i)
                            return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
                        if (!i)
                            return this.formatAndAdd(e, u), !1
                    } catch (o) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o
                    }
                }
                return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0)
            }, customDataMessage: function(e, i) {
                return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
            }, customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            }, findDefined: function() {
                for (var t = 0; arguments.length > t; t++)
                    if (void 0 !== arguments[t])
                        return arguments[t];
                return void 0
            }, defaultMessage: function(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            }, formatAndAdd: function(e, i) {
                var s = this.defaultMessage(e, i.method), r = /\$?\{(\d+)\}/g;
                "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({message: s, element: e}), this.errorMap[e.name] = s, this.submitted[e.name] = s
            }, addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            }, defaultShowErrors: function() {
                var t, e;
                for (t = 0; this.errorList[t]; t++) {
                    var i = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++)
                        this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++)
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function() {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            }, showLabel: function(e, i) {
                var s = this.errorsFor(e);
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
            }, errorsFor: function(e) {
                var i = this.idOrName(e);
                return this.errors().filter(function() {
                    return t(this).attr("for") === i
                })
            }, idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            }, validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
            }, checkable: function(t) {
                return/radio|checkbox/i.test(t.type)
            }, findByName: function(e) {
                return t(this.currentForm).find("[name='" + e + "']")
            }, getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case"select":
                        return t("option:selected", i).length;
                    case"input":
                        if (this.checkable(i))
                            return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            }, depend: function(t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            }, dependTypes: {"boolean": function(t) {
                    return t
                }, string: function(e, i) {
                    return!!t(e, i.form).length
                }, "function": function(t, e) {
                    return t(e)
                }}, optional: function(e) {
                var i = this.elementValue(e);
                return!t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            }, startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            }, stopRequest: function(e, i) {
                this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {old: null, valid: !0, message: this.defaultMessage(e, "remote")})
            }}, classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}}, addClassRules: function(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        }, classRules: function(e) {
            var i = {}, s = t(e).attr("class");
            return s && t.each(s.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        }, attributeRules: function(e) {
            var i = {}, s = t(e), r = s[0].getAttribute("type");
            for (var n in t.validator.methods) {
                var a;
                "required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !!a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0)
            }
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        }, dataRules: function(e) {
            var i, s, r = {}, n = t(e);
            for (i in t.validator.methods)
                s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
            return r
        }, staticRules: function(e) {
            var i = {}, s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
        }, normalizeRules: function(e, i) {
            return t.each(e, function(s, r) {
                if (r === !1)
                    return delete e[s], void 0;
                if (r.param || r.depends) {
                    var n = !0;
                    switch (typeof r.depends) {
                        case"string":
                            n = !!t(r.depends, i.form).length;
                            break;
                        case"function":
                            n = r.depends.call(i, i)
                    }
                    n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s]
                }
            }), t.each(e, function(s, r) {
                e[s] = t.isFunction(r) ? r(i) : r
            }), t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        }, normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function() {
                    i[this] = !0
                }), e = i
            }
            return e
        }, addMethod: function(e, i, s) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], 3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        }, methods: {required: function(e, i, s) {
                if (!this.depend(s, i))
                    return"dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            }, email: function(t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            }, url: function(t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            }, date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
            }, dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
            }, number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            }, digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            }, creditcard: function(t, e) {
                if (this.optional(e))
                    return"dependency-mismatch";
                if (/[^0-9 \-]+/.test(t))
                    return!1;
                var i = 0, s = 0, r = !1;
                t = t.replace(/\D/g, "");
                for (var n = t.length - 1; n >= 0; n--) {
                    var a = t.charAt(n);
                    s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r
                }
                return 0 === i % 10
            }, minlength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s
            }, maxlength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || s >= r
            }, rangelength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s[0] && s[1] >= r
            }, min: function(t, e, i) {
                return this.optional(e) || t >= i
            }, max: function(t, e, i) {
                return this.optional(e) || i >= t
            }, range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && i[1] >= t
            }, equalTo: function(e, i, s) {
                var r = t(s);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    t(i).valid()
                }), e === r.val()
            }, remote: function(e, i, s) {
                if (this.optional(i))
                    return"dependency-mismatch";
                var r = this.previousValue(i);
                if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {url: s} || s, r.old === e)
                    return r.valid;
                r.old = e;
                var n = this;
                this.startRequest(i);
                var a = {};
                return a[i.name] = e, t.ajax(t.extend(!0, {url: s, mode: "abort", port: "validate" + i.name, dataType: "json", data: a, success: function(s) {
                        n.settings.messages[i.name].remote = r.originalMessage;
                        var a = s === !0 || "true" === s;
                        if (a) {
                            var u = n.formSubmitted;
                            n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors()
                        } else {
                            var o = {}, l = s || n.defaultMessage(i, "remote");
                            o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o)
                        }
                        r.valid = a, n.stopRequest(i, a)
                    }}, s)), "pending"
            }}}), t.format = t.validator.format
})(jQuery), function(t) {
    var e = {};
    if (t.ajaxPrefilter)
        t.ajaxPrefilter(function(t, i, s) {
            var r = t.port;
            "abort" === t.mode && (e[r] && e[r].abort(), e[r] = s)
        });
    else {
        var i = t.ajax;
        t.ajax = function(s) {
            var r = ("mode"in s ? s : t.ajaxSettings).mode, n = ("port"in s ? s : t.ajaxSettings).port;
            return"abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments)
        }
    }
}(jQuery), function(t) {
    t.extend(t.fn, {validateDelegate: function(e, i, s) {
            return this.bind(i, function(i) {
                var r = t(i.target);
                return r.is(e) ? s.apply(r, arguments) : void 0
            })
        }})
}(jQuery);

/*
 * jQuery wizard plug-in 3.0.7 (18-SEPT-2012)
 *
 *
 * Copyright (c) 2012 Jan Sundman (jan.sundman[at]aland.net)
 *
 * http://www.thecodemine.org
 *
 * Licensed under the MIT licens:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 */
(function(e) {
    e.widget("ui.formwizard", {_init: function() {
            var t = this;
            var n = this.options.formOptions.success;
            var r = this.options.formOptions.complete;
            var i = this.options.formOptions.beforeSend;
            var s = this.options.formOptions.beforeSubmit;
            var o = this.options.formOptions.beforeSerialize;
            this.options.formOptions = e.extend(this.options.formOptions, {success: function(e, r, i) {
                    if (n) {
                        n(e, r, i)
                    }
                    if (t.options.formOptions && t.options.formOptions.resetForm || !t.options.formOptions) {
                        t._reset()
                    }
                }, complete: function(e, n) {
                    if (r) {
                        r(e, n)
                    }
                    t._enableNavigation()
                }, beforeSubmit: function(e, n, r) {
                    if (s) {
                        var i = s(e, n, r);
                        if (!i)
                            t._enableNavigation();
                        return i
                    }
                }, beforeSend: function(e) {
                    if (i) {
                        var n = i(e);
                        if (!n)
                            t._enableNavigation();
                        return n
                    }
                }, beforeSerialize: function(e, n) {
                    if (o) {
                        var r = o(e, n);
                        if (!r)
                            t._enableNavigation();
                        return r
                    }
                }});
            if (this.options.historyEnabled) {
                e.bbq.removeState("_" + e(this.element).attr("id"))
            }
            this.steps = this.element.find(".step").hide();
            this.firstStep = this.steps.eq(0).attr("id");
            this.activatedSteps = new Array;
            this.isLastStep = false;
            this.previousStep = undefined;
            this.currentStep = this.steps.eq(0).attr("id");
            this.nextButton = this.element.find(this.options.next).click(function() {
                return t._next()
            });
            this.nextButtonInitinalValue = this.nextButton.val();
            this.nextButton.val(this.options.textNext);
            this.backButton = this.element.find(this.options.back).click(function() {
                t._back();
                return false
            });
            this.backButtonInitinalValue = this.backButton.val();
            this.backButton.val(this.options.textBack);
            if (this.options.validationEnabled && jQuery().validate == undefined) {
                this.options.validationEnabled = false;
                if (window["console"] !== undefined) {
                    console.log("%s", "validationEnabled option set, but the validation plugin is not included")
                }
            } else if (this.options.validationEnabled) {
                this.element.validate(this.options.validationOptions)
            }
            if (this.options.formPluginEnabled && jQuery().ajaxSubmit == undefined) {
                this.options.formPluginEnabled = false;
                if (window["console"] !== undefined) {
                    console.log("%s", "formPluginEnabled option set but the form plugin is not included")
                }
            }
            if (this.options.disableInputFields == true) {
                e(this.steps).find(":input:not('.wizard-ignore')").attr("disabled", "disabled")
            }
            if (this.options.historyEnabled) {
                e(window).bind("hashchange", undefined, function(n) {
                    var r = n.getState("_" + e(t.element).attr("id")) || t.firstStep;
                    if (r !== t.currentStep) {
                        if (t.options.validationEnabled && r === t._navigate(t.currentStep)) {
                            if (!t.element.valid()) {
                                t._updateHistory(t.currentStep);
                                t.element.validate().focusInvalid();
                                return false
                            }
                        }
                        if (r !== t.currentStep)
                            t._show(r)
                    }
                })
            }
            this.element.addClass("ui-formwizard");
            this.element.find(":input").addClass("ui-wizard-content");
            this.steps.addClass("ui-formwizard-content");
            this.backButton.addClass("ui-formwizard-button ui-wizard-content");
            this.nextButton.addClass("ui-formwizard-button ui-wizard-content");
            if (!this.options.disableUIStyles) {
                this.element.addClass("ui-helper-reset ui-widget ui-widget-content ui-helper-reset ui-corner-all");
                this.element.find(":input").addClass("ui-helper-reset ui-state-default");
                this.steps.addClass("ui-helper-reset ui-corner-all");
                this.backButton.addClass("ui-helper-reset ui-state-default");
                this.nextButton.addClass("ui-helper-reset ui-state-default")
            }
            this._show(undefined);
            return e(this)
        }, _next: function() {
            if (this.options.validationEnabled) {
                if (!this.element.valid()) {
                    this.element.validate().focusInvalid();
                    return false
                }
            }
            if (this.options.remoteAjax != undefined) {
                var t = this.options.remoteAjax[this.currentStep];
                var n = this;
                if (t !== undefined) {
                    var r = t.success;
                    var i = t.beforeSend;
                    var s = t.complete;
                    t = e.extend({}, t, {success: function(e, t) {
                            if (r !== undefined && r(e, t) || r == undefined) {
                                n._continueToNextStep()
                            }
                        }, beforeSend: function(t) {
                            n._disableNavigation();
                            if (i !== undefined)
                                i(t);
                            e(n.element).trigger("before_remote_ajax", {currentStep: n.currentStep})
                        }, complete: function(t, r) {
                            if (s !== undefined)
                                s(t, r);
                            e(n.element).trigger("after_remote_ajax", {currentStep: n.currentStep});
                            n._enableNavigation()
                        }});
                    this.element.ajaxSubmit(t);
                    return false
                }
            }
            return this._continueToNextStep()
        }, _back: function() {
            if (this.activatedSteps.length > 0) {
                if (this.options.historyEnabled) {
                    this._updateHistory(this.activatedSteps[this.activatedSteps.length - 2])
                } else {
                    this._show(this.activatedSteps[this.activatedSteps.length - 2], true)
                }
            }
            return false
        }, _continueToNextStep: function() {
            if (this.isLastStep) {
                for (var e = 0; e < this.activatedSteps.length; e++) {
                    this.steps.filter("#" + this.activatedSteps[e]).find(":input").not(".wizard-ignore").removeAttr("disabled")
                }
                if (!this.options.formPluginEnabled) {
                    return true
                } else {
                    this._disableNavigation();
                    this.element.ajaxSubmit(this.options.formOptions);
                    return false
                }
            }
            var t = this._navigate(this.currentStep);
            if (t == this.currentStep) {
                return false
            }
            if (this.options.historyEnabled) {
                this._updateHistory(t)
            } else {
                this._show(t, true)
            }
            return false
        }, _updateHistory: function(t) {
            var n = {};
            n["_" + e(this.element).attr("id")] = t;
            e.bbq.pushState(n)
        }, _disableNavigation: function() {
            this.nextButton.attr("disabled", "disabled");
            this.backButton.attr("disabled", "disabled");
            if (!this.options.disableUIStyles) {
                this.nextButton.removeClass("ui-state-active").addClass("ui-state-disabled");
                this.backButton.removeClass("ui-state-active").addClass("ui-state-disabled")
            }
        }, _enableNavigation: function() {
            if (this.isLastStep) {
                this.nextButton.val(this.options.textSubmit)
            } else {
                this.nextButton.val(this.options.textNext)
            }
            if (e.trim(this.currentStep) !== this.steps.eq(0).attr("id")) {
                this.backButton.removeAttr("disabled");
                if (!this.options.disableUIStyles) {
                    this.backButton.removeClass("ui-state-disabled").addClass("ui-state-active")
                }
            }
            this.nextButton.removeAttr("disabled");
            if (!this.options.disableUIStyles) {
                this.nextButton.removeClass("ui-state-disabled").addClass("ui-state-active")
            }
        }, _animate: function(e, t, n) {
            this._disableNavigation();
            var r = this.steps.filter("#" + e);
            var i = this.steps.filter("#" + t);
            r.find(":input").not(".wizard-ignore").attr("disabled", "disabled");
            i.find(":input").not(".wizard-ignore").removeAttr("disabled");
            var s = this;
            r.animate(s.options.outAnimation, s.options.outDuration, s.options.easing, function() {
                i.animate(s.options.inAnimation, s.options.inDuration, s.options.easing, function() {
                    if (s.options.focusFirstInput)
                        i.find(":input:first").focus();
                    s._enableNavigation();
                    n.apply(s)
                });
                return
            })
        }, _checkIflastStep: function(t) {
            this.isLastStep = false;
            if (e("#" + t).hasClass(this.options.submitStepClass) || this.steps.filter(":last").attr("id") == t) {
                this.isLastStep = true
            }
        }, _getLink: function(t) {
            var n = undefined;
            var r = this.steps.filter("#" + t).find(this.options.linkClass);
            if (r != undefined) {
                if (r.filter(":radio,:checkbox").size() > 0) {
                    n = r.filter(this.options.linkClass + ":checked").val()
                } else {
                    n = e(r).val()
                }
            }
            return n
        }, _navigate: function(e) {
            var t = this._getLink(e);
            if (t != undefined) {
                if (t != "" && t != null && t != undefined && this.steps.filter("#" + t).attr("id") != undefined) {
                    return t
                }
                return this.currentStep
            } else if (t == undefined && !this.isLastStep) {
                var n = this.steps.filter("#" + e).next().attr("id");
                return n
            }
        }, _show: function(t) {
            var n = false;
            var r = t !== undefined;
            if (t == undefined || t == "") {
                this.activatedSteps.pop();
                t = this.firstStep;
                this.activatedSteps.push(t)
            } else {
                if (e.inArray(t, this.activatedSteps) > -1) {
                    n = true;
                    this.activatedSteps.pop()
                } else {
                    this.activatedSteps.push(t)
                }
            }
            if (this.currentStep !== t || t === this.firstStep) {
                this.previousStep = this.currentStep;
                this._checkIflastStep(t);
                this.currentStep = t;
                var i = function() {
                    if (r) {
                        e(this.element).trigger("step_shown", e.extend({isBackNavigation: n}, this._state()))
                    }
                };
                if (r) {
                    e(this.element).trigger("before_step_shown", e.extend({isBackNavigation: n}, this._state()))
                }
                this._animate(this.previousStep, t, i)
            }
        }, _reset: function() {
            this.element.resetForm();
            e("label,:input,textarea", this).removeClass("error");
            for (var t = 0; t < this.activatedSteps.length; t++) {
                this.steps.filter("#" + this.activatedSteps[t]).hide().find(":input").attr("disabled", "disabled")
            }
            this.activatedSteps = new Array;
            this.previousStep = undefined;
            this.isLastStep = false;
            if (this.options.historyEnabled) {
                this._updateHistory(this.firstStep)
            } else {
                this._show(this.firstStep)
            }
        }, _state: function(e) {
            var t = {settings: this.options, activatedSteps: this.activatedSteps, isLastStep: this.isLastStep, isFirstStep: this.currentStep === this.firstStep, previousStep: this.previousStep, currentStep: this.currentStep, backButton: this.backButton, nextButton: this.nextButton, steps: this.steps, firstStep: this.firstStep};
            if (e !== undefined)
                return t[e];
            return t
        }, show: function(e) {
            if (this.options.historyEnabled) {
                this._updateHistory(e)
            } else {
                this._show(e)
            }
        }, state: function(e) {
            return this._state(e)
        }, reset: function() {
            this._reset()
        }, next: function() {
            this._next()
        }, back: function() {
            this._back()
        }, destroy: function() {
            this.element.find("*").removeAttr("disabled").show();
            this.nextButton.unbind("click").val(this.nextButtonInitinalValue).removeClass("ui-state-disabled").addClass("ui-state-active");
            this.backButton.unbind("click").val(this.backButtonInitinalValue).removeClass("ui-state-disabled").addClass("ui-state-active");
            this.backButtonInitinalValue = undefined;
            this.nextButtonInitinalValue = undefined;
            this.activatedSteps = undefined;
            this.previousStep = undefined;
            this.currentStep = undefined;
            this.isLastStep = undefined;
            this.options = undefined;
            this.nextButton = undefined;
            this.backButton = undefined;
            this.formwizard = undefined;
            this.element = undefined;
            this.steps = undefined;
            this.firstStep = undefined
        }, update_steps: function() {
            this.steps = this.element.find(".step").addClass("ui-formwizard-content");
            this.firstStep = this.steps.eq(0).attr("id");
            this.steps.not("#" + this.currentStep).hide().find(":input").addClass("ui-wizard-content").attr("disabled", "disabled");
            this._checkIflastStep(this.currentStep);
            this._enableNavigation();
            if (!this.options.disableUIStyles) {
                this.steps.addClass("ui-helper-reset ui-corner-all");
                this.steps.find(":input").addClass("ui-helper-reset ui-state-default")
            }
        }, options: {historyEnabled: false, validationEnabled: false, validationOptions: undefined, formPluginEnabled: false, linkClass: ".link", submitStepClass: "submit_step", back: ":reset", next: ":submit", textSubmit: "Submit", textNext: "Next", textBack: "Back", remoteAjax: undefined, inAnimation: {opacity: "show"}, outAnimation: {opacity: "hide"}, inDuration: 400, outDuration: 400, easing: "swing", focusFirstInput: false, disableInputFields: true, formOptions: {reset: true, success: function(e) {
                    if (window["console"] !== undefined) {
                        console.log("%s", "form submit successful")
                    }
                }, disableUIStyles: false}}})
})(jQuery);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */
(function() {
    var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i, t = self.Prism = {util: {type: function(e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
            }, clone: function(e) {
                var n = t.util.type(e);
                switch (n) {
                    case"Object":
                        var r = {};
                        for (var i in e)
                            e.hasOwnProperty(i) && (r[i] = t.util.clone(e[i]));
                        return r;
                    case"Array":
                        return e.slice()
                }
                return e
            }}, languages: {extend: function(e, n) {
                var r = t.util.clone(t.languages[e]);
                for (var i in n)
                    r[i] = n[i];
                return r
            }, insertBefore: function(e, n, r, i) {
                i = i || t.languages;
                var s = i[e], o = {};
                for (var u in s)
                    if (s.hasOwnProperty(u)) {
                        if (u == n)
                            for (var a in r)
                                r.hasOwnProperty(a) && (o[a] = r[a]);
                        o[u] = s[u]
                    }
                return i[e] = o
            }, DFS: function(e, n) {
                for (var r in e) {
                    n.call(e, r, e[r]);
                    t.util.type(e) === "Object" && t.languages.DFS(e[r], n)
                }
            }}, highlightAll: function(e, n) {
            var r = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
            for (var i = 0, s; s = r[i++]; )
                t.highlightElement(s, e === !0, n)
        }, highlightElement: function(r, i, s) {
            var o, u, a = r;
            while (a && !e.test(a.className))
                a = a.parentNode;
            if (a) {
                o = (a.className.match(e) || [, ""])[1];
                u = t.languages[o]
            }
            if (!u)
                return;
            r.className = r.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o;
            a = r.parentNode;
            /pre/i.test(a.nodeName) && (a.className = a.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
            var f = r.textContent;
            if (!f)
                return;
            f = f.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\u00a0/g, " ");
            var l = {element: r, language: o, grammar: u, code: f};
            t.hooks.run("before-highlight", l);
            if (i && self.Worker) {
                var c = new Worker(t.filename);
                c.onmessage = function(e) {
                    l.highlightedCode = n.stringify(JSON.parse(e.data), o);
                    t.hooks.run("before-insert", l);
                    l.element.innerHTML = l.highlightedCode;
                    s && s.call(l.element);
                    t.hooks.run("after-highlight", l)
                };
                c.postMessage(JSON.stringify({language: l.language, code: l.code}))
            } else {
                l.highlightedCode = t.highlight(l.code, l.grammar, l.language);
                t.hooks.run("before-insert", l);
                l.element.innerHTML = l.highlightedCode;
                s && s.call(r);
                t.hooks.run("after-highlight", l)
            }
        }, highlight: function(e, r, i) {
            return n.stringify(t.tokenize(e, r), i)
        }, tokenize: function(e, n, r) {
            var i = t.Token, s = [e], o = n.rest;
            if (o) {
                for (var u in o)
                    n[u] = o[u];
                delete n.rest
            }
            e:for (var u in n) {
                if (!n.hasOwnProperty(u) || !n[u])
                    continue;
                var a = n[u], f = a.inside, l = !!a.lookbehind || 0;
                a = a.pattern || a;
                for (var c = 0; c < s.length; c++) {
                    var h = s[c];
                    if (s.length > e.length)
                        break e;
                    if (h instanceof i)
                        continue;
                    a.lastIndex = 0;
                    var p = a.exec(h);
                    if (p) {
                        l && (l = p[1].length);
                        var d = p.index - 1 + l, p = p[0].slice(l), v = p.length, m = d + v, g = h.slice(0, d + 1), y = h.slice(m + 1), b = [c, 1];
                        g && b.push(g);
                        var w = new i(u, f ? t.tokenize(p, f) : p);
                        b.push(w);
                        y && b.push(y);
                        Array.prototype.splice.apply(s, b)
                    }
                }
            }
            return s
        }, hooks: {all: {}, add: function(e, n) {
                var r = t.hooks.all;
                r[e] = r[e] || [];
                r[e].push(n)
            }, run: function(e, n) {
                var r = t.hooks.all[e];
                if (!r || !r.length)
                    return;
                for (var i = 0, s; s = r[i++]; )
                    s(n)
            }}}, n = t.Token = function(e, t) {
        this.type = e;
        this.content = t
    };
    n.stringify = function(e, r, i) {
        if (typeof e == "string")
            return e;
        if (Object.prototype.toString.call(e) == "[object Array]")
            return e.map(function(t) {
                return n.stringify(t, r, e)
            }).join("");
        var s = {type: e.type, content: n.stringify(e.content, r, i), tag: "span", classes: ["token", e.type], attributes: {}, language: r, parent: i};
        s.type == "comment" && (s.attributes.spellcheck = "true");
        t.hooks.run("wrap", s);
        var o = "";
        for (var u in s.attributes)
            o += u + '="' + (s.attributes[u] || "") + '"';
        return"<" + s.tag + ' class="' + s.classes.join(" ") + '" ' + o + ">" + s.content + "</" + s.tag + ">"
    };
    if (!self.document) {
        self.addEventListener("message", function(e) {
            var n = JSON.parse(e.data), r = n.language, i = n.code;
            self.postMessage(JSON.stringify(t.tokenize(i, t.languages[r])));
            self.close()
        }, !1);
        return
    }
    var r = document.getElementsByTagName("script");
    r = r[r.length - 1];
    if (r) {
        t.filename = r.src;
        document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll)
    }
})();
;
(function() {
    function e(e, t) {
        return Array.prototype.slice.call((t || document).querySelectorAll(e))
    }
    function n(e, t, n) {
        var r = t.replace(/\s+/g, "").split(","), i = +e.getAttribute("data-line-offset") || 0, s = parseFloat(getComputedStyle(e).lineHeight);
        for (var o = 0, u; u = r[o++]; ) {
            u = u.split("-");
            var a = +u[0], f = +u[1] || a, l = document.createElement("div");
            l.textContent = Array(f - a + 2).join(" \r\n");
            l.className = (n || "") + " line-highlight";
            l.setAttribute("data-start", a);
            f > a && l.setAttribute("data-end", f);
            l.style.top = (a - i - 1) * s + "px";
            (e.querySelector("code") || e).appendChild(l)
        }
    }
    function r() {
        var t = location.hash.slice(1);
        e(".temporary.line-highlight").forEach(function(e) {
            e.parentNode.removeChild(e)
        });
        var r = (t.match(/\.([\d,-]+)$/) || [, ""])[1];
        if (!r || document.getElementById(t))
            return;
        var i = t.slice(0, t.lastIndexOf(".")), s = document.getElementById(i);
        if (!s)
            return;
        s.hasAttribute("data-line") || s.setAttribute("data-line", "");
        n(s, r, "temporary ");
        document.querySelector(".temporary.line-highlight").scrollIntoView()
    }
    if (!window.Prism)
        return;
    var t = crlf = /\r?\n|\r/g, i = 0;
    Prism.hooks.add("after-highlight", function(t) {
        var s = t.element.parentNode, o = s && s.getAttribute("data-line");
        if (!s || !o || !/pre/i.test(s.nodeName))
            return;
        clearTimeout(i);
        e(".line-highlight", s).forEach(function(e) {
            e.parentNode.removeChild(e)
        });
        n(s, o);
        i = setTimeout(r, 1)
    });
    addEventListener("hashchange", r)
})();
;
undefined;
Prism.hooks.add("after-highlight", function(e) {
    var t = e.element.parentNode;
    if (!t || !/pre/i.test(t.nodeName) || t.className.indexOf("line-numbers") === -1) {
        return
    }
    var n = 1 + e.code.split("\n").length;
    var r;
    lines = new Array(n);
    lines = lines.join("<span></span>");
    r = document.createElement("span");
    r.className = "line-numbers-rows";
    r.innerHTML = lines;
    if (t.hasAttribute("data-start")) {
        t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)
    }
    e.element.appendChild(r)
});
Prism.languages.markup = {comment: /&lt;!--[\w\W]*?--(&gt;|&gt;)/g, prolog: /&lt;\?.+?\?&gt;/, doctype: /&lt;!DOCTYPE.+?&gt;/, cdata: /&lt;!\[CDATA\[[\w\W]+?]]&gt;/i, tag: {pattern: /&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?&gt;/gi, inside: {tag: {pattern: /^&lt;\/?[\w:-]+/i, inside: {punctuation: /^&lt;\/?/, namespace: /^[\w-]+?:/}}, "attr-value": {pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi, inside: {punctuation: /=|&gt;|"/g}}, punctuation: /\/?&gt;/g, "attr-name": {pattern: /[\w:-]+/g, inside: {namespace: /^[\w-]+?:/}}}}, entity: /&amp;#?[\da-z]{1,8};/gi};
Prism.hooks.add("wrap", function(e) {
    e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"))
});
;
Prism.languages.css = {comment: /\/\*[\w\W]*?\*\//g, atrule: /@[\w-]+?(\s+[^;{]+)?(?=\s*{|\s*;)/gi, url: /url\((["']?).*?\1\)/gi, selector: /[^\{\}\s][^\{\}]*(?=\s*\{)/g, property: /(\b|\B)[a-z-]+(?=\s*:)/ig, string: /("|')(\\?.)*?\1/g, important: /\B!important\b/gi, ignore: /&(lt|gt|amp);/gi, punctuation: /[\{\};:]/g};
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {style: {pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig, inside: {tag: {pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig, inside: Prism.languages.markup.tag.inside}, rest: Prism.languages.css}}});
;
Prism.languages.css.selector = {pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/g, inside: {"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/g, "pseudo-class": /:[-\w]+(?:\(.*\))?/g, "class": /\.[-:\.\w]+/g, id: /#[-:\.\w]+/g}};
Prism.languages.insertBefore("css", "ignore", {hexcode: /#[\da-f]{3,6}/gi, entity: /\\[\da-f]{1,8}/gi, number: /[\d%\.]+/g, "function": /(attr|calc|cross-fade|cycle|element|hsl|hsla|image|lang|linear-gradient|matrix|matrix3d|perspective|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|rgb|rgba|rotate|rotatex|rotatey|rotatez|rotate3d|scale|scalex|scaley|scalez|scale3d|skew|skewx|skewy|steps|translate|translatex|translatey|translatez|translate3d|url|var)/ig});
;
Prism.languages.clike = {comment: {pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g, lookbehind: !0}, string: /("|')(\\?.)*?\1/g, "class-name": {pattern: /((?:class|interface|extends|implements|trait|instanceof|new)\s+)[a-z0-9_\.\\]+/ig, lookbehind: !0, inside: {punctuation: /(\.|\\)/}}, keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g, "boolean": /\b(true|false)\b/g, "function": {pattern: /[a-z0-9_]+\(/ig, inside: {punctuation: /\(/}}, number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g, operator: /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g, ignore: /&(lt|gt|amp);/gi, punctuation: /[{}[\];(),.:]/g};
;
Prism.languages.javascript = Prism.languages.extend("clike", {keyword: /\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g, number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g});
Prism.languages.insertBefore("javascript", "keyword", {regex: {pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g, lookbehind: !0}});
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {script: {pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig, inside: {tag: {pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig, inside: Prism.languages.markup.tag.inside}, rest: Prism.languages.javascript}}});
;
Prism.languages.php = Prism.languages.extend("clike", {keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|extends|private|protected|parent|static|throw|null|echo|print|trait|namespace|use|final|yield|goto)\b/ig, constant: /[A-Z0-9_]{2,}/g});
Prism.languages.insertBefore("php", "keyword", {deliminator: /(\?>|\?&gt;|&lt;\?php|<\?php)/ig, "this": /\$this/, variable: /(\$\w+)\b/ig, scope: {pattern: /\b[a-z0-9_\\]+::/ig, inside: {keyword: /(static|self|parent)/, punctuation: /(::|\\)/}}, "package": {pattern: /(\\|namespace\s+|use\s+)[a-z0-9_\\]+/ig, lookbehind: !0, inside: {punctuation: /\\/}}});
Prism.languages.insertBefore("php", "operator", {property: {pattern: /(-&gt;)[a-z0-9_]+/ig, lookbehind: !0}});
Prism.languages.markup && Prism.languages.insertBefore("php", "comment", {markup: {pattern: /(\?>|\?&gt;)[\w\W]*?(?=(&lt;\?php|<\?php))/ig, lookbehind: !0, inside: {markup: {pattern: /&lt;\/?[\w:-]+\s*[\w\W]*?&gt;/gi, inside: Prism.languages.markup.tag.inside}, rest: Prism.languages.php}}});

/*
 * Jeditable - jQuery in place edit plugin
 *
 * Copyright (c) 2006-2009 Mika Tuupola, Dylan Verheul
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/jeditable
 *
 * Based on editable by Dylan Verheul <dylan_at_dyve.net>:
 *    http://www.dyve.net/jquery/?editable
 *
 */
(function($) {
    $.fn.editable = function(e, t) {
        if ("disable" == e) {
            $(this).data("disabled.editable", true);
            return
        }
        if ("enable" == e) {
            $(this).data("disabled.editable", false);
            return
        }
        if ("destroy" == e) {
            $(this).unbind($(this).data("event.editable")).removeData("disabled.editable").removeData("event.editable");
            return
        }
        var n = $.extend({}, $.fn.editable.defaults, {target: e}, t);
        var r = $.editable.types[n.type].plugin || function() {
        };
        var i = $.editable.types[n.type].submit || function() {
        };
        var s = $.editable.types[n.type].buttons || $.editable.types["defaults"].buttons;
        var o = $.editable.types[n.type].content || $.editable.types["defaults"].content;
        var u = $.editable.types[n.type].element || $.editable.types["defaults"].element;
        var a = $.editable.types[n.type].reset || $.editable.types["defaults"].reset;
        var f = n.callback || function() {
        };
        var l = n.onedit || function() {
        };
        var c = n.onsubmit || function() {
        };
        var h = n.onreset || function() {
        };
        var p = n.onerror || a;
        if (n.tooltip) {
            $(this).attr("title", n.tooltip)
        }
        n.autowidth = "auto" == n.width;
        n.autoheight = "auto" == n.height;
        return this.each(function() {
            var e = this;
            var t = $(e).width();
            var d = $(e).height();
            $(this).data("event.editable", n.event);
            if (!$.trim($(this).html())) {
                $(this).html(n.placeholder)
            }
            $(this).bind(n.event, function(h) {
                if (true === $(this).data("disabled.editable")) {
                    return
                }
                if (e.editing) {
                    return
                }
                if (false === l.apply(this, [n, e])) {
                    return
                }
                h.preventDefault();
                h.stopPropagation();
                if (n.tooltip) {
                    $(e).removeAttr("title")
                }
                if (0 == $(e).width()) {
                    n.width = t;
                    n.height = d
                } else {
                    if (n.width != "none") {
                        n.width = n.autowidth ? $(e).width() : n.width
                    }
                    if (n.height != "none") {
                        n.height = n.autoheight ? $(e).height() : n.height
                    }
                }
                if ($(this).html().toLowerCase().replace(/(;|"|\/)/g, "") == n.placeholder.toLowerCase().replace(/(;|"|\/)/g, "")) {
                    $(this).html("")
                }
                e.editing = true;
                e.revert = $(e).html();
                $(e).html("");
                var v = $("<form />");
                if (n.cssclass) {
                    if ("inherit" == n.cssclass) {
                        v.attr("class", $(e).attr("class"))
                    } else {
                        v.attr("class", n.cssclass)
                    }
                }
                if (n.style) {
                    if ("inherit" == n.style) {
                        v.attr("style", $(e).attr("style"));
                        v.css("display", $(e).css("display"))
                    } else {
                        v.attr("style", n.style)
                    }
                }
                var m = u.apply(v, [n, e]);
                var g;
                if (n.loadurl) {
                    var y = setTimeout(function() {
                        m.disabled = true;
                        o.apply(v, [n.loadtext, n, e])
                    }, 100);
                    var b = {};
                    b[n.id] = e.id;
                    if ($.isFunction(n.loaddata)) {
                        $.extend(b, n.loaddata.apply(e, [e.revert, n]))
                    } else {
                        $.extend(b, n.loaddata)
                    }
                    $.ajax({type: n.loadtype, url: n.loadurl, data: b, async: false, success: function(e) {
                            window.clearTimeout(y);
                            g = e;
                            m.disabled = false
                        }})
                } else if (n.data) {
                    g = n.data;
                    if ($.isFunction(n.data)) {
                        g = n.data.apply(e, [e.revert, n])
                    }
                } else {
                    g = e.revert
                }
                o.apply(v, [g, n, e]);
                m.attr("name", n.name);
                s.apply(v, [n, e]);
                $(e).append(v);
                r.apply(v, [n, e]);
                $(":input:visible:enabled:first", v).focus();
                if (n.select) {
                    m.select()
                }
                m.keydown(function(t) {
                    if (t.keyCode == 27) {
                        t.preventDefault();
                        a.apply(v, [n, e])
                    }
                });
                var y;
                if ("cancel" == n.onblur) {
                    m.blur(function(t) {
                        y = setTimeout(function() {
                            a.apply(v, [n, e])
                        }, 500)
                    })
                } else if ("submit" == n.onblur) {
                    m.blur(function(e) {
                        y = setTimeout(function() {
                            v.submit()
                        }, 200)
                    })
                } else if ($.isFunction(n.onblur)) {
                    m.blur(function(t) {
                        n.onblur.apply(e, [m.val(), n])
                    })
                } else {
                    m.blur(function(e) {
                    })
                }
                v.submit(function(t) {
                    if (y) {
                        clearTimeout(y)
                    }
                    t.preventDefault();
                    if (false !== c.apply(v, [n, e])) {
                        if (false !== i.apply(v, [n, e])) {
                            if ($.isFunction(n.target)) {
                                var r = n.target.apply(e, [m.val(), n]);
                                $(e).html(r);
                                e.editing = false;
                                f.apply(e, [e.innerHTML, n]);
                                if (!$.trim($(e).html())) {
                                    $(e).html(n.placeholder)
                                }
                            } else {
                                var s = {};
                                s[n.name] = m.val();
                                s[n.id] = e.id;
                                if ($.isFunction(n.submitdata)) {
                                    $.extend(s, n.submitdata.apply(e, [e.revert, n]))
                                } else {
                                    $.extend(s, n.submitdata)
                                }
                                if ("PUT" == n.method) {
                                    s["_method"] = "put"
                                }
                                $(e).html(n.indicator);
                                var o = {type: "POST", data: s, dataType: "html", url: n.target, success: function(t, r) {
                                        if (o.dataType == "html") {
                                            $(e).html(t)
                                        }
                                        e.editing = false;
                                        f.apply(e, [t, n]);
                                        if (!$.trim($(e).html())) {
                                            $(e).html(n.placeholder)
                                        }
                                    }, error: function(t, r, i) {
                                        p.apply(v, [n, e, t])
                                    }};
                                $.extend(o, n.ajaxoptions);
                                $.ajax(o)
                            }
                        }
                    }
                    $(e).attr("title", n.tooltip);
                    return false
                })
            });
            this.reset = function(t) {
                if (this.editing) {
                    if (false !== h.apply(t, [n, e])) {
                        $(e).html(e.revert);
                        e.editing = false;
                        if (!$.trim($(e).html())) {
                            $(e).html(n.placeholder)
                        }
                        if (n.tooltip) {
                            $(e).attr("title", n.tooltip)
                        }
                    }
                }
            }
        })
    };
    $.editable = {types: {defaults: {element: function(e, t) {
                    var n = $('<input type="hidden"></input>');
                    $(this).append(n);
                    return n
                }, content: function(e, t, n) {
                    $(":input:first", this).val(e)
                }, reset: function(e, t) {
                    t.reset(this)
                }, buttons: function(e, t) {
                    var n = this;
                    if (e.submit) {
                        if (e.submit.match(/>$/)) {
                            var r = $(e.submit).click(function() {
                                if (r.attr("type") != "submit") {
                                    n.submit()
                                }
                            })
                        } else {
                            var r = $('<button type="submit" class="btn btn-success" />');
                            r.html(e.submit)
                        }
                        $(this).append(r)
                    }
                    if (e.cancel) {
                        if (e.cancel.match(/>$/)) {
                            var i = $(e.cancel)
                        } else {
                            var i = $('<button type="cancel" class="btn btn-danger" />');
                            i.html(e.cancel)
                        }
                        $(this).append(i);
                        $(i).click(function(r) {
                            if ($.isFunction($.editable.types[e.type].reset)) {
                                var i = $.editable.types[e.type].reset
                            } else {
                                var i = $.editable.types["defaults"].reset
                            }
                            i.apply(n, [e, t]);
                            return false
                        })
                    }
                }}, text: {element: function(e, t) {
                    var n = $('<input type="text"/>');
                    if (e.width != "none") {
                        n.attr("width", e.width)
                    }
                    if (e.height != "none") {
                        n.attr("height", e.height)
                    }
                    n.attr("autocomplete", "off");
                    $(this).append(n);
                    return n
                }}, textarea: {element: function(e, t) {
                    var n = $("<textarea />");
                    if (e.rows) {
                        n.attr("rows", e.rows)
                    } else if (e.height != "none") {
                        n.height(e.height)
                    }
                    if (e.cols) {
                        n.attr("cols", e.cols)
                    } else if (e.width != "none") {
                        n.width(e.width)
                    }
                    $(this).append(n);
                    return n
                }}, select: {element: function(e, t) {
                    var n = $("<select />");
                    $(this).append(n);
                    return n
                }, content: function(data, settings, original) {
                    if (String == data.constructor) {
                        eval("var json = " + data)
                    } else {
                        var json = data
                    }
                    for (var key in json) {
                        if (!json.hasOwnProperty(key)) {
                            continue
                        }
                        if ("selected" == key) {
                            continue
                        }
                        var option = $("<option />").val(key).append(json[key]);
                        $("select", this).append(option)
                    }
                    $("select", this).children().each(function() {
                        if ($(this).val() == json["selected"] || $(this).text() == $.trim(original.revert)) {
                            $(this).attr("selected", "selected")
                        }
                    });
                    if (!settings.submit) {
                        var form = this;
                        $("select", this).change(function() {
                            form.submit()
                        })
                    }
                }}}, addInputType: function(e, t) {
            $.editable.types[e] = t
        }};
    $.fn.editable.defaults = {name: "value", id: "id", type: "text", width: "auto", height: "auto", event: "click.editable", onblur: "cancel", loadtype: "GET", loadtext: "Loading...", placeholder: "Click to edit", loaddata: {}, submitdata: {}, ajaxoptions: {}}
})(jQuery);
