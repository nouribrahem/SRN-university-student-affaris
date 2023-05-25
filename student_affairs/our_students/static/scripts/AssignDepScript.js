var form = document.getElementById("dep_form");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function updateDep() {
    

    var id = document.getElementById('id').value;
    var level = document.getElementById('level').value;
    console.log(level);
    var newDep = document.getElementById("department").value;
    console.log(newDep);
    if (level < 3) {
        var message = document.getElementById('message');
        message.innerHTML = 'Level should be at least 3';
        message.style.display = 'block';
        message.style.color = 'white';
        message.style.border =  '2px solid red';
        message.style.borderRadius = '10px';
        message.style.background = 'rgba(128, 0, 0, 0.5)'; 
        message.style.padding  = '20px';  
        return;
    }
    else {
        var xhttp = new XMLHttpRequest();
        var csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        xhttp.open('POST', '/students/update-department/' + id + '/', true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('X-CSRFToken', csrfToken);
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
                var message = document.getElementById('message');
                response = JSON.parse(xhttp.responseText);
                message.innerHTML = response.message;
                message.style.display = 'block';
                message.style.color = 'white';
                message.style.border = '2px solid green';
                message.style.borderRadius = '10px';
                message.style.background = 'rgba(0, 120, 0, 0.5)'; 
                message.style.padding  = '20px';  
                message.scrollIntoView({ behavior: 'smooth' });
            }
        };

        var data = {
            'department': newDep,
        };
        console.log(data)

        xhttp.send(JSON.stringify(data));
    }
 


}



