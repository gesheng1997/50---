let sounds = document.querySelectorAll('.sound');

let buttons = document.querySelectorAll('.content');

document.body.onclick = function(event){
    let target = event.target;
    if(target.classList.contains('content')){
        for(let i = 0;i < buttons.length;i++){
            if(buttons[i] == target){
                sounds[i].currentTime = 0;
                sounds[i].play();
                break;
            }
            else{
                sounds[i].currentTime = 0;
            }
        }
    }
}