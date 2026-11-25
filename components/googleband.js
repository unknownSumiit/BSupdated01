
import { j as e } from "../files/file.js";

const buttonGlowStyles = `
@keyframes unlockGlow {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(26, 115, 232, 0.4);
        transform: scale(1);
        filter: brightness(1);
    }

    50% {
        box-shadow:
            0 0 12px 4px rgba(26, 115, 232, 0.45),
            0 0 26px 8px rgba(26, 115, 232, 0.2);
        transform: scale(1.035);
        filter: brightness(1.12);
    }
}

.unlock-glow {
    animation: unlockGlow 1.8s ease-in-out infinite;
    transition:
        background .25s ease,
        box-shadow .25s ease,
        filter .25s ease;
}

.unlock-glow:hover {
    background: #1558b0 !important;
    box-shadow: 0 0 24px 8px rgba(26, 115, 232, 0.5);
    animation-play-state: paused;
    filter: brightness(1.1);
}

.unlock-glow:active {
    transform: scale(.97);
}

.unlock-glow:focus-visible {
    outline: 3px solid #8ab4f8;
    outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
    .unlock-glow {
        animation: none;
        transition: none;
    }
}
`;

export function GoogleBand({ isVisible, onDismiss }) {
    if (!isVisible) return null;

    if (
        typeof document !== "undefined" &&
        !document.getElementById("unlock-glow-styles")
    ) {
        const style = document.createElement("style");
        style.id = "unlock-glow-styles";
        style.textContent = buttonGlowStyles;
        document.head.appendChild(style);
    }

    return e.jsx("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 999999999,
            display: "block",
            minHeight: "100vh",
            overflowY: "auto",
            padding: "32px 20px",
            boxSizing: "border-box",
            background: "#f1f3f4",
            fontFamily: "Arial, sans-serif",
            cursor: "default",
        },
        children: e.jsxs("section", {
            role: "main",
            "aria-labelledby": "googleband-title",
            style: {
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "640px",
                boxSizing: "border-box",
                margin: "0 auto",
                overflow: "hidden",
                border: "1px solid #dadce0",
                borderRadius: "12px",
                background: "#fff",
                color: "#202124",
                boxShadow: "0 4px 18px rgba(60,64,67,.15)",
                cursor: "default",
            },
            children: [
                e.jsxs("div", {
                    style: {
                        padding: "20px 28px",
                        borderBottom: "1px solid #e8eaed",
                        textAlign: "center",
                    },
                    children: [
                        e.jsx("img", {
                            src: new URL(
                                "../files/Google_2015_logo.svg.webp",
                                import.meta.url
                            ).href,
                            alt: "Google logo",
                            style: {
                                display: "block",
                                width: "190px",
                                maxWidth: "100%",
                                height: "auto",
                                margin: "0 auto",
                            },
                        }),
                    ],
                }),

                e.jsxs("div", {
                    style: {
                        padding: "28px",
                    },
                    children: [
                        e.jsx("div", {
                            style: {
                                marginBottom: "20px",
                                padding: "12px 16px",
                                border: "1px solid #f9ab00",
                                borderRadius: "6px",
                                background: "#fef7e0",
                                color: "#5f4300",
                                fontSize: "13px",
                                fontWeight: 700,
                                letterSpacing: ".03em",
                                lineHeight: 1.5,
                            },
                            children:
                                "SAMPLE NOTICE: This is a sample Google account notice.",
                        }),

                        e.jsx("h1", {
                            id: "googleband-title",
                            style: {
                                margin: "0 0 12px",
                                fontSize: "26px",
                                fontWeight: 400,
                            },
                            children:
                                "Sample account notice",
                        }),

                        e.jsx("p", {
                            style: {
                                margin: "0 0 24px",
                                color: "#5f6368",
                                fontSize: "15px",
                                lineHeight: 1.6,
                                whiteSpace: "pre-line",
                            },
                            children:
                                "This is a sample screen. No Google account has been disabled, and no account action is required.",
                        }),

                        e.jsxs("div", {
                            style: {
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "flex-end",
                                gap: "12px",
                            },
                            children: [
                                e.jsx("button", {
                                    type: "button",
                                    className: "unlock-glow",
                                    onClick: () =>
                                        window.alert(
                                            "Sample only: no Google account has been changed."
                                        ),
                                    style: {
                                        minHeight: "42px",
                                        padding: "0 20px",
                                        border: 0,
                                        borderRadius: "6px",
                                        background: "#1a73e8",
                                        color: "#fff",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                    },
                                    children: "Close",
                                }),

                                e.jsx("button", {
                                    type: "button",
                                    onClick: onDismiss,
                                    style: {
                                        minHeight: "42px",
                                        padding: "0 20px",
                                        border: "1px solid #dadce0",
                                        borderRadius: "6px",
                                        background: "#fff",
                                        color: "#1a73e8",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                    },
                                    children: "Close",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}

export { GoogleBand as AgeModal };
