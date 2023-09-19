
let aut = document.querySelector('.aut');
let But = document.querySelector('.but');
let nu = document.querySelector('.num');
let a = '';
let p = 0;

But.onclick = () => {
let n = parseInt(nu.value);
 
while (p < 1) {
    let p1 = 0; 
    while (p1 < n) {
        a += '#';  
        p1++;
    }
    a += '<br>';
    p++;
}
aut.innerHTML = a;
}



let one = +prompt('введите число');
let two = 0;

while(one >= two){
    console.log(one);
    one--;
}



let c = false;
const Button = document.querySelector("#Button");

Button.onclick = () => {
  const numer = document.querySelector("#numer").value;
  
  if (numer === "6") {
    alert("Правильно! 2 + 2 * 2 = 6");
    c = true;
  } else {
    alert("Неправильно, попробуйте еще раз.");
  }
};





let t = +prompt('1-е');
let y = +prompt('2-е');
for (let i = t; i<=y; i+=4){
    console.log(i);
}
