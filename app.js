document.addEventListener('DOMContentLoaded', (event) => {
 
    const emailWrapper = document.getElementById("emailWrapperw");
    const emailInput = document.getElementById("emaillw");

    const emailClearIcon = document.getElementById("hyvcuniw");
    const passwordWrapper = document.getElementById("passwordWrapperw");
    const passwordInput = document.getElementById("passlw");
    const passwordClearIcon = document.getElementById("hyvchyvc");
    
    const togglePasswordIcon = document.getElementById("closeeyee");





    const togglePasswordIconn = document.getElementById("closeeyhhhe");

    // Email input event listeners
    emailInput.addEventListener('focus', () => {
        emailWrapper.classList.add('active');
    });

    emailInput.addEventListener('blur', () => {
        emailWrapper.classList.remove('active');
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

    // Password input event listeners
    passwordInput.addEventListener('focus', () => {
        passwordWrapper.classList.add('active');
    });

    passwordInput.addEventListener('blur', () => {
        passwordWrapper.classList.remove('active');
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
    togglePasswordIconn.addEventListener("click", () => {
        if (document.getElementById("passhjvhvls").type === 'password') {
            document.getElementById("passhjvhvls").type = "text";
            togglePasswordIconn.classList.remove("ri-eye-close-fill");
            togglePasswordIconn.classList.add("ri-eye-line");
        } else {
            document.getElementById("passhjvhvls").type = "password";
            togglePasswordIconn.classList.remove("ri-eye-line");
            togglePasswordIconn.classList.add("ri-eye-close-fill");
        }
    });

    document.getElementById("namellolkihg").addEventListener('focus', () => {
        document.getElementById("nameWrapperlop").classList.add('active');
    });

    document.getElementById("namellolkihg").addEventListener('blur', () => {
        document.getElementById("nameWrapperlop").classList.remove('active');
    });


    document.getElementById("emaillskbiuv").addEventListener('focus', () => {
        document.getElementById("emailWrapperskjbb").classList.add('active');
    });

    document.getElementById("emaillskbiuv").addEventListener('blur', () => {
        document.getElementById("emailWrapperskjbb").classList.remove('active');
    });


    document.getElementById("passhjvhvls").addEventListener('focus', () => {
        document.getElementById("passwordWrappuguers").classList.add('active');
    });

    document.getElementById("passhjvhvls").addEventListener('blur', () => {
        document.getElementById("passwordWrappuguers").classList.remove('active');
    });


    document.getElementById("passll").addEventListener('focus', () => {
        document.getElementById("birthWrapper").classList.add('active');
    });

    document.getElementById("passll").addEventListener('blur', () => {
        document.getElementById("birthWrapper").classList.remove('active');
    });
   


    document.getElementById("emaillw").addEventListener('input', () => {
        if (document.getElementById("emaillw").value) {
            document.getElementById("hyvcuniw").style.display = 'block';
        } else {
            document.getElementById("hyvcuniw").style.display = 'none';
        }
    });
    document.getElementById("passlw").addEventListener('input', () => {
        if (document.getElementById("passlw").value) {
            document.getElementById("hyvchyvc").style.display = 'block';
        } else {
            document.getElementById("hyvchyvc").style.display = 'none';
        }
    });
    document.getElementById("namellolkihg").addEventListener('input', () => {
        if (document.getElementById("namellolkihg").value) {
            document.getElementById("ljkjjjjjgctxf").style.display = 'block';
        } else {
            document.getElementById("ljkjjjjjgctxf").style.display = 'none';
        }
    });

    ljkjjjjjgctxf.addEventListener("click", () => {
        namellolkihg.value = "";
        ljkjjjjjgctxf.style.display = 'none';
    });











    document.getElementById("emaillskbiuv").addEventListener('input', () => {
        if (document.getElementById("emaillskbiuv").value) {
            document.getElementById("ljkflhvuyvyvyjkf").style.display = 'block';
        } else {
            document.getElementById("ljkflhvuyvyvyjkf").style.display = 'none';
        }
    });

    document.getElementById("ljkflhvuyvyvyjkf").addEventListener("click", () => {
    document.getElementById("emaillskbiuv").value = "";
        document.getElementById("ljkflhvuyvyvyjkf").style.display = 'none';
    });






    document.getElementById("passhjvhvls").addEventListener('input', () => {
        if (document.getElementById("passhjvhvls").value) {
            document.getElementById("hhvhhhihy074").style.display = 'block';
        } else {
            document.getElementById("hhvhhhihy074").style.display = 'none';
        }
    });

    document.getElementById("hhvhhhihy074").addEventListener("click", () => {
    document.getElementById("passhjvhvls").value = "";
        document.getElementById("hhvhhhihy074").style.display = 'none';
    });
    emailClearIcon.addEventListener("click", () => {
        document.getElementById("passhjvhvls").value = "";
        document.getElementById("hhvhhhihy074").style.display = 'none';
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

     

    document.getElementById('lmlm').addEventListener('click', function() {
        console.log("fast");
        document.getElementById('fanImage').style.animation = "rotateFan 1s linear infinite";
        document.getElementById('openfan').innerText = "Fan Types";
    });

    document.getElementById('stopf').addEventListener("click", () => {
        document.getElementById('fanImage').style.animation = "none";
        document.getElementById('openfan').innerText = "Open Fan";
    });
    const productsPerPage = 5;
    let currentPage = 1;
    let totalProducts = 0;
    let currentCategory = '';  // Add this to keep track of the current category
    
    async function fetchProducts(page, category) {
        const skip = (page - 1) * productsPerPage;
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=${productsPerPage}&skip=${skip}&select=title,price,thumbnail,rating`);
            const data = await response.json();
            totalProducts = data.total;
            return data.products;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    }
    
    function displayProducts(products) {
        const cateoppagepokolo = document.getElementById("cateoppagepokolo");
        cateoppagepokolo.innerHTML = '';
    
        products.forEach((product) => {
            cateoppagepokolo.innerHTML += `
            <div id="cardf6ygy">
                <img src="${product.thumbnail}" alt="${product.title}">
                <h2>${product.title}</h2>
                <h3>Rs.${product.price}</h3>
                <h5>Rating: ${product.rating}</h5>
            </div>
            `;
        });
    }
    
    function renderPagination() {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        const pagination = document.querySelector('.pagination');
        pagination.innerHTML = '';
    
        const prevDisabled = currentPage === 1 ? 'disabled' : '';
        const nextDisabled = currentPage === totalPages ? 'disabled' : '';
    
        pagination.innerHTML += `<button onclick="goToPage(${currentPage - 1})" ${prevDisabled}>Previous</button>`;
        pagination.innerHTML += `<span id="optext">Page ${currentPage} of ${totalPages}</span>`;
        pagination.innerHTML += `<button onclick="goToPage(${currentPage + 1})" ${nextDisabled}>Next</button>`;
    }
    
    async function goToPage(page) {
        if (page < 1 || page > Math.ceil(totalProducts / productsPerPage)) {
            return;
        }
        currentPage = page;
        const products = await fetchProducts(currentPage, currentCategory);
        displayProducts(products);
        renderPagination();
    }
    
    // Make goToPage globally accessible
    window.goToPage = goToPage;
    
    // Adding click event listener to category elements
    const categoryElements = document.querySelectorAll(".samcate");
    
    categoryElements.forEach(element => {
        element.addEventListener("click", async (e) => {
            const h5Element = e.currentTarget.querySelector("h5");
            document.querySelector("body").style.backgroundColor="rgb(255, 247, 247)"
            if (h5Element) {
                const categoryName = h5Element.textContent;
                console.log("Selected category:", categoryName);
    
                currentCategory = categoryName;  // Set the current category
                currentPage = 1;
                const products = await fetchProducts(currentPage, currentCategory);
                displayProducts(products);
                renderPagination();
    
                const cateoppage = document.getElementById("cateoppage");
                cateoppage.style.display = "flex";
                document.getElementById("popup").style.display = "none";
                loginform.style.display = "none";
                signform.style.display = "none";
                document.querySelector(".fullpages").style.display = "none";
                document.title = categoryName;
                document.getElementById("cateoppageh1").innerText = categoryName;
            }
        });
    });
    
    // Adding click event listener to go back button
    const back = document.getElementById("back");
    back.addEventListener("click", () => {
        const cateoppage = document.getElementById("cateoppage");
        cateoppage.style.display = "none";
        document.getElementById("popup").style.display = "flex";
        loginform.style.display = "none";
        signform.style.display = "none";
        document.querySelector(".fullpages").style.display = "block";
        document.title = "Daraz";
        document.querySelector("body").style.backgroundColor="white"
    });
    
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
    


