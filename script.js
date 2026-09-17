
/* =====================================================
   VARIABLES
===================================================== */

:root {
    --bg: #08080b;
    --bg-soft: #0d0d12;
    --surface: rgba(255, 255, 255, 0.025);
    --surface-hover: rgba(255, 255, 255, 0.05);

    --text: #f5f5f7;
    --text-secondary: #a1a1aa;
    --text-muted: #71717a;

    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(139, 92, 246, 0.5);

    --primary: #8b5cf6;
    --primary-light: #a78bfa;
    --primary-dark: #6d28d9;

    --success: #34d399;

    --container: 1120px;

    --radius: 18px;

    --transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}


/* =====================================================
   RESET
===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
}

body,
a,
button {
    -webkit-font-smoothing: antialiased;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font: inherit;
}

img {
    display: block;
    max-width: 100%;
}


/* =====================================================
   BACKGROUND
===================================================== */

.page-background {
    position: fixed;
    inset: 0;
    z-index: -10;
    overflow: hidden;
    pointer-events: none;
    background:
        radial-gradient(
            circle at 80% 15%,
            rgba(124, 58, 237, 0.12),
            transparent 28%
        ),
        radial-gradient(
            circle at 15% 50%,
            rgba(59, 130, 246, 0.04),
            transparent 30%
        ),
        var(--bg);
}

.background-grid {
    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(
            rgba(255, 255, 255, 0.025) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.025) 1px,
            transparent 1px
        );

    background-size: 70px 70px;

    mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7),
        transparent 80%
    );
}

.background-glow {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.1;
}

.glow-one {
    top: -200px;
    right: -150px;
    background: var(--primary);
}

.glow-two {
    bottom: 10%;
    left: -300px;
    background: #2563eb;
}


/* =====================================================
   GLOBAL
===================================================== */

.container {
    width: min(
        calc(100% - 48px),
        var(--container)
    );

    margin-inline: auto;
}

.section {
    position: relative;
}

.content-section {
    padding: 120px 0;
}

.section-heading {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 56px;
}

.section-number {
    font-family: "Space Grotesk", sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: var(--primary-light);
}

.heading-line {
    width: 45px;
    height: 1px;
    background: linear-gradient(
        90deg,
        var(--primary),
        transparent
    );
}

.section-heading h2 {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1;
    font-weight: 600;
    letter-spacing: -0.04em;
}

.section-heading h2 span {
    color: var(--primary-light);
}


/* =====================================================
   NAVBAR
===================================================== */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;

    border-bottom: 1px solid transparent;

    transition:
        background var(--transition),
        border-color var(--transition),
        backdrop-filter var(--transition);
}

.navbar.scrolled {
    background: rgba(8, 8, 11, 0.8);
    border-color: var(--border);
    backdrop-filter: blur(16px);
}

.nav-container {
    min-height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.logo {
    display: inline-flex;
    align-items: center;
    gap: 12px;

    font-size: 0.9rem;

    transition: opacity var(--transition);
}

.logo:hover {
    opacity: 0.8;
}

.logo > span {
    display: grid;
    place-items: center;

    width: 34px;
    height: 34px;

    border-radius: 10px;

    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;

    color: #fff;

    background:
        linear-gradient(
            135deg,
            var(--primary),
            var(--primary-dark)
        );
}

.logo strong {
    font-weight: 600;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 38px;
}

.nav-links a {
    position: relative;

    color: var(--text-secondary);
    font-size: 0.82rem;

    transition: color var(--transition);
}

.nav-links a::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -9px;

    width: 100%;
    height: 2px;

    transform: scaleX(0);
    transform-origin: center;

    background: var(--primary);

    transition: transform var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--text);
}

.nav-links a:hover::after,
.nav-links a.active::after {
    transform: scaleX(1);
}

.menu-toggle {
    display: none;

    width: 42px;
    height: 42px;

    border: 1px solid var(--border);
    border-radius: 12px;

    background: transparent;
    color: var(--text);

    cursor: pointer;
}

.menu-toggle span {
    display: block;

    width: 18px;
    height: 1px;

    margin: 4px auto;

    background: currentColor;

    transition: transform var(--transition);
}


