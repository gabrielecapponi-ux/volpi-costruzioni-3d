(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e,t){return new URL(e,t).href},n={},r=function(e){return e.pathname.endsWith(`.css`)},i=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},a=function(a,o,s){let c=Promise.resolve();if(o&&o.length>0){let a,l=document.querySelector(`meta[property=csp-nonce]`),u=l?.nonce||l?.getAttribute(`nonce`);function d(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function f(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}c=d(o.map(o=>{o=t(o,s);let c=f(o),l=r(c);return i(n,c.href,()=>{if(a===void 0){a={all:new Set,styles:new Set};let e=document.getElementsByTagName(`link`);for(let t=e.length-1;t>=0;t--){let n=e[t];a.all.add(n.href),n.rel===`stylesheet`&&a.styles.add(n.href)}}if((l?a.styles:a.all).has(c.href))return;let t=document.createElement(`link`);if(t.rel=l?`stylesheet`:e,l||(t.as=`script`),t.crossOrigin=``,t.href=c.href,u&&t.setAttribute(`nonce`,u),document.head.appendChild(t),l)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${c}`)))})})}).filter(e=>e!==void 0))}function l(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return c.then(e=>{for(let t of e||[])t.status===`rejected`&&l(t.reason);return a().catch(l)})},o=[{name:`Disegno`,title:`Disegno su carta`,at:0,from:0,description:`Sulla carta si leggono la pianta della villa, gli spazi aperti e il profilo della piscina.`},{name:`Terreno`,title:`Terreno e scavo`,at:.2,from:.12,description:`Il tracciato passa dalla carta al lotto. Lo scavo prepara le quote della casa e della vasca.`},{name:`Fondazioni`,title:`Fondazioni`,at:.34,from:.27,description:`Le armature prendono posto nei plinti. Le travi di fondazione collegano i punti di appoggio.`},{name:`Ossatura`,title:`Ossatura`,at:.51,from:.42,description:`Pilastri, travi e solai disegnano i due livelli e la terrazza affacciata sulla piscina.`},{name:`Involucro`,title:`Involucro`,at:.7,from:.61,description:`Le pareti definiscono i volumi. Le ampie aperture mettono in relazione gli interni e il giardino.`},{name:`Finiture`,title:`Finiture`,at:.88,from:.81,description:`Entrano in scena i frangisole, le superfici in pietra e la pavimentazione a bordo vasca.`},{name:`Luci`,title:`La villa si accende`,at:1,from:.95,description:`Si illuminano gli ambienti interni e il bordo della piscina. La casa è pronta per essere abitata.`}],s=e=>Math.max(0,Math.min(1,e)),c=e=>o.findLastIndex(t=>e>=t.from),l=e=>new URL(`villa/`+String(e).padStart(2,`0`)+`.webp`,document.baseURI).href;function u({reduced:e,staticMode:t,enterSite:n,criticalImages:r}){let i=document.documentElement,u=document.getElementById(`arrival`),d=document.getElementById(`site-content`),f=document.getElementById(`cantiere`),p=f.querySelector(`.build-sticky`),m=u.querySelector(`.model-slot`),h=f.querySelector(`.model-slot`),g=f.querySelector(`.build-ruler`),_=f.querySelector(`[data-build-name]`),v=f.querySelector(`[data-build-description]`),y=f.querySelector(`[data-build-number]`),b=u.querySelector(`[data-entry-count]`),x=u.querySelector(`[data-entry-title]`),S=u.querySelector(`[role="progressbar"]`),C=u.querySelector(`[data-entry-skip]`),w=document.createElement(`canvas`);w.className=`villa-canvas`,w.setAttribute(`aria-hidden`,`true`);let T=!1,E=!1,D=i.classList.contains(`arriving`)?m:h,O,k,A=!1,j=0,M=-1,N=-1,P=0,F=!1;D.append(w);function I(e){D.dataset.plate!==String(e)&&(D.dataset.plate=String(e),D.querySelector(`img`).src=l(e))}function L(e){j=s(e),O&&!A?(O.setProgress(j),D.dataset.live=``):I(c(j))}async function R(){if(!(t||A))return k||=a(async()=>{let{createVillaScene:e}=await import(`./villa-live-CJQjaajp.js`);return{createVillaScene:e}},[],import.meta.url).then(({createVillaScene:e})=>{O=e(w),O.resize(),L(j)}).catch(()=>{delete D.dataset.live,I(c(j))}),k}w.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),A=!0,delete D.dataset.live,I(c(j))}),w.addEventListener(`webglcontextrestored`,()=>{A=!1,O&&(O.resize(),L(j))});let z=o.map((t,n)=>{let r=document.createElement(`button`),i=document.createElement(`span`);return i.textContent=t.name,i.dataset.index=String(n+1).padStart(2,`0`),r.type=`button`,r.setAttribute(`aria-label`,`Fase `+(n+1)+`, `+t.title),r.append(i),g.append(r),r.addEventListener(`click`,()=>{if(e())B(t.at);else{let e=f.getBoundingClientRect(),n=f.offsetHeight-p.offsetHeight;window.scrollTo({top:scrollY+e.top+n*t.at,behavior:`instant`}),B(t.at)}}),r});g.hidden=!1,i.classList.add(`has-live-tour`);function B(e){let t=c(e);t!==M&&(M=t,_.textContent=o[t].title,v.textContent=o[t].description,y.textContent=String(t+1).padStart(2,`0`),z.forEach((e,n)=>e.setAttribute(`aria-pressed`,String(t===n)))),z.forEach((t,n)=>{let r=o[n+1]?.from??1,i=s((e-o[n].from)/(r-o[n].from));t.style.setProperty(`--phase-fill`,String(i))}),f.dataset.phase=String(t),L(e)}function V(){if(P=0,!T||e())return;let t=s(-f.getBoundingClientRect().top/Math.max(1,f.offsetHeight-p.offsetHeight));(t!==j||M<0)&&B(t)}function H(){F&&!P&&T&&!e()&&(P=requestAnimationFrame(V))}new IntersectionObserver(([e])=>{F=e.isIntersecting,F&&T&&(R(),H())},{rootMargin:`160px 0px`}).observe(f),window.addEventListener(`scroll`,H,{passive:!0}),new ResizeObserver(()=>{O&&!A&&(O.resize(),L(j)),H()}).observe(w);function U(){T||(T=!0,delete m.dataset.live,D=h,D.append(w),O&&!A&&O.resize(),window.dispatchEvent(new Event(`volpi:enter`)),d.inert=!1,B(+!!e()),e()||V(),F&&R(),document.activeElement===C&&d.querySelector(`.mast-logo`).focus({preventScroll:!0}),E||n())}C.addEventListener(`click`,U),window.addEventListener(`volpi:skip`,U),document.addEventListener(`keydown`,e=>{T||(e.key===`Escape`&&U(),e.key===`Tab`&&(e.preventDefault(),C.focus()))}),matchMedia(`(prefers-reduced-motion: reduce)`).addEventListener(`change`,()=>{e()?(U(),B(1)):V()});function W(e){L(e);let t=Math.round(e*100);t!==N&&(N=t,b.textContent=String(t),x.textContent=o[c(e)].title,S.setAttribute(`aria-valuenow`,String(t)),u.style.setProperty(`--entry-progress`,String(e)),(t<=20||!u.style.getPropertyValue(`--entry-ink`))&&u.style.setProperty(`--entry-ink`,Math.min(100,t*8)+`%`))}function ee(e,t,n){return new Promise(r=>{let i=performance.now();function a(o){if(T){r();return}let c=s((o-i)/n);W(e+(t-e)*c),c===1?r():requestAnimationFrame(a)}requestAnimationFrame(a)})}let G=e=>new Promise(t=>setTimeout(t,e));async function te(){d.inert=!0,W(0);let t=R(),i=Promise.allSettled([t,document.fonts.ready,...r.map(e=>e.decode())]);await Promise.race([t,G(1100)]),!T&&(await ee(0,.95,4900),!T&&(await Promise.all([G(180),Promise.race([i,G(1800)])]),!T&&(await ee(.95,.99,540),!T&&(await G(250),!T&&(W(1),await G(540),!T&&(!location.hash&&!e()&&u.animate&&(E=!0,n(),await u.animate([{clipPath:`inset(0 0 0 0)`,opacity:1},{clipPath:`inset(0 0 100% 0)`,opacity:.94}],{duration:540,easing:`cubic-bezier(.72,0,.22,1)`,fill:`forwards`}).finished.catch(()=>{})),U()))))))}i.classList.contains(`arriving`)&&!e()?te().catch(U):U()}var d=[{label:`In studio`,at:.1,text:`Ci incontriamo in studio per parlare degli spazi che ti servono e di come immagini la tua casa.`},{label:`Al tavolo da disegno`,at:.36,text:`Sul tavolo prendono forma la distribuzione degli ambienti, le aperture e la scelta dei materiali.`},{label:`In cantiere`,at:.64,text:`Il progetto passa sul terreno. Si tracciano gli scavi, si gettano le fondazioni e si alza la struttura.`},{label:`A casa`,at:1,text:`Dopo le ultime finiture facciamo il giro degli ambienti insieme. È il momento delle chiavi.`}],f=`
  <defs>
    <pattern id="cj-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><path d="M-1 6 6-1m-1 9 4-4" fill="none" stroke="#83867a" stroke-width="1"/></pattern>
    <pattern id="cj-wood" width="8" height="9" patternUnits="userSpaceOnUse"><path d="M1 0v9m3-7v5" fill="none" stroke="#736b5b" stroke-width="1"/></pattern>
    <pattern id="cj-fill" width="12" height="9" patternUnits="userSpaceOnUse"><circle cx="3" cy="2" r=".9" fill="#898879"/><path d="m6 6 3-1" stroke="#898879" stroke-width=".9"/></pattern>
    <g id="cj-tree" stroke-linecap="round" stroke-linejoin="round">
      <path d="M-1 0c-1-13 1-31 0-53m1 28-13-15m13 7 11-21" fill="none" stroke="#252b29" stroke-width="3"/>
      <path d="M-18-40c-15-2-17-16-8-23-8-9-1-20 7-21-3-12 11-19 19-13 11-9 24-1 24 10 11 3 14 16 7 24 5 13-8 24-17 21-11 10-22 8-32 2Z" fill="#c2c6ae" stroke="#343b31" stroke-width="2"/>
      <path d="M-20-53c0 9 12 11 17 8m-12-25 8-5m15-15 9 5m10 17-7 4m-8 13 5-3" fill="none" stroke="#757e64" stroke-width="1.6"/>
      <path d="m0-37-6-19m6 12 13-20m-10 16-1-22" fill="none" stroke="#363d34" stroke-width="1.8"/>
    </g>
    <g id="cj-person-body" stroke-linejoin="round" stroke-linecap="round">
      <path d="M-9-92c-3-11 1-22 12-22 10-1 15 7 14 15l3 6-4 2c0 6-3 9-8 8l-1 8-14-2 1-12Z" fill="#e7c7a3" stroke="#292d29" stroke-width="2.2"/>
      <path d="M-11-88c-3-7-4-15-1-21 3-9 11-12 21-9 5 1 8 5 9 11l-10 2-3 10-3-1c-3-4-7-1-5 3l5 6-1 12-16-3Z" fill="#30322e" stroke="#292d29" stroke-width="2.2"/>
      <path d="m11-101 3-1m-2 4 .6.2m1 8 3-.5" stroke="#292d29" stroke-width="1.5" fill="none"/>
      <path d="m-9-81 12 1 7 6c4 8 6 22 8 34-8 4-21 7-36 4l3-31Z" fill="#db5747" stroke="#292d29" stroke-width="2.3"/>
      <path d="m-9-81 7 10 7-9m-3 11 4 29m-13-22-4 20m6-2 4-1" fill="none" stroke="#9e352c" stroke-width="1.7"/>
      <path d="M-13-72c-5 4-6 18-5 27 2 6 12 8 24 10l3-7-17-7 4-16" fill="#e56952" stroke="#292d29" stroke-width="2"/>
      <path d="m5-42 10-1 6 4-3 3-9 1-6-1Z" fill="#e7c7a3" stroke="#292d29" stroke-width="1.5"/>
    </g>
    <g id="cj-tech" stroke-linejoin="round" stroke-linecap="round">
      <path d="m-9-44-1 25-4 14 6 2 8-14 4-15 4 27 7 1-2-24 1-19Z" fill="#454d4a" stroke="#292e2b" stroke-width="2"/>
      <path d="m-14-6-5 3 1 3 13-1-1-4m15-1 1 6h13l-1-3-7-3" fill="#282d29"/>
      <path d="m-5-87 11 1 3 10-14 4Z" fill="#c4a282" stroke="#282d29" stroke-width="1.8"/>
      <path d="M-9-99c1-13 20-11 21-1l-1 12-7 7c-5 2-10-4-11-9l-3-1Z" fill="#d4b692" stroke="#282d29" stroke-width="2"/>
      <path d="M-11-97c-2-10 3-15 11-16 8-1 15 4 16 12l-6 8-4-6-7-1-6 3Z" fill="#3b3e37"/>
      <path d="m-11-96 8-1 2 5-7 1Z" stroke="#222927" fill="none" stroke-width="1.6"/>
      <path d="m-8-77 12-4 11 5 2 36-30 2-3-19Z" fill="#a8b4a8" stroke="#292e2b" stroke-width="2.2"/>
      <path d="m-5-79 6 11 6-11m-6 13 2 23m5-21 6-1-1 7-5 1" stroke="#59645b" fill="none" stroke-width="1.5"/>
      <path d="M-9-74c-5 2-8 15-11 20l-11-6-4 6c4 4 15 13 20 10l10-13" fill="#acb8ad" stroke="#292e2b" stroke-width="2"/>
      <path d="m-32-60-6-3-5 2 1 3 8 4Z" fill="#dab892" stroke="#292e2b" stroke-width="1.5"/>
    </g>
    <g id="cj-marker" stroke="#b7604d" stroke-width="1.6"><path d="M0-4v8m-4-4h8"/></g>
  </defs>`;function p(){return`<g class="cj-office">
    <path d="m58 240 139-14 187 18-156 16Z" fill="#d8d8c9"/>
    <g stroke="#2e3431" stroke-width="2.5" stroke-linejoin="round">
      <path d="m92 113 161-20 54 22-158 24Z" fill="#dbe0d3"/>
      <path d="m92 113 57 26v101l-57-22Z" fill="#b9c2b6"/>
      <path d="m149 139 158-24v105l-158 23Z" fill="#faf7eb"/>
      <path d="m86 109 168-21 60 24-166 25Z" fill="#e0e1d3"/><path d="m86 109 62 28 166-25v9l-166 25-62-28Z" fill="#343c36"/>
      <path d="m103 142 33 14v46l-33-12Z" fill="#c4d3cb"/>
      <path d="m118 151 1 47m-15-32 31 12" fill="none" stroke-width="1.5"/>
      <path d="m158 159 46-7v79l-46 7Z" fill="#535e56"/>
      <g data-cj-office-door><path d="m165 164 32-4v68l-32 4Z" fill="#818e80"/>
      <path d="m168 169 25-4v42l-25 4Z" fill="#b5c6bb"/><path d="m174 196 14-18m-12 26 14-20" stroke="#e9eadd" stroke-width="1.4"/>
      </g><path d="m212 151 71-10v51l-71 11Z" fill="#c6d7d0"/>
      <path d="m246 146 1 51m-32-10 65-10" fill="none" stroke-width="1.7"/>
      <path d="m221 179 15-21m18 19 13-21" fill="none" stroke="#f4f1e4" stroke-width="2.2"/>
      <path d="m156 235 51-8 10 5-50 8Z" fill="#bbbeb0"/>
    </g>
    <path d="m217 132 5 1-1 5 5-6 3 1-9 10-2-1Z" fill="#ce503f"/>
    <text x="231" y="175" transform="skewY(-8)" font-family="Arial,sans-serif" font-size="13" font-weight="800" letter-spacing="1.5" fill="#343c36">VOLPI</text>
    <g transform="translate(331 242) scale(.84)"><use href="#cj-tech"/></g>
    <g transform="translate(46 227) scale(.66)"><use href="#cj-tree"/></g>
    <path d="m350 240 29-4m-17 9 23-3" stroke="#a3a697" stroke-width="1.5"/>
  </g>`}function m(){return`<g stroke-linecap="round" stroke-linejoin="round">
    <path d="m470 246 147-19 145 14-129 18Z" fill="#d8d8c9"/>
    <g fill="none" stroke="#a0a396" stroke-width="1.3"><path d="m498 131 3-29 70-10m-74 12 5 1m91-14 87-11m9-5v11m-8-6h12"/></g>
    <g stroke="#3b423b" stroke-width="2">
      <path d="m532 108 109-15 1 64-110 16Z" fill="#e4e5d6"/>
      <g fill="none" stroke-width="1.3"><path d="m546 150 1-24 23-4v8l12-2v-9l41-6v28Z"/><path d="m564 126 1 20m25-27 1 23m-23-10 5-1m39-13v17"/><path d="m546 156 78-11" stroke="#a5a996"/></g>
    </g>
    <g transform="translate(665 236) scale(1.02)"><use href="#cj-tech"/></g>
    <g stroke="#2f352f" stroke-width="2.4" fill="#a49e84">
      <path d="m535 197 8 1-4 44-6 1Zm72 8 7-1 7 45h-6Zm54-13 6-1 5 37-5 1Z"/>
      <path d="m516 193 88-20 80 19-83 21Z" fill="#cdbb98"/><path d="m516 193 85 20 83-21v6l-83 21-85-20Z" fill="#a38c68"/>
      <path d="m539 191 60-12 53 12-60 15Z" fill="#fbf8ec" stroke-width="1.4"/>
      <path d="m557 192 26-6 8 2 9-2 23 5-29 8Z" fill="none" stroke-width="1.2"/><path d="m577 189 16 5 13-3" fill="none" stroke-width="1"/>
      <path d="m630 198 23-5 2 2-22 5Z" fill="#d46649" stroke-width="1"/>
      <path d="m531 181 24-6 8 2-22 6Z" fill="#e1d9c4" stroke-width="1.4"/>
    </g>
    <g data-cj-pencil><path d="m609 179 5-17 3 1-6 17-3 3Z" fill="#df6c50" stroke="#373b33" stroke-width="1.3"/></g>
    <path d="m703 239 20-3m-9 8 22-3" fill="none" stroke="#9b9e91" stroke-width="1.5"/>
  </g>`}function h(){return`<g stroke-linecap="round" stroke-linejoin="round">
    <path d="m861 239 65-16 144-2 71 18-101 16-99-4Z" fill="#d5cdb8"/>
    <path d="m862 240 70-17 129 1 45 10-74 13Z" fill="#b8a48a" stroke="#514a3d" stroke-width="1.8"/>
    <path d="m862 240 1 10 169 10 74-17v-9l-74 13Z" fill="url(#cj-fill)"/>
    <g stroke="#555443" stroke-width="1.5"><path d="m877 231-1-19m29 16-1-19m156 13v-17m32 23v-19" /><path d="m875 216 28-4 158-2 33 6" stroke="#b34e38" stroke-width="1"/></g>
    <g transform="translate(942 233) scale(1.48)" stroke="#303832" stroke-width="2.3">
      <path d="m-39-5 48-5 11 6 1 8-53 5-12-6Z" fill="#343a34"/>
      <path d="M-37-1 8-6c4 0 6 6 2 8l-46 4c-5-1-5-5-1-7Z" fill="#a4a590"/>
      <path d="M-34 1 7-3m-34 2 1 4m8-5 1 4m8-5 1 4" fill="none" stroke="#54574b" stroke-width="1.5"/>
      <path d="m-29-13 24-4 20 3 5 9-44 5-9-4Z" fill="#b96345"/>
      <path d="m-17-17 2-22 18-2 9 7 2 18Z" fill="#d98358"/>
      <path d="m-12-19 1-17 11-1 6 5 1 11Z" fill="#899f97"/>
      <path d="m-2-35 1 15m-30 9 8 1m-6 3 7 1" fill="none" stroke-width="1.3"/>
      <g data-cj-boom>
        <path d="m4-15 24-32 9 1 21 29-6 4-20-25-20 29Z" fill="#d77953"/>
        <path d="m12-18 19-24m5 2 16 21" fill="none" stroke="#8d4c38" stroke-width="1.7"/>
        <circle cx="31" cy="-43" r="3" fill="#514e40"/>
        <path d="m52-16 2 9 8 5 8-1-3 5-13 1-7-12Z" fill="#626656"/>
      </g>
    </g>
    <g transform="translate(1070 239) scale(.73)"><use href="#cj-tech"/><path d="M-14-101c0-6 3-12 11-14l2-4 5 1 2 3c5 2 8 7 8 12l4 3-33 4-3-2Z" fill="#ed8b5a" stroke="#303630" stroke-width="2"/></g>
    <g stroke="#5f6659" stroke-width="2" fill="none"><path d="m1095 228 6-27 1-10m-3 9 4 2m-9 25-5 2"/><path d="m834 236 12-3m-2 7 11-2"/></g>
  </g>`}function g(){return`<g stroke-linejoin="round" stroke-linecap="round">
    <path d="m1271 242 141-24 176 4 109 22-100 21-234-5Z" fill="#d3d6c4"/>
    <path d="m1416 237 153-15 83 13-145 21Z" fill="#c8c3ad"/>
    <g stroke="#b3b5a6" stroke-width="1.2" stroke-dasharray="4 5" fill="none">
      <path d="m1358 219 1-72 170-23 79 32v77m-228-86v-44l106-18 71 28v29m-199 1 172-23 82 31"/>
    </g>
    <g data-cj-frame stroke="#586055" stroke-width="3.5" fill="none">
      <path d="m1360 239 1-82 165-24 81 32v70m-80-102v85m-114 13 1-80m67 71v-79m74 84v-81m-167-2v-44l100-15 69 26v35"/>
    </g>
    <g data-cj-house stroke="#333b34" stroke-width="2.3">
      <path d="m1358 151 170-24v91l-170 27Z" fill="#f6f1df"/>
      <path d="m1528 127 81 35v78l-81-22Z" fill="#c8cfb9"/>
      <path d="m1368 172 56-8v65l-56 9Z" fill="#94a99b"/>
      <path class="cj-home-light" d="m1371 175 49-7v57l-49 8Z" fill="#f4c477" stroke="none"/>
      <path d="m1396 169 1 65m-26-36 50-8" fill="none" stroke-width="2"/>
      <path d="m1446 156 41-6v75l-41 6Z" fill="#6e7564"/>
      <path d="m1452 161 28-5v66l-28 5Z" fill="#373f37"/><path class="cj-home-light" d="m1454 162 24-4v63l-24 4Z" fill="#f3c27d" stroke="none"/>
      <g data-cj-home-door><path d="m1452 161 28-5v66l-28 5Z" fill="#839482"/><path d="m1456 165 19-4v46l-19 3Z" fill="#b2bfa9" stroke-width="1.4"/><path d="m1471 216 4-.6" stroke-width="2"/></g>
      <path d="m1496 149 27-4v69l-27 5Z" fill="url(#cj-wood)" stroke-width="1.6"/>
      <path d="m1542 149 48 20v44l-48-14Z" fill="#8da69a"/>
      <path class="cj-home-light" d="m1545 153 42 18v37l-42-12Z" fill="#f3cd88" stroke="none"/>
      <path d="m1566 160 1 44m-20-19 37 12" fill="none" stroke-width="1.6"/>
      <path d="m1345 151 181-27 97 37-181 30Z" fill="#e2dfc7"/>
      <path d="m1345 151 97 40 181-30v7l-181 30-97-39Z" fill="#4f594b"/>
      <path d="m1428 192 4 1v54l-4 1Zm162-22 3-1v67l-3-1Z" fill="#6c7565" stroke-width="1.3"/>
    </g>
    <g data-cj-roof stroke="#343c35" stroke-width="2.2">
      <path d="m1380 105 106-16 71 27-104 20Z" fill="#e5e2d3"/>
      <path d="m1380 105 73 31v28l-73-26Z" fill="#b8c1ab"/>
      <path d="m1453 136 104-20v29l-104 19Z" fill="#f4eddd"/>
      <path d="m1465 141 77-14v15l-77 14Z" fill="#9bb4a6"/>
      <path class="cj-home-light" d="m1467 142 73-13v11l-73 13Z" fill="#edc47c" stroke="none"/>
      <path d="m1492 136 1 16m26-21v15" fill="none" stroke-width="1.6"/>
      <path d="m1373 102 113-18 80 29-113 21Z" fill="#dfe1cf"/><path d="m1373 102 80 32 113-21v6l-113 22-80-32Z" fill="#53604f"/>
    </g>
    <g data-cj-garden><g transform="translate(1642 242) scale(.83)"><use href="#cj-tree"/></g>
      <g stroke="#62715c" stroke-width="2" fill="none"><path d="m1338 246-4-13m4 13 4-18m-4 18 10-8m245 10 2-10m0 10 8-8"/></g>
      <path d="m1390 248 53-9 17 4-56 8m19 1 47-8 15 3-48 9" fill="#e2ddc8" stroke="#91957f" stroke-width="1.3"/>
    </g>
    <g transform="translate(1322 245) scale(.79)"><use href="#cj-tech"/></g>
    <g data-cj-key fill="none" stroke="#ba5433" stroke-width="2.5"><circle cx="1279" cy="197" r="4"/><path d="m1282 200 10 9m-3-6-2 3m5 0-2 3"/></g>
  </g>`}var _=`<g data-cj-customer stroke-linecap="round" stroke-linejoin="round">
  <g data-cj-leg-back><path d="m-11-42 11 1-2 21-3 15-8 1 1-18Z" fill="#566361" stroke="#2e3533" stroke-width="2"/><path d="m-14-8 8 1 3 3 7 1v3l-19 .5Z" fill="#303632"/></g>
  <g data-cj-leg-front><path d="m-3-43 15-2-1 22-2 17-8 1-3-18Z" fill="#657472" stroke="#29332f" stroke-width="2.2"/><path d="m0-8 9-.5 3 4 8 2v3H0Z" fill="#2e3532" stroke="#29332f" stroke-width="1.1"/></g>
  <use href="#cj-person-body"/>
  <path d="m7-39 15-3 10 26-15 5Z" fill="#eadfb6" stroke="#32382e" stroke-width="1.8"/><path d="m12-38 9-2m-6 4 7-2" fill="none" stroke="#8b8160" stroke-width="1"/>
</g>`,v=`M-25 249C34 250 60 242 106 246S182 253 231 250C274 246 305 251 348 249S435 239 479 245 570 252 610 250 708 242 748 245 827 254 873 248 952 259 1029 252 1100 240 1146 243 1207 252 1254 247 1338 257 1402 247Q1438 240 1465 231`;function y(){return`<svg class="cj-drawing" viewBox="0 0 1740 290" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
    ${f}
    <g fill="none" stroke="#bcc0ae" stroke-width="1.2" stroke-dasharray="4 8"><path d="M2 254q213-15 405 0t401 2 414-1 499-1"/></g>
    ${p()}${m()}${h()}${g()}
    <path data-cj-route d="${v}" fill="none" stroke="#2e332d" stroke-width="3.4" stroke-linecap="round" pathLength="1"/>
    ${_}
  </svg>`}var b=e=>Math.max(0,Math.min(1,e)),x=(e,t,n)=>b((e-t)/(n-t));function S(e){return e*e*(3-2*e)}var C=[[0,54],[.115,283],[.19,283],[.328,546],[.407,546],[.565,949],[.67,949],[.82,1266],[.869,1266],[.97,1465],[1,1465]];function w(e){let t=C.findIndex(([t])=>t>e);if(t<1)return C.at(-1)[1];let[n,r]=C[t-1],[i,a]=C[t];return r+(a-r)*S(x(e,n,i))}function T(e){if(!e||e.querySelector(`.cj-frame`))return;e.classList.add(`client-journey`),e.setAttribute(`aria-labelledby`,`journey-title`),e.innerHTML=`<div class="cj-frame"><div class="cj-inner">
    <header class="cj-head"><h2 id="journey-title">Dall’incontro<br>alle chiavi<span>.</span></h2>
      <div class="cj-copy"><h3 data-cj-title></h3><p data-cj-copy></p></div>
    </header>
    <div class="cj-panorama">${y()}</div>
    <div class="cj-stops" role="group" aria-label="Momenti del percorso">${d.map((e,t)=>`<button type="button" data-cj-index="${t}" aria-pressed="false">${e.label}</button>`).join(``)}</div>
  </div></div>`;let t=t=>e.querySelector(`[data-cj-${t}]`),n=e.querySelector(`.cj-frame`),r=e.querySelector(`.cj-panorama`),i=e.querySelector(`.cj-drawing`),a=[...e.querySelectorAll(`button`)],[o,s,c,l,u,f,p,m,h,g,_,v,C]=[`route`,`customer`,`leg-back`,`leg-front`,`boom`,`pencil`,`frame`,`house`,`roof`,`garden`,`key`,`title`,`copy`].map(t),T=t(`office-door`),E=t(`home-door`),D=[...e.querySelectorAll(`.cj-home-light`)],O=matchMedia(`(prefers-reduced-motion: reduce)`),k=new URLSearchParams(location.search),A=()=>O.matches||k.get(`motion`)===`reduce`||k.get(`static`)===`1`,j=!1,M=0,N=-1,P=0,F=0,I=1,L=1740;function R(){M=0;let e=A()?P:b((window.scrollY-F)/I),t=e<.23?0:e<.475?1:e<.79?2:3;N!==t&&(a.forEach((e,n)=>e.setAttribute(`aria-pressed`,String(n===t))),v.textContent=d[t].label,C.textContent=d[t].text,N=t);let n=w(e),r=n+(1-e)*135+e*68,y=Math.max(0,Math.min(1740-L,r-L*.5));i.setAttribute(`viewBox`,`${y.toFixed(1)} 67 ${L.toFixed(1)} 210`);let O=Math.sin(n/9),k=Math.min(1,Math.abs(w(Math.min(1,e+.001))-n)),j=Math.sin(x(e,.035,.095)*Math.PI),R=S(x(e,.025,.061))*(1-S(x(e,.085,.14)));T.setAttribute(`transform`,`translate(165 0) scale(${(1-R*.83).toFixed(3)} 1) translate(-165 0)`),E.setAttribute(`transform`,`translate(1452 0) scale(${(1-S(x(e,.9,.97))*.92).toFixed(3)} 1) translate(-1452 0)`),s.setAttribute(`transform`,`translate(${n.toFixed(1)} ${(249-Math.abs(O)*k*1.7-j*12-15*x(e,.94,.98)).toFixed(1)}) scale(.80)`),s.style.opacity=String((1-S(x(e,.943,.98)))*(1-j**6*.72)),c.setAttribute(`transform`,`rotate(${(O*k*18).toFixed(1)} -3 -40)`),l.setAttribute(`transform`,`rotate(${(-O*k*17).toFixed(1)} 4 -40)`);let z=Math.min(1,(n+25)/1490);o.setAttribute(`stroke-dasharray`,`1`),o.setAttribute(`stroke-dashoffset`,String(1-z)),f.setAttribute(`transform`,`translate(${(Math.sin(x(e,.3,.43)*30)*4).toFixed(1)} 0)`),u.setAttribute(`transform`,`rotate(${(Math.sin(x(e,.5,.72)*Math.PI*3)*12).toFixed(1)} 5 -15)`);let B=S(x(e,.55,.72));p.setAttribute(`transform`,`translate(0 ${(242*(1-B)).toFixed(1)}) scale(1 ${B.toFixed(3)})`),p.style.opacity=String(B*(1-S(x(e,.74,.84))));let V=S(x(e,.69,.82));m.style.opacity=String(V),m.setAttribute(`transform`,`translate(0 ${((1-V)*10).toFixed(1)})`);let H=S(x(e,.76,.87));h.style.opacity=String(H),h.setAttribute(`transform`,`translate(0 ${(-18*(1-H)).toFixed(1)})`),g.style.opacity=String(S(x(e,.77,.88))),_.style.opacity=String(S(x(e,.78,.83))*(1-S(x(e,.9,.94))));let U=String(S(x(e,.9,.99)));D.forEach(e=>{e.style.opacity=U})}function z(){!M&&j&&(M=requestAnimationFrame(R))}function B(){e.classList.toggle(`cj-reduced`,A()),F=e.getBoundingClientRect().top+window.scrollY,I=Math.max(1,e.offsetHeight-n.offsetHeight),L=Math.max(358,Math.min(1740,r.getBoundingClientRect().width*1.26)),R()}function V(t){let n=d[t].at;if(A())P=n,R();else{let t=e.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:t+I*n,behavior:`instant`}),R()}}a.forEach((e,t)=>e.addEventListener(`click`,()=>V(t))),window.addEventListener(`scroll`,z,{passive:!0}),O.addEventListener(`change`,B);let H=new ResizeObserver(B);H.observe(e),H.observe(document.body);let U=new IntersectionObserver(([e])=>{j=e.isIntersecting,j&&B()});return U.observe(e),B(),()=>{window.removeEventListener(`scroll`,z),O.removeEventListener(`change`,B),H.disconnect(),U.disconnect(),cancelAnimationFrame(M),e.replaceChildren(),e.classList.remove(`client-journey`,`cj-reduced`),e.removeAttribute(`aria-labelledby`)}}var E=new URL(`villetta-Cx43U4mQ.jpg`,import.meta.url).href,D=new URL(`piscina-CP25m2Kt.jpg`,import.meta.url).href,O=new URL(`scala-Dqw9OBLn.jpg`,import.meta.url).href,k=new URL(`tetto-CkXsdbdD.jpg`,import.meta.url).href,A=new URL(`industriale-BBHI7WPK.jpg`,import.meta.url).href,j=new URL(`tennis-BHF5Jg_r.jpg`,import.meta.url).href,M=new URL(`volpi-villa-photo-Club3usz.webp`,import.meta.url).href,N=new URL(`volpi-villa-sketch-Q6yX_idG.webp`,import.meta.url).href,P=new URL(`studio-piscina-Sb00xxAa.webp`,import.meta.url).href,F=new URL(`studio-scala-CB71p_31.webp`,import.meta.url).href,I=new URL(`studio-tetto-CqLoUbv2.webp`,import.meta.url).href,L=new URL(`studio-industriale-DGmEtL9c.webp`,import.meta.url).href,R=new URL(`studio-tennis-HsA1fS6_.webp`,import.meta.url).href,z=[{title:`Villetta con giardino`,subject:`Residenziale`,image:E,sketch:N,detail:`Volumi e portico`,traces:[`M264 433 291 220 345 167 822 397 844 623`,`M371 547 378 325 590 397 591 689 M408 646 409 441 544 477 548 645`],width:960,height:636,alt:`La villetta vista dal giardino, con fiori in primo piano e grandi sporti di copertura.`},{title:`Villa con piscina`,subject:`Spazi esterni`,image:D,sketch:P,detail:`Perimetro della vasca`,traces:[`M60 674 259 600 727 598 934 673 60 674Z`,`M100 656 277 607 714 605 875 656 100 656Z`],width:1600,height:1067,alt:`Una piscina rettangolare si estende davanti al portico in pietra della villa.`},{title:`Scala e parete in sasso`,subject:`Interni`,image:O,sketch:F,detail:`Ritmo delle alzate`,traces:[`M335 916 669 916 M351 815 641 814 M378 735 618 735 M391 679 593 679 M407 634 577 634`,`M320 978 402 628 M676 975 578 624`],width:1600,height:1067,alt:`Una rampa di scale sale lungo una parete in sasso verso una finestra alta.`},{title:`Travi a vista`,subject:`Coperture`,image:k,sketch:I,detail:`Orditura in legno`,traces:[`M0 56 477 86 464 164 0 159Z M0 315 435 279 422 349 0 391Z M0 495 400 438 391 500 0 568Z`,`M599 122 985 342 965 419 578 195Z M552 326 890 521 878 576 541 391Z`],width:800,height:600,alt:`Travi di legno scuro scandiscono le due falde del soffitto.`},{title:`Edificio industriale`,subject:`Industria`,image:A,sketch:L,detail:`Maglia della facciata`,traces:[`M52 365 956 372 958 571 M80 428 395 428 395 594 80 594Z M647 429 929 429 929 590 647 590Z`,`M91 496 387 496 M653 494 923 494 M185 430 185 590 M285 430 285 593 M743 430 743 589 M826 430 826 590`],width:800,height:600,alt:`Il piazzale di accesso conduce al fronte vetrato di un edificio industriale.`},{title:`Campo da tennis`,subject:`Sport`,image:j,sketch:R,detail:`Tracciamento del campo`,traces:[`M0 697 533 844 803 479 M0 528 467 468 803 479`,`M299 769 750 476 M545 844 561 847 M970 701 860 478`],width:1024,height:768,alt:`Il campo da tennis verde con linee bianche, recinzione e abitazione sullo sfondo.`}],B=`<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M6 5h13v13"/></svg>`,V=`<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7"/></svg>`,H=`<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>`,U=e=>String(e).padStart(2,`0`);function W(e,t){let n=e.traces.map(e=>`<path d="${e}" pathLength="1"/>`).join(``);return`<figure class="wg-plate">
    <a class="wg-enlarge" href="${e.image}" data-open-photo="${t}" aria-label="Ingrandisci la fotografia: ${e.title}" aria-haspopup="dialog">
      <span class="wg-image" style="aspect-ratio:${e.width}/${e.height}">
        <img class="wg-ink-layer" src="${e.sketch}" width="${e.width}" height="${e.height}" loading="lazy" decoding="async" alt="">
        <img class="wg-built-layer" src="${e.image}" width="${e.width}" height="${e.height}" loading="lazy" decoding="async" alt="${e.alt}">
        <svg class="wg-fieldwork" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">${n}</svg>
        <span class="wg-boundary" aria-hidden="true"></span>
      </span>
      <span class="wg-frame-state" aria-hidden="true">Studio a grafite</span>
      <span class="wg-enlarge-icon">${B}</span>
    </a>
    <figcaption>
      <div><span class="wg-type">${e.subject}</span><h3>${e.title}</h3></div>
      <button class="wg-study-link" type="button" data-open-study="${t}" aria-label="Confronta disegno e foto: ${e.title}" aria-haspopup="dialog">Confronta <span aria-hidden="true">↗</span></button>
    </figcaption>
  </figure>`}function ee(e,t,n){let r=e=>Math.max(0,Math.min(1,e)),i=[...e.querySelectorAll(`.wg-plate`)].map((e,t)=>({plate:e,frame:e.querySelector(`.wg-image`),label:e.querySelector(`.wg-frame-state`),stages:[`Studio a grafite`,z[t].detail,`Fotografia Volpi`],lastPosition:-1})),a=0,o=!0;function s(){a=0;let o=n||!t.matches;e.toggleAttribute(`data-still`,o);let s=document.documentElement.clientHeight;for(let e of i){let t=e.frame.getBoundingClientRect(),n=r((s*.83-t.top)/(s*.49+t.height*.11)),i=o?-2:Math.round(n*500);if(i===e.lastPosition)continue;e.lastPosition=i;let a=i/500,c=o?.5:r((a-.36)/.58),l=o?0:r((a-.06)/.41),u=o?0:r((.93-a)/.26);e.plate.style.setProperty(`--wg-reveal`,(c*100).toFixed(2)+`%`),e.plate.style.setProperty(`--wg-trace`,(1-l).toFixed(3)),e.plate.style.setProperty(`--wg-trace-alpha`,u.toFixed(3)),e.plate.style.setProperty(`--wg-seam-alpha`,c>0&&c<1?`1`:`0`);let d=o?`Disegno · Fotografia`:e.stages[a<.16?0:a<.8?1:2];e.label.textContent!==d&&(e.label.textContent=d)}}function c(){o&&!a&&(a=requestAnimationFrame(s))}`IntersectionObserver`in window&&new IntersectionObserver(([e])=>{o=e.isIntersecting,o&&c()},{rootMargin:`40% 0px`}).observe(e),window.addEventListener(`scroll`,c,{passive:!0}),window.addEventListener(`resize`,c,{passive:!0}),window.addEventListener(`pageshow`,c),t.addEventListener(`change`,c),s()}function G(e){if(!e||e.classList.contains(`wg-archive`))return;e.classList.add(`wg-archive`),e.setAttribute(`aria-labelledby`,`wg-heading`),e.innerHTML=`<div class="wg-shell">
    <header class="wg-intro">
      <h2 id="wg-heading">Opere selezionate<span>.</span></h2>
      <p>Dagli studi illustrativi alle fotografie originali Volpi. <span class="wg-scroll-hint">Scorri per seguire ogni passaggio.</span></p>
    </header>
    <div class="wg-plates">${z.map(W).join(``)}</div>
  </div>
  <dialog class="wg-viewer" aria-labelledby="wg-current-title">
    <div class="wg-viewer-inner">
      <header class="wg-viewer-head">
        <p class="wg-type">Archivio fotografico</p>
        <button type="button" class="wg-icon-button" data-close-viewer aria-label="Chiudi la galleria" autofocus>${H}</button>
      </header>
      <div class="wg-stage">
        <div class="wg-original"><img alt="" decoding="async"></div>
        <div class="wg-comparison" hidden></div>
        <div class="wg-study-plate" hidden>
          <div class="wg-split">
            <img class="wg-split-photo" alt="">
            <img class="wg-split-drawing" alt="">
            <span class="wg-split-label wg-split-left" aria-hidden="true">Disegno</span>
            <span class="wg-split-label wg-split-right" aria-hidden="true">Fotografia</span>
            <span class="wg-seam" aria-hidden="true"><span>‹ ›</span></span>
            <input type="range" min="0" max="100" step="1" value="50" data-split-range>
          </div>
        </div>
      </div>
      <div class="wg-viewer-caption">
        <div aria-live="polite" aria-atomic="true">
          <p class="wg-type" data-current-description></p>
          <h3 id="wg-current-title"></h3>
        </div>
        <button class="wg-enter-study" type="button" data-switch-study></button>
        <div class="wg-pagination">
          <span class="wg-counter"></span>
          <button type="button" class="wg-icon-button wg-prev" data-step="-1" aria-label="Fotografia precedente">${V}</button>
          <button type="button" class="wg-icon-button" data-step="1" aria-label="Fotografia successiva">${V}</button>
        </div>
      </div>
    </div>
  </dialog>`;let t=e.querySelector(`.wg-viewer`),n=t.querySelector(`.wg-comparison`),r=t.querySelector(`.wg-original`),i=t.querySelector(`.wg-study-plate`),o=i.querySelector(`.wg-split`),s=i.querySelector(`input`),c=i.querySelector(`.wg-split-photo`),l=i.querySelector(`.wg-split-drawing`),u=t.querySelector(`[data-switch-study]`),d=r.querySelector(`img`),f=t.querySelector(`.wg-counter`),p=t.querySelector(`#wg-current-title`),m=t.querySelector(`[data-current-description]`),h=new URLSearchParams(location.search),g=matchMedia(`(prefers-reduced-motion: no-preference)`),_=h.get(`motion`)===`reduce`||h.get(`static`)===`1`;_&&(e.dataset.still=``);let v=0,y,b,x=!1,S=!1,C=0,w=0;function T(){w++,cancelAnimationFrame(C),C=0}function E(e){let t=Math.round(e);s.value=String(t),s.setAttribute(`aria-valuetext`,`${t}% di disegno, ${100-t}% di fotografia`),o.style.setProperty(`--wg-boundary`,`${t}%`),o.dataset.edge=t<20?`left`:t>80?`right`:``}function D(e){let t=w;n.hidden=!0,i.hidden=!1,o.style.setProperty(`--wg-photo-ratio`,String(e.width/e.height)),c.src=e.image,c.alt=e.alt,l.src=e.sketch,l.alt=`Interpretazione a grafite, ${e.title.toLowerCase()}.`,s.setAttribute(`aria-label`,`Confronta il disegno e la fotografia di ${e.title.toLowerCase()}`);let r=!_&&g.matches;E(r?100:50),Promise.all([c.decode(),l.decode()]).then(()=>{if(t!==w||!r||!g.matches)return;let e=performance.now();function n(t){let r=Math.max(0,Math.min(1,(t-e-210)/1300));E(100-55*r*r*(3-2*r)),r<1&&(C=requestAnimationFrame(n))}C=requestAnimationFrame(n)}).catch(()=>{t===w&&A(v)})}for(let e of[`pointerdown`,`keydown`])s.addEventListener(e,T);s.addEventListener(`input`,()=>{T(),E(Number(s.value))});function O(){b?.cancel(),!_&&g.matches&&d.animate&&(b=d.animate([{opacity:.35,transform:`scale(1.018)`},{opacity:1,transform:`scale(1)`}],{duration:380,easing:`cubic-bezier(.16,.68,.24,1)`}))}function k(){let e=z[v];v===0&&S||(T(),b?.cancel(),r.hidden=!0,u.textContent=`Fotografia originale`,u.setAttribute(`aria-pressed`,`true`),m.textContent=`Studio illustrativo dalla fotografia Volpi`,v===0?(i.hidden=!0,n.hidden=!1,!x&&(x=!0,n.innerHTML=`<div class="wg-sketch-frame" data-frame>
      <div class="wg-sheet" data-sheet>
        <img class="photo" src="${M}" alt="Interpretazione della villetta e del suo giardino">
        <div data-sketch-layer><img alt="" src="${N}"></div>
        <canvas data-fog aria-hidden="true"></canvas>
      </div>
      <button type="button" data-toggle hidden><span id="view-label">Disegno</span> ${V}</button>
    </div>`,a(()=>import(`./hero-DdQbvtN8.js`),[],import.meta.url).catch(()=>{S=!0,!n.hidden&&t.open&&A(v)}))):D(e))}function A(e){T(),v=(e+z.length)%z.length;let t=z[v];n.hidden=!0,i.hidden=!0,r.hidden=!1,d.src=t.image,d.alt=t.alt,p.textContent=t.title,m.textContent=t.subject,f.textContent=`${U(v+1)} / ${U(z.length)}`,u.hidden=v===0&&S,u.textContent=`Dal disegno alla foto`,u.setAttribute(`aria-pressed`,`false`),O()}function j(e,n,r){y=n,t.showModal(),t.querySelector(`[data-close-viewer]`).focus({preventScroll:!0}),A(e),r&&k()}e.addEventListener(`click`,e=>{let n=e.target.closest(`[data-open-photo]`);n&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey&&t.showModal&&(e.preventDefault(),j(Number(n.dataset.openPhoto),n,!1));let r=e.target.closest(`[data-open-study]`);r&&t.showModal&&j(Number(r.dataset.openStudy),r,!0)}),t.querySelector(`[data-close-viewer]`).addEventListener(`click`,()=>t.close()),u.addEventListener(`click`,()=>{n.hidden&&i.hidden?k():A(v)}),t.addEventListener(`click`,e=>{let t=e.target.closest(`[data-step]`);t&&A(v+Number(t.dataset.step))}),t.addEventListener(`keydown`,e=>{e.target===s||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&(e.preventDefault(),A(v+(e.key===`ArrowLeft`?-1:1)))}),t.addEventListener(`close`,()=>{T(),b?.cancel(),n.hidden=!0,i.hidden=!0,y?.focus({preventScroll:!0})}),g.addEventListener(`change`,()=>{g.matches||(b?.cancel(),T())}),ee(e,g,_)}var te=new URLSearchParams(location.search),ne=te.get(`static`)===`1`,re=matchMedia(`(prefers-reduced-motion: reduce)`),K=()=>re.matches||te.get(`motion`)===`reduce`||ne;function ie(){document.documentElement.toggleAttribute(`data-reduced`,K())}ie(),re.addEventListener(`change`,ie);var q=document.querySelector(`.menu-switch`),ae=document.querySelector(`#navigation`),J=matchMedia(`(max-width:760px)`);function Y(e){q.hidden=!J.matches,q.setAttribute(`aria-expanded`,String(e&&J.matches)),ae.hidden=J.matches&&!e}Y(!1),J.addEventListener(`change`,()=>Y(!1)),q.addEventListener(`click`,()=>Y(q.getAttribute(`aria-expanded`)!==`true`)),ae.addEventListener(`click`,e=>{e.target.closest(`a`)&&Y(!1)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&q.getAttribute(`aria-expanded`)===`true`&&(Y(!1),q.focus())});var X=document.querySelector(`.cover`),Z=[...X.querySelectorAll(`[data-plate]`)].sort((e,t)=>Number(e.dataset.plate)-Number(t.dataset.plate)),oe=[...X.querySelectorAll(`[data-show]`)],se=2,ce,Q=!1,le=[];function $(e,t=!0){if(e===se)return;let n=Z[se];ce?.cancel(),Z.forEach((t,r)=>{t.style.zIndex=r===e?`1`:`0`,t.classList.toggle(`current`,r===e||t===n)}),oe.forEach((t,n)=>t.setAttribute(`aria-pressed`,String(e===n))),X.dataset.cover=String(e),se=e;let r=Z[e];!t||K()||!r.animate?n.classList.remove(`current`):(ce=r.animate([{clipPath:`inset(0 100% 0 0)`,opacity:.72},{clipPath:`inset(0 0% 0 0)`,opacity:1}],{duration:850,easing:`cubic-bezier(.24,.62,.26,1)`}),ce.onfinish=()=>{n.classList.remove(`current`)})}function ue(){Q=!0,le.forEach(clearTimeout),le=[]}oe.forEach((e,t)=>e.addEventListener(`click`,()=>{ue(),$(t)})),X.querySelector(`.plate-buttons`).hidden=!1;function de(){if(K()||Q)return;let e;function t(){K()||Q||($(0,!1),Promise.allSettled(Z.map(e=>e.decode())).then(()=>{Q||K()||(le=[setTimeout(()=>$(1),1e3),setTimeout(()=>$(2),2950)])}))}X.getBoundingClientRect().bottom>0&&scrollY<X.offsetHeight*.85?t():(e=new IntersectionObserver(n=>{n.some(e=>e.isIntersecting)&&(e.disconnect(),t())},{threshold:.4}),e.observe(X))}re.addEventListener(`change`,()=>{K()&&(ue(),ce?.finish(),$(2,!1))}),G(document.getElementById(`lavori`)),T(document.getElementById(`percorso`)),u({reduced:K,staticMode:ne,enterSite:de,criticalImages:Z});var fe=document.querySelector(`.facade-comparison`),pe=!1,me=0;function he(){me=0;let e=fe.getBoundingClientRect(),t=K()?1:Math.max(0,Math.min(1,(innerHeight*.94-e.top)/Math.min(e.height*.92,innerHeight*.64)));fe.style.setProperty(`--facade-built`,t*100+`%`)}function ge(){pe&&!me&&(me=requestAnimationFrame(he))}new IntersectionObserver(([e])=>{pe=e.isIntersecting,ge()}).observe(fe),window.addEventListener(`scroll`,ge,{passive:!0}),window.addEventListener(`resize`,ge),re.addEventListener(`change`,ge);