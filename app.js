
"use strict";

const sections = {
  oyun: {
    title: "Oyunlar", eyebrow: "01 / Oyun",
    intro: "Dokun, dene, keşfet. Küçük adımlarla büyük beceriler geliştiren oyunlar.",
    projects: [
      ["sayitreni","Sayı Treni","Vagonları doğru sırayla dizerek sayıları öğren.","4–6 YAŞ","train","#e8f2ff","#ee6753"],
      ["sayiyuvasi","Sayı Yuvası","Sayıları ve miktarları birbiriyle eşleştir.","4–6 YAŞ","nest","#eef6e8","#1da997"],
      ["catchnumber","Sayı Yakala","Doğru sayıyı yakala; dikkatini ve hızını geliştir.","5–7 YAŞ","catch","#def8fa","#397fe1"],
      ["sayma","Sayma","Nesneleri sayarak ilk sayı yolculuğuna çık.","3–5 YAŞ","count","#d5edff","#f3a23e"],
      ["blockCode","BlockCode","Blokları birleştirerek kodlama mantığını keşfet.","6–9 YAŞ","code","#f0e9fa","#8464d2"],
      ["sayitahmin","Tahmin Oyunu","İpuçlarını izle, sayı doğrusunda hedefi bul.","5–7 YAŞ","guess","#fff0e5","#ea6b86"]
    ]
  },
  araclar: {
    title: "Araçlar", eyebrow: "02 / Araçlar",
    intro: "Bir fikri denemeyi, üretmeyi ve paylaşmayı kolaylaştıran küçük ama kullanışlı araçlar.",
    projects: [
      ["exs","Matematik Editörü","Denklemleri ve bilimsel notlarını düzenle.","ÜRETKENLİK","math","#e9eefe","#477dd5"],
      ["soylet","Söylet","Metinlerini tarayıcıda Türkçe sese dönüştür.","SES","audio","#e7f7f1","#1ca68c"],
      ["pdf","PDF Araçları","PDF belgelerinle tek bir çalışma alanında ilgilen.","BELGE","pdf","#fff0e8","#ec7654"],
      ["texttocad","Text to CAD","Sözcüklerden üç boyutlu tasarım fikirleri üret.","3B TASARIM","cad","#e8f4fa","#427fc2"],
      ["csvx","CSVX","Tablo verilerini incele ve rahatça düzenle.","VERİ","table","#f1ecfd","#8c67ce"]
    ]
  },
  egitim: {
    title: "Eğitim", eyebrow: "03 / Eğitim",
    intro: "Merak etmeyi, soru sormayı ve öğrendikçe üretmeyi destekleyen deneyimler.",
    projects: [
      ["sayicubuk","Sayı Çubukları","Parçaları birleştirerek miktarları ve ilişkileri gör.","MATEMATİK","rods","#e4f2ff","#377bcc"],
      ["ilkislemler","İlk İşlemler","Toplama ve çıkarmanın ilk adımlarını keşfet.","MATEMATİK","operations","#fff2dc","#e49a35"],
      ["yazmapratik","Yazma Pratiği","Harfleri ve çizgileri eğlenceli alıştırmalarla öğren.","OKURYAZARLIK","writing","#fbeaf1","#d65f8c"],
      ["erkenislemler","Erken İşlemler","Nesnelerle işlem kur, sonuca birlikte ulaş.","MATEMATİK","count","#e4f7ea","#36a77e"],
      ["blockCode","Bloklarla Kodlama","Görsel bloklarla algoritmik düşünmeye başla.","KODLAMA","code","#efe8fb","#8264cc"]
    ]
  },
  bilim: {
    title: "Bilim", eyebrow: "04 / Bilim",
    intro: "Dalgaları, kristalleri, verileri ve fiziksel dünyayı etkileşimle keşfet.",
    projects: [
      ["kristalyapi","Kristal Yapı","Kristal örgüleri ve üç boyutlu atom düzenlerini incele.","KRİSTALOGRAFİ","crystal","#e6f0fb","#3a72ce"],
      ["xrdai","XRD AI","X-ışını kırınımını ve malzeme analizini keşfet.","MALZEME","diffraction","#eeeafb","#8669cb"],
      ["dalgalar","Dalgalar","Dalga hareketlerini görselleştirerek öğren.","FİZİK","wave","#e3f7f6","#18a6a2"],
      ["frekansskala","Frekans Skalası","Frekans aralıklarını görsel olarak karşılaştır.","ELEKTROMANYETİZMA","frequency","#fff0e6","#e47c4e"]
    ]
  }
};

