/* PS Cleaning — vanilla JS. No dependencies. */

/* ============ CONFIG — edit these ============
   formEndpoint: paste your Formspree URL (e.g. https://formspree.io/f/xxxxxxx).
                 While empty, the form opens a pre-filled email (mailto) instead.
   email:        where the mailto fallback is sent.
   phoneDigits:  10 digits, e.g. "2035551234". While empty, Call/Text buttons stay inactive
                 and the placeholder number is shown. */
const CONFIG = {
  formEndpoint: '',
  email: 'hello@REPLACE-WITH-YOUR-EMAIL.com',
  phoneDisplay: '(203) XXX-XXXX',
  phoneDigits: ''
};

/* ============ TRANSLATIONS ============
   English lives in the HTML (default text) and is read from the page on load,
   so `en` below only holds strings that are not in the HTML. Edit copy in index.html (EN)
   or here (PT / ES). Keys match the data-i18n attributes. */
const translations = {
  en: {
    title: 'PS Cleaning | Professional House Cleaning',
    desc: 'Professional residential cleaning services with attention to detail, reliable service and personalized care.',
    baAlt: 'Before and after cleaning: {room}',
    mailSub: 'Free estimate request – PS Cleaning',
    mail: 'Your email app is opening with your request. Just press send.',
    ok: 'Thank you! We’ll be in touch soon.',
    err: 'Something went wrong. Please try again or call us.'
  },
  pt: {
    title: 'PS Cleaning | Limpeza Residencial Profissional',
    desc: 'Serviços profissionais de limpeza residencial com atenção aos detalhes, confiança e cuidado personalizado.',
    baAlt: 'Antes e depois da limpeza: {room}',
    mailSub: 'Pedido de orçamento gratuito – PS Cleaning',
    mail: 'Seu aplicativo de e-mail está abrindo com o seu pedido. Basta enviar.',
    ok: 'Obrigada! Entraremos em contato em breve.',
    err: 'Algo deu errado. Tente novamente ou ligue para nós.',
    nHome: 'Início', nSvc: 'Serviços', nWork: 'Antes e Depois', nAbout: 'Sobre', nRev: 'Avaliações', nContact: 'Contato',
    cta: 'Peça um Orçamento Grátis', menu: 'Menu', langLbl: 'Idioma', close: 'Fechar',
    h1: 'Uma Casa Mais Limpa. Um Você Mais Feliz.',
    heroP: 'Limpeza residencial profissional, com o cuidado, a constância e a atenção que a sua casa merece.',
    viewWork: 'Veja Nosso Trabalho', trust: 'Confiável • Detalhista • Profissional',
    svH: 'Limpeza Sem Complicação', svP: 'Serviços de limpeza pensados para a sua casa e a sua rotina.',
    s1t: 'Limpeza Regular', s1d: 'Limpeza de rotina para manter a casa fresca, organizada e confortável.',
    s2t: 'Limpeza Profunda', s2d: 'Limpeza mais detalhada, focada em sujeira acumulada, cantos esquecidos e superfícies que pedem atenção extra.',
    s3t: 'Limpeza de Mudança (Entrada / Saída)', s3d: 'Limpeza para imóveis antes da mudança ou depois que você sai.',
    s4t: 'Limpeza de Cozinha', s4d: 'Limpeza detalhada de bancadas, pias, fogões, armários por fora e demais superfícies da cozinha.',
    s5t: 'Limpeza de Banheiro', s5d: 'Limpeza e higienização de pias, box, banheiras, espelhos, vasos sanitários e superfícies do banheiro.',
    s6t: 'Quartos e Áreas de Estar', s6d: 'Tirar o pó, aspirar, limpar superfícies, organizar e renovar o ambiente.',
    baH: 'Veja a Diferença', baP: 'Transformações reais que mostram o que uma limpeza cuidadosa pode fazer.',
    r1: 'Cozinha', r2: 'Sala de Estar', r3: 'Quarto', r4: 'Banheiro',
    baNote: 'Imagens representativas utilizadas para ilustrar resultados típicos de limpeza.',
    abH: 'Limpeza Feita com Carinho',
    abP1: 'Na PS Cleaning, acreditamos que uma casa limpa deve ser tranquila, confortável e acolhedora. Chegamos em cada casa com cuidado, atenção aos detalhes e respeito por quem mora nela.',
    abP2: 'Seja para uma limpeza de rotina ou uma renovação mais profunda, nosso objetivo é simples: deixar o seu espaço lindamente limpo.',
    abPh: 'Foto da equipe em breve',
    whyH: 'Por Que Escolher a PS Cleaning',
    w1t: 'Atenção aos Detalhes', w1d: 'Cuidamos dos pequenos detalhes que fazem uma casa parecer realmente limpa.',
    w2t: 'Serviço Confiável', w2d: 'Comunicação clara e um serviço em que você pode confiar na hora de agendar.',
    w3t: 'Limpeza Personalizada', w3d: 'Cada casa é diferente, por isso a limpeza pode ser adaptada às necessidades de cada espaço.',
    w4t: 'Respeito pela Sua Casa', w4d: 'Sua casa e seus pertences são tratados com cuidado e respeito.',
    rvH: 'O Que Nossos Clientes Dizem', rvSoon: 'Avaliação de cliente em breve.',
    arH: 'Orgulhosamente Atendendo Nossa Comunidade', arP: 'Atendemos casas em toda a nossa comunidade local em Connecticut.',
    ctH: 'Pronto para uma Casa Mais Limpa?', ctP: 'Conte um pouco sobre a sua casa e vamos ajudar você a encontrar o serviço de limpeza ideal.',
    call: 'Ligar', text: 'Enviar Mensagem',
    fName: 'Nome', fPhone: 'Telefone', fEmail: 'E-mail', fCity: 'Cidade', fType: 'Tipo de Limpeza', fSel: 'Selecione',
    t3: 'Mudança (Entrada / Saída)', t4: 'Limpeza Única', t5: 'Outro',
    fBeds: 'Quartos', fBaths: 'Banheiros', fDate: 'Data Preferida', fMsg: 'Mensagem', fSend: 'Solicitar Meu Orçamento Grátis',
    ftTag: 'Limpeza Residencial Profissional', ftNav: 'Explorar', ftSvc: 'Serviços', ftCt: 'Contato',
    rights: '© 2026 PS Cleaning. Todos os direitos reservados.'
  },
  es: {
    title: 'PS Cleaning | Limpieza Residencial Profesional',
    desc: 'Servicios profesionales de limpieza residencial con atención al detalle, servicio confiable y cuidado personalizado.',
    baAlt: 'Antes y después de la limpieza: {room}',
    mailSub: 'Solicitud de presupuesto gratis – PS Cleaning',
    mail: 'Tu aplicación de correo se está abriendo con tu solicitud. Solo falta enviarla.',
    ok: '¡Gracias! Nos pondremos en contacto pronto.',
    err: 'Algo salió mal. Inténtalo de nuevo o llámanos.',
    nHome: 'Inicio', nSvc: 'Servicios', nWork: 'Antes y Después', nAbout: 'Nosotros', nRev: 'Opiniones', nContact: 'Contacto',
    cta: 'Solicita un Presupuesto Gratis', menu: 'Menú', langLbl: 'Idioma', close: 'Cerrar',
    h1: 'Un Hogar Más Limpio. Un Tú Más Feliz.',
    heroP: 'Limpieza residencial profesional, con el cuidado, la constancia y la atención que tu hogar merece.',
    viewWork: 'Ver Nuestro Trabajo', trust: 'Confiable • Detallista • Profesional',
    svH: 'Limpieza Sin Complicaciones', svP: 'Servicios de limpieza pensados para tu hogar y tu rutina.',
    s1t: 'Limpieza Regular', s1d: 'Limpieza de rutina para mantener la casa fresca, ordenada y cómoda.',
    s2t: 'Limpieza Profunda', s2d: 'Limpieza más detallada para la suciedad acumulada, los rincones olvidados y las superficies que necesitan atención extra.',
    s3t: 'Limpieza de Mudanza (Entrada / Salida)', s3d: 'Limpieza de viviendas antes de mudarte o después de desocuparlas.',
    s4t: 'Limpieza de Cocina', s4d: 'Limpieza detallada de encimeras, fregaderos, estufas, exterior de los gabinetes y demás superficies de la cocina.',
    s5t: 'Limpieza de Baños', s5d: 'Limpieza y desinfección de lavabos, duchas, bañeras, espejos, inodoros y superficies del baño.',
    s6t: 'Recámaras y Áreas de Estar', s6d: 'Quitar el polvo, aspirar, limpiar superficies, ordenar y renovar cada espacio.',
    baH: 'Mira la Diferencia', baP: 'Transformaciones reales que muestran lo que puede lograr una limpieza cuidadosa.',
    r1: 'Cocina', r2: 'Sala', r3: 'Recámara', r4: 'Baño',
    baNote: 'Imágenes representativas utilizadas para ilustrar resultados típicos de limpieza.',
    abH: 'Limpieza Hecha con Cariño',
    abP1: 'En PS Cleaning creemos que un hogar limpio debe sentirse tranquilo, cómodo y acogedor. Llegamos a cada casa con cuidado, atención al detalle y respeto por las personas que viven en ella.',
    abP2: 'Ya sea que necesites una limpieza de rutina o una renovación más profunda, nuestro objetivo es simple: dejar tu espacio hermosamente limpio.',
    abPh: 'Foto del equipo próximamente',
    whyH: 'Por Qué Elegir PS Cleaning',
    w1t: 'Atención al Detalle', w1d: 'Nos enfocamos en los pequeños detalles que hacen que un hogar se sienta realmente limpio.',
    w2t: 'Servicio Confiable', w2d: 'Comunicación clara y un servicio en el que puedes confiar al agendar.',
    w3t: 'Limpieza Personalizada', w3d: 'Cada hogar es diferente, por eso la limpieza se adapta a las necesidades de cada espacio.',
    w4t: 'Respeto por Tu Hogar', w4d: 'Tu hogar y tus pertenencias se tratan con cuidado y respeto.',
    rvH: 'Lo Que Dicen Nuestros Clientes', rvSoon: 'Opinión de cliente próximamente.',
    arH: 'Orgullosos de Servir a Nuestra Comunidad', arP: 'Atendemos hogares en toda nuestra comunidad local de Connecticut.',
    ctH: '¿Listo para un Hogar Más Limpio?', ctP: 'Cuéntanos un poco sobre tu hogar y te ayudaremos a encontrar el servicio de limpieza ideal.',
    call: 'Llamar', text: 'Enviar Mensaje',
    fName: 'Nombre', fPhone: 'Teléfono', fEmail: 'Correo electrónico', fCity: 'Ciudad', fType: 'Tipo de Limpieza', fSel: 'Selecciona una opción',
    t3: 'Mudanza (Entrada / Salida)', t4: 'Limpieza Única', t5: 'Otro',
    fBeds: 'Recámaras', fBaths: 'Baños', fDate: 'Fecha Preferida', fMsg: 'Mensaje', fSend: 'Solicitar Mi Presupuesto Gratis',
    ftTag: 'Limpieza Residencial Profesional', ftNav: 'Explorar', ftSvc: 'Servicios', ftCt: 'Contacto',
    rights: '© 2026 PS Cleaning. Todos los derechos reservados.'
  }
};

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* Capture the English text already in the HTML */
$$('[data-i18n]').forEach(e => (translations.en[e.dataset.i18n] = e.textContent.trim()));
$$('[data-i18n-aria]').forEach(e => (translations.en[e.dataset.i18nAria] = e.getAttribute('aria-label')));

