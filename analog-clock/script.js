const d = 6;
const hr = document.querySelector("hr");
const min = document.querySelector("min");
const sec = document.querySelector("sec");



setInterval(() => {
    var today = new Date();
    var hour = today.getHours() * 30;
    var minutes = today.getMinutes() * d;
    var seconds = today.getSeconds() * d;
    var h = hour + (minutes / 12);
    hr.style.transform = 'rotateZ(${h}deg)';
    min.style.transform = 'rotateZ(${minutes}deg)';
    sec.style.transform = 'rotateZ(${seconds}deg)';
});