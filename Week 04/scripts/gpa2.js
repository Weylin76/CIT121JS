function getGrades(inputSelector) {
    // get grades from the input box
    let grades = document.getElementById('#grades').value;
    // split them into an array (String.split(','))
    let gradeArray = grades.spilt(',');
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    let cleanGrade = gradeArray.trim().toUpperCase();
    // return grades
    // return ASW38K,I8KcleanGrade;
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    points = 0
    if (grade === 'A'){
        points = 4
    } else if (grade === 'B'){
        points = 3
    } else if (grade === 'C'){
        points = 2
    } else if (grade === 'D'){
        points = 1
    } else {points = 0}
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    const gradesPoints = grades.map((grade) => lookupGrade(grade));
    // calculates the GPA
    let gpa = gradesPoints.reduce((a,cv) => (a + cv)/gradesPoints.length());
    // return the GPA
    return gpa;
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
    const output = outputGpa(gpa, '#ouput')
  }

  document.getElementById('submitButton').addEventListener('click', clickHandler);