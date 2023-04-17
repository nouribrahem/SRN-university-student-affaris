function getActive(){
    
    let data = window.localStorage.getItem("students");
    if(data != null){
        arr =JSON.parse(data);
    }
    // localStorage.arr = JSON.stringify(data);
    arr = arr.filter((element)=>{return element.status=='active'});
    return arr;
    
}
function showSearch(...arr){
    // console.log(arr);
    var tbl = document.getElementById("students");
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
            "&id=" +arr[i].ID + "&level="+ arr[i].level + "&department=" + arr[i].department;
            var linkUpdate = "UpdateStudent.html?" + "&id=" +arr[i].ID;
            cell_1.innerHTML = arr[i].fname+  " " + arr[i].lname;
            cell_2.innerHTML = arr[i].ID;
            cell_3.innerHTML = arr[i].status;
            cell_4.innerHTML = arr[i].level;
            cell_5.innerHTML = arr[i].department;
            cell_6.innerHTML = '<div id="actions"><button id="status">Status</button><button id="assign">'+
            '<a href="' + linkUpdate+'" style="color:white;">Update<a/></button><button id="update">'+
            '<a href="'+linkAssignDep +'"  style="color:white;">Assign Department<a/></button></div>';
    
        }
        
    }
    console.log(arr);
}
var found=[];

function search(){
    var arr = getActive();
    var isfound;
    var data = document.getElementById('searchbar').value;
    if(/^[a-zA-Z]+$/.test(data))
    {
        for(var i =0;i<arr.length;i++){
            if(data == arr[i].fname || data == arr[i].lname){
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
        if(!isfound){
            window.alert("no matches!");
        }
    }
    showSearch(found);
    
}
// search();
document.getElementById("submit").addEventListener("click", search);