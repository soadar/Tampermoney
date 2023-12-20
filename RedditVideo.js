// ==UserScript==
// @name         Reddit Video 1N07 Mod By Soadar2
// @autor        1N07
// @edit: 		 Soadar
// @namespace    Soadar
// @version      0.7
// @description  Lets you download reddit videos with sound using RedditSave
// @author       1N07
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js
// @match        https://www.reddit.com/*
// @exclude      https://www.reddit.com/message/*
// @icon         https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png
// ==/UserScript==

(function() {
    'use strict';
    AddButtons();
    setInterval(AddButtons, 1000);

    function AddButtons() {
        let vids = $("shreddit-player");
        if(vids.length > 0 && !vids.find("source").prop("src").includes("external-preview.redd.it"))
        {
            let player = document.querySelectorAll('[post-type="video"')
            player.forEach((video) => {
                const menu = video.shadowRoot.querySelector('[name="comments-action-button"]').parentNode.parentNode;
                if (menu.querySelector(".downloadVid") === null) {
                    video.style.marginBottom = "60px";
                    const urlCompleta = 'https://redditsave.com/info?url=https://www.reddit.com' + video.permalink;
                    const btn = document.createElement("a");
                    btn.innerHTML = "Download";
                    btn.setAttribute("style", "float: right;");
                    btn.setAttribute("width", "50px");
                    btn.style.padding= "5px";
                    btn.style.cursor = "pointer"
                    btn.style.backgroundColor ="#88D966";
                    btn.style.color ="black";
                    btn.classList.add("downloadVid");
                    btn.onclick = () => window.open(urlCompleta, "_blank");;
                    menu.lastElementChild.parentNode.append(btn);
                }
            });
        }
    }
})();
