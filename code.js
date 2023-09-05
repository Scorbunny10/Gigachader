// ==UserScript==
// @name        Gigachader
// @icon https://static2.strzelce360.pl/data/wysiwig/wqtv1fum7knmhdb.jpg
// @author Scorbunny
// @namespace   https://github.com/Scorbunny10/Gigachader/tree/main
// @version     1.1
// @description Zgigachaduj wszyskie zdjęcia na stronach
// @include http://*/*
// @include https://*/*
// @grant       GM_addStyle
// @updateURL https://raw.githubusercontent.com/Scorbunny10/Gigachader/main/code.js
// @downloadURL https://raw.githubusercontent.com/Scorbunny10/Gigachader/main/code.js
// @homepage https://raw.github.com/Scorbunny10/Gigachader/tree/main
// @contactURL https://github.com/Scorbunny10/Gigachader/issues
// @supportURL https://github.com/Scorbunny10/Gigachader/issues
// @grant GM_download
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');

  images.forEach(img => {
    const originalWidth = img.offsetWidth;
    const originalHeight = img.offsetHeight;

    img.src = 'https://media.tenor.com/epNMHGvRyHcAAAAC/gigachad-chad.gif';
    img.style.width = originalWidth + 'px';
    img.style.height = originalHeight + 'px';
  });
});
(function() {
    'use strict';

    // Tworzenie przycisku aktualizacji
    var updateButton = document.createElement('button');
    updateButton.innerHTML = 'Aktualizuj Skrypt';
    updateButton.style.marginTop = '10px';
    updateButton.addEventListener('click', function() {
        // Usuwanie skryptu
        var scriptElement = document.querySelector('script[src$="code.js"]');
        if (scriptElement) {
            scriptElement.remove();
        }

        // Pobieranie i dodawanie nowej aktualizacji
        var newScript = document.createElement('script');
        newScript.src = 'https://raw.githubusercontent.com/Scorbunny10/Gigachader/main/code.js'; // Tutaj podaj link do nowej aktualizacji
        document.head.appendChild(newScript);
    });

    // Dodawanie przycisku pod skryptem
    var scriptElement = document.querySelector('script[src$="code.js"]');
    if (scriptElement) {
        scriptElement.parentNode.insertBefore(updateButton, scriptElement.nextSibling);
    }
})();

// Rozszerzenie to działa na TamperMonkey
