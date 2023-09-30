const parallax = document.getElementById("company");

// Parallax Effect for About
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    // DIV 1 background will move slower than other elements on scroll.
});


// portfolio
(function () {
    "use strict";

    var carousel = document.getElementsByClassName('carousel')[0],
        slider = carousel.getElementsByClassName('carousel_slider')[0],
        items = carousel.getElementsByClassName('carousel_slider_item'),
        prevBtn = carousel.getElementsByClassName('carousel_prev')[0],
        nextBtn = carousel.getElementsByClassName('carousel_next')[0];

    var width, height, totalWidth, margin = 20,
        currIndex = 0,
        interval, intervalTime = 4000;

    function init() {
        resize();
        move(Math.floor(items.length / 2));
        bindEvents();

        timer();
    }

    function resize() {
        width = Math.max(window.innerWidth * .25, 275),
            // height = window.innerHeight * .5,
            totalWidth = width * items.length;

        slider.style.width = totalWidth + "px";

        for (var i = 0; i < items.length; i++) {
            let item = items[i];
            item.style.width = (width - (margin * 2)) + "px";
            item.style.height = height + "px";
        }
    }

    function move(index) {
        if (index < 1) index = items.length;
        if (index > items.length) index = 1;
        currIndex = index;

        for (var i = 0; i < items.length; i++) {
            let item = items[i],
                box = item.getElementsByClassName('carousel_card')[0];
            if (i == (index - 1)) {
                item.classList.add('carousel_slider_item--active');
                box.style.transform = "perspective(1200px)";
            } else {
                item.classList.remove('carousel_slider_item--active');
                box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 30 : -30) + "deg)";
            }
        }

        slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
    }

    function timer() {
        clearInterval(interval);
        interval = setInterval(() => {
            move(++currIndex);
        }, intervalTime);
    }

    function prev() {
        move(--currIndex);
        timer();
    }

    function next() {
        move(++currIndex);
        timer();
    }


    function bindEvents() {
        window.onresize = resize;
        prevBtn.addEventListener('click', () => { prev(); });
        nextBtn.addEventListener('click', () => { next(); });
    }
    init();

})();