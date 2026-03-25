/**
 * platform-detect.js — Módulo de Detecção de Plataforma
 *
 * Detecta o sistema operacional, navegador e modo de exibição (standalone/browser)
 * do usuário. Expõe um objeto global imutável `Platform` com flags booleanas
 * que os demais módulos do app consultam para adaptar comportamento.
 *
 * Também adiciona classes CSS ao <body> (ex: is-ios, is-android, is-standalone,
 * is-ios-standalone) para permitir estilização condicional via CSS.
 */
const Platform = (() => {
    const ua = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    const isChrome = /Chrome/i.test(ua) && !/Edge|Edg/i.test(ua);
    const isStandalone = window.navigator.standalone === true || 
                         window.matchMedia('(display-mode: standalone)').matches;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) ||
                     window.innerWidth <= 768;

    document.addEventListener('DOMContentLoaded', () => {
        if (isIOS) document.body.classList.add('is-ios');
        if (isAndroid) document.body.classList.add('is-android');
        if (isStandalone) document.body.classList.add('is-standalone');
        if (isIOS && isStandalone) document.body.classList.add('is-ios-standalone');
    });

    return Object.freeze({ isIOS, isAndroid, isSafari, isChrome, isStandalone, isMobile });
})();
