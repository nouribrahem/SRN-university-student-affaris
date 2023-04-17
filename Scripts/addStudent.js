let students = [];

let addStudentButton = document.getElementById('submit');

// Add a click event listener to the button
addStudentButton.addEventListener('click', function () {

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
    fname: firstName,
    lname: lastName,
    phone_no: phoneNumber,
    GPA: gpa,
    ID: id,
    level: level,
    email: email,
    dep: department,
    DOB: dateOfBirth,
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
  document.getElementsByClassName('depart').value = '';
  document.getElementById('DOB').value = '';
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.querySelector('input[name="status"]:checked').checked = false;

  // Save to local storage
  console.log(students);
  window.localStorage.setItem('students', JSON.stringify(students));
  alert("Student Added Successfully!");
});


function disableDepartment() {
  let level = document.getElementById('level').value;
  if (level == "1" || level == "2") {

    document.getElementById("cs").disabled = true;
    document.getElementById("is").disabled = true;
    document.getElementById("ds").disabled = true;
    document.getElementById("it").disabled = true;
    document.getElementById("ai").disabled = true;
    document.getElementById("swe").disabled = true;
    document.getElementById("dts").disabled = true;
    document.getElementById("bio").disabled = true;
  }
}
