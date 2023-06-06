var form = document.getElementById("dep_form");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function updateDep() {
    var id = document.getElementById('id').value;
    var level = document.getElementById('level').value;
    console.log(level);
    var newDep = document.getElementById("department").value;
    console.log(newDep);
    if (level < 3 ) {
        messageText = 'Level should be at least 3';
        bg_color = 'rgba(120,0, 0, 0.5)'
        showMessage(messageText, 'red',bg_color);
        return;
    }
    else {
        var xhttp = new XMLHttpRequest();
        var csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        xhttp.open('POST', '/our_students/update-department/' + id + '/', true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('X-CSRFToken', csrfToken);
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
                response = JSON.parse(xhttp.responseText);
                messageText = response.message;
                bg_color = 'rgba(0, 120, 0, 0.5)'
                showMessage(messageText, 'green',bg_color);
            }
        };

        var data = {
            'department': newDep,
        };
        console.log(data)

        xhttp.send(JSON.stringify(data));
    }
}

function showMessage(messageText, color, bg_color) {
    var message = document.getElementById('message');
    message.innerHTML = messageText;
    message.style.display = 'block';
    message.style.color = 'white';
    message.style.border = '2px solid ' + color;
    message.style.borderRadius = '10px';
    message.style.background = bg_color;
    message.style.padding = '20px';
    message.style.animation = 'fadeOut 6s forwards';

    setTimeout(function () {
        message.style.display = 'none';
        message.style.animation = '';
    }, 6000);
}

