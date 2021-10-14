// ==UserScript==
// @name         Block Farm Club  Moon
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://blockfarm.club/farm/goddess
// @icon         https://www.google.com/s2/favicons?domain=blockfarm.club
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const harvest = document.querySelector("#clock0").innerText;
    if (harvest) {
        var tiempo = new Date(harvest.substring(13, 29));
        var diferencia = new Date(Date.parse(tiempo) - Date.parse(new Date()));
        let str = "";
            if (diferencia.getDay() > 1){
                str = diferencia.getDay() + " dias " + diferencia.getHours() + " horas y " + diferencia.getMinutes() + " minutos";
            }
            else if (diferencia.getDay() == 1){
                str = diferencia.getDay() + " dia " + diferencia.getHours() + " horas y " + diferencia.getMinutes() + " minutos";
                }
            else {
                str = diferencia.getHours() + " horas y " + diferencia.getMinutes() + " minutos";
            }
        var div = document.getElementById('clock0');
        div.innerHTML += "<br>" + str;
    }
})();