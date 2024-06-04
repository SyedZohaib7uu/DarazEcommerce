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
document.getElementById("uqgyuikskihys8ixkgwi").addEventListener("click",()=>{
    loginform.style.display="none"
    signform.style.display="block"
    signform.style.display="flex"
    signform.style.justifyContent="center"
    document.title="Daraz-SignUp"
    document.getElementById("popup").style.display="none"
})


document.getElementById("onclick").addEventListener("click",()=>{
    
    loginform.style.display="block"
    signform.style.display="none"
    loginform.style.display="flex"
    loginform.style.justifyContent="center"
    document.title="Daraz-Login"
    document.getElementById("popup").style.display="none"
})



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

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



    var remoad = document.getElementById("remoad")
    remoad.addEventListener("click",()=>{
       var rtdcxf= document.getElementById("popup")
       rtdcxf.style.display="none"
       remoad.disabled =true
remoad.classList.add("bg-warning")
remoad.classList.remove("bg-success")
    })



    
})


var imk = ["https://icms-image.slatic.net/images/ims-web/04ad7559-e98d-4445-8781-70cfdf4ca938.jpg_1200x1200.jpg","https://icms-image.slatic.net/images/ims-web/495ae49c-b1c1-437e-ac0e-788a0123959d.jpeg","https://icms-image.slatic.net/images/ims-web/e1111741-2a26-4c79-bbdf-f66cc5a5ecc0.png","https://icms-image.slatic.net/images/ims-web/7abefc2d-0044-490c-896f-4b83c42a3e9b.jpeg",]
// const imk = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your actual image URLs

for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        // Select a random image for each iteration
        const math = imk[Math.floor(Math.random() * imk.length)];

        // console.log(math);
        document.getElementById("popup").innerHTML = `
            <div id="opgt" class="papapop">
                <div class="pophe">
                    <p></p>
                    <p style="background:linear-gradient(90deg,#00dbde,#fc00ff);
                               -webkit-background-clip:text;
                               -webkit-text-fill-color:transparent;
                               font-size: 25px;
                               font-weight: 700;">
                        Ads
                    </p>
                    <i style="font-size: 38px; cursor: pointer; color: black;" id="oplopiikopm" class="ri-close-line"></i>
                </div>
                <div class="pobo">
                    <img id="poplop" src="${math}" alt="">
                </div><br>
            </div>
        `;
        var varr = document.getElementById("oplopiikopm");
        varr.addEventListener("click", () => {
            console.log("lop");
            document.getElementById("opgt").style.display = "none";
            console.log("lop");
        })
    }, i * 5000); 
    // Each ad appears 5 seconds after the previous one




}

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
    var ub = document.getElementById("cokolop")
    document.title="Daraz-Offline"
    oiuytr.style.display="block"
    oiuytr.style.display="flex"
    document.getElementById("popup").style.display="none"
    oiuytr.style.justifyContent="center"   
    oiuytr.style.alignItems="center"   
    
 
    var werfghnbvcvbnmmnbgtyhb= document.getElementById("ssdsdsd")
    werfghnbvcvbnmmnbgtyhb.style.display="none"
    var signform = document.getElementById("qwetvdtc")
    var loginform = document.getElementById("igujsz")
    
    
    loginform.style.display="none"
}


