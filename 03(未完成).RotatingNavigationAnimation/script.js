let stream = document.querySelector(".stream");
let cross = document.querySelector(".cross");
let control = document.querySelector(".control");
let Content = document.querySelector(".content-wrapper");

document.body.onclick = function(event){
    let target = event.target;
    if(target === stream){
        // Content.style.transform = "rotateZ(-45deg)";
        control.style.transformOrigin = "top left";
        control.style.transform = "rotateZ(-90deg)";
        control.style.transition = "all 1s";
    }
}