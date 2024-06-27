// Manifesto opening
document.addEventListener('DOMContentLoaded', function () {

    const manifesto = document.getElementById('manifesto');
    const headManifesto = document.getElementById('headManifesto');
    const textManifesto = document.getElementById('textManifesto');

    const paperFx1 = document.getElementById('paperFx1');
    const paperFx2 = document.getElementById('paperFx2');

    const fadeIn = (el, timeout, display) => {
        el.style.opacity = 0;
        el.style.display = display || 'block';
        el.style.transition = `opacity ${timeout}ms`;
        setTimeout(() => {
            el.style.opacity = 1;
        }, 10);
    };

    const fadeOut = (el, timeout) => {
        el.style.opacity = 1;
        el.style.transition = `opacity ${timeout}ms`;
        el.style.opacity = 0;

        setTimeout(() => {
            el.style.display = 'none';
        }, timeout);
    };

    let textManifestoView = false

    headManifesto.addEventListener('click', () => {
        if (textManifestoView == false) {
            paperFx1.play();
            fadeIn(textManifesto, 400, 'block');
            manifesto.style["boxShadow"] = "none";
            textManifestoView = true
            manifesto.style.top = "1%";
        } else {
            paperFx2.play();
            fadeOut(textManifesto, 200);
            textManifestoView = false
            manifesto.style["boxShadow"] = "-15px 16px 0px 0px #FFF, 0px 0px 10px 1px rgba(0, 0, 0, 0.05)";
            manifesto.style.top = "60%";
        };
    });
})