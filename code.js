// ==UserScript==
// @name Gigachader
// @icon https://static2.strzelce360.pl/data/wysiwig/wqtv1fum7knmhdb.jpg
// @author Scorbunny
// @namespace   https://github.com/Scorbunny10/Gigachader/tree/main
// @version     1.2
// @description Zgigachaduj wszyskie zdjęcia na stronach
// @include http://*/*
// @include https://*/*
// @grant GM_addStyle
// @updateURL https://scorbunny10.github.io/Gigachader/
// @downloadURL https://scorbunny10.github.io/Gigachader/
// @homepage https://raw.github.com/Scorbunny10/Gigachader/tree/main
// @supportURL https://github.com/Scorbunny10/Gigachader/issues
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

            console.log("Gigachaded");

// Rozszerzenie to działa na TamperMonkey
