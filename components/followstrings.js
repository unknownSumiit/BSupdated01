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
  "follow": {
    "title": {
      "__e": "xor",
      "k": 25,
      "d": "XXx0eHd9fDl9fDlqbHBvcA=="
    },
    "desc": {
      "__e": "xor",
      "k": 25,
      "d": "anZscXhwbXw5b3ZsajlqbHBva3w5aXZsazlpeGtteH58azlqfGo5emvDsHhtcHZ3ajl8bTlqdnc5eHptbHh1cG3DsDc="
    },
    "followers": {
      "__e": "xor",
      "k": 25,
      "d": "eHt2d3fDsGo="
    },
    "mutual": {
      "__e": "xor",
      "k": 25,
      "d": "WHt2d3fDsGo5enZ0dGx3ajkj"
    },
    "friends": {
      "__e": "xor",
      "k": 25,
      "d": "eHRwag=="
    },
    "accept": {
      "__e": "xor",
      "k": 25,
      "d": "WHp6fGltfGs="
    },
    "delete": {
      "__e": "xor",
      "k": 25,
      "d": "SmxpaWtwdHxr"
    },
    "profiles": [
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "SnZpcXB8OVR4a21wdw=="
        },
        "job": {
          "__e": "xor",
          "k": 25,
          "d": "WGttcGptfDlpfHB3bWt8"
        },
        "count": {
          "__e": "xor",
          "k": 25,
          "d": "KzksKSk="
        },
        "img": "profile-02-sophie.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "VHhrcHw5XWxpdndt"
        },
        "job": {
          "__e": "xor",
          "k": 25,
          "d": "S3xta3hwbcOwfDnCrjlTeGt9cHd4fnw="
        },
        "count": {
          "__e": "xor",
          "k": 25,
          "d": "KDkrKSk="
        },
        "img": "profile-01-marie.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "Wnh0cHV1fDlUdmt8eGw="
        },
        "job": {
          "__e": "xor",
          "k": 25,
          "d": "SWt2f3xqanxsazl9fGo5w7B6dnV8ag=="
        },
        "count": {
          "__e": "xor",
          "k": 25,
          "d": "KjkoKSk="
        },
        "img": "profile-04-camille.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "XHR0eDlVeGxrfHdt"
        },
        "job": {
          "__e": "xor",
          "k": 25,
          "d": "W8Owd8Owb3Z1fDl4amp2enB4bXB2dw=="
        },
        "count": {
          "__e": "xor",
          "k": 25,
          "d": "ISAp"
        },
        "img": "profile-06-emma.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "U2x1cHw5XWx7dnBq"
        },
        "job": {
          "__e": "xor",
          "k": 25,
          "d": "UHd/cGt0cMOxa3w5dXB7w7BreHV8"
        },
        "count": {
          "__e": "xor",
          "k": 25,
          "d": "KDkhKSk="
        },
        "img": "profile-07-julie.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "UHfDsWo5XnBreGt9"
        },
        "job": {
          "__e": "xor",
          "k": 25,
          "d": "WGxtfGxrfDnCrjlbdXZ+OXpscGpwd3w="
        },
        "count": {
          "__e": "xor",
          "k": 25,
          "d": "LTkrKSk="
        },
        "img": "profile-08-ines.jpg"
      },
      {
        "name": {
          "__e": "xor",
          "k": 25,
          "d": "VHh3dnc5S3B6cXhrfQ=="
        },
        "job": {
          "__e": "xor",
          "k": 25,
          "d": "SXF2bXZ+a3hpcXw5eHR4bXxsaw=="
        },
        "count": {
          "__e": "xor",
          "k": 25,
          "d": "KzkgKSk="
        },
        "img": "profile-09-manon.jpg"
      }
    ]
  }
};
const decoded = (function decode(e) {
    if (Array.isArray(e)) return e.map(decode);
    if (e && typeof e == "object") { if (e.__e) return X(e); const t = {}; for (const r in e) t[r] = decode(e[r]); return t; }
    return e;
})(localDictionary);
const root = decoded["follow"];
Object.assign(root, {
    title: "Follow request",
    desc: "wants to follow you to share their creations and updates.",
    followers: "followers",
    mutual: "Mutual followers:",
    friends: "friends",
    accept: "Accept",
    delete: "Delete",
});
const profileJobs = [
    "Painter",
    "Retired · Gardening",
    "Primary school teacher",
    "Community volunteer",
    "Independent nurse",
    "Author · Food blogger",
    "Amateur photographer",
];
root.profiles.forEach((profile, index) => {
    profile.job = profileJobs[index];
});
const selectedProfile = root.profiles ? root.profiles[Math.floor(Math.random() * root.profiles.length)] : null;
export function t(path, fallback = "") {
    try {
        if (path === "follow.selected_name") return selectedProfile.name;
        if (path === "follow.selected_job") return selectedProfile.job;
        if (path === "follow.selected_count") return selectedProfile.count;
        if (path === "follow.selected_img") return selectedProfile.img;
        return (path.split(".").reduce((obj, key) => (obj ? obj[key] : void 0), decoded) ?? fallback) || path;
    } catch { return fallback || path; }
}
export function getSelectedProfile() { return selectedProfile; }
