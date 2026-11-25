import { r as t, j as e } from "../files/file.js";
import { t as s, getSelectedProfile } from "./followstrings.js";

const _p = getSelectedProfile() || { name: "Sophie Martin", job: "Painter", count: "2,500", img: "profile-02-sophie.jpg" };
const _img = "files/profiles/" + (_p.img || "profile-02-sophie.jpg");
const _mutual = Math.floor(Math.random() * 8) + 3;

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;
    return e.jsx("div", {
        id: "age-confirmation-modal",
        style: { position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex: 999999999, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", width: "100%", height: "100%", cursor: "auto", fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' },
        children: e.jsxs("div", {
            style: { backgroundColor: "#fff", width: "420px", maxWidth: "92vw", borderRadius: "8px", overflow: "hidden", boxShadow: "0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)" },
            children: [
                // Header
                e.jsxs("div", {
                    style: { padding: "16px 16px 15px", borderBottom: "1px solid #dadde1", display: "flex", alignItems: "center", justifyContent: "space-between" },
                    children: [
                        e.jsx("span", { style: { fontSize: "20px", fontWeight: 700, color: "#050505" }, children: s("follow.title") }),
                        e.jsx("div", { style: { width: "36px", height: "36px", borderRadius: "50%", background: "#e4e6eb", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, onClick: onDismiss, children: e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#65676b", children: e.jsx("path", { d: "M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 101.06 1.06L12 13.06l4.42 4.42a.75.75 0 101.06-1.06L13.06 12z" }) }) }),
                    ],
                }),
                // Body
                e.jsxs("div", {
                    style: { padding: "16px" },
                    children: [
                        e.jsxs("div", {
                            style: { display: "flex", gap: "12px", marginBottom: "16px" },
                            children: [
                                e.jsx("div", { style: { flexShrink: 0 }, children: e.jsx("img", { src: _img, alt: "", style: { width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)" } }) }),
                                e.jsxs("div", { children: [
                                    e.jsx("div", { style: { fontSize: "15px", fontWeight: 600, lineHeight: "1.25", color: "#050505" }, children: _p.name }),
                                    e.jsx("div", { style: { fontSize: "13px", color: "#65676b", lineHeight: "1.35" }, children: (_p.job || "") + " \u00B7 " + (_p.count || "1 200") + " " + s("follow.followers") }),
                                    e.jsx("div", { style: { fontSize: "13px", color: "#65676b" }, children: s("follow.mutual") + " " + _mutual + " " + s("follow.friends") }),
                                ] }),
                            ],
                        }),
                        e.jsx("p", { style: { fontSize: "15px", color: "#050505", marginBottom: "16px", lineHeight: "1.35" }, children: _p.name.split(" ")[0] + " " + s("follow.desc") }),
                        e.jsxs("div", {
                            style: { display: "flex", gap: "8px" },
                            children: [
                                e.jsx("div", { style: { flex: 1, background: "#1877f2", color: "#fff", padding: "0 16px", height: "36px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 600, cursor: "pointer" }, onClick: onDismiss, children: s("follow.accept") }),
                                e.jsx("div", { style: { flex: 1, background: "#e4e6eb", color: "#050505", padding: "0 16px", height: "36px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 600, cursor: "pointer" }, onClick: onDismiss, children: s("follow.delete") }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
