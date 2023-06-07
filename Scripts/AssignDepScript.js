
let data = new URLSearchParams(window.location.search);

var Studname = data.get("name");
var id = data.get("id");
var level = data.get("level");
var dep = data.get("department");
var gpa = data.get("GPA");

document.getElementById("id").value = id;
document.getElementById("level").value = level;
document.getElementById("name").value = Studname;
document.getElementById("GPA").value = gpa;
console.log(dep);
if (dep != null)
    document.getElementById("department").value = dep;

const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // prevent form submission
    // call your function here
    updateDep();
});
var arr;
function getData() {

    let data = window.localStorage.getItem("students");
    if (data != null) {
        arr = JSON.parse(data);
    }
}

function updateDep() {
    getData();
    
    if(level < 3){
        alert("You can not assign deparment for students in levels less than 3!");
    }else{
        var newDep = document.getElementById("department").value;
        for (let i = 0; i < arr.length; i++) {
            if (id == arr[i].ID) {
                arr[i].dep= newDep;
                console.log(newDep);
            }
        }
        window.localStorage.setItem('students', JSON.stringify(arr));
        console.log(arr);
        alert("Student department successfully assigned!");
        window.location.replace("ViewStudents.html");
    }
    
}



