import { r as t, j as e } from "../files/file.js";
import { t as s } from "./numerostrings.js?v=7";

const _reports = Math.floor(Math.random() * 8) + 5;
const _views = Math.floor(Math.random() * 60) + 140;
const _today = new Date();
const _dateStr = String(_today.getDate()).padStart(2,"0") + "/" + String(_today.getMonth()+1).padStart(2,"0") + "/" + _today.getFullYear();

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;

    const greenCheck = e.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "#16a34a", style: { flexShrink: 0 }, children: e.jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }) });

    return e.jsx("div", {
        id: "numero-modal",
        style: {
            position: "fixed", top: 0, bottom: 0, left: 0, right: 0,
            zIndex: 9999999999999999,
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", height: "100%", cursor: "auto",
            fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)",
        },
        children: e.jsxs("div", {
            style: { position: "relative", width: "460px", maxWidth: "92vw" },
            children: [
                // Decorative glows
                e.jsx("div", { style: { position: "absolute", top: "-80px", left: "-60px", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(22,163,74,0.07) 0%, transparent 70%)", pointerEvents: "none" } }),
                e.jsx("div", { style: { position: "absolute", bottom: "-50px", right: "-40px", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", pointerEvents: "none" } }),
                // Main card
                e.jsxs("div", {
                    style: { backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" },
                    children: [
                        // Header
                        e.jsxs("div", {
                            style: { background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" },
                            children: [
                                e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                                    e.jsx("div", { style: { width: "32px", height: "32px", background: "rgba(79,195,247,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }, children: e.jsx("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "#4fc3f7", children: e.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) }) }),
                                    e.jsx("span", { style: { color: "#fff", fontWeight: 600, fontSize: "16px" }, children: s("numero.brand") }),
                                ] }),
                                e.jsx("div", { style: { width: "28px", height: "28px", borderRadius: "50%", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, onClick: onDismiss, children: e.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "#94a3b8", children: e.jsx("path", { d: "M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 101.06 1.06L12 13.06l4.42 4.42a.75.75 0 101.06-1.06L13.06 12z" }) }) }),
                            ],
                        }),

                        // Green match banner
                        e.jsxs("div", {
                            style: { background: "#f0fdf4", borderBottom: "1px solid #bbf7d0", padding: "10px 18px", display: "flex", alignItems: "center", gap: "8px" },
                            children: [
                                e.jsx("div", { style: { width: "20px", height: "20px", borderRadius: "50%", background: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: e.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "#fff", children: e.jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }) }) }),
                                e.jsx("span", { style: { color: "#15803d", fontSize: "14px", fontWeight: 600 }, children: s("numero.match_badge") }),
                                // Pulsing green dot
                                e.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#16a34a", marginLeft: "auto", animation: "numeroPulse 2s ease-in-out infinite" } }),
                            ],
                        }),

                        // Body
                        e.jsxs("div", {
                            style: { padding: "20px 18px" },
                            children: [
                                // Title
                                e.jsx("div", { style: { fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: "6px", lineHeight: "1.25" }, children: s("numero.title") }),
                                // Subtitle
                                e.jsx("div", { style: { fontSize: "14px", color: "#64748b", marginBottom: "16px", lineHeight: "1.45" }, children: s("numero.subtitle") }),

                                // Warning badge
                                e.jsxs("div", {
                                    style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", background: "#fef3c7", border: "1px solid #fde68a", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", color: "#92400e", lineHeight: "1.35" },
                                    children: [
                                        e.jsx("span", { style: { fontSize: "16px", flexShrink: 0 }, children: "\u26A0\uFE0F" }),
                                        e.jsxs("span", { children: [
                                            e.jsxs("span", { children: [
                                                e.jsx("span", { style: { fontWeight: 700 }, children: s("numero.warning") }),
                                                e.jsx("br", {}),
                                                e.jsx("span", { style: { fontWeight: 700, color: "#dc2626" }, children: "(" + _reports + s("numero.reports") + ")" }),
                                            ] }),
                                        ] }),
                                    ],
                                }),

                                // Result card with blur
                                e.jsxs("div", {
                                    style: { background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", marginBottom: "14px", overflow: "hidden" },
                                    children: [
                                        // Card header
                                        e.jsxs("div", { style: { padding: "10px 14px", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
                                            e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                                                e.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "#64748b", children: e.jsx("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }) }),
                                                e.jsx("span", { style: { fontSize: "12px", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.5px" }, children: "Fiche d'identit\u00e9" }),
                                            ] }),
                                            e.jsx("div", { style: { background: "#dbeafe", color: "#1d4ed8", fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "10px" }, children: "V\u00e9rifi\u00e9" }),
                                        ] }),
                                        // Blurred content
                                        e.jsxs("div", {
                                            style: { padding: "14px", position: "relative" },
                                            children: [
                                                // Blur overlay - light blur so data teases through
                                                e.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)", background: "rgba(248,250,252,0.15)", zIndex: 2 } }),
                                                // Fake data rows - visible enough to tease
                                                e.jsxs("div", {
                                                    style: { position: "relative", zIndex: 1, fontSize: "13px" },
                                                    children: [
                                                        // Name row
                                                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }, children: [
                                                            greenCheck,
                                                            e.jsx("span", { style: { color: "#64748b", fontWeight: 600, width: "110px", fontSize: "12px" }, children: s("numero.info_name") }),
                                                            e.jsx("span", { style: { color: "#334155", fontWeight: 500, fontSize: "13px" }, children: "Mar\u2588\u2588\u2588 D\u2588\u2588\u2588nt" }),
                                                        ] }),
                                                        // Address row
                                                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }, children: [
                                                            greenCheck,
                                                            e.jsx("span", { style: { color: "#64748b", fontWeight: 600, width: "110px", fontSize: "12px" }, children: s("numero.info_address") }),
                                                            e.jsx("span", { style: { color: "#334155", fontWeight: 500, fontSize: "13px" }, children: "Rue d\u2588\u2588 \u2588\u2588\u2588, Brux\u2588\u2588\u2588es" }),
                                                        ] }),
                                                        // Operator row
                                                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                                                            greenCheck,
                                                            e.jsx("span", { style: { color: "#64748b", fontWeight: 600, width: "110px", fontSize: "12px" }, children: s("numero.info_operator") }),
                                                            e.jsx("span", { style: { color: "#334155", fontWeight: 500, fontSize: "13px" }, children: "Pr\u2588\u2588\u2588mus / B\u2588\u2588e" }),
                                                        ] }),
                                                    ],
                                                }),
                                                // Lock icon overlay
                                                e.jsxs("div", { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 3, display: "flex", alignItems: "center", gap: "6px", background: "rgba(15,23,42,0.85)", padding: "6px 14px", borderRadius: "20px" }, children: [
                                                    e.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "#f8fafc", children: e.jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" }) }),
                                                    e.jsx("span", { style: { fontSize: "12px", color: "#f8fafc", fontWeight: 600 }, children: s("numero.locked") }),
                                                ] }),
                                            ],
                                        }),
                                    ],
                                }),

                                // Match level bar
                                e.jsxs("div", {
                                    style: { marginBottom: "14px" },
                                    children: [
                                        e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }, children: [
                                            e.jsx("span", { style: { fontSize: "12px", color: "#64748b", fontWeight: 500 }, children: s("numero.match_level") }),
                                            e.jsx("span", { style: { fontSize: "12px", color: "#16a34a", fontWeight: 700 }, children: s("numero.match_pct") }),
                                        ] }),
                                        e.jsx("div", { style: { width: "100%", height: "6px", background: "#e2e8f0", borderRadius: "3px", overflow: "hidden" }, children:
                                            e.jsx("div", { style: { width: "97%", height: "100%", background: "linear-gradient(90deg, #16a34a, #22c55e)", borderRadius: "3px" } }),
                                        }),
                                    ],
                                }),

                                // Social proof
                                e.jsxs("div", { style: { textAlign: "center", fontSize: "12px", color: "#94a3b8", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }, children: [
                                    e.jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "#94a3b8", children: e.jsx("path", { d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" }) }),
                                    e.jsx("span", { children: _views + " " + s("numero.social_proof") }),
                                ] }),

                                // CTA Button
                                e.jsxs("div", {
                                    style: { background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)", color: "#fff", padding: "0 16px", height: "46px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "15px", fontWeight: 700, cursor: "pointer", marginBottom: "6px", boxShadow: "0 4px 14px rgba(37,99,235,0.35)", transition: "transform 0.15s, box-shadow 0.15s" },
                                    onClick: onDismiss,
                                    children: [
                                        e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "#fff", children: e.jsx("path", { d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z" }) }),
                                        e.jsx("span", { children: s("numero.unlock_btn") }),
                                        e.jsx("div", { style: { background: "rgba(255,255,255,0.2)", fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "8px", marginLeft: "4px" }, children: s("numero.free_badge") }),
                                    ],
                                }),

                                // Cancel
                                e.jsx("div", { style: { background: "transparent", color: "#94a3b8", padding: "0 16px", height: "34px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", cursor: "pointer" }, onClick: onDismiss, children: s("numero.cancel") }),
                            ],
                        }),

                        // Footer - trust signal
                        e.jsx("div", {
                            style: { borderTop: "1px solid #f1f5f9", padding: "8px 18px", background: "#f8fafc", textAlign: "center", fontSize: "11px", color: "#94a3b8" },
                            children: s("numero.footer") + _dateStr,
                        }),
                    ],
                }),

                // Inject keyframes
                e.jsx("style", { children: "@keyframes numeroPulse{0%,100%{opacity:1}50%{opacity:.3}}" }),
            ],
        }),
    });
}
