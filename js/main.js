function initializeSiteInteractions() {
    if (document.documentElement.dataset.interactionsInitialized === 'true') {
        return;
    }
    document.documentElement.dataset.interactionsInitialized = 'true';

    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    document.querySelectorAll('.language-switch').forEach(function(link) {
        const targetLanguage = link.getAttribute('lang');
        const languageUrl = new URL(window.location.href);
        languageUrl.searchParams.set('lang', targetLanguage);
        link.href = languageUrl.pathname + languageUrl.search + languageUrl.hash;
    });

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', String(nav.classList.contains('open')));
            const spans = hamburger.querySelectorAll('span');
            if (nav.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        nav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }

    var header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            var currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.2)';
            } else {
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
            }
        });
    }

    var floatingCall = document.querySelector('.floating-call');
    if (floatingCall) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 400) {
                floatingCall.style.opacity = '1';
                floatingCall.style.pointerEvents = 'auto';
            }
        });
    }

    document.addEventListener('click', function(event) {
        const callLink = event.target.closest('a[href^="tel:"]');
        if (!callLink || typeof window.gtag_report_conversion !== 'function') {
            return;
        }

        event.preventDefault();
        window.gtag_report_conversion(callLink.href);
    });
}

document.addEventListener('DOMContentLoaded', initializeSiteInteractions);
document.addEventListener('site:rendered', initializeSiteInteractions);
