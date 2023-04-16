let StudentID = new URLSearchParams(window.location.search);

var id = StudentID.get("id");
console.log(id);
var arr;
function getData() {

    let data = window.localStorage.getItem("students");
    if (data != null) {
        arr = JSON.parse(data);
    }
}

function reteriveStudentData() {
    getData();
    console.log(arr);
   
    for (let i = 0; i < arr.length; i++) {
        if (id == arr[i].ID) {
            console.log("'Found");
            document.getElementById("ID").value = arr[i].ID;
            document.getElementById("email").value = arr[i].email;

            document.getElementById("fname").value = arr[i].fname;
            document.getElementById("lname").value = arr[i].lname;

            document.getElementById("GPA").value = arr[i].GPA;
            document.getElementById("phone_no").value = arr[i].phone_no;

            document.getElementById("level").value = arr[i].level;
            document.getElementById("DOB").value = arr[i].DOB;

            document.getElementById("dep").value = arr[i].dep;
            document.getElementById("gender").value = arr[i].gender;
        }
    }
    
    
}

reteriveStudentData();