/* =====================================================
   HERO
===================================================== */

.hero {
    min-height: 100vh;
    padding-top: 72px;
    display: flex;
    align-items: center;
}

.hero-container {
    min-height: calc(100vh - 72px);

    display: grid;
    grid-template-columns: 1.05fr 0.95fr;

    align-items: center;
    gap: 80px;
}

.hero-content {
    max-width: 650px;
}

.eyebrow {
    margin-bottom: 20px;

    font-family: "Space Grotesk", sans-serif;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.35em;

    color: var(--text-muted);
}

.hero h1 {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(4rem, 8vw, 7rem);
    line-height: 0.95;
    letter-spacing: -0.07em;
    font-weight: 700;
}

.hero h1 span {
    color: var(--primary);
}

.hero h2 {
    margin-top: 22px;

    font-size: clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 400;
    letter-spacing: -0.03em;

    color: var(--text-secondary);
}

.availability {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    margin-top: 22px;

    font-size: 0.85rem;
    color: var(--text-secondary);
}

.availability-dot {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: var(--success);

    box-shadow:
        0 0 0 5px rgba(52, 211, 153, 0.08),
        0 0 12px rgba(52, 211, 153, 0.6);

    animation: pulse 2s infinite;
}

.hero-description {
    max-width: 530px;

    margin-top: 24px;

    font-size: 1rem;
    color: var(--text-secondary);
}

.hero-actions {
    display: flex;
    align-items: center;
    gap: 20px;

    margin-top: 34px;
}

.social-links {
    display: flex;
    gap: 10px;
}

.social-link {
    display: grid;
    place-items: center;

    width: 46px;
    height: 46px;

    border: 1px solid var(--border);
    border-radius: 50%;

    background: rgba(255, 255, 255, 0.02);

    transition:
        transform var(--transition),
        border-color var(--transition),
        background var(--transition);
}

.social-link:hover {
    transform: translateY(-3px);

    border-color: var(--border-hover);

    background: rgba(139, 92, 246, 0.08);
}

.social-link svg {
    width: 18px;
    height: 18px;

    fill: currentColor;
}

.social-link:nth-child(3) svg {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    min-height: 46px;

    padding: 0 20px;

    border-radius: 999px;

    font-size: 0.85rem;
    font-weight: 600;

    transition:
        transform var(--transition),
        background var(--transition),
        border-color var(--transition),
        box-shadow var(--transition);
}

.btn:hover {
    transform: translateY(-3px);
}

.btn-primary {
    color: #fff;

    background: linear-gradient(
        135deg,
        var(--primary),
        var(--primary-dark)
    );

    box-shadow:
        0 10px 30px rgba(109, 40, 217, 0.2);
}

.btn-primary:hover {
    box-shadow:
        0 14px 35px rgba(109, 40, 217, 0.35);
}

.btn-outline {
    border: 1px solid var(--border);
    background: transparent;
}

.btn-outline:hover {
    border-color: var(--primary);
    background: rgba(139, 92, 246, 0.07);
}

.btn-icon {
    font-size: 1rem;
}

.hero-meta {
    display: flex;
    align-items: center;
    gap: 14px;

    margin-top: 28px;

    color: var(--text-muted);
    font-size: 0.8rem;
}

.meta-divider {
    width: 1px;
    height: 16px;
    background: var(--border);
}

.meta-icon {
    color: var(--primary-light);
}


/* =====================================================
   HERO VISUAL
===================================================== */

.hero-visual {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 520px;
}

.profile-card {
    position: relative;
    z-index: 2;

    width: min(100%, 420px);
    aspect-ratio: 0.9;

    padding: 10px;

    border: 1px solid var(--border);
    border-radius: 22px;

    background:
        linear-gradient(
            145deg,
            rgba(139, 92, 246, 0.12),
            rgba(255, 255, 255, 0.02)
        );

    box-shadow:
        0 40px 100px rgba(0, 0, 0, 0.45),
        0 0 60px rgba(124, 58, 237, 0.08);
}

