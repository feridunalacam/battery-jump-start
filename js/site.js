(function () {
    'use strict';

    const PHONE_DISPLAY = '+1 (302) 579-1996';
    const PHONE_LINK = '+13025791996';
    const BASE_URL = 'https://bostonjumpstart.com';
    const GOOGLE_ADS_ID = 'AW-17959688282';

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GOOGLE_ADS_ID);

    if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}"]`)) {
        const googleTag = document.createElement('script');
        googleTag.async = true;
        googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
        document.head.appendChild(googleTag);
    }

    window.gtag_report_conversion = function (url) {
        let navigated = false;
        const callback = function () {
            if (!navigated && typeof url !== 'undefined') {
                navigated = true;
                window.location.href = url;
            }
        };

        window.gtag('event', 'conversion', {
            send_to: 'AW-17959688282/qhEBCKKA6vUcENqw7PNC',
            event_callback: callback,
            event_timeout: 800
        });

        window.setTimeout(callback, 900);
        return false;
    };

    const routes = {
        'index.html': { type: 'home' },
        '': { type: 'home' },
        'about.html': { type: 'about' },
        'contact.html': { type: 'contact' },
        'privacy.html': { type: 'privacy' },
        'how-to-jump-start-a-car.html': { type: 'blog' },
        'car-battery-service.html': { type: 'carService' },
        'boston-jump-start.html': { type: 'area', area: 'Boston' },
        'cambridge-jump-start.html': { type: 'area', area: 'Cambridge' },
        'somerville-jump-start.html': { type: 'area', area: 'Somerville' },
        'brookline-jump-start.html': { type: 'area', area: 'Brookline' },
        'quincy-jump-start.html': { type: 'area', area: 'Quincy' }
    };

    const copy = {
        es: {
            langName: 'English', langCode: 'en', locale: 'es_US', htmlLang: 'es',
            servicePageLabel: 'Servicio de batería',
            privacyLabel: 'Política de privacidad',
            nav: ['Inicio', 'Nosotros', 'Cómo pasar corriente', 'Contacto'],
            paths: ['index.html', 'about.html', 'how-to-jump-start-a-car.html', 'contact.html'],
            service: 'Arranque de batería', price: '$129', badge: 'Servicio móvil 24/7',
            allAreas: 'Boston • Cambridge • Somerville • Brookline • Quincy',
            footerLine: 'Servicio móvil de arranque de batería 24/7 en Boston y comunidades cercanas',
            copyright: '© 2026 Boston Jump Start. Todos los derechos reservados.',
            callNow: 'Llamar ahora', whatsapp: 'Escribir por WhatsApp', fixed: 'Precio fijo, sin cargos ocultos',
            home: {
                title: 'Arranque de batería en Boston $129 | Servicio móvil 24/7',
                desc: 'Servicio móvil de arranque de batería por $129 en todo Boston y comunidades cercanas. Disponible 24/7. Llame al +1 (302) 579-1996.',
                h1: 'Arranque de batería <span>$129</span>',
                sub: 'Un servicio, un precio en todo Boston.<br>Llámenos y llegaremos hasta su ubicación.',
                priceLabel: 'Precio fijo — Un solo servicio', priceNote: 'Día, noche, fines de semana y festivos — sin cargo adicional',
                areasTitle: 'Área de servicio', areasSub: 'Atendemos todos los vecindarios de Boston y comunidades cercanas, las 24 horas',
                intentTitle: 'Servicio móvil de arranque de batería en Boston',
                intentSub: 'Ayuda profesional para una batería descargada, directamente donde esté su vehículo',
                intentCards: [
                    ['¿Batería descargada?', 'Si la batería de su auto se descargó en casa, el trabajo, un estacionamiento o la calle, llame a Boston Jump Start. Nuestro servicio móvil llega con equipo profesional.'],
                    ['¿Busca ayuda cerca de usted?', 'Ofrecemos servicio local en todos los vecindarios de Boston y comunidades cercanas. Comparta su ubicación por teléfono o WhatsApp y llegaremos directamente.'],
                    ['Equipo profesional de arranque', 'No necesita comprar un arrancador o cargador para una emergencia puntual. Llevamos equipo profesional y arrancamos la batería de su auto de forma segura por un precio fijo de $129.'],
                    ['Servicio de batería de día o de noche', 'Nuestro servicio de carretera está disponible 24/7 para la mayoría de autos, SUV y vehículos ligeros de 12 voltios. Nos especializamos en arranques; no vendemos ni reemplazamos baterías.']
                ],
                neighborhoodsTitle: 'Servicio de arranque en todo Boston',
                neighborhoodsText: 'Atendemos Back Bay, Beacon Hill, Downtown Boston, North End, South End, South Boston, East Boston, Charlestown, Allston, Brighton, Fenway–Kenmore, Mission Hill, Jamaica Plain, Roxbury, Dorchester, Mattapan, Hyde Park, Roslindale, West Roxbury y comunidades cercanas.',
                howTitle: '¿Cómo funciona?', steps: [
                    ['1', 'Llámenos', 'Llame al +1 (302) 579-1996 y comparta su ubicación'],
                    ['2', 'Vamos hasta usted', 'Nuestro equipo móvil se dirige directamente a su vehículo'],
                    ['3', 'Su auto arranca', 'Arrancamos su vehículo de forma segura para que pueda continuar']
                ],
                pricingTitle: 'Un servicio, un precio', pricingSub: 'Nos especializamos en arranques móviles de batería',
                features: ['Servicio móvil en su ubicación', 'El mismo precio de día o de noche', 'Disponibles las 24 horas, los 7 días', 'Todos los vecindarios de Boston y alrededores', 'Sin cargos ocultos'],
                faqTitle: 'Preguntas frecuentes', faqs: [
                    ['¿Atienden durante la noche?', 'Sí. Estamos disponibles las 24 horas, los 7 días, incluidos fines de semana y festivos.'],
                    ['¿El precio es realmente fijo?', 'Sí. Un arranque móvil estándar cuesta $129 en nuestra área de Boston, sin recargos nocturnos ni de fin de semana.'],
                    ['¿Qué zonas atienden?', 'Cubrimos todos los vecindarios de Boston, además de Cambridge, Somerville, Brookline, Quincy y comunidades cercanas.'],
                    ['¿Ofrecen otros servicios de carretera?', 'Nos especializamos en un solo servicio: arranque móvil de vehículos.'],
                    ['¿Qué pasa si el vehículo no arranca?', 'El problema puede estar en la batería, el motor de arranque, el alternador u otro componente. Le explicaremos el resultado y el siguiente paso.'],
                    ['¿Qué vehículos atienden?', 'Atendemos la mayoría de automóviles, SUV y vehículos ligeros de 12 voltios.']
                ],
                finalTitle: 'Arranque en Boston = $129', finalSub: 'Llame ahora para recibir servicio móvil en Boston y comunidades cercanas'
            },
            about: {
                title: 'Nosotros | Boston Jump Start', desc: 'Boston Jump Start ofrece servicio móvil de arranque 24/7 por un precio fijo de $129 en Boston.',
                h1: 'Nosotros', sub: 'Servicio móvil confiable, claro y directo',
                sections: [
                    ['Quiénes somos', 'Boston Jump Start es un servicio de carretera especializado que atiende Boston y comunidades cercanas. Hacemos una cosa: arrancar vehículos de forma segura cuando los conductores necesitan ayuda.'],
                    ['Un servicio: arranque de batería — $129', 'Nuestro precio estándar es de $129 en toda el área de servicio. La tarifa no cambia por la noche, los fines de semana ni los festivos.'],
                    ['¿Por qué elegirnos?', '<ul><li>Precio fijo de $129</li><li>Disponibles 24/7</li><li>Servicio móvil en su ubicación</li><li>Precio claro y sin cargos ocultos</li><li>Atención para la mayoría de autos, SUV y vehículos ligeros</li></ul>'],
                    ['Nuestra área de servicio', 'Cubrimos todos los vecindarios de Boston, incluidos Back Bay, Beacon Hill, Downtown, Dorchester, Roxbury, South Boston, Jamaica Plain, Brighton, Allston, Charlestown, East Boston, Hyde Park, Mattapan, Roslindale y West Roxbury, además de comunidades cercanas.']
                ]
            },
            contact: {
                title: 'Contacto | Boston Jump Start | +1 (302) 579-1996', desc: 'Llame a Boston Jump Start al +1 (302) 579-1996 para servicio móvil 24/7. Precio fijo de $129 en Boston.',
                h1: 'Contacto', sub: 'Díganos dónde está y llegaremos hasta usted', intro: '¿Batería descargada? Llámenos o escríbanos para solicitar servicio móvil.',
                labels: ['Teléfono', 'WhatsApp', 'Horario', 'Área de servicio', 'Precio'],
                values: [PHONE_DISPLAY, 'Enviar mensaje por WhatsApp', 'Las 24 horas, los 7 días', 'Todos los vecindarios de Boston y comunidades cercanas', 'Precio fijo de $129 (sin cargos ocultos)']
            },
            blog: {
                title: 'Cómo pasar corriente a un auto de forma segura | Boston Jump Start', desc: 'Aprenda cómo conectar cables y pasar corriente de forma segura. Para servicio profesional en Boston, llame a Boston Jump Start.',
                h1: 'Cómo pasar corriente a un auto', sub: 'Una guía práctica centrada en la seguridad',
                intro: 'Una batería descargada es común, pero conectar mal los cables puede dañar el vehículo o causar lesiones. Si tiene dudas, deténgase y llame a un profesional.',
                sections: [
                    ['Lo que necesita', '<ul><li>Un vehículo con batería de 12 voltios cargada o un arrancador adecuado</li><li>Cables sin daños y de capacidad correcta</li><li>Protección para los ojos y un lugar seguro y ventilado</li></ul>'],
                    ['Antes de comenzar', '<p>Consulte el manual del propietario. No intente pasar corriente si la batería está rota, tiene fugas, está congelada, hinchada o visiblemente dañada. Mantenga alejadas llamas y chispas.</p>'],
                    ['Conecte los cables en este orden', '<ol><li>Apague ambos vehículos y active los frenos de estacionamiento.</li><li>Conecte la pinza roja al terminal positivo (+) de la batería descargada.</li><li>Conecte la otra pinza roja al terminal positivo (+) de la batería cargada.</li><li>Conecte la pinza negra al terminal negativo (−) de la batería cargada.</li><li>Conecte la última pinza negra a un punto metálico sin pintura del vehículo descargado, lejos de la batería.</li></ol>'],
                    ['Arranque los vehículos', '<p>Encienda el vehículo auxiliar, espere un momento e intente arrancar el vehículo descargado. No accione el motor continuamente. Una vez encendido, desconecte los cables en orden inverso sin dejar que las pinzas se toquen.</p>'],
                    ['Cuándo llamar a un profesional', '<p>Solicite ayuda si no puede identificar los terminales, la batería está dañada, el vehículo requiere un procedimiento especial o el motor sigue sin arrancar.</p>']
                ]
            },
            area: {
                title: a => `Arranque de batería en ${a} $129 | Servicio móvil 24/7`,
                desc: a => `Servicio móvil de arranque por $129 en ${a}. Disponible 24/7. Llame al +1 (302) 579-1996.`,
                sub: a => `Servicio móvil de arranque en todo ${a}.<br>Un servicio, un precio fijo.`,
                heading: a => `Servicio móvil de arranque en ${a}`,
                body: a => `¿Batería descargada en ${a}? Llámenos y comparta su ubicación. Ofrecemos arranque móvil de vehículos en todo ${a} con ayuda clara y directa.`,
                features: a => [`Servicio en todo ${a}`, 'Precio fijo de $129 sin cargos ocultos', 'Disponibles día y noche, los 7 días', 'La mayoría de autos, SUV y vehículos ligeros', 'Atención por teléfono y WhatsApp'],
                priceTitle: 'Precio claro y fijo',
                priceBody: a => `Un arranque móvil estándar en ${a} cuesta $129. No hay recargo nocturno, de fin de semana ni festivo.`,
                final: a => `Arranque en ${a} = $129`
            },
            carService: {
                title: 'Servicio de batería para auto en Boston | Arranque móvil $129',
                desc: '¿Necesita servicio de batería para su auto en Boston? Llegamos hasta usted 24/7 para realizar un arranque por un precio fijo de $129.',
                h1: 'Servicio móvil de batería para autos en Boston',
                sub: 'Ayuda profesional donde se encuentre cuando la batería está descargada.<br><strong>Arranque por precio fijo de $129.</strong>',
                introTitle: 'Servicio de batería que llega hasta usted',
                intro: 'Cuando su vehículo no arranca porque la batería perdió energía, Boston Jump Start lleva el servicio directamente a su ubicación. Nos especializamos en arranques seguros para la mayoría de autos, SUV y vehículos ligeros de 12 voltios.',
                helpTitle: 'Ayuda para problemas comunes de batería',
                help: [
                    ['Batería descargada', 'Si dejó las luces encendidas, el auto estuvo detenido o el frío descargó la batería, realizamos un arranque en el lugar.'],
                    ['El auto no arranca', 'Si escucha clics o el sistema eléctrico está débil, un arranque de batería puede ayudarle a continuar.'],
                    ['Necesita servicio de carretera', 'No necesita pedir una grúa solamente para intentar un arranque. Nuestro servicio llega hasta su vehículo.'],
                    ['Necesita un impulso de batería', 'Llegamos con equipo profesional y realizamos la conexión correcta para su vehículo.']
                ],
                includesTitle: 'Qué incluye el servicio de $129',
                includes: ['Llegada a su ubicación en el área de Boston', 'Arranque profesional de batería de 12 voltios', 'Procedimiento seguro de conexión y encendido', 'Servicio de día o de noche, los 7 días', 'Precio fijo de $129 sin cargos ocultos'],
                honestTitle: 'Servicio de arranque, no reemplazo de batería',
                honest: 'Nuestro servicio de batería consiste específicamente en un arranque móvil. No vendemos ni instalamos baterías nuevas. Si el vehículo no arranca, la causa puede ser la batería, el motor de arranque, el alternador, el cableado u otro problema.',
                finalTitle: '¿Necesita servicio de batería ahora?'
            },
            privacy: {
                title: 'Política de privacidad | Boston Jump Start',
                desc: 'Conozca cómo Boston Jump Start utiliza información del sitio web y tecnologías de medición publicitaria.',
                h1: 'Política de privacidad',
                sub: 'Cómo se utiliza la información en este sitio',
                sections: [
                    ['Información que recopilamos', 'Cuando visita el sitio, servicios como Google Ads pueden recopilar información técnica y de uso, como páginas visitadas, tipo de dispositivo, dirección IP aproximada e interacciones con botones.'],
                    ['Llamadas y WhatsApp', 'Al seleccionar un enlace de teléfono o WhatsApp, su dispositivo se comunica con el proveedor correspondiente. No recopilamos el contenido de sus llamadas ni mensajes mediante este sitio web.'],
                    ['Publicidad y medición', 'Utilizamos Google Ads para medir visitas y clics en botones de llamada relacionados con nuestras campañas. Google puede utilizar cookies u otras tecnologías conforme a sus propias políticas.'],
                    ['Contacto', 'Si tiene preguntas sobre esta política, llame al +1 (302) 579-1996.']
                ]
            }
        }
    };

    const file = location.pathname.split('/').pop();
    const route = routes[file] || routes[''];
    const params = new URLSearchParams(location.search);
    const lang = params.get('lang') === 'es' ? 'es' : 'en';
    const t = copy[lang];

    const phoneButton = (large = false) => `<a href="tel:${PHONE_LINK}" class="btn-cta${large ? ' btn-cta-xl' : ''}">${phoneIcon()} ${large ? PHONE_DISPLAY : `${t.callNow}: ${PHONE_DISPLAY}`}</a>`;
    const whatsappButton = (area = '') => {
        const msg = lang === 'es' ? `Hola, necesito un arranque de batería${area ? ` en ${area}` : ' en el área de Boston'}.` : `Hello, I need a jump start${area ? ` in ${area}` : ' in the Boston area'}.`;
        return `<a href="https://wa.me/13025791996?text=${encodeURIComponent(msg)}" class="btn-whatsapp" target="_blank" rel="noopener">${whatsappIcon()} ${t.whatsapp}</a>`;
    };
    const phoneIcon = () => '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';
    const whatsappIcon = () => '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>';

    function header() {
        return `<header class="header" id="header"><div class="container header-inner">
            <a href="index.html${lang === 'es' ? '?lang=es' : ''}" class="logo"><svg class="logo-icon" viewBox="0 0 40 40" width="36" height="36"><rect x="4" y="8" width="32" height="28" rx="4" fill="#f59e0b"/><rect x="14" y="4" width="12" height="6" rx="2" fill="#f59e0b"/><rect x="6" y="10" width="28" height="24" rx="3" fill="#0f172a"/><polygon points="22,13 16,23 19,23 17,31 25,20 21,20 22,13" fill="#f59e0b"/></svg><span class="logo-text">BOSTON<span>JUMP START</span></span></a>
            <nav class="nav" id="nav">${t.nav.map((n, i) => `<a href="${t.paths[i]}${lang === 'es' ? '?lang=es' : ''}">${n}</a>`).join('')}</nav>
            <div class="header-actions"><a class="language-switch" href="?lang=${t.langCode}" lang="${t.langCode}" aria-label="${t.langName}">${t.langName}</a><a href="tel:${PHONE_LINK}" class="btn-header-call">${phoneIcon()}<span class="call-text">${PHONE_DISPLAY}</span></a><button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button></div>
        </div></header>`;
    }

    function footer() {
        return `<footer class="footer"><div class="container"><div class="footer-top"><div class="footer-brand"><strong>Boston Jump Start</strong><p>${t.footerLine}</p></div><div class="footer-links">${t.nav.map((n, i) => `<a href="${t.paths[i]}${lang === 'es' ? '?lang=es' : ''}">${n}</a>`).join('')}<a href="car-battery-service.html${lang === 'es' ? '?lang=es' : ''}">${t.servicePageLabel}</a><a href="privacy.html${lang === 'es' ? '?lang=es' : ''}">${t.privacyLabel}</a></div><div class="footer-contact"><a href="tel:${PHONE_LINK}">${PHONE_DISPLAY}</a><p>${t.allAreas}</p></div></div><div class="footer-bottom"><p>${t.copyright}</p></div></div></footer><a href="tel:${PHONE_LINK}" class="floating-call" aria-label="${t.callNow}">${phoneIcon()}<span>${t.callNow}</span></a>`;
    }

    function smallHero(h1, sub) { return `<section class="hero hero-small"><div class="container"><h1>${h1}</h1><p class="hero-sub">${sub}</p></div></section>`; }
    function contentSections(sections) { return sections.map(([h, b]) => `<h2>${h}</h2>${b.startsWith('<') ? b : `<p>${b}</p>`}`).join(''); }
    function areaCards() {
        const pages = [['Boston','boston-jump-start.html'],['Cambridge','cambridge-jump-start.html'],['Somerville','somerville-jump-start.html'],['Brookline','brookline-jump-start.html'],['Quincy','quincy-jump-start.html']];
        return pages.map(([a,p]) => `<a href="${p}${lang === 'es' ? '?lang=es' : ''}" class="area-card"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg><h3>${a}</h3></a>`).join('');
    }

    function home() {
        const h = t.home;
        return `<main><section class="hero"><div class="container"><div class="badge">${t.badge}</div><h1>${h.h1}</h1><p class="hero-sub">${h.sub}</p><div class="hero-price-box"><div class="hero-price-label">${h.priceLabel}</div><div class="hero-price-value">$129</div><div class="hero-price-note">${h.priceNote}</div></div><div class="hero-buttons">${phoneButton()}${whatsappButton()}</div></div></section>
        <section class="areas"><div class="container"><h2>${h.areasTitle}</h2><p class="section-sub">${h.areasSub}</p><div class="area-grid">${areaCards()}</div><p class="service-area-note">All Boston neighborhoods / Todos los vecindarios de Boston</p></div></section>
        <section class="intent-section"><div class="container"><h2>${h.intentTitle}</h2><p class="section-sub">${h.intentSub}</p><div class="intent-grid">${h.intentCards.map(card => `<article class="intent-card"><h3>${card[0]}</h3><p>${card[1]}</p></article>`).join('')}</div><div class="neighborhood-copy"><h2>${h.neighborhoodsTitle}</h2><p>${h.neighborhoodsText}</p></div></div></section>
        <section class="steps-section"><div class="container"><h2>${h.howTitle}</h2><div class="steps">${h.steps.map(s => `<div class="step"><span class="step-num">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('')}</div></div></section>
        <section class="pricing"><div class="container"><h2>${h.pricingTitle}</h2><p class="section-sub">${h.pricingSub}</p><div class="price-card"><div class="price-card-inner"><div class="price-tag">${t.service}</div><div class="price-big">$129</div><div class="price-fixed-note">${t.fixed}</div><ul class="price-features">${h.features.map(x=>`<li>✓ ${x}</li>`).join('')}</ul>${phoneButton()}</div></div></div></section>
        <section class="faq"><div class="container"><h2>${h.faqTitle}</h2><div class="faq-list">${h.faqs.map(q=>`<details class="faq-item"><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('')}</div></div></section>
        <section class="final-cta"><div class="container"><h2>${h.finalTitle}</h2><p>${h.finalSub}</p>${phoneButton(true)}</div></section></main>`;
    }

    function about() { const a=t.about; return `<main>${smallHero(a.h1,a.sub)}<section class="content-section"><div class="container"><div class="content-card">${contentSections(a.sections)}<div class="center-cta">${phoneButton()}</div></div></div></section></main>`; }
    function contact() { const c=t.contact; return `<main>${smallHero(c.h1,c.sub)}<section class="content-section"><div class="container"><div class="content-card"><h2>${c.h1}</h2><p>${c.intro}</p><div class="contact-info">${c.labels.map((x,i)=>`<div class="contact-row"><div><strong>${x}</strong><br>${i===0?`<a href="tel:${PHONE_LINK}">${c.values[i]}</a>`:i===1?whatsappButton():c.values[i]}</div></div>`).join('')}</div><div class="center-cta">${phoneButton()}</div></div></div></section></main>`; }
    function blog() { const b=t.blog; return `<main>${smallHero(b.h1,b.sub)}<article class="blog-article"><div class="container"><div class="blog-content"><p class="blog-intro">${b.intro}</p><img src="images/battery-jump-start-1.jpg" width="850" height="638" alt="Jumper cables connected to a car battery" class="blog-img">${contentSections(b.sections.slice(0,3))}<img src="images/battery-jump-start-2.avif" width="1400" height="622" alt="Vehicle jump-start cables" class="blog-img">${contentSections(b.sections.slice(3))}<div class="blog-cta"><h2>${lang==='es'?'¿Prefiere ayuda profesional?':'Prefer professional help?'}</h2><p>${t.home.finalSub}</p>${phoneButton()}</div></div></div></article></main>`; }
    function area() { const a=route.area, x=t.area; return `<main><section class="hero"><div class="container"><div class="badge">${t.badge}</div><h1>${a} ${t.service} <span>$129</span></h1><p class="hero-sub">${x.sub(a)}</p><div class="hero-price-box"><div class="hero-price-label">${t.fixed}</div><div class="hero-price-value">$129</div></div><div class="hero-buttons">${phoneButton()}${whatsappButton(a)}</div></div></section><section class="content-section"><div class="container"><div class="content-card"><h2>${x.heading(a)}</h2><p>${x.body(a)}</p><h2>${lang==='es'?'Lo que incluye':'What You Get'}</h2><ul>${x.features(a).map(v=>`<li>${v}</li>`).join('')}</ul><h2>${x.priceTitle}</h2><p>${x.priceBody(a)}</p><div class="center-cta">${phoneButton()}</div></div></div></section><section class="final-cta"><div class="container"><h2>${x.final(a)}</h2><p>${t.home.finalSub}</p>${phoneButton(true)}</div></section></main>`; }
    function carService() { const c=t.carService; return `<main><section class="hero"><div class="container"><div class="badge">${t.badge}</div><h1>${c.h1}</h1><p class="hero-sub">${c.sub}</p><div class="hero-price-box"><div class="hero-price-label">${t.fixed}</div><div class="hero-price-value">$129</div></div><div class="hero-buttons">${phoneButton()}${whatsappButton('Boston')}</div></div></section><section class="content-section"><div class="container"><div class="service-landing"><h2>${c.introTitle}</h2><p class="service-lead">${c.intro}</p><h2>${c.helpTitle}</h2><div class="intent-grid">${c.help.map(v=>`<article class="intent-card"><h3>${v[0]}</h3><p>${v[1]}</p></article>`).join('')}</div><div class="content-card service-includes"><h2>${c.includesTitle}</h2><ul>${c.includes.map(v=>`<li>${v}</li>`).join('')}</ul></div><div class="honest-service"><h2>${c.honestTitle}</h2><p>${c.honest}</p></div></div></div></section><section class="final-cta"><div class="container"><h2>${c.finalTitle}</h2><p>${t.home.finalSub}</p>${phoneButton(true)}</div></section></main>`; }
    function privacy() { const p=t.privacy; return `<main>${smallHero(p.h1,p.sub)}<section class="content-section"><div class="container"><div class="content-card">${contentSections(p.sections)}</div></div></section></main>`; }

    function meta() {
        let d = route.type === 'home' ? t.home : route.type === 'about' ? t.about : route.type === 'contact' ? t.contact : route.type === 'blog' ? t.blog : route.type === 'carService' ? t.carService : route.type === 'privacy' ? t.privacy : { title:t.area.title(route.area), desc:t.area.desc(route.area) };
        document.documentElement.lang = t.htmlLang;
        document.title = d.title;
        let md = document.querySelector('meta[name="description"]'); if (md) md.content = d.desc;
        document.querySelectorAll('link[rel="canonical"], script[type="application/ld+json"]').forEach(el=>el.remove());
        const canonical = document.createElement('link'); canonical.rel='canonical'; canonical.href=BASE_URL + (file && file !== 'index.html' ? '/' + file : '/') + (lang==='es'?'?lang=es':''); document.head.appendChild(canonical);
        const schema=document.createElement('script'); schema.type='application/ld+json'; schema.textContent=JSON.stringify({'@context':'https://schema.org','@type':'AutomotiveBusiness','name':'Boston Jump Start','telephone':PHONE_LINK,'url':BASE_URL,'priceRange':'$129','areaServed':['Boston','Cambridge','Somerville','Brookline','Quincy'],'openingHours':'Mo-Su 00:00-23:59','makesOffer':{'@type':'Offer','price':'129','priceCurrency':'USD','itemOffered':{'@type':'Service','name':route.type==='carService'?'Mobile Car Battery Service':'Mobile Car Jump Start','serviceType':'Mobile car battery jump-start service'}}}); document.head.appendChild(schema);
    }

    document.addEventListener('DOMContentLoaded', function () {
        if (lang === 'en') {
            return;
        }
        meta();
        const body = route.type==='home'?home():route.type==='about'?about():route.type==='contact'?contact():route.type==='blog'?blog():route.type==='carService'?carService():route.type==='privacy'?privacy():area();
        document.body.innerHTML = header() + body + footer();
        document.dispatchEvent(new Event('site:rendered'));
    });
})();
