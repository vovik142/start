let btn = document.querySelector('.btn');
let list = document.querySelector('.list');
btn.addEventListener('click', function(){
let li = document.createElement('li');
li.className += 'none';
let input = document.querySelector('.info');
li.innerHTML = input.value;
input.value=""
list.appendChild (li);
})
