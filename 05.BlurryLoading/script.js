let process = document.querySelector('.process');
let background = document.querySelector('.background');

let percentage = 0;
process.textContent = `${percentage}%`;
process.style.opacity = "1";

window.onload = function(){
    let timer = setInterval(() => {
        percentage += 1;
        process.textContent = `${percentage}%`;
        process.style.opacity = `${(100 - percentage)/100}`;
        background.style.filter = `blur(${5 * (100 - percentage) / 100}vw)`;

        if(percentage == 100) clearInterval(timer);
    },30);
}