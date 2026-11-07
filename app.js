(() => {
  const $ = (id) => document.getElementById(id);
  const D = DADOS;
  const partida = new Date(D.partida);
  const volta = new Date(D.volta);

  // ---------- Básico ----------
  $("nome").textContent = D.nome;
  $("deQuem").textContent = D.deQuem;
  $("lugarLa").textContent = `em ${D.destino.cidade}`;
  document.title = `Claudin · saudade de ${D.nome}`;

  // Recado do dia: muda a cada dia, igual pra todo mundo naquele dia
  const diaDoAno = Math.floor(Date.now() / 86400000);
  $("recado").textContent = D.recadosDoDia[diaDoAno % D.recadosDoDia.length];

  // ---------- Contagem e relógios ----------
  const doisDigitos = (n) => String(n).padStart(2, "0");
  const formatoHora = (fuso) =>
    new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: fuso });
  const horaAqui = formatoHora(undefined);
  const horaLa = formatoHora(D.destino.fuso);
  const horaNumLa = new Intl.DateTimeFormat("pt-BR", { hour: "numeric", hourCycle: "h23", timeZone: D.destino.fuso });

  function estadoLa(hora) {
    if (hora < 6) return `deve estar dormindo agora 😴`;
    if (hora < 12) return `tá começando o dia por lá ☀️`;
    if (hora < 18) return `tá no meio da tarde por lá 🌤️`;
    return `já é noite por lá 🌙`;
  }

  function atualizar() {
    const agora = new Date();
    let falta = Math.max(0, volta - agora);

    const dias = Math.floor(falta / 86400000);
    falta -= dias * 86400000;
    const horas = Math.floor(falta / 3600000);
    falta -= horas * 3600000;
    const minutos = Math.floor(falta / 60000);
    const segundos = Math.floor((falta % 60000) / 1000);

    $("dias").textContent = dias;
    $("horas").textContent = doisDigitos(horas);
    $("minutos").textContent = doisDigitos(minutos);
    $("segundos").textContent = doisDigitos(segundos);

    const total = volta - partida;
    const pct = Math.min(100, Math.max(0, ((agora - partida) / total) * 100));
    $("progresso").style.width = pct + "%";
    $("aviao").style.left = pct + "%";

    const diasLonge = Math.max(0, Math.floor((agora - partida) / 86400000));
    if (agora >= volta) {
      $("legenda").textContent = "Chegou o dia! Bem-vindo(a) de volta 🎉";
    } else if (agora < partida) {
      $("legenda").textContent = "A viagem ainda nem começou e a saudade já chegou.";
    } else {
      $("legenda").textContent = `${diasLonge} ${diasLonge === 1 ? "dia" : "dias"} longe · ${Math.round(pct)}% do caminho`;
    }

    $("horaAqui").textContent = horaAqui.format(agora);
    $("horaLa").textContent = horaLa.format(agora);
    $("estado").textContent = `${D.nome} ${estadoLa(Number(horaNumLa.format(agora)))}`;
  }
  atualizar();
  setInterval(atualizar, 1000);

  // ---------- Memórias ----------
  const linha = $("linha");
  D.memorias.forEach((m) => {
    const li = document.createElement("li");
    li.className = "memoria";
    li.innerHTML = `
      <figure class="polaroid">
        <img alt="" loading="lazy" />
        <figcaption></figcaption>
      </figure>
      <div>
        <h3></h3>
        <p></p>
      </div>`;
    const img = li.querySelector("img");
    img.src = m.foto || "";
    img.alt = m.titulo;
    img.onerror = () => {
      const ph = document.createElement("div");
      ph.className = "sem-foto";
      ph.textContent = m.emoji || "💛";
      img.replaceWith(ph);
    };
    li.querySelector("figcaption").textContent = m.data;
    li.querySelector("h3").textContent = m.titulo;
    li.querySelector("p").textContent = m.texto;
    linha.appendChild(li);
  });

  const observador = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visivel");
          observador.unobserve(e.target);
        }
      }),
    { threshold: 0.2 }
  );
  document.querySelectorAll(".memoria").forEach((el) => observador.observe(el));

  // ---------- Cartas ----------
  const lerLidas = () => {
    try { return JSON.parse(localStorage.getItem("claudin-lidas") || "[]"); } catch { return []; }
  };
  const salvarLidas = (l) => {
    try { localStorage.setItem("claudin-lidas", JSON.stringify(l)); } catch {}
  };
  const lidas = new Set(lerLidas());
  const dialogo = $("carta");

  D.cartas.forEach((c, i) => {
    const b = document.createElement("button");
    b.className = "envelope" + (lidas.has(i) ? " lida" : "");
    b.innerHTML = `<span class="emoji"></span><span class="quando"></span>`;
    b.querySelector(".emoji").textContent = c.emoji;
    b.querySelector(".quando").textContent = `…${c.quando}`;
    b.addEventListener("click", () => {
      $("cartaTitulo").textContent = `Abra quando ${c.quando}`;
      $("cartaTexto").textContent = c.texto;
      $("cartaAssinatura").textContent = `com amor, ${D.deQuem} 💛`;
      dialogo.showModal();
      lidas.add(i);
      salvarLidas([...lidas]);
      b.classList.add("lida");
    });
    $("envelopes").appendChild(b);
  });
  $("fecharCarta").addEventListener("click", () => dialogo.close());
  dialogo.addEventListener("click", (e) => { if (e.target === dialogo) dialogo.close(); });

  // ---------- Pote de motivos ----------
  let ultimo = -1;
  $("botaoPote").addEventListener("click", () => {
    let i;
    do { i = Math.floor(Math.random() * D.motivos.length); } while (i === ultimo && D.motivos.length > 1);
    ultimo = i;
    const pote = $("botaoPote");
    const motivo = $("motivo");
    pote.classList.remove("sacudir"); void pote.offsetWidth; pote.classList.add("sacudir");
    motivo.classList.remove("novo"); void motivo.offsetWidth; motivo.classList.add("novo");
    motivo.textContent = D.motivos[i];
  });

  // ---------- Abraço ----------
  const botaoAbraco = $("botaoAbraco");
  let inicioAbraco = 0;
  let timerAbraco = null;
  const emojis = ["💛", "🧡", "💗", "🤍", "✨"];

  function soltarCoracao() {
    const r = botaoAbraco.getBoundingClientRect();
    const c = document.createElement("span");
    c.className = "coracaozinho";
    c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    c.style.left = r.left + r.width / 2 + (Math.random() - 0.5) * r.width + "px";
    c.style.top = r.top + "px";
    c.style.setProperty("--dx", (Math.random() - 0.5) * 160 + "px");
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2500);
  }

  function comecarAbraco(e) {
    e.preventDefault();
    if (timerAbraco) return;
    inicioAbraco = Date.now();
    botaoAbraco.classList.add("segurando");
    if (navigator.vibrate) navigator.vibrate(40);
    timerAbraco = setInterval(() => {
      soltarCoracao();
      const s = Math.floor((Date.now() - inicioAbraco) / 1000);
      $("contadorAbraco").textContent = s < 3 ? "apertando…" : `${s} segundos de abraço 🤍`;
    }, 180);
  }

  function pararAbraco() {
    if (!timerAbraco) return;
    clearInterval(timerAbraco);
    timerAbraco = null;
    botaoAbraco.classList.remove("segurando");
    const s = Math.round((Date.now() - inicioAbraco) / 1000);
    $("contadorAbraco").textContent =
      s >= 3 ? `Abraço de ${s}s enviado. Recebido do outro lado 💌` : "Mais forte! Segura um pouquinho mais.";
  }

  botaoAbraco.addEventListener("pointerdown", comecarAbraco);
  ["pointerup", "pointerleave", "pointercancel"].forEach((ev) => botaoAbraco.addEventListener(ev, pararAbraco));
  botaoAbraco.addEventListener("keydown", (e) => { if (e.key === " " || e.key === "Enter") comecarAbraco(e); });
  botaoAbraco.addEventListener("keyup", pararAbraco);
})();
