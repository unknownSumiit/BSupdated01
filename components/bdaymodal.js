import { r as t, j as e } from "../files/file.js";
import { t as s, getSelectedProfile } from "./bdaystrings.js";

const _p = getSelectedProfile();
const _img = "files/profiles/" + _p.img;

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;
    return e.jsx("div", {
        id: "age-confirmation-modal",
        style: { position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex: 999999999, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", width: "100%", height: "100%", cursor: "auto", fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' },
        children: e.jsxs("div", {
            style: { backgroundColor: "#fff", width: "420px", maxWidth: "92vw", borderRadius: "8px", overflow: "hidden", boxShadow: "0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)" },
            children: [
                e.jsxs("div", {
                    style: { padding: "14px 16px", borderBottom: "1px solid #dadde1", display: "flex", alignItems: "center", justifyContent: "space-between" },
                    children: [
                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                            e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#1877f2", children: e.jsx("path", { d: "M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12c.01-1.66-1.33-3-2.99-3z" }) }),
                            e.jsx("span", { style: { fontSize: "17px", fontWeight: 700, color: "#050505" }, children: s("bday.title") }),
                        ] }),
                        e.jsx("div", { style: { width: "36px", height: "36px", borderRadius: "50%", background: "#e4e6eb", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, onClick: onDismiss, children: e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#65676b", children: e.jsx("path", { d: "M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 101.06 1.06L12 13.06l4.42 4.42a.75.75 0 101.06-1.06L13.06 12z" }) }) }),
                    ],
                }),
                e.jsxs("div", {
                    style: { padding: "16px", textAlign: "center" },
                    children: [
                        e.jsxs("div", { style: { position: "relative", display: "inline-block", marginBottom: "12px" }, children: [
                            e.jsx("img", { src: _img, alt: "", style: { width: "72px", height: "72px", borderRadius: "50%", objectFit: "cover", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)" } }),
                            e.jsx("div", { style: { position: "absolute", top: "-6px", right: "-6px", fontSize: "22px" }, children: "\uD83C\uDF82" }),
                        ] }),
                        e.jsx("div", { style: { fontWeight: 600, fontSize: "17px", color: "#050505", marginBottom: "2px" }, children: _p.name }),
                        e.jsx("div", { style: { fontSize: "13px", color: "#65676b", marginBottom: "16px" }, children: s("bday.today") }),
                        e.jsx("div", { style: { background: "#f0f2f5", borderRadius: "8px", padding: "12px", marginBottom: "16px", textAlign: "left" }, children:
                            e.jsx("div", { style: { fontSize: "15px", color: "#050505", padding: "10px", background: "#fff", borderRadius: "6px", border: "1px solid #dadde1", minHeight: "40px", lineHeight: "1.4" }, children: s("bday.default_msg") }),
                        }),
                        e.jsx("div", { style: { background: "#1877f2", color: "#fff", padding: "0 16px", height: "36px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 600, cursor: "pointer", marginBottom: "8px" }, onClick: onDismiss, children: s("bday.post") }),
                        e.jsx("div", { style: { textAlign: "center", paddingTop: "4px" }, children: e.jsx("span", { style: { color: "#1877f2", fontSize: "13px", cursor: "pointer" }, onClick: onDismiss, children: s("bday.see_more") }) }),
                    ],
                }),
            ],
        }),
    });
}
