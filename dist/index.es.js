(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._left_1phdh_5{fill:#787878}._right_1phdh_9{fill:#fff}._arena_1phdh_13{fill:none;stroke:#000;stroke-width:2}._mulch_1phdh_19{stroke:#000;stroke-width:1}._nose_1phdh_25,._head_1phdh_30,._shoulder_1phdh_35,._hair_1phdh_40{stroke-width:30;stroke:#000}._eye_1phdh_45{fill:#000}._obstacle_1phdh_52{stroke:#000;fill:gray;stroke-width:2}._obs0_1phdh_58._obstacle_1phdh_52{fill:#dcdcdc}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const ls = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function he(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function cs(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Wr(t) {
  let e, n, r;
  t.length !== 2 ? (e = he, n = (a, u) => he(t(a), u), r = (a, u) => t(a) - u) : (e = t === he || t === cs ? t : hs, n = t, r = t);
  function i(a, u, f = 0, c = a.length) {
    if (f < c) {
      if (e(u, u) !== 0) return c;
      do {
        const l = f + c >>> 1;
        n(a[l], u) < 0 ? f = l + 1 : c = l;
      } while (f < c);
    }
    return f;
  }
  function s(a, u, f = 0, c = a.length) {
    if (f < c) {
      if (e(u, u) !== 0) return c;
      do {
        const l = f + c >>> 1;
        n(a[l], u) <= 0 ? f = l + 1 : c = l;
      } while (f < c);
    }
    return f;
  }
  function o(a, u, f = 0, c = a.length) {
    const l = i(a, u, f, c - 1);
    return l > f && r(a[l - 1], u) > -r(a[l], u) ? l - 1 : l;
  }
  return { left: i, center: o, right: s };
}
function hs() {
  return 0;
}
function ds(t) {
  return t === null ? NaN : +t;
}
const gs = Wr(he), ps = gs.right;
Wr(ds).center;
const As = Math.sqrt(50), ys = Math.sqrt(10), vs = Math.sqrt(2);
function we(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), s = r / Math.pow(10, i), o = s >= As ? 10 : s >= ys ? 5 : s >= vs ? 2 : 1;
  let a, u, f;
  return i < 0 ? (f = Math.pow(10, -i) / o, a = Math.round(t * f), u = Math.round(e * f), a / f < t && ++a, u / f > e && --u, f = -f) : (f = Math.pow(10, i) * o, a = Math.round(t / f), u = Math.round(e / f), a * f < t && ++a, u * f > e && --u), u < a && 0.5 <= n && n < 2 ? we(t, e, n * 2) : [a, u, f];
}
function ms(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, s, o] = r ? we(e, t, n) : we(t, e, n);
  if (!(s >= i)) return [];
  const a = s - i + 1, u = new Array(a);
  if (r)
    if (o < 0) for (let f = 0; f < a; ++f) u[f] = (s - f) / -o;
    else for (let f = 0; f < a; ++f) u[f] = (s - f) * o;
  else if (o < 0) for (let f = 0; f < a; ++f) u[f] = (i + f) / -o;
  else for (let f = 0; f < a; ++f) u[f] = (i + f) * o;
  return u;
}
function sn(t, e, n) {
  return e = +e, t = +t, n = +n, we(t, e, n)[2];
}
function bs(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? sn(e, t, n) : sn(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function te(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function xs(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, s = new Array(i); ++r < i; )
    s[r] = t + r * n;
  return s;
}
var ws = { value: () => {
} };
function On() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new de(n);
}
function de(t) {
  this._ = t;
}
function Ps(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
de.prototype = On.prototype = {
  constructor: de,
  on: function(t, e) {
    var n = this._, r = Ps(t + "", n), i, s = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++s < o; ) if ((i = (t = r[s]).type) && (i = Ms(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < o; )
      if (i = (t = r[s]).type) n[i] = er(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = er(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new de(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, s; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, i = s.length; r < i; ++r) s[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, s = r.length; i < s; ++i) r[i].value.apply(e, n);
  }
};
function Ms(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function er(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ws, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var on = "http://www.w3.org/1999/xhtml";
const nr = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: on,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Be(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), nr.hasOwnProperty(e) ? { space: nr[e], local: t } : t;
}
function Ts(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === on && e.documentElement.namespaceURI === on ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function zs(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function qr(t) {
  var e = Be(t);
  return (e.local ? zs : Ts)(e);
}
function Os() {
}
function kn(t) {
  return t == null ? Os : function() {
    return this.querySelector(t);
  };
}
function ks(t) {
  typeof t != "function" && (t = kn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], o = s.length, a = r[i] = new Array(o), u, f, c = 0; c < o; ++c)
      (u = s[c]) && (f = t.call(u, u.__data__, c, s)) && ("__data__" in u && (f.__data__ = u.__data__), a[c] = f);
  return new E(r, this._parents);
}
function Hs(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ns() {
  return [];
}
function Vr(t) {
  return t == null ? Ns : function() {
    return this.querySelectorAll(t);
  };
}
function js(t) {
  return function() {
    return Hs(t.apply(this, arguments));
  };
}
function Ss(t) {
  typeof t == "function" ? t = js(t) : t = Vr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var o = e[s], a = o.length, u, f = 0; f < a; ++f)
      (u = o[f]) && (r.push(t.call(u, u.__data__, f, o)), i.push(u));
  return new E(r, i);
}
function $r(t) {
  return function() {
    return this.matches(t);
  };
}
function ti(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Xs = Array.prototype.find;
function Is(t) {
  return function() {
    return Xs.call(this.children, t);
  };
}
function Bs() {
  return this.firstElementChild;
}
function Ds(t) {
  return this.select(t == null ? Bs : Is(typeof t == "function" ? t : ti(t)));
}
var Es = Array.prototype.filter;
function Gs() {
  return Array.from(this.children);
}
function Cs(t) {
  return function() {
    return Es.call(this.children, t);
  };
}
function Ys(t) {
  return this.selectAll(t == null ? Gs : Cs(typeof t == "function" ? t : ti(t)));
}
function Ls(t) {
  typeof t != "function" && (t = $r(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], o = s.length, a = r[i] = [], u, f = 0; f < o; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u);
  return new E(r, this._parents);
}
function ei(t) {
  return new Array(t.length);
}
function Fs() {
  return new E(this._enter || this._groups.map(ei), this._parents);
}
function Pe(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Pe.prototype = {
  constructor: Pe,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Js(t) {
  return function() {
    return t;
  };
}
function Zs(t, e, n, r, i, s) {
  for (var o = 0, a, u = e.length, f = s.length; o < f; ++o)
    (a = e[o]) ? (a.__data__ = s[o], r[o] = a) : n[o] = new Pe(t, s[o]);
  for (; o < u; ++o)
    (a = e[o]) && (i[o] = a);
}
function Rs(t, e, n, r, i, s, o) {
  var a, u, f = /* @__PURE__ */ new Map(), c = e.length, l = s.length, h = new Array(c), p;
  for (a = 0; a < c; ++a)
    (u = e[a]) && (h[a] = p = o.call(u, u.__data__, a, e) + "", f.has(p) ? i[a] = u : f.set(p, u));
  for (a = 0; a < l; ++a)
    p = o.call(t, s[a], a, s) + "", (u = f.get(p)) ? (r[a] = u, u.__data__ = s[a], f.delete(p)) : n[a] = new Pe(t, s[a]);
  for (a = 0; a < c; ++a)
    (u = e[a]) && f.get(h[a]) === u && (i[a] = u);
}
function _s(t) {
  return t.__data__;
}
function Qs(t, e) {
  if (!arguments.length) return Array.from(this, _s);
  var n = e ? Rs : Zs, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Js(t));
  for (var s = i.length, o = new Array(s), a = new Array(s), u = new Array(s), f = 0; f < s; ++f) {
    var c = r[f], l = i[f], h = l.length, p = Ks(t.call(c, c && c.__data__, f, r)), d = p.length, g = a[f] = new Array(d), w = o[f] = new Array(d), y = u[f] = new Array(h);
    n(c, l, g, w, y, p, e);
    for (var T = 0, O = 0, A, b; T < d; ++T)
      if (A = g[T]) {
        for (T >= O && (O = T + 1); !(b = w[O]) && ++O < d; ) ;
        A._next = b || null;
      }
  }
  return o = new E(o, r), o._enter = a, o._exit = u, o;
}
function Ks(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Us() {
  return new E(this._exit || this._groups.map(ei), this._parents);
}
function Ws(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function qs(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, o = Math.min(i, s), a = new Array(i), u = 0; u < o; ++u)
    for (var f = n[u], c = r[u], l = f.length, h = a[u] = new Array(l), p, d = 0; d < l; ++d)
      (p = f[d] || c[d]) && (h[d] = p);
  for (; u < i; ++u)
    a[u] = n[u];
  return new E(a, this._parents);
}
function Vs() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], o; --i >= 0; )
      (o = r[i]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function $s(t) {
  t || (t = to);
  function e(l, h) {
    return l && h ? t(l.__data__, h.__data__) : !l - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var o = n[s], a = o.length, u = i[s] = new Array(a), f, c = 0; c < a; ++c)
      (f = o[c]) && (u[c] = f);
    u.sort(e);
  }
  return new E(i, this._parents).order();
}
function to(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function eo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function no() {
  return Array.from(this);
}
function ro() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function io() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function so() {
  return !this.node();
}
function oo(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, o = i.length, a; s < o; ++s)
      (a = i[s]) && t.call(a, a.__data__, s, i);
  return this;
}
function ao(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function uo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function fo(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function lo(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function co(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function ho(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function go(t, e) {
  var n = Be(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? uo : ao : typeof e == "function" ? n.local ? ho : co : n.local ? lo : fo)(n, e));
}
function ni(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function po(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ao(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function yo(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function vo(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? po : typeof e == "function" ? yo : Ao)(t, e, n ?? "")) : Ht(this.node(), t);
}
function Ht(t, e) {
  return t.style.getPropertyValue(e) || ni(t).getComputedStyle(t, null).getPropertyValue(e);
}
function mo(t) {
  return function() {
    delete this[t];
  };
}
function bo(t, e) {
  return function() {
    this[t] = e;
  };
}
function xo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function wo(t, e) {
  return arguments.length > 1 ? this.each((e == null ? mo : typeof e == "function" ? xo : bo)(t, e)) : this.node()[t];
}
function ri(t) {
  return t.trim().split(/^|\s+/);
}
function Hn(t) {
  return t.classList || new ii(t);
}
function ii(t) {
  this._node = t, this._names = ri(t.getAttribute("class") || "");
}
ii.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function si(t, e) {
  for (var n = Hn(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function oi(t, e) {
  for (var n = Hn(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Po(t) {
  return function() {
    si(this, t);
  };
}
function Mo(t) {
  return function() {
    oi(this, t);
  };
}
function To(t, e) {
  return function() {
    (e.apply(this, arguments) ? si : oi)(this, t);
  };
}
function zo(t, e) {
  var n = ri(t + "");
  if (arguments.length < 2) {
    for (var r = Hn(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? To : e ? Po : Mo)(n, e));
}
function Oo() {
  this.textContent = "";
}
function ko(t) {
  return function() {
    this.textContent = t;
  };
}
function Ho(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function No(t) {
  return arguments.length ? this.each(t == null ? Oo : (typeof t == "function" ? Ho : ko)(t)) : this.node().textContent;
}
function jo() {
  this.innerHTML = "";
}
function So(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Xo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Io(t) {
  return arguments.length ? this.each(t == null ? jo : (typeof t == "function" ? Xo : So)(t)) : this.node().innerHTML;
}
function Bo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Do() {
  return this.each(Bo);
}
function Eo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Go() {
  return this.each(Eo);
}
function Co(t) {
  var e = typeof t == "function" ? t : qr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Yo() {
  return null;
}
function Lo(t, e) {
  var n = typeof t == "function" ? t : qr(t), r = e == null ? Yo : typeof e == "function" ? e : kn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Fo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Jo() {
  return this.each(Fo);
}
function Zo() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ro() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function _o(t) {
  return this.select(t ? Ro : Zo);
}
function Qo(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ko(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Uo(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Wo(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function qo(t, e, n) {
  return function() {
    var r = this.__on, i, s = Ko(e);
    if (r) {
      for (var o = 0, a = r.length; o < a; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, s, n), i = { type: t.type, name: t.name, value: e, listener: s, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Vo(t, e, n) {
  var r = Uo(t + ""), i, s = r.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, f = a.length, c; u < f; ++u)
        for (i = 0, c = a[u]; i < s; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = e ? qo : Wo, i = 0; i < s; ++i) this.each(a(r[i], e, n));
  return this;
}
function ai(t, e, n) {
  var r = ni(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function $o(t, e) {
  return function() {
    return ai(this, t, e);
  };
}
function ta(t, e) {
  return function() {
    return ai(this, t, e.apply(this, arguments));
  };
}
function ea(t, e) {
  return this.each((typeof e == "function" ? ta : $o)(t, e));
}
function* na() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, o; i < s; ++i)
      (o = r[i]) && (yield o);
}
var ui = [null];
function E(t, e) {
  this._groups = t, this._parents = e;
}
function Qt() {
  return new E([[document.documentElement]], ui);
}
function ra() {
  return this;
}
E.prototype = Qt.prototype = {
  constructor: E,
  select: ks,
  selectAll: Ss,
  selectChild: Ds,
  selectChildren: Ys,
  filter: Ls,
  data: Qs,
  enter: Fs,
  exit: Us,
  join: Ws,
  merge: qs,
  selection: ra,
  order: Vs,
  sort: $s,
  call: eo,
  nodes: no,
  node: ro,
  size: io,
  empty: so,
  each: oo,
  attr: go,
  style: vo,
  property: wo,
  classed: zo,
  text: No,
  html: Io,
  raise: Do,
  lower: Go,
  append: Co,
  insert: Lo,
  remove: Jo,
  clone: _o,
  datum: Qo,
  on: Vo,
  dispatch: ea,
  [Symbol.iterator]: na
};
function k(t) {
  return typeof t == "string" ? new E([[document.querySelector(t)]], [document.documentElement]) : new E([[t]], ui);
}
function ia(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function an(t, e) {
  if (t = ia(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const sa = { passive: !1 }, Yt = { capture: !0, passive: !1 };
function qe(t) {
  t.stopImmediatePropagation();
}
function Ot(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function oa(t) {
  var e = t.document.documentElement, n = k(t).on("dragstart.drag", Ot, Yt);
  "onselectstart" in e ? n.on("selectstart.drag", Ot, Yt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function aa(t, e) {
  var n = t.document.documentElement, r = k(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Ot, Yt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ee = (t) => () => t;
function un(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: i,
  active: s,
  x: o,
  y: a,
  dx: u,
  dy: f,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: s, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: f, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
un.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function ua(t) {
  return !t.ctrlKey && !t.button;
}
function fa() {
  return this.parentNode;
}
function la(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function ca() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ha() {
  var t = ua, e = fa, n = la, r = ca, i = {}, s = On("start", "drag", "end"), o = 0, a, u, f, c, l = 0;
  function h(A) {
    A.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", y, sa).on("touchend.drag touchcancel.drag", T).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(A, b) {
    if (!(c || !t.call(this, A, b))) {
      var H = O(this, e.call(this, A, b), A, b, "mouse");
      H && (k(A.view).on("mousemove.drag", d, Yt).on("mouseup.drag", g, Yt), oa(A.view), qe(A), f = !1, a = A.clientX, u = A.clientY, H("start", A));
    }
  }
  function d(A) {
    if (Ot(A), !f) {
      var b = A.clientX - a, H = A.clientY - u;
      f = b * b + H * H > l;
    }
    i.mouse("drag", A);
  }
  function g(A) {
    k(A.view).on("mousemove.drag mouseup.drag", null), aa(A.view, f), Ot(A), i.mouse("end", A);
  }
  function w(A, b) {
    if (t.call(this, A, b)) {
      var H = A.changedTouches, N = e.call(this, A, b), S = H.length, _, $;
      for (_ = 0; _ < S; ++_)
        ($ = O(this, N, A, b, H[_].identifier, H[_])) && (qe(A), $("start", A, H[_]));
    }
  }
  function y(A) {
    var b = A.changedTouches, H = b.length, N, S;
    for (N = 0; N < H; ++N)
      (S = i[b[N].identifier]) && (Ot(A), S("drag", A, b[N]));
  }
  function T(A) {
    var b = A.changedTouches, H = b.length, N, S;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), N = 0; N < H; ++N)
      (S = i[b[N].identifier]) && (qe(A), S("end", A, b[N]));
  }
  function O(A, b, H, N, S, _) {
    var $ = s.copy(), x = an(_ || H, b), Q, X, L;
    if ((L = n.call(A, new un("beforestart", {
      sourceEvent: H,
      target: h,
      identifier: S,
      active: o,
      x: x[0],
      y: x[1],
      dx: 0,
      dy: 0,
      dispatch: $
    }), N)) != null)
      return Q = L.x - x[0] || 0, X = L.y - x[1] || 0, function $t(ut, dt, Tt) {
        var G = x, We;
        switch (ut) {
          case "start":
            i[S] = $t, We = o++;
            break;
          case "end":
            delete i[S], --o;
          // falls through
          case "drag":
            x = an(Tt || dt, b), We = o;
            break;
        }
        $.call(
          ut,
          A,
          new un(ut, {
            sourceEvent: dt,
            subject: L,
            target: h,
            identifier: S,
            active: We,
            x: x[0] + Q,
            y: x[1] + X,
            dx: x[0] - G[0],
            dy: x[1] - G[1],
            dispatch: $
          }),
          N
        );
      };
  }
  return h.filter = function(A) {
    return arguments.length ? (t = typeof A == "function" ? A : ee(!!A), h) : t;
  }, h.container = function(A) {
    return arguments.length ? (e = typeof A == "function" ? A : ee(A), h) : e;
  }, h.subject = function(A) {
    return arguments.length ? (n = typeof A == "function" ? A : ee(A), h) : n;
  }, h.touchable = function(A) {
    return arguments.length ? (r = typeof A == "function" ? A : ee(!!A), h) : r;
  }, h.on = function() {
    var A = s.on.apply(s, arguments);
    return A === s ? h : A;
  }, h.clickDistance = function(A) {
    return arguments.length ? (l = (A = +A) * A, h) : Math.sqrt(l);
  }, h;
}
function Nn(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function fi(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Kt() {
}
var Lt = 0.7, Me = 1 / Lt, kt = "\\s*([+-]?\\d+)\\s*", Ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", K = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", da = /^#([0-9a-f]{3,8})$/, ga = new RegExp(`^rgb\\(${kt},${kt},${kt}\\)$`), pa = new RegExp(`^rgb\\(${K},${K},${K}\\)$`), Aa = new RegExp(`^rgba\\(${kt},${kt},${kt},${Ft}\\)$`), ya = new RegExp(`^rgba\\(${K},${K},${K},${Ft}\\)$`), va = new RegExp(`^hsl\\(${Ft},${K},${K}\\)$`), ma = new RegExp(`^hsla\\(${Ft},${K},${K},${Ft}\\)$`), rr = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Nn(Kt, vt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ir,
  // Deprecated! Use color.formatHex.
  formatHex: ir,
  formatHex8: ba,
  formatHsl: xa,
  formatRgb: sr,
  toString: sr
});
function ir() {
  return this.rgb().formatHex();
}
function ba() {
  return this.rgb().formatHex8();
}
function xa() {
  return li(this).formatHsl();
}
function sr() {
  return this.rgb().formatRgb();
}
function vt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = da.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? or(e) : n === 3 ? new B(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ne(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ne(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ga.exec(t)) ? new B(e[1], e[2], e[3], 1) : (e = pa.exec(t)) ? new B(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Aa.exec(t)) ? ne(e[1], e[2], e[3], e[4]) : (e = ya.exec(t)) ? ne(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = va.exec(t)) ? fr(e[1], e[2] / 100, e[3] / 100, 1) : (e = ma.exec(t)) ? fr(e[1], e[2] / 100, e[3] / 100, e[4]) : rr.hasOwnProperty(t) ? or(rr[t]) : t === "transparent" ? new B(NaN, NaN, NaN, 0) : null;
}
function or(t) {
  return new B(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ne(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new B(t, e, n, r);
}
function wa(t) {
  return t instanceof Kt || (t = vt(t)), t ? (t = t.rgb(), new B(t.r, t.g, t.b, t.opacity)) : new B();
}
function fn(t, e, n, r) {
  return arguments.length === 1 ? wa(t) : new B(t, e, n, r ?? 1);
}
function B(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Nn(B, fn, fi(Kt, {
  brighter(t) {
    return t = t == null ? Me : Math.pow(Me, t), new B(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lt : Math.pow(Lt, t), new B(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new B(yt(this.r), yt(this.g), yt(this.b), Te(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ar,
  // Deprecated! Use color.formatHex.
  formatHex: ar,
  formatHex8: Pa,
  formatRgb: ur,
  toString: ur
}));
function ar() {
  return `#${pt(this.r)}${pt(this.g)}${pt(this.b)}`;
}
function Pa() {
  return `#${pt(this.r)}${pt(this.g)}${pt(this.b)}${pt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ur() {
  const t = Te(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${yt(this.r)}, ${yt(this.g)}, ${yt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Te(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function yt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function pt(t) {
  return t = yt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function fr(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new J(t, e, n, r);
}
function li(t) {
  if (t instanceof J) return new J(t.h, t.s, t.l, t.opacity);
  if (t instanceof Kt || (t = vt(t)), !t) return new J();
  if (t instanceof J) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), o = NaN, a = s - i, u = (s + i) / 2;
  return a ? (e === s ? o = (n - r) / a + (n < r) * 6 : n === s ? o = (r - e) / a + 2 : o = (e - n) / a + 4, a /= u < 0.5 ? s + i : 2 - s - i, o *= 60) : a = u > 0 && u < 1 ? 0 : o, new J(o, a, u, t.opacity);
}
function Ma(t, e, n, r) {
  return arguments.length === 1 ? li(t) : new J(t, e, n, r ?? 1);
}
function J(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Nn(J, Ma, fi(Kt, {
  brighter(t) {
    return t = t == null ? Me : Math.pow(Me, t), new J(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lt : Math.pow(Lt, t), new J(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new B(
      Ve(t >= 240 ? t - 240 : t + 120, i, r),
      Ve(t, i, r),
      Ve(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new J(lr(this.h), re(this.s), re(this.l), Te(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Te(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${lr(this.h)}, ${re(this.s) * 100}%, ${re(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function lr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function re(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ve(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const jn = (t) => () => t;
function Ta(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function za(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Oa(t) {
  return (t = +t) == 1 ? ci : function(e, n) {
    return n - e ? za(e, n, t) : jn(isNaN(e) ? n : e);
  };
}
function ci(t, e) {
  var n = e - t;
  return n ? Ta(t, n) : jn(isNaN(t) ? e : t);
}
const ze = function t(e) {
  var n = Oa(e);
  function r(i, s) {
    var o = n((i = fn(i)).r, (s = fn(s)).r), a = n(i.g, s.g), u = n(i.b, s.b), f = ci(i.opacity, s.opacity);
    return function(c) {
      return i.r = o(c), i.g = a(c), i.b = u(c), i.opacity = f(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ka(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function Ha(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Na(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = Sn(t[o], e[o]);
  for (; o < n; ++o) s[o] = e[o];
  return function(a) {
    for (o = 0; o < r; ++o) s[o] = i[o](a);
    return s;
  };
}
function ja(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function F(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Sa(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Sn(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var ln = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $e = new RegExp(ln.source, "g");
function Xa(t) {
  return function() {
    return t;
  };
}
function Ia(t) {
  return function(e) {
    return t(e) + "";
  };
}
function hi(t, e) {
  var n = ln.lastIndex = $e.lastIndex = 0, r, i, s, o = -1, a = [], u = [];
  for (t = t + "", e = e + ""; (r = ln.exec(t)) && (i = $e.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), a[o] ? a[o] += s : a[++o] = s), (r = r[0]) === (i = i[0]) ? a[o] ? a[o] += i : a[++o] = i : (a[++o] = null, u.push({ i: o, x: F(r, i) })), n = $e.lastIndex;
  return n < e.length && (s = e.slice(n), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? u[0] ? Ia(u[0].x) : Xa(e) : (e = u.length, function(f) {
    for (var c = 0, l; c < e; ++c) a[(l = u[c]).i] = l.x(f);
    return a.join("");
  });
}
function Sn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? jn(e) : (n === "number" ? F : n === "string" ? (r = vt(e)) ? (e = r, ze) : hi : e instanceof vt ? ze : e instanceof Date ? ja : Ha(e) ? ka : Array.isArray(e) ? Na : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Sa : F)(t, e);
}
function Ba(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var cr = 180 / Math.PI, cn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function di(t, e, n, r, i, s) {
  var o, a, u;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (u = t * n + e * r) && (n -= t * u, r -= e * u), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, u /= a), t * r < e * n && (t = -t, e = -e, u = -u, o = -o), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * cr,
    skewX: Math.atan(u) * cr,
    scaleX: o,
    scaleY: a
  };
}
var ie;
function Da(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? cn : di(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ea(t) {
  return t == null || (ie || (ie = document.createElementNS("http://www.w3.org/2000/svg", "g")), ie.setAttribute("transform", t), !(t = ie.transform.baseVal.consolidate())) ? cn : (t = t.matrix, di(t.a, t.b, t.c, t.d, t.e, t.f));
}
function gi(t, e, n, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function s(f, c, l, h, p, d) {
    if (f !== l || c !== h) {
      var g = p.push("translate(", null, e, null, n);
      d.push({ i: g - 4, x: F(f, l) }, { i: g - 2, x: F(c, h) });
    } else (l || h) && p.push("translate(" + l + e + h + n);
  }
  function o(f, c, l, h) {
    f !== c ? (f - c > 180 ? c += 360 : c - f > 180 && (f += 360), h.push({ i: l.push(i(l) + "rotate(", null, r) - 2, x: F(f, c) })) : c && l.push(i(l) + "rotate(" + c + r);
  }
  function a(f, c, l, h) {
    f !== c ? h.push({ i: l.push(i(l) + "skewX(", null, r) - 2, x: F(f, c) }) : c && l.push(i(l) + "skewX(" + c + r);
  }
  function u(f, c, l, h, p, d) {
    if (f !== l || c !== h) {
      var g = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: g - 4, x: F(f, l) }, { i: g - 2, x: F(c, h) });
    } else (l !== 1 || h !== 1) && p.push(i(p) + "scale(" + l + "," + h + ")");
  }
  return function(f, c) {
    var l = [], h = [];
    return f = t(f), c = t(c), s(f.translateX, f.translateY, c.translateX, c.translateY, l, h), o(f.rotate, c.rotate, l, h), a(f.skewX, c.skewX, l, h), u(f.scaleX, f.scaleY, c.scaleX, c.scaleY, l, h), f = c = null, function(p) {
      for (var d = -1, g = h.length, w; ++d < g; ) l[(w = h[d]).i] = w.x(p);
      return l.join("");
    };
  };
}
var Ga = gi(Da, "px, ", "px)", "deg)"), Ca = gi(Ea, ", ", ")", ")"), Nt = 0, Bt = 0, St = 0, pi = 1e3, Oe, Dt, ke = 0, mt = 0, De = 0, Jt = typeof performance == "object" && performance.now ? performance : Date, Ai = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ee() {
  return mt || (Ai(Ya), mt = Jt.now() + De);
}
function Ya() {
  mt = 0;
}
function Zt() {
  this._call = this._time = this._next = null;
}
Zt.prototype = yi.prototype = {
  constructor: Zt,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ee() : +n) + (e == null ? 0 : +e), !this._next && Dt !== this && (Dt ? Dt._next = this : Oe = this, Dt = this), this._call = t, this._time = n, hn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, hn());
  }
};
function yi(t, e, n) {
  var r = new Zt();
  return r.restart(t, e, n), r;
}
function La() {
  Ee(), ++Nt;
  for (var t = Oe, e; t; )
    (e = mt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Nt;
}
function hr() {
  mt = (ke = Jt.now()) + De, Nt = Bt = 0;
  try {
    La();
  } finally {
    Nt = 0, Ja(), mt = 0;
  }
}
function Fa() {
  var t = Jt.now(), e = t - ke;
  e > pi && (De -= e, ke = t);
}
function Ja() {
  for (var t, e = Oe, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Oe = n);
  Dt = t, hn(r);
}
function hn(t) {
  if (!Nt) {
    Bt && (Bt = clearTimeout(Bt));
    var e = t - mt;
    e > 24 ? (t < 1 / 0 && (Bt = setTimeout(hr, t - Jt.now() - De)), St && (St = clearInterval(St))) : (St || (ke = Jt.now(), St = setInterval(Fa, pi)), Nt = 1, Ai(hr));
  }
}
function dr(t, e, n) {
  var r = new Zt();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function Za(t, e, n) {
  var r = new Zt(), i = e;
  return r._restart = r.restart, r.restart = function(s, o, a) {
    o = +o, a = a == null ? Ee() : +a, r._restart(function u(f) {
      f += i, r._restart(u, i += o, a), s(f);
    }, o, a);
  }, r.restart(t, e, n), r;
}
var Ra = On("start", "end", "cancel", "interrupt"), _a = [], vi = 0, gr = 1, dn = 2, ge = 3, pr = 4, gn = 5, pe = 6;
function Ge(t, e, n, r, i, s) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  Qa(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ra,
    tween: _a,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: vi
  });
}
function Xn(t, e) {
  var n = Z(t, e);
  if (n.state > vi) throw new Error("too late; already scheduled");
  return n;
}
function q(t, e) {
  var n = Z(t, e);
  if (n.state > ge) throw new Error("too late; already running");
  return n;
}
function Z(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Qa(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = yi(s, 0, n.time);
  function s(f) {
    n.state = gr, n.timer.restart(o, n.delay, n.time), n.delay <= f && o(f - n.delay);
  }
  function o(f) {
    var c, l, h, p;
    if (n.state !== gr) return u();
    for (c in r)
      if (p = r[c], p.name === n.name) {
        if (p.state === ge) return dr(o);
        p.state === pr ? (p.state = pe, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < e && (p.state = pe, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (dr(function() {
      n.state === ge && (n.state = pr, n.timer.restart(a, n.delay, n.time), a(f));
    }), n.state = dn, n.on.call("start", t, t.__data__, n.index, n.group), n.state === dn) {
      for (n.state = ge, i = new Array(h = n.tween.length), c = 0, l = -1; c < h; ++c)
        (p = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++l] = p);
      i.length = l + 1;
    }
  }
  function a(f) {
    for (var c = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(u), n.state = gn, 1), l = -1, h = i.length; ++l < h; )
      i[l].call(t, c);
    n.state === gn && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = pe, n.timer.stop(), delete r[e];
    for (var f in r) return;
    delete t.__transition;
  }
}
function Ka(t, e) {
  var n = t.__transition, r, i, s = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > dn && r.state < gn, r.state = pe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    s && delete t.__transition;
  }
}
function Ua(t) {
  return this.each(function() {
    Ka(this, t);
  });
}
function Wa(t, e) {
  var n, r;
  return function() {
    var i = q(this, t), s = i.tween;
    if (s !== n) {
      r = n = s;
      for (var o = 0, a = r.length; o < a; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function qa(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = q(this, t), o = s.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var a = { name: e, value: n }, u = 0, f = i.length; u < f; ++u)
        if (i[u].name === e) {
          i[u] = a;
          break;
        }
      u === f && i.push(a);
    }
    s.tween = i;
  };
}
function Va(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Z(this.node(), n).tween, i = 0, s = r.length, o; i < s; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Wa : qa)(n, t, e));
}
function In(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = q(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Z(i, r).value[e];
  };
}
function mi(t, e) {
  var n;
  return (typeof e == "number" ? F : e instanceof vt ? ze : (n = vt(e)) ? (e = n, ze) : hi)(t, e);
}
function $a(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function tu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function eu(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? s : s = e(r = o, n);
  };
}
function nu(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? s : s = e(r = o, n);
  };
}
function ru(t, e, n) {
  var r, i, s;
  return function() {
    var o, a = n(this), u;
    return a == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), u = a + "", o === u ? null : o === r && u === i ? s : (i = u, s = e(r = o, a)));
  };
}
function iu(t, e, n) {
  var r, i, s;
  return function() {
    var o, a = n(this), u;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), u = a + "", o === u ? null : o === r && u === i ? s : (i = u, s = e(r = o, a)));
  };
}
function su(t, e) {
  var n = Be(t), r = n === "transform" ? Ca : mi;
  return this.attrTween(t, typeof e == "function" ? (n.local ? iu : ru)(n, r, In(this, "attr." + t, e)) : e == null ? (n.local ? tu : $a)(n) : (n.local ? nu : eu)(n, r, e));
}
function ou(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function au(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function uu(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && au(t, s)), n;
  }
  return i._value = e, i;
}
function fu(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && ou(t, s)), n;
  }
  return i._value = e, i;
}
function lu(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Be(t);
  return this.tween(n, (r.local ? uu : fu)(r, e));
}
function cu(t, e) {
  return function() {
    Xn(this, t).delay = +e.apply(this, arguments);
  };
}
function hu(t, e) {
  return e = +e, function() {
    Xn(this, t).delay = e;
  };
}
function du(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? cu : hu)(e, t)) : Z(this.node(), e).delay;
}
function gu(t, e) {
  return function() {
    q(this, t).duration = +e.apply(this, arguments);
  };
}
function pu(t, e) {
  return e = +e, function() {
    q(this, t).duration = e;
  };
}
function Au(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? gu : pu)(e, t)) : Z(this.node(), e).duration;
}
function yu(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    q(this, t).ease = e;
  };
}
function vu(t) {
  var e = this._id;
  return arguments.length ? this.each(yu(e, t)) : Z(this.node(), e).ease;
}
function mu(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    q(this, t).ease = n;
  };
}
function bu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(mu(this._id, t));
}
function xu(t) {
  typeof t != "function" && (t = $r(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], o = s.length, a = r[i] = [], u, f = 0; f < o; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u);
  return new rt(r, this._parents, this._name, this._id);
}
function wu(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), o = new Array(r), a = 0; a < s; ++a)
    for (var u = e[a], f = n[a], c = u.length, l = o[a] = new Array(c), h, p = 0; p < c; ++p)
      (h = u[p] || f[p]) && (l[p] = h);
  for (; a < r; ++a)
    o[a] = e[a];
  return new rt(o, this._parents, this._name, this._id);
}
function Pu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Mu(t, e, n) {
  var r, i, s = Pu(e) ? Xn : q;
  return function() {
    var o = s(this, t), a = o.on;
    a !== r && (i = (r = a).copy()).on(e, n), o.on = i;
  };
}
function Tu(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Z(this.node(), n).on.on(t) : this.each(Mu(n, t, e));
}
function zu(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Ou() {
  return this.on("end.remove", zu(this._id));
}
function ku(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = kn(t));
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, f = s[o] = new Array(u), c, l, h = 0; h < u; ++h)
      (c = a[h]) && (l = t.call(c, c.__data__, h, a)) && ("__data__" in c && (l.__data__ = c.__data__), f[h] = l, Ge(f[h], e, n, h, f, Z(c, n)));
  return new rt(s, this._parents, e, n);
}
function Hu(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Vr(t));
  for (var r = this._groups, i = r.length, s = [], o = [], a = 0; a < i; ++a)
    for (var u = r[a], f = u.length, c, l = 0; l < f; ++l)
      if (c = u[l]) {
        for (var h = t.call(c, c.__data__, l, u), p, d = Z(c, n), g = 0, w = h.length; g < w; ++g)
          (p = h[g]) && Ge(p, e, n, g, h, d);
        s.push(h), o.push(c);
      }
  return new rt(s, o, e, n);
}
var Nu = Qt.prototype.constructor;
function ju() {
  return new Nu(this._groups, this._parents);
}
function Su(t, e) {
  var n, r, i;
  return function() {
    var s = Ht(this, t), o = (this.style.removeProperty(t), Ht(this, t));
    return s === o ? null : s === n && o === r ? i : i = e(n = s, r = o);
  };
}
function bi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Xu(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var o = Ht(this, t);
    return o === i ? null : o === r ? s : s = e(r = o, n);
  };
}
function Iu(t, e, n) {
  var r, i, s;
  return function() {
    var o = Ht(this, t), a = n(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(t), Ht(this, t))), o === u ? null : o === r && u === i ? s : (i = u, s = e(r = o, a));
  };
}
function Bu(t, e) {
  var n, r, i, s = "style." + e, o = "end." + s, a;
  return function() {
    var u = q(this, t), f = u.on, c = u.value[s] == null ? a || (a = bi(e)) : void 0;
    (f !== n || i !== c) && (r = (n = f).copy()).on(o, i = c), u.on = r;
  };
}
function Du(t, e, n) {
  var r = (t += "") == "transform" ? Ga : mi;
  return e == null ? this.styleTween(t, Su(t, r)).on("end.style." + t, bi(t)) : typeof e == "function" ? this.styleTween(t, Iu(t, r, In(this, "style." + t, e))).each(Bu(this._id, t)) : this.styleTween(t, Xu(t, r, e), n).on("end.style." + t, null);
}
function Eu(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Gu(t, e, n) {
  var r, i;
  function s() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && Eu(t, o, n)), r;
  }
  return s._value = e, s;
}
function Cu(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Gu(t, e, n ?? ""));
}
function Yu(t) {
  return function() {
    this.textContent = t;
  };
}
function Lu(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Fu(t) {
  return this.tween("text", typeof t == "function" ? Lu(In(this, "text", t)) : Yu(t == null ? "" : t + ""));
}
function Ju(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Zu(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Ju(i)), e;
  }
  return r._value = t, r;
}
function Ru(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Zu(t));
}
function _u() {
  for (var t = this._name, e = this._id, n = xi(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
      if (u = o[f]) {
        var c = Z(u, e);
        Ge(u, t, n, f, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new rt(r, this._parents, t, n);
}
function Qu() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, o) {
    var a = { value: o }, u = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var f = q(this, r), c = f.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(u)), f.on = e;
    }), i === 0 && s();
  });
}
var Ku = 0;
function rt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function xi() {
  return ++Ku;
}
var tt = Qt.prototype;
rt.prototype = {
  constructor: rt,
  select: ku,
  selectAll: Hu,
  selectChild: tt.selectChild,
  selectChildren: tt.selectChildren,
  filter: xu,
  merge: wu,
  selection: ju,
  transition: _u,
  call: tt.call,
  nodes: tt.nodes,
  node: tt.node,
  size: tt.size,
  empty: tt.empty,
  each: tt.each,
  on: Tu,
  attr: su,
  attrTween: lu,
  style: Du,
  styleTween: Cu,
  text: Fu,
  textTween: Ru,
  remove: Ou,
  tween: Va,
  delay: du,
  duration: Au,
  ease: vu,
  easeVarying: bu,
  end: Qu,
  [Symbol.iterator]: tt[Symbol.iterator]
};
function Uu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Wu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Uu
};
function qu(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Vu(t) {
  var e, n;
  t instanceof rt ? (e = t._id, t = t._name) : (e = xi(), (n = Wu).time = Ee(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
      (u = o[f]) && Ge(u, t, e, f, o, n || qu(u, e));
  return new rt(r, this._parents, t, e);
}
Qt.prototype.interrupt = Ua;
Qt.prototype.transition = Vu;
const pn = Math.PI, An = 2 * pn, gt = 1e-6, $u = An - gt;
function wi(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function tf(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return wi;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Pi {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? wi : tf(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, s, o) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +s},${this._y1 = +o}`;
  }
  arcTo(e, n, r, i, s) {
    if (e = +e, n = +n, r = +r, i = +i, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let o = this._x1, a = this._y1, u = r - e, f = i - n, c = o - e, l = a - n, h = c * c + l * l;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > gt) if (!(Math.abs(l * u - f * c) > gt) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - o, d = i - a, g = u * u + f * f, w = p * p + d * d, y = Math.sqrt(g), T = Math.sqrt(h), O = s * Math.tan((pn - Math.acos((g + h - w) / (2 * y * T))) / 2), A = O / T, b = O / y;
      Math.abs(A - 1) > gt && this._append`L${e + A * c},${n + A * l}`, this._append`A${s},${s},0,0,${+(l * p > c * d)},${this._x1 = e + b * u},${this._y1 = n + b * f}`;
    }
  }
  arc(e, n, r, i, s, o) {
    if (e = +e, n = +n, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let a = r * Math.cos(i), u = r * Math.sin(i), f = e + a, c = n + u, l = 1 ^ o, h = o ? i - s : s - i;
    this._x1 === null ? this._append`M${f},${c}` : (Math.abs(this._x1 - f) > gt || Math.abs(this._y1 - c) > gt) && this._append`L${f},${c}`, r && (h < 0 && (h = h % An + An), h > $u ? this._append`A${r},${r},0,1,${l},${e - a},${n - u}A${r},${r},0,1,${l},${this._x1 = f},${this._y1 = c}` : h > gt && this._append`A${r},${r},0,${+(h >= pn)},${l},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function R() {
  return new Pi();
}
R.prototype = Pi.prototype;
function ef(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function He(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function jt(t) {
  return t = He(Math.abs(t)), t ? t[1] : NaN;
}
function nf(t, e) {
  return function(n, r) {
    for (var i = n.length, s = [], o = 0, a = t[0], u = 0; i > 0 && a > 0 && (u + a + 1 > r && (a = Math.max(1, r - u)), s.push(n.substring(i -= a, i + a)), !((u += a + 1) > r)); )
      a = t[o = (o + 1) % t.length];
    return s.reverse().join(e);
  };
}
function rf(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var sf = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ne(t) {
  if (!(e = sf.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new Bn({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Ne.prototype = Bn.prototype;
function Bn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Bn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function of(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Mi;
function af(t, e) {
  var n = He(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], s = i - (Mi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return s === o ? r : s > o ? r + new Array(s - o + 1).join("0") : s > 0 ? r.slice(0, s) + "." + r.slice(s) : "0." + new Array(1 - s).join("0") + He(t, Math.max(0, e + s - 1))[0];
}
function Ar(t, e) {
  var n = He(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const yr = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: ef,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Ar(t * 100, e),
  r: Ar,
  s: af,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function vr(t) {
  return t;
}
var mr = Array.prototype.map, br = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function uf(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? vr : nf(mr.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", s = t.numerals === void 0 ? vr : rf(mr.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function f(l) {
    l = Ne(l);
    var h = l.fill, p = l.align, d = l.sign, g = l.symbol, w = l.zero, y = l.width, T = l.comma, O = l.precision, A = l.trim, b = l.type;
    b === "n" ? (T = !0, b = "g") : yr[b] || (O === void 0 && (O = 12), A = !0, b = "g"), (w || h === "0" && p === "=") && (w = !0, h = "0", p = "=");
    var H = g === "$" ? n : g === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", N = g === "$" ? r : /[%p]/.test(b) ? o : "", S = yr[b], _ = /[defgprs%]/.test(b);
    O = O === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, O)) : Math.max(0, Math.min(20, O));
    function $(x) {
      var Q = H, X = N, L, $t, ut;
      if (b === "c")
        X = S(x) + X, x = "";
      else {
        x = +x;
        var dt = x < 0 || 1 / x < 0;
        if (x = isNaN(x) ? u : S(Math.abs(x), O), A && (x = of(x)), dt && +x == 0 && d !== "+" && (dt = !1), Q = (dt ? d === "(" ? d : a : d === "-" || d === "(" ? "" : d) + Q, X = (b === "s" ? br[8 + Mi / 3] : "") + X + (dt && d === "(" ? ")" : ""), _) {
          for (L = -1, $t = x.length; ++L < $t; )
            if (ut = x.charCodeAt(L), 48 > ut || ut > 57) {
              X = (ut === 46 ? i + x.slice(L + 1) : x.slice(L)) + X, x = x.slice(0, L);
              break;
            }
        }
      }
      T && !w && (x = e(x, 1 / 0));
      var Tt = Q.length + x.length + X.length, G = Tt < y ? new Array(y - Tt + 1).join(h) : "";
      switch (T && w && (x = e(G + x, G.length ? y - X.length : 1 / 0), G = ""), p) {
        case "<":
          x = Q + x + X + G;
          break;
        case "=":
          x = Q + G + x + X;
          break;
        case "^":
          x = G.slice(0, Tt = G.length >> 1) + Q + x + X + G.slice(Tt);
          break;
        default:
          x = G + Q + x + X;
          break;
      }
      return s(x);
    }
    return $.toString = function() {
      return l + "";
    }, $;
  }
  function c(l, h) {
    var p = f((l = Ne(l), l.type = "f", l)), d = Math.max(-8, Math.min(8, Math.floor(jt(h) / 3))) * 3, g = Math.pow(10, -d), w = br[8 + d / 3];
    return function(y) {
      return p(g * y) + w;
    };
  }
  return {
    format: f,
    formatPrefix: c
  };
}
var se, Ce, Ti;
ff({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ff(t) {
  return se = uf(t), Ce = se.format, Ti = se.formatPrefix, se;
}
function lf(t) {
  return Math.max(0, -jt(Math.abs(t)));
}
function cf(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(jt(e) / 3))) * 3 - jt(Math.abs(t)));
}
function hf(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, jt(e) - jt(t)) + 1;
}
const df = Math.random, gf = function t(e) {
  function n(r, i) {
    var s, o;
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, function() {
      var a;
      if (s != null) a = s, s = null;
      else do
        s = e() * 2 - 1, a = e() * 2 - 1, o = s * s + a * a;
      while (!o || o > 1);
      return r + i * a * Math.sqrt(-2 * Math.log(o) / o);
    };
  }
  return n.source = t, n;
}(df);
function pf(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function Af(t) {
  return function() {
    return t;
  };
}
function yf(t) {
  return +t;
}
var xr = [0, 1];
function zt(t) {
  return t;
}
function yn(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Af(isNaN(e) ? NaN : 0.5);
}
function vf(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function mf(t, e, n) {
  var r = t[0], i = t[1], s = e[0], o = e[1];
  return i < r ? (r = yn(i, r), s = n(o, s)) : (r = yn(r, i), s = n(s, o)), function(a) {
    return s(r(a));
  };
}
function bf(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), s = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = yn(t[o], t[o + 1]), s[o] = n(e[o], e[o + 1]);
  return function(a) {
    var u = ps(t, a, 1, r) - 1;
    return s[u](i[u](a));
  };
}
function xf(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function wf() {
  var t = xr, e = xr, n = Sn, r, i, s, o = zt, a, u, f;
  function c() {
    var h = Math.min(t.length, e.length);
    return o !== zt && (o = vf(t[0], t[h - 1])), a = h > 2 ? bf : mf, u = f = null, l;
  }
  function l(h) {
    return h == null || isNaN(h = +h) ? s : (u || (u = a(t.map(r), e, n)))(r(o(h)));
  }
  return l.invert = function(h) {
    return o(i((f || (f = a(e, t.map(r), F)))(h)));
  }, l.domain = function(h) {
    return arguments.length ? (t = Array.from(h, yf), c()) : t.slice();
  }, l.range = function(h) {
    return arguments.length ? (e = Array.from(h), c()) : e.slice();
  }, l.rangeRound = function(h) {
    return e = Array.from(h), n = Ba, c();
  }, l.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : zt, c()) : o !== zt;
  }, l.interpolate = function(h) {
    return arguments.length ? (n = h, c()) : n;
  }, l.unknown = function(h) {
    return arguments.length ? (s = h, l) : s;
  }, function(h, p) {
    return r = h, i = p, c();
  };
}
function Pf() {
  return wf()(zt, zt);
}
function Mf(t, e, n, r) {
  var i = bs(t, e, n), s;
  switch (r = Ne(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(s = cf(i, o)) && (r.precision = s), Ti(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(s = hf(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = s - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(s = lf(i)) && (r.precision = s - (r.type === "%") * 2);
      break;
    }
  }
  return Ce(r);
}
function Tf(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return ms(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Mf(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, s = r.length - 1, o = r[i], a = r[s], u, f, c = 10;
    for (a < o && (f = o, o = a, a = f, f = i, i = s, s = f); c-- > 0; ) {
      if (f = sn(o, a, n), f === u)
        return r[i] = o, r[s] = a, e(r);
      if (f > 0)
        o = Math.floor(o / f) * f, a = Math.ceil(a / f) * f;
      else if (f < 0)
        o = Math.ceil(o * f) / f, a = Math.floor(a * f) / f;
      else
        break;
      u = f;
    }
    return t;
  }, t;
}
function U() {
  var t = Pf();
  return t.copy = function() {
    return xf(t, U());
  }, pf.apply(t, arguments), Tf(t);
}
function Et(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Et.prototype = {
  constructor: Et,
  scale: function(t) {
    return t === 1 ? this : new Et(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Et(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Et.prototype;
var zi = typeof global == "object" && global && global.Object === Object && global, zf = typeof self == "object" && self && self.Object === Object && self, st = zi || zf || Function("return this")(), W = st.Symbol, Oi = Object.prototype, Of = Oi.hasOwnProperty, kf = Oi.toString, Xt = W ? W.toStringTag : void 0;
function Hf(t) {
  var e = Of.call(t, Xt), n = t[Xt];
  try {
    t[Xt] = void 0;
    var r = !0;
  } catch {
  }
  var i = kf.call(t);
  return r && (e ? t[Xt] = n : delete t[Xt]), i;
}
var Nf = Object.prototype, jf = Nf.toString;
function Sf(t) {
  return jf.call(t);
}
var Xf = "[object Null]", If = "[object Undefined]", wr = W ? W.toStringTag : void 0;
function wt(t) {
  return t == null ? t === void 0 ? If : Xf : wr && wr in Object(t) ? Hf(t) : Sf(t);
}
function bt(t) {
  return t != null && typeof t == "object";
}
var Bf = "[object Symbol]";
function Ye(t) {
  return typeof t == "symbol" || bt(t) && wt(t) == Bf;
}
function Ut(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var D = Array.isArray, Pr = W ? W.prototype : void 0, Mr = Pr ? Pr.toString : void 0;
function ki(t) {
  if (typeof t == "string")
    return t;
  if (D(t))
    return Ut(t, ki) + "";
  if (Ye(t))
    return Mr ? Mr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Df = /\s/;
function Ef(t) {
  for (var e = t.length; e-- && Df.test(t.charAt(e)); )
    ;
  return e;
}
var Gf = /^\s+/;
function Cf(t) {
  return t && t.slice(0, Ef(t) + 1).replace(Gf, "");
}
function it(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Tr = NaN, Yf = /^[-+]0x[0-9a-f]+$/i, Lf = /^0b[01]+$/i, Ff = /^0o[0-7]+$/i, Jf = parseInt;
function Zf(t) {
  if (typeof t == "number")
    return t;
  if (Ye(t))
    return Tr;
  if (it(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = it(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Cf(t);
  var n = Lf.test(t);
  return n || Ff.test(t) ? Jf(t.slice(2), n ? 2 : 8) : Yf.test(t) ? Tr : +t;
}
var Rf = 1 / 0, _f = 17976931348623157e292;
function tn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Zf(t), t === Rf || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * _f;
  }
  return t === t ? t : 0;
}
function Hi(t) {
  return t;
}
var Qf = "[object AsyncFunction]", Kf = "[object Function]", Uf = "[object GeneratorFunction]", Wf = "[object Proxy]";
function Ni(t) {
  if (!it(t))
    return !1;
  var e = wt(t);
  return e == Kf || e == Uf || e == Qf || e == Wf;
}
var en = st["__core-js_shared__"], zr = function() {
  var t = /[^.]+$/.exec(en && en.keys && en.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function qf(t) {
  return !!zr && zr in t;
}
var Vf = Function.prototype, $f = Vf.toString;
function Pt(t) {
  if (t != null) {
    try {
      return $f.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var tl = /[\\^$.*+?()[\]{}|]/g, el = /^\[object .+?Constructor\]$/, nl = Function.prototype, rl = Object.prototype, il = nl.toString, sl = rl.hasOwnProperty, ol = RegExp(
  "^" + il.call(sl).replace(tl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function al(t) {
  if (!it(t) || qf(t))
    return !1;
  var e = Ni(t) ? ol : el;
  return e.test(Pt(t));
}
function ul(t, e) {
  return t == null ? void 0 : t[e];
}
function Mt(t, e) {
  var n = ul(t, e);
  return al(n) ? n : void 0;
}
var vn = Mt(st, "WeakMap");
function fl(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var Or = function() {
  try {
    var t = Mt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function ll(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var cl = 9007199254740991, hl = /^(?:0|[1-9]\d*)$/;
function Le(t, e) {
  var n = typeof t;
  return e = e ?? cl, !!e && (n == "number" || n != "symbol" && hl.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function dl(t, e, n) {
  e == "__proto__" && Or ? Or(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Fe(t, e) {
  return t === e || t !== t && e !== e;
}
var gl = Object.prototype, pl = gl.hasOwnProperty;
function Al(t, e, n) {
  var r = t[e];
  (!(pl.call(t, e) && Fe(r, n)) || n === void 0 && !(e in t)) && dl(t, e, n);
}
var yl = 9007199254740991;
function Dn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= yl;
}
function Wt(t) {
  return t != null && Dn(t.length) && !Ni(t);
}
function vl(t, e, n) {
  if (!it(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Wt(n) && Le(e, n.length) : r == "string" && e in n) ? Fe(n[e], t) : !1;
}
var ml = Object.prototype;
function ji(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || ml;
  return t === n;
}
function bl(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var xl = "[object Arguments]";
function kr(t) {
  return bt(t) && wt(t) == xl;
}
var Si = Object.prototype, wl = Si.hasOwnProperty, Pl = Si.propertyIsEnumerable, En = kr(/* @__PURE__ */ function() {
  return arguments;
}()) ? kr : function(t) {
  return bt(t) && wl.call(t, "callee") && !Pl.call(t, "callee");
};
function Ml() {
  return !1;
}
var Xi = typeof exports == "object" && exports && !exports.nodeType && exports, Hr = Xi && typeof module == "object" && module && !module.nodeType && module, Tl = Hr && Hr.exports === Xi, Nr = Tl ? st.Buffer : void 0, zl = Nr ? Nr.isBuffer : void 0, mn = zl || Ml, Ol = "[object Arguments]", kl = "[object Array]", Hl = "[object Boolean]", Nl = "[object Date]", jl = "[object Error]", Sl = "[object Function]", Xl = "[object Map]", Il = "[object Number]", Bl = "[object Object]", Dl = "[object RegExp]", El = "[object Set]", Gl = "[object String]", Cl = "[object WeakMap]", Yl = "[object ArrayBuffer]", Ll = "[object DataView]", Fl = "[object Float32Array]", Jl = "[object Float64Array]", Zl = "[object Int8Array]", Rl = "[object Int16Array]", _l = "[object Int32Array]", Ql = "[object Uint8Array]", Kl = "[object Uint8ClampedArray]", Ul = "[object Uint16Array]", Wl = "[object Uint32Array]", z = {};
z[Fl] = z[Jl] = z[Zl] = z[Rl] = z[_l] = z[Ql] = z[Kl] = z[Ul] = z[Wl] = !0;
z[Ol] = z[kl] = z[Yl] = z[Hl] = z[Ll] = z[Nl] = z[jl] = z[Sl] = z[Xl] = z[Il] = z[Bl] = z[Dl] = z[El] = z[Gl] = z[Cl] = !1;
function ql(t) {
  return bt(t) && Dn(t.length) && !!z[wt(t)];
}
function Vl(t) {
  return function(e) {
    return t(e);
  };
}
var Ii = typeof exports == "object" && exports && !exports.nodeType && exports, Gt = Ii && typeof module == "object" && module && !module.nodeType && module, $l = Gt && Gt.exports === Ii, nn = $l && zi.process, jr = function() {
  try {
    var t = Gt && Gt.require && Gt.require("util").types;
    return t || nn && nn.binding && nn.binding("util");
  } catch {
  }
}(), Sr = jr && jr.isTypedArray, Bi = Sr ? Vl(Sr) : ql, tc = Object.prototype, ec = tc.hasOwnProperty;
function Di(t, e) {
  var n = D(t), r = !n && En(t), i = !n && !r && mn(t), s = !n && !r && !i && Bi(t), o = n || r || i || s, a = o ? bl(t.length, String) : [], u = a.length;
  for (var f in t)
    (e || ec.call(t, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Le(f, u))) && a.push(f);
  return a;
}
function Ei(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var nc = Ei(Object.keys, Object), rc = Object.prototype, ic = rc.hasOwnProperty;
function sc(t) {
  if (!ji(t))
    return nc(t);
  var e = [];
  for (var n in Object(t))
    ic.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function qt(t) {
  return Wt(t) ? Di(t) : sc(t);
}
function oc(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var ac = Object.prototype, uc = ac.hasOwnProperty;
function fc(t) {
  if (!it(t))
    return oc(t);
  var e = ji(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !uc.call(t, r)) || n.push(r);
  return n;
}
function lc(t) {
  return Wt(t) ? Di(t, !0) : fc(t);
}
var cc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hc = /^\w*$/;
function Gn(t, e) {
  if (D(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Ye(t) ? !0 : hc.test(t) || !cc.test(t) || e != null && t in Object(e);
}
var Rt = Mt(Object, "create");
function dc() {
  this.__data__ = Rt ? Rt(null) : {}, this.size = 0;
}
function gc(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var pc = "__lodash_hash_undefined__", Ac = Object.prototype, yc = Ac.hasOwnProperty;
function vc(t) {
  var e = this.__data__;
  if (Rt) {
    var n = e[t];
    return n === pc ? void 0 : n;
  }
  return yc.call(e, t) ? e[t] : void 0;
}
var mc = Object.prototype, bc = mc.hasOwnProperty;
function xc(t) {
  var e = this.__data__;
  return Rt ? e[t] !== void 0 : bc.call(e, t);
}
var wc = "__lodash_hash_undefined__";
function Pc(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Rt && e === void 0 ? wc : e, this;
}
function xt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
xt.prototype.clear = dc;
xt.prototype.delete = gc;
xt.prototype.get = vc;
xt.prototype.has = xc;
xt.prototype.set = Pc;
function Mc() {
  this.__data__ = [], this.size = 0;
}
function Je(t, e) {
  for (var n = t.length; n--; )
    if (Fe(t[n][0], e))
      return n;
  return -1;
}
var Tc = Array.prototype, zc = Tc.splice;
function Oc(t) {
  var e = this.__data__, n = Je(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : zc.call(e, n, 1), --this.size, !0;
}
function kc(t) {
  var e = this.__data__, n = Je(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Hc(t) {
  return Je(this.__data__, t) > -1;
}
function Nc(t, e) {
  var n = this.__data__, r = Je(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function ot(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = Mc;
ot.prototype.delete = Oc;
ot.prototype.get = kc;
ot.prototype.has = Hc;
ot.prototype.set = Nc;
var _t = Mt(st, "Map");
function jc() {
  this.size = 0, this.__data__ = {
    hash: new xt(),
    map: new (_t || ot)(),
    string: new xt()
  };
}
function Sc(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Ze(t, e) {
  var n = t.__data__;
  return Sc(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Xc(t) {
  var e = Ze(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Ic(t) {
  return Ze(this, t).get(t);
}
function Bc(t) {
  return Ze(this, t).has(t);
}
function Dc(t, e) {
  var n = Ze(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function at(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
at.prototype.clear = jc;
at.prototype.delete = Xc;
at.prototype.get = Ic;
at.prototype.has = Bc;
at.prototype.set = Dc;
var Ec = "Expected a function";
function Cn(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Ec);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var o = t.apply(this, r);
    return n.cache = s.set(i, o) || s, o;
  };
  return n.cache = new (Cn.Cache || at)(), n;
}
Cn.Cache = at;
var Gc = 500;
function Cc(t) {
  var e = Cn(t, function(r) {
    return n.size === Gc && n.clear(), r;
  }), n = e.cache;
  return e;
}
var Yc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lc = /\\(\\)?/g, Fc = Cc(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Yc, function(n, r, i, s) {
    e.push(i ? s.replace(Lc, "$1") : r || n);
  }), e;
});
function Re(t) {
  return t == null ? "" : ki(t);
}
function _e(t, e) {
  return D(t) ? t : Gn(t, e) ? [t] : Fc(Re(t));
}
function Vt(t) {
  if (typeof t == "string" || Ye(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Yn(t, e) {
  e = _e(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Vt(e[n++])];
  return n && n == r ? t : void 0;
}
function Jc(t, e, n) {
  var r = t == null ? void 0 : Yn(t, e);
  return r === void 0 ? n : r;
}
function Ln(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Xr = W ? W.isConcatSpreadable : void 0;
function Zc(t) {
  return D(t) || En(t) || !!(Xr && t && t[Xr]);
}
function Rc(t, e, n, r, i) {
  var s = -1, o = t.length;
  for (n || (n = Zc), i || (i = []); ++s < o; ) {
    var a = t[s];
    n(a) ? Ln(i, a) : i[i.length] = a;
  }
  return i;
}
function _c(t) {
  var e = t == null ? 0 : t.length;
  return e ? Rc(t) : [];
}
var Qc = Ei(Object.getPrototypeOf, Object);
function Kc(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = t[r + e];
  return s;
}
function Uc(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, Kc(t, e, n);
}
var Wc = "\\ud800-\\udfff", qc = "\\u0300-\\u036f", Vc = "\\ufe20-\\ufe2f", $c = "\\u20d0-\\u20ff", th = qc + Vc + $c, eh = "\\ufe0e\\ufe0f", nh = "\\u200d", rh = RegExp("[" + nh + Wc + th + eh + "]");
function Gi(t) {
  return rh.test(t);
}
function ih(t) {
  return t.split("");
}
var Ci = "\\ud800-\\udfff", sh = "\\u0300-\\u036f", oh = "\\ufe20-\\ufe2f", ah = "\\u20d0-\\u20ff", uh = sh + oh + ah, fh = "\\ufe0e\\ufe0f", lh = "[" + Ci + "]", bn = "[" + uh + "]", xn = "\\ud83c[\\udffb-\\udfff]", ch = "(?:" + bn + "|" + xn + ")", Yi = "[^" + Ci + "]", Li = "(?:\\ud83c[\\udde6-\\uddff]){2}", Fi = "[\\ud800-\\udbff][\\udc00-\\udfff]", hh = "\\u200d", Ji = ch + "?", Zi = "[" + fh + "]?", dh = "(?:" + hh + "(?:" + [Yi, Li, Fi].join("|") + ")" + Zi + Ji + ")*", gh = Zi + Ji + dh, ph = "(?:" + [Yi + bn + "?", bn, Li, Fi, lh].join("|") + ")", Ah = RegExp(xn + "(?=" + xn + ")|" + ph + gh, "g");
function yh(t) {
  return t.match(Ah) || [];
}
function vh(t) {
  return Gi(t) ? yh(t) : ih(t);
}
function mh(t) {
  return function(e) {
    e = Re(e);
    var n = Gi(e) ? vh(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? Uc(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var bh = mh("toUpperCase");
function xh(t) {
  return bh(Re(t).toLowerCase());
}
function wh() {
  this.__data__ = new ot(), this.size = 0;
}
function Ph(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Mh(t) {
  return this.__data__.get(t);
}
function Th(t) {
  return this.__data__.has(t);
}
var zh = 200;
function Oh(t, e) {
  var n = this.__data__;
  if (n instanceof ot) {
    var r = n.__data__;
    if (!_t || r.length < zh - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new at(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function nt(t) {
  var e = this.__data__ = new ot(t);
  this.size = e.size;
}
nt.prototype.clear = wh;
nt.prototype.delete = Ph;
nt.prototype.get = Mh;
nt.prototype.has = Th;
nt.prototype.set = Oh;
function Ri(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, s = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (s[i++] = o);
  }
  return s;
}
function _i() {
  return [];
}
var kh = Object.prototype, Hh = kh.propertyIsEnumerable, Ir = Object.getOwnPropertySymbols, Qi = Ir ? function(t) {
  return t == null ? [] : (t = Object(t), Ri(Ir(t), function(e) {
    return Hh.call(t, e);
  }));
} : _i, Nh = Object.getOwnPropertySymbols, jh = Nh ? function(t) {
  for (var e = []; t; )
    Ln(e, Qi(t)), t = Qc(t);
  return e;
} : _i;
function Ki(t, e, n) {
  var r = e(t);
  return D(t) ? r : Ln(r, n(t));
}
function Br(t) {
  return Ki(t, qt, Qi);
}
function Sh(t) {
  return Ki(t, lc, jh);
}
var wn = Mt(st, "DataView"), Pn = Mt(st, "Promise"), Mn = Mt(st, "Set"), Dr = "[object Map]", Xh = "[object Object]", Er = "[object Promise]", Gr = "[object Set]", Cr = "[object WeakMap]", Yr = "[object DataView]", Ih = Pt(wn), Bh = Pt(_t), Dh = Pt(Pn), Eh = Pt(Mn), Gh = Pt(vn), et = wt;
(wn && et(new wn(new ArrayBuffer(1))) != Yr || _t && et(new _t()) != Dr || Pn && et(Pn.resolve()) != Er || Mn && et(new Mn()) != Gr || vn && et(new vn()) != Cr) && (et = function(t) {
  var e = wt(t), n = e == Xh ? t.constructor : void 0, r = n ? Pt(n) : "";
  if (r)
    switch (r) {
      case Ih:
        return Yr;
      case Bh:
        return Dr;
      case Dh:
        return Er;
      case Eh:
        return Gr;
      case Gh:
        return Cr;
    }
  return e;
});
var Lr = st.Uint8Array, Ch = "__lodash_hash_undefined__";
function Yh(t) {
  return this.__data__.set(t, Ch), this;
}
function Lh(t) {
  return this.__data__.has(t);
}
function je(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new at(); ++e < n; )
    this.add(t[e]);
}
je.prototype.add = je.prototype.push = Yh;
je.prototype.has = Lh;
function Fh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Jh(t, e) {
  return t.has(e);
}
var Zh = 1, Rh = 2;
function Ui(t, e, n, r, i, s) {
  var o = n & Zh, a = t.length, u = e.length;
  if (a != u && !(o && u > a))
    return !1;
  var f = s.get(t), c = s.get(e);
  if (f && c)
    return f == e && c == t;
  var l = -1, h = !0, p = n & Rh ? new je() : void 0;
  for (s.set(t, e), s.set(e, t); ++l < a; ) {
    var d = t[l], g = e[l];
    if (r)
      var w = o ? r(g, d, l, e, t, s) : r(d, g, l, t, e, s);
    if (w !== void 0) {
      if (w)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!Fh(e, function(y, T) {
        if (!Jh(p, T) && (d === y || i(d, y, n, r, s)))
          return p.push(T);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === g || i(d, g, n, r, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(t), s.delete(e), h;
}
function Wi(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function _h(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Qh = 1, Kh = 2, Uh = "[object Boolean]", Wh = "[object Date]", qh = "[object Error]", Vh = "[object Map]", $h = "[object Number]", td = "[object RegExp]", ed = "[object Set]", nd = "[object String]", rd = "[object Symbol]", id = "[object ArrayBuffer]", sd = "[object DataView]", Fr = W ? W.prototype : void 0, rn = Fr ? Fr.valueOf : void 0;
function od(t, e, n, r, i, s, o) {
  switch (n) {
    case sd:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case id:
      return !(t.byteLength != e.byteLength || !s(new Lr(t), new Lr(e)));
    case Uh:
    case Wh:
    case $h:
      return Fe(+t, +e);
    case qh:
      return t.name == e.name && t.message == e.message;
    case td:
    case nd:
      return t == e + "";
    case Vh:
      var a = Wi;
    case ed:
      var u = r & Qh;
      if (a || (a = _h), t.size != e.size && !u)
        return !1;
      var f = o.get(t);
      if (f)
        return f == e;
      r |= Kh, o.set(t, e);
      var c = Ui(a(t), a(e), r, i, s, o);
      return o.delete(t), c;
    case rd:
      if (rn)
        return rn.call(t) == rn.call(e);
  }
  return !1;
}
var ad = 1, ud = Object.prototype, fd = ud.hasOwnProperty;
function ld(t, e, n, r, i, s) {
  var o = n & ad, a = Br(t), u = a.length, f = Br(e), c = f.length;
  if (u != c && !o)
    return !1;
  for (var l = u; l--; ) {
    var h = a[l];
    if (!(o ? h in e : fd.call(e, h)))
      return !1;
  }
  var p = s.get(t), d = s.get(e);
  if (p && d)
    return p == e && d == t;
  var g = !0;
  s.set(t, e), s.set(e, t);
  for (var w = o; ++l < u; ) {
    h = a[l];
    var y = t[h], T = e[h];
    if (r)
      var O = o ? r(T, y, h, e, t, s) : r(y, T, h, t, e, s);
    if (!(O === void 0 ? y === T || i(y, T, n, r, s) : O)) {
      g = !1;
      break;
    }
    w || (w = h == "constructor");
  }
  if (g && !w) {
    var A = t.constructor, b = e.constructor;
    A != b && "constructor" in t && "constructor" in e && !(typeof A == "function" && A instanceof A && typeof b == "function" && b instanceof b) && (g = !1);
  }
  return s.delete(t), s.delete(e), g;
}
var cd = 1, Jr = "[object Arguments]", Zr = "[object Array]", oe = "[object Object]", hd = Object.prototype, Rr = hd.hasOwnProperty;
function dd(t, e, n, r, i, s) {
  var o = D(t), a = D(e), u = o ? Zr : et(t), f = a ? Zr : et(e);
  u = u == Jr ? oe : u, f = f == Jr ? oe : f;
  var c = u == oe, l = f == oe, h = u == f;
  if (h && mn(t)) {
    if (!mn(e))
      return !1;
    o = !0, c = !1;
  }
  if (h && !c)
    return s || (s = new nt()), o || Bi(t) ? Ui(t, e, n, r, i, s) : od(t, e, u, n, r, i, s);
  if (!(n & cd)) {
    var p = c && Rr.call(t, "__wrapped__"), d = l && Rr.call(e, "__wrapped__");
    if (p || d) {
      var g = p ? t.value() : t, w = d ? e.value() : e;
      return s || (s = new nt()), i(g, w, n, r, s);
    }
  }
  return h ? (s || (s = new nt()), ld(t, e, n, r, i, s)) : !1;
}
function Fn(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !bt(t) && !bt(e) ? t !== t && e !== e : dd(t, e, n, r, Fn, i);
}
var gd = 1, pd = 2;
function Ad(t, e, n, r) {
  var i = n.length, s = i;
  if (t == null)
    return !s;
  for (t = Object(t); i--; ) {
    var o = n[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < s; ) {
    o = n[i];
    var a = o[0], u = t[a], f = o[1];
    if (o[2]) {
      if (u === void 0 && !(a in t))
        return !1;
    } else {
      var c = new nt(), l;
      if (!(l === void 0 ? Fn(f, u, gd | pd, r, c) : l))
        return !1;
    }
  }
  return !0;
}
function qi(t) {
  return t === t && !it(t);
}
function yd(t) {
  for (var e = qt(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, qi(i)];
  }
  return e;
}
function Vi(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function vd(t) {
  var e = yd(t);
  return e.length == 1 && e[0][2] ? Vi(e[0][0], e[0][1]) : function(n) {
    return n === t || Ad(n, t, e);
  };
}
function md(t, e) {
  return t != null && e in Object(t);
}
function $i(t, e, n) {
  e = _e(e, t);
  for (var r = -1, i = e.length, s = !1; ++r < i; ) {
    var o = Vt(e[r]);
    if (!(s = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return s || ++r != i ? s : (i = t == null ? 0 : t.length, !!i && Dn(i) && Le(o, i) && (D(t) || En(t)));
}
function bd(t, e) {
  return t != null && $i(t, e, md);
}
var xd = 1, wd = 2;
function Pd(t, e) {
  return Gn(t) && qi(e) ? Vi(Vt(t), e) : function(n) {
    var r = Jc(n, t);
    return r === void 0 && r === e ? bd(n, t) : Fn(e, r, xd | wd);
  };
}
function Md(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Td(t) {
  return function(e) {
    return Yn(e, t);
  };
}
function zd(t) {
  return Gn(t) ? Md(Vt(t)) : Td(t);
}
function Jn(t) {
  return typeof t == "function" ? t : t == null ? Hi : typeof t == "object" ? D(t) ? Pd(t[0], t[1]) : vd(t) : zd(t);
}
function Od(t) {
  return function(e, n, r) {
    for (var i = -1, s = Object(e), o = r(e), a = o.length; a--; ) {
      var u = o[++i];
      if (n(s[u], u, s) === !1)
        break;
    }
    return e;
  };
}
var kd = Od();
function Hd(t, e) {
  return t && kd(t, e, qt);
}
function Nd(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Wt(n))
      return t(n, r);
    for (var i = n.length, s = -1, o = Object(n); ++s < i && r(o[s], s, o) !== !1; )
      ;
    return n;
  };
}
var Zn = Nd(Hd);
function jd(t) {
  return typeof t == "function" ? t : Hi;
}
function I(t, e) {
  var n = D(t) ? ll : Zn;
  return n(t, jd(e));
}
function Sd(t, e) {
  return Ut(e, function(n) {
    return [n, t[n]];
  });
}
function Xd(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var Id = "[object Map]", Bd = "[object Set]";
function Dd(t) {
  return function(e) {
    var n = et(e);
    return n == Id ? Wi(e) : n == Bd ? Xd(e) : Sd(e, t(e));
  };
}
var ts = Dd(qt);
function Ed(t, e) {
  var n = [];
  return Zn(t, function(r, i, s) {
    e(r, i, s) && n.push(r);
  }), n;
}
function Tn(t, e) {
  var n = D(t) ? Ri : Ed;
  return n(t, Jn(e));
}
function Gd(t, e) {
  var n = -1, r = Wt(t) ? Array(t.length) : [];
  return Zn(t, function(i, s, o) {
    r[++n] = e(i, s, o);
  }), r;
}
function ht(t, e) {
  var n = D(t) ? Ut : Gd;
  return n(t, Jn(e));
}
var Cd = Object.prototype, Yd = Cd.hasOwnProperty;
function Ld(t, e) {
  return t != null && Yd.call(t, e);
}
function Rn(t, e) {
  return t != null && $i(t, e, Ld);
}
function Fd(t, e) {
  return Ut(e, function(n) {
    return t[n];
  });
}
function Jd(t) {
  return t == null ? [] : Fd(t, qt(t));
}
var Zd = "[object Boolean]";
function Rd(t) {
  return t === !0 || t === !1 || bt(t) && wt(t) == Zd;
}
function _d(t, e, n, r) {
  if (!it(t))
    return t;
  e = _e(e, t);
  for (var i = -1, s = e.length, o = s - 1, a = t; a != null && ++i < s; ) {
    var u = Vt(e[i]), f = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != o) {
      var c = a[u];
      f = void 0, f === void 0 && (f = it(c) ? c : Le(e[i + 1]) ? [] : {});
    }
    Al(a, u, f), a = a[u];
  }
  return t;
}
function Qd(t, e, n) {
  for (var r = -1, i = e.length, s = {}; ++r < i; ) {
    var o = e[r], a = Yn(t, o);
    n(a, o) && _d(s, _e(o, t), a);
  }
  return s;
}
function _n(t, e) {
  if (t == null)
    return {};
  var n = Ut(Sh(t), function(r) {
    return [r];
  });
  return e = Jn(e), Qd(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var Kd = Math.floor, Ud = Math.random;
function Wd(t, e) {
  return t + Kd(Ud() * (e - t + 1));
}
var qd = Math.ceil, Vd = Math.max;
function $d(t, e, n, r) {
  for (var i = -1, s = Vd(qd((e - t) / (n || 1)), 0), o = Array(s); s--; )
    o[++i] = t, t += n;
  return o;
}
function t0(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && vl(e, n, r) && (n = r = void 0), e = tn(e), n === void 0 ? (n = e, e = 0) : n = tn(n), r = r === void 0 ? e < n ? 1 : -1 : tn(r), $d(e, n, r);
  };
}
var Se = t0();
function e0() {
  var t = arguments, e = Re(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
function es(t, e) {
  var n = -1, r = t.length, i = r - 1;
  for (e = e === void 0 ? r : e; ++n < e; ) {
    var s = Wd(n, i), o = t[s];
    t[s] = t[n], t[n] = o;
  }
  return t.length = e, t;
}
function n0(t) {
  return es(fl(t));
}
function r0(t) {
  return es(Jd(t));
}
function i0(t) {
  var e = D(t) ? n0 : r0;
  return e(t);
}
const s0 = (t, e, n = 12, r = 12) => {
  const i = U().domain([0, n]).range([0, t]), s = U().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return Se((n + 1) * (r + 1)).map(function(u) {
        return { m: u % (n + 1), n: Math.floor(u / (n + 1)), x: i(u % (n + 1)), y: s(Math.floor(u / (n + 1))) };
      });
    },
    position: function(u, f) {
      typeof u == "number" && (u = [u]), typeof f == "number" && (f = [f]);
      const c = _c(ht(f, function(l) {
        return ht(
          u,
          function(h) {
            return { x: i(h), y: s(l) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, o0 = "_widget_18g36_1", a0 = "_label_18g36_19", u0 = "_lit_18g36_24", f0 = "_button_18g36_29", l0 = "_symbol_18g36_29", c0 = "_radio_18g36_29", h0 = "_radiobutton_18g36_29", d0 = "_selected_18g36_35", g0 = "_toggle_18g36_35", p0 = "_slider_18g36_44", A0 = "_track_18g36_44", y0 = "_track_overlay_18g36_48", v0 = "_handle_18g36_55", m = {
  widget: o0,
  label: a0,
  lit: u0,
  button: f0,
  symbol: l0,
  radio: c0,
  radiobutton: h0,
  selected: d0,
  toggle: g0,
  slider: p0,
  track: A0,
  track_overlay: y0,
  handle: v0
}, Qe = () => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = e.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += e[Math.floor(Math.random() * n)];
  return r;
}, Qn = (t, e, n) => {
  var r, i, s, o;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, s = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, s = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, s = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, s = "start", o = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, s = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: s, valign: o };
}, m0 = (t = 1) => {
  const e = R();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, b0 = (t = 1) => {
  const e = R(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, x0 = (t = 1) => {
  const e = R();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, w0 = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = R();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, P0 = (t = 1) => {
  const e = R(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, s = 0.5, o = 0.6, a = 0.6, u = [t * (1 - s / 2) * Math.cos(i), t * (1 - s / 2) * Math.sin(i)], f = [t * a * Math.cos(i + Math.PI / 2), t * a * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - s) * Math.cos(r), t * (1 - s) * Math.sin(r)), e.arc(0, 0, t * (1 - s), r, i, !1), e.lineTo(t * (1 - o - s / 2) * Math.cos(i), t * (1 - o - s / 2) * Math.sin(i)), e.lineTo(u[0] + f[0], u[1] + f[1]), e.lineTo(t * (1 + o - s / 2) * Math.cos(i), t * (1 + o - s / 2) * Math.sin(i)), e.closePath(), e.toString();
}, M0 = (t = 1) => {
  const e = R(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, s = n, o = -n, a = Math.PI + n;
  return e.arc(0, 0, r, a, o), e.lineTo(t, r * Math.sin(a)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(a)), e.closePath(), e.arc(0, 0, r, s, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, T0 = (t = 1) => {
  const e = R(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, s = 0.5, o = 0.6, a = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - s) * Math.cos(i), t * (1 - s) * Math.sin(i)), e.arc(0, 0, t * (1 - s), i, r, !0), e.lineTo(t * (1 - o - s / 2) * Math.cos(r), t * (1 - o - s / 2) * Math.sin(r));
  var u = [t * (1 - s / 2) * Math.cos(r), t * (1 - s / 2) * Math.sin(r)], f = [t * a * Math.cos(r + Math.PI / 2), t * a * Math.sin(r + Math.PI / 2)];
  return e.lineTo(u[0] + f[0], u[1] + f[1]), e.lineTo(t * (1 + o - s / 2) * Math.cos(r), t * (1 + o - s / 2) * Math.sin(r)), e.closePath(), e.toString();
}, z0 = (t = 1) => {
  var e = R(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, O0 = (t = 1) => {
  const e = R(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, zn = (t) => {
  switch (t) {
    case "play":
      return m0;
    case "forward":
      return b0;
    case "back":
      return x0;
    case "pause":
      return w0;
    case "reload":
      return P0;
    case "capture":
      return M0;
    case "rewind":
      return T0;
    case "stop":
      return z0;
    case "push":
      return O0;
  }
}, Kn = () => {
  const t = "button";
  var e = Qe(), n = 50, r = 0.3, i = "round", s = { x: 0, y: 0 }, o = null, a = "bottom", u = null, f = function(d) {
  }, c = ["play"], l = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? s.x : (s.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? s.y : (s.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return f = d, this;
      f(d);
    },
    actions: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    click: function() {
      l = (l + 1) % c.length, f(), k(this.parentNode).select("." + m.symbol).attr("d", zn(c[l])(r * n));
    },
    press: function(d) {
      l = (l + 1) % c.length, f(), d.select("#button_" + e).select("." + m.symbol).attr("d", zn(c[l])(r * n));
    }
  };
}, k0 = () => {
  const t = "slider", e = Ce(".3f");
  var n = Qe(), r = 100, i = 8, s = 10, o = !1, a = { x: 0, y: 0 }, u = "top-left", f = null, c = function(y) {
  }, l = function(y) {
  }, h = [0, 1], p = 0, d = null, g = U().domain(h).range([0, r]).clamp(!0);
  const w = function(y, T, O = h) {
    const A = y.select("#slider_" + n);
    g.domain(O), p = T, A.selectAll("." + m.handle).transition().attr("cx", g(T)), o && A.select("." + m.label).text(d + " = " + e(p)), c(), l();
  };
  return {
    type: t,
    scale: g,
    id: function(y) {
      return typeof y > "u" ? n : (n = y, this);
    },
    label: function(y) {
      return typeof y > "u" ? d : (d = y, this);
    },
    size: function(y) {
      return typeof y > "u" ? r : (r = y, this);
    },
    girth: function(y) {
      return typeof y > "u" ? i : (i = y, this);
    },
    knob: function(y) {
      return typeof y > "u" ? s : (s = y, this);
    },
    show: function(y) {
      return typeof y > "u" ? o : (o = y, this);
    },
    position: function(y) {
      return typeof y > "u" ? a : (a = y, this);
    },
    x: function(y) {
      return typeof y > "u" ? a.x : (a.x = y, this);
    },
    y: function(y) {
      return typeof y > "u" ? a.y : (a.y = y, this);
    },
    labelposition: function(y) {
      return typeof y > "u" ? u : (u = y, this);
    },
    fontsize: function(y) {
      return typeof y > "u" ? f : (f = y, this);
    },
    update: function(y) {
      if (typeof y == "function")
        return c = y, this;
      c(y);
    },
    update_end: function(y) {
      if (typeof y == "function")
        return l = y, this;
      l(y);
    },
    range: function(y) {
      return typeof y > "u" ? h : (h = y, this);
    },
    value: function(y) {
      return typeof y > "u" ? p : (p = y, this);
    },
    reset: w,
    click: w
  };
}, H0 = () => {
  const t = "toggle";
  var e = Qe(), n = 10, r = { x: 0, y: 0 }, i = null, s = "top", o = null, a = function(l) {
  }, u = 0;
  return {
    type: t,
    id: function(l) {
      return typeof l > "u" ? e : (e = l, this);
    },
    size: function(l) {
      return typeof l > "u" ? n : (n = l, this);
    },
    position: function(l) {
      return typeof l > "u" ? r : (r = l, this);
    },
    x: function(l) {
      return typeof l > "u" ? r.x : (r.x = l, this);
    },
    y: function(l) {
      return typeof l > "u" ? r.y : (r.y = l, this);
    },
    label: function(l) {
      return typeof l > "u" ? i : (i = l, this);
    },
    labelposition: function(l) {
      return typeof l > "u" ? s : (s = l, this);
    },
    fontsize: function(l) {
      return typeof l > "u" ? o : (o = l, this);
    },
    update: function(l) {
      if (typeof l == "function")
        return a = l, this;
      a(l);
    },
    value: function(l) {
      return typeof l > "u" ? u : (u = l, this);
    },
    click: function() {
      u = !u;
      const l = k(this.parentNode);
      l.select("." + m.handle).transition().attr("cx", u ? 2 * n : 0), l.classed(m.selected, u), a();
    },
    reset: function(l, h) {
      u = h;
      const p = l.select("#toggle_" + e);
      p.selectAll("." + m.handle).transition().attr("cx", u ? 2 * n : 0), p.classed(m.selected, u), a();
    }
  };
}, N0 = () => {
  const t = "radio";
  var e = Qe(), n = 100, r = 20, i = 0.3, s = "round", o = "vertical", a = { x: 0, y: 0 }, u = "right", f = null, c = function(g) {
  }, l = [], h = 0;
  return {
    type: t,
    id: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? n : (n = g, this);
    },
    buttonsize: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    buttonpadding: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    orientation: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    shape: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? a.x : (a.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? a.y : (a.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? f : (f = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return c = g, this;
      c(g);
    },
    choices: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? h : (h = g, this);
    },
    click: function(g, w) {
      h = w, k(this.parentNode).selectAll("." + m.symbol).classed(m.selected, (y) => y == h), c();
    },
    reset: function(g, w) {
      h = w, g.select("#radio_" + e).selectAll("." + m.symbol).classed(m.selected, (y) => y == h), c();
    }
  };
}, j0 = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), s = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = k(s).attr("class", m.widget + " " + m.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var a;
  if (t.shape() == "rect" ? a = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : a = o.append("circle").attr("r", t.size() / 2), a.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    k(this).classed(m.lit, !0), k(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    k(this).classed(m.lit, !1), k(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), o.append("path").attr("d", zn(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = Qn(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return s;
}, ns = (t, e) => {
  const n = R();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, S0 = (t, e) => {
  const n = Ce(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, s = t.size();
  t.label();
  const o = t.scale;
  var a;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  a = k(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, s]).clamp(!0);
  const f = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  a.append("path").attr("d", ns(t.size(), t.girth())).attr("class", m.track), a.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", o(t.value())), a.append("rect").attr("width", t.size() + 2 * f).attr("height", 2 * f).attr("transform", "translate(" + -f + "," + -f + ")").attr("class", m.track_overlay).on("click", function(d) {
    const g = an(d, this)[0];
    t.value(o.invert(g)), t.update(), t.update_end(), a.selectAll("." + m.handle).attr("cx", o(t.value())), t.show() && a.select("." + m.label).text(t.label() + " = " + n(t.value()));
  }).call(
    ha().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), a.selectAll("." + m.handle).attr("cx", o(t.value())), t.show() && a.select("." + m.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, l, h, p = "bottom";
  return t.fontsize && (l = t.labelposition().match(/bottom/i) != null ? te([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -te([t.girth() / 2, t.knob()]) - t.fontsize() / 2), l = t.labelposition().match(/bottom/i) != null ? te([t.girth() / 2, t.knob()]) + 7 : -te([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", a.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + l + ")"), u;
}, X0 = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), s = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = k(o).attr("class", m.widget + " " + m.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (a.append("path").attr("d", ns(2 * t.size(), 2 * t.size())).attr("class", m.track), a.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), a.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Qn(4 * t.size(), 2 * t.size(), s);
    a.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return o;
}, I0 = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), s = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, a = xs(o), u = U().domain([0, o - 1]).range([0, t.size()]), f = U().domain([0, o - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = k(c).attr("class", m.widget + " " + m.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(a).enter().append("g").attr("class", m.radiobutton).attr("id", (w) => "b" + w).attr("transform", (w) => t.orientation() == "vertical" ? "translate(0," + f(w) + ")" : "translate(" + u(w) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", s).attr("height", s).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -s / 2 + "," + -s / 2 + ")")) : (p = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", s / 2)), p.attr("class", m.background).on("mouseover", function() {
    k(this).classed(m.lit, !0), k(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    k(this).classed(m.lit, !1), k(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((w) => w == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const g = Qn(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(w, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), c;
}, ae = (t, e) => {
  switch (t.type) {
    case "button":
      return j0(t);
    case "slider":
      return S0(t);
    case "radio":
      return I0(t);
    case "toggle":
      return X0(t);
  }
}, B0 = (t, e) => {
  const n = s0(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = k("#" + t).classed("explorable " + e.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), s = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && s.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && i.style("border", e.display_border), e.debug && s.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: s, grid: n };
}, P = {
  widgets: {
    slider_size: 300,
    slider_gap: 1.5,
    slider_anchor: { x: 1, y: 8.5 },
    slider_girth: 10,
    slider_knob: 14,
    toggle_anchor: { x: 6, y: 1.5 },
    toggle_label_pos: "right",
    toggle_gap: 1.5,
    toggle_size: 12,
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 4.5 },
    resetbutton_anchor: { x: 2, y: 4.5 },
    radio_anchor: { x: 2, y: 6.5 },
    radio_size: 300,
    radio_orientation: "horizontal",
    radio_label_position: "top",
    radio_shape: "circ",
    radio_buttonsize: 36,
    sym_radio_anchor: { x: 9.5, y: 8.5 },
    sym_radio_size: 72,
    sym_radio_shape: "rect",
    sym_radio_buttonsize: 24
  },
  simulation: {
    delay: 10
  }
}, v = {
  dt: 0.03,
  tau: 0.05,
  M: 1,
  B: 2,
  A: 300,
  radius: 0.5,
  R1: 20,
  R2: 48,
  twist: 0,
  person_scale: 0.16,
  k: 0,
  kappa: 0,
  L: 50,
  agentsize: 1,
  mean_speed: {
    range: [3, 10],
    default: 6
  },
  speed_variability: {
    range: [0, 0.3],
    default: 0.1
  },
  directional_bias: {
    range: [-200, 200],
    default: 0
  },
  number_of_walkers: {
    choices: [25, 50, 100, 200],
    default: 1
  },
  symbols: {
    choices: ["heads", "circles", "manlios"],
    default: 0
  },
  three_diagonal_obstacles: {
    default: !1,
    label: "Three small osbstacles"
  },
  two_smaller_obstacles: {
    default: !1,
    label: "Two osbstacles"
  },
  single_large_obstacle: {
    default: !1,
    label: "One large obstacle"
  }
}, Un = (t) => ht(
  ts(t),
  (e) => {
    e[1].id = e[0], Rn(e[1], "label") || (e[1].label = e0(xh(e[0]), /_/g, " "));
  }
), Wn = (t) => ht(ts(t), (e) => e[1]), qn = (t, e) => I(t, (n, r) => n.widget = e[r]), D0 = (t) => _n(t, (e) => Rn(e, "range")), E0 = (t) => _n(t, (e) => Rd(e.default)), G0 = (t) => _n(t, (e) => Rn(e, "choices"));
U().domain([0, 360]).range([0, 2 * Math.PI]);
U().range([0, 360]).domain([0, 2 * Math.PI]);
const _r = (t, e) => {
  const n = t.x - e.x, r = t.y - e.y;
  return Math.sqrt(n * n + r * r);
}, At = (t, e) => Math.sqrt(t * t + e * e), Qr = (t) => t < 0 ? 0 : t, Vn = D0(v), $n = E0(v), tr = G0(v);
Un(Vn);
Un($n);
Un(tr);
const rs = Wn(Vn), is = Wn($n), ss = Wn(tr), Ae = ht(
  rs,
  (t) => k0().id(t.id).label(t.label).range(t.range).value(t.default).size(P.widgets.slider_size).girth(P.widgets.slider_girth).knob(P.widgets.slider_knob)
), ye = ht(
  is,
  (t) => H0().id(t.id).label(t.label).value(t.default).labelposition(P.widgets.toggle_label_pos).size(P.widgets.toggle_size)
), ve = ht(
  ss,
  (t) => N0().choices(t.choices).id(t.id).value(t.default)
  //.orientation(cfg.widgets.radio_orientation)
  //.labelposition(cfg.widgets.radio_label_position)
);
qn(is, ye);
qn(rs, Ae);
qn(ss, ve);
const ct = Kn().actions(["play", "pause"]), Ke = Kn().actions(["back"]), Ue = Kn().actions(["rewind"]), C0 = [ct, Ke, Ue], Y0 = (t, e) => {
  const n = e.position(P.widgets.slider_anchor.x, Se(Ae.length).map((o) => P.widgets.slider_anchor.y + P.widgets.slider_gap * o)), r = e.position(P.widgets.toggle_anchor.x, Se(ye.length).map((o) => P.widgets.toggle_anchor.y + P.widgets.toggle_gap * o)), i = e.position(P.widgets.radio_anchor.x, P.widgets.radio_anchor.y), s = e.position(P.widgets.sym_radio_anchor.x, P.widgets.sym_radio_anchor.y);
  Ae.forEach((o, a) => o.position(n[a])), ye.forEach((o, a) => o.position(r[a])), ve[0].position(i).size(P.widgets.radio_size).shape(P.widgets.radio_shape).buttonsize(P.widgets.radio_buttonsize).orientation(P.widgets.radio_orientation).labelposition(P.widgets.radio_label_position), ve[1].position(s).size(P.widgets.sym_radio_size).shape(P.widgets.sym_radio_shape).buttonsize(P.widgets.sym_radio_buttonsize), ct.position(e.position(P.widgets.playbutton_anchor.x, P.widgets.playbutton_anchor.y)).size(P.widgets.playbutton_size), Ue.position(e.position(P.widgets.backbutton_anchor.x, P.widgets.backbutton_anchor.y)), Ke.position(e.position(P.widgets.resetbutton_anchor.x, P.widgets.resetbutton_anchor.y)), t.selectAll(null).data(Ae).enter().append(ae), t.selectAll(null).data(ye).enter().append(ae), t.selectAll(null).data(C0).enter().append(ae), t.selectAll(null).data(ve).enter().append(ae);
}, L0 = (t) => {
  I(Vn, (e) => e.widget.reset(t, e.default)), I($n, (e) => e.widget.reset(t, e.default)), I(tr, (e) => e.widget.reset(t, e.default));
}, j = v.R1, Y = v.R2, F0 = {
  // single large obstacle
  R: 8,
  r: (j + Y) / 2,
  x: (j + Y) / 2 * Math.cos(0),
  y: (j + Y) / 2 * Math.sin(0),
  sign: 1,
  name: "obs1",
  active: v.single_large_obstacle.widget.value()
};
var J0 = {
  // central obstacle
  R: 20,
  r: 0,
  x: 0,
  y: 0,
  sign: 1,
  name: "obs0",
  active: !0
}, Z0 = {
  // one of two smaller obstacles
  R: 4,
  r: j + (28 - 4 * 4) / 3 + 4,
  x: (j + (28 - 4 * 4) / 3 + 4) * Math.cos(Math.PI),
  y: (j + (28 - 4 * 4) / 3 + 4) * Math.sin(Math.PI),
  sign: 1,
  name: "obs2",
  active: v.two_smaller_obstacles.widget.value()
}, R0 = {
  // one of two smaller obstacles
  R: 4,
  r: j + 2 * (28 - 4 * 4) / 3 + 3 * 4,
  x: (j + 2 * (28 - 4 * 4) / 3 + 3 * 4) * Math.cos(Math.PI),
  y: (j + 2 * (28 - 4 * 4) / 3 + 3 * 4) * Math.sin(Math.PI),
  sign: 1,
  name: "obs2",
  active: v.two_smaller_obstacles.widget.value()
}, _0 = {
  R: 3,
  r: (j + Y) / 2,
  x: (j + Y) / 2 * Math.cos(-Math.PI / 2),
  y: (j + Y) / 2 * Math.sin(-Math.PI / 2),
  sign: 1,
  name: "obs3",
  active: v.three_diagonal_obstacles.widget.value()
}, me = {
  R: 3,
  r: (j + Y) / 2,
  x: (j + Y) / 2 * Math.cos(-Math.PI / 2) - 2 * 3,
  y: (j + Y) / 2 * Math.sin(-Math.PI / 2) - 2 * 3,
  sign: 1,
  name: "obs3",
  active: v.three_diagonal_obstacles.widget.value()
}, be = {
  R: 3,
  r: (j + Y) / 2,
  x: (j + Y) / 2 * Math.cos(-Math.PI / 2) + 2 * 3,
  y: (j + Y) / 2 * Math.sin(-Math.PI / 2) + 2 * 3,
  sign: 1,
  name: "obs3",
  active: v.three_diagonal_obstacles.widget.value()
};
me.r = At(me.x, me.y);
be.r = At(be.x, be.y);
var V = [];
V.push(F0);
V.push(J0);
V.push(Z0);
V.push(R0);
V.push(_0);
V.push(me);
V.push(be);
v.L;
const ue = v.dt, Kr = v.R1, Q0 = v.R2, ft = v.twist, xe = v.number_of_walkers.choices[3], K0 = gf(0, 1);
var C = [];
function Xe(t) {
  let e = At(t.x, t.y), n = t.x / e, r = t.y / e;
  t.direction == 0 ? (t.v0x = t.v0 * (Math.cos(Math.PI / 2 + ft) * n - Math.sin(Math.PI / 2 + ft) * r), t.v0y = t.v0 * (Math.sin(Math.PI / 2 + ft) * n + Math.cos(Math.PI / 2 + ft) * r)) : (t.v0x = t.v0 * (Math.cos(-Math.PI / 2 - ft) * n - Math.sin(-Math.PI / 2 - ft) * r), t.v0y = t.v0 * (Math.sin(-Math.PI / 2 - ft) * n + Math.cos(-Math.PI / 2 - ft) * r));
}
const U0 = () => {
  v.timer = {}, v.tick = 0, C = ht(Se(xe), (t) => {
    let e = Kr + 2 + (Q0 - Kr - 4) * Math.random(), n = 2 * Math.PI * Math.random(), r = K0();
    return {
      index: t,
      direction: t < xe / 2 ? 1 : 0,
      theta: n,
      r: e,
      x: e * Math.cos(n),
      y: e * Math.sin(n),
      dx: 0,
      dy: 0,
      dvx: 0,
      dvy: 0,
      vx: 0,
      vy: 0,
      M: v.M,
      tau: v.tau,
      A: v.A,
      B: v.B,
      R: v.radius,
      dv0: r,
      v0: v.mean_speed.widget.value() * (1 + v.speed_variability.widget.value() * r)
    };
  }), C = i0(C), I(C, (t) => {
    t.direction = t.index < xe / 2 ? 1 : 0;
  }), I(C, (t) => {
    Xe(t), t.vx = t.v0x, t.vy = t.v0y, t.heading = Math.atan2(t.vx, t.vy);
  }), os();
}, W0 = () => {
  v.tick++, as(v.number_of_walkers.choices[v.number_of_walkers.widget.value()]);
}, q0 = (t) => {
  t && os(), V0();
};
function os() {
  const t = v.A, e = 100;
  let n = 0;
  for (v.A = 5, I(C, (r) => {
    r.v0 = 0, r.A = v.A;
  }); n < e; )
    as(xe), n++;
  v.A = t, I(C, (r) => {
    r.v0 = v.mean_speed.widget.value() * (1 + v.speed_variability.widget.value() * r.dv0), r.A = t;
  });
}
function V0() {
  const t = v.directional_bias.widget.value();
  if (t >= 0) {
    const e = Math.floor(t);
    I(C, (n) => {
      n.index < e ? n.direction = 0 : n.direction = n.index % 2 == 0 ? 0 : 1, Xe(n);
    });
  } else {
    let e = Math.floor(-t);
    I(C, (n) => {
      n.index < e ? n.direction = 1 : n.direction = n.index % 2 == 0 ? 0 : 1, Xe(n);
    });
  }
}
function as(t) {
  const e = Tn(C, (r, i) => i < t), n = Tn(V, (r) => r.active == !0);
  I(e, (r) => {
    r.dx = r.vx, r.dy = r.vy, r.dvx = r.M / r.tau * (r.v0x - r.vx), r.dvy = r.M / r.tau * (r.v0y - r.vy);
    let i = 0, s = 0;
    I(e, (u) => {
      let f = _r(r, u), c = (r.x - u.x) / f, l = (r.y - u.y) / f, h = -l, p = c;
      if ((u.vx - r.vx) * h + (u.vy - r.vy) * p, u.index != r.index) {
        let d = r.A * Math.exp((r.R + u.R - f) / r.B) + v.k * Qr(2 * v.radius - f), g = v.kappa * Qr(2 * v.radius - f) * ((u.vx - r.vx) * h + (u.vx - r.vx) * p);
        i += d * c + g * h, s += d * l + g * p;
      }
    }), I(n, (u) => {
      let f = _r(r, u), c = (r.x - u.x) / f, l = (r.y - u.y) / f, h = 2.5 * r.A * Math.exp((r.R + u.R - f) / r.B);
      i += h * c, s += h * l;
    });
    let o = At(r.x, r.y), a = 2.5 * r.A * Math.exp((r.R - (v.R2 - o)) / r.B);
    i -= a * r.x / At(r.x, r.y), s -= a * r.y / At(r.x, r.y), r.dvx += i, r.dvy += s, r.dx *= ue, r.dy *= ue, r.dvx *= ue, r.dvy *= ue;
  }), I(e, (r) => {
    r.x += r.dx, r.y += r.dy, r.r = At(r.x, r.y), r.vx += r.dvx, r.vy += r.dvy, Xe(r), r.heading = Math.atan2(r.vx, r.vy), r.theta = Math.atan2(r.x, r.y);
  });
}
const $0 = "_node_1phdh_1", tg = "_person_1phdh_2", eg = "_manlio_1phdh_3", ng = "_left_1phdh_5", rg = "_right_1phdh_9", ig = "_arena_1phdh_13", sg = "_mulch_1phdh_19", og = "_nose_1phdh_25", ag = "_head_1phdh_30", ug = "_shoulder_1phdh_35", fg = "_hair_1phdh_40", lg = "_eye_1phdh_45", cg = "_obstacle_1phdh_52", hg = "_obs0_1phdh_58", dg = "_obs1_1phdh_62", gg = "_obs2_1phdh_66", pg = "_obs3_1phdh_70", M = {
  node: $0,
  person: tg,
  manlio: eg,
  left: ng,
  right: rg,
  arena: ig,
  mulch: sg,
  nose: og,
  head: ag,
  shoulder: ug,
  hair: fg,
  eye: lg,
  obstacle: cg,
  obs0: hg,
  obs1: dg,
  obs2: gg,
  obs3: pg
}, It = v.person_scale, fe = "matrix(0.1,0,0,-0.1,-52,66)", Ag = "M 170 844.882812 L 870 844.882812 C 952.8125 844.882812 1020 762.578125 1020 661.171875 C 1020 559.765625 952.8125 477.421875 870 477.421875 L 170 477.421875 C 87.1875 477.421875 20 559.765625 20 661.171875 C 20 762.578125 87.1875 844.882812 170 844.882812 Z M 170 844.882812", yg = "M 562.34375 1270.507812 C 589.609375 1217.8125 589.609375 1132.421875 562.34375 1079.726562 C 535.117188 1027.070312 490.9375 1027.070312 463.671875 1079.726562 C 436.445312 1132.421875 436.445312 1217.8125 463.671875 1270.507812 C 490.9375 1323.164062 535.117188 1323.164062 562.34375 1270.507812 ", vg = "M 741.875 1040.820312 C 870.859375 855.546875 870.859375 555.15625 741.875 369.882812 C 612.929688 184.609375 403.828125 184.609375 274.84375 369.882812 C 145.898438 555.15625 145.898438 855.546875 274.84375 1040.820312 C 403.828125 1226.09375 612.929688 1226.09375 741.875 1040.820312 ", mg = [
  "M 247.890625 841.757812 L 251.523438 230.9375 ",
  "M 313.007812 751.875 L 316.601562 141.015625 ",
  "M 378.125 751.875 L 381.71875 141.015625 ",
  "M 443.242188 751.875 L 446.835938 141.015625 ",
  "M 508.359375 710 L 511.953125 99.179688 ",
  "M 573.476562 751.875 L 577.070312 141.015625 ",
  "M 638.59375 798.359375 L 642.1875 187.539062 ",
  "M 703.710938 844.882812 L 707.304688 234.0625 ",
  "M 768.828125 891.40625 L 772.421875 280.546875 "
], bg = [
  "M 69.257812 27.300781 C 71.984375 30.023438 71.984375 34.441406 69.257812 37.164062 C 66.535156 39.890625 62.117188 39.890625 59.390625 37.164062 C 56.667969 34.441406 56.667969 30.023438 59.390625 27.300781 C 62.117188 24.574219 66.535156 24.574219 69.257812 27.300781 ",
  "M 43.210938 27.300781 C 45.9375 30.023438 45.9375 34.441406 43.210938 37.164062 C 40.488281 39.890625 36.070312 39.890625 33.34375 37.164062 C 30.621094 34.441406 30.621094 30.023438 33.34375 27.300781 C 36.070312 24.574219 40.488281 24.574219 43.210938 27.300781 "
], xg = (t) => {
  t.append("path").attr("d", Ag).attr("transform", "scale(" + It + ")" + fe).classed(M.shoulder, !0), t.append("path").attr("d", yg).attr("transform", "scale(" + It + ")" + fe).classed(M.nose, !0).style("opacity", v.symbols.widget.value() == 0 ? 1 : 0), t.append("path").attr("d", vg).attr("transform", "scale(" + It + ")" + fe).classed(M.head, !0), t.selectAll("." + M.hair).data(mg).enter().append("path").attr("class", M.hair).attr("d", (e) => e).attr("transform", "scale(" + It + ")" + fe), t.selectAll("." + M.eye).data(bg).enter().append("path").attr("class", M.eye).attr("d", (e) => e).attr("transform", "scale(" + It + ")matrix(1,0,0,1,-52,-66)");
}, us = "data:image/png;base64,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";
console.log(us);
const Ie = v.L;
v.person_scale;
var lt = U().domain([-Ie, Ie]), Ct = U().domain([-Ie, Ie]), le;
const wg = (t, e) => {
  const n = e.display_size.width, r = e.display_size.height;
  lt.range([-n / 2, n / 2]), Ct.range([-r / 2, r / 2]);
  const i = v.number_of_walkers.choices[v.number_of_walkers.widget.value()];
  t.selectAll("#origin").remove();
  const s = t.append("g").attr("id", "origin").attr("transform", "translate(" + n / 2 + "," + r / 2 + ")");
  s.append("circle").attr("r", lt(v.R2)).style("stroke", "black").attr("class", M.arena), le = s.selectAll("." + M.node).data(C).enter().append("g").attr("class", M.node).attr("transform", (a) => "translate(" + lt(a.x) + "," + Ct(a.y) + ")rotate(" + (180 - a.heading * 180 / Math.PI) + ")").style("opacity", function(a, u) {
    return u < i ? 1 : 0;
  }).classed(M.left, (a) => a.direction).classed(M.right, (a) => !a.direction), le.append("circle").attr("r", lt(1)).attr("class", M.mulch);
  const o = le.append("g").attr("class", M.person);
  xg(o), le.append("image").attr("xlink:href", us).attr("width", 30).attr("height", 30).attr("x", -15).attr("y", -15).attr("class", M.manlio), s.selectAll("." + M.obstacle).data(V).enter().append("circle").attr("class", (a) => M.obstacle + " " + M[a.name]).attr("r", (a) => lt(a.R)).attr("cx", (a) => lt(a.x)).attr("cy", (a) => Ct(a.y)).style("opacity", function(a) {
    return a.active == !0 ? 1 : 0;
  }), t.selectAll("#origin").selectAll("." + M.person).style("opacity", v.symbols.widget.value() == 0 ? 1 : 0), t.selectAll("#origin").selectAll("." + M.mulch).style("opacity", v.symbols.widget.value() == 1 ? 1 : 0), t.selectAll("#origin").selectAll("." + M.manlio).style("opacity", v.symbols.widget.value() == 2 ? 1 : 0);
}, Pg = (t, e) => {
  const n = v.number_of_walkers.choices[v.number_of_walkers.widget.value()];
  t.selectAll("#origin").selectAll("." + M.node).attr("transform", (r) => "translate(" + lt(r.x) + "," + Ct(r.y) + ")rotate(" + (180 - r.heading * 180 / Math.PI) + ")").style("opacity", function(r, i) {
    return i < n ? 1 : 0;
  });
}, Mg = (t, e) => {
  const n = v.number_of_walkers.choices[v.number_of_walkers.widget.value()];
  t.selectAll("#origin").selectAll("." + M.obstacle).style("opacity", function(r) {
    return r.active == !0 ? 1 : 0;
  }), t.selectAll("#origin").selectAll("." + M.node).attr("transform", (r) => "translate(" + lt(r.x) + "," + Ct(r.y) + ")rotate(" + (180 - r.heading * 180 / Math.PI) + ")").style("opacity", function(r, i) {
    return i < n ? 1 : 0;
  }).classed(M.left, (r) => r.direction).classed(M.right, (r) => !r.direction), t.selectAll("#origin").selectAll("." + M.person).style("opacity", v.symbols.widget.value() == 0 ? 1 : 0), t.selectAll("#origin").selectAll("." + M.mulch).style("opacity", v.symbols.widget.value() == 1 ? 1 : 0), t.selectAll("#origin").selectAll("." + M.manlio).style("opacity", v.symbols.widget.value() == 2 ? 1 : 0);
};
function Tg(t, e) {
  W0(), Pg(t);
}
function fs(t, e) {
  U0(), wg(t, e);
}
function ce(t, e, n) {
  q0(n), Mg(t);
}
var Ur = {};
const zg = (t, e) => {
  ct.value() == 1 ? Ur = Za(() => Tg(t), P.simulation.delay) : Ur.stop();
}, Og = (t, e, n) => {
  const r = (s, o) => {
    I(Tn(V, (a) => a.name == o), (a) => {
      a.active = s;
    }), ce(t, n, !0);
  }, i = () => {
    C.forEach(function(s) {
      s.v0 = v.mean_speed.widget.value() * (1 + v.speed_variability.widget.value() * s.dv0);
    });
  };
  Ue.update(() => L0(e)), ct.update(() => zg(t)), Ke.update(() => fs(t, n)), v.mean_speed.widget.update(i), v.number_of_walkers.widget.update(() => ce(t, n, !0)), v.directional_bias.widget.update(() => ce(t, n, !1)), v.symbols.widget.update(() => ce(t, n, !1)), v.single_large_obstacle.widget.update(() => r(v.single_large_obstacle.widget.value(), "obs1")), v.two_smaller_obstacles.widget.update(() => r(v.two_smaller_obstacles.widget.value(), "obs2")), v.three_diagonal_obstacles.widget.update(() => r(v.three_diagonal_obstacles.widget.value(), "obs3"));
}, kg = {
  name: "@explorables/the_walking_head",
  title: "The walking head",
  subtitle: "Pedestrian dynamics",
  description: "This explorable illustrates a simple model for pedestrian dynamics. The model can explain spontaneous lane formation in opposing flows, congestion patterns, and phenomena like crowd turbulence.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Hg(t, e = ls) {
  const n = B0(t, e), r = n.display, i = n.controls, s = n.grid;
  return Y0(i, s), Og(r, i, e), fs(r, e), {
    halt() {
      ct.value() === 1 && ct.press(i);
    },
    reset() {
      ct.value() === 1 && ct.press(i), Ue.press(i), Ke.press(i);
    },
    config: e,
    meta: kg
  };
}
export {
  ls as config,
  Hg as default,
  Hg as load,
  kg as meta
};