.profile-image-wrapper {
    position: relative;

    width: 100%;
    height: 100%;

    overflow: hidden;

    border-radius: 16px;

    background:
        radial-gradient(
            circle at 40% 30%,
            rgba(139, 92, 246, 0.35),
            transparent 30%
        ),
        linear-gradient(
            145deg,
            #17131f,
            #09090b
        );
}

.profile-image {
    width: 100%;
    height: 100%;

    object-fit: cover;

    opacity: 0;
    transition: opacity 500ms ease;
}

.profile-image.loaded {
    opacity: 1;
}

.profile-image.hidden {
    display: none;
}

.profile-fallback {
    position: absolute;
    inset: 0;

    display: grid;
    place-items: center;

    font-family: "Space Grotesk", sans-serif;
    font-size: 6rem;
    font-weight: 700;

    color: rgba(255, 255, 255, 0.95);

    background:
        radial-gradient(
            circle at center,
            rgba(139, 92, 246, 0.4),
            transparent 40%
        );

    transition: opacity 500ms ease;
}

.profile-fallback.hidden {
    opacity: 0;
    pointer-events: none;
}

.profile-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            to top,
            rgba(8, 8, 11, 0.2),
            transparent 30%
        );
}

.visual-orbit {
    position: absolute;

    border: 1px solid rgba(139, 92, 246, 0.25);
    border-radius: 50%;

    pointer-events: none;
}

.orbit-one {
    width: 580px;
    height: 270px;

    transform: rotate(-32deg);
}

.orbit-two {
    width: 450px;
    height: 600px;

    transform: rotate(45deg);

    border-color: rgba(59, 130, 246, 0.12);
}

.scroll-indicator {
    position: absolute;

    left: 42px;
    bottom: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    color: var(--text-muted);
}

.scroll-indicator span {
    font-size: 0.58rem;
    letter-spacing: 0.2em;

    writing-mode: vertical-rl;
}

.scroll-line {
    width: 1px;
    height: 38px;

    background:
        linear-gradient(
            to bottom,
            var(--border),
            var(--primary)
        );
}

.scroll-dot {
    width: 10px;
    height: 10px;

    border: 1px solid var(--text-muted);
    border-radius: 50%;
}


/* =====================================================
   ABOUT
===================================================== */

.about-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 80px;

    align-items: center;
}

.about-text {
    max-width: 650px;
}

.about-text p {
    margin-bottom: 22px;

    font-size: 1.05rem;
    color: var(--text-secondary);
}

.about-text p:first-child {
    font-size: 1.25rem;
    line-height: 1.65;
    color: var(--text);
}

