let fullName = document.querySelector('#fullName')
let logOutBtn = document.querySelector('#logOutBtn')
let firstName = localStorage.getItem('firstName')
let lastName = localStorage.getItem('lastName')

fullName = firstName + " " + lastName

document.getElementById('fullName').innerHTML = fullName

logOutBtn.addEventListener('click' , function logOut()
{
    window.open('Login.html')
})