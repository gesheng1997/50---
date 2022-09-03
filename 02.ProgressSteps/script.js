let step = 0;

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let points = document.querySelectorAll('.content');
let lines = document.querySelectorAll('.line2');

prev.style.backgroundColor = "#E0E0E0";
prev.style.cursor = 'not-allowed'

function control(){
    prev.addEventListener('click',prevAction);//为prev按钮添加click监听器
    prev.addEventListener('mousedown',function(){
        prev.style.width = '95px';
        prev.style.height = '38px';
        prev.style.borderRadius = '8px';
        return false;
    });
    prev.addEventListener('mouseup',function(){
        prev.style.width = '100px';
        prev.style.height = '40px';
        prev.style.borderRadius = '10px';
        return false;
    });

    next.addEventListener('click',nextAction);//为next按钮添加click监听器
    next.addEventListener('mousedown',function(){
        next.style.width = '95px';
        next.style.height = '38px';
        next.style.borderRadius = '8px';
    });
    next.addEventListener('mouseup',function(){
        next.style.width = '100px';
        next.style.height = '40px';
        next.style.borderRadius = '10px';
    });
}

function prevAction(){//设置click事件发生时的行为
    if(step != 0){//非第一步时，点击prev执行将当前步的边框颜色以及对应的连线修改为暗色表示退一步
        points[step].style.borderColor = "#E0E0E0";
        lines[step - 1].style.width = "0px";
        step--;//这个step一定要放在此处，一是保证lines的索引不会越界，二是保证在下一个step==0？的判断中间能够立马将prev按钮变成暗色
    }

    if(step == 0){//当走到第一步时，将prev按钮变成暗色且改变游标类型保证提醒用户已经到了第一步
        prev.style.backgroundColor = "#E0E0E0";
        prev.style.cursor = 'not-allowed'
    }

    if(step != 3){//用于控制保证在最后一个step，点击了prev按钮退后一步时，next按钮的样式能够恢复到正常的状态
        next.style.backgroundColor = "#3498DB";
        next.style.cursor = 'pointer';
    }
}

function nextAction(){//类似于上面的prev 注释略

    if(step != 3){
        points[step + 1].style.borderColor = "#3498DB";
        lines[step].style.width = "100px";
        step++;
    }

    if(step == 3){
        next.style.backgroundColor = "#E0E0E0";
        next.style.cursor = 'not-allowed'
    }

    if(step != 0){
        prev.style.backgroundColor = "#3498DB";
        prev.style.cursor = 'pointer'
    }
}

control();//运行代码