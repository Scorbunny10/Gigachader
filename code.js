// ==UserScript==
// @name        Gigachader
// @icon https://static2.strzelce360.pl/data/wysiwig/wqtv1fum7knmhdb.jpg
// @author Scorbunny
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description Zgigachaduj wszyskie zdjęcia na stronach
// @include http://*/*
// @include https://*/*
// @grant       GM_addStyle
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

// Rozszerzenie to działa na TamperMonkey
