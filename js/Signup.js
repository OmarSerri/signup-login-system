let firstNameInput = document.querySelector('#firstNameInput')
let lastNameInput = document.querySelector('#lastNameInput')
let emailInput = document.querySelector('#emailInput')
let passwordInput = document.querySelector('#passwordInput')
let generalMessage = document.querySelector('#generalMessage')
let emailMessage = document.querySelector('#emailMessage')
let signUpBtn = document.querySelector('#signUpBtn')
let dataContainer

firstNameInput.addEventListener("keyup", validateFirstName);
lastNameInput.addEventListener("keyup", validateLastName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);

if (localStorage.getItem('dataArray') !=null)
{
    dataContainer = JSON.parse(localStorage.getItem('dataArray'))
}
else
{
    dataContainer = []
}

function emptyForms()
{
    if (firstNameInput.value == "" || lastNameInput.value == "" || emailInput.value == "" || passwordInput.value == "" )
    {
        return false
    }
    else
    {
        return true
    }
}

function existForms()
{
    for (let i = 0; i < dataContainer.length; i++)
    {
        if(emailInput.value.toLowerCase() == dataContainer[i].email.toLowerCase())
        {
            return false
        }
        else
        {
            return true
        }
    }
}

signUpBtn.addEventListener( "click" , function signUp()
{
    if (emptyForms() == false)
    {
        generalMessage.innerHTML = "Sorry we can't find your account"
        return false
    }
    let data =
    {
        firstName: firstNameInput.value,
        lastName : lastNameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    if (existForms() == false)
    {
        emailMessage.innerHTML= "The email has been already taken"
        clearForm()

        return false
    }
    else
    {
        dataContainer.push(data)
        localStorage.setItem('dataArray' , JSON.stringify(dataContainer) )
        clearForm()
        window.open('Login.html')
        window.close()
    }
})

function clearForm()
{
    firstNameInput.value = ""
    lastNameInput.value = ""
    emailInput.value = ""
    passwordInput.value = ""
}

function validateEmail()
{
    var regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    if (regex.test(emailInput.value) == true)
    {
        emailInput.classList.replace('is-invalid' , 'is-valid')
        return true;
    }
    else
    {
        emailInput.classList.add('is-invalid')
        return false;
    }
}

function validatePassword()
{
    var regex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
    if (regex.test(passwordInput.value) == true)
    {
        passwordInput.classList.replace('is-invalid' , 'is-valid')
        return true;
    }
    else
    {
        passwordInput.classList.add('is-invalid')
        return false;
    }
}

function validateFirstName()
{
    var regex = /^[A-Z][a-z]{2,8}$/
    if (regex.test(firstNameInput.value) == true)
    {
        firstNameInput.classList.replace('is-invalid' , 'is-valid')
        return true;
    }
    else
    {
        firstNameInput.classList.add('is-invalid')
        return false;
    }
}
function validateLastName()
{
    var regex = /^[A-Z][a-z]{2,8}$/
    if (regex.test(lastNameInput.value) == true)
    {
        lastNameInput.classList.replace('is-invalid' , 'is-valid')
        return true;
    }
    else
    {
        lastNameInput.classList.add('is-invalid')
        return false;
    }
}