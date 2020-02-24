let btn = document.querySelector('.btn');
let list = document.querySelector('.list');
btn.addEventListener('click', function(){
let li = document.createElement('li');
li.className += 'none';
let input = document.querySelector('.info');
li.innerHTML = input.value+'<span class="mark"> x</span>';
input.value=""
list.appendChild (li);
li.addEventListener('click', function(){
  this.style.color = "red";
})
let x = document.querySelector('.mark');
x.addEventListener('click', function(){
  li.parentNode.removeChild(li);
});
})

