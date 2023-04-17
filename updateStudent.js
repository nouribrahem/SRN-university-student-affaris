let StudentID = new URLSearchParams(window.location.search);
var id = StudentID.get("id");
var arr = [], newArr = [];

function getData() {
    let data = window.localStorage.getItem("students");
    if (data != null) {
        arr = JSON.parse(data);
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

const deleteButton = document.querySelector('.delete-button');
deleteButton.addEventListener('click', function () {
    const confirmDelete = confirm('Are you sure you want to delete this Student? This move can not be undone!');
    if (confirmDelete) {
        const btnStyleDiv = document.querySelector('.btnStyle');
        getUpdatedArray();
        window.localStorage.setItem('students', JSON.stringify(newArr));
        alert("Student was deleted successfully");
        window.location.replace("ViewStudents.html");

        // window.location.href = "ViewStudents.html";
    }
});

const updateForm = document.querySelector('#form');
updateForm.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the form from submitting

    // Get the form data
    const formData = new FormData(updateForm);
    updateInfo(formData);
    window.localStorage.setItem('students', JSON.stringify(arr));
    alert("Student information updated successfully!");
    window.location.replace("ViewStudents.html");
});

function updateInfo(formData) {
    
    for (let i = 0; i < arr.length; i++) {
        if (id == arr[i].ID) {
            arr[i].fname = formData.get("fname");
            arr[i].lname = formData.get("lname");
            arr[i].ID = formData.get("ID");
            arr[i].level = formData.get("level");
            arr[i].dep = formData.get("dep");
            arr[i].DOB = formData.get("DOB");
            arr[i].email = formData.get("email");
            arr[i].GPA = formData.get("GPA");
            arr[i].gender = formData.get("gender");

        }
    }

}
function getUpdatedArray() {
    let j = 0;
    for (let k = 0; k < arr.length; k++) {
        if (id != arr[k].ID) {
            newArr[j] = arr[k];
            j++;
        }
    }
}


