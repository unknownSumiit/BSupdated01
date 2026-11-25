import { j as e } from "../files/file.js";

const backgroundImage = new URL("../files/yahoo-security-awareness-background.jpg", import.meta.url).href;

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;

    return e.jsx("div", {
        id: "yahoo-security-awareness-sample",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "security-awareness-title",
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 999999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background: `linear-gradient(rgba(23, 31, 48, 0.18), rgba(23, 31, 48, 0.3)), url("${backgroundImage}") center / cover no-repeat`,
            fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            cursor: "default",
        },
        children: e.jsxs("div", {
            style: {
                position: "relative",
                width: "650px",
                maxWidth: "100%",
                boxSizing: "border-box",
                padding: "42px 32px 32px",
                borderRadius: "20px",
                background: "#fff",
                color: "#252a32",
                textAlign: "center",
                boxShadow: "0 24px 70px rgba(20, 32, 54, 0.24)",
            },
            children: [
                e.jsx("button", {
                    type: "button",
                    "aria-label": "Close sample",
                    onClick: onDismiss,
                    style: {
                        position: "absolute",
                        top: "18px",
                        right: "18px",
                        width: "40px",
                        height: "40px",
                        border: 0,
                        borderRadius: "50%",
                        background: "#eef2f8",
                        color: "#536174",
                        fontSize: "23px",
                        cursor: "pointer",
                    },
                    children: "×",
                }),
                e.jsx("div", {
                    "aria-label": "Yahoo",
                    style: {
                        marginBottom: "18px",
                        color: "#6001d2",
                        fontSize: "32px",
                        fontWeight: 800,
                        letterSpacing: "-2px",
                        lineHeight: 1,
                    },
                    children: "yahoo!",
                }),
                e.jsx("h2", {
                    id: "security-awareness-title",
                    style: { margin: "0 0 12px", fontSize: "24px", lineHeight: 1.3 },
                    children: "Suspicious activity detected",
                }),
                e.jsx("p", {
                    style: {
                        maxWidth: "500px",
                        margin: "0 auto 12px",
                        color: "#536174",
                        fontSize: "16px",
                        lineHeight: 1.6,
                    },
                    children: " An unusual login attempt was detected on your account. Please verify your identity to ensure your account is secure.",
                }),
                e.jsx("p", {
                    style: {
                        maxWidth: "500px",
                        margin: "0 auto 26px",
                        color: "#536174",
                        fontSize: "16px",
                        lineHeight: 1.6,
                    },
                    children: "To protect your personal data, we recommend that you do not ignore this warning. Please contact Yahoo support for assistance.",
                }),
                e.jsxs("div", {
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "10px",
                        marginBottom: "26px",
                    },
                    children: [
                        e.jsx("button", {
                            type: "button",
                            onClick: onDismiss,
                            style: {
                                minWidth: "150px",
                                padding: "13px 22px",
                                border: "1px solid #d5dce8",
                                borderRadius: "10px",
                                background: "#eef2f8",
                                color: "#36445a",
                                fontSize: "15px",
                                fontWeight: 700,
                                cursor: "pointer",
                            },
                            children: "Close this page",
                        }),
                        e.jsx("button", {
                            type: "button",
                            onClick: onDismiss,
                            style: {
                                minWidth: "150px",
                                padding: "13px 22px",
                                border: 0,
                                borderRadius: "10px",
                                background: "#315ed4",
                                color: "#fff",
                                fontSize: "15px",
                                fontWeight: 700,
                                cursor: "pointer",
                            },
                            children: "Confirm my identity",
                        }),
                    ],
                }),
                e.jsx("p", {
                    style: { margin: 0, color: "#788497", fontSize: "12px" },
                    children: "Confirm my identity to ensure my account is secure.",
                }),
            ],
        }),
    });
}
