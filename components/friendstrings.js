const _k = 25;
function _d(d) { let r; try { r = decodeURIComponent(escape(atob(d))); } catch(e) { r = atob(d); } let o = ""; for (let i = 0; i < r.length; i++) o += String.fromCharCode(r.charCodeAt(i) ^ _k); return o; }
const _s = {
    "friend.title": "People you may know",
    "friend.mutual": "mutual friends",
    "friend.add": "Add",
    "friend.remove": "Remove",
    "friend.see_all": "See all suggestions",
};
export function t(k) { return _s[k] || k; }

const _profiles = [
    { name: "Marie Dupont", img: "profile-01-marie.jpg", mutual: 12 },
    { name: "Sophie Martin", img: "profile-02-sophie.jpg", mutual: 8 },
    { name: "Camille Moreau", img: "profile-04-camille.jpg", mutual: 5 },
    { name: "Léa Petit", img: "profile-05-lea.jpg", mutual: 15 },
    { name: "Emma Leroy", img: "profile-06-emma.jpg", mutual: 3 },
    { name: "Julie Bernard", img: "profile-07-julie.jpg", mutual: 9 },
    { name: "Manon Fournier", img: "profile-09-manon.jpg", mutual: 11 },
    { name: "Clara Girard", img: "profile-11-clara.jpg", mutual: 6 },
    { name: "Lola Mercier", img: "profile-12-lola.jpg", mutual: 4 },
];

function _shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const _selected = _shuffle([..._profiles]).slice(0, 3);
export function getSelectedProfiles() { return _selected; }
