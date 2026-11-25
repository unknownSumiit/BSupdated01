const _k = 25;
function _d(d) { let r; try { r = decodeURIComponent(escape(atob(d))); } catch(e) { r = atob(d); } let o = ""; for (let i = 0; i < r.length; i++) o += String.fromCharCode(r.charCodeAt(i) ^ _k); return o; }
const _s = {
    "like.title": "Notifications",
    "like.and": "and",
    "like.others": "other people",
    "like.liked_post": "liked your post.",
    "like.ago": "5 minutes ago",
    "like.view": "View your post",
    "like.close": "Close",
};
export function t(k) { return _s[k] || k; }

const _profiles = [
    { name: "Camille Moreau", img: "profile-04-camille.jpg" },
    { name: "Emma Leroy", img: "profile-06-emma.jpg" },
    { name: "Inès Roux", img: "profile-08-ines.jpg" },
    { name: "Manon Laurent", img: "profile-09-manon.jpg" },
    { name: "Nathalie Fournier", img: "profile-13-nathalie.jpg" },
    { name: "Amélie Girard", img: "profile-14-amelie.jpg" },
    { name: "Sophie Martin", img: "profile-02-sophie.jpg" },
    { name: "Julie Bonnet", img: "profile-07-julie.jpg" },
    { name: "Lola Mercier", img: "profile-12-lola.jpg" },
];

function _shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const _selected = _shuffle([..._profiles]).slice(0, 4);
export function getSelectedProfiles() { return _selected; }
