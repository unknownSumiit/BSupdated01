
/**
 * bsod-canvas.js
 */

const BSOD_CSS = `
#bsod-root{position:fixed;inset:0;z-index:1000000000;overflow:hidden;opacity:0;transition:opacity .5s;font-family:"Lucida Console","Courier New",monospace;font-size:14px;line-height:1.55;color:#b8b8b8;background:#000080}
#bsod-root.visible{opacity:1}
.bsod-terminal{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.bsod-terminal-lines{position:absolute;inset:0 0 0 48%;overflow:hidden}
.bsod-error-line{position:absolute;top:-32px;left:var(--x);color:var(--tone,#a8c4ad);font-size:clamp(10px,1vw,13px);line-height:1.4;white-space:nowrap;text-shadow:none;opacity:0;animation:bsod-error-fall var(--speed) linear var(--delay) infinite}
.bsod-terminal-lines.paused .bsod-error-line{animation-play-state:paused}
.bsod-white{color:#fff}
@keyframes bsod-error-fall{0%{transform:translateY(-32px);opacity:0}12%{opacity:.68}88%{opacity:.68}100%{transform:translateY(calc(100vh + 40px));opacity:0}}
.bsod-text{position:absolute;left:clamp(16px,3vw,40px);top:50%;z-index:1;transform:translateY(-50%);box-sizing:border-box;white-space:pre-wrap;width:min(48vw,680px);max-height:calc(100vh - 48px);overflow:auto;padding:clamp(20px,3vw,32px);border:0;border-radius:0;background:transparent;box-shadow:none;color:#b8b8b8}
.bsod-bar-wrap{margin-top:20px;display:inline-block;border:1px solid #b8b8b8;padding:2px;min-width:300px;position:relative;height:22px}
.bsod-bar-fill{height:100%;background:#b8b8b8}
.bsod-bar-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:12px;font-weight:400}
@media(max-width:640px){.bsod-terminal-lines{inset:0 0 0 36%}.bsod-error-line{font-size:9px}.bsod-bar-wrap{min-width:min(300px,100%)}.bsod-text{left:50%;top:auto;bottom:12px;transform:translateX(-50%);width:calc(100% - 24px);max-height:70vh;padding:18px}}
@media(prefers-reduced-motion:reduce){.bsod-error-line{animation:none;opacity:.68;position:relative;display:block;top:auto;left:auto;margin:8px 0}.bsod-terminal-lines{inset:0 0 0 48%;padding-top:24px}}
`;

let container = null;
let isRunning = false;
let progressInterval = null;

const state = {
    progress: 0,
};

export function initBSODBackground(containerId = 'bsod-container') {
    const parent = document.getElementById(containerId);
    if (!parent) return null;

    destroyBSODBackground();

    container = document.createElement('div');
    container.id = 'bsod-root';

    if (!document.getElementById('bsod-styles')) {
        const style = document.createElement('style');
        style.id = 'bsod-styles';
        style.textContent = BSOD_CSS;
        document.head.appendChild(style);
    }

    container.innerHTML = buildHTML();
    parent.insertBefore(container, parent.firstChild);

    return container;
}

function buildHTML() {
    const t = {
        intro: 'A problem has been detected and Windows has been shut down\nto prevent damage to your computer.',
        driver: 'The problem appears to be caused by the following driver: atapi.sys',
        error: 'PAGE_FAULT_IN_NONPAGED_AREA',
        advice: 'Check that any new hardware or software is properly installed.\nIf this is a new installation, ask the manufacturer for updates.\n\nIf problems continue, disable or remove recently installed hardware\nor software. Disable BIOS memory options such as caching or shadowing.',
        technical: 'Technical information:',
        footer: 'Beginning dump of physical memory...\nContact your system administrator or technical support group\nfor further assistance.',
        complete: 'complete',
    };

    return `
<div class="bsod-terminal" aria-hidden="true">
    <div class="bsod-terminal-lines"></div>
</div>
<div class="bsod-text">
<span class="bsod-white">${t.intro}</span>

${t.driver}
<span class="bsod-white">${t.error}</span>

${t.advice}

${t.technical}

*** STOP: 0x00000050 (0xFD3094C2, 0x00000001, 0xFBFE7617, 0x00000000)

*** atapi.sys - Address FBFE7617 base at FBFE5000, DateStamp 3d6dd67c

<div class="bsod-bar-wrap">
    <div class="bsod-bar-fill" id="bsod-bar" style="width:0%;"></div>
    <div class="bsod-bar-text" id="bsod-bar-text">0% ${t.complete}</div>
</div>

<span style="margin-top:8px;display:block;font-size:12px;">${t.footer}</span>
</div>`;
}

