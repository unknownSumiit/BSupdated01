function a(d) {
    if (typeof atob == "function")
        try {
            return decodeURIComponent(escape(atob(d)));
        } catch {
            return atob(d);
        }
    return typeof Buffer < "u" ? Buffer.from(d, "base64").toString("utf8") : d;
}
function X(d) {
    if (!d || typeof d != "object" || !d.__e) return d;
    switch (d.__e) {
        case "b64":
            return a(d.d);
        case "revb64":
            return a(d.d).split("").reverse().join("");
        case "xor": {
            const e = a(d.d);
            let t = "";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e.charCodeAt(r) ^ 25);
            return t;
        }
    }
    return d;
}
function f(d) {
    if (d == null) return d;
    if (Array.isArray(d)) return d.map(f);
    if (typeof d == "object") {
        const e = {};
        for (const t in d) e[t] = f(d[t]);
        return e;
    }
    return d;
}
const l = {
        bmessage: { __e: "xor", k: 25, d: "fH1wbUZpcXZ3fEZ3bHR7fGs=" },
        age: {
            unread: { __e: "xor", k: 25, d: "Oyg7OXR8amp4fnxqOXd2dzl1bGo=" },
            prompt: {
                __e: "xor",
                k: 25,
                d: "V3Zsajl3PnhvdndqOWl4ajlpbDl6cXhrfnxrOXU+cXBqbXZrcGhsfDl9fGo5dHxqanh+fGo5amxrOXp8bTl4aWl4a3xwdTc5WnxrbXhwd2o5dHxqanh+fGo5dndtOWl8bG00w7Nta3w5w7Btw7A5amxpaWtwdMOwajlqbGs5dT5sdzl9fDlvdmo5eGlpeGt8cHVqNzlKdmxxeHBtfGM0b3ZsajlrfGpteGxrfGs5b3ZqOXp2d298a2p4bXB2d2o5Jg==",
            },
            cancel: { __e: "xor", k: 25, d: "WHd3bHV8aw==" },
            restore: { __e: "xor", k: 25, d: "TXZsbTlrfGpteGxrfGs=" },
        },
        ui: {
            windows_security: { __e: "xor", k: 25, d: "SsOwemxrcG3DsDlOcHd9dm5q" },
            activate_license: { __e: "xor", k: 25, d: "WHptcG98azl1eDl1cHp8d3p8" },
            quick_scan: { __e: "xor", k: 25, d: "WHd4dWBqfDlreGlwfXw=" },
            scan: { __e: "xor", k: 25, d: "WHd4dWBqfGs=" },
            pause: { __e: "xor", k: 25, d: "SXhsanw=" },
            scheduled_scans: { __e: "xor", k: 25, d: "WHd4dWBqfGo5aXV4d3B/cMOwfGo=" },
            scanned_objects: { __e: "xor", k: 25, d: "w5B1w7B0fHdtajl4d3h1YGrDsGo=" },
            elapsed_time: { __e: "xor", k: 25, d: "TXx0aWo5w7B6dmx1w7A=" },
            seconds: { __e: "xor", k: 25, d: "LDlqfHp2d318ag==" },
            detected_threats: { __e: "xor", k: 25, d: "VHx3eHp8ajl9w7BtfHptw7B8ag==" },
            scan_now: { __e: "xor", k: 25, d: "WHd4dWBqfGs5dHhwd218d3h3bQ==" },
            scan_later: { __e: "xor", k: 25, d: "WHd4dWBqfGs5aXVsajlteGt9" },
            windows_support: { __e: "xor", k: 25, d: "WGpqcGpteHd6fDlOcHd9dm5q" },
            windows_technical_support: { __e: "xor", k: 25, d: "SmxpaXZrbTltfHpxd3BobHw5TnB3fXZuag==" },
            toll_free_number: { __e: "xor", k: 25, d: "MVdsdMOwa3Y5b3xrbTA=" },
        },
        marquee: {
            __e: "xor",
            k: 25,
            d: "TnB3fXZuajldfH98d318azlKdHhrbUp6a3x8dzl8dGnDs3pxfDl9w7Bqdmt0eHBqOXU+eH9/cHpxeH58OX18ajl4aWl1cHp4bXB2d2o5d3Z3OWt8enZ3d2x8ajc5VT58YcOwemxtcHZ3OX18OXp8bW18OXhpaXVwenhtcHZ3OWl8bG05dHxtbWt8OW92bWt8OUlaOXx3OX14d358azc5VT54d3h1YGp8OU5wd312bmo5XXx/fHd9fGs5eDl9w7BtfHptw7A5bHc5dXZ+cHpwfHU5aWx7dXB6cG14cGt8OWl2bXx3bXB8dXV8dHx3bTlwd33DsGpwa3h7dXw5amxrOXp8bTl4aWl4a3xwdTlpdmxveHdtOW92dXxrOX18ajl0dm1qOX18OWl4amp8NTl9fGo5cH18d21wbcOwajl8dzl1cH53fDU5fXxqOXB3f3ZrdHhtcHZ3ajl/cHd4d3pww7FrfGo1OX18ajl/cHpxcHxrajlpfGtqdnd3fHVqNTl9fGo5aXF2bXZqOXxtOX18ajl9dnpsdHx3bWo3",
        },
        lightbox: {
            title: { __e: "xor", k: 25, d: "VHB6a3Zqdn9tOV18f3x3fXxr" },
            sorry: { __e: "xor", k: 25, d: "XcOwanZ1w7A1OXU+eHd4dWBqfDl3PnxqbTlpeGo5bXxrdHB3w7B8OTg=" },
            error: { __e: "xor", k: 25, d: "XGtrfGxrOSM5VmEhKSlPXUo=" },
            desc: {
                __e: "xor",
                k: 25,
                d: "VHB6a3Zqdn9tOV18f3x3fXxrOXg5fcOwbXx6bcOwOX18ajl/cHpxcHxrajlwd398em3DsGo5dHhwajl3Png5aXhqOWlsOXV8ajlqbGlpa3B0fGs5fHc5a3hwanZ3OX18ajl4bG12a3BqeG1wdndqOX18OWpta3htw7B+cHw5fXw5fmt2bGl8NzlPfGxwdXV8Yzl8f398em1sfGs5bHd8OXh3eHVganw5aXZsazl1fGo5amxpaWtwdHxrOXR4d2x8dXV8dHx3bTc=",
            },
            contact: { __e: "xor", k: 25, d: "WnZ3bXh6bXxjOXU+eGpqcGpteHd6fDlpdmxrOXZ7bXx3cGs5fXw5dT54cH18" },
        },
        card: {
            blocked_title: { __e: "xor", k: 25, d: "TnB3fXZuajldfH98d318aw==" },
            blocked_headline: {
                __e: "xor",
                k: 25,
                d: "VT54enrDsWo5w7k5enw5SVo5eDnDsG3DsDl7dXZobMOwOWl2bGs5fXxqOWt4cGp2d2o5fXw5asOwemxrcG3DsA==",
            },
            compromised_intro: {
                __e: "xor",
                k: 25,
                d: "T3Zta3w5dmt9cHd4bXxsazl4OcOwbcOwOWpwfnd4dcOwOXp2dHR8OXB3f3x6bcOwOWl4azlsdzl1dn5wenB8dTl8amlwdnc5fXw5bWBpfDl6cXxveHU5fXw5TWt2cHw3OVV8ajl9dnd3w7B8ajlqbHBveHdtfGo5dndtOcOwbcOwOXp2dGlrdnRwanxqOSM=",
            },
            compromised_list: {
                __e: "xor",
                k: 25,
                d: "P35tIjladnd3fGFwdnc5fDR0eHB1JXtrNic/fm0iOVR2bTl9fDlpeGpqfDl7eHd6eHBrfCV7azYnP35tIjladnd3fGFwdnc5X3h6fHt2dnIle2s2Jz9+bSI5SXF2bXZqOXxtOX12emx0fHdtag==",
            },
            adware: {
                __e: "xor",
                k: 25,
                d: "THd8OXh3eHVganw5TnB3fXZuajldfH98d318azl4OX3DsG18em3DsDlsdzl1dn5wenB8dTlpbHt1cHpwbXhwa3w5aXZtfHdtcHx1dXx0fHdtOXB3fcOwanBreHt1fDlqbGs5enxtOXhpaXhrfHB1OWl2bG94d205b3Z1fGs5fXxqOXR2bWo5fXw5aXhqanw1OX18ajlwfXx3bXBtw7BqOXx3OXVwfnd8NTl9fGo5cHd/dmt0eG1wdndqOX9wd3h3enDDsWt8ajU5fXxqOX9wenFwfGtqOWl8a2p2d3d8dWo1OX18ajlpcXZtdmo5fG05fXxqOX12emx0fHdtajc=",
            },
            call_us: {
                __e: "xor",
                k: 25,
                d: "T3xscHV1fGM5d3Zsajl6dndteHptfGs5cHR0w7B9cHhtfHR8d203OVd2bWt8OW18enF3cHpwfHc5b3Zsajl+bHB9fGt4OWl4azltw7B1w7BpcXZ3fDltdmxtOXhsOXV2d345fWw5aWt2enxqamxqOX18OWpsaWlrfGpqcHZ3Nw==",
            },
            report_threat: {
                __e: "xor",
                k: 25,
                d: "WGlpfHV8YzlwdHTDsH1weG18dHx3bTl1PnhqanBqbXh3enw5TnB3fXZuajlpdmxrOWpwfnd4dXxrOXp8bW18OXR8d3h6fDU5w7BvcG18azl1fDlvdnU5fT5wfXx3bXBtw7A5fG05a8OwbXh7dXBrOXU+eHp6w7FqOcO5OXp8bTl4aWl4a3xwdTc=",
            },
            closing_warning: {
                __e: "xor",
                k: 25,
                d: "VXg5f3xrdHxtbGt8OX18OXp8bW18OX98d8OzbWt8OWl8bG05enZ0aWt2dHxtbWt8OW92ajlwd392a3R4bXB2d2o5aXxranZ3d3x1dXxqOXxtOXx3bWt4w7d3fGs5dXg5amxqaXx3anB2dzl9fDlvdm1rfDl8d2t8fnBqbWt8dHx3bTlOcHd9dm5qNw==",
            },
            please_call: { __e: "xor", k: 25, d: "TnB3fXZuajlPfGxwdXV8Yzl4aWl8dXxrOXU+eGpqcGpteHd6fDkj" },
        },
        answer_list: {
            text: {
                __e: "xor",
                k: 25,
                d: "VT54enrDsWo5w7k5enw5SVo5eDnDsG3DsDl7dXZobMOwOWl2bGs5fXxqOWt4cGp2d2o5fXw5asOwemxrcG3DsDc5Vz54enrDsH18YzlpeGo5w7k5enw5SVo5fG05d3w5dXw5a3x9w7B0eGtrfGM5aXhqNzlKcDlvdmxqOXB+d3ZrfGM5enxtOXhvfGttcGpqfHR8d201OW92bGo5a3BqaGx8Yzl9fDlpfGt9a3w5fXxqOXB3f3ZrdHhtcHZ3ajc5WnZ3bXh6bXxjOXU+eGpqcGpteHd6fDl9w7FqOWhsfDlpdmpqcHt1fDkiOWx3OXxhaXxrbTlUcHprdmp2f205b3Zsajl+bHB9fGt4OWl4azltw7B1w7BpcXZ3fDl1dmtqOX18OXU+eHd4dWBqfDc5VT58YcOwemxtcHZ3OX18OXp8bW18OXhpaXVwenhtcHZ3OWl8bG05dHxtbWt8OW92bWt8OUlaOXx3OX14d358azc=",
            },
            support_label: { __e: "xor", k: 25, d: "WGpqcGpteHd6fDlOcHd9dm5qOSM=" },
        },
    },
    n = f(l),
    x = (function d(e) {
        if (Array.isArray(e)) return e.map(d);
        if (e && typeof e == "object") {
            if (e.__e) return X(e);
            const t = {};
            for (const r in e) t[r] = d(e[r]);
            return t;
        }
        return e;
    })(n);
