(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_vsgci_1,._controlPanel_vsgci_8{display:block;line-height:0;box-sizing:border-box}._displayPanel_vsgci_1>canvas,._displayPanel_vsgci_1>svg,._controlPanel_vsgci_8>svg,._controlPanel_vsgci_8>canvas{display:block;box-sizing:border-box}._left_vsgci_29{fill:#787878}._right_vsgci_33{fill:#fff}._arena_vsgci_37{fill:none;stroke:#000;stroke-width:2}._nose_vsgci_44,._head_vsgci_49,._shoulder_vsgci_54,._hair_vsgci_59{stroke-width:30;stroke:#000}._eye_vsgci_64{fill:#000}._mulch_vsgci_69{stroke:#000;stroke-width:1}._obstacle_vsgci_75{stroke:#000;fill:gray;stroke-width:2}._obs0_vsgci_81._obstacle_vsgci_75{fill:#dcdcdc;stroke:#000}@media (prefers-color-scheme: dark){._arena_vsgci_37{stroke:#fff;fill:none}._obs0_vsgci_81._obstacle_vsgci_75{fill:#3c3c3c;stroke:#fff}._mulch_vsgci_69{stroke:#fff;stroke-width:1}._left_vsgci_29{fill:#787878}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Qu = {
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
function ln(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ku(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ya(t) {
  let e, n, r;
  t.length !== 2 ? (e = ln, n = (s, c) => ln(t(s), c), r = (s, c) => t(s) - c) : (e = t === ln || t === Ku ? t : Wu, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) < 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) <= 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    const h = i(s, c, u, l - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function Wu() {
  return 0;
}
function Vu(t) {
  return t === null ? NaN : +t;
}
const $u = Ya(ln), tc = $u.right;
Ya(Vu).center;
const ec = Math.sqrt(50), nc = Math.sqrt(10), rc = Math.sqrt(2);
function Mn(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= ec ? 10 : o >= nc ? 5 : o >= rc ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? Mn(t, e, n * 2) : [s, c, u];
}
function ic(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, o, a] = r ? Mn(e, t, n) : Mn(t, e, n);
  if (!(o >= i)) return [];
  const s = o - i + 1, c = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) c[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) c[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * a;
  return c;
}
function jr(t, e, n) {
  return e = +e, t = +t, n = +n, Mn(t, e, n)[2];
}
function oc(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? jr(e, t, n) : jr(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var ac = { value: () => {
} };
function La() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new fn(n);
}
function fn(t) {
  this._ = t;
}
function sc(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
fn.prototype = La.prototype = {
  constructor: fn,
  on: function(t, e) {
    var n = this._, r = sc(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = uc(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = to(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = to(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new fn(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
  }
};
function uc(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function to(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ac, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Nr = "http://www.w3.org/1999/xhtml";
const eo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Nr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function qn(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), eo.hasOwnProperty(e) ? { space: eo[e], local: t } : t;
}
function cc(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Nr && e.documentElement.namespaceURI === Nr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function lc(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Fa(t) {
  var e = qn(t);
  return (e.local ? lc : cc)(e);
}
function fc() {
}
function fi(t) {
  return t == null ? fc : function() {
    return this.querySelector(t);
  };
}
function hc(t) {
  typeof t != "function" && (t = fi(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), c, u, l = 0; l < a; ++l)
      (c = o[l]) && (u = t.call(c, c.__data__, l, o)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new L(r, this._parents);
}
function dc(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function pc() {
  return [];
}
function Ja(t) {
  return t == null ? pc : function() {
    return this.querySelectorAll(t);
  };
}
function gc(t) {
  return function() {
    return dc(t.apply(this, arguments));
  };
}
function vc(t) {
  typeof t == "function" ? t = gc(t) : t = Ja(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && (r.push(t.call(c, c.__data__, u, a)), i.push(c));
  return new L(r, i);
}
function Ra(t) {
  return function() {
    return this.matches(t);
  };
}
function Za(t) {
  return function(e) {
    return e.matches(t);
  };
}
var yc = Array.prototype.find;
function mc(t) {
  return function() {
    return yc.call(this.children, t);
  };
}
function Ac() {
  return this.firstElementChild;
}
function bc(t) {
  return this.select(t == null ? Ac : mc(typeof t == "function" ? t : Za(t)));
}
var wc = Array.prototype.filter;
function xc() {
  return Array.from(this.children);
}
function _c(t) {
  return function() {
    return wc.call(this.children, t);
  };
}
function Mc(t) {
  return this.selectAll(t == null ? xc : _c(typeof t == "function" ? t : Za(t)));
}
function Pc(t) {
  typeof t != "function" && (t = Ra(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new L(r, this._parents);
}
function qa(t) {
  return new Array(t.length);
}
function Oc() {
  return new L(this._enter || this._groups.map(qa), this._parents);
}
function Pn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Pn.prototype = {
  constructor: Pn,
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
function Tc(t) {
  return function() {
    return t;
  };
}
function zc(t, e, n, r, i, o) {
  for (var a = 0, s, c = e.length, u = o.length; a < u; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new Pn(t, o[a]);
  for (; a < c; ++a)
    (s = e[a]) && (i[a] = s);
}
function kc(t, e, n, r, i, o, a) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, h = o.length, f = new Array(l), d;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (f[s] = d = a.call(c, c.__data__, s, e) + "", u.has(d) ? i[s] = c : u.set(d, c));
  for (s = 0; s < h; ++s)
    d = a.call(t, o[s], s, o) + "", (c = u.get(d)) ? (r[s] = c, c.__data__ = o[s], u.delete(d)) : n[s] = new Pn(t, o[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(f[s]) === c && (i[s] = c);
}
function jc(t) {
  return t.__data__;
}
function Nc(t, e) {
  if (!arguments.length) return Array.from(this, jc);
  var n = e ? kc : zc, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Tc(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), c = new Array(o), u = 0; u < o; ++u) {
    var l = r[u], h = i[u], f = h.length, d = Sc(t.call(l, l && l.__data__, u, r)), g = d.length, y = s[u] = new Array(g), w = a[u] = new Array(g), _ = c[u] = new Array(f);
    n(l, h, y, w, _, d, e);
    for (var p = 0, M = 0, v, A; p < g; ++p)
      if (v = y[p]) {
        for (p >= M && (M = p + 1); !(A = w[M]) && ++M < g; ) ;
        v._next = A || null;
      }
  }
  return a = new L(a, r), a._enter = s, a._exit = c, a;
}
function Sc(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Hc() {
  return new L(this._exit || this._groups.map(qa), this._parents);
}
function Xc(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Ic(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), c = 0; c < a; ++c)
    for (var u = n[c], l = r[c], h = u.length, f = s[c] = new Array(h), d, g = 0; g < h; ++g)
      (d = u[g] || l[g]) && (f[g] = d);
  for (; c < i; ++c)
    s[c] = n[c];
  return new L(s, this._parents);
}
function Ec() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Bc(t) {
  t || (t = Dc);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, c = i[o] = new Array(s), u, l = 0; l < s; ++l)
      (u = a[l]) && (c[l] = u);
    c.sort(e);
  }
  return new L(i, this._parents).order();
}
function Dc(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Cc() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Gc() {
  return Array.from(this);
}
function Yc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Lc() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Fc() {
  return !this.node();
}
function Jc(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Rc(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Zc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function qc(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Uc(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Qc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Kc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Wc(t, e) {
  var n = qn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Zc : Rc : typeof e == "function" ? n.local ? Kc : Qc : n.local ? Uc : qc)(n, e));
}
function Ua(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Vc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function $c(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function tl(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function el(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Vc : typeof e == "function" ? tl : $c)(t, e, n ?? "")) : $t(this.node(), t);
}
function $t(t, e) {
  return t.style.getPropertyValue(e) || Ua(t).getComputedStyle(t, null).getPropertyValue(e);
}
function nl(t) {
  return function() {
    delete this[t];
  };
}
function rl(t, e) {
  return function() {
    this[t] = e;
  };
}
function il(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function ol(t, e) {
  return arguments.length > 1 ? this.each((e == null ? nl : typeof e == "function" ? il : rl)(t, e)) : this.node()[t];
}
function Qa(t) {
  return t.trim().split(/^|\s+/);
}
function hi(t) {
  return t.classList || new Ka(t);
}
function Ka(t) {
  this._node = t, this._names = Qa(t.getAttribute("class") || "");
}
Ka.prototype = {
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
function Wa(t, e) {
  for (var n = hi(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Va(t, e) {
  for (var n = hi(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function al(t) {
  return function() {
    Wa(this, t);
  };
}
function sl(t) {
  return function() {
    Va(this, t);
  };
}
function ul(t, e) {
  return function() {
    (e.apply(this, arguments) ? Wa : Va)(this, t);
  };
}
function cl(t, e) {
  var n = Qa(t + "");
  if (arguments.length < 2) {
    for (var r = hi(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? ul : e ? al : sl)(n, e));
}
function ll() {
  this.textContent = "";
}
function fl(t) {
  return function() {
    this.textContent = t;
  };
}
function hl(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function dl(t) {
  return arguments.length ? this.each(t == null ? ll : (typeof t == "function" ? hl : fl)(t)) : this.node().textContent;
}
function pl() {
  this.innerHTML = "";
}
function gl(t) {
  return function() {
    this.innerHTML = t;
  };
}
function vl(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function yl(t) {
  return arguments.length ? this.each(t == null ? pl : (typeof t == "function" ? vl : gl)(t)) : this.node().innerHTML;
}
function ml() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Al() {
  return this.each(ml);
}
function bl() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function wl() {
  return this.each(bl);
}
function xl(t) {
  var e = typeof t == "function" ? t : Fa(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function _l() {
  return null;
}
function Ml(t, e) {
  var n = typeof t == "function" ? t : Fa(t), r = e == null ? _l : typeof e == "function" ? e : fi(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Pl() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ol() {
  return this.each(Pl);
}
function Tl() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function zl() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function kl(t) {
  return this.select(t ? zl : Tl);
}
function jl(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Nl(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Sl(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Hl(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Xl(t, e, n) {
  return function() {
    var r = this.__on, i, o = Nl(e);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Il(t, e, n) {
  var r = Sl(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < o; ++i)
          if ((a = r[i]).type === l.type && a.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = e ? Xl : Hl, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function $a(t, e, n) {
  var r = Ua(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function El(t, e) {
  return function() {
    return $a(this, t, e);
  };
}
function Bl(t, e) {
  return function() {
    return $a(this, t, e.apply(this, arguments));
  };
}
function Dl(t, e) {
  return this.each((typeof e == "function" ? Bl : El)(t, e));
}
function* Cl() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ts = [null];
function L(t, e) {
  this._groups = t, this._parents = e;
}
function Be() {
  return new L([[document.documentElement]], ts);
}
function Gl() {
  return this;
}
L.prototype = Be.prototype = {
  constructor: L,
  select: hc,
  selectAll: vc,
  selectChild: bc,
  selectChildren: Mc,
  filter: Pc,
  data: Nc,
  enter: Oc,
  exit: Hc,
  join: Xc,
  merge: Ic,
  selection: Gl,
  order: Ec,
  sort: Bc,
  call: Cc,
  nodes: Gc,
  node: Yc,
  size: Lc,
  empty: Fc,
  each: Jc,
  attr: Wc,
  style: el,
  property: ol,
  classed: cl,
  text: dl,
  html: yl,
  raise: Al,
  lower: wl,
  append: xl,
  insert: Ml,
  remove: Ol,
  clone: kl,
  datum: jl,
  on: Il,
  dispatch: Dl,
  [Symbol.iterator]: Cl
};
function Yl(t) {
  return typeof t == "string" ? new L([[document.querySelector(t)]], [document.documentElement]) : new L([[t]], ts);
}
function di(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function es(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function De() {
}
var Pe = 0.7, On = 1 / Pe, Kt = "\\s*([+-]?\\d+)\\s*", Oe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ll = /^#([0-9a-f]{3,8})$/, Fl = new RegExp(`^rgb\\(${Kt},${Kt},${Kt}\\)$`), Jl = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`), Rl = new RegExp(`^rgba\\(${Kt},${Kt},${Kt},${Oe}\\)$`), Zl = new RegExp(`^rgba\\(${ot},${ot},${ot},${Oe}\\)$`), ql = new RegExp(`^hsl\\(${Oe},${ot},${ot}\\)$`), Ul = new RegExp(`^hsla\\(${Oe},${ot},${ot},${Oe}\\)$`), no = {
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
di(De, Bt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ro,
  // Deprecated! Use color.formatHex.
  formatHex: ro,
  formatHex8: Ql,
  formatHsl: Kl,
  formatRgb: io,
  toString: io
});
function ro() {
  return this.rgb().formatHex();
}
function Ql() {
  return this.rgb().formatHex8();
}
function Kl() {
  return ns(this).formatHsl();
}
function io() {
  return this.rgb().formatRgb();
}
function Bt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Ll.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? oo(e) : n === 3 ? new C(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ze(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ze(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Fl.exec(t)) ? new C(e[1], e[2], e[3], 1) : (e = Jl.exec(t)) ? new C(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Rl.exec(t)) ? Ze(e[1], e[2], e[3], e[4]) : (e = Zl.exec(t)) ? Ze(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ql.exec(t)) ? uo(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ul.exec(t)) ? uo(e[1], e[2] / 100, e[3] / 100, e[4]) : no.hasOwnProperty(t) ? oo(no[t]) : t === "transparent" ? new C(NaN, NaN, NaN, 0) : null;
}
function oo(t) {
  return new C(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ze(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new C(t, e, n, r);
}
function Wl(t) {
  return t instanceof De || (t = Bt(t)), t ? (t = t.rgb(), new C(t.r, t.g, t.b, t.opacity)) : new C();
}
function Sr(t, e, n, r) {
  return arguments.length === 1 ? Wl(t) : new C(t, e, n, r ?? 1);
}
function C(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
di(C, Sr, es(De, {
  brighter(t) {
    return t = t == null ? On : Math.pow(On, t), new C(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Pe : Math.pow(Pe, t), new C(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new C(It(this.r), It(this.g), It(this.b), Tn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ao,
  // Deprecated! Use color.formatHex.
  formatHex: ao,
  formatHex8: Vl,
  formatRgb: so,
  toString: so
}));
function ao() {
  return `#${St(this.r)}${St(this.g)}${St(this.b)}`;
}
function Vl() {
  return `#${St(this.r)}${St(this.g)}${St(this.b)}${St((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function so() {
  const t = Tn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${It(this.r)}, ${It(this.g)}, ${It(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Tn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function It(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function St(t) {
  return t = It(t), (t < 16 ? "0" : "") + t.toString(16);
}
function uo(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new $(t, e, n, r);
}
function ns(t) {
  if (t instanceof $) return new $(t.h, t.s, t.l, t.opacity);
  if (t instanceof De || (t = Bt(t)), !t) return new $();
  if (t instanceof $) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, c = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new $(a, s, c, t.opacity);
}
function $l(t, e, n, r) {
  return arguments.length === 1 ? ns(t) : new $(t, e, n, r ?? 1);
}
function $(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
di($, $l, es(De, {
  brighter(t) {
    return t = t == null ? On : Math.pow(On, t), new $(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Pe : Math.pow(Pe, t), new $(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new C(
      yr(t >= 240 ? t - 240 : t + 120, i, r),
      yr(t, i, r),
      yr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new $(co(this.h), qe(this.s), qe(this.l), Tn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Tn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${co(this.h)}, ${qe(this.s) * 100}%, ${qe(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function co(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function qe(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function yr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const pi = (t) => () => t;
function tf(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function ef(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function nf(t) {
  return (t = +t) == 1 ? rs : function(e, n) {
    return n - e ? ef(e, n, t) : pi(isNaN(e) ? n : e);
  };
}
function rs(t, e) {
  var n = e - t;
  return n ? tf(t, n) : pi(isNaN(t) ? e : t);
}
const zn = function t(e) {
  var n = nf(e);
  function r(i, o) {
    var a = n((i = Sr(i)).r, (o = Sr(o)).r), s = n(i.g, o.g), c = n(i.b, o.b), u = rs(i.opacity, o.opacity);
    return function(l) {
      return i.r = a(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function rf(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function of(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function af(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = gi(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function sf(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function W(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function uf(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = gi(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var Hr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, mr = new RegExp(Hr.source, "g");
function cf(t) {
  return function() {
    return t;
  };
}
function lf(t) {
  return function(e) {
    return t(e) + "";
  };
}
function is(t, e) {
  var n = Hr.lastIndex = mr.lastIndex = 0, r, i, o, a = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = Hr.exec(t)) && (i = mr.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, c.push({ i: a, x: W(r, i) })), n = mr.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? c[0] ? lf(c[0].x) : cf(e) : (e = c.length, function(u) {
    for (var l = 0, h; l < e; ++l) s[(h = c[l]).i] = h.x(u);
    return s.join("");
  });
}
function gi(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? pi(e) : (n === "number" ? W : n === "string" ? (r = Bt(e)) ? (e = r, zn) : is : e instanceof Bt ? zn : e instanceof Date ? sf : of(e) ? rf : Array.isArray(e) ? af : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? uf : W)(t, e);
}
function ff(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var lo = 180 / Math.PI, Xr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function os(t, e, n, r, i, o) {
  var a, s, c;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * lo,
    skewX: Math.atan(c) * lo,
    scaleX: a,
    scaleY: s
  };
}
var Ue;
function hf(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Xr : os(e.a, e.b, e.c, e.d, e.e, e.f);
}
function df(t) {
  return t == null || (Ue || (Ue = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ue.setAttribute("transform", t), !(t = Ue.transform.baseVal.consolidate())) ? Xr : (t = t.matrix, os(t.a, t.b, t.c, t.d, t.e, t.f));
}
function as(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var y = d.push("translate(", null, e, null, n);
      g.push({ i: y - 4, x: W(u, h) }, { i: y - 2, x: W(l, f) });
    } else (h || f) && d.push("translate(" + h + e + f + n);
  }
  function a(u, l, h, f) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: W(u, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function s(u, l, h, f) {
    u !== l ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: W(u, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function c(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var y = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: W(u, h) }, { i: y - 2, x: W(l, f) });
    } else (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(u, l) {
    var h = [], f = [];
    return u = t(u), l = t(l), o(u.translateX, u.translateY, l.translateX, l.translateY, h, f), a(u.rotate, l.rotate, h, f), s(u.skewX, l.skewX, h, f), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, f), u = l = null, function(d) {
      for (var g = -1, y = f.length, w; ++g < y; ) h[(w = f[g]).i] = w.x(d);
      return h.join("");
    };
  };
}
var pf = as(hf, "px, ", "px)", "deg)"), gf = as(df, ", ", ")", ")"), te = 0, ve = 0, fe = 0, ss = 1e3, kn, ye, jn = 0, Dt = 0, Un = 0, Te = typeof performance == "object" && performance.now ? performance : Date, us = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Qn() {
  return Dt || (us(vf), Dt = Te.now() + Un);
}
function vf() {
  Dt = 0;
}
function ze() {
  this._call = this._time = this._next = null;
}
ze.prototype = cs.prototype = {
  constructor: ze,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Qn() : +n) + (e == null ? 0 : +e), !this._next && ye !== this && (ye ? ye._next = this : kn = this, ye = this), this._call = t, this._time = n, Ir();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ir());
  }
};
function cs(t, e, n) {
  var r = new ze();
  return r.restart(t, e, n), r;
}
function yf() {
  Qn(), ++te;
  for (var t = kn, e; t; )
    (e = Dt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --te;
}
function fo() {
  Dt = (jn = Te.now()) + Un, te = ve = 0;
  try {
    yf();
  } finally {
    te = 0, Af(), Dt = 0;
  }
}
function mf() {
  var t = Te.now(), e = t - jn;
  e > ss && (Un -= e, jn = t);
}
function Af() {
  for (var t, e = kn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : kn = n);
  ye = t, Ir(r);
}
function Ir(t) {
  if (!te) {
    ve && (ve = clearTimeout(ve));
    var e = t - Dt;
    e > 24 ? (t < 1 / 0 && (ve = setTimeout(fo, t - Te.now() - Un)), fe && (fe = clearInterval(fe))) : (fe || (jn = Te.now(), fe = setInterval(mf, ss)), te = 1, us(fo));
  }
}
function ho(t, e, n) {
  var r = new ze();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function bf(t, e, n) {
  var r = new ze(), i = e;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Qn() : +s, r._restart(function c(u) {
      u += i, r._restart(c, i += a, s), o(u);
    }, a, s);
  }, r.restart(t, e, n), r;
}
var wf = La("start", "end", "cancel", "interrupt"), xf = [], ls = 0, po = 1, Er = 2, hn = 3, go = 4, Br = 5, dn = 6;
function Kn(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  _f(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: wf,
    tween: xf,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ls
  });
}
function vi(t, e) {
  var n = nt(t, e);
  if (n.state > ls) throw new Error("too late; already scheduled");
  return n;
}
function ut(t, e) {
  var n = nt(t, e);
  if (n.state > hn) throw new Error("too late; already running");
  return n;
}
function nt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function _f(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = cs(o, 0, n.time);
  function o(u) {
    n.state = po, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var l, h, f, d;
    if (n.state !== po) return c();
    for (l in r)
      if (d = r[l], d.name === n.name) {
        if (d.state === hn) return ho(a);
        d.state === go ? (d.state = dn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = dn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (ho(function() {
      n.state === hn && (n.state = go, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Er, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Er) {
      for (n.state = hn, i = new Array(f = n.tween.length), l = 0, h = -1; l < f; ++l)
        (d = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Br, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, l);
    n.state === Br && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = dn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Mf(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > Er && r.state < Br, r.state = dn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function Pf(t) {
  return this.each(function() {
    Mf(this, t);
  });
}
function Of(t, e) {
  var n, r;
  return function() {
    var i = ut(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Tf(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = ut(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    o.tween = i;
  };
}
function zf(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = nt(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Of : Tf)(n, t, e));
}
function yi(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = ut(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return nt(i, r).value[e];
  };
}
function fs(t, e) {
  var n;
  return (typeof e == "number" ? W : e instanceof Bt ? zn : (n = Bt(e)) ? (e = n, zn) : is)(t, e);
}
function kf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function jf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Nf(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Sf(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Hf(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, s)));
  };
}
function Xf(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, s)));
  };
}
function If(t, e) {
  var n = qn(t), r = n === "transform" ? gf : fs;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Xf : Hf)(n, r, yi(this, "attr." + t, e)) : e == null ? (n.local ? jf : kf)(n) : (n.local ? Sf : Nf)(n, r, e));
}
function Ef(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Bf(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Df(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Bf(t, o)), n;
  }
  return i._value = e, i;
}
function Cf(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Ef(t, o)), n;
  }
  return i._value = e, i;
}
function Gf(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = qn(t);
  return this.tween(n, (r.local ? Df : Cf)(r, e));
}
function Yf(t, e) {
  return function() {
    vi(this, t).delay = +e.apply(this, arguments);
  };
}
function Lf(t, e) {
  return e = +e, function() {
    vi(this, t).delay = e;
  };
}
function Ff(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Yf : Lf)(e, t)) : nt(this.node(), e).delay;
}
function Jf(t, e) {
  return function() {
    ut(this, t).duration = +e.apply(this, arguments);
  };
}
function Rf(t, e) {
  return e = +e, function() {
    ut(this, t).duration = e;
  };
}
function Zf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Jf : Rf)(e, t)) : nt(this.node(), e).duration;
}
function qf(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    ut(this, t).ease = e;
  };
}
function Uf(t) {
  var e = this._id;
  return arguments.length ? this.each(qf(e, t)) : nt(this.node(), e).ease;
}
function Qf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ut(this, t).ease = n;
  };
}
function Kf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Qf(this._id, t));
}
function Wf(t) {
  typeof t != "function" && (t = Ra(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new vt(r, this._parents, this._name, this._id);
}
function Vf(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var c = e[s], u = n[s], l = c.length, h = a[s] = new Array(l), f, d = 0; d < l; ++d)
      (f = c[d] || u[d]) && (h[d] = f);
  for (; s < r; ++s)
    a[s] = e[s];
  return new vt(a, this._parents, this._name, this._id);
}
function $f(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function th(t, e, n) {
  var r, i, o = $f(e) ? vi : ut;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function eh(t, e) {
  var n = this._id;
  return arguments.length < 2 ? nt(this.node(), n).on.on(t) : this.each(th(n, t, e));
}
function nh(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function rh() {
  return this.on("end.remove", nh(this._id));
}
function ih(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = fi(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], c = s.length, u = o[a] = new Array(c), l, h, f = 0; f < c; ++f)
      (l = s[f]) && (h = t.call(l, l.__data__, f, s)) && ("__data__" in l && (h.__data__ = l.__data__), u[f] = h, Kn(u[f], e, n, f, u, nt(l, n)));
  return new vt(o, this._parents, e, n);
}
function oh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ja(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, h = 0; h < u; ++h)
      if (l = c[h]) {
        for (var f = t.call(l, l.__data__, h, c), d, g = nt(l, n), y = 0, w = f.length; y < w; ++y)
          (d = f[y]) && Kn(d, e, n, y, f, g);
        o.push(f), a.push(l);
      }
  return new vt(o, a, e, n);
}
var ah = Be.prototype.constructor;
function sh() {
  return new ah(this._groups, this._parents);
}
function uh(t, e) {
  var n, r, i;
  return function() {
    var o = $t(this, t), a = (this.style.removeProperty(t), $t(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function hs(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ch(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = $t(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function lh(t, e, n) {
  var r, i, o;
  return function() {
    var a = $t(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), $t(this, t))), a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, s));
  };
}
function fh(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var c = ut(this, t), u = c.on, l = c.value[o] == null ? s || (s = hs(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(a, i = l), c.on = r;
  };
}
function hh(t, e, n) {
  var r = (t += "") == "transform" ? pf : fs;
  return e == null ? this.styleTween(t, uh(t, r)).on("end.style." + t, hs(t)) : typeof e == "function" ? this.styleTween(t, lh(t, r, yi(this, "style." + t, e))).each(fh(this._id, t)) : this.styleTween(t, ch(t, r, e), n).on("end.style." + t, null);
}
function dh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function ph(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && dh(t, a, n)), r;
  }
  return o._value = e, o;
}
function gh(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, ph(t, e, n ?? ""));
}
function vh(t) {
  return function() {
    this.textContent = t;
  };
}
function yh(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function mh(t) {
  return this.tween("text", typeof t == "function" ? yh(yi(this, "text", t)) : vh(t == null ? "" : t + ""));
}
function Ah(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function bh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Ah(i)), e;
  }
  return r._value = t, r;
}
function wh(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, bh(t));
}
function xh() {
  for (var t = this._name, e = this._id, n = ds(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      if (c = a[u]) {
        var l = nt(c, e);
        Kn(c, t, n, u, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new vt(r, this._parents, t, n);
}
function _h() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, c = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var u = ut(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && o();
  });
}
var Mh = 0;
function vt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function ds() {
  return ++Mh;
}
var ft = Be.prototype;
vt.prototype = {
  constructor: vt,
  select: ih,
  selectAll: oh,
  selectChild: ft.selectChild,
  selectChildren: ft.selectChildren,
  filter: Wf,
  merge: Vf,
  selection: sh,
  transition: xh,
  call: ft.call,
  nodes: ft.nodes,
  node: ft.node,
  size: ft.size,
  empty: ft.empty,
  each: ft.each,
  on: eh,
  attr: If,
  attrTween: Gf,
  style: hh,
  styleTween: gh,
  text: mh,
  textTween: wh,
  remove: rh,
  tween: zf,
  delay: Ff,
  duration: Zf,
  ease: Uf,
  easeVarying: Kf,
  end: _h,
  [Symbol.iterator]: ft[Symbol.iterator]
};
function Ph(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Oh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ph
};
function Th(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function zh(t) {
  var e, n;
  t instanceof vt ? (e = t._id, t = t._name) : (e = ds(), (n = Oh).time = Qn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && Kn(c, t, e, u, a, n || Th(c, e));
  return new vt(r, this._parents, t, e);
}
Be.prototype.interrupt = Pf;
Be.prototype.transition = zh;
function kh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Nn(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function ee(t) {
  return t = Nn(Math.abs(t)), t ? t[1] : NaN;
}
function jh(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), o.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function Nh(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Sh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Sn(t) {
  if (!(e = Sh.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new mi({
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
Sn.prototype = mi.prototype;
function mi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
mi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Hh(t) {
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
var ps;
function Xh(t, e) {
  var n = Nn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], o = i - (ps = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Nn(t, Math.max(0, e + o - 1))[0];
}
function vo(t, e) {
  var n = Nn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const yo = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: kh,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => vo(t * 100, e),
  r: vo,
  s: Xh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function mo(t) {
  return t;
}
var Ao = Array.prototype.map, bo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ih(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? mo : jh(Ao.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? mo : Nh(Ao.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Sn(h);
    var f = h.fill, d = h.align, g = h.sign, y = h.symbol, w = h.zero, _ = h.width, p = h.comma, M = h.precision, v = h.trim, A = h.type;
    A === "n" ? (p = !0, A = "g") : yo[A] || (M === void 0 && (M = 12), v = !0, A = "g"), (w || f === "0" && d === "=") && (w = !0, f = "0", d = "=");
    var j = y === "$" ? n : y === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", N = y === "$" ? r : /[%p]/.test(A) ? a : "", X = yo[A], R = /[defgprs%]/.test(A);
    M = M === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function Z(m) {
      var I = j, T = N, E, jt, Y;
      if (A === "c")
        T = X(m) + T, m = "";
      else {
        m = +m;
        var q = m < 0 || 1 / m < 0;
        if (m = isNaN(m) ? c : X(Math.abs(m), M), v && (m = Hh(m)), q && +m == 0 && g !== "+" && (q = !1), I = (q ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + I, T = (A === "s" ? bo[8 + ps / 3] : "") + T + (q && g === "(" ? ")" : ""), R) {
          for (E = -1, jt = m.length; ++E < jt; )
            if (Y = m.charCodeAt(E), 48 > Y || Y > 57) {
              T = (Y === 46 ? i + m.slice(E + 1) : m.slice(E)) + T, m = m.slice(0, E);
              break;
            }
        }
      }
      p && !w && (m = e(m, 1 / 0));
      var K = I.length + m.length + T.length, S = K < _ ? new Array(_ - K + 1).join(f) : "";
      switch (p && w && (m = e(S + m, S.length ? _ - T.length : 1 / 0), S = ""), d) {
        case "<":
          m = I + m + T + S;
          break;
        case "=":
          m = I + S + m + T;
          break;
        case "^":
          m = S.slice(0, K = S.length >> 1) + I + m + T + S.slice(K);
          break;
        default:
          m = S + I + m + T;
          break;
      }
      return o(m);
    }
    return Z.toString = function() {
      return h + "";
    }, Z;
  }
  function l(h, f) {
    var d = u((h = Sn(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(ee(f) / 3))) * 3, y = Math.pow(10, -g), w = bo[8 + g / 3];
    return function(_) {
      return d(y * _) + w;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var Qe, gs, vs;
Eh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Eh(t) {
  return Qe = Ih(t), gs = Qe.format, vs = Qe.formatPrefix, Qe;
}
function Bh(t) {
  return Math.max(0, -ee(Math.abs(t)));
}
function Dh(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ee(e) / 3))) * 3 - ee(Math.abs(t)));
}
function Ch(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, ee(e) - ee(t)) + 1;
}
const Gh = Math.random, Yh = function t(e) {
  function n(r, i) {
    var o, a;
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, function() {
      var s;
      if (o != null) s = o, o = null;
      else do
        o = e() * 2 - 1, s = e() * 2 - 1, a = o * o + s * s;
      while (!a || a > 1);
      return r + i * s * Math.sqrt(-2 * Math.log(a) / a);
    };
  }
  return n.source = t, n;
}(Gh);
function Lh(t, e) {
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
function Fh(t) {
  return function() {
    return t;
  };
}
function Jh(t) {
  return +t;
}
var wo = [0, 1];
function Ut(t) {
  return t;
}
function Dr(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Fh(isNaN(e) ? NaN : 0.5);
}
function Rh(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Zh(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = Dr(i, r), o = n(a, o)) : (r = Dr(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function qh(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = Dr(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var c = tc(t, s, 1, r) - 1;
    return o[c](i[c](s));
  };
}
function Uh(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Qh() {
  var t = wo, e = wo, n = gi, r, i, o, a = Ut, s, c, u;
  function l() {
    var f = Math.min(t.length, e.length);
    return a !== Ut && (a = Rh(t[0], t[f - 1])), s = f > 2 ? qh : Zh, c = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (c || (c = s(t.map(r), e, n)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = s(e, t.map(r), W)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Jh), l()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), l()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = ff, l();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Ut, l()) : a !== Ut;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, l()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, d) {
    return r = f, i = d, l();
  };
}
function Kh() {
  return Qh()(Ut, Ut);
}
function Wh(t, e, n, r) {
  var i = oc(t, e, n), o;
  switch (r = Sn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = Dh(i, a)) && (r.precision = o), vs(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Ch(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Bh(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return gs(r);
}
function Vh(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return ic(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Wh(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], s = r[o], c, u, l = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); l-- > 0; ) {
      if (u = jr(a, s, n), u === c)
        return r[i] = a, r[o] = s, e(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function Ce() {
  var t = Kh();
  return t.copy = function() {
    return Uh(t, Ce());
  }, Lh.apply(t, arguments), Vh(t);
}
function me(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
me.prototype = {
  constructor: me,
  scale: function(t) {
    return t === 1 ? this : new me(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new me(this.k, this.x + this.k * t, this.y + this.k * e);
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
me.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;--dw-font-size: 16px;--dw-line-height: 1.25;font-size:var(--dw-font-size);line-height:var(--dw-line-height);font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_9wct0_49{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_9wct0_49 ._title_9wct0_61{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_9wct0_49 ._label_9wct0_69{fill:var(--color-text);stroke:none}._widget_9wct0_49 ._lit_9wct0_74{fill:var(--color-lit)}._button_9wct0_78>._symbol_9wct0_78,._radio_9wct0_79>._radiobutton_9wct0_79>._symbol_9wct0_78{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85,._toggle_9wct0_86._selected_9wct0_85,._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85._lit_9wct0_74{fill:var(--color-selected)}._widget_9wct0_49 ._symbol_9wct0_78._lit_9wct0_74{fill:var(--color-lit-symbol)}._slider_9wct0_95>._track_9wct0_95,._toggle_9wct0_86>._track_9wct0_95{pointer-events:none}._slider_9wct0_95>._track_overlay_9wct0_100,._toggle_9wct0_86>._track_overlay_9wct0_100{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_9wct0_95>._handle_9wct0_108,._toggle_9wct0_86>._handle_9wct0_108{fill:var(--color-handle)}")), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function pn(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function $h(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ys(t) {
  let e, n, r;
  t.length !== 2 ? (e = pn, n = (s, c) => pn(t(s), c), r = (s, c) => t(s) - c) : (e = t === pn || t === $h ? t : td, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) < 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) <= 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    const h = i(s, c, u, l - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function td() {
  return 0;
}
function ed(t) {
  return t === null ? NaN : +t;
}
const nd = ys(pn), rd = nd.right;
ys(ed).center;
const id = Math.sqrt(50), od = Math.sqrt(10), ad = Math.sqrt(2);
function Hn(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= id ? 10 : o >= od ? 5 : o >= ad ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? Hn(t, e, n * 2) : [s, c, u];
}
function sd(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, o, a] = r ? Hn(e, t, n) : Hn(t, e, n);
  if (!(o >= i)) return [];
  const s = o - i + 1, c = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) c[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) c[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * a;
  return c;
}
function Cr(t, e, n) {
  return e = +e, t = +t, n = +n, Hn(t, e, n)[2];
}
function ud(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Cr(e, t, n) : Cr(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ke(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function cd(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
var ld = { value: () => {
} };
function Ai() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new gn(n);
}
function gn(t) {
  this._ = t;
}
function fd(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
gn.prototype = Ai.prototype = {
  constructor: gn,
  on: function(t, e) {
    var n = this._, r = fd(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = hd(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = xo(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = xo(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new gn(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
  }
};
function hd(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function xo(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ld, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Gr = "http://www.w3.org/1999/xhtml";
const _o = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Gr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Wn(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), _o.hasOwnProperty(e) ? { space: _o[e], local: t } : t;
}
function dd(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Gr && e.documentElement.namespaceURI === Gr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function pd(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ms(t) {
  var e = Wn(t);
  return (e.local ? pd : dd)(e);
}
function gd() {
}
function bi(t) {
  return t == null ? gd : function() {
    return this.querySelector(t);
  };
}
function vd(t) {
  typeof t != "function" && (t = bi(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), c, u, l = 0; l < a; ++l)
      (c = o[l]) && (u = t.call(c, c.__data__, l, o)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new F(r, this._parents);
}
function yd(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function md() {
  return [];
}
function As(t) {
  return t == null ? md : function() {
    return this.querySelectorAll(t);
  };
}
function Ad(t) {
  return function() {
    return yd(t.apply(this, arguments));
  };
}
function bd(t) {
  typeof t == "function" ? t = Ad(t) : t = As(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && (r.push(t.call(c, c.__data__, u, a)), i.push(c));
  return new F(r, i);
}
function bs(t) {
  return function() {
    return this.matches(t);
  };
}
function ws(t) {
  return function(e) {
    return e.matches(t);
  };
}
var wd = Array.prototype.find;
function xd(t) {
  return function() {
    return wd.call(this.children, t);
  };
}
function _d() {
  return this.firstElementChild;
}
function Md(t) {
  return this.select(t == null ? _d : xd(typeof t == "function" ? t : ws(t)));
}
var Pd = Array.prototype.filter;
function Od() {
  return Array.from(this.children);
}
function Td(t) {
  return function() {
    return Pd.call(this.children, t);
  };
}
function zd(t) {
  return this.selectAll(t == null ? Od : Td(typeof t == "function" ? t : ws(t)));
}
function kd(t) {
  typeof t != "function" && (t = bs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new F(r, this._parents);
}
function xs(t) {
  return new Array(t.length);
}
function jd() {
  return new F(this._enter || this._groups.map(xs), this._parents);
}
function Xn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Xn.prototype = {
  constructor: Xn,
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
function Nd(t) {
  return function() {
    return t;
  };
}
function Sd(t, e, n, r, i, o) {
  for (var a = 0, s, c = e.length, u = o.length; a < u; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new Xn(t, o[a]);
  for (; a < c; ++a)
    (s = e[a]) && (i[a] = s);
}
function Hd(t, e, n, r, i, o, a) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, h = o.length, f = new Array(l), d;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (f[s] = d = a.call(c, c.__data__, s, e) + "", u.has(d) ? i[s] = c : u.set(d, c));
  for (s = 0; s < h; ++s)
    d = a.call(t, o[s], s, o) + "", (c = u.get(d)) ? (r[s] = c, c.__data__ = o[s], u.delete(d)) : n[s] = new Xn(t, o[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(f[s]) === c && (i[s] = c);
}
function Xd(t) {
  return t.__data__;
}
function Id(t, e) {
  if (!arguments.length) return Array.from(this, Xd);
  var n = e ? Hd : Sd, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Nd(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), c = new Array(o), u = 0; u < o; ++u) {
    var l = r[u], h = i[u], f = h.length, d = Ed(t.call(l, l && l.__data__, u, r)), g = d.length, y = s[u] = new Array(g), w = a[u] = new Array(g), _ = c[u] = new Array(f);
    n(l, h, y, w, _, d, e);
    for (var p = 0, M = 0, v, A; p < g; ++p)
      if (v = y[p]) {
        for (p >= M && (M = p + 1); !(A = w[M]) && ++M < g; ) ;
        v._next = A || null;
      }
  }
  return a = new F(a, r), a._enter = s, a._exit = c, a;
}
function Ed(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Bd() {
  return new F(this._exit || this._groups.map(xs), this._parents);
}
function Dd(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Cd(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), c = 0; c < a; ++c)
    for (var u = n[c], l = r[c], h = u.length, f = s[c] = new Array(h), d, g = 0; g < h; ++g)
      (d = u[g] || l[g]) && (f[g] = d);
  for (; c < i; ++c)
    s[c] = n[c];
  return new F(s, this._parents);
}
function Gd() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Yd(t) {
  t || (t = Ld);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, c = i[o] = new Array(s), u, l = 0; l < s; ++l)
      (u = a[l]) && (c[l] = u);
    c.sort(e);
  }
  return new F(i, this._parents).order();
}
function Ld(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Fd() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Jd() {
  return Array.from(this);
}
function Rd() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Zd() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function qd() {
  return !this.node();
}
function Ud(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Qd(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Kd(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Wd(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Vd(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function $d(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function t0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function e0(t, e) {
  var n = Wn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Kd : Qd : typeof e == "function" ? n.local ? t0 : $d : n.local ? Vd : Wd)(n, e));
}
function _s(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function n0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function r0(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function i0(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function o0(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? n0 : typeof e == "function" ? i0 : r0)(t, e, n ?? "")) : ne(this.node(), t);
}
function ne(t, e) {
  return t.style.getPropertyValue(e) || _s(t).getComputedStyle(t, null).getPropertyValue(e);
}
function a0(t) {
  return function() {
    delete this[t];
  };
}
function s0(t, e) {
  return function() {
    this[t] = e;
  };
}
function u0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function c0(t, e) {
  return arguments.length > 1 ? this.each((e == null ? a0 : typeof e == "function" ? u0 : s0)(t, e)) : this.node()[t];
}
function Ms(t) {
  return t.trim().split(/^|\s+/);
}
function wi(t) {
  return t.classList || new Ps(t);
}
function Ps(t) {
  this._node = t, this._names = Ms(t.getAttribute("class") || "");
}
Ps.prototype = {
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
function Os(t, e) {
  for (var n = wi(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Ts(t, e) {
  for (var n = wi(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function l0(t) {
  return function() {
    Os(this, t);
  };
}
function f0(t) {
  return function() {
    Ts(this, t);
  };
}
function h0(t, e) {
  return function() {
    (e.apply(this, arguments) ? Os : Ts)(this, t);
  };
}
function d0(t, e) {
  var n = Ms(t + "");
  if (arguments.length < 2) {
    for (var r = wi(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? h0 : e ? l0 : f0)(n, e));
}
function p0() {
  this.textContent = "";
}
function g0(t) {
  return function() {
    this.textContent = t;
  };
}
function v0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function y0(t) {
  return arguments.length ? this.each(t == null ? p0 : (typeof t == "function" ? v0 : g0)(t)) : this.node().textContent;
}
function m0() {
  this.innerHTML = "";
}
function A0(t) {
  return function() {
    this.innerHTML = t;
  };
}
function b0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function w0(t) {
  return arguments.length ? this.each(t == null ? m0 : (typeof t == "function" ? b0 : A0)(t)) : this.node().innerHTML;
}
function x0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function _0() {
  return this.each(x0);
}
function M0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function P0() {
  return this.each(M0);
}
function O0(t) {
  var e = typeof t == "function" ? t : ms(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function T0() {
  return null;
}
function z0(t, e) {
  var n = typeof t == "function" ? t : ms(t), r = e == null ? T0 : typeof e == "function" ? e : bi(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function k0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function j0() {
  return this.each(k0);
}
function N0() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function S0() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function H0(t) {
  return this.select(t ? S0 : N0);
}
function X0(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function I0(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function E0(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function B0(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function D0(t, e, n) {
  return function() {
    var r = this.__on, i, o = I0(e);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function C0(t, e, n) {
  var r = E0(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < o; ++i)
          if ((a = r[i]).type === l.type && a.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = e ? D0 : B0, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function zs(t, e, n) {
  var r = _s(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function G0(t, e) {
  return function() {
    return zs(this, t, e);
  };
}
function Y0(t, e) {
  return function() {
    return zs(this, t, e.apply(this, arguments));
  };
}
function L0(t, e) {
  return this.each((typeof e == "function" ? Y0 : G0)(t, e));
}
function* F0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ks = [null];
function F(t, e) {
  this._groups = t, this._parents = e;
}
function Ge() {
  return new F([[document.documentElement]], ks);
}
function J0() {
  return this;
}
F.prototype = Ge.prototype = {
  constructor: F,
  select: vd,
  selectAll: bd,
  selectChild: Md,
  selectChildren: zd,
  filter: kd,
  data: Id,
  enter: jd,
  exit: Bd,
  join: Dd,
  merge: Cd,
  selection: J0,
  order: Gd,
  sort: Yd,
  call: Fd,
  nodes: Jd,
  node: Rd,
  size: Zd,
  empty: qd,
  each: Ud,
  attr: e0,
  style: o0,
  property: c0,
  classed: d0,
  text: y0,
  html: w0,
  raise: _0,
  lower: P0,
  append: O0,
  insert: z0,
  remove: j0,
  clone: H0,
  datum: X0,
  on: C0,
  dispatch: L0,
  [Symbol.iterator]: F0
};
function H(t) {
  return typeof t == "string" ? new F([[document.querySelector(t)]], [document.documentElement]) : new F([[t]], ks);
}
function R0(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Mo(t, e) {
  if (t = R0(t), e === void 0 && (e = t.currentTarget), e) {
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
const Z0 = { passive: !1 }, ke = { capture: !0, passive: !1 };
function Ar(t) {
  t.stopImmediatePropagation();
}
function Wt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function q0(t) {
  var e = t.document.documentElement, n = H(t).on("dragstart.drag", Wt, ke);
  "onselectstart" in e ? n.on("selectstart.drag", Wt, ke) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function U0(t, e) {
  var n = t.document.documentElement, r = H(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Wt, ke), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const We = (t) => () => t;
function Yr(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: c,
  dy: u,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
Yr.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Q0(t) {
  return !t.ctrlKey && !t.button;
}
function K0() {
  return this.parentNode;
}
function W0(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function V0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $0() {
  var t = Q0, e = K0, n = W0, r = V0, i = {}, o = Ai("start", "drag", "end"), a = 0, s, c, u, l, h = 0;
  function f(v) {
    v.on("mousedown.drag", d).filter(r).on("touchstart.drag", w).on("touchmove.drag", _, Z0).on("touchend.drag touchcancel.drag", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(v, A) {
    if (!(l || !t.call(this, v, A))) {
      var j = M(this, e.call(this, v, A), v, A, "mouse");
      j && (H(v.view).on("mousemove.drag", g, ke).on("mouseup.drag", y, ke), q0(v.view), Ar(v), u = !1, s = v.clientX, c = v.clientY, j("start", v));
    }
  }
  function g(v) {
    if (Wt(v), !u) {
      var A = v.clientX - s, j = v.clientY - c;
      u = A * A + j * j > h;
    }
    i.mouse("drag", v);
  }
  function y(v) {
    H(v.view).on("mousemove.drag mouseup.drag", null), U0(v.view, u), Wt(v), i.mouse("end", v);
  }
  function w(v, A) {
    if (t.call(this, v, A)) {
      var j = v.changedTouches, N = e.call(this, v, A), X = j.length, R, Z;
      for (R = 0; R < X; ++R)
        (Z = M(this, N, v, A, j[R].identifier, j[R])) && (Ar(v), Z("start", v, j[R]));
    }
  }
  function _(v) {
    var A = v.changedTouches, j = A.length, N, X;
    for (N = 0; N < j; ++N)
      (X = i[A[N].identifier]) && (Wt(v), X("drag", v, A[N]));
  }
  function p(v) {
    var A = v.changedTouches, j = A.length, N, X;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), N = 0; N < j; ++N)
      (X = i[A[N].identifier]) && (Ar(v), X("end", v, A[N]));
  }
  function M(v, A, j, N, X, R) {
    var Z = o.copy(), m = Mo(R || j, A), I, T, E;
    if ((E = n.call(v, new Yr("beforestart", {
      sourceEvent: j,
      target: f,
      identifier: X,
      active: a,
      x: m[0],
      y: m[1],
      dx: 0,
      dy: 0,
      dispatch: Z
    }), N)) != null)
      return I = E.x - m[0] || 0, T = E.y - m[1] || 0, function jt(Y, q, K) {
        var S = m, vr;
        switch (Y) {
          case "start":
            i[X] = jt, vr = a++;
            break;
          case "end":
            delete i[X], --a;
          // falls through
          case "drag":
            m = Mo(K || q, A), vr = a;
            break;
        }
        Z.call(
          Y,
          v,
          new Yr(Y, {
            sourceEvent: q,
            subject: E,
            target: f,
            identifier: X,
            active: vr,
            x: m[0] + I,
            y: m[1] + T,
            dx: m[0] - S[0],
            dy: m[1] - S[1],
            dispatch: Z
          }),
          N
        );
      };
  }
  return f.filter = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : We(!!v), f) : t;
  }, f.container = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : We(v), f) : e;
  }, f.subject = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : We(v), f) : n;
  }, f.touchable = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : We(!!v), f) : r;
  }, f.on = function() {
    var v = o.on.apply(o, arguments);
    return v === o ? f : v;
  }, f.clickDistance = function(v) {
    return arguments.length ? (h = (v = +v) * v, f) : Math.sqrt(h);
  }, f;
}
function xi(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function js(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ye() {
}
var je = 0.7, In = 1 / je, Vt = "\\s*([+-]?\\d+)\\s*", Ne = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", at = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", tp = /^#([0-9a-f]{3,8})$/, ep = new RegExp(`^rgb\\(${Vt},${Vt},${Vt}\\)$`), np = new RegExp(`^rgb\\(${at},${at},${at}\\)$`), rp = new RegExp(`^rgba\\(${Vt},${Vt},${Vt},${Ne}\\)$`), ip = new RegExp(`^rgba\\(${at},${at},${at},${Ne}\\)$`), op = new RegExp(`^hsl\\(${Ne},${at},${at}\\)$`), ap = new RegExp(`^hsla\\(${Ne},${at},${at},${Ne}\\)$`), Po = {
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
xi(Ye, Ct, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Oo,
  // Deprecated! Use color.formatHex.
  formatHex: Oo,
  formatHex8: sp,
  formatHsl: up,
  formatRgb: To,
  toString: To
});
function Oo() {
  return this.rgb().formatHex();
}
function sp() {
  return this.rgb().formatHex8();
}
function up() {
  return Ns(this).formatHsl();
}
function To() {
  return this.rgb().formatRgb();
}
function Ct(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = tp.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? zo(e) : n === 3 ? new G(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ve(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ve(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ep.exec(t)) ? new G(e[1], e[2], e[3], 1) : (e = np.exec(t)) ? new G(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = rp.exec(t)) ? Ve(e[1], e[2], e[3], e[4]) : (e = ip.exec(t)) ? Ve(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = op.exec(t)) ? No(e[1], e[2] / 100, e[3] / 100, 1) : (e = ap.exec(t)) ? No(e[1], e[2] / 100, e[3] / 100, e[4]) : Po.hasOwnProperty(t) ? zo(Po[t]) : t === "transparent" ? new G(NaN, NaN, NaN, 0) : null;
}
function zo(t) {
  return new G(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ve(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new G(t, e, n, r);
}
function cp(t) {
  return t instanceof Ye || (t = Ct(t)), t ? (t = t.rgb(), new G(t.r, t.g, t.b, t.opacity)) : new G();
}
function Lr(t, e, n, r) {
  return arguments.length === 1 ? cp(t) : new G(t, e, n, r ?? 1);
}
function G(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
xi(G, Lr, js(Ye, {
  brighter(t) {
    return t = t == null ? In : Math.pow(In, t), new G(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? je : Math.pow(je, t), new G(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new G(Et(this.r), Et(this.g), Et(this.b), En(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ko,
  // Deprecated! Use color.formatHex.
  formatHex: ko,
  formatHex8: lp,
  formatRgb: jo,
  toString: jo
}));
function ko() {
  return `#${Ht(this.r)}${Ht(this.g)}${Ht(this.b)}`;
}
function lp() {
  return `#${Ht(this.r)}${Ht(this.g)}${Ht(this.b)}${Ht((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function jo() {
  const t = En(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Et(this.r)}, ${Et(this.g)}, ${Et(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function En(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Et(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ht(t) {
  return t = Et(t), (t < 16 ? "0" : "") + t.toString(16);
}
function No(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new tt(t, e, n, r);
}
function Ns(t) {
  if (t instanceof tt) return new tt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ye || (t = Ct(t)), !t) return new tt();
  if (t instanceof tt) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, c = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new tt(a, s, c, t.opacity);
}
function fp(t, e, n, r) {
  return arguments.length === 1 ? Ns(t) : new tt(t, e, n, r ?? 1);
}
function tt(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
xi(tt, fp, js(Ye, {
  brighter(t) {
    return t = t == null ? In : Math.pow(In, t), new tt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? je : Math.pow(je, t), new tt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new G(
      br(t >= 240 ? t - 240 : t + 120, i, r),
      br(t, i, r),
      br(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new tt(So(this.h), $e(this.s), $e(this.l), En(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = En(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${So(this.h)}, ${$e(this.s) * 100}%, ${$e(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function So(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function $e(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function br(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const _i = (t) => () => t;
function hp(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function dp(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function pp(t) {
  return (t = +t) == 1 ? Ss : function(e, n) {
    return n - e ? dp(e, n, t) : _i(isNaN(e) ? n : e);
  };
}
function Ss(t, e) {
  var n = e - t;
  return n ? hp(t, n) : _i(isNaN(t) ? e : t);
}
const Bn = function t(e) {
  var n = pp(e);
  function r(i, o) {
    var a = n((i = Lr(i)).r, (o = Lr(o)).r), s = n(i.g, o.g), c = n(i.b, o.b), u = Ss(i.opacity, o.opacity);
    return function(l) {
      return i.r = a(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function gp(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function vp(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function yp(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Mi(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function mp(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function V(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Ap(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Mi(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var Fr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, wr = new RegExp(Fr.source, "g");
function bp(t) {
  return function() {
    return t;
  };
}
function wp(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Hs(t, e) {
  var n = Fr.lastIndex = wr.lastIndex = 0, r, i, o, a = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = Fr.exec(t)) && (i = wr.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, c.push({ i: a, x: V(r, i) })), n = wr.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? c[0] ? wp(c[0].x) : bp(e) : (e = c.length, function(u) {
    for (var l = 0, h; l < e; ++l) s[(h = c[l]).i] = h.x(u);
    return s.join("");
  });
}
function Mi(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? _i(e) : (n === "number" ? V : n === "string" ? (r = Ct(e)) ? (e = r, Bn) : Hs : e instanceof Ct ? Bn : e instanceof Date ? mp : vp(e) ? gp : Array.isArray(e) ? yp : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Ap : V)(t, e);
}
function xp(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Ho = 180 / Math.PI, Xs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Is(t, e, n, r, i, o) {
  var a, s, c;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * Ho,
    skewX: Math.atan(c) * Ho,
    scaleX: a,
    scaleY: s
  };
}
var tn;
function _p(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Xs : Is(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Mp(t) {
  return t == null || (tn || (tn = document.createElementNS("http://www.w3.org/2000/svg", "g")), tn.setAttribute("transform", t), !(t = tn.transform.baseVal.consolidate())) ? Xs : (t = t.matrix, Is(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Es(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var y = d.push("translate(", null, e, null, n);
      g.push({ i: y - 4, x: V(u, h) }, { i: y - 2, x: V(l, f) });
    } else (h || f) && d.push("translate(" + h + e + f + n);
  }
  function a(u, l, h, f) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: V(u, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function s(u, l, h, f) {
    u !== l ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: V(u, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function c(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var y = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: V(u, h) }, { i: y - 2, x: V(l, f) });
    } else (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(u, l) {
    var h = [], f = [];
    return u = t(u), l = t(l), o(u.translateX, u.translateY, l.translateX, l.translateY, h, f), a(u.rotate, l.rotate, h, f), s(u.skewX, l.skewX, h, f), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, f), u = l = null, function(d) {
      for (var g = -1, y = f.length, w; ++g < y; ) h[(w = f[g]).i] = w.x(d);
      return h.join("");
    };
  };
}
var Pp = Es(_p, "px, ", "px)", "deg)"), Op = Es(Mp, ", ", ")", ")"), re = 0, Ae = 0, he = 0, Bs = 1e3, Dn, be, Cn = 0, Gt = 0, Vn = 0, Se = typeof performance == "object" && performance.now ? performance : Date, Ds = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Pi() {
  return Gt || (Ds(Tp), Gt = Se.now() + Vn);
}
function Tp() {
  Gt = 0;
}
function Gn() {
  this._call = this._time = this._next = null;
}
Gn.prototype = Cs.prototype = {
  constructor: Gn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Pi() : +n) + (e == null ? 0 : +e), !this._next && be !== this && (be ? be._next = this : Dn = this, be = this), this._call = t, this._time = n, Jr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Jr());
  }
};
function Cs(t, e, n) {
  var r = new Gn();
  return r.restart(t, e, n), r;
}
function zp() {
  Pi(), ++re;
  for (var t = Dn, e; t; )
    (e = Gt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --re;
}
function Xo() {
  Gt = (Cn = Se.now()) + Vn, re = Ae = 0;
  try {
    zp();
  } finally {
    re = 0, jp(), Gt = 0;
  }
}
function kp() {
  var t = Se.now(), e = t - Cn;
  e > Bs && (Vn -= e, Cn = t);
}
function jp() {
  for (var t, e = Dn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Dn = n);
  be = t, Jr(r);
}
function Jr(t) {
  if (!re) {
    Ae && (Ae = clearTimeout(Ae));
    var e = t - Gt;
    e > 24 ? (t < 1 / 0 && (Ae = setTimeout(Xo, t - Se.now() - Vn)), he && (he = clearInterval(he))) : (he || (Cn = Se.now(), he = setInterval(kp, Bs)), re = 1, Ds(Xo));
  }
}
function Io(t, e, n) {
  var r = new Gn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Np = Ai("start", "end", "cancel", "interrupt"), Sp = [], Gs = 0, Eo = 1, Rr = 2, vn = 3, Bo = 4, Zr = 5, yn = 6;
function $n(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Hp(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Np,
    tween: Sp,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Gs
  });
}
function Oi(t, e) {
  var n = rt(t, e);
  if (n.state > Gs) throw new Error("too late; already scheduled");
  return n;
}
function ct(t, e) {
  var n = rt(t, e);
  if (n.state > vn) throw new Error("too late; already running");
  return n;
}
function rt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Hp(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Cs(o, 0, n.time);
  function o(u) {
    n.state = Eo, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var l, h, f, d;
    if (n.state !== Eo) return c();
    for (l in r)
      if (d = r[l], d.name === n.name) {
        if (d.state === vn) return Io(a);
        d.state === Bo ? (d.state = yn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = yn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (Io(function() {
      n.state === vn && (n.state = Bo, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Rr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Rr) {
      for (n.state = vn, i = new Array(f = n.tween.length), l = 0, h = -1; l < f; ++l)
        (d = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Zr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, l);
    n.state === Zr && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = yn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Xp(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > Rr && r.state < Zr, r.state = yn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function Ip(t) {
  return this.each(function() {
    Xp(this, t);
  });
}
function Ep(t, e) {
  var n, r;
  return function() {
    var i = ct(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Bp(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = ct(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    o.tween = i;
  };
}
function Dp(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = rt(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Ep : Bp)(n, t, e));
}
function Ti(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = ct(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return rt(i, r).value[e];
  };
}
function Ys(t, e) {
  var n;
  return (typeof e == "number" ? V : e instanceof Ct ? Bn : (n = Ct(e)) ? (e = n, Bn) : Hs)(t, e);
}
function Cp(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Gp(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Yp(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Lp(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Fp(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, s)));
  };
}
function Jp(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, s)));
  };
}
function Rp(t, e) {
  var n = Wn(t), r = n === "transform" ? Op : Ys;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Jp : Fp)(n, r, Ti(this, "attr." + t, e)) : e == null ? (n.local ? Gp : Cp)(n) : (n.local ? Lp : Yp)(n, r, e));
}
function Zp(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function qp(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Up(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && qp(t, o)), n;
  }
  return i._value = e, i;
}
function Qp(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Zp(t, o)), n;
  }
  return i._value = e, i;
}
function Kp(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Wn(t);
  return this.tween(n, (r.local ? Up : Qp)(r, e));
}
function Wp(t, e) {
  return function() {
    Oi(this, t).delay = +e.apply(this, arguments);
  };
}
function Vp(t, e) {
  return e = +e, function() {
    Oi(this, t).delay = e;
  };
}
function $p(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Wp : Vp)(e, t)) : rt(this.node(), e).delay;
}
function tg(t, e) {
  return function() {
    ct(this, t).duration = +e.apply(this, arguments);
  };
}
function eg(t, e) {
  return e = +e, function() {
    ct(this, t).duration = e;
  };
}
function ng(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? tg : eg)(e, t)) : rt(this.node(), e).duration;
}
function rg(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    ct(this, t).ease = e;
  };
}
function ig(t) {
  var e = this._id;
  return arguments.length ? this.each(rg(e, t)) : rt(this.node(), e).ease;
}
function og(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ct(this, t).ease = n;
  };
}
function ag(t) {
  if (typeof t != "function") throw new Error();
  return this.each(og(this._id, t));
}
function sg(t) {
  typeof t != "function" && (t = bs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new yt(r, this._parents, this._name, this._id);
}
function ug(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var c = e[s], u = n[s], l = c.length, h = a[s] = new Array(l), f, d = 0; d < l; ++d)
      (f = c[d] || u[d]) && (h[d] = f);
  for (; s < r; ++s)
    a[s] = e[s];
  return new yt(a, this._parents, this._name, this._id);
}
function cg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function lg(t, e, n) {
  var r, i, o = cg(e) ? Oi : ct;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function fg(t, e) {
  var n = this._id;
  return arguments.length < 2 ? rt(this.node(), n).on.on(t) : this.each(lg(n, t, e));
}
function hg(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function dg() {
  return this.on("end.remove", hg(this._id));
}
function pg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = bi(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], c = s.length, u = o[a] = new Array(c), l, h, f = 0; f < c; ++f)
      (l = s[f]) && (h = t.call(l, l.__data__, f, s)) && ("__data__" in l && (h.__data__ = l.__data__), u[f] = h, $n(u[f], e, n, f, u, rt(l, n)));
  return new yt(o, this._parents, e, n);
}
function gg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = As(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, h = 0; h < u; ++h)
      if (l = c[h]) {
        for (var f = t.call(l, l.__data__, h, c), d, g = rt(l, n), y = 0, w = f.length; y < w; ++y)
          (d = f[y]) && $n(d, e, n, y, f, g);
        o.push(f), a.push(l);
      }
  return new yt(o, a, e, n);
}
var vg = Ge.prototype.constructor;
function yg() {
  return new vg(this._groups, this._parents);
}
function mg(t, e) {
  var n, r, i;
  return function() {
    var o = ne(this, t), a = (this.style.removeProperty(t), ne(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function Ls(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ag(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = ne(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function bg(t, e, n) {
  var r, i, o;
  return function() {
    var a = ne(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), ne(this, t))), a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, s));
  };
}
function wg(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var c = ct(this, t), u = c.on, l = c.value[o] == null ? s || (s = Ls(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(a, i = l), c.on = r;
  };
}
function xg(t, e, n) {
  var r = (t += "") == "transform" ? Pp : Ys;
  return e == null ? this.styleTween(t, mg(t, r)).on("end.style." + t, Ls(t)) : typeof e == "function" ? this.styleTween(t, bg(t, r, Ti(this, "style." + t, e))).each(wg(this._id, t)) : this.styleTween(t, Ag(t, r, e), n).on("end.style." + t, null);
}
function _g(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Mg(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && _g(t, a, n)), r;
  }
  return o._value = e, o;
}
function Pg(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Mg(t, e, n ?? ""));
}
function Og(t) {
  return function() {
    this.textContent = t;
  };
}
function Tg(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function zg(t) {
  return this.tween("text", typeof t == "function" ? Tg(Ti(this, "text", t)) : Og(t == null ? "" : t + ""));
}
function kg(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function jg(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && kg(i)), e;
  }
  return r._value = t, r;
}
function Ng(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, jg(t));
}
function Sg() {
  for (var t = this._name, e = this._id, n = Fs(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      if (c = a[u]) {
        var l = rt(c, e);
        $n(c, t, n, u, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new yt(r, this._parents, t, n);
}
function Hg() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, c = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var u = ct(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && o();
  });
}
var Xg = 0;
function yt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Fs() {
  return ++Xg;
}
var ht = Ge.prototype;
yt.prototype = {
  constructor: yt,
  select: pg,
  selectAll: gg,
  selectChild: ht.selectChild,
  selectChildren: ht.selectChildren,
  filter: sg,
  merge: ug,
  selection: yg,
  transition: Sg,
  call: ht.call,
  nodes: ht.nodes,
  node: ht.node,
  size: ht.size,
  empty: ht.empty,
  each: ht.each,
  on: fg,
  attr: Rp,
  attrTween: Kp,
  style: xg,
  styleTween: Pg,
  text: zg,
  textTween: Ng,
  remove: dg,
  tween: Dp,
  delay: $p,
  duration: ng,
  ease: ig,
  easeVarying: ag,
  end: Hg,
  [Symbol.iterator]: ht[Symbol.iterator]
};
function Ig(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Eg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ig
};
function Bg(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Dg(t) {
  var e, n;
  t instanceof yt ? (e = t._id, t = t._name) : (e = Fs(), (n = Eg).time = Pi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && $n(c, t, e, u, a, n || Bg(c, e));
  return new yt(r, this._parents, t, e);
}
Ge.prototype.interrupt = Ip;
Ge.prototype.transition = Dg;
const qr = Math.PI, Ur = 2 * qr, Nt = 1e-6, Cg = Ur - Nt;
function Js(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Gg(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Js;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Rs {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Js : Gg(e);
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
  bezierCurveTo(e, n, r, i, o, a) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(e, n, r, i, o) {
    if (e = +e, n = +n, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, c = r - e, u = i - n, l = a - e, h = s - n, f = l * l + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (f > Nt) if (!(Math.abs(h * c - u * l) > Nt) || !o)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - a, g = i - s, y = c * c + u * u, w = d * d + g * g, _ = Math.sqrt(y), p = Math.sqrt(f), M = o * Math.tan((qr - Math.acos((y + f - w) / (2 * _ * p))) / 2), v = M / p, A = M / _;
      Math.abs(v - 1) > Nt && this._append`L${e + v * l},${n + v * h}`, this._append`A${o},${o},0,0,${+(h * d > l * g)},${this._x1 = e + A * c},${this._y1 = n + A * u}`;
    }
  }
  arc(e, n, r, i, o, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), c = r * Math.sin(i), u = e + s, l = n + c, h = 1 ^ a, f = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > Nt || Math.abs(this._y1 - l) > Nt) && this._append`L${u},${l}`, r && (f < 0 && (f = f % Ur + Ur), f > Cg ? this._append`A${r},${r},0,1,${h},${e - s},${n - c}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = l}` : f > Nt && this._append`A${r},${r},0,${+(f >= qr)},${h},${this._x1 = e + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function it() {
  return new Rs();
}
it.prototype = Rs.prototype;
function Yg(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Yn(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function ie(t) {
  return t = Yn(Math.abs(t)), t ? t[1] : NaN;
}
function Lg(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), o.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function Fg(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Jg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ln(t) {
  if (!(e = Jg.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new zi({
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
Ln.prototype = zi.prototype;
function zi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
zi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Rg(t) {
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
var Zs;
function Zg(t, e) {
  var n = Yn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], o = i - (Zs = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Yn(t, Math.max(0, e + o - 1))[0];
}
function Do(t, e) {
  var n = Yn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Co = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Yg,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Do(t * 100, e),
  r: Do,
  s: Zg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Go(t) {
  return t;
}
var Yo = Array.prototype.map, Lo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function qg(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Go : Lg(Yo.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Go : Fg(Yo.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Ln(h);
    var f = h.fill, d = h.align, g = h.sign, y = h.symbol, w = h.zero, _ = h.width, p = h.comma, M = h.precision, v = h.trim, A = h.type;
    A === "n" ? (p = !0, A = "g") : Co[A] || (M === void 0 && (M = 12), v = !0, A = "g"), (w || f === "0" && d === "=") && (w = !0, f = "0", d = "=");
    var j = y === "$" ? n : y === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", N = y === "$" ? r : /[%p]/.test(A) ? a : "", X = Co[A], R = /[defgprs%]/.test(A);
    M = M === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function Z(m) {
      var I = j, T = N, E, jt, Y;
      if (A === "c")
        T = X(m) + T, m = "";
      else {
        m = +m;
        var q = m < 0 || 1 / m < 0;
        if (m = isNaN(m) ? c : X(Math.abs(m), M), v && (m = Rg(m)), q && +m == 0 && g !== "+" && (q = !1), I = (q ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + I, T = (A === "s" ? Lo[8 + Zs / 3] : "") + T + (q && g === "(" ? ")" : ""), R) {
          for (E = -1, jt = m.length; ++E < jt; )
            if (Y = m.charCodeAt(E), 48 > Y || Y > 57) {
              T = (Y === 46 ? i + m.slice(E + 1) : m.slice(E)) + T, m = m.slice(0, E);
              break;
            }
        }
      }
      p && !w && (m = e(m, 1 / 0));
      var K = I.length + m.length + T.length, S = K < _ ? new Array(_ - K + 1).join(f) : "";
      switch (p && w && (m = e(S + m, S.length ? _ - T.length : 1 / 0), S = ""), d) {
        case "<":
          m = I + m + T + S;
          break;
        case "=":
          m = I + S + m + T;
          break;
        case "^":
          m = S.slice(0, K = S.length >> 1) + I + m + T + S.slice(K);
          break;
        default:
          m = S + I + m + T;
          break;
      }
      return o(m);
    }
    return Z.toString = function() {
      return h + "";
    }, Z;
  }
  function l(h, f) {
    var d = u((h = Ln(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(ie(f) / 3))) * 3, y = Math.pow(10, -g), w = Lo[8 + g / 3];
    return function(_) {
      return d(y * _) + w;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var en, tr, qs;
Ug({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ug(t) {
  return en = qg(t), tr = en.format, qs = en.formatPrefix, en;
}
function Qg(t) {
  return Math.max(0, -ie(Math.abs(t)));
}
function Kg(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ie(e) / 3))) * 3 - ie(Math.abs(t)));
}
function Wg(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, ie(e) - ie(t)) + 1;
}
function Vg(t, e) {
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
function $g(t) {
  return function() {
    return t;
  };
}
function tv(t) {
  return +t;
}
var Fo = [0, 1];
function Qt(t) {
  return t;
}
function Qr(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : $g(isNaN(e) ? NaN : 0.5);
}
function ev(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function nv(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = Qr(i, r), o = n(a, o)) : (r = Qr(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function rv(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = Qr(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var c = rd(t, s, 1, r) - 1;
    return o[c](i[c](s));
  };
}
function iv(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ov() {
  var t = Fo, e = Fo, n = Mi, r, i, o, a = Qt, s, c, u;
  function l() {
    var f = Math.min(t.length, e.length);
    return a !== Qt && (a = ev(t[0], t[f - 1])), s = f > 2 ? rv : nv, c = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (c || (c = s(t.map(r), e, n)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = s(e, t.map(r), V)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, tv), l()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), l()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = xp, l();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Qt, l()) : a !== Qt;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, l()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, d) {
    return r = f, i = d, l();
  };
}
function av() {
  return ov()(Qt, Qt);
}
function sv(t, e, n, r) {
  var i = ud(t, e, n), o;
  switch (r = Ln(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = Kg(i, a)) && (r.precision = o), qs(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Wg(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Qg(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return tr(r);
}
function uv(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return sd(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return sv(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], s = r[o], c, u, l = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); l-- > 0; ) {
      if (u = Cr(a, s, n), u === c)
        return r[i] = a, r[o] = s, e(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function oe() {
  var t = av();
  return t.copy = function() {
    return iv(t, oe());
  }, Vg.apply(t, arguments), uv(t);
}
function we(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
we.prototype = {
  constructor: we,
  scale: function(t) {
    return t === 1 ? this : new we(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new we(this.k, this.x + this.k * t, this.y + this.k * e);
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
we.prototype;
var Us = typeof global == "object" && global && global.Object === Object && global, cv = typeof self == "object" && self && self.Object === Object && self, At = Us || cv || Function("return this")(), st = At.Symbol, Qs = Object.prototype, lv = Qs.hasOwnProperty, fv = Qs.toString, de = st ? st.toStringTag : void 0;
function hv(t) {
  var e = lv.call(t, de), n = t[de];
  try {
    t[de] = void 0;
    var r = !0;
  } catch {
  }
  var i = fv.call(t);
  return r && (e ? t[de] = n : delete t[de]), i;
}
var dv = Object.prototype, pv = dv.toString;
function gv(t) {
  return pv.call(t);
}
var vv = "[object Null]", yv = "[object Undefined]", Jo = st ? st.toStringTag : void 0;
function ue(t) {
  return t == null ? t === void 0 ? yv : vv : Jo && Jo in Object(t) ? hv(t) : gv(t);
}
function ae(t) {
  return t != null && typeof t == "object";
}
var mv = "[object Symbol]";
function er(t) {
  return typeof t == "symbol" || ae(t) && ue(t) == mv;
}
function Ks(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var et = Array.isArray, Ro = st ? st.prototype : void 0, Zo = Ro ? Ro.toString : void 0;
function Ws(t) {
  if (typeof t == "string")
    return t;
  if (et(t))
    return Ks(t, Ws) + "";
  if (er(t))
    return Zo ? Zo.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Av = /\s/;
function bv(t) {
  for (var e = t.length; e-- && Av.test(t.charAt(e)); )
    ;
  return e;
}
var wv = /^\s+/;
function xv(t) {
  return t && t.slice(0, bv(t) + 1).replace(wv, "");
}
function se(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var qo = NaN, _v = /^[-+]0x[0-9a-f]+$/i, Mv = /^0b[01]+$/i, Pv = /^0o[0-7]+$/i, Ov = parseInt;
function Tv(t) {
  if (typeof t == "number")
    return t;
  if (er(t))
    return qo;
  if (se(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = se(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = xv(t);
  var n = Mv.test(t);
  return n || Pv.test(t) ? Ov(t.slice(2), n ? 2 : 8) : _v.test(t) ? qo : +t;
}
var zv = 1 / 0, kv = 17976931348623157e292;
function xr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Tv(t), t === zv || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * kv;
  }
  return t === t ? t : 0;
}
function jv(t) {
  return t;
}
var Nv = "[object AsyncFunction]", Sv = "[object Function]", Hv = "[object GeneratorFunction]", Xv = "[object Proxy]";
function Vs(t) {
  if (!se(t))
    return !1;
  var e = ue(t);
  return e == Sv || e == Hv || e == Nv || e == Xv;
}
var _r = At["__core-js_shared__"], Uo = function() {
  var t = /[^.]+$/.exec(_r && _r.keys && _r.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Iv(t) {
  return !!Uo && Uo in t;
}
var Ev = Function.prototype, Bv = Ev.toString;
function Jt(t) {
  if (t != null) {
    try {
      return Bv.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Dv = /[\\^$.*+?()[\]{}|]/g, Cv = /^\[object .+?Constructor\]$/, Gv = Function.prototype, Yv = Object.prototype, Lv = Gv.toString, Fv = Yv.hasOwnProperty, Jv = RegExp(
  "^" + Lv.call(Fv).replace(Dv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Rv(t) {
  if (!se(t) || Iv(t))
    return !1;
  var e = Vs(t) ? Jv : Cv;
  return e.test(Jt(t));
}
function Zv(t, e) {
  return t == null ? void 0 : t[e];
}
function ce(t, e) {
  var n = Zv(t, e);
  return Rv(n) ? n : void 0;
}
var Kr = ce(At, "WeakMap"), qv = 9007199254740991, Uv = /^(?:0|[1-9]\d*)$/;
function ki(t, e) {
  var n = typeof t;
  return e = e ?? qv, !!e && (n == "number" || n != "symbol" && Uv.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function ji(t, e) {
  return t === e || t !== t && e !== e;
}
var Qv = 9007199254740991;
function Ni(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Qv;
}
function nr(t) {
  return t != null && Ni(t.length) && !Vs(t);
}
function Kv(t, e, n) {
  if (!se(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? nr(n) && ki(e, n.length) : r == "string" && e in n) ? ji(n[e], t) : !1;
}
var Wv = Object.prototype;
function Vv(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Wv;
  return t === n;
}
function $v(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var ty = "[object Arguments]";
function Qo(t) {
  return ae(t) && ue(t) == ty;
}
var $s = Object.prototype, ey = $s.hasOwnProperty, ny = $s.propertyIsEnumerable, Si = Qo(/* @__PURE__ */ function() {
  return arguments;
}()) ? Qo : function(t) {
  return ae(t) && ey.call(t, "callee") && !ny.call(t, "callee");
};
function ry() {
  return !1;
}
var tu = typeof exports == "object" && exports && !exports.nodeType && exports, Ko = tu && typeof module == "object" && module && !module.nodeType && module, iy = Ko && Ko.exports === tu, Wo = iy ? At.Buffer : void 0, oy = Wo ? Wo.isBuffer : void 0, Wr = oy || ry, ay = "[object Arguments]", sy = "[object Array]", uy = "[object Boolean]", cy = "[object Date]", ly = "[object Error]", fy = "[object Function]", hy = "[object Map]", dy = "[object Number]", py = "[object Object]", gy = "[object RegExp]", vy = "[object Set]", yy = "[object String]", my = "[object WeakMap]", Ay = "[object ArrayBuffer]", by = "[object DataView]", wy = "[object Float32Array]", xy = "[object Float64Array]", _y = "[object Int8Array]", My = "[object Int16Array]", Py = "[object Int32Array]", Oy = "[object Uint8Array]", Ty = "[object Uint8ClampedArray]", zy = "[object Uint16Array]", ky = "[object Uint32Array]", z = {};
z[wy] = z[xy] = z[_y] = z[My] = z[Py] = z[Oy] = z[Ty] = z[zy] = z[ky] = !0;
z[ay] = z[sy] = z[Ay] = z[uy] = z[by] = z[cy] = z[ly] = z[fy] = z[hy] = z[dy] = z[py] = z[gy] = z[vy] = z[yy] = z[my] = !1;
function jy(t) {
  return ae(t) && Ni(t.length) && !!z[ue(t)];
}
function Ny(t) {
  return function(e) {
    return t(e);
  };
}
var eu = typeof exports == "object" && exports && !exports.nodeType && exports, xe = eu && typeof module == "object" && module && !module.nodeType && module, Sy = xe && xe.exports === eu, Mr = Sy && Us.process, Vo = function() {
  try {
    var t = xe && xe.require && xe.require("util").types;
    return t || Mr && Mr.binding && Mr.binding("util");
  } catch {
  }
}(), $o = Vo && Vo.isTypedArray, nu = $o ? Ny($o) : jy, Hy = Object.prototype, Xy = Hy.hasOwnProperty;
function Iy(t, e) {
  var n = et(t), r = !n && Si(t), i = !n && !r && Wr(t), o = !n && !r && !i && nu(t), a = n || r || i || o, s = a ? $v(t.length, String) : [], c = s.length;
  for (var u in t)
    Xy.call(t, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ki(u, c))) && s.push(u);
  return s;
}
function Ey(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var By = Ey(Object.keys, Object), Dy = Object.prototype, Cy = Dy.hasOwnProperty;
function Gy(t) {
  if (!Vv(t))
    return By(t);
  var e = [];
  for (var n in Object(t))
    Cy.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Hi(t) {
  return nr(t) ? Iy(t) : Gy(t);
}
var Yy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ly = /^\w*$/;
function Xi(t, e) {
  if (et(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || er(t) ? !0 : Ly.test(t) || !Yy.test(t) || e != null && t in Object(e);
}
var He = ce(Object, "create");
function Fy() {
  this.__data__ = He ? He(null) : {}, this.size = 0;
}
function Jy(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Ry = "__lodash_hash_undefined__", Zy = Object.prototype, qy = Zy.hasOwnProperty;
function Uy(t) {
  var e = this.__data__;
  if (He) {
    var n = e[t];
    return n === Ry ? void 0 : n;
  }
  return qy.call(e, t) ? e[t] : void 0;
}
var Qy = Object.prototype, Ky = Qy.hasOwnProperty;
function Wy(t) {
  var e = this.__data__;
  return He ? e[t] !== void 0 : Ky.call(e, t);
}
var Vy = "__lodash_hash_undefined__";
function $y(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = He && e === void 0 ? Vy : e, this;
}
function Yt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Yt.prototype.clear = Fy;
Yt.prototype.delete = Jy;
Yt.prototype.get = Uy;
Yt.prototype.has = Wy;
Yt.prototype.set = $y;
function t1() {
  this.__data__ = [], this.size = 0;
}
function rr(t, e) {
  for (var n = t.length; n--; )
    if (ji(t[n][0], e))
      return n;
  return -1;
}
var e1 = Array.prototype, n1 = e1.splice;
function r1(t) {
  var e = this.__data__, n = rr(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : n1.call(e, n, 1), --this.size, !0;
}
function i1(t) {
  var e = this.__data__, n = rr(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function o1(t) {
  return rr(this.__data__, t) > -1;
}
function a1(t, e) {
  var n = this.__data__, r = rr(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function bt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = t1;
bt.prototype.delete = r1;
bt.prototype.get = i1;
bt.prototype.has = o1;
bt.prototype.set = a1;
var Xe = ce(At, "Map");
function s1() {
  this.size = 0, this.__data__ = {
    hash: new Yt(),
    map: new (Xe || bt)(),
    string: new Yt()
  };
}
function u1(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ir(t, e) {
  var n = t.__data__;
  return u1(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function c1(t) {
  var e = ir(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function l1(t) {
  return ir(this, t).get(t);
}
function f1(t) {
  return ir(this, t).has(t);
}
function h1(t, e) {
  var n = ir(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function wt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
wt.prototype.clear = s1;
wt.prototype.delete = c1;
wt.prototype.get = l1;
wt.prototype.has = f1;
wt.prototype.set = h1;
var d1 = "Expected a function";
function Ii(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(d1);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return n.cache = o.set(i, a) || o, a;
  };
  return n.cache = new (Ii.Cache || wt)(), n;
}
Ii.Cache = wt;
var p1 = 500;
function g1(t) {
  var e = Ii(t, function(r) {
    return n.size === p1 && n.clear(), r;
  }), n = e.cache;
  return e;
}
var v1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, y1 = /\\(\\)?/g, m1 = g1(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(v1, function(n, r, i, o) {
    e.push(i ? o.replace(y1, "$1") : r || n);
  }), e;
});
function A1(t) {
  return t == null ? "" : Ws(t);
}
function ru(t, e) {
  return et(t) ? t : Xi(t, e) ? [t] : m1(A1(t));
}
function or(t) {
  if (typeof t == "string" || er(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function iu(t, e) {
  e = ru(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[or(e[n++])];
  return n && n == r ? t : void 0;
}
function b1(t, e, n) {
  var r = t == null ? void 0 : iu(t, e);
  return r === void 0 ? n : r;
}
function ou(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var ta = st ? st.isConcatSpreadable : void 0;
function w1(t) {
  return et(t) || Si(t) || !!(ta && t && t[ta]);
}
function x1(t, e, n, r, i) {
  var o = -1, a = t.length;
  for (n || (n = w1), i || (i = []); ++o < a; ) {
    var s = t[o];
    n(s) ? ou(i, s) : i[i.length] = s;
  }
  return i;
}
function _1(t) {
  var e = t == null ? 0 : t.length;
  return e ? x1(t) : [];
}
function M1() {
  this.__data__ = new bt(), this.size = 0;
}
function P1(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function O1(t) {
  return this.__data__.get(t);
}
function T1(t) {
  return this.__data__.has(t);
}
var z1 = 200;
function k1(t, e) {
  var n = this.__data__;
  if (n instanceof bt) {
    var r = n.__data__;
    if (!Xe || r.length < z1 - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new wt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function pt(t) {
  var e = this.__data__ = new bt(t);
  this.size = e.size;
}
pt.prototype.clear = M1;
pt.prototype.delete = P1;
pt.prototype.get = O1;
pt.prototype.has = T1;
pt.prototype.set = k1;
function j1(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (o[i++] = a);
  }
  return o;
}
function N1() {
  return [];
}
var S1 = Object.prototype, H1 = S1.propertyIsEnumerable, ea = Object.getOwnPropertySymbols, X1 = ea ? function(t) {
  return t == null ? [] : (t = Object(t), j1(ea(t), function(e) {
    return H1.call(t, e);
  }));
} : N1;
function I1(t, e, n) {
  var r = e(t);
  return et(t) ? r : ou(r, n(t));
}
function na(t) {
  return I1(t, Hi, X1);
}
var Vr = ce(At, "DataView"), $r = ce(At, "Promise"), ti = ce(At, "Set"), ra = "[object Map]", E1 = "[object Object]", ia = "[object Promise]", oa = "[object Set]", aa = "[object WeakMap]", sa = "[object DataView]", B1 = Jt(Vr), D1 = Jt(Xe), C1 = Jt($r), G1 = Jt(ti), Y1 = Jt(Kr), Ot = ue;
(Vr && Ot(new Vr(new ArrayBuffer(1))) != sa || Xe && Ot(new Xe()) != ra || $r && Ot($r.resolve()) != ia || ti && Ot(new ti()) != oa || Kr && Ot(new Kr()) != aa) && (Ot = function(t) {
  var e = ue(t), n = e == E1 ? t.constructor : void 0, r = n ? Jt(n) : "";
  if (r)
    switch (r) {
      case B1:
        return sa;
      case D1:
        return ra;
      case C1:
        return ia;
      case G1:
        return oa;
      case Y1:
        return aa;
    }
  return e;
});
var ua = At.Uint8Array, L1 = "__lodash_hash_undefined__";
function F1(t) {
  return this.__data__.set(t, L1), this;
}
function J1(t) {
  return this.__data__.has(t);
}
function Fn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new wt(); ++e < n; )
    this.add(t[e]);
}
Fn.prototype.add = Fn.prototype.push = F1;
Fn.prototype.has = J1;
function R1(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Z1(t, e) {
  return t.has(e);
}
var q1 = 1, U1 = 2;
function au(t, e, n, r, i, o) {
  var a = n & q1, s = t.length, c = e.length;
  if (s != c && !(a && c > s))
    return !1;
  var u = o.get(t), l = o.get(e);
  if (u && l)
    return u == e && l == t;
  var h = -1, f = !0, d = n & U1 ? new Fn() : void 0;
  for (o.set(t, e), o.set(e, t); ++h < s; ) {
    var g = t[h], y = e[h];
    if (r)
      var w = a ? r(y, g, h, e, t, o) : r(g, y, h, t, e, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!R1(e, function(_, p) {
        if (!Z1(d, p) && (g === _ || i(g, _, n, r, o)))
          return d.push(p);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === y || i(g, y, n, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), f;
}
function Q1(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function K1(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var W1 = 1, V1 = 2, $1 = "[object Boolean]", tm = "[object Date]", em = "[object Error]", nm = "[object Map]", rm = "[object Number]", im = "[object RegExp]", om = "[object Set]", am = "[object String]", sm = "[object Symbol]", um = "[object ArrayBuffer]", cm = "[object DataView]", ca = st ? st.prototype : void 0, Pr = ca ? ca.valueOf : void 0;
function lm(t, e, n, r, i, o, a) {
  switch (n) {
    case cm:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case um:
      return !(t.byteLength != e.byteLength || !o(new ua(t), new ua(e)));
    case $1:
    case tm:
    case rm:
      return ji(+t, +e);
    case em:
      return t.name == e.name && t.message == e.message;
    case im:
    case am:
      return t == e + "";
    case nm:
      var s = Q1;
    case om:
      var c = r & W1;
      if (s || (s = K1), t.size != e.size && !c)
        return !1;
      var u = a.get(t);
      if (u)
        return u == e;
      r |= V1, a.set(t, e);
      var l = au(s(t), s(e), r, i, o, a);
      return a.delete(t), l;
    case sm:
      if (Pr)
        return Pr.call(t) == Pr.call(e);
  }
  return !1;
}
var fm = 1, hm = Object.prototype, dm = hm.hasOwnProperty;
function pm(t, e, n, r, i, o) {
  var a = n & fm, s = na(t), c = s.length, u = na(e), l = u.length;
  if (c != l && !a)
    return !1;
  for (var h = c; h--; ) {
    var f = s[h];
    if (!(a ? f in e : dm.call(e, f)))
      return !1;
  }
  var d = o.get(t), g = o.get(e);
  if (d && g)
    return d == e && g == t;
  var y = !0;
  o.set(t, e), o.set(e, t);
  for (var w = a; ++h < c; ) {
    f = s[h];
    var _ = t[f], p = e[f];
    if (r)
      var M = a ? r(p, _, f, e, t, o) : r(_, p, f, t, e, o);
    if (!(M === void 0 ? _ === p || i(_, p, n, r, o) : M)) {
      y = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (y && !w) {
    var v = t.constructor, A = e.constructor;
    v != A && "constructor" in t && "constructor" in e && !(typeof v == "function" && v instanceof v && typeof A == "function" && A instanceof A) && (y = !1);
  }
  return o.delete(t), o.delete(e), y;
}
var gm = 1, la = "[object Arguments]", fa = "[object Array]", nn = "[object Object]", vm = Object.prototype, ha = vm.hasOwnProperty;
function ym(t, e, n, r, i, o) {
  var a = et(t), s = et(e), c = a ? fa : Ot(t), u = s ? fa : Ot(e);
  c = c == la ? nn : c, u = u == la ? nn : u;
  var l = c == nn, h = u == nn, f = c == u;
  if (f && Wr(t)) {
    if (!Wr(e))
      return !1;
    a = !0, l = !1;
  }
  if (f && !l)
    return o || (o = new pt()), a || nu(t) ? au(t, e, n, r, i, o) : lm(t, e, c, n, r, i, o);
  if (!(n & gm)) {
    var d = l && ha.call(t, "__wrapped__"), g = h && ha.call(e, "__wrapped__");
    if (d || g) {
      var y = d ? t.value() : t, w = g ? e.value() : e;
      return o || (o = new pt()), i(y, w, n, r, o);
    }
  }
  return f ? (o || (o = new pt()), pm(t, e, n, r, i, o)) : !1;
}
function Ei(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !ae(t) && !ae(e) ? t !== t && e !== e : ym(t, e, n, r, Ei, i);
}
var mm = 1, Am = 2;
function bm(t, e, n, r) {
  var i = n.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = n[i];
    var s = a[0], c = t[s], u = a[1];
    if (a[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var l = new pt(), h;
      if (!(h === void 0 ? Ei(u, c, mm | Am, r, l) : h))
        return !1;
    }
  }
  return !0;
}
function su(t) {
  return t === t && !se(t);
}
function wm(t) {
  for (var e = Hi(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, su(i)];
  }
  return e;
}
function uu(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function xm(t) {
  var e = wm(t);
  return e.length == 1 && e[0][2] ? uu(e[0][0], e[0][1]) : function(n) {
    return n === t || bm(n, t, e);
  };
}
function _m(t, e) {
  return t != null && e in Object(t);
}
function Mm(t, e, n) {
  e = ru(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var a = or(e[r]);
    if (!(o = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Ni(i) && ki(a, i) && (et(t) || Si(t)));
}
function Pm(t, e) {
  return t != null && Mm(t, e, _m);
}
var Om = 1, Tm = 2;
function zm(t, e) {
  return Xi(t) && su(e) ? uu(or(t), e) : function(n) {
    var r = b1(n, t);
    return r === void 0 && r === e ? Pm(n, t) : Ei(e, r, Om | Tm);
  };
}
function km(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function jm(t) {
  return function(e) {
    return iu(e, t);
  };
}
function Nm(t) {
  return Xi(t) ? km(or(t)) : jm(t);
}
function Sm(t) {
  return typeof t == "function" ? t : t == null ? jv : typeof t == "object" ? et(t) ? zm(t[0], t[1]) : xm(t) : Nm(t);
}
function Hm(t) {
  return function(e, n, r) {
    for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
      var c = a[++i];
      if (n(o[c], c, o) === !1)
        break;
    }
    return e;
  };
}
var Xm = Hm();
function Im(t, e) {
  return t && Xm(t, e, Hi);
}
function Em(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!nr(n))
      return t(n, r);
    for (var i = n.length, o = -1, a = Object(n); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return n;
  };
}
var Bm = Em(Im);
function Dm(t, e) {
  var n = -1, r = nr(t) ? Array(t.length) : [];
  return Bm(t, function(i, o, a) {
    r[++n] = e(i, o, a);
  }), r;
}
function da(t, e) {
  var n = et(t) ? Ks : Dm;
  return n(t, Sm(e));
}
var Cm = Math.ceil, Gm = Math.max;
function Ym(t, e, n, r) {
  for (var i = -1, o = Gm(Cm((e - t) / (n || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += n;
  return a;
}
function Lm(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && Kv(e, n, r) && (n = r = void 0), e = xr(e), n === void 0 ? (n = e, e = 0) : n = xr(n), r = r === void 0 ? e < n ? 1 : -1 : xr(r), Ym(e, n, r);
  };
}
var Fm = Lm();
const Jm = (t, e, n = 12, r = 12) => {
  const i = oe().domain([0, n]).range([0, t]), o = oe().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return Fm((n + 1) * (r + 1)).map(function(a) {
        return { m: a % (n + 1), n: Math.floor(a / (n + 1)), x: i(a % (n + 1)), y: o(Math.floor(a / (n + 1))) };
      });
    },
    position: function(a, s) {
      typeof a == "number" && (a = [a]), typeof s == "number" && (s = [s]);
      const c = _1(da(s, function(u) {
        return da(
          a,
          function(l) {
            return { x: i(l), y: o(u) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, Rm = "_widget_9wct0_49", Zm = "_label_9wct0_69", qm = "_lit_9wct0_74", Um = "_button_9wct0_78", Qm = "_symbol_9wct0_78", Km = "_radio_9wct0_79", Wm = "_radiobutton_9wct0_79", Vm = "_selected_9wct0_85", $m = "_toggle_9wct0_86", tA = "_slider_9wct0_95", eA = "_track_9wct0_95", nA = "_track_overlay_9wct0_100", rA = "_handle_9wct0_108", x = {
  widget: Rm,
  label: Zm,
  lit: qm,
  button: Um,
  symbol: Qm,
  radio: Km,
  radiobutton: Wm,
  selected: Vm,
  toggle: $m,
  slider: tA,
  track: eA,
  track_overlay: nA,
  handle: rA
}, ar = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = t.length;
  let n = "";
  for (let r = 0; r < 10; ++r)
    n += t[Math.floor(Math.random() * e)];
  return n;
}, Bi = (t, e, n) => {
  var r, i, o, a;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, iA = (t = 1) => {
  const e = it();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, oA = (t = 1) => {
  const e = it(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, aA = (t = 1) => {
  const e = it();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, sA = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = it();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, uA = (t = 1) => {
  const e = it(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, o = 0.5, a = 0.6, s = 0.6, c = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), e.arc(0, 0, t * (1 - o), r, i, !1), e.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), e.closePath(), e.toString();
}, cA = (t = 1) => {
  const e = it(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, o = n, a = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, a), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, o, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, lA = (t = 1) => {
  const e = it(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), e.arc(0, 0, t * (1 - o), i, r, !0), e.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var c = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), e.closePath(), e.toString();
}, fA = (t = 1) => {
  var e = it(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, hA = (t = 1) => {
  const e = it(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, ei = (t) => {
  switch (t) {
    case "play":
      return iA;
    case "forward":
      return oA;
    case "back":
      return aA;
    case "pause":
      return sA;
    case "reload":
      return uA;
    case "capture":
      return cA;
    case "rewind":
      return lA;
    case "stop":
      return fA;
    case "push":
      return hA;
  }
}, Di = () => {
  const t = "button";
  var e = ar(), n = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", c = null, u = function(f) {
  }, l = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    symbolsize: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    shape: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? o.x : (o.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? o.y : (o.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? s : (s = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return u = f, this;
      u(f);
    },
    actions: function(f) {
      return typeof f > "u" ? l : (l = f, this);
    },
    value: function(f) {
      return typeof f > "u" ? h : (h = f, this);
    },
    click: function() {
      h = (h + 1) % l.length, u(), H(this.parentNode).select("." + x.symbol).attr("d", ei(l[h])(r * n));
    },
    press: function(f) {
      h = (h + 1) % l.length, u(), f.select("#button_" + e).select("." + x.symbol).attr("d", ei(l[h])(r * n));
    }
  };
}, dA = () => {
  const t = "slider", e = tr(".3f");
  var n = ar(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, c = "top-left", u = 4, l = null, h = function(p) {
  }, f = function(p) {
  }, d = [0, 1], g = 0, y = null, w = oe().domain(d).range([0, r]).clamp(!0);
  const _ = function(p, M, v = d) {
    const A = p.select("#slider_" + n);
    w.domain(v), g = M, A.selectAll("." + x.handle).transition().attr("cx", w(M)), a && A.select("." + x.label).text(y + " = " + e(g)), h(), f();
  };
  return {
    type: t,
    scale: w,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? y : (y = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    girth: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    knob: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    show: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? s.x : (s.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? s.y : (s.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    labelpadding: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return h = p, this;
      h(p);
    },
    update_end: function(p) {
      if (typeof p == "function")
        return f = p, this;
      f(p);
    },
    range: function(p) {
      return typeof p > "u" ? d : (d = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? g : (g = p, this);
    },
    reset: _,
    click: _
  };
}, pA = () => {
  const t = "toggle";
  var e = ar(), n = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(u) {
  }, c = 0;
  return {
    type: t,
    id: function(u) {
      return typeof u > "u" ? e : (e = u, this);
    },
    size: function(u) {
      return typeof u > "u" ? n : (n = u, this);
    },
    position: function(u) {
      return typeof u > "u" ? r : (r = u, this);
    },
    x: function(u) {
      return typeof u > "u" ? r.x : (r.x = u, this);
    },
    y: function(u) {
      return typeof u > "u" ? r.y : (r.y = u, this);
    },
    label: function(u) {
      return typeof u > "u" ? i : (i = u, this);
    },
    labelposition: function(u) {
      return typeof u > "u" ? o : (o = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? a : (a = u, this);
    },
    update: function(u) {
      if (typeof u == "function")
        return s = u, this;
      s(u);
    },
    value: function(u) {
      return typeof u > "u" ? c : (c = u, this);
    },
    click: function() {
      c = !c;
      const u = H(this.parentNode);
      u.select("." + x.handle).transition().attr("cx", c ? 2 * n : 0), u.classed(x.selected, c), s();
    },
    reset: function(u, l) {
      c = l;
      const h = u.select("#toggle_" + e);
      h.selectAll("." + x.handle).transition().attr("cx", c ? 2 * n : 0), h.classed(x.selected, c), s();
    }
  };
}, gA = () => {
  const t = "radio";
  var e = ar(), n = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, c = "right", u = null, l = function(d) {
  }, h = [], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    buttonsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    buttonpadding: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    orientation: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? o : (o = d, this);
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
    labelposition: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    choices: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function(d, g) {
      f = g, H(this.parentNode).selectAll("." + x.symbol).classed(x.selected, (y) => y == f), l();
    },
    reset: function(d, g) {
      f = g, d.select("#radio_" + e).selectAll("." + x.symbol).classed(x.selected, (y) => y == f), l();
    }
  };
}, vA = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = H(o).attr("class", x.widget + " " + x.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", x.background).on("click", t.click).on("mouseover", function() {
    H(this).classed(x.lit, !0), H(this.parentNode).select("." + x.symbol).classed(x.lit, !0);
  }).on("mouseout", function() {
    H(this).classed(x.lit, !1), H(this.parentNode).select("." + x.symbol).classed(x.lit, !1);
  }), a.append("path").attr("d", ei(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", x.symbol), r) {
    const c = Bi(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", x.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")");
  }
  return o;
}, cu = (t, e) => {
  const n = it();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, yA = (t, e) => {
  const n = tr(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = H(c).attr("class", x.widget + " " + x.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2, l = (_) => {
    const p = _ && _.sourceEvent ? _.sourceEvent : _;
    return p ? p.clientX != null ? p.clientX : p.touches && p.touches.length ? p.touches[0].clientX : p.changedTouches && p.changedTouches.length ? p.changedTouches[0].clientX : null : null;
  }, h = (_, p) => {
    const M = l(_);
    if (M == null) return null;
    const v = p.getBoundingClientRect(), A = M - v.left, j = p.width && p.width.baseVal ? p.width.baseVal.value : v.width, N = v.width ? j / v.width : 1;
    return A * N - u;
  };
  s.append("path").attr("d", cu(t.size(), t.girth())).attr("class", x.track), s.append("circle").attr("class", x.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", x.track_overlay).on("click", function(_) {
    const p = h(_, this);
    if (p == null) return;
    const M = Math.max(0, Math.min(t.size(), p));
    t.value(a.invert(M)), t.update(), t.update_end(), s.selectAll("." + x.handle).attr("cx", a(t.value())), t.show() && s.select("." + x.label).text(t.label() + " = " + n(t.value()));
  }).call(
    $0().on("drag", function(_) {
      const p = h(_, this);
      if (p == null) return;
      const M = Math.max(0, Math.min(t.size(), p));
      t.value(a.invert(M)), t.update(), s.selectAll("." + x.handle).attr("cx", a(t.value())), t.show() && s.select("." + x.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(_) {
      t.update_end();
    })
  );
  var f, d, g, y = "bottom";
  const w = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? d = t.labelposition().match(/bottom/i) != null ? Ke([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + w : -Ke([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - w : d = t.labelposition().match(/bottom/i) != null ? Ke([t.girth() / 2, t.knob()]) + 7 + w : -Ke([t.girth() / 2, t.knob()]) - 7 - w, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, g = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", y = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", x.label).style("text-anchor", g).style("alignment-baseline", y).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + d + ")"), c;
}, mA = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = H(a).attr("class", x.widget + " " + x.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(x.selected, t.value() == 1);
  if (s.append("path").attr("d", cu(2 * t.size(), 2 * t.size())).attr("class", x.track), s.append("circle").attr("class", x.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", x.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const c = Bi(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", x.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + (c.x + r) + "," + c.y + ")");
  }
  return a;
}, AA = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = cd(a), c = oe().domain([0, a - 1]).range([0, t.size()]), u = oe().domain([0, a - 1]).range([0, t.size()]), l = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = H(l).attr("class", x.widget + " " + x.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + x.radiobutton).data(s).enter().append("g").attr("class", x.radiobutton).attr("id", (y) => "b" + y).attr("transform", (y) => t.orientation() == "vertical" ? "translate(0," + u(y) + ")" : "translate(" + c(y) + ",0)");
  var f, d;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), f.attr("class", x.background).on("mouseover", function() {
    H(this).classed(x.lit, !0), H(this.parentNode).select("." + x.symbol).classed(x.lit, !0);
  }).on("mouseout", function() {
    H(this).classed(x.lit, !1), H(this.parentNode).select("." + x.symbol).classed(x.lit, !1);
  }), d.attr("class", x.symbol), d.filter((y) => y == t.value()).classed(x.selected, !0), h.on("click", t.click);
  const g = Bi(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", x.label).text(function(y, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), l;
}, rn = (t, e) => {
  switch (t.type) {
    case "button":
      return vA(t);
    case "slider":
      return yA(t);
    case "radio":
      return AA(t);
    case "toggle":
      return mA(t);
  }
}, bA = "_displayPanel_vsgci_1", wA = "_controlPanel_vsgci_8", xA = "_node_vsgci_25", _A = "_person_vsgci_26", MA = "_manlio_vsgci_27", PA = "_left_vsgci_29", OA = "_right_vsgci_33", TA = "_arena_vsgci_37", zA = "_nose_vsgci_44", kA = "_head_vsgci_49", jA = "_shoulder_vsgci_54", NA = "_hair_vsgci_59", SA = "_eye_vsgci_64", HA = "_mulch_vsgci_69", XA = "_obstacle_vsgci_75", IA = "_obs0_vsgci_81", EA = "_obs1_vsgci_86", BA = "_obs2_vsgci_90", DA = "_obs3_vsgci_94", O = {
  displayPanel: bA,
  controlPanel: wA,
  node: xA,
  person: _A,
  manlio: MA,
  left: PA,
  right: OA,
  arena: TA,
  nose: zA,
  head: kA,
  shoulder: jA,
  hair: NA,
  eye: SA,
  mulch: HA,
  obstacle: XA,
  obs0: IA,
  obs1: EA,
  obs2: BA,
  obs3: DA
}, CA = (t, e) => {
  const n = Jm(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  );
  console.log(t);
  const r = Yl("#" + t).classed(t + " " + e.container_class, !0), i = t + "_display", o = t + "_controls", a = r.append("div").attr("id", i).attr("class", O.displayPanel).classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), s = r.append("div").attr("id", o).attr("class", "d3-widgets " + O.controlPanel).classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && s.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && a.style("border", e.display_border), e.debug && s.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (c) => "translate(" + c.x + "," + c.y + ")").style("fill", "black"), { display: a, controls: s, grid: n };
};
var lu = typeof global == "object" && global && global.Object === Object && global, GA = typeof self == "object" && self && self.Object === Object && self, xt = lu || GA || Function("return this")(), kt = xt.Symbol, fu = Object.prototype, YA = fu.hasOwnProperty, LA = fu.toString, pe = kt ? kt.toStringTag : void 0;
function FA(t) {
  var e = YA.call(t, pe), n = t[pe];
  try {
    t[pe] = void 0;
    var r = !0;
  } catch {
  }
  var i = LA.call(t);
  return r && (e ? t[pe] = n : delete t[pe]), i;
}
var JA = Object.prototype, RA = JA.toString;
function ZA(t) {
  return RA.call(t);
}
var qA = "[object Null]", UA = "[object Undefined]", pa = kt ? kt.toStringTag : void 0;
function Rt(t) {
  return t == null ? t === void 0 ? UA : qA : pa && pa in Object(t) ? FA(t) : ZA(t);
}
function Lt(t) {
  return t != null && typeof t == "object";
}
var QA = "[object Symbol]";
function sr(t) {
  return typeof t == "symbol" || Lt(t) && Rt(t) == QA;
}
function Le(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var J = Array.isArray, ga = kt ? kt.prototype : void 0, va = ga ? ga.toString : void 0;
function hu(t) {
  if (typeof t == "string")
    return t;
  if (J(t))
    return Le(t, hu) + "";
  if (sr(t))
    return va ? va.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var KA = /\s/;
function WA(t) {
  for (var e = t.length; e-- && KA.test(t.charAt(e)); )
    ;
  return e;
}
var VA = /^\s+/;
function $A(t) {
  return t && t.slice(0, WA(t) + 1).replace(VA, "");
}
function mt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var ya = NaN, tb = /^[-+]0x[0-9a-f]+$/i, eb = /^0b[01]+$/i, nb = /^0o[0-7]+$/i, rb = parseInt;
function ib(t) {
  if (typeof t == "number")
    return t;
  if (sr(t))
    return ya;
  if (mt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = mt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = $A(t);
  var n = eb.test(t);
  return n || nb.test(t) ? rb(t.slice(2), n ? 2 : 8) : tb.test(t) ? ya : +t;
}
var ob = 1 / 0, ab = 17976931348623157e292;
function Or(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = ib(t), t === ob || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * ab;
  }
  return t === t ? t : 0;
}
function du(t) {
  return t;
}
var sb = "[object AsyncFunction]", ub = "[object Function]", cb = "[object GeneratorFunction]", lb = "[object Proxy]";
function pu(t) {
  if (!mt(t))
    return !1;
  var e = Rt(t);
  return e == ub || e == cb || e == sb || e == lb;
}
var Tr = xt["__core-js_shared__"], ma = function() {
  var t = /[^.]+$/.exec(Tr && Tr.keys && Tr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function fb(t) {
  return !!ma && ma in t;
}
var hb = Function.prototype, db = hb.toString;
function Zt(t) {
  if (t != null) {
    try {
      return db.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var pb = /[\\^$.*+?()[\]{}|]/g, gb = /^\[object .+?Constructor\]$/, vb = Function.prototype, yb = Object.prototype, mb = vb.toString, Ab = yb.hasOwnProperty, bb = RegExp(
  "^" + mb.call(Ab).replace(pb, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wb(t) {
  if (!mt(t) || fb(t))
    return !1;
  var e = pu(t) ? bb : gb;
  return e.test(Zt(t));
}
function xb(t, e) {
  return t == null ? void 0 : t[e];
}
function qt(t, e) {
  var n = xb(t, e);
  return wb(n) ? n : void 0;
}
var ni = qt(xt, "WeakMap");
function _b(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var Aa = function() {
  try {
    var t = qt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function Mb(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var Pb = 9007199254740991, Ob = /^(?:0|[1-9]\d*)$/;
function ur(t, e) {
  var n = typeof t;
  return e = e ?? Pb, !!e && (n == "number" || n != "symbol" && Ob.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Tb(t, e, n) {
  e == "__proto__" && Aa ? Aa(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function cr(t, e) {
  return t === e || t !== t && e !== e;
}
var zb = Object.prototype, kb = zb.hasOwnProperty;
function jb(t, e, n) {
  var r = t[e];
  (!(kb.call(t, e) && cr(r, n)) || n === void 0 && !(e in t)) && Tb(t, e, n);
}
var Nb = 9007199254740991;
function Ci(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Nb;
}
function Fe(t) {
  return t != null && Ci(t.length) && !pu(t);
}
function Sb(t, e, n) {
  if (!mt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Fe(n) && ur(e, n.length) : r == "string" && e in n) ? cr(n[e], t) : !1;
}
var Hb = Object.prototype;
function gu(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Hb;
  return t === n;
}
function Xb(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Ib = "[object Arguments]";
function ba(t) {
  return Lt(t) && Rt(t) == Ib;
}
var vu = Object.prototype, Eb = vu.hasOwnProperty, Bb = vu.propertyIsEnumerable, yu = ba(/* @__PURE__ */ function() {
  return arguments;
}()) ? ba : function(t) {
  return Lt(t) && Eb.call(t, "callee") && !Bb.call(t, "callee");
};
function Db() {
  return !1;
}
var mu = typeof exports == "object" && exports && !exports.nodeType && exports, wa = mu && typeof module == "object" && module && !module.nodeType && module, Cb = wa && wa.exports === mu, xa = Cb ? xt.Buffer : void 0, Gb = xa ? xa.isBuffer : void 0, ri = Gb || Db, Yb = "[object Arguments]", Lb = "[object Array]", Fb = "[object Boolean]", Jb = "[object Date]", Rb = "[object Error]", Zb = "[object Function]", qb = "[object Map]", Ub = "[object Number]", Qb = "[object Object]", Kb = "[object RegExp]", Wb = "[object Set]", Vb = "[object String]", $b = "[object WeakMap]", tw = "[object ArrayBuffer]", ew = "[object DataView]", nw = "[object Float32Array]", rw = "[object Float64Array]", iw = "[object Int8Array]", ow = "[object Int16Array]", aw = "[object Int32Array]", sw = "[object Uint8Array]", uw = "[object Uint8ClampedArray]", cw = "[object Uint16Array]", lw = "[object Uint32Array]", k = {};
k[nw] = k[rw] = k[iw] = k[ow] = k[aw] = k[sw] = k[uw] = k[cw] = k[lw] = !0;
k[Yb] = k[Lb] = k[tw] = k[Fb] = k[ew] = k[Jb] = k[Rb] = k[Zb] = k[qb] = k[Ub] = k[Qb] = k[Kb] = k[Wb] = k[Vb] = k[$b] = !1;
function fw(t) {
  return Lt(t) && Ci(t.length) && !!k[Rt(t)];
}
function hw(t) {
  return function(e) {
    return t(e);
  };
}
var Au = typeof exports == "object" && exports && !exports.nodeType && exports, _e = Au && typeof module == "object" && module && !module.nodeType && module, dw = _e && _e.exports === Au, zr = dw && lu.process, _a = function() {
  try {
    var t = _e && _e.require && _e.require("util").types;
    return t || zr && zr.binding && zr.binding("util");
  } catch {
  }
}(), Ma = _a && _a.isTypedArray, bu = Ma ? hw(Ma) : fw, pw = Object.prototype, gw = pw.hasOwnProperty;
function wu(t, e) {
  var n = J(t), r = !n && yu(t), i = !n && !r && ri(t), o = !n && !r && !i && bu(t), a = n || r || i || o, s = a ? Xb(t.length, String) : [], c = s.length;
  for (var u in t)
    (e || gw.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ur(u, c))) && s.push(u);
  return s;
}
function xu(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var vw = xu(Object.keys, Object), yw = Object.prototype, mw = yw.hasOwnProperty;
function Aw(t) {
  if (!gu(t))
    return vw(t);
  var e = [];
  for (var n in Object(t))
    mw.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Je(t) {
  return Fe(t) ? wu(t) : Aw(t);
}
function bw(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var ww = Object.prototype, xw = ww.hasOwnProperty;
function _w(t) {
  if (!mt(t))
    return bw(t);
  var e = gu(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !xw.call(t, r)) || n.push(r);
  return n;
}
function Mw(t) {
  return Fe(t) ? wu(t, !0) : _w(t);
}
var Pw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ow = /^\w*$/;
function Gi(t, e) {
  if (J(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || sr(t) ? !0 : Ow.test(t) || !Pw.test(t) || e != null && t in Object(e);
}
var Ie = qt(Object, "create");
function Tw() {
  this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
}
function zw(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var kw = "__lodash_hash_undefined__", jw = Object.prototype, Nw = jw.hasOwnProperty;
function Sw(t) {
  var e = this.__data__;
  if (Ie) {
    var n = e[t];
    return n === kw ? void 0 : n;
  }
  return Nw.call(e, t) ? e[t] : void 0;
}
var Hw = Object.prototype, Xw = Hw.hasOwnProperty;
function Iw(t) {
  var e = this.__data__;
  return Ie ? e[t] !== void 0 : Xw.call(e, t);
}
var Ew = "__lodash_hash_undefined__";
function Bw(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Ie && e === void 0 ? Ew : e, this;
}
function Ft(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Ft.prototype.clear = Tw;
Ft.prototype.delete = zw;
Ft.prototype.get = Sw;
Ft.prototype.has = Iw;
Ft.prototype.set = Bw;
function Dw() {
  this.__data__ = [], this.size = 0;
}
function lr(t, e) {
  for (var n = t.length; n--; )
    if (cr(t[n][0], e))
      return n;
  return -1;
}
var Cw = Array.prototype, Gw = Cw.splice;
function Yw(t) {
  var e = this.__data__, n = lr(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Gw.call(e, n, 1), --this.size, !0;
}
function Lw(t) {
  var e = this.__data__, n = lr(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Fw(t) {
  return lr(this.__data__, t) > -1;
}
function Jw(t, e) {
  var n = this.__data__, r = lr(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function _t(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = Dw;
_t.prototype.delete = Yw;
_t.prototype.get = Lw;
_t.prototype.has = Fw;
_t.prototype.set = Jw;
var Ee = qt(xt, "Map");
function Rw() {
  this.size = 0, this.__data__ = {
    hash: new Ft(),
    map: new (Ee || _t)(),
    string: new Ft()
  };
}
function Zw(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function fr(t, e) {
  var n = t.__data__;
  return Zw(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function qw(t) {
  var e = fr(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Uw(t) {
  return fr(this, t).get(t);
}
function Qw(t) {
  return fr(this, t).has(t);
}
function Kw(t, e) {
  var n = fr(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function Mt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Mt.prototype.clear = Rw;
Mt.prototype.delete = qw;
Mt.prototype.get = Uw;
Mt.prototype.has = Qw;
Mt.prototype.set = Kw;
var Ww = "Expected a function";
function Yi(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Ww);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return n.cache = o.set(i, a) || o, a;
  };
  return n.cache = new (Yi.Cache || Mt)(), n;
}
Yi.Cache = Mt;
var Vw = 500;
function $w(t) {
  var e = Yi(t, function(r) {
    return n.size === Vw && n.clear(), r;
  }), n = e.cache;
  return e;
}
var t2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, e2 = /\\(\\)?/g, n2 = $w(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(t2, function(n, r, i, o) {
    e.push(i ? o.replace(e2, "$1") : r || n);
  }), e;
});
function hr(t) {
  return t == null ? "" : hu(t);
}
function dr(t, e) {
  return J(t) ? t : Gi(t, e) ? [t] : n2(hr(t));
}
function Re(t) {
  if (typeof t == "string" || sr(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Li(t, e) {
  e = dr(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Re(e[n++])];
  return n && n == r ? t : void 0;
}
function r2(t, e, n) {
  var r = t == null ? void 0 : Li(t, e);
  return r === void 0 ? n : r;
}
function _u(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var i2 = xu(Object.getPrototypeOf, Object);
function o2(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + e];
  return o;
}
function a2(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, o2(t, e, n);
}
var s2 = "\\ud800-\\udfff", u2 = "\\u0300-\\u036f", c2 = "\\ufe20-\\ufe2f", l2 = "\\u20d0-\\u20ff", f2 = u2 + c2 + l2, h2 = "\\ufe0e\\ufe0f", d2 = "\\u200d", p2 = RegExp("[" + d2 + s2 + f2 + h2 + "]");
function Mu(t) {
  return p2.test(t);
}
function g2(t) {
  return t.split("");
}
var Pu = "\\ud800-\\udfff", v2 = "\\u0300-\\u036f", y2 = "\\ufe20-\\ufe2f", m2 = "\\u20d0-\\u20ff", A2 = v2 + y2 + m2, b2 = "\\ufe0e\\ufe0f", w2 = "[" + Pu + "]", ii = "[" + A2 + "]", oi = "\\ud83c[\\udffb-\\udfff]", x2 = "(?:" + ii + "|" + oi + ")", Ou = "[^" + Pu + "]", Tu = "(?:\\ud83c[\\udde6-\\uddff]){2}", zu = "[\\ud800-\\udbff][\\udc00-\\udfff]", _2 = "\\u200d", ku = x2 + "?", ju = "[" + b2 + "]?", M2 = "(?:" + _2 + "(?:" + [Ou, Tu, zu].join("|") + ")" + ju + ku + ")*", P2 = ju + ku + M2, O2 = "(?:" + [Ou + ii + "?", ii, Tu, zu, w2].join("|") + ")", T2 = RegExp(oi + "(?=" + oi + ")|" + O2 + P2, "g");
function z2(t) {
  return t.match(T2) || [];
}
function k2(t) {
  return Mu(t) ? z2(t) : g2(t);
}
function j2(t) {
  return function(e) {
    e = hr(e);
    var n = Mu(e) ? k2(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? a2(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var N2 = j2("toUpperCase");
function S2(t) {
  return N2(hr(t).toLowerCase());
}
function H2() {
  this.__data__ = new _t(), this.size = 0;
}
function X2(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function I2(t) {
  return this.__data__.get(t);
}
function E2(t) {
  return this.__data__.has(t);
}
var B2 = 200;
function D2(t, e) {
  var n = this.__data__;
  if (n instanceof _t) {
    var r = n.__data__;
    if (!Ee || r.length < B2 - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new Mt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function gt(t) {
  var e = this.__data__ = new _t(t);
  this.size = e.size;
}
gt.prototype.clear = H2;
gt.prototype.delete = X2;
gt.prototype.get = I2;
gt.prototype.has = E2;
gt.prototype.set = D2;
function Nu(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (o[i++] = a);
  }
  return o;
}
function Su() {
  return [];
}
var C2 = Object.prototype, G2 = C2.propertyIsEnumerable, Pa = Object.getOwnPropertySymbols, Hu = Pa ? function(t) {
  return t == null ? [] : (t = Object(t), Nu(Pa(t), function(e) {
    return G2.call(t, e);
  }));
} : Su, Y2 = Object.getOwnPropertySymbols, L2 = Y2 ? function(t) {
  for (var e = []; t; )
    _u(e, Hu(t)), t = i2(t);
  return e;
} : Su;
function Xu(t, e, n) {
  var r = e(t);
  return J(t) ? r : _u(r, n(t));
}
function Oa(t) {
  return Xu(t, Je, Hu);
}
function F2(t) {
  return Xu(t, Mw, L2);
}
var ai = qt(xt, "DataView"), si = qt(xt, "Promise"), ui = qt(xt, "Set"), Ta = "[object Map]", J2 = "[object Object]", za = "[object Promise]", ka = "[object Set]", ja = "[object WeakMap]", Na = "[object DataView]", R2 = Zt(ai), Z2 = Zt(Ee), q2 = Zt(si), U2 = Zt(ui), Q2 = Zt(ni), dt = Rt;
(ai && dt(new ai(new ArrayBuffer(1))) != Na || Ee && dt(new Ee()) != Ta || si && dt(si.resolve()) != za || ui && dt(new ui()) != ka || ni && dt(new ni()) != ja) && (dt = function(t) {
  var e = Rt(t), n = e == J2 ? t.constructor : void 0, r = n ? Zt(n) : "";
  if (r)
    switch (r) {
      case R2:
        return Na;
      case Z2:
        return Ta;
      case q2:
        return za;
      case U2:
        return ka;
      case Q2:
        return ja;
    }
  return e;
});
var Sa = xt.Uint8Array, K2 = "__lodash_hash_undefined__";
function W2(t) {
  return this.__data__.set(t, K2), this;
}
function V2(t) {
  return this.__data__.has(t);
}
function Jn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new Mt(); ++e < n; )
    this.add(t[e]);
}
Jn.prototype.add = Jn.prototype.push = W2;
Jn.prototype.has = V2;
function $2(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function tx(t, e) {
  return t.has(e);
}
var ex = 1, nx = 2;
function Iu(t, e, n, r, i, o) {
  var a = n & ex, s = t.length, c = e.length;
  if (s != c && !(a && c > s))
    return !1;
  var u = o.get(t), l = o.get(e);
  if (u && l)
    return u == e && l == t;
  var h = -1, f = !0, d = n & nx ? new Jn() : void 0;
  for (o.set(t, e), o.set(e, t); ++h < s; ) {
    var g = t[h], y = e[h];
    if (r)
      var w = a ? r(y, g, h, e, t, o) : r(g, y, h, t, e, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!$2(e, function(_, p) {
        if (!tx(d, p) && (g === _ || i(g, _, n, r, o)))
          return d.push(p);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === y || i(g, y, n, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), f;
}
function Eu(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function rx(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var ix = 1, ox = 2, ax = "[object Boolean]", sx = "[object Date]", ux = "[object Error]", cx = "[object Map]", lx = "[object Number]", fx = "[object RegExp]", hx = "[object Set]", dx = "[object String]", px = "[object Symbol]", gx = "[object ArrayBuffer]", vx = "[object DataView]", Ha = kt ? kt.prototype : void 0, kr = Ha ? Ha.valueOf : void 0;
function yx(t, e, n, r, i, o, a) {
  switch (n) {
    case vx:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case gx:
      return !(t.byteLength != e.byteLength || !o(new Sa(t), new Sa(e)));
    case ax:
    case sx:
    case lx:
      return cr(+t, +e);
    case ux:
      return t.name == e.name && t.message == e.message;
    case fx:
    case dx:
      return t == e + "";
    case cx:
      var s = Eu;
    case hx:
      var c = r & ix;
      if (s || (s = rx), t.size != e.size && !c)
        return !1;
      var u = a.get(t);
      if (u)
        return u == e;
      r |= ox, a.set(t, e);
      var l = Iu(s(t), s(e), r, i, o, a);
      return a.delete(t), l;
    case px:
      if (kr)
        return kr.call(t) == kr.call(e);
  }
  return !1;
}
var mx = 1, Ax = Object.prototype, bx = Ax.hasOwnProperty;
function wx(t, e, n, r, i, o) {
  var a = n & mx, s = Oa(t), c = s.length, u = Oa(e), l = u.length;
  if (c != l && !a)
    return !1;
  for (var h = c; h--; ) {
    var f = s[h];
    if (!(a ? f in e : bx.call(e, f)))
      return !1;
  }
  var d = o.get(t), g = o.get(e);
  if (d && g)
    return d == e && g == t;
  var y = !0;
  o.set(t, e), o.set(e, t);
  for (var w = a; ++h < c; ) {
    f = s[h];
    var _ = t[f], p = e[f];
    if (r)
      var M = a ? r(p, _, f, e, t, o) : r(_, p, f, t, e, o);
    if (!(M === void 0 ? _ === p || i(_, p, n, r, o) : M)) {
      y = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (y && !w) {
    var v = t.constructor, A = e.constructor;
    v != A && "constructor" in t && "constructor" in e && !(typeof v == "function" && v instanceof v && typeof A == "function" && A instanceof A) && (y = !1);
  }
  return o.delete(t), o.delete(e), y;
}
var xx = 1, Xa = "[object Arguments]", Ia = "[object Array]", on = "[object Object]", _x = Object.prototype, Ea = _x.hasOwnProperty;
function Mx(t, e, n, r, i, o) {
  var a = J(t), s = J(e), c = a ? Ia : dt(t), u = s ? Ia : dt(e);
  c = c == Xa ? on : c, u = u == Xa ? on : u;
  var l = c == on, h = u == on, f = c == u;
  if (f && ri(t)) {
    if (!ri(e))
      return !1;
    a = !0, l = !1;
  }
  if (f && !l)
    return o || (o = new gt()), a || bu(t) ? Iu(t, e, n, r, i, o) : yx(t, e, c, n, r, i, o);
  if (!(n & xx)) {
    var d = l && Ea.call(t, "__wrapped__"), g = h && Ea.call(e, "__wrapped__");
    if (d || g) {
      var y = d ? t.value() : t, w = g ? e.value() : e;
      return o || (o = new gt()), i(y, w, n, r, o);
    }
  }
  return f ? (o || (o = new gt()), wx(t, e, n, r, i, o)) : !1;
}
function Fi(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !Lt(t) && !Lt(e) ? t !== t && e !== e : Mx(t, e, n, r, Fi, i);
}
var Px = 1, Ox = 2;
function Tx(t, e, n, r) {
  var i = n.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = n[i];
    var s = a[0], c = t[s], u = a[1];
    if (a[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var l = new gt(), h;
      if (!(h === void 0 ? Fi(u, c, Px | Ox, r, l) : h))
        return !1;
    }
  }
  return !0;
}
function Bu(t) {
  return t === t && !mt(t);
}
function zx(t) {
  for (var e = Je(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Bu(i)];
  }
  return e;
}
function Du(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function kx(t) {
  var e = zx(t);
  return e.length == 1 && e[0][2] ? Du(e[0][0], e[0][1]) : function(n) {
    return n === t || Tx(n, t, e);
  };
}
function jx(t, e) {
  return t != null && e in Object(t);
}
function Cu(t, e, n) {
  e = dr(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var a = Re(e[r]);
    if (!(o = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Ci(i) && ur(a, i) && (J(t) || yu(t)));
}
function Nx(t, e) {
  return t != null && Cu(t, e, jx);
}
var Sx = 1, Hx = 2;
function Xx(t, e) {
  return Gi(t) && Bu(e) ? Du(Re(t), e) : function(n) {
    var r = r2(n, t);
    return r === void 0 && r === e ? Nx(n, t) : Fi(e, r, Sx | Hx);
  };
}
function Ix(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Ex(t) {
  return function(e) {
    return Li(e, t);
  };
}
function Bx(t) {
  return Gi(t) ? Ix(Re(t)) : Ex(t);
}
function Ji(t) {
  return typeof t == "function" ? t : t == null ? du : typeof t == "object" ? J(t) ? Xx(t[0], t[1]) : kx(t) : Bx(t);
}
function Dx(t) {
  return function(e, n, r) {
    for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
      var c = a[++i];
      if (n(o[c], c, o) === !1)
        break;
    }
    return e;
  };
}
var Cx = Dx();
function Gx(t, e) {
  return t && Cx(t, e, Je);
}
function Yx(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Fe(n))
      return t(n, r);
    for (var i = n.length, o = -1, a = Object(n); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return n;
  };
}
var Ri = Yx(Gx);
function Lx(t) {
  return typeof t == "function" ? t : du;
}
function D(t, e) {
  var n = J(t) ? Mb : Ri;
  return n(t, Lx(e));
}
function Fx(t, e) {
  return Le(e, function(n) {
    return [n, t[n]];
  });
}
function Jx(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var Rx = "[object Map]", Zx = "[object Set]";
function qx(t) {
  return function(e) {
    var n = dt(e);
    return n == Rx ? Eu(e) : n == Zx ? Jx(e) : Fx(e, t(e));
  };
}
var Gu = qx(Je);
function Ux(t, e) {
  var n = [];
  return Ri(t, function(r, i, o) {
    e(r, i, o) && n.push(r);
  }), n;
}
function ci(t, e) {
  var n = J(t) ? Nu : Ux;
  return n(t, Ji(e));
}
function Qx(t, e) {
  var n = -1, r = Fe(t) ? Array(t.length) : [];
  return Ri(t, function(i, o, a) {
    r[++n] = e(i, o, a);
  }), r;
}
function le(t, e) {
  var n = J(t) ? Le : Qx;
  return n(t, Ji(e));
}
var Kx = Object.prototype, Wx = Kx.hasOwnProperty;
function Vx(t, e) {
  return t != null && Wx.call(t, e);
}
function Zi(t, e) {
  return t != null && Cu(t, e, Vx);
}
function $x(t, e) {
  return Le(e, function(n) {
    return t[n];
  });
}
function t8(t) {
  return t == null ? [] : $x(t, Je(t));
}
var e8 = "[object Boolean]";
function n8(t) {
  return t === !0 || t === !1 || Lt(t) && Rt(t) == e8;
}
function r8(t, e, n, r) {
  if (!mt(t))
    return t;
  e = dr(e, t);
  for (var i = -1, o = e.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var c = Re(e[i]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (i != a) {
      var l = s[c];
      u = void 0, u === void 0 && (u = mt(l) ? l : ur(e[i + 1]) ? [] : {});
    }
    jb(s, c, u), s = s[c];
  }
  return t;
}
function i8(t, e, n) {
  for (var r = -1, i = e.length, o = {}; ++r < i; ) {
    var a = e[r], s = Li(t, a);
    n(s, a) && r8(o, dr(a, t), s);
  }
  return o;
}
function qi(t, e) {
  if (t == null)
    return {};
  var n = Le(F2(t), function(r) {
    return [r];
  });
  return e = Ji(e), i8(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var o8 = Math.floor, a8 = Math.random;
function s8(t, e) {
  return t + o8(a8() * (e - t + 1));
}
var u8 = Math.ceil, c8 = Math.max;
function l8(t, e, n, r) {
  for (var i = -1, o = c8(u8((e - t) / (n || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += n;
  return a;
}
function f8(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && Sb(e, n, r) && (n = r = void 0), e = Or(e), n === void 0 ? (n = e, e = 0) : n = Or(n), r = r === void 0 ? e < n ? 1 : -1 : Or(r), l8(e, n, r);
  };
}
var li = f8();
function h8() {
  var t = arguments, e = hr(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
function Yu(t, e) {
  var n = -1, r = t.length, i = r - 1;
  for (e = e === void 0 ? r : e; ++n < e; ) {
    var o = s8(n, i), a = t[o];
    t[o] = t[n], t[n] = a;
  }
  return t.length = e, t;
}
function d8(t) {
  return Yu(_b(t));
}
function p8(t) {
  return Yu(t8(t));
}
function g8(t) {
  var e = J(t) ? d8 : p8;
  return e(t);
}
const P = {
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
}, b = {
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
}, Ui = (t) => le(
  Gu(t),
  (e) => {
    e[1].id = e[0], Zi(e[1], "label") || (e[1].label = h8(S2(e[0]), /_/g, " "));
  }
), Qi = (t) => le(Gu(t), (e) => e[1]), Ki = (t, e) => D(t, (n, r) => n.widget = e[r]), v8 = (t) => qi(t, (e) => Zi(e, "range")), y8 = (t) => qi(t, (e) => n8(e.default)), m8 = (t) => qi(t, (e) => Zi(e, "choices"));
Ce().domain([0, 360]).range([0, 2 * Math.PI]);
Ce().range([0, 360]).domain([0, 2 * Math.PI]);
const Ba = (t, e) => {
  const n = t.x - e.x, r = t.y - e.y;
  return Math.sqrt(n * n + r * r);
}, Xt = (t, e) => Math.sqrt(t * t + e * e), Da = (t) => t < 0 ? 0 : t, Wi = v8(b), Vi = y8(b), $i = m8(b);
Ui(Wi);
Ui(Vi);
Ui($i);
const Lu = Qi(Wi), Fu = Qi(Vi), Ju = Qi($i), mn = le(
  Lu,
  (t) => dA().id(t.id).label(t.label).range(t.range).value(t.default).size(P.widgets.slider_size).girth(P.widgets.slider_girth).knob(P.widgets.slider_knob)
), An = le(
  Fu,
  (t) => pA().id(t.id).label(t.label).value(t.default).labelposition(P.widgets.toggle_label_pos).size(P.widgets.toggle_size)
), bn = le(
  Ju,
  (t) => gA().choices(t.choices).id(t.id).value(t.default)
  //.orientation(cfg.widgets.radio_orientation)
  //.labelposition(cfg.widgets.radio_label_position)
);
Ki(Fu, An);
Ki(Lu, mn);
Ki(Ju, bn);
const zt = Di().actions(["play", "pause"]), pr = Di().actions(["back"]), gr = Di().actions(["rewind"]), A8 = [zt, pr, gr], b8 = (t, e) => {
  const n = e.position(P.widgets.slider_anchor.x, li(mn.length).map((a) => P.widgets.slider_anchor.y + P.widgets.slider_gap * a)), r = e.position(P.widgets.toggle_anchor.x, li(An.length).map((a) => P.widgets.toggle_anchor.y + P.widgets.toggle_gap * a)), i = e.position(P.widgets.radio_anchor.x, P.widgets.radio_anchor.y), o = e.position(P.widgets.sym_radio_anchor.x, P.widgets.sym_radio_anchor.y);
  mn.forEach((a, s) => a.position(n[s])), An.forEach((a, s) => a.position(r[s])), bn[0].position(i).size(P.widgets.radio_size).shape(P.widgets.radio_shape).buttonsize(P.widgets.radio_buttonsize).orientation(P.widgets.radio_orientation).labelposition(P.widgets.radio_label_position), bn[1].position(o).size(P.widgets.sym_radio_size).shape(P.widgets.sym_radio_shape).buttonsize(P.widgets.sym_radio_buttonsize), zt.position(e.position(P.widgets.playbutton_anchor.x, P.widgets.playbutton_anchor.y)).size(P.widgets.playbutton_size), gr.position(e.position(P.widgets.backbutton_anchor.x, P.widgets.backbutton_anchor.y)), pr.position(e.position(P.widgets.resetbutton_anchor.x, P.widgets.resetbutton_anchor.y)), t.selectAll(null).data(mn).enter().append(rn), t.selectAll(null).data(An).enter().append(rn), t.selectAll(null).data(A8).enter().append(rn), t.selectAll(null).data(bn).enter().append(rn);
}, w8 = (t) => {
  D(Wi, (e) => e.widget.reset(t, e.default)), D(Vi, (e) => e.widget.reset(t, e.default)), D($i, (e) => e.widget.reset(t, e.default));
}, B = b.R1, Q = b.R2, x8 = {
  // single large obstacle
  R: 8,
  r: (B + Q) / 2,
  x: (B + Q) / 2 * Math.cos(0),
  y: (B + Q) / 2 * Math.sin(0),
  sign: 1,
  name: "obs1",
  active: b.single_large_obstacle.widget.value()
};
var _8 = {
  // central obstacle
  R: 20,
  r: 0,
  x: 0,
  y: 0,
  sign: 1,
  name: "obs0",
  active: !0
}, M8 = {
  // one of two smaller obstacles
  R: 4,
  r: B + (28 - 4 * 4) / 3 + 4,
  x: (B + (28 - 4 * 4) / 3 + 4) * Math.cos(Math.PI),
  y: (B + (28 - 4 * 4) / 3 + 4) * Math.sin(Math.PI),
  sign: 1,
  name: "obs2",
  active: b.two_smaller_obstacles.widget.value()
}, P8 = {
  // one of two smaller obstacles
  R: 4,
  r: B + 2 * (28 - 4 * 4) / 3 + 3 * 4,
  x: (B + 2 * (28 - 4 * 4) / 3 + 3 * 4) * Math.cos(Math.PI),
  y: (B + 2 * (28 - 4 * 4) / 3 + 3 * 4) * Math.sin(Math.PI),
  sign: 1,
  name: "obs2",
  active: b.two_smaller_obstacles.widget.value()
}, O8 = {
  R: 3,
  r: (B + Q) / 2,
  x: (B + Q) / 2 * Math.cos(-Math.PI / 2),
  y: (B + Q) / 2 * Math.sin(-Math.PI / 2),
  sign: 1,
  name: "obs3",
  active: b.three_diagonal_obstacles.widget.value()
}, wn = {
  R: 3,
  r: (B + Q) / 2,
  x: (B + Q) / 2 * Math.cos(-Math.PI / 2) - 2 * 3,
  y: (B + Q) / 2 * Math.sin(-Math.PI / 2) - 2 * 3,
  sign: 1,
  name: "obs3",
  active: b.three_diagonal_obstacles.widget.value()
}, xn = {
  R: 3,
  r: (B + Q) / 2,
  x: (B + Q) / 2 * Math.cos(-Math.PI / 2) + 2 * 3,
  y: (B + Q) / 2 * Math.sin(-Math.PI / 2) + 2 * 3,
  sign: 1,
  name: "obs3",
  active: b.three_diagonal_obstacles.widget.value()
};
wn.r = Xt(wn.x, wn.y);
xn.r = Xt(xn.x, xn.y);
var lt = [];
lt.push(x8);
lt.push(_8);
lt.push(M8);
lt.push(P8);
lt.push(O8);
lt.push(wn);
lt.push(xn);
b.L;
const an = b.dt, Ca = b.R1, T8 = b.R2, Pt = b.twist, _n = b.number_of_walkers.choices[3], z8 = Yh(0, 1);
var U = [];
function Rn(t) {
  let e = Xt(t.x, t.y), n = t.x / e, r = t.y / e;
  t.direction == 0 ? (t.v0x = t.v0 * (Math.cos(Math.PI / 2 + Pt) * n - Math.sin(Math.PI / 2 + Pt) * r), t.v0y = t.v0 * (Math.sin(Math.PI / 2 + Pt) * n + Math.cos(Math.PI / 2 + Pt) * r)) : (t.v0x = t.v0 * (Math.cos(-Math.PI / 2 - Pt) * n - Math.sin(-Math.PI / 2 - Pt) * r), t.v0y = t.v0 * (Math.sin(-Math.PI / 2 - Pt) * n + Math.cos(-Math.PI / 2 - Pt) * r));
}
const k8 = () => {
  b.timer = {}, b.tick = 0, U = le(li(_n), (t) => {
    let e = Ca + 2 + (T8 - Ca - 4) * Math.random(), n = 2 * Math.PI * Math.random(), r = z8();
    return {
      index: t,
      direction: t < _n / 2 ? 1 : 0,
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
      M: b.M,
      tau: b.tau,
      A: b.A,
      B: b.B,
      R: b.radius,
      dv0: r,
      v0: b.mean_speed.widget.value() * (1 + b.speed_variability.widget.value() * r)
    };
  }), U = g8(U), D(U, (t) => {
    t.direction = t.index < _n / 2 ? 1 : 0;
  }), D(U, (t) => {
    Rn(t), t.vx = t.v0x, t.vy = t.v0y, t.heading = Math.atan2(t.vx, t.vy);
  }), Ru();
}, j8 = () => {
  b.tick++, Zu(b.number_of_walkers.choices[b.number_of_walkers.widget.value()]);
}, N8 = (t) => {
  t && Ru(), S8();
};
function Ru() {
  const t = b.A, e = 100;
  let n = 0;
  for (b.A = 5, D(U, (r) => {
    r.v0 = 0, r.A = b.A;
  }); n < e; )
    Zu(_n), n++;
  b.A = t, D(U, (r) => {
    r.v0 = b.mean_speed.widget.value() * (1 + b.speed_variability.widget.value() * r.dv0), r.A = t;
  });
}
function S8() {
  const t = b.directional_bias.widget.value();
  if (t >= 0) {
    const e = Math.floor(t);
    D(U, (n) => {
      n.index < e ? n.direction = 0 : n.direction = n.index % 2 == 0 ? 0 : 1, Rn(n);
    });
  } else {
    let e = Math.floor(-t);
    D(U, (n) => {
      n.index < e ? n.direction = 1 : n.direction = n.index % 2 == 0 ? 0 : 1, Rn(n);
    });
  }
}
function Zu(t) {
  const e = ci(U, (r, i) => i < t), n = ci(lt, (r) => r.active == !0);
  D(e, (r) => {
    r.dx = r.vx, r.dy = r.vy, r.dvx = r.M / r.tau * (r.v0x - r.vx), r.dvy = r.M / r.tau * (r.v0y - r.vy);
    let i = 0, o = 0;
    D(e, (c) => {
      let u = Ba(r, c), l = (r.x - c.x) / u, h = (r.y - c.y) / u, f = -h, d = l;
      if ((c.vx - r.vx) * f + (c.vy - r.vy) * d, c.index != r.index) {
        let g = r.A * Math.exp((r.R + c.R - u) / r.B) + b.k * Da(2 * b.radius - u), y = b.kappa * Da(2 * b.radius - u) * ((c.vx - r.vx) * f + (c.vx - r.vx) * d);
        i += g * l + y * f, o += g * h + y * d;
      }
    }), D(n, (c) => {
      let u = Ba(r, c), l = (r.x - c.x) / u, h = (r.y - c.y) / u, f = 2.5 * r.A * Math.exp((r.R + c.R - u) / r.B);
      i += f * l, o += f * h;
    });
    let a = Xt(r.x, r.y), s = 2.5 * r.A * Math.exp((r.R - (b.R2 - a)) / r.B);
    i -= s * r.x / Xt(r.x, r.y), o -= s * r.y / Xt(r.x, r.y), r.dvx += i, r.dvy += o, r.dx *= an, r.dy *= an, r.dvx *= an, r.dvy *= an;
  }), D(e, (r) => {
    r.x += r.dx, r.y += r.dy, r.r = Xt(r.x, r.y), r.vx += r.dvx, r.vy += r.dvy, Rn(r), r.heading = Math.atan2(r.vx, r.vy), r.theta = Math.atan2(r.x, r.y);
  });
}
const ge = b.person_scale, sn = "matrix(0.1,0,0,-0.1,-52,66)", H8 = "M 170 844.882812 L 870 844.882812 C 952.8125 844.882812 1020 762.578125 1020 661.171875 C 1020 559.765625 952.8125 477.421875 870 477.421875 L 170 477.421875 C 87.1875 477.421875 20 559.765625 20 661.171875 C 20 762.578125 87.1875 844.882812 170 844.882812 Z M 170 844.882812", X8 = "M 562.34375 1270.507812 C 589.609375 1217.8125 589.609375 1132.421875 562.34375 1079.726562 C 535.117188 1027.070312 490.9375 1027.070312 463.671875 1079.726562 C 436.445312 1132.421875 436.445312 1217.8125 463.671875 1270.507812 C 490.9375 1323.164062 535.117188 1323.164062 562.34375 1270.507812 ", I8 = "M 741.875 1040.820312 C 870.859375 855.546875 870.859375 555.15625 741.875 369.882812 C 612.929688 184.609375 403.828125 184.609375 274.84375 369.882812 C 145.898438 555.15625 145.898438 855.546875 274.84375 1040.820312 C 403.828125 1226.09375 612.929688 1226.09375 741.875 1040.820312 ", E8 = [
  "M 247.890625 841.757812 L 251.523438 230.9375 ",
  "M 313.007812 751.875 L 316.601562 141.015625 ",
  "M 378.125 751.875 L 381.71875 141.015625 ",
  "M 443.242188 751.875 L 446.835938 141.015625 ",
  "M 508.359375 710 L 511.953125 99.179688 ",
  "M 573.476562 751.875 L 577.070312 141.015625 ",
  "M 638.59375 798.359375 L 642.1875 187.539062 ",
  "M 703.710938 844.882812 L 707.304688 234.0625 ",
  "M 768.828125 891.40625 L 772.421875 280.546875 "
], B8 = [
  "M 69.257812 27.300781 C 71.984375 30.023438 71.984375 34.441406 69.257812 37.164062 C 66.535156 39.890625 62.117188 39.890625 59.390625 37.164062 C 56.667969 34.441406 56.667969 30.023438 59.390625 27.300781 C 62.117188 24.574219 66.535156 24.574219 69.257812 27.300781 ",
  "M 43.210938 27.300781 C 45.9375 30.023438 45.9375 34.441406 43.210938 37.164062 C 40.488281 39.890625 36.070312 39.890625 33.34375 37.164062 C 30.621094 34.441406 30.621094 30.023438 33.34375 27.300781 C 36.070312 24.574219 40.488281 24.574219 43.210938 27.300781 "
], D8 = (t) => {
  t.append("path").attr("d", H8).attr("transform", "scale(" + ge + ")" + sn).classed(O.shoulder, !0), t.append("path").attr("d", X8).attr("transform", "scale(" + ge + ")" + sn).classed(O.nose, !0).style("opacity", b.symbols.widget.value() == 0 ? 1 : 0), t.append("path").attr("d", I8).attr("transform", "scale(" + ge + ")" + sn).classed(O.head, !0), t.selectAll("." + O.hair).data(E8).enter().append("path").attr("class", O.hair).attr("d", (e) => e).attr("transform", "scale(" + ge + ")" + sn), t.selectAll("." + O.eye).data(B8).enter().append("path").attr("class", O.eye).attr("d", (e) => e).attr("transform", "scale(" + ge + ")matrix(1,0,0,1,-52,-66)");
}, qu = "data:image/png;base64,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";
console.log(qu);
const Zn = b.L;
b.person_scale;
var Tt = Ce().domain([-Zn, Zn]), Me = Ce().domain([-Zn, Zn]), un;
const C8 = (t, e) => {
  const n = e.display_size.width, r = e.display_size.height;
  Tt.range([-n / 2, n / 2]), Me.range([-r / 2, r / 2]);
  const i = b.number_of_walkers.choices[b.number_of_walkers.widget.value()];
  t.selectAll("#origin").remove();
  const o = t.append("g").attr("id", "origin").attr("transform", "translate(" + n / 2 + "," + r / 2 + ")");
  o.append("circle").attr("r", Tt(b.R2)).attr("class", O.arena), un = o.selectAll("." + O.node).data(U).enter().append("g").attr("class", O.node).attr("transform", (s) => "translate(" + Tt(s.x) + "," + Me(s.y) + ")rotate(" + (180 - s.heading * 180 / Math.PI) + ")").style("opacity", function(s, c) {
    return c < i ? 1 : 0;
  }).classed(O.left, (s) => s.direction).classed(O.right, (s) => !s.direction), un.append("circle").attr("r", Tt(1)).attr("class", O.mulch);
  const a = un.append("g").attr("class", O.person);
  D8(a), un.append("image").attr("xlink:href", qu).attr("width", 30).attr("height", 30).attr("x", -15).attr("y", -15).attr("class", O.manlio), o.selectAll("." + O.obstacle).data(lt).enter().append("circle").attr("class", (s) => O.obstacle + " " + O[s.name]).attr("r", (s) => Tt(s.R)).attr("cx", (s) => Tt(s.x)).attr("cy", (s) => Me(s.y)).style("opacity", function(s) {
    return s.active == !0 ? 1 : 0;
  }), t.selectAll("#origin").selectAll("." + O.person).style("opacity", b.symbols.widget.value() == 0 ? 1 : 0), t.selectAll("#origin").selectAll("." + O.mulch).style("opacity", b.symbols.widget.value() == 1 ? 1 : 0), t.selectAll("#origin").selectAll("." + O.manlio).style("opacity", b.symbols.widget.value() == 2 ? 1 : 0);
}, G8 = (t, e) => {
  const n = b.number_of_walkers.choices[b.number_of_walkers.widget.value()];
  t.selectAll("#origin").selectAll("." + O.node).attr("transform", (r) => "translate(" + Tt(r.x) + "," + Me(r.y) + ")rotate(" + (180 - r.heading * 180 / Math.PI) + ")").style("opacity", function(r, i) {
    return i < n ? 1 : 0;
  });
}, Y8 = (t, e) => {
  const n = b.number_of_walkers.choices[b.number_of_walkers.widget.value()];
  t.selectAll("#origin").selectAll("." + O.obstacle).style("opacity", function(r) {
    return r.active == !0 ? 1 : 0;
  }), t.selectAll("#origin").selectAll("." + O.node).attr("transform", (r) => "translate(" + Tt(r.x) + "," + Me(r.y) + ")rotate(" + (180 - r.heading * 180 / Math.PI) + ")").style("opacity", function(r, i) {
    return i < n ? 1 : 0;
  }).classed(O.left, (r) => r.direction).classed(O.right, (r) => !r.direction), t.selectAll("#origin").selectAll("." + O.person).style("opacity", b.symbols.widget.value() == 0 ? 1 : 0), t.selectAll("#origin").selectAll("." + O.mulch).style("opacity", b.symbols.widget.value() == 1 ? 1 : 0), t.selectAll("#origin").selectAll("." + O.manlio).style("opacity", b.symbols.widget.value() == 2 ? 1 : 0);
};
function L8(t, e) {
  j8(), G8(t);
}
function Uu(t, e) {
  k8(), C8(t, e);
}
function cn(t, e, n) {
  N8(n), Y8(t);
}
var Ga = {};
const F8 = (t, e) => {
  zt.value() == 1 ? Ga = bf(() => L8(t), P.simulation.delay) : Ga.stop();
}, J8 = (t, e, n) => {
  const r = (o, a) => {
    D(ci(lt, (s) => s.name == a), (s) => {
      s.active = o;
    }), cn(t, n, !0);
  }, i = () => {
    U.forEach(function(o) {
      o.v0 = b.mean_speed.widget.value() * (1 + b.speed_variability.widget.value() * o.dv0);
    });
  };
  gr.update(() => w8(e)), zt.update(() => F8(t)), pr.update(() => Uu(t, n)), b.mean_speed.widget.update(i), b.number_of_walkers.widget.update(() => cn(t, n, !0)), b.directional_bias.widget.update(() => cn(t, n, !1)), b.symbols.widget.update(() => cn(t, n, !1)), b.single_large_obstacle.widget.update(() => r(b.single_large_obstacle.widget.value(), "obs1")), b.two_smaller_obstacles.widget.update(() => r(b.two_smaller_obstacles.widget.value(), "obs2")), b.three_diagonal_obstacles.widget.update(() => r(b.three_diagonal_obstacles.widget.value(), "obs3"));
}, R8 = {
  name: "@explorables/the_walking_head",
  title: "The walking head",
  subtitle: "Pedestrian dynamics",
  description: "This explorable illustrates a simple model for pedestrian dynamics. The model can explain spontaneous lane formation in opposing flows, congestion patterns, and phenomena like crowd turbulence.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Z8(t, e = Qu) {
  const n = CA(t, e), r = n.display, i = n.controls, o = n.grid;
  return b8(i, o), J8(r, i, e), Uu(r, e), {
    halt() {
      zt.value() === 1 && zt.press(i);
    },
    reset() {
      zt.value() === 1 && zt.press(i), gr.press(i), pr.press(i);
    },
    config: e,
    meta: R8
  };
}
export {
  Qu as config,
  Z8 as default,
  Z8 as load,
  R8 as meta
};
