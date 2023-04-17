let students = [];

let addStudentButton = document.getElementById('submit');

// Add a click event listener to the button
addStudentButton.addEventListener('click', function() {
 
  let firstName = document.getElementById('fname').value;
  let lastName = document.getElementById('lname').value;
  let phoneNumber = document.getElementById('phone_no').value;
  let gpa = document.getElementById('GPA').value;
  let id = document.getElementById('ID').value;
  let level = document.getElementById('level').value;
  let email = document.getElementById('email').value;
  let department = document.getElementById('dep').value;
  let dateOfBirth = document.getElementById('DOB').value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let status = document.querySelector('input[name="status"]:checked').value;

  // Create a new student object
  let student = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    gpa: gpa,
    id: id,
    level: level,
    email: email,
    department: department,
    dateOfBirth: dateOfBirth,
    gender: gender,
    status: status
  };

  
  students.push(student);

  // Clear the form
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('phone_no').value = '';
  document.getElementById('GPA').value = '';
  document.getElementById('ID').value = '';
  document.getElementById('level').value = '';
  document.getElementById('email').value = '';
  document.getElementById('dep').value = '';
  document.getElementById('DOB').value = '';
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.querySelector('input[name="status"]:checked').checked = false;

  // testing
  console.log(students);
});
