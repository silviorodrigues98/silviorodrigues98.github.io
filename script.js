document.addEventListener("DOMContentLoaded", function () {
    const text = "Silvio Correa";
    let index = 0;
    const speed = 200; // typing speed in milliseconds

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});