// let counter = 0;

// function count() {
//     counter++;
//     document.querySelector('h1').innerHTML = counter;
//     if (counter % 10 === 0) {
//         alert(`Count is now ${counter}`);
//         counter = 5;
//     }
// }
// document.addEventListener('DOMContentLoaded', function(){
// document.querySelector('.btn').onclick = count;
// });

// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('form').onsubmit = function(){ 
//     const name =  document.querySelector('#name').value;
//     alert(`Hello ${name}`);
//     };
// });

// document.addEventListener('DOMContentLoaded', function (){
// document.querySelector('#red').onclick =  function() {
// document.querySelector('#color').style.color = 'red';
// }




// document.querySelector('#green').onclick =  function() {
// document.querySelector('#color').style.color = 'green';
// }

// document.querySelector('#blue').onclick =  function() {
// document.querySelector('#color').style.color = 'blue';
// }

// });


// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('select').onchange = function() {
//       document.querySelector('#color').style.color = this.value;
//     }
// });
//de

document.addEventListener('DOMContentLoaded', function () {
document.querySelector('form').onsubmit = function (){
  fetch('https://api.exchangerate.host/latest')
  .then(response => response.json())
  .then(data => {
    const currency = document.querySelector('#currency').value;
    const rate = data.rates[currency];
    if(rate !== undefined){
    document.querySelector('#result').innerHTML = `The exhange rate for is ${rate.toFixed(2)}`;
    }else
    document.querySelector('#result').innerHTML = `Information Unavailable`;

  });


  return false;
}






});