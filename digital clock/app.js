const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

// setInterval(function (){},1000 )
    

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// here this 1000 defining the seconds after you get time on your screen