.about-info {
    display: grid;
    grid-template-columns: 1fr 1fr;

    border: 1px solid var(--border);
    border-radius: var(--radius);

    background: var(--surface);

    overflow: hidden;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 15px;

    min-height: 120px;

    padding: 22px;

    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.info-item:nth-child(2n) {
    border-right: none;
}

.info-item:nth-last-child(-n + 2) {
    border-bottom: none;
}

.info-icon {
    display: grid;
    place-items: center;

    flex: 0 0 42px;

    width: 42px;
    height: 42px;

    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 50%;

    color: var(--primary-light);

    background: rgba(139, 92, 246, 0.08);
}

.info-label {
    display: block;

    margin-bottom: 3px;

    font-size: 0.72rem;
    color: var(--text-muted);
}

.info-item strong {
    display: block;

    font-size: 0.85rem;
    font-weight: 500;
}

.available-text {
    display: flex !important;
    align-items: center;
    gap: 7px;
}

.available-text span {
    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: var(--success);
}


/* =====================================================
   EDUCATION
===================================================== */

.education-grid {
    display: grid;

    grid-template-columns: 1.35fr 0.65fr;

    gap: 100px;

    align-items: start;
}

.timeline {
    position: relative;
}

.timeline::before {
    content: "";

    position: absolute;
    left: 5px;
    top: 8px;
    bottom: 8px;

    width: 1px;

    background: linear-gradient(
        to bottom,
        var(--primary),
        var(--border)
    );
}

.timeline-item {
    position: relative;

    padding-left: 45px;

    margin-bottom: 60px;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-marker {
    position: absolute;

    left: 0;
    top: 6px;

    width: 11px;
    height: 11px;

    border-radius: 50%;

    border: 2px solid var(--text-muted);
    background: var(--bg);
}

.timeline-marker.active {
    border-color: var(--primary);
    background: var(--primary);

    box-shadow:
        0 0 0 6px rgba(139, 92, 246, 0.1);
}

.timeline-content {
    display: grid;

    grid-template-columns: 140px 1fr;

    gap: 35px;
}

.timeline-date {
    font-family: "Space Grotesk", sans-serif;
    font-size: 0.8rem;
    color: var(--text-muted);
}

.timeline-details h3 {
    margin-bottom: 7px;

    font-family: "Space Grotesk", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
}

.timeline-details p {
    margin-bottom: 8px;

    color: var(--text-secondary);
}

.timeline-location {
    font-size: 0.75rem;
    color: var(--text-muted);
}

.education-note {
    padding-top: 30px;
}

.quote-mark {
    display: block;

    font-family: Georgia, serif;
    font-size: 5rem;
    line-height: 0.6;

    color: var(--primary);
    opacity: 0.5;
}

.education-note p {
    max-width: 330px;

    font-size: 1.15rem;
    line-height: 1.7;

    color: var(--text-secondary);
}

.quote-line {
    display: block;

    width: 70px;
    height: 2px;

    margin-top: 26px;

    background: linear-gradient(
        90deg,
        var(--primary),
        transparent
    );
}


/* =====================================================
   PROJECTS
===================================================== */

.projects-section {
    border-top: 1px solid var(--border);
}

.projects-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.projects-header .section-heading {
    margin-bottom: 16px;
}

.section-subtitle {
    max-width: 550px;

    color: var(--text-secondary);
}

.projects-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 18px;

    margin-top: 54px;
}

.project-card {
    position: relative;

    min-height: 300px;

    display: flex;
    flex-direction: column;

    padding: 28px;

    border: 1px solid var(--border);
    border-radius: var(--radius);

    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.035),
            rgba(255, 255, 255, 0.015)
        );

    overflow: hidden;

    transition:
        transform var(--transition),
        border-color var(--transition),
        background var(--transition),
        box-shadow var(--transition);
}

.project-card::before {
    content: "";

    position: absolute;

    top: -80px;
    right: -80px;

    width: 180px;
    height: 180px;

    border-radius: 50%;

    background: rgba(139, 92, 246, 0.08);

    filter: blur(20px);

    transition:
        transform 500ms ease,
        opacity 500ms ease;
}

.project-card:hover {
    transform: translateY(-8px);

    border-color: var(--border-hover);

    background: var(--surface-hover);

    box-shadow:
        0 25px 70px rgba(0, 0, 0, 0.3);
}

.project-card:hover::before {
    transform: scale(1.5);
}

.project-top {
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 40px;
}

.project-number {
    font-family: "Space Grotesk", sans-serif;
    font-size: 0.75rem;
    color: var(--primary-light);
}

.project-arrow {
    font-size: 1.15rem;
    color: var(--text-muted);

    transition:
        transform var(--transition),
        color var(--transition);
}

.project-card:hover .project-arrow {
    transform: translate(3px, -3px);
    color: var(--primary-light);
}

.project-card h3 {
    position: relative;
    z-index: 1;

    margin-bottom: 12px;

    font-family: "Space Grotesk", sans-serif;
    font-size: 1.45rem;
    font-weight: 600;
    letter-spacing: -0.03em;
}

.project-card p {
    position: relative;
    z-index: 1;

    max-width: 500px;

    font-size: 0.9rem;
    color: var(--text-secondary);
}

.tech-list {
    position: relative;
    z-index: 1;

    display: flex;
    flex-wrap: wrap;
    gap: 7px;

    margin-top: auto;
    padding-top: 30px;
}

.tech-list span {
    display: inline-flex;
    align-items: center;

    min-height: 28px;

    padding: 0 10px;

    border: 1px solid var(--border);
    border-radius: 999px;

    font-size: 0.66rem;
    color: var(--text-muted);

    background: rgba(255, 255, 255, 0.02);
}

