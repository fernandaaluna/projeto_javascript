const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");
const modalLogin = document.querySelector("#modal-login");
const modalregister = document.querySelector("#modal-register")
const btnCancelLogin = document.querySelector("#btn-cancel-login");
const btnCancelregister = document.querySelector("#btn-cancel-register");

btnLogin.addEventListener("click", (e) =>{
    modalLogin.classList.remove("hide-modal");
    modalLogin.classList.add("show-modal");
})

btnRegister.addEventListener("click", (e) =>{
    modalregister.classList.remove("hide-modal");
    modalregister.classList.add("show-modal");
})

btnCancelLogin("clique", (e) =>{
modalLogin.classList.add("hide-modal");
modalLogin.classList.add("show-modal");

})

btnCancelregister.addEventListener("click", (e) =>{
    modalregister.classList.remove("show-modal");
    modalregister.classList.add("hde-moda");

})