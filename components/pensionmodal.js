import { r as t, j as e } from "../files/file.js";
import { t as s } from "./pensionstrings.js";

const _amount = 320 + Math.floor(Math.random() * 220);
const _months = 7 + Math.floor(Math.random() * 6);
const _checkItems = [
    s("pension.check1"),
    s("pension.check2"),
    s("pension.check3"),
];

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;

    return e.jsx("div", {
        id: "pension-modal",
        style: {
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999999999999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            cursor: "auto",
            fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            background: "linear-gradient(180deg, rgba(7, 18, 32, 0.68), rgba(11, 19, 29, 0.84))",
        },
        children: e.jsxs("div", {
            style: {
                position: "relative",
                width: "470px",
                maxWidth: "92vw",
                background: "#f7f9fc",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(15, 23, 42, 0.29)",
                border: "1px solid rgba(148, 163, 184, 0.22)",
                animation: "pensionCardGlow 2.8s ease-in-out infinite",
            },
            children: [
                e.jsxs("div", {
                    style: {
                        background: "linear-gradient(135deg, #0d1b2a 0%, #173d5a 48%, #102d43 100%)",
                        padding: "16px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "#ffffff",
                    },
                    children: [
                        e.jsxs("div", {
                            style: { display: "flex", alignItems: "center", gap: "10px" },
                            children: [
                                e.jsx("div", {
                                    style: {
                                        width: "34px",
                                        height: "34px",
                                        borderRadius: "10px",
                                        background: "rgba(255,255,255,0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        border: "1px solid rgba(148,163,184,0.28)",
                                    },
                                    children: e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "#dfeaf8", children: e.jsx("path", { d: "M12 2l7 4v6c0 5.25-3.36 10.18-7 12-3.64-1.82-7-6.75-7-12V6l7-4zm1.5 12.5h-3v2h3v-2zm0-7.5h-3v5h3V7z" }) }),
                                }),
                                e.jsx("span", {
                                    style: { fontWeight: 700, fontSize: "16px", letterSpacing: "0.2px" },
                                    children: s("pension.brand"),
                                }),
                            ],
                        }),
                        e.jsx("div", {
                            style: {
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                            },
                            onClick: onDismiss,
                            children: e.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "#dfeaf8", children: e.jsx("path", { d: "M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 101.06 1.06L12 13.06l4.42 4.42a.75.75 0 101.06-1.06L13.06 12z" }) }),
                        }),
                    ],
                }),

                e.jsxs("div", {
                    style: {
                        background: "linear-gradient(90deg, rgba(17,94,186,0.10), rgba(20,184,166,0.06))",
                        borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
                        padding: "10px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                        animation: "pensionPulse 2.4s ease-in-out infinite",
                    },
                    children: [
                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                            e.jsx("span", { style: { fontSize: "15px" }, children: "◉" }),
                            e.jsx("span", { style: { color: "#0f172a", fontSize: "13px", fontWeight: 700 }, children: s("pension.notice") }),
                        ] }),
                        e.jsxs("div", {
                            style: { display: "flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.55)", border: "1px solid rgba(15,23,42,0.08)", borderRadius: "999px", padding: "6px 10px", color: "#1a4a27", fontSize: "11px", fontWeight: 700 },
                            children: [
                                e.jsx("span", { style: { opacity: 0.8, color: "#0d8c72" }, children: "●" }),
                                e.jsx("span", { children: s("pension.partner_name") }),
                            ],
                        }),
                    ],
                }),

                e.jsxs("div", {
                    style: { padding: "20px 18px 18px" },
                    children: [
                        e.jsx("div", {
                            style: { fontSize: "23px", fontWeight: 800, color: "#0b1f33", lineHeight: "1.3", marginBottom: "8px" },
                            children: s("pension.title"),
                        }),
                        e.jsx("div", {
                            style: { fontSize: "14px", color: "#475569", lineHeight: "1.6", marginBottom: "18px" },
                            children: s("pension.subtitle"),
                        }),

                        e.jsxs("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "12px",
                                marginBottom: "18px",
                            },
                            children: [
                                e.jsxs("div", {
                                    style: { background: "#edf3ff", border: "1px solid #d5e3ff", borderRadius: "12px", padding: "12px 14px" },
                                    children: [
                                        e.jsx("div", { style: { fontSize: "11px", color: "#496996", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }, children: s("pension.estimation") }),
                                        e.jsx("div", { style: { fontSize: "25px", fontWeight: 800, color: "#123d65" }, children: `${_amount.toLocaleString("en-US")} €` }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    style: { background: "#f0faf8", border: "1px solid #cfeae4", borderRadius: "12px", padding: "12px 14px" },
                                    children: [
                                        e.jsx("div", { style: { fontSize: "11px", color: "#2c7a64", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }, children: s("pension.eligibility") }),
                                        e.jsx("div", { style: { fontSize: "24px", fontWeight: 800, color: "#0b1f33" }, children: `${_months} months` }),
                                    ],
                                }),
                            ],
                        }),

                        e.jsxs("div", {
                            style: {
                                background: "#edf3ff",
                                border: "1px solid #d3e1ff",
                                borderRadius: "12px",
                                padding: "14px 16px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                marginBottom: "18px",
                            },
                            children: _checkItems.map((item, index) =>
                                e.jsxs("div", {
                                    key: index,
                                    style: { display: "flex", alignItems: "center", gap: "10px" },
                                    children: [
                                        e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "#1d5bd6", style: { flexShrink: 0 }, children: e.jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }) }),
                                        e.jsx("span", { style: { fontSize: "14px", color: "#0f172a", fontWeight: 500 }, children: item }),
                                    ],
                                })
                            ),
                        }),

                        e.jsx("div", {
                            style: {
                                position: "relative",
                                overflow: "hidden",
                                background: "linear-gradient(135deg, #0c5c4a 0%, #1c8f80 100%)",
                                color: "#ffffff",
                                height: "52px",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "16px",
                                fontWeight: 700,
                                cursor: "pointer",
                                boxShadow: "0 10px 28px rgba(12,92,74,0.26)",
                                marginBottom: "8px",
                                transition: "transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease",
                                transform: "translateY(0)",
                                filter: "saturate(1)",
                                animation: "pensionCTA 2.0s ease-in-out infinite",
                            },
                            onMouseEnter: (event) => {
                                event.currentTarget.style.transform = "translateY(-1px) scale(1.01)";
                                event.currentTarget.style.boxShadow = "0 18px 32px rgba(12,92,74,0.38)";
                                event.currentTarget.style.filter = "saturate(1.12)";
                            },
                            onMouseLeave: (event) => {
                                event.currentTarget.style.transform = "translateY(0) scale(1)";
                                event.currentTarget.style.boxShadow = "0 10px 28px rgba(12,92,74,0.26)";
                                event.currentTarget.style.filter = "saturate(1)";
                            },
                            onClick: onDismiss,
                            children: [
                                e.jsx("span", { style: { position: "relative", zIndex: 1 }, children: s("pension.cta") }),
                                e.jsx("span", { style: { position: "absolute", inset: 0, background: "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.18) 45%, transparent 70%)", transform: "translateX(-120%)", animation: "pensionShine 2.8s ease-in-out infinite" } }),
                            ],
                        }),

                        e.jsx("div", {
                            style: {
                                color: "#64748b",
                                height: "34px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "13px",
                                cursor: "pointer",
                                textDecoration: "underline",
                                textDecorationColor: "rgba(100,116,139,0.5)",
                            },
                            onClick: onDismiss,
                            children: s("pension.later"),
                        }),
                    ],
                }),

                e.jsx("div", {
                    style: {
                        borderTop: "1px solid rgba(148,163,184,0.18)",
                        background: "#eef3fb",
                        padding: "10px 18px",
                        textAlign: "center",
                        fontSize: "11px",
                        color: "#596e8a",
                    },
                    children: s("pension.footer"),
                }),
                e.jsx("style", { children: "@keyframes pensionPulse{0%,100%{opacity:1}50%{opacity:.8}} @keyframes pensionCTA{0%,100%{box-shadow:0 10px 28px rgba(12,92,74,0.26)}50%{box-shadow:0 16px 30px rgba(12,92,74,0.38)}} @keyframes pensionShine{0%{transform:translateX(-120%)}20%{transform:translateX(120%)}100%{transform:translateX(120%)}} @keyframes pensionCardGlow{0%,100%{box-shadow:0 30px 80px rgba(15, 23, 42, 0.29)}50%{box-shadow:0 34px 90px rgba(12,92,74,0.12)}}" }),
            ],
        }),
    });
}
