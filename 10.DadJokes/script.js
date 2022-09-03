let refresh = document.querySelector('.refresh');
let content = document.querySelector('.content');

refresh.addEventListener('click',generate);

async function generate(){
    let response = await fetch('https://icanhazdadjoke.com/',{
        method:'GET',
        headers:{
            Accept:'application/json',
        }
    });

    let res = await response.json();
    content.textContent = res.joke;
}