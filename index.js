var id;
var password;

window.onload = function() {
    id = document.getElementById("id_input");
    password = document.getElementById("password_input");  
    success = document.getElementById("login_success");
}

function login() {
    if(id.value == "cat" && password.value == "1234") {
        alert("로그인 성공");
        success.innerHTML = id.value + "회원님 반갑습니다.";
    } else {
        alert("로그인 실패");
    }
    alert("id : " + id.value 
    + " password : " + password.value);   
}
