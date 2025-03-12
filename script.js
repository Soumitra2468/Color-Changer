let divs = document.querySelectorAll('div');
let body = document.querySelector('body');

divs.forEach((div) => {
    div.addEventListener('click', (e) => {
       if(e.target.id === 'red') {
           body.style.backgroundColor = 'red';
       } else if(e.target.id === 'green') {
           body.style.backgroundColor = 'green';
       } else if(e.target.id === 'blue') {
           body.style.backgroundColor = 'blue';
       } else if(e.target.id === 'yellow') {
           body.style.backgroundColor = 'yellow';
       }
    })
})