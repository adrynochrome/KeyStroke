(function(g, h, c, j, d, k, l)
{ /*! Jssor */
	new(function() {});
	var e = {
			le: function(a)
			{
				return -c.cos(a * c.PI) / 2 + .5
			},
			ke: function(a)
			{
				return a
			},
			je: function(a)
			{
				return -a * (a - 2)
			},
			ee: function(a)
			{
				return (a -= 1) * a * a * a * a + 1
			}
		},
		f = {
			Xd: e.ee
		};
	var b = new function()
	{
		var f = this,
			Ab = /\S+/g,
			F = 1,
			yb = 2,
			fb = 3,
			eb = 4,
			jb = 5,
			G, r = 0,
			i = 0,
			s = 0,
			X = 0,
			z = 0,
			I = navigator,
			ob = I.appName,
			o = I.userAgent,
			p = parseFloat;

		function Ib()
		{
			if (!G)
			{
				G = {
					Ge: "ontouchstart" in g || "createTouch" in h
				};
				var a;
				if (I.pointerEnabled || (a = I.msPointerEnabled)) G.dd = a ? "msTouchAction" : "touchAction"
			}
			return G
		}

		function v(j)
		{
			if (!r)
			{
				r = -1;
				if (ob == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject)
				{
					var e = o.indexOf("MSIE");
					r = F;
					s = p(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on X=@_jscript_version@*/ ;
					i = h.documentMode || s
				}
				else if (ob == "Netscape" && !!g.addEventListener)
				{
					var d = o.indexOf("Firefox"),
						b = o.indexOf("Safari"),
						f = o.indexOf("Chrome"),
						c = o.indexOf("AppleWebKit");
					if (d >= 0)
					{
						r = yb;
						i = p(o.substring(d + 8))
					}
					else if (b >= 0)
					{
						var k = o.substring(0, b).lastIndexOf("/");
						r = f >= 0 ? eb : fb;
						i = p(o.substring(k + 1, b))
					}
					else
					{
						var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
						if (a)
						{
							r = F;
							i = s = p(a[1])
						}
					}
					if (c >= 0) z = p(o.substring(c + 12))
				}
				else
				{
					var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
					if (a)
					{
						r = jb;
						i = p(a[2])
					}
				}
			}
			return j == r
		}

		function q()
		{
			return v(F)
		}

		function Q()
		{
			return q() && (i < 6 || h.compatMode == "BackCompat")
		}

		function db()
		{
			return v(fb)
		}

		function ib()
		{
			return v(jb)
		}

		function vb()
		{
			return db() && z > 534 && z < 535
		}

		function J()
		{
			v();
			return z > 537 || i > 42 || r == F && i >= 11
		}

		function O()
		{
			return q() && i < 9
		}

		function wb(a)
		{
			var b, c;
			return function(f)
			{
				if (!b)
				{
					b = d;
					var e = a.substr(0, 1).toUpperCase() + a.substr(1);
					n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, d)
					{
						var b = a;
						if (d) b = g + e;
						if (f.style[b] != l) return c = b
					})
				}
				return c
			}
		}

		function ub(b)
		{
			var a;
			return function(c)
			{
				a = a || wb(b)(c) || b;
				return a
			}
		}
		var K = ub("transform");

		function nb(a)
		{
			return {}.toString.call(a)
		}
		var kb = {};
		n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a)
		{
			kb["[object " + a + "]"] = a.toLowerCase()
		});

		function n(b, d)
		{
			var a, c;
			if (nb(b) == "[object Array]")
			{
				for (a = 0; a < b.length; a++)
					if (c = d(b[a], a, b)) return c
			}
			else
				for (a in b)
					if (c = d(b[a], a, b)) return c
		}

		function C(a)
		{
			return a == j ? String(a) : kb[nb(a)] || "object"
		}

		function lb(a)
		{
			for (var b in a) return d
		}

		function A(a)
		{
			try
			{
				return C(a) == "object" && !a.nodeType && a != a.window && (!a.constructor ||
				{}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
			}
			catch (b)
			{}
		}

		function u(a, b)
		{
			return {
				x: a,
				y: b
			}
		}

		function rb(b, a)
		{
			setTimeout(b, a || 0)
		}

		function H(b, d, c)
		{
			var a = !b || b == "inherit" ? "" : b;
			n(d, function(c)
			{
				var b = c.exec(a);
				if (b)
				{
					var d = a.substr(0, b.index),
						e = a.substr(b.index + b[0].length + 1, a.length - 1);
					a = d + e
				}
			});
			a = c + (!a.indexOf(" ") ? "" : " ") + a;
			return a
		}

		function tb(b, a)
		{
			if (i < 9) b.style.filter = a
		}
		f.Te = Ib;
		f.ed = q;
		f.Ae = db;
		f.xe = J;
		f.Sc = O;
		wb("transform");
		f.xc = function()
		{
			return i
		};
		f.wc = rb;

		function Y(a)
		{
			a.constructor === Y.caller && a.tc && a.tc.apply(a, Y.caller.arguments)
		}
		f.tc = Y;
		f.ib = function(a)
		{
			if (f.ue(a)) a = h.getElementById(a);
			return a
		};

		function t(a)
		{
			return a || g.event
		}
		f.sc = t;
		f.Sb = function(b)
		{
			b = t(b);
			var a = b.target || b.srcElement || h;
			if (a.nodeType == 3) a = f.pc(a);
			return a
		};
		f.uc = function(a)
		{
			a = t(a);
			return {
				x: a.pageX || a.clientX || 0,
				y: a.pageY || a.clientY || 0
			}
		};

		function D(c, d, a)
		{
			if (a !== l) c.style[d] = a == l ? "" : a;
			else
			{
				var b = c.currentStyle || c.style;
				a = b[d];
				if (a == "" && g.getComputedStyle)
				{
					b = c.ownerDocument.defaultView.getComputedStyle(c, j);
					b && (a = b.getPropertyValue(d) || b[d])
				}
				return a
			}
		}

		function ab(b, c, a, d)
		{
			if (a !== l)
			{
				if (a == j) a = "";
				else d && (a += "px");
				D(b, c, a)
			}
			else return p(D(b, c))
		}

		function m(c, a)
		{
			var d = a ? ab : D,
				b;
			if (a & 4) b = ub(c);
			return function(e, f)
			{
				return d(e, b ? b(e) : c, f, a & 2)
			}
		}

		function Db(b)
		{
			if (q() && s < 9)
			{
				var a = /opacity=([^)]*)/.exec(b.style.filter || "");
				return a ? p(a[1]) / 100 : 1
			}
			else return p(b.style.opacity || "1")
		}

		function Fb(b, a, f)
		{
			if (q() && s < 9)
			{
				var h = b.style.filter || "",
					i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
					e = c.round(100 * a),
					d = "";
				if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
				var g = H(h, [i], d);
				tb(b, g)
			}
			else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
		}
		var L = {
			Z: ["rotate"],
			N: ["rotateX"],
			O: ["rotateY"],
			Ab: ["skewX"],
			Bb: ["skewY"]
		};
		if (!J()) L = B(L,
		{
			p: ["scaleX", 2],
			q: ["scaleY", 2],
			P: ["translateZ", 1]
		});

		function M(d, a)
		{
			var c = "";
			if (a)
			{
				if (q() && i && i < 10)
				{
					delete a.N;
					delete a.O;
					delete a.P
				}
				b.e(a, function(d, b)
				{
					var a = L[b];
					if (a)
					{
						var e = a[1] || 0;
						if (N[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
					}
				});
				if (J())
				{
					if (a.Y || a.W || a.P) c += " translate3d(" + (a.Y || 0) + "px," + (a.W || 0) + "px," + (a.P || 0) + "px)";
					if (a.p == l) a.p = 1;
					if (a.q == l) a.q = 1;
					if (a.p != 1 || a.q != 1) c += " scale3d(" + a.p + ", " + a.q + ", 1)"
				}
			}
			d.style[K(d)] = c
		}
		f.Ac = m("transformOrigin", 4);
		f.Id = m("backfaceVisibility", 4);
		f.se = m("transformStyle", 4);
		f.re = m("perspective", 6);
		f.Ee = m("perspectiveOrigin", 4);
		f.Ue = function(a, b)
		{
			if (q() && s < 9 || s < 10 && Q()) a.style.zoom = b == 1 ? "" : b;
			else
			{
				var c = K(a),
					f = "scale(" + b + ")",
					e = a.style[c],
					g = new RegExp(/[\s]*scale\(.*?\)/g),
					d = H(e, [g], f);
				a.style[c] = d
			}
		};
		f.Pb = function(b, a)
		{
			return function(c)
			{
				c = t(c);
				var e = c.type,
					d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
				(!d || d !== a && !f.Ce(a, d)) && b(c)
			}
		};
		f.a = function(a, d, b, c)
		{
			a = f.ib(a);
			if (a.addEventListener)
			{
				d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
				a.addEventListener(d, b, c)
			}
			else if (a.attachEvent)
			{
				a.attachEvent("on" + d, b);
				c && a.setCapture && a.setCapture()
			}
		};
		f.A = function(a, c, d, b)
		{
			a = f.ib(a);
			if (a.removeEventListener)
			{
				c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
				a.removeEventListener(c, d, b)
			}
			else if (a.detachEvent)
			{
				a.detachEvent("on" + c, d);
				b && a.releaseCapture && a.releaseCapture()
			}
		};
		f.Ib = function(a)
		{
			a = t(a);
			a.preventDefault && a.preventDefault();
			a.cancel = d;
			a.returnValue = k
		};
		f.De = function(a)
		{
			a = t(a);
			a.stopPropagation && a.stopPropagation();
			a.cancelBubble = d
		};
		f.D = function(d, c)
		{
			var a = [].slice.call(arguments, 2),
				b = function()
				{
					var b = a.concat([].slice.call(arguments, 0));
					return c.apply(d, b)
				};
			return b
		};
		f.Hc = function(a, b)
		{
			if (b == l) return a.textContent || a.innerText;
			var c = h.createTextNode(b);
			f.Jb(a);
			a.appendChild(c)
		};
		f.Hb = function(d, c)
		{
			for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
			return b
		};

		function mb(a, c, e, b)
		{
			b = b || "u";
			for (a = a ? a.firstChild : j; a; a = a.nextSibling)
				if (a.nodeType == 1)
				{
					if (U(a, b) == c) return a;
					if (!e)
					{
						var d = mb(a, c, e, b);
						if (d) return d
					}
				}
		}
		f.o = mb;

		function S(a, d, f, b)
		{
			b = b || "u";
			var c = [];
			for (a = a ? a.firstChild : j; a; a = a.nextSibling)
				if (a.nodeType == 1)
				{
					U(a, b) == d && c.push(a);
					if (!f)
					{
						var e = S(a, d, f, b);
						if (e.length) c = c.concat(e)
					}
				}
			return c
		}
		f.Fd = S;

		function gb(a, c, d)
		{
			for (a = a ? a.firstChild : j; a; a = a.nextSibling)
				if (a.nodeType == 1)
				{
					if (a.tagName == c) return a;
					if (!d)
					{
						var b = gb(a, c, d);
						if (b) return b
					}
				}
		}
		f.td = gb;
		f.ud = function(b, a)
		{
			return b.getElementsByTagName(a)
		};

		function B()
		{
			var e = arguments,
				d, c, b, a, g = 1 & e[0],
				f = 1 + g;
			d = e[f - 1] ||
			{};
			for (; f < e.length; f++)
				if (c = e[f])
					for (b in c)
					{
						a = c[b];
						if (a !== l)
						{
							a = c[b];
							var h = d[b];
							d[b] = g && (A(h) || A(a)) ? B(g,
							{}, h, a) : a
						}
					}
				return d
		}
		f.bb = B;

		function Z(f, g)
		{
			var d = {},
				c, a, b;
			for (c in f)
			{
				a = f[c];
				b = g[c];
				if (a !== b)
				{
					var e;
					if (A(a) && A(b))
					{
						a = Z(a, b);
						e = !lb(a)
					}!e && (d[c] = a)
				}
			}
			return d
		}
		f.vc = function(a)
		{
			return C(a) == "function"
		};
		f.ue = function(a)
		{
			return C(a) == "string"
		};
		f.sd = function(a)
		{
			return !isNaN(p(a)) && isFinite(a)
		};
		f.e = n;

		function R(a)
		{
			return h.createElement(a)
		}
		f.mb = function()
		{
			return R("DIV")
		};
		f.Bd = function()
		{
			return R("SPAN")
		};
		f.bd = function() {};

		function V(b, c, a)
		{
			if (a == l) return b.getAttribute(c);
			b.setAttribute(c, a)
		}

		function U(a, b)
		{
			return V(a, b) || V(a, "data-" + b)
		}
		f.n = V;
		f.g = U;

		function x(b, a)
		{
			if (a == l) return b.className;
			b.className = a
		}
		f.Mc = x;

		function qb(b)
		{
			var a = {};
			n(b, function(b)
			{
				a[b] = b
			});
			return a
		}

		function sb(b, a)
		{
			return b.match(a || Ab)
		}

		function P(b, a)
		{
			return qb(sb(b || "", a))
		}
		f.xd = sb;

		function bb(b, c)
		{
			var a = "";
			n(c, function(c)
			{
				a && (a += b);
				a += c
			});
			return a
		}

		function E(a, c, b)
		{
			x(a, bb(" ", B(Z(P(x(a)), P(c)), P(b))))
		}
		f.pc = function(a)
		{
			return a.parentNode
		};
		f.G = function(a)
		{
			f.H(a, "none")
		};
		f.I = function(a, b)
		{
			f.H(a, b ? "none" : "")
		};
		f.pd = function(b, a)
		{
			b.removeAttribute(a)
		};
		f.Hd = function()
		{
			return q() && i < 10
		};
		f.rd = function(d, a)
		{
			if (a) d.style.clip = "rect(" + c.round(a.i || a.m || 0) + "px " + c.round(a.s) + "px " + c.round(a.z) + "px " + c.round(a.j || a.r || 0) + "px)";
			else if (a !== l)
			{
				var g = d.style.cssText,
					f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
					e = H(g, f, "");
				b.cb(d, e)
			}
		};
		f.L = function()
		{
			return +new Date
		};
		f.E = function(b, a)
		{
			b.appendChild(a)
		};
		f.Eb = function(b, a, c)
		{
			(c || a.parentNode).insertBefore(b, a)
		};
		f.vb = function(b, a)
		{
			a = a || b.parentNode;
			a && a.removeChild(b)
		};
		f.Ad = function(a, b)
		{
			n(a, function(a)
			{
				f.vb(a, b)
			})
		};
		f.Jb = function(a)
		{
			f.Ad(f.Hb(a, d), a)
		};
		f.Dd = function(a, b)
		{
			var c = f.pc(a);
			b & 1 && f.B(a, (f.k(c) - f.k(a)) / 2);
			b & 2 && f.C(a, (f.l(c) - f.l(a)) / 2)
		};
		f.Ed = function(b, a)
		{
			return parseInt(b, a || 10)
		};
		f.Cd = p;
		f.Ce = function(b, a)
		{
			var c = h.body;
			while (a && b !== a && c !== a) try
			{
				a = a.parentNode
			}
			catch (d)
			{
				return k
			}
			return b === a
		};

		function W(d, c, b)
		{
			var a = d.cloneNode(!c);
			!b && f.pd(a, "id");
			return a
		}
		f.sb = W;
		f.nb = function(e, g)
		{
			var a = new Image;

			function b(e, d)
			{
				f.A(a, "load", b);
				f.A(a, "abort", c);
				f.A(a, "error", c);
				g && g(a, d)
			}

			function c(a)
			{
				b(a, d)
			}
			if (ib() && i < 11.6 || !e) b(!e);
			else
			{
				f.a(a, "load", b);
				f.a(a, "abort", c);
				f.a(a, "error", c);
				a.src = e
			}
		};
		f.zd = function(d, a, e)
		{
			var c = d.length + 1;

			function b(b)
			{
				c--;
				if (a && b && b.src == a.src) a = b;
				!c && e && e(a)
			}
			n(d, function(a)
			{
				f.nb(a.src, b)
			});
			b()
		};
		f.yd = function(a, g, i, h)
		{
			if (h) a = W(a);
			var c = S(a, g);
			if (!c.length) c = b.ud(a, g);
			for (var f = c.length - 1; f > -1; f--)
			{
				var d = c[f],
					e = W(i);
				x(e, x(d));
				b.cb(e, d.style.cssText);
				b.Eb(e, d);
				b.vb(d)
			}
			return a
		};

		function Gb(a)
		{
			var k = this,
				p = "",
				r = ["av", "pv", "ds", "dn"],
				e = [],
				q, j = 0,
				g = 0,
				d = 0;

			function i()
			{
				E(a, q, e[d || j || g & 2 || g]);
				b.Q(a, "pointer-events", d ? "none" : "")
			}

			function c()
			{
				j = 0;
				i();
				f.A(h, "mouseup", c);
				f.A(h, "touchend", c);
				f.A(h, "touchcancel", c)
			}

			function o(a)
			{
				if (d) f.Ib(a);
				else
				{
					j = 4;
					i();
					f.a(h, "mouseup", c);
					f.a(h, "touchend", c);
					f.a(h, "touchcancel", c)
				}
			}
			k.wd = function(a)
			{
				if (a === l) return g;
				g = a & 2 || a & 1;
				i()
			};
			k.zc = function(a)
			{
				if (a === l) return !d;
				d = a ? 0 : 3;
				i()
			};
			k.S = a = f.ib(a);
			var m = b.xd(x(a));
			if (m) p = m.shift();
			n(r, function(a)
			{
				e.push(p + a)
			});
			q = bb(" ", e);
			e.unshift("");
			f.a(a, "mousedown", o);
			f.a(a, "touchstart", o)
		}
		f.Ob = function(a)
		{
			return new Gb(a)
		};
		f.Q = D;
		f.Cb = m("overflow");
		f.C = m("top", 2);
		f.B = m("left", 2);
		f.k = m("width", 2);
		f.l = m("height", 2);
		f.ld = m("marginLeft", 2);
		f.nd = m("marginTop", 2);
		f.v = m("position");
		f.H = m("display");
		f.u = m("zIndex", 1);
		f.Lb = function(b, a, c)
		{
			if (a != l) Fb(b, a, c);
			else return Db(b)
		};
		f.cb = function(a, b)
		{
			if (b != l) a.style.cssText = b;
			else return a.style.cssText
		};
		var T = {
			fb: f.Lb,
			i: f.C,
			j: f.B,
			ub: f.k,
			xb: f.l,
			db: f.v,
			df: f.H,
			gb: f.u
		};

		function w(g, k)
		{
			var e = O(),
				b = J(),
				d = vb(),
				h = K(g);

			function i(b, d, a)
			{
				var e = b.ab(u(-d / 2, -a / 2)),
					f = b.ab(u(d / 2, -a / 2)),
					g = b.ab(u(d / 2, a / 2)),
					h = b.ab(u(-d / 2, a / 2));
				b.ab(u(300, 300));
				return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
			}

			function a(d, a)
			{
				a = a ||
				{};
				var n = a.P || 0,
					p = (a.N || 0) % 360,
					q = (a.O || 0) % 360,
					u = (a.Z || 0) % 360,
					k = a.p,
					m = a.q,
					g = a.cf;
				if (k == l) k = 1;
				if (m == l) m = 1;
				if (g == l) g = 1;
				if (e)
				{
					n = 0;
					p = 0;
					q = 0;
					g = 0
				}
				var c = new Cb(a.Y, a.W, n);
				c.N(p);
				c.O(q);
				c.md(u);
				c.ne(a.Ab, a.Bb);
				c.jc(k, m, g);
				if (b)
				{
					c.jb(a.r, a.m);
					d.style[h] = c.Jd()
				}
				else if (!X || X < 9)
				{
					var o = "",
						j = {
							x: 0,
							y: 0
						};
					if (a.M) j = i(c, a.M, a.V);
					f.nd(d, j.y);
					f.ld(d, j.x);
					o = c.ze();
					var s = d.style.filter,
						t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
						r = H(s, [t], o);
					tb(d, r)
				}
			}
			w = function(e, c)
			{
				c = c ||
				{};
				var h = c.r,
					i = c.m,
					g;
				n(T, function(a, b)
				{
					g = c[b];
					g !== l && a(e, g)
				});
				f.rd(e, c.c);
				if (!b)
				{
					h != l && f.B(e, (c.mc || 0) + h);
					i != l && f.C(e, (c.nc || 0) + i)
				}
				if (c.te)
					if (d) rb(f.D(j, M, e, c));
					else a(e, c)
			};
			f.zb = M;
			if (d) f.zb = w;
			if (e) f.zb = a;
			else if (!b) a = M;
			f.K = w;
			w(g, k)
		}
		f.zb = w;
		f.K = w;

		function Cb(i, k, o)
		{
			var d = this,
				b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, i || 0, k || 0, o || 0, 1],
				h = c.sin,
				g = c.cos,
				l = c.tan;

			function f(a)
			{
				return a * c.PI / 180
			}

			function n(a, b)
			{
				return {
					x: a,
					y: b
				}
			}

			function m(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j)
			{
				return [c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B + m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q + t * y + u * d, o * i + r * s + t * B + u * h, o * n + r * v + t * D + u * j, w * a + z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h, w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q + f * y + k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j]
			}

			function e(c, a)
			{
				return m.apply(j, (a || b).concat(c))
			}
			d.jc = function(a, c, d)
			{
				if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
			};
			d.jb = function(a, c, d)
			{
				b[12] += a || 0;
				b[13] += c || 0;
				b[14] += d || 0
			};
			d.N = function(c)
			{
				if (c)
				{
					a = f(c);
					var d = g(a),
						i = h(a);
					b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1])
				}
			};
			d.O = function(c)
			{
				if (c)
				{
					a = f(c);
					var d = g(a),
						i = h(a);
					b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1])
				}
			};
			d.md = function(c)
			{
				if (c)
				{
					a = f(c);
					var d = g(a),
						i = h(a);
					b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
				}
			};
			d.ne = function(a, c)
			{
				if (a || c)
				{
					i = f(a);
					k = f(c);
					b = e([1, l(k), 0, 0, l(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
				}
			};
			d.ab = function(c)
			{
				var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
				return n(a[12], a[13])
			};
			d.Jd = function()
			{
				return "matrix3d(" + b.join(",") + ")"
			};
			d.ze = function()
			{
				return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
			}
		}
		new function()
		{
			var a = this;

			function b(d, g)
			{
				for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
					for (var k = f[c] = [], b = 0; b < h; b++)
					{
						for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
						k[b] = e
					}
				return f
			}
			a.p = function(b, c)
			{
				return a.Rc(b, c, 0)
			};
			a.q = function(b, c)
			{
				return a.Rc(b, 0, c)
			};
			a.Rc = function(a, c, d)
			{
				return b(a, [
					[c, 0],
					[0, d]
				])
			};
			a.ab = function(d, c)
			{
				var a = b(d, [
					[c.x],
					[c.y]
				]);
				return u(a[0][0], a[1][0])
			}
		};
		var N = {
			mc: 0,
			nc: 0,
			r: 0,
			m: 0,
			U: 1,
			p: 1,
			q: 1,
			Z: 0,
			N: 0,
			O: 0,
			Y: 0,
			W: 0,
			P: 0,
			Ab: 0,
			Bb: 0
		};
		f.Pd = function(a)
		{
			var c = a ||
			{};
			if (a)
				if (b.vc(a)) c = {
					ac: c
				};
				else if (b.vc(a.c)) c.c = {
				ac: a.c
			};
			return c
		};
		f.Wd = function(k, m, x, q, z, A, n)
		{
			var a = m;
			if (k)
			{
				a = {};
				for (var g in m)
				{
					var B = A[g] || 1,
						w = z[g] || [0, 1],
						f = (x - w[0]) / w[1];
					f = c.min(c.max(f, 0), 1);
					f = f * B;
					var u = c.floor(f);
					if (f != u) f -= u;
					var h = q.ac || e.le,
						i, C = k[g],
						o = m[g];
					if (b.sd(o))
					{
						h = q[g] || h;
						var y = h(f);
						i = C + o * y
					}
					else
					{
						i = b.bb(
						{
							Gb:
							{}
						}, k[g]);
						var v = q[g] ||
						{};
						b.e(o.Gb || o, function(d, a)
						{
							h = v[a] || v.ac || h;
							var c = h(f),
								b = d * c;
							i.Gb[a] = b;
							i[a] += b
						})
					}
					a[g] = i
				}
				var t = b.e(m, function(b, a)
				{
					return N[a] != l
				});
				t && b.e(N, function(c, b)
				{
					if (a[b] == l && k[b] !== l) a[b] = k[b]
				});
				if (t)
				{
					if (a.U) a.p = a.q = a.U;
					a.M = n.M;
					a.V = n.V;
					a.te = d
				}
			}
			if (m.c && n.jb)
			{
				var p = a.c.Gb,
					s = (p.i || 0) + (p.z || 0),
					r = (p.j || 0) + (p.s || 0);
				a.j = (a.j || 0) + r;
				a.i = (a.i || 0) + s;
				a.c.j -= r;
				a.c.s -= r;
				a.c.i -= s;
				a.c.z -= s
			}
			if (a.c && b.Hd() && !a.c.i && !a.c.j && !a.c.m && !a.c.r && a.c.s == n.M && a.c.z == n.V) a.c = j;
			return a
		}
	};

	function n()
	{
		var a = this,
			d = [];

		function i(a, b)
		{
			d.push(
			{
				dc: a,
				hc: b
			})
		}

		function h(a, c)
		{
			b.e(d, function(b, e)
			{
				b.dc == a && b.hc === c && d.splice(e, 1)
			})
		}
		a.ob = a.addEventListener = i;
		a.removeEventListener = h;
		a.f = function(a)
		{
			var c = [].slice.call(arguments, 1);
			b.e(d, function(b)
			{
				b.dc == a && b.hc.apply(g, c)
			})
		}
	}
	var m = function(z, C, i, J, M, L)
	{
		z = z || 0;
		var a = this,
			q, n, o, u, A = 0,
			G, H, F, B, y = 0,
			h = 0,
			m = 0,
			D, l, f, e, p, w = [],
			x;

		function O(a)
		{
			f += a;
			e += a;
			l += a;
			h += a;
			m += a;
			y += a
		}

		function t(o)
		{
			var g = o;
			if (p && (g >= e || g <= f)) g = ((g - f) % p + p) % p + f;
			if (!D || u || h != g)
			{
				var j = c.min(g, e);
				j = c.max(j, f);
				if (!D || u || j != m)
				{
					if (L)
					{
						var k = (j - l) / (C || 1);
						if (i.Zd) k = 1 - k;
						var n = b.Wd(M, L, k, G, F, H, i);
						if (x) b.e(n, function(b, a)
						{
							x[a] && x[a](J, b)
						});
						else b.K(J, n)
					}
					a.cc(m - l, j - l);
					m = j;
					b.e(w, function(b, c)
					{
						var a = o < h ? w[w.length - c - 1] : b;
						a.J(m - y)
					});
					var r = h,
						q = m;
					h = g;
					D = d;
					a.wb(r, q)
				}
			}
		}

		function E(a, b, d)
		{
			b && a.ec(e);
			if (!d)
			{
				f = c.min(f, a.Xc() + y);
				e = c.max(e, a.bc() + y)
			}
			w.push(a)
		}
		var r = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.msRequestAnimationFrame;
		if (b.Ae() && b.xc() < 7) r = j;
		r = r || function(a)
		{
			b.wc(a, i.Uc)
		};

		function I()
		{
			if (q)
			{
				var d = b.L(),
					e = c.min(d - A, i.hd),
					a = h + e * o;
				A = d;
				if (a * o >= n * o) a = n;
				t(a);
				if (!u && a * o >= n * o) K(B);
				else r(I)
			}
		}

		function s(g, i, j)
		{
			if (!q)
			{
				q = d;
				u = j;
				B = i;
				g = c.max(g, f);
				g = c.min(g, e);
				n = g;
				o = n < h ? -1 : 1;
				a.gd();
				A = b.L();
				r(I)
			}
		}

		function K(b)
		{
			if (q)
			{
				u = q = B = k;
				a.jd();
				b && b()
			}
		}
		a.Kc = function(a, b, c)
		{
			s(a ? h + a : e, b, c)
		};
		a.lc = s;
		a.X = K;
		a.me = function(a)
		{
			s(a)
		};
		a.R = function()
		{
			return h
		};
		a.Ic = function()
		{
			return n
		};
		a.pb = function()
		{
			return m
		};
		a.J = t;
		a.jb = function(a)
		{
			t(h + a)
		};
		a.yc = function()
		{
			return q
		};
		a.Yd = function(a)
		{
			p = a
		};
		a.ec = O;
		a.kc = function(a, b)
		{
			E(a, 0, b)
		};
		a.fc = function(a)
		{
			E(a, 1)
		};
		a.Xc = function()
		{
			return f
		};
		a.bc = function()
		{
			return e
		};
		a.wb = a.gd = a.jd = a.cc = b.bd;
		a.gc = b.L();
		i = b.bb(
		{
			Uc: 16,
			hd: 50
		}, i);
		p = i.Dc;
		x = i.Pe;
		f = l = z;
		e = z + C;
		H = i.Oe ||
		{};
		F = i.qd ||
		{};
		G = b.Pd(i.hb)
	};
	new(function() {});
	var i = function(p, fc)
	{
		var f = this;

		function Bc()
		{
			var a = this;
			m.call(a, -1e8, 2e8);
			a.He = function()
			{
				var b = a.pb(),
					d = c.floor(b),
					f = t(d),
					e = b - c.floor(b);
				return {
					T: f,
					Ie: d,
					db: e
				}
			};
			a.wb = function(b, a)
			{
				var e = c.floor(a);
				if (e != a && a > b) e++;
				Tb(e, d);
				f.f(i.Je, t(a), t(b), a, b)
			}
		}

		function Ac()
		{
			var a = this;
			m.call(a, 0, 0,
			{
				Dc: r
			});
			b.e(C, function(b)
			{
				D & 1 && b.Yd(r);
				a.fc(b);
				b.ec(kb / bc)
			})
		}

		function zc()
		{
			var a = this,
				b = Ub.S;
			m.call(a, -1, 2,
			{
				hb: e.ke,
				Pe:
				{
					db: Zb
				},
				Dc: r
			}, b,
			{
				db: 1
			},
			{
				db: -2
			});
			a.Nb = b
		}

		function mc(o, n)
		{
			var b = this,
				e, g, h, l, c;
			m.call(b, -1e8, 2e8,
			{
				hd: 100
			});
			b.gd = function()
			{
				M = d;
				R = j;
				f.f(i.Ke, t(w.R()), w.R())
			};
			b.jd = function()
			{
				M = k;
				l = k;
				var a = w.He();
				f.f(i.Le, t(w.R()), w.R());
				!a.db && Dc(a.Ie, s)
			};
			b.wb = function(i, f)
			{
				var b;
				if (l) b = c;
				else
				{
					b = g;
					if (h)
					{
						var d = f / h;
						b = a.Vc(d) * (g - e) + e
					}
				}
				w.J(b)
			};
			b.tb = function(a, d, c, f)
			{
				e = a;
				g = d;
				h = c;
				w.J(a);
				b.J(0);
				b.lc(c, f)
			};
			b.Me = function(a)
			{
				l = d;
				c = a;
				b.Kc(a, j, d)
			};
			b.Ne = function(a)
			{
				c = a
			};
			w = new Bc;
			w.kc(o);
			w.kc(n)
		}

		function oc()
		{
			var c = this,
				a = Xb();
			b.u(a, 0);
			b.Q(a, "pointerEvents", "none");
			c.S = a;
			c.yb = function()
			{
				b.G(a);
				b.Jb(a)
			}
		}

		function xc(o, g)
		{
			var e = this,
				q, M, v, l, y = [],
				x, B, W, H, S, F, h, w, p;
			m.call(e, -u, u + 1,
			{});

			function E(a)
			{
				q && q.Pc();
				T(o, a, 0);
				F = d;
				q = new I.F(o, I, b.Cd(b.g(o, "idle")) || lc);
				q.J(0)
			}

			function Z()
			{
				q.gc < I.gc && E()
			}

			function O(p, r, o)
			{
				if (!H)
				{
					H = d;
					if (l && o)
					{
						var h = o.width,
							c = o.height,
							n = h,
							m = c;
						if (h && c && a.eb)
						{
							if (a.eb & 3 && (!(a.eb & 4) || h > K || c > J))
							{
								var j = k,
									q = K / J * c / h;
								if (a.eb & 1) j = q > 1;
								else if (a.eb & 2) j = q < 1;
								n = j ? h * J / c : K;
								m = j ? J : c * K / h
							}
							b.k(l, n);
							b.l(l, m);
							b.C(l, (J - m) / 2);
							b.B(l, (K - n) / 2)
						}
						b.v(l, "absolute");
						f.f(i.Qe, g)
					}
				}
				b.G(r);
				p && p(e)
			}

			function Y(b, c, d, f)
			{
				if (f == R && s == g && N)
					if (!Cc)
					{
						var a = t(b);
						A.we(a, g, c, e, d);
						c.Re();
						U.ec(a - U.Xc() - 1);
						U.J(a);
						z.tb(b, b, 0)
					}
			}

			function bb(b)
			{
				if (b == R && s == g)
				{
					if (!h)
					{
						var a = j;
						if (A)
							if (A.T == g) a = A.Fe();
							else A.yb();
						Z();
						h = new vc(o, g, a, q);
						h.Qc(p)
					}!h.yc() && h.Kb()
				}
			}

			function G(d, f, l)
			{
				if (d == g)
				{
					if (d != f) C[f] && C[f].Tc();
					else !l && h && h.Se();
					p && p.zc();
					var m = R = b.L();
					e.nb(b.D(j, bb, m))
				}
				else
				{
					var k = c.min(g, d),
						i = c.max(g, d),
						o = c.min(i - k, k + r - i),
						n = u + a.qe - 1;
					(!S || o <= n) && e.nb()
				}
			}

			function db()
			{
				if (s == g && h)
				{
					h.X();
					p && p.Be();
					p && p.oe();
					h.id()
				}
			}

			function eb()
			{
				s == g && h && h.X()
			}

			function ab(a)
			{
				!P && f.f(i.pe, g, a)
			}

			function Q()
			{
				p = w.pInstance;
				h && h.Qc(p)
			}
			e.nb = function(c, a)
			{
				a = a || v;
				if (y.length && !H)
				{
					b.I(a);
					if (!W)
					{
						W = d;
						f.f(i.Kd, g);
						b.e(y, function(a)
						{
							if (!b.n(a, "src"))
							{
								a.src = b.g(a, "src2");
								b.H(a, a["display-origin"])
							}
						})
					}
					b.zd(y, l, b.D(j, O, c, a))
				}
				else O(c, a)
			};
			e.Ld = function()
			{
				var i = g;
				if (a.rc < 0) i -= r;
				var d = i + a.rc * tc;
				if (D & 2) d = t(d);
				if (!(D & 1) && !ib) d = c.max(0, c.min(d, r - u));
				if (d != g)
				{
					if (A)
					{
						var f = A.ve(r);
						if (f)
						{
							var k = R = b.L(),
								h = C[t(d)];
							return h.nb(b.D(j, Y, d, h, f, k), v)
						}
					}
					cb(d)
				}
				else if (a.kb)
				{
					e.Tc();
					G(g, g)
				}
			};
			e.Xb = function()
			{
				G(g, g, d)
			};
			e.Tc = function()
			{
				p && p.Be();
				p && p.oe();
				e.cd();
				h && h.Md();
				h = j;
				E()
			};
			e.Re = function()
			{
				b.G(o)
			};
			e.cd = function()
			{
				b.I(o)
			};
			e.Nd = function()
			{
				p && p.zc()
			};

			function T(a, c, e)
			{
				if (b.n(a, "jssor-slider")) return;
				if (!F)
				{
					if (a.tagName == "IMG")
					{
						y.push(a);
						if (!b.n(a, "src"))
						{
							S = d;
							a["display-origin"] = b.H(a);
							b.G(a)
						}
					}
					b.Sc() && b.u(a, (b.u(a) || 0) + 1)
				}
				var f = b.Hb(a);
				b.e(f, function(f)
				{
					var h = f.tagName,
						i = b.g(f, "u");
					if (i == "player" && !w)
					{
						w = f;
						if (w.pInstance) Q();
						else b.a(w, "dataavailable", Q)
					}
					if (i == "caption")
					{
						if (c)
						{
							b.Ac(f, b.g(f, "to"));
							b.Id(f, b.g(f, "bf"));
							b.g(f, "3d") && b.se(f, "preserve-3d")
						}
						else if (!b.ed())
						{
							var g = b.sb(f, k, d);
							b.Eb(g, f, a);
							b.vb(f, a);
							f = g;
							c = d
						}
					}
					else if (!F && !e && !l)
					{
						if (h == "A")
						{
							if (b.g(f, "u") == "image") l = b.td(f, "IMG");
							else l = b.o(f, "image", d);
							if (l)
							{
								x = f;
								b.H(x, "block");
								b.K(x, V);
								B = b.sb(x, d);
								b.v(x, "relative");
								b.Lb(B, 0);
								b.Q(B, "backgroundColor", "#000")
							}
						}
						else if (h == "IMG" && b.g(f, "u") == "image") l = f;
						if (l)
						{
							l.border = 0;
							b.K(l, V)
						}
					}
					T(f, c, e + 1)
				})
			}
			e.cc = function(c, b)
			{
				var a = u - b;
				Zb(M, a)
			};
			e.T = g;
			n.call(e);
			b.re(o, b.g(o, "p"));
			b.Ee(o, b.g(o, "po"));
			var L = b.o(o, "thumb", d);
			if (L)
			{
				b.sb(L);
				b.G(L)
			}
			b.I(o);
			v = b.sb(gb);
			b.u(v, 1e3);
			b.a(o, "click", ab);
			E(d);
			e.ye = l;
			e.Wc = B;
			e.Nb = M = o;
			b.E(M, v);
			f.ob(203, G);
			f.ob(28, eb);
			f.ob(24, db)
		}

		function vc(y, g, p, q)
		{
			var a = this,
				n = 0,
				u = 0,
				h, j, e, c, l, t, r, o = C[g];
			m.call(a, 0, 0);

			function v()
			{
				b.Jb(L);
				cc && l && o.Wc && b.E(L, o.Wc);
				b.I(L, !l && o.ye)
			}

			function w()
			{
				a.Kb()
			}

			function x(b)
			{
				r = b;
				a.X();
				a.Kb()
			}
			a.Kb = function()
			{
				var b = a.pb();
				if (!B && !M && !r && s == g)
				{
					if (!b)
					{
						if (h && !l)
						{
							l = d;
							a.id(d);
							f.f(i.Od, g, n, u, h, c)
						}
						v()
					}
					var k, p = i.Zc;
					if (b != c)
						if (b == e) k = c;
						else if (b == j) k = e;
					else if (!b) k = j;
					else k = a.Ic();
					f.f(p, g, b, n, j, e, c);
					var m = N && (!E || F);
					if (b == c)(e != c && !(E & 12) || m) && o.Ld();
					else(m || b != e) && a.lc(k, w)
				}
			};
			a.Se = function()
			{
				e == c && e == a.pb() && a.J(j)
			};
			a.Md = function()
			{
				A && A.T == g && A.yb();
				var b = a.pb();
				b < c && f.f(i.Zc, g, -b - 1, n, j, e, c)
			};
			a.id = function(a)
			{
				p && b.Cb(lb, a && p.oc.bf ? "" : "hidden")
			};
			a.cc = function(b, a)
			{
				if (l && a >= h)
				{
					l = k;
					v();
					o.cd();
					A.yb();
					f.f(i.Qd, g, n, u, h, c)
				}
				f.f(i.Rd, g, a, n, j, e, c)
			};
			a.Qc = function(a)
			{
				if (a && !t)
				{
					t = a;
					a.ob($JssorPlayer$.vd, x)
				}
			};
			p && a.fc(p);
			h = a.bc();
			a.fc(q);
			j = h + q.kd;
			e = h + q.fd;
			c = a.bc()
		}

		function Kb(a, c, d)
		{
			b.B(a, c);
			b.C(a, d)
		}

		function Zb(c, b)
		{
			var a = x > 0 ? x : fb,
				d = zb * b * (a & 1),
				e = Ab * b * (a >> 1 & 1);
			Kb(c, d, e)
		}

		function Pb()
		{
			qb = M;
			Ib = z.Ic();
			G = w.R()
		}

		function gc()
		{
			Pb();
			if (B || !F && E & 12)
			{
				z.X();
				f.f(i.Sd)
			}
		}

		function ec(f)
		{
			if (!B && (F || !(E & 12)) && !z.yc())
			{
				var d = w.R(),
					b = c.ceil(G);
				if (f && c.abs(H) >= a.qc)
				{
					b = c.ceil(d);
					b += jb
				}
				if (!(D & 1)) b = c.min(r - u, c.max(b, 0));
				var e = c.abs(b - d);
				e = 1 - c.pow(1 - e, 5);
				if (!P && qb) z.me(Ib);
				else if (d == b)
				{
					tb.Nd();
					tb.Xb()
				}
				else z.tb(d, b, e * Vb)
			}
		}

		function Hb(a)
		{
			!b.g(b.Sb(a), "nodrag") && b.Ib(a)
		}

		function rc(a)
		{
			Yb(a, 1)
		}

		function Yb(a, c)
		{
			a = b.sc(a);
			var l = b.Sb(a);
			if (!O && !b.g(l, "nodrag") && sc() && (!c || a.touches.length == 1))
			{
				B = d;
				yb = k;
				R = j;
				b.a(h, c ? "touchmove" : "mousemove", Bb);
				b.L();
				P = 0;
				gc();
				if (!qb) x = 0;
				if (c)
				{
					var g = a.touches[0];
					ub = g.clientX;
					vb = g.clientY
				}
				else
				{
					var e = b.uc(a);
					ub = e.x;
					vb = e.y
				}
				H = 0;
				hb = 0;
				jb = 0;
				f.f(i.Td, t(G), G, a)
			}
		}

		function Bb(e)
		{
			if (B)
			{
				e = b.sc(e);
				var f;
				if (e.type != "mousemove")
				{
					var l = e.touches[0];
					f = {
						x: l.clientX,
						y: l.clientY
					}
				}
				else f = b.uc(e);
				if (f)
				{
					var j = f.x - ub,
						k = f.y - vb;
					if (c.floor(G) != G) x = x || fb & O;
					if ((j || k) && !x)
					{
						if (O == 3)
							if (c.abs(k) > c.abs(j)) x = 2;
							else x = 1;
						else x = O;
						if (ob && x == 1 && c.abs(k) - c.abs(j) > 3) yb = d
					}
					if (x)
					{
						var a = k,
							i = Ab;
						if (x == 1)
						{
							a = j;
							i = zb
						}
						if (!(D & 1))
						{
							if (a > 0)
							{
								var g = i * s,
									h = a - g;
								if (h > 0) a = g + c.sqrt(h) * 5
							}
							if (a < 0)
							{
								var g = i * (r - u - s),
									h = -a - g;
								if (h > 0) a = -g - c.sqrt(h) * 5
							}
						}
						if (H - hb < -2) jb = 0;
						else if (H - hb > 2) jb = -1;
						hb = H;
						H = a;
						sb = G - H / i / (Y || 1);
						if (H && x && !yb)
						{
							b.Ib(e);
							if (!M) z.Me(sb);
							else z.Ne(sb)
						}
					}
				}
			}
		}

		function bb()
		{
			qc();
			if (B)
			{
				B = k;
				b.L();
				b.A(h, "mousemove", Bb);
				b.A(h, "touchmove", Bb);
				P = H;
				z.X();
				var a = w.R();
				f.f(i.Ud, t(a), a, t(G), G);
				E & 12 && Pb();
				ec(d)
			}
		}

		function jc(c)
		{
			if (P)
			{
				b.De(c);
				var a = b.Sb(c);
				while (a && v !== a)
				{
					a.tagName == "A" && b.Ib(c);
					try
					{
						a = a.parentNode
					}
					catch (d)
					{
						break
					}
				}
			}
		}

		function Jb(a)
		{
			C[s];
			s = t(a);
			tb = C[s];
			Tb(a);
			return s
		}

		function Dc(a, b)
		{
			x = 0;
			Jb(a);
			f.f(i.Vd, t(a), b)
		}

		function Tb(a, c)
		{
			wb = a;
			b.e(S, function(b)
			{
				b.Zb(t(a), a, c)
			})
		}

		function sc()
		{
			var b = i.Jc || 0,
				a = X;
			if (ob) a & 1 && (a &= 1);
			i.Jc |= a;
			return O = a & ~b
		}

		function qc()
		{
			if (O)
			{
				i.Jc &= ~X;
				O = 0
			}
		}

		function Xb()
		{
			var a = b.mb();
			b.K(a, V);
			b.v(a, "absolute");
			return a
		}

		function t(a)
		{
			return (a % r + r) % r
		}

		function kc(b, d)
		{
			if (d)
				if (!D)
				{
					b = c.min(c.max(b + wb, 0), r - u);
					d = k
				}
				else if (D & 2)
			{
				b = t(b + wb);
				d = k
			}
			cb(b, a.Db, d)
		}

		function xb()
		{
			b.e(S, function(a)
			{
				a.Yb(a.Fb.af <= F)
			})
		}

		function hc()
		{
			if (!F)
			{
				F = 1;
				xb();
				if (!B)
				{
					E & 12 && ec();
					E & 3 && C[s].Xb()
				}
			}
		}

		function Ec()
		{
			if (F)
			{
				F = 0;
				xb();
				B || !(E & 12) || gc()
			}
		}

		function ic()
		{
			V = {
				ub: K,
				xb: J,
				i: 0,
				j: 0
			};
			b.e(T, function(a)
			{
				b.K(a, V);
				b.v(a, "absolute");
				b.Cb(a, "hidden");
				b.G(a)
			});
			b.K(gb, V)
		}

		function ab(b, a)
		{
			cb(b, a, d)
		}

		function cb(g, f, j)
		{
			if (Rb && (!B && (F || !(E & 12)) || a.Cc))
			{
				M = d;
				B = k;
				z.X();
				if (f == l) f = Vb;
				var e = Cb.pb(),
					b = g;
				if (j)
				{
					b = e + g;
					if (g > 0) b = c.ceil(b);
					else b = c.floor(b)
				}
				if (D & 2) b = t(b);
				if (!(D & 1)) b = c.max(0, c.min(b, r - u));
				var i = (b - e) % r;
				b = e + i;
				var h = e == b ? 0 : f * c.abs(i);
				h = c.min(h, f * u * 1.5);
				z.tb(e, b, h || 1)
			}
		}
		f.Kc = function()
		{
			if (!N)
			{
				N = d;
				C[s] && C[s].Xb()
			}
		};

		function W()
		{
			return b.k(y || p)
		}

		function nb()
		{
			return b.l(y || p)
		}
		f.M = W;
		f.V = nb;

		function Eb(c, d)
		{
			if (c == l) return b.k(p);
			if (!y)
			{
				var a = b.mb(h);
				b.Mc(a, b.Mc(p));
				b.cb(a, b.cb(p));
				b.H(a, "block");
				b.v(a, "relative");
				b.C(a, 0);
				b.B(a, 0);
				b.Cb(a, "visible");
				y = b.mb(h);
				b.v(y, "absolute");
				b.C(y, 0);
				b.B(y, 0);
				b.k(y, b.k(p));
				b.l(y, b.l(p));
				b.Ac(y, "0 0");
				b.E(y, a);
				var g = b.Hb(p);
				b.E(p, y);
				b.Q(p, "backgroundImage", "");
				b.e(g, function(c)
				{
					b.E(b.g(c, "noscale") ? p : a, c);
					b.g(c, "autocenter") && Lb.push(c)
				})
			}
			Y = c / (d ? b.l : b.k)(y);
			b.Ue(y, Y);
			var f = d ? Y * W() : c,
				e = d ? c : Y * nb();
			b.k(p, f);
			b.l(p, e);
			b.e(Lb, function(a)
			{
				var c = b.Ed(b.g(a, "autocenter"));
				b.Dd(a, c)
			})
		}
		f.ae = Eb;
		n.call(f);
		f.S = p = b.ib(p);
		var a = b.bb(
		{
			eb: 0,
			qe: 1,
			ic: 1,
			Wb: 0,
			Ub: k,
			kb: 1,
			qb: d,
			Cc: d,
			rc: 1,
			Oc: 3e3,
			Yc: 1,
			Db: 500,
			Vc: e.je,
			qc: 20,
			ad: 0,
			lb: 1,
			Nc: 0,
			be: 1,
			Mb: 1,
			Lc: 1
		}, fc);
		a.qb = a.qb && b.xe();
		if (a.ce != l) a.Oc = a.ce;
		if (a.de != l) a.Nc = a.de;
		var fb = a.Mb & 3,
			tc = (a.Mb & 4) / -4 || 1,
			mb = a.Ve,
			I = b.bb(
			{
				F: q,
				qb: a.qb
			}, a.Ye);
		I.Rb = I.Rb || I.Xe;
		var Fb = a.fe,
			Z = a.ge,
			eb = a.Ze,
			Q = !a.be,
			y, v = b.o(p, "slides", Q),
			gb = b.o(p, "loading", Q) || b.mb(h),
			Nb = b.o(p, "navigator", Q),
			dc = b.o(p, "arrowleft", Q),
			ac = b.o(p, "arrowright", Q),
			Mb = b.o(p, "thumbnavigator", Q),
			pc = b.k(v),
			nc = b.l(v),
			V, T = [],
			uc = b.Hb(v);
		b.e(uc, function(a)
		{
			if (a.tagName == "DIV" && !b.g(a, "u")) T.push(a);
			else b.Sc() && b.u(a, (b.u(a) || 0) + 1)
		});
		var s = -1,
			wb, tb, r = T.length,
			K = a.he || pc,
			J = a.ie || nc,
			Wb = a.ad,
			zb = K + Wb,
			Ab = J + Wb,
			bc = fb & 1 ? zb : Ab,
			u = c.min(a.lb, r),
			lb, x, O, yb, S = [],
			Qb, Sb, Ob, cc, Cc, N, E = a.Yc,
			lc = a.Oc,
			Vb = a.Db,
			rb, ib, kb, Rb = u < r,
			D = Rb ? a.kb : 0,
			X, P, F = 1,
			M, B, R, ub = 0,
			vb = 0,
			H, hb, jb, Cb, w, U, z, Ub = new oc,
			Y, Lb = [];
		if (r)
		{
			if (a.qb) Kb = function(a, c, d)
			{
				b.zb(a,
				{
					Y: c,
					W: d
				})
			};
			N = a.Ub;
			f.Fb = fc;
			ic();
			b.n(p, "jssor-slider", d);
			b.u(v, b.u(v) || 0);
			b.v(v, "absolute");
			lb = b.sb(v, d);
			b.Eb(lb, v);
			if (mb)
			{
				cc = mb.We;
				rb = mb.F;
				ib = u == 1 && r > 1 && rb && (!b.ed() || b.xc() >= 8)
			}
			kb = ib || u >= r || !(D & 1) ? 0 : a.Nc;
			X = (u > 1 || kb ? fb : -1) & a.Lc;
			var Gb = v,
				C = [],
				A, L, Db = b.Te(),
				ob = Db.Ge,
				G, qb, Ib, sb;
			Db.dd && b.Q(Gb, Db.dd, ([j, "pan-y", "pan-x", "none"])[X] || "");
			U = new zc;
			if (ib) A = new rb(Ub, K, J, mb, ob);
			b.E(lb, U.Nb);
			b.Cb(v, "hidden");
			L = Xb();
			b.Q(L, "backgroundColor", "#000");
			b.Lb(L, 0);
			b.Eb(L, Gb.firstChild, Gb);
			for (var db = 0; db < T.length; db++)
			{
				var wc = T[db],
					yc = new xc(wc, db);
				C.push(yc)
			}
			b.G(gb);
			Cb = new Ac;
			z = new mc(Cb, U);
			b.a(v, "click", jc, d);
			b.a(p, "mouseout", b.Pb(hc, p));
			b.a(p, "mouseover", b.Pb(Ec, p));
			if (X)
			{
				b.a(v, "mousedown", Yb);
				b.a(v, "touchstart", rc);
				b.a(v, "dragstart", Hb);
				b.a(v, "selectstart", Hb);
				b.a(h, "mouseup", bb);
				b.a(h, "touchend", bb);
				b.a(h, "touchcancel", bb);
				b.a(g, "blur", bb)
			}
			E &= ob ? 10 : 5;
			if (Nb && Fb)
			{
				Qb = new Fb.F(Nb, Fb, W(), nb());
				S.push(Qb)
			}
			if (Z && dc && ac)
			{
				Z.kb = D;
				Z.lb = u;
				Sb = new Z.F(dc, ac, Z, W(), nb());
				S.push(Sb)
			}
			if (Mb && eb)
			{
				eb.Wb = a.Wb;
				Ob = new eb.F(Mb, eb);
				S.push(Ob)
			}
			b.e(S, function(a)
			{
				a.Vb(r, C, gb);
				a.ob(o.Tb, kc)
			});
			b.Q(p, "visibility", "visible");
			Eb(W());
			xb();
			a.ic && b.a(h, "keydown", function(b)
			{
				if (b.keyCode == 37) ab(-a.ic);
				else b.keyCode == 39 && ab(a.ic)
			});
			var pb = a.Wb;
			if (!(D & 1)) pb = c.max(0, c.min(pb, r - u));
			z.tb(pb, pb, 0)
		}
	};
	i.pe = 21;
	i.Td = 22;
	i.Ud = 23;
	i.Ke = 24;
	i.Le = 25;
	i.Kd = 26;
	i.Qe = 27;
	i.Sd = 28;
	i.Je = 202;
	i.Vd = 203;
	i.Od = 206;
	i.Qd = 207;
	i.Rd = 208;
	i.Zc = 209;
	var o = {
			Tb: 1
		},
		r = function(e, C)
		{
			var f = this;
			n.call(f);
			e = b.ib(e);
			var s, A, z, r, l = 0,
				a, m, i, w, x, h, g, q, p, B = [],
				y = [];

			function v(a)
			{
				a != -1 && y[a].wd(a == l)
			}

			function t(a)
			{
				f.f(o.Tb, a * m)
			}
			f.S = e;
			f.Zb = function(a)
			{
				if (a != r)
				{
					var d = l,
						b = c.floor(a / m);
					l = b;
					r = a;
					v(d);
					v(b)
				}
			};
			f.Yb = function(a)
			{
				b.I(e, a)
			};
			var u;
			f.Vb = function(D)
			{
				if (!u)
				{
					s = c.ceil(D / m);
					l = 0;
					var o = q + w,
						r = p + x,
						n = c.ceil(s / i) - 1;
					A = q + o * (!h ? n : i - 1);
					z = p + r * (h ? n : i - 1);
					b.k(e, A);
					b.l(e, z);
					for (var f = 0; f < s; f++)
					{
						var C = b.Bd();
						b.Hc(C, f + 1);
						var k = b.yd(g, "numbertemplate", C, d);
						b.v(k, "absolute");
						var v = f % (n + 1);
						b.B(k, !h ? o * v : f % i * o);
						b.C(k, h ? r * v : c.floor(f / (n + 1)) * r);
						b.E(e, k);
						B[f] = k;
						a.Qb & 1 && b.a(k, "click", b.D(j, t, f));
						a.Qb & 2 && b.a(k, "mouseover", b.Pb(b.D(j, t, f), k));
						y[f] = b.Ob(k)
					}
					u = d
				}
			};
			f.Fb = a = b.bb(
			{
				Bc: 10,
				Ec: 10,
				Fc: 1,
				Qb: 1
			}, C);
			g = b.o(e, "prototype");
			q = b.k(g);
			p = b.l(g);
			b.vb(g, e);
			m = a.Gc || 1;
			i = a.od || 1;
			w = a.Bc;
			x = a.Ec;
			h = a.Fc - 1;
			a.jc == k && b.n(e, "noscale", d);
			a.rb && b.n(e, "autocenter", a.rb)
		},
		s = function(a, g, h)
		{
			var c = this;
			n.call(c);
			var r, q, e, f, i;
			b.k(a);
			b.l(a);

			function l(a)
			{
				c.f(o.Tb, a, d)
			}

			function p(c)
			{
				b.I(a, c || !h.kb && e == 0);
				b.I(g, c || !h.kb && e >= q - h.lb);
				r = c
			}
			c.Zb = function(b, a, c)
			{
				if (c) e = a;
				else
				{
					e = b;
					p(r)
				}
			};
			c.Yb = p;
			var m;
			c.Vb = function(c)
			{
				q = c;
				e = 0;
				if (!m)
				{
					b.a(a, "click", b.D(j, l, -i));
					b.a(g, "click", b.D(j, l, i));
					b.Ob(a);
					b.Ob(g);
					m = d
				}
			};
			c.Fb = f = b.bb(
			{
				Gc: 1
			}, h);
			i = f.Gc;
			if (f.jc == k)
			{
				b.n(a, "noscale", d);
				b.n(g, "noscale", d)
			}
			if (f.rb)
			{
				b.n(a, "autocenter", f.rb);
				b.n(g, "autocenter", f.rb)
			}
		};

	function q(e, d, c)
	{
		var a = this;
		m.call(a, 0, c);
		a.Pc = b.bd;
		a.kd = 0;
		a.fd = c
	}
	jssor_1_slider_init = function()
	{
		var h = {
				Ub: d,
				Db: 800,
				Vc: f.Xd,
				ge:
				{
					F: s
				},
				fe:
				{
					F: r
				}
			},
			e = new i("jssor_1", h);

		function j()
		{
			var d = b.Fd(e.S, "slides");
			if (d)
			{
				var c = d[1];
				if (c)
				{
					var a = b.o(c, "add");
					if (!a)
					{
						a = b.mb();
						b.cb(a, "position:absolute;top:0px;right:0px;width:80px;height:20px;background-color:rgba(255,255,140,0.5);font-size:12px;line-height:20px;text-align:center;z-index:1000;");
						b.Hc(a, "Jssor Slider");
						b.E(c, a)
					}
				}
			}
		}
		j();

		function a()
		{
			var b = e.S.parentNode.clientWidth;
			if (b)
			{
				b = c.min(b, 1920);
				e.ae(b)
			}
			else g.setTimeout(a, 30)
		}
		a();
		b.a(g, "load", a);
		b.a(g, "resize", a);
		b.a(g, "orientationchange", a)
	}
})(window, document, Math, null, true, false)