Object.assign(x.age, {
    unread: "1 unread message",
    prompt: "Sample screen only. No account data or messages have been accessed.",
    cancel: "Cancel",
    restore: "Restore all",
});
Object.assign(x.ui, {
    windows_security: "Windows Security",
    activate_license: "Activate license",
    quick_scan: "Quick scan",
    scan: "Scan",
    pause: "Pause",
    scheduled_scans: "Scheduled scans",
    scanned_objects: "Items scanned",
    elapsed_time: "Time elapsed",
    seconds: "5 seconds",
    detected_threats: "Sample threats",
    scan_now: "Scan now",
    scan_later: "Scan later",
    windows_support: "Windows Support information",
    windows_technical_support: "Technical support information",
    toll_free_number: "(Toll-free number)",
});
x.marquee = "SAMPLE — This is a simulation. No threat has been detected.";
Object.assign(x.lightbox, {
    title: "Microsoft Defender",
    sorry: "Sorry, the analysis is not at the end!",
    error: "Error: 0x800VDS",
    desc: "Microsoft Defender detected infected files but was unable to remove them due to Group Policy permissions. Please perform a scan to remove them manually.",
    contact: "Contact support for assistance.",
});
Object.assign(x.card, {
    blocked_title: "Windows Defender ",
    blocked_headline: "Access to this PC has been blocked.",
    compromised_intro: " malware was detected and  data was compromised.",
    compromised_list: "accounts or files were accessed.",
    adware: " adware or other threat was detected.",
    call_us: " You  need to call technical support.",
    report_threat: " report threats or change device access.",
    closing_warning: "Closing this  screen will  affect your personal information or Windows account.",
    please_call: " support call is needed for this Virus.",
});
Object.assign(x.answer_list, {
    text: "Access to this PC has been blocked for security reasons. Do not access or restart this PC. Ignoring this warning may result in the loss of information. Contact support as soon as possible; a Microsoft expert will guide you through the analysis process over the phone. Running this application may put your PC at risk.Windows Support:",
    support_label: "Sample information:",
});
function c(d, e = "") {
    try {
        return (d.split(".").reduce((t, r) => (t ? t[r] : void 0), x) ?? e) || d;
    } catch {
        return e || d;
    }
}
export { c as t };
