// all inputs



var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var btnLogin= document.getElementById('btnLogin');
var userName= localStorage.getItem("userWelcome");

var user=[];

if(localStorage.getItem('user')!=null){
    user= JSON.parse(localStorage.getItem('user')) 
}
else{
    user=[];
}



function add() {
    isExist();

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "" ) {
      document.getElementById("required").innerHTML=` <p class="text-center text-white">All inputs is required</p>`
       
    }
    else{
        if(isExist()==false){
            var obj ={
                name: signupName.value,
                email:signupEmail.value,
                password:signupPassword.value
            }
            user.push(obj);
           
            localStorage.setItem('user', JSON.stringify(user));
            var success= document.getElementById("success");
            success.classList.replace("d-none","d-block");
            var signIn= document.getElementById("signIn");
            signIn.classList.replace("d-none" ,"d-block");

        }
       else{
        var exist=  document.getElementById("exist");
        exist.classList.replace("d-none" ,"d-block");

       }

    }
}
function isExist(){
    var exist=  document.getElementById("exist");
    for(var i=0 ; i< user.length; i++ )
        if(user[i].name.toLowerCase()==signupName.value.toLowerCase() ||
    user[i].email.toLowerCase()==signupEmail.value.toLowerCase()
){
    exist.classList.replace("d-none" ,"d-block");
    return true;
        }
        else{
            return false;
        }
    
}


function login(){
    var signinEmail = document.getElementById('signinEmail');
    var signinPassword = document.getElementById('signinPassword');
    if(signinEmail.value==""||signinPassword.value=="" ){
         document.getElementById("required").innerHTML=` <p class="text-center text-white">fill the inputs first</p>`
         return false;

    }
    for(var i =0 ; i<user.length;i++){
        if(user[i].email.toLowerCase()==signinEmail.value.toLowerCase() &&
    user[i].password.toLowerCase()==signinPassword.value.toLowerCase()){
        localStorage.setItem("userWelcome",user[i].name)
        btnLogin.setAttribute("href","home.html")


        }
        else{
            var incorrect= document.getElementById("incorrect");
            incorrect.classList.replace("d-none","d-block")
        }

    }
}

function displayWelcome(){
    document.getElementById("userName").innerHTML="Welcome " +  userName;
}

function logout(){
    localStorage.removeItem("userWelcome")
}

