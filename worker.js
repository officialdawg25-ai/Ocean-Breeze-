const HTML = String.raw`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#071d2b">
<meta name="description" content="Discover Ocean Breeze purified water — a contemporary beverage brand shaped by clarity, calm and the elemental beauty of water.">
<meta property="og:type" content="website">
<meta property="og:title" content="Ocean Breeze — Clarity in every moment">
<meta property="og:description" content="Discover Ocean Breeze purified water. A clearer kind of refreshment.">
<meta property="og:site_name" content="Ocean Breeze">
<meta name="twitter:card" content="summary">
<link rel="canonical" href="https://ocean-breeze.officialdawg25.workers.dev/">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"Ocean Breeze","url":"https://ocean-breeze.officialdawg25.workers.dev/","description":"A beverage brand currently focused on purified water."}</script>
<title>Ocean Breeze — Clarity in every moment</title>
<style>
:root{color-scheme:dark;--ink:#061a27;--deep:#092b3d;--deep2:#0d3b50;--sea:#14556a;--aqua:#a2e4df;--mist:#d9eeeb;--paper:#f2f6f1;--muted:#a8c0c6;--line:rgba(211,241,237,.18);--serif:Georgia,"Times New Roman",serif;--sans:Arial,Helvetica,sans-serif;--ease:cubic-bezier(.2,.75,.25,1)}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:88px}
body{margin:0;background:var(--ink);color:var(--paper);font-family:var(--sans);-webkit-font-smoothing:antialiased;overflow-x:hidden}
body.menu-open{overflow:hidden}
a{color:inherit;text-decoration:none}
button,input,select,textarea{font:inherit}
button,a,input,select,textarea{-webkit-tap-highlight-color:transparent}
button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--aqua);outline-offset:4px}
.skip{position:fixed;top:12px;left:12px;z-index:20;padding:12px 16px;background:var(--paper);color:var(--ink);transform:translateY(-150%)}.skip:focus{transform:none}
.site-header{position:absolute;z-index:10;inset:0 0 auto;height:88px;padding:0 clamp(22px,5vw,76px);display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.12)}
.brand{display:inline-flex;align-items:center;gap:12px;font-size:11px;font-weight:700;letter-spacing:.23em}
.brand-mark{width:22px;height:28px;color:var(--aqua)}
.desktop-nav{display:flex;align-items:center;gap:clamp(18px,2.5vw,38px)}
.desktop-nav a,.mobile-nav a{font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#c0d2d4;transition:color .25s}
.desktop-nav a:hover,.mobile-nav a:hover{color:var(--aqua)}
.desktop-nav .nav-contact{border:1px solid rgba(162,228,223,.55);padding:12px 16px;color:var(--paper)}
.menu-toggle{display:none;background:none;border:1px solid var(--line);color:var(--paper);width:44px;height:44px;cursor:pointer}
.mobile-nav{display:none}
.hero{position:relative;isolation:isolate;min-height:100svh;overflow:hidden;display:grid;grid-template-columns:minmax(0,1fr) minmax(360px,1.05fr);align-items:center;padding:130px clamp(22px,8vw,130px) 92px;background:radial-gradient(ellipse at 67% 44%,rgba(34,124,143,.34),transparent 37%),radial-gradient(ellipse at 52% 100%,rgba(28,92,107,.22),transparent 45%),linear-gradient(118deg,#061a27 0%,#0a2b3c 52%,#061a27 100%)}
.hero:before{content:"";position:absolute;inset:-20%;z-index:-1;opacity:.5;background:repeating-radial-gradient(ellipse at 67% 47%,transparent 0 78px,rgba(156,224,218,.035) 79px 80px,transparent 81px 142px);animation:current 32s linear infinite}
.hero:after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(3,17,26,.25),transparent 42%,rgba(3,17,26,.65));pointer-events:none}
.hero-copy{position:relative;z-index:2;max-width:580px;padding-top:3vh}
.eyebrow{font-size:9px;letter-spacing:.27em;text-transform:uppercase;color:var(--aqua);display:flex;align-items:center;gap:12px}
.eyebrow:before{content:"";width:26px;height:1px;background:currentColor}
.hero h1{font:400 clamp(54px,7.4vw,106px)/.91 var(--serif);letter-spacing:-.065em;margin:28px 0 24px;max-width:680px}
.hero h1 em{font-weight:400;color:var(--aqua)}
.hero-intro{font-size:14px;line-height:1.9;color:#b4c8cd;max-width:410px;margin:0}
.hero-actions{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin-top:32px}
.button{min-height:48px;display:inline-flex;align-items:center;justify-content:center;gap:16px;padding:0 19px;border:1px solid rgba(162,228,223,.55);font-size:9px;letter-spacing:.16em;text-transform:uppercase;transition:background .25s,color .25s,border-color .25s,transform .25s;cursor:pointer}
.button:hover{transform:translateY(-2px);background:var(--mist);color:var(--ink);border-color:var(--mist)}
.button.primary{background:var(--aqua);color:#062433;border-color:var(--aqua)}
.button.primary:hover{background:#e3f6f1;border-color:#e3f6f1}
.button:disabled{opacity:.65;cursor:wait;transform:none}
.hero-note{margin-top:42px;color:#7fa1ac;font-size:9px;letter-spacing:.19em;text-transform:uppercase}
.hero-art{height:min(76vh,760px);min-height:440px;position:relative;display:grid;place-items:center;z-index:1}
.halo{position:absolute;width:min(43vw,570px);aspect-ratio:1;border-radius:50%;border:1px solid rgba(162,228,223,.14);box-shadow:inset 0 0 100px rgba(92,195,198,.06),0 0 100px rgba(57,159,171,.09)}
.halo:before,.halo:after{content:"";position:absolute;inset:10%;border:1px solid rgba(162,228,223,.12);border-radius:50%}
.halo:after{inset:22%;border-color:rgba(162,228,223,.1)}
.waterline{position:absolute;width:120%;height:45%;left:-10%;top:37%;border-top:1px solid rgba(162,228,223,.13);border-radius:50%;transform:rotate(-14deg)}
.bottle-stage{position:relative;width:min(100%,390px);height:100%;display:grid;place-items:center;perspective:1000px}
.bottle-svg{height:min(72vh,650px);width:auto;max-width:100%;overflow:visible;filter:drop-shadow(0 35px 38px rgba(0,0,0,.42));animation:bottle-drift 8s ease-in-out infinite;transform-origin:50% 55%}
.bottle-reflection{position:absolute;width:140px;height:18px;bottom:7%;border-radius:50%;background:rgba(0,0,0,.32);filter:blur(12px)}
.art-caption{position:absolute;right:0;bottom:12%;writing-mode:vertical-rl;color:#8fb2bc;font-size:8px;letter-spacing:.2em;text-transform:uppercase}
.hero-index{position:absolute;right:clamp(22px,5vw,76px);bottom:34px;color:#85a6af;font-size:9px;letter-spacing:.18em}
.scroll-cue{position:absolute;left:clamp(22px,8vw,130px);bottom:34px;color:#85a6af;font-size:9px;letter-spacing:.18em;text-transform:uppercase;display:flex;align-items:center;gap:13px}
.scroll-cue:before{content:"";width:38px;height:1px;background:var(--aqua)}
.section{padding:clamp(86px,11vw,158px) clamp(22px,9vw,144px)}
.section-label{font-size:9px;letter-spacing:.24em;text-transform:uppercase;color:#2c7b82}
.section h2{font:400 clamp(42px,5.8vw,76px)/1.02 var(--serif);letter-spacing:-.055em;margin:24px 0}
.story{background:var(--paper);color:#0a2a39;display:grid;grid-template-columns:.88fr 1.12fr;gap:clamp(38px,9vw,150px);align-items:start}
.story-title{position:sticky;top:110px}
.story-title h2{max-width:520px}
.story-copy{padding-top:12px;max-width:650px}
.story-lead{font:400 clamp(22px,2.7vw,35px)/1.48 var(--serif);color:#254b57;margin:0 0 28px}
.story-copy p:not(.story-lead){font-size:13px;line-height:2;color:#536e75;margin:0 0 18px}
.story-signature{margin-top:46px;padding-top:20px;border-top:1px solid rgba(9,42,57,.2);font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:#42757b}
.product-section{background:linear-gradient(135deg,#0a3044,#061a27 70%);position:relative;overflow:hidden}
.product-section:after{content:"";position:absolute;right:-20%;top:0;width:65%;height:100%;background:radial-gradient(ellipse,rgba(39,129,145,.16),transparent 65%);pointer-events:none}
.section-head{display:flex;align-items:end;justify-content:space-between;gap:35px;margin-bottom:54px;position:relative;z-index:1}
.section-head h2{margin-bottom:0}
.section-head p{max-width:300px;color:#a8c0c6;font-size:12px;line-height:1.9;margin:0}
.product-feature{position:relative;z-index:1;display:grid;grid-template-columns:1.05fr .95fr;min-height:470px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.product-visual{min-height:440px;position:relative;display:grid;place-items:center;background:radial-gradient(ellipse at 50% 55%,rgba(40,126,145,.26),transparent 61%)}
.product-visual .bottle-svg{height:390px;animation:none}
.product-copy{align-self:center;padding:54px clamp(22px,5vw,80px)}
.product-meta{font-size:9px;letter-spacing:.2em;color:var(--aqua);text-transform:uppercase}
.product-copy h3{font:400 clamp(34px,4vw,54px)/1.08 var(--serif);letter-spacing:-.04em;margin:20px 0}
.product-copy p{font-size:13px;line-height:1.9;color:#aec4ca;max-width:430px}
.product-facts{margin-top:32px;display:flex;gap:26px;flex-wrap:wrap}
.product-facts span{font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#83a8b1}
.product-copy .button{margin-top:30px}
.ritual{background:#dcebe7;color:#0b2b39;display:grid;grid-template-columns:1fr 1fr;gap:9vw;align-items:center}
.ritual h2{max-width:590px}
.ritual-copy{max-width:500px}
.ritual-copy p{font-size:13px;line-height:2;color:#526c72}
.wave-art{height:260px;position:relative;overflow:hidden;margin-top:25px}
.wave-art svg{width:100%;height:100%}
.future{background:#f2f6f1;color:#092a39;display:grid;grid-template-columns:1fr .8fr;gap:8vw;align-items:center}
.future p{max-width:510px;font-size:13px;line-height:2;color:#536d73}
.future-orbit{height:340px;display:grid;place-items:center;position:relative;color:#347d83;font:italic 30px/1.3 var(--serif);text-align:center}
.future-orbit:before,.future-orbit:after{content:"";position:absolute;width:290px;height:290px;border:1px solid rgba(47,125,131,.3);border-radius:50%}
.future-orbit:after{width:220px;height:220px}
.future-orbit span{position:relative;z-index:1}
.future-note{display:block;margin-top:28px;font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:#66858a}
.contact{background:radial-gradient(ellipse at 50% 0%,rgba(24,91,111,.6),transparent 60%),#061a27;padding:clamp(88px,10vw,140px) clamp(22px,9vw,144px)}
.contact-layout{display:grid;grid-template-columns:.85fr 1.15fr;gap:9vw;max-width:1300px;margin:auto}
.contact-intro h2{font:400 clamp(42px,5.4vw,72px)/1.02 var(--serif);letter-spacing:-.055em;max-width:520px}
.contact-intro p{max-width:400px;color:#a9c1c7;font-size:13px;line-height:1.9}
.contact-aside{margin-top:42px;color:#7fa2ad;font-size:9px;line-height:1.8;letter-spacing:.08em}
.enquiry-form{border-top:1px solid var(--line);padding-top:28px}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.field{display:flex;flex-direction:column;gap:10px;margin-bottom:21px}
.field.full{grid-column:1/-1}
.field label{font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:#a9c4ca}
.field input,.field select,.field textarea{width:100%;border:0;border-bottom:1px solid rgba(196,225,225,.35);border-radius:0;background:transparent;color:var(--paper);padding:12px 0;font-size:13px;outline:none}
.field select{color-scheme:dark}
.field select option{background:#0a2b3c;color:#fff}
.field textarea{min-height:104px;resize:vertical}
.field input::placeholder,.field textarea::placeholder{color:#77949d}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--aqua)}
.field input[aria-invalid="true"],.field textarea[aria-invalid="true"]{border-color:#ef9d8f}
.honeypot{position:absolute!important;left:-10000px!important;width:1px!important;height:1px!important;overflow:hidden!important}
.form-footer{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;margin-top:8px}
.form-note{font-size:10px;line-height:1.7;color:#87a5ad;max-width:310px}
.form-status{min-height:22px;margin:18px 0 0;font-size:12px;line-height:1.6;color:var(--aqua)}
.form-status.error{color:#ffb4a8}
.footer{padding:28px clamp(22px,5vw,76px);border-top:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:22px;flex-wrap:wrap;background:#061a27;color:#819da5;font-size:9px;letter-spacing:.15em;text-transform:uppercase}
.footer-brand{color:#e6f2ef;font-weight:700;letter-spacing:.2em}
.footer-links{display:flex;gap:22px}
.footer a:hover{color:var(--aqua)}
.reveal{opacity:0;transform:translateY(22px);transition:opacity .85s var(--ease),transform .85s var(--ease)}
.reveal.visible{opacity:1;transform:translateY(0)}
.delay-1{transition-delay:.12s}.delay-2{transition-delay:.22s}
@keyframes bottle-drift{0%,100%{transform:translate3d(0,0,0) rotateY(-7deg) rotateZ(-1deg)}50%{transform:translate3d(0,-13px,0) rotateY(7deg) rotateZ(1deg)}}
@keyframes current{to{transform:rotate(360deg)}}
@media(max-width:900px){.hero{grid-template-columns:1fr 1fr;padding-inline:5vw}.hero h1{font-size:clamp(50px,7vw,78px)}.hero-art{min-height:390px}.story,.ritual,.future{gap:6vw}.contact-layout{gap:5vw}.section{padding-inline:6vw}}
@media(max-width:680px){
 html{scroll-padding-top:72px}
 .site-header{height:70px;padding:0 20px}
 .desktop-nav{display:none}
 .menu-toggle{display:grid;place-items:center}
 .mobile-nav{position:fixed;inset:70px 0 0;z-index:9;background:rgba(5,24,36,.98);padding:34px 24px;display:flex;flex-direction:column;gap:0;transform:translateX(100%);transition:transform .35s var(--ease);visibility:hidden}
 .mobile-nav.open{transform:translateX(0);visibility:visible}
 .mobile-nav a{font:400 29px/1.2 var(--serif);letter-spacing:-.02em;text-transform:none;padding:18px 0;border-bottom:1px solid var(--line);color:var(--paper)}
 .hero{min-height:100svh;grid-template-columns:1fr;padding:92px 22px 76px;align-content:center;background:radial-gradient(ellipse at 50% 32%,rgba(34,124,143,.32),transparent 42%),linear-gradient(155deg,#061a27,#0a3043 55%,#061a27)}
 .hero-art{order:0;height:39svh;min-height:250px;max-height:350px;margin:0 auto 8px;width:100%}
 .bottle-stage{width:100%}
 .bottle-svg{height:40svh;max-height:345px}
 .halo{width:min(78vw,340px)}
 .waterline{top:40%}
 .art-caption{right:2%;bottom:9%;font-size:7px}
 .hero-copy{order:1;padding-top:0}
 .hero h1{font-size:clamp(52px,13.5vw,76px);margin:17px 0 16px;max-width:520px}
 .hero-intro{font-size:12px;line-height:1.8;max-width:430px}
 .hero-actions{margin-top:22px;gap:9px}
 .button{min-height:46px;padding-inline:14px;font-size:8px}
 .hero-note{margin-top:24px;font-size:8px}
 .hero-index,.scroll-cue{display:none}
 .section{padding:76px 22px}
 .story{grid-template-columns:1fr;gap:22px}
 .story-title{position:static}
 .story h2{max-width:460px;font-size:clamp(42px,11vw,62px)}
 .story-copy{padding-top:0}
 .story-lead{font-size:23px}
 .story-copy p:not(.story-lead){font-size:12px}
 .section-head{display:block;margin-bottom:32px}
 .section-head h2{font-size:clamp(42px,11vw,62px)}
 .section-head p{margin-top:20px;font-size:12px}
 .product-feature{grid-template-columns:1fr;min-height:0}
 .product-visual{min-height:290px;height:34vh;max-height:350px}
 .product-visual .bottle-svg{height:270px}
 .product-copy{padding:30px 0 42px}
 .product-copy h3{font-size:39px}
 .product-copy p{font-size:12px}
 .ritual{grid-template-columns:1fr;gap:14px}
 .ritual h2{font-size:clamp(42px,11vw,62px)}
 .wave-art{height:190px;margin-top:8px}
 .future{grid-template-columns:1fr;gap:8px}
 .future h2{font-size:clamp(42px,11vw,62px)}
 .future-orbit{height:245px;font-size:25px}
 .future-orbit:before{width:220px;height:220px}
 .future-orbit:after{width:166px;height:166px}
 .contact{padding:78px 22px}
 .contact-layout{grid-template-columns:1fr;gap:36px}
 .contact-intro h2{font-size:clamp(43px,11vw,62px)}
 .contact-aside{margin-top:20px}
 .form-grid{grid-template-columns:1fr;gap:0}
 .field.full{grid-column:auto}
 .form-footer{align-items:flex-start;flex-direction:column}
 .footer{padding:26px 22px;align-items:flex-start;flex-direction:column}
 .footer-links{flex-wrap:wrap}
}
@media(max-width:360px){.hero h1{font-size:48px}.brand{font-size:9px}.hero-actions .button{padding-inline:10px}.bottle-svg{max-height:300px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.reveal{opacity:1;transform:none}}
</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
<a class="brand" href="#home" aria-label="Ocean Breeze home">
<svg class="brand-mark" viewBox="0 0 28 34" aria-hidden="true"><path d="M14 2C9 10 4 15 4 21a10 10 0 0 0 20 0C24 15 19 10 14 2Z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M8 22c3 3 9 3 12 0" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>
OCEAN BREEZE
</a>
<nav class="desktop-nav" aria-label="Main navigation">
<a href="#story">The brand</a><a href="#water">Purified water</a><a href="#future">What's ahead</a><a class="nav-contact" href="#connect">Make an enquiry ↗</a>
</nav>
<button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-navigation"><svg width="19" height="19" viewBox="0 0 20 20" aria-hidden="true"><path d="M2 6h16M2 14h16" stroke="currentColor" stroke-width="1.3"/></svg></button>
</header>
<nav class="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" inert>
<a href="#story">The brand</a><a href="#water">Purified water</a><a href="#future">What's ahead</a><a href="#connect">Make an enquiry ↗</a>
</nav>
<main id="main">
<section class="hero" id="home" aria-labelledby="hero-title">
<div class="hero-copy">
<div class="eyebrow reveal">A clearer kind of refreshment</div>
<h1 class="reveal delay-1" id="hero-title">Clarity in<br>every <em>moment.</em></h1>
<p class="hero-intro reveal delay-2">Meet Ocean Breeze purified water. A refreshing everyday essential, expressed through a brand shaped by calm, clarity and the elemental beauty of water.</p>
<div class="hero-actions reveal delay-2"><a class="button primary" href="#water">Discover the water <span aria-hidden="true">↗</span></a><a class="button" href="#story">Our point of view</a></div>
<div class="hero-note reveal delay-2">Ocean Breeze · Purified water</div>
</div>
<div class="hero-art" aria-label="Ocean Breeze purified water concept bottle">
<div class="halo"></div><div class="waterline"></div>
<div class="bottle-stage">
<svg class="bottle-svg" viewBox="0 0 300 680" role="img" aria-labelledby="bottle-title bottle-desc">
<title id="bottle-title">Ocean Breeze purified water concept bottle</title><desc id="bottle-desc">An original glass-like bottle illustration used as a visual concept, not a confirmed retail package.</desc>
<defs>
<linearGradient id="glass" x1="0" x2="1"><stop stop-color="#d9ffff" stop-opacity=".58"/><stop offset=".18" stop-color="#c6f5f4" stop-opacity=".15"/><stop offset=".56" stop-color="#eaffff" stop-opacity=".06"/><stop offset="1" stop-color="#6bc8d3" stop-opacity=".4"/></linearGradient>
<linearGradient id="water" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#b7f4ef" stop-opacity=".46"/><stop offset="1" stop-color="#137e9e" stop-opacity=".72"/></linearGradient>
<linearGradient id="cap" x1="0" x2="1"><stop stop-color="#5babb4"/><stop offset=".45" stop-color="#c4f3ed"/><stop offset="1" stop-color="#448b9c"/></linearGradient>
<filter id="soft"><feGaussianBlur stdDeviation="10"/></filter>
</defs>
<ellipse cx="150" cy="646" rx="74" ry="12" fill="#020d13" opacity=".48" filter="url(#soft)"/>
<path d="M117 39h66v66h-66z" fill="url(#cap)" stroke="#c7ffff" stroke-opacity=".6"/>
<path d="M117 48h66M117 59h66M117 70h66M117 81h66M117 92h66" stroke="#164b5b" stroke-opacity=".3"/>
<path d="M110 105c0 34-11 43-31 65-16 18-24 39-24 74v326c0 52 24 74 95 74s95-22 95-74V244c0-35-8-56-24-74-20-22-31-31-31-65Z" fill="url(#glass)" stroke="#d7ffff" stroke-opacity=".74" stroke-width="2.2"/>
<path d="M57 302c44-10 140 10 186-1v268c0 47-22 66-93 66s-93-19-93-66Z" fill="url(#water)"/>
<path d="M59 303c47-10 133 9 182-1" stroke="#d2ffff" stroke-opacity=".55" stroke-width="2" fill="none"/>
<path d="M75 153v380c0 53 13 74 29 85" stroke="#fff" stroke-opacity=".42" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M222 183c13 26 17 42 17 68v320" stroke="#a9f0ef" stroke-opacity=".32" stroke-width="3" fill="none"/>
<rect x="67" y="346" width="166" height="166" fill="#082c40" fill-opacity=".88" stroke="#a0e8e2" stroke-opacity=".72"/>
<path d="M94 382c16-15 31-15 47 0s31 15 47 0" stroke="#a2e4df" stroke-width="1.3" fill="none"/>
<text x="150" y="371" fill="#a8e9e2" font-family="Arial,sans-serif" font-size="8" letter-spacing="3" text-anchor="middle">OCEAN BREEZE</text>
<text x="150" y="431" fill="#f4ffff" font-family="Georgia,serif" font-size="27" text-anchor="middle">Purified</text>
<text x="150" y="462" fill="#f4ffff" font-family="Georgia,serif" font-size="27" text-anchor="middle">Water</text>
<text x="150" y="489" fill="#a8e9e2" font-family="Arial,sans-serif" font-size="7" letter-spacing="2" text-anchor="middle">A CLEARER REFRESH</text>
</svg>
<div class="bottle-reflection"></div>
</div>
<div class="art-caption">Purified water · Ocean Breeze</div>
</div>
<div class="scroll-cue">Scroll to discover</div><div class="hero-index">01 — THE BEGINNING</div>
</section>
<section class="section story" id="story">
<div class="story-title reveal"><div class="section-label">The brand, in its element</div><h2>Clarity is more than a feeling.</h2></div>
<div class="story-copy reveal delay-1"><p class="story-lead">We believe the everyday can feel considered. Water is simple, essential, elemental — and deserves a brand experience with the same sense of care.</p><p>Ocean Breeze begins with purified water and a visual language inspired by the quiet movement of the ocean. Clean composition, thoughtful detail and a calm confidence shape how the brand shows up.</p><p>Our ambition is to build a beverage brand with a clear point of view: contemporary in expression, grounded in its purpose and open to thoughtful growth.</p><div class="story-signature">Ocean Breeze · Brand point of view</div></div>
</section>
<section class="section product-section" id="water">
<div class="section-head reveal"><div><div class="eyebrow">The first expression</div><h2>Pure refreshment.<br><em style="color:var(--aqua)">Ocean inspired.</em></h2></div><p>One clear focus for today: purified drinking water. The product story will grow as verified details become available.</p></div>
<div class="product-feature">
<div class="product-visual reveal">
<svg class="bottle-svg" viewBox="0 0 300 680" role="img" aria-label="Ocean Breeze purified water concept bottle">
<defs><linearGradient id="glass2" x1="0" x2="1"><stop stop-color="#d9ffff" stop-opacity=".58"/><stop offset=".18" stop-color="#c6f5f4" stop-opacity=".15"/><stop offset=".56" stop-color="#eaffff" stop-opacity=".06"/><stop offset="1" stop-color="#6bc8d3" stop-opacity=".4"/></linearGradient><linearGradient id="water2" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#b7f4ef" stop-opacity=".46"/><stop offset="1" stop-color="#137e9e" stop-opacity=".72"/></linearGradient></defs>
<path d="M117 39h66v66h-66z" fill="#80c8cb"/><path d="M110 105c0 34-11 43-31 65-16 18-24 39-24 74v326c0 52 24 74 95 74s95-22 95-74V244c0-35-8-56-24-74-20-22-31-31-31-65Z" fill="url(#glass2)" stroke="#d7ffff" stroke-opacity=".74" stroke-width="2.2"/><path d="M57 302c44-10 140 10 186-1v268c0 47-22 66-93 66s-93-19-93-66Z" fill="url(#water2)"/><rect x="67" y="346" width="166" height="166" fill="#082c40" fill-opacity=".88" stroke="#a0e8e2" stroke-opacity=".72"/><text x="150" y="371" fill="#a8e9e2" font-family="Arial" font-size="8" letter-spacing="3" text-anchor="middle">OCEAN BREEZE</text><text x="150" y="431" fill="#fff" font-family="Georgia" font-size="27" text-anchor="middle">Purified</text><text x="150" y="462" fill="#fff" font-family="Georgia" font-size="27" text-anchor="middle">Water</text></svg>
</div>
<div class="product-copy reveal delay-1"><div class="product-meta">01 / Current focus</div><h3>Everyday,<br>elevated.</h3><p>A focused beginning for Ocean Breeze: purified water presented with a sense of freshness, calm and contemporary character. Bottle formats, specifications, source, certifications, pricing and availability will be published only when confirmed.</p><div class="product-facts"><span>Purified water</span><span>Current range</span></div><a class="button" href="#connect">Ask about the product <span aria-hidden="true">↗</span></a></div>
</div>
</section>
<section class="section ritual">
<div class="ritual-copy reveal"><div class="section-label">A moment, made simple</div><h2>Make room for a clearer moment.</h2><p>Water belongs in the everyday — at the start of the day, between the busy moments, and wherever a pause is welcome. Ocean Breeze is being built around that simple, universal role.</p></div>
<div class="reveal delay-1"><div class="wave-art" aria-hidden="true"><svg viewBox="0 0 560 260" fill="none"><path d="M-20 75C70 20 140 130 235 75s150-55 230-5 100 35 140 10" stroke="#4f9da0" stroke-width="1.2"/><path d="M-20 105C70 50 140 160 235 105s150-55 230-5 100 35 140 10" stroke="#4f9da0" stroke-opacity=".7"/><path d="M-20 135C70 80 140 190 235 135s150-55 230-5 100 35 140 10" stroke="#4f9da0" stroke-opacity=".5"/><path d="M-20 165C70 110 140 220 235 165s150-55 230-5 100 35 140 10" stroke="#4f9da0" stroke-opacity=".35"/><path d="M-20 195C70 140 140 250 235 195s150-55 230-5 100 35 140 10" stroke="#4f9da0" stroke-opacity=".2"/></svg></div></div>
</section>
<section class="section future" id="future">
<div class="reveal"><div class="section-label">A brand with room to grow</div><h2>One clear beginning.<br>More possibilities.</h2><p>Ocean Breeze is being shaped with future expansion in mind. Additional beverage lines and health-oriented categories may become part of the journey over time. For now, purified water remains our focus.</p><span class="future-note">Future directions · Not yet available</span></div>
<div class="future-orbit reveal delay-1" aria-label="Future growth concept"><span>In its own<br>time, in its own<br>element.</span></div>
</section>
<section class="contact" id="connect">
<div class="contact-layout">
<div class="contact-intro reveal"><div class="eyebrow">Start a conversation</div><h2>Let's bring a little more clarity to the everyday.</h2><p>Have a product, supply or partnership enquiry? Send a note to Ocean Breeze using the form.</p><div class="contact-aside">Please share only the details needed for us to understand and respond to your enquiry. Do not include sensitive personal or financial information.</div></div>
<form class="enquiry-form reveal delay-1" id="enquiry-form">
<div class="form-grid">
<div class="field"><label for="full-name">Your name *</label><input id="full-name" name="full_name" autocomplete="name" minlength="2" maxlength="100" required placeholder="Name and surname"></div>
<div class="field"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" maxlength="254" required placeholder="you@example.com"></div>
<div class="field"><label for="phone">Phone number <span style="color:#7897a0">(optional)</span></label><input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="40" placeholder="Your contact number"></div>
<div class="field"><label for="enquiry-type">Enquiry type *</label><select id="enquiry-type" name="enquiry_type" required><option value="" selected disabled>Select a topic</option><option value="product">Product information</option><option value="supply">Supply / distribution</option><option value="partnership">Partnership</option><option value="other">Something else</option></select></div>
<div class="field full"><label for="message">Your message *</label><textarea id="message" name="message" minlength="10" maxlength="3000" required placeholder="Tell us a little about your enquiry..."></textarea></div>
<div class="honeypot" aria-hidden="true"><label for="company-website">Leave this field empty</label><input id="company-website" name="company_website" tabindex="-1" autocomplete="off"></div>
</div>
<div class="form-footer"><span class="form-note">By submitting, you ask Ocean Breeze to use these details to respond to this enquiry.</span><button class="button primary" id="submit-button" type="submit">Send enquiry <span aria-hidden="true">↗</span></button></div>
<p class="form-status" id="form-status" role="status" aria-live="polite"></p>
</form>
</div>
</section>
</main>
<footer class="footer"><a class="footer-brand" href="#home">OCEAN BREEZE</a><span>Purified water · The beginning</span><nav class="footer-links" aria-label="Footer navigation"><a href="#story">The brand</a><a href="#water">Purified water</a><a href="#connect">Enquiries</a></nav><span>© <span id="year"></span> Ocean Breeze</span></footer>
<script>
(()=> {
 const year=document.getElementById('year');year.textContent=new Date().getFullYear();
 const toggle=document.querySelector('.menu-toggle'),menu=document.getElementById('mobile-navigation');
 const closeMenu=()=>{menu.classList.remove('open');menu.setAttribute('inert','');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');document.body.classList.remove('menu-open')};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.classList.toggle('open',open);if(open)menu.removeAttribute('inert');else menu.setAttribute('inert','');document.body.classList.toggle('menu-open',open)});
 menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
 const revealEls=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});revealEls.forEach(el=>observer.observe(el))}
 else revealEls.forEach(el=>el.classList.add('visible'));
 const form=document.getElementById('enquiry-form'),status=document.getElementById('form-status'),submit=document.getElementById('submit-button');
 form.addEventListener('submit',async event=>{
  event.preventDefault();status.classList.remove('error');status.textContent='';
  if(!form.reportValidity())return;
  const data=new FormData(form);
  if(data.get('company_website')){status.textContent='Thank you. Your enquiry has been received.';form.reset();return}
  const payload={full_name:String(data.get('full_name')||'').trim(),email:String(data.get('email')||'').trim(),phone:String(data.get('phone')||'').trim(),enquiry_type:String(data.get('enquiry_type')||''),message:String(data.get('message')||'').trim()};
  submit.disabled=true;submit.textContent='Sending…';
  try{
   const response=await fetch('/api/enquiries',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...payload,company_website:''})});
   const result=await response.json().catch(()=>({}));
   if(!response.ok)throw new Error(result.error||'We could not send your enquiry right now.');
   form.reset();status.textContent='Your enquiry has been received. Thank you for contacting Ocean Breeze.';
  }catch(error){status.classList.add('error');status.textContent=error.message||'Something went wrong. Please try again in a moment.'}
  finally{submit.disabled=false;submit.innerHTML='Send enquiry <span aria-hidden="true">↗</span>'}
 });
})();
</script>
</body>
</html>`;
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff" }
});
const securityHeaders = {
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), microphone=(), geolocation=()",
  "content-security-policy": "default-src 'self'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'",
  "strict-transport-security": "max-age=31536000; includeSubDomains"
};
function validEmail(value) {
  return value.length <= 254 && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/health") return new Response("Ocean Breeze Worker healthy", { headers: { "content-type": "text/plain; charset=utf-8", ...securityHeaders } });
    if (url.pathname === "/api/enquiries") {
      if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
      const origin = request.headers.get("Origin");
      if (origin !== url.origin) return json({ error: "Request origin not allowed." }, 403);
      if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) return json({ error: "Content type must be application/json." }, 415);
      const declaredLength = Number(request.headers.get("content-length") || 0);
      if (declaredLength > 12000) return json({ error: "The message is too large." }, 413);
      let rawBody;
      try { rawBody = await request.text(); } catch { return json({ error: "Please check the form and try again." }, 400); }
      if (rawBody.length > 12000) return json({ error: "The message is too large." }, 413);
      let body;
      try { body = JSON.parse(rawBody); } catch { return json({ error: "Please check the form and try again." }, 400); }
      if (!body || typeof body !== "object" || Array.isArray(body)) return json({ error: "Please check the form and try again." }, 400);
      if (body?.company_website) return json({ ok: true }, 201);
      const full_name = typeof body?.full_name === "string" ? body.full_name.trim() : "";
      const email = typeof body?.email === "string" ? body.email.trim() : "";
      const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
      const enquiry_type = typeof body?.enquiry_type === "string" ? body.enquiry_type : "";
      const message = typeof body?.message === "string" ? body.message.trim() : "";
      if (full_name.length < 2 || full_name.length > 100 || !validEmail(email) || phone.length > 40 || !["product","supply","partnership","other"].includes(enquiry_type) || message.length < 10 || message.length > 3000) {
        return json({ error: "Please check the required fields and try again." }, 400);
      }
      if (!env.SUPABASE_URL || !env.SUPABASE_PUBLISHABLE_KEY) return json({ error: "Enquiries are temporarily unavailable. Please try again later." }, 503);
      try {
        const upstream = await fetch(env.SUPABASE_URL.replace(/\/$/, "") + "/rest/v1/enquiries", {
          method: "POST",
          headers: {
            "apikey": env.SUPABASE_PUBLISHABLE_KEY,
            "authorization": "Bearer " + env.SUPABASE_PUBLISHABLE_KEY,
            "content-type": "application/json",
            "prefer": "return=minimal"
          },
          body: JSON.stringify({ full_name, email, phone: phone || null, enquiry_type, message })
        });
        if (!upstream.ok) {
          console.error("Enquiry persistence failed with status", upstream.status);
          return json({ error: "We could not send your enquiry right now. Please try again later." }, 502);
        }
        return json({ ok: true }, 201);
      } catch (error) {
        console.error("Enquiry service unavailable");
        return json({ error: "The enquiry service is temporarily unavailable. Please try again later." }, 502);
      }
    }
    if (url.pathname !== "/" && url.pathname !== "/index.html") return new Response("Not found", { status: 404, headers: securityHeaders });
    return new Response(HTML, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300, stale-while-revalidate=3600",
        ...securityHeaders
      }
    });
  }
};