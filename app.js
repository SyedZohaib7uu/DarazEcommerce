document.addEventListener('DOMContentLoaded', (event) => {
    const nameWrapper = document.getElementById("nameWrapperlop");
    const nameInput = document.getElementById("namellolkihg");
    const emailWrapper = document.getElementById("emailWrapperskjbb");
    const emailInput = document.getElementById("emaillskbiuv");
    const passwordWrapper = document.getElementById("passwordWrappuguers");
    const passwordInput = document.getElementById("passhjvhvls");
    const emailClearIcon = document.getElementById("ljkflhvuyvyvyjkf");
    const passwordClearIcon = document.getElementById("hhvhhhihy074");
    const nameci = document.getElementById("ljkjjjjjgctxf");
    const togglePasswordIcon = document.getElementById("closeeyhhhe");

    nameInput.addEventListener('focus', () => {
        nameWrapper.classList.add('active');
    });

    nameInput.addEventListener('blur', () => {
        nameWrapper.classList.remove('active');
    });

    emailInput.addEventListener('focus', () => {
        emailWrapper.classList.add('active');
    });

    emailInput.addEventListener('blur', () => {
        emailWrapper.classList.remove('active');
    });

    passwordInput.addEventListener('focus', () => {
        passwordWrapper.classList.add('active');
    });

    passwordInput.addEventListener('blur', () => {
        passwordWrapper.classList.remove('active');
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.value) {
            emailClearIcon.style.display = 'block';
        } else {
            emailClearIcon.style.display = 'none';
        }
    });

    emailClearIcon.addEventListener("click", () => {
        emailInput.value = "";
        emailClearIcon.style.display = 'none';
    });
    nameInput.addEventListener('input', () => {
        if (nameInput.value) {
            nameci.style.display = 'block';
        } else {
            nameci.style.display = 'none';
        }
    });

    nameci.addEventListener("click", () => {
        nameInput.value = "";
        nameci.style.display = 'none';
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value) {
            passwordClearIcon.style.display = 'block';
        } else {
            passwordClearIcon.style.display = 'none';
        }
    });

    passwordClearIcon.addEventListener("click", () => {
        passwordInput.value = "";
        passwordClearIcon.style.display = 'none';
    });

    togglePasswordIcon.addEventListener("click", () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = "text";
            togglePasswordIcon.classList.remove("ri-eye-close-fill");
            togglePasswordIcon.classList.add("ri-eye-line");
        } else {
            passwordInput.type = "password";
            togglePasswordIcon.classList.remove("ri-eye-line");
            togglePasswordIcon.classList.add("ri-eye-close-fill");
        }
    });
    
document.title="Daraz-Login"

var signform = document.getElementById("qwetvdtc")
var loginform = document.getElementById("igujsz")

function a(){
    loginform.style.display="none"
    signform.style.display="block"
    signform.style.display="flex"
    signform.style.justifyContent="center"
    document.title="Daraz-SignUp"
}
function b(){
    loginform.style.display="block"
    signform.style.display="none"
    loginform.style.display="flex"
    loginform.style.justifyContent="center"
    document.title="Daraz-Login"
}


    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    // input
    // .addEventListener("input", function(){
    //     const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
    //     var clutter = "";
    //     filteredArray.forEach(function(obj){
    //         clutter += `<div class="res flex px-8 py-3">
    //         <i class="ri-search-line font-semibold mr-5"></i>
    //         <h3 class="font-semibold">${obj.name}</h3>
    //     </div>`
    //     })
    // document.querySelector(".searchdata").style.display = "block";
    //     document.querySelector(".searchdata").innerHTML = clutter;
    // })


})
// function onFunction() {
//     alert ("Your browser is working online.");
    
//   }
//   function offFunction() {
//       alert ("Your browser is working offline.");
//     }
//     // var agyaicihka=0
//     if(window.ononline){
    //         onFunction()
//         window.location.href="./index.html"
// // agyaicihka=1
// }
// else{
    //     offFunction()
    //     window.location.href="./offline.html"
    // }
    
function onFunction(){
    var oiuytr = document.getElementById("plojin")
    oiuytr.style.display="none"

    var signform = document.getElementById("qwetvdtc")
    var loginform = document.getElementById("igujsz")
    
    document.title="Daraz-Login"
    loginform.style.display="block"
    signform.style.display="none"
    loginform.style.display="flex"
    loginform.style.justifyContent="center"

   
}
function offFunction(){
    var oiuytr = document.getElementById("plojin")
    document.title="Daraz-Offline"
    oiuytr.style.display="block"
    oiuytr.style.display="flex"
    oiuytr.style.justifyContent="center"   
    oiuytr.style.alignItems="center"   
    var werfghnbvcvbnmmnbgtyhb= document.getElementById("ssdsdsd")
    werfghnbvcvbnmmnbgtyhb.style.display="none"
}

handleSearchFunctionality();