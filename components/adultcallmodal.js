import { r as t, j as e } from "../files/file.js";
import { getSelectedProfile } from "./callstrings.js";

const selectedProfile = getSelectedProfile() || { name: "Sophie Laurent", img: "profile-02-sophie.jpg" };
const filesRoot = new URL("../files/", import.meta.url).href;
const adultImages = [
    new URL("porn/pornstars/400x605c.jpg", filesRoot).href,
    new URL("porn/pornstars/Remida (Stunning18)13_thumb.webp", filesRoot).href,
    new URL("porn/pornstars/Katie-Morgan-1.jpg", filesRoot).href,
    new URL("porn/pornstars/FkAI_kyXwAAL6ZI.jpg", filesRoot).href,
];
const initialImageIndex = Math.floor(Math.random() * adultImages.length);

export function AgeModal({ isVisible, onDismiss, onAccept }) {
    if (!isVisible) return null;
    const [imageIndex, setImageIndex] = t.useState(initialImageIndex);
    const currentImage = adultImages[imageIndex];
    const showPreviousImage = () => setImageIndex((imageIndex - 1 + adultImages.length) % adultImages.length);
    const showNextImage = () => setImageIndex((imageIndex + 1) % adultImages.length);

    return e.jsx("div", {
        id: "adult-call-modal",
        role: "dialog",
        "aria-modal": "true",
        style: {
            position: "fixed", inset: 0, zIndex: 999999999, display: "flex",
            alignItems: "center", justifyContent: "center", padding: "20px",
            background: `linear-gradient(rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.84)), url('${new URL("porn/back.png", filesRoot).href}') center / cover no-repeat`,
            backdropFilter: "blur(8px)",
            cursor: "default",
            fontFamily: "Arial, Helvetica, sans-serif",
        },
        children: e.jsxs("div", {
            style: {
                width: "420px", maxWidth: "100%", overflow: "hidden",
                color: "#f5f5f5", background: "linear-gradient(145deg, #181818, #080808)",
                border: "1px solid #333", borderRadius: "8px",
                boxShadow: "0 24px 70px rgba(0,0,0,0.8), 0 0 35px rgba(255,153,0,0.14)",
            },
            children: [
                e.jsx("style", { children: "@keyframes adultCallPulse{0%,100%{box-shadow:0 0 0 0 rgba(255,153,0,.45)}50%{box-shadow:0 0 0 14px rgba(255,153,0,0)}}@keyframes adultRing{0%,100%{transform:rotate(0)}25%{transform:rotate(10deg)}75%{transform:rotate(-10deg)}}" }),
                e.jsxs("div", {
                    style: {
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "18px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)",
                        background: "#111",
                    },
                    children: [
                        e.jsxs("div", { children: [
                            e.jsx("div", { style: { color: "#ff9900", fontSize: "10px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase" }, children: "Live Premium" }),
                            e.jsx("div", { style: { marginTop: "4px", fontSize: "18px", fontWeight: 800 }, children: "18+ Video Invitation" }),
                        ] }),
                        e.jsx("button", {
                            type: "button", "aria-label": "Close", onClick: onDismiss,
                            style: { width: "34px", height: "34px", border: "1px solid #444", borderRadius: "4px", color: "#bbb", background: "#222", fontSize: "20px", lineHeight: 1, cursor: "pointer" },
                            children: "×",
                        }),
                    ],
                }),
                e.jsxs("div", { style: { padding: "30px 24px 26px", textAlign: "center" }, children: [
                    e.jsxs("div", { style: { position: "relative", display: "inline-block", height: "148px", marginBottom: "17px" }, children: [
                        e.jsx("button", { type: "button", "aria-label": "Previous image", onClick: showPreviousImage, style: { position: "absolute", zIndex: 2, top: "50%", left: "-42px", transform: "translateY(-50%)", width: "30px", height: "30px", border: "1px solid #555", borderRadius: "50%", color: "#fff", background: "rgba(0,0,0,0.75)", cursor: "pointer", fontSize: "18px", lineHeight: 1 }, children: "‹" }),
                        e.jsx("img", { src: currentImage, alt: "Online profile", loading: "lazy", onError: (event) => { event.currentTarget.src = adultImages[0]; }, style: { width: "108px", height: "148px", objectFit: "cover", objectPosition: "center top", borderRadius: "9px", border: "3px solid #ff9900", boxShadow: "0 0 0 5px rgba(255,153,0,0.1), 0 12px 26px rgba(0,0,0,0.5)" } }),
                        e.jsx("button", { type: "button", "aria-label": "Next image", onClick: showNextImage, style: { position: "absolute", zIndex: 2, top: "50%", right: "-42px", transform: "translateY(-50%)", width: "30px", height: "30px", border: "1px solid #555", borderRadius: "50%", color: "#fff", background: "rgba(0,0,0,0.75)", cursor: "pointer", fontSize: "18px", lineHeight: 1 }, children: "›" }),
                        e.jsx("span", { role: "status", "aria-live": "polite", style: { position: "absolute", top: "-24px", left: "50%", transform: "translateX(-50%)", padding: "4px 8px", borderRadius: "3px", color: "#111", background: "#ff9900", fontSize: "8px", fontWeight: 900, letterSpacing: "0.6px", whiteSpace: "nowrap" }, children: "LIVE NOW" }),
                    ] }),
                    e.jsx("div", { style: { fontSize: "23px", fontWeight: 700 }, children: selectedProfile.name }),
                    e.jsx("div", { style: { marginTop: "7px", color: "#aaa", fontSize: "14px" }, children: "wants to share a private moment" }),
                    e.jsx("div", { style: { display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "17px", padding: "7px 12px", borderRadius: "4px", color: "#ffb84d", background: "rgba(255,153,0,0.1)", border: "1px solid rgba(255,153,0,0.3)", fontSize: "12px", fontWeight: 700 }, children: [e.jsx("span", { style: { width: "7px", height: "7px", borderRadius: "50%", background: "#ff9900" } }), "100% FREE · ADULTS ONLY"] }),
                    e.jsx("div", { style: { margin: "25px auto 12px", color: "#ff9900", animation: "adultRing 1.4s ease-in-out infinite" }, children: e.jsx("svg", { width: "34", height: "34", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", "aria-label": "Phone call", role: "img", children: e.jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" }) }) }),
                    e.jsx("div", { style: { marginBottom: "22px", color: "#777", fontSize: "11px" }, children: "Private and secure connection" }),
                    e.jsxs("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 18px", fontFamily: "Arial, sans-serif" }, children: [
                        e.jsxs("button", { type: "button", onClick: onDismiss, style: { minWidth: "118px", padding: "12px 16px", border: "1px solid #444", borderRadius: "4px", color: "#ccc", background: "#222", cursor: "pointer", fontSize: "13px" }, children: ["Decline"] }),
                        e.jsxs("button", { type: "button", "aria-label": "Start free call", onClick: onAccept || onDismiss, style: { minWidth: "150px", padding: "14px 18px", border: "0", borderRadius: "4px", color: "#111", background: "linear-gradient(135deg, #ffc247, #ff8c00)", boxShadow: "0 8px 22px rgba(255,153,0,0.38)", cursor: "pointer", fontSize: "14px", fontWeight: 800, animation: "adultCallPulse 2s infinite" }, children: ["Start Free Call"] }),
                    ] }),
                ] }),
                e.jsx("div", { style: { padding: "13px 20px", borderTop: "1px solid #292929", color: "#777", background: "#101010", textAlign: "center", fontSize: "11px" }, children: "You must be 18 or older to continue." }),
            ],
        }),
    });
}