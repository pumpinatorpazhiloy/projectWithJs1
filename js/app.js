(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (() => {
        const explosionWillBe = "2023-11-26";
        function getTimeRemainig(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date), days = Math.floor(t / (1e3 * 60 * 60 * 24)), hours = Math.floor(t / (1e3 * 60 * 60) % 24), minutes = Math.floor(t / 1e3 * 60 % 60), seconds = Math.floor(t / 1e3 % 60);
            return {
                totaL: t,
                days,
                hours,
                minutes,
                seconds
            };
        }
        function getZero(num) {
            if (num >= 0 && num < 10) return `0${num}`; else return num;
        }
        function setClock(selector, endtime) {
            const timer = document.querySelector(selector), days = timer.querySelector("#days"), hours = timer.querySelector("#hours"), minutes = timer.querySelector("#minutes"), seconds = timer.querySelector("#seconds"), timeInterval = setInterval(updateClock, 1e3);
            updateClock();
            function updateClock() {
                const t = getTimeRemainig(endtime);
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);
                if (t.total <= 0) clearImmediate(timeInterval);
            }
        }
        setClock(".timer-hero__timer", explosionWillBe);
        function playSound() {
            const btn = document.querySelector("button");
            btn.addEventListener("click", (() => {
                document.querySelector("audio").play();
            }));
        }
        playSound();
    }));
    window["FLS"] = true;
    isWebp();
})();