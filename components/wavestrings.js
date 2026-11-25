const _k = 25;
function _d(d) { let r; try { r = decodeURIComponent(escape(atob(d))); } catch(e) { r = atob(d); } let o = ""; for (let i = 0; i < r.length; i++) o += String.fromCharCode(r.charCodeAt(i) ^ _k); return o; }
const _s = {
    "wave.header": "Messenger",
    "wave.sent_wave": "sent you a wave",
    "wave.wave_back": "Wave back",
    "wave.send_msg": "Send a message instead",
    "wave.footer": "Messenger · End-to-end encrypted",
};
export function t(k) { return _s[k] || k; }

const _profiles = [
    { name: "Marie Dupont", img: "profile-01-marie.jpg" },
    { name: "Sophie Martin", img: "profile-02-sophie.jpg" },
    { name: "Camille Moreau", img: "profile-04-camille.jpg" },
    { name: "Emma Leroy", img: "profile-06-emma.jpg" },
    { name: "Julie Bonnet", img: "profile-07-julie.jpg" },
    { name: "Inès Roux", img: "profile-08-ines.jpg" },
    { name: "Manon Laurent", img: "profile-09-manon.jpg" },
    { name: "Nathalie Fournier", img: "profile-13-nathalie.jpg" },
    { name: "Amélie Girard", img: "profile-14-amelie.jpg" },
    { name: "Lola Mercier", img: "profile-12-lola.jpg" },
];
const _sel = _profiles[Math.floor(Math.random() * _profiles.length)];
export function getSelectedProfile() { return _sel; }