const projectIndex = new Map();
for (const [route, section] of Object.entries(sections)) {
  section.projects = section.projects.map(([repo,title,description,badge,art,bg,tag]) => {
    const project = {
      key: route + ":" + repo, repo, title, description, badge, art, bg, tag,
      category: section.title, url: "https://github.com/alorak/" + repo
    };
    projectIndex.set(project.key, project);
    return project;
  });
}

const main = document.getElementById("main");
const nav = document.getElementById("primary-nav");
const menuToggle = document.getElementById("menu-toggle");
const dialog = document.getElementById("project-dialog");
const dialogContent = document.getElementById("dialog-content");

function graphic(kind) {
  const box = (x,y,w,h,c,r=10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${c}"/>`;
  const dot = (x,y,r,c,stroke="none",sw=0) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="${stroke}" stroke-width="${sw}"/>`;
  const label = (x,y,t,size=26,color="#29466e") => `<text x="${x}" y="${y}" font-size="${size}" text-anchor="middle" fill="${color}" font-weight="800" font-family="system-ui,sans-serif">${t}</text>`;
  let draw = "";
  switch (kind) {
    case "train":
      draw = `<path d="M26 179H374" stroke="#829ac0" stroke-width="6" stroke-linecap="round"/>` +
        box(35,78,75,79,"#ed6958",16) + box(52,51,42,39,"#ed6958") + box(49,95,47,27,"#fff1d7",7) +
        [0,1,2].map(n=>box(135+n*82,98,70,60,["#5995e8","#4884d5","#3971c6"][n],12) +
          label(170+n*82,137,String(n+1),27,"white") + dot(153+n*82,171,9,"#29466e") + dot(191+n*82,171,9,"#29466e")).join("") +
        dot(55,171,10,"#29466e") + dot(95,171,10,"#29466e");
      break;
    case "nest":
      draw = `<path d="M200 49 110 151M200 49l90 102" stroke="#cbb69d" stroke-width="7"/>` +
        [[200,50,"#80bce1"],[110,157,"#eda3b1"],[290,157,"#ff967e"]]
          .map(([x,y,c])=>dot(x,y,49,"white",c,6)).join("") +
        [[188,43],[212,43],[200,66],[101,148],[122,148],[110,171]]
          .map(([x,y])=>dot(x,y,8,"#857467")).join("") + label(290,173,"?",43,"#ee826e");
      break;
    case "catch":
      draw = box(149,27,103,73,"#ffc456",15) + label(200,80,"2",51,"white") +
        Array.from({length:10},(_,n)=>box(16+n*37,125,34,49,
          ["#f47479","#fa9a6a","#ffbc61","#eecf50","#a5dd6b","#5ad09a","#4bcbbb","#5bbcef","#7098e6","#a781df"][n],6) +
          label(33+n*37,156,String(n+1),18,"white")).join("");
      break;
    case "count":
      draw = dot(125,112,72,"#a0d7f5","white",4) + dot(275,112,72,"#a0d7f5","white",4) +
        [[98,86],[152,86],[98,139],[152,139],[275,112]].map(([x,y])=>dot(x,y,13,"#ffbd52")).join("") +
        `<path d="M28 192H372" stroke="#80c86b" stroke-width="9" stroke-linecap="round"/>`;
      break;
    case "code":
      draw = box(53,32,294,155,"white",17) + box(73,55,119,28,"#f5787e",7) +
        box(73,89,169,28,"#5ebcf1",7) + box(73,123,197,28,"#6ecc93",7) +
        box(73,157,110,19,"#f9c967",7) +
        `<path d="M100 69h55M100 103h105M100 137h134" stroke="white" stroke-width="5" stroke-linecap="round"/>`;
      break;
    case "guess":
      draw = `<path d="M42 153H358" stroke="#2c445e" stroke-width="5" stroke-linecap="round"/>` +
        Array.from({length:11},(_,n)=>`<path d="M${42+n*31.6} 144v18" stroke="#2c445e" stroke-width="3"/>`).join("") +
        dot(200,153,15,"#2aba9c") + dot(200,153,6,"white") +
        `<path d="M200 136V75" stroke="#e86e61" stroke-width="4" stroke-dasharray="6 6"/>` +
        dot(200,59,25,"#e86e61") + label(200,70,"?",37,"white") + label(44,193,"0",18) + label(356,193,"10",18);
      break;
    case "math":
      draw = box(57,29,286,165,"white",16) + label(200,99,"∫ x² dx",38,"#3470ba") +
        `<path d="M94 122H305" stroke="#d4e0ee" stroke-width="3"/>` + label(200,164,"a² + b² = c²",25,"#526e90") +
        dot(327,50,10,"#ea7368");
      break;
    case "audio":
      draw = dot(200,111,67,"white") +
        Array.from({length:19},(_,n)=>{
          const h=17+47*Math.abs(Math.sin((n+1)*.68));
          return `<path d="M${87+n*12.5} ${111-h/2}v${h}" stroke="${n%2?"#2ca58d":"#397fc5"}" stroke-width="7" stroke-linecap="round"/>`;
        }).join("");
      break;
    case "pdf":
      draw = `<path d="M130 27h100l48 48v115H130Z" fill="white" stroke="#e7d5ca" stroke-width="3"/>` +
        `<path d="M230 27v48h48" fill="#ffe1d0"/>` +
        box(97,105,206,58,"#ed735e",13) + label(200,145,"PDF",34,"white") +
        `<path d="M152 87h62M154 177h87" stroke="#e8ddd7" stroke-width="5" stroke-linecap="round"/>`;
      break;
    case "cad":
      draw = `<g fill="none" stroke="#3a7abe" stroke-width="5" stroke-linejoin="round"><path d="m200 29 106 57v88l-106 55-106-55V86Z"/><path d="m94 86 106 59 106-59M200 145v84"/></g>` +
        [[200,29],[94,86],[306,86]].map(([x,y])=>dot(x,y,8,"#ed7868")).join("");
      break;
    case "table":
      draw = box(60,34,280,162,"white",18) + box(60,34,280,44,"#4e94ca",13) +
        Array.from({length:4},(_,n)=>`<path d="M${118+n*56} 79v114" stroke="#cfe1ef" stroke-width="3"/>`).join("") +
        Array.from({length:3},(_,n)=>`<path d="M63 ${109+n*28}h274" stroke="#cfe1ef" stroke-width="3"/>`).join("") +
        box(121,111,52,25,"#80d4ad",4) + box(231,140,52,25,"#f5c48f",4);
      break;
    case "rods":
      draw = [0,1,2,3,4].map(n=>box(64,35+n*32,65+n*49,23,
          ["#ed705e","#f3b658","#5dc5ae","#5d98dc","#967dd9"][n],7) + label(44,53+n*32,String(n+1),17)).join("");
      break;
    case "operations":
      draw = [[80,91,"#ffcc62"],[137,91,"#ffcc62"],[264,91,"#62c6a6"],[320,91,"#62c6a6"]]
        .map(([x,y,c])=>dot(x,y,24,c)).join("") + label(200,108,"+",58,"#546981") +
        label(200,174,"2 + 2 = 4",34,"#304b70");
      break;
    case "writing":
      draw = box(59,36,282,160,"white",14) +
        [0,1,2].map(n=>`<path d="M83 ${91+n*36}H317" stroke="#b7d3ef" stroke-width="3" stroke-dasharray="6 7"/>`).join("") +
        `<path d="M106 145q30-76 60-1t63 0t56-8" fill="none" stroke="#e66a80" stroke-width="7" stroke-linecap="round"/>` +
        `<path d="m266 69 50-35 18 20-52 40-25 5Z" fill="#ebbd5c"/>`;
      break;
    case "crystal":
      draw = `<g stroke="#77a3c9" stroke-width="5" fill="none"><path d="m113 74 87-45 87 45v88l-87 47-87-47Z"/><path d="m113 74 87 48 87-48M200 122v87M113 162l87-40 87 40"/></g>` +
        [[113,74],[200,29],[287,74],[113,162],[200,122],[287,162],[200,209]]
          .map(([x,y],i)=>dot(x,y,14,i%2?"#ea806b":"#3b7aca","white",2)).join("");
      break;
    case "diffraction":
      draw = [83,62,42,20].map((r,i)=>dot(200,111,r,"none",
          ["#8077c6","#73a1cf","#eb8f88","#49baac"][i],5)).join("") +
        dot(200,111,10,"#e86f65") +
        `<path d="M34 111h332M200 7v208" stroke="#6a91af" stroke-width="2" stroke-dasharray="4 8"/>`;
      break;
    case "wave":
      draw = [65,111,157].map((y,i)=>`<path d="M20 ${y}C65 ${y-72} 110 ${y+72} 155 ${y} S245 ${y-72} 290 ${y} S355 ${y+72} 380 ${y}" fill="none" stroke="${["#2389c6","#2abfa2","#ee8b71"][i]}" stroke-width="8" stroke-linecap="round"/>`).join("");
      break;
    case "frequency":
      draw = Array.from({length:19},(_,n)=>{
        const h=22+115*Math.abs(Math.sin(n*.54));
        return box(43+n*17,182-h,11,h,["#4585ce","#2cb8ac","#e6b65d","#ec7769"][Math.floor(n/5)%4],5);
      }).join("") + `<path d="M35 190H367" stroke="#5c6d84" stroke-width="4" stroke-linecap="round"/>`;
      break;
    default:
      draw = dot(200,110,73,"#83b4df") + label(200,120,"ALORAK",23,"white");
  }
  return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${draw}</svg>`;
}

function projectCard(item) {
  return `<button class="project-card" type="button" data-project="${item.key}" aria-label="${item.title} — detayları gör">
    <div class="thumb" style="--thumb-bg:${item.bg}">
      <span class="thumb-label">ALORAK / ${item.category}</span>${graphic(item.art)}
    </div>
    <div class="project-info">
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <div class="card-bottom">
        <span class="card-tag" style="--tag-color:${item.tag}">${item.badge}</span>
        <span class="card-more">Detay
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  </button>`;
}

function homePage() {
  return `<section class="home" aria-labelledby="home-title">
    <div class="hero-grid">
      <h1 class="hero-title" id="home-title">Merak et.<br><span class="under-blue">Oyna,</span> <span class="under-red">öğren,</span><br>üret.</h1>
      <p class="hero-copy">ALORAK, oyunla başlayan fikirlerin yaratıcı araçlara, öğrenme deneyimlerine ve bilimsel keşiflere dönüştüğü açık bir üretim alanı.</p>
    </div>
    <div class="hero-rule" aria-hidden="true"></div>
    <div class="home-footnote">
      <span><span class="spark" aria-hidden="true">✳</span> Her proje küçük bir merakla başlar.</span>
    </div>
  </section>`;
}

function cataloguePage(route) {
  const section = sections[route];
  return `<section class="catalogue-backdrop" aria-labelledby="page-title">
    <div class="catalogue-panel">
      <div class="section-eyebrow">${section.eyebrow}</div>
      <div class="catalogue-heading">
        <div><h1 id="page-title">${section.title}</h1><p>${section.intro}</p></div>
        <span class="project-count">${section.projects.length} proje</span>
      </div>
      <div class="project-grid">${section.projects.map(projectCard).join("")}</div>
    </div>
  </section>`;
}

function activeRoute() {
  const route = decodeURIComponent(location.hash.replace(/^#\/?/, "")).split("/")[0];
  return Object.hasOwn(sections, route) ? route : "home";
}

function closeMenu() {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Menüyü aç");
}

function render() {
  const route = activeRoute();
  main.innerHTML = route === "home" ? homePage() : cataloguePage(route);
  document.title = route === "home" ? "ALORAK — Oyna, öğren, üret" : sections[route].title + " — ALORAK";
  nav.querySelectorAll("a").forEach(link => {
    if (link.dataset.route === route) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  closeMenu();
}

function openProject(key) {
  const item = projectIndex.get(key);
  if (!item) return;
  dialogContent.innerHTML = `<div class="dialog-art" style="--thumb-bg:${item.bg}">${graphic(item.art)}</div>
    <div class="dialog-copy">
      <span class="dialog-category">${item.category} / ${item.badge}</span>
      <h2 id="dialog-title">${item.title}</h2>
      <p>${item.description}</p>
      <div class="dialog-actions">
        <a class="dialog-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
          GitHub'da incele <span aria-hidden="true">↗</span>
        </a>
        <span class="dialog-note">Proje yeni sekmede açılır.</span>
      </div>
    </div>`;
  dialog.showModal();
}

menuToggle.addEventListener("click", () => {
  const opened = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", opened);
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.setAttribute("aria-label", opened ? "Menüyü kapat" : "Menüyü aç");
});
document.addEventListener("click", event => {
  if (!event.target.closest(".site-header")) closeMenu();
});
main.addEventListener("click", event => {
  const card = event.target.closest("[data-project]");
  if (card) openProject(card.dataset.project);
});
document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
window.addEventListener("hashchange", () => {
  if (dialog.open) dialog.close();
  render();
  window.scrollTo(0, 0);
  main.focus({preventScroll: true});
});
render();
