/*jslint devel: true */
/*global $, jQuery, alert*/
/*jslint indent: 2*/

(function () {
    'use strict';
console.log("hello world");
$('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});
}());

//minden image-popup class-al rendelkező elemet elrejtünk
// sima javascriptet használunk ehhez:
//[].forEach.call(document.querySelectorAll('.image-popup'),
//                function (el) {
//    el.style.display = 'none';
//});

[]

//ez ugyanazt csinálja mint a fentebbi kód, csa ez a jquery library segítségével:
$('.image-popup').css('display', 'none');
