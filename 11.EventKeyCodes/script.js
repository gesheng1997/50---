let notice = document.querySelector('.title .notice');
let title = document.querySelector('.title');

let key = document.querySelector('.key');
let keyCode = document.querySelector('.keyCode');
let code = document.querySelector('.code');
key.remove();
keyCode.remove();
code.remove();

document.body.onkeydown = function(event){
    if(!notice.hidden){
        notice.hidden = true;
        notice.remove();

        title.append(key);
        title.append(keyCode);
        title.append(code);
    }

    key.children[1].textContent = event.key;
    keyCode.children[1].textContent = event.keyCode;
    code.children[1].textContent = event.code;
}