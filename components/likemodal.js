import { r as t, j as e } from "../files/file.js";
import { t as s, getSelectedProfiles } from "./likestrings.js";

const _people = getSelectedProfiles();
const _main = _people[0];
const _mainImg = "files/profiles/" + _main.img;
const _othersCount = _people.length - 1;

export function AgeModal({ isVisible, onDismiss }) {
    if (!isVisible) return null;
    return e.jsx("div", {
        id: "age-confirmation-modal",
        style: { position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex: 999999999, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", width: "100%", height: "100%", cursor: "auto", fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' },
        children: e.jsxs("div", {
            style: { backgroundColor: "#fff", width: "420px", maxWidth: "92vw", borderRadius: "8px", overflow: "hidden", boxShadow: "0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)" },
            children: [
                e.jsxs("div", {
                    style: { padding: "14px 16px", borderBottom: "1px solid #dadde1", display: "flex", alignItems: "center", justifyContent: "space-between" },
                    children: [
                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                            e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#1877f2", children: e.jsx("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" }) }),
                            e.jsx("span", { style: { fontSize: "17px", fontWeight: 700, color: "#050505" }, children: s("like.title") }),
                        ] }),
                        e.jsx("div", { style: { width: "36px", height: "36px", borderRadius: "50%", background: "#e4e6eb", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, onClick: onDismiss, children: e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#65676b", children: e.jsx("path", { d: "M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 101.06 1.06L12 13.06l4.42 4.42a.75.75 0 101.06-1.06L13.06 12z" }) }) }),
                    ],
                }),
                e.jsxs("div", {
                    style: { padding: "16px" },
                    children: [
                        e.jsx("div", { style: { background: "#f0f2f5", borderRadius: "8px", padding: "14px", marginBottom: "12px" }, children:
                            e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                                e.jsxs("div", { style: { position: "relative", flexShrink: 0 }, children: [
                                    e.jsx("img", { src: _mainImg, alt: "", style: { width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)" } }),
                                    e.jsx("div", { style: { position: "absolute", bottom: "-2px", right: "-2px", width: "20px", height: "20px", borderRadius: "50%", background: "#e41e3f", border: "2px solid #f0f2f5", display: "flex", alignItems: "center", justifyContent: "center" }, children:
                                        e.jsx("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "#fff", children: e.jsx("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" }) }),
                                    }),
                                ] }),
                                e.jsxs("div", { children: [
                                    e.jsxs("div", { style: { fontSize: "15px", lineHeight: "1.3" }, children: [
                                        e.jsx("span", { style: { fontWeight: 600, color: "#050505" }, children: _main.name }),
                                        " " + s("like.and") + " ",
                                        e.jsx("span", { style: { fontWeight: 600, color: "#050505" }, children: _othersCount + " " + s("like.others") }),
                                        " " + s("like.liked_post"),
                                    ] }),
                                    e.jsx("div", { style: { fontSize: "13px", color: "#65676b", marginTop: "2px" }, children: s("like.ago") }),
                                ] }),
                            ] }),
                        }),
                        e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0", marginBottom: "16px", paddingLeft: "4px" }, children:
                            _people.map((p, i) =>
                                e.jsx("img", {
                                    src: "files/profiles/" + p.img,
                                    alt: "",
                                    style: { width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", border: "2px solid #fff", marginLeft: i > 0 ? "-8px" : "0", zIndex: _people.length - i, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)" },
                                    key: i,
                                })
                            ),
                        }),
                        e.jsx("div", { style: { background: "#1877f2", color: "#fff", padding: "0 16px", height: "36px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 600, cursor: "pointer", marginBottom: "8px" }, onClick: onDismiss, children: s("like.view") }),
                        e.jsx("div", { style: { background: "#e4e6eb", color: "#050505", padding: "0 16px", height: "36px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 600, cursor: "pointer" }, onClick: onDismiss, children: s("like.close") }),
                    ],
                }),
            ],
        }),
    });
}