function randomSecurityEvent() {
    const hex = (digits) => Math.floor(Math.random() * 16 ** digits)
        .toString(16)
        .toUpperCase()
        .padStart(digits, '0');

    const time = new Date().toISOString().slice(11, 23);

    const events = [
        { level: 'INFO', tone: '#a8c4ad', message: 'Endpoint posture verified' },
        { level: 'INFO', tone: '#a8c4ad', message: 'Firewall policy checked' },
        { level: 'AUDIT', tone: '#a8bdc4', message: 'Access review recorded' },
        { level: 'AUDIT', tone: '#a8bdc4', message: 'Session token validation passed' },
        { level: 'NOTICE', tone: '#c4b99f', message: 'Security alert reviewed' },
        { level: 'INFO', tone: '#a8c4ad', message: 'Encryption status verified' },
        { level: 'INFO', tone: '#a8c4ad', message: 'Threat feed synchronization complete' },
    ];

    const event = events[Math.floor(Math.random() * events.length)];

    return {
        text: `[SOC ${time}] ${event.level} ${event.message} | EVT-${hex(4)}-${hex(4)}`,
        tone: event.tone,
    };
}

function createErrorRain() {
    const rain = container?.querySelector('.bsod-terminal-lines');
    if (!rain || rain.childElementCount) return;

    for (let i = 0; i < 14; i += 1) {
        const line = document.createElement('span');
        const event = randomSecurityEvent();

        line.className = 'bsod-error-line';
        line.textContent = event.text;
        line.style.setProperty('--tone', event.tone);
        line.style.setProperty('--x', `${Math.random() * 75}%`);
        line.style.setProperty('--speed', `${5 + Math.random() * 3}s`);
        line.style.setProperty('--delay', `${-Math.random() * 8}s`);

        line.addEventListener('animationiteration', () => {
            const nextEvent = randomSecurityEvent();
            line.textContent = nextEvent.text;
            line.style.setProperty('--tone', nextEvent.tone);
            line.style.setProperty('--x', `${Math.random() * 75}%`);
        });

        rain.appendChild(line);
    }
}

export function startBSOD() {
    if (!container || isRunning) return;

    createErrorRain();

    container.classList.add('visible');
    isRunning = true;
    state.progress = 0;

    progressInterval = setInterval(updateProgress, 800);
}

function updateProgress() {
    if (!container || !isRunning) {
        clearInterval(progressInterval);
        progressInterval = null;
        return;
    }

    const bar = container.querySelector('#bsod-bar');
    const text = container.querySelector('#bsod-bar-text');

    if (!bar || !text) return;

    if (state.progress < 100) {
        state.progress = Math.min(
            100,
            state.progress + 0.3 + Math.random() * 0.8
        );

        const value = Math.floor(state.progress);

        bar.style.width = `${value}%`;
        text.textContent = `${value}% complete`;
    }

    if (state.progress >= 100) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
}

export function destroyBSODBackground() {
    isRunning = false;

    if (progressInterval !== null) {
        clearInterval(progressInterval);
        progressInterval = null;
    }

    if (container?.parentNode) {
        container.parentNode.removeChild(container);
    }

    document.getElementById('bsod-root')?.remove();

    container = null;
    state.progress = 0;
}
