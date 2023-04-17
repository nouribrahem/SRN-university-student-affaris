var arr=[];
// var arr2=[];
// arr2.push(
//     {fname: "nour",lname: "Hassan" , ID: "20202124", 
//     status:"active", level: "3", dep:"Computer Science",
//     DOB:"2000-04-03", phone_no:"01009023432",GPA:"3.5",
//     gender:"female",email:"nour@gmail.com" },

//     {fname: "Mohamed",lname: "Hassan" , ID: "20202324", 
//     status:"active", level: "2", dep:"Data Science",
//     DOB:"2000-04-05", phone_no:"0100666632",GPA:"3.1",
//     gender:"male",email:"mm@gmail.com"  }
//     )

function getData(){
    
    let data = window.localStorage.getItem("students");
    if(data != null){
        arr =JSON.parse(data);
    }
}
function updateStatusInStorage(id, status) {
    getData();

    for (let i = 0; i < arr.length; i++) {
        if (id == arr[i].ID) {
            arr[i].status = status;
        }
    }
    window.localStorage.setItem('students', JSON.stringify(arr));

}
function changeStatus(button) {
    var row = button.parentNode.parentNode.parentNode; // get the row element

    var idCell = row.cells[1];
    var statusCell = row.cells[2]; // get the cell containing the status
    var status = statusCell.innerHTML; // get the current status

    if (status === "Active") {
        statusCell.innerHTML = "Inactive"; // change the status
    } else {
        statusCell.innerHTML = "Active"; // change the status back
    }
    updateStatusInStorage(idCell.innerHTML, statusCell.innerHTML);
}
function showData(){
    getData();
    
    var tbl = document.getElementById("students");
    
    for(let i = 0; i < arr.length; i++){
        var row = tbl.insertRow();
        var cell_1 = row.insertCell();
        var cell_2 = row.insertCell();
        var cell_3 = row.insertCell();
        var cell_4 = row.insertCell();
        var cell_5 = row.insertCell();
        var cell_6 = row.insertCell();
        var cell_7 = row.insertCell();
        
        var linkAssignDep = "AssignDepartment.html?" + "name=" + (arr[i].fname+" "+arr[i].lname) + 
        "&id=" +arr[i].ID + "&level="+ arr[i].level + "&department=" + arr[i].dep+"&GPA=" +arr[i].GPA;;
        var linkUpdate = "UpdateStudent.html?" + "&id=" +arr[i].ID;
        cell_1.innerHTML = arr[i].fname+  " " + arr[i].lname;
        cell_2.innerHTML = arr[i].ID;
        cell_3.innerHTML = arr[i].status;
        cell_4.innerHTML = arr[i].level;
        cell_5.innerHTML = arr[i].dep;
        cell_6.innerHTML = arr[i].GPA;
        cell_7.innerHTML = '<div id="actions"><button id="status" onClick = "changeStatus(this)">Status</button><button id="assign">'+
        '<a href="' + linkUpdate+'" style="color:white;">Update<a/></button><button id="update">'+
        '<a href="'+linkAssignDep +'"  style="color:white;">Assign Department<a/></button></div>';

    }
}
showData();
