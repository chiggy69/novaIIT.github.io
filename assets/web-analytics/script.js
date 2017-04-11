/*
 CanvasJS HTML5 & JavaScript Charts - v1.9.8 GA - http://canvasjs.com/ 
 Copyright 2017 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     http://canvasjs.com/license-canvasjs/

*/
(function() {
    function U(a, d) {
        a.prototype = Pa(d.prototype);
        a.prototype.constructor = a;
        a.base = d.prototype
    }

    function Pa(a) {
        function d() {}
        d.prototype = a;
        return new d
    }

    function Ha(a, d, b) {
        "millisecond" === b ? a.setMilliseconds(a.getMilliseconds() + 1 * d) : "second" === b ? a.setSeconds(a.getSeconds() + 1 * d) : "minute" === b ? a.setMinutes(a.getMinutes() + 1 * d) : "hour" === b ? a.setHours(a.getHours() + 1 * d) : "day" === b ? a.setDate(a.getDate() + 1 * d) : "week" === b ? a.setDate(a.getDate() + 7 * d) : "month" === b ? a.setMonth(a.getMonth() + 1 * d) : "year" === b && a.setFullYear(a.getFullYear() +
            1 * d);
        return a
    }

    function O(a, d) {
        var b = !1;
        0 > a && (b = !0, a *= -1);
        a = "" + a;
        for (d = d ? d : 1; a.length < d;) a = "0" + a;
        return b ? "-" + a : a
    }

    function ka(a) {
        if (!a) return a;
        a = a.replace(/^\s\s*/, "");
        for (var d = /\s/, b = a.length; d.test(a.charAt(--b)););
        return a.slice(0, b + 1)
    }

    function Qa(a) {
        a.roundRect = function(a, b, c, f, g, h, l, k) {
            l && (this.fillStyle = l);
            k && (this.strokeStyle = k);
            "undefined" === typeof g && (g = 5);
            this.lineWidth = h;
            this.beginPath();
            this.moveTo(a + g, b);
            this.lineTo(a + c - g, b);
            this.quadraticCurveTo(a + c, b, a + c, b + g);
            this.lineTo(a + c, b + f - g);
            this.quadraticCurveTo(a + c, b + f, a + c - g, b + f);
            this.lineTo(a + g, b + f);
            this.quadraticCurveTo(a, b + f, a, b + f - g);
            this.lineTo(a, b + g);
            this.quadraticCurveTo(a, b, a + g, b);
            this.closePath();
            l && this.fill();
            k && 0 < h && this.stroke()
        }
    }

    function ya(a, d) {
        return a - d
    }

    function Ia(a, d) {
        return a.x - d.x
    }

    function G(a) {
        var d = ((a & 16711680) >> 16).toString(16),
            b = ((a & 65280) >> 8).toString(16);
        a = ((a & 255) >> 0).toString(16);
        d = 2 > d.length ? "0" + d : d;
        b = 2 > b.length ? "0" + b : b;
        a = 2 > a.length ? "0" + a : a;
        return "#" + d + b + a
    }

    function Ra(a, d) {
        var b = this.length >>> 0,
            c = Number(d) ||
            0,
            c = 0 > c ? Math.ceil(c) : Math.floor(c);
        for (0 > c && (c += b); c < b; c++)
            if (c in this && this[c] === a) return c;
        return -1
    }

    function x(a) {
        return null === a || "undefined" === typeof a
    }

    function qa(a) {
        a.indexOf || (a.indexOf = Ra);
        return a
    }

    function Ja(a, d, b) {
        b = b || "normal";
        var c = a + "_" + d + "_" + b,
            f = Ka[c];
        if (isNaN(f)) {
            try {
                a = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + a + "; font-size:" + d + "px; font-weight:" + b + ";";
                if (!ba) {
                    var g = document.body;
                    ba = document.createElement("span");
                    ba.innerHTML = "";
                    var h = document.createTextNode("Mpgyi");
                    ba.appendChild(h);
                    g.appendChild(ba)
                }
                ba.style.display = "";
                ba.setAttribute("style", a);
                f = Math.round(ba.offsetHeight);
                ba.style.display = "none"
            } catch (l) {
                f = Math.ceil(1.1 * d)
            }
            f = Math.max(f, d);
            Ka[c] = f
        }
        return f
    }

    function I(a, d) {
        var b = [];
        if (b = {
                solid: [],
                shortDash: [3, 1],
                shortDot: [1, 1],
                shortDashDot: [3, 1, 1, 1],
                shortDashDotDot: [3, 1, 1, 1, 1, 1],
                dot: [1, 2],
                dash: [4, 2],
                dashDot: [4, 2, 1, 2],
                longDash: [8, 2],
                longDashDot: [8, 2, 1, 2],
                longDashDotDot: [8, 2, 1, 2, 1, 2]
            }[a || "solid"])
            for (var c =
                    0; c < b.length; c++) b[c] *= d;
        else b = [];
        return b
    }

    function K(a, d, b, c) {
        if (a.addEventListener) a.addEventListener(d, b, c || !1);
        else if (a.attachEvent) a.attachEvent("on" + d, function(c) {
            c = c || window.event;
            c.preventDefault = c.preventDefault || function() {
                c.returnValue = !1
            };
            c.stopPropagation = c.stopPropagation || function() {
                c.cancelBubble = !0
            };
            b.call(a, c)
        });
        else return !1
    }

    function La(a, d, b) {
        a *= Q;
        d *= Q;
        a = b.getImageData(a, d, 2, 2).data;
        d = !0;
        for (b = 0; 4 > b; b++)
            if (a[b] !== a[b + 4] | a[b] !== a[b + 8] | a[b] !== a[b + 12]) {
                d = !1;
                break
            }
        return d ? a[0] <<
            16 | a[1] << 8 | a[2] : 0
    }

    function L(a, d, b) {
        return a in d ? d[a] : b[a]
    }

    function ra(a, d, b) {
        if (u && Ma) {
            var c = a.getContext("2d");
            sa = c.webkitBackingStorePixelRatio || c.mozBackingStorePixelRatio || c.msBackingStorePixelRatio || c.oBackingStorePixelRatio || c.backingStorePixelRatio || 1;
            Q = za / sa;
            a.width = d * Q;
            a.height = b * Q;
            za !== sa && (a.style.width = d + "px", a.style.height = b + "px", c.scale(Q, Q))
        } else a.width = d, a.height = b
    }

    function Sa(a) {
        if (!Aa) {
            var d = !1,
                b = !1;
            "undefined" === typeof ca.Chart.creditHref ? (a.creditHref = "#",
                a.creditText = "") : (d = a.updateOption("creditText"), b = a.updateOption("creditHref"));
            if (a.creditHref && a.creditText) {
                a._creditLink || (a._creditLink = document.createElement("a"), a._creditLink.setAttribute("class", "canvasjs-chart-credit"), a._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:2px;top:" + (a.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"), a._creditLink.setAttribute("tabIndex", -1), a._creditLink.setAttribute("target", "_blank"));
                if (0 === a.renderCount || d || b) a._creditLink.setAttribute("href", a.creditHref), a._creditLink.innerHTML = a.creditText;
                a._creditLink && a.creditHref && a.creditText ? (a._creditLink.parentElement || a._canvasJSContainer.appendChild(a._creditLink), a._creditLink.style.top = a.height - 14 + "px") : a._creditLink.parentElement && a._canvasJSContainer.removeChild(a._creditLink)
            }
        }
    }

    function ga(a, d) {
        var b = document.createElement("canvas");
        b.setAttribute("class", "canvasjs-chart-canvas");
        ra(b, a, d);
        u || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(b);
        return b
    }

    function Ba(a, d, b) {
        if (a && d && b) {
            b = b + "." + d;
            var c = "image/" + d;
            a = a.toDataURL(c);
            var f = !1,
                g = document.createElement("a");
            g.download = b;
            g.href = a;
            g.target = "_blank";
            if ("undefined" !== typeof Blob && new Blob) {
                for (var h = a.replace(/^data:[a-z/]*;base64,/, ""), h = atob(h), l = new ArrayBuffer(h.length), l = new Uint8Array(l), k = 0; k < h.length; k++) l[k] = h.charCodeAt(k);
                d = new Blob([l.buffer], {
                    type: "image/" + d
                });
                try {
                    window.navigator.msSaveBlob(d,
                        b), f = !0
                } catch (m) {
                    g.dataset.downloadurl = [c, g.download, g.href].join(":"), g.href = window.URL.createObjectURL(d)
                }
            }
            if (!f) try {
                event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), g.dispatchEvent ? g.dispatchEvent(event) : g.fireEvent && g.fireEvent("onclick")
            } catch (n) {
                d = window.open(), d.document.write("<img src='" + a + "'></img><div>Please right click on the image and save it to your device</div>"), d.document.close()
            }
        }
    }

    function T(a, d, b) {
        d.getAttribute("state") !==
            b && (d.setAttribute("state", b), d.setAttribute("type", "button"), d.style.position = "relative", d.style.margin = "0px 0px 0px 0px", d.style.padding = "3px 4px 0px 4px", d.style.cssFloat = "left", d.setAttribute("title", a._cultureInfo[b + "Text"]), d.innerHTML = "<img style='height:16px;' src='" + Ta[b].image + "' alt='" + a._cultureInfo[b + "Text"] + "' />")
    }

    function ta() {
        for (var a = null, d = 0; d < arguments.length; d++) a = arguments[d], a.style && (a.style.display = "inline")
    }

    function Y() {
        for (var a = null, d = 0; d < arguments.length; d++)(a = arguments[d]) &&
            a.style && (a.style.display = "none")
    }

    function M(a, d, b, c) {
        this._defaultsKey = a;
        this.parent = c;
        this._eventListeners = [];
        c = {};
        b && (ia[b] && ia[b][a]) && (c = ia[b][a]);
        this.options = d ? d : {
            _isPlaceholder: !0
        };
        this.setOptions(this.options, c)
    }

    function A(a, d) {
        d = d || {};
        A.base.constructor.call(this, "Chart", d, d.theme ? d.theme : "theme1");
        var b = this;
        this._containerId = a;
        this._objectsInitialized = !1;
        this.overlaidCanvasCtx = this.ctx = null;
        this._indexLabels = [];
        this._panTimerId = 0;
        this._lastTouchEventType = "";
        this._lastTouchData = null;
        this.isAnimating = !1;
        this.renderCount = 0;
        this.panEnabled = this.disableToolTip = this.animatedRender = !1;
        this._defaultCursor = "default";
        this.plotArea = {
            canvas: null,
            ctx: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            width: 0,
            height: 0
        };
        this._dataInRenderedOrder = [];
        if (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) {
            this.container.innerHTML = "";
            var c = 0,
                f = 0,
                c = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width,
                f = this.options.height ? this.height :
                0 < this.container.clientHeight ? this.container.clientHeight : this.height;
            this.width = c;
            this.height = f;
            this.x1 = this.y1 = 0;
            this.x2 = this.width;
            this.y2 = this.height;
            this._selectedColorSet = "undefined" !== typeof ha[this.colorSet] ? ha[this.colorSet] : ha.colorSet1;
            this._canvasJSContainer = document.createElement("div");
            this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container");
            this._canvasJSContainer.style.position = "relative";
            this._canvasJSContainer.style.textAlign = "left";
            this._canvasJSContainer.style.cursor =
                "auto";
            u || (this._canvasJSContainer.style.height = "0px");
            this.container.appendChild(this._canvasJSContainer);
            this.canvas = ga(c, f);
            this.canvas.style.position = "absolute";
            this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Qa(this.ctx), u ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ga(c, f), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas),
                    this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = ga(c, f), this.overlaidCanvas.style.position = "absolute", this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", this._eventManager = new la(this), K(window, "resize", function() {
                    b._updateSize() && b.render()
                }), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText =
                "position: absolute; right: 1px; top: 1px;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                    x1: 0,
                    y1: 0,
                    x2: this.width,
                    y2: this.height
                }, K(this.overlaidCanvas, "click", function(a) {
                    b._mouseEventHandler(a)
                }), K(this.overlaidCanvas, "mousemove", function(a) {
                    b._mouseEventHandler(a)
                }), K(this.overlaidCanvas, "mouseup", function(a) {
                    b._mouseEventHandler(a)
                }), K(this.overlaidCanvas, "mousedown", function(a) {
                    b._mouseEventHandler(a);
                    Y(b._dropdownMenu)
                }), K(this.overlaidCanvas, "mouseout", function(a) {
                    b._mouseEventHandler(a)
                }),
                K(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a) {
                    b._touchEventHandler(a)
                }), K(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
                    b._touchEventHandler(a)
                }), K(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                    b._touchEventHandler(a)
                }), K(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                    b._touchEventHandler(a)
                }), this.toolTip =
                new S(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = {
                    axisX: [],
                    axisX2: [],
                    axisY: [],
                    axisY2: []
                })
        } else window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
    }

    function ua(a, d) {
        for (var b = [], c, f = 0; f < a.length; f++)
            if (0 == f) b.push(a[0]);
            else {
                var g, h, l;
                l = f - 1;
                g = 0 === l ? 0 : l - 1;
                h = l === a.length - 1 ? l : l + 1;
                c = Math.abs((a[h].x - a[g].x) / (0 === a[h].x - a[l].x ? 0.01 : a[h].x - a[l].x)) * (d - 1) / 2 + 1;
                var k =
                    (a[h].x - a[g].x) / c;
                c = (a[h].y - a[g].y) / c;
                b[b.length] = a[l].x > a[g].x && 0 < k || a[l].x < a[g].x && 0 > k ? {
                    x: a[l].x + k / 3,
                    y: a[l].y + c / 3
                } : {
                    x: a[l].x,
                    y: a[l].y + c / 9
                };
                l = f;
                g = 0 === l ? 0 : l - 1;
                h = l === a.length - 1 ? l : l + 1;
                c = Math.abs((a[h].x - a[g].x) / (0 === a[l].x - a[g].x ? 0.01 : a[l].x - a[g].x)) * (d - 1) / 2 + 1;
                k = (a[h].x - a[g].x) / c;
                c = (a[h].y - a[g].y) / c;
                b[b.length] = a[l].x > a[g].x && 0 < k || a[l].x < a[g].x && 0 > k ? {
                    x: a[l].x - k / 3,
                    y: a[l].y - c / 3
                } : {
                    x: a[l].x,
                    y: a[l].y - c / 9
                };
                b[b.length] = a[f]
            }
        return b
    }

    function Na(a, d) {
        if (null === a || "undefined" === typeof a) return d;
        var b = parseFloat(a.toString()) *
            (0 <= a.toString().indexOf("%") ? d / 100 : 1);
        return !isNaN(b) && b <= d && 0 <= b ? b : d
    }

    function ja(a, d, b, c, f) {
        "undefined" === typeof f && (f = 0);
        this._padding = f;
        this._x1 = a;
        this._y1 = d;
        this._x2 = b;
        this._y2 = c;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }

    function W(a, d) {
        W.base.constructor.call(this, "TextBlock", d);
        this.ctx = a;
        this._isDirty = !0;
        this._wrappedText = null
    }

    function ma(a, d) {
        ma.base.constructor.call(this, "Title", d, a.theme, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (x(this.options.margin) && a.options.subtitles)
            for (var b = a.options.subtitles, c = 0; c < b.length; c++)
                if ((x(b[c].horizontalAlign) && "center" === this.horizontalAlign || b[c].horizontalAlign === this.horizontalAlign) && (x(b[c].verticalAlign) && "top" === this.verticalAlign || b[c].verticalAlign === this.verticalAlign) && !b[c].dockInsidePlotArea === !this.dockInsidePlotArea) {
                    this.margin = 0;
                    break
                }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height =
            this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function va(a, d) {
        va.base.constructor.call(this, "Subtitle", d, a.theme, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = !0;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function wa(a, d) {
        wa.base.constructor.call(this, "Legend", d, a.theme, a);
        this.chart =
            a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.ghostCtx = this.chart._eventManager.ghostCtx;
        this.items = [];
        this.optionsName = "legend";
        this.height = this.width = 0;
        this.orientation = null;
        this.dataSeries = [];
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        };
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.lineHeight = Ja(this.fontFamily, this.fontSize, this.fontWeight);
        this.horizontalSpacing = this.fontSize
    }

    function Ca(a, d) {
        Ca.base.constructor.call(this, d);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx
    }

    function $(a, d, b, c) {
        $.base.constructor.call(this, "DataSeries", d, a.theme, a);
        this.chart = a;
        this.canvas = a.canvas;
        this._ctx = a.canvas.ctx;
        this.index = b;
        this.noDataPointsInPlotArea = 0;
        this.id = c;
        this.chart._eventManager.objectMap[c] = {
            id: c,
            objectType: "dataSeries",
            dataSeriesIndex: b
        };
        this.dataPointIds = [];
        this.plotUnit = [];
        this.axisY = this.axisX = null;
        this.optionsName = "data";
        this.isOptionsInArray = !0;
        null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity =
            0.7 : this.fillOpacity = 1);
        this.axisPlacement = this.getDefaultAxisPlacement();
        "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
    }

    function B(a, d, b, c, f) {
        B.base.constructor.call(this, "Axis", d, a.theme, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = a.ctx;
        this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
        this.labels = [];
        this.dataSeries = [];
        this._stripLineLabels = this._ticks = this._labels = null;
        this.dataInfo = {
            min: Infinity,
            max: -Infinity,
            viewPortMin: Infinity,
            viewPortMax: -Infinity,
            minDiff: Infinity
        };
        this.isOptionsInArray = !0;
        "axisX" === b ? ("left" === c || "bottom" === c ? (this.optionsName = "axisX", x(this.chart.sessionVariables.axisX[f]) && (this.chart.sessionVariables.axisX[f] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[f]) : (this.optionsName = "axisX2", x(this.chart.sessionVariables.axisX2[f]) && (this.chart.sessionVariables.axisX2[f] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[f]), this.options.interval || (this.intervalType =
            null), "theme2" === this.chart.theme && x(this.options.lineThickness) && (this.lineThickness = 2)) : "left" === c || "top" === c ? (this.optionsName = "axisY", x(this.chart.sessionVariables.axisY[f]) && (this.chart.sessionVariables.axisY[f] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[f]) : (this.optionsName = "axisY2", x(this.chart.sessionVariables.axisY2[f]) && (this.chart.sessionVariables.axisY2[f] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[f]);
        "undefined" === typeof this.options.titleFontSize &&
            (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
        "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
        this.type = b;
        "axisX" !== b || d && "undefined" !== typeof d.gridThickness || (this.gridThickness = 0);
        this._position = c;
        this.lineCoordinates = {
            x1: null,
            y1: null,
            x2: null,
            y2: null,
            width: null
        };
        this.labelAngle = (this.labelAngle % 360 + 360) % 360;
        90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle &&
            (this.labelAngle -= 360);
        if (this.options.stripLines && 0 < this.options.stripLines.length)
            for (this.stripLines = [], d = 0; d < this.options.stripLines.length; d++) this.stripLines.push(new na(this.chart, this.options.stripLines[d], a.theme, ++this.chart._eventManager.lastObjectId, this));
        this._titleTextBlock = null;
        this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
        this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) ||
            null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
        this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
        this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum =
            this.sessionVariables.newViewportMaximum;
        null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
        null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
        this.trackChanges("viewportMinimum");
        this.trackChanges("viewportMaximum")
    }

    function na(a, d, b, c, f) {
        na.base.constructor.call(this, "StripLine", d, b, f);
        this.id = c;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.label = this.label;
        this.axis = f;
        this.optionsName = "stripLines";
        this.isOptionsInArray = !0;
        this._thicknessType = "pixel";
        null !== this.startValue && null !== this.endValue && (this.value = f.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this.thickness = f.logarithmic ? Math.log(this.endValue / this.startValue) / Math.log(f.logarithmBase) :
            Math.max(this.endValue - this.startValue), this._thicknessType = "value")
    }

    function S(a, d) {
        S.base.constructor.call(this, "ToolTip", d, a.theme, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.currentDataPointIndex = this.currentSeriesIndex = -1;
        this._timerId = 0;
        this._prevY = this._prevX = NaN;
        this.optionsName = "toolTip";
        this._initialize()
    }

    function la(a) {
        this.chart = a;
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.ghostCanvas =
            ga(this.chart.width, this.chart.height);
        this.ghostCtx = this.ghostCanvas.getContext("2d");
        this.mouseoveredObjectMaps = []
    }

    function oa(a) {
        var d;
        a && pa[a] && (d = pa[a]);
        oa.base.constructor.call(this, "CultureInfo", d)
    }

    function Da(a) {
        this.chart = a;
        this.ctx = this.chart.plotArea.ctx;
        this.animations = [];
        this.animationRequestId = null
    }
    var z = {},
        u = !!document.createElement("canvas").getContext,
        ca = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "theme1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditText: "CanvasJS",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null,
                publicProperties: {
                    title: "readWrite",
                    subtitles: "readWrite",
                    toolTip: "readWrite",
                    legend: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    axisX2: "readWrite",
                    axisY2: "readWrite",
                    data: "readWrite",
                    options: "readWrite",
                    bounds: "readOnly",
                    container: "readOnly"
                }
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: u ? "transparent" : null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                backgroundColor: u ? "transparent" : null,
                borderColor: u ?
                    "transparent" : null,
                borderThickness: 0,
                cornerRadius: 0,
                maxWidth: null,
                maxHeight: null,
                markerMargin: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "black",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic",
                publicProperties: {
                    options: "readWrite",
                    chart: "readOnly"
                }
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                reversed: !1,
                logarithmic: !1,
                logarithmBase: 10,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                titleWrap: !0,
                titleMaxWidth: null,
                titleBackgroundColor: u ? "transparent" : null,
                titleBorderColor: u ? "transparent" : null,
                titleBorderThickness: 0,
                titleCornerRadius: 0,
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !0,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                labelBackgroundColor: u ? "transparent" : null,
                labelBorderColor: u ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                prefix: "",
                suffix: "",
                includeZero: !0,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: u ? "transparent" : null,
                valueFormatString: null,
                margin: 2,
                stripLines: [],
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelPlacement: "inside",
                labelAlign: "far",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: u ? "transparent" : null,
                labelBorderColor: u ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1,
                publicProperties: {
                    options: "readWrite",
                    axis: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: "default",
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: "gray",
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                connectNullData: !1,
                nullDataLineDashType: "dash",
                color: null,
                lineColor: null,
                risingColor: "white",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                type: "column",
                xValueType: "number",
                axisXType: "primary",
                axisYType: "primary",
                axisXIndex: 0,
                axisYIndex: 0,
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: u ? "transparent" : null,
                legendMarkerBorderThickness: 0,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: u ? "transparent" : null,
                markerBorderThickness: 0,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0,
                publicProperties: {
                    options: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    chart: "readOnly"
                }
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top"
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPEG",
                savePNGText: "Save as PNG",
                printText: "Print",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
            }
        },
        pa = {
            en: {}
        },
        ha = {
            colorSet1: "#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),
            colorSet2: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
        },
        ia = {
            theme1: {
                Chart: {
                    colorSet: "colorSet1"
                },
                Title: {
                    fontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    fontSize: 33,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    fontSize: 16,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 26,
                    titleFontColor: "#666666",
                    titleFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "#BBBBBB",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "#BBBBBB",
                    lineThickness: 2,
                    lineColor: "#BBBBBB"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: u ? "monospace, sans-serif,arial black" : "calibri"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    indexLabelFontSize: 18,
                    indexLabelLineThickness: 1
                }
            },
            theme2: {
                Chart: {
                    colorSet: "colorSet2"
                },
                Title: {
                    fontFamily: "impact, charcoal, arial black, sans-serif",
                    fontSize: 32,
                    fontColor: "#333333",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: "impact, charcoal, arial black, sans-serif",
                    fontSize: 14,
                    fontColor: "#333333",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: u ? "monospace, sans-serif,arial black" : "arial",
                    titleFontWeight: "bold",
                    labelFontFamily: u ? "monospace, Courier New, Courier" : "arial",
                    labelFontSize: 16,
                    labelFontColor: "grey",
                    labelFontWeight: "bold",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineColor: "grey",
                    lineThickness: 0
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: u ? "monospace, sans-serif,arial black" : "arial"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: u ? "Courier New, Courier, monospace" : "arial",
                    indexLabelFontWeight: "bold",
                    indexLabelFontSize: 18,
                    indexLabelLineThickness: 1
                }
            },
            theme3: {
                Chart: {
                    colorSet: "colorSet1"
                },
                Title: {
                    fontFamily: u ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                    fontSize: 32,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: u ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                    fontSize: 16,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: u ? "Verdana, Geneva, Calibri, sans-serif" : "calibri",
                    labelFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineThickness: 2,
                    lineColor: "grey"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: u ? "monospace, sans-serif,arial black" : "calibri"
                },
                DataSeries: {
                    bevelEnabled: !0,
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: u ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri",
                    indexLabelFontSize: 18,
                    indexLabelLineColor: "lightgrey",
                    indexLabelLineThickness: 2
                }
            }
        },
        E = {
            numberDuration: 1,
            yearDuration: 314496E5,
            monthDuration: 2592E6,
            weekDuration: 6048E5,
            dayDuration: 864E5,
            hourDuration: 36E5,
            minuteDuration: 6E4,
            secondDuration: 1E3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
        },
        Ka = {},
        ba = null,
        Ea = function() {
            var a = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                d = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                b = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                c = "January February March April May June July August September October November December".split(" "),
                f = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                g = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                h = /[^-+\dA-Z]/g;
            return function(l, k, m) {
                var n = m ? m.days : d,
                    p = m ? m.months : c,
                    e = m ? m.shortDays : b,
                    r = m ? m.shortMonths : f;
                m = "";
                var q = !1;
                l = l && l.getTime ? l : l ? new Date(l) : new Date;
                if (isNaN(l)) throw SyntaxError("invalid date");
                "UTC:" === k.slice(0, 4) && (k = k.slice(4), q = !0);
                m = q ? "getUTC" : "get";
                var s = l[m + "Date"](),
                    v = l[m + "Day"](),
                    w = l[m + "Month"](),
                    y = l[m + "FullYear"](),
                    t = l[m + "Hours"](),
                    u = l[m + "Minutes"](),
                    Z = l[m + "Seconds"](),
                    aa = l[m + "Milliseconds"](),
                    x = q ? 0 : l.getTimezoneOffset();
                return m = k.replace(a, function(a) {
                    switch (a) {
                        case "D":
                            return s;
                        case "DD":
                            return O(s, 2);
                        case "DDD":
                            return e[v];
                        case "DDDD":
                            return n[v];
                        case "M":
                            return w + 1;
                        case "MM":
                            return O(w + 1, 2);
                        case "MMM":
                            return r[w];
                        case "MMMM":
                            return p[w];
                        case "Y":
                            return parseInt(String(y).slice(-2));
                        case "YY":
                            return O(String(y).slice(-2), 2);
                        case "YYY":
                            return O(String(y).slice(-3), 3);
                        case "YYYY":
                            return O(y, 4);
                        case "h":
                            return t % 12 || 12;
                        case "hh":
                            return O(t % 12 || 12, 2);
                        case "H":
                            return t;
                        case "HH":
                            return O(t, 2);
                        case "m":
                            return u;
                        case "mm":
                            return O(u, 2);
                        case "s":
                            return Z;
                        case "ss":
                            return O(Z, 2);
                        case "f":
                            return String(aa).slice(0, 1);
                        case "ff":
                            return O(String(aa).slice(0, 2), 2);
                        case "fff":
                            return O(String(aa).slice(0, 3), 3);
                        case "t":
                            return 12 > t ? "a" : "p";
                        case "tt":
                            return 12 > t ? "am" : "pm";
                        case "T":
                            return 12 > t ? "A" : "P";
                        case "TT":
                            return 12 > t ? "AM" : "PM";
                        case "K":
                            return q ? "UTC" : (String(l).match(g) || [""]).pop().replace(h, "");
                        case "z":
                            return (0 < x ? "-" : "+") + Math.floor(Math.abs(x) / 60);
                        case "zz":
                            return (0 < x ? "-" : "+") + O(Math.floor(Math.abs(x) / 60), 2);
                        case "zzz":
                            return (0 < x ? "-" : "+") + O(Math.floor(Math.abs(x) / 60), 2) + O(Math.abs(x) % 60, 2);
                        default:
                            return a.slice(1, a.length - 1)
                    }
                })
            }
        }(),
        da = function(a, d, b) {
            if (null === a) return "";
            a = Number(a);
            var c = 0 > a ? !0 : !1;
            c && (a *= -1);
            var f = b ? b.decimalSeparator : ".",
                g = b ? b.digitGroupSeparator : ",",
                h = "";
            d = String(d);
            var h = 1,
                l = b = "",
                k = -1,
                m = [],
                n = [],
                p = 0,
                e = 0,
                r = 0,
                q = !1,
                s = 0,
                l = d.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            d = null;
            for (var v = 0; l && v < l.length; v++)
                if (d = l[v], "." === d && 0 > k) k = v;
                else {
                    if ("%" === d) h *= 100;
                    else if ("\u2030" === d) {
                        h *= 1E3;
                        continue
                    } else if ("," === d[0] && "." === d[d.length - 1]) {
                        h /= Math.pow(1E3, d.length - 1);
                        k = v + d.length - 1;
                        continue
                    } else "E" !== d[0] && "e" !== d[0] || "0" !== d[d.length - 1] || (q = !0);
                    0 > k ? (m.push(d), "#" === d || "0" === d ? p++ : "," === d && r++) : (n.push(d), "#" !== d && "0" !== d || e++)
                }
            q && (d = Math.floor(a), l = -Math.floor(Math.log(a) / Math.LN10 + 1), s = 0 === a ? 0 : 0 === d ? -(p + l) : String(d).length - p, h /= Math.pow(10, s));
            0 > k && (k = v);
            h = (a * h).toFixed(e);
            d = h.split(".");
            h = (d[0] + "").split("");
            a = (d[1] + "").split("");
            h && "0" === h[0] && h.shift();
            for (q = l = v = e = k = 0; 0 < m.length;)
                if (d = m.pop(), "#" === d || "0" === d)
                    if (k++, k === p) {
                        var w = h,
                            h = [];
                        if ("0" === d)
                            for (d = p - e - (w ? w.length : 0); 0 < d;) w.unshift("0"), d--;
                        for (; 0 < w.length;) b = w.pop() + b, q++, 0 === q % l && (v === r && 0 < w.length) && (b = g + b)
                    } else 0 < h.length ? (b = h.pop() + b, e++, q++) : "0" === d && (b = "0" + b, e++, q++), 0 === q % l && (v === r && 0 < h.length) && (b = g + b);
            else "E" !== d[0] && "e" !== d[0] || "0" !== d[d.length - 1] || !/[eE][+-]*[0]+/.test(d) ? "," === d ? (v++, l = q, q = 0, 0 < h.length &&
                (b = g + b)) : b = 1 < d.length && ('"' === d[0] && '"' === d[d.length - 1] || "'" === d[0] && "'" === d[d.length - 1]) ? d.slice(1, d.length - 1) + b : d + b : (d = 0 > s ? d.replace("+", "").replace("-", "") : d.replace("-", ""), b += d.replace(/[0]+/, function(a) {
                return O(s, a.length)
            }));
            g = "";
            for (m = !1; 0 < n.length;) d = n.shift(), "#" === d || "0" === d ? 0 < a.length && 0 !== Number(a.join("")) ? (g += a.shift(), m = !0) : "0" === d && (g += "0", m = !0) : 1 < d.length && ('"' === d[0] && '"' === d[d.length - 1] || "'" === d[0] && "'" === d[d.length - 1]) ? g += d.slice(1, d.length - 1) : "E" !== d[0] && "e" !== d[0] || "0" !== d[d.length -
                1] || !/[eE][+-]*[0]+/.test(d) ? g += d : (d = 0 > s ? d.replace("+", "").replace("-", "") : d.replace("-", ""), g += d.replace(/[0]+/, function(a) {
                return O(s, a.length)
            }));
            b += (m ? f : "") + g;
            return c ? "-" + b : b
        },
        xa = function(a) {
            var d = 0,
                b = 0;
            a = a || window.event;
            a.offsetX || 0 === a.offsetX ? (d = a.offsetX, b = a.offsetY) : a.layerX || 0 == a.layerX ? (d = a.layerX, b = a.layerY) : (d = a.pageX - a.target.offsetLeft, b = a.pageY - a.target.offsetTop);
            return {
                x: d,
                y: b
            }
        },
        Ma = !0,
        za = window.devicePixelRatio || 1,
        sa = 1,
        Q = Ma ? za / sa : 1,
        Aa = window && window.location && window.location.href &&
        window.location.href.indexOf && (-1 !== window.location.href.indexOf("canvasjs.com") || -1 !== window.location.href.indexOf("fenopix.com") || -1 !== window.location.href.indexOf("fiddle")),
        Ta = {
            reset: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="
            },
            pan: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="
            },
            zoom: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="
            },
            menu: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"
            }
        };
    (function() {
        z.fSDec = function(a) {
            for (var d = "", b = 0; b < a.length; b++) d += String.fromCharCode(a[b] - 111);
            return d
        };
        z.str = {
            tv: [195, 225, 216, 208, 219, 143, 197, 212, 225,
                226, 216, 222, 221
            ],
            fntStr: [223, 231, 143, 178, 208, 219, 216, 209, 225, 216, 155, 143, 187, 228, 210, 216, 211, 208, 143, 182, 225, 208, 221, 211, 212, 155, 143, 187, 228, 210, 216, 211, 208, 143, 194, 208, 221, 226, 143, 196, 221, 216, 210, 222, 211, 212, 155, 143, 176, 225, 216, 208, 219, 155, 143, 226, 208, 221, 226, 156, 226, 212, 225, 216, 213],
            tBl: [227, 212, 231, 227, 177, 208, 226, 212, 219, 216, 221, 212],
            fnt: [213, 222, 221, 227],
            fSy: [213, 216, 219, 219, 194, 227, 232, 219, 212],
            fTx: [213, 216, 219, 219, 195, 212, 231, 227],
            gr: [214, 225, 212, 232],
            ct: [210, 227, 231],
            tp: [227, 222, 223]
        };
        delete ca[z.fSDec([178,
            215, 208, 225, 227
        ])][z.fSDec([210, 225, 212, 211, 216, 227, 183, 225, 212, 213])];
        z.pro = {
            sCH: ca[z.fSDec([178, 215, 208, 225, 227])][z.fSDec([210, 225, 212, 211, 216, 227, 183, 225, 212, 213])]
        };
        z.fAWm = function(a) {
            if ("undefined" === typeof z.pro.sCH && !Aa) {
                var d = a[z.fSDec(z.str.ct)];
                d[z.fSDec(z.str.tBl)] = z.fSDec(z.str.tp);
                d[z.fSDec(z.str.fnt)] = 11 + z.fSDec(z.str.fntStr);
                d[z.fSDec(z.str.fSy)] = z.fSDec(z.str.gr);
                d[z.fSDec(z.str.fTx)](z.fSDec(z.str.tv), 2, a.height - 11 - 2)
            }
        }
    })();
    (function() {
        z.ckDec = function(a) {
            for (var d = "", b = 0; b < a.length; b++) d +=
                String.fromCharCode(a[b] - 111);
            return d
        };
        z.str.ckn = [206, 206, 210, 230, 217, 198, 226, 195, 225];
        z.str.tem = [195, 225, 216, 208, 219, 143, 191, 212, 225, 216, 222, 211, 143, 215, 208, 226, 143, 180, 231, 223, 216, 225, 212, 211, 144];
        z.str.ctm = [191, 219, 212, 208, 226, 212, 143, 210, 222, 221, 227, 208, 210, 227, 143, 226, 208, 219, 212, 226, 175, 210, 208, 221, 229, 208, 226, 217, 226, 157, 210, 222, 220];
        z.str.ltm = [213, 222, 225, 143, 219, 216, 210, 212, 221, 226, 212, 143, 222, 225, 143, 227, 225, 216, 208, 219, 143, 212, 231, 227, 212, 221, 227, 216, 222, 221];
        z.str.ckve = [212, 231, 223, 216,
            225, 212, 226, 172
        ];
        z.str.mco = [225, 214, 209, 208, 151, 161, 164, 164, 155, 161, 164, 164, 155, 161, 164, 164, 155, 159, 157, 164, 152];
        z.str.mcw = [198, 215, 216, 227, 212];
        z.str.mct = [225, 214, 209, 208, 151, 161, 162, 160, 155, 161, 168, 155, 164, 163, 155, 159, 157, 166, 152];
        z.str.mcr = [193, 212, 211];
        z.fNg = function(a) {
            if (!Aa) try {
                var d;
                a: {
                    var b = RegExp(z.ckDec(z.str.ckn) + "=.*", "gi"),
                        c = new Date,
                        f = document.cookie.match(b),
                        g = localStorage && localStorage.getItem("lclStg") && JSON.parse(localStorage.getItem("lclStg")).name.match(z.ckDec(z.str.ckn)) ? JSON.parse(localStorage.getItem("lclStg")) : null;
                    if (f && 0 < f.length || g) {
                        var h, b = [],
                            l = [],
                            k = null;
                        if (f)
                            for (var m = f[0].split("; "), f = 0; f < m.length; f++) b.push(m[f].split("=")[0]), l.push(m[f].split("=")[1]);
                        g && (k = g);
                        h = {
                            ckVal: Number(l[0]),
                            lSVal: k ? Number(k.val) : null
                        };
                        g = null;
                        h && h.ckVal && h.lSVal ? g = Math.min(h.ckVal, h.lSVal) : h && h.ckVal ? g = h.ckVal : h && h.lSVal && (g = h.lSVal);
                        if (2592E6 < Math.round(Math.abs(g - c.getTime()))) {
                            d = !0;
                            break a
                        }
                    } else {
                        l = new Date;
                        k = l.getTime();
                        l.setTime(k + 31536E6);
                        var n = {
                            name: z.ckDec(z.str.ckn),
                            val: (new Date).getTime()
                        };
                        document.cookie = z.ckDec(z.str.ckn) +
                            "=" + (new Date).getTime() + "; " + z.ckDec(z.str.ckve) + l.toUTCString() + "; path=/;";
                        localStorage.setItem("lclStg", JSON.stringify(n))
                    }
                    d = !1
                }
                if (d) {
                    d = 20;
                    var p = a.plotArea.ctx;
                    p.font = "bold " + d + (u ? "px Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" : "px Lucida Sans Unicode");
                    var e = z.ckDec(z.str.tem),
                        r = p.measureText(e).width;
                    p.fillStyle = u ? z.ckDec(z.str.mco) : z.ckDec(z.str.mcw);
                    p.fillRect(a.plotArea.x2 - r - 8, a.plotArea.y2 - 2.5 * d - 8, r + 4, 2.5 * d + 8);
                    p.fillStyle = u ? z.ckDec(z.str.mct) : z.ckDec(z.str.mcr);
                    p.textBaseline =
                        "top";
                    p.fillText(e, a.plotArea.x2 - r - 4, a.plotArea.y2 - 2.5 * d - 2);
                    d = 14;
                    p.font = d + (u ? "px Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" : "px Lucida Sans Unicode");
                    e = z.ckDec(z.str.ctm);
                    r = p.measureText(e).width;
                    p.fillStyle = u ? z.ckDec(z.str.mct) : z.ckDec(z.str.mcr);
                    p.fillText(e, a.plotArea.x2 - r - 4, a.plotArea.y2 - 2 * d - 4);
                    e = z.ckDec(z.str.ltm);
                    r = p.measureText(e).width;
                    p.fillText(e, a.plotArea.x2 - r - 4, a.plotArea.y2 - d - 4)
                }
            } catch (q) {}
        }
    })();
    M.prototype.setOptions = function(a, d) {
        if (ca[this._defaultsKey]) {
            var b =
                ca[this._defaultsKey],
                c;
            for (c in b) "publicProperties" !== c && b.hasOwnProperty(c) && (this[c] = a && c in a ? a[c] : d && c in d ? d[c] : b[c])
        }
    };
    M.prototype.get = function(a) {
        var d = ca[this._defaultsKey];
        if ("options" === a) return this.options && this.options._isPlaceholder ? null : this.options;
        if (d.hasOwnProperty(a) || d.publicProperties && d.publicProperties.hasOwnProperty(a)) return this[a];
        window.console && window.console.log('Property "' + a + "\" doesn't exist. Please check for typo.")
    };
    M.prototype.set = function(a, d, b) {
        b = "undefined" ===
            typeof b ? !0 : b;
        var c = ca[this._defaultsKey];
        if ("options" === a) this.createUserOptions(d);
        else if (c.hasOwnProperty(a) || c.publicProperties && c.publicProperties.hasOwnProperty(a) && "readWrite" === c.publicProperties[a]) this.options._isPlaceholder && this.createUserOptions(), this.options[a] = d;
        else {
            window.console && (c.publicProperties && c.publicProperties.hasOwnProperty(a) && "readOnly" === c.publicProperties[a] ? window.console.log('Property "' + a + '" is read-only.') : window.console.log('Property "' + a + "\" doesn't exist. Please check for typo."));
            return
        }
        b && (chart = this.chart || this, chart.render())
    };
    M.prototype.addTo = function(a, d, b, c) {
        c = "undefined" === typeof c ? !0 : c;
        var f = ca[this._defaultsKey];
        f.hasOwnProperty(a) || f.publicProperties && f.publicProperties.hasOwnProperty(a) && "readWrite" === f.publicProperties[a] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[a] && (this.options[a] = []), a = this.options[a], b = "undefined" === typeof b || null === b ? a.length : b, a.splice(b, 0, d), c && (chart = this.chart || this, chart.render())) : window.console &&
            (f.publicProperties && f.publicProperties.hasOwnProperty(a) && "readOnly" === f.publicProperties[a] ? window.console.log('Property "' + a + '" is read-only.') : window.console.log('Property "' + a + "\" doesn't exist. Please check for typo."))
    };
    M.prototype.createUserOptions = function(a) {
        if ("undefined" !== typeof a || this.options._isPlaceholder)
            if (this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
                this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
                var d =
                    this.parent.options[this.optionsName],
                    b = d.length;
                this.options._isPlaceholder || (qa(d), b = d.indexOf(this.options));
                this.options = "undefined" === typeof a ? {} : a;
                d[b] = this.options
            } else this.options = "undefined" === typeof a ? {} : a, a = this.parent.options, this.optionsName ? d = this.optionsName : (d = this._defaultsKey) && 0 !== d.length ? (b = d.charAt(0).toLowerCase(), 1 < d.length && (b = b.concat(d.slice(1))), d = b) : d = void 0, a[d] = this.options
    };
    M.prototype.remove = function(a) {
        a = "undefined" === typeof a ? !0 : a;
        if (this.isOptionsInArray) {
            var d =
                this.parent.options[this.optionsName];
            qa(d);
            var b = d.indexOf(this.options);
            0 <= b && d.splice(b, 1)
        } else delete this.parent.options[this.optionsName];
        a && (chart = this.chart || this, chart.render())
    };
    M.prototype.updateOption = function(a) {
        var d = ca[this._defaultsKey],
            b = this.options.theme ? this.options.theme : this.chart && this.chart.options.theme ? this.chart.options.theme : "theme1",
            c = {},
            f = this[a];
        b && (ia[b] && ia[b][this._defaultsKey]) && (c = ia[b][this._defaultsKey]);
        a in d && (f = a in this.options ? this.options[a] : c && a in c ?
            c[a] : d[a]);
        if (f === this[a]) return !1;
        this[a] = f;
        return !0
    };
    M.prototype.trackChanges = function(a) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[a] = this.options[a]
    };
    M.prototype.isBeingTracked = function(a) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[a] ? !0 : !1
    };
    M.prototype.hasOptionChanged = function(a) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        return this.sessionVariables[a] !== this.options[a]
    };
    M.prototype.addEventListener =
        function(a, d, b) {
            a && d && (this._eventListeners[a] = this._eventListeners[a] || [], this._eventListeners[a].push({
                context: b || this,
                eventHandler: d
            }))
        };
    M.prototype.removeEventListener = function(a, d) {
        if (a && d && this._eventListeners[a])
            for (var b = this._eventListeners[a], c = 0; c < b.length; c++)
                if (b[c].eventHandler === d) {
                    b[c].splice(c, 1);
                    break
                }
    };
    M.prototype.removeAllEventListeners = function() {
        this._eventListeners = []
    };
    M.prototype.dispatchEvent = function(a, d, b) {
        if (a && this._eventListeners[a]) {
            d = d || {};
            for (var c = this._eventListeners[a],
                    f = 0; f < c.length; f++) c[f].eventHandler.call(c[f].context, d)
        }
        "function" === typeof this[a] && this[a].call(b || this.chart, d)
    };
    U(A, M);
    A.prototype._updateOptions = function() {
        var a = this;
        this.updateOption("width");
        this.updateOption("height");
        this.updateOption("dataPointWidth");
        this.updateOption("dataPointMinWidth");
        this.updateOption("dataPointMaxWidth");
        this.updateOption("interactivityEnabled");
        this.updateOption("theme");
        this.updateOption("colorSet") && (this._selectedColorSet = "undefined" !== typeof ha[this.colorSet] ?
            ha[this.colorSet] : ha.colorSet1);
        this.updateOption("backgroundColor");
        this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
        this.updateOption("culture");
        this._cultureInfo = new oa(this.options.culture);
        this.updateOption("animationEnabled");
        this.animationEnabled = this.animationEnabled && u;
        this.updateOption("animationDuration");
        this.updateOption("rangeChanging");
        this.updateOption("rangeChanged");
        this.updateOption("exportEnabled");
        this.updateOption("exportFileName");
        this.updateOption("zoomType");
        this.options.zoomEnabled ?
            (this._zoomButton || (Y(this._zoomButton = document.createElement("button")), T(this, this._zoomButton, "pan"), this._toolBar.appendChild(this._zoomButton), K(this._zoomButton, "click", function() {
                a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, T(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, T(a, a._zoomButton, "pan"));
                a.render()
            })), this._resetButton || (Y(this._resetButton = document.createElement("button")), T(this, this._resetButton, "reset"), this._toolBar.appendChild(this._resetButton), K(this._resetButton,
                "click",
                function() {
                    a.toolTip.hide();
                    a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, T(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                    if (a.sessionVariables.axisX)
                        for (var b = 0; b < a.sessionVariables.axisX.length; b++) a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisX2)
                        for (b = 0; b < a.sessionVariables.axisX2.length; b++) a.sessionVariables.axisX2[b].newViewportMinimum =
                            null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisY)
                        for (b = 0; b < a.sessionVariables.axisY.length; b++) a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisY2)
                        for (b = 0; b < a.sessionVariables.axisY2.length; b++) a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
                    a.resetOverlayedCanvas();
                    Y(a._zoomButton, a._resetButton);
                    a._dispatchRangeEvent("rangeChanging",
                        "reset");
                    a.render();
                    a._dispatchRangeEvent("rangeChanged", "reset")
                }), this.overlaidCanvas.style.cursor = a._defaultCursor), this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), ta(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))) : this.panEnabled = this.zoomEnabled = !1;
        this._menuButton ? this.exportEnabled ? ta(this._menuButton) : Y(this._menuButton) :
            this.exportEnabled && u && (this._menuButton = document.createElement("button"), T(this, this._menuButton, "menu"), this._toolBar.appendChild(this._menuButton), K(this._menuButton, "click", function() {
                "none" !== a._dropdownMenu.style.display || a._dropDownCloseTime && 500 >= (new Date).getTime() - a._dropDownCloseTime.getTime() || (a._dropdownMenu.style.display = "block", a._menuButton.blur(), a._dropdownMenu.focus())
            }, !0));
        if (!this._dropdownMenu && this.exportEnabled && u) {
            this._dropdownMenu = document.createElement("div");
            this._dropdownMenu.setAttribute("tabindex", -1);
            this._dropdownMenu.style.cssText = "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
            a._dropdownMenu.style.display = "none";
            this._toolBar.appendChild(this._dropdownMenu);
            K(this._dropdownMenu,
                "blur",
                function() {
                    Y(a._dropdownMenu);
                    a._dropDownCloseTime = new Date
                }, !0);
            var d = document.createElement("div");
            d.style.cssText = "padding: 2px 15px 2px 10px";
            d.innerHTML = this._cultureInfo.printText;
            this._dropdownMenu.appendChild(d);
            K(d, "mouseover", function() {
                this.style.backgroundColor = "#EEEEEE"
            }, !0);
            K(d, "mouseout", function() {
                this.style.backgroundColor = "transparent"
            }, !0);
            K(d, "click", function() {
                a.print();
                Y(a._dropdownMenu)
            }, !0);
            d = document.createElement("div");
            d.style.cssText = "padding: 2px 15px 2px 10px";
            d.innerHTML = this._cultureInfo.saveJPGText;
            this._dropdownMenu.appendChild(d);
            K(d, "mouseover", function() {
                this.style.backgroundColor = "#EEEEEE"
            }, !0);
            K(d, "mouseout", function() {
                this.style.backgroundColor = "transparent"
            }, !0);
            K(d, "click", function() {
                Ba(a.canvas, "jpeg", a.exportFileName);
                Y(a._dropdownMenu)
            }, !0);
            d = document.createElement("div");
            d.style.cssText = "padding: 2px 15px 2px 10px";
            d.innerHTML = this._cultureInfo.savePNGText;
            this._dropdownMenu.appendChild(d);
            K(d, "mouseover", function() {
                this.style.backgroundColor =
                    "#EEEEEE"
            }, !0);
            K(d, "mouseout", function() {
                this.style.backgroundColor = "transparent"
            }, !0);
            K(d, "click", function() {
                Ba(a.canvas, "png", a.exportFileName);
                Y(a._dropdownMenu)
            }, !0)
        }
        "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? T(a, a._zoomButton, "zoom") : T(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && T(a, a._resetButton, "reset"));
        this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
        for (var b in this.toolTip.options) this.toolTip.options.hasOwnProperty(b) &&
            this.toolTip.updateOption(b)
    };
    A.prototype._updateSize = function() {
        var a = 0,
            d = 0;
        this.options.width ? a = this.width : this.width = a = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
        this.options.height ? d = this.height : this.height = d = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
        return this.canvas.width !== a * Q || this.canvas.height !== d * Q ? (ra(this.canvas, a, d), ra(this.overlaidCanvas, a, d), ra(this._eventManager.ghostCanvas, a, d), !0) : !1
    };
    A.prototype._initialize = function() {
        this._animator ?
            this._animator.cancelAllAnimations() : this._animator = new Da(this);
        this.removeAllEventListeners();
        this.disableToolTip = !1;
        this._axes = [];
        this.pieDoughnutClickHandler = null;
        this.animationRequestId && this.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this._updateOptions();
        this.animatedRender = u && this.animationEnabled && 0 === this.renderCount;
        this._updateSize();
        this.clearCanvas();
        this.ctx.beginPath();
        this.axisX = [];
        this.axisX2 = [];
        this.axisY = [];
        this.axisY2 = [];
        this._indexLabels = [];
        this._dataInRenderedOrder = [];
        this._events = [];
        this._eventManager && this._eventManager.reset();
        this.plotInfo = {
            axisPlacement: null,
            axisXValueType: null,
            plotTypes: []
        };
        this.layoutManager = new ja(0, 0, this.width, this.height, 2);
        this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
        this.data = [];
        var a = 0;
        if (this.options.data)
            for (var d = 0; d < this.options.data.length; d++)
                if (a++, !this.options.data[d].type || 0 <= A._supportedChartTypes.indexOf(this.options.data[d].type)) {
                    var b = new $(this, this.options.data[d], a - 1, ++this._eventManager.lastObjectId);
                    null === b.name && (b.name = "DataSeries " + a);
                    null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this._selectedColorSet[b.index % this._selectedColorSet.length]], b.color = this._selectedColorSet[b.index % this._selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type ? [this._selectedColorSet[0]] : this._selectedColorSet : b._colorSet = [b.color];
                    null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                    "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a) {
                        return a.x
                    }) && b.dataPoints.sort(Ia) : b.dataPoints.sort(Ia));
                    this.data.push(b);
                    var c = b.axisPlacement,
                        f;
                    "normal" === c ? "xySwapped" ===
                        this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === c ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement =
                            "xySwapped") : "none" == c && ("normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none"));
                    if (f && window.console) {
                        window.console.log(f);
                        return
                    }
                }
        var g = this;
        this.addEventListener("dataAnimationIterationEnd", function() {
            z.fAWm && z.fAWm(g);
            0 !== g.axisX.length && z.fNg && z.fNg(g)
        });
        Sa(this);
        this._objectsInitialized = !0
    };
    A._supportedChartTypes = qa("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" "));
    A.prototype.render = function(a) {
        a && (this.options = a);
        this._initialize();
        var d = [];
        for (a = 0; a < this.data.length; a++)
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                if (!this.data[a].axisYType ||
                    "primary" === this.data[a].axisYType)
                    if (this.options.axisY && 0 < this.options.axisY.length) {
                        if (!this.axisY.length)
                            for (var b = 0; b < this.options.axisY.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[b] = new B(this, this.options.axisY[b], "axisY", "left", b)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[b] = new B(this, this.options.axisY[b], "axisY", "bottom", b));
                        this.data[a].axisY = this.axisY[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY.length ?
                            this.data[a].axisYIndex : 0];
                        this.axisY[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY.length ? this.data[a].axisYIndex : 0].dataSeries.push(this.data[a])
                    } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new B(this, this.options.axisY, "axisY", "left", 0)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new B(this, this.options.axisY, "axisY", "bottom", 0))), this.data[a].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[a]);
                if ("secondary" === this.data[a].axisYType)
                    if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                        if (!this.axisY2.length)
                            for (b = 0; b < this.options.axisY2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[b] = new B(this, this.options.axisY2[b], "axisY", "right", b)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[b] = new B(this, this.options.axisY2[b], "axisY", "top", b));
                        this.data[a].axisY = this.axisY2[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY2.length ?
                            this.data[a].axisYIndex : 0];
                        this.axisY2[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY2.length ? this.data[a].axisYIndex : 0].dataSeries.push(this.data[a])
                    } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new B(this, this.options.axisY2, "axisY", "right", 0)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new B(this, this.options.axisY2, "axisY", "top", 0))), this.data[a].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[a]);
                if (!this.data[a].axisXType || "primary" === this.data[a].axisXType)
                    if (this.options.axisX && 0 < this.options.axisX.length) {
                        if (!this.axisX.length)
                            for (b = 0; b < this.options.axisX.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[b] = new B(this, this.options.axisX[b], "axisX", "bottom", b)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[b] = new B(this, this.options.axisX[b], "axisX", "left", b));
                        this.data[a].axisX = this.axisX[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex <
                            this.axisX.length ? this.data[a].axisXIndex : 0];
                        this.axisX[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX.length ? this.data[a].axisXIndex : 0].dataSeries.push(this.data[a])
                    } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new B(this, this.options.axisX, "axisX", "bottom", 0)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new B(this, this.options.axisX, "axisX", "left", 0))), this.data[a].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[a]);
                if ("secondary" === this.data[a].axisXType)
                    if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                        if (!this.axisX2.length)
                            for (b = 0; b < this.options.axisX2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[b] = new B(this, this.options.axisX2[b], "axisX", "top", b)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[b] = new B(this, this.options.axisX2[b], "axisX", "right", b));
                        this.data[a].axisX = this.axisX2[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX2.length ?
                            this.data[a].axisXIndex : 0];
                        this.axisX2[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX2.length ? this.data[a].axisXIndex : 0].dataSeries.push(this.data[a])
                    } else this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new B(this, this.options.axisX2, "axisX", "top", 0)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new B(this, this.options.axisX2, "axisX", "right", 0))), this.data[a].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[a])
            }
        if (this.axisY) {
            for (b =
                1; b < this.axisY.length; b++) "undefined" === typeof this.axisY[b].options.gridThickness && (this.axisY[b].gridThickness = 0);
            for (b = 0; b < this.axisY.length - 1; b++) "undefined" === typeof this.axisY[b].options.margin && (this.axisY[b].margin = 10)
        }
        if (this.axisY2) {
            for (b = 1; b < this.axisY2.length; b++) "undefined" === typeof this.axisY2[b].options.gridThickness && (this.axisY2[b].gridThickness = 0);
            for (b = 0; b < this.axisY2.length - 1; b++) "undefined" === typeof this.axisY2[b].options.margin && (this.axisY2[b].margin = 10)
        }
        this.axisY && 0 < this.axisY.length &&
            (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
        if (this.axisX)
            for (b = 0; b < this.axisX.length; b++) "undefined" === typeof this.axisX[b].options.gridThickness && (this.axisX[b].gridThickness = 0);
        if (this.axisX2)
            for (b = 0; b < this.axisX2.length; b++) "undefined" === typeof this.axisX2[b].options.gridThickness &&
                (this.axisX2[b].gridThickness = 0);
        this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
        b = !1;
        if (0 < this._axes.length && (this.zoomEnabled || this.panEnabled))
            for (a = 0; a < this._axes.length; a++)
                if (null !== this._axes[a].viewportMinimum || null !== this._axes[a].viewportMaximum) {
                    b = !0;
                    break
                }
        b ? ta(this._zoomButton, this._resetButton) : (Y(this._zoomButton, this._resetButton), this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
        this._processData();
        this.options.title && (this.title = new ma(this, this.options.title), this.title.dockInsidePlotArea ? d.push(this.title) : this.title.render());
        if (this.options.subtitles)
            for (this.subtitles = [], a = 0; a < this.options.subtitles.length; a++) b = new va(this, this.options.subtitles[a]), this.subtitles.push(b), b.dockInsidePlotArea ? d.push(b) : b.render();
        this.legend = new wa(this, this.options.legend);
        for (a = 0; a < this.data.length; a++)(this.data[a].showInLegend || "pie" === this.data[a].type || "doughnut" === this.data[a].type) && this.legend.dataSeries.push(this.data[a]);
        this.legend.dockInsidePlotArea ? d.push(this.legend) : this.legend.render();
        if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) B.setLayoutAndRender(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        else if ("none" ===
            this.plotInfo.axisPlacement) this.preparePlotArea();
        else return;
        for (a = 0; a < d.length; a++) d[a].render();
        var c = [];
        if (this.animatedRender) {
            var f = ga(this.width, this.height);
            f.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
        }
        for (a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var d = this.plotInfo.plotTypes[a], g = 0; g < d.plotUnits.length; g++) {
                var h = d.plotUnits[g],
                    l = null;
                h.targetCanvas = null;
                this.animatedRender && (h.targetCanvas = ga(this.width, this.height), h.targetCanvasCtx = h.targetCanvas.getContext("2d"));
                "line" === h.type ? l = this.renderLine(h) : "stepLine" === h.type ? l = this.renderStepLine(h) : "spline" === h.type ? l = this.renderSpline(h) : "column" === h.type ? l = this.renderColumn(h) : "bar" === h.type ? l = this.renderBar(h) : "area" === h.type ? l = this.renderArea(h) : "stepArea" === h.type ? l = this.renderStepArea(h) : "splineArea" === h.type ? l = this.renderSplineArea(h) : "stackedColumn" === h.type ? l = this.renderStackedColumn(h) : "stackedColumn100" === h.type ? l = this.renderStackedColumn100(h) : "stackedBar" === h.type ? l = this.renderStackedBar(h) : "stackedBar100" ===
                    h.type ? l = this.renderStackedBar100(h) : "stackedArea" === h.type ? l = this.renderStackedArea(h) : "stackedArea100" === h.type ? l = this.renderStackedArea100(h) : "bubble" === h.type ? l = l = this.renderBubble(h) : "scatter" === h.type ? l = this.renderScatter(h) : "pie" === h.type ? this.renderPie(h) : "doughnut" === h.type ? this.renderPie(h) : "candlestick" === h.type ? l = this.renderCandlestick(h) : "ohlc" === h.type ? l = this.renderCandlestick(h) : "rangeColumn" === h.type ? l = this.renderRangeColumn(h) : "rangeBar" === h.type ? l = this.renderRangeBar(h) : "rangeArea" ===
                    h.type ? l = this.renderRangeArea(h) : "rangeSplineArea" === h.type && (l = this.renderRangeSplineArea(h));
                for (b = 0; b < h.dataSeriesIndexes.length; b++) this._dataInRenderedOrder.push(this.data[h.dataSeriesIndexes[b]]);
                this.animatedRender && l && c.push(l)
            }
        this.animatedRender && 0 < this._indexLabels.length && (a = ga(this.width, this.height).getContext("2d"), c.push(this.renderIndexLabels(a)));
        var k = this;
        0 < c.length ? (k.disableToolTip = !0, k._animator.animate(200, k.animationDuration, function(a) {
            k.ctx.clearRect(0, 0, k.width, k.height);
            k.ctx.drawImage(f, 0, 0, Math.floor(k.width * Q), Math.floor(k.height * Q), 0, 0, k.width, k.height);
            for (var b = 0; b < c.length; b++) l = c[b], 1 > a && "undefined" !== typeof l.startTimePercent ? a >= l.startTimePercent && l.animationCallback(l.easingFunction(a - l.startTimePercent, 0, 1, 1 - l.startTimePercent), l) : l.animationCallback(l.easingFunction(a, 0, 1, 1), l);
            k.dispatchEvent("dataAnimationIterationEnd", {
                chart: k
            })
        }, function() {
            c = [];
            for (var a = 0; a < k.plotInfo.plotTypes.length; a++)
                for (var b = k.plotInfo.plotTypes[a], d = 0; d < b.plotUnits.length; d++) b.plotUnits[d].targetCanvas =
                    null;
            f = null;
            k.disableToolTip = !1
        })) : (0 < k._indexLabels.length && k.renderIndexLabels(), k.dispatchEvent("dataAnimationIterationEnd", {
            chart: k
        }));
        this.attachPlotAreaEventHandlers();
        this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || Y(this._zoomButton, this._resetButton);
        this.toolTip._updateToolTip();
        this.renderCount++
    };
    A.prototype.attachPlotAreaEventHandlers = function() {
        this.attachEvent({
            context: this,
            chart: this,
            mousedown: this._plotAreaMouseDown,
            mouseup: this._plotAreaMouseUp,
            mousemove: this._plotAreaMouseMove,
            cursor: this.zoomEnabled ? "col-resize" : "move",
            cursor: this.panEnabled ? "move" : "default",
            capture: !0,
            bounds: this.plotArea
        })
    };
    A.prototype.categoriseDataSeries = function() {
        for (var a = "", d = 0; d < this.data.length; d++)
            if (a = this.data[d], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= A._supportedChartTypes.indexOf(a.type)) {
                for (var b = null, c = !1, f = null, g = !1, h = 0; h < this.plotInfo.plotTypes.length; h++)
                    if (this.plotInfo.plotTypes[h].type === a.type) {
                        c = !0;
                        b = this.plotInfo.plotTypes[h];
                        break
                    }
                c || (b = {
                    type: a.type,
                    totalDataSeries: 0,
                    plotUnits: []
                }, this.plotInfo.plotTypes.push(b));
                for (h = 0; h < b.plotUnits.length; h++)
                    if (b.plotUnits[h].axisYType === a.axisYType && b.plotUnits[h].axisXType === a.axisXType && b.plotUnits[h].axisYIndex === a.axisYIndex && b.plotUnits[h].axisXIndex === a.axisXIndex) {
                        g = !0;
                        f = b.plotUnits[h];
                        break
                    }
                g || (f = {
                    type: a.type,
                    previousDataSeriesCount: 0,
                    index: b.plotUnits.length,
                    plotType: b,
                    axisXType: a.axisXType,
                    axisYType: a.axisYType,
                    axisYIndex: a.axisYIndex,
                    axisXIndex: a.axisXIndex,
                    axisY: "primary" ===
                        a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                    axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                    dataSeriesIndexes: [],
                    yTotals: []
                }, b.plotUnits.push(f));
                b.totalDataSeries++;
                f.dataSeriesIndexes.push(d);
                a.plotUnit = f
            }
        for (d = 0; d < this.plotInfo.plotTypes.length; d++)
            for (b =
                this.plotInfo.plotTypes[d], h = a = 0; h < b.plotUnits.length; h++) b.plotUnits[h].previousDataSeriesCount = a, a += b.plotUnits[h].dataSeriesIndexes.length
    };
    A.prototype.assignIdToDataPoints = function() {
        for (var a = 0; a < this.data.length; a++) {
            var d = this.data[a];
            if (d.dataPoints)
                for (var b = d.dataPoints.length, c = 0; c < b; c++) d.dataPointIds[c] = ++this._eventManager.lastObjectId
        }
    };
    A.prototype._processData = function() {
        this.assignIdToDataPoints();
        this.categoriseDataSeries();
        for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var d =
                    this.plotInfo.plotTypes[a], b = 0; b < d.plotUnits.length; b++) {
                var c = d.plotUnits[b];
                "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type ? this._processMultiseriesPlotUnit(c) : "stackedColumn" === c.type || "stackedBar" === c.type || "stackedArea" === c.type ? this._processStackedPlotUnit(c) : "stackedColumn100" === c.type || "stackedBar100" === c.type || "stackedArea100" === c.type ? this._processStacked100PlotUnit(c) :
                    "candlestick" !== c.type && "ohlc" !== c.type && "rangeColumn" !== c.type && "rangeBar" !== c.type && "rangeArea" !== c.type && "rangeSplineArea" !== c.type || this._processMultiYPlotUnit(c)
            }
    };
    A.prototype._processMultiseriesPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var d = a.axisY.dataInfo, b = a.axisX.dataInfo, c, f, g = !1, h = 0; h < a.dataSeriesIndexes.length; h++) {
                var l = this.data[a.dataSeriesIndexes[h]],
                    k = 0,
                    m = !1,
                    n = !1,
                    p;
                if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement) var e = a.axisX.sessionVariables.newViewportMinimum ?
                    a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                    r = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                if (l.dataPoints[k].x && l.dataPoints[k].x.getTime || "dateTime" === l.xValueType) g = !0;
                for (k = 0; k < l.dataPoints.length; k++) {
                    "undefined" === typeof l.dataPoints[k].x && (l.dataPoints[k].x = k + (a.axisX.logarithmic ? 1 : 0));
                    l.dataPoints[k].x.getTime ? (g = !0, c = l.dataPoints[k].x.getTime()) : c = l.dataPoints[k].x;
                    f = l.dataPoints[k].y;
                    c < b.min && (b.min = c);
                    c > b.max && (b.max = c);
                    f < d.min && (d.min = f);
                    f > d.max && (d.max = f);
                    if (0 < k) {
                        if (a.axisX.logarithmic) {
                            var q = c / l.dataPoints[k - 1].x;
                            1 > q && (q = 1 / q);
                            b.minDiff > q && 1 !== q && (b.minDiff = q)
                        } else q = c - l.dataPoints[k -
                            1].x, 0 > q && (q *= -1), b.minDiff > q && 0 !== q && (b.minDiff = q);
                        null !== f && null !== l.dataPoints[k - 1].y && (a.axisY.logarithmic ? (q = f / l.dataPoints[k - 1].y, 1 > q && (q = 1 / q), d.minDiff > q && 1 !== q && (d.minDiff = q)) : (q = f - l.dataPoints[k - 1].y, 0 > q && (q *= -1), d.minDiff > q && 0 !== q && (d.minDiff = q)))
                    }
                    if (c < e && !m) null !== f && (p = c);
                    else {
                        if (!m && (m = !0, 0 < k)) {
                            k -= 2;
                            continue
                        }
                        if (c > r && !n) n = !0;
                        else if (c > r && n) continue;
                        l.dataPoints[k].label && (a.axisX.labels[c] = l.dataPoints[k].label);
                        c < b.viewPortMin && (b.viewPortMin = c);
                        c > b.viewPortMax && (b.viewPortMax = c);
                        null ===
                            f ? b.viewPortMin === c && p < c && (b.viewPortMin = p) : (f < d.viewPortMin && (d.viewPortMin = f), f > d.viewPortMax && (d.viewPortMax = f))
                    }
                }
                this.plotInfo.axisXValueType = l.xValueType = g ? "dateTime" : "number"
            }
    };
    A.prototype._processStackedPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var d = a.axisY.dataInfo, b = a.axisX.dataInfo, c, f, g = !1, h = [], l = [], k = Infinity, m = 0; m < a.dataSeriesIndexes.length; m++) {
                var n = this.data[a.dataSeriesIndexes[m]],
                    p = 0,
                    e = !1,
                    r = !1,
                    q;
                if ("normal" === n.axisPlacement || "xySwapped" ===
                    n.axisPlacement) var s = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                    v = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ?
                    this.options.axisX.maximum : Infinity;
                if (n.dataPoints[p].x && n.dataPoints[p].x.getTime || "dateTime" === n.xValueType) g = !0;
                for (p = 0; p < n.dataPoints.length; p++) {
                    "undefined" === typeof n.dataPoints[p].x && (n.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                    n.dataPoints[p].x.getTime ? (g = !0, c = n.dataPoints[p].x.getTime()) : c = n.dataPoints[p].x;
                    x(n.dataPoints[p].y) ? f = 0 : (f = n.dataPoints[p].y, 0 === m && (k = Math.min(f, k)));
                    c < b.min && (b.min = c);
                    c > b.max && (b.max = c);
                    if (0 < p) {
                        if (a.axisX.logarithmic) {
                            var w = c / n.dataPoints[p - 1].x;
                            1 > w && (w = 1 /
                                w);
                            b.minDiff > w && 1 !== w && (b.minDiff = w)
                        } else w = c - n.dataPoints[p - 1].x, 0 > w && (w *= -1), b.minDiff > w && 0 !== w && (b.minDiff = w);
                        null !== f && null !== n.dataPoints[p - 1].y && (a.axisY.logarithmic ? 0 < f && (w = f / n.dataPoints[p - 1].y, 1 > w && (w = 1 / w), d.minDiff > w && 1 !== w && (d.minDiff = w)) : (w = f - n.dataPoints[p - 1].y, 0 > w && (w *= -1), d.minDiff > w && 0 !== w && (d.minDiff = w)))
                    }
                    if (c < s && !e) null !== n.dataPoints[p].y && (q = c);
                    else {
                        if (!e && (e = !0, 0 < p)) {
                            p -= 2;
                            continue
                        }
                        if (c > v && !r) r = !0;
                        else if (c > v && r) continue;
                        n.dataPoints[p].label && (a.axisX.labels[c] = n.dataPoints[p].label);
                        c < b.viewPortMin && (b.viewPortMin = c);
                        c > b.viewPortMax && (b.viewPortMax = c);
                        null === n.dataPoints[p].y ? b.viewPortMin === c && q < c && (b.viewPortMin = q) : (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + Math.abs(f), 0 <= f ? h[c] = h[c] ? h[c] + f : f : l[c] = l[c] ? l[c] + f : f)
                    }
                }
                this.plotInfo.axisXValueType = n.xValueType = g ? "dateTime" : "number"
            }
            for (p in h) h.hasOwnProperty(p) && !isNaN(p) && (a = h[p], a < d.min && (d.min = Math.min(a, k)), a > d.max && (d.max = a), p < b.viewPortMin || p > b.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = Math.min(a, k)), a > d.viewPortMax &&
                (d.viewPortMax = a)));
            for (p in l) l.hasOwnProperty(p) && !isNaN(p) && (a = l[p], a < d.min && (d.min = Math.min(a, k)), a > d.max && (d.max = a), p < b.viewPortMin || p > b.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = Math.min(a, k)), a > d.viewPortMax && (d.viewPortMax = a)))
        }
    };
    A.prototype._processStacked100PlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var d = a.axisY.dataInfo, b = a.axisX.dataInfo, c, f, g = !1, h = !1, l = !1, k = [], m = 0; m < a.dataSeriesIndexes.length; m++) {
                var n = this.data[a.dataSeriesIndexes[m]],
                    p = 0,
                    e = !1,
                    r = !1,
                    q;
                if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement) var s = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                    v = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum :
                    this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                if (n.dataPoints[p].x && n.dataPoints[p].x.getTime || "dateTime" === n.xValueType) g = !0;
                for (p = 0; p < n.dataPoints.length; p++) {
                    "undefined" === typeof n.dataPoints[p].x && (n.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                    n.dataPoints[p].x.getTime ? (g = !0, c = n.dataPoints[p].x.getTime()) : c = n.dataPoints[p].x;
                    f = x(n.dataPoints[p].y) ? null : n.dataPoints[p].y;
                    c < b.min && (b.min = c);
                    c > b.max && (b.max = c);
                    if (0 < p) {
                        if (a.axisX.logarithmic) {
                            var w = c / n.dataPoints[p -
                                1].x;
                            1 > w && (w = 1 / w);
                            b.minDiff > w && 1 !== w && (b.minDiff = w)
                        } else w = c - n.dataPoints[p - 1].x, 0 > w && (w *= -1), b.minDiff > w && 0 !== w && (b.minDiff = w);
                        x(f) || null === n.dataPoints[p - 1].y || (a.axisY.logarithmic ? 0 < f && (w = f / n.dataPoints[p - 1].y, 1 > w && (w = 1 / w), d.minDiff > w && 1 !== w && (d.minDiff = w)) : (w = f - n.dataPoints[p - 1].y, 0 > w && (w *= -1), d.minDiff > w && 0 !== w && (d.minDiff = w)))
                    }
                    if (c < s && !e) null !== f && (q = c);
                    else {
                        if (!e && (e = !0, 0 < p)) {
                            p -= 2;
                            continue
                        }
                        if (c > v && !r) r = !0;
                        else if (c > v && r) continue;
                        n.dataPoints[p].label && (a.axisX.labels[c] = n.dataPoints[p].label);
                        c < b.viewPortMin && (b.viewPortMin = c);
                        c > b.viewPortMax && (b.viewPortMax = c);
                        null === f ? b.viewPortMin === c && q < c && (b.viewPortMin = q) : (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + Math.abs(f), 0 <= f ? h = !0 : 0 > f && (l = !0), k[c] = k[c] ? k[c] + Math.abs(f) : Math.abs(f))
                    }
                }
                this.plotInfo.axisXValueType = n.xValueType = g ? "dateTime" : "number"
            }
            a.axisY.logarithmic ? (d.max = x(d.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(d.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), d.min = x(d.viewPortMin) ? 1 : Math.min(d.viewPortMin,
                1)) : h && !l ? (d.max = x(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = x(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : h && l ? (d.max = x(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = x(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99)) : !h && l && (d.max = x(d.viewPortMax) ? -1 : Math.max(d.viewPortMax, -1), d.min = x(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99));
            d.viewPortMin = d.min;
            d.viewPortMax = d.max;
            a.dataPointYSums = k
        }
    };
    A.prototype._processMultiYPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var d =
                    a.axisY.dataInfo, b = a.axisX.dataInfo, c, f, g, h, l = !1, k = 0; k < a.dataSeriesIndexes.length; k++) {
                var m = this.data[a.dataSeriesIndexes[k]],
                    n = 0,
                    p = !1,
                    e = !1,
                    r, q, s;
                if ("normal" === m.axisPlacement || "xySwapped" === m.axisPlacement) var v = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                    w = this.sessionVariables.axisX.newViewportMaximum ?
                    this.sessionVariables.axisX.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                if (m.dataPoints[n].x && m.dataPoints[n].x.getTime || "dateTime" === m.xValueType) l = !0;
                for (n = 0; n < m.dataPoints.length; n++) {
                    "undefined" === typeof m.dataPoints[n].x && (m.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
                    m.dataPoints[n].x.getTime ? (l = !0, c = m.dataPoints[n].x.getTime()) : c = m.dataPoints[n].x;
                    if ((f = m.dataPoints[n].y) && f.length) {
                        g = Math.min.apply(null, f);
                        h = Math.max.apply(null, f);
                        q = !0;
                        for (var y = 0; y < f.length; y++) null === f.k && (q = !1);
                        q && (p || (s = r), r = c)
                    }
                    c < b.min && (b.min = c);
                    c > b.max && (b.max = c);
                    g < d.min && (d.min = g);
                    h > d.max && (d.max = h);
                    0 < n && (a.axisX.logarithmic ? (q = c / m.dataPoints[n - 1].x, 1 > q && (q = 1 / q), b.minDiff > q && 1 !== q && (b.minDiff = q)) : (q = c - m.dataPoints[n - 1].x, 0 > q && (q *= -1), b.minDiff > q && 0 !== q && (b.minDiff = q)), f && (null !== f[0] && m.dataPoints[n - 1].y && null !== m.dataPoints[n - 1].y[0]) && (a.axisY.logarithmic ? (q = f[0] /
                        m.dataPoints[n - 1].y[0], 1 > q && (q = 1 / q), d.minDiff > q && 1 !== q && (d.minDiff = q)) : (q = f[0] - m.dataPoints[n - 1].y[0], 0 > q && (q *= -1), d.minDiff > q && 0 !== q && (d.minDiff = q))));
                    if (!(c < v) || p) {
                        if (!p && (p = !0, 0 < n)) {
                            n -= 2;
                            r = s;
                            continue
                        }
                        if (c > w && !e) e = !0;
                        else if (c > w && e) continue;
                        m.dataPoints[n].label && (a.axisX.labels[c] = m.dataPoints[n].label);
                        c < b.viewPortMin && (b.viewPortMin = c);
                        c > b.viewPortMax && (b.viewPortMax = c);
                        if (b.viewPortMin === c && f)
                            for (y = 0; y < f.length; y++)
                                if (null === f[y] && r < c) {
                                    b.viewPortMin = r;
                                    break
                                }
                        null === f ? b.viewPortMin === c && r < c &&
                            (b.viewPortMin = r) : (g < d.viewPortMin && (d.viewPortMin = g), h > d.viewPortMax && (d.viewPortMax = h))
                    }
                }
                this.plotInfo.axisXValueType = m.xValueType = l ? "dateTime" : "number"
            }
    };
    A.prototype.getDataPointAtXY = function(a, d, b) {
        b = b || !1;
        for (var c = [], f = this._dataInRenderedOrder.length - 1; 0 <= f; f--) {
            var g = null;
            (g = this._dataInRenderedOrder[f].getDataPointAtXY(a, d, b)) && c.push(g)
        }
        a = null;
        d = !1;
        for (b = 0; b < c.length; b++)
            if ("line" === c[b].dataSeries.type || "stepLine" === c[b].dataSeries.type || "area" === c[b].dataSeries.type || "stepArea" === c[b].dataSeries.type)
                if (f =
                    L("markerSize", c[b].dataPoint, c[b].dataSeries) || 8, c[b].distance <= f / 2) {
                    d = !0;
                    break
                }
        for (b = 0; b < c.length; b++) d && "line" !== c[b].dataSeries.type && "stepLine" !== c[b].dataSeries.type && "area" !== c[b].dataSeries.type && "stepArea" !== c[b].dataSeries.type || (a ? c[b].distance <= a.distance && (a = c[b]) : a = c[b]);
        return a
    };
    A.prototype.getObjectAtXY = function(a, d, b) {
        var c = null;
        if (b = this.getDataPointAtXY(a, d, b || !1)) c = b.dataSeries.dataPointIds[b.dataPointIndex];
        else if (u) c = La(a, d, this._eventManager.ghostCtx);
        else
            for (b = 0; b < this.legend.items.length; b++) {
                var f =
                    this.legend.items[b];
                a >= f.x1 && (a <= f.x2 && d >= f.y1 && d <= f.y2) && (c = f.id)
            }
        return c
    };
    A.prototype.getAutoFontSize = function(a, d, b) {
        a /= 400;
        return Math.max(10, Math.round(Math.min(this.width, this.height) * a))
    };
    A.prototype.resetOverlayedCanvas = function() {
        this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
    };
    A.prototype.clearCanvas = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
    };
    A.prototype.attachEvent =
        function(a) {
            this._events.push(a)
        };
    A.prototype._touchEventHandler = function(a) {
        if (a.changedTouches && this.interactivityEnabled) {
            var d = [],
                b = a.changedTouches,
                c = b ? b[0] : a,
                f = null;
            switch (a.type) {
                case "touchstart":
                case "MSPointerDown":
                    d = ["mousemove", "mousedown"];
                    this._lastTouchData = xa(c);
                    this._lastTouchData.time = new Date;
                    break;
                case "touchmove":
                case "MSPointerMove":
                    d = ["mousemove"];
                    break;
                case "touchend":
                case "MSPointerUp":
                    d = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType ? ["mouseup",
                        "click"
                    ] : ["mouseup"];
                    break;
                default:
                    return
            }
            if (!(b && 1 < b.length)) {
                f = xa(c);
                f.time = new Date;
                try {
                    var g = f.y - this._lastTouchData.y,
                        h = f.time - this._lastTouchData.time;
                    if (15 < Math.abs(g) && (this._lastTouchData.scroll || 200 > h)) {
                        this._lastTouchData.scroll = !0;
                        var l = window.parent || window;
                        l && l.scrollBy && l.scrollBy(0, -g)
                    }
                } catch (k) {}
                this._lastTouchEventType = a.type;
                if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                else
                    for (b = 0; b < d.length; b++) f = d[b], g = document.createEvent("MouseEvent"),
                        g.initMouseEvent(f, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), c.target.dispatchEvent(g), a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault()
            }
        }
    };
    A.prototype._dispatchRangeEvent = function(a, d) {
        var b = {
            chart: this
        };
        b.type = a;
        b.trigger = d;
        var c = [];
        this.axisX && 0 < this.axisX.length && c.push("axisX");
        this.axisX2 && 0 < this.axisX2.length && c.push("axisX2");
        this.axisY && 0 < this.axisY.length && c.push("axisY");
        this.axisY2 && 0 < this.axisY2.length && c.push("axisY2");
        for (var f = 0; f < c.length; f++)
            if (x(b[c[f]]) && (b[c[f]] = []), "axisY" === c[f])
                for (var g = 0; g < this.axisY.length; g++) b[c[f]].push({
                    viewportMinimum: this[c[f]][g].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[c[f]][g].sessionVariables.newViewportMaximum
                });
            else if ("axisY2" === c[f])
            for (g = 0; g < this.axisY2.length; g++) b[c[f]].push({
                viewportMinimum: this[c[f]][g].sessionVariables.newViewportMinimum,
                viewportMaximum: this[c[f]][g].sessionVariables.newViewportMaximum
            });
        else if ("axisX" === c[f])
            for (g = 0; g < this.axisX.length; g++) b[c[f]].push({
                viewportMinimum: this[c[f]][g].sessionVariables.newViewportMinimum,
                viewportMaximum: this[c[f]][g].sessionVariables.newViewportMaximum
            });
        else if ("axisX2" === c[f])
            for (g = 0; g < this.axisX2.length; g++) b[c[f]].push({
                viewportMinimum: this[c[f]][g].sessionVariables.newViewportMinimum,
                viewportMaximum: this[c[f]][g].sessionVariables.newViewportMaximum
            });
        this.dispatchEvent(a, b, this)
    };
    A.prototype._mouseEventHandler = function(a) {
        "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
        var d = xa(a),
            b = a.type,
            c, f;
        a.which ? f = 3 == a.which : a.button && (f = 2 == a.button);
        A.capturedEventParam &&
            (c = A.capturedEventParam, "mouseup" === b && (A.capturedEventParam = null, c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", c.chart._mouseEventHandler, !1)), c.hasOwnProperty(b) && ("mouseup" !== b || c.chart.overlaidCanvas.releaseCapture ? a.target === c.chart.overlaidCanvas && c[b].call(c.context, d.x, d.y) : a.target !== c.chart.overlaidCanvas && (c.chart.isDrag = !1)));
        if (this.interactivityEnabled)
            if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
            else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), !f) {
            if (!A.capturedEventParam && this._events) {
                for (var g = 0; g < this._events.length; g++)
                    if (this._events[g].hasOwnProperty(b))
                        if (c = this._events[g], f = c.bounds, d.x >= f.x1 && d.x <= f.x2 && d.y >= f.y1 && d.y <= f.y2) {
                            c[b].call(c.context, d.x, d.y);
                            "mousedown" === b && !0 === c.capture ? (A.capturedEventParam = c, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === b && (c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                            break
                        } else c = null;
                a.target.style.cursor = c && c.cursor ? c.cursor : this._defaultCursor
            }
            b = this.plotArea;
            if (d.x < b.x1 || d.x > b.x2 || d.y < b.y1 || d.y > b.y2) this.toolTip && this.toolTip.enabled ? this.toolTip.hide() : this.resetOverlayedCanvas();
            this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
        }
    };
    A.prototype._plotAreaMouseDown =
        function(a, d) {
            this.isDrag = !0;
            this.dragStartPoint = {
                x: a,
                y: d
            }
        };
    A.prototype._plotAreaMouseUp = function(a, d) {
        if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var b = d - this.dragStartPoint.y,
                c = a - this.dragStartPoint.x,
                f = 0 <= this.zoomType.indexOf("x"),
                g = 0 <= this.zoomType.indexOf("y"),
                h = !1;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement) var l = g,
                g = f,
                f = l;
            if (this.panEnabled || this.zoomEnabled) {
                if (this.panEnabled)
                    for (f = g = 0; f < this._axes.length; f++) b =
                        this._axes[f], b.logarithmic ? b.viewportMinimum < b.minimum ? (g = b.minimum / b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum * g, b.sessionVariables.newViewportMaximum = b.viewportMaximum * g, h = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum / b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum / g, b.sessionVariables.newViewportMaximum = b.viewportMaximum / g, h = !0) : b.viewportMinimum < b.minimum ? (g = b.minimum - b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum +
                            g, b.sessionVariables.newViewportMaximum = b.viewportMaximum + g, h = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum - b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum - g, b.sessionVariables.newViewportMaximum = b.viewportMaximum - g, h = !0);
                else if ((!f || 2 < Math.abs(c)) && (!g || 2 < Math.abs(b)) && this.zoomEnabled) {
                    if (!this.dragStartPoint) return;
                    b = f ? this.dragStartPoint.x : this.plotArea.x1;
                    c = g ? this.dragStartPoint.y : this.plotArea.y1;
                    f = f ? a : this.plotArea.x2;
                    g = g ? d : this.plotArea.y2;
                    2 < Math.abs(b - f) && 2 < Math.abs(c -
                        g) && this._zoomPanToSelectedRegion(b, c, f, g) && (h = !0)
                }
                h && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), h && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (ta(this._zoomButton, this._resetButton), T(this, this._zoomButton, "pan"), T(this, this._resetButton, "reset")))
            }
        }
        this.isDrag = !1
    };
    A.prototype._plotAreaMouseMove = function(a, d) {
        if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var b = 0,
                c = 0,
                f = b = null,
                f =
                0 <= this.zoomType.indexOf("x"),
                g = 0 <= this.zoomType.indexOf("y"),
                h = this;
            "xySwapped" === this.plotInfo.axisPlacement && (b = g, g = f, f = b);
            b = this.dragStartPoint.x - a;
            c = this.dragStartPoint.y - d;
            2 < Math.abs(b) && 8 > Math.abs(b) && (this.panEnabled || this.zoomEnabled) ? this.toolTip.hide() : this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, d);
            if ((!f || 2 < Math.abs(b) || !g || 2 < Math.abs(c)) && (this.panEnabled || this.zoomEnabled))
                if (this.panEnabled) f = {
                    x1: f ? this.plotArea.x1 + b : this.plotArea.x1,
                    y1: g ? this.plotArea.y1 + c : this.plotArea.y1,
                    x2: f ? this.plotArea.x2 + b : this.plotArea.x2,
                    y2: g ? this.plotArea.y2 + c : this.plotArea.y2
                }, clearTimeout(h._panTimerId), h._panTimerId = setTimeout(function(b, c, e, f) {
                    return function() {
                        h._zoomPanToSelectedRegion(b, c, e, f, !0) && (h._dispatchRangeEvent("rangeChanging", "pan"), h.render(), h._dispatchRangeEvent("rangeChanged", "pan"), h.dragStartPoint.x = a, h.dragStartPoint.y = d)
                    }
                }(f.x1, f.y1, f.x2, f.y2), 0);
                else if (this.zoomEnabled) {
                this.resetOverlayedCanvas();
                b = this.overlaidCanvasCtx.globalAlpha;
                this.overlaidCanvasCtx.fillStyle =
                    "#A89896";
                var c = f ? this.dragStartPoint.x : this.plotArea.x1,
                    l = g ? this.dragStartPoint.y : this.plotArea.y1,
                    k = f ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                    m = g ? d - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                this.validateRegion(c, l, f ? a : this.plotArea.x2 - this.plotArea.x1, g ? d : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                this.overlaidCanvasCtx.globalAlpha = 0.7;
                this.overlaidCanvasCtx.fillRect(c,
                    l, k, m);
                this.overlaidCanvasCtx.globalAlpha = b
            }
        } else this.toolTip.mouseMoveHandler(a, d)
    };
    A.prototype._zoomPanToSelectedRegion = function(a, d, b, c, f) {
        a = this.validateRegion(a, d, b, c, f);
        d = a.axesWithValidRange;
        b = a.axesRanges;
        if (a.isValid)
            for (c = 0; c < d.length; c++) f = b[c], d[c].setViewPortRange(f.val1, f.val2);
        return a.isValid
    };
    A.prototype.validateRegion = function(a, d, b, c, f) {
        f = f || !1;
        for (var g = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), l = !1, k = [], m = [], n = [], p = 0; p < this.axisX.length; p++) this.axisX[p] &&
            g && m.push(this.axisX[p]);
        for (p = 0; p < this.axisX2.length; p++) this.axisX2[p] && g && m.push(this.axisX2[p]);
        for (p = 0; p < this.axisY.length; p++) this.axisY[p] && h && m.push(this.axisY[p]);
        for (p = 0; p < this.axisY2.length; p++) this.axisY2[p] && h && m.push(this.axisY2[p]);
        for (g = 0; g < m.length; g++) {
            var h = m[g],
                p = h.convertPixelToValue({
                    x: a,
                    y: d
                }),
                e = h.convertPixelToValue({
                    x: b,
                    y: c
                });
            if (p > e) var r = e,
                e = p,
                p = r;
            if (isFinite(h.dataInfo.minDiff))
                if (!(h.logarithmic && e / p < Math.pow(h.dataInfo.minDiff, 3) || !h.logarithmic && Math.abs(e - p) < 3 * Math.abs(h.dataInfo.minDiff) ||
                        p < h.minimum || e > h.maximum)) k.push(h), n.push({
                    val1: p,
                    val2: e
                }), l = !0;
                else if (!f) {
                l = !1;
                break
            }
        }
        return {
            isValid: l,
            axesWithValidRange: k,
            axesRanges: n
        }
    };
    A.prototype.preparePlotArea = function() {
        var a = this.plotArea;
        !u && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
        if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
            var d = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
            if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                var b = this.axisY[0];
                a.x1 = d.x1 < d.x2 ? d.x1 : b.lineCoordinates.x1;
                a.y1 = d.y1 < b.lineCoordinates.y1 ? d.y1 : b.lineCoordinates.y1;
                a.x2 = d.x2 > b.lineCoordinates.x2 ? d.x2 : b.lineCoordinates.x2;
                a.y2 = d.y2 > d.y1 ? d.y2 : b.lineCoordinates.y2;
                a.width = a.x2 - a.x1;
                a.height = a.y2 - a.y1
            }
            this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (b = this.axisY2[0], a.x1 = d.x1 < d.x2 ? d.x1 : b.lineCoordinates.x1, a.y1 = d.y1 < b.lineCoordinates.y1 ? d.y1 : b.lineCoordinates.y1, a.x2 = d.x2 > b.lineCoordinates.x2 ? d.x2 : b.lineCoordinates.x2, a.y2 = d.y2 > d.y1 ? d.y2 : b.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1)
        } else d =
            this.layoutManager.getFreeSpace(), a.x1 = d.x1, a.x2 = d.x2, a.y1 = d.y1, a.y2 = d.y2, a.width = d.width, a.height = d.height;
        u || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
        a.layoutManager = new ja(a.x1, a.y1, a.x2, a.y2, 2)
    };
    A.prototype.renderIndexLabels = function(a) {
        var d = a || this.plotArea.ctx,
            b = this.plotArea,
            c = 0,
            f = 0,
            g = 0,
            h = 0,
            l = c = h = f = g = 0,
            k = 0;
        for (a = 0; a < this._indexLabels.length; a++) {
            var m = this._indexLabels[a],
                n = m.chartType.toLowerCase(),
                p, e, l = L("indexLabelFontColor", m.dataPoint, m.dataSeries),
                k = L("indexLabelFontSize", m.dataPoint, m.dataSeries);
            p = L("indexLabelFontFamily", m.dataPoint, m.dataSeries);
            e = L("indexLabelFontStyle", m.dataPoint, m.dataSeries);
            var h = L("indexLabelFontWeight", m.dataPoint, m.dataSeries),
                r = L("indexLabelBackgroundColor", m.dataPoint, m.dataSeries),
                f = L("indexLabelMaxWidth", m.dataPoint, m.dataSeries),
                g = L("indexLabelWrap", m.dataPoint, m.dataSeries),
                q = L("indexLabelLineDashType", m.dataPoint, m.dataSeries),
                s = L("indexLabelLineColor",
                    m.dataPoint, m.dataSeries),
                v = x(m.dataPoint.indexLabelLineThickness) ? x(m.dataSeries.options.indexLabelLineThickness) ? 0 : m.dataSeries.options.indexLabelLineThickness : m.dataPoint.indexLabelLineThickness,
                c = 0 < v ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
                w = {
                    percent: null,
                    total: null
                },
                y = null;
            if (0 <= m.dataSeries.type.indexOf("stacked") || "pie" === m.dataSeries.type || "doughnut" === m.dataSeries.type) w = this.getPercentAndTotal(m.dataSeries, m.dataPoint);
            if (m.dataSeries.indexLabelFormatter ||
                m.dataPoint.indexLabelFormatter) y = {
                chart: this,
                dataSeries: m.dataSeries,
                dataPoint: m.dataPoint,
                index: m.indexKeyword,
                total: w.total,
                percent: w.percent
            };
            var t = m.dataPoint.indexLabelFormatter ? m.dataPoint.indexLabelFormatter(y) : m.dataPoint.indexLabel ? this.replaceKeywordsWithValue(m.dataPoint.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword) : m.dataSeries.indexLabelFormatter ? m.dataSeries.indexLabelFormatter(y) : m.dataSeries.indexLabel ? this.replaceKeywordsWithValue(m.dataSeries.indexLabel, m.dataPoint, m.dataSeries,
                null, m.indexKeyword) : null;
            if (null !== t && "" !== t) {
                var w = L("indexLabelPlacement", m.dataPoint, m.dataSeries),
                    y = L("indexLabelOrientation", m.dataPoint, m.dataSeries),
                    D = m.direction,
                    Z = m.dataSeries.axisX,
                    aa = m.dataSeries.axisY,
                    z = !1,
                    r = new W(d, {
                        x: 0,
                        y: 0,
                        maxWidth: f ? f : 0.5 * this.width,
                        maxHeight: g ? 5 * k : 1.5 * k,
                        angle: "horizontal" === y ? 0 : -90,
                        text: t,
                        padding: 0,
                        backgroundColor: r,
                        horizontalAlign: "left",
                        fontSize: k,
                        fontFamily: p,
                        fontWeight: h,
                        fontColor: l,
                        fontStyle: e,
                        textBaseline: "top"
                    });
                r.measureText();
                m.dataSeries.indexLabelMaxWidth =
                    r.maxWidth;
                if (0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("bubble") || 0 <= n.indexOf("scatter")) {
                    if (m.dataPoint.x < Z.viewportMinimum || m.dataPoint.x > Z.viewportMaximum || m.dataPoint.y < aa.viewportMinimum || m.dataPoint.y > aa.viewportMaximum) continue
                } else if (0 <= n.indexOf("column")) {
                    if (m.dataPoint.x < Z.viewportMinimum || m.dataPoint.x > Z.viewportMaximum || m.bounds.y1 > b.y2 || m.bounds.y2 < b.y1) continue
                } else if (0 <= n.indexOf("bar")) {
                    if (m.dataPoint.x < Z.viewportMinimum || m.dataPoint.x > Z.viewportMaximum || m.bounds.x1 >
                        b.x2 || m.bounds.x2 < b.x1) continue
                } else if (m.dataPoint.x < Z.viewportMinimum || m.dataPoint.x > Z.viewportMaximum) continue;
                f = h = 2;
                "horizontal" === y ? (l = r.width, k = r.height) : (k = r.width, l = r.height);
                if ("normal" === this.plotInfo.axisPlacement) {
                    if (0 <= n.indexOf("line") || 0 <= n.indexOf("area")) w = "auto", h = 4;
                    else if (0 <= n.indexOf("stacked")) "auto" === w && (w = "inside");
                    else if ("bubble" === n || "scatter" === n) w = "inside";
                    p = m.point.x - l / 2;
                    "inside" !== w ? (f = b.y1, g = b.y2, 0 < D ? (e = m.point.y - k - h - c, e < f && (e = "auto" === w ? Math.max(m.point.y, f) + h + c :
                        f + h + c, z = e + k > m.point.y)) : (e = m.point.y + h + c, e > g - k - h - c && (e = "auto" === w ? Math.min(m.point.y, g) - k - h - c : g - k - h - c, z = e < m.point.y))) : (f = Math.max(m.bounds.y1, b.y1), g = Math.min(m.bounds.y2, b.y2), c = 0 <= n.indexOf("range") ? 0 < D ? Math.max(m.bounds.y1, b.y1) + k / 2 + h : Math.min(m.bounds.y2, b.y2) - k / 2 - h : (Math.max(m.bounds.y1, b.y1) + Math.min(m.bounds.y2, b.y2)) / 2, 0 < D ? (e = Math.max(m.point.y, c) - k / 2, e < f && ("bubble" === n || "scatter" === n) && (e = Math.max(m.point.y - k - h, b.y1 + h))) : (e = Math.min(m.point.y, c) - k / 2, e > g - k - h && ("bubble" === n || "scatter" === n) &&
                        (e = Math.min(m.point.y + h, b.y2 - k - h))), e = Math.min(e, g - k))
                } else 0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("scatter") ? (w = "auto", f = 4) : 0 <= n.indexOf("stacked") ? "auto" === w && (w = "inside") : "bubble" === n && (w = "inside"), e = m.point.y - k / 2, "inside" !== w ? (h = b.x1, g = b.x2, 0 > D ? (p = m.point.x - l - f - c, p < h && (p = "auto" === w ? Math.max(m.point.x, h) + f + c : h + f + c, z = p + l > m.point.x)) : (p = m.point.x + f + c, p > g - l - f - c && (p = "auto" === w ? Math.min(m.point.x, g) - l - f - c : g - l - f - c, z = p < m.point.x))) : (h = Math.max(m.bounds.x1, b.x1), Math.min(m.bounds.x2,
                    b.x2), c = 0 <= n.indexOf("range") ? 0 > D ? Math.max(m.bounds.x1, b.x1) + l / 2 + f : Math.min(m.bounds.x2, b.x2) - l / 2 - f : (Math.max(m.bounds.x1, b.x1) + Math.min(m.bounds.x2, b.x2)) / 2, p = 0 > D ? Math.max(m.point.x, c) - l / 2 : Math.min(m.point.x, c) - l / 2, p = Math.max(p, h));
                "vertical" === y && (e += k);
                r.x = p;
                r.y = e;
                r.render(!0);
                v && ("inside" !== w && (0 > n.indexOf("bar") && m.point.x > b.x1 && m.point.x < b.x2 || !z) && (0 > n.indexOf("column") && m.point.y > b.y1 && m.point.y < b.y2 || !z)) && (d.lineWidth = v, d.strokeStyle = s ? s : "gray", d.setLineDash && d.setLineDash(I(q, v)), d.beginPath(),
                    d.moveTo(m.point.x, m.point.y), 0 <= n.indexOf("bar") ? d.lineTo(p + (0 < m.direction ? 0 : l), e + ("horizontal" === y ? k : -k) / 2) : 0 <= n.indexOf("column") ? d.lineTo(p + l / 2, e + ((0 < m.direction ? k : -k) + ("horizontal" === y ? k : -k)) / 2) : d.lineTo(p + l / 2, e + ((e < m.point.y ? k : -k) + ("horizontal" === y ? k : -k)) / 2), d.stroke())
            }
        }
        d = {
            source: d,
            dest: this.plotArea.ctx,
            animationCallback: F.fadeInAnimation,
            easingFunction: F.easing.easeInQuad,
            animationBase: 0,
            startTimePercent: 0.7
        };
        for (a = 0; a < this._indexLabels.length; a++) m = this._indexLabels[a], r = L("indexLabelBackgroundColor",
            m.dataPoint, m.dataSeries), m.dataSeries.indexLabelBackgroundColor = x(r) ? u ? "transparent" : null : r;
        return d
    };
    A.prototype.renderLine = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            d.save();
            var c = this.plotArea;
            d.beginPath();
            d.rect(c.x1, c.y1, c.width, c.height);
            d.clip();
            for (var c = [], f = null, g = 0; g < a.dataSeriesIndexes.length; g++) {
                var h = a.dataSeriesIndexes[g],
                    l = this.data[h];
                d.lineWidth = l.lineThickness;
                var k = l.dataPoints,
                    m = "solid";
                if (d.setLineDash) {
                    var n =
                        I(l.nullDataLineDashType, l.lineThickness),
                        m = l.lineDashType,
                        p = I(m, l.lineThickness);
                    d.setLineDash(p)
                }
                var e = l.id;
                this._eventManager.objectMap[e] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: h
                };
                e = G(e);
                b.strokeStyle = e;
                b.lineWidth = 0 < l.lineThickness ? Math.max(l.lineThickness, 4) : 0;
                var e = l._colorSet,
                    r = e = l.lineColor = l.options.lineColor ? l.options.lineColor : e[0];
                d.strokeStyle = e;
                var q = !0,
                    s = 0,
                    v, w;
                d.beginPath();
                if (0 < k.length) {
                    for (var y = !1, s = 0; s < k.length; s++)
                        if (v = k[s].x.getTime ? k[s].x.getTime() : k[s].x, !(v < a.axisX.dataInfo.viewPortMin ||
                                v > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !y)))
                            if ("number" !== typeof k[s].y) 0 < s && !(l.connectNullData || y || q) && (d.stroke(), u && b.stroke()), y = !0;
                            else {
                                v = a.axisX.convertValueToPixel(v);
                                w = a.axisY.convertValueToPixel(k[s].y);
                                var t = l.dataPointIds[s];
                                this._eventManager.objectMap[t] = {
                                    id: t,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: h,
                                    dataPointIndex: s,
                                    x1: v,
                                    y1: w
                                };
                                q || y ? (!q && l.connectNullData ? (d.setLineDash && (l.options.nullDataLineDashType || m === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (d.stroke(),
                                    m = l.nullDataLineDashType, d.setLineDash(n)), d.lineTo(v, w), u && b.lineTo(v, w)) : (d.beginPath(), d.moveTo(v, w), u && (b.beginPath(), b.moveTo(v, w))), y = q = !1) : (d.lineTo(v, w), u && b.lineTo(v, w), 0 == s % 500 && (d.stroke(), d.beginPath(), d.moveTo(v, w), u && (b.stroke(), b.beginPath(), b.moveTo(v, w))));
                                s < k.length - 1 && (r !== (k[s].lineColor || e) || m !== (k[s].lineDashType || l.lineDashType)) && (d.stroke(), d.beginPath(), d.moveTo(v, w), r = k[s].lineColor || e, d.strokeStyle = r, d.setLineDash && (k[s].lineDashType ? (m = k[s].lineDashType, d.setLineDash(I(m,
                                    l.lineThickness))) : (m = l.lineDashType, d.setLineDash(p))));
                                if (0 < k[s].markerSize || 0 < l.markerSize) {
                                    var D = l.getMarkerProperties(s, v, w, d),
                                        f = D.color;
                                    c.push(D);
                                    t = G(t);
                                    u && c.push({
                                        x: v,
                                        y: w,
                                        ctx: b,
                                        type: D.type,
                                        size: D.size,
                                        color: t,
                                        borderColor: t,
                                        borderThickness: D.borderThickness
                                    })
                                }(k[s].indexLabel || l.indexLabel || k[s].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "line",
                                    dataPoint: k[s],
                                    dataSeries: l,
                                    point: {
                                        x: v,
                                        y: w
                                    },
                                    direction: 0 > k[s].y === a.axisY.reversed ? 1 : -1,
                                    color: e
                                })
                            }
                    d.stroke();
                    u && b.stroke()
                }
            }
            P.drawMarkers(c);
            l.markerColor = f;
            d.restore();
            d.beginPath();
            u && b.beginPath();
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    A.prototype.renderStepLine = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            d.save();
            var c = this.plotArea;
            d.beginPath();
            d.rect(c.x1, c.y1, c.width, c.height);
            d.clip();
            for (var c = [], f = null, g = 0; g < a.dataSeriesIndexes.length; g++) {
                var h = a.dataSeriesIndexes[g],
                    l = this.data[h];
                d.lineWidth = l.lineThickness;
                var k = l.dataPoints,
                    m = "solid";
                if (d.setLineDash) {
                    var n = I(l.nullDataLineDashType, l.lineThickness),
                        m = l.lineDashType,
                        p = I(m, l.lineThickness);
                    d.setLineDash(p)
                }
                var e = l.id;
                this._eventManager.objectMap[e] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: h
                };
                e = G(e);
                b.strokeStyle = e;
                b.lineWidth = 0 < l.lineThickness ? Math.max(l.lineThickness, 4) : 0;
                var e = l._colorSet,
                    r = e = l.lineColor = l.options.lineColor ? l.options.lineColor : e[0];
                d.strokeStyle = e;
                var q = !0,
                    s = 0,
                    v, w;
                d.beginPath();
                if (0 < k.length) {
                    for (var y = !1, s = 0; s < k.length; s++)
                        if (v = k[s].getTime ? k[s].x.getTime() : k[s].x, !(v < a.axisX.dataInfo.viewPortMin || v > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !y)))
                            if ("number" !== typeof k[s].y) 0 < s && !(l.connectNullData || y || q) && (d.stroke(), u && b.stroke()), y = !0;
                            else {
                                var t = w;
                                v = a.axisX.convertValueToPixel(v);
                                w = a.axisY.convertValueToPixel(k[s].y);
                                var D = l.dataPointIds[s];
                                this._eventManager.objectMap[D] = {
                                    id: D,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: h,
                                    dataPointIndex: s,
                                    x1: v,
                                    y1: w
                                };
                                q || y ? (!q && l.connectNullData ? (d.setLineDash &&
                                    (l.options.nullDataLineDashType || m === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (d.stroke(), m = l.nullDataLineDashType, d.setLineDash(n)), d.lineTo(v, t), d.lineTo(v, w), u && (b.lineTo(v, t), b.lineTo(v, w))) : (d.beginPath(), d.moveTo(v, w), u && (b.beginPath(), b.moveTo(v, w))), y = q = !1) : (d.lineTo(v, t), u && b.lineTo(v, t), d.lineTo(v, w), u && b.lineTo(v, w), 0 == s % 500 && (d.stroke(), d.beginPath(), d.moveTo(v, w), u && (b.stroke(), b.beginPath(), b.moveTo(v, w))));
                                s < k.length - 1 && (r !== (k[s].lineColor || e) || m !== (k[s].lineDashType ||
                                    l.lineDashType)) && (d.stroke(), d.beginPath(), d.moveTo(v, w), r = k[s].lineColor || e, d.strokeStyle = r, d.setLineDash && (k[s].lineDashType ? (m = k[s].lineDashType, d.setLineDash(I(m, l.lineThickness))) : (m = l.lineDashType, d.setLineDash(p))));
                                if (0 < k[s].markerSize || 0 < l.markerSize) t = l.getMarkerProperties(s, v, w, d), f = t.color, c.push(t), D = G(D), u && c.push({
                                    x: v,
                                    y: w,
                                    ctx: b,
                                    type: t.type,
                                    size: t.size,
                                    color: D,
                                    borderColor: D,
                                    borderThickness: t.borderThickness
                                });
                                (k[s].indexLabel || l.indexLabel || k[s].indexLabelFormatter || l.indexLabelFormatter) &&
                                this._indexLabels.push({
                                    chartType: "stepLine",
                                    dataPoint: k[s],
                                    dataSeries: l,
                                    point: {
                                        x: v,
                                        y: w
                                    },
                                    direction: 0 > k[s].y === a.axisY.reversed ? 1 : -1,
                                    color: e
                                })
                            }
                    d.stroke();
                    u && b.stroke()
                }
            }
            P.drawMarkers(c);
            l.markerColor = f;
            d.restore();
            d.beginPath();
            u && b.beginPath();
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    A.prototype.renderSpline = function(a) {
        function d(a) {
            a = ua(a, 2);
            if (0 < a.length) {
                b.beginPath();
                u && c.beginPath();
                b.moveTo(a[0].x, a[0].y);
                a[0].newStrokeStyle &&
                    (b.strokeStyle = a[0].newStrokeStyle);
                a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray);
                u && c.moveTo(a[0].x, a[0].y);
                for (var d = 0; d < a.length - 3; d += 3)
                    if (b.bezierCurveTo(a[d + 1].x, a[d + 1].y, a[d + 2].x, a[d + 2].y, a[d + 3].x, a[d + 3].y), u && c.bezierCurveTo(a[d + 1].x, a[d + 1].y, a[d + 2].x, a[d + 2].y, a[d + 3].x, a[d + 3].y), 0 < d && 0 === d % 3E3 || a[d + 3].newStrokeStyle || a[d + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(a[d + 3].x, a[d + 3].y), a[d + 3].newStrokeStyle && (b.strokeStyle = a[d + 3].newStrokeStyle), a[d + 3].newLineDashArray &&
                        b.setLineDash(a[d + 3].newLineDashArray), u && (c.stroke(), c.beginPath(), c.moveTo(a[d + 3].x, a[d + 3].y));
                b.stroke();
                u && c.stroke()
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = this._eventManager.ghostCtx;
            b.save();
            var f = this.plotArea;
            b.beginPath();
            b.rect(f.x1, f.y1, f.width, f.height);
            b.clip();
            for (var f = [], g = null, h = 0; h < a.dataSeriesIndexes.length; h++) {
                var l = a.dataSeriesIndexes[h],
                    k = this.data[l];
                b.lineWidth = k.lineThickness;
                var m = k.dataPoints,
                    n = "solid";
                if (b.setLineDash) {
                    var p =
                        I(k.nullDataLineDashType, k.lineThickness),
                        n = k.lineDashType,
                        e = I(n, k.lineThickness);
                    b.setLineDash(e)
                }
                var r = k.id;
                this._eventManager.objectMap[r] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: l
                };
                r = G(r);
                c.strokeStyle = r;
                c.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                var r = k._colorSet,
                    q = r = k.lineColor = k.options.lineColor ? k.options.lineColor : r[0];
                b.strokeStyle = r;
                var s = 0,
                    v, w, y = [];
                b.beginPath();
                if (0 < m.length)
                    for (w = !1, s = 0; s < m.length; s++)
                        if (v = m[s].getTime ? m[s].x.getTime() : m[s].x, !(v < a.axisX.dataInfo.viewPortMin ||
                                v > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !w)))
                            if ("number" !== typeof m[s].y) 0 < s && !w && (k.connectNullData ? b.setLineDash && (0 < y.length && (k.options.nullDataLineDashType || !m[s - 1].lineDashType)) && (y[y.length - 1].newLineDashArray = p, n = k.nullDataLineDashType) : (d(y), y = [])), w = !0;
                            else {
                                v = a.axisX.convertValueToPixel(v);
                                w = a.axisY.convertValueToPixel(m[s].y);
                                var t = k.dataPointIds[s];
                                this._eventManager.objectMap[t] = {
                                    id: t,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: l,
                                    dataPointIndex: s,
                                    x1: v,
                                    y1: w
                                };
                                y[y.length] = {
                                    x: v,
                                    y: w
                                };
                                s < m.length - 1 && (q !== (m[s].lineColor || r) || n !== (m[s].lineDashType || k.lineDashType)) && (q = m[s].lineColor || r, y[y.length - 1].newStrokeStyle = q, b.setLineDash && (m[s].lineDashType ? (n = m[s].lineDashType, y[y.length - 1].newLineDashArray = I(n, k.lineThickness)) : (n = k.lineDashType, y[y.length - 1].newLineDashArray = e)));
                                if (0 < m[s].markerSize || 0 < k.markerSize) {
                                    var D = k.getMarkerProperties(s, v, w, b),
                                        g = D.color;
                                    f.push(D);
                                    t = G(t);
                                    u && f.push({
                                        x: v,
                                        y: w,
                                        ctx: c,
                                        type: D.type,
                                        size: D.size,
                                        color: t,
                                        borderColor: t,
                                        borderThickness: D.borderThickness
                                    })
                                }(m[s].indexLabel ||
                                    k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "spline",
                                    dataPoint: m[s],
                                    dataSeries: k,
                                    point: {
                                        x: v,
                                        y: w
                                    },
                                    direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1,
                                    color: r
                                });
                                w = !1
                            }
                d(y)
            }
            P.drawMarkers(f);
            k.markerColor = g;
            b.restore();
            b.beginPath();
            u && c.beginPath();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    var N = function(a, d, b, c, f, g, h, l, k, m, n, p, e) {
        "undefined" === typeof e && (e = 1);
        h = h || 0;
        l = l || "black";
        var r = 15 < c - d && 15 < f - b ? 8 : 0.35 * Math.min(c - d, f - b);
        a.beginPath();
        a.moveTo(d, b);
        a.save();
        a.fillStyle = g;
        a.globalAlpha = e;
        a.fillRect(d, b, c - d, f - b);
        a.globalAlpha = 1;
        0 < h && (e = 0 === h % 2 ? 0 : 0.5, a.beginPath(), a.lineWidth = h, a.strokeStyle = l, a.moveTo(d, b), a.rect(d - e, b - e, c - d + 2 * e, f - b + 2 * e), a.stroke());
        a.restore();
        !0 === k && (a.save(), a.beginPath(), a.moveTo(d, b), a.lineTo(d + r, b + r), a.lineTo(c - r, b + r), a.lineTo(c, b), a.closePath(), h = a.createLinearGradient((c + d) / 2, b + r, (c + d) / 2, b), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, .4)"),
            a.fillStyle = h, a.fill(), a.restore());
        !0 === m && (a.save(), a.beginPath(), a.moveTo(d, f), a.lineTo(d + r, f - r), a.lineTo(c - r, f - r), a.lineTo(c, f), a.closePath(), h = a.createLinearGradient((c + d) / 2, f - r, (c + d) / 2, f), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = h, a.fill(), a.restore());
        !0 === n && (a.save(), a.beginPath(), a.moveTo(d, b), a.lineTo(d + r, b + r), a.lineTo(d + r, f - r), a.lineTo(d, f), a.closePath(), h = a.createLinearGradient(d + r, (f + b) / 2, d, (f + b) / 2), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
            a.fillStyle = h, a.fill(), a.restore());
        !0 === p && (a.save(), a.beginPath(), a.moveTo(c, b), a.lineTo(c - r, b + r), a.lineTo(c - r, f - r), a.lineTo(c, f), h = a.createLinearGradient(c - r, (f + b) / 2, c, (f + b) / 2), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = h, h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = h, a.fill(), a.closePath(), a.restore())
    };
    A.prototype.renderColumn = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                c = this.plotArea,
                f = 0,
                g, h, l, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                f = this.dataPointMinWidth = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                m = this.dataPointMaxWidth = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.dataPointWidth =
                this.dataPointWidth ? this.dataPointWidth : 0.9 * (c.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && f > m && (f = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < f) && (m = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, f));
            n < f && (n = f);
            n > m && (n = m);
            d.save();
            u && this._eventManager.ghostCtx.save();
            d.beginPath();
            d.rect(c.x1, c.y1, c.width,
                c.height);
            d.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
            for (c = 0; c < a.dataSeriesIndexes.length; c++) {
                var m = a.dataSeriesIndexes[c],
                    p = this.data[m],
                    e = p.dataPoints;
                if (0 < e.length)
                    for (var r = 5 < n && p.bevelEnabled ? !0 : !1, f = 0; f < e.length; f++)
                        if (e[f].getTime ? l = e[f].x.getTime() : l = e[f].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && "number" === typeof e[f].y) {
                            g = a.axisX.convertValueToPixel(l);
                            h =
                                a.axisY.convertValueToPixel(e[f].y);
                            g = a.axisX.reversed ? g + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + c) * n << 0 : g - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + c) * n << 0;
                            var q = a.axisX.reversed ? g - n << 0 : g + n << 0,
                                s;
                            0 <= e[f].y ? s = k : (s = h, h = k);
                            h > s && (b = h, h = s, s = b);
                            b = e[f].color ? e[f].color : p._colorSet[f % p._colorSet.length];
                            N(d, g, h, q, s, b, 0, null, r && 0 <= e[f].y, 0 > e[f].y && r, !1, !1, p.fillOpacity);
                            b = p.dataPointIds[f];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: f,
                                x1: g,
                                y1: h,
                                x2: q,
                                y2: s
                            };
                            b = G(b);
                            u && N(this._eventManager.ghostCtx, g, h, q, s, b, 0, null, !1, !1, !1, !1);
                            (e[f].indexLabel || p.indexLabel || e[f].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "column",
                                dataPoint: e[f],
                                dataSeries: p,
                                point: {
                                    x: g + (q - g) / 2,
                                    y: 0 > e[f].y === a.axisY.reversed ? h : s
                                },
                                direction: 0 > e[f].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: g,
                                    y1: Math.min(h, s),
                                    x2: q,
                                    y2: Math.max(h, s)
                                },
                                color: b
                            })
                        }
            }
            d.restore();
            u && this._eventManager.ghostCtx.restore();
            a = Math.min(k, a.axisY.bounds.y2);
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.yScaleAnimation,
                easingFunction: F.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    A.prototype.renderStackedColumn = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                c = this.plotArea,
                f = [],
                g = [],
                h = [],
                l = 0,
                k, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                l = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                n = this.dataPointMaxWidth ? this.dataPointMaxWidth :
                this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0,
                p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.dataPointWidth ? this.dataPointWidth : 0.9 * (c.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && l > n && (l = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < l) && (n = Math.max(this.dataPointWidth ? this.dataPointWidth :
                -Infinity, l));
            p < l && (p = l);
            p > n && (p = n);
            d.save();
            u && this._eventManager.ghostCtx.save();
            d.beginPath();
            d.rect(c.x1, c.y1, c.width, c.height);
            d.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
            for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                var e = a.dataSeriesIndexes[n],
                    r = this.data[e],
                    q = r.dataPoints;
                if (0 < q.length) {
                    var s = 5 < p && r.bevelEnabled ? !0 : !1;
                    d.strokeStyle = "#4572A7 ";
                    for (l = 0; l < q.length; l++)
                        if (b = q[l].x.getTime ? q[l].x.getTime() :
                            q[l].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[l].y) {
                            var c = a.axisX.convertValueToPixel(b),
                                v = c - a.plotType.plotUnits.length * p / 2 + a.index * p << 0,
                                w = v + p << 0,
                                y;
                            if (a.axisY.logarithmic) h[b] = q[l].y + (h[b] ? h[b] : 0), 0 < h[b] && (k = a.axisY.convertValueToPixel(h[b]), y = f[b] ? f[b] : m, f[b] = k);
                            else if (k = a.axisY.convertValueToPixel(q[l].y), 0 <= q[l].y) {
                                var t = f[b] ? f[b] : 0;
                                k -= t;
                                y = m - t;
                                f[b] = t + (y - k)
                            } else t = g[b] ? g[b] : 0, y = k + t, k = m + t, g[b] = t + (y - k);
                            b = q[l].color ? q[l].color : r._colorSet[l % r._colorSet.length];
                            N(d, v, k, w, y, b, 0, null, s && 0 <= q[l].y, 0 > q[l].y && s, !1, !1, r.fillOpacity);
                            b = r.dataPointIds[l];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: e,
                                dataPointIndex: l,
                                x1: v,
                                y1: k,
                                x2: w,
                                y2: y
                            };
                            b = G(b);
                            u && N(this._eventManager.ghostCtx, v, k, w, y, b, 0, null, !1, !1, !1, !1);
                            (q[l].indexLabel || r.indexLabel || q[l].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedColumn",
                                dataPoint: q[l],
                                dataSeries: r,
                                point: {
                                    x: c,
                                    y: 0 <= q[l].y ? k : y
                                },
                                direction: 0 > q[l].y === a.axisY.reversed ? 1 :
                                    -1,
                                bounds: {
                                    x1: v,
                                    y1: Math.min(k, y),
                                    x2: w,
                                    y2: Math.max(k, y)
                                },
                                color: b
                            })
                        }
                }
            }
            d.restore();
            u && this._eventManager.ghostCtx.restore();
            a = Math.min(m, a.axisY.bounds.y2);
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.yScaleAnimation,
                easingFunction: F.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    A.prototype.renderStackedColumn100 = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                c = this.plotArea,
                f = [],
                g = [],
                h = [],
                l = 0,
                k, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ?
                    a.axisY.viewportMinimum : 0),
                l = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                n = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0,
                p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.dataPointWidth ? this.dataPointWidth : 0.9 * (c.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth &&
                l > n && (l = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < l) && (n = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, l));
            p < l && (p = l);
            p > n && (p = n);
            d.save();
            u && this._eventManager.ghostCtx.save();
            d.beginPath();
            d.rect(c.x1, c.y1, c.width, c.height);
            d.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
            for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                var e =
                    a.dataSeriesIndexes[n],
                    r = this.data[e],
                    q = r.dataPoints;
                if (0 < q.length)
                    for (var s = 5 < p && r.bevelEnabled ? !0 : !1, l = 0; l < q.length; l++)
                        if (b = q[l].x.getTime ? q[l].x.getTime() : q[l].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[l].y) {
                            c = a.axisX.convertValueToPixel(b);
                            k = 0 !== a.dataPointYSums[b] ? 100 * (q[l].y / a.dataPointYSums[b]) : 0;
                            var v = c - a.plotType.plotUnits.length * p / 2 + a.index * p << 0,
                                w = v + p << 0,
                                y;
                            if (a.axisY.logarithmic) {
                                h[b] = k + (h[b] ? h[b] : 0);
                                if (0 >= h[b]) continue;
                                k = a.axisY.convertValueToPixel(h[b]);
                                y = f[b] ? f[b] : m;
                                f[b] = k
                            } else if (k = a.axisY.convertValueToPixel(k), 0 <= q[l].y) {
                                var t = f[b] ? f[b] : 0;
                                k -= t;
                                y = m - t;
                                f[b] = t + (y - k)
                            } else t = g[b] ? g[b] : 0, y = k + t, k = m + t, g[b] = t + (y - k);
                            b = q[l].color ? q[l].color : r._colorSet[l % r._colorSet.length];
                            N(d, v, k, w, y, b, 0, null, s && 0 <= q[l].y, 0 > q[l].y && s, !1, !1, r.fillOpacity);
                            b = r.dataPointIds[l];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: e,
                                dataPointIndex: l,
                                x1: v,
                                y1: k,
                                x2: w,
                                y2: y
                            };
                            b = G(b);
                            u && N(this._eventManager.ghostCtx, v, k, w, y, b, 0, null, !1, !1, !1, !1);
                            (q[l].indexLabel ||
                                r.indexLabel || q[l].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedColumn100",
                                dataPoint: q[l],
                                dataSeries: r,
                                point: {
                                    x: c,
                                    y: 0 <= q[l].y ? k : y
                                },
                                direction: 0 > q[l].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: v,
                                    y1: Math.min(k, y),
                                    x2: w,
                                    y2: Math.max(k, y)
                                },
                                color: b
                            })
                        }
            }
            d.restore();
            u && this._eventManager.ghostCtx.restore();
            a = Math.min(m, a.axisY.bounds.y2);
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.yScaleAnimation,
                easingFunction: F.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    A.prototype.renderBar =
        function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    c = this.plotArea,
                    f = 0,
                    g, h, l, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    f = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                    m = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                    n = a.axisX.dataInfo.minDiff;
                isFinite(n) ||
                    (n = 0.3 * Math.abs(a.axisX.range));
                n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (c.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && f > m && (f = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, m));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && m < f) && (m = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                n < f && (n = f);
                n > m && (n = m);
                d.save();
                u && this._eventManager.ghostCtx.save();
                d.beginPath();
                d.rect(c.x1, c.y1, c.width, c.height);
                d.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
                for (c = 0; c < a.dataSeriesIndexes.length; c++) {
                    var m = a.dataSeriesIndexes[c],
                        p = this.data[m],
                        e = p.dataPoints;
                    if (0 < e.length) {
                        var r = 5 < n && p.bevelEnabled ? !0 : !1;
                        d.strokeStyle = "#4572A7 ";
                        for (f = 0; f < e.length; f++)
                            if (e[f].getTime ? l = e[f].x.getTime() : l = e[f].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && "number" ===
                                typeof e[f].y) {
                                h = a.axisX.convertValueToPixel(l);
                                g = a.axisY.convertValueToPixel(e[f].y);
                                h = a.axisX.reversed ? h + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + c) * n << 0 : h - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + c) * n << 0;
                                var q = a.axisX.reversed ? h - n << 0 : h + n << 0,
                                    s;
                                0 <= e[f].y ? s = k : (s = g, g = k);
                                b = e[f].color ? e[f].color : p._colorSet[f % p._colorSet.length];
                                N(d, s, h, g, q, b, 0, null, r, !1, !1, !1, p.fillOpacity);
                                b = p.dataPointIds[f];
                                this._eventManager.objectMap[b] = {
                                    id: b,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: m,
                                    dataPointIndex: f,
                                    x1: s,
                                    y1: h,
                                    x2: g,
                                    y2: q
                                };
                                b = G(b);
                                u && N(this._eventManager.ghostCtx, s, h, g, q, b, 0, null, !1, !1, !1, !1);
                                (e[f].indexLabel || p.indexLabel || e[f].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bar",
                                    dataPoint: e[f],
                                    dataSeries: p,
                                    point: {
                                        x: 0 <= e[f].y ? g : s,
                                        y: h + (q - h) / 2
                                    },
                                    direction: 0 > e[f].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(s, g),
                                        y1: h,
                                        x2: Math.max(s, g),
                                        y2: q
                                    },
                                    color: b
                                })
                            }
                    }
                }
                d.restore();
                u && this._eventManager.ghostCtx.restore();
                a = Math.max(k, a.axisX.bounds.x2);
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: F.xScaleAnimation,
                    easingFunction: F.easing.easeOutQuart,
                    animationBase: a
                }
            }
        };
    A.prototype.renderStackedBar = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                c = this.plotArea,
                f = [],
                g = [],
                h = [],
                l = 0,
                k, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                l = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                n = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ?
                this.dataPointWidth : 0.15 * this.height << 0,
                p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.dataPointWidth ? this.dataPointWidth : 0.9 * (c.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && l > n && (l = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < l) && (n = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity,
                l));
            p < l && (p = l);
            p > n && (p = n);
            d.save();
            u && this._eventManager.ghostCtx.save();
            d.beginPath();
            d.rect(c.x1, c.y1, c.width, c.height);
            d.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
            for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                var e = a.dataSeriesIndexes[n],
                    r = this.data[e],
                    q = r.dataPoints;
                if (0 < q.length) {
                    var s = 5 < p && r.bevelEnabled ? !0 : !1;
                    d.strokeStyle = "#4572A7 ";
                    for (l = 0; l < q.length; l++)
                        if (b = q[l].x.getTime ? q[l].x.getTime() :
                            q[l].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[l].y) {
                            var c = a.axisX.convertValueToPixel(b),
                                v = c - a.plotType.plotUnits.length * p / 2 + a.index * p << 0,
                                w = v + p << 0,
                                y;
                            if (a.axisY.logarithmic) h[b] = q[l].y + (h[b] ? h[b] : 0), 0 < h[b] && (y = f[b] ? f[b] : m, f[b] = k = a.axisY.convertValueToPixel(h[b]));
                            else if (k = a.axisY.convertValueToPixel(q[l].y), 0 <= q[l].y) {
                                var t = f[b] ? f[b] : 0;
                                y = m + t;
                                k += t;
                                f[b] = t + (k - y)
                            } else t = g[b] ? g[b] : 0, y = k - t, k = m - t, g[b] = t + (k - y);
                            b = q[l].color ? q[l].color : r._colorSet[l % r._colorSet.length];
                            N(d, y, v, k, w, b, 0, null, s, !1, !1, !1, r.fillOpacity);
                            b = r.dataPointIds[l];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: e,
                                dataPointIndex: l,
                                x1: y,
                                y1: v,
                                x2: k,
                                y2: w
                            };
                            b = G(b);
                            u && N(this._eventManager.ghostCtx, y, v, k, w, b, 0, null, !1, !1, !1, !1);
                            (q[l].indexLabel || r.indexLabel || q[l].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedBar",
                                dataPoint: q[l],
                                dataSeries: r,
                                point: {
                                    x: 0 <= q[l].y ? k : y,
                                    y: c
                                },
                                direction: 0 > q[l].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: Math.min(y,
                                        k),
                                    y1: v,
                                    x2: Math.max(y, k),
                                    y2: w
                                },
                                color: b
                            })
                        }
                }
            }
            d.restore();
            u && this._eventManager.ghostCtx.restore();
            a = Math.max(m, a.axisX.bounds.x2);
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.xScaleAnimation,
                easingFunction: F.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    A.prototype.renderStackedBar100 = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                c = this.plotArea,
                f = [],
                g = [],
                h = [],
                l = 0,
                k, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum :
                    0),
                l = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                n = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0,
                p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.dataPointWidth ? this.dataPointWidth : 0.9 * (c.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && l > n && (l = Math.min(this.dataPointWidth ?
                this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < l) && (n = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, l));
            p < l && (p = l);
            p > n && (p = n);
            d.save();
            u && this._eventManager.ghostCtx.save();
            d.beginPath();
            d.rect(c.x1, c.y1, c.width, c.height);
            d.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
            for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                var e = a.dataSeriesIndexes[n],
                    r = this.data[e],
                    q = r.dataPoints;
                if (0 < q.length) {
                    var s = 5 < p && r.bevelEnabled ? !0 : !1;
                    d.strokeStyle = "#4572A7 ";
                    for (l = 0; l < q.length; l++)
                        if (b = q[l].x.getTime ? q[l].x.getTime() : q[l].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[l].y) {
                            var c = a.axisX.convertValueToPixel(b),
                                v;
                            v = 0 !== a.dataPointYSums[b] ? 100 * (q[l].y / a.dataPointYSums[b]) : 0;
                            var w = c - a.plotType.plotUnits.length * p / 2 + a.index * p << 0,
                                y = w + p << 0;
                            if (a.axisY.logarithmic) {
                                h[b] = v + (h[b] ? h[b] : 0);
                                if (0 >= h[b]) continue;
                                v = f[b] ? f[b] : m;
                                f[b] = k = a.axisY.convertValueToPixel(h[b])
                            } else if (k =
                                a.axisY.convertValueToPixel(v), 0 <= q[l].y) {
                                var t = f[b] ? f[b] : 0;
                                v = m + t;
                                k += t;
                                f[b] = t + (k - v)
                            } else t = g[b] ? g[b] : 0, v = k - t, k = m - t, g[b] = t + (k - v);
                            b = q[l].color ? q[l].color : r._colorSet[l % r._colorSet.length];
                            N(d, v, w, k, y, b, 0, null, s, !1, !1, !1, r.fillOpacity);
                            b = r.dataPointIds[l];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: e,
                                dataPointIndex: l,
                                x1: v,
                                y1: w,
                                x2: k,
                                y2: y
                            };
                            b = G(b);
                            u && N(this._eventManager.ghostCtx, v, w, k, y, b, 0, null, !1, !1, !1, !1);
                            (q[l].indexLabel || r.indexLabel || q[l].indexLabelFormatter || r.indexLabelFormatter) &&
                            this._indexLabels.push({
                                chartType: "stackedBar100",
                                dataPoint: q[l],
                                dataSeries: r,
                                point: {
                                    x: 0 <= q[l].y ? k : v,
                                    y: c
                                },
                                direction: 0 > q[l].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: Math.min(v, k),
                                    y1: w,
                                    x2: Math.max(v, k),
                                    y2: y
                                },
                                color: b
                            })
                        }
                }
            }
            d.restore();
            u && this._eventManager.ghostCtx.restore();
            a = Math.max(m, a.axisX.bounds.x2);
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.xScaleAnimation,
                easingFunction: F.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    A.prototype.renderArea = function(a) {
        function d() {
            t && (0 < n.lineThickness &&
                b.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? y = w : 0 > a.axisY.viewportMaximum ? y = g.y1 : 0 < a.axisY.viewportMinimum && (y = f.y2), b.lineTo(q, y), b.lineTo(t.x, y), b.closePath(), b.globalAlpha = n.fillOpacity, b.fill(), b.globalAlpha = 1, u && (c.lineTo(q, y), c.lineTo(t.x, y), c.closePath(), c.fill()), b.beginPath(), b.moveTo(q, s), c.beginPath(), c.moveTo(q, s), t = {
                    x: q,
                    y: s
                })
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = this._eventManager.ghostCtx,
                f = a.axisX.lineCoordinates,
                g = a.axisY.lineCoordinates,
                h = [],
                l = null,
                k = this.plotArea;
            b.save();
            u && c.save();
            b.beginPath();
            b.rect(k.x1, k.y1, k.width, k.height);
            b.clip();
            u && (c.beginPath(), c.rect(k.x1, k.y1, k.width, k.height), c.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var m = a.dataSeriesIndexes[k],
                    n = this.data[m],
                    p = n.dataPoints,
                    h = n.id;
                this._eventManager.objectMap[h] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: m
                };
                h = G(h);
                c.fillStyle = h;
                var h = [],
                    e = !0,
                    r = 0,
                    q, s, v, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    y, t = null;
                if (0 < p.length) {
                    var D = n._colorSet[r % n._colorSet.length],
                        x = n.lineColor = n.options.lineColor || D,
                        aa = x;
                    b.fillStyle = D;
                    b.strokeStyle = x;
                    b.lineWidth = n.lineThickness;
                    var z = "solid";
                    if (b.setLineDash) {
                        var A = I(n.nullDataLineDashType, n.lineThickness),
                            z = n.lineDashType,
                            R = I(z, n.lineThickness);
                        b.setLineDash(R)
                    }
                    for (var J = !0; r < p.length; r++)
                        if (v = p[r].x.getTime ? p[r].x.getTime() : p[r].x, !(v < a.axisX.dataInfo.viewPortMin || v > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !J)))
                            if ("number" !== typeof p[r].y) n.connectNullData ||
                                (J || e) || d(), J = !0;
                            else {
                                q = a.axisX.convertValueToPixel(v);
                                s = a.axisY.convertValueToPixel(p[r].y);
                                e || J ? (!e && n.connectNullData ? (b.setLineDash && (n.options.nullDataLineDashType || z === n.lineDashType && n.lineDashType !== n.nullDataLineDashType) && (b.stroke(), z = n.nullDataLineDashType, b.setLineDash(A)), b.lineTo(q, s), u && c.lineTo(q, s)) : (b.beginPath(), b.moveTo(q, s), u && (c.beginPath(), c.moveTo(q, s)), t = {
                                    x: q,
                                    y: s
                                }), J = e = !1) : (b.lineTo(q, s), u && c.lineTo(q, s), 0 == r % 250 && d());
                                r < p.length - 1 && (aa !== (p[r].lineColor || x) || z !== (p[r].lineDashType ||
                                    n.lineDashType)) && (d(), aa = p[r].lineColor || x, b.strokeStyle = aa, b.setLineDash && (p[r].lineDashType ? (z = p[r].lineDashType, b.setLineDash(I(z, n.lineThickness))) : (z = n.lineDashType, b.setLineDash(R))));
                                var H = n.dataPointIds[r];
                                this._eventManager.objectMap[H] = {
                                    id: H,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: m,
                                    dataPointIndex: r,
                                    x1: q,
                                    y1: s
                                };
                                0 !== p[r].markerSize && (0 < p[r].markerSize || 0 < n.markerSize) && (v = n.getMarkerProperties(r, q, s, b), l = v.color, h.push(v), H = G(H), u && h.push({
                                    x: q,
                                    y: s,
                                    ctx: c,
                                    type: v.type,
                                    size: v.size,
                                    color: H,
                                    borderColor: H,
                                    borderThickness: v.borderThickness
                                }));
                                (p[r].indexLabel || n.indexLabel || p[r].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "area",
                                    dataPoint: p[r],
                                    dataSeries: n,
                                    point: {
                                        x: q,
                                        y: s
                                    },
                                    direction: 0 > p[r].y === a.axisY.reversed ? 1 : -1,
                                    color: D
                                })
                            }
                    d();
                    P.drawMarkers(h);
                    n.markerColor = l
                }
            }
            b.restore();
            u && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    A.prototype.renderSplineArea =
        function(a) {
            function d() {
                var d = ua(y, 2);
                if (0 < d.length) {
                    if (0 < n.lineThickness) {
                        b.beginPath();
                        b.moveTo(d[0].x, d[0].y);
                        d[0].newStrokeStyle && (b.strokeStyle = d[0].newStrokeStyle);
                        d[0].newLineDashArray && b.setLineDash(d[0].newLineDashArray);
                        for (var e = 0; e < d.length - 3; e += 3)
                            if (b.bezierCurveTo(d[e + 1].x, d[e + 1].y, d[e + 2].x, d[e + 2].y, d[e + 3].x, d[e + 3].y), u && c.bezierCurveTo(d[e + 1].x, d[e + 1].y, d[e + 2].x, d[e + 2].y, d[e + 3].x, d[e + 3].y), d[e + 3].newStrokeStyle || d[e + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(d[e + 3].x, d[e +
                                3].y), d[e + 3].newStrokeStyle && (b.strokeStyle = d[e + 3].newStrokeStyle), d[e + 3].newLineDashArray && b.setLineDash(d[e + 3].newLineDashArray);
                        b.stroke()
                    }
                    b.beginPath();
                    b.moveTo(d[0].x, d[0].y);
                    u && (c.beginPath(), c.moveTo(d[0].x, d[0].y));
                    for (e = 0; e < d.length - 3; e += 3) b.bezierCurveTo(d[e + 1].x, d[e + 1].y, d[e + 2].x, d[e + 2].y, d[e + 3].x, d[e + 3].y), u && c.bezierCurveTo(d[e + 1].x, d[e + 1].y, d[e + 2].x, d[e + 2].y, d[e + 3].x, d[e + 3].y);
                    a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? v = s : 0 > a.axisY.viewportMaximum ? v =
                        g.y1 : 0 < a.axisY.viewportMinimum && (v = f.y2);
                    w = {
                        x: d[0].x,
                        y: d[0].y
                    };
                    b.lineTo(d[d.length - 1].x, v);
                    b.lineTo(w.x, v);
                    b.closePath();
                    b.globalAlpha = n.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    u && (c.lineTo(d[d.length - 1].x, v), c.lineTo(w.x, v), c.closePath(), c.fill())
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx,
                    f = a.axisX.lineCoordinates,
                    g = a.axisY.lineCoordinates,
                    h = [],
                    l = null,
                    k = this.plotArea;
                b.save();
                u && c.save();
                b.beginPath();
                b.rect(k.x1, k.y1, k.width,
                    k.height);
                b.clip();
                u && (c.beginPath(), c.rect(k.x1, k.y1, k.width, k.height), c.clip());
                for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                    var m = a.dataSeriesIndexes[k],
                        n = this.data[m],
                        p = n.dataPoints,
                        h = n.id;
                    this._eventManager.objectMap[h] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: m
                    };
                    h = G(h);
                    c.fillStyle = h;
                    var h = [],
                        e = 0,
                        r, q, s = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        v, w = null,
                        y = [];
                    if (0 < p.length) {
                        var t = n._colorSet[e % n._colorSet.length],
                            D = n.lineColor = n.options.lineColor || t,
                            x = D;
                        b.fillStyle =
                            t;
                        b.strokeStyle = D;
                        b.lineWidth = n.lineThickness;
                        var z = "solid";
                        if (b.setLineDash) {
                            var A = I(n.nullDataLineDashType, n.lineThickness),
                                z = n.lineDashType,
                                B = I(z, n.lineThickness);
                            b.setLineDash(B)
                        }
                        for (q = !1; e < p.length; e++)
                            if (r = p[e].x.getTime ? p[e].x.getTime() : p[e].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !q)))
                                if ("number" !== typeof p[e].y) 0 < e && !q && (n.connectNullData ? b.setLineDash && (0 < y.length && (n.options.nullDataLineDashType || !p[e - 1].lineDashType)) && (y[y.length - 1].newLineDashArray =
                                    A, z = n.nullDataLineDashType) : (d(), y = [])), q = !0;
                                else {
                                    r = a.axisX.convertValueToPixel(r);
                                    q = a.axisY.convertValueToPixel(p[e].y);
                                    var R = n.dataPointIds[e];
                                    this._eventManager.objectMap[R] = {
                                        id: R,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: m,
                                        dataPointIndex: e,
                                        x1: r,
                                        y1: q
                                    };
                                    y[y.length] = {
                                        x: r,
                                        y: q
                                    };
                                    e < p.length - 1 && (x !== (p[e].lineColor || D) || z !== (p[e].lineDashType || n.lineDashType)) && (x = p[e].lineColor || D, y[y.length - 1].newStrokeStyle = x, b.setLineDash && (p[e].lineDashType ? (z = p[e].lineDashType, y[y.length - 1].newLineDashArray = I(z, n.lineThickness)) :
                                        (z = n.lineDashType, y[y.length - 1].newLineDashArray = B)));
                                    if (0 !== p[e].markerSize && (0 < p[e].markerSize || 0 < n.markerSize)) {
                                        var J = n.getMarkerProperties(e, r, q, b),
                                            l = J.color;
                                        h.push(J);
                                        R = G(R);
                                        u && h.push({
                                            x: r,
                                            y: q,
                                            ctx: c,
                                            type: J.type,
                                            size: J.size,
                                            color: R,
                                            borderColor: R,
                                            borderThickness: J.borderThickness
                                        })
                                    }(p[e].indexLabel || n.indexLabel || p[e].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "splineArea",
                                        dataPoint: p[e],
                                        dataSeries: n,
                                        point: {
                                            x: r,
                                            y: q
                                        },
                                        direction: 0 > p[e].y === a.axisY.reversed ? 1 : -1,
                                        color: t
                                    });
                                    q = !1
                                }
                        d();
                        P.drawMarkers(h);
                        n.markerColor = l
                    }
                }
                b.restore();
                u && this._eventManager.ghostCtx.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: F.xClipAnimation,
                    easingFunction: F.easing.linear,
                    animationBase: 0
                }
            }
        };
    A.prototype.renderStepArea = function(a) {
        function d() {
            t && (0 < n.lineThickness && b.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? y = w : 0 > a.axisY.viewportMaximum ? y = g.y1 : 0 < a.axisY.viewportMinimum && (y = f.y2), b.lineTo(q, y), b.lineTo(t.x, y), b.closePath(),
                b.globalAlpha = n.fillOpacity, b.fill(), b.globalAlpha = 1, u && (c.lineTo(q, y), c.lineTo(t.x, y), c.closePath(), c.fill()), b.beginPath(), b.moveTo(q, s), c.beginPath(), c.moveTo(q, s), t = {
                    x: q,
                    y: s
                })
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = this._eventManager.ghostCtx,
                f = a.axisX.lineCoordinates,
                g = a.axisY.lineCoordinates,
                h = [],
                l = null,
                k = this.plotArea;
            b.save();
            u && c.save();
            b.beginPath();
            b.rect(k.x1, k.y1, k.width, k.height);
            b.clip();
            u && (c.beginPath(), c.rect(k.x1, k.y1, k.width, k.height),
                c.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var m = a.dataSeriesIndexes[k],
                    n = this.data[m],
                    p = n.dataPoints,
                    h = n.id;
                this._eventManager.objectMap[h] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: m
                };
                h = G(h);
                c.fillStyle = h;
                var h = [],
                    e = !0,
                    r = 0,
                    q, s, v, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    y, t = null,
                    D = !1;
                if (0 < p.length) {
                    var x = n._colorSet[r % n._colorSet.length],
                        z = n.lineColor = n.options.lineColor || x,
                        A = z;
                    b.fillStyle = x;
                    b.strokeStyle = z;
                    b.lineWidth = n.lineThickness;
                    var B = "solid";
                    if (b.setLineDash) {
                        var R =
                            I(n.nullDataLineDashType, n.lineThickness),
                            B = n.lineDashType,
                            J = I(B, n.lineThickness);
                        b.setLineDash(J)
                    }
                    for (; r < p.length; r++)
                        if (v = p[r].x.getTime ? p[r].x.getTime() : p[r].x, !(v < a.axisX.dataInfo.viewPortMin || v > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !D))) {
                            var H = s;
                            "number" !== typeof p[r].y ? (n.connectNullData || (D || e) || d(), D = !0) : (q = a.axisX.convertValueToPixel(v), s = a.axisY.convertValueToPixel(p[r].y), e || D ? (!e && n.connectNullData ? (b.setLineDash && (n.options.nullDataLineDashType || B === n.lineDashType && n.lineDashType !==
                                n.nullDataLineDashType) && (b.stroke(), B = n.nullDataLineDashType, b.setLineDash(R)), b.lineTo(q, H), b.lineTo(q, s), u && (c.lineTo(q, H), c.lineTo(q, s))) : (b.beginPath(), b.moveTo(q, s), u && (c.beginPath(), c.moveTo(q, s)), t = {
                                x: q,
                                y: s
                            }), D = e = !1) : (b.lineTo(q, H), u && c.lineTo(q, H), b.lineTo(q, s), u && c.lineTo(q, s), 0 == r % 250 && d()), r < p.length - 1 && (A !== (p[r].lineColor || z) || B !== (p[r].lineDashType || n.lineDashType)) && (d(), A = p[r].lineColor || z, b.strokeStyle = A, b.setLineDash && (p[r].lineDashType ? (B = p[r].lineDashType, b.setLineDash(I(B, n.lineThickness))) :
                                (B = n.lineDashType, b.setLineDash(J)))), H = n.dataPointIds[r], this._eventManager.objectMap[H] = {
                                id: H,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: r,
                                x1: q,
                                y1: s
                            }, 0 !== p[r].markerSize && (0 < p[r].markerSize || 0 < n.markerSize) && (v = n.getMarkerProperties(r, q, s, b), l = v.color, h.push(v), H = G(H), u && h.push({
                                x: q,
                                y: s,
                                ctx: c,
                                type: v.type,
                                size: v.size,
                                color: H,
                                borderColor: H,
                                borderThickness: v.borderThickness
                            })), (p[r].indexLabel || n.indexLabel || p[r].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stepArea",
                                dataPoint: p[r],
                                dataSeries: n,
                                point: {
                                    x: q,
                                    y: s
                                },
                                direction: 0 > p[r].y === a.axisY.reversed ? 1 : -1,
                                color: x
                            }))
                        }
                    d();
                    P.drawMarkers(h);
                    n.markerColor = l
                }
            }
            b.restore();
            u && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    A.prototype.renderStackedArea = function(a) {
        function d() {
            if (!(1 > k.length)) {
                for (0 < t.lineThickness && b.stroke(); 0 < k.length;) {
                    var a = k.pop();
                    b.lineTo(a.x, a.y);
                    u && v.lineTo(a.x, a.y)
                }
                b.closePath();
                b.globalAlpha =
                    t.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                b.beginPath();
                u && (v.closePath(), v.fill(), v.beginPath());
                k = []
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                f = [],
                g = null,
                h = this.plotArea,
                l = [],
                k = [],
                m = [],
                n = [],
                p = 0,
                e, r, q, s = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                v = this._eventManager.ghostCtx;
            u && v.beginPath();
            b.save();
            u && v.save();
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            u && (v.beginPath(), v.rect(h.x1, h.y1, h.width, h.height),
                v.clip());
            for (var w = [], h = 0; h < a.dataSeriesIndexes.length; h++) {
                var y = a.dataSeriesIndexes[h],
                    t = this.data[y],
                    D = t.dataPoints;
                t.dataPointIndexes = [];
                for (p = 0; p < D.length; p++) y = D[p].x.getTime ? D[p].x.getTime() : D[p].x, t.dataPointIndexes[y] = p, w[y] || (m.push(y), w[y] = !0);
                m.sort(ya)
            }
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                y = a.dataSeriesIndexes[h];
                t = this.data[y];
                D = t.dataPoints;
                w = !0;
                k = [];
                p = t.id;
                this._eventManager.objectMap[p] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: y
                };
                p = G(p);
                v.fillStyle = p;
                if (0 < m.length) {
                    var c = t._colorSet[0],
                        x = t.lineColor = t.options.lineColor || c,
                        z = x;
                    b.fillStyle = c;
                    b.strokeStyle = x;
                    b.lineWidth = t.lineThickness;
                    var A = "solid";
                    if (b.setLineDash) {
                        var B = I(t.nullDataLineDashType, t.lineThickness),
                            A = t.lineDashType,
                            R = I(A, t.lineThickness);
                        b.setLineDash(R)
                    }
                    for (var J = !0, p = 0; p < m.length; p++) {
                        q = m[p];
                        var H = null,
                            H = 0 <= t.dataPointIndexes[q] ? D[t.dataPointIndexes[q]] : {
                                x: q,
                                y: null
                            };
                        if (!(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!t.connectNullData || !J)))
                            if ("number" !== typeof H.y) t.connectNullData || (J || w) || d(),
                                J = !0;
                            else {
                                e = a.axisX.convertValueToPixel(q);
                                var ea = l[q] ? l[q] : 0;
                                if (a.axisY.logarithmic) {
                                    n[q] = H.y + (n[q] ? n[q] : 0);
                                    if (0 >= n[q]) continue;
                                    r = a.axisY.convertValueToPixel(n[q])
                                } else r = a.axisY.convertValueToPixel(H.y), r -= ea;
                                k.push({
                                    x: e,
                                    y: s - ea
                                });
                                l[q] = s - r;
                                w || J ? (!w && t.connectNullData ? (b.setLineDash && (t.options.nullDataLineDashType || A === t.lineDashType && t.lineDashType !== t.nullDataLineDashType) && (b.stroke(), A = t.nullDataLineDashType, b.setLineDash(B)), b.lineTo(e, r), u && v.lineTo(e, r)) : (b.beginPath(), b.moveTo(e, r), u && (v.beginPath(),
                                    v.moveTo(e, r))), J = w = !1) : (b.lineTo(e, r), u && v.lineTo(e, r), 0 == p % 250 && (d(), b.moveTo(e, r), u && v.moveTo(e, r), k.push({
                                    x: e,
                                    y: s - ea
                                })));
                                p < D.length - 1 && (z !== (D[p].lineColor || x) || A !== (D[p].lineDashType || t.lineDashType)) && (d(), b.beginPath(), b.moveTo(e, r), k.push({
                                    x: e,
                                    y: s - ea
                                }), z = D[p].lineColor || x, b.strokeStyle = z, b.setLineDash && (D[p].lineDashType ? (A = D[p].lineDashType, b.setLineDash(I(A, t.lineThickness))) : (A = t.lineDashType, b.setLineDash(R))));
                                if (0 <= t.dataPointIndexes[q]) {
                                    var fa = t.dataPointIds[t.dataPointIndexes[q]];
                                    this._eventManager.objectMap[fa] = {
                                        id: fa,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: y,
                                        dataPointIndex: t.dataPointIndexes[q],
                                        x1: e,
                                        y1: r
                                    }
                                }
                                0 <= t.dataPointIndexes[q] && 0 !== H.markerSize && (0 < H.markerSize || 0 < t.markerSize) && (q = t.getMarkerProperties(t.dataPointIndexes[q], e, r, b), g = q.color, f.push(q), markerColor = G(fa), u && f.push({
                                    x: e,
                                    y: r,
                                    ctx: v,
                                    type: q.type,
                                    size: q.size,
                                    color: markerColor,
                                    borderColor: markerColor,
                                    borderThickness: q.borderThickness
                                }));
                                (H.indexLabel || t.indexLabel || H.indexLabelFormatter || t.indexLabelFormatter) &&
                                this._indexLabels.push({
                                    chartType: "stackedArea",
                                    dataPoint: H,
                                    dataSeries: t,
                                    point: {
                                        x: e,
                                        y: r
                                    },
                                    direction: 0 > D[p].y === a.axisY.reversed ? 1 : -1,
                                    color: c
                                })
                            }
                    }
                    d();
                    b.moveTo(e, r);
                    u && v.moveTo(e, r)
                }
                delete t.dataPointIndexes;
                t.markerColor = g
            }
            P.drawMarkers(f);
            b.restore();
            u && v.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    A.prototype.renderStackedArea100 = function(a) {
        function d() {
            for (0 < t.lineThickness && b.stroke(); 0 < k.length;) {
                var a = k.pop();
                b.lineTo(a.x, a.y);
                u && v.lineTo(a.x, a.y)
            }
            b.closePath();
            b.globalAlpha = t.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            u && (v.closePath(), v.fill(), v.beginPath());
            k = []
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                f = this.plotArea,
                g = [],
                h = null,
                l = [],
                k = [],
                m = [],
                n = [],
                p = 0,
                e, r, q, s = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                v = this._eventManager.ghostCtx;
            b.save();
            u && v.save();
            b.beginPath();
            b.rect(f.x1, f.y1, f.width, f.height);
            b.clip();
            u && (v.beginPath(), v.rect(f.x1, f.y1, f.width, f.height), v.clip());
            for (var w = [], f = 0; f < a.dataSeriesIndexes.length; f++) {
                var y = a.dataSeriesIndexes[f],
                    t = this.data[y],
                    x = t.dataPoints;
                t.dataPointIndexes = [];
                for (p = 0; p < x.length; p++) y = x[p].x.getTime ? x[p].x.getTime() : x[p].x, t.dataPointIndexes[y] = p, w[y] || (m.push(y), w[y] = !0);
                m.sort(ya)
            }
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                y = a.dataSeriesIndexes[f];
                t = this.data[y];
                x = t.dataPoints;
                w = !0;
                c = t.id;
                this._eventManager.objectMap[c] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: y
                };
                c = G(c);
                v.fillStyle = c;
                k = [];
                if (0 < m.length) {
                    var c = t._colorSet[p % t._colorSet.length],
                        z = t.lineColor = t.options.lineColor || c,
                        A = z;
                    b.fillStyle = c;
                    b.strokeStyle = z;
                    b.lineWidth = t.lineThickness;
                    var B = "solid";
                    if (b.setLineDash) {
                        var E = I(t.nullDataLineDashType, t.lineThickness),
                            B = t.lineDashType,
                            R = I(B, t.lineThickness);
                        b.setLineDash(R)
                    }
                    for (var J = !0, p = 0; p < m.length; p++) {
                        q = m[p];
                        var H = null,
                            H = 0 <= t.dataPointIndexes[q] ? x[t.dataPointIndexes[q]] : {
                                x: q,
                                y: null
                            };
                        if (!(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax &&
                                (!t.connectNullData || !J)))
                            if ("number" !== typeof H.y) t.connectNullData || (J || w) || d(), J = !0;
                            else {
                                var ea;
                                ea = 0 !== a.dataPointYSums[q] ? 100 * (H.y / a.dataPointYSums[q]) : 0;
                                e = a.axisX.convertValueToPixel(q);
                                var fa = l[q] ? l[q] : 0;
                                if (a.axisY.logarithmic) {
                                    n[q] = ea + (n[q] ? n[q] : 0);
                                    if (0 >= n[q]) continue;
                                    r = a.axisY.convertValueToPixel(n[q])
                                } else r = a.axisY.convertValueToPixel(ea), r -= fa;
                                k.push({
                                    x: e,
                                    y: s - fa
                                });
                                l[q] = s - r;
                                w || J ? (!w && t.connectNullData ? (b.setLineDash && (t.options.nullDataLineDashType || B === t.lineDashType && t.lineDashType !==
                                    t.nullDataLineDashType) && (b.stroke(), B = t.nullDataLineDashType, b.setLineDash(E)), b.lineTo(e, r), u && v.lineTo(e, r)) : (b.beginPath(), b.moveTo(e, r), u && (v.beginPath(), v.moveTo(e, r))), J = w = !1) : (b.lineTo(e, r), u && v.lineTo(e, r), 0 == p % 250 && (d(), b.moveTo(e, r), u && v.moveTo(e, r), k.push({
                                    x: e,
                                    y: s - fa
                                })));
                                p < x.length - 1 && (A !== (x[p].lineColor || z) || B !== (x[p].lineDashType || t.lineDashType)) && (d(), b.beginPath(), b.moveTo(e, r), k.push({
                                    x: e,
                                    y: s - fa
                                }), A = x[p].lineColor || z, b.strokeStyle = A, b.setLineDash && (x[p].lineDashType ? (B = x[p].lineDashType,
                                    b.setLineDash(I(B, t.lineThickness))) : (B = t.lineDashType, b.setLineDash(R))));
                                if (0 <= t.dataPointIndexes[q]) {
                                    var Fa = t.dataPointIds[t.dataPointIndexes[q]];
                                    this._eventManager.objectMap[Fa] = {
                                        id: Fa,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: y,
                                        dataPointIndex: t.dataPointIndexes[q],
                                        x1: e,
                                        y1: r
                                    }
                                }
                                0 <= t.dataPointIndexes[q] && 0 !== H.markerSize && (0 < H.markerSize || 0 < t.markerSize) && (q = t.getMarkerProperties(p, e, r, b), h = q.color, g.push(q), markerColor = G(Fa), u && g.push({
                                    x: e,
                                    y: r,
                                    ctx: v,
                                    type: q.type,
                                    size: q.size,
                                    color: markerColor,
                                    borderColor: markerColor,
                                    borderThickness: q.borderThickness
                                }));
                                (H.indexLabel || t.indexLabel || H.indexLabelFormatter || t.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedArea100",
                                    dataPoint: H,
                                    dataSeries: t,
                                    point: {
                                        x: e,
                                        y: r
                                    },
                                    direction: 0 > x[p].y === a.axisY.reversed ? 1 : -1,
                                    color: c
                                })
                            }
                    }
                    d();
                    b.moveTo(e, r);
                    u && v.moveTo(e, r)
                }
                delete t.dataPointIndexes;
                t.markerColor = h
            }
            P.drawMarkers(g);
            b.restore();
            u && v.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    A.prototype.renderBubble = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea,
                c = 0,
                f, g;
            d.save();
            u && this._eventManager.ghostCtx.save();
            d.beginPath();
            d.rect(b.x1, b.y1, b.width, b.height);
            d.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var h = -Infinity, l = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++)
                for (var m = a.dataSeriesIndexes[k], n = this.data[m],
                        p = n.dataPoints, e = 0, c = 0; c < p.length; c++) f = p[c].getTime ? f = p[c].x.getTime() : f = p[c].x, f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax || "undefined" === typeof p[c].z || (e = p[c].z, e > h && (h = e), e < l && (l = e));
            for (var r = 25 * Math.PI, b = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, r), k = 0; k < a.dataSeriesIndexes.length; k++)
                if (m = a.dataSeriesIndexes[k], n = this.data[m], p = n.dataPoints, 0 < p.length)
                    for (d.strokeStyle = "#4572A7 ", c = 0; c < p.length; c++)
                        if (f = p[c].getTime ? f = p[c].x.getTime() : f = p[c].x, !(f < a.axisX.dataInfo.viewPortMin ||
                                f > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[c].y) {
                            f = a.axisX.convertValueToPixel(f);
                            g = a.axisY.convertValueToPixel(p[c].y);
                            var e = p[c].z,
                                q = 2 * Math.max(Math.sqrt((h === l ? b / 2 : r + (b - r) / (h - l) * (e - l)) / Math.PI) << 0, 1),
                                e = n.getMarkerProperties(c, d);
                            e.size = q;
                            d.globalAlpha = n.fillOpacity;
                            P.drawMarker(f, g, d, e.type, e.size, e.color, e.borderColor, e.borderThickness);
                            d.globalAlpha = 1;
                            var s = n.dataPointIds[c];
                            this._eventManager.objectMap[s] = {
                                id: s,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: c,
                                x1: f,
                                y1: g,
                                size: q
                            };
                            q = G(s);
                            u && P.drawMarker(f, g, this._eventManager.ghostCtx, e.type, e.size, q, q, e.borderThickness);
                            (p[c].indexLabel || n.indexLabel || p[c].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "bubble",
                                dataPoint: p[c],
                                dataSeries: n,
                                point: {
                                    x: f,
                                    y: g
                                },
                                direction: 1,
                                bounds: {
                                    x1: f - e.size / 2,
                                    y1: g - e.size / 2,
                                    x2: f + e.size / 2,
                                    y2: g + e.size / 2
                                },
                                color: null
                            })
                        }
            d.restore();
            u && this._eventManager.ghostCtx.restore();
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.fadeInAnimation,
                easingFunction: F.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    A.prototype.renderScatter = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea,
                c = 0,
                f, g;
            d.save();
            u && this._eventManager.ghostCtx.save();
            d.beginPath();
            d.rect(b.x1, b.y1, b.width, b.height);
            d.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var h = 0; h < a.dataSeriesIndexes.length; h++) {
                var l = a.dataSeriesIndexes[h],
                    k = this.data[l],
                    m = k.dataPoints;
                if (0 < m.length) {
                    d.strokeStyle = "#4572A7 ";
                    Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                    for (var n = 0, p = 0, c = 0; c < m.length; c++)
                        if (f = m[c].getTime ? f = m[c].x.getTime() : f = m[c].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[c].y) {
                            f = a.axisX.convertValueToPixel(f);
                            g = a.axisY.convertValueToPixel(m[c].y);
                            var e = k.getMarkerProperties(c, f, g, d);
                            d.globalAlpha = k.fillOpacity;
                            P.drawMarker(e.x, e.y, e.ctx, e.type, e.size, e.color, e.borderColor, e.borderThickness);
                            d.globalAlpha =
                                1;
                            Math.sqrt((n - f) * (n - f) + (p - g) * (p - g)) < Math.min(e.size, 5) && m.length > Math.min(this.plotArea.width, this.plotArea.height) || (n = k.dataPointIds[c], this._eventManager.objectMap[n] = {
                                id: n,
                                objectType: "dataPoint",
                                dataSeriesIndex: l,
                                dataPointIndex: c,
                                x1: f,
                                y1: g
                            }, n = G(n), u && P.drawMarker(e.x, e.y, this._eventManager.ghostCtx, e.type, e.size, n, n, e.borderThickness), (m[c].indexLabel || k.indexLabel || m[c].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "scatter",
                                dataPoint: m[c],
                                dataSeries: k,
                                point: {
                                    x: f,
                                    y: g
                                },
                                direction: 1,
                                bounds: {
                                    x1: f - e.size / 2,
                                    y1: g - e.size / 2,
                                    x2: f + e.size / 2,
                                    y2: g + e.size / 2
                                },
                                color: null
                            }), n = f, p = g)
                        }
                }
            }
            d.restore();
            u && this._eventManager.ghostCtx.restore();
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.fadeInAnimation,
                easingFunction: F.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    A.prototype.renderCandlestick = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx,
            b = this._eventManager.ghostCtx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                c = this.plotArea,
                f = 0,
                g, h, l, k, m, n, f = this.dataPointMinWidth ?
                this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            g = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.015 * this.width;
            var p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.dataPointWidth ? this.dataPointWidth : 0.7 * c.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && f > g && (f = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth &&
                (this.dataPointMinWidth && g < f) && (g = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, f));
            p < f && (p = f);
            p > g && (p = g);
            d.save();
            u && b.save();
            d.beginPath();
            d.rect(c.x1, c.y1, c.width, c.height);
            d.clip();
            u && (b.beginPath(), b.rect(c.x1, c.y1, c.width, c.height), b.clip());
            for (var e = 0; e < a.dataSeriesIndexes.length; e++) {
                var r = a.dataSeriesIndexes[e],
                    q = this.data[r],
                    s = q.dataPoints;
                if (0 < s.length)
                    for (var v = 5 < p && q.bevelEnabled ? !0 : !1, f = 0; f < s.length; f++)
                        if (s[f].getTime ? n = s[f].x.getTime() : n = s[f].x, !(n < a.axisX.dataInfo.viewPortMin ||
                                n > a.axisX.dataInfo.viewPortMax) && null !== s[f].y && s[f].y.length && "number" === typeof s[f].y[0] && "number" === typeof s[f].y[1] && "number" === typeof s[f].y[2] && "number" === typeof s[f].y[3]) {
                            g = a.axisX.convertValueToPixel(n);
                            h = a.axisY.convertValueToPixel(s[f].y[0]);
                            l = a.axisY.convertValueToPixel(s[f].y[1]);
                            k = a.axisY.convertValueToPixel(s[f].y[2]);
                            m = a.axisY.convertValueToPixel(s[f].y[3]);
                            var w = g - p / 2 << 0,
                                y = w + p << 0,
                                c = s[f].color ? s[f].color : q._colorSet[0],
                                t = Math.round(Math.max(1, 0.15 * p)),
                                x = 0 === t % 2 ? 0 : 0.5,
                                z = q.dataPointIds[f];
                            this._eventManager.objectMap[z] = {
                                id: z,
                                objectType: "dataPoint",
                                dataSeriesIndex: r,
                                dataPointIndex: f,
                                x1: w,
                                y1: h,
                                x2: y,
                                y2: l,
                                x3: g,
                                y3: k,
                                x4: g,
                                y4: m,
                                borderThickness: t,
                                color: c
                            };
                            d.strokeStyle = c;
                            d.beginPath();
                            d.lineWidth = t;
                            b.lineWidth = Math.max(t, 4);
                            "candlestick" === q.type ? (d.moveTo(g - x, l), d.lineTo(g - x, Math.min(h, m)), d.stroke(), d.moveTo(g - x, Math.max(h, m)), d.lineTo(g - x, k), d.stroke(), N(d, w, Math.min(h, m), y, Math.max(h, m), s[f].y[0] <= s[f].y[3] ? q.risingColor : c, t, c, v, v, !1, !1, q.fillOpacity), u && (c = G(z), b.strokeStyle = c, b.moveTo(g -
                                x, l), b.lineTo(g - x, Math.min(h, m)), b.stroke(), b.moveTo(g - x, Math.max(h, m)), b.lineTo(g - x, k), b.stroke(), N(b, w, Math.min(h, m), y, Math.max(h, m), c, 0, null, !1, !1, !1, !1))) : "ohlc" === q.type && (d.moveTo(g - x, l), d.lineTo(g - x, k), d.stroke(), d.beginPath(), d.moveTo(g, h), d.lineTo(w, h), d.stroke(), d.beginPath(), d.moveTo(g, m), d.lineTo(y, m), d.stroke(), u && (c = G(z), b.strokeStyle = c, b.moveTo(g - x, l), b.lineTo(g - x, k), b.stroke(), b.beginPath(), b.moveTo(g, h), b.lineTo(w, h), b.stroke(), b.beginPath(), b.moveTo(g, m), b.lineTo(y, m), b.stroke()));
                            (s[f].indexLabel || q.indexLabel || s[f].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                                chartType: q.type,
                                dataPoint: s[f],
                                dataSeries: q,
                                point: {
                                    x: w + (y - w) / 2,
                                    y: a.axisY.reversed ? k : l
                                },
                                direction: 1,
                                bounds: {
                                    x1: w,
                                    y1: Math.min(l, k),
                                    x2: y,
                                    y2: Math.max(l, k)
                                },
                                color: c
                            })
                        }
            }
            d.restore();
            u && b.restore();
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.fadeInAnimation,
                easingFunction: F.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    A.prototype.renderRangeColumn = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                c = this.plotArea,
                f = 0,
                g, h, f = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            g = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var l = a.axisX.dataInfo.minDiff;
            isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
            l = this.dataPointWidth ? this.dataPointWidth : 0.9 * (c.width * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) <<
                0;
            this.dataPointMaxWidth && f > g && (f = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && g < f) && (g = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, f));
            l < f && (l = f);
            l > g && (l = g);
            d.save();
            u && this._eventManager.ghostCtx.save();
            d.beginPath();
            d.rect(c.x1, c.y1, c.width, c.height);
            d.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
            for (var k = 0; k < a.dataSeriesIndexes.length; k++) {
                var m =
                    a.dataSeriesIndexes[k],
                    n = this.data[m],
                    p = n.dataPoints;
                if (0 < p.length)
                    for (var e = 5 < l && n.bevelEnabled ? !0 : !1, f = 0; f < p.length; f++)
                        if (p[f].getTime ? h = p[f].x.getTime() : h = p[f].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && null !== p[f].y && p[f].y.length && "number" === typeof p[f].y[0] && "number" === typeof p[f].y[1]) {
                            b = a.axisX.convertValueToPixel(h);
                            c = a.axisY.convertValueToPixel(p[f].y[0]);
                            g = a.axisY.convertValueToPixel(p[f].y[1]);
                            var r = a.axisX.reversed ? b + a.plotType.totalDataSeries * l / 2 - (a.previousDataSeriesCount +
                                    k) * l << 0 : b - a.plotType.totalDataSeries * l / 2 + (a.previousDataSeriesCount + k) * l << 0,
                                q = a.axisX.reversed ? r - l << 0 : r + l << 0,
                                b = p[f].color ? p[f].color : n._colorSet[f % n._colorSet.length];
                            if (c > g) {
                                var s = c,
                                    c = g;
                                g = s
                            }
                            s = n.dataPointIds[f];
                            this._eventManager.objectMap[s] = {
                                id: s,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: f,
                                x1: r,
                                y1: c,
                                x2: q,
                                y2: g
                            };
                            N(d, r, c, q, g, b, 0, b, e, e, !1, !1, n.fillOpacity);
                            b = G(s);
                            u && N(this._eventManager.ghostCtx, r, c, q, g, b, 0, null, !1, !1, !1, !1);
                            if (p[f].indexLabel || n.indexLabel || p[f].indexLabelFormatter ||
                                n.indexLabelFormatter) this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: p[f],
                                dataSeries: n,
                                indexKeyword: 0,
                                point: {
                                    x: r + (q - r) / 2,
                                    y: p[f].y[1] >= p[f].y[0] ? g : c
                                },
                                direction: p[f].y[1] >= p[f].y[0] ? -1 : 1,
                                bounds: {
                                    x1: r,
                                    y1: Math.min(c, g),
                                    x2: q,
                                    y2: Math.max(c, g)
                                },
                                color: b
                            }), this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: p[f],
                                dataSeries: n,
                                indexKeyword: 1,
                                point: {
                                    x: r + (q - r) / 2,
                                    y: p[f].y[1] >= p[f].y[0] ? c : g
                                },
                                direction: p[f].y[1] >= p[f].y[0] ? 1 : -1,
                                bounds: {
                                    x1: r,
                                    y1: Math.min(c, g),
                                    x2: q,
                                    y2: Math.max(c, g)
                                },
                                color: b
                            })
                        }
            }
            d.restore();
            u && this._eventManager.ghostCtx.restore();
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.fadeInAnimation,
                easingFunction: F.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    A.prototype.renderRangeBar = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                c = this.plotArea,
                f = 0,
                g, h, l, f = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            g = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth :
                Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            var k = a.axisX.dataInfo.minDiff;
            isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
            k = this.dataPointWidth ? this.dataPointWidth : 0.9 * (c.height * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && f > g && (f = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && g < f) && (g = Math.max(this.dataPointWidth ?
                this.dataPointWidth : -Infinity, f));
            k < f && (k = f);
            k > g && (k = g);
            d.save();
            u && this._eventManager.ghostCtx.save();
            d.beginPath();
            d.rect(c.x1, c.y1, c.width, c.height);
            d.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
            for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                var n = a.dataSeriesIndexes[m],
                    p = this.data[n],
                    e = p.dataPoints;
                if (0 < e.length) {
                    var r = 5 < k && p.bevelEnabled ? !0 : !1;
                    d.strokeStyle = "#4572A7 ";
                    for (f = 0; f < e.length; f++)
                        if (e[f].getTime ?
                            l = e[f].x.getTime() : l = e[f].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && null !== e[f].y && e[f].y.length && "number" === typeof e[f].y[0] && "number" === typeof e[f].y[1]) {
                            c = a.axisY.convertValueToPixel(e[f].y[0]);
                            g = a.axisY.convertValueToPixel(e[f].y[1]);
                            h = a.axisX.convertValueToPixel(l);
                            h = a.axisX.reversed ? h + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + m) * k << 0 : h - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + m) * k << 0;
                            var q = a.axisX.reversed ? h - k << 0 : h + k << 0;
                            c > g && (b = c, c =
                                g, g = b);
                            b = e[f].color ? e[f].color : p._colorSet[f % p._colorSet.length];
                            N(d, c, h, g, q, b, 0, null, r, !1, !1, !1, p.fillOpacity);
                            b = p.dataPointIds[f];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: n,
                                dataPointIndex: f,
                                x1: c,
                                y1: h,
                                x2: g,
                                y2: q
                            };
                            b = G(b);
                            u && N(this._eventManager.ghostCtx, c, h, g, q, b, 0, null, !1, !1, !1, !1);
                            if (e[f].indexLabel || p.indexLabel || e[f].indexLabelFormatter || p.indexLabelFormatter) this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: e[f],
                                dataSeries: p,
                                indexKeyword: 0,
                                point: {
                                    x: e[f].y[1] >=
                                        e[f].y[0] ? c : g,
                                    y: h + (q - h) / 2
                                },
                                direction: e[f].y[1] >= e[f].y[0] ? -1 : 1,
                                bounds: {
                                    x1: Math.min(c, g),
                                    y1: h,
                                    x2: Math.max(c, g),
                                    y2: q
                                },
                                color: b
                            }), this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: e[f],
                                dataSeries: p,
                                indexKeyword: 1,
                                point: {
                                    x: e[f].y[1] >= e[f].y[0] ? g : c,
                                    y: h + (q - h) / 2
                                },
                                direction: e[f].y[1] >= e[f].y[0] ? 1 : -1,
                                bounds: {
                                    x1: Math.min(c, g),
                                    y1: h,
                                    x2: Math.max(c, g),
                                    y2: q
                                },
                                color: b
                            })
                        }
                }
            }
            d.restore();
            u && this._eventManager.ghostCtx.restore();
            return {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: F.fadeInAnimation,
                easingFunction: F.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    A.prototype.renderRangeArea = function(a) {
        function d() {
            if (w) {
                var a = null;
                0 < m.lineThickness && b.stroke();
                for (var d = l.length - 1; 0 <= d; d--) a = l[d], b.lineTo(a.x, a.y), c.lineTo(a.x, a.y);
                b.closePath();
                b.globalAlpha = m.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                c.fill();
                if (0 < m.lineThickness) {
                    b.beginPath();
                    b.moveTo(a.x, a.y);
                    for (d = 0; d < l.length; d++) a = l[d], b.lineTo(a.x, a.y);
                    b.stroke()
                }
                b.beginPath();
                b.moveTo(r, q);
                c.beginPath();
                c.moveTo(r, q);
                w = {
                    x: r,
                    y: q
                };
                l = [];
                l.push({
                    x: r,
                    y: s
                })
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = this._eventManager.ghostCtx,
                f = [],
                g = null,
                h = this.plotArea;
            b.save();
            u && c.save();
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            u && (c.beginPath(), c.rect(h.x1, h.y1, h.width, h.height), c.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var l = [],
                    k = a.dataSeriesIndexes[h],
                    m = this.data[k],
                    n = m.dataPoints,
                    f = m.id;
                this._eventManager.objectMap[f] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: k
                };
                f = G(f);
                c.fillStyle = f;
                var f = [],
                    p = !0,
                    e = 0,
                    r, q, s, v, w = null;
                if (0 < n.length) {
                    var y =
                        m._colorSet[e % m._colorSet.length],
                        t = m.lineColor = m.options.lineColor || y,
                        x = t;
                    b.fillStyle = y;
                    b.strokeStyle = t;
                    b.lineWidth = m.lineThickness;
                    var z = "solid";
                    if (b.setLineDash) {
                        var A = I(m.nullDataLineDashType, m.lineThickness),
                            z = m.lineDashType,
                            B = I(z, m.lineThickness);
                        b.setLineDash(B)
                    }
                    for (var E = !0; e < n.length; e++)
                        if (v = n[e].x.getTime ? n[e].x.getTime() : n[e].x, !(v < a.axisX.dataInfo.viewPortMin || v > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !E)))
                            if (null !== n[e].y && n[e].y.length && "number" === typeof n[e].y[0] && "number" ===
                                typeof n[e].y[1]) {
                                r = a.axisX.convertValueToPixel(v);
                                q = a.axisY.convertValueToPixel(n[e].y[0]);
                                s = a.axisY.convertValueToPixel(n[e].y[1]);
                                p || E ? (m.connectNullData && !p ? (b.setLineDash && (m.options.nullDataLineDashType || z === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (l[l.length - 1].newLineDashArray = B, z = m.nullDataLineDashType, b.setLineDash(A)), b.lineTo(r, q), u && c.lineTo(r, q), l.push({
                                    x: r,
                                    y: s
                                })) : (b.beginPath(), b.moveTo(r, q), w = {
                                    x: r,
                                    y: q
                                }, l = [], l.push({
                                    x: r,
                                    y: s
                                }), u && (c.beginPath(), c.moveTo(r, q))), E = p = !1) : (b.lineTo(r, q), l.push({
                                    x: r,
                                    y: s
                                }), u && c.lineTo(r, q), 0 == e % 250 && d());
                                v = m.dataPointIds[e];
                                this._eventManager.objectMap[v] = {
                                    id: v,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: e,
                                    x1: r,
                                    y1: q,
                                    y2: s
                                };
                                e < n.length - 1 && (x !== (n[e].lineColor || t) || z !== (n[e].lineDashType || m.lineDashType)) && (d(), x = n[e].lineColor || t, l[l.length - 1].newStrokeStyle = x, b.strokeStyle = x, b.setLineDash && (n[e].lineDashType ? (z = n[e].lineDashType, l[l.length - 1].newLineDashArray = I(z, m.lineThickness), b.setLineDash(l[l.length - 1].newLineDashArray)) :
                                    (z = m.lineDashType, l[l.length - 1].newLineDashArray = B, b.setLineDash(B))));
                                if (0 !== n[e].markerSize && (0 < n[e].markerSize || 0 < m.markerSize)) {
                                    var R = m.getMarkerProperties(e, r, s, b);
                                    f.push(R);
                                    var J = G(v);
                                    u && f.push({
                                        x: r,
                                        y: s,
                                        ctx: c,
                                        type: R.type,
                                        size: R.size,
                                        color: J,
                                        borderColor: J,
                                        borderThickness: R.borderThickness
                                    });
                                    R = m.getMarkerProperties(e, r, q, b);
                                    g = R.color;
                                    f.push(R);
                                    J = G(v);
                                    u && f.push({
                                        x: r,
                                        y: q,
                                        ctx: c,
                                        type: R.type,
                                        size: R.size,
                                        color: J,
                                        borderColor: J,
                                        borderThickness: R.borderThickness
                                    })
                                }
                                if (n[e].indexLabel || m.indexLabel || n[e].indexLabelFormatter ||
                                    m.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: n[e],
                                    dataSeries: m,
                                    indexKeyword: 0,
                                    point: {
                                        x: r,
                                        y: q
                                    },
                                    direction: n[e].y[0] > n[e].y[1] === a.axisY.reversed ? -1 : 1,
                                    color: y
                                }), this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: n[e],
                                    dataSeries: m,
                                    indexKeyword: 1,
                                    point: {
                                        x: r,
                                        y: s
                                    },
                                    direction: n[e].y[0] > n[e].y[1] === a.axisY.reversed ? 1 : -1,
                                    color: y
                                })
                            } else E || p || d(), E = !0;
                    d();
                    P.drawMarkers(f);
                    m.markerColor = g
                }
            }
            b.restore();
            u && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    A.prototype.renderRangeSplineArea = function(a) {
        function d(a, d) {
            var e = ua(q, 2);
            if (0 < e.length) {
                if (0 < k.lineThickness) {
                    b.strokeStyle = d;
                    b.setLineDash && b.setLineDash(a);
                    b.beginPath();
                    b.moveTo(e[0].x, e[0].y);
                    for (var f = 0; f < e.length - 3; f += 3) {
                        if (e[f].newStrokeStyle || e[f].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(e[f].x, e[f].y), e[f].newStrokeStyle && (b.strokeStyle = e[f].newStrokeStyle), e[f].newLineDashArray && b.setLineDash(e[f].newLineDashArray);
                        b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y)
                    }
                    b.stroke()
                }
                b.beginPath();
                b.moveTo(e[0].x, e[0].y);
                u && (c.beginPath(), c.moveTo(e[0].x, e[0].y));
                for (f = 0; f < e.length - 3; f += 3) b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y), u && c.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y);
                e = ua(s, 2);
                b.lineTo(s[s.length - 1].x, s[s.length - 1].y);
                for (f = e.length - 1; 2 < f; f -= 3) b.bezierCurveTo(e[f - 1].x, e[f - 1].y, e[f - 2].x, e[f - 2].y, e[f - 3].x, e[f - 3].y), u && c.bezierCurveTo(e[f -
                    1].x, e[f - 1].y, e[f - 2].x, e[f - 2].y, e[f - 3].x, e[f - 3].y);
                b.closePath();
                b.globalAlpha = k.fillOpacity;
                b.fill();
                u && (c.closePath(), c.fill());
                b.globalAlpha = 1;
                if (0 < k.lineThickness) {
                    b.strokeStyle = d;
                    b.setLineDash && b.setLineDash(a);
                    b.beginPath();
                    b.moveTo(e[0].x, e[0].y);
                    for (var g = f = 0; f < e.length - 3; f += 3, g++) {
                        if (q[g].newStrokeStyle || q[g].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(e[f].x, e[f].y), q[g].newStrokeStyle && (b.strokeStyle = q[g].newStrokeStyle), q[g].newLineDashArray && b.setLineDash(q[g].newLineDashArray);
                        b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y)
                    }
                    b.stroke()
                }
                b.beginPath()
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = this._eventManager.ghostCtx,
                f = [],
                g = null,
                h = this.plotArea;
            b.save();
            u && c.save();
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            u && (c.beginPath(), c.rect(h.x1, h.y1, h.width, h.height), c.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var l = a.dataSeriesIndexes[h],
                    k = this.data[l],
                    m = k.dataPoints,
                    f = k.id;
                this._eventManager.objectMap[f] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: l
                };
                f = G(f);
                c.fillStyle = f;
                var f = [],
                    n = 0,
                    p, e, r, q = [],
                    s = [];
                if (0 < m.length) {
                    var v = k._colorSet[n % k._colorSet.length],
                        w = k.lineColor = k.options.lineColor || v,
                        y = w;
                    b.fillStyle = v;
                    b.lineWidth = k.lineThickness;
                    var t = "solid",
                        x;
                    if (b.setLineDash) {
                        var z = I(k.nullDataLineDashType, k.lineThickness),
                            t = k.lineDashType;
                        x = I(t, k.lineThickness)
                    }
                    for (e = !1; n < m.length; n++)
                        if (p = m[n].x.getTime ? m[n].x.getTime() : m[n].x, !(p < a.axisX.dataInfo.viewPortMin || p > a.axisX.dataInfo.viewPortMax && (!k.connectNullData ||
                                !e)))
                            if (null !== m[n].y && m[n].y.length && "number" === typeof m[n].y[0] && "number" === typeof m[n].y[1]) {
                                p = a.axisX.convertValueToPixel(p);
                                e = a.axisY.convertValueToPixel(m[n].y[0]);
                                r = a.axisY.convertValueToPixel(m[n].y[1]);
                                var A = k.dataPointIds[n];
                                this._eventManager.objectMap[A] = {
                                    id: A,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: l,
                                    dataPointIndex: n,
                                    x1: p,
                                    y1: e,
                                    y2: r
                                };
                                q[q.length] = {
                                    x: p,
                                    y: e
                                };
                                s[s.length] = {
                                    x: p,
                                    y: r
                                };
                                n < m.length - 1 && (y !== (m[n].lineColor || w) || t !== (m[n].lineDashType || k.lineDashType)) && (y = m[n].lineColor || w, q[q.length -
                                    1].newStrokeStyle = y, b.setLineDash && (m[n].lineDashType ? (t = m[n].lineDashType, q[q.length - 1].newLineDashArray = I(t, k.lineThickness)) : (t = k.lineDashType, q[q.length - 1].newLineDashArray = x)));
                                if (0 !== m[n].markerSize && (0 < m[n].markerSize || 0 < k.markerSize)) {
                                    var B = k.getMarkerProperties(n, p, e, b),
                                        g = B.color;
                                    f.push(B);
                                    var E = G(A);
                                    u && f.push({
                                        x: p,
                                        y: e,
                                        ctx: c,
                                        type: B.type,
                                        size: B.size,
                                        color: E,
                                        borderColor: E,
                                        borderThickness: B.borderThickness
                                    });
                                    B = k.getMarkerProperties(n, p, r, b);
                                    f.push(B);
                                    E = G(A);
                                    u && f.push({
                                        x: p,
                                        y: r,
                                        ctx: c,
                                        type: B.type,
                                        size: B.size,
                                        color: E,
                                        borderColor: E,
                                        borderThickness: B.borderThickness
                                    })
                                }
                                if (m[n].indexLabel || k.indexLabel || m[n].indexLabelFormatter || k.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: m[n],
                                    dataSeries: k,
                                    indexKeyword: 0,
                                    point: {
                                        x: p,
                                        y: e
                                    },
                                    direction: m[n].y[0] <= m[n].y[1] ? -1 : 1,
                                    color: v
                                }), this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: m[n],
                                    dataSeries: k,
                                    indexKeyword: 1,
                                    point: {
                                        x: p,
                                        y: r
                                    },
                                    direction: m[n].y[0] <= m[n].y[1] ? 1 : -1,
                                    color: v
                                });
                                e = !1
                            } else 0 < n && !e && (k.connectNullData ? b.setLineDash &&
                                (0 < q.length && (k.options.nullDataLineDashType || !m[n - 1].lineDashType)) && (q[q.length - 1].newLineDashArray = z, t = k.nullDataLineDashType) : (d(x, w), q = [], s = [])), e = !0;
                    d(x, w);
                    P.drawMarkers(f);
                    k.markerColor = g
                }
            }
            b.restore();
            u && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    var Ga = function(a, d, b, c, f, g, h, l, k) {
        if (!(0 > b)) {
            "undefined" === typeof l && (l = 1);
            if (!u) {
                var m = Number((h % (2 * Math.PI)).toFixed(8));
                Number((g %
                    (2 * Math.PI)).toFixed(8)) === m && (h -= 1E-4)
            }
            a.save();
            a.globalAlpha = l;
            "pie" === f ? (a.beginPath(), a.moveTo(d.x, d.y), a.arc(d.x, d.y, b, g, h, !1), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === f && (a.beginPath(), a.arc(d.x, d.y, b, g, h, !1), 0 <= k && a.arc(d.x, d.y, k * b, h, g, !0), a.closePath(), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
            a.globalAlpha = 1;
            a.restore()
        }
    };
    A.prototype.renderPie = function(a) {
        function d() {
            if (m && n) {
                for (var a = 0, b = 0, c = 0, d = 0, f = 0; f < n.length; f++) {
                    var g =
                        n[f],
                        h = m.dataPointIds[f],
                        l = {
                            id: h,
                            objectType: "dataPoint",
                            dataPointIndex: f,
                            dataSeriesIndex: 0
                        };
                    r.push(l);
                    var p = {
                            percent: null,
                            total: null
                        },
                        q = null,
                        p = k.getPercentAndTotal(m, g);
                    if (m.indexLabelFormatter || g.indexLabelFormatter) q = {
                        chart: k.options,
                        dataSeries: m,
                        dataPoint: g,
                        total: p.total,
                        percent: p.percent
                    };
                    p = g.indexLabelFormatter ? g.indexLabelFormatter(q) : g.indexLabel ? k.replaceKeywordsWithValue(g.indexLabel, g, m, f) : m.indexLabelFormatter ? m.indexLabelFormatter(q) : m.indexLabel ? k.replaceKeywordsWithValue(m.indexLabel,
                        g, m, f) : g.label ? g.label : "";
                    k._eventManager.objectMap[h] = l;
                    l.center = {
                        x: t.x,
                        y: t.y
                    };
                    l.y = g.y;
                    l.radius = B;
                    l.percentInnerRadius = F;
                    l.indexLabelText = p;
                    l.indexLabelPlacement = m.indexLabelPlacement;
                    l.indexLabelLineColor = g.indexLabelLineColor ? g.indexLabelLineColor : m.options.indexLabelLineColor ? m.options.indexLabelLineColor : g.color ? g.color : m._colorSet[f % m._colorSet.length];
                    l.indexLabelLineThickness = x(g.indexLabelLineThickness) ? m.indexLabelLineThickness : g.indexLabelLineThickness;
                    l.indexLabelLineDashType = g.indexLabelLineDashType ?
                        g.indexLabelLineDashType : m.indexLabelLineDashType;
                    l.indexLabelFontColor = g.indexLabelFontColor ? g.indexLabelFontColor : m.indexLabelFontColor;
                    l.indexLabelFontStyle = g.indexLabelFontStyle ? g.indexLabelFontStyle : m.indexLabelFontStyle;
                    l.indexLabelFontWeight = g.indexLabelFontWeight ? g.indexLabelFontWeight : m.indexLabelFontWeight;
                    l.indexLabelFontSize = g.indexLabelFontSize ? g.indexLabelFontSize : m.indexLabelFontSize;
                    l.indexLabelFontFamily = g.indexLabelFontFamily ? g.indexLabelFontFamily : m.indexLabelFontFamily;
                    l.indexLabelBackgroundColor =
                        g.indexLabelBackgroundColor ? g.indexLabelBackgroundColor : m.options.indexLabelBackgroundColor ? m.options.indexLabelBackgroundColor : m.indexLabelBackgroundColor;
                    l.indexLabelMaxWidth = g.indexLabelMaxWidth ? g.indexLabelMaxWidth : m.indexLabelMaxWidth ? m.indexLabelMaxWidth : 0.33 * e.width;
                    l.indexLabelWrap = "undefined" !== typeof g.indexLabelWrap ? g.indexLabelWrap : m.indexLabelWrap;
                    l.startAngle = 0 === f ? m.startAngle ? m.startAngle / 180 * Math.PI : 0 : r[f - 1].endAngle;
                    l.startAngle = (l.startAngle + 2 * Math.PI) % (2 * Math.PI);
                    l.endAngle = l.startAngle +
                        2 * Math.PI / u * Math.abs(g.y);
                    g = (l.endAngle + l.startAngle) / 2;
                    g = (g + 2 * Math.PI) % (2 * Math.PI);
                    l.midAngle = g;
                    if (l.midAngle > Math.PI / 2 - w && l.midAngle < Math.PI / 2 + w) {
                        if (0 === a || r[c].midAngle > l.midAngle) c = f;
                        a++
                    } else if (l.midAngle > 3 * Math.PI / 2 - w && l.midAngle < 3 * Math.PI / 2 + w) {
                        if (0 === b || r[d].midAngle > l.midAngle) d = f;
                        b++
                    }
                    l.hemisphere = g > Math.PI / 2 && g <= 3 * Math.PI / 2 ? "left" : "right";
                    l.indexLabelTextBlock = new W(k.plotArea.ctx, {
                        fontSize: l.indexLabelFontSize,
                        fontFamily: l.indexLabelFontFamily,
                        fontColor: l.indexLabelFontColor,
                        fontStyle: l.indexLabelFontStyle,
                        fontWeight: l.indexLabelFontWeight,
                        horizontalAlign: "left",
                        backgroundColor: l.indexLabelBackgroundColor,
                        maxWidth: l.indexLabelMaxWidth,
                        maxHeight: l.indexLabelWrap ? 5 * l.indexLabelFontSize : 1.5 * l.indexLabelFontSize,
                        text: l.indexLabelText,
                        padding: 0,
                        textBaseline: "top"
                    });
                    l.indexLabelTextBlock.measureText()
                }
                h = g = 0;
                p = !1;
                for (f = 0; f < n.length; f++) l = r[(c + f) % n.length], 1 < a && (l.midAngle > Math.PI / 2 - w && l.midAngle < Math.PI / 2 + w) && (g <= a / 2 && !p ? (l.hemisphere = "right", g++) : (l.hemisphere = "left", p = !0));
                p = !1;
                for (f = 0; f < n.length; f++) l =
                    r[(d + f) % n.length], 1 < b && (l.midAngle > 3 * Math.PI / 2 - w && l.midAngle < 3 * Math.PI / 2 + w) && (h <= b / 2 && !p ? (l.hemisphere = "left", h++) : (l.hemisphere = "right", p = !0))
            }
        }

        function b(a) {
            var b = k.plotArea.ctx;
            b.clearRect(e.x1, e.y1, e.width, e.height);
            b.fillStyle = k.backgroundColor;
            b.fillRect(e.x1, e.y1, e.width, e.height);
            for (b = 0; b < n.length; b++) {
                var c = r[b].startAngle,
                    d = r[b].endAngle;
                if (d > c) {
                    var f = 0.07 * B * Math.cos(r[b].midAngle),
                        g = 0.07 * B * Math.sin(r[b].midAngle),
                        l = !1;
                    if (n[b].exploded) {
                        if (1E-9 < Math.abs(r[b].center.x - (t.x + f)) || 1E-9 < Math.abs(r[b].center.y -
                                (t.y + g))) r[b].center.x = t.x + f * a, r[b].center.y = t.y + g * a, l = !0
                    } else if (0 < Math.abs(r[b].center.x - t.x) || 0 < Math.abs(r[b].center.y - t.y)) r[b].center.x = t.x + f * (1 - a), r[b].center.y = t.y + g * (1 - a), l = !0;
                    l && (f = {}, f.dataSeries = m, f.dataPoint = m.dataPoints[b], f.index = b, k.toolTip.highlightObjects([f]));
                    Ga(k.plotArea.ctx, r[b].center, r[b].radius, n[b].color ? n[b].color : m._colorSet[b % m._colorSet.length], m.type, c, d, m.fillOpacity, r[b].percentInnerRadius)
                }
            }
            a = k.plotArea.ctx;
            a.save();
            a.fillStyle = "black";
            a.strokeStyle = "grey";
            a.textBaseline =
                "middle";
            a.lineJoin = "round";
            for (b = b = 0; b < n.length; b++) c = r[b], c.indexLabelText && (c.indexLabelTextBlock.y -= c.indexLabelTextBlock.height / 2, d = 0, d = "left" === c.hemisphere ? "inside" !== m.indexLabelPlacement ? -(c.indexLabelTextBlock.width + p) : -c.indexLabelTextBlock.width / 2 : "inside" !== m.indexLabelPlacement ? p : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += d, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= d, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement &&
                0 < c.indexLabelLineThickness && (d = c.center.x + B * Math.cos(c.midAngle), f = c.center.y + B * Math.sin(c.midAngle), a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness, a.setLineDash && a.setLineDash(I(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(), a.moveTo(d, f), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -p : p), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter");
            a.save()
        }

        function c(a, b) {
            var c = 0,
                c = a.indexLabelTextBlock.y -
                a.indexLabelTextBlock.height / 2,
                d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
            return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : c - f
        }

        function f(a) {
            for (var b = null, d = 1; d < n.length; d++)
                if (b = (a + d + r.length) % r.length, r[b].hemisphere !== r[a].hemisphere) {
                    b = null;
                    break
                } else if (r[b].indexLabelText && b !== a && (0 > c(r[b], r[a]) || ("right" === r[a].hemisphere ? r[b].indexLabelTextBlock.y >= r[a].indexLabelTextBlock.y :
                    r[b].indexLabelTextBlock.y <= r[a].indexLabelTextBlock.y))) break;
            else b = null;
            return b
        }

        function g(a, b, d) {
            d = (d || 0) + 1;
            if (1E3 < d) return 0;
            b = b || 0;
            var e = 0,
                k = t.y - 1 * s,
                l = t.y + 1 * s;
            if (0 <= a && a < n.length) {
                var h = r[a];
                if (0 > b && h.indexLabelTextBlock.y < k || 0 < b && h.indexLabelTextBlock.y > l) return 0;
                var p = 0,
                    m = 0,
                    m = p = p = 0;
                0 > b ? h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 > k && h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 + b < k && (b = -(k - (h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 + b))) : h.indexLabelTextBlock.y +
                    h.indexLabelTextBlock.height / 2 < k && h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 + b > l && (b = h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 + b - l);
                b = h.indexLabelTextBlock.y + b;
                k = 0;
                k = "right" === h.hemisphere ? t.x + Math.sqrt(Math.pow(s, 2) - Math.pow(b - t.y, 2)) : t.x - Math.sqrt(Math.pow(s, 2) - Math.pow(b - t.y, 2));
                m = t.x + B * Math.cos(h.midAngle);
                p = t.y + B * Math.sin(h.midAngle);
                p = Math.sqrt(Math.pow(k - m, 2) + Math.pow(b - p, 2));
                m = Math.acos(B / s);
                p = Math.acos((s * s + B * B - p * p) / (2 * B * s));
                b = p < m ? b - h.indexLabelTextBlock.y : 0;
                k = null;
                for (l = 1; l < n.length; l++)
                    if (k = (a - l + r.length) % r.length, r[k].hemisphere !== r[a].hemisphere) {
                        k = null;
                        break
                    } else if (r[k].indexLabelText && r[k].hemisphere === r[a].hemisphere && k !== a && (0 > c(r[k], r[a]) || ("right" === r[a].hemisphere ? r[k].indexLabelTextBlock.y <= r[a].indexLabelTextBlock.y : r[k].indexLabelTextBlock.y >= r[a].indexLabelTextBlock.y))) break;
                else k = null;
                m = k;
                p = f(a);
                l = k = 0;
                0 > b ? (l = "right" === h.hemisphere ? m : p, e = b, null !== l && (m = -b, b = h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - (r[l].indexLabelTextBlock.y +
                    r[l].indexLabelTextBlock.height / 2), b - m < q && (k = -m, l = g(l, k, d + 1), +l.toFixed(y) > +k.toFixed(y) && (e = b > q ? -(b - q) : -(m - (l - k)))))) : 0 < b && (l = "right" === h.hemisphere ? p : m, e = b, null !== l && (m = b, b = r[l].indexLabelTextBlock.y - r[l].indexLabelTextBlock.height / 2 - (h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2), b - m < q && (k = m, l = g(l, k, d + 1), +l.toFixed(y) < +k.toFixed(y) && (e = b > q ? b - q : m - (k - l)))));
                e && (d = h.indexLabelTextBlock.y + e, b = 0, b = "right" === h.hemisphere ? t.x + Math.sqrt(Math.pow(s, 2) - Math.pow(d - t.y, 2)) : t.x - Math.sqrt(Math.pow(s,
                    2) - Math.pow(d - t.y, 2)), h.midAngle > Math.PI / 2 - w && h.midAngle < Math.PI / 2 + w ? (k = (a - 1 + r.length) % r.length, k = r[k], a = r[(a + 1 + r.length) % r.length], "left" === h.hemisphere && "right" === k.hemisphere && b > k.indexLabelTextBlock.x ? b = k.indexLabelTextBlock.x - 15 : "right" === h.hemisphere && ("left" === a.hemisphere && b < a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x + 15)) : h.midAngle > 3 * Math.PI / 2 - w && h.midAngle < 3 * Math.PI / 2 + w && (k = (a - 1 + r.length) % r.length, k = r[k], a = r[(a + 1 + r.length) % r.length], "right" === h.hemisphere && "left" === k.hemisphere &&
                    b < k.indexLabelTextBlock.x ? b = k.indexLabelTextBlock.x + 15 : "left" === h.hemisphere && ("right" === a.hemisphere && b > a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x - 15)), h.indexLabelTextBlock.y = d, h.indexLabelTextBlock.x = b, h.indexLabelAngle = Math.atan2(h.indexLabelTextBlock.y - t.y, h.indexLabelTextBlock.x - t.x))
            }
            return e
        }

        function h() {
            var a = k.plotArea.ctx;
            a.fillStyle = "grey";
            a.strokeStyle = "grey";
            a.font = "16px Arial";
            a.textBaseline = "middle";
            for (var b = a = 0, d = 0, l = !0, b = 0; 10 > b && (1 > b || 0 < d); b++) {
                if (m.radius || !m.radius &&
                    "undefined" !== typeof m.innerRadius && null !== m.innerRadius && B - d <= E) l = !1;
                l && (B -= d);
                d = 0;
                if ("inside" !== m.indexLabelPlacement) {
                    s = B * v;
                    for (a = 0; a < n.length; a++) {
                        var h = r[a];
                        h.indexLabelTextBlock.x = t.x + s * Math.cos(h.midAngle);
                        h.indexLabelTextBlock.y = t.y + s * Math.sin(h.midAngle);
                        h.indexLabelAngle = h.midAngle;
                        h.radius = B;
                        h.percentInnerRadius = F
                    }
                    for (var w, u, a = 0; a < n.length; a++) {
                        var h = r[a],
                            x = f(a);
                        if (null !== x) {
                            w = r[a];
                            u = r[x];
                            var z = 0,
                                z = c(w, u) - q;
                            if (0 > z) {
                                for (var A = u = 0, D = 0; D < n.length; D++) D !== a && r[D].hemisphere === h.hemisphere &&
                                    (r[D].indexLabelTextBlock.y < h.indexLabelTextBlock.y ? u++ : A++);
                                u = z / (u + A || 1) * A;
                                var A = -1 * (z - u),
                                    C = D = 0;
                                "right" === h.hemisphere ? (D = g(a, u), A = -1 * (z - D), C = g(x, A), +C.toFixed(y) < +A.toFixed(y) && +D.toFixed(y) <= +u.toFixed(y) && g(a, -(A - C))) : (D = g(x, u), A = -1 * (z - D), C = g(a, A), +C.toFixed(y) < +A.toFixed(y) && +D.toFixed(y) <= +u.toFixed(y) && g(x, -(A - C)))
                            }
                        }
                    }
                } else
                    for (a = 0; a < n.length; a++) h = r[a], s = "pie" === m.type ? 0.7 * B : 0.8 * B, x = t.x + s * Math.cos(h.midAngle), u = t.y + s * Math.sin(h.midAngle), h.indexLabelTextBlock.x = x, h.indexLabelTextBlock.y = u;
                for (a = 0; a < n.length; a++)
                    if (h = r[a], x = h.indexLabelTextBlock.measureText(), 0 !== x.height && 0 !== x.width) x = x = 0, "right" === h.hemisphere ? (x = e.x2 - (h.indexLabelTextBlock.x + h.indexLabelTextBlock.width + p), x *= -1) : x = e.x1 - (h.indexLabelTextBlock.x - h.indexLabelTextBlock.width - p), 0 < x && (!l && h.indexLabelText && (u = "right" === h.hemisphere ? e.x2 - h.indexLabelTextBlock.x : h.indexLabelTextBlock.x - e.x1, 0.3 * h.indexLabelTextBlock.maxWidth > u ? h.indexLabelText = "" : h.indexLabelTextBlock.maxWidth = 0.85 * u, 0.3 * h.indexLabelTextBlock.maxWidth <
                        u && (h.indexLabelTextBlock.x -= "right" === h.hemisphere ? 2 : -2)), Math.abs(h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - t.y) < B || Math.abs(h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 - t.y) < B) && (x /= Math.abs(Math.cos(h.indexLabelAngle)), 9 < x && (x *= 0.3), x > d && (d = x)), x = x = 0, 0 < h.indexLabelAngle && h.indexLabelAngle < Math.PI ? (x = e.y2 - (h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 + 5), x *= -1) : x = e.y1 - (h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - 5), 0 < x && (!l && h.indexLabelText && (u = 0 < h.indexLabelAngle &&
                        h.indexLabelAngle < Math.PI ? -1 : 1, 0 === g(a, x * u) && g(a, 2 * u)), Math.abs(h.indexLabelTextBlock.x - t.x) < B && (x /= Math.abs(Math.sin(h.indexLabelAngle)), 9 < x && (x *= 0.3), x > d && (d = x)));
                var G = function(a, b, c) {
                    for (var d = [], e = 0; d.push(r[b]), b !== c; b = (b + 1 + n.length) % n.length);
                    d.sort(function(a, b) {
                        return a.y - b.y
                    });
                    for (b = 0; b < d.length; b++)
                        if (c = d[b], e < 0.7 * a) e += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                        else break
                };
                (function() {
                    for (var a = -1, b = -1, d = 0, e = !1, g = 0; g <
                        n.length; g++)
                        if (e = !1, w = r[g], w.indexLabelText) {
                            var h = f(g);
                            if (null !== h) {
                                var k = r[h];
                                z = 0;
                                z = c(w, k);
                                var l;
                                if (l = 0 > z) {
                                    l = w.indexLabelTextBlock.x;
                                    var m = w.indexLabelTextBlock.y - w.indexLabelTextBlock.height / 2,
                                        q = w.indexLabelTextBlock.y + w.indexLabelTextBlock.height / 2,
                                        s = k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2,
                                        t = k.indexLabelTextBlock.x + k.indexLabelTextBlock.width,
                                        v = k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2;
                                    l = w.indexLabelTextBlock.x + w.indexLabelTextBlock.width < k.indexLabelTextBlock.x - p ||
                                        l > t + p || m > v + p || q < s - p ? !1 : !0
                                }
                                l ? (0 > a && (a = g), h !== a && (b = h, d += -z), 0 === g % Math.max(n.length / 10, 3) && (e = !0)) : e = !0;
                                e && (0 < d && 0 <= a && 0 <= b) && (G(d, a, b), b = a = -1, d = 0)
                            }
                        }
                    0 < d && G(d, a, b)
                })()
            }
        }

        function l() {
            k.plotArea.layoutManager.reset();
            k.title && (k.title.dockInsidePlotArea || "center" === k.title.horizontalAlign && "center" === k.title.verticalAlign) && k.title.render();
            if (k.subtitles)
                for (var a = 0; a < k.subtitles.length; a++) {
                    var b = k.subtitles[a];
                    (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                }
            k.legend &&
                (k.legend.dockInsidePlotArea || "center" === k.legend.horizontalAlign && "center" === k.legend.verticalAlign) && k.legend.render();
            z.fNg && z.fNg(k)
        }
        var k = this;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var m = this.data[a.dataSeriesIndexes[0]],
                n = m.dataPoints,
                p = 10,
                e = this.plotArea,
                r = [],
                q = 2,
                s, v = 1.3,
                w = 20 / 180 * Math.PI,
                y = 6,
                t = {
                    x: (e.x2 + e.x1) / 2,
                    y: (e.y2 + e.y1) / 2
                },
                u = 0;
            a = !1;
            for (var A = 0; A < n.length; A++) u += Math.abs(n[A].y), !a && ("undefined" !== typeof n[A].indexLabel && null !== n[A].indexLabel && 0 < n[A].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof n[A].label && null !== n[A].label && 0 < n[A].label.toString().length) && (a = !0);
            if (0 !== u) {
                a = a || "undefined" !== typeof m.indexLabel && null !== m.indexLabel && 0 < m.indexLabel.toString().length;
                var B = "inside" !== m.indexLabelPlacement && a ? 0.75 * Math.min(e.width, e.height) / 2 : 0.92 * Math.min(e.width, e.height) / 2;
                m.radius && (B = Na(m.radius, B));
                var E = "undefined" !== typeof m.innerRadius && null !== m.innerRadius ? Na(m.innerRadius, B) : 0.7 * B;
                m.radius = B;
                "doughnut" === m.type && (m.innerRadius = E);
                var F = Math.min(E / B, (B -
                    1) / B);
                this.pieDoughnutClickHandler = function(a) {
                    k.isAnimating || !x(a.dataSeries.explodeOnClick) && !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && k._animator.animate(0, 500, function(a) {
                        b(a);
                        l()
                    }))
                };
                d();
                h();
                h();
                h();
                h();
                this.disableToolTip = !0;
                this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a) {
                    var b = k.plotArea.ctx;
                    b.clearRect(e.x1, e.y1, e.width, e.height);
                    b.fillStyle = k.backgroundColor;
                    b.fillRect(e.x1, e.y1, e.width, e.height);
                    a =
                        r[0].startAngle + 2 * Math.PI * a;
                    for (b = 0; b < n.length; b++) {
                        var c = 0 === b ? r[b].startAngle : d,
                            d = c + (r[b].endAngle - r[b].startAngle),
                            f = !1;
                        d > a && (d = a, f = !0);
                        var g = n[b].color ? n[b].color : m._colorSet[b % m._colorSet.length];
                        d > c && Ga(k.plotArea.ctx, r[b].center, r[b].radius, g, m.type, c, d, m.fillOpacity, r[b].percentInnerRadius);
                        if (f) break
                    }
                    l()
                }, function() {
                    k.disableToolTip = !1;
                    k._animator.animate(0, k.animatedRender ? 500 : 0, function(a) {
                        b(a);
                        l()
                    })
                })
            }
        }
    };
    A.prototype.animationRequestId = null;
    A.prototype.requestAnimFrame = function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1E3 / 60)
            }
    }();
    A.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    A.prototype.set = function(a, d, b) {
        b = "undefined" === typeof b ? !0 : b;
        "options" === a ? (this.options = d,
            b && this.render()) : A.base.set.call(this, a, d, b)
    };
    A.prototype.exportChart = function(a) {
        a = "undefined" === typeof a ? {} : a;
        var d = a.format ? a.format : "png",
            b = a.fileName ? a.fileName : this.exportFileName;
        if (a.toDataURL) return this.canvas.toDataURL("image/" + d);
        Ba(this.canvas, d, b)
    };
    A.prototype.print = function() {
        var a = this.exportChart({
                toDataURL: !0
            }),
            d = document.createElement("iframe");
        d.setAttribute("class", "canvasjs-chart-print-frame");
        d.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
        d.style.height = this.height + "px";
        this._canvasJSContainer.appendChild(d);
        var b = this,
            c = d.contentWindow || d.contentDocument.document || d.contentDocument;
        c.document.open();
        c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' + a + '"/><body/></html>');
        c.document.close();
        setTimeout(function() {
            c.focus();
            c.print();
            setTimeout(function() {
                b._canvasJSContainer.removeChild(d)
            }, 1E3)
        }, 500)
    };
    ja.prototype.registerSpace = function(a, d) {
        "top" === a ? this._topOccupied +=
            d.height : "bottom" === a ? this._bottomOccupied += d.height : "left" === a ? this._leftOccupied += d.width : "right" === a && (this._rightOccupied += d.width)
    };
    ja.prototype.unRegisterSpace = function(a, d) {
        "top" === a ? this._topOccupied -= d.height : "bottom" === a ? this._bottomOccupied -= d.height : "left" === a ? this._leftOccupied -= d.width : "right" === a && (this._rightOccupied -= d.width)
    };
    ja.prototype.getFreeSpace = function() {
        return {
            x1: this._x1 + this._leftOccupied,
            y1: this._y1 + this._topOccupied,
            x2: this._x2 - this._rightOccupied,
            y2: this._y2 - this._bottomOccupied,
            width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
            height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        }
    };
    ja.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    };
    U(W, M);
    W.prototype.render = function(a) {
        a && this.ctx.save();
        var d = this.ctx.font;
        this.ctx.textBaseline = this.textBaseline;
        var b = 0;
        this._isDirty && this.measureText(this.ctx);
        this.ctx.translate(this.x, this.y + b);
        "middle" === this.textBaseline && (b = -this._lineHeight /
            2);
        this.ctx.font = this._getFontString();
        this.ctx.rotate(Math.PI / 180 * this.angle);
        var c = 0,
            f = this.padding,
            g = null;
        (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, b, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
        this.ctx.fillStyle = this.fontColor;
        for (b = 0; b < this._wrappedText.lines.length; b++) g = this._wrappedText.lines[b], "right" === this.horizontalAlign ? c = this.width - g.width - this.padding : "left" === this.horizontalAlign ?
            c = this.padding : "center" === this.horizontalAlign && (c = (this.width - 2 * this.padding) / 2 - g.width / 2 + this.padding), this.ctx.fillText(g.text, c, f), f += g.height;
        this.ctx.font = d;
        a && this.ctx.restore()
    };
    W.prototype.setText = function(a) {
        this.text = a;
        this._isDirty = !0;
        this._wrappedText = null
    };
    W.prototype.measureText = function() {
        this._lineHeight = Ja(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return {
            width: this.width,
            height: this.height
        }
    };
    W.prototype._getLineWithWidth = function(a, d, b) {
        a = String(a);
        if (!a) return {
            text: "",
            width: 0
        };
        var c = b = 0,
            f = a.length - 1,
            g = Infinity;
        for (this.ctx.font = this._getFontString(); c <= f;) {
            var g = Math.floor((c + f) / 2),
                h = a.substr(0, g + 1);
            b = this.ctx.measureText(h).width;
            if (b < d) c = g + 1;
            else if (b > d) f = g - 1;
            else break
        }
        b > d && 1 < h.length && (h = h.substr(0, h.length - 1), b = this.ctx.measureText(h).width);
        d = !0;
        if (h.length === a.length || " " === a[h.length]) d = !1;
        d && (a = h.split(" "), 1 < a.length && a.pop(), h = a.join(" "), b = this.ctx.measureText(h).width);
        return {
            text: h,
            width: b
        }
    };
    W.prototype._wrapText = function() {
        var a = new String(ka(String(this.text))),
            d = [],
            b = this.ctx.font,
            c = 0,
            f = 0;
        for (this.ctx.font = this._getFontString(); 0 < a.length;) {
            var g = this.maxHeight - 2 * this.padding,
                h = this._getLineWithWidth(a, this.maxWidth - 2 * this.padding, !1);
            h.height = this._lineHeight;
            d.push(h);
            var l = f,
                f = Math.max(f, h.width),
                c = c + h.height,
                a = ka(a.slice(h.text.length, a.length));
            g && c > g && (h = d.pop(), c -= h.height, f = l)
        }
        this._wrappedText = {
            lines: d,
            width: f,
            height: c
        };
        this.width = f + 2 * this.padding;
        this.height = c + 2 * this.padding;
        this.ctx.font = b
    };
    W.prototype._getFontString = function() {
        var a;
        a = "" + (this.fontStyle ? this.fontStyle + " " : "");
        a += this.fontWeight ? this.fontWeight + " " : "";
        a += this.fontSize ? this.fontSize + "px " : "";
        var d = this.fontFamily ? this.fontFamily + "" : "";
        !u && d && (d = d.split(",")[0], "'" !== d[0] && '"' !== d[0] && (d = "'" + d + "'"));
        return a += d
    };
    U(ma, M);
    ma.prototype.render = function() {
        if (this.text) {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                d = a.layoutManager.getFreeSpace(),
                b = d.x1,
                c = d.y1,
                f =
                0,
                g = 0,
                h = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
                l, k;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = d.width - 4 - h * ("center" === this.horizontalAlign ? 2 : 1)), g = 0.5 * d.height - this.margin - 2, f = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = d.height - 4), g = 0.5 * d.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth &&
                (this.maxWidth = d.width - 4), g = 0.5 * d.height - 4));
            this.wrap || (g = Math.min(g, Math.max(1.5 * this.fontSize, this.fontSize + 2.5 * this.padding)));
            var g = new W(this.ctx, {
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    fontWeight: this.fontWeight,
                    horizontalAlign: this.horizontalAlign,
                    verticalAlign: this.verticalAlign,
                    borderColor: this.borderColor,
                    borderThickness: this.borderThickness,
                    backgroundColor: this.backgroundColor,
                    maxWidth: this.maxWidth,
                    maxHeight: g,
                    cornerRadius: this.cornerRadius,
                    text: this.text,
                    padding: this.padding,
                    textBaseline: "top"
                }),
                m = g.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (c = d.y1 + 2, k = "top") : "bottom" === this.verticalAlign && (c = d.y2 - 2 - m.height, k = "bottom"), "left" === this.horizontalAlign ? b = d.x1 + 2 : "center" === this.horizontalAlign ? b = d.x1 + d.width / 2 - m.width / 2 : "right" === this.horizontalAlign && (b = d.x2 - 2 - m.width - h), l = this.horizontalAlign, this.width = m.width, this.height = m.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ?
                (b = d.x1 + 2, c = d.y2 - 2 - (this.maxWidth / 2 - m.width / 2), f = -90, k = "left", this.width = m.height, this.height = m.width) : "right" === this.horizontalAlign ? (b = d.x2 - 2, c = d.y1 + 2 + (this.maxWidth / 2 - m.width / 2), f = 90, k = "right", this.width = m.height, this.height = m.width) : "center" === this.horizontalAlign && (c = a.y1 + (a.height / 2 - m.height / 2), b = a.x1 + (a.width / 2 - m.width / 2), k = "center", this.width = m.width, this.height = m.height), l = "center");
            g.x = b;
            g.y = c;
            g.angle = f;
            g.horizontalAlign = l;
            g.render(!0);
            a.layoutManager.registerSpace(k, {
                width: this.width + ("left" ===
                    k || "right" === k ? this.margin + 2 : 0),
                height: this.height + ("top" === k || "bottom" === k ? this.margin + 2 : 0)
            });
            this.bounds = {
                x1: b,
                y1: c,
                x2: b + this.width,
                y2: c + this.height
            };
            this.ctx.textBaseline = "top"
        }
    };
    U(va, M);
    va.prototype.render = ma.prototype.render;
    U(wa, M);
    wa.prototype.render = function() {
        var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
            d = a.layoutManager.getFreeSpace(),
            b = null,
            c = 0,
            f = 0,
            g = 0,
            h = 0,
            l = this.markerMargin = this.chart.options.legend && !x(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin :
            0.3 * this.fontSize;
        this.height = 0;
        var k = [],
            m = [];
        "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", b = this.verticalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : d.width, h = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * d.height) : "center" === this.verticalAlign && (this.orientation = "vertical", b = this.horizontalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * d.width, h = this.maxHeight = null !== this.maxHeight ? this.maxHeight : d.height);
        for (var n =
                0; n < this.dataSeries.length; n++) {
            var p = this.dataSeries[n];
            if ("pie" !== p.type && "doughnut" !== p.type && "funnel" !== p.type) {
                var e = p.legendMarkerType = p.legendMarkerType ? p.legendMarkerType : "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type && "scatter" !== p.type && "bubble" !== p.type || !p.markerType ? $.getDefaultLegendMarker(p.type) : p.markerType,
                    r = p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                        chart: this.chart,
                        legend: this.options,
                        dataSeries: p,
                        dataPoint: null
                    }) : p.name,
                    q = p.legendMarkerColor =
                    p.legendMarkerColor ? p.legendMarkerColor : p.markerColor ? p.markerColor : p._colorSet[0],
                    s = p.markerSize || "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type ? 0.75 * this.lineHeight : 0,
                    v = p.legendMarkerBorderColor ? p.legendMarkerBorderColor : p.markerBorderColor,
                    w = p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : p.markerBorderThickness ? Math.max(1, Math.round(0.2 * s)) : 0,
                    r = this.chart.replaceKeywordsWithValue(r, p.dataPoints[0], p, n),
                    e = {
                        markerType: e,
                        markerColor: q,
                        text: r,
                        textBlock: null,
                        chartType: p.type,
                        markerSize: s,
                        lineColor: p._colorSet[0],
                        dataSeriesIndex: p.index,
                        dataPointIndex: null,
                        markerBorderColor: v,
                        markerBorderThickness: w
                    };
                k.push(e)
            } else
                for (var u = 0; u < p.dataPoints.length; u++) {
                    var t = p.dataPoints[u],
                        e = t.legendMarkerType ? t.legendMarkerType : p.legendMarkerType ? p.legendMarkerType : $.getDefaultLegendMarker(p.type),
                        r = t.legendText ? t.legendText : p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                            chart: this.chart,
                            legend: this.options,
                            dataSeries: p,
                            dataPoint: t
                        }) : t.name ? t.name : "DataPoint: " + (u + 1),
                        q =
                        t.legendMarkerColor ? t.legendMarkerColor : p.legendMarkerColor ? p.legendMarkerColor : t.color ? t.color : p.color ? p.color : p._colorSet[u % p._colorSet.length],
                        s = 0.75 * this.lineHeight,
                        v = t.legendMarkerBorderColor ? t.legendMarkerBorderColor : p.legendMarkerBorderColor ? p.legendMarkerBorderColor : t.markerBorderColor ? t.markerBorderColor : p.markerBorderColor,
                        w = t.legendMarkerBorderThickness ? t.legendMarkerBorderThickness : p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : t.markerBorderThickness || p.markerBorderThickness ?
                        Math.max(1, Math.round(0.2 * s)) : 0,
                        r = this.chart.replaceKeywordsWithValue(r, t, p, u),
                        e = {
                            markerType: e,
                            markerColor: q,
                            text: r,
                            textBlock: null,
                            chartType: p.type,
                            markerSize: s,
                            dataSeriesIndex: n,
                            dataPointIndex: u,
                            markerBorderColor: v,
                            markerBorderThickness: w
                        };
                    (t.showInLegend || p.showInLegend && !1 !== t.showInLegend) && k.push(e)
                }
        }!0 === this.reversed && k.reverse();
        if (0 < k.length) {
            p = null;
            q = u = r = t = 0;
            r = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, g) : this.itemMaxWidth = Math.min(this.itemWidth,
                g) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, g) : this.itemMaxWidth = g;
            s = 0 === s ? 0.75 * this.lineHeight : s;
            r -= s + l;
            for (n = 0; n < k.length; n++) {
                e = k[n];
                if ("line" === e.chartType || "spline" === e.chartType || "stepLine" === e.chartType) r -= 2 * 0.1 * this.lineHeight;
                if (!(0 >= h || "undefined" === typeof h || 0 >= r || "undefined" === typeof r)) {
                    if ("horizontal" === this.orientation) {
                        e.textBlock = new W(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: r,
                            maxHeight: this.itemWrap ? h : this.lineHeight,
                            angle: 0,
                            text: e.text,
                            horizontalAlign: "left",
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontColor: this.fontColor,
                            fontStyle: this.fontStyle,
                            textBaseline: "middle"
                        });
                        e.textBlock.measureText();
                        null !== this.itemWidth && (e.textBlock.width = this.itemWidth - (s + l + ("line" === e.chartType || "spline" === e.chartType || "stepLine" === e.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                        if (!p || p.width + Math.round(e.textBlock.width + s + l + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === e.chartType || "spline" === e.chartType || "stepLine" === e.chartType ? 2 * 0.1 * this.lineHeight : 0)) > g) p = {
                            items: [],
                            width: 0
                        }, m.push(p), this.height += u, u = 0;
                        u = Math.max(u, e.textBlock.height)
                    } else e.textBlock = new W(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: r,
                        maxHeight: !0 === this.itemWrap ? h : 1.5 * this.fontSize,
                        angle: 0,
                        text: e.text,
                        horizontalAlign: "left",
                        fontSize: this.fontSize,
                        fontFamily: this.fontFamily,
                        fontWeight: this.fontWeight,
                        fontColor: this.fontColor,
                        fontStyle: this.fontStyle,
                        textBaseline: "middle"
                    }), e.textBlock.measureText(), null !== this.itemWidth && (e.textBlock.width = this.itemWidth - (s + l + ("line" === e.chartType || "spline" === e.chartType ||
                        "stepLine" === e.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < h - this.lineHeight ? (p = {
                        items: [],
                        width: 0
                    }, m.push(p)) : (p = m[t], t = (t + 1) % m.length), this.height += e.textBlock.height;
                    e.textBlock.x = p.width;
                    e.textBlock.y = 0;
                    p.width += Math.round(e.textBlock.width + s + l + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === e.chartType || "spline" === e.chartType || "stepLine" === e.chartType ? 2 * 0.1 * this.lineHeight : 0));
                    p.items.push(e);
                    this.width = Math.max(p.width, this.width);
                    q = e.textBlock.width + (s + l + ("line" === e.chartType || "spline" ===
                        e.chartType || "stepLine" === e.chartType ? 2 * 0.1 * this.lineHeight : 0))
                }
            }
            this.itemWidth = q;
            this.height = !1 === this.itemWrap ? m.length * this.lineHeight : this.height + u;
            this.height = Math.min(h, this.height);
            this.width = Math.min(g, this.width)
        }
        "top" === this.verticalAlign ? (f = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, c = d.y1) : "center" === this.verticalAlign ? (f = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width /
            2, c = d.y1 + d.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (f = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, c = d.y2 - this.height);
        this.items = k;
        for (n = 0; n < this.items.length; n++) e = k[n], e.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[e.id] = {
            id: e.id,
            objectType: "legendItem",
            legendItemIndex: n,
            dataSeriesIndex: e.dataSeriesIndex,
            dataPointIndex: e.dataPointIndex
        };
        (0 < this.borderThickness && this.borderColor || this.backgroundColor) &&
        this.ctx.roundRect(f, c, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
        for (n = d = 0; n < m.length; n++) {
            p = m[n];
            for (t = u = 0; t < p.items.length; t++) {
                e = p.items[t];
                q = e.textBlock.x + f + (0 === t ? 0.2 * s : this.horizontalSpacing);
                v = c + d;
                r = q;
                this.chart.data[e.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(f, c, g, Math.max(h - h % this.lineHeight, 0));
                this.ctx.clip();
                if ("line" === e.chartType || "stepLine" === e.chartType || "spline" ===
                    e.chartType) this.ctx.strokeStyle = e.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(q - 0.1 * this.lineHeight, v + this.lineHeight / 2), this.ctx.lineTo(q + 0.85 * this.lineHeight, v + this.lineHeight / 2), this.ctx.stroke(), r -= 0.1 * this.lineHeight;
                P.drawMarker(q + s / 2, v + this.lineHeight / 2, this.ctx, e.markerType, e.markerSize, e.markerColor, e.markerBorderColor, e.markerBorderThickness);
                e.textBlock.x = q + l + s;
                if ("line" === e.chartType || "stepLine" === e.chartType || "spline" === e.chartType) e.textBlock.x +=
                    0.1 * this.lineHeight;
                e.textBlock.y = Math.round(v + this.lineHeight / 2);
                e.textBlock.render(!0);
                this.ctx.restore();
                u = 0 < t ? Math.max(u, e.textBlock.height) : e.textBlock.height;
                this.chart.data[e.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                q = G(e.id);
                this.ghostCtx.fillStyle = q;
                this.ghostCtx.beginPath();
                this.ghostCtx.fillRect(r, e.textBlock.y - this.lineHeight / 2, e.textBlock.x + e.textBlock.width - r, e.textBlock.height);
                e.x1 = this.chart._eventManager.objectMap[e.id].x1 = r;
                e.y1 = this.chart._eventManager.objectMap[e.id].y1 =
                    e.textBlock.y - this.lineHeight / 2;
                e.x2 = this.chart._eventManager.objectMap[e.id].x2 = e.textBlock.x + e.textBlock.width;
                e.y2 = this.chart._eventManager.objectMap[e.id].y2 = e.textBlock.y + e.textBlock.height - this.lineHeight / 2
            }
            d += u
        }
        0 < k.length && a.layoutManager.registerSpace(b, {
            width: this.width + 2 + 2,
            height: this.height + 5 + 5
        });
        this.bounds = {
            x1: f,
            y1: c,
            x2: f + this.width,
            y2: c + this.height
        }
    };
    U(Ca, M);
    Ca.prototype.render = function() {
        var a = this.chart.layoutManager.getFreeSpace();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(a.x1, a.y1,
            a.x2, a.y2)
    };
    U($, M);
    $.prototype.getDefaultAxisPlacement = function() {
        var a = this.type;
        if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a) return "normal";
        if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" ===
            a) return "xySwapped";
        if ("pie" === a || "doughnut" === a || "funnel" === a) return "none";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    $.getDefaultLegendMarker = function(a) {
        if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a) return "square";
        if ("line" ===
            a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a || "funnel" === a) return "circle";
        if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a) return "triangle";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    $.prototype.getDataPointAtX = function(a, d) {
        if (!this.dataPoints || 0 === this.dataPoints.length) return null;
        var b = {
                dataPoint: null,
                distance: Infinity,
                index: NaN
            },
            c = null,
            f = 0,
            g = 0,
            h = 1,
            l = Infinity,
            k = 0,
            m = 0,
            n = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (n =
            Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
        for (;;) {
            g = 0 < h ? n + f : n - f;
            if (0 <= g && g < this.dataPoints.length) {
                var c = this.dataPoints[g],
                    p = this.axisX.logarithmic ? c.x > a ? c.x / a : a / c.x : Math.abs(c.x -
                        a);
                p < b.distance && (b.dataPoint = c, b.distance = p, b.index = g);
                c = p;
                c <= l ? l = c : 0 < h ? k++ : m++;
                if (1E3 < k && 1E3 < m) break
            } else if (0 > n - f && n + f >= this.dataPoints.length) break; - 1 === h ? (f++, h = 1) : h = -1
        }
        return d || b.dataPoint.x !== a ? d && null !== b.dataPoint ? b : null : b
    };
    $.prototype.getDataPointAtXY = function(a, d, b) {
        if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || d < this.chart.plotArea.y1 || d > this.chart.plotArea.y2) return null;
        b = b || !1;
        var c = [],
            f = 0,
            g = 0,
            h = 1,
            l = !1,
            k = Infinity,
            m = 0,
            n = 0,
            p = 0;
        "none" !==
        this.chart.plotInfo.axisPlacement && (p = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({
            x: a,
            y: d
        }), this.axisX.logarithmic ? (g = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), p = 1 < g ? Math.min(Math.max((this.dataPoints.length - 1) / g * Math.log(p / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (g = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < g ? Math.min(Math.max((this.dataPoints.length - 1) / g * (p - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) :
            0));
        for (;;) {
            g = 0 < h ? p + f : p - f;
            if (0 <= g && g < this.dataPoints.length) {
                var e = this.chart._eventManager.objectMap[this.dataPointIds[g]],
                    r = this.dataPoints[g],
                    q = null;
                if (e) {
                    switch (this.type) {
                        case "column":
                        case "stackedColumn":
                        case "stackedColumn100":
                        case "bar":
                        case "stackedBar":
                        case "stackedBar100":
                        case "rangeColumn":
                        case "rangeBar":
                            a >= e.x1 && (a <= e.x2 && d >= e.y1 && d <= e.y2) && (c.push({
                                    dataPoint: r,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(e.x1 - a), Math.abs(e.x2 - a), Math.abs(e.y1 - d), Math.abs(e.y2 - d))
                                }),
                                l = !0);
                            break;
                        case "line":
                        case "stepLine":
                        case "spline":
                        case "area":
                        case "stepArea":
                        case "stackedArea":
                        case "stackedArea100":
                        case "splineArea":
                        case "scatter":
                            var s = L("markerSize", r, this) || 4,
                                v = b ? 20 : s,
                                q = Math.sqrt(Math.pow(e.x1 - a, 2) + Math.pow(e.y1 - d, 2));
                            q <= v && c.push({
                                dataPoint: r,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: q
                            });
                            g = Math.abs(e.x1 - a);
                            g <= k ? k = g : 0 < h ? m++ : n++;
                            q <= s / 2 && (l = !0);
                            break;
                        case "rangeArea":
                        case "rangeSplineArea":
                            s = L("markerSize", r, this) || 4;
                            v = b ? 20 : s;
                            q = Math.min(Math.sqrt(Math.pow(e.x1 - a, 2) + Math.pow(e.y1 -
                                d, 2)), Math.sqrt(Math.pow(e.x1 - a, 2) + Math.pow(e.y2 - d, 2)));
                            q <= v && c.push({
                                dataPoint: r,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: q
                            });
                            g = Math.abs(e.x1 - a);
                            g <= k ? k = g : 0 < h ? m++ : n++;
                            q <= s / 2 && (l = !0);
                            break;
                        case "bubble":
                            s = e.size;
                            q = Math.sqrt(Math.pow(e.x1 - a, 2) + Math.pow(e.y1 - d, 2));
                            q <= s / 2 && (c.push({
                                dataPoint: r,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: q
                            }), l = !0);
                            break;
                        case "pie":
                        case "doughnut":
                            s = e.center;
                            v = "doughnut" === this.type ? e.percentInnerRadius * e.radius : 0;
                            q = Math.sqrt(Math.pow(s.x - a, 2) + Math.pow(s.y - d, 2));
                            q < e.radius &&
                                q > v && (q = Math.atan2(d - s.y, a - s.x), 0 > q && (q += 2 * Math.PI), q = Number(((180 * (q / Math.PI) % 360 + 360) % 360).toFixed(12)), s = Number(((180 * (e.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), v = Number(((180 * (e.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === v && 1 < e.endAngle && (v = 360), s >= v && 0 !== r.y && (v += 360, q < s && (q += 360)), q > s && q < v && (c.push({
                                    dataPoint: r,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: 0
                                }), l = !0));
                            break;
                        case "candlestick":
                            if (a >= e.x1 - e.borderThickness / 2 && a <= e.x2 + e.borderThickness / 2 && d >= e.y2 - e.borderThickness / 2 && d <=
                                e.y3 + e.borderThickness / 2 || Math.abs(e.x2 - a + e.x1 - a) < e.borderThickness && d >= e.y1 && d <= e.y4) c.push({
                                dataPoint: r,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: Math.min(Math.abs(e.x1 - a), Math.abs(e.x2 - a), Math.abs(e.y2 - d), Math.abs(e.y3 - d))
                            }), l = !0;
                            break;
                        case "ohlc":
                            if (Math.abs(e.x2 - a + e.x1 - a) < e.borderThickness && d >= e.y2 && d <= e.y3 || a >= e.x1 && a <= (e.x2 + e.x1) / 2 && d >= e.y1 - e.borderThickness / 2 && d <= e.y1 + e.borderThickness / 2 || a >= (e.x1 + e.x2) / 2 && a <= e.x2 && d >= e.y4 - e.borderThickness / 2 && d <= e.y4 + e.borderThickness / 2) c.push({
                                dataPoint: r,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: Math.min(Math.abs(e.x1 - a), Math.abs(e.x2 - a), Math.abs(e.y2 - d), Math.abs(e.y3 - d))
                            }), l = !0
                    }
                    if (l || 1E3 < m && 1E3 < n) break
                }
            } else if (0 > p - f && p + f >= this.dataPoints.length) break; - 1 === h ? (f++, h = 1) : h = -1
        }
        a = null;
        for (d = 0; d < c.length; d++) a ? c[d].distance <= a.distance && (a = c[d]) : a = c[d];
        return a
    };
    $.prototype.getMarkerProperties = function(a, d, b, c) {
        var f = this.dataPoints;
        return {
            x: d,
            y: b,
            ctx: c,
            type: f[a].markerType ? f[a].markerType : this.markerType,
            size: f[a].markerSize ? f[a].markerSize : this.markerSize,
            color: f[a].markerColor ? f[a].markerColor : this.markerColor ? this.markerColor : f[a].color ? f[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
            borderColor: f[a].markerBorderColor ? f[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
            borderThickness: f[a].markerBorderThickness ? f[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
        }
    };
    U(B, M);
    B.prototype.createExtraLabelsForLog = function(a) {
        a = (a || 0) + 1;
        if (!(5 < a)) {
            var d = this.logLabelValues[0] ||
                this.intervalStartPosition;
            if (Math.log(this.range) / Math.log(d / this.viewportMinimum) < this.noTicks - 1) {
                for (var b = B.getNiceNumber((d - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), !0), c = Math.ceil(this.viewportMinimum / b) * b; c < d; c += b) c < this.viewportMinimum || this.logLabelValues.push(c);
                this.logLabelValues.sort(ya);
                this.createExtraLabelsForLog(a)
            }
        }
    };
    B.prototype.createLabels = function() {
        var a, d, b = 0,
            c = 0,
            f, g = 0,
            h = 0,
            c = 0,
            l = this.interval,
            k = 0,
            m, n = 0.6 * this.chart.height,
            b = !1;
        if (this.dataSeries &&
            0 < this.dataSeries.length)
            for (c = 0; c < this.dataSeries.length; c++) "dateTime" === this.dataSeries[c].xValueType && (b = !0);
        if ("axisX" === this.type && b && !this.logarithmic)
            for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), f = Ha(new Date(this.viewportMaximum), this.interval, this.intervalType), b = this.intervalStartPosition; b < f; Ha(b, l, this.intervalType)) a = b.getTime(), a = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.options,
                value: b,
                label: this.labels[b] ? this.labels[b] : null
            }) : "axisX" === this.type && this.labels[a] ? this.labels[a] : Ea(b, this.valueFormatString, this.chart._cultureInfo), a = new W(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: g,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxHeight: h,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            }), this._labels.push({
                position: b.getTime(),
                textBlock: a,
                effectiveHeight: null
            });
        else {
            f = this.viewportMaximum;
            if (this.labels) {
                a = Math.ceil(l);
                for (var l = Math.ceil(this.intervalStartPosition), p = !1, b = l; b < this.viewportMaximum; b += a)
                    if (this.labels[b]) p = !0;
                    else {
                        p = !1;
                        break
                    }
                p && (this.interval = a, this.intervalStartPosition = l)
            }
            if (this.logarithmic && !this.equidistantInterval) {
                this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog());
                for (var e = 0; e < this.logLabelValues.length; e++) b = this.logLabelValues[e], b < this.viewportMinimum || (a = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.options,
                    value: b,
                    label: this.labels[b] ? this.labels[b] : null
                }) : "axisX" === this.type && this.labels[b] ? this.labels[b] : da(b, this.valueFormatString, this.chart._cultureInfo), a = new W(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: g,
                    maxHeight: h,
                    angle: this.labelAngle,
                    text: this.prefix + a + this.suffix,
                    backgroundColor: this.labelBackgroundColor,
                    borderColor: this.labelBorderColor,
                    borderThickness: this.labelBorderThickness,
                    cornerRadius: this.labelCornerRadius,
                    horizontalAlign: "left",
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: 0
                }), this._labels.push({
                    position: b,
                    textBlock: a,
                    effectiveHeight: null
                }))
            }
            for (b = this.intervalStartPosition; b <= f; b = parseFloat((this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval) :
                    b + this.interval).toFixed(14))) a = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.options,
                value: b,
                label: this.labels[b] ? this.labels[b] : null
            }) : "axisX" === this.type && this.labels[b] ? this.labels[b] : da(b, this.valueFormatString, this.chart._cultureInfo), a = new W(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: g,
                maxHeight: h,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                horizontalAlign: "left",
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            }), this._labels.push({
                position: b,
                textBlock: a,
                effectiveHeight: null
            })
        }
        if ("bottom" === this._position || "top" === this._position) k = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length -
            2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * E[this.intervalType + "Duration"] * this.interval, g = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (h = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
        else if ("left" === this._position || "right" === this._position) k = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * E[this.intervalType +
            "Duration"] * this.interval, this.chart.panEnabled || (g = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), h = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
        for (c = 0; c < this._labels.length; c++) {
            a = this._labels[c].textBlock;
            a.maxWidth = g;
            a.maxHeight = h;
            var r = a.measureText();
            m = r.height
        }
        f = [];
        p = l = 0;
        if (this.labelAutoFit || this.options.labelAutoFit)
            if (x(this.labelAngle) || (this.labelAngle = (this.labelAngle %
                    360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
                if (g = 0.9 * k >> 0, p = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                    this.sessionVariables.labelFontSize = this.labelFontSize;
                    this.sessionVariables.labelMaxWidth = g;
                    this.sessionVariables.labelMaxHeight = h;
                    this.sessionVariables.labelAngle = this.labelAngle;
                    this.sessionVariables.labelWrap = this.labelWrap;
                    for (b = 0; b < this._labels.length; b++) {
                        a =
                            this._labels[b].textBlock;
                        for (var q, s = a.text.split(" "), c = 0; c < s.length; c++) e = s[c], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, e = this.ctx.measureText(e), e.width > p && (q = b, p = e.width)
                    }
                    b = 0;
                    for (b = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; b < this._labels.length; b++)
                        if (a = this._labels[b].textBlock, r = a.measureText(), b < this._labels.length - 1 && (e = b + 1, d = this._labels[e].textBlock, d = d.measureText()), f.push(a.height), this.sessionVariables.labelMaxHeight = Math.max.apply(Math,
                                f), Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (h - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), x(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                            if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : Math.min((c - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), s = (n - (m + a.fontSize / 2) *
                                    Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !x(this.options.labelWrap)) this.labelWrap ? x(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, p), s), this.sessionVariables.labelWrap = this.labelWrap, r.width + d.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ?
                                -25 : this.sessionVariables.labelAngle) : x(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelMaxWidth = g, r.width + d.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = s)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight =
                                h, this.sessionVariables.labelWrap = this.labelWrap);
                            else {
                                if (x(this.options.labelWrap))
                                    if (!x(this.options.labelMaxWidth)) this.options.labelMaxWidth < g ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = h);
                                    else if (!x(d))
                                    if (c = r.width + d.width >> 0, e = this.labelFontSize, p < g) c - 2 * g > l && (l = c - 2 * g, c >= 2 * g && c < 2.2 * g ? (this.sessionVariables.labelMaxWidth =
                                        g, x(this.options.labelFontSize) && 12 < e && (e = Math.floor(12 / 13 * e), a.measureText()), this.sessionVariables.labelFontSize = x(this.options.labelFontSize) ? e : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : c >= 2.2 * g && c < 2.8 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = s, this.sessionVariables.labelFontSize = e) : c >= 2.8 * g && c < 3.2 * g ? (this.sessionVariables.labelMaxWidth = Math.max(g, p), this.sessionVariables.labelWrap = !0, x(this.options.labelFontSize) && 12 < this.labelFontSize &&
                                        (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = x(this.options.labelFontSize) ? e : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : c >= 3.2 * g && c < 3.6 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = s, this.sessionVariables.labelFontSize = this.labelFontSize) : c > 3.6 * g && c < 5 * g ? (x(this.options.labelFontSize) && 12 < e && (e = Math.floor(12 / 13 * e), a.measureText()), this.sessionVariables.labelFontSize =
                                        x(this.options.labelFontSize) ? e : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = s) : c > 5 * g && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelFontSize = e, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelAngle = this.labelAngle));
                                    else if (q === b && (0 === q && p + this._labels[q + 1].textBlock.measureText().width - 2 * g > l || q === this._labels.length - 1 && p + this._labels[q -
                                        1].textBlock.measureText().width - 2 * g > l || 0 < q && q < this._labels.length - 1 && p + this._labels[q + 1].textBlock.measureText().width - 2 * g > l && p + this._labels[q - 1].textBlock.measureText().width - 2 * g > l)) l = 0 === q ? p + this._labels[q + 1].textBlock.measureText().width - 2 * g : p + this._labels[q - 1].textBlock.measureText().width - 2 * g, this.sessionVariables.labelFontSize = x(this.options.labelFontSize) ? e : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth =
                                    s;
                                else if (0 === l)
                                    for (this.sessionVariables.labelFontSize = x(this.options.labelFontSize) ? e : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, p), s), r = a.measureText(), c < this._labels.length - 1 && (e = c + 1, d = this._labels[e].textBlock, d.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, p), s), d = d.measureText(), r.width + d.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25))
                            }
                    else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : Math.min((c - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), s = 0 != this.labelAngle ? (n - (m + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : g, this.sessionVariables.labelMaxHeight = h = this.labelWrap ? (n - s * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 *
                        Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, x(this.options.labelWrap)) ? x(this.options.labelWrap) && (this.labelWrap && !x(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : s, this.sessionVariables.labelMaxHeight = h) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = s, this.sessionVariables.labelMaxHeight = c < 0.9 * k ? 0.9 * k : c, this.sessionVariables.labelWrap =
                        this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : s) : (x(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : s, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = h);
                    for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth,
                        a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                } else
                    for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = x(this.options.labelMaxWidth) ? this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = x(this.options.labelFontSize) ? this.sessionVariables.labelFontSize :
                        this.options.labelFontSize, a.angle = this.labelAngle = x(this.options.labelAngle) ? this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = x(this.options.labelWrap) ? this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
        else if ("left" === this._position || "right" === this._position)
            if (g = x(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, h = "undefined" === typeof this.options.labelWrap || this.labelWrap ?
                0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = g;
                this.sessionVariables.labelMaxHeight = h;
                this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (b = 0; b < this._labels.length; b++)(a = this._labels[b].textBlock, r = a.measureText(), b < this._labels.length - 1 && (e = b + 1, d = this._labels[e].textBlock,
                    d = d.measureText()), f.push(a.height), this.sessionVariables.labelMaxHeight = Math.max.apply(Math, f), c = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (h - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), x(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle) ? x(this.options.labelWrap) ? x(this.options.labelWrap) && (x(this.options.labelMaxWidth) ? x(d) || (k = r.height + d.height >>
                    0, k - 2 * h > p && (p = k - 2 * h, k >= 2 * h && k < 2.4 * h ? (x(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelFontSize = x(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : k >= 2.4 * h && k < 2.8 * h ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : k >= 2.8 * h && k < 3.2 * h ? (this.sessionVariables.labelMaxHeight =
                        h, this.sessionVariables.labelWrap = !0, x(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = x(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : k >= 3.2 * h && k < 3.6 * h ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize =
                        this.labelFontSize) : k > 3.6 * h && k < 10 * h ? (x(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = x(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : k > 10 * h && k < 50 * h && (x(this.options.labelFontSize) &&
                        12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = x(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth :
                    this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = h) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? g : Math.min((c - h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) /
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), h), x(this.options.labelWrap)) ? x(this.options.labelWrap) && (this.labelWrap && !x(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth > this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : g, this.sessionVariables.labelMaxHeight =
                    0 === this.labelAngle ? h : c, x(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : c, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = g) : (this.sessionVariables.labelMaxHeight = h, x(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap =
                    this.labelWrap);
                for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
            } else
                for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = x(this.options.labelMaxWidth) ?
                    this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = x(this.options.labelFontSize) ? this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = x(this.options.labelAngle) ? this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = x(this.options.labelWrap) ? this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
        for (b = 0; b < this.stripLines.length; b++) {
            var g = this.stripLines[b],
                v;
            if ("outside" === g.labelPlacement) {
                h = this.sessionVariables.labelMaxWidth;
                if ("bottom" === this._position || "top" === this._position) v = "undefined" === typeof g.options.labelWrap ? this.sessionVariables.labelMaxHeight : g.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
                if ("left" === this._position || "right" === this._position) v = "undefined" === typeof g.options.labelWrap ? this.sessionVariables.labelMaxHeight : g.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
                d = x(g.options.labelBackgroundColor) ? "#EEEEEE" :
                    g.options.labelBackgroundColor
            } else h = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, v = "undefined" === typeof g.options.labelWrap || g.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, d = x(g.options.labelBackgroundColor) ? x(g.startValue) && 0 !== g.startValue ? u ? "transparent" : null : "#EEEEEE" : g.options.labelBackgroundColor;
            a = new W(this.ctx, {
                x: 0,
                y: 0,
                backgroundColor: d,
                borderColor: g.labelBorderColor,
                borderThickness: g.labelBorderThickness,
                cornerRadius: g.labelCornerRadius,
                maxWidth: g.options.labelMaxWidth ? g.options.labelMaxWidth : h,
                maxHeight: v,
                angle: this.labelAngle,
                text: g.labelFormatter ? g.labelFormatter({
                    chart: this.chart,
                    axis: this,
                    stripLine: g
                }) : g.label,
                horizontalAlign: "left",
                fontSize: "outside" === g.labelPlacement ? g.options.labelFontSize ? g.options.labelFontSize : this.labelFontSize : g.labelFontSize,
                fontFamily: "outside" === g.labelPlacement ? g.options.labelFontFamily ? g.options.labelFontFamily : this.labelFontFamily : g.labelFontFamily,
                fontWeight: "outside" === g.labelPlacement ? g.options.fontWeight ? g.options.fontWeight : this.fontWeight : g.fontWeight,
                fontColor: g.options.labelFontColor || g.color,
                fontStyle: "outside" === g.labelPlacement ? g.options.fontStyle ? g.options.fontStyle : this.fontWeight : g.fontStyle,
                textBaseline: "middle"
            });
            this._stripLineLabels.push({
                position: g.value,
                textBlock: a,
                effectiveHeight: null,
                stripLine: g
            })
        }
    };
    B.prototype.createLabelsAndCalculateWidth = function() {
        var a = 0,
            d = 0;
        this._labels = [];
        this._stripLineLabels = [];
        if ("left" === this._position || "right" === this._position) {
            this.createLabels();
            for (d = 0; d < this._labels.length; d++) {
                var b = this._labels[d].textBlock,
                    c = b.measureText(),
                    f = 0,
                    f = 0 === this.labelAngle ? c.width : c.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                a < f && (a = f);
                this._labels[d].effectiveWidth = f
            }
            for (d = 0; d < this._stripLineLabels.length; d++) "outside" === this._stripLineLabels[d].stripLine.labelPlacement && (this._stripLineLabels[d].stripLine.value >
                this.viewportMinimum && this._stripLineLabels[d].stripLine.value < this.viewportMaximum) && (b = this._stripLineLabels[d].textBlock, c = b.measureText(), f = 0 === this.labelAngle ? c.width : c.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < f && (a = f), this._stripLineLabels[d].effectiveWidth = f)
        }
        return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + this.tickLength + 5
    };
    B.prototype.createLabelsAndCalculateHeight = function() {
        var a = 0;
        this._labels = [];
        this._stripLineLabels = [];
        var d, b = 0;
        this.createLabels();
        if ("bottom" === this._position || "top" === this._position) {
            for (b = 0; b < this._labels.length; b++) {
                d = this._labels[b].textBlock;
                var c = d.measureText(),
                    f = 0,
                    f = 0 === this.labelAngle ? c.height : c.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < f && (a = f);
                this._labels[b].effectiveHeight = f
            }
            for (b = 0; b < this._stripLineLabels.length; b++) "outside" === this._stripLineLabels[b].stripLine.labelPlacement &&
                (d = this._stripLineLabels[b].textBlock, c = d.measureText(), f = 0 === this.labelAngle ? c.height : c.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < f && (a = f), this._stripLineLabels[b].effectiveHeight = f)
        }
        return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + this.tickLength + 5
    };
    B.setLayoutAndRender = function(a, d, b, c, f, g) {
        var h, l, k, m, n = a[0] ? a[0].chart : d[0].chart,
            p = n.ctx;
        if (a && 0 < a.length)
            for (var e = 0; e < a.length; e++) a[e] && a[e].calculateAxisParameters();
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].calculateAxisParameters();
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e].calculateAxisParameters();
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e].calculateAxisParameters();
        var r = 0,
            q = 0,
            s = 0,
            v = 0,
            w = 0,
            u = 0,
            t = 0,
            z, A, B = l = 0,
            E, F, G, J;
        E = F = G = J = !1;
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e] && a[e].title && (a[e]._titleTextBlock = new W(a[e].ctx, {
                text: a[e].title,
                horizontalAlign: "center",
                fontSize: a[e].titleFontSize,
                fontFamily: a[e].titleFontFamily,
                fontWeight: a[e].titleFontWeight,
                fontColor: a[e].titleFontColor,
                fontStyle: a[e].titleFontStyle,
                borderColor: a[e].titleBorderColor,
                borderThickness: a[e].titleBorderThickness,
                backgroundColor: a[e].titleBackgroundColor,
                cornerRadius: a[e].titleCornerRadius,
                textBaseline: "top"
            }));
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e] && d[e].title && (d[e]._titleTextBlock = new W(d[e].ctx, {
                text: d[e].title,
                horizontalAlign: "center",
                fontSize: d[e].titleFontSize,
                fontFamily: d[e].titleFontFamily,
                fontWeight: d[e].titleFontWeight,
                fontColor: d[e].titleFontColor,
                fontStyle: d[e].titleFontStyle,
                borderColor: d[e].titleBorderColor,
                borderThickness: d[e].titleBorderThickness,
                backgroundColor: d[e].titleBackgroundColor,
                cornerRadius: d[e].titleCornerRadius,
                textBaseline: "top"
            }));
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e] && b[e].title && (b[e]._titleTextBlock = new W(b[e].ctx, {
                text: b[e].title,
                horizontalAlign: "center",
                fontSize: b[e].titleFontSize,
                fontFamily: b[e].titleFontFamily,
                fontWeight: b[e].titleFontWeight,
                fontColor: b[e].titleFontColor,
                fontStyle: b[e].titleFontStyle,
                borderColor: b[e].titleBorderColor,
                borderThickness: b[e].titleBorderThickness,
                backgroundColor: b[e].titleBackgroundColor,
                cornerRadius: b[e].titleCornerRadius,
                textBaseline: "top"
            }));
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e] && c[e].title && (c[e]._titleTextBlock = new W(c[e].ctx, {
                text: c[e].title,
                horizontalAlign: "center",
                fontSize: c[e].titleFontSize,
                fontFamily: c[e].titleFontFamily,
                fontWeight: c[e].titleFontWeight,
                fontColor: c[e].titleFontColor,
                fontStyle: c[e].titleFontStyle,
                borderColor: c[e].titleBorderColor,
                borderThickness: c[e].titleBorderThickness,
                backgroundColor: c[e].titleBackgroundColor,
                cornerRadius: c[e].titleCornerRadius,
                textBaseline: "top"
            }));
        if ("normal" === f) {
            var v = [],
                w = [],
                u = [],
                t = [],
                H = [],
                I = [],
                M = [],
                K = [];
            if (a && 0 < a.length)
                for (e = 0; e < a.length; e++) a[e] && a[e].title && (a[e]._titleTextBlock.maxWidth = a[e].titleMaxWidth || g.width, a[e]._titleTextBlock.maxHeight = a[e].titleWrap ? 0.8 * g.height : 1.5 * a[e].titleFontSize, a[e]._titleTextBlock.angle = 0);
            if (d && 0 < d.length)
                for (e = 0; e < d[e].length; e++) d[e] && d[e].title && (d[e]._titleTextBlock.maxWidth = d[e].titleMaxWidth || g.width, d[e]._titleTextBlock.maxHeight = d[e].titleWrap ?
                    0.8 * g.height : 1.5 * d[e].titleFontSize, d[e]._titleTextBlock.angle = 0);
            if (b && 0 < b.length)
                for (e = 0; e < b.length; e++) b[e] && b[e].title && (b[e]._titleTextBlock.maxWidth = b[e].titleMaxWidth || g.height, b[e]._titleTextBlock.maxHeight = b[e].titleWrap ? 0.8 * g.width : 1.5 * b[e].titleFontSize, b[e]._titleTextBlock.angle = -90);
            if (c && 0 < c.length)
                for (e = 0; e < c.length; e++) c[e] && c[e].title && (c[e]._titleTextBlock.maxWidth = c[e].titleMaxWidth || g.height, c[e]._titleTextBlock.maxHeight = c[e].titleWrap ? 0.8 * g.width : 1.5 * c[e].titleFontSize, c[e]._titleTextBlock.angle =
                    90);
            for (; 4 > r;) {
                var N = 0,
                    Q = 0,
                    P = 0,
                    O = 0,
                    L = f = 0,
                    C = 0,
                    S = 0,
                    X = 0,
                    V = 0,
                    U = 0,
                    T = 0;
                if (b && 0 < b.length)
                    for (u = [], e = U = 0; e < b.length; e++) u.push(Math.ceil(b[e] ? b[e].createLabelsAndCalculateWidth() : 0)), U += u[e], C += b[e] ? b[e].margin : 0;
                else u.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                M.push(u);
                if (c && 0 < c.length)
                    for (t = [], e = T = 0; e < c.length; e++) t.push(Math.ceil(c[e] ? c[e].createLabelsAndCalculateWidth() : 0)), T += t[e], S += c[e] ? c[e].margin : 0;
                else t.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                K.push(t);
                h = Math.round(g.x1 + U + C);
                k = Math.round(g.x2 - T - S > n.width - 10 ? n.width - 10 : g.x2 - T - S);
                if (a && 0 < a.length)
                    for (v = [], e = X = 0; e < a.length; e++) a[e] && (a[e].lineCoordinates = {}), a[e].lineCoordinates.width = Math.abs(k - h), a[e].title && (a[e]._titleTextBlock.maxWidth = 0 < a[e].titleMaxWidth && a[e].titleMaxWidth < a[e].lineCoordinates.width ? a[e].titleMaxWidth : a[e].lineCoordinates.width), v.push(Math.ceil(a[e] ? a[e].createLabelsAndCalculateHeight() : 0)), X += v[e], f += a[e] ? a[e].margin : 0;
                else v.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() :
                    0));
                H.push(v);
                if (d && 0 < d.length)
                    for (w = [], e = V = 0; e < d.length; e++) d[e] && (d[e].lineCoordinates = {}), d[e].lineCoordinates.width = Math.abs(k - h), d[e].title && (d[e]._titleTextBlock.maxWidth = 0 < d[e].titleMaxWidth && d[e].titleMaxWidth < d[e].lineCoordinates.width ? d[e].titleMaxWidth : d[e].lineCoordinates.width), w.push(Math.ceil(d[e] ? d[e].createLabelsAndCalculateHeight() : 0)), V += w[e], L += d[e] ? d[e].margin : 0;
                else w.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() : 0));
                I.push(w);
                if (a && 0 < a.length)
                    for (e = 0; e < a.length; e++) a[e] &&
                        (a[e].lineCoordinates.x1 = h, a[e].lineCoordinates.x2 = Math.round(g.x2 - T - S > n.width - 10 ? n.width - 10 : g.x2 - T - S), a[e]._labels && 1 < a[e]._labels.length && (l = m = 0, m = a[e]._labels[1], l = "dateTime" === a[e].chart.plotInfo.axisXValueType ? a[e]._labels[a[e]._labels.length - 2] : a[e]._labels[a[e]._labels.length - 1], q = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), s = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) +
                            (l.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle))), a[e] && (a[e].labelAutoFit && !x(z) && !x(A)) && (l = 0, 0 < a[e].labelAngle ? A + s > k && (l += 0 < a[e].labelAngle ? A + s - k - T : 0) : 0 > a[e].labelAngle ? z - q < h && z - q < a[e].viewportMinimum && (B = h - (C + a[e].tickLength + u + z - q + a[e].labelFontSize / 2)) : 0 === a[e].labelAngle && (A + s > k && (l = A + s / 2 - k - T), z - q < h && z - q < a[e].viewportMinimum && (B = h - C - a[e].tickLength - u - z + q / 2)), a[e].viewportMaximum === a[e].maximum && a[e].viewportMinimum === a[e].minimum && 0 < a[e].labelAngle &&
                            0 < l ? k -= l : a[e].viewportMaximum === a[e].maximum && a[e].viewportMinimum === a[e].minimum && 0 > a[e].labelAngle && 0 < B ? h += B : a[e].viewportMaximum === a[e].maximum && a[e].viewportMinimum === a[e].minimum && 0 === a[e].labelAngle && (0 < B && (h += B), 0 < l && (k -= l))), n.panEnabled ? X = n.sessionVariables.axisX.height : n.sessionVariables.axisX.height = X, l = Math.round(g.y2 - X - f + N), m = Math.round(g.y2), a[e].lineCoordinates.x2 = k, a[e].lineCoordinates.width = k - h, a[e].lineCoordinates.y1 = l, a[e].lineCoordinates.y2 = l, a[e].bounds = {
                            x1: h,
                            y1: l,
                            x2: k,
                            y2: m - (X +
                                f - v[e] - N),
                            width: k - h,
                            height: m - l
                        }), N += v[e] + a[e].margin;
                if (d && 0 < d.length)
                    for (e = 0; e < d.length; e++) d[e].lineCoordinates.x1 = Math.round(g.x1 + U + C), d[e].lineCoordinates.x2 = Math.round(g.x2 - T - S > n.width - 10 ? n.width - 10 : g.x2 - T - S), d[e].lineCoordinates.width = Math.abs(k - h), d[e]._labels && 1 < d[e]._labels.length && (m = d[e]._labels[1], l = "dateTime" === d[e].chart.plotInfo.axisXValueType ? d[e]._labels[d[e]._labels.length - 2] : d[e]._labels[d[e]._labels.length - 1], q = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) +
                        (m.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), s = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle))), n.panEnabled ? V = n.sessionVariables.axisX2.height : n.sessionVariables.axisX2.height = V, l = Math.round(g.y1), m = Math.round(g.y2 + d[e].margin), d[e].lineCoordinates.y1 = l + V + L - Q, d[e].lineCoordinates.y2 = l, d[e].bounds = {
                        x1: h,
                        y1: l + (V + L - w[e] - Q),
                        x2: k,
                        y2: m,
                        width: k -
                            h,
                        height: m - l
                    }, Q += w[e] + d[e].margin;
                if (b && 0 < b.length)
                    for (e = 0; e < b.length; e++) C = 10, b[e] && (h = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), C = b[e]._labels && 0 < b[e]._labels.length ? b[e]._labels[b[e]._labels.length - 1].textBlock.height / 2 : 10, l = Math.round(g.y1 + V + L < Math.max(C, 10) ? Math.max(C, 10) : g.y1 + V + L), k = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), C = 0 < a.length ? 0 : b[e]._labels[0].textBlock.height / 2, m = Math.round(g.y2 - X - f - C), b[e].lineCoordinates = {
                        x1: k - P,
                        y1: l,
                        x2: k - P,
                        y2: m,
                        height: Math.abs(m -
                            l)
                    }, b[e].bounds = {
                        x1: h - (u[e] + P),
                        y1: l,
                        x2: k,
                        y2: m,
                        width: k - h,
                        height: m - l
                    }, b[e].title && (b[e]._titleTextBlock.maxWidth = 0 < b[e].titleMaxWidth && b[e].titleMaxWidth < b[e].lineCoordinates.height ? b[e].titleMaxWidth : b[e].lineCoordinates.height), P += u[e] + b[e].margin);
                if (c && 0 < c.length)
                    for (e = 0; e < c.length; e++) c[e] && (h = Math.round(a[0] ? a[0].lineCoordinates.x2 : d[0].lineCoordinates.x2), k = Math.round(h), C = c[e]._labels && 0 < c[e]._labels.length ? c[e]._labels[c[e]._labels.length - 1].textBlock.height / 2 : 0, l = Math.round(g.y1 + V + L < Math.max(C,
                        10) ? Math.max(C, 10) : g.y1 + V + L), C = 0 < a.length ? 0 : c[e]._labels[0].textBlock.height / 2, m = Math.round(g.y2 - (X + f + C)), c[e].lineCoordinates = {
                        x1: h + O,
                        y1: l,
                        x2: h + O,
                        y2: m,
                        height: Math.abs(m - l)
                    }, c[e].bounds = {
                        x1: h,
                        y1: l,
                        x2: k + (t[e] + O),
                        y2: m,
                        width: k - h,
                        height: m - l
                    }, c[e].title && (c[e]._titleTextBlock.maxWidth = 0 < c[e].titleMaxWidth && c[e].titleMaxWidth < c[e].lineCoordinates.height ? c[e].titleMaxWidth : c[e].lineCoordinates.height), O += t[e] + c[e].margin);
                if (a && 0 < a.length)
                    for (e = 0; e < a.length; e++) a[e] && (a[e].calculateValueToPixelConversionParameters(),
                        a[e]._labels && 1 < a[e]._labels.length && (z = (a[e].logarithmic ? Math.log(a[e]._labels[1].position / a[e].viewportMinimum) / a[e].conversionParameters.lnLogarithmBase : a[e]._labels[1].position - a[e].viewportMinimum) * Math.abs(a[e].conversionParameters.pixelPerUnit) + a[e].lineCoordinates.x1, A = "dateTime" === a[e].chart.plotInfo.axisXValueType ? (a[e].logarithmic ? Math.log(a[e]._labels[a[e]._labels.length - 2].position / a[e].viewportMinimum) / a[e].conversionParameters.lnLogarithmBase : a[e]._labels[a[e]._labels.length - 2].position -
                            a[e].viewportMinimum) * Math.abs(a[e].conversionParameters.pixelPerUnit) + a[e].lineCoordinates.x1 : (a[e].logarithmic ? Math.log(a[e]._labels[a[e]._labels.length - 1].position / a[e].viewportMinimum) / a[e].conversionParameters.lnLogarithmBase : a[e]._labels[a[e]._labels.length - 1].position - a[e].viewportMinimum) * Math.abs(a[e].conversionParameters.pixelPerUnit) + a[e].lineCoordinates.x1));
                if (d && 0 < d.length)
                    for (e = 0; e < d.length; e++) d[e].calculateValueToPixelConversionParameters(), d[e]._labels && 1 < d[e]._labels.length && (z =
                        (d[e].logarithmic ? Math.log(d[e]._labels[1].position / d[e].viewportMinimum) / d[e].conversionParameters.lnLogarithmBase : d[e]._labels[1].position - d[e].viewportMinimum) * Math.abs(d[e].conversionParameters.pixelPerUnit) + d[e].lineCoordinates.x1, A = "dateTime" === d[e].chart.plotInfo.axisXValueType ? (d[e].logarithmic ? Math.log(d[e]._labels[d[e]._labels.length - 2].position / d[e].viewportMinimum) / d[e].conversionParameters.lnLogarithmBase : d[e]._labels[d[e]._labels.length - 2].position - d[e].viewportMinimum) * Math.abs(d[e].conversionParameters.pixelPerUnit) +
                        d[e].lineCoordinates.x1 : (d[e].logarithmic ? Math.log(d[e]._labels[d[e]._labels.length - 1].position / d[e].viewportMinimum) / d[e].conversionParameters.lnLogarithmBase : d[e]._labels[d[e]._labels.length - 1].position - d[e].viewportMinimum) * Math.abs(d[e].conversionParameters.pixelPerUnit) + d[e].lineCoordinates.x1);
                if (b && 0 < b.length)
                    for (e = 0; e < b.length; e++) b[e].calculateValueToPixelConversionParameters();
                if (c && 0 < c.length)
                    for (e = 0; e < c.length; e++) c[e].calculateValueToPixelConversionParameters();
                if (0 < r) {
                    if (a && 0 < a.length)
                        for (e =
                            0; e < a.length; e++) E = H[r - 1][e] === H[r][e] ? !0 : !1;
                    else E = !0;
                    if (d && 0 < d.length)
                        for (e = 0; e < d.length; e++) F = I[r - 1][e] === I[r][e] ? !0 : !1;
                    else F = !0;
                    if (b && 0 < b.length)
                        for (e = 0; e < b.length; e++) G = M[r - 1][e] === M[r][e] ? !0 : !1;
                    else G = !0;
                    if (c && 0 < c.length)
                        for (e = 0; e < c.length; e++) J = K[r - 1][e] === K[r][e] ? !0 : !1;
                    else J = !0
                }
                if (E && F && G && J) break;
                r++
            }
            p.save();
            p.beginPath();
            a[0] && p.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
            d[0] && p.rect(5, d[d.length - 1].bounds.y1, d[0].chart.width - 10, d[0].bounds.height);
            p.clip();
            if (a && 0 <
                a.length)
                for (e = 0; e < a.length; e++) a[e].renderLabelsTicksAndTitle();
            if (d && 0 < d.length)
                for (e = 0; e < d.length; e++) d[e].renderLabelsTicksAndTitle();
            p.restore();
            if (b && 0 < b.length)
                for (e = 0; e < b.length; e++) b[e].renderLabelsTicksAndTitle();
            if (c && 0 < c.length)
                for (e = 0; e < c.length; e++) c[e].renderLabelsTicksAndTitle()
        } else {
            z = [];
            A = [];
            B = [];
            q = [];
            s = [];
            H = [];
            I = [];
            M = [];
            if (a && 0 < a.length)
                for (e = 0; e < a.length; e++) a[e] && a[e].title && (a[e]._titleTextBlock.maxWidth = a[e].titleMaxWidth || g.width, a[e]._titleTextBlock.maxHeight = a[e].titleWrap ?
                    0.8 * g.height : 1.5 * a[e].titleFontSize, a[e]._titleTextBlock.angle = -90);
            if (d && 0 < d.length)
                for (e = 0; e < d.length; e++) d[e] && d[e].title && (d[e]._titleTextBlock.maxWidth = d[e].titleMaxWidth || g.width, d[e]._titleTextBlock.maxHeight = d[e].titleWrap ? 0.8 * g.height : 1.5 * d[e].titleFontSize, d[e]._titleTextBlock.angle = 90);
            if (b && 0 < b.length)
                for (e = 0; e < b.length; e++) b[e] && b[e].title && (b[e]._titleTextBlock.maxWidth = b[e].titleMaxWidth || g.width, b[e]._titleTextBlock.maxHeight = b[e].titleWrap ? 0.8 * g.height : 1.5 * b[e].titleFontSize, b[e]._titleTextBlock.angle =
                    0);
            if (c && 0 < c.length)
                for (e = 0; e < c.length; e++) c[e] && c[e].title && (c[e]._titleTextBlock.maxWidth = c[e].titleMaxWidth || g.width, c[e]._titleTextBlock.maxHeight = c[e].titleWrap ? 0.8 * g.height : 1.5 * c[e].titleFontSize, c[e]._titleTextBlock.angle = 0);
            for (; 4 > r;) {
                V = X = U = O = S = C = L = f = P = K = Q = N = 0;
                if (a && 0 < a.length)
                    for (B = [], e = X = 0; e < a.length; e++) B.push(Math.ceil(a[e] ? a[e].createLabelsAndCalculateWidth() : 0)), X += B[e], f += a[e] ? a[e].margin : 0;
                else B.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                I.push(B);
                if (d && 0 < d.length)
                    for (q = [], e = V = 0; e < d.length; e++) q.push(Math.ceil(d[e] ? d[e].createLabelsAndCalculateWidth() : 0)), V += q[e], L += d[e] ? d[e].margin : 0;
                else q.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() : 0));
                M.push(q);
                if (b && 0 < b.length)
                    for (e = 0; e < b.length; e++) b[e].lineCoordinates = {}, h = Math.round(g.x1 + X + f), k = Math.round(g.x2 - V - L > n.width - 10 ? n.width - 10 : g.x2 - V - L), b[e].labelAutoFit && !x(v) && (0 < !a.length && (h = 0 > b[e].labelAngle ? Math.max(h, v) : 0 === b[e].labelAngle ? Math.max(h, v / 2) : h), 0 < !d.length && (k = 0 < b[e].labelAngle ? k - w / 2 : 0 === b[e].labelAngle ?
                        k - w / 2 : k)), b[e].lineCoordinates.x1 = h, b[e].lineCoordinates.x2 = k, b[e].lineCoordinates.width = Math.abs(k - h), b[e].title && (b[e]._titleTextBlock.maxWidth = 0 < b[e].titleMaxWidth && b[e].titleMaxWidth < b[e].lineCoordinates.width ? b[e].titleMaxWidth : b[e].lineCoordinates.width);
                if (c && 0 < c.length)
                    for (e = 0; e < c.length; e++) c[e].lineCoordinates = {}, h = Math.round(g.x1 + X + f), k = Math.round(g.x2 - V - L > c[e].chart.width - 10 ? c[e].chart.width - 10 : g.x2 - V - L), c[e] && c[e].labelAutoFit && !x(u) && (0 < !a.length && (h = 0 < c[e].labelAngle ? Math.max(h, u) :
                        0 === c[e].labelAngle ? Math.max(h, u / 2) : h), 0 < !d.length && (k -= t / 2)), c[e].lineCoordinates.x1 = h, c[e].lineCoordinates.x2 = k, c[e].lineCoordinates.width = Math.abs(k - h), c[e].title && (c[e]._titleTextBlock.maxWidth = 0 < c[e].titleMaxWidth && c[e].titleMaxWidth < c[e].lineCoordinates.width ? c[e].titleMaxWidth : c[e].lineCoordinates.width);
                if (b && 0 < b.length)
                    for (z = [], e = O = 0; e < b.length; e++) z.push(Math.ceil(b[e] ? b[e].createLabelsAndCalculateHeight() : 0)), O += z[e] + b[e].margin, C += b[e].margin;
                else z.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() :
                    0));
                s.push(z);
                if (c && 0 < c.length)
                    for (A = [], e = U = 0; e < c.length; e++) A.push(Math.ceil(c[e] ? c[e].createLabelsAndCalculateHeight() : 0)), U += A[e], S += c[e].margin;
                else A.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                H.push(A);
                if (b && 0 < b.length)
                    for (e = 0; e < b.length; e++) 0 < b[e]._labels.length && (m = b[e]._labels[0], l = b[e]._labels[b[e]._labels.length - 1], v = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)),
                        w = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)));
                if (c && 0 < c.length)
                    for (e = 0; e < c.length; e++) c[e] && 0 < c[e]._labels.length && (m = c[e]._labels[0], l = c[e]._labels[c[e]._labels.length - 1], u = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), t = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) +
                        (l.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)));
                if (n.panEnabled)
                    for (e = 0; e < b.length; e++) z[e] = n.sessionVariables.axisY.height;
                else
                    for (e = 0; e < b.length; e++) n.sessionVariables.axisY.height = z[e];
                if (b && 0 < b.length)
                    for (e = b.length - 1; 0 <= e; e--) l = Math.round(g.y2), m = Math.round(g.y2 > b[e].chart.height - 10 ? b[e].chart.height - 10 : g.y2), b[e].lineCoordinates.y1 = l - (z[e] + b[e].margin + N), b[e].lineCoordinates.y2 = l - (z[e] + b[e].margin + N), b[e].bounds = {
                        x1: h,
                        y1: l - (z[e] + N + b[e].margin),
                        x2: k,
                        y2: m - (N + b[e].margin),
                        width: k - h,
                        height: z[e]
                    }, b[e].title && (b[e]._titleTextBlock.maxWidth = 0 < b[e].titleMaxWidth && b[e].titleMaxWidth < b[e].lineCoordinates.width ? b[e].titleMaxWidth : b[e].lineCoordinates.width), N += z[e] + b[e].margin;
                if (c && 0 < c.length)
                    for (e = c.length - 1; 0 <= e; e--) c[e] && (l = Math.round(g.y1), m = Math.round(g.y1 + (A[e] + c[e].margin + Q)), c[e].lineCoordinates.y1 = m, c[e].lineCoordinates.y2 = m, c[e].bounds = {
                        x1: h,
                        y1: l + (c[e].margin + Q),
                        x2: k,
                        y2: m,
                        width: k - h,
                        height: U
                    }, c[e].title && (c[e]._titleTextBlock.maxWidth = 0 <
                        c[e].titleMaxWidth && c[e].titleMaxWidth < c[e].lineCoordinates.width ? c[e].titleMaxWidth : c[e].lineCoordinates.width), Q += A[e] + c[e].margin);
                if (a && 0 < a.length)
                    for (e = 0; e < a.length; e++) {
                        C = a[e]._labels && 0 < a[e]._labels.length ? a[e]._labels[0].textBlock.fontSize / 2 : 0;
                        h = Math.round(g.x1 + f);
                        l = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : g.y1 < Math.max(C, 10) ? Math.max(C, 10) : g.y1) : g.y1 < Math.max(C, 10) ? Math.max(C, 10) : g.y1;
                        k = Math.round(g.x1 + X + f);
                        m = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : g.y2 - O > n.height -
                            Math.max(C, 10) ? n.height - Math.max(C, 10) : g.y2 - O) : g.y2 > n.height - Math.max(C, 10) ? n.height - Math.max(C, 10) : g.y2;
                        if (b && 0 < b.length)
                            for (C = 0; C < b.length; C++) b[C] && b[C].labelAutoFit && (k = 0 > b[C].labelAngle ? Math.max(k, v) : 0 === b[C].labelAngle ? Math.max(k, v / 2) : k, h = 0 > b[C].labelAngle || 0 === b[C].labelAngle ? k - X : h);
                        if (c && 0 < c.length)
                            for (C = 0; C < c.length; C++) c[C] && c[C].labelAutoFit && (k = c[C].lineCoordinates.x1, h = k - X);
                        a[e].lineCoordinates = {
                            x1: k - K,
                            y1: l,
                            x2: k - K,
                            y2: m,
                            height: Math.abs(m - l)
                        };
                        a[e].bounds = {
                            x1: k - (B[e] + K),
                            y1: l,
                            x2: k,
                            y2: m,
                            width: k -
                                h,
                            height: m - l
                        };
                        a[e].title && (a[e]._titleTextBlock.maxWidth = 0 < a[e].titleMaxWidth && a[e].titleMaxWidth < a[e].lineCoordinates.height ? a[e].titleMaxWidth : a[e].lineCoordinates.height);
                        a[e].calculateValueToPixelConversionParameters();
                        K += B[e] + a[e].margin
                    }
                if (d && 0 < d.length)
                    for (e = 0; e < d.length; e++) {
                        C = d[e]._labels && 0 < d[e]._labels.length ? d[e]._labels[0].textBlock.fontSize / 2 : 0;
                        h = Math.round(g.x1 - f);
                        l = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : g.y1 < Math.max(C, 10) ? Math.max(C, 10) : g.y1) : g.y1 < Math.max(C, 10) ? Math.max(C,
                            10) : g.y1;
                        k = Math.round(g.x2 - V - L);
                        m = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : g.y2 - O > n.height - Math.max(C, 10) ? n.height - Math.max(C, 10) : g.y2 - O) : g.y2 > n.height - Math.max(C, 10) ? n.height - Math.max(C, 10) : g.y2;
                        if (b && 0 < b.length)
                            for (C = 0; C < b.length; C++) b[C] && b[C].labelAutoFit && (k = 0 > b[C].labelAngle ? Math.max(k, v) : 0 === b[e].labelAngle ? Math.max(k, v / 2) : k, h = 0 > b[C].labelAngle || 0 === b[C].labelAngle ? k - V : h);
                        if (c && 0 < c.length)
                            for (C = 0; C < c.length; C++) c[C] && c[C].labelAutoFit && (k = c[C].lineCoordinates.x2, h = k - V);
                        d[e].lineCoordinates = {
                            x1: k + P,
                            y1: l,
                            x2: k + P,
                            y2: m,
                            height: Math.abs(m - l)
                        };
                        d[e].bounds = {
                            x1: h,
                            y1: l,
                            x2: k,
                            y2: m,
                            width: k - h,
                            height: m - l
                        };
                        d[e].title && (d[e]._titleTextBlock.maxWidth = 0 < d[e].titleMaxWidth && d[e].titleMaxWidth < d[e].lineCoordinates.height ? d[e].titleMaxWidth : d[e].lineCoordinates.height);
                        d[e].calculateValueToPixelConversionParameters();
                        P += q[e] + d[e].margin
                    }
                if (b && 0 < b.length)
                    for (e = 0; e < b.length; e++) b[e].calculateValueToPixelConversionParameters();
                if (c && 0 < c.length)
                    for (e = 0; e < c.length; e++) c[e].calculateValueToPixelConversionParameters();
                if (0 < r) {
                    if (a && 0 < a.length)
                        for (e = 0; e < a.length; e++) E = I[r - 1][e] === I[r][e] ? !0 : !1;
                    else E = !0;
                    if (d && 0 < d.length)
                        for (e = 0; e < d.length; e++) F = M[r - 1][e] === M[r][e] ? !0 : !1;
                    else F = !0;
                    if (b && 0 < b.length)
                        for (e = 0; e < b.length; e++) G = s[r - 1][e] === s[r][e] ? !0 : !1;
                    else G = !0;
                    if (c && 0 < c.length)
                        for (e = 0; e < c.length; e++) J = H[r - 1][e] === H[r][e] ? !0 : !1;
                    else J = !0
                }
                if (E && F && G && J) break;
                r++
            }
            if (b && 0 < b.length)
                for (e = 0; e < b.length; e++) b[e].renderLabelsTicksAndTitle();
            if (c && 0 < c.length)
                for (e = 0; e < c.length; e++) c[e].renderLabelsTicksAndTitle();
            if (a && 0 < a.length)
                for (e =
                    0; e < a.length; e++) a[e].renderLabelsTicksAndTitle();
            if (d && 0 < d.length)
                for (e = 0; e < d.length; e++) d[e].renderLabelsTicksAndTitle()
        }
        n.preparePlotArea();
        g = n.plotArea;
        p.save();
        p.beginPath();
        p.rect(g.x1, g.y1, Math.abs(g.x2 - g.x1), Math.abs(g.y2 - g.y1));
        p.clip();
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e].renderStripLinesOfThicknessType("value");
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].renderStripLinesOfThicknessType("value");
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e].renderStripLinesOfThicknessType("value");
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e].renderStripLinesOfThicknessType("value");
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e].renderInterlacedColors();
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].renderInterlacedColors();
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e].renderInterlacedColors();
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e].renderInterlacedColors();
        p.restore();
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e].renderGrid();
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].renderGrid();
        if (b && 0 <
            b.length)
            for (e = 0; e < b.length; e++) b[e].renderGrid();
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e].renderGrid();
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e].renderAxisLine();
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].renderAxisLine();
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e].renderAxisLine();
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e].renderAxisLine();
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e].renderStripLinesOfThicknessType("pixel");
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].renderStripLinesOfThicknessType("pixel");
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e].renderStripLinesOfThicknessType("pixel");
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e].renderStripLinesOfThicknessType("pixel")
    };
    B.prototype.renderLabelsTicksAndTitle = function() {
        var a = !1,
            d = 0,
            b = 0,
            c = 1,
            f = 0;
        0 !== this.labelAngle && 360 !== this.labelAngle && (c = 1.2);
        if ("undefined" === typeof this.options.interval) {
            if ("bottom" === this._position || "top" === this._position)
                if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                    for (var d = [], c = 0 !== this.labelAngle &&
                            360 !== this.labelAngle ? 1 : 1.2, g, h = this.viewportMaximum, l = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                        n = this._labels[k];
                        if (n.position < this.viewportMinimum) break;
                        n.position > this.viewportMaximum || !(k === this._labels.length - 1 || g < Math.log(h / n.position) * l / c) || (d.push(n), h = n.position, g = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                    }
                    this._labels = d
                } else {
                    for (k = 0; k < this._labels.length; k++) n =
                        this._labels[k], n.position < this.viewportMinimum || (n = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), d += n);
                    d > this.lineCoordinates.width * c && this.labelAutoFit && (a = !0)
                }
            if ("left" === this._position || "right" === this._position)
                if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                    for (var d = [], m, h = this.viewportMaximum, l = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                        n = this._labels[k];
                        if (n.position < this.viewportMinimum) break;
                        n.position > this.viewportMaximum || !(k === this._labels.length - 1 || m < Math.log(h / n.position) * l) || (d.push(n), h = n.position, m = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                    }
                    this._labels = d
                } else {
                    for (k = 0; k < this._labels.length; k++) n = this._labels[k], n.position < this.viewportMinimum || (n = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI /
                        180 * this.labelAngle)), b += n);
                    b > this.lineCoordinates.height * c && this.labelAutoFit && (a = !0)
                }
        }
        if ("bottom" === this._position) {
            for (var n, k = 0; k < this._labels.length; k++) n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(n.position), a && 0 !== f++ % 2 && this.labelAutoFit || (this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c,
                b.y << 0), this.ctx.lineTo(c, b.y + this.tickLength << 0), this.ctx.stroke()), 0 === n.textBlock.angle ? (b.x -= n.textBlock.width / 2, b.y += this.tickLength + n.textBlock.fontSize / 2) : (b.x -= 0 > this.labelAngle ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + Math.abs(0 > this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), n.textBlock.x = b.x, n.textBlock.y = b.y, n.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 +
                this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        } else if ("top" === this._position) {
            for (k = 0; k < this._labels.length; k++) n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(n.position), a && 0 !== f++ % 2 && this.labelAutoFit || (this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle =
                this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, b.y << 0), this.ctx.lineTo(c, b.y - this.tickLength << 0), this.ctx.stroke()), 0 === n.textBlock.angle ? (b.x -= n.textBlock.width / 2, b.y -= this.tickLength + n.textBlock.height / 2) : (b.x += (n.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), b.y -= this.tickLength + (n.textBlock.height / 2 * Math.cos(Math.PI /
                180 * this.labelAngle) + (0 < this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0))), n.textBlock.x = b.x, n.textBlock.y = b.y, n.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        } else if ("left" === this._position) {
            for (k = 0; k < this._labels.length; k++) n =
                this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(n.position), a && 0 !== f++ % 2 && this.labelAutoFit || (this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, c), this.ctx.lineTo(b.x - this.tickLength << 0, c), this.ctx.stroke()), 0 === this.labelAngle ? (n.textBlock.y = b.y, n.textBlock.x = b.x - n.textBlock.width * Math.cos(Math.PI /
                    180 * this.labelAngle) - this.tickLength - 5) : (n.textBlock.y = b.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), n.textBlock.x = 0 < this.labelAngle ? b.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : b.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength), n.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + 1, this._titleTextBlock.y =
                this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        } else if ("right" === this._position) {
            for (k = 0; k < this._labels.length; k++) n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(n.position), a && 0 !== f++ % 2 && this.labelAutoFit || (this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth %
                2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, c), this.ctx.lineTo(b.x + this.tickLength << 0, c), this.ctx.stroke()), 0 === this.labelAngle ? (n.textBlock.y = b.y, n.textBlock.x = b.x + this.tickLength + 5) : (n.textBlock.y = 0 > this.labelAngle ? b.y : b.y - (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), n.textBlock.x = 0 < this.labelAngle ? b.x + (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : b.x + this.tickLength + 5), n.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        }
    };
    B.prototype.renderInterlacedColors = function() {
        var a = this.chart.plotArea.ctx,
            d, b, c = this.chart.plotArea,
            f = 0;
        d = !0;
        if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor,
                f = 0; f < this._labels.length; f++) d ? (d = this.getPixelCoordinatesOnAxis(this._labels[f].position), b = f + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[f + 1].position), a.fillRect(Math.min(b.x, d.x), c.y1, Math.abs(b.x - d.x), Math.abs(c.y1 - c.y2)), d = !1) : d = !0;
        else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, f = 0; f < this._labels.length; f++) d ? (b = this.getPixelCoordinatesOnAxis(this._labels[f].position),
                d = f + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[f + 1].position), a.fillRect(c.x1, Math.min(b.y, d.y), Math.abs(c.x1 - c.x2), Math.abs(d.y - b.y)), d = !1) : d = !0;
        a.beginPath()
    };
    B.prototype.renderStripLinesOfThicknessType = function(a) {
        if (this.stripLines && 0 < this.stripLines.length && a) {
            for (var d = this, b, c = 0, f = 0, g = !1, h = !1, l = [], k = [], h = !1, c = 0; c < this.stripLines.length; c++) {
                var m = this.stripLines[c];
                m._thicknessType === a && ("pixel" === a && (m.value < this.viewportMinimum ||
                    m.value > this.viewportMaximum || x(m.value) || isNaN(this.range)) || l.push(m))
            }
            for (c = 0; c < this._stripLineLabels.length; c++)
                if (m = this.stripLines[c], b = this._stripLineLabels[c], !(b.position < this.viewportMinimum || b.position > this.viewportMaximum || isNaN(this.range))) {
                    a = this.getPixelCoordinatesOnAxis(b.position);
                    if ("outside" === b.stripLine.labelPlacement)
                        if (m && (this.ctx.strokeStyle = m.color, "pixel" === m._thicknessType && (this.ctx.lineWidth = m.thickness)), "bottom" === this._position) {
                            var n = 1 === this.ctx.lineWidth % 2 ? (a.x <<
                                0) + 0.5 : a.x << 0;
                            this.ctx.beginPath();
                            this.ctx.moveTo(n, a.y << 0);
                            this.ctx.lineTo(n, a.y + this.tickLength << 0);
                            this.ctx.stroke();
                            0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y += this.tickLength + b.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                        } else "top" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(n,
                                a.y << 0), this.ctx.lineTo(n, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y -= this.tickLength + b.textBlock.height) : (a.x += (b.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (b.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" ===
                            this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x - this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (b.textBlock.height -
                                b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x + this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI /
                                180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
                    else b.textBlock.angle = -90, "bottom" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? x(m.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, x(m.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize /
                            2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y1 + b.textBlock.width + 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ?
                        (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? x(m.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, x(m.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ?
                            this.chart.plotArea.y1 + b.textBlock.width + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y2 - b.textBlock.width - 3) : "left" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth :
                            this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - b.textBlock.height > this.chart.plotArea.y1 ? x(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : x(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === b.stripLine.labelAlign ?
                            (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x2 - b.textBlock.width - 3) : "right" === this._position && (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - +b.textBlock.height > this.chart.plotArea.y1 ? x(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 - 3 : a.y - b.textBlock.height <
                            this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : x(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                    b.textBlock.x = a.x;
                    b.textBlock.y = a.y;
                    k.push(b)
                }
            if (!h) {
                h = !1;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1,
                    this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                for (c = 0; c < l.length; c++) m = l[c], m.showOnTop ? g || (g = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    for (f = 0; f < l.length; f++) m = l[f], m.showOnTop && m.render();
                    this.ctx.restore()
                }, m)) : m.render();
                for (c = 0; c < k.length; c++) b = k[c], b.stripLine.showOnTop ?
                    h || (h = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                        for (f = 0; f < k.length; f++) b = k[f], "inside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && (d.ctx.save(), d.ctx.beginPath(), d.ctx.rect(d.chart.plotArea.x1, d.chart.plotArea.y1, d.chart.plotArea.width, d.chart.plotArea.height), d.ctx.clip(), b.textBlock.render(!0), d.ctx.restore())
                    }, b.textBlock)) : "inside" === b.stripLine.labelPlacement && b.textBlock.render(!0);
                this.ctx.restore();
                h = !0
            }
            if (h)
                for (h = !1, c = 0; c < k.length; c++) b = k[c], b.stripLine.showOnTop ?
                    h || (h = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                        for (f = 0; f < k.length; f++) b = k[f], "outside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && b.textBlock.render(!0)
                    }, b.textBlock)) : "outside" === b.stripLine.labelPlacement && b.textBlock.render(!0)
        }
    };
    B.prototype.renderGrid = function() {
        if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx;
            a.save();
            var d, b = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(I(this.gridDashType,
                this.gridThickness));
            if ("bottom" === this._position || "top" === this._position)
                for (c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum || this._labels[c].position > this.viewportMaximum || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[c].position), d = 1 === a.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0, a.moveTo(d, b.y1 << 0), a.lineTo(d, b.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position)
                for (var c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum ||
                    this._labels[c].position > this.viewportMaximum || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[c].position), d = 1 === a.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0, a.moveTo(b.x1 << 0, d), a.lineTo(b.x2 << 0, d), a.stroke());
            a.restore()
        }
    };
    B.prototype.renderAxisLine = function() {
        var a = this.chart.ctx;
        a.save();
        if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
                a.lineWidth = this.lineThickness;
                a.strokeStyle = this.lineColor ? this.lineColor : "black";
                a.setLineDash && a.setLineDash(I(this.lineDashType,
                    this.lineThickness));
                var d = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                a.beginPath();
                a.moveTo(this.lineCoordinates.x1, d);
                a.lineTo(this.lineCoordinates.x2, d);
                a.stroke()
            }
        } else "left" !== this._position && "right" !== this._position || !this.lineThickness || (a.lineWidth = this.lineThickness, a.strokeStyle = this.lineColor, a.setLineDash && a.setLineDash(I(this.lineDashType, this.lineThickness)), d = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 <<
            0, a.beginPath(), a.moveTo(d, this.lineCoordinates.y1), a.lineTo(d, this.lineCoordinates.y2), a.stroke());
        a.restore()
    };
    B.prototype.getPixelCoordinatesOnAxis = function(a) {
        var d = {};
        if ("bottom" === this._position || "top" === this._position) d.x = this.convertValueToPixel(a), d.y = this.lineCoordinates.y1;
        if ("left" === this._position || "right" === this._position) d.y = this.convertValueToPixel(a), d.x = this.lineCoordinates.x2;
        return d
    };
    B.prototype.convertPixelToValue = function(a) {
        if ("undefined" === typeof a) return null;
        var d = 0,
            d = 0,
            d = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
        return d = this.logarithmic ? Math.pow(this.logarithmBase, (d - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit) * this.viewportMinimum : this.conversionParameters.minimum + (d - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit
    };
    B.prototype.convertValueToPixel = function(a) {
        return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a /
            this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0
    };
    B.prototype.setViewPortRange = function(a, d) {
        this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, d);
        this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, d)
    };
    B.prototype.getXValueAt = function(a) {
        if (!a) return null;
        var d = null;
        "left" === this._position ? d = this.convertPixelToValue(a.y) :
            "bottom" === this._position && (d = this.convertPixelToValue(a.x));
        return d
    };
    B.prototype.calculateValueToPixelConversionParameters = function(a) {
        a = {
            pixelPerUnit: null,
            minimum: null,
            reference: null
        };
        var d = this.lineCoordinates.width,
            b = this.lineCoordinates.height;
        a.minimum = this.viewportMinimum;
        if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (a.lnLogarithmBase = Math.log(this.logarithmBase), a.pixelPerUnit = (this.reversed ? -1 : 1) * d * a.lnLogarithmBase / Math.log(Math.abs(this.range))) : a.pixelPerUnit =
            (this.reversed ? -1 : 1) * d / Math.abs(this.range), a.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
        if ("left" === this._position || "right" === this._position) this.logarithmic ? (a.lnLogarithmBase = Math.log(this.logarithmBase), a.pixelPerUnit = (this.reversed ? 1 : -1) * b * a.lnLogarithmBase / Math.log(Math.abs(this.range))) : a.pixelPerUnit = (this.reversed ? 1 : -1) * b / Math.abs(this.range), a.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
        this.conversionParameters = a
    };
    B.prototype.calculateAxisParameters =
        function() {
            if (this.logarithmic) this.calculateLogarithamicAxisParameters();
            else {
                var a = this.chart.layoutManager.getFreeSpace(),
                    d = !1,
                    b = !1;
                "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
                var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                    c = 4;
                "axisX" === this.type && (c = 600 > this.maxWidth ? 8 : 6);
                var a = Math.max(c, Math.floor(this.maxWidth /
                        a)),
                    f, g, h, c = 0;
                if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
                if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
                if ("axisX" === this.type) {
                    if (this.dataSeries && 0 < this.dataSeries.length)
                        for (f = 0; f < this.dataSeries.length; f++) "dateTime" === this.dataSeries[f].xValueType && (b = !0);
                    f = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
                    g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                    0 === g - f && (c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += c, f -= c);
                    Infinity !== this.dataInfo.minDiff ? h = this.dataInfo.minDiff : 1 < g - f ? h = 0.5 * Math.abs(g - f) : (h = 1, b && (d = !0))
                } else "axisY" === this.type && (f = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(f) || isFinite(g) ? isFinite(f) ? isFinite(g) || (g = f) : f = g : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval,
                    f = 0), 0 === f && 0 === g ? (g += 9, f = 0) : 0 === g - f ? (c = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += c, f -= c) : f > g ? (c = Math.min(Math.abs(0.01 * Math.abs(g - f)), 5), 0 <= g ? f = g - c : g = f + c) : (c = Math.min(Math.abs(0.01 * Math.abs(g - f)), 0.05), 0 !== g && (g += c), 0 !== f && (f -= c)), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - f ? 0.5 * Math.abs(g - f) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < f && (f = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > g && (g = 0));
                c = (isNaN(this.viewportMaximum) ||
                    null === this.viewportMaximum ? g : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? f : this.viewportMinimum);
                if ("axisX" === this.type && b) {
                    this.intervalType || (c / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : c / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : c / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : c / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : c / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : c / 50 <= a ? (this.interval = 50, this.intervalType =
                            "millisecond") : c / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : c / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : c / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : c / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : c / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : c / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : c / (1 * E.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : c / (2 * E.secondDuration) <= a ? (this.interval = 2, this.intervalType =
                            "second") : c / (5 * E.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : c / (10 * E.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : c / (15 * E.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : c / (20 * E.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : c / (30 * E.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : c / (1 * E.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : c / (2 * E.minuteDuration) <= a ? (this.interval = 2, this.intervalType =
                            "minute") : c / (5 * E.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : c / (10 * E.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : c / (15 * E.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : c / (20 * E.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : c / (30 * E.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : c / (1 * E.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : c / (2 * E.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") :
                        c / (3 * E.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : c / (6 * E.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : c / (1 * E.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : c / (2 * E.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : c / (4 * E.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : c / (1 * E.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : c / (2 * E.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : c / (3 * E.weekDuration) <= a ? (this.interval =
                            3, this.intervalType = "week") : c / (1 * E.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : c / (2 * E.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : c / (3 * E.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : c / (6 * E.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = c / (1 * E.yearDuration) <= a ? 1 : c / (2 * E.yearDuration) <= a ? 2 : c / (4 * E.yearDuration) <= a ? 4 : Math.floor(B.getNiceNumber(c / (a - 1), !0) / E.yearDuration), this.intervalType = "year"));
                    if (null === this.viewportMinimum ||
                        isNaN(this.viewportMinimum)) this.viewportMinimum = f - h / 2;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = g + h / 2;
                    d ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString =
                        "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                    this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
                } else {
                    this.intervalType = "number";
                    c = B.getNiceNumber(c, !1);
                    this.interval = this.options && 0 < this.options.interval ? this.options.interval : B.getNiceNumber(c / (a - 1), !0);
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum =
                        "axisX" === this.type ? f - h / 2 : Math.floor(f / this.interval) * this.interval;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? g + h / 2 : Math.ceil(g / this.interval) * this.interval;
                    0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = B.getNiceNumber((this.viewportMaximum - this.viewportMinimum) /
                        (a - 1), !0)))
                }
                if (null === this.minimum || null === this.maximum)
                    if ("axisX" === this.type ? (f = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === g - f && (c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += c, f -= c), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - f ? 0.5 * Math.abs(g - f) : 1) : "axisY" === this.type && (f = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(f) ||
                            isFinite(g) ? 0 === f && 0 === g ? (g += 9, f = 0) : 0 === g - f ? (c = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += c, f -= c) : f > g ? (c = Math.min(Math.abs(0.01 * Math.abs(g - f)), 5), 0 <= g ? f = g - c : g = f + c) : (c = Math.min(Math.abs(0.01 * Math.abs(g - f)), 0.05), 0 !== g && (g += c), 0 !== f && (f -= c)) : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, f = 0), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - f ? 0.5 * Math.abs(g - f) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < f && (f = 0), this.includeZero && (null ===
                                this.maximum || isNaN(this.maximum)) && 0 > g && (g = 0)), "axisX" === this.type && b) {
                        if (null === this.minimum || isNaN(this.minimum)) this.minimum = f - h / 2;
                        if (null === this.maximum || isNaN(this.maximum)) this.maximum = g + h / 2
                    } else this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? f - h / 2 : Math.floor(f / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)),
                        null === this.maximum && (this.maximum = "axisX" === this.type ? g + h / 2 : Math.ceil(g / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
                this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
                this.viewportMaximum = Math.min(this.viewportMaximum,
                    this.maximum);
                this.range = this.viewportMaximum - this.viewportMinimum;
                this.intervalStartPosition = "axisX" === this.type && b ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
                if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.range)) {
                    d = Math.floor(Math.abs(Math.log(this.range) / Math.LN10)) + 2;
                    if (isNaN(d) || !isFinite(d)) d = 2;
                    if (2 < d)
                        for (b = 0; b < d - 2; b++) this.valueFormatString += "#"
                }
            }
        };
    B.prototype.calculateLogarithamicAxisParameters = function() {
        var a = this.chart.layoutManager.getFreeSpace(),
            d = Math.log(this.logarithmBase),
            b;
        "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
        var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3),
            c, f, g, h;
        h = 1;
        if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum =
            this.minimum;
        if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
        "axisX" === this.type ? (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === f / c && (h = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), f *= h, c /= h), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : f / c > this.logarithmBase ? f / c * Math.pow(this.logarithmBase,
            0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= c && !isFinite(f) ? (f = "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1) : 0 >= c ? c = f : isFinite(f) || (f = c), 1 === c && 1 === f ? (f *= this.logarithmBase - 1 / this.logarithmBase, c = 1) : 1 === f / c ? (h = Math.min(f * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), f *= h, c /= h) : c > f ? (h = Math.min(c /
                f * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= f ? c = f / h : f = c * h) : (h = Math.min(f / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== f && (f *= h), 1 !== c && (c /= h)), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : f / c > this.logarithmBase ? f / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < c && (c = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) &&
            1 > f && (f = 1));
        h = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? f : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
        linearRange = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? f : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
        this.intervalType = "number";
        h = Math.pow(this.logarithmBase, B.getNiceNumber(Math.abs(Math.log(h) / d), !1));
        this.options && 0 < this.options.interval ? this.interval =
            this.options.interval : (this.interval = B.getNiceExponent(Math.log(h) / d / (a - 1), !0), b = B.getNiceNumber(linearRange / (a - 1), !0));
        if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? c / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / d / this.interval));
        if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? f * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(f) / d /
            this.interval));
        1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = B.getNiceExponent(Math.ceil(Math.log(h) / d) / (a - 1)), b = B.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)));
        if (null === this.minimum || null === this.maximum) "axisX" ===
            this.type ? (c = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === f / c && (h = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), f *= h, c /= h), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : f / c > this.logarithmBase ? f / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max,
                isFinite(c) || isFinite(f) ? 1 === c && 1 === f ? (f *= this.logarithmBase, c /= this.logarithmBase) : 1 === f / c ? (h = Math.pow(this.logarithmBase, this.interval), f *= h, c /= h) : c > f ? (h = Math.min(0.01 * (c / f), 5), 1 <= f ? c = f / h : f = c * h) : (h = Math.min(f / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== f && (f *= h), 1 !== c && (c /= h)) : (f = "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : f / c > this.logarithmBase ? f / c * Math.pow(this.logarithmBase, 0.5) :
                this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < c && (c = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > f && (f = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? c / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / d / this.interval)), this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ?
                Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? f * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(f) / d / this.interval)), this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum)),
            1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
        this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
        this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
        this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum ||
            this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
        c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval);
        this.range = this.viewportMaximum / this.viewportMinimum;
        this.noTicks = a;
        if (!this.options.interval &&
            this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
            for (d = Math.floor(this.viewportMinimum / b + 0.5) * b; d < this.viewportMinimum;) d += b;
            this.equidistantInterval = !1;
            this.intervalStartPosition = d;
            this.interval = b
        } else this.options.interval || (b = Math.ceil(this.interval), this.range > this.interval && (this.interval = b, c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval))), this.equidistantInterval = !0, this.intervalStartPosition = c;
        if (!this.valueFormatString &&
            (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
            d = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
            if (isNaN(d) || !isFinite(d)) d = 2;
            if (2 < d)
                for (b = 0; b < d - 2; b++) this.valueFormatString += "#"
        }
    };
    B.getNiceExponent = function(a, d) {
        var b = Math.floor(Math.log(a) / Math.LN10),
            c = a / Math.pow(10, b),
            c = 0 > b ? 1 >= c ? 1 : 5 >= c ? 5 : 10 : Math.max(Math.floor(c), 1);
        return Number((c * Math.pow(10, b)).toFixed(20))
    };
    B.getNiceNumber = function(a, d) {
        var b = Math.floor(Math.log(a) / Math.LN10),
            c = a / Math.pow(10, b);
        return Number(((d ?
            1.5 > c ? 1 : 3 > c ? 2 : 7 > c ? 5 : 10 : 1 >= c ? 1 : 2 >= c ? 2 : 5 >= c ? 5 : 10) * Math.pow(10, b)).toFixed(20))
    };
    B.prototype.getLabelStartPoint = function() {
        var a = E[this.intervalType + "Duration"] * this.interval,
            a = new Date(Math.floor(this.viewportMinimum / a) * a);
        if ("millisecond" !== this.intervalType)
            if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
            else if ("minute" === this.intervalType) {
            if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("hour" ===
            this.intervalType) {
            if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("day" === this.intervalType) {
            if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("week" === this.intervalType) {
            if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() +
                (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("month" === this.intervalType) {
            if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0),
            a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
        return a
    };
    U(na, M);
    na.prototype.createUserOptions = function(a) {
        if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var d = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (qa(this.parent.stripLines), d = this.parent.options.stripLines.indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options.stripLines[d] = this.options
        }
    };
    na.prototype.render = function() {
        this.ctx.save();
        var a = this.parent.getPixelCoordinatesOnAxis(this.value),
            d = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness);
        if (0 < d) {
            var b = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var c = this.ctx.globalAlpha;
            this.ctx.globalAlpha = b;
            G(this.id);
            var f, g, h, l;
            this.ctx.lineWidth = d;
            this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, d));
            if ("bottom" === this.parent._position || "top" === this.parent._position) f =
                g = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, h = this.chart.plotArea.y1, l = this.chart.plotArea.y2, this.bounds = {
                    x1: f - d / 2,
                    y1: h,
                    x2: g + d / 2,
                    y2: l
                };
            else if ("left" === this.parent._position || "right" === this.parent._position) h = l = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, f = this.chart.plotArea.x1, g = this.chart.plotArea.x2, this.bounds = {
                x1: f,
                y1: h - d / 2,
                x2: g,
                y2: l + d / 2
            };
            this.ctx.moveTo(f, h);
            this.ctx.lineTo(g, l);
            this.ctx.stroke();
            this.ctx.globalAlpha = c
        }
        this.ctx.restore()
    };
    U(S, M);
    S.prototype._initialize = function() {
        if (this.enabled) {
            this.container =
                document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.display = "none";
            var a;
            a = '<div style=" width: auto;height: auto;min-width: 50px;';
            a += "line-height: auto;";
            a += "margin: 0px 0px 0px 0px;";
            a += "padding: 5px;";
            a += "font-family: Calibri, Arial, Georgia, serif;";
            a += "font-weight: normal;";
            a += "font-style: " + (u ? "italic;" : "normal;");
            a += "font-size: 14px;";
            a += "color: #000000;";
            a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
            a += "text-align: left;";
            a += "border: 2px solid gray;";
            a += u ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
            a += "text-indent: 0px;";
            a += "white-space: nowrap;";
            a += "border-radius: 5px;";
            a += "-moz-user-select:none;";
            a += "-khtml-user-select: none;";
            a += "-webkit-user-select: none;";
            a += "-ms-user-select: none;";
            a += "user-select: none;";
            u || (a += "filter: alpha(opacity = 90);",
                a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
            a += '} "> Sample Tooltip</div>';
            this.container.innerHTML = a;
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container)
        }
    };
    S.prototype.mouseMoveHandler = function(a, d) {
        this._lastUpdated && 40 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this._updateToolTip(a, d))
    };
    S.prototype._updateToolTip = function(a, d, b) {
        b = "undefined" === typeof b ? !0 : b;
        this.container || this._initialize();
        this.enabled || this.hide();
        if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof d) {
                if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                a = this._prevX;
                d = this._prevY
            } else this._prevX = a, this._prevY = d;
            var c = null,
                f = null,
                g = [],
                h = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    f = [];
                    if (this.chart.axisX)
                        for (var l =
                                0; l < this.chart.axisX.length; l++) {
                            for (var h = this.chart.axisX[l].convertPixelToValue({
                                    y: d
                                }), k = null, c = 0; c < this.chart.axisX[l].dataSeries.length; c++)(k = this.chart.axisX[l].dataSeries[c].getDataPointAtX(h, b)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[l].dataSeries[c], null !== k.dataPoint.y && f.push(k));
                            k = null
                        }
                    if (this.chart.axisX2)
                        for (l = 0; l < this.chart.axisX2.length; l++) {
                            h = this.chart.axisX2[l].convertPixelToValue({
                                y: d
                            });
                            k = null;
                            for (c = 0; c < this.chart.axisX2[l].dataSeries.length; c++)(k = this.chart.axisX2[l].dataSeries[c].getDataPointAtX(h,
                                b)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[l].dataSeries[c], null !== k.dataPoint.y && f.push(k));
                            k = null
                        }
                } else {
                    f = [];
                    if (this.chart.axisX)
                        for (l = 0; l < this.chart.axisX.length; l++)
                            for (h = this.chart.axisX[l].convertPixelToValue({
                                    x: a
                                }), k = null, c = 0; c < this.chart.axisX[l].dataSeries.length; c++)(k = this.chart.axisX[l].dataSeries[c].getDataPointAtX(h, b)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[l].dataSeries[c], null !== k.dataPoint.y && f.push(k));
                    if (this.chart.axisX2)
                        for (l = 0; l < this.chart.axisX2.length; l++)
                            for (h =
                                this.chart.axisX2[l].convertPixelToValue({
                                    x: a
                                }), k = null, c = 0; c < this.chart.axisX2[l].dataSeries.length; c++)(k = this.chart.axisX2[l].dataSeries[c].getDataPointAtX(h, b)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[l].dataSeries[c], null !== k.dataPoint.y && f.push(k))
                }
                if (0 === f.length) return;
                f.sort(function(a, b) {
                    return a.distance - b.distance
                });
                b = f[0];
                for (c = 0; c < f.length; c++) f[c].dataPoint.x.valueOf() === b.dataPoint.x.valueOf() && g.push(f[c]);
                f = null
            } else {
                if (k = this.chart.getDataPointAtXY(a, d, b)) this.currentDataPointIndex =
                    k.dataPointIndex, this.currentSeriesIndex = k.dataSeries.index;
                else if (u)
                    if (k = La(a, d, this.chart._eventManager.ghostCtx), 0 < k && "undefined" !== typeof this.chart._eventManager.objectMap[k]) {
                        k = this.chart._eventManager.objectMap[k];
                        if ("legendItem" === k.objectType) return;
                        this.currentSeriesIndex = k.dataSeriesIndex;
                        this.currentDataPointIndex = 0 <= k.dataPointIndex ? k.dataPointIndex : -1
                    } else this.currentDataPointIndex = -1;
                else this.currentDataPointIndex = -1;
                if (0 <= this.currentSeriesIndex) {
                    f = this.chart.data[this.currentSeriesIndex];
                    k = {};
                    if (0 <= this.currentDataPointIndex) c = f.dataPoints[this.currentDataPointIndex], k.dataSeries = f, k.dataPoint = c, k.index = this.currentDataPointIndex, k.distance = Math.abs(c.x - h);
                    else {
                        if (!this.enabled || "line" !== f.type && "stepLine" !== f.type && "spline" !== f.type && "area" !== f.type && "stepArea" !== f.type && "splineArea" !== f.type && "stackedArea" !== f.type && "stackedArea100" !== f.type && "rangeArea" !== f.type && "rangeSplineArea" !== f.type && "candlestick" !== f.type && "ohlc" !== f.type) return;
                        h = f.axisX.convertPixelToValue({
                            x: a
                        });
                        k = f.getDataPointAtX(h,
                            b);
                        k.dataSeries = f;
                        this.currentDataPointIndex = k.index;
                        c = k.dataPoint
                    }
                    if (!x(k.dataPoint.y))
                        if (k.dataSeries.axisY)
                            if (0 < k.dataPoint.y.length) {
                                for (c = b = 0; c < k.dataPoint.y.length; c++) k.dataPoint.y[c] < k.dataSeries.axisY.viewportMinimum ? b-- : k.dataPoint.y[c] > k.dataSeries.axisY.viewportMaximum && b++;
                                b < k.dataPoint.y.length && b > -k.dataPoint.y.length && g.push(k)
                            } else "column" === f.type || "bar" === f.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && g.push(k) : k.dataSeries.axisY.viewportMinimum <=
                                k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && g.push(k) : "bubble" === f.type ? (b = this.chart._eventManager.objectMap[f.dataPointIds[k.index]].size / 2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - b && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + b && g.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === f.type || "stackedBar" === f.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && g.push(k);
                    else g.push(k)
                }
            }
            if (0 < g.length && (this.highlightObjects(g),
                    this.enabled))
                if (b = "", b = this.getToolTipInnerHTML({
                        entries: g
                    }), null !== b) {
                    this.contentDiv.innerHTML = b;
                    this.contentDiv.innerHTML = b;
                    b = !1;
                    "none" === this.container.style.display && (b = !0, this.container.style.display = "block");
                    try {
                        this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor :
                            g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ?
                            this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" : "normal"
                    } catch (m) {}
                    "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type ||
                        "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                    0 > a && (a += this.container.clientWidth + 20);
                    a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                    a += "px";
                    d = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type &&
                        "stepLine" !== g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type && "stepArea" !== g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) : d : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
                    d = -d + 10;
                    0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight +
                        5 - 0);
                    this.container.style.left = a;
                    this.container.style.bottom = d + "px";
                    !this.animationEnabled || b ? this.disableAnimation() : this.enableAnimation()
                } else this.hide(!1)
        }
    };
    S.prototype.highlightObjects = function(a) {
        var d = this.chart.overlaidCanvasCtx;
        this.chart.resetOverlayedCanvas();
        d.clearRect(0, 0, this.chart.width, this.chart.height);
        d.save();
        var b = this.chart.plotArea,
            c = 0;
        d.beginPath();
        d.rect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);
        d.clip();
        for (b = 0; b < a.length; b++) {
            var f = a[b];
            if ((f = this.chart._eventManager.objectMap[f.dataSeries.dataPointIds[f.index]]) &&
                f.objectType && "dataPoint" === f.objectType) {
                var c = this.chart.data[f.dataSeriesIndex],
                    g = c.dataPoints[f.dataPointIndex],
                    h = f.dataPointIndex;
                !1 === g.highlightEnabled || !0 !== c.highlightEnabled && !0 !== g.highlightEnabled || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "scatter" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type ? (g = c.getMarkerProperties(h, f.x1, f.y1, this.chart.overlaidCanvasCtx),
                    g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), P.drawMarkers([g]), "undefined" !== typeof f.y2 && (g = c.getMarkerProperties(h, f.x1, f.y2, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), P.drawMarkers([g]))) : "bubble" === c.type ? (g = c.getMarkerProperties(h, f.x1, f.y1, this.chart.overlaidCanvasCtx), g.size = f.size, g.color =
                    "white", g.borderColor = "white", d.globalAlpha = 0.3, P.drawMarkers([g]), d.globalAlpha = 1) : "column" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "bar" === c.type || "rangeBar" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "rangeColumn" === c.type ? N(d, f.x1, f.y1, f.x2, f.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === c.type || "doughnut" === c.type ? Ga(d, f.center, f.radius, "white", c.type, f.startAngle, f.endAngle, 0.3, f.percentInnerRadius) : "candlestick" === c.type ? (d.globalAlpha = 1, d.strokeStyle =
                    f.color, d.lineWidth = 2 * f.borderThickness, c = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(f.x3 - c, Math.min(f.y2, f.y3)), d.lineTo(f.x3 - c, Math.min(f.y1, f.y4)), d.stroke(), d.beginPath(), d.moveTo(f.x3 - c, Math.max(f.y1, f.y4)), d.lineTo(f.x3 - c, Math.max(f.y2, f.y3)), d.stroke(), N(d, f.x1, Math.min(f.y1, f.y4), f.x2, Math.max(f.y1, f.y4), "transparent", 2 * f.borderThickness, f.color, !1, !1, !1, !1), d.globalAlpha = 1) : "ohlc" === c.type && (d.globalAlpha = 1, d.strokeStyle = f.color, d.lineWidth = 2 * f.borderThickness, c = 0 === d.lineWidth % 2 ? 0 : 0.5,
                    d.beginPath(), d.moveTo(f.x3 - c, f.y2), d.lineTo(f.x3 - c, f.y3), d.stroke(), d.beginPath(), d.moveTo(f.x3, f.y1), d.lineTo(f.x1, f.y1), d.stroke(), d.beginPath(), d.moveTo(f.x3, f.y4), d.lineTo(f.x2, f.y4), d.stroke(), d.globalAlpha = 1))
            }
        }
        d.restore();
        d.globalAlpha = 1;
        d.beginPath()
    };
    S.prototype.getToolTipInnerHTML = function(a) {
        var d = a.entries,
            b = null,
            c = null,
            f = null,
            g = 0;
        a = "";
        for (var h = !0, l = 0; l < d.length; l++)
            if (d[l].dataSeries.toolTipContent || d[l].dataPoint.toolTipContent) {
                h = !1;
                break
            }
        if (h && (this.content && "function" === typeof this.content ||
                this.contentFormatter)) d = {
            chart: this.chart,
            toolTip: this.options,
            entries: d
        }, b = this.contentFormatter ? this.contentFormatter(d) : this.content(d);
        else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var k = null, m = "", l = 0; l < d.length; l++)
                if (c = d[l].dataSeries, f = d[l].dataPoint, g = d[l].index, a = "", 0 === l && (h && !this.content) && (this.chart.axisX && 0 < this.chart.axisX.length ? m += "undefined" !== typeof this.chart.axisX[0].labels[f.x] ? this.chart.axisX[0].labels[f.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length &&
                        (m += "undefined" !== typeof this.chart.axisX2[0].labels[f.x] ? this.chart.axisX2[0].labels[f.x] : "{x}"), m += "</br>", m = this.chart.replaceKeywordsWithValue(m, f, c, g)), null !== f.toolTipContent && ("undefined" !== typeof f.toolTipContent || null !== c.options.toolTipContent)) {
                    if ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" ===
                        c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type) this.chart.axisX && 1 < this.chart.axisX.length && (a += k != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), a += f.toolTipContent ? f.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}", k = c.axisXIndex;
                    else if ("bubble" === c.type) this.chart.axisX &&
                        1 < this.chart.axisX.length && (a += k != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), a += f.toolTipContent ? f.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
                    else if ("rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type) this.chart.axisX && 1 < this.chart.axisX.length &&
                        (a += k != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), a += f.toolTipContent ? f.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";
                    else if ("candlestick" === c.type || "ohlc" === c.type) this.chart.axisX && 1 < this.chart.axisX.length && (a += k != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" :
                        ""), a += f.toolTipContent ? f.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
                    null === b && (b = "");
                    !0 === this.reversed ? (b = this.chart.replaceKeywordsWithValue(a, f, c, g) + b, l < d.length - 1 && (b = "</br>" + b)) : (b += this.chart.replaceKeywordsWithValue(a,
                        f, c, g), l < d.length - 1 && (b += "</br>"));
                    c.toolTipContent = a
                }
            null !== b && (b = m + b)
        } else {
            c = d[0].dataSeries;
            f = d[0].dataPoint;
            g = d[0].index;
            if (null === f.toolTipContent || "undefined" === typeof f.toolTipContent && null === c.options.toolTipContent) return null;
            if ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" ===
                c.type || "stackedArea" === c.type || "stackedArea100" === c.type) a = f.toolTipContent ? f.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (f.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}";
            else if ("bubble" === c.type) a = f.toolTipContent ? f.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ?
                "" : "'color:{color};'") + "\"'>" + (f.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
            else if ("pie" === c.type || "doughnut" === c.type || "funnel" === c.type) a = f.toolTipContent ? f.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (f.name ? "{name}:</span>&nbsp;&nbsp;" : f.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}";
            else if ("rangeColumn" === c.type || "rangeBar" ===
                c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type) a = f.toolTipContent ? f.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (f.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";
            else if ("candlestick" === c.type || "ohlc" === c.type) a = f.toolTipContent ? f.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content :
                "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (f.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
            null === b && (b = "");
            b += this.chart.replaceKeywordsWithValue(a, f, c, g)
        }
        this.content = a;
        return b
    };
    S.prototype.enableAnimation = function() {
        this.container.style.WebkitTransition || (this.container.style.WebkitTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MozTransition =
            "left .2s ease-out, bottom .2s ease-out", this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.transition = "left .2s ease-out, bottom .2s ease-out")
    };
    S.prototype.disableAnimation = function() {
        this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
    };
    S.prototype.hide = function(a) {
        this.container && (this.container.style.display = "none",
            this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
    };
    S.prototype.show = function(a, d, b) {
        this._updateToolTip(a, d, "undefined" === typeof b ? !1 : b)
    };
    A.prototype.getPercentAndTotal = function(a, d) {
        var b = null,
            c = null,
            f = null;
        if (0 <= a.type.indexOf("stacked")) c = 0, b = d.x.getTime ? d.x.getTime() : d.x, b in a.plotUnit.yTotals && (c = a.plotUnit.yTotals[b], f = isNaN(d.y) ? 0 : 0 === c ? 0 : 100 * (d.y / c));
        else if ("pie" === a.type || "doughnut" === a.type) {
            for (i = c = 0; i < a.dataPoints.length; i++) isNaN(a.dataPoints[i].y) ||
                (c += a.dataPoints[i].y);
            f = isNaN(d.y) ? 0 : 100 * (d.y / c)
        }
        return {
            percent: f,
            total: c
        }
    };
    A.prototype.replaceKeywordsWithValue = function(a, d, b, c, f) {
        var g = this;
        f = "undefined" === typeof f ? 0 : f;
        if ((0 <= b.type.indexOf("stacked") || "pie" === b.type || "doughnut" === b.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var h = "#percent",
                l = "#total",
                k = this.getPercentAndTotal(b, d),
                l = isNaN(k.total) ? l : k.total,
                h = isNaN(k.percent) ? h : k.percent;
            do {
                k = "";
                if (b.percentFormatString) k = b.percentFormatString;
                else {
                    var k = "#,##0.",
                        m = Math.max(Math.ceil(Math.log(1 /
                            Math.abs(h)) / Math.LN10), 2);
                    if (isNaN(m) || !isFinite(m)) m = 2;
                    for (var n = 0; n < m; n++) k += "#";
                    b.percentFormatString = k
                }
                a = a.replace("#percent", da(h, k, g._cultureInfo));
                a = a.replace("#total", da(l, b.yValueFormatString ? b.yValueFormatString : "#,##0.########", g._cultureInfo))
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
        }
        return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
            if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
            a = ka(a.slice(1, a.length - 1));
            a = a.replace("#index",
                f);
            var e = null;
            try {
                var h = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                h && 0 < h.length && (e = ka(h[2]), a = ka(h[1]))
            } catch (k) {}
            h = null;
            if ("color" === a) return d.color ? d.color : b.color ? b.color : b._colorSet[c % b._colorSet.length];
            if (d.hasOwnProperty(a)) h = d;
            else if (b.hasOwnProperty(a)) h = b;
            else return "";
            h = h[a];
            null !== e && (h = h[e]);
            if ("x" === a)
                if ("dateTime" === g.plotInfo.axisXValueType || "dateTime" === b.xValueType || d.x && d.x.getTime) {
                    if (g.plotInfo.plotTypes[0].plotUnits[0].axisX && !g.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic) return Ea(h,
                        d.xValueFormatString ? d.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = g.axisX && g.axisX.autoValueFormatString ? g.axisX.autoValueFormatString : "DD MMM YY", g._cultureInfo)
                } else return da(h, d.xValueFormatString ? d.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = "#,##0.########", g._cultureInfo);
            else return "y" === a ? da(h, d.yValueFormatString ? d.yValueFormatString : b.yValueFormatString ? b.yValueFormatString : b.yValueFormatString = "#,##0.########",
                g._cultureInfo) : "z" === a ? da(h, d.zValueFormatString ? d.zValueFormatString : b.zValueFormatString ? b.zValueFormatString : b.zValueFormatString = "#,##0.########", g._cultureInfo) : h
        })
    };
    la.prototype.reset = function() {
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.eventObjects = [];
        u && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
    };
    la.prototype.getNewObjectTrackingId = function() {
        return ++this.lastObjectId
    };
    la.prototype.mouseEventHandler = function(a) {
        if ("mousemove" === a.type || "click" === a.type) {
            var d = [],
                b = xa(a),
                c = null;
            if ((c = this.chart.getObjectAtXY(b.x, b.y, !1)) && "undefined" !== typeof this.objectMap[c])
                if (c = this.objectMap[c], "dataPoint" === c.objectType) {
                    var f = this.chart.data[c.dataSeriesIndex],
                        g = f.dataPoints[c.dataPointIndex],
                        h = c.dataPointIndex;
                    c.eventParameter = {
                        x: b.x,
                        y: b.y,
                        dataPoint: g,
                        dataSeries: f.options,
                        dataPointIndex: h,
                        dataSeriesIndex: f.index,
                        chart: this.chart
                    };
                    c.eventContext = {
                        context: g,
                        userContext: g,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    d.push(c);
                    c = this.objectMap[f.id];
                    c.eventParameter = {
                        x: b.x,
                        y: b.y,
                        dataPoint: g,
                        dataSeries: f.options,
                        dataPointIndex: h,
                        dataSeriesIndex: f.index,
                        chart: this.chart
                    };
                    c.eventContext = {
                        context: f,
                        userContext: f.options,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    d.push(this.objectMap[f.id])
                } else "legendItem" === c.objectType && (f = this.chart.data[c.dataSeriesIndex], g = null !== c.dataPointIndex ? f.dataPoints[c.dataPointIndex] : null,
                    c.eventParameter = {
                        x: b.x,
                        y: b.y,
                        dataSeries: f.options,
                        dataPoint: g,
                        dataPointIndex: c.dataPointIndex,
                        dataSeriesIndex: c.dataSeriesIndex,
                        chart: this.chart
                    }, c.eventContext = {
                        context: this.chart.legend,
                        userContext: this.chart.legend.options,
                        mouseover: "itemmouseover",
                        mousemove: "itemmousemove",
                        mouseout: "itemmouseout",
                        click: "itemclick"
                    }, d.push(c));
            f = [];
            for (b = 0; b < this.mouseoveredObjectMaps.length; b++) {
                g = !0;
                for (c = 0; c < d.length; c++)
                    if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                        g = !1;
                        break
                    }
                g ? this.fireEvent(this.mouseoveredObjectMaps[b],
                    "mouseout", a) : f.push(this.mouseoveredObjectMaps[b])
            }
            this.mouseoveredObjectMaps = f;
            for (b = 0; b < d.length; b++) {
                f = !1;
                for (c = 0; c < this.mouseoveredObjectMaps.length; c++)
                    if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                        f = !0;
                        break
                    }
                f || (this.fireEvent(d[b], "mouseover", a), this.mouseoveredObjectMaps.push(d[b]));
                "click" === a.type ? this.fireEvent(d[b], "click", a) : "mousemove" === a.type && this.fireEvent(d[b], "mousemove", a)
            }
        }
    };
    la.prototype.fireEvent = function(a, d, b) {
        if (a && d) {
            var c = a.eventParameter,
                f = a.eventContext,
                g = a.eventContext.userContext;
            g && (f && g[f[d]]) && g[f[d]].call(g, c);
            "mouseout" !== d ? g.cursor && g.cursor !== b.target.style.cursor && (b.target.style.cursor = g.cursor) : (b.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
            "click" === d && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], c)
        }
    };
    U(oa, M);
    Da.prototype.animate = function(a, d, b, c, f) {
        var g = this;
        this.chart.isAnimating = !0;
        f = f || F.easing.linear;
        b && this.animations.push({
            startTime: (new Date).getTime() +
                (a ? a : 0),
            duration: d,
            animationCallback: b,
            onComplete: c
        });
        for (a = []; 0 < this.animations.length;)
            if (d = this.animations.shift(), b = (new Date).getTime(), c = 0, d.startTime <= b && (c = f(Math.min(b - d.startTime, d.duration), 0, 1, d.duration), c = Math.min(c, 1), isNaN(c) || !isFinite(c)) && (c = 1), 1 > c && a.push(d), d.animationCallback(c), 1 <= c && d.onComplete) d.onComplete();
        this.animations = a;
        0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            g.animate.call(g)
        }) : this.chart.isAnimating = !1
    };
    Da.prototype.cancelAllAnimations = function() {
        this.animations = [];
        this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this.animationRequestId = null;
        this.chart.isAnimating = !1
    };
    var F = {
            yScaleAnimation: function(a, d) {
                if (0 !== a) {
                    var b = d.dest,
                        c = d.source.canvas,
                        f = d.animationBase;
                    b.drawImage(c, 0, 0, c.width, c.height, 0, f - f * a, b.canvas.width / Q, a * b.canvas.height / Q)
                }
            },
            xScaleAnimation: function(a, d) {
                if (0 !== a) {
                    var b = d.dest,
                        c = d.source.canvas,
                        f = d.animationBase;
                    b.drawImage(c, 0, 0,
                        c.width, c.height, f - f * a, 0, a * b.canvas.width / Q, b.canvas.height / Q)
                }
            },
            xClipAnimation: function(a, d) {
                if (0 !== a) {
                    var b = d.dest,
                        c = d.source.canvas;
                    b.save();
                    0 < a && b.drawImage(c, 0, 0, c.width * a, c.height, 0, 0, c.width * a / Q, c.height / Q);
                    b.restore()
                }
            },
            fadeInAnimation: function(a, d) {
                if (0 !== a) {
                    var b = d.dest,
                        c = d.source.canvas;
                    b.save();
                    b.globalAlpha = a;
                    b.drawImage(c, 0, 0, c.width, c.height, 0, 0, b.canvas.width / Q, b.canvas.height / Q);
                    b.restore()
                }
            },
            easing: {
                linear: function(a, d, b, c) {
                    return b * a / c + d
                },
                easeOutQuad: function(a, d, b, c) {
                    return -b *
                        (a /= c) * (a - 2) + d
                },
                easeOutQuart: function(a, d, b, c) {
                    return -b * ((a = a / c - 1) * a * a * a - 1) + d
                },
                easeInQuad: function(a, d, b, c) {
                    return b * (a /= c) * a + d
                },
                easeInQuart: function(a, d, b, c) {
                    return b * (a /= c) * a * a * a + d
                }
            }
        },
        P = {
            drawMarker: function(a, d, b, c, f, g, h, l) {
                if (b) {
                    var k = 1;
                    b.fillStyle = g ? g : "#000000";
                    b.strokeStyle = h ? h : "#000000";
                    b.lineWidth = l ? l : 0;
                    "circle" === c ? (b.moveTo(a, d), b.beginPath(), b.arc(a, d, f / 2, 0, 2 * Math.PI, !1), g && b.fill(), l && (h ? b.stroke() : (k = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = k))) :
                        "square" === c ? (b.beginPath(), b.rect(a - f / 2, d - f / 2, f, f), g && b.fill(), l && (h ? b.stroke() : (k = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = k))) : "triangle" === c ? (b.beginPath(), b.moveTo(a - f / 2, d + f / 2), b.lineTo(a + f / 2, d + f / 2), b.lineTo(a, d - f / 2), b.closePath(), g && b.fill(), l && (h ? b.stroke() : (k = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = k)), b.beginPath()) : "cross" === c && (b.strokeStyle = g, b.lineWidth = f / 4, b.beginPath(), b.moveTo(a - f / 2, d - f / 2), b.lineTo(a + f /
                            2, d + f / 2), b.stroke(), b.moveTo(a + f / 2, d - f / 2), b.lineTo(a - f / 2, d + f / 2), b.stroke())
                }
            },
            drawMarkers: function(a) {
                for (var d = 0; d < a.length; d++) {
                    var b = a[d];
                    P.drawMarker(b.x, b.y, b.ctx, b.type, b.size, b.color, b.borderColor, b.borderThickness)
                }
            }
        },
        Oa = {
            Chart: A,
            addColorSet: function(a, d) {
                ha[a] = d
            },
            addCultureInfo: function(a, d) {
                pa[a] = d
            },
            formatNumber: function(a, d, b) {
                b = b || "en";
                if (pa[b]) return da(a, d || "#,##0.##", new oa(b));
                throw "Unknown Culture Name";
            },
            formatDate: function(a, d, b) {
                b = b || "en";
                if (pa[b]) return Ea(a, d || "DD MMM YYYY",
                    new oa(b));
                throw "Unknown Culture Name";
            }
        };
    Oa.Chart.version = "v1.9.8 GA";
    window.CanvasJS = Oa
})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() {
        return this.context_ || (this.context_ = new C(this))
    }

    function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
            return a.apply(b, g.concat(M.call(arguments)))
        }
    }

    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }

    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }

    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }

    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }

    function D() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }

    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }

    function Q(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b
    }

    function E(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }

    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = {
            color: b,
            alpha: c
        }
    }

    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }

    function R(a, b, c, g) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: g.x,
            y: g.y
        });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }

    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }

    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) {
                return a.offset - b.offset
            });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }

    function s(a, b, c) {
        a = a.m_;
        return {
            x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
            y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        }
    }

    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }

    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }

    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }

    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function(a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++) this.initElement(a[b])
        },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = {
            butt: "flat",
            round: "round"
        },
        d = C.prototype;
    d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function() {
        this.currentPath_ = []
    };
    d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
        function(a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e)
        };
    d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {
            x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        };
        R(this, g, {
            x: g.x + (c.x - this.currentX_) / 3,
            y: g.y + (c.y - this.currentY_) / 3
        }, c)
    };
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = {
                x: null,
                y: null
            }, d = {
                x: null,
                y: null
            }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) {
                if (null == c.x || f.x < c.x) c.x = f.x;
                if (null == d.x || f.x > d.x) d.x = f.x;
                if (null == c.y || f.y < c.y) c.y = f.y;
                if (null == d.y || f.y > d.y) d.y = f.y
            }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() {
        this.stroke(!0)
    };
    d.closePath = function() {
        this.currentPath_.push({
            type: "close"
        })
    };
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    };
    d.translate = function(a, b) {
        z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1)
    };
    d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1)
    };
    d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0)
    };
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) {
        z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0)
    };
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
            var l = document.createElement("div").style;
            try {
                l.font = h
            } catch (u) {}
            h = L[h] = {
                style: l.fontStyle || "normal",
                variant: l.fontVariant || "normal",
                weight: l.fontWeight || "normal",
                size: l.fontSize || 10,
                family: l.fontFamily || "sans-serif"
            }
        }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {
            x: -d,
            y: 0
        }, {
            x: r,
            y: h.size
        });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    };
    d.strokeText = function(a,
        b, c, d) {
        this.drawText_(a, b, c, d, !0)
    };
    d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return {
            width: this.textMeasureEl_.offsetWidth
        }
    };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) {
        return new I(a, b)
    };
    w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();