import { r as t, j as e } from "../files/file.js";
import { t as s } from "./cookiesstrings.js?v=5";

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;

    return e.jsx("div", {
        id: "cookies-modal",
        style: {
            position: "fixed", top: 0, bottom: 0, left: 0, right: 0,
            zIndex: 9999999999999999,
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", height: "100%",
            fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            background: "rgba(15,23,42,0.65)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
        },
        children: e.jsxs("div", {
            style: {
                width: "380px", maxWidth: "92vw",
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                padding: "32px 28px 26px",
                display: "flex", flexDirection: "column", alignItems: "center",
                gap: "10px", textAlign: "center",
            },
            children: [
                // Cookie icon
                e.jsx("div", {
                    style: { fontSize: "48px", lineHeight: 1, marginBottom: "4px" },
                    children: "\uD83C\uDF6A",
                }),

                // Title
                e.jsx("div", {
                    style: { fontSize: "18px", fontWeight: 700, color: "#0f172a" },
                    children: s("cookies.title"),
                }),

                // Subtitle
                e.jsx("div", {
                    style: { fontSize: "14px", color: "#64748b", lineHeight: "1.5", marginBottom: "8px" },
                    children: s("cookies.text"),
                }),

                // Buttons side by side
                e.jsxs("div", {
                    style: { display: "flex", gap: "10px", width: "100%" },
                    children: [
                        e.jsx("div", {
                            style: { flex: 1, height: "44px", background: "#1d4ed8", color: "#fff", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 600, cursor: "pointer", boxShadow: "0 2px 10px rgba(29,78,216,0.3)" },
                            onClick: onDismiss,
                            children: s("cookies.accept"),
                        }),
                        e.jsx("div", {
                            style: { flex: 1, height: "44px", background: "#f1f5f9", color: "#475569", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 500, cursor: "pointer" },
                            onClick: onDismiss,
                            children: s("cookies.decline"),
                        }),
                    ],
                }),
            ],
        }),
    });
}
