function getActive(){
    
    let data = window.localStorage.getItem("students");
    if(data != null){
        arr =JSON.parse(data);
    }
    localStorage.arr = JSON.stringify(data);
    arr = arr.filter((element)=>{return element.status=='Active'});
    return arr;
}
function showSearch(arr){
    // console.log(arr);
    var tbl = document.getElementById("students");
    var table = document.getElementById("students");
    var rowCount = table.rows.length;

    for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
    }
    if(tbl){
        for(let i = 0; i < arr.length; i++){
            var row = tbl.insertRow();
            var cell_1 = row.insertCell();
            var cell_2 = row.insertCell();
            var cell_3 = row.insertCell();
            var cell_4 = row.insertCell();
            var cell_5 = row.insertCell();
            var cell_6 = row.insertCell();
            
            var linkAssignDep = "AssignDepartment.html?" + "name=" + arr[i].name + 
            "&id=" +arr[i].ID + "&level="+ arr[i].level + "&department=" + arr[i].dep;
            var linkUpdate = "UpdateStudent.html?" + "&id=" +arr[i].ID;
            cell_1.innerHTML = arr[i].fname+  " " + arr[i].lname;
            cell_2.innerHTML = arr[i].ID;
            cell_3.innerHTML = arr[i].status;
            cell_4.innerHTML = arr[i].level;
            cell_5.innerHTML = arr[i].dep;
            cell_6.innerHTML = '<div id="actions"><button id="status">Status</button><button id="assign">'+
            '<a href="' + linkUpdate+'" style="color:white;">Update<a/></button><button id="update">'+
            '<a href="'+linkAssignDep +'"  style="color:white;">Assign Department<a/></button></div>';
    
        }
        
    }
    // console.log(arr);
}


function search(){
    var found=[];
    var arr = getActive();
    var isfound = false;
    var data = document.getElementById('searchbar').value;
    var lowdata = data.toLowerCase();
    
    if(/^[a-zA-Z]+$/.test(data))
    {
        console.log(lowdata);
        for(var i =0;i<arr.length;i++){
            var lowfname = arr[i].fname.toLowerCase();
            var lowlname = arr[i].lname.toLowerCase();
            console.log(lowfname,lowlname, lowdata);
            if(lowdata == lowfname || lowdata == lowlname){
                found.push(arr[i]);
                isfound = true;
            }    
        }  
    }
    else if(/^\d+$/.test(data)){
        for(var i =0;i<arr.length;i++){
            if(data == arr[i].ID){
                found.push(arr[i]);
                isfound = true;
                break;
            }    
        }
        
    }
    if(!isfound){
        window.alert("No matches found!");
    }
    showSearch(found);
    
}
// search();
document.getElementById("submit").addEventListener("click", search);