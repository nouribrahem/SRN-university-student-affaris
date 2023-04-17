function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const users = [
      { username: "rawantarek", password: "Pass1&" },
      { username: "shadenali", password: "Pass2$" },
      { username: "nahlahesham", password: "Pass3#" }
    ];
    for (var i = 0; i < users.length; i++) {
      if (username == users[i].username && password == users[i].password) {
        return true;
      }
    }
    alert("Invalid username or password!");
    return false;
  }
  