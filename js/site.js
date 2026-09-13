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
            event_timeout: 2000
        });

        window.setTimeout(callback, 2100);
        return false;
    };

    const routes = {
        'index.html': { type: 'home' },
        '': { type: 'home' },
        'hakkimda.html': { type: 'about' },
        'about.html': { type: 'about' },
        'iletisim.html': { type: 'contact' },
        'contact.html': { type: 'contact' },
        'blog-aku-takviyesi-nasil-yapilir.html': { type: 'blog' },
        'how-to-jump-start-a-car.html': { type: 'blog' },
        'atasehir-aku-takviyesi.html': { type: 'area', area: 'Boston' },
        'boston-jump-start.html': { type: 'area', area: 'Boston' },
        'kadikoy-aku-takviyesi.html': { type: 'area', area: 'Cambridge' },
        'cambridge-jump-start.html': { type: 'area', area: 'Cambridge' },
        'maltepe-aku-takviyesi.html': { type: 'area', area: 'Somerville' },
        'somerville-jump-start.html': { type: 'area', area: 'Somerville' },
        'umraniye-aku-takviyesi.html': { type: 'area', area: 'Brookline' },
        'brookline-jump-start.html': { type: 'area', area: 'Brookline' },
        'uskudar-aku-takviyesi.html': { type: 'area', area: 'Quincy' },
        'quincy-jump-start.html': { type: 'area', area: 'Quincy' }
    };

    const copy = {
        en: {
            langName: 'Español', langCode: 'es', locale: 'en_US', htmlLang: 'en',
            nav: ['Home', 'About Us', 'How to Jump-Start a Car', 'Contact'],
            paths: ['index.html', 'about.html', 'how-to-jump-start-a-car.html', 'contact.html'],
            service: 'Jump Start', price: '$129', badge: '24/7 Mobile Jump-Start Service',
            allAreas: 'Boston • Cambridge • Somerville • Brookline • Quincy',
            footerLine: '24/7 mobile jump-start service throughout Boston and surrounding communities',
            copyright: '© 2026 Boston Jump Start. All rights reserved.',
            callNow: 'Call Now', whatsapp: 'Message on WhatsApp', fixed: 'Flat rate — no hidden fees',
            home: {
                title: 'Boston Jump Start $129 | 24/7 Mobile Battery Service',
                desc: 'Mobile car jump-start service for a flat $129 throughout Boston and nearby communities. Available 24/7. Call +1 (302) 579-1996.',
                h1: 'Car Jump Start <span>$129</span>',
                sub: 'One service, one price throughout Boston.<br>Call us and we will come to your location.',
                priceLabel: 'Flat Rate — One Service', priceNote: 'Day, night, weekends, and holidays — no extra charge',
                areasTitle: 'Our Service Area', areasSub: 'We serve every Boston neighborhood and nearby communities, 24 hours a day',
                intentTitle: 'Mobile Jump Start Service in Boston',
                intentSub: 'Fast, professional help for a dead car battery—wherever your vehicle is parked',
                intentCards: [
                    ['Dead Car Battery? Need a Jump Start Near Me?', 'If your car battery died at home, at work, in a garage, or on the street, call Boston Jump Start. Our mobile jump start service comes to your location with professional equipment.'],
                    ['Mobile Jump Start Service Near Me in Boston', 'If you searched for a battery jump near me, you are in the right place. We serve every Boston neighborhood and nearby communities. Share your location by phone or WhatsApp and we will come directly to you.'],
                    ['Battery Jump Starter or Battery Booster?', 'You do not need to buy a battery jump starter, car jump starter, or battery booster for a one-time emergency. We bring commercial-grade equipment and perform a safe car battery jump start for a flat $129.'],
                    ['Roadside Battery and Car Battery Service', 'Our battery roadside service is available day or night for most 12-volt cars, SUVs, and light-duty vehicles. We specialize in jump starts; we do not sell or replace batteries.']
                ],
                neighborhoodsTitle: 'Jump Start Service Throughout Boston',
                neighborhoodsText: 'Serving Back Bay, Beacon Hill, Downtown Boston, North End, South End, South Boston, East Boston, Charlestown, Allston, Brighton, Fenway–Kenmore, Mission Hill, Jamaica Plain, Roxbury, Dorchester, Mattapan, Hyde Park, Roslindale, West Roxbury, and surrounding communities.',
                howTitle: 'How It Works', steps: [
                    ['1', 'Call Us', 'Call +1 (302) 579-1996 and share your location'],
                    ['2', 'We Come to You', 'Our mobile team travels directly to your vehicle'],
                    ['3', 'Your Car Starts', 'We safely jump-start your vehicle and get you moving']
                ],
                pricingTitle: 'One Service, One Price', pricingSub: 'We specialize in mobile battery jump starts',
                features: ['Mobile service at your location', 'Same price day or night', 'Available 24 hours a day, 7 days a week', 'All Boston neighborhoods and surrounding areas', 'No hidden service fees'],
                faqTitle: 'Frequently Asked Questions', faqs: [
                    ['Do you come out at night?', 'Yes. We are available 24 hours a day, 7 days a week, including weekends and holidays.'],
                    ['Is the price really fixed?', 'Yes. A standard mobile jump start is $129 throughout our Boston service area, with no night or weekend surcharge.'],
                    ['Which areas do you serve?', 'We cover every Boston neighborhood plus Cambridge, Somerville, Brookline, Quincy, and nearby communities.'],
                    ['Do you provide other roadside services?', 'We specialize in one service: mobile vehicle jump starts.'],
                    ['What if my vehicle still does not start?', 'The issue may involve the battery, starter, alternator, or another component. We will explain the result and recommend the next step.'],
                    ['Which vehicles can you help?', 'We serve most 12-volt passenger cars, SUVs, and light-duty vehicles.']
                ],
                finalTitle: 'Boston Jump Start = $129', finalSub: 'Call now for mobile service anywhere in Boston and surrounding communities'
            },
            about: {
                title: 'About Us | Boston Jump Start', desc: 'Boston Jump Start provides reliable 24/7 mobile car jump-start service for a flat $129 throughout Boston.',
                h1: 'About Us', sub: 'Straightforward, reliable mobile jump-start service',
                sections: [
                    ['Who We Are', 'Boston Jump Start is a focused roadside service serving Boston and surrounding communities. We do one job: safely jump-start vehicles when drivers need help.'],
                    ['One Service: Jump Start — $129', 'Our standard price is a flat $129 throughout the service area. The rate does not change at night, on weekends, or on holidays.'],
                    ['Why Choose Us?', '<ul><li>Flat $129 jump-start price</li><li>Available 24/7</li><li>Mobile service at your location</li><li>Clear pricing with no hidden fees</li><li>Service for most cars, SUVs, and light-duty vehicles</li></ul>'],
                    ['Our Service Area', 'We cover all Boston neighborhoods, including Back Bay, Beacon Hill, Downtown, Dorchester, Roxbury, South Boston, Jamaica Plain, Brighton, Allston, Charlestown, East Boston, Hyde Park, Mattapan, Roslindale, and West Roxbury, plus nearby communities.']
                ]
            },
            contact: {
                title: 'Contact | Boston Jump Start | +1 (302) 579-1996', desc: 'Call Boston Jump Start at +1 (302) 579-1996 for 24/7 mobile jump-start service. Flat $129 throughout Boston.',
                h1: 'Contact Us', sub: 'Tell us where you are and we will come to you', intro: 'Dead battery? Call or message us for mobile jump-start service.',
                labels: ['Phone', 'WhatsApp', 'Hours', 'Service Area', 'Price'],
                values: [PHONE_DISPLAY, 'Send a WhatsApp Message', '24 hours a day, 7 days a week', 'All Boston neighborhoods and surrounding communities', 'Flat $129 (no hidden fees)']
            },
            blog: {
                title: 'How to Jump-Start a Car Safely | Boston Jump Start', desc: 'Learn how to connect jumper cables and safely jump-start a car. For professional mobile service in Boston, call Boston Jump Start.',
                h1: 'How to Jump-Start a Car', sub: 'A practical, safety-first guide',
                intro: 'A dead battery is common, but connecting jumper cables incorrectly can damage a vehicle or cause injury. If you are unsure, stop and call a professional.',
                sections: [
                    ['What You Need', '<ul><li>A vehicle with a charged 12-volt battery or a suitable jump pack</li><li>Undamaged, correctly rated jumper cables</li><li>Eye protection and a safe, ventilated location</li></ul>'],
                    ['Before You Begin', '<p>Check the owner’s manual. Do not attempt a jump start if the battery is cracked, leaking, frozen, swollen, or visibly damaged. Keep flames and sparks away.</p>'],
                    ['Connect the Cables in This Order', '<ol><li>Turn both vehicles off and set the parking brakes.</li><li>Connect the red clamp to the dead battery’s positive (+) terminal.</li><li>Connect the other red clamp to the good battery’s positive (+) terminal.</li><li>Connect the black clamp to the good battery’s negative (−) terminal.</li><li>Connect the final black clamp to an unpainted metal grounding point on the disabled vehicle, away from the battery.</li></ol>'],
                    ['Start the Vehicles', '<p>Start the assisting vehicle, wait briefly, then try the disabled vehicle. Do not crank continuously. Once started, disconnect the cables in reverse order without allowing the clamps to touch.</p>'],
                    ['When to Call a Professional', '<p>Call for help if you cannot identify the terminals, the battery is damaged, the vehicle uses a special jump procedure, or the engine still will not start.</p>']
                ]
            },
            area: {
                title: a => `${a} Jump Start $129 | 24/7 Mobile Service`,
                desc: a => `Flat-rate $129 mobile car jump-start service in ${a}. Available 24/7. Call +1 (302) 579-1996.`,
                sub: a => `Mobile jump-start service throughout ${a}.<br>One service, one flat price.`,
                heading: a => `${a} Mobile Jump-Start Service`,
                body: a => `Dead battery in ${a}? Call us and share your location. We provide mobile vehicle jump starts throughout ${a} and connect drivers with fast, straightforward help.`,
                features: a => [`Service throughout ${a}`, 'Flat $129 price with no hidden fees', 'Available day and night, 7 days a week', 'Most cars, SUVs, and light-duty vehicles', 'Phone and WhatsApp support'],
                priceTitle: 'Clear, Flat-Rate Pricing',
                priceBody: a => `A standard mobile jump start in ${a} is $129. There is no added night, weekend, or holiday surcharge.`,
                final: a => `${a} Jump Start = $129`
            }
        },
        es: {
            langName: 'English', langCode: 'en', locale: 'es_US', htmlLang: 'es',
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
            }
        }
    };

    const file = location.pathname.split('/').pop();
    const route = routes[file] || routes[''];
    const params = new URLSearchParams(location.search);
    const saved = localStorage.getItem('bjs-language');
    const lang = params.get('lang') === 'es' || (!params.get('lang') && saved === 'es') ? 'es' : 'en';
    const t = copy[lang];
    localStorage.setItem('bjs-language', lang);

    const phoneButton = (large = false) => `<a href="tel:${PHONE_LINK}" class="btn-cta${large ? ' btn-cta-xl' : ''}" onclick="return gtag_report_conversion(this.href)">${phoneIcon()} ${large ? PHONE_DISPLAY : `${t.callNow}: ${PHONE_DISPLAY}`}</a>`;
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
            <div class="header-actions"><a class="language-switch" href="?lang=${t.langCode}" lang="${t.langCode}" aria-label="${t.langName}">${t.langName}</a><a href="tel:${PHONE_LINK}" class="btn-header-call">${phoneIcon()}<span class="call-text">${PHONE_DISPLAY}</span></a><button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button></div>
        </div></header>`;
    }

    function footer() {
        return `<footer class="footer"><div class="container"><div class="footer-top"><div class="footer-brand"><strong>Boston Jump Start</strong><p>${t.footerLine}</p></div><div class="footer-links">${t.nav.map((n, i) => `<a href="${t.paths[i]}${lang === 'es' ? '?lang=es' : ''}">${n}</a>`).join('')}</div><div class="footer-contact"><a href="tel:${PHONE_LINK}">${PHONE_DISPLAY}</a><p>${t.allAreas}</p></div></div><div class="footer-bottom"><p>${t.copyright}</p></div></div></footer><a href="tel:${PHONE_LINK}" class="floating-call" aria-label="${t.callNow}">${phoneIcon()}<span>${t.callNow}</span></a>`;
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
    function blog() { const b=t.blog; return `<main>${smallHero(b.h1,b.sub)}<article class="blog-article"><div class="container"><div class="blog-content"><p class="blog-intro">${b.intro}</p><img src="images/aku-takviyesi-1.png" alt="Jumper cables connected to a car battery" class="blog-img">${contentSections(b.sections.slice(0,3))}<img src="images/aku-takviyesi-2.png" alt="Vehicle jump-start cables" class="blog-img">${contentSections(b.sections.slice(3))}<div class="blog-cta"><h2>${lang==='es'?'¿Prefiere ayuda profesional?':'Prefer professional help?'}</h2><p>${t.home.finalSub}</p>${phoneButton()}</div></div></div></article></main>`; }
    function area() { const a=route.area, x=t.area; return `<main><section class="hero"><div class="container"><div class="badge">${t.badge}</div><h1>${a} ${t.service} <span>$129</span></h1><p class="hero-sub">${x.sub(a)}</p><div class="hero-price-box"><div class="hero-price-label">${t.fixed}</div><div class="hero-price-value">$129</div></div><div class="hero-buttons">${phoneButton()}${whatsappButton(a)}</div></div></section><section class="content-section"><div class="container"><div class="content-card"><h2>${x.heading(a)}</h2><p>${x.body(a)}</p><h2>${lang==='es'?'Lo que incluye':'What You Get'}</h2><ul>${x.features(a).map(v=>`<li>${v}</li>`).join('')}</ul><h2>${x.priceTitle}</h2><p>${x.priceBody(a)}</p><div class="center-cta">${phoneButton()}</div></div></div></section><section class="final-cta"><div class="container"><h2>${x.final(a)}</h2><p>${t.home.finalSub}</p>${phoneButton(true)}</div></section></main>`; }

    function meta() {
        let d = route.type === 'home' ? t.home : route.type === 'about' ? t.about : route.type === 'contact' ? t.contact : route.type === 'blog' ? t.blog : { title:t.area.title(route.area), desc:t.area.desc(route.area) };
        document.documentElement.lang = t.htmlLang;
        document.title = d.title;
        let md = document.querySelector('meta[name="description"]'); if (md) md.content = d.desc;
        document.querySelectorAll('link[rel="canonical"], script[type="application/ld+json"]').forEach(el=>el.remove());
        const canonical = document.createElement('link'); canonical.rel='canonical'; canonical.href=BASE_URL + (file && file !== 'index.html' ? '/' + file : '/') + (lang==='es'?'?lang=es':''); document.head.appendChild(canonical);
        const schema=document.createElement('script'); schema.type='application/ld+json'; schema.textContent=JSON.stringify({'@context':'https://schema.org','@type':'AutomotiveBusiness','name':'Boston Jump Start','telephone':PHONE_LINK,'url':BASE_URL,'priceRange':'$129','areaServed':['Boston','Cambridge','Somerville','Brookline','Quincy'],'openingHours':'Mo-Su 00:00-23:59'}); document.head.appendChild(schema);
    }

    document.addEventListener('DOMContentLoaded', function () {
        meta();
        const body = route.type==='home'?home():route.type==='about'?about():route.type==='contact'?contact():route.type==='blog'?blog():area();
        document.body.innerHTML = header() + body + footer() + '<script src="js/main.js"><\/script>';
        document.dispatchEvent(new Event('site:rendered'));
    });
})();
