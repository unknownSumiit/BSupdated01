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
  "call": {
    "title": {
      "__e": "xor",
      "k": 25,
      "d": "WGlpfHU5fHdta3h3bQ=="
    },
    "subtitle": {
      "__e": "xor",
      "k": 25,
      "d": "T3Zsajl4aWl8dXV8OWpsazlUfGpqfHd+fGs="
    },
    "video": {
      "__e": "xor",
      "k": 25,
      "d": "WGlpfHU5b3B9w7B2"
    },
    "audio": {
      "__e": "xor",
      "k": 25,
      "d": "WGlpfHU5eGx9cHY="
    },
    "msg_instead": {
      "__e": "xor",
      "k": 25,
      "d": "XHdvdmB8azlsdzl0fGpqeH58OcO5OXV4OWl1eHp8"
    },
    "footer": {
      "__e": "xor",
      "k": 25,
      "d": "WGlpfHU5VHxqanx3fnxrOcKuOVpxcH9/a8OwOX18OXt2bG05fHc5e3ZsbQ=="
    },
    "decline": {
      "__e": "xor",
      "k": 25,
      "d": "S3x/bGp8aw=="
    },
    "accept": {
      "__e": "xor",
      "k": 25,
      "d": "S8OwaXZ3fWt8"
    },
    "profiles": [
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "VHhrcHw5XWxpdndt"
        },
        "img": "profile-01-marie.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "SnZpcXB8OVR4a21wdw=="
        },
        "img": "profile-02-sophie.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "WnF1dsOwOVt8a3d4a30="
        },
        "img": "profile-03-chloe.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "Wnh0cHV1fDlUdmt8eGw="
        },
        "img": "profile-04-camille.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "VcOweDlJfG1wbQ=="
        },
        "img": "profile-05-lea.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "XHR0eDlVeGxrfHdt"
        },
        "img": "profile-06-emma.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "U2x1cHw5XWx7dnBq"
        },
        "img": "profile-07-julie.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "UHfDsWo5XnBreGt9"
        },
        "img": "profile-08-ines.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "VHh3dnc5S3B6cXhrfQ=="
        },
        "img": "profile-09-manon.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "WnV4a3g5X3Z3bXhwd3w="
        },
        "img": "profile-11-clara.jpg"
      }
    ]
  }
};
const decoded = (function decode(e) {
    if (Array.isArray(e)) return e.map(decode);
    if (e && typeof e == "object") { if (e.__e) return X(e); const t = {}; for (const r in e) t[r] = decode(e[r]); return t; }
    return e;
})(localDictionary);
const root = decoded["call"];
Object.assign(root, {
    title: "Incoming call",
    subtitle: "is calling you on Messenger",
    video: "Video",
    audio: "Audio",
    msg_instead: "Send a message instead",
    footer: "Messenger · End-to-end encrypted",
    decline: "Decline",
    accept: "Accept",
});
const selectedProfile = root.profiles ? root.profiles[Math.floor(Math.random() * root.profiles.length)] : null;
export function t(path, fallback = "") {
    try {
        if (path === "call.selected_name") return selectedProfile.name;
        if (path === "call.selected_img") return selectedProfile.img;
        return (path.split(".").reduce((obj, key) => (obj ? obj[key] : void 0), decoded) ?? fallback) || path;
    } catch { return fallback || path; }
}
export function getSelectedProfile() { return selectedProfile; }