let lang = 'en';
const T = k => translations[lang][k] ?? translations.en[k] ?? '';

function setLang(l, save = true) {
  if (!translations[l]) l = 'en';
  lang = l;
  $$('[data-i18n]').forEach(e => { const v = T(e.dataset.i18n); if (v) e.textContent = v; });
  $$('[data-i18n-aria]').forEach(e => e.setAttribute('aria-label', T(e.dataset.i18nAria)));
  $$('.ba-item').forEach(f => {
    const room = f.querySelector('figcaption').textContent;
    f.querySelector('img').alt = T('baAlt').replace('{room}', room);
  });
  $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
  document.documentElement.lang = l;
  document.title = T('title');
  $('meta[name="description"]').content = T('desc');
  $('#status').textContent = '';
  if (save) try { localStorage.setItem('ps-lang', l); } catch (e) {}
}

$$('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem('ps-lang'); } catch (e) {}
const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
setLang(saved || (translations[browser] ? browser : 'en'), false);

/* Phone placeholders + Call / Text buttons */
$$('[data-phone]').forEach(e => (e.textContent = CONFIG.phoneDisplay));
if (CONFIG.phoneDigits) {
  $('#callBtn').href = 'tel:+1' + CONFIG.phoneDigits;
  $('#textBtn').href = 'sms:+1' + CONFIG.phoneDigits;
}

/* Sticky header + mobile menu */
const hdr = $('#hdr'), burger = $('#burger'), nav = $('#nav');
const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 12);
onScroll();
addEventListener('scroll', onScroll, { passive: true });

