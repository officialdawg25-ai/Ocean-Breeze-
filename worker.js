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
<meta name="robots" content="index,follow">
<link rel="canonical" href="https://ocean-breeze.officialdawg25.workers.dev/">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"Ocean Breeze","url":"https://ocean-breeze.officialdawg25.workers.dev/","description":"A beverage brand currently focused on purified water."}</script>
<title>Ocean Breeze — Clarity in every moment</title>
<style>
:root{color-scheme:dark;--ink:#061a27;--deep:#092b3d;--deep2:#0d3b50;--sea:#14556a;--aqua:#a2e4df;--mist:#d9eeeb;--paper:#f2f6f1;--muted:#a8c0c6;--line:rgba(211,241,237,.18);--serif:Georgia,"Times New Roman",serif;--sans:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--ease:cubic-bezier(.2,.75,.25,1)}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:88px}
body{margin:0;background:var(--ink);color:var(--paper);font-family:var(--sans);-webkit-font-smoothing:antialiased;overflow-x:hidden}
body.menu-open{overflow:hidden}.ob-stage{grid-column:2}.hero-art{display:none!important}.product-feature{display:none!important}
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

.ob-stage{position:relative;z-index:3;min-width:0;min-height:560px;display:flex;flex-direction:column;justify-content:center;padding:18px 0 8px;--ob-accent:#a2e4df;--ob-text:#f2f6f1;--ob-muted:#a8c0c6}
.ob-stage:before{content:"";position:absolute;inset:5% -10% 12%;z-index:-1;border-radius:50%;background:radial-gradient(ellipse,rgba(93,190,196,.18),transparent 67%);pointer-events:none}
.ob-stage-head{display:flex;justify-content:space-between;gap:14px;margin-bottom:12px;color:var(--ob-muted);font-size:8px;letter-spacing:.2em;text-transform:uppercase}
.ob-stage-head span:first-child{color:var(--ob-accent)}
.ob-product-view{position:relative;min-height:390px;display:grid;grid-template-columns:minmax(0,1fr) minmax(125px,.34fr);align-items:center;gap:10px;border-top:1px solid rgba(210,240,238,.16);border-bottom:1px solid rgba(210,240,238,.16);overflow:hidden}
.ob-product-media{position:relative;min-width:0;height:390px;display:grid;place-items:center;touch-action:pan-y;cursor:grab;user-select:none}
.ob-product-media.is-dragging{cursor:grabbing}
.ob-product-media:before{content:"";position:absolute;width:75%;height:75%;border:1px solid rgba(162,228,223,.11);border-radius:50%;box-shadow:0 0 75px rgba(90,185,194,.08),inset 0 0 75px rgba(90,185,194,.05)}
.ob-product-media .bottle-svg{position:relative;z-index:1;height:330px;width:auto;max-width:88%;animation:none;filter:drop-shadow(0 30px 30px rgba(0,0,0,.32))}.ob-product-media img{position:relative;z-index:1;max-width:90%;max-height:365px;object-fit:contain;filter:drop-shadow(0 30px 30px rgba(0,0,0,.32));pointer-events:none}
.ob-product-media model-viewer{position:relative;z-index:1;width:100%;height:360px;--poster-color:transparent;background:transparent}
.ob-no-art{position:relative;z-index:1;display:grid;place-items:center;text-align:center;width:190px;height:250px;border:1px solid rgba(162,228,223,.22);color:var(--ob-muted);padding:24px;font-size:9px;line-height:1.8;letter-spacing:.13em;text-transform:uppercase}
.ob-angle{position:absolute;bottom:12px;left:50%;transform:translateX(-50%);font-size:8px;letter-spacing:.17em;text-transform:uppercase;color:var(--ob-muted);white-space:nowrap}
.ob-product-summary{position:relative;z-index:2;padding:18px 8px 18px 0}
.ob-product-kicker{font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:var(--ob-accent)}
.ob-product-summary h2{font:400 clamp(30px,3.5vw,48px)/1.02 var(--serif);letter-spacing:-.045em;margin:14px 0 12px;color:var(--ob-text)}
.ob-product-summary p{font-size:11px;line-height:1.8;color:var(--ob-muted);margin:0}
.ob-product-specs{display:flex;flex-wrap:wrap;gap:8px 14px;margin-top:20px;font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--ob-accent)}
.ob-product-actions{display:flex;align-items:center;gap:8px;margin-top:20px;flex-wrap:wrap}
.ob-icon-btn{width:35px;height:35px;border:1px solid rgba(162,228,223,.35);background:transparent;color:var(--ob-text);cursor:pointer}
.ob-icon-btn:hover{background:var(--ob-accent);color:#061a27}
.ob-explore-hint{font-size:8px;letter-spacing:.1em;color:var(--ob-muted)}
.ob-info-panel{min-height:92px;padding:15px 0 0;display:grid;grid-template-columns:110px 1fr;gap:18px}
.ob-info-label{font-size:8px;letter-spacing:.18em;text-transform:uppercase;color:var(--ob-accent)}
.ob-info-content{font-size:10px;line-height:1.7;color:var(--ob-muted)}
.ob-info-content strong{display:block;color:var(--ob-text);font-size:11px;font-weight:500;margin-bottom:3px}
.ob-rail-wrap{display:flex;align-items:center;gap:10px;margin-top:18px}
.ob-rail-arrow{flex:0 0 32px;height:32px;border:1px solid rgba(162,228,223,.24);background:transparent;color:var(--ob-text);cursor:pointer}
.ob-product-rail{display:flex;gap:9px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;min-width:0;flex:1;padding:3px 2px 8px;touch-action:pan-x}
.ob-product-rail::-webkit-scrollbar{display:none}
.ob-rail-item{scroll-snap-align:center;flex:0 0 105px;min-width:0;border:0;border-bottom:1px solid rgba(162,228,223,.2);background:transparent;color:var(--ob-muted);text-align:left;padding:8px 7px;cursor:pointer;opacity:.62;transition:opacity .3s,border-color .3s}
.ob-rail-item[aria-pressed=true]{opacity:1;border-color:var(--ob-accent);color:var(--ob-text)}
.ob-rail-thumb{height:58px;display:grid;place-items:center;margin-bottom:7px;background:rgba(255,255,255,.035);overflow:hidden}
.ob-rail-thumb img{height:54px;max-width:100%;object-fit:contain}
.ob-rail-name{display:block;font-size:9px;line-height:1.3}
.ob-rail-meta{display:block;font-size:7px;letter-spacing:.12em;text-transform:uppercase;margin-top:4px;color:var(--ob-muted)}
.ob-collection{padding:42px 0 6px;position:relative;z-index:2}
.ob-collection-head{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:18px}
.ob-collection-head h3{font:400 27px/1.1 var(--serif);margin:0;color:var(--paper)}
.ob-collection-head p{max-width:280px;font-size:10px;line-height:1.7;color:var(--muted);margin:0}
.ob-collection-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:1px;background:rgba(210,240,238,.15);border:1px solid rgba(210,240,238,.15)}
.ob-collection-card{min-width:0;min-height:185px;padding:17px;background:#082638;color:var(--paper);text-align:left;border:0;cursor:pointer}
.ob-collection-card img{display:block;height:100px;max-width:100%;object-fit:contain;margin:0 auto 14px}
.ob-collection-card strong{display:block;font:400 17px/1.2 var(--serif)}
.ob-collection-card small{display:block;margin-top:6px;color:var(--muted);font-size:8px;letter-spacing:.12em;text-transform:uppercase}
.ob-empty-collection{padding:22px;border:1px solid var(--line);font-size:11px;color:var(--muted);line-height:1.8}
body.ob-product-route .ob-collection{display:none}
body.ob-admin-mode{background:#eef2ef;color:#152d35;overflow:auto}
body.ob-admin-mode .site-header,body.ob-admin-mode .mobile-nav,body.ob-admin-mode main,body.ob-admin-mode .footer{display:none!important}
.ob-admin{min-height:100vh;background:#eef2ef;color:#152d35;font-family:var(--sans)}
.ob-admin-top{height:72px;padding:0 28px;display:flex;align-items:center;justify-content:space-between;background:#071d2b;color:#f2f6f1}
.ob-admin-brand{font-size:10px;letter-spacing:.2em;font-weight:700}
.ob-admin-top small{display:block;color:#9db8bb;font-size:8px;letter-spacing:.15em;margin-top:5px}
.ob-admin-top button{border:1px solid #42616a;background:transparent;color:#f2f6f1;padding:10px 14px;font-size:9px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}
.ob-admin-layout{display:grid;grid-template-columns:220px minmax(0,1fr);min-height:calc(100vh - 72px)}
.ob-admin-nav{padding:25px 14px;background:#102d3a;color:#c6d6d5}
.ob-admin-nav button{display:block;width:100%;padding:13px 12px;border:0;border-left:2px solid transparent;background:transparent;color:inherit;text-align:left;font-size:10px;letter-spacing:.1em;cursor:pointer}
.ob-admin-nav button[aria-current=true]{border-left-color:#a2e4df;background:rgba(162,228,223,.08);color:#fff}
.ob-admin-main{padding:clamp(20px,4vw,48px);min-width:0}
.ob-admin-main h1{font:400 clamp(30px,4vw,44px)/1.05 var(--serif);letter-spacing:-.04em;margin:0 0 8px}
.ob-admin-muted{font-size:11px;line-height:1.7;color:#60777b}
.ob-admin-panel{display:none}.ob-admin-panel.active{display:block}
.ob-admin-toolbar{display:flex;align-items:center;justify-content:space-between;gap:14px;margin:24px 0}
.ob-admin-button{border:1px solid #183f4a;background:#0a2b3c;color:#fff;padding:12px 16px;font-size:9px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}
.ob-admin-button.secondary{background:transparent;color:#173c46}
.ob-admin-list{display:grid;gap:8px}
.ob-admin-row{display:grid;grid-template-columns:minmax(0,1fr) auto auto;align-items:center;gap:12px;padding:15px 16px;background:#fff;border:1px solid #dce5e1}
.ob-admin-row strong{display:block;font:400 17px/1.2 var(--serif)}
.ob-admin-row small{display:block;margin-top:5px;color:#71858a;font-size:8px;letter-spacing:.1em;text-transform:uppercase}
.ob-admin-row button{padding:8px 10px;border:1px solid #c9d7d2;background:#fff;color:#173c46;font-size:8px;text-transform:uppercase;cursor:pointer}
.ob-admin-form{background:#fff;border:1px solid #dce5e1;padding:22px;margin-top:20px}
.ob-admin-form h2{font:400 25px/1.2 var(--serif);margin:0 0 20px}
.ob-admin-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.ob-admin-field{display:flex;flex-direction:column;gap:7px;min-width:0}
.ob-admin-field.full{grid-column:1/-1}
.ob-admin-field label{font-size:8px;letter-spacing:.13em;text-transform:uppercase;color:#62777b}
.ob-admin-field input,.ob-admin-field select,.ob-admin-field textarea{width:100%;border:1px solid #d6e0dc;background:#fbfcfb;color:#18333c;padding:11px;font:12px var(--sans);min-width:0}
.ob-admin-field textarea{min-height:100px;resize:vertical}
.ob-admin-field input[type=color]{height:42px;padding:3px}
.ob-admin-help{font-size:9px;line-height:1.6;color:#71858a}
.ob-admin-status{min-height:22px;margin-top:12px;font-size:10px;color:#276e5d}
.ob-enquiry-card{background:#fff;border:1px solid #dce5e1;padding:18px;margin-bottom:10px}
.ob-enquiry-head{display:flex;justify-content:space-between;align-items:flex-start;gap:14px}
.ob-enquiry-head strong{font:400 18px/1.2 var(--serif)}
.ob-enquiry-meta{font-size:9px;color:#71858a;margin-top:5px;line-height:1.7}
.ob-enquiry-message{font-size:12px;line-height:1.75;color:#29434a;margin:14px 0;white-space:pre-wrap;overflow-wrap:anywhere}
.ob-enquiry-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.ob-enquiry-actions select{padding:9px;border:1px solid #d6e0dc;background:#fbfcfb;color:#18333c;font-size:10px}
.ob-enquiry-actions button,.ob-enquiry-actions a{padding:9px 12px;border:1px solid #c9d7d2;background:#fff;color:#173c46;font-size:8px;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;cursor:pointer}
.ob-enquiry-status{font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:#53716f;border:1px solid #dce5e1;padding:6px 8px;white-space:nowrap}
.ob-admin-login{max-width:440px;margin:10vh auto;padding:32px;background:#fff;border:1px solid #dce5e1}
.ob-admin-login h1{font:400 32px/1.1 var(--serif);margin:0 0 10px}
.ob-admin-login .ob-admin-field{margin:16px 0}
.ob-admin-alert{padding:14px;background:#fff5e9;border:1px solid #e8d6b8;color:#6a4b22;font-size:10px;line-height:1.7;margin-top:16px}
.ob-admin-hidden{display:none!important}
.ob-admin-stat{display:inline-block;padding:16px 20px;background:#fff;border:1px solid #dce5e1;margin:20px 8px 0 0;min-width:150px}
.ob-admin-stat strong{display:block;font:400 28px var(--serif)}
.ob-admin-stat span{font-size:8px;letter-spacing:.13em;text-transform:uppercase;color:#71858a}
.ob-admin-preview{min-height:110px;padding:20px;margin:15px 0;background:linear-gradient(120deg,#071d2b,#0d3b50);color:#f2f6f1;display:flex;align-items:center;gap:20px}
.ob-admin-preview-mark{width:70px;height:90px;border:1px solid #a2e4df;display:grid;place-items:center;color:#a2e4df;font-size:8px;text-align:center}
@media(max-width:900px){.ob-stage{min-height:500px}.ob-product-view{grid-template-columns:minmax(0,1fr) minmax(115px,.42fr)}.ob-product-media{height:345px}.ob-product-media img{max-height:320px}}
@media(max-width:680px){.hero{grid-template-columns:1fr;gap:0;padding-top:80px}.hero-copy{order:2}.ob-stage{order:1;min-height:0;padding:8px 0 24px}.ob-stage-head{margin-bottom:6px}.ob-product-view{grid-template-columns:1fr;min-height:0}.ob-product-media{height:280px;grid-row:1}.ob-product-media img{max-height:260px}.ob-product-media model-viewer{height:260px}.ob-product-summary{padding:0 4px 16px;text-align:center}.ob-product-summary h2{font-size:32px;margin:9px 0}.ob-product-summary p{max-width:390px;margin:auto}.ob-product-specs,.ob-product-actions{justify-content:center;margin-top:12px}.ob-info-panel{grid-template-columns:78px 1fr;gap:10px;min-height:70px;padding-top:12px}.ob-rail-item{flex-basis:88px}.ob-rail-thumb{height:48px}.ob-rail-thumb img{height:44px}.ob-collection{padding-top:28px}.ob-collection-head{display:block}.ob-collection-head p{margin-top:10px}.ob-collection-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ob-admin-layout{grid-template-columns:1fr}.ob-admin-nav{display:flex;overflow:auto;padding:8px;gap:4px}.ob-admin-nav button{white-space:nowrap;width:auto;border-left:0;border-bottom:2px solid transparent}.ob-admin-nav button[aria-current=true]{border-bottom-color:#a2e4df}.ob-admin-top{padding:0 16px}.ob-admin-fields{grid-template-columns:1fr}.ob-admin-field.full{grid-column:auto}.ob-admin-main{padding:22px 16px}.ob-admin-row{grid-template-columns:minmax(0,1fr) auto}.ob-admin-login{margin:7vh 16px;padding:24px}}
@media(prefers-reduced-motion:reduce){.ob-rail-item,.ob-collection-card{transition:none}}

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

<div class="ob-stage" id="ob-stage" aria-label="Interactive Ocean Breeze product exhibition">
<div class="ob-stage-head"><span>Explore the collection</span><span id="ob-stage-count">Product exhibition</span></div>
<div class="ob-product-view"><div class="ob-product-media" id="ob-product-media" tabindex="0" role="group" aria-label="Interactive product viewer. Drag horizontally to rotate."><div class="ob-no-art">Product artwork awaiting upload</div><div class="ob-angle" id="ob-angle-label">360° product exploration</div></div>
<div class="ob-product-summary"><div class="ob-product-kicker" id="ob-product-kicker">Ocean Breeze · Product experience</div><h2 id="ob-product-name">Discover the collection.</h2><p id="ob-product-description">A considered product experience, shaped around clarity, distinction and modern living.</p><div class="ob-product-specs" id="ob-product-specs"></div><div class="ob-product-actions"><button class="ob-icon-btn" id="ob-rotate-back" type="button" aria-label="Rotate product left">←</button><button class="ob-icon-btn" id="ob-rotate-forward" type="button" aria-label="Rotate product right">→</button><button class="ob-icon-btn" id="ob-reset-rotation" type="button" aria-label="Reset product rotation">↺</button><span class="ob-explore-hint" id="ob-explore-hint">Select a product to explore</span></div></div></div>
<div class="ob-info-panel" aria-live="polite"><div class="ob-info-label" id="ob-info-label">Product details</div><div class="ob-info-content" id="ob-info-content">Verified product information will appear here when configured.</div></div>
<div class="ob-rail-wrap"><button class="ob-rail-arrow" id="ob-rail-left" type="button" aria-label="Previous products">←</button><div class="ob-product-rail" id="ob-product-rail" aria-label="Product selection"></div><button class="ob-rail-arrow" id="ob-rail-right" type="button" aria-label="Next products">→</button></div>
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
<text x="150" y="371" fill="#a8e9e2" font-family="ui-sans-serif,sans-serif" font-size="8" letter-spacing="3" text-anchor="middle">OCEAN BREEZE</text>
<text x="150" y="431" fill="#f4ffff" font-family="Georgia,serif" font-size="27" text-anchor="middle">Purified</text>
<text x="150" y="462" fill="#f4ffff" font-family="Georgia,serif" font-size="27" text-anchor="middle">Water</text>
<text x="150" y="489" fill="#a8e9e2" font-family="ui-sans-serif,sans-serif" font-size="7" letter-spacing="2" text-anchor="middle">A CLEARER REFRESH</text>
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

<div class="ob-collection" id="ob-collection"><div class="ob-collection-head"><h3>Discover the collection</h3><p>Explore published Ocean Breeze product formats. Each product carries its own visual identity and verified details.</p></div><div class="ob-collection-grid" id="ob-collection-grid"><div class="ob-empty-collection">The product collection is being prepared. Published products will appear here.</div></div></div>
<div class="product-feature">
<div class="product-visual reveal">
<svg class="bottle-svg" viewBox="0 0 300 680" role="img" aria-label="Ocean Breeze purified water concept bottle">
<defs><linearGradient id="glass2" x1="0" x2="1"><stop stop-color="#d9ffff" stop-opacity=".58"/><stop offset=".18" stop-color="#c6f5f4" stop-opacity=".15"/><stop offset=".56" stop-color="#eaffff" stop-opacity=".06"/><stop offset="1" stop-color="#6bc8d3" stop-opacity=".4"/></linearGradient><linearGradient id="water2" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#b7f4ef" stop-opacity=".46"/><stop offset="1" stop-color="#137e9e" stop-opacity=".72"/></linearGradient></defs>
<path d="M117 39h66v66h-66z" fill="#80c8cb"/><path d="M110 105c0 34-11 43-31 65-16 18-24 39-24 74v326c0 52 24 74 95 74s95-22 95-74V244c0-35-8-56-24-74-20-22-31-31-31-65Z" fill="url(#glass2)" stroke="#d7ffff" stroke-opacity=".74" stroke-width="2.2"/><path d="M57 302c44-10 140 10 186-1v268c0 47-22 66-93 66s-93-19-93-66Z" fill="url(#water2)"/><rect x="67" y="346" width="166" height="166" fill="#082c40" fill-opacity=".88" stroke="#a0e8e2" stroke-opacity=".72"/><text x="150" y="371" fill="#a8e9e2" font-family="ui-sans-serif" font-size="8" letter-spacing="3" text-anchor="middle">OCEAN BREEZE</text><text x="150" y="431" fill="#fff" font-family="Georgia" font-size="27" text-anchor="middle">Purified</text><text x="150" y="462" fill="#fff" font-family="Georgia" font-size="27" text-anchor="middle">Water</text></svg>
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

<div class="ob-admin ob-admin-hidden" id="ob-admin">
<header class="ob-admin-top"><div class="ob-admin-brand">OCEAN BREEZE <small>PRODUCT STUDIO · CONTENT & PUBLISHING</small></div><button id="ob-admin-logout" class="ob-admin-hidden" type="button">Sign out</button></header>
<section class="ob-admin-login" id="ob-admin-login"><h1>Product Studio</h1><p class="ob-admin-muted">Sign in with an authorised Ocean Breeze administrator account.</p><form id="ob-login-form"><div class="ob-admin-field"><label for="ob-login-email">Email address</label><input id="ob-login-email" type="email" autocomplete="username" required></div><div class="ob-admin-field"><label for="ob-login-password">Password</label><input id="ob-login-password" type="password" autocomplete="current-password" required></div><button class="ob-admin-button" type="submit">Sign in securely</button><p class="ob-admin-status" id="ob-login-status" role="status"></p></form><div class="ob-admin-alert">Admin access uses trusted Supabase app_metadata. Accounts cannot grant themselves admin access. If your account is not authorised, the project owner must assign app_metadata.role = admin through Supabase Auth before sign-in.</div></section>
<div class="ob-admin-layout ob-admin-hidden" id="ob-admin-work"><nav class="ob-admin-nav" aria-label="Product Studio navigation"><button data-admin-tab="overview" aria-current="true">Overview</button><button data-admin-tab="products">Products</button><button data-admin-tab="collections">Collections</button><button data-admin-tab="enquiries">Enquiries</button><button data-admin-tab="homepage">Homepage</button><button data-admin-tab="media">Media library</button><button data-admin-tab="publishing">Publishing</button></nav>
<main class="ob-admin-main">
<section class="ob-admin-panel active" id="ob-panel-overview"><h1>Experience overview</h1><p class="ob-admin-muted">Manage products, visual direction, 360° assets and publishing.</p><div class="ob-admin-stat"><strong id="ob-stat-products">0</strong><span>Total products</span></div><div class="ob-admin-stat"><strong id="ob-stat-published">0</strong><span>Published</span></div><div class="ob-admin-stat"><strong id="ob-stat-assets">0</strong><span>360° assets</span></div><div class="ob-admin-stat"><strong id="ob-stat-enquiries">0</strong><span>New enquiries</span></div><div class="ob-admin-stat"><strong id="ob-stat-collections">0</strong><span>Collections</span></div></section>
<section class="ob-admin-panel" id="ob-panel-products"><h1>Products</h1><p class="ob-admin-muted">Create and manage product content, packaging, visual identity and interactive presentation.</p><div class="ob-admin-toolbar"><span class="ob-admin-muted" id="ob-product-list-count">No products</span><button class="ob-admin-button" id="ob-new-product" type="button">+ New product</button></div><div class="ob-admin-list" id="ob-admin-product-list"></div>
<form class="ob-admin-form ob-admin-hidden" id="ob-product-form"><h2 id="ob-product-form-title">Create product</h2><input type="hidden" id="ob-edit-id"><div class="ob-admin-fields">
<div class="ob-admin-field"><label for="ob-name">Product name *</label><input id="ob-name" required maxlength="160"></div><div class="ob-admin-field"><label for="ob-slug">URL slug *</label><input id="ob-slug" required pattern="[a-z0-9]+(-[a-z0-9]+)*"></div>
<div class="ob-admin-field"><label for="ob-subtitle">Collection / subtitle</label><input id="ob-subtitle"></div><div class="ob-admin-field"><label for="ob-format">Packaging format</label><input id="ob-format" placeholder="Confirmed packaging only"></div>
<div class="ob-admin-field"><label for="ob-volume">Volume / capacity</label><input id="ob-volume" placeholder="Confirmed size only"></div><div class="ob-admin-field"><label for="ob-category">Category</label><input id="ob-category" value="Purified water"></div>
<div class="ob-admin-field full"><label for="ob-description">Product description</label><textarea id="ob-description"></textarea></div><div class="ob-admin-field"><label for="ob-tagline">Product tagline</label><input id="ob-tagline"></div>
<div class="ob-admin-field"><label for="ob-order">Product display order</label><input id="ob-order" type="number" step="1" value="0"></div><div class="ob-admin-field"><label for="ob-collection-id">Collection</label><select id="ob-collection-id"><option value="">No collection</option></select></div><div class="ob-admin-field"><label for="ob-status">Publishing status</label><select id="ob-status"><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select></div>
<div class="ob-admin-field"><label for="ob-rendering">Rendering method</label><select id="ob-rendering"><option value="image-sequence">360° image sequence</option><option value="model-3d">3D GLB/GLTF model</option><option value="static">Static image</option></select></div>
<div class="ob-admin-field"><label for="ob-bg-image">Product background image</label><input id="ob-bg-image" type="file" accept="image/jpeg,image/png,image/webp,image/avif"></div><div class="ob-admin-field"><label for="ob-cover-file">Product cover / hero image</label><input id="ob-cover-file" type="file" accept="image/jpeg,image/png,image/webp,image/avif"></div>
<div class="ob-admin-field"><label for="ob-frame-files">360° frame sequence</label><input id="ob-frame-files" type="file" accept="image/jpeg,image/png,image/webp,image/avif" multiple><span class="ob-admin-help">Upload a consistently ordered sequence. 36–72 frames recommended; no synthetic frames are generated.</span></div>
<div class="ob-admin-field"><label for="ob-model-file">3D model (GLB/GLTF)</label><input id="ob-model-file" type="file" accept=".glb,.gltf,model/gltf-binary,model/gltf+json"></div><div class="ob-admin-field"><label for="ob-atmosphere">Atmosphere</label><select id="ob-atmosphere"><option value="oceanic">Oceanic</option><option value="minimal">Minimal</option><option value="metallic">Metallic</option><option value="custom">Custom</option></select></div>
<div class="ob-admin-field"><label for="ob-bg-primary">Primary background</label><input id="ob-bg-primary" type="color" value="#071d2b"></div><div class="ob-admin-field"><label for="ob-bg-secondary">Secondary background</label><input id="ob-bg-secondary" type="color" value="#0d3b50"></div>
<div class="ob-admin-field"><label for="ob-accent-primary">Primary accent</label><input id="ob-accent-primary" type="color" value="#a2e4df"></div><div class="ob-admin-field"><label for="ob-accent-secondary">Secondary accent</label><input id="ob-accent-secondary" type="color" value="#d9eeeb"></div>
<div class="ob-admin-field"><label for="ob-text-primary">Primary text</label><input id="ob-text-primary" type="color" value="#f2f6f1"></div><div class="ob-admin-field"><label for="ob-text-secondary">Secondary text</label><input id="ob-text-secondary" type="color" value="#a8c0c6"></div>
<div class="ob-admin-field"><label for="ob-product-scale">Product scale</label><input id="ob-product-scale" type="number" min="0.5" max="2" step="0.05" value="1"></div><div class="ob-admin-field"><label for="ob-transition">Transition duration (ms)</label><input id="ob-transition" type="number" min="0" max="5000" value="900"></div>
<div class="ob-admin-field full"><label for="ob-info-json">Product information (JSON)</label><textarea id="ob-info-json" placeholder='[{"information_type":"benefit","title":"Packaging","content":"Verified detail"}]'></textarea><span class="ob-admin-help">Use verified facts only. Types: benefit, ingredient, nutrition, mineral, source, purification, packaging, storage, manufacturer, regulatory, feature, other.</span></div>
</div><div class="ob-admin-preview" id="ob-admin-preview"><div class="ob-admin-preview-mark">PRODUCT<br>PREVIEW</div><strong id="ob-preview-name">Product art direction</strong></div><div class="ob-admin-toolbar"><button class="ob-admin-button" type="submit">Save product configuration</button><button class="ob-admin-button secondary" id="ob-cancel-product" type="button">Cancel</button></div><p class="ob-admin-status" id="ob-product-save-status" role="status"></p></form></section>
<section class="ob-admin-panel" id="ob-panel-collections"><h1>Collections</h1><p class="ob-admin-muted">Create and publish product collections.</p><form class="ob-admin-form" id="ob-collection-form"><input type="hidden" id="ob-collection-edit-id"><h2 id="ob-collection-form-title">Create collection</h2><div class="ob-admin-fields"><div class="ob-admin-field"><label for="ob-collection-name">Collection name</label><input id="ob-collection-name" required></div><div class="ob-admin-field"><label for="ob-collection-slug">Collection slug</label><input id="ob-collection-slug" required></div><div class="ob-admin-field full"><label for="ob-collection-description">Description</label><textarea id="ob-collection-description"></textarea></div><div class="ob-admin-field"><label for="ob-collection-status">Status</label><select id="ob-collection-status"><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select></div></div><button class="ob-admin-button" id="ob-collection-submit" type="submit">Create collection</button><p class="ob-admin-status" id="ob-collection-message" role="status"></p></form><div class="ob-admin-list" id="ob-admin-collections"></div></section>
<section class="ob-admin-panel" id="ob-panel-enquiries"><h1>Enquiry inbox</h1><p class="ob-admin-muted">Review incoming product, supply and partnership enquiries. Update their status and reply directly by email.</p><div class="ob-admin-toolbar"><span class="ob-admin-muted" id="ob-enquiry-count">Loading enquiries…</span><select id="ob-enquiry-filter" aria-label="Filter enquiries" style="padding:10px;border:1px solid #d6e0dc;background:#fff;color:#18333c"><option value="all">All enquiries</option><option value="new">New</option><option value="in_progress">In progress</option><option value="resolved">Resolved</option><option value="archived">Archived</option></select></div><div class="ob-admin-list" id="ob-admin-enquiries"></div><p class="ob-admin-status" id="ob-enquiry-status" role="status"></p></section>
<section class="ob-admin-panel" id="ob-panel-homepage"><h1>Homepage experience</h1><p class="ob-admin-muted">Configure the hero introduction. Product order is controlled by product display order.</p><form class="ob-admin-form" id="ob-homepage-form"><div class="ob-admin-fields"><div class="ob-admin-field"><label for="ob-home-title">Hero heading</label><input id="ob-home-title" value="Clarity in every moment."></div><div class="ob-admin-field"><label for="ob-home-eyebrow">Hero eyebrow</label><input id="ob-home-eyebrow" value="A clearer kind of refreshment"></div><div class="ob-admin-field full"><label for="ob-home-copy">Supporting copy</label><textarea id="ob-home-copy">Experience refreshment differently.</textarea></div></div><button class="ob-admin-button" type="submit">Save homepage settings</button><p class="ob-admin-status" id="ob-homepage-status" role="status"></p></form></section>
<section class="ob-admin-panel" id="ob-panel-media"><h1>Media library</h1><p class="ob-admin-muted">Product images, 360° frames and model assets stored in Supabase Storage.</p><div class="ob-admin-list" id="ob-admin-media-list"></div></section>
<section class="ob-admin-panel" id="ob-panel-publishing"><h1>Publishing</h1><p class="ob-admin-muted">Only published products and settings are public. Draft configurations remain private.</p><div class="ob-admin-list" id="ob-publishing-list"></div></section>
</main></div></div>

<script>
(function(){
var path=window.location.pathname,isAdmin=path==='/admin'||path==='/admin/',isProductRoute=path.indexOf('/products/')===0;
var root=document.getElementById('ob-admin'),stage=document.getElementById('ob-stage'),media=document.getElementById('ob-product-media'),rail=document.getElementById('ob-product-rail');
if(isAdmin){document.body.classList.add('ob-admin-mode');root.classList.remove('ob-admin-hidden');}
if(isProductRoute)document.body.classList.add('ob-product-route');
var products=[],activeIndex=0,activeProduct=null,frames=[],frameIndex=0,pointerX=null,drag=0,config=null,api='',key='',session=null,adminProducts=[];
function one(v){return Array.isArray(v)?(v[0]||{}):(v||{});}
function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function safe(v){try{var u=new URL(v,location.origin);return u.protocol==='https:'||u.origin===location.origin?u.href:'';}catch(e){return '';}}
function art(p){return one(p.product_art_directions);}
function asset(p){return one(p.product_360_assets);}
function getFrames(a){return (Array.isArray(a.frame_manifest)?a.frame_manifest:[]).map(function(x){return typeof x==='string'?x:(x.url||x.src||x.asset_url);}).map(safe).filter(Boolean);}
function info(p){return Array.isArray(p.product_information)?p.product_information.filter(function(x){return x.is_visible!==false;}):[];}
function theme(p){var a=art(p),bg=a.background_primary||'#071d2b',bg2=a.background_secondary||'#0d3b50',accent=a.accent_primary||'#a2e4df';stage.style.setProperty('--ob-accent',accent);stage.style.setProperty('--ob-text',a.text_primary||'#f2f6f1');stage.style.setProperty('--ob-muted',a.text_secondary||'#a8c0c6');stage.style.setProperty('--ob-transition',(a.transition_duration||900)+'ms');var hero=document.querySelector('.hero');var backgroundAsset=safe(a.background_asset);hero.style.background=backgroundAsset?'radial-gradient(ellipse at 74% 43%,'+accent+'22,transparent 42%),url(\"'+backgroundAsset+'\") center/cover no-repeat,linear-gradient(118deg,'+bg+','+bg2+' 55%,'+bg+')':'radial-gradient(ellipse at 74% 43%,'+accent+'22,transparent 42%),linear-gradient(118deg,'+bg+','+bg2+' 55%,'+bg+')';hero.style.transition='background '+(a.transition_duration||900)+'ms ease';media.style.transform='scale('+(Number(a.product_scale)||1)+')';}
function showInfo(p,angle){var selected=[],label='Front · Product overview';if(angle>=145&&angle<=215){selected=info(p).filter(function(x){return ['nutrition','ingredient','mineral','source','purification','regulatory','manufacturer'].includes(x.information_type);});label='Rear · Composition & details';}else if((angle>45&&angle<145)||(angle>215&&angle<315)){selected=info(p).filter(function(x){return ['benefit','feature','packaging','storage'].includes(x.information_type);});label='Side · Features & benefits';}else selected=info(p).filter(function(x){return ['benefit','feature'].includes(x.information_type);});document.getElementById('ob-info-label').textContent=label;document.getElementById('ob-info-content').innerHTML=selected.length?selected.slice(0,3).map(function(x){return '<strong>'+esc(x.title)+'</strong><span>'+esc(x.content||JSON.stringify(x.structured_data||{}))+'</span>';}).join('<br>'):'<strong>'+esc(p.name)+'</strong><span>'+esc(p.description||p.tagline||'Verified product information will appear here when configured.')+'</span>';}
function setFrame(delta){if(!frames.length)return;frameIndex=(frameIndex+delta+frames.length)%frames.length;var img=media.querySelector('img');if(img)img.src=frames[frameIndex];var angle=Math.round(frameIndex/frames.length*360);document.getElementById('ob-angle-label').textContent=(angle<20||angle>340?'Front view':angle>160&&angle<200?'Rear view':'Product angle')+' · '+angle+'°';showInfo(activeProduct,angle);}
function viewer(p){media.querySelectorAll('img,model-viewer,.ob-no-art').forEach(function(n){n.remove();});var a=asset(p),mode=a.rendering_mode||p.rendering_mode||'static';frames=getFrames(a);frameIndex=0;var url=frames[0]||safe(p.hero_asset||p.cover_image);if(mode==='model-3d'&&a.model_asset&&safe(a.model_asset)){var m=document.createElement('model-viewer');m.src=safe(a.model_asset);m.setAttribute('camera-controls','');m.setAttribute('touch-action','pan-y');m.setAttribute('shadow-intensity','1');m.alt=p.name+' 3D product model';media.insertBefore(m,document.getElementById('ob-angle-label'));document.getElementById('ob-angle-label').textContent='Drag to explore 3D model';return;}if(url){var img=document.createElement('img');img.src=url;img.alt=p.name+' product view';img.draggable=false;media.insertBefore(img,document.getElementById('ob-angle-label'));}else{var empty=document.createElement('div');empty.className='ob-no-art';empty.textContent='Product artwork awaiting upload';media.insertBefore(empty,document.getElementById('ob-angle-label'));}document.getElementById('ob-angle-label').textContent=frames.length?'Front view · Drag or scroll to rotate':'Product image · 360° assets not yet configured';}
function renderRail(){rail.innerHTML=products.map(function(p,i){var url=safe(p.cover_image||p.hero_asset);return '<button class="ob-rail-item" type="button" data-product-index="'+i+'" aria-pressed="'+(i===activeIndex)+'"><span class="ob-rail-thumb">'+(url?'<img src="'+esc(url)+'" alt="" loading="lazy">':'<span>Ocean Breeze</span>')+'</span><span class="ob-rail-name">'+esc(p.name)+'</span><span class="ob-rail-meta">'+esc(p.packaging_format||p.category||'Product')+'</span></button>';}).join('');var grid=document.getElementById('ob-collection-grid');grid.innerHTML=products.length?products.map(function(p,i){var url=safe(p.cover_image||p.hero_asset);return '<button class="ob-collection-card" type="button" data-product-index="'+i+'">'+(url?'<img src="'+esc(url)+'" alt="" loading="lazy">':'<div class="ob-rail-thumb">Artwork pending</div>')+'<strong>'+esc(p.name)+'</strong><small>'+esc(p.packaging_format||p.category||'Explore product')+'</small></button>';}).join(''):'<div class="ob-empty-collection">The product collection is being prepared. Published products will appear here when configured.</div>';document.getElementById('ob-stage-count').textContent=products.length?products.length+' products':'Product exhibition';}
function selectProduct(i){if(!products.length)return;activeIndex=(i+products.length)%products.length;activeProduct=products[activeIndex];theme(activeProduct);viewer(activeProduct);document.getElementById('ob-product-kicker').textContent=(activeProduct.subtitle||activeProduct.category||'Ocean Breeze collection').toUpperCase();document.getElementById('ob-product-name').textContent=activeProduct.name;document.getElementById('ob-product-description').textContent=activeProduct.description||activeProduct.tagline||'Explore the product and its verified details.';document.getElementById('ob-product-specs').innerHTML=[activeProduct.packaging_format,activeProduct.volume].filter(Boolean).map(function(x){return '<span>'+esc(x)+'</span>';}).join('');document.getElementById('ob-explore-hint').textContent=frames.length?'Drag or scroll to rotate':'Explore product details';renderRail();showInfo(activeProduct,0);var b=rail.querySelectorAll('[data-product-index]')[activeIndex];if(b)b.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});}
async function loadExperience(){try{var r=await fetch('/api/experience');if(!r.ok)return;var v=await r.json();if(v.title)document.getElementById('hero-title').textContent=v.title;if(v.eyebrow)document.querySelector('.hero-copy .eyebrow').textContent=v.eyebrow;if(v.copy)document.querySelector('.hero-intro').textContent=v.copy;}catch(e){}}
async function loadProducts(){try{var r=await fetch('/api/products');if(!r.ok)throw Error();products=await r.json();if(!Array.isArray(products))products=[];products.sort(function(a,b){return Number(a.display_order||0)-Number(b.display_order||0);});if(!products.length){renderRail();var concept=document.querySelector('.hero-art .bottle-svg');if(concept){var empty=media.querySelector('.ob-no-art');if(empty)empty.remove();concept.style.height='330px';concept.style.animation='none';media.insertBefore(concept,document.getElementById('ob-angle-label'));document.getElementById('ob-angle-label').textContent='Concept artwork · not confirmed retail packaging';}document.getElementById('ob-product-name').textContent='The collection is taking shape.';document.getElementById('ob-product-description').textContent='Published product experiences will appear here as verified products and approved visual assets are added.';return;}var slug=isProductRoute?decodeURIComponent(path.split('/').pop()):'',idx=slug?products.findIndex(function(p){return p.slug===slug;}):0;if(slug&&idx<0){document.getElementById('ob-product-name').textContent='Product not found';document.getElementById('ob-product-description').textContent='This product is not currently published.';return;}selectProduct(Math.max(0,idx));}catch(e){document.getElementById('ob-product-name').textContent='Product experience unavailable';document.getElementById('ob-product-description').textContent='Please try again later.';}}
if(!isAdmin){loadExperience();loadProducts();rail.addEventListener('click',function(e){var b=e.target.closest('[data-product-index]');if(b)selectProduct(Number(b.dataset.productIndex));});document.getElementById('ob-collection-grid').addEventListener('click',function(e){var b=e.target.closest('[data-product-index]');if(b)selectProduct(Number(b.dataset.productIndex));});document.getElementById('ob-rotate-back').onclick=function(){setFrame(-1);};document.getElementById('ob-rotate-forward').onclick=function(){setFrame(1);};document.getElementById('ob-reset-rotation').onclick=function(){if(frames.length){frameIndex=0;media.querySelector('img').src=frames[0];showInfo(activeProduct,0);document.getElementById('ob-angle-label').textContent='Front view · 0°';}};document.getElementById('ob-rail-left').onclick=function(){rail.scrollBy({left:-180,behavior:'smooth'});};document.getElementById('ob-rail-right').onclick=function(){rail.scrollBy({left:180,behavior:'smooth'});};media.addEventListener('pointerdown',function(e){if(!frames.length)return;pointerX=e.clientX;drag=0;media.classList.add('is-dragging');media.setPointerCapture(e.pointerId);});media.addEventListener('pointermove',function(e){if(pointerX===null)return;var dx=e.clientX-pointerX;pointerX=e.clientX;drag+=dx;if(Math.abs(drag)>7){setFrame(drag>0?-1:1);drag=0;}});var stop=function(){pointerX=null;media.classList.remove('is-dragging');};media.addEventListener('pointerup',stop);media.addEventListener('pointercancel',stop);media.addEventListener('wheel',function(e){if(!frames.length)return;e.preventDefault();setFrame(e.deltaY>0?1:-1);},{passive:false});media.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();setFrame(1);}if(e.key==='ArrowLeft'){e.preventDefault();setFrame(-1);}});}
var session=null,adminProducts=[],adminCollections=[],cfg=null,base='',pub='';
function decode(token){try{return JSON.parse(atob(token.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')));}catch(e){return {};}}
async function getConfig(){if(cfg)return cfg;var r=await fetch('/api/config');if(!r.ok)throw Error('Supabase configuration unavailable');cfg=await r.json();base=cfg.url.replace(/\/$/,'');pub=cfg.publishableKey;return cfg;}
function headers(){return {apikey:pub,authorization:'Bearer '+session.access_token,'content-type':'application/json'};}
async function rest(path,opts){await getConfig();opts=opts||{};var h=Object.assign({},headers(),opts.headers||{}),r=await fetch(base+'/rest/v1/'+path,Object.assign({},opts,{headers:h})),t=await r.text();if(!r.ok)throw Error(t||'Database request failed ('+r.status+')');return t?JSON.parse(t):null;}
function val(id){return document.getElementById(id).value.trim();}
function status(id,msg){document.getElementById(id).textContent=msg;}
async function login(email,password){await getConfig();var r=await fetch(base+'/auth/v1/token?grant_type=password',{method:'POST',headers:{apikey:pub,'content-type':'application/json'},body:JSON.stringify({email:email,password:password})}),d=await r.json();if(!r.ok)throw Error(d.msg||d.message||'Sign-in failed.');var claims=decode(d.access_token);if(!claims.app_metadata||claims.app_metadata.role!=='admin')throw Error('This account is authenticated but not authorised. The project owner must assign app_metadata.role = admin in Supabase Auth.');session=d;localStorage.setItem('ocean-breeze-admin-session',JSON.stringify(d));document.getElementById('ob-admin-login').classList.add('ob-admin-hidden');document.getElementById('ob-admin-work').classList.remove('ob-admin-hidden');document.getElementById('ob-admin-logout').classList.remove('ob-admin-hidden');await loadAdmin();}
function logout(){session=null;localStorage.removeItem('ocean-breeze-admin-session');document.getElementById('ob-admin-login').classList.remove('ob-admin-hidden');document.getElementById('ob-admin-work').classList.add('ob-admin-hidden');document.getElementById('ob-admin-logout').classList.add('ob-admin-hidden');}
function tab(name){document.querySelectorAll('[data-admin-tab]').forEach(function(b){b.setAttribute('aria-current',String(b.dataset.adminTab===name));});document.querySelectorAll('.ob-admin-panel').forEach(function(p){p.classList.toggle('active',p.id==='ob-panel-'+name);});}
async function loadAdmin(){var r=await Promise.all([rest('products?select=*&order=display_order.asc'),rest('product_collections?select=*&order=display_order.asc'),rest('product_media?select=*&order=created_at.desc'),rest('enquiries?select=*&order=created_at.desc')]);adminProducts=r[0]||[];adminCollections=r[1]||[];var enquiries=r[3]||[];document.getElementById('ob-enquiry-count').textContent=enquiries.length+' enquiries · '+enquiries.filter(function(x){return x.status==='new';}).length+' new';renderEnquiries(enquiries);document.getElementById('ob-stat-products').textContent=adminProducts.length;document.getElementById('ob-stat-published').textContent=adminProducts.filter(function(p){return p.status==='published';}).length;document.getElementById('ob-collection-id').innerHTML='<option value=\"\">No collection</option>'+adminCollections.map(function(c){return '<option value=\"'+c.id+'\">'+esc(c.name)+'</option>';}).join('');document.getElementById('ob-stat-assets').textContent=adminProducts.filter(function(p){return p.rendering_mode!=='static';}).length;document.getElementById('ob-product-list-count').textContent=adminProducts.length+' products';document.getElementById('ob-admin-product-list').innerHTML=adminProducts.map(function(p){return '<div class="ob-admin-row"><div><strong>'+esc(p.name)+'</strong><small>'+esc(p.slug)+' · '+esc(p.status)+' · '+esc(p.rendering_mode)+'</small></div><button data-edit="'+p.id+'" type="button">Edit</button><button data-archive="'+p.id+'" type="button">Archive</button></div>';}).join('')||'<p class="ob-admin-muted">No products yet. Create the first verified product.</p>';document.getElementById('ob-stat-enquiries').textContent=enquiries.filter(function(x){return x.status==='new';}).length;document.getElementById('ob-stat-collections').textContent=adminCollections.length;document.getElementById('ob-admin-collections').innerHTML=adminCollections.map(function(c){return '<div class="ob-admin-row"><div><strong>'+esc(c.name)+'</strong><small>'+esc(c.slug)+' · '+esc(c.status)+'</small></div><button type="button" data-edit-collection="'+esc(c.id)+'">Edit</button><button type="button" data-archive-collection="'+esc(c.id)+'">Archive</button></div>';}).join('');document.getElementById('ob-admin-media-list').innerHTML=(r[2]||[]).map(function(m){return '<div class="ob-admin-row"><div><strong>'+esc(m.asset_type)+'</strong><small>'+esc(m.alt_text||m.asset_url)+'</small></div><a href="'+esc(safe(m.asset_url))+'" target="_blank" rel="noopener">Open</a><span></span></div>';}).join('')||'<p class="ob-admin-muted">Media appears here after uploads.</p>';document.getElementById('ob-publishing-list').innerHTML=adminProducts.map(function(p){return '<div class="ob-admin-row"><div><strong>'+esc(p.name)+'</strong><small>'+esc(p.status)+' · '+(p.status==='published'?'Public':'Not public')+' · '+esc(p.rendering_mode)+'</small></div><button type="button" data-publish-product="'+esc(p.id)+'" data-next-status="'+(p.status==='published'?'draft':'published')+'">'+(p.status==='published'?'Unpublish':'Publish')+'</button><button type="button" data-edit="'+esc(p.id)+'">Edit</button></div>';}).join('')||'<p class="ob-admin-muted">No products created.</p>';try{var s=await rest('website_experience_settings?setting_key=eq.homepage&select=setting_value');if(s&&s[0]){var v=s[0].setting_value||{};document.getElementById('ob-home-title').value=v.title||'Clarity in every moment.';document.getElementById('ob-home-eyebrow').value=v.eyebrow||'A clearer kind of refreshment';document.getElementById('ob-home-copy').value=v.copy||'Experience refreshment differently.';}}catch(e){}}
async function renderEnquiries(items){var filter=document.getElementById('ob-enquiry-filter').value;var rows=items.filter(function(x){return filter==='all'||x.status===filter;});document.getElementById('ob-admin-enquiries').innerHTML=rows.map(function(x){var date=new Date(x.created_at).toLocaleString();return '<article class="ob-enquiry-card" data-enquiry-id="'+esc(x.id)+'"><div class="ob-enquiry-head"><div><strong>'+esc(x.full_name)+'</strong><div class="ob-enquiry-meta">'+esc(x.email)+(x.phone?' · '+esc(x.phone):'')+'<br>'+esc(x.enquiry_type)+' · '+esc(date)+'</div></div><span class="ob-enquiry-status">'+esc((x.status||'new').replace('_',' '))+'</span></div><p class="ob-enquiry-message">'+esc(x.message)+'</p><div class="ob-enquiry-actions"><select data-enquiry-status aria-label="Enquiry status"><option value="new" '+((x.status||'new')==='new'?'selected':'')+'>New</option><option value="in_progress" '+(x.status==='in_progress'?'selected':'')+'>In progress</option><option value="resolved" '+(x.status==='resolved'?'selected':'')+'>Resolved</option><option value="archived" '+(x.status==='archived'?'selected':'')+'>Archived</option></select><button type="button" data-save-enquiry>Save status</button><a href="mailto:'+encodeURIComponent(x.email)+'?subject='+encodeURIComponent('Re: Ocean Breeze enquiry')+'">Reply by email ↗</a></div></article>';}).join('')||'<p class="ob-admin-muted">No enquiries match this filter.</p>';}
function upload(file,folder){await getConfig();var name=file.name.replace(/[^a-zA-Z0-9._-]/g,'-'),object=folder+'/'+Date.now()+'-'+name,path=object.split('/').map(encodeURIComponent).join('/');var r=await fetch(base+'/storage/v1/object/ocean-breeze-products/'+path,{method:'POST',headers:{apikey:pub,authorization:'Bearer '+session.access_token,'content-type':file.type||'application/octet-stream','x-upsert':'true'},body:file});if(!r.ok)throw Error('Asset upload failed: '+await r.text());return base+'/storage/v1/object/public/ocean-breeze-products/'+path;}
function preview(){var p=document.getElementById('ob-admin-preview');p.style.background='linear-gradient(120deg,'+val('ob-bg-primary')+','+val('ob-bg-secondary')+')';p.style.color=val('ob-text-primary');document.getElementById('ob-preview-name').textContent=val('ob-name')||'Product art direction';}
function fill(p){p=p||{};document.getElementById('ob-product-form').reset();document.getElementById('ob-edit-id').value=p.id||'';document.getElementById('ob-product-form-title').textContent=p.id?'Edit product':'Create product';var fields={'ob-name':p.name,'ob-slug':p.slug,'ob-subtitle':p.subtitle,'ob-format':p.packaging_format,'ob-volume':p.volume,'ob-category':p.category||'Purified water','ob-description':p.description,'ob-tagline':p.tagline,'ob-status':p.status||'draft','ob-rendering':p.rendering_mode||'image-sequence','ob-order':p.display_order||0,'ob-collection-id':p.collection_id||''};Object.keys(fields).forEach(function(k){document.getElementById(k).value=fields[k]||'';});var a=one(p.product_art_directions);var map={background_primary:'ob-bg-primary',background_secondary:'ob-bg-secondary',accent_primary:'ob-accent-primary',accent_secondary:'ob-accent-secondary',text_primary:'ob-text-primary',text_secondary:'ob-text-secondary'};Object.keys(map).forEach(function(k){if(a[k])document.getElementById(map[k]).value=a[k];});document.getElementById('ob-atmosphere').value=a.atmosphere||'oceanic';document.getElementById('ob-product-scale').value=a.product_scale||1;document.getElementById('ob-transition').value=a.transition_duration||900;document.getElementById('ob-info-json').value=JSON.stringify(p.product_information||[],null,2);document.getElementById('ob-product-form').classList.remove('ob-admin-hidden');preview();document.getElementById('ob-product-form').scrollIntoView({behavior:'smooth'});}
async function saveProduct(e){e.preventDefault();status('ob-product-save-status','Saving…');try{var id=val('ob-edit-id'),p={name:val('ob-name'),slug:val('ob-slug'),subtitle:val('ob-subtitle')||null,packaging_format:val('ob-format')||null,volume:val('ob-volume')||null,category:val('ob-category')||null,description:val('ob-description')||null,tagline:val('ob-tagline')||null,status:val('ob-status'),rendering_mode:val('ob-rendering'),display_order:Number(val('ob-order'))||0,collection_id:val('ob-collection-id')||null,updated_at:new Date().toISOString()};var originalState=null;if(id){var oldState=await rest('products?id=eq.'+encodeURIComponent(id)+'&select=status,rendering_mode,hero_asset');originalState=oldState[0]||null;}var requestedStatus=p.status,writeProduct=Object.assign({},p);if(id)delete writeProduct.status;else writeProduct.status='draft';var cover=document.getElementById('ob-cover-file').files[0],bgFile=document.getElementById('ob-bg-image').files[0];if(cover){p.cover_image=await upload(cover,(id||'new')+'/cover');p.hero_asset=p.cover_image;}var saved=await rest('products'+(id?'?id=eq.'+encodeURIComponent(id):''),{method:id?'PATCH':'POST',headers:{Prefer:'return=representation'},body:JSON.stringify(writeProduct)}),row=Array.isArray(saved)?saved[0]:saved;if(!row||!row.id)throw Error('Product was not returned by the database.');id=row.id;var mediaRows=[];if(cover)mediaRows.push({product_id:id,asset_url:p.cover_image,asset_type:'image',alt_text:p.name,display_order:0});var existingArt=await rest('product_art_directions?product_id=eq.'+encodeURIComponent(id)+'&select=background_asset');var backgroundAsset=bgFile?await upload(bgFile,id+'/art-direction'):(existingArt[0]?existingArt[0].background_asset:null);if(bgFile)mediaRows.push({product_id:id,asset_url:backgroundAsset,asset_type:'image',alt_text:p.name+' background',display_order:1});var art={product_id:id,background_asset:backgroundAsset||null,background_primary:val('ob-bg-primary'),background_secondary:val('ob-bg-secondary'),accent_primary:val('ob-accent-primary'),accent_secondary:val('ob-accent-secondary'),text_primary:val('ob-text-primary'),text_secondary:val('ob-text-secondary'),atmosphere:val('ob-atmosphere'),product_scale:Number(val('ob-product-scale'))||1,transition_duration:Number(val('ob-transition'))||900,updated_at:new Date().toISOString()};await rest('product_art_directions?on_conflict=product_id',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=representation'},body:JSON.stringify(art)});var fs=Array.from(document.getElementById('ob-frame-files').files||[]).sort(function(a,b){return a.name.localeCompare(b.name,undefined,{numeric:true,sensitivity:'base'});}),mf=document.getElementById('ob-model-file').files[0],old=await rest('product_360_assets?product_id=eq.'+encodeURIComponent(id)+'&select=*'),manifest=old[0]?old[0].frame_manifest:[],model=old[0]?old[0].model_asset:null;if(fs.length>360)throw Error('A rotation sequence cannot exceed 360 frames.');if(fs.length){manifest=[];for(var i=0;i<fs.length;i++){var frameUrl=await upload(fs[i],id+'/360');manifest.push(frameUrl);mediaRows.push({product_id:id,asset_url:frameUrl,asset_type:'frame',alt_text:p.name+' rotation frame '+(i+1),display_order:i+2});}}if(mf){model=await upload(mf,id+'/model');mediaRows.push({product_id:id,asset_url:model,asset_type:'model',alt_text:p.name+' 3D model',display_order:999});}if(p.status==='published'&&p.rendering_mode==='image-sequence'&&manifest.length<12)throw Error('A published 360° image-sequence product needs at least 12 genuine rotation frames.');if(p.status==='published'&&p.rendering_mode==='model-3d'&&!model)throw Error('Upload the genuine GLB/GLTF model before publishing this 3D product.');if(p.status==='published'&&p.rendering_mode==='static'&&!(p.hero_asset||row.hero_asset))throw Error('Upload a real product image before publishing this static product.');if(fs.length||mf||p.rendering_mode==='static'){await rest('product_360_assets?on_conflict=product_id',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=representation'},body:JSON.stringify({product_id:id,rendering_mode:p.rendering_mode,frame_manifest:manifest,frame_count:manifest.length,model_asset:model,rotation_settings:{sensitivity:1,direction:1,scroll_enabled:true}})});}var info=JSON.parse(val('ob-info-json')||'[]');if(!Array.isArray(info))throw Error('Product information must be a JSON array.');await rest('product_information?product_id=eq.'+encodeURIComponent(id),{method:'DELETE'});if(info.length)await rest('product_information',{method:'POST',body:JSON.stringify(info.map(function(x,i){return {product_id:id,information_type:x.information_type||'other',title:x.title||'Product detail',content:x.content||null,structured_data:x.structured_data||{},display_order:i,is_visible:x.is_visible!==false};}))});if(mediaRows.length)await rest('product_media',{method:'POST',body:JSON.stringify(mediaRows)});await rest('products?id=eq.'+encodeURIComponent(id),{method:'PATCH',body:JSON.stringify({status:requestedStatus,updated_at:new Date().toISOString()})});await rest('product_admin_activity',{method:'POST',body:JSON.stringify({actor_id:decode(session.access_token).sub,action:'save_product',entity_type:'product',entity_id:id,details:{status:p.status}})});status('ob-product-save-status','Saved. Product content and art direction are stored.');document.getElementById('ob-product-form').classList.add('ob-admin-hidden');await loadAdmin();}catch(err){if(originalState&&id){try{await rest('products?id=eq.'+encodeURIComponent(id),{method:'PATCH',body:JSON.stringify(originalState)});}catch(rollbackError){}}status('ob-product-save-status',err.message||'Save failed.');}}
if(isAdmin){
document.getElementById('ob-login-form').addEventListener('submit',async function(e){e.preventDefault();status('ob-login-status','Signing in…');try{await login(val('ob-login-email'),document.getElementById('ob-login-password').value);}catch(err){status('ob-login-status',err.message);}});
document.getElementById('ob-admin-logout').onclick=logout;
document.querySelectorAll('[data-admin-tab]').forEach(function(b){b.onclick=function(){tab(b.dataset.adminTab);};});
document.getElementById('ob-new-product').onclick=function(){fill({});};
document.getElementById('ob-cancel-product').onclick=function(){document.getElementById('ob-product-form').classList.add('ob-admin-hidden');};
document.getElementById('ob-product-form').addEventListener('submit',saveProduct);
document.getElementById('ob-admin-product-list').addEventListener('click',async function(e){var ed=e.target.closest('[data-edit]'),ar=e.target.closest('[data-archive]');if(ed){try{var data=await rest('products?select=*,product_art_directions(*),product_360_assets(*),product_information(*)&id=eq.'+encodeURIComponent(ed.dataset.edit));fill(data[0]||{});}catch(err){alert(err.message);}}if(ar){if(!confirm('Archive this product?'))return;try{await rest('products?id=eq.'+encodeURIComponent(ar.dataset.archive),{method:'PATCH',body:JSON.stringify({status:'archived',updated_at:new Date().toISOString()})});await loadAdmin();}catch(err){alert(err.message);}}});
document.getElementById('ob-publishing-list').addEventListener('click',async function(e){var b=e.target.closest('[data-publish-product]');if(!b)return;var id=b.dataset.publishProduct,next=b.dataset.nextStatus,p=adminProducts.find(function(x){return x.id===id;});if(!p)return;if(next==='published'){try{var assets=await rest('product_360_assets?product_id=eq.'+encodeURIComponent(id)+'&select=*'),a=assets[0]||{};if(p.rendering_mode==='image-sequence'&&Number(a.frame_count||0)<12)throw Error('Publishing blocked: upload at least 12 genuine 360° frames first.');if(p.rendering_mode==='model-3d'&&!a.model_asset)throw Error('Publishing blocked: upload a genuine GLB/GLTF model first.');if(p.rendering_mode==='static'&&!(p.hero_asset||p.cover_image))throw Error('Publishing blocked: upload a real product cover image first.');}catch(err){status('ob-homepage-status',err.message);return;}}b.disabled=true;try{await rest('products?id=eq.'+encodeURIComponent(id),{method:'PATCH',body:JSON.stringify({status:next,updated_at:new Date().toISOString()})});await loadAdmin();status('ob-homepage-status','Product '+(next==='published'?'published':'unpublished')+'.');}catch(err){status('ob-homepage-status',err.message);}finally{b.disabled=false;}});
document.getElementById('ob-enquiry-filter').addEventListener('change',async function(){try{var items=await rest('enquiries?select=*&order=created_at.desc');renderEnquiries(items||[]);}catch(err){status('ob-enquiry-status',err.message);}});
document.getElementById('ob-admin-enquiries').addEventListener('click',async function(e){var b=e.target.closest('[data-save-enquiry]');if(!b)return;var card=b.closest('[data-enquiry-id]'),id=card.dataset.enquiryId,select=card.querySelector('[data-enquiry-status]');b.disabled=true;try{await rest('enquiries?id=eq.'+encodeURIComponent(id),{method:'PATCH',headers:{Prefer:'return=minimal'},body:JSON.stringify({status:select.value,updated_at:new Date().toISOString()})});status('ob-enquiry-status','Enquiry status updated.');var items=await rest('enquiries?select=*&order=created_at.desc');document.getElementById('ob-enquiry-count').textContent=items.length+' enquiries · '+items.filter(function(x){return x.status==='new';}).length+' new';renderEnquiries(items||[]);}catch(err){status('ob-enquiry-status',err.message);}finally{b.disabled=false;}});
function fillCollection(c){document.getElementById('ob-collection-edit-id').value=c.id||'';document.getElementById('ob-collection-form-title').textContent=c.id?'Edit collection':'Create collection';document.getElementById('ob-collection-submit').textContent=c.id?'Save collection':'Create collection';document.getElementById('ob-collection-name').value=c.name||'';document.getElementById('ob-collection-slug').value=c.slug||'';document.getElementById('ob-collection-description').value=c.description||'';document.getElementById('ob-collection-status').value=c.status||'draft';document.getElementById('ob-collection-form').scrollIntoView({behavior:'smooth'});}
document.getElementById('ob-admin-collections').addEventListener('click',async function(e){var edit=e.target.closest('[data-edit-collection]'),archive=e.target.closest('[data-archive-collection]');if(edit){var c=adminCollections.find(function(x){return x.id===edit.dataset.editCollection;});if(c)fillCollection(c);}if(archive){if(!confirm('Archive this collection? Products assigned to it will remain intact.'))return;try{await rest('product_collections?id=eq.'+encodeURIComponent(archive.dataset.archiveCollection),{method:'PATCH',body:JSON.stringify({status:'archived',updated_at:new Date().toISOString()})});await loadAdmin();}catch(err){status('ob-collection-message',err.message);}}});
document.getElementById('ob-collection-form').addEventListener('submit',async function(e){e.preventDefault();var id=val('ob-collection-edit-id');try{var payload={name:val('ob-collection-name'),slug:val('ob-collection-slug'),description:val('ob-collection-description')||null,status:val('ob-collection-status'),updated_at:new Date().toISOString()};await rest('product_collections'+(id?'?id=eq.'+encodeURIComponent(id):''),{method:id?'PATCH':'POST',headers:{Prefer:'return=representation'},body:JSON.stringify(payload)});status('ob-collection-message',id?'Collection updated.':'Collection created.');e.target.reset();document.getElementById('ob-collection-edit-id').value='';document.getElementById('ob-collection-form-title').textContent='Create collection';document.getElementById('ob-collection-submit').textContent='Create collection';await loadAdmin();}catch(err){status('ob-collection-message',err.message);}});
document.getElementById('ob-homepage-form').addEventListener('submit',async function(e){e.preventDefault();try{await rest('website_experience_settings?on_conflict=setting_key',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=representation'},body:JSON.stringify({setting_key:'homepage',setting_value:{title:val('ob-home-title'),eyebrow:val('ob-home-eyebrow'),copy:val('ob-home-copy')},is_published:true,updated_at:new Date().toISOString()})});status('ob-homepage-status','Homepage settings saved.');}catch(err){status('ob-homepage-status',err.message);}});
['ob-bg-primary','ob-bg-secondary','ob-name'].forEach(function(id){document.getElementById(id).addEventListener('input',preview);});
try{var saved=localStorage.getItem('ocean-breeze-admin-session');if(saved){var d=JSON.parse(saved),claims=decode(d.access_token);if(claims.exp>Date.now()/1000&&claims.app_metadata&&claims.app_metadata.role==='admin'){session=d;document.getElementById('ob-admin-login').classList.add('ob-admin-hidden');document.getElementById('ob-admin-work').classList.remove('ob-admin-hidden');document.getElementById('ob-admin-logout').classList.remove('ob-admin-hidden');loadAdmin().catch(logout);}else localStorage.removeItem('ocean-breeze-admin-session');}}catch(e){localStorage.removeItem('ocean-breeze-admin-session');}
}
})();
</script>
<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
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
  "content-security-policy": "default-src 'self'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data: https://rrvbhdpgcqhdlajlfnkd.supabase.co; media-src 'self' https://rrvbhdpgcqhdlajlfnkd.supabase.co; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://ajax.googleapis.com; worker-src 'self' blob:; connect-src 'self' https://rrvbhdpgcqhdlajlfnkd.supabase.co",
  "strict-transport-security": "max-age=31536000; includeSubDomains"
};
function validEmail(value) {
  return value.length <= 254 && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/config") {
      if (!env.SUPABASE_URL || !env.SUPABASE_PUBLISHABLE_KEY) return json({ error: "Product services are not configured." }, 503);
      return json({ url: env.SUPABASE_URL, publishableKey: env.SUPABASE_PUBLISHABLE_KEY });
    }

    if (url.pathname === "/api/experience") {
      if (request.method !== "GET") return json({ error: "Method not allowed." }, 405);
      if (!env.SUPABASE_URL || !env.SUPABASE_PUBLISHABLE_KEY) return json({}, 200);
      try {
        const endpoint = env.SUPABASE_URL.replace(/\/$/, "") + "/rest/v1/website_experience_settings?setting_key=eq.homepage&is_published=eq.true&select=setting_value";
        const upstream = await fetch(endpoint, { headers: { apikey: env.SUPABASE_PUBLISHABLE_KEY, authorization: "Bearer " + env.SUPABASE_PUBLISHABLE_KEY } });
        if (!upstream.ok) return json({}, 200);
        const rows = await upstream.json();
        return json(rows && rows[0] ? rows[0].setting_value : {});
      } catch (error) { return json({}, 200); }
    }
    if (url.pathname === "/api/products") {
      if (request.method !== "GET") return json({ error: "Method not allowed." }, 405);
      if (!env.SUPABASE_URL || !env.SUPABASE_PUBLISHABLE_KEY) return json({ error: "Product catalogue unavailable." }, 503);
      try {
        const endpoint = env.SUPABASE_URL.replace(/\/$/, "") + "/rest/v1/products?select=*,product_art_directions(*),product_360_assets(*),product_information(*),product_media(*)&status=eq.published&order=display_order.asc";
        const upstream = await fetch(endpoint, { headers: { apikey: env.SUPABASE_PUBLISHABLE_KEY, authorization: "Bearer " + env.SUPABASE_PUBLISHABLE_KEY } });
        if (!upstream.ok) { console.error("Product catalogue read failed", upstream.status); return json({ error: "Product catalogue unavailable." }, 502); }
        return new Response(await upstream.text(), { headers: { "content-type": "application/json; charset=utf-8", "cache-control": "public, max-age=60, stale-while-revalidate=300", "x-content-type-options": "nosniff" } });
      } catch (error) { return json({ error: "Product catalogue temporarily unavailable." }, 502); }
    }
    if (url.pathname === "/health") return new Response("Ocean Breeze Worker healthy", { headers: { "content-type": "text/plain; charset=utf-8", ...securityHeaders } });
    if (url.pathname === "/robots.txt") return new Response("User-agent: *\nAllow: /\nSitemap: https://ocean-breeze.officialdawg25.workers.dev/sitemap.xml\n", { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600", ...securityHeaders } });
    if (url.pathname === "/sitemap.xml") return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://ocean-breeze.officialdawg25.workers.dev/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url></urlset>', { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600", ...securityHeaders } });
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
    if (url.pathname === "/admin" || url.pathname === "/admin/" || url.pathname.startsWith("/products/")) return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", ...securityHeaders } });
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