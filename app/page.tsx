'use client';

import { useState } from 'react';

const products = [
  ['PCs & components', 'Notebooks, workstations, monitors, printers and accessories.'],
  ['Network & security', 'Switches, routers, access points, CCTV and endpoint protection.'],
  ['Data center equipment', 'Servers, storage, UPS systems, racks and enclosures.'],
  ['Mobile & accessories', 'Mobile devices, personal tech and phone accessories.'],
  ['Software & services', 'Device management, managed printing, ERP and CRM.'],
  ['Smart home & office', 'Sensors, controllers, gateways and smart locks.'],
  ['Display solutions', 'Interactive boards, digital signage and commercial displays.'],
  ['Audio solutions', 'Contact center, conferencing and industrial audio systems.'],
];

const services = [
  ['Supply & logistics', 'Get products delivered to your business across Sri Lanka.'],
  ['Consulting & technical support', 'Work with engineers for presales advice, training and technical support.'],
  ['Repair & warranty', 'Coordinate repairs and warranties through agreed service levels.'],
  ['Partner development', 'Access channel planning, demo equipment and marketing support.'],
  ['Online stores', 'Source technology through VS One’s online retail channels.'],
  ['Financial services', 'Discuss financing arrangements and credit terms with VS One.'],
];

const navigation = [['Products', '#products'], ['Services', '#services'], ['About', '#about']];
const live = 'https://www.vsone.lk/';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="distribution">
      <header className="top">
        <div className="wrap bar">
          <a className="mark" href="#home" aria-label="VS One home"><img src={live + 'wp-content/themes/vsone/assets/img/logo.png'} alt="VS One" width="100" height="40" /></a>
          <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-controls="site-nav" aria-expanded={open}>{open ? 'Close' : 'Menu'}</button>
          <nav id="site-nav" aria-label="Main navigation" className={open ? 'shown' : ''}>
            {navigation.map(([label, url]) => <a key={url} href={url} onClick={() => setOpen(false)}>{label}</a>)}
            <a className="button" href="#partners" onClick={() => setOpen(false)}>Become a partner</a>
          </nav>
        </div>
      </header>
      <main id="home">
        <section className="cover">
          <div className="wrap lead">
            <div className="message">
              <p className="label">IT distribution in Sri Lanka</p>
              <h1>Global technology.<br /><em>Local reach.</em></h1>
              <p>VS One connects global technology brands with businesses across Sri Lanka through a network of more than 200 partners.</p>
              <div className="links"><a className="button" href="#products">Explore products</a><a className="outline" href="#partners">Partner with us</a></div>
            </div>
            <div className="art" aria-hidden="true">
              <div className="floor" />
              <div className="orbit outer" /><div className="orbit inner" />
              <div className="chip">
                <div className="plate lower" /><div className="plate middle" />
                <div className="plate upper"><div className="core"><span>VS</span><span>ONE</span></div></div>
              </div>
              <span className="point p1" /><span className="point p2" /><span className="point p3" /><span className="point p4" />
              <div className="art-caption">Global brands <span /> VS One <span /> Local partners</div>
            </div>
          </div>
        </section>
        <section className="metrics" aria-label="VS One in numbers">
          <div className="wrap figures">
            <div><strong>200+</strong><span>Partners across Sri Lanka</span></div>
            <div><strong>25+</strong><span>Global brands</span></div>
            <div><strong>2019</strong><span>Year established</span></div>
          </div>
        </section>
        <section className="wrap section" id="products">
          <div className="section-head"><h2>Technology portfolio</h2><p>Find the products your customers need, from everyday devices to enterprise infrastructure.</p></div>
          <div className="product-grid">{products.map(([name, description]) => <article key={name}><h3>{name}</h3><p>{description}</p></article>)}</div>
        </section>
        <section className="services" id="services">
          <div className="wrap section">
            <div className="section-head"><h2>Support for your business</h2><p>Get help sourcing, delivering and supporting the technology you sell.</p></div>
            <div className="service-grid">{services.map(([name, description]) => <article key={name}><h3>{name}</h3><p>{description}</p></article>)}</div>
          </div>
        </section>
        <section className="wrap section about" id="about">
          <h2>About VS One</h2><p>Founded in Sri Lanka in 2019, VS One helps local resellers and solution providers bring globally recognized technology to customers across the island.</p>
        </section>
        <section className="wrap partner" id="partners">
          <div><h2>Join the VS One partner network</h2><p>Work with VS One to expand your product offering and access local distribution and technical support.</p></div>
          <a className="button" href={live}>Visit the official site</a>
        </section>
      </main>
      <footer className="wrap foot"><a href="#home">VS One</a><a href={live}>Official website</a></footer>
      <style jsx global>{`
        .distribution{--ink:#132738;--navy:#081b2a;--accent:#b9002b;--pink:#ff6177;--muted:#526477;--line:#dce5eb;color:var(--ink);background:#fff;font-family:Arial,Helvetica,sans-serif}
        .distribution *, .distribution *::before,.distribution *::after{box-sizing:border-box}
        .distribution h1,.distribution h2,.distribution h3,.distribution p{margin:0}
        .distribution a:focus-visible,.distribution button:focus-visible{outline:3px solid #e73659;outline-offset:5px}
        .distribution section[id]{scroll-margin-top:95px}
        .distribution .wrap{width:min(100% - 80px,1280px);margin-inline:auto}
        .distribution .top{position:sticky;top:0;z-index:5;background:#fff;border-bottom:1px solid var(--line)}
        .distribution .bar{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}
        .distribution .mark{display:grid;place-items:center;background:var(--navy);border-radius:5px;width:122px;height:48px}
        .distribution .mark img{object-fit:contain;width:94px;height:36px}
        .distribution nav,.distribution .links{display:flex;align-items:center;gap:28px}
        .distribution nav{font-size:15px;font-weight:700}
        .distribution nav a:hover,.distribution .foot a:hover{color:var(--accent)}
        .distribution .button,.distribution .outline{display:inline-flex;align-items:center;justify-content:center;padding:13px 20px;min-height:48px;border-radius:5px;font-weight:700;font-size:15px;text-align:center}
        .distribution .button{background:var(--accent);color:#fff}
        .distribution .button:hover{background:#950022;color:#fff}
        .distribution .outline{border:1px solid #7892aa;color:#fff}
        .distribution .outline:hover{background:#17374e}
        .distribution .menu-toggle{display:none}
        .distribution .cover{background:var(--navy);color:#fff;overflow:hidden}
        .distribution .lead{display:grid;grid-template-columns:1fr 1fr;min-height:570px;align-items:center}
        .distribution .message{padding:66px 0;position:relative;z-index:1}
        .distribution .label{font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:.13em;color:#ff93a2}
        .distribution h1{font-size:clamp(48px,6.2vw,93px);font-weight:700;letter-spacing:-.074em;line-height:.98;margin-block:22px}
        .distribution h1 em{color:var(--pink);font-style:normal}
        .distribution .message>p:not(.label){font-size:18px;line-height:1.6;color:#c5d5e3;max-width:460px}
        .distribution .links{margin-top:30px;gap:12px;flex-wrap:wrap}
        .distribution .art{height:500px;position:relative;isolation:isolate;perspective:780px;background:radial-gradient(ellipse at center,#244a65 0%,transparent 68%)}
        .distribution .floor{position:absolute;inset:8% -10%;background:linear-gradient(#77a7cf26 1px,transparent 1px),linear-gradient(90deg,#77a7cf26 1px,transparent 1px);background-size:38px 38px;transform:rotateX(62deg) rotateZ(-28deg);mask-image:radial-gradient(ellipse,#000 20%,transparent 69%)}
        .distribution .orbit{position:absolute;inset:12% 4%;border:1px solid #648aa375;border-radius:50%;transform:rotateX(60deg) rotateZ(-25deg)}
        .distribution .inner{inset:20% 14%;border-color:#ff657970}
        .distribution .chip{position:absolute;width:42%;aspect-ratio:1;top:48%;left:50%;transform-style:preserve-3d;animation:vs-float 7s ease-in-out infinite;transform:translate(-50%,-50%) rotateX(52deg) rotateZ(-28deg)}
        .distribution .plate{position:absolute;inset:0;border-radius:14%;border:2px solid #7095b7;background:linear-gradient(145deg,#a4bfda,#213d55 37%,#0a202e);box-shadow:0 0 28px #2f648a90}
        .distribution .lower{transform:translateZ(-37px)}
        .distribution .middle{transform:translateZ(-18px);border-color:#fd5c77;background:#74263a}
        .distribution .upper{display:grid;place-items:center;background:repeating-linear-gradient(90deg,#ffffff0d 0 1px,transparent 1px 12px),linear-gradient(135deg,#395b78,#0b2237 75%)}
        .distribution .core{width:57%;aspect-ratio:1;display:grid;place-content:center;text-align:center;border-radius:14%;border:1px solid #ffa2b1;background:linear-gradient(145deg,#f04a66,#87132c);box-shadow:0 0 35px #ef476677;color:white;font-weight:800;line-height:.85;font-size:clamp(20px,4vw,57px);letter-spacing:-.06em}
        .distribution .core span+span{font-size:.43em;letter-spacing:.09em;margin-top:.4em}
        .distribution .point{position:absolute;width:10px;height:10px;background:#ff7b91;border-radius:50%;box-shadow:0 0 18px 4px #ff6177aa;animation:vs-pulse 3s ease-in-out infinite}
        .distribution .p1{top:33%;left:16%}.distribution .p2{top:28%;right:20%;animation-delay:.6s}.distribution .p3{bottom:32%;right:18%;animation-delay:1.2s}.distribution .p4{bottom:28%;left:22%;animation-delay:1.8s}
        .distribution .art-caption{position:absolute;inset:auto 0 7%;display:flex;justify-content:center;align-items:center;gap:10px;color:#c5d5e3;font-size:13px}
        .distribution .art-caption span{width:20px;height:1px;background:#ff7187}
        @keyframes vs-float{50%{transform:translate(-50%,-56%) rotateX(47deg) rotateZ(-23deg)}}
        @keyframes vs-pulse{50%{opacity:.55;transform:scale(.7)}}
        .distribution .metrics,.distribution .services{background:#f0f5f8}
        .distribution .figures{display:grid;grid-template-columns:repeat(3,1fr);padding-block:28px}
        .distribution .figures div{display:grid;gap:6px;padding-inline:24px;border-left:1px solid #cbd8e2}
        .distribution .figures div:first-child{border:0;padding-left:0}
        .distribution .figures strong{font-size:37px;color:var(--accent);letter-spacing:-.06em}
        .distribution .figures span,.distribution .section p{color:var(--muted);line-height:1.6}
        .distribution .section{padding-block:76px}
        .distribution .section-head,.distribution .about{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end}
        .distribution .section-head{margin-bottom:32px}
        .distribution h2{font-size:clamp(32px,4vw,55px);letter-spacing:-.055em;line-height:1.04}
        .distribution h3{font-size:20px;margin-bottom:10px}
        .distribution .product-grid,.distribution .service-grid{display:grid;gap:12px}
        .distribution .product-grid{grid-template-columns:repeat(4,1fr)}
        .distribution .service-grid{grid-template-columns:repeat(3,1fr)}
        .distribution article{background:white;border:1px solid var(--line);border-top:3px solid var(--accent);padding:24px;border-radius:5px}
        .distribution .partner{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:38px;background:var(--navy);color:#fff;border-radius:8px}
        .distribution .partner p{color:#c5d5e3;margin-top:14px;line-height:1.6}
        .distribution .partner .button{flex-shrink:0}
        .distribution .foot{display:flex;justify-content:space-between;padding-block:30px;font-weight:700}
        @media(max-width:850px){
          .distribution .wrap{width:calc(100% - 40px)}
          .distribution .lead{grid-template-columns:1fr}
          .distribution .message{padding:48px 0 0}
          .distribution .art{height:370px;width:min(100%,520px);margin:auto}
          .distribution .product-grid{grid-template-columns:repeat(2,1fr)}
          .distribution .section{padding-block:53px}
        }
        @media(max-width:620px){
          .distribution .menu-toggle{display:block;color:var(--ink);background:white;border:1px solid var(--line);padding:10px 14px;border-radius:5px}
          .distribution nav{display:none;position:absolute;inset:100% 0 auto;background:white;padding:20px;border-bottom:1px solid var(--line);align-items:stretch;gap:18px}
          .distribution nav.shown{display:flex;flex-direction:column}
          .distribution .art{height:295px}
          .distribution .figures div{padding-inline:9px}
          .distribution .figures strong{font-size:27px}
          .distribution .figures span{font-size:14px}
          .distribution .section-head,.distribution .about,.distribution .service-grid{grid-template-columns:1fr}
          .distribution article{padding:15px}
          .distribution h3{font-size:18px}
          .distribution .partner{align-items:flex-start;flex-direction:column;padding:24px}
        }
        @media(prefers-reduced-motion:reduce){.distribution .chip,.distribution .point{animation:none}}
      `}</style>
    </div>
  );
}
