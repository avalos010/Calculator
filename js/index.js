var button = document.getElementsByTagName('button');
var screen = document.querySelector('.screen');

for(var i = 0; i < button.length; i++) {
  button[i].addEventListener("click",function(){
    if(this === button[13]) {
      screen.textContent = "";
    }
    else if(this === button[14]) {
      screen.textContent = eval(screen.textContent);
    }
    else {
      screen.textContent += this.textContent;
    }
  });
}