let answers = document.querySelectorAll('.answer');
let cards = document.querySelectorAll('.card');
let icons = document.querySelectorAll('.icon');

for(let answer of answers){
    answer.remove();
}

document.body.onclick = function(event){
    let target = event.target;
    if(target.classList.contains('icon')){
        for(let [index,entry] of icons.entries()){
            if(entry == target){
                if(!cards[index].classList.contains('active')){
                    icons[index].innerHTML = "&#xf057";
                    icons[index].style.fontSize = "30px";
                    cards[index].append(answers[index]);
                    cards[index].style.height = "80px";
                }
                else{
                    icons[index].innerHTML = "&#xf107";
                    icons[index].style.fontSize = "22px";
                    answers[index].remove();
                    cards[index].style.height = "40px";
                }
                cards[index].classList.toggle('active');
                icons[index].classList.toggle('active-icon');
            }
        }
    }
}