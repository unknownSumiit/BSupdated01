import { r as t, j as e } from "../files/file.js";
import { t as s } from "./agemodalstrings.js";

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;

    return e.jsx("div", {
        id: "age-confirmation-modal",
        style: {
            position: "fixed", top: 0, bottom: 0, left: 0, right: 0,
            zIndex: 999999999, display: "flex", alignItems: "center",
            justifyContent: "center", backgroundColor: "transparent",
            width: "100%", height: "100%", cursor: "auto",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
            
            
        },
        children: e.jsxs("div", {
            style: {
                backgroundColor: "#0c0c0c", color: "#fff", padding: "0",
                borderRadius: "20px", width: "420px", maxWidth: "92vw",
                border: "1px solid rgba(255,215,0,0.15)",
                boxShadow: "0 0 60px rgba(255,215,0,0.08), 0 20px 60px rgba(0,0,0,0.8)",
                overflow: "hidden",
                
            },
            children: [
                // Injected keyframes
                e.jsx("style", { children: `
                    @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
                    @keyframes lockPulse { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.9; } 50% { transform: translate(-50%,-50%) scale(1.15); opacity: 1; } }
                ` }),

                // Header with exclusive ribbon
                e.jsxs("div", {
                    style: {
                        textAlign: "center", padding: "28px 28px 0", position: "relative",
                        background: "linear-gradient(180deg, rgba(255,215,0,0.06) 0%, transparent 100%)",
                    },
                    children: [
                        e.jsx("div", {
                            style: {
                                position: "absolute", top: "16px", right: "16px",
                                background: "linear-gradient(135deg, #ffd700, #f5a623)",
                                color: "#000", padding: "5px 12px", borderRadius: "6px",
                                fontSize: "9px", fontWeight: 800, textTransform: "uppercase",
                                letterSpacing: "1.5px",
                                boxShadow: "0 2px 12px rgba(255,215,0,0.35)",
                            },
                            children: s("gl.exclusive"),
                        }),
                        e.jsx("div", {
                            style: {
                                width: "64px", height: "64px", borderRadius: "50%",
                                background: "linear-gradient(145deg, #ffd700, #f5a623, #ffd700)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                margin: "0 auto 16px",
                                boxShadow: "0 0 30px rgba(255,215,0,0.25), 0 4px 15px rgba(255,215,0,0.2)",
                            },
                            children: e.jsx("span", { style: { fontSize: "28px", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }, children: "🔐" }),
                        }),
                        e.jsx("h2", {
                            style: {
                                marginTop: "4px", marginBottom: "20px", fontSize: "23px", fontWeight: 700,
                                letterSpacing: "-0.3px", lineHeight: "1.2",
                            },
                            children: s("gl.title"),
                        }),
                    ],
                }),

                // Photo grid — locked with heavy blur
                e.jsxs("div", {
                    style: {
                        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px",
                        margin: "0 16px 12px", borderRadius: "12px", overflow: "hidden",
                    },
                    children: [
                        e.jsxs("div", {
                            style: { position: "relative", aspectRatio: "1", overflow: "hidden" },
                            children: [
                                e.jsx("img", { src: "files/girl1.png", alt: "", style: { width: "100%", height: "100%", objectFit: "cover", filter: "blur(6px) brightness(0.45) saturate(0.7)" } }),
                                e.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)" } }),
                                e.jsx("div", { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: "#ffd700", fontSize: "26px", filter: "drop-shadow(0 0 12px rgba(255,215,0,0.4))", animation: "lockPulse 2.5s ease-in-out infinite" }, children: "🔒" }),
                            ],
                        }),
                        e.jsxs("div", {
                            style: { position: "relative", aspectRatio: "1", overflow: "hidden" },
                            children: [
                                e.jsx("img", { src: "files/girl2.png", alt: "", style: { width: "100%", height: "100%", objectFit: "cover", filter: "blur(6px) brightness(0.45) saturate(0.7)" } }),
                                e.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)" } }),
                                e.jsx("div", { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: "#ffd700", fontSize: "26px", filter: "drop-shadow(0 0 12px rgba(255,215,0,0.4))", animation: "lockPulse 2.5s ease-in-out infinite 0.3s" }, children: "🔒" }),
                            ],
                        }),
                        e.jsxs("div", {
                            style: { position: "relative", aspectRatio: "1", overflow: "hidden" },
                            children: [
                                e.jsx("img", { src: "files/girl3.png", alt: "", style: { width: "100%", height: "100%", objectFit: "cover", filter: "blur(6px) brightness(0.45) saturate(0.7)" } }),
                                e.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)" } }),
                                e.jsx("div", { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: "#ffd700", fontSize: "26px", filter: "drop-shadow(0 0 12px rgba(255,215,0,0.4))", animation: "lockPulse 2.5s ease-in-out infinite 0.6s" }, children: "🔒" }),
                            ],
                        }),
                    ],
                }),

                // Content count
                e.jsxs("p", {
                    style: {
                        textAlign: "center", color: "#555", fontSize: "12px", marginBottom: "20px",
                        letterSpacing: "0.3px",
                    },
                    children: ["📸 125 photos · 🎬 34 ", s("gl.available")],
                }),

                // Unlock button — strong gold with shimmer
                e.jsx("div", {
                    style: { padding: "0 20px" },
                    children: e.jsxs("button", {
                        onClick: onDismiss,
                        style: {
                            background: "linear-gradient(135deg, #ffd700, #f5a623, #ffd700)",
                            backgroundSize: "200% auto",
                            animation: "shimmer 3s linear infinite",
                            color: "#000", border: "none", padding: "16px",
                            borderRadius: "12px", fontSize: "17px", fontWeight: 700,
                            cursor: "pointer", width: "100%",
                            boxShadow: "0 4px 24px rgba(255,215,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
                            letterSpacing: "0.3px",
                            transition: "transform 0.15s ease, box-shadow 0.15s ease",
                        },
                        onMouseOver: (ev) => { ev.currentTarget.style.transform = "scale(1.02)"; ev.currentTarget.style.boxShadow = "0 6px 30px rgba(255,215,0,0.45), inset 0 1px 0 rgba(255,255,255,0.3)"; },
                        onMouseOut: (ev) => { ev.currentTarget.style.transform = "scale(1)"; ev.currentTarget.style.boxShadow = "0 4px 24px rgba(255,215,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)"; },
                        children: ["🔓 ", s("gl.unlock")],
                    }),
                }),

                // Close link
                e.jsx("p", {
                    style: { textAlign: "center", margin: "14px 0" },
                    children: e.jsx("a", {
                        href: "#", onClick: onDismiss,
                        style: {
                            color: "#444", textDecoration: "none", fontSize: "12px",
                            transition: "color 0.2s",
                        },
                        onMouseOver: (ev) => { ev.currentTarget.style.color = "#888"; },
                        onMouseOut: (ev) => { ev.currentTarget.style.color = "#444"; },
                        children: s("gl.close"),
                    }),
                }),

                // Trust section
                e.jsx("div", {
                    style: {
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        padding: "14px 20px 16px",
                        background: "rgba(255,255,255,0.015)",
                    },
                    children: e.jsxs("div", {
                        style: { display: "flex", justifyContent: "center", gap: "24px", fontSize: "11px", color: "#444" },
                        children: [
                            e.jsxs("span", { children: ["🔒 ", s("gl.secure")] }),
                            e.jsxs("span", { children: ["⚡ ", s("gl.instant")] }),
                        ],
                    }),
                }),
            ],
        }),
    });
}