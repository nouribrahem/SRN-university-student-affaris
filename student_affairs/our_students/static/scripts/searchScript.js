var b = document.querySelector('.status');
function handleForm(event) { event.preventDefault(); }  
button.addEventListener('submit',handleForm);
function updateStatusInStorage(id, status) {
    var xhttp = new XMLHttpRequest();
    var csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    console.log(csrfToken);
    xhttp.open('GET', '/our_students/update_status/' + id + '/', true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('X-CSRFToken', csrfToken);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
            console.log("success");
        }
    };
    var dict = {'id':id, 'status':status};
    xhttp.send(JSON.stringify(dict));
}
function changeStatus() {
    var row = event.target.parentNode; // get the row element
    row = row.parentNode;
    console.log(row);
    var idCell = row.cells[1];
    console.log(idCell);
    var statusCell = row.cells[2]; // get the cell containing the status
    var status = statusCell.innerHTML; // get the current status

    if (status === "Active") {
        statusCell.innerHTML = "Inactive"; // change the status
    } else {
        statusCell.innerHTML = "Active"; // change the status back
    }
    // updateStatusInStorage(idCell.innerHTML, statusCell.innerHTML);
    updateStatusInStorage(idCell.innerHTML,statusCell.innerHTML);
}
function update() {
    var row = event.target.parentNode; // get the row element
    row = row.parentNode;
    console.log(row);
    var idCell = row.cells[1];
    var id = idCell.innerHTML;
    // window.location.href = "{% url 'our_students/update_student/' %}" + id + "/";
    window.location.href = "/our_students/update_student/"+id+"/";
}
function department(){
    var row = event.target.parentNode; // get the row element
    row = row.parentNode;
    console.log(row);
    var idCell = row.cells[1];
    var id = idCell.innerHTML;
    window.location.href = "/our_students/assign_dep/"+id+"/";
}
// search();
