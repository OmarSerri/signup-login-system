let emailInput = document.querySelector('#emailInput')
let passwordInput = document.querySelector('#passwordInput')
let generalMessage = document.querySelector('#generalMessage')
let logInBtn = document.querySelector('#logInBtn')
let dataContainer 

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
    if(emailInput.value == "" || passwordInput.value == "" )
    {
        return false
    }
    else
    {
        return true
    }
}

logInBtn.addEventListener('click' , function LogIn()
{
    if (emptyForms == false)
    {
        generalMessage.innerHTML = "Sorry we can't find your account"
        return false
    }
    else
    {
        for (let i = 0; i < dataContainer.length; i++)
        {
            if(emailInput.value.toLowerCase() == dataContainer[i].email.toLowerCase() &&
            passwordInput.value.toLowerCase() == dataContainer[i].password.toLowerCase())
            {
                generalMessage.innerHTML = "Your login is successful"
                clearForm()
                window.open("home.html")
                localStorage.setItem('firstName' , dataContainer[i].firstName)
                localStorage.setItem('lastName' , dataContainer[i].lastName)
                window.close()
            }
            else
            {
                generalMessage.innerHTML= "Wrong email or password"
                emailInput.classList.add('is-invalid')
                passwordInput.classList.add('is-invalid')
            }
        }     
    }
})

function clearForm()
{
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
