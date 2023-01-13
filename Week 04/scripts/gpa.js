function getGrades(inputSelector) {
    // get grades from the input box
   let grades =  document.getElementById('grades').value;
    // split them into an array (String.split(','))
    let gradesArray = grades.split(',');
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    let cleanGrades = gradesArray.map(grade =>grade.trim().toUpperCase());
    // return grades
    return cleanGrades
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    let points = 0;
    switch (grade){
        case A:
            ponits = 4.0;
            break;
        case B:
            ponits = 3.0;
            break
        case D:
            ponits = 2.0;
            break;
        case D:
            points = 1.0;
            break;
        default:
            ponits = 0;
    }
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    // calculates the GPA
    const gpa =
      gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    // return the GPA
    return gpa.toFixed(2);
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const outputElement = document.querySelector(selector);
    outputElement.innerHTML = gpa;
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    document.getElementById('grades').value;
    // calculate the gpa from the grades entered
    const gpa = calculateGpa(grades);
    // display the gpa
    outputGpa(gpa, '#ouput');
  }
  document.querySelector('#submitButton').addEventListener('click',clickHandler);
