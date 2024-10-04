const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if (e.target.id==="grey") {
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==="white") {
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==="yellow") {
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==="blue") {
            body.style.backgroundColor=e.target.id;
        }
    })
});





// const buttons=document.querySelectorAll('.button')
// const body=document.querySelector('body')

// buttons.forEach(function(button){
//     button.addEventListener('click',function(e){
//         switch (e.target.id) {
//           case 'grey':
//           body.style.backgroundColor=e.target.id;
//             break;
//           case 'white':
//           body.style.backgroundColor=e.target.id;
//             break;
//           case 'purple':
//           body.style.backgroundColor=e.target.id;
//             break;
//           case 'yellow':
//           body.style.backgroundColor=e.target.id;
//             break;
//         }
//     })
// });

// document.getElementById('grey').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'grey';
//   });
  
//   document.getElementById('white').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'white';
//   });
  
//   document.getElementById('blue').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'blue';
//   });
  
//   document.getElementById('yellow').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'yellow';
//   });
  