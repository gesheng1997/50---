let button = document.querySelector(".search-button");
let text = document.querySelector(".text-bar");

let state = true;

button.onclick = function(){
    if(state == true){
        text.style.width = "170px";
        text.style.padding = "11px 15px 13px 15px"
        state = !state;
        text.focus();
    }
    else{
        text.style.width = "0px";
        text.style.padding = "11px 0px 13px 0px"
        state = !state;
    }
}