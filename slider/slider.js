let items = document.querySelectorAll('.slider .item'); // Fixing `querySelectorAll`
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 3;

function loadshow() {
    let stt = 0;

    // Right side elements
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(1000px) rotate(-1deg)`;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    // Left side elements
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(1000px) rotate(1deg)`;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    // Active item (center)
    items[active].style.transform = `translateX(0) scale(1) perspective(1000px) rotate(0deg)`;
    items[active].style.filter = 'blur(0px)';
    items[active].style.opacity = 1;
}

// Event Listeners for Next and Previous buttons
next.addEventListener('click', function () {
    active = (active + 1) % items.length;
    loadshow();
});

prev.addEventListener('click', function () {
    active = (active - 1 + items.length) % items.length;
    loadshow();
});

// Initial Load
loadshow();