const toggleNav = open => {
  nav.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
};
burger.addEventListener('click', () => toggleNav(!nav.classList.contains('open')));
nav.addEventListener('click', e => { if (e.target.closest('a')) toggleNav(false); });
addEventListener('keydown', e => { if (e.key === 'Escape') toggleNav(false); });

/* Scroll reveal */
const rv = $$('.rv');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(x => {
    if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); }
  }), { threshold: 0.12 });
  rv.forEach(e => io.observe(e));
} else rv.forEach(e => e.classList.add('in'));

/* Lightbox (native <dialog>: focus trap + Esc included) */
const lb = $('#lb');
$$('.ba-card').forEach(b => b.addEventListener('click', () => {
  const img = b.querySelector('img');
  $('#lbi').src = img.src;
  $('#lbi').alt = img.alt;
  $('#lbc').textContent = b.parentElement.querySelector('figcaption').textContent;
  lb.showModal();
}));
$('#lbx').addEventListener('click', () => lb.close());
lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });

/* Quote form: Formspree if configured, otherwise a pre-filled email */
const form = $('#form'), status = $('#status');
form.addEventListener('submit', async e => {
  e.preventDefault();
  if (!form.checkValidity()) return form.reportValidity();
  const data = new FormData(form);
  if (CONFIG.formEndpoint) {
    try {
      const r = await fetch(CONFIG.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error();
      form.reset();
      status.textContent = T('ok');
    } catch (err) { status.textContent = T('err'); }
    return;
  }
  const body = [...data].filter(([, v]) => v)
    .map(([k, v]) => `${$(`label[for="${form.elements[k].id}"]`).textContent}: ${v}`).join('\n');
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(T('mailSub'))}&body=${encodeURIComponent(body)}`;
  status.textContent = T('mail');
});
