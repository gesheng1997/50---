let first = document.querySelector('.first');
let second = document.querySelector('.second');

// document.body.onmouseover = function(event){
//     let target = event.target;
//     if(target.classList.contains('index1')){
//         first.style.width = "70vw";
//         second.style.width = "30vw";
//         second.style.backgroundPosition = "-960px -87px";
//     }

//     if(target.classList.contains('index2')){
//         first.style.width = "30vw";
//         second.style.width = "70vw";
//         second.style.backgroundPosition = "-600px -87px";
//     }
// }

// document.body.onmouseout = function(){
//     first.style.width = "50vw";
//     second.style.width = "50vw";
//     second.style.backgroundPosition = "-960px -87px";
// }

first.onmouseenter = function(event){
    // let target = event.target;
    // if(target.classList.contains('index1')){
        first.style.width = "70vw";
        second.style.width = "30vw";
        second.style.backgroundPosition = "-960px -87px";
}

second.onmouseenter = function(event){
    // if(target.classList.contains('index2')){
        first.style.width = "30vw";
        second.style.width = "70vw";
        second.style.backgroundPosition = "-600px -87px";
    // }
}

document.body.onmouseleave = function(){
    first.style.width = "50vw";
    second.style.width = "50vw";
    second.style.backgroundPosition = "-960px -87px";
}