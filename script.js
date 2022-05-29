
const buttons = document.querySelectorAll(".ripple");

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Where do we click on viewport (X/Y axis)
        const x = e.clientX;
        const y = e.clientY;
        //console.log(x, y);

        // Position of the button itself (It'll be the same value always)
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        //Where do we click inside of the button (X/Y or TOP/LEFT wise)
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');

        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        // (this) doesn't work with the arrow function.
        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    })
})