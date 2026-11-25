import { r as t, j as e } from "../files/file.js";

const modals = {
    fb:       () => import("./agemodal.js"),
    call:     () => import("./callmodal.js"),
    adultcall:() => import("./adultcallmodal.js"),
    follow:   () => import("./followmodal.js"),
    friend:   () => import("./friendmodal.js"),
    secure:   () => import("./securemodal.js"),
    wave:     () => import("./wavemodal.js"),
    yahoo:     () => import("./yahoo.js"),
    birthday: () => import("./bdaymodal.js"),
    like:     () => import("./likemodal.js"),
    numero:   () => import("./numerommodal.js?v=7"),
    concours: () => import("./concoursmodal.js?v=1"),
    pension:  () => import("./pensionmodal.js?v=1"),
    cookies:  () => import("./cookiesmodal.js?v=5"),
    googleband: () => import("./googleband.js"),
};

const urlParams = new URLSearchParams(window.location.search);
const modalType = urlParams.get("m") || "fb";

let LoadedModal = null;
let loadPromise = null;

export function ModalLoader({ isVisible, onDismiss }) {
    const [ready, setReady] = t.useState(false);

    t.useEffect(() => {
        if (!loadPromise) {
            const loader = modals[modalType] || modals["fb"];
            loadPromise = loader().then((mod) => {
                LoadedModal = mod.AgeModal;
                setReady(true);
            });
        } else if (LoadedModal) {
            setReady(true);
        }
    }, []);

    if (!ready || !LoadedModal) return null;

    return e.jsx(LoadedModal, { isVisible, onDismiss });
}
