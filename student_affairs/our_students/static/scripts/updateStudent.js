
// function reteriveStudentData() {
//     getData();
    
//     for (let i = 0; i < arr.length; i++) {
//         if (id == arr[i].ID) {
//             document.getElementById("ID").defaultValue = arr[i].ID;

//             document.getElementById("email").value = arr[i].email;
//             document.getElementById("email").defaultValue = arr[i].email;

//             document.getElementById("fname").defaultValue = arr[i].fname;
//             document.getElementById("fname").defaultValue = arr[i].fname;

//             document.getElementById("lname").defaultValue = arr[i].lname;

//             document.getElementById("GPA").defaultValue = arr[i].GPA;
//             document.getElementById("phone_no").defaultValue = arr[i].phone_no;

//             document.getElementById("level").defaultValue = arr[i].level;
//             document.getElementById("DOB").defaultValue = arr[i].DOB;

//             document.getElementById("dep").defaultValue = arr[i].dep;
//             // document.getElementById(arr[i].gender).checked = true;
//         }
//     }

// }

// reteriveStudentData();
// restoreDefaultValuesForEmptyInputs();
// const deleteButton = document.querySelector('.delete-button');
// deleteButton.addEventListener('click', function () {
//     const confirmDelete = confirm('Are you sure you want to delete this Student? This move can not be undone!');
//     if (confirmDelete) {
//         const btnStyleDiv = document.querySelector('.btnStyle');
//         getUpdatedArray();
//         window.localStorage.setItem('students', JSON.stringify(newArr));
//         alert("Student was deleted successfully");
//         window.location.replace("ViewStudents.html");

//         // window.location.href = "ViewStudents.html";
//     }
// });

// const updateForm = document.querySelector('#form');
// updateForm.addEventListener('submit', function (event) {
//     event.preventDefault(); // prevent the form from submitting

//     // Get the form data
//     const formData = new FormData(updateForm);
//     updateInfo(formData);
//     window.localStorage.setItem('students', JSON.stringify(arr));
//     alert("Student information updated successfully!");
//     window.location.replace("ViewStudents.html");
// });

// function restoreDefaultValuesForEmptyInputs() {
//     const inputs = document.querySelectorAll('input');

//     inputs.forEach((input) => {
//         input.addEventListener('blur', (event) => {
//             const target = event.target;
//             var xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function () {
//                 if (this.readyState == 4 && this.status ==
//                     200) {
//                         if (target.value === '') {
//                             target.value = target.defaultValue;
//                             console.log( target.defaultValue);
//                         } else {
//                             target.defaultValue = target.value;
//                         }
//                 }
//             };
//             xhttp.open("GET", `http://127.0.0.1:5500/UpdateStudent.html?`, true);
//             xhttp.send();         

//         });
//     });

// }
// function updateInfo(formData) {
   
//     for (let i = 0; i < arr.length; i++) {
//         if (id == arr[i].ID) {
//             arr[i].fname = formData.get("fname");
//             arr[i].lname = formData.get("lname");
//             arr[i].ID = formData.get("ID");
//             arr[i].level = formData.get("level");
//             arr[i].DOB = formData.get("DOB");
//             arr[i].email = formData.get("email");
//             arr[i].GPA = formData.get("GPA");
//             arr[i].gender = formData.get("gender");

//         }
//     }

// }
// function getUpdatedArray() {
//     let j = 0;
//     for (let k = 0; k < arr.length; k++) {
//         if (id != arr[k].ID) {
//             newArr[j] = arr[k];
//             j++;
//         }
//     }
// }