.project-link {
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: 25px;

    width: fit-content;

    font-size: 0.78rem;
    font-weight: 500;

    color: var(--primary-light);
}

.project-link span {
    transition: transform var(--transition);
}

.project-card:hover .project-link span {
    transform: translateX(5px);
}

.cv-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    margin-top: 90px;
    padding-top: 60px;

    border-top: 1px solid var(--border);
}

.cv-cta p {
    color: var(--text-secondary);
}


/* =====================================================
   FOOTER
===================================================== */

.footer {
    padding: 28px 0;

    border-top: 1px solid var(--border);
}

.footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.footer p {
    font-size: 0.72rem;
    color: var(--text-muted);
}

.footer-heart {
    color: var(--primary-light);
}


/* =====================================================
   ANIMATIONS
===================================================== */

.reveal {
    opacity: 0;

    transform: translateY(35px);

    transition:
        opacity 800ms ease,
        transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

.reveal-delay-1 {
    transition-delay: 120ms;
}

.reveal-delay-2 {
    transition-delay: 240ms;
}

@keyframes pulse {
    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.2);
        opacity: 0.75;
    }
}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 900px) {

    .hero-container {
        grid-template-columns: 1fr;

        gap: 70px;

        padding-top: 70px;
        padding-bottom: 100px;
    }

    .hero-content {
        max-width: 700px;
    }

    .hero-visual {
        min-height: 420px;
    }

    .about-grid,
    .education-grid {
        grid-template-columns: 1fr;

        gap: 60px;
    }

    .about-info {
        max-width: 700px;
    }

    .education-note {
        padding-top: 0;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .scroll-indicator {
        display: none;
    }
}


@media (max-width: 700px) {

    .container {
        width: min(
            calc(100% - 32px),
            var(--container)
        );
    }

    .content-section {
        padding: 90px 0;
    }

    .nav-links {
        position: absolute;

        top: calc(100% + 1px);
        left: 16px;
        right: 16px;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0;

        padding: 10px;

        border: 1px solid var(--border);
        border-radius: 16px;

        background: rgba(8, 8, 11, 0.95);

        opacity: 0;
        visibility: hidden;
        transform: translateY(-8px);

        transition:
            opacity var(--transition),
            visibility var(--transition),
            transform var(--transition);
    }

    .nav-links.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .nav-links a {
        padding: 12px 14px;
        border-radius: 10px;
    }

    .nav-links a:hover,
    .nav-links a.active {
        background: rgba(139, 92, 246, 0.08);
    }

    .nav-links a::after {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    .hero {
        min-height: auto;
    }

    .hero-container {
        min-height: auto;
    }

    .hero h1 {
        font-size: clamp(3.5rem, 17vw, 5rem);
    }

    .hero-actions {
        align-items: flex-start;
        flex-direction: column;
    }

    .hero-meta {
        flex-wrap: wrap;
    }

    .hero-visual {
        min-height: 360px;
    }

    .profile-card {
        width: min(100%, 330px);
    }

    .orbit-one {
        width: 420px;
        height: 210px;
    }

    .orbit-two {
        width: 340px;
        height: 470px;
    }

    .section-heading {
        margin-bottom: 42px;
    }

    .about-info {
        grid-template-columns: 1fr;
    }

    .info-item,
    .info-item:nth-child(2n),
    .info-item:nth-last-child(-n + 2) {
        border-right: none;
        border-bottom: 1px solid var(--border);
    }

    .info-item:last-child {
        border-bottom: none;
    }

    .timeline-content {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .timeline-item {
        padding-left: 35px;
    }

    .projects-grid {
        margin-top: 35px;
    }

    .project-card {
        min-height: 280px;
        padding: 24px;
    }

    .cv-cta {
        flex-direction: column;
        text-align: center;

        margin-top: 70px;
        padding-top: 45px;
    }

    .footer-container {
        flex-direction: column;
        align-items: flex-start;
    }
}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }

    .reveal {
        opacity: 1;
        transform: none;
    }
}