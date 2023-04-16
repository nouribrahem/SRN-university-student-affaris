let StudentID = new URLSearchParams(window.location.search);

var id = StudentID.get("id");
var arr,newArr = [];

function getData() {
    let data = window.localStorage.getItem("students");
    if (data != null) {
        arr = JSON.parse(data);
    }
}
const deleteButton = document.querySelector('.delete-button');
deleteButton.addEventListener('click', function() {
  const confirmDelete = confirm('Are you sure you want to delete this Student? This move can not be undone!');
  if (confirmDelete) {
    const btnStyleDiv = document.querySelector('.btnStyle');
    getUpdatedArray();
    window.localStorage.setItem('students', JSON.stringify(newArr));
    alert("Student was deleted successfully");
    window.location.href = "ViewStudents.html";
  }
});

function getUpdatedArray(){
    getData();
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (id != arr[i].ID) {
           newArr[j] = arr[i];
           j++;          
        }
    }
}
function reteriveStudentData() {
    getData();
   
    for (let i = 0; i < arr.length; i++) {
        if (id == arr[i].ID) {
            document.getElementById("ID").value = arr[i].ID;
            document.getElementById("email").value = arr[i].email;

            document.getElementById("fname").value = arr[i].fname;
            document.getElementById("lname").value = arr[i].lname;

            document.getElementById("GPA").value = arr[i].GPA;
            document.getElementById("phone_no").value = arr[i].phone_no;

            document.getElementById("level").value = arr[i].level;
            document.getElementById("DOB").value = arr[i].DOB;

            document.getElementById("dep").value = arr[i].dep;
            document.getElementById(arr[i].gender).checked = true;
          
        }
    }
    
    
}

reteriveStudentData();