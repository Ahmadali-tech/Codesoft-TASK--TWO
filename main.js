var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
for (item of btn) {
item.addEventListener('click', (e) => {
let textbtn = e.target.innerText;
if(textbtn=='*'){
    textbtn='*';
}
if(textbtn=='**'){
    textbtn='^';
}
if(textbtn=='AC'){
    textbtn='';
}
screen.value += textbtn;
});
function sin(){
    screen.value=Math.sin(screen.value);
}
function clearScreen() {
    screen.value = ''; 
}
function log(){
    screen.value=Math.log(screen.value);
}
function e(){
    screen.value=2.718288182846;
}
function pow(){
    screen.value=Math.pow(screen.value,2);
   
}
function tan(){
    screen.value=Math.tan(screen.value,2);
   
};
function fact() {
    var f, i, num;
    f = 1;
    num = parseInt(screen.value); 
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    screen.value = f;
}

function bacsp() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
};

function calculate() {
    screen.value = eval(screen.value);
}

}
