/* ==========================================================
   CONFIGURAÇÃO DO CLIENTE
   Este é o ÚNICO arquivo que muda de um cliente para outro.
   (Exemplo: barbearia fictícia "Corte Fino")
   ========================================================== */
window.BIOSITE_CONFIG = {
  // --- Identidade -------------------------------------------
  nome: "Barbearia Corte Fino",
  handle: "@barbeariacortefino",
  logo: "img/logo.svg",          // deixe "" para mostrar a inicial do nome
  capa: "img/capa.svg",

  // --- Cores da marca ---------------------------------------
  // Viram variáveis CSS: brandPrimary -> --brand-primary
  tema: {
    brandPrimary: "#E0C01A",     // cor de destaque (botões, ícones)
    brandOnPrimary: "#0C1325",   // texto em cima da cor de destaque
    brandBg: "#0C1325",          // fundo da página
    brandSurface: "#151E36",     // fundo dos cards
    brandBorder: "#26314F",      // bordas
    brandText: "#F3F5FA",        // texto principal
    brandMuted: "#A3ABC0"        // texto secundário
  },

  // --- WhatsApp (botão principal) ---------------------------
  whatsapp: {
    numero: "5544999999999",     // DDI + DDD + número, só dígitos
    mensagem: "Olá! Vim pelo site e quero agendar um horário.",
    rotulo: "Agendar pelo WhatsApp"
  },

  // --- Redes sociais (linha de botões ao lado do WhatsApp) --
  // tipos aceitos: instagram, tiktok, facebook, youtube, x, website
  redes: [
    { tipo: "instagram", rotulo: "Instagram", handle: "@barbeariacortefino", url: "https://instagram.com/" },
    { tipo: "tiktok",    rotulo: "TikTok",    handle: "@cortefino",          url: "https://tiktok.com/" },
    { tipo: "facebook",  rotulo: "Facebook",  handle: "Corte Fino",          url: "https://facebook.com/" },
    { tipo: "youtube",   rotulo: "YouTube",   handle: "@cortefino",          url: "https://youtube.com/" },
    { tipo: "website",   rotulo: "Website",   handle: "cortefino.com.br",    url: "https://example.com/" }
  ],

  // --- Sobre ------------------------------------------------
  sobre: "Corte, barba e aquele cafezinho. Atendimento com hora marcada, de terça a sábado.",

  // --- Links ------------------------------------------------
  // icone: calendario, tesoura, mapa, tag, presente, link
  links: [
    { icone: "calendario", titulo: "Agendar online",            url: "https://example.com/agenda" },
    { icone: "tesoura",    titulo: "Tabela de serviços e preços", url: "https://example.com/servicos" },
    { icone: "mapa",       titulo: "Como chegar",               url: "https://maps.google.com/" },
    { icone: "presente",   titulo: "Clube de assinatura",       url: "https://example.com/clube" }
  ],

  // --- Avalie no Google -------------------------------------
  avaliacao: {
    titulo: "Gostou do atendimento?",
    texto: "Sua avaliação no Google ajuda outros clientes a nos encontrar. Leva menos de 1 minuto.",
    url: "https://g.page/r/SEU-ID-AQUI/review",
    nota: "4,9",                  // opcional ("" esconde)
    totalAvaliacoes: "212",       // opcional ("" esconde)
    rotulo: "Avaliar no Google"
  },

  // --- Galeria ----------------------------------------------
  galeria: {
    titulo: "Nosso trabalho",
    imagens: [
      { src: "img/galeria-01.svg", legenda: "Corte degradê" },
      { src: "img/galeria-02.svg", legenda: "Barba na navalha" },
      { src: "img/galeria-03.svg", legenda: "Nosso espaço" },
      { src: "img/galeria-04.svg", legenda: "Pigmentação" },
      { src: "img/galeria-05.svg", legenda: "Produtos" },
      { src: "img/galeria-06.svg", legenda: "Dia do noivo" }
    ]
  },

  // --- Rodapé -----------------------------------------------
  rodape: "Feito com BioSite"
};
