let loginBtn = document.querySelector('#loginbtn');
let signUpBtn = document.querySelector('#sign-up-btn');
let userInputBox = document.querySelector("#user");
let passWordInputBox = document.querySelector('#Passs');
let signInUserNameBox = document.querySelector('#userSign-in');
let signInUserPasswordBox = document.querySelector('#PasssSign-in');
let signInRegisterBtn = document.querySelector('#register-btn');
let goToLoginBtn = document.querySelector('#gotToLogin');
let data = [
    {
        username:"Vinayak Upadhay",
        password:"1234@Hello"
    },
    {
        username:"Priyanka Thapa",
        password:"1234@Hi"
    },
    {
        username:"Pankaj Oberoi",
        password:"1234@HelloMitron"
    },
    {
        username:"Anonymous",
        password:"1234@Heee"
    }
];

loginBtn.addEventListener('click',()=>{
    let username = userInputBox.value;
    let password = passWordInputBox.value;
    let flag = validatepassWord(username,password);
    userInputBox.value = "";
    passWordInputBox.value = "";
    if(flag)
    {
        document.querySelector('#error').style.display = "none";
        document.querySelector('#success').style.display = "block";
        document.querySelector('.login-main').style.display = "block";
        document.querySelector('.sign-page').style.display = "none";
    }
    else
    {
        document.querySelector('#success').style.display = "none";
        document.querySelector('#error').style.display = "block";
        signUpBtn.addEventListener('click',()=>
        {
            getRegisterd(username,password);
        })
    }
});


function validatepassWord(username,password)
{
    let flag = false;
    data.forEach((user)=>{
        if(user.password === password && user.username === username)
        {
            flag = true;
        }
    })
    return flag;
}

function getRegisterd(username,password)
{
    document.querySelector('.login-main').style.display = "none";
    document.querySelector('.sign-page').style.display = "block";
    signInRegisterBtn.addEventListener('click',()=>
    {
        let signInUserName = signInUserNameBox.value;
        let signInUserPassword = signInUserPasswordBox.value;
        let userData = {
            username:signInUserName,
            password:signInUserPassword
        };
        data.push(userData);
        document.querySelector('#not-registered').style.display = "none";
        document.querySelector('#regesterd-now').style.display = "block";
        document.querySelector('#gotToLogin').style.display = "block";
        goBackToLogin();
    })
}

function goBackToLogin()
{
    goToLoginBtn.addEventListener('click',()=>
    {
        userInputBox.value = "";
        passWordInputBox.value = "";
        document.querySelector('.login-main').style.display = "block";
        document.querySelector('#error').style.display = "none";
        document.querySelector('.sign-page').style.display = "none";
    })
    
}