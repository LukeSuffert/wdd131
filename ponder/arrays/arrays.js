//  Step 1
const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`  //the html string made from step
}
const stepsHtml = steps.map(listTemplate) // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(''); // set the innerHTML

// Step 2
const grades = ["A", "B", "A"];
const gradeTemplate = (grade) => {
  function gradetogpa(grade) {
    if (grade === "A") return 4.0;
    if (grade === "B") return 3.0;
    return 0.0;
  }
  return `<li>${gradetogpa(grade)}</li>`;
}
const gpasHtml = grades.map(gradeTemplate);
document.querySelector("#grade").innerHTML = gpasHtml.join('');


// Step 3
function gradetogpa(grade) {
  if (grade === "A") return 4.0;
  if (grade === "B") return 3.0;
  return 0;
}
const gpaSum = grades.reduce((total, grade) => total + gradetogpa(grade),0);
const gpaT = gpaSum / grades.length;
document.querySelector("#gpa").innerHTML = gpaT.toFixed(2);

// Step 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filteredFruits = fruits.filter(fruit => fruit.length <6); 
document.querySelector("#fruit").innerHTML = filteredFruits.join(', ');

// Step 5
const numbers = [12, 34, 21, 54];
const luckynumber = 21;
let luckylucky = numbers.indexOf(luckynumber);
document.querySelector("#lucky").innerHTML = `${luckynumber}`;


