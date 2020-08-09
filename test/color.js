function bodycolor(color){
  document.querySelector('body').style.color=color;
}
function bodybackgroundcolor(color){
  document.querySelector('body').style.backgroundColor=color;
}
function addc(self){
  var simple=document.querySelector('body');
  if(document.querySelector('#change').value === 'on'){
    simple.style.backgroundColor='yellow';
    simple.style.color='black';
    document.querySelector('#change').value = 'off';
  } else {
    simple.style.backgroundColor='black';
    simple.style.color='yellow';
    document.querySelector('#change').value = 'on';
  }
}
