var id;
var password;
var passwordCheck;
var nameInput;
var email;
var birth;
var sex;
var sexChecked;
var phone;
var phone2;
var phone3;


window.onload = function() {
    id = document.getElementById("id_input");
    password = document.getElementById("password_input");
    passwordCheck = document.getElementById("password_check");
    nameInput = document.getElementById("name_input");
    email = document.getElementById("email_input");
    birth = document.getElementById("birth_input");
    sex = document.getElementsByName("sex");
    phone1 = document.getElementById("phone_number1");
    phone2 = document.getElementById("phone_number2");
    phone3 = document.getElementById("phone_number3");
}

function signup() {
    if(id.length < 4 || id.length > 12 || id.value == "") {
        alert("id는 4자 이상 12자 이하로만 입력하세요"); 
        console.log("id 입력 실패");
    } else if(password.length < 4 || password.length > 12 || password.value == "") {
        alert("password는 4자 이상 12자 이하로만 입력하세요.");
        console.log("패스워드 입력 실패");
    } else if(passwordCheck.length < 4 || passwordCheck.length > 12 || passwordCheck.value == "") {
        alert("password는 4자 이상 12자 이하로만 입력하세요.");
        console.log("패스워드 확인 입력 실패");
    } else if(password.value != passwordCheck.value) {
        alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
        console.log("비밀번호 체크 실패");
    } else if(nameInput.length < 2 || nameInput.length > 10 || nameInput.value == "") {
        alert("이름은 2자 이상 10자 이하로만 입력하세요.");
        console.log("이름 입력 실패");
    } else if(email.length < 5 || email.length > 30 || email.value =="") {
        alert("이메일은 5자 이상 30자 이하로만 입력하세요.");
        console.log("아이디 입력 실패");
    } else {
        alert("회원가입 성공");
        for(var i = 0; i < sex.length; i++) {
            if(sex[i].checked == true) {
                sexChecked = sex[i].value;
            }
        }
        alert("아이디 : " + id.value + "\n비밀번호 : " + password.value + "\n이름 : " + nameInput.value 
        + "\n이메일 : " + email.value + "\n생년월일 : " + birth.value 
        + "\n성별 : " + sexChecked + "\n전화번호 : " + phone1.value + "-" + phone2.value + "-" + phone3.value);
        location.href = "index.html";
        console.log("성공");
    }
}