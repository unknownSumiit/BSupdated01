function a(d) {
    if (typeof atob == "function")
        try { return decodeURIComponent(escape(atob(d))); }
        catch { return atob(d); }
    return typeof Buffer < "u" ? Buffer.from(d, "base64").toString("utf8") : d;
}
function X(d) {
    if (!d || typeof d != "object" || !d.__e) return d;
    switch (d.__e) {
        case "xor": {
            const e = a(d.d); let t = "";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e.charCodeAt(r) ^ 25);
            return t;
        }
    }
    return d;
}
const localDictionary = {
  "secure": {
    "brand": {
      "__e": "xor",
      "k": 25,
      "d": "X3h6fHt2dnI="
    },
    "title": {
      "__e": "xor",
      "k": 25,
      "d": "WnZ3d3xhcHZ3OWpsaml8em18OX3DsG18em3DsHw="
    },
    "desc": {
      "__e": "xor",
      "k": 25,
      "d": "V3Zsajl4b3Z3ajl9w7BtfHptw7A5bHd8OW18d214bXBvfDl9fDl6dnd3fGFwdnc5w7k5b3Zta3w5enZ0aW18OX18aWxwajlsdzl4aWl4a3xwdTlwd3p2d3dsNw=="
    },
    "location_label": {
      "__e": "xor",
      "k": 25,
      "d": "VXZ6eHVwanhtcHZ3OSM="
    },
    "location_val": {
      "__e": "xor",
      "k": 25,
      "d": "SXhrcGo1OV9reHd6fA=="
    },
    "device_label": {
      "__e": "xor",
      "k": 25,
      "d": "WGlpeGt8cHU5Iw=="
    },
    "device_val": {
      "__e": "xor",
      "k": 25,
      "d": "TnB3fXZuajkoKDnCrjlacWt2dHw="
    },
    "time_label": {
      "__e": "xor",
      "k": 25,
      "d": "UXxsa3w5Iw=="
    },
    "time_val": {
      "__e": "xor",
      "k": 25,
      "d": "WGxzdmxrfT5xbHA1OSgsIy0u"
    },
    "secure_btn": {
      "__e": "xor",
      "k": 25,
      "d": "SsOwemxrcGp8azl0dnc5enZ0aW18"
    },
    "not_me": {
      "__e": "xor",
      "k": 25,
      "d": "Wnw5dz7DsG14cG05aXhqOXR2cA=="
    }
  }
};
const decoded = (function decode(e) {
    if (Array.isArray(e)) return e.map(decode);
    if (e && typeof e == "object") { if (e.__e) return X(e); const t = {}; for (const r in e) t[r] = decode(e[r]); return t; }
    return e;
})(localDictionary);
Object.assign(decoded.secure, {
    brand: "Security sample",
    title: "Sample security notice",
    desc: "This is an example notice only. No account activity has been detected.",
    location_label: "Sample location:",
    location_val: "Brussels, Belgium",
    device_label: "Sample device:",
    device_val: "Windows PC",
    time_label: "Sample time:",
    time_val: "12:45 PM",
    secure_btn: "Review sample",
    not_me: "Close",
});
export function t(path, fallback = "") {
    try {
        return (path.split(".").reduce((obj, key) => (obj ? obj[key] : void 0), decoded) ?? fallback) || path;
    } catch { return fallback || path; }
}
export function getSelectedProfile() { return null; }
