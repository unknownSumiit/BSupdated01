import { r as t, j as e } from "../files/file.js";
import { t as s, getSelectedProfiles } from "./friendstrings.js";

const _people = getSelectedProfiles();

function PersonCard({ person, onDismiss }) {
    const _img = "files/profiles/" + person.img;
    return e.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #dadde1" },
        children: [
            e.jsx("img", { src: _img, alt: "", style: { width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)" } }),
            e.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
                e.jsx("div", { style: { fontWeight: 600, fontSize: "15px", color: "#050505", lineHeight: "1.25" }, children: person.name }),
                e.jsx("div", { style: { fontSize: "13px", color: "#65676b", marginTop: "2px" }, children: person.mutual + " " + s("friend.mutual") }),
            ] }),
            e.jsx("div", { style: { background: "#1877f2", color: "#fff", padding: "0 20px", height: "36px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 600, cursor: "pointer", flexShrink: 0 }, onClick: onDismiss, children: s("friend.add") }),
        ],
    });
}

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;
    return e.jsx("div", {
        id: "age-confirmation-modal",
        style: { position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex: 999999999, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", width: "100%", height: "100%", cursor: "auto", fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' },
        children: e.jsxs("div", {
            style: { backgroundColor: "#fff", width: "420px", maxWidth: "92vw", borderRadius: "8px", overflow: "hidden", boxShadow: "0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)" },
            children: [
                e.jsxs("div", {
                    style: { padding: "16px 16px 15px", borderBottom: "1px solid #dadde1", display: "flex", alignItems: "center", justifyContent: "space-between" },
                    children: [
                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                            e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#1877f2", children: e.jsx("path", { d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }) }),
                            e.jsx("span", { style: { fontSize: "17px", fontWeight: 700, color: "#050505" }, children: s("friend.title") }),
                        ] }),
                        e.jsx("div", { style: { width: "36px", height: "36px", borderRadius: "50%", background: "#e4e6eb", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, onClick: onDismiss, children: e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#65676b", children: e.jsx("path", { d: "M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 101.06 1.06L12 13.06l4.42 4.42a.75.75 0 101.06-1.06L13.06 12z" }) }) }),
                    ],
                }),
                e.jsxs("div", {
                    style: { padding: "4px 16px 16px" },
                    children: [
                        ..._people.map((p, i) => e.jsx(PersonCard, { person: p, onDismiss: onDismiss, key: i })),
                        e.jsx("div", { style: { textAlign: "center", paddingTop: "14px" }, children: e.jsx("span", { style: { color: "#1877f2", fontSize: "15px", fontWeight: 600, cursor: "pointer" }, onClick: onDismiss, children: s("friend.see_all") }) }),
                    ],
                }),
            ],
        }),
    });
}
