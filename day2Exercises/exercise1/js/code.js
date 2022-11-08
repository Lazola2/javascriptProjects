// input
let userName = document.querySelector("#name");
let userSurname = document.querySelector("#surname");
let userSalary = document.querySelector("#salary");
let btnSubmit = document.querySelector("#btnSubmit");

//  input and processing
btnSubmit.addEventListener('click', () => {
    if (!(userName.value && userSurname.value && userSalary.value)) return
    let totalSalary = parseInt(userSalary.value) + 500 ;
    let output = `Name: ${userName.value} \nSurname: ${userSurname.value}\nSalary: R${totalSalary}`;
    alert(output);
});







