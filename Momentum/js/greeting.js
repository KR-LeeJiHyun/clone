const HIDDEN_CLASS = "hidden";
const USER = "username";

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function paintGreeting(username){
    loginForm.classList.add(HIDDEN_CLASS);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

function onLoginSubmit(event){
    const username = loginInput.value;

    //새로고침을 방지하기 위한 preventDefault
    event.preventDefault();
    localStorage.setItem(USER, username);

    paintGreeting(username);
}


function init(){
    const savedUsername = localStorage.getItem(USER);

    if(savedUsername !== null){
        paintGreeting(savedUsername);
    } else {
        //addEventListener가 실행시키는 함수의 첫번째 인자는 항상 발생된 event의 정보
        loginForm.addEventListener("submit", onLoginSubmit);
    }
}

init();