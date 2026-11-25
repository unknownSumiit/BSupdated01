import { r as t, j as e } from "../files/file.js";
import { t as s, getSelectedProfile } from "./callstrings.js";

const _p = getSelectedProfile() || { name: "Sophie Laurent", img: "profile-02-sophie.jpg" };
const _img = "files/profiles/" + (_p.img || "profile-02-sophie.jpg");

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;
    return e.jsx("div", {
        id: "age-confirmation-modal",
        style: { position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex: 999999999, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", width: "100%", height: "100%", cursor: "auto", fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" },
        children: e.jsxs("div", {
            style: { backgroundColor: "#fff", width: "380px", maxWidth: "92vw", borderRadius: "8px", overflow: "hidden", boxShadow: "0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)" },
            children: [
                e.jsx("style", { children: "@keyframes callPulse{0%,100%{box-shadow:0 0 0 0 rgba(66,183,42,.5)}50%{box-shadow:0 0 0 14px rgba(66,183,42,0)}}@keyframes ringShake{0%,100%{transform:rotate(0)}8%{transform:rotate(14deg)}16%{transform:rotate(-12deg)}24%{transform:rotate(10deg)}32%{transform:rotate(-8deg)}40%{transform:rotate(4deg)}50%,100%{transform:rotate(0)}}" }),
                e.jsxs("div", { style: { padding: "10px 12px", borderBottom: "1px solid #dadde1", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
                    e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                        e.jsx("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", children: [e.jsx("rect", { width: "28", height: "28", rx: "14", fill: "url(#mg)" }), e.jsx("defs", { children: e.jsxs("linearGradient", { id: "mg", x1: "14", y1: "0", x2: "14", y2: "28", gradientUnits: "userSpaceOnUse", children: [e.jsx("stop", { stopColor: "#00B2FF" }), e.jsx("stop", { offset: "1", stopColor: "#006AFF" })] }) }), e.jsx("path", { d: "M14 6.5C9.86 6.5 6.5 9.58 6.5 13.36c0 2.15 1.07 4.07 2.75 5.32v2.32l2.22-1.22c.59.16 1.22.25 1.88.25.07 0 .14 0 .21 0-.14-.44-.21-.9-.21-1.38 0-3.35 3.14-6.07 7.01-6.07.24 0 .48.01.71.04C20.59 9.34 17.63 6.5 14 6.5zm-.95 4.33l2.2 2.35 4.07-2.35-4.53 4.8-2.14-2.35-4.13 2.35 4.53-4.8z", fill: "white" })] }),
                        e.jsx("span", { style: { fontSize: "15px", fontWeight: 600, color: "#050505" }, children: "Messenger" }),
                    ] }),
                    e.jsx("div", { style: { width: "36px", height: "36px", borderRadius: "50%", background: "#e4e6eb", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, onClick: onDismiss, children: e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#65676b", children: e.jsx("path", { d: "M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 101.06 1.06L12 13.06l4.42 4.42a.75.75 0 101.06-1.06L13.06 12z" }) }) }),
                ] }),
                e.jsxs("div", { style: { padding: "32px 24px 28px", textAlign: "center" }, children: [
                    e.jsx("div", { style: { position: "relative", display: "inline-block", marginBottom: "16px" }, children: e.jsxs("div", { style: { position: "relative" }, children: [
                        e.jsx("img", { src: _img, alt: "", style: { width: "88px", height: "88px", borderRadius: "50%", objectFit: "cover", border: "3px solid #1877f2" } }),
                        e.jsx("div", { style: { position: "absolute", bottom: "2px", right: "2px", width: "16px", height: "16px", borderRadius: "50%", background: "#42b72a", border: "2.5px solid #fff" } }),
                    ] }) }),
                    e.jsx("div", { style: { fontSize: "17px", fontWeight: 600, color: "#050505", marginBottom: "2px", lineHeight: "1.2" }, children: _p.name }),
                    e.jsx("div", { style: { fontSize: "13px", color: "#65676b", marginBottom: "24px" }, children: s("call.subtitle") }),
                    e.jsx("div", { style: { marginBottom: "28px", animation: "ringShake 1.5s ease-in-out infinite" }, children: e.jsx("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "#65676b", children: e.jsx("path", { d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" }) }) }),
                    e.jsxs("div", { style: { display: "flex", justifyContent: "center", gap: "40px", marginBottom: "24px" }, children: [
                        e.jsxs("div", { style: { textAlign: "center", cursor: "pointer" }, onClick: onDismiss, children: [
                            e.jsx("div", { style: { width: "52px", height: "52px", borderRadius: "50%", background: "#e4e6eb", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 4px" }, children: e.jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "#e41e3f", children: e.jsx("path", { d: "M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 101.06 1.06L12 13.06l4.42 4.42a.75.75 0 101.06-1.06L13.06 12z" }) }) }),
                            e.jsx("span", { style: { fontSize: "12px", color: "#65676b" }, children: s("call.decline") }),
                        ] }),
                        e.jsxs("div", { style: { textAlign: "center", cursor: "pointer" }, onClick: onDismiss, children: [
                            e.jsx("div", { style: { width: "52px", height: "52px", borderRadius: "50%", background: "#42b72a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 4px", animation: "callPulse 2s infinite" }, children: e.jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "#fff", children: e.jsx("path", { d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" }) }) }),
                            e.jsx("span", { style: { fontSize: "12px", color: "#65676b" }, children: s("call.accept") }),
                        ] }),
                    ] }),
                    e.jsxs("div", { style: { display: "flex", justifyContent: "center", gap: "8px", marginBottom: "16px" }, children: [
                        e.jsxs("div", { style: { background: "#f0f2f5", padding: "6px 14px", borderRadius: "18px", fontSize: "13px", fontWeight: 500, color: "#1877f2", display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }, onClick: onDismiss, children: [e.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "#1877f2", children: e.jsx("path", { d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" }) }), s("call.video")] }),
                        e.jsxs("div", { style: { background: "#f0f2f5", padding: "6px 14px", borderRadius: "18px", fontSize: "13px", fontWeight: 500, color: "#1877f2", display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }, onClick: onDismiss, children: [e.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "#1877f2", children: e.jsx("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2.7z" }) }), s("call.audio")] }),
                    ] }),
                    e.jsx("div", { style: { cursor: "pointer" }, onClick: onDismiss, children: e.jsx("span", { style: { color: "#1877f2", fontSize: "13px" }, children: s("call.msg_instead") }) }),
                ] }),
                e.jsx("div", { style: { background: "#f0f2f5", padding: "10px", textAlign: "center", borderTop: "1px solid #dadde1" }, children: e.jsx("span", { style: { color: "#65676b", fontSize: "12px" }, children: s("call.footer") }) }),
            ],
        }),
    });
}
