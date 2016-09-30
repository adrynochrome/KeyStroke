(function(g, h, c, j, d, k, l)
{ /*! Jssor */
	new(function() {});
	var e = {
			Rc: function(a)
			{
				return -c.cos(a * c.PI) / 2 + .5
			},
			Sc: function(a)
			{
				return a
			},
			Oe: function(a)
			{
				return a * a
			},
			Wc: function(a)
			{
				return -a * (a - 2)
			},
			Pe: function(a)
			{
				return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
			},
			Qe: function(a)
			{
				return a * a * a
			},
			Re: function(a)
			{
				return (a -= 1) * a * a + 1
			},
			Se: function(a)
			{
				return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
			},
			Te: function(a)
			{
				return a * a * a * a
			},
			Ue: function(a)
			{
				return -((a -= 1) * a * a * a - 1)
			},
			Ve: function(a)
			{
				return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
			},
			We: function(a)
			{
				return a * a * a * a * a
			},
			Xe: function(a)
			{
				return (a -= 1) * a * a * a * a + 1
			},
			Ye: function(a)
			{
				return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
			},
			af: function(a)
			{
				return 1 - c.cos(c.PI / 2 * a)
			},
			of: function(a)
			{
				return c.sin(c.PI / 2 * a)
			},
			bf: function(a)
			{
				return -1 / 2 * (c.cos(c.PI * a) - 1)
			},
			cf: function(a)
			{
				return a == 0 ? 0 : c.pow(2, 10 * (a - 1))
			},
			df: function(a)
			{
				return a == 1 ? 1 : -c.pow(2, -10 * a) + 1
			},
			ef: function(a)
			{
				return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2, 10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2)
			},
			ff: function(a)
			{
				return -(c.sqrt(1 - a * a) - 1)
			},
			gf: function(a)
			{
				return c.sqrt(1 - (a -= 1) * a)
			},
			hf: function(a)
			{
				return (a *= 2) < 1 ? -1 / 2 * (c.sqrt(1 - a * a) - 1) : 1 / 2 * (c.sqrt(1 - (a -= 2) * a) + 1)
			},
			jf: function(a)
			{
				if (!a || a == 1) return a;
				var b = .3,
					d = .075;
				return -(c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b))
			},
			kf: function(a)
			{
				if (!a || a == 1) return a;
				var b = .3,
					d = .075;
				return c.pow(2, -10 * a) * c.sin((a - d) * 2 * c.PI / b) + 1
			},
			lf: function(a)
			{
				if (!a || a == 1) return a;
				var b = .45,
					d = .1125;
				return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) : c.pow(2, -10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) * .5 + 1
			},
			mf: function(a)
			{
				var b = 1.70158;
				return a * a * ((b + 1) * a - b)
			},
			nf: function(a)
			{
				var b = 1.70158;
				return (a -= 1) * a * ((b + 1) * a + b) + 1
			},
			Ne: function(a)
			{
				var b = 1.70158;
				return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
			},
			fd: function(a)
			{
				return 1 - e.lc(1 - a)
			},
			lc: function(a)
			{
				return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
			},
			Me: function(a)
			{
				return a < 1 / 2 ? e.fd(a * 2) * .5 : e.lc(a * 2 - 1) * .5 + .5
			},
			Le: function()
			{
				return 1 - c.abs(1)
			},
			Ke: function(a)
			{
				return 1 - c.cos(a * c.PI * 2)
			},
			le: function(a)
			{
				return c.sin(a * c.PI * 2)
			},
			me: function(a)
			{
				return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
			},
			ne: function(a)
			{
				return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
			}
		},
		f = {
			oe: e.Rc,
			pe: e.Sc,
			qe: e.Oe,
			re: e.Wc,
			se: e.Pe,
			te: e.Qe,
			ue: e.Re,
			ve: e.Se,
			we: e.Te,
			xe: e.Ue,
			ye: e.Ve,
			ze: e.We,
			Tc: e.Xe,
			Ae: e.Ye,
			Be: e.af,
			Ce: e.of,
			De: e.bf,
			Ee: e.cf,
			Fe: e.df,
			Ge: e.ef,
			He: e.ff,
			Ie: e.gf,
			qf: e.hf,
			Ze: e.jf,
			pf: e.kf,
			sf: e.lf,
			rf: e.mf,
			tg: e.nf,
			Wf: e.Ne,
			Xf: e.fd,
			Yf: e.lc,
			Zf: e.Me,
			ag: e.Le,
			bg: e.Ke,
			cg: e.le,
			dg: e.me,
			eg: e.ne
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
					Ef: "ontouchstart" in g || "createTouch" in h
				};
				var a;
				if (I.pointerEnabled || (a = I.msPointerEnabled)) G.kd = a ? "msTouchAction" : "touchAction"
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
		f.Uf = Ib;
		f.Pc = q;
		f.vf = db;
		f.yf = J;
		f.uc = O;
		wb("transform");
		f.vc = function()
		{
			return i
		};
		f.xc = rb;

		function Y(a)
		{
			a.constructor === Y.caller && a.Dc && a.Dc.apply(a, Y.caller.arguments)
		}
		f.Dc = Y;
		f.jb = function(a)
		{
			if (f.Cf(a)) a = h.getElementById(a);
			return a
		};

		function t(a)
		{
			return a || g.event
		}
		f.Ec = t;
		f.Zb = function(b)
		{
			b = t(b);
			var a = b.target || b.srcElement || h;
			if (a.nodeType == 3) a = f.zc(a);
			return a
		};
		f.Hc = function(a)
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
			db: ["rotate"],
			W: ["rotateX"],
			T: ["rotateY"],
			Ob: ["skewX"],
			Hb: ["skewY"]
		};
		if (!J()) L = B(L,
		{
			p: ["scaleX", 2],
			n: ["scaleY", 2],
			Q: ["translateZ", 1]
		});

		function M(d, a)
		{
			var c = "";
			if (a)
			{
				if (q() && i && i < 10)
				{
					delete a.W;
					delete a.T;
					delete a.Q
				}
				b.c(a, function(d, b)
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
					if (a.Y || a.eb || a.Q) c += " translate3d(" + (a.Y || 0) + "px," + (a.eb || 0) + "px," + (a.Q || 0) + "px)";
					if (a.p == l) a.p = 1;
					if (a.n == l) a.n = 1;
					if (a.p != 1 || a.n != 1) c += " scale3d(" + a.p + ", " + a.n + ", 1)"
				}
			}
			d.style[K(d)] = c
		}
		f.Fc = m("transformOrigin", 4);
		f.Ff = m("backfaceVisibility", 4);
		f.je = m("transformStyle", 4);
		f.Sf = m("perspective", 6);
		f.Gf = m("perspectiveOrigin", 4);
		f.Hf = function(a, b)
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
		f.dc = function(b, a)
		{
			return function(c)
			{
				c = t(c);
				var e = c.type,
					d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
				(!d || d !== a && !f.If(a, d)) && b(c)
			}
		};
		f.a = function(a, d, b, c)
		{
			a = f.jb(a);
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
		f.I = function(a, c, d, b)
		{
			a = f.jb(a);
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
		f.Eb = function(a)
		{
			a = t(a);
			a.preventDefault && a.preventDefault();
			a.cancel = d;
			a.returnValue = k
		};
		f.Jf = function(a)
		{
			a = t(a);
			a.stopPropagation && a.stopPropagation();
			a.cancelBubble = d
		};
		f.G = function(d, c)
		{
			var a = [].slice.call(arguments, 2),
				b = function()
				{
					var b = a.concat([].slice.call(arguments, 0));
					return c.apply(d, b)
				};
			return b
		};
		f.Kc = function(a, b)
		{
			if (b == l) return a.textContent || a.innerText;
			var c = h.createTextNode(b);
			f.kc(a);
			a.appendChild(c)
		};
		f.xb = function(d, c)
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
		f.u = mb;

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
		f.Mf = S;

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
		f.Nf = gb;
		f.Pf = function(b, a)
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
		f.H = B;

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
		f.Mc = function(a)
		{
			return C(a) == "function"
		};
		f.Cf = function(a)
		{
			return C(a) == "string"
		};
		f.sc = function(a)
		{
			return !isNaN(p(a)) && isFinite(a)
		};
		f.c = n;
		f.Rf = A;

		function R(a)
		{
			return h.createElement(a)
		}
		f.zb = function()
		{
			return R("DIV")
		};
		f.Je = function()
		{
			return R("SPAN")
		};
		f.yc = function() {};

		function V(b, c, a)
		{
			if (a == l) return b.getAttribute(c);
			b.setAttribute(c, a)
		}

		function U(a, b)
		{
			return V(a, b) || V(a, "data-" + b)
		}
		f.A = V;
		f.j = U;

		function x(b, a)
		{
			if (a == l) return b.className;
			b.className = a
		}
		f.Oc = x;

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
		f.zc = function(a)
		{
			return a.parentNode
		};
		f.M = function(a)
		{
			f.V(a, "none")
		};
		f.O = function(a, b)
		{
			f.V(a, b ? "none" : "")
		};
		f.ge = function(b, a)
		{
			b.removeAttribute(a)
		};
		f.Zd = function()
		{
			return q() && i < 10
		};
		f.Xd = function(d, a)
		{
			if (a) d.style.clip = "rect(" + c.round(a.i || a.s || 0) + "px " + c.round(a.F) + "px " + c.round(a.B) + "px " + c.round(a.g || a.z || 0) + "px)";
			else if (a !== l)
			{
				var g = d.style.cssText,
					f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
					e = H(g, f, "");
				b.kb(d, e)
			}
		};
		f.R = function()
		{
			return +new Date
		};
		f.K = function(b, a)
		{
			b.appendChild(a)
		};
		f.Mb = function(b, a, c)
		{
			(c || a.parentNode).insertBefore(b, a)
		};
		f.Fb = function(b, a)
		{
			a = a || b.parentNode;
			a && a.removeChild(b)
		};
		f.Id = function(a, b)
		{
			n(a, function(a)
			{
				f.Fb(a, b)
			})
		};
		f.kc = function(a)
		{
			f.Id(f.xb(a, d), a)
		};
		f.Jd = function(a, b)
		{
			var c = f.zc(a);
			b & 1 && f.D(a, (f.l(c) - f.l(a)) / 2);
			b & 2 && f.E(a, (f.m(c) - f.m(a)) / 2)
		};
		f.Xb = function(b, a)
		{
			return parseInt(b, a || 10)
		};
		f.Kd = p;
		f.If = function(b, a)
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
			!b && f.ge(a, "id");
			return a
		}
		f.gb = W;
		f.hb = function(e, g)
		{
			var a = new Image;

			function b(e, d)
			{
				f.I(a, "load", b);
				f.I(a, "abort", c);
				f.I(a, "error", c);
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
		f.Ld = function(d, a, e)
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
				f.hb(a.src, b)
			});
			b()
		};
		f.Md = function(a, g, i, h)
		{
			if (h) a = W(a);
			var c = S(a, g);
			if (!c.length) c = b.Pf(a, g);
			for (var f = c.length - 1; f > -1; f--)
			{
				var d = c[f],
					e = W(i);
				x(e, x(d));
				b.kb(e, d.style.cssText);
				b.Mb(e, d);
				b.Fb(d)
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
				b.X(a, "pointer-events", d ? "none" : "")
			}

			function c()
			{
				j = 0;
				i();
				f.I(h, "mouseup", c);
				f.I(h, "touchend", c);
				f.I(h, "touchcancel", c)
			}

			function o(a)
			{
				if (d) f.Eb(a);
				else
				{
					j = 4;
					i();
					f.a(h, "mouseup", c);
					f.a(h, "touchend", c);
					f.a(h, "touchcancel", c)
				}
			}
			k.Nd = function(a)
			{
				if (a === l) return g;
				g = a & 2 || a & 1;
				i()
			};
			k.sd = function(a)
			{
				if (a === l) return !d;
				d = a ? 0 : 3;
				i()
			};
			k.J = a = f.jb(a);
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
		f.bc = function(a)
		{
			return new Gb(a)
		};
		f.X = D;
		f.Pb = m("overflow");
		f.E = m("top", 2);
		f.D = m("left", 2);
		f.l = m("width", 2);
		f.m = m("height", 2);
		f.Od = m("marginLeft", 2);
		f.Pd = m("marginTop", 2);
		f.C = m("position");
		f.V = m("display");
		f.q = m("zIndex", 1);
		f.mc = function(b, a, c)
		{
			if (a != l) Fb(b, a, c);
			else return Db(b)
		};
		f.kb = function(a, b)
		{
			if (b != l) a.style.cssText = b;
			else return a.style.cssText
		};
		var T = {
			sb: f.mc,
			i: f.E,
			g: f.D,
			qb: f.l,
			pb: f.m,
			nb: f.C,
			Cg: f.V,
			mb: f.q
		};

		function w(g, k)
		{
			var e = O(),
				b = J(),
				d = vb(),
				h = K(g);

			function i(b, d, a)
			{
				var e = b.cb(u(-d / 2, -a / 2)),
					f = b.cb(u(d / 2, -a / 2)),
					g = b.cb(u(d / 2, a / 2)),
					h = b.cb(u(-d / 2, a / 2));
				b.cb(u(300, 300));
				return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
			}

			function a(d, a)
			{
				a = a ||
				{};
				var n = a.Q || 0,
					p = (a.W || 0) % 360,
					q = (a.T || 0) % 360,
					u = (a.db || 0) % 360,
					k = a.p,
					m = a.n,
					g = a.Ag;
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
				var c = new Cb(a.Y, a.eb, n);
				c.W(p);
				c.T(q);
				c.Td(u);
				c.Ud(a.Ob, a.Hb);
				c.fc(k, m, g);
				if (b)
				{
					c.tb(a.z, a.s);
					d.style[h] = c.Vd()
				}
				else if (!X || X < 9)
				{
					var o = "",
						j = {
							x: 0,
							y: 0
						};
					if (a.P) j = i(c, a.P, a.Z);
					f.Pd(d, j.y);
					f.Od(d, j.x);
					o = c.Wd();
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
				var h = c.z,
					i = c.s,
					g;
				n(T, function(a, b)
				{
					g = c[b];
					g !== l && a(e, g)
				});
				f.Xd(e, c.f);
				if (!b)
				{
					h != l && f.D(e, (c.Uc || 0) + h);
					i != l && f.E(e, (c.Vc || 0) + i)
				}
				if (c.Yd)
					if (d) rb(f.G(j, M, e, c));
					else a(e, c)
			};
			f.Nb = M;
			if (d) f.Nb = w;
			if (e) f.Nb = a;
			else if (!b) a = M;
			f.N = w;
			w(g, k)
		}
		f.Nb = w;
		f.N = w;

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
			d.fc = function(a, c, d)
			{
				if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
			};
			d.tb = function(a, c, d)
			{
				b[12] += a || 0;
				b[13] += c || 0;
				b[14] += d || 0
			};
			d.W = function(c)
			{
				if (c)
				{
					a = f(c);
					var d = g(a),
						i = h(a);
					b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1])
				}
			};
			d.T = function(c)
			{
				if (c)
				{
					a = f(c);
					var d = g(a),
						i = h(a);
					b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1])
				}
			};
			d.Td = function(c)
			{
				if (c)
				{
					a = f(c);
					var d = g(a),
						i = h(a);
					b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
				}
			};
			d.Ud = function(a, c)
			{
				if (a || c)
				{
					i = f(a);
					k = f(c);
					b = e([1, l(k), 0, 0, l(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
				}
			};
			d.cb = function(c)
			{
				var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
				return n(a[12], a[13])
			};
			d.Vd = function()
			{
				return "matrix3d(" + b.join(",") + ")"
			};
			d.Wd = function()
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
				return a.cd(b, c, 0)
			};
			a.n = function(b, c)
			{
				return a.cd(b, 0, c)
			};
			a.cd = function(a, c, d)
			{
				return b(a, [
					[c, 0],
					[0, d]
				])
			};
			a.cb = function(d, c)
			{
				var a = b(d, [
					[c.x],
					[c.y]
				]);
				return u(a[0][0], a[1][0])
			}
		};
		var N = {
			Uc: 0,
			Vc: 0,
			z: 0,
			s: 0,
			fb: 1,
			p: 1,
			n: 1,
			db: 0,
			W: 0,
			T: 0,
			Y: 0,
			eb: 0,
			Q: 0,
			Ob: 0,
			Hb: 0
		};
		f.ed = function(a)
		{
			var c = a ||
			{};
			if (a)
				if (b.Mc(a)) c = {
					ec: c
				};
				else if (b.Mc(a.f)) c.f = {
				ec: a.f
			};
			return c
		};

		function pb(c, a)
		{
			var b = {};
			n(c, function(c, d)
			{
				var e = c;
				if (a[d] != l)
					if (f.sc(c)) e = c + a[d];
					else e = pb(c, a[d]);
				b[d] = e
			});
			return b
		}
		f.ee = pb;
		f.fe = function(k, m, x, q, z, A, n)
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
					var h = q.ec || e.Rc,
						i, C = k[g],
						o = m[g];
					if (b.sc(o))
					{
						h = q[g] || h;
						var y = h(f);
						i = C + o * y
					}
					else
					{
						i = b.H(
						{
							Ib:
							{}
						}, k[g]);
						var v = q[g] ||
						{};
						b.c(o.Ib || o, function(d, a)
						{
							h = v[a] || v.ec || h;
							var c = h(f),
								b = d * c;
							i.Ib[a] = b;
							i[a] += b
						})
					}
					a[g] = i
				}
				var t = b.c(m, function(b, a)
				{
					return N[a] != l
				});
				t && b.c(N, function(c, b)
				{
					if (a[b] == l && k[b] !== l) a[b] = k[b]
				});
				if (t)
				{
					if (a.fb) a.p = a.n = a.fb;
					a.P = n.P;
					a.Z = n.Z;
					a.Yd = d
				}
			}
			if (m.f && n.tb)
			{
				var p = a.f.Ib,
					s = (p.i || 0) + (p.B || 0),
					r = (p.g || 0) + (p.F || 0);
				a.g = (a.g || 0) + r;
				a.i = (a.i || 0) + s;
				a.f.g -= r;
				a.f.F -= r;
				a.f.i -= s;
				a.f.B -= s
			}
			if (a.f && b.Zd() && !a.f.i && !a.f.g && !a.f.s && !a.f.z && a.f.F == n.P && a.f.B == n.Z) a.f = j;
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
				gc: a,
				hc: b
			})
		}

		function h(a, c)
		{
			b.c(d, function(b, e)
			{
				b.gc == a && b.hc === c && d.splice(e, 1)
			})
		}
		a.vb = a.addEventListener = i;
		a.removeEventListener = h;
		a.k = function(a)
		{
			var c = [].slice.call(arguments, 1);
			b.c(d, function(b)
			{
				b.gc == a && b.hc.apply(g, c)
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
						if (i.Cd) k = 1 - k;
						var n = b.fe(M, L, k, G, F, H, i);
						if (x) b.c(n, function(b, a)
						{
							x[a] && x[a](J, b)
						});
						else b.N(J, n)
					}
					a.cc(m - l, j - l);
					m = j;
					b.c(w, function(b, c)
					{
						var a = o < h ? w[w.length - c - 1] : b;
						a.v(m - y)
					});
					var r = h,
						q = m;
					h = g;
					D = d;
					a.Db(r, q)
				}
			}
		}

		function E(a, b, d)
		{
			b && a.Lb(e);
			if (!d)
			{
				f = c.min(f, a.Qb() + y);
				e = c.max(e, a.Gb() + y)
			}
			w.push(a)
		}
		var r = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.msRequestAnimationFrame;
		if (b.vf() && b.vc() < 7) r = j;
		r = r || function(a)
		{
			b.xc(a, i.dd)
		};

		function I()
		{
			if (q)
			{
				var d = b.R(),
					e = c.min(d - A, i.bd),
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
				a.ad();
				A = b.R();
				r(I)
			}
		}

		function K(b)
		{
			if (q)
			{
				u = q = B = k;
				a.Zc();
				b && b()
			}
		}
		a.gd = function(a, b, c)
		{
			s(a ? h + a : e, b, c)
		};
		a.Yc = s;
		a.ab = K;
		a.zd = function(a)
		{
			s(a)
		};
		a.U = function()
		{
			return h
		};
		a.Xc = function()
		{
			return n
		};
		a.Ab = function()
		{
			return m
		};
		a.v = t;
		a.tb = function(a)
		{
			t(h + a)
		};
		a.Nc = function()
		{
			return q
		};
		a.ae = function(a)
		{
			p = a
		};
		a.Lb = O;
		a.wb = function(a, b)
		{
			E(a, 0, b)
		};
		a.Sb = function(a)
		{
			E(a, 1)
		};
		a.Kf = function(a)
		{
			e += a
		};
		a.Qb = function()
		{
			return f
		};
		a.Gb = function()
		{
			return e
		};
		a.Db = a.ad = a.Zc = a.cc = b.yc;
		a.oc = b.R();
		i = b.H(
		{
			dd: 16,
			bd: 50
		}, i);
		p = i.Gc;
		x = i.Df;
		f = l = z;
		e = z + C;
		H = i.Bf ||
		{};
		F = i.Af ||
		{};
		G = b.ed(i.S)
	};
	new(function() {});
	var i = function(p, fc)
	{
		var f = this;

		function Bc()
		{
			var a = this;
			m.call(a, -1e8, 2e8);
			a.fg = function()
			{
				var b = a.Ab(),
					d = c.floor(b),
					f = t(d),
					e = b - c.floor(b);
				return {
					bb: f,
					tf: d,
					nb: e
				}
			};
			a.Db = function(b, a)
			{
				var e = c.floor(a);
				if (e != a && a > b) e++;
				Tb(e, d);
				f.k(i.uf, t(a), t(b), a, b)
			}
		}

		function Ac()
		{
			var a = this;
			m.call(a, 0, 0,
			{
				Gc: r
			});
			b.c(C, function(b)
			{
				D & 1 && b.ae(r);
				a.Sb(b);
				b.Lb(kb / bc)
			})
		}

		function zc()
		{
			var a = this,
				b = Ub.J;
			m.call(a, -1, 2,
			{
				S: e.Sc,
				Df:
				{
					nb: Zb
				},
				Gc: r
			}, b,
			{
				nb: 1
			},
			{
				nb: -2
			});
			a.jc = b
		}

		function mc(o, n)
		{
			var b = this,
				e, g, h, l, c;
			m.call(b, -1e8, 2e8,
			{
				bd: 100
			});
			b.ad = function()
			{
				M = d;
				R = j;
				f.k(i.xf, t(w.U()), w.U())
			};
			b.Zc = function()
			{
				M = k;
				l = k;
				var a = w.fg();
				f.k(i.zf, t(w.U()), w.U());
				!a.nb && Dc(a.tf, s)
			};
			b.Db = function(i, f)
			{
				var b;
				if (l) b = c;
				else
				{
					b = g;
					if (h)
					{
						var d = f / h;
						b = a.Jc(d) * (g - e) + e
					}
				}
				w.v(b)
			};
			b.Jb = function(a, d, c, f)
			{
				e = a;
				g = d;
				h = c;
				w.v(a);
				b.v(0);
				b.Yc(c, f)
			};
			b.Bd = function(a)
			{
				l = d;
				c = a;
				b.gd(a, j, d)
			};
			b.Vf = function(a)
			{
				c = a
			};
			w = new Bc;
			w.wb(o);
			w.wb(n)
		}

		function oc()
		{
			var c = this,
				a = Xb();
			b.q(a, 0);
			b.X(a, "pointerEvents", "none");
			c.J = a;
			c.Kb = function()
			{
				b.M(a);
				b.kc(a)
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
				q && q.ld();
				T(o, a, 0);
				F = d;
				q = new I.L(o, I, b.Kd(b.j(o, "idle")) || lc);
				q.v(0)
			}

			function Z()
			{
				q.oc < I.oc && E()
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
						if (h && c && a.yb)
						{
							if (a.yb & 3 && (!(a.yb & 4) || h > K || c > J))
							{
								var j = k,
									q = K / J * c / h;
								if (a.yb & 1) j = q > 1;
								else if (a.yb & 2) j = q < 1;
								n = j ? h * J / c : K;
								m = j ? J : c * K / h
							}
							b.l(l, n);
							b.m(l, m);
							b.E(l, (J - m) / 2);
							b.D(l, (K - n) / 2)
						}
						b.C(l, "absolute");
						f.k(i.Dd, g)
					}
				}
				b.M(r);
				p && p(e)
			}

			function Y(b, c, d, f)
			{
				if (f == R && s == g && N)
					if (!Cc)
					{
						var a = t(b);
						A.pg(a, g, c, e, d);
						c.Ed();
						U.Lb(a - U.Qb() - 1);
						U.v(a);
						z.Jb(b, b, 0)
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
							if (A.bb == g) a = A.sg();
							else A.Kb();
						Z();
						h = new vc(o, g, a, q);
						h.Qc(p)
					}!h.Nc() && h.rc()
				}
			}

			function G(d, f, l)
			{
				if (d == g)
				{
					if (d != f) C[f] && C[f].wd();
					else !l && h && h.he();
					p && p.sd();
					var m = R = b.R();
					e.hb(b.G(j, bb, m))
				}
				else
				{
					var k = c.min(g, d),
						i = c.max(g, d),
						o = c.min(i - k, k + r - i),
						n = u + a.Hd - 1;
					(!S || o <= n) && e.hb()
				}
			}

			function db()
			{
				if (s == g && h)
				{
					h.ab();
					p && p.ce();
					p && p.be();
					h.hd()
				}
			}

			function eb()
			{
				s == g && h && h.ab()
			}

			function ab(a)
			{
				!P && f.k(i.Sd, g, a)
			}

			function Q()
			{
				p = w.pInstance;
				h && h.Qc(p)
			}
			e.hb = function(c, a)
			{
				a = a || v;
				if (y.length && !H)
				{
					b.O(a);
					if (!W)
					{
						W = d;
						f.k(i.Rd, g);
						b.c(y, function(a)
						{
							if (!b.A(a, "src"))
							{
								a.src = b.j(a, "src2");
								b.V(a, a["display-origin"])
							}
						})
					}
					b.Ld(y, l, b.G(j, O, c, a))
				}
				else O(c, a)
			};
			e.Qd = function()
			{
				var i = g;
				if (a.td < 0) i -= r;
				var d = i + a.td * tc;
				if (D & 2) d = t(d);
				if (!(D & 1) && !ib) d = c.max(0, c.min(d, r - u));
				if (d != g)
				{
					if (A)
					{
						var f = A.kg(r);
						if (f)
						{
							var k = R = b.R(),
								h = C[t(d)];
							return h.hb(b.G(j, Y, d, h, f, k), v)
						}
					}
					cb(d)
				}
				else if (a.lb)
				{
					e.wd();
					G(g, g)
				}
			};
			e.Tb = function()
			{
				G(g, g, d)
			};
			e.wd = function()
			{
				p && p.ce();
				p && p.be();
				e.jd();
				h && h.de();
				h = j;
				E()
			};
			e.Ed = function()
			{
				b.M(o)
			};
			e.jd = function()
			{
				b.O(o)
			};
			e.Fd = function()
			{
				p && p.sd()
			};

			function T(a, c, e)
			{
				if (b.A(a, "jssor-slider")) return;
				if (!F)
				{
					if (a.tagName == "IMG")
					{
						y.push(a);
						if (!b.A(a, "src"))
						{
							S = d;
							a["display-origin"] = b.V(a);
							b.M(a)
						}
					}
					b.uc() && b.q(a, (b.q(a) || 0) + 1)
				}
				var f = b.xb(a);
				b.c(f, function(f)
				{
					var h = f.tagName,
						i = b.j(f, "u");
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
							b.Fc(f, b.j(f, "to"));
							b.Ff(f, b.j(f, "bf"));
							b.j(f, "3d") && b.je(f, "preserve-3d")
						}
						else if (!b.Pc())
						{
							var g = b.gb(f, k, d);
							b.Mb(g, f, a);
							b.Fb(f, a);
							f = g;
							c = d
						}
					}
					else if (!F && !e && !l)
					{
						if (h == "A")
						{
							if (b.j(f, "u") == "image") l = b.Nf(f, "IMG");
							else l = b.u(f, "image", d);
							if (l)
							{
								x = f;
								b.V(x, "block");
								b.N(x, V);
								B = b.gb(x, d);
								b.C(x, "relative");
								b.mc(B, 0);
								b.X(B, "backgroundColor", "#000")
							}
						}
						else if (h == "IMG" && b.j(f, "u") == "image") l = f;
						if (l)
						{
							l.border = 0;
							b.N(l, V)
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
			e.bb = g;
			n.call(e);
			b.Sf(o, b.j(o, "p"));
			b.Gf(o, b.j(o, "po"));
			var L = b.u(o, "thumb", d);
			if (L)
			{
				b.gb(L);
				b.M(L)
			}
			b.O(o);
			v = b.gb(gb);
			b.q(v, 1e3);
			b.a(o, "click", ab);
			E(d);
			e.qg = l;
			e.Cc = B;
			e.jc = M = o;
			b.K(M, v);
			f.vb(203, G);
			f.vb(28, eb);
			f.vb(24, db)
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
				b.kc(L);
				cc && l && o.Cc && b.K(L, o.Cc);
				b.O(L, !l && o.qg)
			}

			function w()
			{
				a.rc()
			}

			function x(b)
			{
				r = b;
				a.ab();
				a.rc()
			}
			a.rc = function()
			{
				var b = a.Ab();
				if (!B && !M && !r && s == g)
				{
					if (!b)
					{
						if (h && !l)
						{
							l = d;
							a.hd(d);
							f.k(i.Ad, g, n, u, h, c)
						}
						v()
					}
					var k, p = i.Bc;
					if (b != c)
						if (b == e) k = c;
						else if (b == j) k = e;
					else if (!b) k = j;
					else k = a.Xc();
					f.k(p, g, b, n, j, e, c);
					var m = N && (!E || F);
					if (b == c)(e != c && !(E & 12) || m) && o.Qd();
					else(m || b != e) && a.Yc(k, w)
				}
			};
			a.he = function()
			{
				e == c && e == a.Ab() && a.v(j)
			};
			a.de = function()
			{
				A && A.bb == g && A.Kb();
				var b = a.Ab();
				b < c && f.k(i.Bc, g, -b - 1, n, j, e, c)
			};
			a.hd = function(a)
			{
				p && b.Pb(lb, a && p.ic.xg ? "" : "hidden")
			};
			a.cc = function(b, a)
			{
				if (l && a >= h)
				{
					l = k;
					v();
					o.jd();
					A.Kb();
					f.k(i.yd, g, n, u, h, c)
				}
				f.k(i.ke, g, a, n, j, e, c)
			};
			a.Qc = function(a)
			{
				if (a && !t)
				{
					t = a;
					a.vb($JssorPlayer$.wf, x)
				}
			};
			p && a.Sb(p);
			h = a.Gb();
			a.Sb(q);
			j = h + q.tc;
			e = h + q.wc;
			c = a.Gb()
		}

		function Kb(a, c, d)
		{
			b.D(a, c);
			b.E(a, d)
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
			Ib = z.Xc();
			G = w.U()
		}

		function gc()
		{
			Pb();
			if (B || !F && E & 12)
			{
				z.ab();
				f.k(i.Qf)
			}
		}

		function ec(f)
		{
			if (!B && (F || !(E & 12)) && !z.Nc())
			{
				var d = w.U(),
					b = c.ceil(G);
				if (f && c.abs(H) >= a.Ac)
				{
					b = c.ceil(d);
					b += jb
				}
				if (!(D & 1)) b = c.min(r - u, c.max(b, 0));
				var e = c.abs(b - d);
				e = 1 - c.pow(1 - e, 5);
				if (!P && qb) z.zd(Ib);
				else if (d == b)
				{
					tb.Fd();
					tb.Tb()
				}
				else z.Jb(d, b, e * Vb)
			}
		}

		function Hb(a)
		{
			!b.j(b.Zb(a), "nodrag") && b.Eb(a)
		}

		function rc(a)
		{
			Yb(a, 1)
		}

		function Yb(a, c)
		{
			a = b.Ec(a);
			var l = b.Zb(a);
			if (!O && !b.j(l, "nodrag") && sc() && (!c || a.touches.length == 1))
			{
				B = d;
				yb = k;
				R = j;
				b.a(h, c ? "touchmove" : "mousemove", Bb);
				b.R();
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
					var e = b.Hc(a);
					ub = e.x;
					vb = e.y
				}
				H = 0;
				hb = 0;
				jb = 0;
				f.k(i.Of, t(G), G, a)
			}
		}

		function Bb(e)
		{
			if (B)
			{
				e = b.Ec(e);
				var f;
				if (e.type != "mousemove")
				{
					var l = e.touches[0];
					f = {
						x: l.clientX,
						y: l.clientY
					}
				}
				else f = b.Hc(e);
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
							b.Eb(e);
							if (!M) z.Bd(sb);
							else z.Vf(sb)
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
				b.R();
				b.I(h, "mousemove", Bb);
				b.I(h, "touchmove", Bb);
				P = H;
				z.ab();
				var a = w.U();
				f.k(i.Lf, t(a), a, t(G), G);
				E & 12 && Pb();
				ec(d)
			}
		}

		function jc(c)
		{
			if (P)
			{
				b.Jf(c);
				var a = b.Zb(c);
				while (a && v !== a)
				{
					a.tagName == "A" && b.Eb(c);
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
			f.k(i.ie, t(a), b)
		}

		function Tb(a, c)
		{
			wb = a;
			b.c(S, function(b)
			{
				b.Rb(t(a), a, c)
			})
		}

		function sc()
		{
			var b = i.Ic || 0,
				a = X;
			if (ob) a & 1 && (a &= 1);
			i.Ic |= a;
			return O = a & ~b
		}

		function qc()
		{
			if (O)
			{
				i.Ic &= ~X;
				O = 0
			}
		}

		function Xb()
		{
			var a = b.zb();
			b.N(a, V);
			b.C(a, "absolute");
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
			cb(b, a.Bb, d)
		}

		function xb()
		{
			b.c(S, function(a)
			{
				a.nc(a.Cb.yg <= F)
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
					E & 3 && C[s].Tb()
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
				qb: K,
				pb: J,
				i: 0,
				g: 0
			};
			b.c(T, function(a)
			{
				b.N(a, V);
				b.C(a, "absolute");
				b.Pb(a, "hidden");
				b.M(a)
			});
			b.N(gb, V)
		}

		function ab(b, a)
		{
			cb(b, a, d)
		}

		function cb(g, f, j)
		{
			if (Rb && (!B && (F || !(E & 12)) || a.Lc))
			{
				M = d;
				B = k;
				z.ab();
				if (f == l) f = Vb;
				var e = Cb.Ab(),
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
				z.Jb(e, b, h || 1)
			}
		}
		f.gd = function()
		{
			if (!N)
			{
				N = d;
				C[s] && C[s].Tb()
			}
		};

		function W()
		{
			return b.l(y || p)
		}

		function nb()
		{
			return b.m(y || p)
		}
		f.P = W;
		f.Z = nb;

		function Eb(c, d)
		{
			if (c == l) return b.l(p);
			if (!y)
			{
				var a = b.zb(h);
				b.Oc(a, b.Oc(p));
				b.kb(a, b.kb(p));
				b.V(a, "block");
				b.C(a, "relative");
				b.E(a, 0);
				b.D(a, 0);
				b.Pb(a, "visible");
				y = b.zb(h);
				b.C(y, "absolute");
				b.E(y, 0);
				b.D(y, 0);
				b.l(y, b.l(p));
				b.m(y, b.m(p));
				b.Fc(y, "0 0");
				b.K(y, a);
				var g = b.xb(p);
				b.K(p, y);
				b.X(p, "backgroundImage", "");
				b.c(g, function(c)
				{
					b.K(b.j(c, "noscale") ? p : a, c);
					b.j(c, "autocenter") && Lb.push(c)
				})
			}
			Y = c / (d ? b.m : b.l)(y);
			b.Hf(y, Y);
			var f = d ? Y * W() : c,
				e = d ? c : Y * nb();
			b.l(p, f);
			b.m(p, e);
			b.c(Lb, function(a)
			{
				var c = b.Xb(b.j(a, "autocenter"));
				b.Jd(a, c)
			})
		}
		f.rg = Eb;
		n.call(f);
		f.J = p = b.jb(p);
		var a = b.H(
		{
			yb: 0,
			Hd: 1,
			Wb: 1,
			Vb: 0,
			Ub: k,
			lb: 1,
			rb: d,
			Lc: d,
			td: 1,
			md: 3e3,
			nd: 1,
			Bb: 500,
			Jc: e.Wc,
			Ac: 20,
			od: 0,
			ob: 1,
			qd: 0,
			og: 1,
			ac: 1,
			pd: 1
		}, fc);
		a.rb = a.rb && b.yf();
		if (a.ng != l) a.md = a.ng;
		if (a.mg != l) a.qd = a.mg;
		var fb = a.ac & 3,
			tc = (a.ac & 4) / -4 || 1,
			mb = a.zg,
			I = b.H(
			{
				L: q,
				rb: a.rb
			}, a.lg);
		I.ib = I.ib || I.ug;
		var Fb = a.jg,
			Z = a.ig,
			eb = a.vg,
			Q = !a.og,
			y, v = b.u(p, "slides", Q),
			gb = b.u(p, "loading", Q) || b.zb(h),
			Nb = b.u(p, "navigator", Q),
			dc = b.u(p, "arrowleft", Q),
			ac = b.u(p, "arrowright", Q),
			Mb = b.u(p, "thumbnavigator", Q),
			pc = b.l(v),
			nc = b.m(v),
			V, T = [],
			uc = b.xb(v);
		b.c(uc, function(a)
		{
			if (a.tagName == "DIV" && !b.j(a, "u")) T.push(a);
			else b.uc() && b.q(a, (b.q(a) || 0) + 1)
		});
		var s = -1,
			wb, tb, r = T.length,
			K = a.hg || pc,
			J = a.gg || nc,
			Wb = a.od,
			zb = K + Wb,
			Ab = J + Wb,
			bc = fb & 1 ? zb : Ab,
			u = c.min(a.ob, r),
			lb, x, O, yb, S = [],
			Qb, Sb, Ob, cc, Cc, N, E = a.nd,
			lc = a.md,
			Vb = a.Bb,
			rb, ib, kb, Rb = u < r,
			D = Rb ? a.lb : 0,
			X, P, F = 1,
			M, B, R, ub = 0,
			vb = 0,
			H, hb, jb, Cb, w, U, z, Ub = new oc,
			Y, Lb = [];
		if (r)
		{
			if (a.rb) Kb = function(a, c, d)
			{
				b.Nb(a,
				{
					Y: c,
					eb: d
				})
			};
			N = a.Ub;
			f.Cb = fc;
			ic();
			b.A(p, "jssor-slider", d);
			b.q(v, b.q(v) || 0);
			b.C(v, "absolute");
			lb = b.gb(v, d);
			b.Mb(lb, v);
			if (mb)
			{
				cc = mb.wg;
				rb = mb.L;
				ib = u == 1 && r > 1 && rb && (!b.Pc() || b.vc() >= 8)
			}
			kb = ib || u >= r || !(D & 1) ? 0 : a.qd;
			X = (u > 1 || kb ? fb : -1) & a.pd;
			var Gb = v,
				C = [],
				A, L, Db = b.Uf(),
				ob = Db.Ef,
				G, qb, Ib, sb;
			Db.kd && b.X(Gb, Db.kd, ([j, "pan-y", "pan-x", "none"])[X] || "");
			U = new zc;
			if (ib) A = new rb(Ub, K, J, mb, ob);
			b.K(lb, U.jc);
			b.Pb(v, "hidden");
			L = Xb();
			b.X(L, "backgroundColor", "#000");
			b.mc(L, 0);
			b.Mb(L, Gb.firstChild, Gb);
			for (var db = 0; db < T.length; db++)
			{
				var wc = T[db],
					yc = new xc(wc, db);
				C.push(yc)
			}
			b.M(gb);
			Cb = new Ac;
			z = new mc(Cb, U);
			b.a(v, "click", jc, d);
			b.a(p, "mouseout", b.dc(hc, p));
			b.a(p, "mouseover", b.dc(Ec, p));
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
				Qb = new Fb.L(Nb, Fb, W(), nb());
				S.push(Qb)
			}
			if (Z && dc && ac)
			{
				Z.lb = D;
				Z.ob = u;
				Sb = new Z.L(dc, ac, Z, W(), nb());
				S.push(Sb)
			}
			if (Mb && eb)
			{
				eb.Vb = a.Vb;
				Ob = new eb.L(Mb, eb);
				S.push(Ob)
			}
			b.c(S, function(a)
			{
				a.qc(r, C, gb);
				a.vb(o.pc, kc)
			});
			b.X(p, "visibility", "visible");
			Eb(W());
			xb();
			a.Wb && b.a(h, "keydown", function(b)
			{
				if (b.keyCode == 37) ab(-a.Wb);
				else b.keyCode == 39 && ab(a.Wb)
			});
			var pb = a.Vb;
			if (!(D & 1)) pb = c.max(0, c.min(pb, r - u));
			z.Jb(pb, pb, 0)
		}
	};
	i.Sd = 21;
	i.Of = 22;
	i.Lf = 23;
	i.xf = 24;
	i.zf = 25;
	i.Rd = 26;
	i.Dd = 27;
	i.Qf = 28;
	i.uf = 202;
	i.ie = 203;
	i.Ad = 206;
	i.yd = 207;
	i.ke = 208;
	i.Bc = 209;
	var o = {
			pc: 1
		},
		r = function(e, C)
		{
			var f = this;
			n.call(f);
			e = b.jb(e);
			var s, A, z, r, l = 0,
				a, m, i, w, x, h, g, q, p, B = [],
				y = [];

			function v(a)
			{
				a != -1 && y[a].Nd(a == l)
			}

			function t(a)
			{
				f.k(o.pc, a * m)
			}
			f.J = e;
			f.Rb = function(a)
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
			f.nc = function(a)
			{
				b.O(e, a)
			};
			var u;
			f.qc = function(D)
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
					b.l(e, A);
					b.m(e, z);
					for (var f = 0; f < s; f++)
					{
						var C = b.Je();
						b.Kc(C, f + 1);
						var k = b.Md(g, "numbertemplate", C, d);
						b.C(k, "absolute");
						var v = f % (n + 1);
						b.D(k, !h ? o * v : f % i * o);
						b.E(k, h ? r * v : c.floor(f / (n + 1)) * r);
						b.K(e, k);
						B[f] = k;
						a.Yb & 1 && b.a(k, "click", b.G(j, t, f));
						a.Yb & 2 && b.a(k, "mouseover", b.dc(b.G(j, t, f), k));
						y[f] = b.bc(k)
					}
					u = d
				}
			};
			f.Cb = a = b.H(
			{
				id: 10,
				ud: 10,
				rd: 1,
				Yb: 1
			}, C);
			g = b.u(e, "prototype");
			q = b.l(g);
			p = b.m(g);
			b.Fb(g, e);
			m = a.vd || 1;
			i = a.Tf || 1;
			w = a.id;
			x = a.ud;
			h = a.rd - 1;
			a.fc == k && b.A(e, "noscale", d);
			a.ub && b.A(e, "autocenter", a.ub)
		},
		s = function(a, g, h)
		{
			var c = this;
			n.call(c);
			var r, q, e, f, i;
			b.l(a);
			b.m(a);

			function l(a)
			{
				c.k(o.pc, a, d)
			}

			function p(c)
			{
				b.O(a, c || !h.lb && e == 0);
				b.O(g, c || !h.lb && e >= q - h.ob);
				r = c
			}
			c.Rb = function(b, a, c)
			{
				if (c) e = a;
				else
				{
					e = b;
					p(r)
				}
			};
			c.nc = p;
			var m;
			c.qc = function(c)
			{
				q = c;
				e = 0;
				if (!m)
				{
					b.a(a, "click", b.G(j, l, -i));
					b.a(g, "click", b.G(j, l, i));
					b.bc(a);
					b.bc(g);
					m = d
				}
			};
			c.Cb = f = b.H(
			{
				vd: 1
			}, h);
			i = f.vd;
			if (f.fc == k)
			{
				b.A(a, "noscale", d);
				b.A(g, "noscale", d)
			}
			if (f.ub)
			{
				b.A(a, "autocenter", f.ub);
				b.A(g, "autocenter", f.ub)
			}
		};

	function q(e, d, c)
	{
		var a = this;
		m.call(a, 0, c);
		a.ld = b.yc;
		a.tc = 0;
		a.wc = c
	}
	var t = function(n, g, l)
	{
		var a = this,
			o, h = {},
			i = g.ib,
			c = new m(0, 0);
		m.call(a, 0, 0);

		function j(d, c)
		{
			var a = {};
			b.c(d, function(d, f)
			{
				var e = h[f];
				if (e)
				{
					if (b.Rf(d)) d = j(d, c || f == "e");
					else if (c)
						if (b.sc(d)) d = o[d];
					a[e] = d
				}
			});
			return a
		}

		function k(e, c)
		{
			var a = [],
				d = b.xb(e);
			b.c(d, function(d)
			{
				var h = b.j(d, "u") == "caption";
				if (h)
				{
					var e = b.j(d, "t"),
						g = i[b.Xb(e)] || i[e],
						f = {
							J: d,
							ic: g
						};
					a.push(f)
				}
				if (c < 5) a = a.concat(k(d, c + 1))
			});
			return a
		}

		function r(e, f, a)
		{
			b.c(f, function(h)
			{
				var f = b.H(d,
					{}, j(h)),
					g = b.ed(f.S);
				delete f.S;
				if (f.g)
				{
					f.z = f.g;
					g.z = g.g;
					delete f.g
				}
				if (f.i)
				{
					f.s = f.i;
					g.s = g.i;
					delete f.i
				}
				var k = {
						S: g,
						P: a.qb,
						Z: a.pb
					},
					i = new m(h.b, h.d, k, e, a, f);
				c.wb(i);
				a = b.ee(a, f)
			});
			return a
		}

		function q(a)
		{
			b.c(a, function(d)
			{
				var a = d.J,
					f = b.l(a),
					e = b.m(a),
					c = {
						g: b.D(a),
						i: b.E(a),
						z: 0,
						s: 0,
						sb: 1,
						mb: b.q(a) || 0,
						db: 0,
						W: 0,
						T: 0,
						p: 1,
						n: 1,
						Y: 0,
						eb: 0,
						Q: 0,
						Ob: 0,
						Hb: 0,
						qb: f,
						pb: e,
						f:
						{
							i: 0,
							F: f,
							B: e,
							g: 0
						}
					};
				c.Uc = c.g;
				c.Vc = c.i;
				r(a, d.ic, c)
			})
		}

		function t(g, f, h)
		{
			var e = g.b - f;
			if (e)
			{
				var b = new m(f, e);
				b.wb(c, d);
				b.Lb(h);
				a.wb(b)
			}
			a.Kf(g.d);
			return e
		}

		function s(f)
		{
			var d = c.Qb(),
				e = 0;
			b.c(f, function(c, f)
			{
				c = b.H(
				{
					d: l
				}, c);
				t(c, d, e);
				d = c.b;
				e += c.d;
				if (!f || c.t == 2)
				{
					a.tc = d;
					a.wc = d + c.d
				}
			})
		}
		a.ld = function()
		{
			a.v(-1, d)
		};
		o = [f.oe, f.pe, f.qe, f.re, f.se, f.te, f.ue, f.ve, f.we, f.xe, f.ye, f.ze, f.Tc, f.Ae, f.Be, f.Ce, f.De, f.Ee, f.Fe, f.Ge, f.He, f.Ie, f.qf, f.Ze, f.pf, f.sf, f.rf, f.tg, f.Wf, f.Xf, f.Yf, f.Zf, f.ag, f.bg, f.cg, f.dg, f.eg];
		var u = {
			i: "y",
			g: "x",
			B: "m",
			F: "t",
			db: "r",
			W: "rX",
			T: "rY",
			p: "sX",
			n: "sY",
			Y: "tX",
			eb: "tY",
			Q: "tZ",
			Ob: "kX",
			Hb: "kY",
			sb: "o",
			S: "e",
			mb: "i",
			f: "c"
		};
		b.c(u, function(b, a)
		{
			h[b] = a
		});
		q(k(n, 1));
		c.v(-1);
		var p = g.Bg || [],
			e = [].concat(p[b.Xb(b.j(n, "b"))] || []);
		e.push(
		{
			b: c.Gb(),
			d: e.length ? 0 : l
		});
		s(e);
		a.v(-1)
	};
	jssor_1_slider_init = function()
	{
		var h = [
				[
				{
					b: -1,
					d: 1,
					o: -1
				},
				{
					b: 0,
					d: 1e3,
					o: 1
				}],
				[
				{
					b: 1900,
					d: 2e3,
					x: -379,
					e:
					{
						x: 7
					}
				}],
				[
				{
					b: 1900,
					d: 2e3,
					x: -379,
					e:
					{
						x: 7
					}
				}],
				[
				{
					b: -1,
					d: 1,
					o: -1,
					r: 288,
					sX: 9,
					sY: 9
				},
				{
					b: 1e3,
					d: 900,
					x: -1400,
					y: -660,
					o: 1,
					r: -288,
					sX: -9,
					sY: -9,
					e:
					{
						r: 6
					}
				},
				{
					b: 1900,
					d: 1600,
					x: -200,
					o: -1,
					e:
					{
						x: 16
					}
				}],
				[
				{
					b: 0,
					d: 1e3,
					x: 852,
					y: 238
				},
				{
					b: 2e3,
					d: 1e3,
					x: 848,
					y: 291
				}],
				[
				{
					b: 0,
					d: 1e3,
					x: -790,
					y: 275
				},
				{
					b: 2e3,
					d: 1e3,
					x: -763,
					y: 286,
					e:
					{
						x: 2,
						y: 2
					}
				}]
			],
			j = {
				Ub: d,
				Bb: 800,
				Jc: f.Tc,
				lg:
				{
					L: t,
					ib: h
				},
				ig:
				{
					L: s
				},
				jg:
				{
					L: r
				}
			},
			e = new i("jssor_1", j);

		function k()
		{
			var d = b.Mf(e.J, "slides");
			if (d)
			{
				var c = d[1];
				if (c)
				{
					var a = b.u(c, "add");
					if (!a)
					{
						a = b.zb();
						b.kb(a, "position:absolute;top:0px;right:0px;width:80px;height:20px;background-color:rgba(255,255,140,0.5);font-size:12px;line-height:20px;text-align:center;z-index:1000;");
						b.Kc(a, "Jssor Slider");
						b.K(c, a)
					}
				}
			}
		}
		k();

		function a()
		{
			var b = e.J.parentNode.clientWidth;
			if (b)
			{
				b = c.min(b, 1920);
				e.rg(b)
			}
			else g.setTimeout(a, 30)
		}
		a();
		b.a(g, "load", a);
		b.a(g, "resize", a);
		b.a(g, "orientationchange", a)
	}
})(window, document, Math, null, true, false)