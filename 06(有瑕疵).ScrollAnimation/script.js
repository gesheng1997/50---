let WindowWidth = document.documentElement.clientWidth;
let WindowHeight = document.documentElement.clientHeight;

let contents = document.querySelectorAll('.content');
let record = 0;

for(let [index,content] of contents.entries()){
    if(content.getBoundingClientRect().bottom <= WindowHeight) 
        content.style.transform = "translateX(0vw)";
    else{
        record = index;
        break;
    }
}

window.onscroll = function(){
    if(record != 0){
        if(contents[record - 1].getBoundingClientRect().bottom > WindowHeight){
            for(let i = record - 1;i >= 0;i--){
                if(contents[i].getBoundingClientRect().bottom > WindowHeight){
                    if(i % 2 == 0) contents[i].style.transform = 'translateX(-70vw)';
                    else contents[i].style.transform = 'translateX(70vw)'
                }
                else{
                    record = i + 1;
                    break;
                }
            }
        }
    }

    if(contents[record].getBoundingClientRect().bottom <= WindowHeight){
        for(let i = record;i < contents.length;i++){
            if(contents[i].getBoundingClientRect().bottom <= WindowHeight){
                contents[i].style.transform = 'translateX(0vw)';
                if(i == contents.length - 1) record = contents.length;
            }
            else{
                record = i;
                break;
            }
        }
    }
}