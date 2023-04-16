var arr=[];
var arr2=[];
arr2.push({
    name: "nour", ID: "20202124", status:"active", level: "3", department:"cs"
},{name: "nour", ID: "20202124", status:"active", level: "3", department:"cs"},{name: "nour", ID: "20202524", status:"active", level: "9", department:"it"})
window.localStorage.setItem('students', JSON.stringify(arr2));



function getData(){
    
    let data = window.localStorage.getItem("students");
    if(data != null){
        arr =JSON.parse(data);
    }
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

        cell_1.innerHTML = arr[i].name;
        cell_2.innerHTML = arr[i].ID;
        cell_3.innerHTML = arr[i].status;
        cell_4.innerHTML = arr[i].level;
        cell_5.innerHTML = arr[i].department;
        cell_6.innerHTML = '<div id="actions"><button id="status">Status</button><button id="assign"><a href="UpdateStudent.html" style="color:white;">Update<a/></button><button id="update"><a href="AssignDepartment.html" style="color:white;">Assign Department<a/></button></div>';

    }
}
showData();
