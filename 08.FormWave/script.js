let uletters = document.querySelectorAll('.uletter');
let pletters = document.querySelectorAll('.pletter');

let email = document.querySelector('.email');
let password = document.querySelector('.password');
let form = document.querySelector('.login');

form.addEventListener('focusin',(event) => {
    let target = event.target;
    if(target == email){
        let length = uletters.length;
        let temp = 0;
        uletters[0].parentNode.style.color = "#ADD8E6";
        let timer = setInterval(()=>{
            uletters[temp++].style.top = '0px';
            if(temp == length) clearInterval(timer);
        },50)
    }

    if(target == password){
        let length = pletters.length;
        let temp = 0;
        pletters[0].parentNode.style.color = "#ADD8E6";
        let timer = setInterval(()=>{
            pletters[temp++].style.top = '0px';
            if(temp == length) clearInterval(timer);
        },50)
    }
});

form.addEventListener('focusout',(event) => {
    let target = event.target;
    if(target == email){
        let length = uletters.length;
        let temp = 0;
        uletters[temp].parentNode.style.color = "white";
        let timer = setInterval(()=>{
            uletters[temp++].style.top = '35px';
            if(temp == length) clearInterval(timer);
        },50)
    }

    if(target == password){
        let length = pletters.length;
        let temp = 0;
        pletters[temp].parentNode.style.color = "white";
        let timer = setInterval(()=>{
            pletters[temp++].style.top = '35px';
            if(temp == length) clearInterval(timer);
        },50)
    }
});