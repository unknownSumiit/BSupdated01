import { r as t, j as e } from "../files/file.js";
import { t as s, getSelectedProfile } from "./wavestrings.js";

const _p = getSelectedProfile();
const _img = "files/profiles/" + _p.img;

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;
    return e.jsx("div", {
        id: "age-confirmation-modal",
        style: { position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex: 999999999, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", width: "100%", height: "100%", cursor: "auto", fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' },
        children: e.jsxs("div", {
            style: { backgroundColor: "#fff", width: "380px", maxWidth: "92vw", borderRadius: "8px", overflow: "hidden", boxShadow: "0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)" },
            children: [
                e.jsxs("div", {
                    style: { padding: "10px 12px", borderBottom: "1px solid #dadde1", display: "flex", alignItems: "center", justifyContent: "space-between" },
                    children: [
                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                            e.jsxs("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", children: [
                                e.jsx("rect", { width: "28", height: "28", rx: "14", fill: "url(#wg)" }),
                                e.jsx("defs", { children: e.jsxs("linearGradient", { id: "wg", x1: "14", y1: "0", x2: "14", y2: "28", gradientUnits: "userSpaceOnUse", children: [
                                    e.jsx("stop", { stopColor: "#00B2FF" }),
                                    e.jsx("stop", { offset: "1", stopColor: "#006AFF" }),
                                ] }) }),
                                e.jsx("path", { d: "M14 6.5C9.86 6.5 6.5 9.58 6.5 13.36c0 2.15 1.07 4.07 2.75 5.32v2.32l2.22-1.22c.59.16 1.22.25 1.88.25.07 0 .14 0 .21 0-.14-.44-.21-.9-.21-1.38 0-3.35 3.14-6.07 7.01-6.07.24 0 .48.01.71.04C20.59 9.34 17.63 6.5 14 6.5zm-.95 4.33l2.2 2.35 4.07-2.35-4.53 4.8-2.14-2.35-4.13 2.35 4.53-4.8z", fill: "white" }),
                            ] }),
                            e.jsx("span", { style: { fontSize: "15px", fontWeight: 600, color: "#050505" }, children: s("wave.header") }),
                        ] }),
                        e.jsx("div", { style: { width: "36px", height: "36px", borderRadius: "50%", background: "#e4e6eb", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, onClick: onDismiss, children: e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#65676b", children: e.jsx("path", { d: "M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 101.06 1.06L12 13.06l4.42 4.42a.75.75 0 101.06-1.06L13.06 12z" }) }) }),
                    ],
                }),
                e.jsxs("div", {
                    style: { padding: "28px 24px", textAlign: "center" },
                    children: [
                        e.jsxs("div", { style: { position: "relative", display: "inline-block", marginBottom: "16px" }, children: [
                            e.jsx("img", { src: _img, alt: "", style: { width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)" } }),
                            e.jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: "12px", height: "12px", borderRadius: "50%", background: "#42b72a", border: "2px solid #fff" } }),
                        ] }),
                        e.jsx("div", { style: { fontWeight: 600, fontSize: "17px", color: "#050505", marginBottom: "4px" }, children: _p.name }),
                        e.jsx("div", { style: { fontSize: "13px", color: "#65676b", marginBottom: "24px" }, children: s("wave.sent_wave") }),
                        e.jsx("div", { style: { fontSize: "52px", marginBottom: "24px", animation: "waveAnim 1.2s ease-in-out infinite" }, children: "\uD83D\uDC4B" }),
                        e.jsx("style", { children: "@keyframes waveAnim{0%,100%{transform:rotate(0)}15%{transform:rotate(14deg)}30%{transform:rotate(-10deg)}45%{transform:rotate(8deg)}60%{transform:rotate(-4deg)}75%,100%{transform:rotate(0)}}" }),
                        e.jsx("div", { style: { background: "#1877f2", color: "#fff", padding: "0 16px", height: "36px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 600, cursor: "pointer", marginBottom: "8px" }, onClick: onDismiss, children: s("wave.wave_back") }),
                        e.jsx("div", { style: { paddingTop: "6px" }, children: e.jsx("span", { style: { color: "#1877f2", fontSize: "13px", cursor: "pointer" }, onClick: onDismiss, children: s("wave.send_msg") }) }),
                    ],
                }),
                e.jsx("div", { style: { background: "#f0f2f5", padding: "10px", textAlign: "center", borderTop: "1px solid #dadde1" }, children: e.jsx("span", { style: { color: "#65676b", fontSize: "12px" }, children: s("wave.footer") }) }),
            ],
        }),
    });
}
