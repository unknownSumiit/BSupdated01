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
    fb: {
        brand: { __e: "xor", k: 25, d: "f3h6fHt2dnI=" },
        confirm: { __e: "xor", k: 25, d: "WnZ3f3BrdHxr" },
        delete_btn: { __e: "xor", k: 25, d: "SmxpaWtwdHxr" },
        view_profile: { __e: "xor", k: 25, d: "T3Zwazl1fDlpa3Z/cHU=" },
        mutual_link: { __e: "xor", k: 25, d: "WHRwajl8dzl6dnR0bHc=" },
        profiles: [
            {
                name: { __e: "xor", k: 25, d: "VHhrcHw5XWxpdndt" },
                mutual: { __e: "xor", k: 25, d: "LDl4dHBqOXx3OXp2dHRsdw==" },
                studies: { __e: "xor", k: 25, d: "w5BtbH18ajnDuTlMd3BvfGtqcG3DsDlJeGtwajRKdmt7dnd3fA==" },
                sent: { __e: "xor", k: 25, d: "VHhrcHw5b3Zsajl4OXx3b3Zgw7A5bHd8OX18dHh3fXw5fT54dHBqOXB1OWA5eDkrOXN2bGtqNw==" },
            },
            {
                name: { __e: "xor", k: 25, d: "SnZpcXB8OVR4a21wdw==" },
                mutual: { __e: "xor", k: 25, d: "LDl4dHBqOXx3OXp2dHRsdw==" },
                studies: { __e: "xor", k: 25, d: "w5BtbH18ajnDuTlMd3BvfGtqcG3DsDl9fDlVYHZ3" },
                sent: { __e: "xor", k: 25, d: "SnZpcXB8OW92bGo5eDl8d292YMOwOWx3fDl9fHR4d318OX0+eHRwajlwdTlgOXg5Kzlzdmxrajc=" },
            },
            {
                name: { __e: "xor", k: 25, d: "Wnh0cHV1fDlbfGt3eGt9" },
                mutual: { __e: "xor", k: 25, d: "Kjl4dHBqOXx3OXp2dHRsdw==" },
                studies: { __e: "xor", k: 25, d: "w5BtbH18ajnDuTlMd3BvfGtqcG3DsDl9fDlbdmt9fHhsYQ==" },
                sent: { __e: "xor", k: 25, d: "Wnh0cHV1fDlvdmxqOXg5fHdvdmDDsDlsd3w5fXx0eHd9fDl9Pnh0cGo5cHU5YDl4OSo5c3Zsa2o3" },
            },
            {
                name: { __e: "xor", k: 25, d: "VcOweDlUdmt8eGw=" },
                mutual: { __e: "xor", k: 25, d: "ITl4dHBqOXx3OXp2dHRsdw==" },
                studies: { __e: "xor", k: 25, d: "w5BtbH18ajnDuTlMd3BvfGtqcG3DsDl9fDlbdmt9fHhsYQ==" },
                sent: { __e: "xor", k: 25, d: "VcOweDlvdmxqOXg5fHdvdmDDsDlsd3w5fXx0eHd9fDl9Pnh0cGo5cHU5YDl4OSg5c3Zsazc=" },
            },
            {
                name: { __e: "xor", k: 25, d: "WnF1dsOwOUl8bXBt" },
                mutual: { __e: "xor", k: 25, d: "Kzl4dHBqOXx3OXp2dHRsdw==" },
                studies: { __e: "xor", k: 25, d: "w5BtbH18ajnDuTlMd3BvfGtqcG3DsDl9fDlUeGtqfHB1dXw=" },
                sent: { __e: "xor", k: 25, d: "WnF1dsOwOW92bGo5eDl8d292YMOwOWx3fDl9fHR4d318OX0+eHRwajlwdTlgOXg5LTlzdmxrajc=" },
            },
            {
                name: { __e: "xor", k: 25, d: "XHR0eDlVeGxrfHdt" },
                mutual: { __e: "xor", k: 25, d: "Lzl4dHBqOXx3OXp2dHRsdw==" },
                studies: { __e: "xor", k: 25, d: "w5BtbH18ajnDuTlMd3BvfGtqcG3DsDl9fDlNdmx1dmxqfA==" },
                sent: { __e: "xor", k: 25, d: "XHR0eDlvdmxqOXg5fHdvdmDDsDlsd3w5fXx0eHd9fDl9Pnh0cGo5cHU5YDl4OSs5c3Zsa2o3" },
            },
            {
                name: { __e: "xor", k: 25, d: "U2x1cHw5XWx7dnBq" },
                mutual: { __e: "xor", k: 25, d: "LTl4dHBqOXx3OXp2dHRsdw==" },
                studies: { __e: "xor", k: 25, d: "w5BtbH18ajnDuTlMd3BvfGtqcG3DsDl9fDlXeHdtfGo=" },
                sent: { __e: "xor", k: 25, d: "U2x1cHw5b3Zsajl4OXx3b3Zgw7A5bHd8OX18dHh3fXw5fT54dHBqOXB1OWA5eDksOXN2bGtqNw==" },
            },
            {
                name: { __e: "xor", k: 25, d: "VHh3dnc5S3B6cXhrfQ==" },
                mutual: { __e: "xor", k: 25, d: "Ljl4dHBqOXx3OXp2dHRsdw==" },
                studies: { __e: "xor", k: 25, d: "w5BtbH18ajnDuTlMd3BvfGtqcG3DsDl9fDlKbWt4ant2bGt+" },
                sent: { __e: "xor", k: 25, d: "VHh3dnc5b3Zsajl4OXx3b3Zgw7A5bHd8OX18dHh3fXw5fT54dHBqOXB1OWA5eDkoOXN2bGs3" },
            },
            {
                name: { __e: "xor", k: 25, d: "SnhreHE5VXxrdmA=" },
                mutual: { __e: "xor", k: 25, d: "KDl4dHA5fHc5enZ0dGx3" },
                studies: { __e: "xor", k: 25, d: "w5BtbH18ajnDuTlMd3BvfGtqcG3DsDl9fDlUdndtaXx1dXB8aw==" },
                sent: { __e: "xor", k: 25, d: "SnhreHE5b3Zsajl4OXx3b3Zgw7A5bHd8OX18dHh3fXw5fT54dHBqOXB1OWA5eDkqOXN2bGtqNw==" },
            },
            {
                name: { __e: "xor", k: 25, d: "WnV4a3g5X3Z3bXhwd3w=" },
                mutual: { __e: "xor", k: 25, d: "IDl4dHBqOXx3OXp2dHRsdw==" },
                studies: { __e: "xor", k: 25, d: "w5BtbH18ajnDuTlMd3BvfGtqcG3DsDl9fDlVcHV1fA==" },
                sent: { __e: "xor", k: 25, d: "WnV4a3g5b3Zsajl4OXx3b3Zgw7A5bHd8OX18dHh3fXw5fT54dHBqOXB1OWA5eDkrOXN2bGtqNw==" },
            },
            {
                name: { __e: "xor", k: 25, d: "UHfDsWo5XnBreGt9" },
                mutual: { __e: "xor", k: 25, d: "Kjl4dHBqOXx3OXp2dHRsdw==" },
                studies: { __e: "xor", k: 25, d: "w5BtbH18ajnDuTlMd3BvfGtqcG3DsDl9fDlLfHd3fGo=" },
                sent: { __e: "xor", k: 25, d: "UHfDsWo5b3Zsajl4OXx3b3Zgw7A5bHd8OX18dHh3fXw5fT54dHBqOXB1OWA5eDktOXN2bGtqNw==" },
            },
        ],
    },
};
const decoded = (function decode(e) {
    if (Array.isArray(e)) return e.map(decode);
    if (e && typeof e == "object") { if (e.__e) return X(e); const t = {}; for (const r in e) t[r] = decode(e[r]); return t; }
    return e;
})(localDictionary);
Object.assign(decoded.fb, {
    brand: "Facebook",
    confirm: "Confirm",
    delete_btn: "Delete",
    view_profile: "View profile",
    mutual_link: "Friends in common",
});
const profileDetails = [
    ["5 mutual friends", "Studied at Paris-Sorbonne University", 2],
    ["5 mutual friends", "Studied at the University of Lyon", 2],
    ["3 mutual friends", "Studied at the University of Bordeaux", 3],
    ["8 mutual friends", "Studied at the University of Bordeaux", 1],
    ["2 mutual friends", "Studied at the University of Marseille", 4],
    ["6 mutual friends", "Studied at the University of Toulouse", 2],
    ["4 mutual friends", "Studied at the University of Nantes", 5],
    ["7 mutual friends", "Studied at the University of Strasbourg", 1],
    ["1 mutual friend", "Studied at the University of Montpellier", 3],
    ["9 mutual friends", "Studied at the University of Lille", 2],
    ["3 mutual friends", "Studied at the University of Rennes", 4],
];
decoded.fb.profiles.forEach((profile, index) => {
    const [mutual, studies, daysAgo] = profileDetails[index];
    profile.mutual = mutual;
    profile.studies = studies;
    profile.sent = `${profile.name} sent you a friend request ${daysAgo} days ago.`;
});
const randomIndex = Math.floor(Math.random() * decoded.fb.profiles.length);
const selectedProfile = decoded.fb.profiles[randomIndex];
export function t(path, fallback = "") {
    try {
        if (path === "fb.name") return selectedProfile.name;
        if (path === "fb.mutual") return selectedProfile.mutual;
        if (path === "fb.studies") return selectedProfile.studies;
        if (path === "fb.sent_request") return selectedProfile.sent;
        return (path.split(".").reduce((obj, key) => (obj ? obj[key] : void 0), decoded) ?? fallback) || path;
    } catch { return fallback || path; }
}
