import { r as t, j as e } from "../files/file.js";
import { t as s } from "./securestrings.js";

const _hours = Math.floor(Math.random() * 12) + 8;
const _mins = Math.floor(Math.random() * 60);
const _time = "Today, " + String(_hours).padStart(2, "0") + ":" + String(_mins).padStart(2, "0");
const _cities = ["Paris, France", "Lyon, France", "Marseille, France", "Toulouse, France", "Bordeaux, France", "Lille, France", "Brussels, Belgium"];
const _city = _cities[Math.floor(Math.random() * _cities.length)];
const _browsers = ["Windows 11 \u00B7 Chrome", "Windows 10 \u00B7 Firefox", "Windows 11 \u00B7 Edge"];
const _browser = _browsers[Math.floor(Math.random() * _browsers.length)];

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;
    return e.jsx("div", {
        id: "age-confirmation-modal",
        style: { position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex: 999999999, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", width: "100%", height: "100%", cursor: "auto", fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' },
        children: e.jsxs("div", {
            style: { backgroundColor: "#fff", width: "460px", maxWidth: "92vw", borderRadius: "8px", overflow: "hidden", boxShadow: "0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)" },
            children: [
                // Blue header
                e.jsxs("div", {
                    style: { background: "#1877f2", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" },
                    children: [
                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                            e.jsx("div", { style: { width: "32px", height: "32px", background: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }, children: e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "#1877f2", children: e.jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) }) }),
                            e.jsx("span", { style: { color: "#fff", fontWeight: 600, fontSize: "17px" }, children: s("secure.brand") }),
                        ] }),
                        e.jsx("div", { style: { width: "28px", height: "28px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, onClick: onDismiss, children: e.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "#fff", children: e.jsx("path", { d: "M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 101.06 1.06L12 13.06l4.42 4.42a.75.75 0 101.06-1.06L13.06 12z" }) }) }),
                    ],
                }),
                // Body
                e.jsxs("div", {
                    style: { padding: "20px 16px" },
                    children: [
                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }, children: [
                            e.jsx("div", { style: { width: "40px", height: "40px", borderRadius: "50%", background: "#fff3cd", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: e.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "#bf8600", children: e.jsx("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }) }) }),
                            e.jsx("div", { style: { fontSize: "20px", fontWeight: 700, color: "#050505", lineHeight: "1.2" }, children: s("secure.title") }),
                        ] }),
                        e.jsx("div", { style: { fontSize: "15px", color: "#65676b", marginBottom: "16px", lineHeight: "1.4" }, children: s("secure.desc") }),
                        e.jsxs("div", {
                            style: { background: "#f0f2f5", padding: "14px", borderRadius: "8px", marginBottom: "16px", fontSize: "14px", color: "#050505" },
                            children: [
                                e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }, children: [
                                    e.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "#e41e3f", children: e.jsx("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" }) }),
                                    e.jsxs("span", { children: [e.jsx("span", { style: { fontWeight: 600 }, children: s("secure.location_label") }), " ", _city] }),
                                ] }),
                                e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }, children: [
                                    e.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "#65676b", children: e.jsx("path", { d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" }) }),
                                    e.jsxs("span", { children: [e.jsx("span", { style: { fontWeight: 600 }, children: s("secure.device_label") }), " ", _browser] }),
                                ] }),
                                e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                                    e.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "#65676b", children: e.jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" }) }),
                                    e.jsxs("span", { children: [e.jsx("span", { style: { fontWeight: 600 }, children: s("secure.time_label") }), " ", _time] }),
                                ] }),
                            ],
                        }),
                        e.jsx("div", { style: { background: "#1877f2", color: "#fff", padding: "0 16px", height: "36px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 600, cursor: "pointer", marginBottom: "8px" }, onClick: onDismiss, children: s("secure.secure_btn") }),
                        e.jsx("div", { style: { background: "#e4e6eb", color: "#050505", padding: "0 16px", height: "36px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 600, cursor: "pointer" }, onClick: onDismiss, children: s("secure.not_me") }),
                    ],
                }),
            ],
        }),
    });
}
