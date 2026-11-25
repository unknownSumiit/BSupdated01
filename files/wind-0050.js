import { r as e, j as h } from "./file.js";
function A({ to: r = 0, speed: n = 1e3, decimals: u = 0, className: i = "" }) {
    const [m, f] = e.useState(0),
        l = e.useRef(null),
        s = 0;
    e.useEffect(() => {
        let t;
        const o = performance.now();
        l.current = o;
        const a = (x) => {
            const d = x - o,
                c = Math.min(1, d / n),
                F = s + (r - s) * c;
            f(F), c < 1 && (t = requestAnimationFrame(a));
        };
        return (t = requestAnimationFrame(a)), () => cancelAnimationFrame(t);
    }, [r, n]);
    const p = m.toFixed(u).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    return h.jsx("h2", { className: i, children: p });
}
export { A as C };
