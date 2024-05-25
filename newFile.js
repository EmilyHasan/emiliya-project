

const Firstbtn = document.getElementById('Firstbtn');
const Decreasebtn = document.getElementById('Decreasebtn');
const Resetbtn = document.getElementById('Resetbtn');
const Increasebtn = document.getElementById('Increasebtn');

let count = 0

Decreasebtn.onclick = function(){
    count -- ;
    Firstbtn.textContent = count;
}
Increasebtn.onclick= function(){
    count++;
    Firstbtn.textContent = count ;
}
 
Resetbtn.onclick = function(){
count=0 ;
Firstbtn.textContent = count;
}
