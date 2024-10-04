const form = document.querySelector('form');
// this usecase will give you empty because you will get the input after when you cick on event right so 
//it should be inside of event
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //will stop sending the result to server

  //value is in string so we change it to parseint and.value is to get the input
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) 
    {
    results.innerHTML = `Please give a valid height ${height}`;}
 else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`; } 
    else
  {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //toFixed(show only two decimal value)
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`;or
    // results.innerHTML = `${bmi}`;
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
      } else {
        category = 'Obesity';
      }
      results.innerHTML = `Your BMI is ${bmi}, which means you are ${category}.`;
    
    }
    

});

