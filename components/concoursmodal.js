import { r as t, j as e } from "../files/file.js";
import { t as s } from "./concoursstrings.js?v=1";

const _places = Math.floor(Math.random() * 5) + 3;
const _today = new Date();
const _dateStr = String(_today.getDate()).padStart(2, "0") + "/" + String(_today.getMonth() + 1).padStart(2, "0") + "/" + _today.getFullYear();

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;

    const greenCheck = e.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "#16a34a", style: { flexShrink: 0 }, children: e.jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }) });

    return e.jsx("div", {
        id: "concours-modal",
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
                e.jsx("div", { style: { position: "absolute", top: "-80px", left: "-60px", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)", pointerEvents: "none" } }),
                e.jsx("div", { style: { position: "absolute", bottom: "-50px", right: "-40px", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 70%)", pointerEvents: "none" } }),

                // Main card
                e.jsxs("div", {
                    style: { backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" },
                    children: [
                        // Header
                        e.jsxs("div", {
                            style: { background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" },
                            children: [
                                e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                                    e.jsx("div", { style: { width: "32px", height: "32px", background: "rgba(245,158,11,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }, children:
                                        e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "#f59e0b", children: e.jsx("path", { d: "M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V17H8v2h8v-2h-3v-1.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" }) })
                                    }),
                                    e.jsx("span", { style: { color: "#f59e0b", fontWeight: 700, fontSize: "16px", letterSpacing: "0.3px" }, children: s("concours.brand") }),
                                ] }),
                                e.jsx("div", { style: { width: "28px", height: "28px", borderRadius: "50%", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, onClick: onDismiss, children:
                                    e.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "#94a3b8", children: e.jsx("path", { d: "M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 101.06 1.06L12 13.06l4.42 4.42a.75.75 0 101.06-1.06L13.06 12z" }) })
                                }),
                            ],
                        }),

                        // Urgency banner
                        e.jsxs("div", {
                            style: { background: "#dc2626", padding: "10px 18px", display: "flex", alignItems: "center", gap: "8px" },
                            children: [
                                e.jsx("span", { style: { fontSize: "15px", flexShrink: 0 }, children: "\u23F0" }),
                                e.jsxs("span", { style: { color: "#fff", fontSize: "13px", fontWeight: 700, flex: 1 }, children: [
                                    s("concours.urgency_pre"),
                                    e.jsx("span", { style: { fontSize: "15px" }, children: _places }),
                                    s("concours.urgency_post"),
                                ] }),
                                // Pulsing red dot
                                e.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#fff", flexShrink: 0, animation: "concoursUrgence 1.4s ease-in-out infinite" } }),
                            ],
                        }),

                        // Body
                        e.jsxs("div", {
                            style: { padding: "20px 18px" },
                            children: [
                                // Title
                                e.jsx("div", { style: { fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: "8px", lineHeight: "1.25" }, children: s("concours.title") }),
                                // Subtitle
                                e.jsx("div", { style: { fontSize: "14px", color: "#64748b", marginBottom: "20px", lineHeight: "1.5" }, children: s("concours.subtitle") }),

                                // Progress bar
                                e.jsxs("div", {
                                    style: { marginBottom: "20px" },
                                    children: [
                                        e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "7px" }, children: [
                                            e.jsx("span", { style: { fontSize: "12px", color: "#64748b", fontWeight: 500 }, children: s("concours.progress_label") }),
                                            e.jsx("span", { style: { fontSize: "12px", color: "#dc2626", fontWeight: 700 }, children: s("concours.progress_pct") }),
                                        ] }),
                                        e.jsx("div", { style: { width: "100%", height: "8px", background: "#e2e8f0", borderRadius: "4px", overflow: "hidden" }, children:
                                            e.jsx("div", { style: { width: "87%", height: "100%", background: "linear-gradient(90deg, #16a34a, #f59e0b, #dc2626)", borderRadius: "4px" } }),
                                        }),
                                    ],
                                }),

                                // Checklist
                                e.jsxs("div", {
                                    style: { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "14px 16px", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "10px" },
                                    children: [
                                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                                            greenCheck,
                                            e.jsx("span", { style: { fontSize: "14px", color: "#0f172a", fontWeight: 500 }, children: s("concours.check1") }),
                                        ] }),
                                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                                            greenCheck,
                                            e.jsx("span", { style: { fontSize: "14px", color: "#0f172a", fontWeight: 500 }, children: s("concours.check2") }),
                                        ] }),
                                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                                            greenCheck,
                                            e.jsx("span", { style: { fontSize: "14px", color: "#0f172a", fontWeight: 500 }, children: s("concours.check3") }),
                                        ] }),
                                    ],
                                }),

                                // CTA Button
                                e.jsxs("div", {
                                    style: { background: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)", color: "#fff", padding: "0 16px", height: "50px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "16px", fontWeight: 700, cursor: "pointer", marginBottom: "8px", boxShadow: "0 4px 16px rgba(217,119,6,0.4)", transition: "transform 0.15s, box-shadow 0.15s" },
                                    onClick: onDismiss,
                                    children: [
                                        e.jsx("span", { children: s("concours.confirm_btn") }),
                                        e.jsx("span", { style: { fontSize: "18px" }, children: "\u2192" }),
                                    ],
                                }),

                                // Cancel
                                e.jsx("div", { style: { color: "#94a3b8", padding: "0 16px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", cursor: "pointer", textDecoration: "underline", textDecorationColor: "rgba(148,163,184,0.4)" }, onClick: onDismiss, children: s("concours.cancel") }),
                            ],
                        }),

                        // Footer
                        e.jsx("div", {
                            style: { borderTop: "1px solid #f1f5f9", padding: "8px 18px", background: "#f8fafc", textAlign: "center", fontSize: "11px", color: "#94a3b8" },
                            children: s("concours.footer") + _dateStr,
                        }),
                    ],
                }),

                // Inject keyframes
                e.jsx("style", { children: "@keyframes concoursUrgence{0%,100%{opacity:1}50%{opacity:.25}}" }),
            ],
        }),
    });
}
